$(window).load(function(){ 
	$('.rose-gold').click(function(){
	setTimeout(function(){
	  $(".pplr_Rose_Gold").click();
      $("span[data-val='Rose Gold']").click(); 
	}, 200);
	});
	$('.silver').click(function(){
	setTimeout(function(){
	  $(".pplr_Silver").click();
      $("span[data-val='Silver']").click();
	}, 200);
	});
	$('.unpainted').click(function(){
	setTimeout(function(){
	  $(".pplr_Unpainted").click();
      $("span[data-val='Unpainted']").click();
	}, 200);
	});
	$('.white').click(function(){
	setTimeout(function(){
	  $(".pplr_White").click();
      $("span[data-val='White']").click();
	}, 200);
	});
	$('.black').click(function(){
	setTimeout(function(){
	  $(".pplr_Black").click();
      $("span[data-val='Black']").click();
	}, 200);
	});
	$('.gold').click(function(){
	setTimeout(function(){
	  $(".pplr_Gold").click();
      $("span[data-val='Gold']").click();
	}, 200);
	});
	$('.light-pink').click(function(){
	setTimeout(function(){
	  $(".pplr_Light_Pink").click();
      $("span[data-val='Light Pink']").click();
	}, 200);
	});
	$('.pink').click(function(){
	setTimeout(function(){
	  $(".pplr_Pink").click();
      $("span[data-val='Pink']").click();
	}, 200);
	});
	$('.light-blue').click(function(){
	setTimeout(function(){
	  $(".pplr_Light_Blue").click();
      $("span[data-val='Light Blue']").click();
	}, 200);
	});
	$('.blue').click(function(){
	setTimeout(function(){
	  $(".pplr_Blue").click();
      $("span[data-val='Blue']").click();
	}, 200);
	});
	$('.navy-blue').click(function(){
	setTimeout(function(){
	  $(".pplr_Navy_Blue").click();
      $("span[data-val='Navy Blue']").click();
	}, 200);
	});
	$('.ivory').click(function(){
	setTimeout(function(){
	  $(".pplr_Ivory").click();
      $("span[data-val='Ivory']").click();
	}, 200);
	});
    $('.pplr-color-select').css('display', 'none');
    $('.pplr-_color').css('display', 'none');
  
    $( "input[name='option-0']" ).click(function(){
      $("input[name='option-1']:checked").click();
    });
    $( "input[name='option-0']" ).one( "click", function(){
      setTimeout(function(){
        $(".color").first().click();
      }, 200);
    });
    $( "input[name='option-2']" ).click(function(){
      $('.pplr-_color').css('visibility', 'hidden');
      $("input[name='option-1']:checked").click();
      setTimeout(function(){
        $('.pplr-_color').css('display', 'none');
      }, 1);
    });
  
/* Mat Styles
    $('.split-letter').click(function(){
        setTimeout(function(){
          $("._pplr_split_letter").click();
          $("span[data-val='Split Letter']").click();
        }, 200);
        });
    $('.welcome').click(function(){
      setTimeout(function(){
        $("._pplr_welcome").click();
        $("span[data-val='Welcome']").click();
      }, 200);
      });
    $('.curly').click(function(){
      setTimeout(function(){
        $("._pplr_curly").click();
        $("span[data-val='Curly']").click();
      }, 200);
      });
    $('.established').click(function(){
      setTimeout(function(){
        $("._pplr_established").click();
        $("span[data-val='Established']").click();
      }, 200);
      });
    $('.leafy').on('click', function () {
      setTimeout(function(){
        $("._pplr_leafy").click();
        $("span[data-val='Leafy']").click();
      }, 200);
      });
    $('.intricate-name').click(function(){
      setTimeout(function(){
        $("._pplr_intricate_name ").click();
        $("span[data-val='Intricate Name']").click();
      }, 200);
      });
   // $('.pplr-style').css('display', 'none');*/
});
