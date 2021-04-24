/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery',
    'Magento_Customer/js/customer-data',
    'Magento_GoogleTagManager/js/google-analytics-universal',
    'Magento_GoogleTagManager/js/google-analytics-universal-cart',
    'underscore',
    'jquery/ui'
], function ($, customerData, GoogleAnalyticsUniversal, GoogleAnalyticsUniversalCart, _) {
    'use strict';

    $.widget('mage.gtmCart', {
        options: {
            dlCurrencyCode: window.dlCurrencyCode || '',
            dataLayer: window.dataLayer || [],
            staticImpressions: window.staticImpressions || [],
            staticPromotions: window.staticPromotions || [],
            updatedImpressions: window.updatedImpressions || [],
            updatedPromotions: window.updatedPromotions || [],
            cookieAddToCart: '',
            cookieRemoveFromCart: window.cookieRemoveFromCart || '',
            temporaryEventStorage: [],
            blockNames: [],
            events: {
                AJAX_ADD_TO_CART: 'ajax:addToCart',
                AJAX_REMOVE_FROM_CART: 'ajax:removeFromCart'
            },
            actions: {}
        },

        /**
         * @inheritdoc
         *
         * @private
         */
        _create: function () {
            this.googleAnalyticsUniversalCart = new GoogleAnalyticsUniversalCart({
                dlCurrencyCode: this.options.dlCurrencyCode,
                dataLayer: this.options.dataLayer,
                cookieAddToCart: this.options.cookieAddToCart,
                cookieRemoveFromCart: this.options.cookieRemoveFromCart
            });
            this.googleAnalyticsUniversal = new GoogleAnalyticsUniversal({
                blockNames: this.options.blockNames,
                dlCurrencyCode: this.options.dlCurrencyCode,
                dataLayer: this.options.dataLayer,
                staticImpressions: this.options.staticImpressions,
                staticPromotions: this.options.staticPromotions,
                updatedImpressions: this.options.updatedImpressions,
                updatedPromotions: this.options.updatedPromotions
            });
            this.cartItemsCache = [];
            this._initActions();
            this._setListeners();
            this._setCartDataListener();
            this.googleAnalyticsUniversal.updatePromotions();
            this.googleAnalyticsUniversal.updateImpressions();
            this.googleAnalyticsUniversalCart.parseAddToCartCookies();
            this.googleAnalyticsUniversalCart.parseRemoveFromCartCookies();
            this.googleAnalyticsUniversalCart.subscribeProductsUpdateInCart();
            this.googleAnalyticsUniversalCart.listenMinicartReload();
            
        },

        /**
         * Initialize actions callback function.
         *
         * @private
         */
        _initActions: function () {
            var events = this.options.events;

            this.options.actions[events.AJAX_ADD_TO_CART] = function (data) {
                this.googleAnalyticsUniversal.addToCart(
                    data.sku,
                    data.name,
                    data.price,
                    data.qty,
                    data.variant
                );
            }.bind(this);

            this.options.actions[events.AJAX_REMOVE_FROM_CART] = function (product) {
                this.googleAnalyticsUniversal.removeFromCart(
                    product['product_sku'],
                    product['product_name'],
                    product['product_price_value'],
                    product.qty
                );
            }.bind(this);
        },

        /**
         * Finds and returns product by sku.
         *
         * @param {String} sku - product sku.
         *
         * @return {Object} product data.
         */
        getProductBySku: function (sku) {
            /**
             * Product search criteria.
             *
             * @param {Object} item
             *
             * @return {Boolean}
             */
            var searchCriteria = function (item) {
                    return item['product_sku'] === sku;
                },
                productFromCache = _.find(this.cartItemsCache, searchCriteria),
                productFromCart = _.find(customerData.get('cart')().items, searchCriteria);

            if (!productFromCache) {
                return _.extend({}, productFromCart, {
                    qty: 1
                });
            }

            if (productFromCache && productFromCart) {
                return _.extend({}, productFromCache, {
                    qty: productFromCart.qty - productFromCache.qty
                });
            }

            return productFromCache || productFromCart;
        },

        /**
         * Sets event to temporary storage.
         * When the cart data was updated this event will be executed.
         *
         * @param {String} type - Event type.
         * @param {String} sku - Product sku.
         *
         * @private
         */
        _setToTemporaryEventStorage: function (type, data) {
            this.options.temporaryEventStorage.push({
                type: type,
                data: data
            });
        },

        /**
         * Sets listener to the cart data.
         *
         * @private
         */
        _setCartDataListener: function () {
            customerData.get('cart').subscribe(function (data) {
                if (this.options.temporaryEventStorage.length) {
                    this._executeEvents();
                }

                this.cartItemsCache = data.items.slice();
            }.bind(this));
        },

        /**
         * Sets listener to the cart.
         *
         * @private
         */
        _executeEvents: function () {
            this.options.temporaryEventStorage.forEach(function (item, index) {
                this.options.actions[item.type](item.data);
                this.options.temporaryEventStorage.splice(index, 1);
            }.bind(this));
        },

        /**
         * Sets listener to cart events.
         *
         * @private
         */
        _setListeners: function () {
            /**
             * Wrapper function for handler.
             *
             * @param {Function} callback
             * @param {String} type - action type
             * @param {Object} event - jQuery event
             * @param {String} sku - product sku
             */
            var handlerWrapper = function (callback, type, event, data) {
                    callback.call(this, type, data);
                },
                self = this,
                opt = this.options;

            $(document)
                .on(
                    opt.events.AJAX_ADD_TO_CART,
                    handlerWrapper.bind(this, this._setToTemporaryEventStorage, opt.events.AJAX_ADD_TO_CART)
                )
                .on(
                    opt.events.AJAX_REMOVE_FROM_CART,
                    handlerWrapper.bind(this, this._setToTemporaryEventStorage, opt.events.AJAX_REMOVE_FROM_CART)
                );

            var disabledRFC = false;
            $('.action-delete-cart-item').on('click', function(){

                if (disabledRFC) return;
                disabledRFC = true;

                $('#shopping-cart-table').css('opacity', .3);

                var element = $(this);

                var product = self.getProductBySku(element.data('sku'));
                self.options.actions[self.options.events.AJAX_REMOVE_FROM_CART](product);

                //100ms delay for datalayer
                setTimeout(function(){
                    $('<a />').attr('data-post', JSON.stringify(element.data('post-json'))).appendTo('body').hide().click();
                }, 100);
            });
        }
    });

    return $.mage.gtmCart;
});
