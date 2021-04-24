/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery',
    'underscore',
    'mage/template',
    'mage/translate',
    'priceUtils',
    'jquery-ui-modules/widget',
    'jquery/jquery.parsequery',
    'mage/validation/validation'
], function ($, _, mageTemplate, $t, priceUtils) {
    'use strict';

    /**
     * Extend form validation to support swatch accessibility
     */
    $.widget('mage.validation', $.mage.validation, {
        /**
         * Handle form with swatches validation. Focus on first invalid swatch block.
         *
         * @param {jQuery.Event} event
         * @param {Object} validation
         */
        listenFormValidateHandler: function (event, validation) {

            var swatchWrapper, firstActive, swatches, swatch, successList, errorList, firstSwatch;

            this._superApply(arguments);

            swatchWrapper = '.configuration-options';
            swatches = $(event.target).find(swatchWrapper);

            if (!swatches.length) {
                return;
            }

            swatch = '.configuration-option';
            successList = validation.successList;
            errorList = validation.errorList;

            $.each(successList, function (index, item) {
                $(item.element).closest(swatch).removeClass('invalid');
            });

            $.each(errorList, function (index, item) {
                $(item.element).closest(swatch).addClass('invalid');
            });
        }
    });

    /**
     * Render swatch controls with options and use tooltips.
     * Required two json:
     *  - jsonConfig (magento's option config)
     *  - jsonSwatchConfig (swatch's option config)
     *
     *  Tuning:
     *  - numberToShow (show "more" button if options are more)
     *  - onlySwatches (hide selectboxes)
     *  - moreButtonText (text for "more" button)
     *  - selectorProduct (selector for product container)
     *  - selectorProductPrice (selector for change price)
     */
    $.widget('mage.SwatchRenderer', {
        options: {
            classes: {
                attributeClass: 'configuration-option',
                attributeLabelClass: 'swatch-attribute-label',
                attributeSelectedOptionLabelClass: 'swatch-attribute-selected-option',
                attributeOptionsWrapper: 'option-groupings',
                attributeInput: 'swatch-input',
                optionClass: 'grouping-option-value',
                selectClass: 'swatch-select',
                moreButton: 'swatch-more',
                loader: 'swatch-option-loading'
            },
            // option's json config
            jsonConfig: {},

            // swatch's json config
            jsonSwatchConfig: {},

            // selector of parental block of prices and swatches (need to know where to seek for price block)
            selectorProduct: '.product-info-main',

            // selector of price wrapper (need to know where set price)
            selectorProductPrice: '[data-role=priceBox]',

            //selector of product images gallery wrapper
            mediaGallerySelector: '[data-gallery-role=gallery-placeholder]',

            // selector of category product tile wrapper
            selectorProductTile: '.product-item',

            // number of controls to show (false or zero = show all)
            numberToShow: false,

            // show only swatch controls
            onlySwatches: false,

            // enable label for control
            enableControlLabel: true,

            // control label id
            controlLabelId: '',

            // text for more button
            moreButtonText: '+ More',

            // Callback url for media
            mediaCallback: '',

            // Local media cache
            mediaCache: {},

            // Cache for BaseProduct images. Needed when option unset
            mediaGalleryInitial: [{}],

            // Use ajax to get image data
            useAjax: false,

            /**
             * Defines the mechanism of how images of a gallery should be
             * updated when user switches between configurations of a product.
             *
             * As for now value of this option can be either 'replace' or 'prepend'.
             *
             * @type {String}
             */
            gallerySwitchStrategy: 'replace',

            // whether swatches are rendered in product list or on product page
            inProductList: false,

            // sly-old-price block selector
            slyOldPriceSelector: '.sly-old-price',

            // tier prise selectors start
            tierPriceTemplateSelector: '#tier-prices-template',
            tierPriceBlockSelector: '[data-role="tier-price-block"]',
            tierPriceTemplate: '',
            // tier prise selectors end

            // A price label selector
            normalPriceLabelSelector: '.normal-price .price-label'
        },

        /**
         * Get chosen product
         *
         * @returns int|null
         */
        getProduct: function () {
            var products = this._CalcProducts();

            return _.isArray(products) ? products[0] : null;
        },

        formatPrice: function(price){
            return '$' + parseFloat(price).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },

        /**
         * @private
         * @returns {undefined}
         */
        _calculateLowPrice: function(is_pdp) {

            var OldPrices = [],
                FinalPrices = [],
                container = this.element,
                currentCurrencySymbol = "$";

            $.each(this.options.jsonConfig.optionPrices, function() {
                var item = this;

                OldPrices.push(item.oldPrice.amount);
                if (item.finalPrice.amount !== item.oldPrice.amount) {
                    FinalPrices.push(item.finalPrice.amount);
                }
            });

            var minOldPrice,
                minFinalPrice,
                maxOldPrice,
                maxFinalPrice,
                oldPriceString,
                finalPriceString;
            minOldPrice = Math.min.apply(Math, OldPrices);
            maxOldPrice = Math.max.apply(Math, OldPrices);
            var oldPriceSign = "";
            var finalPriceSign = "";

            if (FinalPrices.length) {
                maxFinalPrice = Math.max.apply(Math, FinalPrices);
                minFinalPrice = Math.min.apply(Math, FinalPrices);
            }

            var minOldPriceString = parseFloat(minOldPrice).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            
            if (minOldPrice !== maxOldPrice) {
                oldPriceString = minOldPriceString + "+";
                oldPriceSign = "+";
            } else {
                oldPriceString = minOldPriceString;
                oldPriceSign = "";
            }

            if (minFinalPrice){
                var minFinalPriceString = parseFloat(minFinalPrice).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
            
            if(minFinalPrice && maxFinalPrice) {
                if(minFinalPrice !== maxFinalPrice) {
                    finalPriceString = minFinalPriceString + "+";
                    finalPriceSign = "+";
                } else {
                    finalPriceString = minFinalPriceString;
                    finalPriceSign = "";
                }
            }
            
            if (is_pdp){
                var priceBox = container.closest('.product-info-main').find('.product-info-price');
            } else {
                var priceBox = container.parent().parent();
            }

            var specialPrice = priceBox.find('.special-price');

            if (specialPrice.length) {
                //minFinalPrice can potentially be undefined here, even though we have a special price (due to caching)
                if (!isNaN(minFinalPrice)){
                    specialPrice.find('.price').html(currentCurrencySymbol+ "" +finalPriceString);
                }
                priceBox.find('.old-price').find('.price').html(currentCurrencySymbol+ "" +oldPriceString);
            } else {
                priceBox.find('.price-final_price .price').html(currentCurrencySymbol+ "" +oldPriceString);
            }
        },

        /**
         * @private
         */
        _init: function () {

            if ($(this.element).data('swatchesInitialized')) return;
            $(this.element).data('swatchesInitialized', true);

            if (_.isEmpty(this.options.jsonConfig.images)) {
                this.options.useAjax = true;
                // creates debounced variant of _LoadProductMedia()
                // to use it in events handlers instead of _LoadProductMedia()
                this._debouncedLoadProductMedia = _.debounce(this._LoadProductMedia.bind(this), 500);
            }

            if (this.options.jsonConfig !== '' && this.options.jsonSwatchConfig !== '') {
                // store unsorted attributes
                this.options.jsonConfig.mappedAttributes = _.clone(this.options.jsonConfig.attributes);
                this._sortAttributes();
                this._RenderControls();

                //this._calculateLowPrice(true);

                this._setPreSelectedGallery();
                $(this.element).trigger('swatch.initialized');
                this._Rebuild();
            }
            var jSonArray = this.options.configurableAttributes;

            for (var i = 0; i < this.options.jsonConfig.attributes.length; i++) {
                var obj = this.options.jsonConfig.attributes[i];
                if (jSonArray.hasOwnProperty(obj.code)) {
                    this._UpdatePrice();
                }
            }

            this.options.tierPriceTemplate = $(this.options.tierPriceTemplateSelector).html();
        },

        /**
         * @private
         */
        _sortAttributes: function () {
            this.options.jsonConfig.attributes = _.sortBy(this.options.jsonConfig.attributes, function (attribute) {
                return parseInt(attribute.position, 10);
            });
        },

        /**
         * @private
         */
        _create: function () {
            var options = this.options,
                gallery = $('[data-gallery-role=gallery-placeholder]', '.column.main'),
                productData = this._determineProductData(),
                $main = productData.isInProductView && !productData.isSecondaryProductView ?
                    this.element.parents('.column.main') :
                    this.element.parents('.product-item-info');

            if (productData.isInProductView && !productData.isSecondaryProductView) {
                this._onGalleryLoaded(gallery);
            } else {
                options.mediaGalleryInitial = [{
                    'img': $main.find('.product-image-photo').attr('src')
                }];
            }

            this.productForm = this.element.parents(this.options.selectorProductTile).find('form:first');
            this.inProductList = this.productForm.length > 0;
        },

        /**
         * Determine product id and related data
         *
         * @returns {{productId: *, isInProductView: bool}}
         * @private
         */
        _determineProductData: function () {
            // Check if product is in a list of products.
            var productId,
                isInProductView = false,
                secondaryProductView = false;

            //swatches in upsell modal
            if (this.element.parents('.add-to-cart-confirmation-modal').length > 0){
                
                productId = this.element.closest('.product-item-info')
                    .find('.price-box.price-final_price').attr('data-product-id');

            //complete the look
            } else if (this.element.parents('.complete-the-look').length > 0){
                
                productId = this.element.closest('.product-item-info')
                    .find('.price-box.price-final_price').attr('data-product-id');
                isInProductView = true;
                secondaryProductView = true;

            } else {

                productId = this.element.parents('.product-item-details')
                    .find('.price-box.price-final_price').attr('data-product-id');

            }

            if (!productId) {
                // Check individual product.
                productId = $('[name=product]').val();
                isInProductView = productId > 0;
            }

            return {
                productId: productId,
                isInProductView: isInProductView,
                isSecondaryProductView: secondaryProductView
            };
        },

        /**
         * Render controls
         *
         * @private
         */
        _RenderControls: function () {
            var $widget = this,
                container = this.element,
                classes = this.options.classes,
                chooseText = this.options.jsonConfig.chooseText;

            $widget.optionsMap = {};

            $.each(this.options.jsonConfig.attributes, function (key) {

                var item = this;
                $widget.optionsMap[item.id] = {};

                // Aggregate options array to hash (key => value)
                $.each(item.options, function () {
                    if (this.products.length > 0) {
                        $widget.optionsMap[item.id][this.id] = {
                            price: parseInt(
                                $widget.options.jsonConfig.optionPrices[this.products[0]].finalPrice.amount,
                                10
                            ),
                            products: this.products
                        };
                    }
                });
            });

            // Handle events like click or change
            $widget._EventListener();

            // Rewind options
            $widget._Rewind(container);

            //Emulate click on all swatches from Request
            //$widget._EmulateSelected($.parseQuery());
            //$widget._EmulateSelected($widget._getSelectedAttributes());

        },


        /**
         * Event listener
         *
         * @private
         */
        _EventListener: function () {
            var $widget = this,
                options = this.options.classes,
                target;

            $widget.element.on('click', '.' + options.optionClass, function () {
                return $widget._OnClick($(this), $widget);
            });

            if (window.innerWidth > 767){
                $widget.element.on('mouseover', '.' + options.optionClass, function () {
                    return $widget._OnMouseOver(this, $widget);
                });
                $widget.element.on('mouseout', '.' + options.optionClass, function () {
                    return $widget._OnMouseOut(this, $widget);
                });
            }

            $widget.element.on('click', '.clear-selected-option', function (event) {
                return $widget._ClearSelectedOptionClick($(this), $widget, event);
            });

            $widget.element.on('emulateClick', '.' + options.optionClass, function () {
                return $widget._OnClick($(this), $widget, 'emulateClick');
            });

            $widget.element.on('change', '.' + options.selectClass, function () {
                return $widget._OnChange($(this), $widget);
            });

            $widget.element.on('click', '.' + options.moreButton, function (e) {
                e.preventDefault();

                return $widget._OnMoreClick($(this));
            });

            if ($widget.options.attributeCount > 1){
                $widget.element.on('click', '.option-header', function(){
                    $(this).closest('.configuration-option').toggleClass('expanded');
                });
            }
        },

        /**
         * Load media gallery using ajax or json config.
         *
         * @param {String|undefined} eventName
         * @private
         */
        _loadMedia: function (eventName) {
            var $main = this.inProductList ?
                    this.element.parents('.product-item-info') :
                    this.element.parents('.column.main'),
                images;

            if (this.options.useAjax) {
                this._LoadProductMedia();
            }  else {
                images = this.options.jsonConfig.images[this.getProduct()];
                if (!images) {
                    images = this.options.mediaGalleryInitial;
                }

                this.updateBaseImage(images, $main, !this.inProductList, eventName);
            }
        },

        _ClearSelectedOptionClick: function($this, $widget, event){
            var $parent = $this.parents('.' + $widget.options.classes.attributeClass);
            $parent.find('.selected.' + $widget.options.classes.optionClass).trigger('click');
            event.stopPropagation();
        },

        _OnMouseOver: function(element, $widget, eventname){

            if (element.hasAttribute('disabled')) return;

            var $parent = $(element).parents('.' + $widget.options.classes.attributeClass),
                $label = $parent.find('.' + $widget.options.classes.attributeSelectedOptionLabelClass);

            var selectedOption = element.getAttribute('option-label');

            $parent.addClass('option-hovering');
            $label.text(selectedOption);

        },

        _OnMouseOut: function(element, $widget, eventname){

            if (element.hasAttribute('disabled')) return;

            var $parent = $(element).parents('.' + $widget.options.classes.attributeClass),
                $label = $parent.find('.' + $widget.options.classes.attributeSelectedOptionLabelClass);

                $parent.removeClass('option-hovering');

            if ($label.attr('selected-text')){
                $label.text($label.attr('selected-text'));
                $label.append('<a class="clear-selected-option" href="javascript:;"><i class="fas fa-times-circle"></i> Clear</a>');
            } else {
                $label.text('');
            }
        },

        /**
         * Event for swatch options
         *
         * @param {Object} $this
         * @param {Object} $widget
         * @param {String|undefined} eventName
         * @private
         */
        _OnClick: function ($this, $widget, eventName) {

            var $parent = $this.parents('.' + $widget.options.classes.attributeClass),
                $wrapper = $this.parents('.' + $widget.options.classes.attributeOptionsWrapper),
                $label = $parent.find('.' + $widget.options.classes.attributeSelectedOptionLabelClass),
                attributeId = $parent.attr('attribute-id'),
                $input = $parent.find('.' + $widget.options.classes.attributeInput),
                clearClick = false;

            if ($widget.inProductList) {
                $input = $widget.productForm.find(
                    '.' + $widget.options.classes.attributeInput + '[name="super_attribute[' + attributeId + ']"]'
                );
            }

            if ($this.hasClass('disabled')) {
                return;
            }

            if ($this.hasClass('selected')) {
                $parent.removeAttr('option-selected').find('.selected').removeClass('selected');
                $input.val('');
                $label.text('');
                $label.removeAttr('selected-text');
                $this.attr('aria-checked', false);
                clearClick = true;

            } else {
                $parent.attr('option-selected', $this.attr('option-id')).find('.selected').removeClass('selected');
                $label.text($this.attr('option-label'));
                $label.attr('selected-text', $this.attr('option-label'));
                $input.val($this.attr('option-id'));
                $input.attr('data-attr-name', this._getAttributeCodeById(attributeId));
                $this.addClass('selected');
                $widget._toggleCheckedAttributes($this, $wrapper);

                $parent.removeClass('invalid').find('div.mage-error').slideUp(100);


            }

            $widget._Rebuild();

            if ($widget.element.parents($widget.options.selectorProduct)
                    .find(this.options.selectorProductPrice).is(':data(mage-priceBox)')
            ) {
                $widget._UpdatePrice();
            }
            
            $widget._loadMedia(eventName);
            $input.trigger('change');

            if ($widget.options.attributeCount > 1 && !clearClick){

                var nextParent = $parent.next();

                if (nextParent){
                    nextParent.addClass('expanded');
                }
            }

        },

        /**
         * Get human readable attribute code (eg. size, color) by it ID from configuration
         *
         * @param {Number} attributeId
         * @returns {*}
         * @private
         */
        _getAttributeCodeById: function (attributeId) {
            var attribute = this.options.jsonConfig.mappedAttributes[attributeId];

            return attribute ? attribute.code : attributeId;
        },

        /**
         * Toggle accessibility attributes
         *
         * @param {Object} $this
         * @param {Object} $wrapper
         * @private
         */
        _toggleCheckedAttributes: function ($this, $wrapper) {
            $wrapper.attr('aria-activedescendant', $this.attr('id'))
                    .find('.' + this.options.classes.optionClass).attr('aria-checked', false);
            $this.attr('aria-checked', true);
        },

        /**
         * Event for select
         *
         * @param {Object} $this
         * @param {Object} $widget
         * @private
         */
        _OnChange: function ($this, $widget) {
            var $parent = $this.parents('.' + $widget.options.classes.attributeClass),
                attributeId = $parent.attr('attribute-id'),
                $input = $parent.find('.' + $widget.options.classes.attributeInput);

            if ($widget.productForm.length > 0) {
                $input = $widget.productForm.find(
                    '.' + $widget.options.classes.attributeInput + '[name="super_attribute[' + attributeId + ']"]'
                );
            }

            if ($this.val() > 0) {
                $parent.attr('option-selected', $this.val());
                $input.val($this.val());
            } else {
                $parent.removeAttr('option-selected');
                $input.val('');
            }

            $widget._Rebuild();
            $widget._UpdatePrice();
            $widget._loadMedia();
            $input.trigger('change');
        },

        /**
         * Event for more switcher
         *
         * @param {Object} $this
         * @private
         */
        _OnMoreClick: function ($this) {
            //$this.nextAll().show();
            //$this.blur().remove();

            //instead of showing all options, more click goes to product page
            window.location.href = $this.parent().parent().parent().parent().parent().parent().find('a.product.product-item-photo').attr('href')
        },

        /**
         * Rewind options for controls
         *
         * @private
         */
        _Rewind: function (controls) {
            controls.find('div[option-id], option[option-id]').removeClass('disabled').removeAttr('disabled');
            controls.find('div[option-empty], option[option-empty]').attr('disabled', true).addClass('disabled');
        },

        /**
         * Rebuild container
         *
         * @private
         */
        _Rebuild: function () {
            var $widget = this,
                controls = $widget.element.find('.' + $widget.options.classes.attributeClass + '[attribute-id]'),
                selected = controls.filter('[option-selected]')
                possibleProducts = [];

            // Enable all options
            $widget._Rewind(controls);

            var possibleProducts = $widget._CalcProducts();

            if (selected.size() == controls.length || possibleProducts.length == 1){
                $(window).trigger('complete-swatch-selection', [possibleProducts, $widget]);
            } else {
                $(window).trigger('incomplete-swatch-selection', [possibleProducts, $widget]);
            }

            // done if nothing selected
            if (selected.size() <= 0) {
                return;
            }

            // Disable not available options
            controls.each(function () {
                var $this = $(this),
                    id = $this.attr('attribute-id'),
                    products = $widget._CalcProducts(id);
                
                if (selected.size() === 1 && selected.first().attr('attribute-id') === id) {
                    return;
                }

                $this.find('[option-id]').each(function () {
                    var $element = $(this),
                        option = $element.attr('option-id');

                    if (!$widget.optionsMap.hasOwnProperty(id) || !$widget.optionsMap[id].hasOwnProperty(option) ||
                        $element.hasClass('selected') ||
                        $element.is(':selected')) {
                        return;
                    }

                    if (_.intersection(products, $widget.optionsMap[id][option].products).length <= 0) {
                        $element.attr('disabled', true).addClass('disabled');
                    }
                });
            });

            selected.find('.clear-selected-option').remove();
            selected.find('.swatch-attribute-selected-option').append('<a class="clear-selected-option" href="javascript:;"><i class="fas fa-times-circle"></i> Clear</a>');

        },

        /**
         * Get selected product list
         *
         * @returns {Array}
         * @private
         */
        _CalcProducts: function ($skipAttributeId) {
            var $widget = this,
                products = [];

            // Generate intersection of products
            $widget.element.find('.' + $widget.options.classes.attributeClass + '[option-selected]').each(function () {
                var id = $(this).attr('attribute-id'),
                    option = $(this).attr('option-selected');

                if ($skipAttributeId !== undefined && $skipAttributeId === id) {
                    return;
                }

                if (!$widget.optionsMap.hasOwnProperty(id) || !$widget.optionsMap[id].hasOwnProperty(option)) {
                    return;
                }

                if (products.length === 0) {
                    products = $widget.optionsMap[id][option].products;
                } else {
                    products = _.intersection(products, $widget.optionsMap[id][option].products);
                }
            });

            return products;
        },

        /**
         * Update total price
         *
         * @private
         */
        _UpdatePrice: function () {
            var $widget = this,
                $product = $widget.element.parents($widget.options.selectorProduct),
                $productPrice = $product.find(this.options.selectorProductPrice),
                options = _.object(_.keys($widget.optionsMap), {}),
                result,
                tierPriceHtml,
                hasSelectedOptions;

            $widget.element.find('.' + $widget.options.classes.attributeClass + '[option-selected]').each(function () {
                var attributeId = $(this).attr('attribute-id');
                hasSelectedOptions = true;
                options[attributeId] = $(this).attr('option-selected');
            });

            result = $widget.options.jsonConfig.optionPrices[_.findKey($widget.options.jsonConfig.index, options)];

            $productPrice.trigger(
                'updatePrice',
                {
                    'prices': $widget._getPrices(result, $productPrice.priceBox('option').prices)
                }
            );

            /*
            if (typeof result != 'undefined' && result.oldPrice.amount !== result.finalPrice.amount) {
                $(this.options.slyOldPriceSelector).show();
            } else {
                $(this.options.slyOldPriceSelector).hide();
            }
            */

            if (typeof result != 'undefined' && result.tierPrices.length) {
                if (this.options.tierPriceTemplate) {
                    tierPriceHtml = mageTemplate(
                        this.options.tierPriceTemplate,
                        {
                            'tierPrices': result.tierPrices,
                            '$t': $t,
                            'currencyFormat': this.options.jsonConfig.currencyFormat,
                            'priceUtils': priceUtils
                        }
                    );
                    $(this.options.tierPriceBlockSelector).html(tierPriceHtml).show();
                }
            } else {
                $(this.options.tierPriceBlockSelector).hide();
            }

            $(this.options.normalPriceLabelSelector).hide();

            _.each($('.' + this.options.classes.attributeOptionsWrapper), function (attribute) {
                if ($(attribute).find('.' + this.options.classes.optionClass + '.selected').length === 0) {
                    if ($(attribute).find('.' + this.options.classes.selectClass).length > 0) {
                        _.each($(attribute).find('.' + this.options.classes.selectClass), function (dropdown) {
                            if ($(dropdown).val() === '0') {
                                $(this.options.normalPriceLabelSelector).show();
                            }
                        }.bind(this));
                    } else {
                        $(this.options.normalPriceLabelSelector).show();
                    }
                }
            }.bind(this));


            if (!hasSelectedOptions){
                this._calculateLowPrice(true);
            }
            this.element.closest('.product-info-main').find('.product-info-price .price-box').removeClass('has-variable-price');

        },

        /**
         * Get prices
         *
         * @param {Object} newPrices
         * @param {Object} displayPrices
         * @returns {*}
         * @private
         */
        _getPrices: function (newPrices, displayPrices) {
            var $widget = this;

            if (_.isEmpty(newPrices)) {
                newPrices = $widget.options.jsonConfig.prices;
            }

            _.each(displayPrices, function (price, code) {
                if (newPrices[code]) {
                    displayPrices[code].amount = newPrices[code].amount - displayPrices[code].amount;
                }
            });

            return displayPrices;
        },

        /**
         * Gets all product media and change current to the needed one
         *
         * @private
         */
        _LoadProductMedia: function () {
            var $widget = this,
                $this = $widget.element,
                attributes = {},
                productData = this._determineProductData(),
                mediaCallData,
                mediaCacheKey,

                /**
                 * Processes product media data
                 *
                 * @param {Object} data
                 * @returns void
                 */
                mediaSuccessCallback = function (data) {
                    if (!(mediaCacheKey in $widget.options.mediaCache)) {
                        $widget.options.mediaCache[mediaCacheKey] = data;
                    }
                    $widget._ProductMediaCallback($this, data, productData.isInProductView && !productData.isSecondaryProductView);
                };

            if (!$widget.options.mediaCallback) {
                return;
            }

            $this.find('[option-selected]').each(function () {
                var $selected = $(this);

                attributes[$selected.attr('attribute-code')] = $selected.attr('option-selected');
            });

            mediaCallData = {
                'product_id': this.getProduct(),
                'attributes': attributes,
                'additional': $.parseQuery()
            };

            mediaCacheKey = JSON.stringify(mediaCallData);

            //Get the item url
            var parent_element = $this.parents(".item.product-item");
            if(!parent_element.length) {
                parent_element = $this.parents('.product-info-main');
            }
            if(parent_element.length) {
                var element_link = parent_element.find("a.product-item-link");
                if(!element_link.length) {
                    element_link = parent_element.find(".product-url a");
                }
                if(element_link.length) {
                    var element_url = element_link.data("original-href");
                    if(!element_url) {
                        element_url = element_link.attr("href");
                        element_link.data("original-href", element_url);
                    }
                    $.each(attributes, function(key, value) {
                        element_url = $widget.replaceUrlParam(element_url, key, value);
                    });
                    element_link.attr("href", element_url);
                    parent_element.find("a.product-item-photo").attr("href", element_url);
                }
            }
            if (mediaCacheKey in $widget.options.mediaCache) {
                $widget._XhrKiller();
                $widget._EnableProductMediaLoader($this);
                mediaSuccessCallback($widget.options.mediaCache[mediaCacheKey]);
            } else {
                mediaCallData.isAjax = true;
                $widget._XhrKiller();
                $widget._EnableProductMediaLoader($this);
                $widget.xhr = $.get(
                    $widget.options.mediaCallback,
                    mediaCallData,
                    mediaSuccessCallback,
                    'json'
                ).done(function () {
                    $widget._XhrKiller();
                });
            }
        },

        //Url query-string-replace function
        replaceUrlParam: function (url, paramName, paramValue){
            if(paramValue == null)
                paramValue = '';
            var pattern = new RegExp('\\b('+paramName+'=).*?(&|$)')
            if(url.search(pattern)>=0){
                return url.replace(pattern,'$1' + paramValue + '$2');
            }
            return url + (url.indexOf('?')>0 ? '&' : '?') + paramName + '=' + paramValue 
        },

        /**
         * Enable loader
         *
         * @param {Object} $this
         * @private
         */
        _EnableProductMediaLoader: function ($this) {
            var $widget = this;
            if ($('body.catalog-product-view').size() > 0) {
                $this.parents('.column.main').find('.photo.image')
                    .addClass($widget.options.classes.loader);
            } else {
                //Category View
                $this.parents('.product-item-info').find('.product-image-photo')
                    .addClass('option-loading');
            }
        },

        /**
         * Disable loader
         *
         * @param {Object} $this
         * @private
         */
        _DisableProductMediaLoader: function ($this) {
            var $widget = this;

            if ($('body.catalog-product-view').size() > 0) {
                $this.parents('.column.main').find('.photo.image')
                    .removeClass($widget.options.classes.loader);
            } else {
                //Category View
                $this.parents('.product-item-info').find('.product-image-photo')
                    .removeClass('option-loading');
            }
        },

        /**
         * Callback for product media
         *
         * @param {Object} $this
         * @param {String} response
         * @param {Boolean} isInProductView
         * @private
         */
        _ProductMediaCallback: function ($this, response, isInProductView) {

            var $main = isInProductView ? $this.parents('.column.main') : $this.parents('.product-item-info'),
                $widget = this,
                images = [],

                /**
                 * Check whether object supported or not
                 *
                 * @param {Object} e
                 * @returns {*|Boolean}
                 */
                support = function (e) {
                    return e.hasOwnProperty('large') && e.hasOwnProperty('medium') && e.hasOwnProperty('small');
                };

            if (_.size($widget) < 1 || !support(response)) {
                this.updateBaseImage(this.options.mediaGalleryInitial, $main, isInProductView);

                return;
            }

            images.push({
                full: response.large,
                img: response.medium,
                thumb: response.small,
                isMain: true
            });

            if (response.hasOwnProperty('gallery')) {
                $.each(response.gallery, function () {
                    if (!support(this) || response.large === this.large) {
                        return;
                    }
                    images.push({
                        full: this.large,
                        img: this.medium,
                        thumb: this.small
                    });
                });
            }

            this.updateBaseImage(images, $main, isInProductView);
        },

        /**
         * Check if images to update are initial and set their type
         * @param {Array} images
         */
        _setImageType: function (images) {
            var initial = this.options.mediaGalleryInitial[0].img;

            if (images[0].img === initial) {
                images = $.extend(true, [], this.options.mediaGalleryInitial);
            } else {
                images.map(function (img) {
                    if (!img.type) {
                        img.type = 'image';
                    }
                });
            }

            return images;
        },

        /**
         * Start update base image process based on event name
         * @param {Array} images
         * @param {jQuery} context
         * @param {Boolean} isInProductView
         * @param {String|undefined} eventName
         */
        updateBaseImage: function (images, context, isInProductView, eventName) {
            var gallery = context.find(this.options.mediaGallerySelector).data('gallery');

            if (gallery || !isInProductView) {
                this.processUpdateBaseImage(images, context, isInProductView, gallery);
            }
        },

        /**
         * Update [gallery-placeholder] or [product-image-photo]
         * @param {Array} images
         * @param {jQuery} context
         * @param {Boolean} isInProductView
         * @param {Object} gallery
         */
        processUpdateBaseImage: function (images, context, isInProductView, gallery) {
            var justAnImage = images[0],
                initialImages = this.options.mediaGalleryInitial,
                $widget = this,
                imagesToUpdate,
                isInitial;

            if (isInProductView) {
                imagesToUpdate = images.length ? this._setImageType($.extend(true, [], images)) : [];
                isInitial = _.isEqual(imagesToUpdate, initialImages);

                if (this.options.gallerySwitchStrategy === 'prepend' && !isInitial) {
                    imagesToUpdate = imagesToUpdate.concat(initialImages);
                }

                imagesToUpdate = this._setImageIndex(imagesToUpdate);

                var self = this;
                var image = new Image();
                image.src = imagesToUpdate[0].img;
                image.onload = function(){

                    context.find('.gallery-images li.glide__slide[data-index="0"] img.slide-image').attr('src', imagesToUpdate[0].img);
                    context.find('.gallery-thumbnails li.glide__slide[data-index="0"] img.slide-image').attr('src', imagesToUpdate[0].thumb);
                    context.find('.fullscreen-container .thumbnails div.image[data-index="0"] img').attr('src', imagesToUpdate[0].thumb);
                    var fullscreenImage = context.find('.fullscreen-container .images div.image[data-index="0"] img');

                    if (fullscreenImage.attr('src')){
                        fullscreenImage.removeAttr('src').removeClass('loaded').removeAttr('data-was-processed');
                    }
                    fullscreenImage.attr('data-src', imagesToUpdate[0].full);

                    gallery.go('=0');
                };

            } else if (justAnImage && justAnImage.img) {

                var image = new Image();
                image.src = justAnImage.img;
                image.onload = function(){
                    $widget._DisableProductMediaLoader($widget.element);
                    context.find('.product-image-photo').attr('src', justAnImage.img);
                };
            }
        },

        /**
         * Set correct indexes for image set.
         *
         * @param {Array} images
         * @private
         */
        _setImageIndex: function (images) {
            var length = images.length,
                i;

            for (i = 0; length > i; i++) {
                images[i].i = i + 1;
            }

            return images;
        },

        /**
         * Kill doubled AJAX requests
         *
         * @private
         */
        _XhrKiller: function () {
            var $widget = this;

            if ($widget.xhr !== undefined && $widget.xhr !== null) {
                $widget.xhr.abort();
                $widget.xhr = null;
            }
        },

        /**
         * Emulate mouse click on all swatches that should be selected
         * @param {Object} [selectedAttributes]
         * @private
         */
        _EmulateSelected: function (selectedAttributes) {
            $.each(selectedAttributes, $.proxy(function (attributeCode, optionId) {
                this.element.find('.' + this.options.classes.attributeClass +
                    '[attribute-code="' + attributeCode + '"] [option-id="' + optionId + '"]').trigger('click');
            }, this));
        },

        /**
         * Emulate mouse click or selection change on all swatches that should be selected
         * @param {Object} [selectedAttributes]
         * @param {String} triggerClick
         * @private
         */
        _EmulateSelectedByAttributeId: function (selectedAttributes, triggerClick) {
            $.each(selectedAttributes, $.proxy(function (attributeId, optionId) {
                var elem = this.element.find('.' + this.options.classes.attributeClass +
                    '[attribute-id="' + attributeId + '"] [option-id="' + optionId + '"]'),
                    parentInput = elem.parent();

                if (triggerClick === null || triggerClick === '') {
                    triggerClick = 'click';
                }

                if (elem.hasClass('selected')) {
                    return;
                }

                if (parentInput.hasClass(this.options.classes.selectClass)) {
                    parentInput.val(optionId);
                    parentInput.trigger('change');
                } else {
                    elem.trigger(triggerClick);
                }
            }, this));
        },

        /**
         * Get default options values settings with either URL query parameters
         * @private
         */
        _getSelectedAttributes: function () {
            var hashIndex = window.location.href.indexOf('#'),
                selectedAttributes = {},
                params;

            if (hashIndex !== -1) {
                params = $.parseQuery(window.location.href.substr(hashIndex + 1));

                selectedAttributes = _.invert(_.mapObject(_.invert(params), function (attributeId) {
                    var attribute = this.options.jsonConfig.mappedAttributes[attributeId];

                    return attribute ? attribute.code : attributeId;
                }.bind(this)));
            }

            return selectedAttributes;
        },

        /**
         * Callback which fired after gallery gets initialized.
         *
         * @param {HTMLElement} element - DOM element associated with a gallery.
         */
        _onGalleryLoaded: function (element) {
            var self = this;

            if (typeof window.initialGalleryConfig == 'undefined'){
                $('.gallery-images').on('mediaGalleryInitial', function(){
                    self.options.mediaGalleryInitial = window.initialGalleryConfig;
                });
            } else {
                self.options.mediaGalleryInitial = window.initialGalleryConfig;
            }
        },

        /**
         * Sets mediaCache for cases when jsonConfig contains preSelectedGallery on layered navigation result pages
         *
         * @private
         */
        _setPreSelectedGallery: function () {
            var mediaCallData;

            if (this.options.jsonConfig.preSelectedGallery) {
                mediaCallData = {
                    'product_id': this.getProduct()
                };

                this.options.mediaCache[JSON.stringify(mediaCallData)] = this.options.jsonConfig.preSelectedGallery;
            }
        }
    });

    return $.mage.SwatchRenderer;
});