/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery',
    'underscore',
    'mage/template',
    'mage/smart-keyboard-handler',
    'mage/translate',
    'priceUtils',
    'jquery/ui',
    'jquery/jquery.parsequery',
    'mage/validation/validation'
], function ($, _, mageTemplate, keyboardHandler, $t, priceUtils) {
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

            swatchWrapper = '.swatch-attribute-options';
            swatches = $(event.target).find(swatchWrapper);

            if (!swatches.length) {
                return;
            }

            swatch = '.swatch-attribute';
            firstActive = $(validation.errorList[0].element || []);
            successList = validation.successList;
            errorList = validation.errorList;
            firstSwatch = $(firstActive).parent(swatch).find(swatchWrapper);

            keyboardHandler.focus(swatches);

            $.each(successList, function (index, item) {
                $(item).parent(swatch).find(swatchWrapper).attr('aria-invalid', false);
            });

            $.each(errorList, function (index, item) {
                $(item.element).parent(swatch).find(swatchWrapper).attr('aria-invalid', true);
            });

            if (firstSwatch.length) {
                $(firstSwatch).focus();
            }
        }
    });

    /**
     * Render tooltips by attributes (only to up).
     * Required element attributes:
     *  - option-type (integer, 0-3)
     *  - option-label (string)
     *  - option-tooltip-thumb
     *  - option-tooltip-value
     */
    $.widget('mage.SwatchRendererTooltip', {
        options: {
            delay: 200,                             //how much ms before tooltip to show
            tooltipClass: 'swatch-option-tooltip'  //configurable, but remember about css
        },

        /**
         * @private
         */
        _init: function () {
            var $widget = this,
                $this = this.element,
                $element = $('.' + $widget.options.tooltipClass),
                timer,
                type = parseInt($this.attr('option-type'), 10),
                label = $this.attr('option-label'),
                thumb = $this.attr('option-tooltip-thumb'),
                value = $this.attr('option-tooltip-value'),
                $image,
                $title,
                $corner;

            if (!$element.size()) {
                $element = $('<div class="' +
                    $widget.options.tooltipClass +
                    '"><div class="image"></div><div class="title"></div><div class="corner"></div></div>'
                );
                $('body').append($element);
            }

            $image = $element.find('.image');
            $title = $element.find('.title');
            $corner = $element.find('.corner');

            $this.hover(function () {
                if (!$this.hasClass('disabled')) {
                    timer = setTimeout(
                        function () {
                            var leftOpt = null,
                                leftCorner = 0,
                                left,
                                $window;

                            if (type === 2) {
                                // Image
                                $image.css({
                                    'background': 'url("' + thumb + '") no-repeat center', //Background case
                                    'background-size': 'initial'
                                });
                                $image.show();
                            } else if (type === 1) {
                                // Color
                                $image.css({
                                    background: value
                                });
                                $image.show();
                            } else if (type === 0 || type === 3) {
                                // Default
                                $image.hide();
                            }

                            $title.text(label);

                            leftOpt = $this.offset().left;
                            left = leftOpt + $this.width() / 2 - $element.width() / 2;
                            $window = $(window);

                            // the numbers (5 and 5) is magick constants for offset from left or right page
                            if (left < 0) {
                                left = 5;
                            } else if (left + $element.width() > $window.width()) {
                                left = $window.width() - $element.width() - 5;
                            }

                            // the numbers (6,  3 and 18) is magick constants for offset tooltip
                            leftCorner = 0;

                            if ($element.width() < $this.width()) {
                                leftCorner = $element.width() / 2 - 3;
                            } else {
                                leftCorner = (leftOpt > left ? leftOpt - left : left - leftOpt) + $this.width() / 2 - 6;
                            }

                            $corner.css({
                                left: leftCorner
                            });
                            $element.css({
                                left: left,
                                top: $this.offset().top - $element.height() - $corner.height() - 18
                            }).show();
                        },
                        $widget.options.delay
                    );
                }
            }, function () {
                $element.hide();
                clearTimeout(timer);
            });

            $(document).on('tap', function () {
                $element.hide();
                clearTimeout(timer);
            });

            $this.on('tap', function (event) {
                event.stopPropagation();
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
                attributeClass: 'swatch-attribute',
                attributeLabelClass: 'swatch-attribute-label',
                attributeSelectedOptionLabelClass: 'swatch-attribute-selected-option',
                attributeOptionsWrapper: 'swatch-attribute-options',
                attributeInput: 'swatch-input',
                optionClass: 'swatch-option',
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
            
            var specialPrice = container.parent().parent().find('.special-price');

            if(specialPrice.length) {
                //minFinalPrice can potentially be undefined here, even though we have a special price (due to caching)
                if (!isNaN(minFinalPrice)){
                    specialPrice.find('.price').html(currentCurrencySymbol+ "" +finalPriceString);
                }
                container.parent().parent().find('.old-price').find('.price').html(currentCurrencySymbol+ "" +oldPriceString);
            } else {
                container.parent().parent().find('.price-final_price .price').html(currentCurrencySymbol+ "" +oldPriceString);
            }
            /* Update prices on PDP */
            if(is_pdp) {
                //$(".product-info-price")
                /*if($(".product-info-price .special-price").length) {
                    $(".product-info-price .special-price").find('.price').html(currentCurrencySymbol+ "" +finalPriceString);
                    $(".product-info-price .old-price").find('.price').html(currentCurrencySymbol+ "" +oldPriceString);
                } else {
                    $(".product-info-price .price-final_price .price").html(currentCurrencySymbol+ "" +oldPriceString);
                }*/
                if(typeof window.current_product_variations !== 'undefined') {
                  window.current_product_variations.old_price_sign = oldPriceSign;
                  window.current_product_variations.final_price_sign = finalPriceSign;
                }
                //$("body").trigger("pdppricesymbolupdated", [oldPriceSign, finalPriceSign]);
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

            var isProductPage = typeof window.current_product_variations !== 'undefined' && window.current_product_variations.parentId == this.options.jsonConfig.productId && $('body.catalog-product-view').length;

            if (this.options.jsonConfig !== '' && this.options.jsonSwatchConfig !== '') {
                // store unsorted attributes
                this.options.jsonConfig.mappedAttributes = _.clone(this.options.jsonConfig.attributes);
                this._sortAttributes();
                this._RenderControls();

                //this._calculateLowPrice(isProductPage);

                this._setPreSelectedGallery();
                $(this.element).trigger('swatch.initialized');
            } else {
                console.log('SwatchRenderer: No input data received');
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

            var attributeCount = this.options.jsonConfig.attributes.length;

            $.each(this.options.jsonConfig.attributes, function (key) {

                var item = this,
                    controlLabelId = 'option-label-' + item.code + '-' + item.id,
                    options = $widget._RenderSwatchOptions(item, controlLabelId, key + 1 == attributeCount),
                    select = $widget._RenderSwatchSelect(item, chooseText),
                    input = $widget._RenderFormInput(item),
                    listLabel = '',
                    label = '';

                // Show only swatch controls
                if ($widget.options.onlySwatches && !$widget.options.jsonSwatchConfig.hasOwnProperty(item.id)) {
                    return;
                }

                if ($widget.options.enableControlLabel) {
                    label +=
                        '<span id="' + controlLabelId + '" class="' + classes.attributeLabelClass + '">' +
                            item.label.trim() +
                        '</span>' +
                        '<span class="' + classes.attributeSelectedOptionLabelClass + '"></span>';
                }

                if ($widget.inProductList) {
                    $widget.productForm.append(input);
                    input = '';
                    listLabel = 'aria-label="' + item.label + '"';
                } else {
                    listLabel = 'aria-labelledby="' + controlLabelId + '"';
                }

                // Create new control
                container.append(
                    '<div class="' + classes.attributeClass + ' ' + item.code + '" ' +
                         'attribute-code="' + item.code + '" ' +
                         'attribute-id="' + item.id + '">' +
                        label +
                        '<div aria-activedescendant="" ' +
                             'tabindex="0" ' +
                             'aria-invalid="false" ' +
                             'aria-required="true" ' +
                             'role="listbox" ' + listLabel +
                             'class="' + classes.attributeOptionsWrapper + ' clearfix">' +
                            options + select +
                        '</div>' + input +
                    '</div>'
                );

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

            // Connect Tooltip
            container
                .find('[option-type="1"], [option-type="2"], [option-type="0"], [option-type="3"]')
                .SwatchRendererTooltip();

            // Hide all elements below more button
            $('.' + classes.moreButton).nextAll().hide();

            // Handle events like click or change
            $widget._EventListener();

            // Rewind options
            $widget._Rewind(container);

            //Emulate click on all swatches from Request
            $widget._EmulateSelected($.parseQuery());
            $widget._EmulateSelected($widget._getSelectedAttributes());
        },

        /**
         * Render swatch options by part of config
         *
         * @param {Object} config
         * @param {String} controlId
         * @returns {String}
         * @private
         */
        _RenderSwatchOptions: function (config, controlId, lastAttribute) {
            var $widget = this,
                optionConfig = this.options.jsonSwatchConfig[config.id],
                optionClass = this.options.classes.optionClass,
                moreLimit = parseInt(this.options.numberToShow, 10),
                moreClass = this.options.classes.moreButton,
                moreText = this.options.moreButtonText,
                prices = this.options.jsonConfig.optionPrices,
                countAttributes = 0,
                html = '',
                quickShip = this.options.jsonConfig.quickShip,
                quickShipLeadTime = this.options.jsonConfig.quickShipLeadTime,
                swatchHtml = {};
            
            var productData = this._determineProductData(),
                isInProductView = productData.isInProductView,
                isSecondaryProductView = productData.isSecondaryProductView;

            if (!this.options.jsonSwatchConfig.hasOwnProperty(config.id)) {
                return '';
            }

            $.each(config.options, function () {
                var id,
                    type,
                    value,
                    thumb,
                    label,
                    attr,
                    thisHtml = '';

                if (!optionConfig.hasOwnProperty(this.id)) {
                    return '';
                }

                // Add more button
                if (moreLimit === countAttributes++) {
                    thisHtml += '<a href="javascript:;" class="' + moreClass + '">' + moreText + '</a>';
                }

                id = this.id;
                type = parseInt(optionConfig[id].type, 10);
                value = optionConfig[id].hasOwnProperty('value') ? optionConfig[id].value : '';
                thumb = optionConfig[id].hasOwnProperty('thumb') ? optionConfig[id].thumb : '';
                label = this.label ? this.label : '';
                attr =
                    ' id="' + controlId + '-item-' + id + '"' +
                    ' aria-checked="false"' +
                    ' aria-describedby="' + controlId + '"' +
                    ' tabindex="0"' +
                    ' option-type="' + type + '"' +
                    ' option-id="' + id + '"' +
                    ' option-label="' + label + '"' +
                    ' aria-label="' + label + '"' +
                    ' option-tooltip-thumb="' + thumb + '"' +
                    ' option-tooltip-value="' + value + '"' +
                    ' role="option"';

                if (!this.hasOwnProperty('products') || this.products.length <= 0) {
                    attr += ' option-empty="true"';
                }

                if (type === 0) {
                    // Text
                    thisHtml += '<div class="' + optionClass + ' text" ' + attr + '>' + (value ? value : label) +
                        '</div>';
                } else if (type === 1) {
                    // Color
                    thisHtml += '<div class="' + optionClass + ' color" ' + attr +
                        ' style="background: ' + value +
                        ' no-repeat center; background-size: initial;">' + '' +
                        '</div>';
                } else if (type === 2) {
                    // Image
                    thisHtml += '<div class="' + optionClass + ' image" ' + attr +
                        ' style="background: url(' + value + ') no-repeat center; background-size: initial;">' + '' +
                        '</div>';
                } else if (type === 3) {
                    // Clear
                    thisHtml += '<div class="' + optionClass + '" ' + attr + '></div>';
                } else {
                    // Default
                    thisHtml += '<div class="' + optionClass + '" ' + attr + '>' + label + '</div>';
                }

                if (isInProductView && lastAttribute){

                    var productId = this.products[0];
                    var productPrices = prices[productId];

                    if (typeof swatchHtml[productPrices.finalPrice.amount] == 'undefined'){

                        var sale, message, specialPrice;

                        if (typeof $widget.options.jsonConfig.productPromotion[productId] != 'undefined'){

                            var productPromotion = $widget.options.jsonConfig.productPromotion[productId];

                            sale = productPromotion.is_on_sale && productPromotion.sale_price <= productPrices.finalPrice.amount;
                            message = $widget.options.jsonConfig.productPromotion[productId].special_price_message;

                        } else {
                            sale = productPrices.finalPrice < productPrices.oldPrice || false;
                            message = null;
                        }

                        var redPricing = sale || productPrices.finalPrice.amount < productPrices.oldPrice.amount;

                        swatchHtml[productPrices.finalPrice.amount] = {
                            price      : productPrices.finalPrice.amount,
                            sale       : sale,
                            redPricing : redPricing,
                            message    : message,
                            swatchHtml : {standard: '', quickShip: ''},
                        }

                    }
                    
                    var isQuickShip = false;
                    if (isInProductView && !isSecondaryProductView){

                        this.products.forEach(function(productId){
                            if (quickShip.indexOf(productId) > -1){
                                isQuickShip = true;
                            }
                        });
                    }

                    if (isQuickShip){
                        swatchHtml[productPrices.finalPrice.amount].swatchHtml.quickShip += thisHtml;
                    } else {
                        swatchHtml[productPrices.finalPrice.amount].swatchHtml.standard += thisHtml;
                    }

                } else {

                    html += thisHtml;

                }

            });

            if (isInProductView && lastAttribute){
                
                var keys = Object.keys(swatchHtml);

                var hasQuickShip = false;

                keys.sort(function(a, b){
                    return a - b;
                }).forEach(function(key) {

                    var group = swatchHtml[key];

                    html += '<div class="swatch-price-grouping clearfix' + (group.redPricing ? ' sale-grouping' : '') + '">';

                    if (keys.length > 1){
                        html += '<div class="swatch-price-grouping-label">';
                        html += $widget.formatPrice(group.price);

                        if (group.sale && group.message){
                            html += '<span class="swatch-group-sale-message">' + group.message + '</span>';
                        }

                        html += '</div>';
                    }
                    html += '<div class="swatch-grouping">';

                    if (group.swatchHtml.quickShip.length > 0){
                        hasQuickShip = true;
                        html += '<div class="grouping-quick-ship">';
                        html += group.swatchHtml.quickShip;
                        html += '</div>';
                    }

                    html += group.swatchHtml.standard;
                    html += '</div>';
                    html += '</div>';

                });

                if (hasQuickShip){
                    html += '<div class="quick-ship-message"><i class="fas fa-shipping-fast"></i> <strong>Get it quick!</strong> Highlighted colors are in stock and ship within ' + quickShipLeadTime + ' while supplies last.</div>';
                }

            }

            return html;
        },

        /**
         * Render select by part of config
         *
         * @param {Object} config
         * @param {String} chooseText
         * @returns {String}
         * @private
         */
        _RenderSwatchSelect: function (config, chooseText) {
            var html;

            if (this.options.jsonSwatchConfig.hasOwnProperty(config.id)) {
                return '';
            }

            html =
                '<select class="' + this.options.classes.selectClass + ' ' + config.code + '">' +
                '<option value="0" option-id="0">' + chooseText + '</option>';

            $.each(config.options, function () {
                var label = this.label,
                    attr = ' value="' + this.id + '" option-id="' + this.id + '"';

                if (!this.hasOwnProperty('products') || this.products.length <= 0) {
                    attr += ' option-empty="true"';
                }

                html += '<option ' + attr + '>' + label + '</option>';
            });

            html += '</select>';

            return html;
        },

        /**
         * Input for submit form.
         * This control shouldn't have "type=hidden", "display: none" for validation work :(
         *
         * @param {Object} config
         * @private
         */
        _RenderFormInput: function (config) {
            return '<input class="' + this.options.classes.attributeInput + ' super-attribute-select" ' +
                'name="super_attribute[' + config.id + ']" ' +
                'type="text" ' +
                'value="" ' +
                'data-selector="super_attribute[' + config.id + ']" ' +
                'data-validate="{required: true}" ' +
                'aria-required="true" ' +
                'aria-invalid="false" ' +
                'style="visibility: hidden; position:absolute; left:-1000px">';
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

            $widget.element.on('click', '.clear-selected-option', function () {
                return $widget._ClearSelectedOptionClick($(this), $widget);
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

            $widget.element.on('keydown', function (e) {
                if (e.which === 13) {
                    target = $(e.target);

                    if (target.is('.' + options.optionClass)) {
                        return $widget._OnClick(target, $widget);
                    } else if (target.is('.' + options.selectClass)) {
                        return $widget._OnChange(target, $widget);
                    } else if (target.is('.' + options.moreButton)) {
                        e.preventDefault();

                        return $widget._OnMoreClick(target);
                    }
                }
            });
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

        _ClearSelectedOptionClick: function($this, $widget, eventName){
            var $parent = $this.parents('.' + $widget.options.classes.attributeClass);
            $parent.find('.selected.' + $widget.options.classes.optionClass).trigger('click');
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
                $input = $parent.find('.' + $widget.options.classes.attributeInput);

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
                $this.attr('aria-checked', false);
            } else {
                $parent.attr('option-selected', $this.attr('option-id')).find('.selected').removeClass('selected');
                $label.text($this.attr('option-label'));
                $input.val($this.attr('option-id'));
                $input.attr('data-attr-name', this._getAttributeCodeById(attributeId));
                $this.addClass('selected');
                $widget._toggleCheckedAttributes($this, $wrapper);
            }

            $widget._Rebuild();

            if ($widget.element.parents($widget.options.selectorProduct)
                    .find(this.options.selectorProductPrice).is(':data(mage-priceBox)')
            ) {
                $widget._UpdatePrice();
            }
            
            $widget._loadMedia(eventName);
            $input.trigger('change');
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
            window.location.href = $this.closest('.product-item-info').find('a.product.product-item-photo').attr('href');
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
                selected = controls.filter('[option-selected]');

            // Enable all options
            $widget._Rewind(controls);

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
                    //setTimeout(function () {
                    //    $widget._DisableProductMediaLoader($this);
                    //}, 300);
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
            return;
            $.each(selectedAttributes, $.proxy(function (attributeCode, optionId) {
                this.element.find('.' + this.options.classes.attributeClass +
                    '[attribute-code="' + attributeCode + '"] [option-id="' + optionId.replace('"', '\"') + '"]').trigger('click');
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
