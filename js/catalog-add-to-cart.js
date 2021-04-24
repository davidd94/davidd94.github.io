/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
define([
    'jquery',
    'mage/translate',
     'underscore', 
     'Magento_Ui/js/modal/modal',
    'jquery/ui'
], function($, $t,_, modal) {
    "use strict";

    $.widget('mage.catalogAddToCart', {

        options: {
            processStart: null,
            processStop: null,
            bindSubmit: true,
            minicartSelector: '[data-block="minicart"]',
            messagesSelector: '[data-placeholder="messages"]',
            productStatusSelector: '.stock.available',
            addToCartButtonSelector: '.action.tocart',
            addToCartButtonDisabledClass: 'disabled',
            addToCartButtonTextWhileAdding: '',
            addToCartButtonTextAdded: '',
            addToCartButtonTextDefault: ''
        },

        _create: function() {
            if (this.options.bindSubmit) {
                this._bindSubmit();
            }
        },

        _bindSubmit: function() {
            var self = this;
            this.element.on('submit', function(e) {
                e.preventDefault();
                self.submitForm($(this));
            });
        },

        isLoaderEnabled: function() {
            return this.options.processStart && this.options.processStop;
        },

        /**
         * Handler for the form 'submit' event
         *
         * @param {Object} form
         */
        submitForm: function (form) {
            var addToCartButton, self = this;

            if (form.has('input[type="file"]').length && form.find('input[type="file"]').val() !== '') {
                self.element.off('submit');
                // disable 'Add to Cart' button
                addToCartButton = $(form).find(this.options.addToCartButtonSelector);
                addToCartButton.prop('disabled', true);
                addToCartButton.addClass(this.options.addToCartButtonDisabledClass);
                form.submit();
            } else {
                self.ajaxSubmit(form);
            }
        },

        /**
         * @param {String} form
         */
        ajaxSubmit: function (form) {
            var self = this;

            $(self.options.minicartSelector).trigger('contentLoading');
            self.disableAddToCartButton(form);

            $.ajax({
                url: form.attr('action'),
                data: form.serialize(),
                type: 'post',
                dataType: 'json',

                /** @inheritdoc */
                beforeSend: function () {
                    if (self.isLoaderEnabled()) {
                        $('body').trigger(self.options.processStart);
                    }
                },

                /** @inheritdoc */
                success: function (res) {
                    var eventData, parameters, variant = [], productId, price;

                    productId = form.find('input[name="product"]').val();
                    price     = $(`.product-info-main [data-product-id="${productId}"] [data-price-type="finalPrice"]`).text();

                    form.find('.swatch-attribute-selected-option').each(function(){

                        variant.push($(this).contents()[0].data);
                    });

                    $(document).trigger('ajax:addToCart', {
                        'qty'     : parseInt(form.find('#qty').val()),
                        'sku'     : form.data().productSku,
                        'price'   : Number(price.replace(/[^0-9.-]+/g, "")),
                        'name'    : $('h1 [itemprop="name"]').text(),
                        'variant' : variant.join(' / '),
                        'form'    : form,
                        'response': res
                    });

                    if (res.backUrl && !$(".weltpixel-quickview-catalog-product-view").length) {

                        eventData = {
                            'form': form,
                            'redirectParameters': []
                        };
                        // trigger global event, so other modules will be able add parameters to redirect url
                        $('body').trigger('catalogCategoryAddToCartRedirect', eventData);

                        if (eventData.redirectParameters.length > 0) {
                            parameters = res.backUrl.split('#');
                            parameters.push(eventData.redirectParameters.join('&'));
                            res.backUrl = parameters.join('#');
                        }
                        window.location = res.backUrl;

                        return;
                    }
                    if (res.messages) {
                        $(self.options.messagesSelector).html(res.messages);
                    }
                    if (res.minicart) {
                        $(self.options.minicartSelector).replaceWith(res.minicart);
                        $(self.options.minicartSelector).trigger('contentUpdated');
                    }
                    if (res.product && res.product.statusText) {
                        $(self.options.productStatusSelector)
                            .removeClass('available')
                            .addClass('unavailable')
                            .find('span')
                            .html(res.product.statusText);
                    }

                    if (res.modal){
                        if (self.isLoaderEnabled()) {
                            $('body').trigger(self.options.processStop);
                        }

                        $('<div />').html(res.modal)
                        .modal({
                            autoOpen: true,
                            modalClass: 'success-popup add-to-cart-confirmation-modal',
                            buttons: [],
                            closed: function(){
                                $('.add-to-cart-confirmation-modal').remove();
                            }
                        });

                        self.enableAddToCartButton(form);
                    }
                }
            });
        },

        /**
         * @param {String} form
         */
        disableAddToCartButton: function(form) {
            var addToCartButtonTextWhileAdding = this.options.addToCartButtonTextWhileAdding || $t('Adding...');
            var addToCartButton = $(form).find(this.options.addToCartButtonSelector);
            addToCartButton.addClass(this.options.addToCartButtonDisabledClass);
            addToCartButton.find('span').text(addToCartButtonTextWhileAdding);
            addToCartButton.attr('title', addToCartButtonTextWhileAdding);
        },

        enableAddToCartButton: function(form) {
            var addToCartButtonTextAdded = this.options.addToCartButtonTextAdded || $t('Added');
            var self = this,
                addToCartButton = $(form).find(this.options.addToCartButtonSelector);

            addToCartButton.find('span').text(addToCartButtonTextAdded);
            addToCartButton.attr('title', addToCartButtonTextAdded);

            setTimeout(function() {
                var addToCartButtonTextDefault = self.options.addToCartButtonTextDefault || $t('Add to Cart');
                addToCartButton.removeClass(self.options.addToCartButtonDisabledClass);
                addToCartButton.find('span').text(addToCartButtonTextDefault);
                addToCartButton.attr('title', addToCartButtonTextDefault);
            }, 1000);
        }
    });

    return $.mage.catalogAddToCart;
});
