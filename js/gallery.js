/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
define([
    'glide',
    'jquery',
    'threesixty',
    'uiClass',
    'owlcarousel'
], function (Glide, $, ThreeSixty, Class) {

    return Class.extend({

        defaults: {
            settings: {},
            config: {},
            startConfig: {}
        },

        /**
         * Initializes gallery.
         * @param {Object} config - Gallery configuration.
         * @param {String} element - String selector of gallery DOM element.
         */
        initialize: function (config, element) {

            this._super();
            this.config = config;

            window.initialGalleryConfig = this.data;
            $('.gallery-images').trigger('mediaGalleryInitial');

            this.initGallery();
            this.init360();

        },

        isMobile: function(){
            
            return window.matchMedia("(max-width: 767px)").matches;
        },

        init360: function(){

            var self = this;

            if (self.config.threeSixty){

                $('.gallery-360-open').click(function(){

                    var element = $(this);
                    console.log(element);
                    if (!element.attr('href')) return;

                    var $threeSixty = $('.rotate-container .rotate-interior');

                    $threeSixty.threeSixty({
                        dragDirection: 'horizontal', 
                        images: self.config.threeSixty,
                        draggable: true,
                        onLoad: function(){
                            $('.rotate-container .rotate-interior-container')
                                .find('.rotate-guideline').show().end()
                                .find('.rotate-instructions').show();
                        }
                    });
                    self.openFullscreen($('.rotate-container'));

                });

                $('.rotate-close').click(function(){

                    self.closeFullscreen($('.rotate-container'));
                });
            }
        },

        openFullscreen: function(element){

            $('body').addClass('fullscreen');
            element.addClass('fullscreen');
            return;

            var baseElement = element.get(0);

            if (baseElement.requestFullscreen) {
                baseElement.requestFullscreen();

            } else if (baseElement.mozRequestFullScreen) { /* Firefox */
                baseElement.mozRequestFullScreen();

            } else if (baseElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
                baseElement.webkitRequestFullscreen();

            } else if (baseElement.msRequestFullscreen) { /* IE/Edge */
                baseElement.msRequestFullscreen();

            } else {
                $('body').addClass('fullscreen');
                element.addClass('fullscreen');
            }

        },

        closeFullscreen: function(element){

            $('body').removeClass('fullscreen');
            element.removeClass('fullscreen');
            return;

            if (document.exitFullscreen) {
                document.exitFullscreen();

            } else if (document.mozCancelFullScreen) { /* Firefox */
                document.mozCancelFullScreen();

            } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
                document.webkitExitFullscreen();

            } else if (document.msExitFullscreen) { /* IE/Edge */
                document.msExitFullscreen();
            
            } else {
                $('body').removeClass('fullscreen');
                element.removeClass('fullscreen');
            }

        },

        initGallery: function(){

            var self = this;

            $('.product.media .zoomicon').click(function(){
                $('body').trigger('lazyloadRefresh');
                self.openFullscreen($('.fullscreen-container'));
                self.initFullscreenEvents();
                self.positionFullscreen();
            });

            //if (self.data.length == 1) return;

            this.isLoaded = false;
            this.onLoad = function(){};

            this.imagesObject = $('.gallery-images');
            this.images = new Glide('.gallery-images', {
                type: 'carousel',
                perView: 1,
                swipeThreshold: 60,
                animationDuration: 325,
                animationTimingFunc: 'ease-out'
            });
        
            this.images.returnCurrentImages = function(){
                return self.data;
            }            

            this.imagesObject.data('gallery', this.images);

            if (!this.isMobile()){
                this.initThumbnails();
                this.initMovement();
                this.thumbnails.mount();
            } else {
                this.initDots();
            }
            
            this.initVideo();
            this.images.mount();

            this.imagesObject.trigger('load');

            this.isLoaded = true;
            this.onLoad();

        },

        positionFullscreen: function(){

            var fullscreenIndex = $('.gallery-images .glide__slide--active').attr('data-full-index');
            if (!fullscreenIndex) return;

            if (this.mobileCarousel){
                this.mobileCarousel.trigger('to.owl.carousel', [fullscreenIndex, 0]);
            } else {

                setTimeout(function(){

                    var target = $('.fullscreen-container .images .image[data-index="' + fullscreenIndex + '"]');

                    var container = $('.fullscreen-container');
                    
                    container.animate({
                        scrollTop: target.offset().top - container.offset().top + container.scrollTop()
                    }, 500);
                }, 100);
            }

        },

        initFullscreenEvents: function(){

            var self = this;

            if (self.initializedFullscreenEvents) return;
            self.initializedFullscreenEvents = true;

            $('.fullscreen-container .fullscreen-close').click(function(){
                self.closeFullscreen($('.fullscreen-container'));
            });

            if (this.isMobile()){

                //if (self.data.length > 1){

                    this.mobileCarousel = $('.fullscreen-container .images .scroll-container').addClass('owl-carousel').owlCarousel({
                        items: 1,
                        nav: true
                    });
                //} else {
                //    $('.fullscreen-container .images .scroll-container').addClass('single-image');
                //}
            } else {

                $('.fullscreen-container .thumbnails .image').click(function(){

                    var element = $(this);
                    var target = $('.fullscreen-container .images .image[data-index="' + element.attr('data-index') + '"]');

                    var container = $('.fullscreen-container');
                    
                    container.animate({
                        scrollTop: target.offset().top - container.offset().top + container.scrollTop()
                    });
                });

                $('.fullscreen-container .thumbnails .scroll-container').slimScroll({
                    height: '100%',
                    width: '100px',
                    size: '7px',
                    color: '#000',
                    wheelStep : 10,
                    touchScrollStep : 75,
                    railVisible: false,
                    position: 'right',
                    distance: '3px',
                    alwaysVisible: false,
                    railColor: '#000',
                    borderRadius: "8px",
                    railBorderRadius: "8px",
                    railOpacity: .05,
                    scrollTo: 0
                });
            }
        },

        initVideo: function(){

            this.imagesObject.find('a.gallery-image-video').click(function(){

                var video = $(this);
                if (!video.attr('href')) return;

                var iframeTag = '<div class="product-gallery-video-iframe"><div class="iframe-wrapper"><iframe src="' + ($(this).attr('data-src')) + '" frameborder="0" allowfullscreen></iframe><a class="video-close" href="javascript:;">close</a></div><div class="overlay">&nbsp;</div></div>';
                $(iframeTag).appendTo('body');
    
                $('.product-gallery-video-iframe .overlay').click(function(){
                    $(".product-gallery-video-iframe").remove();
                })
                $('.video-close').on('click', function() {
                    $(".product-gallery-video-iframe").remove();
                });

            });

        },

        initDots: function(){
            this.imagesObject.find('.glide__bullets').show();
        },

        initThumbnails: function(){
            this.thumbnailsObject = $('.gallery-thumbnails .glide');
            this.thumbnails = new Glide('.gallery-thumbnails .glide', {
                perView: 8,
                bound: true,
                rewind: false,
                keyboard: false,
                animationDuration: 250,
                breakpoints: {
                    1150: {
                        perView: 6
                    },
                    1000: {
                        perView: 5
                    },
                    768: {
                        perView: 4
                    }
                }
            });
            this.thumbnailsObject.find('li.glide__slide:first-child').addClass('active');
            this.imagesObject.data('thumbnails', this.thumbnails);
            this.checkThumbnailCount();
            $('.gallery-thumbnails').show();
        },

        checkThumbnailCount: function(){
           
            var self = this;
            var thumbnails = self.thumbnails;
            var thumbnailsObject = self.thumbnailsObject;
            var thumbnailSlideCount = self.thumbnailsObject.find('.glide__slide').size();

            if (thumbnails.settings.perView > thumbnailSlideCount){
                thumbnails.update({
                    dragThreshold: false,
                    swipeThreshold: false
                });
                thumbnailsObject.find('.glide__arrow').hide();
            } else {
                thumbnails.update({
                    dragThreshold: 120,
                    swipeThreshold: 80
                });
                thumbnailsObject.find('.glide__arrow').show();
            }

        },

        initMovement: function(){

            var self = this;

            this.thumbnails.on('run.after', function(){
                
                var thumbnails = self.thumbnails;
                var thumbnailsObject = self.thumbnailsObject;
                var thumbnailSlideCount = self.thumbnailsObject.find('.glide__slide').size();

                if (thumbnails.index == 0){
                    thumbnailsObject.find('.glide__arrow--left').addClass('disabled');
                    thumbnailsObject.find('.glide__arrow--right').removeClass('disabled');
                } else {
                    thumbnailsObject.find('.glide__arrow--left').removeClass('disabled');
        
                    if (thumbnails.index + thumbnails.settings.perView == thumbnailSlideCount){
                        thumbnailsObject.find('.glide__arrow--right').addClass('disabled');
                    }
                }

                self.checkThumbnailCount();

            });

            this.images.on('run.after', function(){
                
                var activeIndex = self.images.index;
                var activeThumbnailIndex = self.thumbnails.index;
                var activePerView = self.thumbnails.settings.perView;

                self.thumbnailsObject.find('.glide__slide').filter('.active').removeClass('active')
                    .end().filter('[data-index="' + activeIndex + '"]').addClass('active');

                if (activeThumbnailIndex + activePerView <= activeIndex){
                    self.thumbnails.go('=' + (activeIndex - activePerView + 1));
                }
                else if (activeIndex <= activeThumbnailIndex){
                    self.thumbnails.go('=' + activeIndex);
                }

            });

            this.thumbnailsObject.find('.glide__slides').on('click', '.glide__slide a', function(){
                $(this).parent().siblings().removeClass('active').end().addClass('active');
                self.images.go('=' + $(this).attr('data-index'));
            });
        }
    });
});
