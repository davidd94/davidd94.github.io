$(document).on('ready', function() {
  if ($('body.template-product .swatch').length) {    
    if ($('#product-selectors option').length == 1) {
      $('.swatch').remove()
    } else {
    
	$('.swatch input[type="radio"]').attr('checked',false)
    $('#product-variants + .row').addClass('disabled')
    $('.swatch-element').on('click', function() {
      	$(this).parent().addClass('selected')
      	el = $('.swatch[data-option-index="' + (parseInt($(this).parents('.swatch').attr('data-option-index')) + 1) + '"]')
        el2 = $('.swatch[data-option-index="' + (parseInt($(this).parents('.swatch').attr('data-option-index')) + 2) + '"]')
        //setTimeout(function() {el.find('input[type="radio"]').attr('checked',false)}, 10)
        el.addClass('active')
		el.find('.swatch-body').slideDown(500)
        el2.addClass('active')
		el2.find('.swatch-body').slideDown(500)
        
        if (parseInt(el.attr('data-option-index')) + 1 == $('body.template-product .swatch').length) {
            $('body.template-product .row.disabled').removeClass('disabled')
        }
    })
    }
    timer = null
    setTimeout(function() {
    timer = setInterval(function() {
      if ($('#infiniteoptions-container').text() == '') {
		$('#infiniteoptions-container').parents('.swatch').hide()
      } else {
        $('#infiniteoptions-container').parents('.swatch').show()
      }
    }, 1000)
    }, 1000)
    
    setTimeout(function() {
    	clearInterval(timer)
    }, 10 * 1000)
  }
  $('.bottom-slider').slick({
    arrows: false,
    dots: true
  })
  
  $('.scroll-top').on('click', function() {
  $('html, body').animate( {scrollTop: 0} , 1000)
                    return false;
  })
  
  $('.material-section .tabs-nav a').on('click', function() {
    if (!$(this).is('.active')) {
     index = $(this).index()
     $(this).parents('.tabs').prev().find('.active').removeClass('active')
     $(this).parents('.tabs').find('.active').removeClass('active')
     $(this).addClass('active')
     $(this).parents('.tabs').find('[data-tab="' + index + '"]').addClass('active')
     $(this).parents('.tabs').prev().find('[data-tab="' + index + '"]').addClass('active')
    }
  	return false;
  })
  
  $('.search-item > a').on('click', function() {
    $('.search-popup').addClass('active')
  	return false
  })
  $('.search-popup .bg').on('click', function() {
    $('.search-popup').removeClass('active')
  	return false
  })
  
  $('section.about-video .above').on('click', function() {
    $(this).next().attr('src', $(this).next().attr('src') + '?autoplay=1')
  	$(this).addClass('show')
  })
  $('.fixed-add-to-cart').on('click', function() {
    $('#product-add-to-cart').click()
  return false
  })
  
  $('.pinit').on('click', function() {
    var script=document.createElement('script');
script.type='text/javascript';
script.src= 'http://assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999;

$("body").append(script);
  return false
  })
})

$(window).on('scroll', function() {
  if ($('#product-add-to-cart').length) {
    if ($(window).scrollTop() + $(window).height() - 100 > $('#product-add-to-cart').offset().top) {
      $('#product-add-to-cart').addClass('onscroll')
      if (!$('.add-to-cart-action').is('.disabled')) { $('.fixed-add-to-cart').addClass('on') }
    } else {
      $('#product-add-to-cart').removeClass('onscroll')
      $('.fixed-add-to-cart').removeClass('on')
    }
  }
})
$( document ).ready(function() {
  $("#searchicon").click(function() {
    setTimeout(function(){
      $("#search").focus();
    }, 200);
  });
});
