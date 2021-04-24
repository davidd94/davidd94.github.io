var pplrReadyCustom = function(callback) {
  document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

if (typeof __st !== "undefined") {
      if (__st.p == 'product' ) {
        var pd_id = __st.rid;
        if(pd_id !== pplr_product.id ){

        }
      } else {
        var pd_id = pplr_product.id;
      }
    }
  else {
    var pd_id = pplr_product.id;
  }

var loadScript_p = function(url, callback) {
  var script = document.createElement("script")
  script.type = "text/javascript";
  if (script.readyState) {
    script.onreadystatechange = function() {
      if (script.readyState == "loaded" ||
          script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = function() {
      callback();
    };
  }
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function dominicolors(){
    var link = "<link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/jquery-minicolors/2.2.6/jquery.minicolors.min.css'>";
    jQuery("head").append(link);
    loadScript_p('//doshopify.com/product-personalizer/jquery.minicolors.min.js', function() {
      pplrReadyCustom(function() {
        jQuery('.jscolor').each( function() {
          jQuery(this).minicolors({
            change: function(value, opacity) {
              jQuery(this).val(value).trigger('change');
                var name = jQuery(this).attr("name");
                var frame = jQuery(this).data("frame");
                jQuery('.jscolor[name="' + name + '"]').each(function() {
                  var t = jQuery(this);
                  if (t.attr('data-frame') !== frame) {
                        t.val(value);
                        t.siblings().find('.minicolors-swatch-color').css('background-color',value);
                  }
                });
            }
          });
        })
      });
    });
  }
var ua = navigator.userAgent || navigator.vendor || window.opera;
if(ua.indexOf("Instagram") > -1){
  window.addEventListener( "pageshow", function ( event ) {
    var historyTraversal = event.persisted || ( typeof window.performance != "undefined" &&  window.performance.navigation.type === 2 );
    if ( historyTraversal ) {
      window.location.reload();
    }
  });
}
if (isIE()) {
  loadScript_p('//cdnjs.cloudflare.com/ajax/libs/flot/0.8.3/excanvas.min.js', function() {})
}

function decode_utf8(s) {
  return decodeURIComponent(encodeURIComponent(s));
}

function pisFacebookOrInstagram() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1) || (ua.indexOf("Instagram") > -1);
}

function pisSafari() {
  return !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
}
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var isMobile = false; 
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  isMobile = true;
}
function isIE() {
  var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
    {
    return true;
    }
    else{return false;}
}

function is_int(value) {
  return !isNaN(value) &&
    parseInt(Number(value)) == value &&
    !isNaN(parseInt(value, 10));
}

function extractContent(s) {
    var txt = document.createElement("textarea");
  txt.innerHTML = s;
  var span = document.createElement('span');
  span.innerHTML = txt.value;
  return (span.textContent).replace(/"/g,'&quot;') || (span.innerText).replace(/"/g,'&quot;');
};


function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

function pplrischecked(tis){
  if(tis.is(':checkbox')){
    if(tis.is(':checked')){
      return true;
    }
    else{
      return false;
    }
  }
  else{
    return true;
  }

}


function isRTL(s){           
  var ltrChars    = 'A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF'+'\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF',
      rtlChars    = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC',
      rtlDirCheck = new RegExp('^[^'+ltrChars+']*['+rtlChars+']');

  return rtlDirCheck.test(s);
};


function pplrreverse(s){
  return s.split("").reverse().join("");
}

function selectthistag(t,e){
  var a= jQuery(t).parent(),
      b= jQuery(t).data('val'),
      c=a.siblings('[data-tag="'+decodeHtml(b).replace(/["']/g, "").replace(/ /g, '_').replace(/\./g, '')+'"]');
  jQuery(t).addClass('active').siblings().removeClass('active');
  a.siblings().hide();
  c.show();
  a.siblings('.pplr_deselect').show();
  if(e){
     pplrcomplete();
    c.first().trigger('click');
  }

}

  function pplrgetC(cn) {
    cn=cn+pd_id;
      var n = cn + "=";
      var d = decodeURIComponent(document.cookie);
      var ca = d.split(';');
      for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(n) == 0 && c !==n) {
          return c.substring(n.length, c.length);
        }
      }
      return false;
    }

  function setC(cn, cv) {
    cn=cn+pd_id
    var d = new Date();
    d.setTime(d.getTime() + (30*24*60*60*1000));
    var s = "expires="+ d.toUTCString();
    document.cookie = cn + "=" + cv + ";" + s + ";path=/";
  }


function updatepricepplr(tis,m){
if(m){
  if(jQuery(tis).find(":selected").attr('data-price')>0){
	jQuery(tis).addClass('pplraddprice').attr('data-price',jQuery(tis).find(":selected").attr('data-price'));
  }
  else{
	jQuery(tis).removeClass('pplraddprice');
  }
  jQuery(tis).attr('data-variant',jQuery(tis).find(":selected").attr('data-variant'));
}
  var frame =jQuery(tis).attr('data-frame');
  var name= jQuery('.pplr_select[data-frame="'+frame+'"]').attr('name');
  jQuery('.pplr_select[name="'+name+'"]').each(function() {
	var t = jQuery(this);
	if (t.val() !== jQuery(tis).val()) {
	  t.val(jQuery(tis).val());
	  var dp = t.find('option[value="'+jQuery(tis).val()+'"]').attr("data-price");
	  t.attr("data-price",dp);
	}
  })
  if(m){
  if(jQuery(tis).val() !==''){jQuery(tis).parents(RP).removeClass('pplr_red_wrapper');}
  }
}
var _PP = product_personalizer;
var _CM = 'cstmfy_meta_';
var _SJ = settings_json;
if (typeof pplr_c_title == 'undefined') {
  var pplr_c_title = '_'+_SJ[8];
}
var app_link_pplr = 'https://doshopify.com/product-personalizer/';
var _p_R = ".pplr-wrapper input[required]:not([disabled]),.pplr-wrapper textarea[required]:not([disabled]),.pplr-wrapper select[required]:not([disabled])";
var hasfont = false;
var loadfont = "<div class='pplrloadfont' style=\"font-family:\'pFontAwesome\';\">a</div>";
var font_face_array = [];
var t_p_f = []
var fontface = "@font-face {font-family: '" + "pFontAwesome" + "';src: url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf') format('truetype');} ";
var fontface3='';
var resizepplr ='';
var pplr_formdata;
var pplrframe = 1;
var pplrtracolready = false;
var font_loaded = false;
var pplrloading = false;
var checktimout;
var pplrimgloading = true;
var p_d_o = false;
var cimage = false;
var pplrloadfinish= 1;
var create_pplr = false;
var create_svg = false;
var price_pplr = false;
var gcolor = false;
var pplr_html ;
var pricechange = false;
var pplrcurrentimage='';
var spn = 10;
var pplrlarge_all='';
var pplrlarge = '';
var tabstart =0;
var pplrabsloaded = true;
var tabend = false;
var pplr_final;
var change_frame = false;
var c_f_t = true;
var pplr_final_check=false;
var fontload = [];
var image_load = [];
var pplr_design_p = {};
var _CP = _PP['cstmfy_prodata'].split(',');
var _P_P = ".product-personalizer";
var cstmfywidth = _CP[3];
var pplr_tolal_image = [];
var fNamearray = [];
if (parseInt(cstmfywidth) > 1024) {
  var pplrreplace = "_2048x2048.";
} else {
  var pplrreplace = "_1024x1024.";
}
if (typeof pplr_enabled_currencies_size == 'undefined') {
    var pplr_enabled_currencies_size = 1;
}
var p_ecz = pplr_enabled_currencies_size;
var hden = 0;
var rounding = 0;
var recurstop = true; 
var img_loader = app_link_pplr+'l_loading.gif';
var createproduct = _CP[7];
var pplrheight = window.innerHeight;
var pplr_delay = 0;
var canratio = 1;
var pplr_tab ='';
var RP = '.pplr-wrapper';
var pplr_image = _PP['cstmfy_meta_1'].split(',')[18];
var pplr_old_image = pplr_image;
  var atcb = _SJ[27];

var blendc=['source-over','lighter','multiply','screen','overlay','darken','lighten'];
_SJ[9] = _SJ[9].replace("#","").replace(".","");
var add_to_cart = '.so-btn-add-to-cart,.pf-product-form [data-pf-type="ProductATC"]:visible,input[name=\"add\"],button[name=\"add\"],#buy_it_now,#addToCart,#add-to-cart,.product-form--atc-button,.ProductForm__AddToCart,.add-to-cart,.AddToCart-product-template,#add-to-cart,.product-submit,.' + _SJ[9]+',#' + _SJ[9];
var kkr = /(_compact\.)|(_medium\.)|(_large\.)|(_grande\.)|(_160x160\.)|(_480x480\.) |(_900x900\.)|(_400x400\.)|(_1024x1024\.)|(_2048x2048\.)|(_580x@2x\.)|(_2048x@2x\.)|(_580x\.)|(_600x\.)|(_530x\.)|(_1200x\.)|(_800x\.)|(_850x\.)|(_900x\.)|(_100x\.)|(_300x\.)|(_1024x\.)|(_2000x\.)|(_2048x\.)|(_custompplr\.)/;
var queryreplacestring = kkr.toString().replace("custompplr", _SJ[12]);
queryreplacestring = new RegExp(queryreplacestring);
var queryreplacestring2 = /.+_((?:medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})(@{1}?\d{1}?x{1}?)*[_\.]/;
var p_r ;
var diffcur = false;
if (typeof pplr_shop_currency !== 'undefined') {
	if(pplr_shop_currency !== Shopify.currency.active){
		diffcur = true;
	}
}

if(_SJ2[20]>0){
var bcolor = ' style="background-color:'+_SJ2[21]+'" ';
}
else{
var bcolor = '';
}
var PIXEL_RATIO = (function() {
  var el = document.createElement('canvas');
  var ctx = el.getContext('2d');
  var dpr = window.devicePixelRatio || 1,
      bsr = ctx.webkitBackingStorePixelRatio ||
      ctx.mozBackingStorePixelRatio ||
      ctx.msBackingStorePixelRatio ||
      ctx.oBackingStorePixelRatio ||
      ctx.backingStorePixelRatio || 1;
  return dpr / bsr;
})();
var p_r = PIXEL_RATIO;
function sourceBiggerFont(tis){
  var a = jQuery(tis).siblings('.pplr-size-select');
  var now_font = a.attr('data-size');
  var now_frame =a.attr('data-frame');
  var now_name= jQuery('.pplr_text[data-frame="'+now_frame+'"]').attr('name');
   jQuery('.pplr-size-select[data-frame="' + now_frame + '"]').attr('data-size',(now_font*1.1+1).toFixed(2));
  jQuery('.pplr_text[name="'+now_name+'"]').each(function() {
    jQuery(this).parent(RP).find('.pplr-size-select').attr('data-size',(now_font*1.1+1).toFixed(2));
  })
  LoadPplrWithFont(pplrframe);
}

function sourceSmallerFont(tis){
  var a = jQuery(tis).siblings('.pplr-size-select');
  var now_font = a.attr('data-size');
  var fr = a.attr('data-frame');
  var n = 0.9;
  var fh= 1;
  if (jQuery('input.pplr_font[data-frame=\"' + fr + '"]').length !== 0) {
    fh = jQuery('input.pplr_font[data-frame=\"' + fr + '"]').attr('data-height');
  }
  if(now_font>a.val()*0.9){
    now_font = a.val()*0.95/fh;
    n = 1;
  }
  if(now_font*0.9>4){
    var now_frame =a.attr('data-frame');
    var now_name= jQuery('.pplr_text[data-frame="'+now_frame+'"]').attr('name');
    jQuery('.pplr-size-select[data-frame="' + now_frame + '"]').attr('data-size',(now_font*n).toFixed(2));
    jQuery('.pplr_text[name="'+now_name+'"]').each(function() {
      jQuery(this).parent(RP).find('.pplr-size-select').attr('data-size',(now_font*n).toFixed(2));
    })
    LoadPplrWithFont(pplrframe);
  }
}
function pplr_align_select(tis,t){
  jQuery(tis).addClass('active').siblings().removeClass('active');
  var now_frame =jQuery(tis).siblings('.pplr-align-select').attr('data-frame');
  var now_name= jQuery('.pplr_text[data-frame="'+now_frame+'"]').attr('name');
  jQuery('.pplr_text[name="'+now_name+'"]').each(function() {
    jQuery(this).parent(RP).find('.pplr-align-select').val(t);
  })
  LoadPplrWithFont(pplrframe);

}

function pplrcomplete(){
  if(jQuery(".pplr_image_loaded")[0] || _CP[10]>2 || _CP[8] !=='1' && _CP[10]<3){
  jQuery(".pplr-wrapper:not(.pplr_no_preview) .pplr-swatch-element[data-thumb]:visible").each(function() {
      jQuery(this).css('background-image', 'url("' + jQuery(this).attr('data-thumb') + '")');
      jQuery(this).removeAttr('data-thumb');
  })
}
}

function pplr_tab_show(k,tis){
  jQuery('#pplr_tab_'+k).addClass('pplr_active').siblings().removeClass('pplr_active');
  jQuery(tis).addClass('pplr_active').siblings().removeClass('pplr_active');
  var t_ = jQuery('#pplr_tab_'+k).find(RP+'[data-main]:not(.pplr_no_preview)');
  if(t_[0]){
  var frame = t_.first().attr("data-main");
  }else{
  var frame = jQuery('#pplr_tab_'+k).find(RP+'[data-main]').first().attr("data-main");
  }
  setTimeout(function() {
    var b = jQuery('.pplr_tab_wrapper');
    var c = jQuery(".pplr-p-right:visible");
    if(!c[0]){c = jQuery(_P_P);}
    var d= 0; if(c[0]){d = -c.offset().top;}
    var a = d+b.offset().top;
    if(a<0){
      c.animate({ scrollTop:c.scrollTop()+a});
    }
    jQuery('.pplr_active').animate({ scrollTop:0});
  },10);
  pplr_hide_duplicate();
  LoadPplrWithFont(frame);
  pplrcomplete();
}

function updatecondition(k,mn,t,s,r,v,qr){
  if(p_d_o){

      return;
  }
  
  if (_CP[10]>2) {
	if(!jQuery('.pplr-main')[0]){
		return;
	  }
  }

  var p = k; 
  var upc = true;
  var ancestor = [];
  var showcon = [];
  var has_v_id = true;

var variant_now = pplr_variant_id(jQuery(RP).closest('form'));
var varriant_title = pplr_variant_title(variant_now);
  if (Array.isArray(conditions_json) || typeof(conditions_json) !== 'undefined') {
    for (var y = 0; y < Object.keys(conditions_json).length; ++y) {
      var pplrcheck = true;
      var A= conditions_json[y][0];
      var B = conditions_json[y][1].split('||'); 
      var B0 = decodeHtml(decode_utf8(conditions_json[y][1]));
      var B1 = decodeHtml(decode_utf8(conditions_json[y][1])).split('||');
      var B2 = decodeHtml(decode_utf8(extractContent(conditions_json[y][1]))).split('||');
      var C = conditions_json[y][2];
      var D = conditions_json[y][3].split('||');
      var E = jQuery('input[data-frame="' + A+ '"]:not(.pplr-crop):not(.pplr_no_condition),select[data-frame="' + A+ '"]').val();
      if(B=='unchecked'){ var pplrcheck = false;}
      if( B.indexOf(E) > -1 || B1.indexOf(E) > -1 || B2.indexOf(E) > -1 || B0.indexOf(variant_now) > -1 || B0.indexOf('-'+varriant_title) > -1 || jQuery('.pplrcheckbox[data-frame="' + A+ '"]').is(':checked')==pplrcheck ){
        if(B0.indexOf(variant_now) > -1 || B0.indexOf('-'+varriant_title) > -1){
          has_v_id = false;
        }
      if(C=='show'  && ancestor.indexOf(A)<0){
        for (l = 0; l < D.length; ++l) {
            if(showcon.indexOf(D[l])<0){
              showcon.push(D[l]);
            }
          }

        }
        else{
          for (l = 0; l < D.length; ++l) {
          ancestor.push(D[l]);
        }

        }

      }
      else{

        if(C=='show' ){
          for (l = 0; l < D.length; ++l) {
          ancestor.push(D[l]);
        }

        }
        else{
          for (l = 0; l < D.length; ++l) {
            if(showcon.indexOf(D[l])<0){
              showcon.push(D[l]);
            }

          }

        }

      }
    }

  }

  var hidecon = ancestor.filter(function(item, pos) {
    return ancestor.indexOf(item) == pos;
  });

  if(hden==hidecon.length){spn=0;}
  hden=hidecon.length;
  
  var newhidecon = [];

  for (var i = 0; i < hidecon.length; ++i) {
    if(!jQuery('.pplr-wrapper[data-main="' + hidecon[i]+ '"]').hasClass('pplr_no_preview')){
		var n_b = jQuery('.pplr-wrapper[data-main="' + hidecon[i]+ '"],.pplr-wrapper[data-frame="' + hidecon[i]+ '"]');
		n_b.addClass('pplr_no_preview').removeClass('pplr_show_preview').slideUp(spn);
    jQuery('.pplr_monogram[data-frame="' + hidecon[i]+ '"]').prop('disabled', true);
	  jQuery('.pplrcheckbox[data-frame="' + hidecon[i]+ '"]').prop('disabled', true);
      jQuery('.pplr_select[data-frame="' + hidecon[i]+ '"]').prop('disabled', true);
      jQuery('.pplr_aux[data-frame="' + hidecon[i]+ '"]').prop('disabled', true);
	  newhidecon.push(hidecon[i]);
    }
    var index = showcon.indexOf(hidecon[i]);
    if (index > -1) {
      showcon.splice(index, 1);
    }

  }
  for (var i = 0; i < newhidecon.length; ++i) {
	  var n_b = jQuery('.pplr-wrapper[data-main="' + newhidecon[i]+ '"],.pplr-wrapper[data-frame="' + newhidecon[i]+ '"]');
  	  if(n_b.hasClass('p_h_d_p')){
		  var L_ = n_b.find('.cstmfy_c_required,.pplrcheckbox,.pplr_imgg,.pplr_select,.pplr_text');
		  if(L_[0]){
			var f = L_.data('frame');
			var n = L_.attr('name');

			if(jQuery('.pplr-wrapper:not(.p_h_d_p):not(.pplr_no_preview):not(.cstmfy_static) [name="'+n+'"]').length == 0){

			var k = jQuery('[name="'+n+'"]').parents('.pplr-wrapper:not(.pplr_no_preview):not(.cstmfy_static)');
			k.removeClass('p_h_d_p').show(0);
			k.find('[name="'+n+'"]').removeClass('pplr_hide_duplicate').attr('disabled',false);
			}
		  }
		  
	  }
  }
  

var p_old = pplrframe;
var newframe = false;

for (var i = 0; i < showcon.length; ++i) {
	if(jQuery('.pplr-wrapper[data-main="' + showcon[i]+ '"]').hasClass('pplr_no_preview')){
	  var a = jQuery('.pplr-wrapper[data-main="' + showcon[i]+ '"]');
	  var b = jQuery('.pplr-wrapper[data-frame="' + showcon[i]+ '"]');
	  a.removeClass('pplr_no_preview');
	  b.removeClass('pplr_no_preview');
	  a.addClass('pplr_show_preview preffect').show();
	  b.removeClass('p_h_d_p');
	  a.removeClass('p_h_d_p');
		b.addClass('pplr_show_preview preffect').show();
    if(!jQuery('.pplr_img[data-f="' + showcon[i]+ '"]')[0]){
          jQuery('.pplr-wrapper:not(.cstmfy_static) .pplr_monogram[data-frame="' + showcon[i]+ '"]').prop('disabled', false);
    }
    newframe = true;
	  jQuery('.pplr_monogram[data-frame="' + showcon[i]+ '"]').removeClass('pplr_hide_duplicate');
	  jQuery('.pplr_select[data-frame="' + showcon[i]+ '"]').prop('disabled', false);
	  jQuery('.pplrcheckbox[data-frame="' + showcon[i]+ '"]').prop('disabled', false);
	  jQuery('.pplr_aux[data-frame="' + showcon[i]+ '"]').prop('disabled', false);

	}
}
var check1c = true;

if (jQuery('.pplr-wrapper[data-main="' + pplrframe+ '"]').hasClass('pplr_no_preview')) {
   for (var i = 0; i < showcon.length; ++i) {
    if(jQuery('.pplr-wrapper[data-main="' + showcon[i]+ '"]').parents('.pplr_tab.pplr_active')[0] && !jQuery('.pplr-wrapper .pplr_select[data-frame="' + showcon[i]+ '"]')[0]){
      pplrframe = showcon[i];
      check1c = false;
      break;
    }
    }
}

if (jQuery('.pplr-wrapper[data-main="' + pplrframe+ '"]').hasClass('pplr_no_preview') && check1c) {
   for (var i = 0; i < showcon.length; ++i) {
    if(jQuery('.pplr-wrapper[data-main="' + showcon[i]+ '"]').parents('.pplr_tab.pplr_active')[0]){
      pplrframe = showcon[i];
      check1c = false;
      break;
    }
    }
}

var showcon_a = showcon.sort(function(a, b){return a-b});

if (showcon_a.indexOf(pplrframe)<0 && newframe && check1c) {
   for (var i = 0; i < showcon_a.length; ++i) {
    if(jQuery('.pplr-wrapper[data-main="' + pplrframe+ '"]').hasClass('pplr_no_preview') && parseInt(showcon_a[i])>parseInt(p)){
      pplrframe = showcon_a[i];
      check1c = false;
      break;
    }
    }
}

if (showcon.indexOf(pplrframe)<0 && newframe && check1c) {
   for (var i = 0; i < showcon.length; ++i) {
    if(jQuery('.pplr-wrapper[data-main="' + pplrframe+ '"]').hasClass('pplr_no_preview')){
      pplrframe = showcon[i];
      check1c = false;
      break;
    }
    }
}

if (newframe && check1c) {
   for (var i = 0; i < showcon_a.length; ++i) {
    if(!jQuery('.pplr-wrapper[data-main="' + showcon_a[i]+ '"]').hasClass('pplr_no_preview') && parseInt(showcon_a[i])>parseInt(p) && jQuery('.pplr-wrapper[data-main="' + showcon_a[i]+ '"]').parents('.pplr_tab.pplr_active')[0]){
      check1c = false;
      pplrframe = showcon_a[i];
      break;
    }
    }
}

if (newframe && check1c) {
	 for (var i = 0; i < showcon_a.length; ++i) {
		if(!jQuery('.pplr-wrapper[data-main="' + showcon_a[i]+ '"]').hasClass('pplr_no_preview') && parseInt(showcon_a[i])>parseInt(p)){
      check1c = false;
		  pplrframe = showcon_a[i];
		  break;
		}
	  }
}

if (newframe && check1c) {
   for (var i = 0; i < showcon_a.length; ++i) {
    if(!jQuery('.pplr-wrapper[data-main="' + showcon_a[i]+ '"]').hasClass('pplr_no_preview')){
      if(jQuery('.pplr-wrapper[data-main="' + showcon_a[i]+ '"]').parents('.pplr_tab')[0] && jQuery('.pplr-wrapper[data-main="' + parseInt(p)+ '"]').parents('.pplr_tab')[0] && parseInt(showcon_a[i])<parseInt(p)){
      }else{
        pplrframe = showcon_a[i];
        break;
      }
    }
    }
}

if(p_old == pplrframe && jQuery('.pplr-wrapper input[data-frame="' + k+ '"]').hasClass('pplr_select') && k !== pplrframe){
  pplrframe = k;
}



if (jQuery('.pplr-wrapper[data-main="' + pplrframe+ '"]').hasClass('pplr_no_preview')) {
	var bg = jQuery('.pplr_tab.pplr_active .pplr-wrapper[data-main]:not(.pplr_no_preview)');
	if(bg[0]){
	pplrframe= bg.attr("data-main");
	}
}
if (jQuery('.pplr-wrapper[data-main="' + pplrframe+ '"]').hasClass('pplr_no_preview')) {
	var bg = jQuery('.pplr-wrapper[data-main]:not(.pplr_no_preview)');
	if(bg[0]){
	pplrframe= bg.attr("data-main");
	}
}
var p_l_h = false;
jQuery('.pplr_tab').each(function() {
  var q = jQuery(this);
  var v = q.find('.pplr-wrapper').length;
  var xy = q.find('.pplr_no_preview').length;
  var vx = q.data('tab');
  var vv = jQuery('.pplr_tab_index[data-tab="'+vx +'"]');
  if(v==xy){
    vv.addClass('p_l_h');
    p_l_h = true;
  }
  else{
    vv.removeClass('p_l_h');
  }

})
if(p_l_h){
ptabify(true);
}
var nn = jQuery('.pplr-wrapper[data-main="' + pplrframe+ '"]').parent('.pplr_tab');
if(nn[0] && p_old !== pplrframe){
    nn.addClass('pplr_active').siblings().removeClass('pplr_active');
    var k = nn.data('tab');
    jQuery('.pplr_tab_index[data-tab="'+k +'"]').addClass('pplr_active').siblings().removeClass('pplr_active');
}

if(jQuery('.pplr_tab_index:visible')[0]){
  if(!jQuery('.pplr_tab_index:visible').hasClass('pplr_active')){
    var nn = jQuery('.pplr_tab_index:visible').first();
    nn.addClass('pplr_active').siblings().removeClass('pplr_active');
    var k = nn.data('tab');
    jQuery('.pplr_tab[data-tab="'+k +'"]').addClass('pplr_active').siblings().removeClass('pplr_active');
  }
}
jQuery('.pplr_show_preview').show(0).removeClass('p_h_d_p');
jQuery('.pplr_show_preview .pplr_hide_duplicate').prop('disabled', false).removeClass('pplr_hide_duplicate');
jQuery('.preffect').removeClass('preffect');
jQuery('.pplr_show_preview:not(.p_h_d_p)').each(function() {
	if(jQuery(this).hasClass('preffect')){
	jQuery(this).hide(0).removeClass('preffect');
	jQuery(this).slideDown(spn);
	}
})

jQuery('.p_h_d_p .pplr_aux:not(.pplr-crop)').each(function() {
	var f = jQuery(this).data('frame');
	var n = jQuery(this).attr('name');
	if(jQuery('.pplr-wrapper[data-main="' + f + '"]:not(.pplr_no_preview):not(.cstmfy_static)')[0]){
		var k = jQuery('[name="'+n+'"]').parents('.pplr-wrapper:not(.pplr_no_preview):not(.cstmfy_static)');
			k.removeClass('p_h_d_p').show(0);
			k.find('[name="'+n+'"]').removeClass('pplr_hide_duplicate').attr('disabled',false);
	}
})

if(!jQuery('.pplr_tab_index:visible')[0]){
  jQuery('.pplr_tab_wrapper,.pplr_tab.pplr_active').addClass('pplr_notab');
}
else{
    jQuery('.pplr_tab_wrapper,.pplr_tab.pplr_active').removeClass('pplr_notab');
}
pplr_hide_duplicate();


var pplr_img_now = _PP[_CM + pplrframe].split(',')[18];

  if (_CP[0] > 0) {
    for (var i = 0; i < pplr_product.variants.length; i++) {
      if (pplr_product.variants[i].id == variant_now) {
        if(pplr_product.variants[i]["featured_image"]){
          var pplr_img_now = pplr_product.variants[i]["featured_image"]["src"];
          break;
        }

      }
    }
  }

if (_CP[10] >2){
	if(pplr_img_now.indexOf('.shopify.com') == -1){pplr_img_now =app_link_pplr+resizepplr+pplr_img_now+'?v=123';}
		if(pplr_img_now !== jQuery('.pplr-p-left img').attr('src')){
		jQuery('.pplr-p-left img').attr('src',pplr_img_now);
    if(jQuery('.pplr-p-left').height()>100){
      jQuery('.pplr-p-left img').css('max-height',jQuery('.pplr-p-left').height())
    }
		pplr_modal_correct();
	}
}
pplr_preload_image();
  if(v && has_v_id){
    pplrcomplete();
    return;
  }
var preee = true;
if(!qr){
   if(_CP[8] <2 || _CP[10] > 2){
      if(r){
        preee= false;
        LoadPplrWithFont(pplrframe,s);
      }
      else{
      if(!mn){
          if (_CP[8] == 1 || t) {
            preee= false;
            setTimeout(function() {
              LoadPplrWithFont(pplrframe,s);  
            },10)
          }
        }
        else{
          preee= false;
          LoadPplrWithFont(mn,s);
        }
      }
    }
}

if(preee){
pplrcomplete();
}


  spn = 500;
  
  if(_CP[10] <2){
	jQuery('.p_a_t_c').removeAttr(_SJ2[33]).removeClass(_SJ2[33]);
}

  if(k!==pplrframe){return true;}else{return false;}
}

function img_save_from_canvas(type, canvas){
  var byteString = atob(canvas.split(",")[1]),
      ab = new ArrayBuffer(byteString.length),
      ia = new Uint8Array(ab),
      i;

  for(i = 0; i < byteString.length; i++){
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ab], {
    type : type
  });
}

function p_bar(evt,t,v){
  var c = jQuery(".progress-title");
    if (evt.lengthComputable) {
      var n = (evt.loaded / evt.total) * 100/t+v;
      if (n > 100) {n=n-100;}
      if (n > 99.99 && c[0]) {
        c.text(decodeHtml(decode_utf8(_SJ[6])));
        var originalText = c.text(),
            i = 0;
        setInterval(function() {

          c.append("-");
          c.prepend("-");
          i++;

          if (i == 4) {
            c.html(originalText);
            i = 0;
          }

        }, 500);
      }

      jQuery(".loader-canvas .pplr-progress").width(n + "%");
      jQuery(".loader-canvas .progress-txt").text(parseInt(n) + "%");
      if(jQuery('.pplr_svg')[0]){
            var circle = jQuery('.pplr_svg .pplr_bar');
            var r = circle.attr('r');
            var k = Math.PI*(r*2);
            var pct = ((100-n)/100)*k;
            circle.css({ strokeDashoffset: pct});
            jQuery('.pplr_cont').attr('data-pct',parseInt(n));
          }
    }
}

function g_f_tract(){
      if(pplrtracolready){
        return;
      }
      pplrtracolready = true;
      if(typeof fbq !== 'undefined' && typeof fbq === "function"){
           fbq('track', 'AddToCart', {
            content_name: pplr_product['title'], 
            content_ids: [pplr_product['id']],
            content_type: 'product_group',
            content_category : pplr_product['type'],
            value: (pplr_product['price']/100),
            currency: Shopify.currency.active 
          }); 
    }
    if(typeof ga !== 'undefined' && typeof ga === "function"){
          ga('ec:addProduct', {              
            'id': pplr_product['id'],                   
            'name': pplr_product['title'],        
            'price': (pplr_product['price']/100)                           
          });
    }
    if(window.pintrk){
        pintrk('track', 'addtocart', {
        value: (pplr_product['price']/100),
        currency: Shopify.currency.active ,
        order_quantity: 1, 
        line_items: [
        { 
        product_id: pplr_product['id'], 
        product_category: '' 
        }
        ]
        });
    }
}

function pplr_after_cart(form){

  pplr_final_check=false;
    jQuery('.addtocartbg').remove();

  if(typeof pplr_custom_track !=='undefined'){
    console.log('pplr_custom_track');
    pplr_custom_track(pplr_product);
  }
  if(_SJ2[31]<1) {
        g_f_tract();
    }

    p_r = PIXEL_RATIO;
    create_pplr = false;pplr_final_check=false;create_svg=false;
    clearTimeout(checktimout);
    price_pplr= false;
    pplr_delay = 0;
    if(jQuery('.npbs')[0]){
      jQuery('.npbs').text(decodeHtml(decode_utf8(atcb))).val(decodeHtml(decode_utf8(atcb)));
    }
    pplrtracolready = false;
    jQuery('#pplr,.pplr-item-added,.addtocartw,.pplrcustomref,.pplrcustomprice,.pplrcustompriceorigin,.pplrvarianttitle').remove();
    jQuery(".pplr_preview_final").removeClass('pplr_preview_final').addClass('pplr_preview_wrapper');
    pplr_tolal_image = [];
    
    if(typeof pplr_update_minicart !=='undefined'){
      console.log('pplr_update_minicart');
        pplr_update_minicart(form);
        return;
    }
    if(_SJ2[0]==1){ location.reload();return;}
    if(_SJ2[0]==2){ 
    jQuery('body').append('<div class="pplr-item-added">'+_SJ2[1]+'</div>');
    jQuery(".pplr-item-added").slideDown();
    pplrqty();
    setTimeout(function() {
          jQuery(".pplr-item-added").slideUp();
    },5000);
    var a = jQuery('.'+_SJ2[2]+',#'+_SJ2[2]);
    if(a[0]){
        jQuery.ajax({
            type : 'GET',
            url : "/cart.js",
            dataType : 'json',
            success : function(cart){
            var q = 0;
            for(var i = 0; i < cart.items.length; i ++) {
             var vid = (cart.items[i].variant_id).toString();
              if(vid.indexOf(pricechanger)<0){
                q += cart.items[i].quantity;
              }
            }
            a.text(q);
            a.removeClass('hidden hidden-count');
          }
        })
    }
    var b = jQuery('.cart-link__bubble,.site-header__cart-indicator,.site-header__cart,.site-header__cart-bubble');
    if(b[0]){b.addClass('cart-link__bubble--visible cart-bubble--visible site-header__cart-bubble--visible').removeClass('hide');}
    return;
    }
    if(_SJ2[0]==3){window.location = '/checkout';return;}
    var locale ='';
    if (typeof __st !== "undefined") {
    if (__st.p == 'product' ) {
      var purl = __st.pageurl.split('/');
      if(purl[1] !=='products' && purl[1] !=='collections'){
        locale = '/'+purl[1];
      }
      
    }}

    window.location = locale+'/cart';
}


function pplr_ajax_cart(formdata,form){

  jQuery.ajax({
    xhr: function() {
      var xhr = new window.XMLHttpRequest();
      xhr.upload.addEventListener("progress", function(evt) {
        
		  
	  if (createproduct > 2 && createproduct <5){
		  p_bar(evt,1,0);
	  }
	   if (createproduct == 2 || createproduct == 5){
      p_bar(evt,2,50);
     }

      }, false);
      return xhr;
    },
    type : 'post',
    url : "/cart/add.js",
    data:  formdata,
    method: "POST",
    contentType : !1,
    global: !1,
    processData : !1,
    dataType : 'json',
    cache: !1,
    crossDomain: true,
    async: true,
   headers: {
            "cache-control": "no-cache"
          },
    success : function(data, textStatus, jqXHR){
    	  if(typeof pplr_custom_ajaxcart !=='undefined'){
          console.log('Custom cart activated');
    		  pplr_custom_ajaxcart(formdata,form,data);
  		  }
  		  else{
              if(_SJ2[34] !== '0' && createproduct>1){
              var properties = data['properties'];
              var newproperties = {};
              if (properties !== null) {
              for (var i = 0; i < Object.keys(properties).length; i++) {
                var propertieskey = Object.keys(properties)[i];
                var propvalue = properties[propertieskey];
                if(propvalue && typeof propvalue !== 'object'){
                    if(propvalue.indexOf('.png')>-1){
                      propvalue = propvalue+'?format=png&png';
                    }
                    if(propvalue.indexOf('.jpg')>-1){
                      propvalue = propvalue+'?format=jpg&jpg';
                    }
                     if(propvalue.indexOf('.jpeg')>-1){
                      propvalue = propvalue+'?format=jpeg&jpeg';
                    }
                  }

                 newproperties[jQuery.trim(propertieskey)] = propvalue;
               }
             }

              jQuery.ajax({
              type : 'POST',
              url : "/cart/change.js",
              dataType : 'json',
              data : {line: 1,properties: newproperties,quantity: data['quantity']},
              success : function(cart){
                pplr_after_cart(form);
                },
                error : function(jqXHR, textStatus, errorThrown){
                  pplr_after_cart(form);
                }
        		  })
            }
            else{
              pplr_after_cart(form);
            }
        }
      },
    error : function(jqXHR, textStatus, errorThrown){
        //for(var pair of formdata.entries()) {
          // console.log(pair[0]+ ', '+ pair[1]); 
           //if(pair[0] !=='id' && pair[0] !== 'quantity'){
           //formdata.delete(pair[0]);
           //formdata.delete('Preview');
           //pplr_ajax_cart(formdata,form);
          // break;
         //}
        //}
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
      var err = eval(jqXHR.responseText);
         alert(errorThrown);
      }
  });
}

if(_SJ[34] >1){
	 loadScript_p('//doshopify.com/product-personalizer/zlib.min.js', function() {
		 loadScript_p('//doshopify.com/product-personalizer/png.min.js', function() {
			loadScript_p('//cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.min.js', function() {
				loadScript_p('//doshopify.com/product-personalizer/canvas2svg.min.js', function() {
				})
				loadScript_p('//doshopify.com/product-personalizer/svg2pdf.min.js', function() {
				})
			})
		})
   })
}

  loadScript_p('//doshopify.com/product-personalizer/changedpi.js', function() {
  })


function image_type(url){
  url = url.toLowerCase();
  if(url.indexOf(".png")!== -1 || createproduct <3 || createproduct > 3){
      return 'image/png';}
  else{
    return 'image/jpeg';
  }
}

function changeDPIoFimage(base64image,dpi){
  if(dpi==72){return base64image;}
  else{
    return changeDpiDataUrl(base64image,dpi);
  }

}


function addimagedata(formdata){
  var addimage = [];
  for (var ii = 0; ii < jQuery('.fileupload').length; ii++) {
    var k = jQuery('.fileupload').eq(ii);
    if(!k.parents('.pplr_no_preview')[0]){
      var frame = k.data('frame');
      var prop = k.attr('name');

      var cc = jQuery('.img_url[data-frame="' + frame + '"]');
        if(cc.attr("data-src").indexOf("data:image")!== -1 && addimage.indexOf(prop)<0){
        addimage.push(prop);
         var type =  jQuery('.crop_img_url[data-frame="' + frame + '"]').data('type');
        var s_ = (4 * Math.ceil((cc.attr("data-src").length / 3))*0.5624896334383812)/1000000;
        if(s_>16)
        {
          cc.attr("src",cc.attr("data-src"));
          var w = cc.get(0).naturalWidth;
          var h = cc.get(0).naturalHeight;
          var blobObj = img_save_from_canvas(type, image_crop(cc.get(0),w*Math.sqrt(16/s_),h*Math.sqrt(16/s_)).toDataURL(type));
        }
        else{
          var blobObj = img_save_from_canvas(type, cc.attr("data-src"));
        }
          formdata.append(prop, blobObj, 'upload.'+type.split('/')[1].replace('+xml',''));
        }

      }
    }
}


function pplr_final_print(){
  if(createproduct<2){
    return;
  }
  var ptitle = pplr_product.title;
  var pplrform = jQuery(".pplrform");

  var checkprice = pplrqty();
   jQuery('.fileupload').each(function() {
    var cc = jQuery(this).siblings('.img_url');
    if (jQuery(this).attr('accept') !=='' && cc.attr("data-src").indexOf("data:image")!== -1) {
           jQuery(this).prop('disabled', true);
    }
  })

  
   if (createproduct == 2 || createproduct ==5){   
	   var pplrvariantid =  pplr_product.variants[0].id;
     var inv_man = pplr_product.variants[0].inventory_management;
	   
	  if (pplrform.find("input[name='id'],select[name='id']").length !== 0) {
		var pplrnameid = pplrform.find("input[name='id'],select[name='id']");
		pplrvariantid = pplrform.find("input[name='id'],select[name='id']").val();
	  } 
	    var sku = '';
      var vtitle = '';
      var vname = '';
      var shipping = 'true';
      var taxable = 'true';
    var pprice = (pplr_product.variants[0].price / 100 + checkprice).toFixed(2);
	  for (var i = 0; i < pplr_product.variants.length; i++) {
		if (pplr_product.variants[i]["id"] == pplrvariantid) {
		  var pplr_variant = pplr_product.variants[i];
		  var pprice = (pplr_variant.price / 100 + checkprice).toFixed(2);
		  var weight = pplr_variant.weight;
		  vtitle = pplr_variant.title;
		  sku = pplr_variant.sku;
      inv_man = pplr_variant.inventory_management;
      shipping = pplr_variant.requires_shipping;
      taxable = pplr_variant.taxable;
		}
	  }
	  	if(pplr_product.variants.length>1){
		    vname = pplr_product.options.join(' - ');
	   }
	   pplrform.find("input[name='id'],select[name='id']").prop("disabled", true);
     if(pplr_s_price>14.99){
      pplrform.append('<input  type="hidden" name="properties[_pplr_ref_variant]" value="'+pplrvariantid+'"  />');
    }
   }
  var _formdata = new FormData(pplrform[0]);

  var store = Shopify.shop;

  if ( _SJ2[26] <2) {
    addimagedata(_formdata);
  }

  var dpi = _SJ2[27];
  if(_SJ2[27]==0){dpi=300;}
  if(_SJ2[27]==1){dpi=72;}

  var url_to_print = '';
  var _n ='';
  var mcanvas = jQuery('.pplr_print_main');
  if (createproduct > 3 || create_svg){
    var _n ='_design_';
      for (var ii = 0; ii < mcanvas.length; ii++) {
    if(jQuery('.pplr_preview_final canvas')[0] ||  Object.keys(pplr_design_p).length > 0){
      if(ii==0){ var jj = '';}else{var jj=ii;}
       	var qq = jQuery('.pplr_final');
      	var type = 'image/png';
        var _nn = jQuery('.pplr_preview_final canvas').get(0);

        if(Object.keys(pplr_design_p).length > 0){
          var firstKey = jQuery('.pplr_print_main').eq(ii).find('img').attr('src').split('?v=')[0].replace('https://','').replace('//','');
          if(pplr_design_p[firstKey]){}else{
            var firstKey = Object.keys(pplr_design_p)[ii];
          }
          if(ii==0){

            url_to_print += "&img_to_print[]=" + pplr_design_p[firstKey];
        };
          if(pplr_design_p[firstKey]){
            var blobObj = img_save_from_canvas(type, changeDPIoFimage(pplr_design_p[firstKey],dpi));
          }
        }
        else{
            url_to_print += "&img_to_print[]=" + image_crop(_nn,400,400).toDataURL(type, 1.0);
        	if(_SJ[34]>1){
        		var blobObj = img_save_from_canvas(type, image_crop(_nn,600,600).toDataURL(type, 1.0));
        	}
        	else{
        		var blobObj = img_save_from_canvas(type, changeDPIoFimage(_nn.toDataURL(type, 1.0),dpi));
        	}
        }
        _formdata.append("properties["+decodeHtml(_SJ[7])+jj+"]", blobObj, 'custom_image1.'+type.split('/')[1]);

      }
    }
  }

  if (createproduct == 2 || createproduct ==5){
      var _nn = jQuery('.pplr_preview_final canvas').get(0);

    if (createproduct == 2 && jQuery('.pplr_print_main canvas')[0]){
      _nn = jQuery('.pplr_print_main').eq(0).find('canvas').get(0);
    }
      if(_nn && url_to_print==''){
       url_to_print += "&img_to_print[]=" + image_crop(_nn,400,400).toDataURL(type, 1.0);
      }

    }
	 var mcanvas = jQuery('.pplr_print_main canvas');
	if(create_svg){
		mcanvas = jQuery('.pplr_print_main svg');
	}

  for (var ii = 0; ii < mcanvas.length; ii++) {
    var aa = jQuery('.pplr_print_main').eq(ii);
	if(create_svg){
		var ll = aa.find('svg').get(0);
		  var w = jQuery(ll).attr("width");
		  var h = jQuery(ll).attr("height");
		  var k = 'l';
		  if(_SJ[34]<4){
			  if(parseFloat(w)-parseFloat(h)<0){k = 'p';}
			  var pdf = new jsPDF(k, 'pt', [w*72/dpi,h*72/dpi],true);
				svgElementToPdf(ll, pdf, {
					scale: 1*72/dpi,
					removeInvalid: true
				});
			  var blob2 = pdf.output('blob');
			  _formdata.append("properties[_pdf"+ii+"]", blob2, '1.pdf');
		 }
		 else{	
			jQuery(ll).attr('width',w/96+'in');
			jQuery(ll).attr('height',h/96+'in');
			var defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
			var style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
			var fface='';
			for (var y = 0; y < Object.keys(font_face_array).length; ++y) {
				var fontkey = Object.keys(font_face_array)[y];
				fface = fface +"@font-face {font-family: '"+fontkey+"';src: url(data:font/truetype;charset=utf-8;base64,"+font_face_array[fontkey][1]+") format('truetype');font-weight: normal;font-style: normal;}";
			}
			var node = document.createTextNode(fface);
			ll.insertBefore(defs, ll.firstChild);
			defs.appendChild(style);
			style.appendChild(node);
			var svg = ll.outerHTML;
			var blobObj = new Blob([svg], {type: 'image/svg+xml'});
			_formdata.append("properties[_svg "+ii+"]", blobObj, '1.svg');
		 }
		
	}else{
		var qq = aa.find('canvas').get(0);
		var type = 'image/png';
		var dturl = qq.toDataURL(type, 1.0);
		var s_ = (4 * Math.ceil((dturl.length / 3))*0.562)/1000000;
		if(s_>15)
		{
		  type = 'image/jpeg';
		  dturl= qq.toDataURL(type, 15/s_);
		}
		if(_CP[8]>2){
			type = 'image/jpeg';
			dturl= qq.toDataURL(type, 0.5);
		}
		if (url_to_print == ''){
		  url_to_print += "&img_to_print[]=" + image_crop(qq,400,400).toDataURL(type, 1.0);
		}
		if(_SJ[34]>1){
			var blobObj = img_save_from_canvas(type, image_crop(qq,800,800).toDataURL(type, 1.0));
		}
		else{
			var blobObj = img_save_from_canvas(type, changeDPIoFimage(dturl,dpi));
		}

		if(ii==0){ var jj = '';}else{var jj=ii;}
		if(_CP[8]<3){
		  _formdata.append("properties["+_n+decodeHtml(_SJ[7])+jj+"]", blobObj, 'custom_image2.'+type.split('/')[1]);
		}
		  if(_SJ[34] == 2){
			var ll = qq;
			  var w = ll.width;
			  var h = ll.height;
			  var k = 'l';
			  if(parseFloat(w)-parseFloat(h)<0){k = 'p';}
			  var pdf = new jsPDF(k, 'pt', [w*72/dpi,h*72/dpi],true);
			  pdf.addImage(ll.toDataURL(type, 1.0), type.split('/')[1], 0, 0,w*72/dpi,h*72/dpi,'','FAST');
			  var blob2 = pdf.output('blob');
			_formdata.append("properties[_pdf"+jj+"]", blob2, '1.pdf');
		  }
	  }
  }


    if(_SJ2[26] <1 || _SJ2[26] >1){
     var _ss = jQuery('.crop_img_url');
     var addimage2 = [];
      for (var ii = 0; ii < _ss.length; ii++) {
        var kk =  _ss.eq(ii).attr("data_name");     
        if(_ss.eq(ii).attr("src").indexOf("data:image")!== -1 && addimage2.indexOf(kk)<0){
          addimage2.push(kk);
          var type =  _ss.eq(ii).data('type');
    		  if(_SJ2[26] <1){
    			  kk = "_"+kk+"_crop";
    		  }
    			var s_ = (4 * Math.ceil((_ss.eq(ii).attr("src").length / 3))*0.5624896334383812)/1000000;

          var w = _ss.eq(ii).get(0).naturalWidth;
          var h = _ss.eq(ii).get(0).naturalHeight;
    			if(s_>16)
    			{
    			  var blobObj = img_save_from_canvas(type, image_crop(_ss.eq(ii).get(0),w*Math.sqrt(16/s_),h*Math.sqrt(16/s_)).toDataURL(type));
    			}
    			else{
    			 var blobObj = img_save_from_canvas(type, _ss.eq(ii).attr("src"));
    			}
          _formdata.append("properties["+kk+"]", blobObj, 'custom_image3.'+type.split('/')[1]);
        }
      }
    }


  if(url_to_print=='' && jQuery('.pplr_print_main').length>0){
    var pplr_final = setTimeout(function() {
      pplr_final_print();
      console.log('Not Found');
      return;
    },500);
  }
 
  if(pplr_final_check){
    return;
  }

  pplr_final_check= true;
  _formdata.append("properties[_pplr_preview]", decodeHtml(_SJ[7]));
  pplr_formdata = _formdata;

    if(typeof pplr_custom_ajaxcart_before !=='undefined'){
      pplr_custom_ajaxcart_before(checkprice,pplrform,false);
      return;
    }

  if (createproduct > 2 && createproduct <5) {
	var pplrnameid = false;
	 if (pplrform.find("select[name='id'],input[name='id']") !== 0) {
		 if(pplrform.find("select[name='id'],input[name='id']").val()){
			pplrnameid = true;
		 }
	  }
	 if(!pplrnameid){
        _formdata.append('id', pplr_product.variants[0].id);
      }
    if (checkprice !== 0 || jQuery('.pplr-wrapper select[data-variant]:not([data-variant=""]):not([disabled]),.pplr-wrapper input[data-variant]:not([data-variant=""]):not([disabled])')[0]) {
        pplr_add_price(checkprice, pplrform,false,_formdata);
    } else {
        pplr_ajax_cart(_formdata,pplrform);
    }
    return;
  }

  var url_to_save = "save2.php";
  if (typeof __st != 'undefined') {
    var prd_id = __st.rid;
  } else {
    var prd_id = pplr_product.id;
  }

  if(url_to_print=='' ){
    url_to_print += "&imgsrc=" + pplr_product.images[0].src;
  }

  var jQuerydate_now = Date.now();
  if(!jQuery.isNumeric(jQuerydate_now)){
    jQuerydate_now = Math.floor(Math.random()* 1000000000);
  }
  var img_url_each = "";
  if (window.navigator.standalone) jQuery.ajaxSetup({
    isLocal: true
  });
  if(diffcur){
	  pprice = pprice/Shopify.currency.rate;
  }
  jQuery.ajax({
    xhr: function() {
      var xhr = new window.XMLHttpRequest();
      xhr.upload.addEventListener("progress", function(evt) {
        p_bar(evt,2,0);
      }, false);
      return xhr;
    },
    type: "POST",
    url: app_link_pplr+"server/php/" + url_to_save,
    crossDomain: true,
    data: "pd_id=" + prd_id + "&id_img=" + jQuerydate_now +  url_to_print + "&title=" + encodeURIComponent(ptitle) + "&price=" + pprice + "&weight=" + weight + "&shop=" + store + img_url_each+ "&pdf=" + _SJ[34]+"&handle="+pplr_product.handle+"&sku="+sku+"&timestp="+_SJ2[29]+"&vendor="+pplr_product.vendor+"&vtitle="+vtitle+"&vname="+vname+"&vd_id="+pplrvariantid+"&inv_man="+inv_man+"&taxable="+taxable+"&shipping="+shipping,
    success: function(data) {
      if (data == "error") {
        alert("Product / uploaded  Image is corrupted");
      }
      var object = JSON.parse(data);
	     var variant = object["variants"][0]["id"];

       _formdata.append('id', variant);
      if(_SJ2[26] <2){
          addimagedata(_formdata);
      }

      pplr_ajax_cart(_formdata,pplrform);
    }
	,
    error : function(jqXHR, textStatus, errorThrown){
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
      var err = eval(jqXHR.responseText);
         alert(errorThrown);
      }
  });

}



function shake(div){
  var interval=100,distance=10,times=10;
    jQuery(div).css('position','relative');
    for(var iter=0;iter<(times+1);iter++){
        jQuery(div).animate({ left: ((iter%2==0 ? distance : distance*-1))}, interval);
    }
    jQuery(div).animate({ left: 0},interval);
}

function check_req_tab(a,b){
      a.parents(RP).addClass(b).removeClass('stopdance');
        var n = a.parents('.pplr-wrapper');
        jQuery('.'+b).removeClass('pplr-hide');
		if(a.parents('.pplr_no_preview')[0]){
			a.parents('.pplr_no_preview').show();
		}
        jQuery('.pplr_red_wrapper .pplr-arrow').removeClass('pplr-arrow-right').addClass('pplr-arrow-bottom');
      if(a.parents('.pplr_tab')[0]){
           var k = a.parents('.pplr_tab').attr('data-tab');
          jQuery('.pplr_tab_index[data-tab="'+k +'"]').addClass('pplr_active').siblings().removeClass('pplr_active');
          jQuery('#pplr_tab_'+k).addClass('pplr_active').siblings().removeClass('pplr_active');
          var frame = jQuery('#pplr_tab_'+k).find(RP).first().attr("data-main");
          jQuery('.pplr_active').animate({ scrollTop:n.offset().top});
          pplrcomplete();
          LoadPplrWithFont(frame);
        }
		var s = jQuery(window);
        var d  = jQuery('body,html');
        if(pisSafari()){
          d  = jQuery('body');
        }
        if (_CP[10] <3) {
          if(_SJ[0] == 3 || jQuery('.pplrabs')[0]){
            var c = jQuery(_P_P);
			var l = c.attr('id');
            if(s.scrollTop()>c.offset().top){
                d.animate({ scrollTop:(c.offset().top-80)});
				if(isMobile) {         
					window.location.hash = '#'+l;
				}
              }
          }
          if(a.parents('.pplr_tab')[0]){
            var c = a.parents('.pplr_tab');
            if(d.scrollTop()>c.offset().top){
                d.animate({ scrollTop:c.offset().top});
              }

          }
        }
        else{
          var c = jQuery(".pplr-p-right");
        }
        if(typeof c !=='undefined'){
          var a = -c.offset().top+n.offset().top;
          c.animate({ scrollTop:c.scrollTop()+a});
        }
        else{
          if(s.scrollTop()>n.offset().top){
              d.animate({ scrollTop:n.offset().top-80});
				if(isMobile) {
					var l = n.attr('id');
					if (typeof l !== typeof undefined && l !== false) {
						var t = false;
					}
					else{
						var t = true;
						l= '_scroll'+Math.random();
						n.attr('id',l);
					}
					window.location.hash = '#'+l;
					if(t){
						n.removeAttr("id");
					}					
				}
            }
        }

       shake('.'+b);
    
  }

  function pplr_check_require(pplrtis,e,k){

    if(p_d_o){
        jQuery('.pplr-wrapper input,.pplr-wrapper select').prop("disabled", true);
    }
    var b = 'pplr_red_wrapper';
    var check = true ;
    pplrtis.find("input[required]:not([disabled]),select[required]:not([disabled])").each(function() {
      if (jQuery(this).val() === "" && !jQuery(this).is(':visible') && !jQuery(this).parents('.pplr-wrapper')[0]) {
         jQuery(this).attr('type', 'text').prop("disabled", true);
        // console.log(this);
      }
    })

    pplrtis.find(_p_R).each(function() {
      if (jQuery.trim(jQuery(this).val()) === "" && check) {
        e.preventDefault();
        e.stopImmediatePropagation();
        //console.log(this);
        if(!k){check_req_tab(jQuery(this),b);}
        check =false;
        return false;
      }
    });

    pplrtis.find(".pplr-wrapper input[type='checkbox']:not([disabled])").each(function() {
      if (!jQuery(this).is(":checked") && check && jQuery(this).hasClass('cstmfy_c_required')) {
          e.preventDefault();
          e.stopImmediatePropagation();
          if(!k){check_req_tab(jQuery(this),b);}
          //console.log(this);
          check =false;
        return false;
      }

    }); 

    pplrtis.find(".pplr_imgg:not([disabled]),.pplr_select:not([disabled]),.pplrjscolor:not([disabled])").each(function() {
      if (jQuery(this).val() === "" && jQuery(this).hasClass('cstmfy_c_required') && check) {
         e.preventDefault();
         e.stopImmediatePropagation();
        if(!k){check_req_tab(jQuery(this),b);}
        //console.log(this);
        check =false;
        return false;
      }

    })


    return check;

  }
  
    function pplr_update_case(t){
	if(t){
		jQuery(".pplr_text").each(function() {
		  var text = jQuery(this).val();
		  var b = jQuery(this);
		  var frame = jQuery(this).data('frame');
		  var a = jQuery(".jscolor[data-frame='" + frame + "'],.pplr_font[data-frame='" + frame + "'],.pplrjscolor[data-frame='" + frame + "'],.pplr-size-select[data-frame='" + frame + "'],.pplr-align-select[data-frame='" + frame + "']");
		  if (jQuery.trim(jQuery(this).val()) == '') {
			var d = "pplr_show_duplicate";
      var name = a.attr("name");
			if(!a.hasClass(d) && jQuery('[name="' + name + '"]').length<2){
			  a.prop('disabled', true);
			}     
		  }

		});
		jQuery("input.cstmfy_static,select.cstmfy_static").each(function() {
			 var name = jQuery(this).attr('name').replace("properties[", "properties[_");
			 jQuery(this).attr('name',name);
		})
		
		jQuery(".pplr_text[d-placeholder]:not(.cstmfy_c_required)").each(function() {
			 if(jQuery(this).val() == jQuery(this).attr('d-placeholder')){
				 if(_SJ2[30]==1){jQuery(this).val('');}
			 }
		})
		
		
		jQuery("input.pplr_select").each(function() {
			var regex = /(<([^>]+)>)/ig;
			jQuery(this).val(decodeHtml(jQuery(this).val()).replace(regex, ""));
		})
	}
  }
  
 function n_ad_cart(add_to_cart){
	jQuery(document).on("click", add_to_cart , function(e) {
    var t = jQuery(this);
	   var form = t.closest('form');
      if(t.prop("tagName")=='FORM' || t.hasClass('gf_button-soldout')){return;}
      if(form[0] && form.find(".pplr_monogram,.pplr_select,.pplr-wrapper").length>0 ){ 
        var t = pplr_check_require(form,e);
        pplr_update_case(t);
        create_pplr_product(e,form);
        pplr_addto_cart(e,form,t);
      }

    });

  jQuery.fn.bindFirst = function(name, fn) {
      var elem, handlers, i, _len;
      this.bind(name, fn);
      for (i = 0, _len = this.length; i < _len; i++) {
        elem = this[i];
        handlers = jQuery._data(elem).events[name.split('.')[0]];
        handlers.unshift(handlers.pop());
      }
    };

    jQuery(add_to_cart).bindFirst("click", function(e) {
      var t = jQuery(this);
      var form = t.closest('form');
          if(t.prop("tagName")=='FORM' || t.hasClass('gf_button-soldout')){return;}
          if(form[0] && form.find(".pplr_monogram,.pplr_select,.pplr-wrapper").length>0){ 
            var t = pplr_check_require(form,e);
            pplr_update_case(t);
            create_pplr_product(e,form);
            pplr_addto_cart(e,form,t);
          }
   });
  }



function create_pplr_product(event,tis){


  if(create_pplr){
    return;
  }

  if (createproduct <2) {
    return false;
  }
  
  if(_CP[8]>2 && createproduct !=='2' && createproduct !=='5'){
    if (pplrqty() !== 0) {
      pplr_add_price(pplrqty(), tis,event);
    } 
    return false;
  }
  
  jQuery('.pplrform').removeClass('pplrform');

  if(p_d_o){
      return;
  }

  if(_CP[10]>2){
    if(!jQuery('.pplr-modal-box')[0]){
      return;
    }
  }

  if(jQuery(tis).closest("form")[0]){
    jQuery(tis).closest("form").addClass('pplrform');
  }
  else{
    jQuery('.product-personalizer').closest("form").addClass('pplrform');
  }

  if (jQuery('.product-personalizer').css('display') == 'none') {
    return;
  }

  var notempty = pplr_check_require(tis,event,true);


  if (notempty) {

  p_r = 1;
  create_pplr = true;
  if(_SJ[34]>2 && _CP[8]<3){
	  create_svg=true;
  }
  resizepplr = '';
  clearTimeout(checktimout);

  pplr_delay = 0;


   jQuery('.pplrform').find(".fileupload").each(function() {
      if(!jQuery(this).val()){
         jQuery(this).attr('disabled', true);
      }
   })

    event.preventDefault();
    event.stopImmediatePropagation();
    if(_SJ[29]==1){
      var sps = jQuery('body');
    }
    else{
      var sps = jQuery(RP).closest('form');
      sps.addClass("pplr-modal-open");
    }

    var checkpplr = first_prod_img();
    var maxWwid = sps.width();
    var maxhd = sps.outerHeight();

    if(_SJ[29]<3 && window.navigator.userAgent.indexOf("Edge") < 0){
    sps.append('<div class="poverlay-bg addtocartbg"><div class="pplr_cont" data-pct="0"><svg class="pplr_svg" width="200" height="200" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle><circle class="pplr_bar" r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0" style="stroke-dashoffset: -565.487px;"></circle></svg></div><span class="progress-title">' + _SJ[4] + '</span></div>');
    }
    else{

      jQuery(RP).closest('form').append('<div class="addtocartw"></div>');
      jQuery(RP).closest('form').find('input[type="submit"], button[type="submit"]').text(decodeHtml(decode_utf8(_SJ[6]))).val(decodeHtml(decode_utf8(_SJ[6]))).addClass('npbs');
    }

    jQuery(".poverlay-bg").width(maxWwid);
    if(maxhd>0){
      jQuery(".poverlay-bg").height(maxhd);
    }
    else{ 
      jQuery(".poverlay-bg").css("position", 'fixed'); 
    }
    jQuery(".poverlay-bg").fadeIn();


    if (_CP[0] > 0 ) {
      var pplrvariantid = pplr_variant_id(jQuery('.pplrform'));
      if(pplrvariantid && _CP[10] <3){
        for (var i = 0; i < pplr_product.variants.length; i++) {
          if (pplr_product.variants[i].id == pplrvariantid) {
            if(pplr_product.variants[i]["featured_image"]){

              pplrlarge_all = pplr_product.variants[i]["featured_image"]["src"].replace(queryreplacestring, pplrreplace);
            }

          }
        }
      }
      if(pplrlarge_all ==''){

        pplrlarge_all = checkpplr.attr("src").replace(queryreplacestring, pplrreplace);
      }
    }

   pplrlarge = '';

    jQuery("body").append("<div id='pplr' style='position:absolute;left:0%;top:0px;;z-index: -999;opacity:0;'></div>");

    jQuery(".pplr_preview_wrapper").removeClass('pplr_preview_wrapper').addClass('pplr_preview_final');
    jQuery(".pplr").removeClass("pplr").addClass('pplr_final');
	
	if(_CP[8]>2){
	 var imgObj3 = new Image();
	  imgObj3.crossOrigin = 'Anonymous';
	  imgObj3.onload = function() {
		var canheight = imgObj3.naturalHeight;
		var canwidth = imgObj3.naturalWidth; 
		mainCanvas = document.createElement('canvas');
		mainCanvas.id = 'pplr_canvas';
		mainCanvas.width = canwidth;
		mainCanvas.height = canheight;
		mainCanvas.style.width = canwidth;
		mainCanvas.style.height = canheight;
		var ctxRef = mainCanvas.getContext('2d');
		ctxRef.drawImage(imgObj3, 0, 0, canwidth, canheight, 0, 0, imgObj3.width, imgObj3.height); 
		jQuery("#pplr").append("<div id='plq_1'><div class='pplr_preview_wrapper'></div></div>");
		jQuery("#plq_1").addClass('pplr');
		jQuery("#plq_1").addClass('pplr_print_main');
		jQuery('.pplr_preview_wrapper').html(mainCanvas);
		 pplr_final_print();
		
	  }
	imgObj3.src = 'https:'+(pplr_product.featured_image).replace(/.([^.]*)$/,"_400x400."+'$1');
	 return false;
	}
    loadpplrtrns(1, pplrlarge, true);

    return false;
  }

}


function loadpplrtrns(k, ss) {
  pplrlarge = ss;

  if (k < parseInt(_CP[1])+1) {

    if (_PP[_CM + k].split(',')[18] !== pplrlarge  && pplr_tolal_image.indexOf(_PP[_CM + k].split(',')[18])<0 && jQuery('.pplr_no_preview[data-main=\"' + k + '"]').length<1 && _PP[_CM + k].split(',')[39] <3 && _PP[_CM + k].split(',')[13] <7) {


      jQuery(".pplr").removeClass("pplr");
      jQuery(".pplr_preview_wrapper").removeClass("pplr_preview_wrapper");

      pplrlarge = _PP[_CM + k].split(',')[18];

      pplr_tolal_image.push(pplrlarge) ;
      var pplrlarge_img = _PP[_CM + k].split(',')[18];

      if (_CP[0] > 0) {
        pplrlarge = pplrlarge_all;
        var pplrlarge_img = pplrlarge_all;
      } 

      if(pplrlarge.indexOf('.shopify.com') == -1 && pplrlarge.indexOf('doshopify.com') == -1){
        pplrlarge_img =app_link_pplr+resizepplr+pplrlarge+'?v=123';
      }

      jQuery("#pplr").append("<div id='plq_" + k + "'><img src='" + pplrlarge_img + "' /></div>");
      jQuery("#plq_" + k).addClass('pplr');
      jQuery("#plq_" + k).addClass('pplr_print_main');
      var imgObj2 = new Image();
      imgObj2.onload = function() {
        clearTimeout(checktimout);
        checkpplrClass(k, jQuery("#plq_" + k), false);

      }
      imgObj2.src = pplrlarge_img;
    }
    else{
      var kkr =k+1;
      loadpplrtrns(kkr, pplrlarge);

    }

  } else {

    setTimeout(function() {
      pplr_final_print();
    },200);

  }
}


function pplr_addto_cart(e,tis,t){
  var data_var = jQuery('.pplr-wrapper select[data-variant]:not([data-variant=""]):not([disabled]),.pplr-wrapper input[data-variant]:not([data-variant=""]):not([disabled])');
  var pplrtis = jQuery(tis);
  if (createproduct < 2 && jQuery('.pplraddprice')[0]) {
    if (_CP[10] >2 && t){
     // g_f_tract();
    }
    if (pplrqty() !== 0 || data_var[0]) {
      if(_SJ2[0]>0){
        jQuery(tis).closest('form').append('<div class="addtocartw"></div>');
      }
      pplr_add_price(pplrqty(), pplrtis,e);
	  return;
    }
  }
    var notempty = pplr_check_require(tis,e,true);
  if(_SJ2[0]>0 && createproduct <2 || _CP[8]>2 && createproduct>2 && createproduct<5 && pplrqty() == 0 || jQuery('[data-pf-type="Zepto"]')[0] && _CP[10]<3 && createproduct <2 && pplrqty() == 0){
	if (notempty) {
	if(e){
		  e.preventDefault();
		  e.stopImmediatePropagation();
		}
	  var formdata = new FormData(jQuery(tis)[0]);
      var pplrnameid = false;
     if (jQuery(tis).find("select[name='id'],input[name='id']") !== 0) {
       if(jQuery(tis).find("select[name='id'],input[name='id']").val()){
        pplrnameid = true;
       }
      }
     if(!pplrnameid){
          formdata.append('id', pplr_product.variants[0].id);
        }
	  addimagedata(formdata);
	  jQuery(tis).closest('form').append('<div class="addtocartw"></div>');
    if(typeof pplr_custom_ajaxcart_before !=='undefined'){
      pplr_custom_ajaxcart_before(checkprice,pplrform,false);
      return;
    }
      if (data_var[0]) {
          pplr_add_price(0, pplrtis,e,formdata);
        }else{
       pplr_ajax_cart(formdata,tis);  
     }
       return; 
	}
  }
  if (notempty) {
   if(_SJ2[31]<1) {
        g_f_tract();
    }
  }
}

function pplr_hide_duplicate(){

  jQuery('.pplr-wrapper:not(.pplr_no_preview) .pplr_monogram:not(.cstmfy_static)').each(function() {
	  var k = '.pplr-wrapper:not(.pplr_no_preview) input[name=\"';
	  var l = '"]:visible.pplr_monogram:not(.cstmfy_static):not(.pplr_hide_duplicate)';
	  var m = '.pplr-wrapper:not(.pplr_no_preview) textarea[name=\"'
	 
    var a = jQuery(this).attr('name');
    var b = jQuery(k + a + l);
    var c = jQuery(m + a + l);
    var d = 'pplr_hide_duplicate';
    if (b.length > 1) {	 
      b.not(":eq(0)").prop('disabled', true).addClass(d).parents(RP).hide(0).addClass('p_h_d_p');
    }
    if (c.length > 1) {
      c.not(":eq(0)").prop('disabled', true).addClass(d).parents(RP).hide(0).addClass('p_h_d_p');
    }

    var b = jQuery(k + a + l);
    var c = jQuery(m + a + l);

    if (b.length + c.length > 1) {
      b.prop('disabled', true).addClass(d).parents(RP).hide(0).addClass('p_h_d_p');
    }
  });

  jQuery(jQuery('.pplr_check').get().reverse()).each(function() {  
    jQuery('input[name=\"' + jQuery(this).attr('name') + '"]:first').parent().after(jQuery(this).parent());
  });
  var p_c_b = ['.pplrjscolor', '.pplr_imgg', '.pplr_font'];
  for (index = 0, len = p_c_b.length; index < len; ++index) {
    jQuery(p_c_b[index]).each(function() {
      var a = jQuery(this).attr('name');
      if (jQuery('.pplr-wrapper:visible:not(.p_h_d_p):not(.cstmfy_static):not(.pplr_no_preview) input[name=\"' + a + '"]:not(.cstmfy_static)').length > 1) {
        if (jQuery('input[data-frame=\"' + jQuery(this).attr('data-frame') + '"].pplr_check').length < 1) {
          if(jQuery(this).parent().hasClass('pplr-color-select') && jQuery(this).siblings('.pplrcolorimage')[0]){
            jQuery(this).prev('.pplrlabel').hide(0);
            jQuery(this).next('.pplrgcolor').hide(0);
            jQuery(this).parent().addClass('p_h_d_p');
          }
          else{
            if(!jQuery(this).parents('.pplr_tab:not(.pplr_active)')[0]){
    				var y = jQuery('input[name=\"' + a + '"]:not([disabled]):not(.cstmfy_static):last').data('frame');
    				var z = jQuery(this).data('frame');
    				if(y !== z){
    					jQuery(this).parent().hide(0).addClass('p_h_d_p');
    					jQuery(this).prop('disabled', true);
    					//jQuery('input[name=\"' + a + '"]:not([disabled]):not(.cstmfy_static):last').parent().before(jQuery(this).parent());
    				}
            else{
              jQuery(this).parent().addClass('p_s_d_p');
            }
              }
              else{
                jQuery(this).parent().addClass('p_s_d_p');
              }

          }
        }

      }
    });
  }

  var p_c_c = ['.jscolor'];
  for (index = 0, len = p_c_c.length; index < len; ++index) {
    jQuery(p_c_c[index]).each(function() {
      var a = jQuery(this).attr('name');
      var b = jQuery(this).attr('data-frame');
      if (jQuery('select[name=\"' + a + '"]:visible:not(.cstmfy_static)').length > 1) {
        if (jQuery('input[data-frame=\"' + b + '"].pplr_check').length < 1) {
          jQuery('select[name=\"' + a + '"]:not(.cstmfy_static):not(:last)').prop('disabled', true).addClass('pplr_hide_duplicate').parent(RP).hide(0).addClass('p_h_d_p');
        }
      }
      if (jQuery('input[name=\"' + a + '"]:visible:not(.cstmfy_static)').length > 1) {
        if (jQuery('input[data-frame=\"' + b + '"].pplr_check').length < 1) {
          jQuery('input[name=\"' + a + '"]:visible:not(.cstmfy_static):not(:last)').prop('disabled', true).addClass('pplr_hide_duplicate').parents(RP).hide(0).addClass('p_h_d_p');
        }
      }
    });
  }
}


function pplr_add_price(pplrqty, pplrtis, e,formdata) {
  var notempty = pplr_check_require(pplrtis,e,true);;

  if (notempty) {
    if(e){
      e.preventDefault();
      e.stopImmediatePropagation();
	   
    }
    if(price_pplr){
      return;
    }
    price_pplr = true;

    pplrtis.addClass('pplrform');
    pplrtis.append('<input class="pplrcustomref" type="hidden" name="properties[_pc_pricing_ref]"  /><input class="pplrcustomprice" value="" type="hidden" name="properties[_pc_pricing_qty]"  /><input class="pplrcustompriceorigin" type="hidden" name="properties[_pc_pricing_origin]" /><input class="pplrcustomqtysplit" type="hidden" name="properties[_pc_pricing_qty_split]" />');

    jQuery(".pplrcustomref").val(Math.floor((Math.random() * 1000000000) + 1));
    var pplr_pro_each = "&" + jQuery(".pplrcustomref").attr("name") + "=" + jQuery(".pplrcustomref").val();


    
    var pplrqtyref = pplrqty;

    var itemqty = pplrtis.find("[name='quantity']");
    if (itemqty[0]) {
      var item_qtyval = itemqty.val();
      if(item_qtyval<1){
        item_qtyval =1;
      }
      var pitemqty = parseInt(item_qtyval);
    } else {
      var pitemqty = 1;
    }
    var rate = Shopify.currency.rate;
      pplrqty = pplrqty * 100 * parseInt(pitemqty)/(parseFloat(_SJ[26]*rate)+rounding);
    var varianttoadd =[];
    var dvr = jQuery('.pplr-wrapper select[data-variant]:not([data-variant=""]):not([disabled]),.pplr-wrapper input[data-variant]:not([data-variant=""]):not([disabled])');
    
    var qtyvar = [];
    dvr.each(function(i) {
      var kkr = parseInt(jQuery(this).data('variant').split(',')[0]);
      if(kkr in qtyvar){
        qtyvar[kkr] = 1+qtyvar[kkr];
      }
      else{
       qtyvar[kkr] = 1;
      }
    })

    for (var y = 0; y < Object.keys(qtyvar).length; ++y) {
      var vnt  = Object.keys(qtyvar)[y];
      varianttoadd.push({ "id": vnt , "quantity": qtyvar[vnt] * pitemqty });
    }
    
    if(pplrqty>0){
      jQuery(".pplrcustomprice").val(pitemqty);
      var z =  dvr.length;
      varianttoadd.push({ "id":pricechanger, "quantity": Math.round(pplrqty)});
    }
    var totalunitprice = 0;
    var qtysplit = [];

   function pplr_recursive(pplr_formdata){
      var formData1 = new FormData();

      formData1.append('id', varianttoadd[0]['id']);
      formData1.append('quantity', varianttoadd[0]['quantity']);
      formData1.append("properties[_pc_pricing_ref]", jQuery(".pplrcustomref").val());
      jQuery.ajax({
            type : 'post',
            url : "/cart/add.js",
            data:  formData1,
            method: "POST",
            contentType : !1,
            global: !1,
            processData : !1,
            dataType : 'json',
            cache: !1,
            crossDomain: true,
            async: true,
           headers: {
                    "cache-control": "no-cache"
                  },
          success: function(data) {
            qtysplit.push(data.quantity/pitemqty);
            if(varianttoadd.length==1){
                if(pplrqty>0){
                  var b = jQuery(".pplrcustomprice").val();
                  jQuery(".pplrcustomprice").val(data.original_line_price / b);
                  jQuery(".pplrcustompriceorigin").val((data.price));
                  totalunitprice += parseInt(data.original_line_price) / b;
                }
                else{
                  totalunitprice += parseInt(data.original_line_price);
                }
                qtysplit.reverse();
                jQuery(".pplrcustomqtysplit").val('['+qtysplit.join()+']');
                if(pplr_formdata){
                  pplr_formdata.append("properties[_pc_pricing_ref]", jQuery(".pplrcustomref").val());
                  pplr_formdata.append("properties[_pc_pricing_qty]", totalunitprice);
                  pplr_formdata.append("properties[_pc_pricing_origin]", jQuery(".pplrcustompriceorigin").val());
                  pplr_formdata.append("properties[_pc_pricing_qty_split]", '['+qtysplit.join()+']');
                  pplr_ajax_cart(pplr_formdata,pplrtis);

                }
                else{
                  var formdata = new FormData(jQuery('.pplrform')[0]);
                  pplr_ajax_cart(formdata,pplrtis);  
                  return; 
                }
              }
              else{
                totalunitprice += parseInt(data.original_line_price);
                varianttoadd.shift();
                pplr_recursive(pplr_formdata);

              }
          },
          error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
            console.log(varianttoadd[0]['id']);
            if(jqXHR['responseJSON']){
              if(jqXHR['responseJSON']['status']){
                alert('Additional Variant '+jqXHR['responseJSON']['description']);
              }
            }

            if(pplr_formdata){
              //pplr_ajax_cart(pplr_formdata,pplrtis);
            }
            else{
              var formdata = new FormData(jQuery('.pplrform')[0]);
              //pplr_ajax_cart(formdata,pplrtis);  
              return; 
            }

          }
        });

    }

    pplr_recursive(pplr_formdata);


  }
}

function disablevariant(v,t){
  var d = v.id;
    var k = jQuery('span[data-variant*="'+d+'"],option[data-variant*="'+d+'"]');
    if(k[0]){
      if (v.inventory_quantity == 0 && v.inventory_management=='shopify') {
        k.addClass('vrdisabled');
        if(k.hasClass('selected') || k.hasClass('active')){
          k.removeClass('selected').removeClass('active');
          var f = k.attr('data-frame');
          jQuery('.pplr_monogram[data-frame="'+f+'"]').val('').attr('data-variant','').attr('data-price','0').trigger('change');
        }
        jQuery('option[data-variant*="'+d+'"]').prop('disabled',true);
      }else{
        
        if(t){
          var pp = (v.price);
        }
        else{
          var pp = (v.price/100);
        }
        k.attr('data-price',pp);
        if(k.hasClass('selected') || k.hasClass('active')){
          var f = k.attr('data-frame');
          jQuery('.pplr_monogram[data-frame="'+f+'"]').attr('data-price',pp);
          if(pp>0){
            jQuery('.pplr_monogram[data-frame="'+f+'"]').addClass('pplraddprice');
          }
        }
        
      }
  }
}

function Check_pplradd_qty(){
  var shop_url = Shopify.shop;
  if (typeof __st !== "undefined") {
    shop_url=__st.pageurl.split('/')[0]
  }
      if(pricechange){
          jQuery.ajax({
            type : 'GET',
            url : "https://"+shop_url+"/products/item-personalization.js",
            dataType : 'json',
            success : function(product){
              var rate = Shopify.currency.rate;
              if(pricechanger == product.variants[0].id){
                rounding = (product.price-_SJ[26]*rate);
              }
              pplrqty();
          },
          error : function(jqXHR, textStatus, errorThrown){
             pplrqty();

          }
        })
      }
      else{pplrqty();}
}

function recursivevcheck(vcontrol,vdata){
  if(vcontrol.length>0){
    if("inventory_quantity2" in pplr_product.variants[0]){
          jQuery.ajax({
            type : 'GET',
            url : "https://"+Shopify.shop+"/products/"+vcontrol[0]+".js",
            dataType : 'json',
            success : function(product){
                for (var i = 0; i < product.variants.length; i++) {
                    disablevariant(product.variants[i]);
                }
              vcontrol.shift();
              recursivevcheck(vcontrol,vdata);
          },
          error : function(jqXHR, textStatus, errorThrown){

             disablevariant(vcontrol[0]);
              vcontrol.shift();
              recursivevcheck(vcontrol);
          }
        })
      }
      else{
        jQuery.ajax({
            type: "POST",
            url: app_link_pplr+"checkvariant.php",
            crossDomain: true,
            data:"&shop=" + Shopify.shop+vdata,
            success: function(data){
              data = JSON.parse(data);
               for (var i = 0; i < data.length; i++) {
                var product = data[i];
                    for (var j = 0; j < product.variants.length; j++) {
                        disablevariant(product.variants[j],true);
                    }
                }
                Check_pplradd_qty();
            },
            error : function(jqXHR, textStatus, errorThrown){
              Check_pplradd_qty();
            }
          });
      }
    }
    else{
      Check_pplradd_qty();
    }
}

function checkinventory(){
      var vcontrol = [];
      var vdata = '';
    jQuery('[data-variant]:not([data-variant=""])').each(function() {
      var a = jQuery(this).attr('data-variant').split(',');
      if(a.length==3){
        if(vcontrol.indexOf(a[2])<0){
          vcontrol.push(a[2]);
          vdata += '&vdata[]='+ a[1];
        }
      }
    });
    recursivevcheck(vcontrol,vdata);
}


function pplr_unfold(tis) {
  if (_SJ[0] == 2) {
    var p = jQuery(tis).parent();
    var c = jQuery(tis).children('.pplr-arrow');
    if (p.hasClass('pplr-collapsible')) {
      if (p.hasClass('pplr-hide')) {
        p.removeClass('pplr-hide');
        c.removeClass('pplr-arrow-right');
        c.addClass('pplr-arrow-bottom');

      } else {
        p.addClass('pplr-hide');
        c.removeClass('pplr-arrow-bottom');
        c.addClass('pplr-arrow-right');

      }
    }
  }
}

function pplrColor(tis,p){
  var a = jQuery(tis).attr("data-name");
  var b = jQuery(tis).attr("data-color");
  var c = jQuery(tis).parents('.pplr-selecter-options');
  var e = jQuery(tis).data("type");
  var d= jQuery(tis).parents('.pplr-color-select').find(".pplrjscolor");
  var variant = jQuery(tis).attr("data-variant");
  if (typeof variant !== 'undefined' && variant !== false) { 
    d.attr("data-variant", variant);
  }
  d.attr("data-type", e);
  d.attr("data-value", b);
  if(e==2){
    b='url(\''+app_link_pplr + 'images/' + Shopify.shop + '/'+b+'\')'+'?v=123';
  }
  if(p !== null){
  var dp = jQuery(tis).attr('data-price');
  if (typeof dp !== 'undefined' && dp !== false) { 
    p = parseFloat(dp);
  }
	 jQuery(tis).parent().siblings('.pplraddprice').attr("data-price",p)
  }
  jQuery(tis).siblings().removeClass("selected");
  jQuery(tis).addClass("selected");
  jQuery(tis).parents(RP).removeClass('pplr_red_wrapper');
  if (_SJ[20] == 2 || _SJ[32] == 5) {
    c.siblings(".pplr-selecter-selected").find('.colorminithumb').css("background", b);
    c.siblings(".pplr-selecter-selected").find('.dcolorname').text(a);
    c.hide();
  }
  var frame = d.data('frame');
  var name = d.attr("name");
  jQuery('.pplrjscolor[name="' + name + '"]').each(function() {
    var t = jQuery(this);
    if (t.attr('data-frame') !== frame) {
      t.attr("data-type", e);
        if (typeof variant !== 'undefined' && variant !== false) { 
          t.data("variant", variant);
        }

    }
  });

  d.val(a);
  var _m = _PP[_CM + frame].split(',');
  if(_m[39]==3){
    updatecondition(frame,false,false,true);
  }
  else{
    updatecondition(frame,frame,false,true);
  }
  pplrqty();
}

function pplrselecterselected(tis){
  jQuery(tis).next(".pplr-selecter-options").slideToggle(100);
  jQuery(tis).next(".img_thumb_dropdown").slideToggle(100);
  setTimeout(function() {
    var b = jQuery(tis).next(".pplr-selecter-options");
    var c = jQuery(".pplr-p-right");
    if(!c[0]){
      var c = jQuery(_P_P);
    }
    if(b[0]){
    var a = -c.offset().top - c.height()+b.offset().top+b.height();
    if(a>0 && b.height()>0){
      c.animate({ scrollTop:c.scrollTop()+a});
    }
  }
	jQuery(tis).parents('.pplr-wrapper').css('overflow','visible');

  },110);

}

function pplrselecteritem(tis,p){
  var a = jQuery(tis).parents('.pplr-selecter-options');
  var b = a.siblings(".pplr_font");
  a.siblings(".pplr-selecter-selected").css("font-family", jQuery(tis).css("font-family"));
  var frame = jQuery(tis).parents('.pplr-wrapper').attr('data-frame');
  if(_SJ2[32]<1){
    var name =  jQuery('.pplr_font[data-frame="' + frame + '"]').attr('name');
       jQuery('.pplr_font[name="' + name + '"]').each(function() {
        var f  = jQuery(this).parents('.pplr-wrapper').attr('data-frame');
          jQuery('.pplr_text[data-main="' + f + '"]').css("font-family", jQuery(tis).css("font-family"));
        });
   }
  if (_SJ[19] == 2) {
    a.siblings(".pplr-selecter-selected").css("font-family", 'inherit');
  } else {
    a.hide();
  }
  if(p !== null){
	 jQuery(tis).parent().siblings('.pplraddprice').attr("data-price",p)
  }
  jQuery(tis).addClass("selected-font").siblings().removeClass("selected-font");
  b.attr("data-value", jQuery(tis).attr("data-value"));
  b.attr("data-height", jQuery(tis).attr("data-height"));
  b.val(jQuery(tis).attr("data-name")).trigger("change");
  a.siblings(".pplr-selecter-selected").text(jQuery(tis).text());
}

function pplrselecteritemoption(tis){
  if(jQuery(tis).hasClass('vrdisabled')){
    return;
  }
	var frame = jQuery(tis).attr('data-frame');
  var name =  jQuery('.pplr_select[data-frame="' + frame + '"]').attr('name');
  var data_val = jQuery(tis).attr("data-value");
  jQuery(tis).siblings().removeClass('active');
  var a = jQuery(tis).siblings('.pplr_select') ;
  var b = parseFloat(jQuery(tis).attr("data-price"));
  
  if(jQuery(tis).hasClass('active') && !jQuery('.cstmfy_c_required[data-frame="' + frame + '"]')[0]){
	  jQuery(tis).removeClass('active');
	  b = 0;
	  jQuery('.pplr_select[data-frame="' + frame + '"]').val('');
	  data_val='';
  }
  else{
	  jQuery(tis).addClass('active');
  }
  var variant = jQuery(tis).attr("data-variant");
  if (typeof variant !== 'undefined' && variant !== false) { 
    a.attr("data-variant", variant);
  }
jQuery(tis).parents(RP).removeClass('pplr_red_wrapper');
  a.attr("data-price",b);
  jQuery('.pplr_select[name="' + name + '"]').each(function() {
    var t = jQuery(this);
    if (t.attr('data-frame') !== frame && t.val() !== data_val) {
        var k = t.parent().find('span[data-value=\"' + data_val+ '"]');
        if(t.find('option[value="'+data_val+'"]')[0] || k[0]){
            t.val(data_val);
            if (typeof variant !== 'undefined' && variant !== false) { 
              t.data("variant", variant);
            }
          }

          if(k[0]){  
          k.addClass('active').siblings().removeClass('active');
        }
    }
  });
  a.val(data_val);
  updatepricepplr(jQuery(tis).siblings('.pplr_select')[0]);
  updatecondition(frame,false,true);
  pplrqty();

  if(_SJ2[3]>0){
      var cn = frame+'_pplr';
      setC(cn, data_val);
  }

}


function pplr_preview_hide() {
  jQuery("#pplr-preview").remove();
  jQuery("#pplr-preview-bg").remove();
  jQuery(".pplr_preview_final").removeClass('pplr_preview_final').addClass('pplr_preview_wrapper');
  jQuery(".pplr_final").removeClass("pplr_final").addClass('pplr');
    if (parseInt(_CP[8]) < 2) {
      jQuery('.zoomImg').remove();
      checkpplrClass(pplrframe);
  }
}


function ptabify(t){ 
  var A = ".pplr_tab_wrapper";
  var B =".pplr_tab";
  var C = '.pplr_tab_index:visible';
  var D = '.pplr_tab_index';
  if(!t){
    if(pplr_tab !=='' && !jQuery(A)[0]){var pplr_tabt='<div class="pplr_tab_wrapper">'+pplr_tab+'</div>';}
    jQuery(B).first().before(pplr_tabt);
  }

  if(_SJ[17]==2){
    jQuery(A).addClass('tab_i_h');
    jQuery(B).addClass('tab_h').css('min-height',jQuery(C).length*36);
  }

  if(_SJ[17]==3 && jQuery(C).length>0){
    var totalWidth = 0;
    jQuery(D).each(function(index) {
      totalWidth += jQuery(this).outerWidth();
    });
    if(totalWidth>jQuery(A).width()){
      jQuery(A).addClass('tab_i_h');
      jQuery(B).addClass('tab_h');
    }
  }
  if(jQuery(C).length>0 && !t){
    jQuery(C).first().addClass('pplr_active');
    jQuery(B).addClass('pplr_active');
    jQuery(B).first().siblings().removeClass('pplr_active');
  }
  jQuery(B).css('min-height',jQuery(A).height());
}

function k_j(){
  var k = jQuery('.pplr_ex_inner .pplr_close');
  if(k[0]){if(isBOE(k[0])){k.addClass('isboe');}}
}

function pplr_modal_correct(t){
  var pmb = jQuery(".pplr-modal-box:visible");
  var ppr = jQuery(".pplr-p-right:visible");
  var ppl = jQuery(".pplr-p-left:visible");
  pplrheight = window.innerHeight;
  if(t){var m_height = 'height';}else{var m_height = 'max-height';}
  if(jQuery(window).height()<550){
    pmb.css({"min-height":pplrheight});
  }
  var wh = window.innerHeight/window.innerWidth;
  if(jQuery(window).width()<769 || wh>1){
    pmb.css({"padding":"0px 10px","height":pplrheight,"max-height":"inherit"});
    jQuery(".crop-modal").css({"background-color":"#ffffff"});
    var extra = 80;
   if (jQuery('.a_p_t')[0]) {extra = 110;}
    if (_CP[10] <3 ) {
      extra = 50;
      pmb.css({"padding":"0px 10px","height":pplrheight-50});
    }
    if(iOS && pisSafari() && wh>1.8){
      extra = 110;
    }
    pmb.removeClass('pplrfullwidth');
    jQuery(".pplr-p-left:visible,.pplr-p-right:visible").css('width', '100%');
    jQuery(".pplr-main").css('width', jQuery(window).width());
    ppr.css("height", 'auto');
    pmb.css("margin-top", 0);
    jQuery(".crop-modal:visible").css({"height":pplrheight+extra});
    jQuery(".pplr-p-left:visible img,.pplr-p-left:visible,.pplr-p-left:visible canvas").css('max-height', (pplrheight-extra)/2);
    jQuery(".pplr-p-left:visible img").css({"margin-left":"auto"});
    ppr.css(m_height, (pplrheight-extra)/2);
    jQuery(".crop_header:visible").css('max-height',ppr.height());
	jQuery(".pplr-modal-body:visible").css(m_height,(pplrheight-extra)/2-40);
    jQuery(".pplr-modal-image:visible").css('max-height',ppr.height()-extra/2);
    ppl.css({'width':jQuery(".pplr-p-left:visible img").width(),'float':'left'});
    ppr.css({'width':jQuery(".pplr-main:visible").width(),'float':'left'});
    ppl.css({"margin-left":(jQuery(".pplr-main:visible").width()-ppl.width())/2});
    jQuery(".pplr-popup:visible").css("height", window.innerHeight);
    k_j();
    setInterval(function(){k_j();},5000);
  }
  else{
    pmb.css({"padding":"0px 10px","max-height":pplrheight});
    var extra = 80;
    if (_CP[10] <3 ) {
      extra = 0;
    }
    var ex2 = 50;
    if(_SJ[30]>1)
    {
      pmb.css({"padding":"0px 10px","height":pplrheight});
      jQuery(".crop-modal").css({"height":pplrheight});
      extra = 0;
      pmb.addClass('pplrfullwidth');
      ex2 = 70;
    }

    ppl.css('width', '47%');
    ppr.css({'width':'50%','float':'right'});
    jQuery(".pplr-p-left img,.pplr-p-left,.pplr-p-left canvas").css('max-height', (pmb.height()-jQuery(".pplr_ex_button").height()-ex2));

    jQuery(".pplr-main").css("height", ppl.height()+jQuery(".pplr_ex_button").height());
    if(_SJ[30]>1)
    {
      jQuery(".pplrfullwidth").css("height", jQuery(window).height());
      ppr.css("min-height", jQuery(window).height()-240);
    }
    ppr.css("height", ppl.height());
    if (_CP[10] <3 ) {
      ppr.css("min-height", ppr.width());
    }
    var whpmb = pplrheight-pmb.height();
    ppl.css({"margin-left":'0px'});
    if(pmb.height()>0){
      if(whpmb>10){
        pmb.css("margin-top", whpmb/2-10);
      }
      else{
        pmb.css("margin-top", 0);
      }
    }

    if(jQuery(".pplr-p-left img").width()>0){
	   var imgObj2 = new Image();
	  imgObj2.onload = function() {
		  jQuery(".pplr-p-left img").css({"margin-left":(ppl.width()-jQuery(".pplr-p-left img").width())/2});
      if(jQuery('.pplr-p-left').height()<100){
        jQuery('.pplr-p-left').height((pplrheight-extra)/2);
      }
	  }
	  imgObj2.src = jQuery(".pplr-p-left img").attr('src');
    }

  }

}
function pplr_variant_title(id){
  var title = '';
      for (var i = 0; i < pplr_product.variants.length; i++) {
        if(pplr_product.variants[i].id==id){
          title = pplr_product.variants[i].title;
        }
      }
      return title;
}

function pplr_variant_id(pplrform){
	
if (pplrform.find("input[name='id']:checked").length !== 0) {
    var pplrnameid = pplrform.find("input[name='id']:checked");
    var pplrvariantid = pplrform.find("input[name='id']:checked").val();
  }

if(!pplrvariantid){
  if (pplrform.find("input[name='id']:not([disabled])").length !== 0) {
    var pplrnameid = pplrform.find("input[name='id']:not([disabled])");
    var pplrvariantid = pplrform.find("input[name='id']:not([disabled])").val();
  }
}  
  
  if(!pplrvariantid){
    var pplrvariantid = pplrform.find("select[name='id']").val();
    var pplrnameid = pplrform.find("select[name='id']");


  }

  if(!pplrvariantid){
    var pageURL = jQuery(location).attr("href");
    if(pageURL.indexOf("?variant=")>-1){
      var pplrvariantid = pageURL.split('?variant=').pop();
    }
  }

  if(!pplrvariantid){

    var pplrvariantid = pplr_product['variants'][0]['id'];
    var pplr = first_prod_img();
    if(pplr.attr('src')){
      var arrImage = pplr.attr('src').split('?')[0].split('.');
      var strExtention = arrImage.pop();
      var strRemaining = arrImage.pop().replace(/_[a-zA-Z0-9@]+$/,'');
      var strNewImage = arrImage.join('.')+"."+strRemaining+"."+strExtention;

      for (var i = 0; i < pplr_product.variants.length; i++) {
        if(pplr_product.variants[i]["featured_image"]){

          if(pplr_product.variants[i]["featured_image"]["src"].split('?')[0].replace(/http(s)?:/,'')==strNewImage){

            var pplrvariantid = pplr_product.variants[i].id;

          }
        }

      }
    }

  }

  if(!pplrvariantid){
    var pplrvariantid = pplr_product['variants'][0]['id'];
  }

  return pplrvariantid;

}
function pplr_w_h(){
  resizepplr ='';
  clearTimeout(checktimout);
  jQuery('body').focus();
  jQuery(".crop-modal,.pplr-modal-overlay").fadeOut();
  setTimeout(function() {
  jQuery(".crop-modal,.pplr-modal-overlay").remove();jQuery("body").removeClass("pplr-modal-open pplr_fixed");
  },500)
}

function check_remember(){
   if(_SJ2[3]>0){
    jQuery('.pplr_text,.pplr_select').each(function() {
        var cn = jQuery(this).attr('data-frame')+'_pplr';
        var cv = pplrgetC(cn);
        if(cv){
            jQuery(this).val(cv);
            if(jQuery(this).find(":selected")[0]){
              jQuery(this).attr('data-price',jQuery(this).find(":selected").attr('data-price'));
              var dv = jQuery(this).find(":selected").attr('data-variant');
              if (typeof dv !== 'undefined' && dv !== false) { 
                jQuery(this).attr('data-variant',dv);
              }
            }
            if(jQuery(this).siblings('.pplr-drop-item[data-value="'+cv+'"]')[0]){
              jQuery(this).attr('data-price',jQuery(this).siblings('.pplr-drop-item[data-value="'+cv+'"]').attr('data-price'));
              jQuery(this).siblings('.pplr-drop-item[data-value="'+cv+'"]').addClass('active').siblings().removeClass('active');
            }
        }
      });
    }
}

function cstmfy_personalize_text(tis,e) {
  e.preventDefault();
  if (_CP[10] <3 ) {
	if(jQuery('.cstmfy_personalize_text').html()==''){
			  jQuery('.cstmfy_personalize_text').first().html(pplr_html);
          if(typeof pplr_custom_form_add !=='undefined'){
            pplr_custom_form_add();
          }
	   }
		  		  	
    jQuery('.cstmfy_personalize_text').slideToggle("fast","swing", function(){
      if(jQuery('.cstmfy_personalize_text').css('display')=='none'){
        jQuery(tis).html(_CP[14]);
        jQuery(tis).removeClass('pplr_remove');
        jQuery('.cstmfy_c_required').prop('required',false);
        jQuery('.cstmfy_c_required,.pplrcheckbox,.pplr_imgg,.pplr_select,.pplr_text').prop('disabled',true);
        jQuery(tis).children('.pplr-arrow').removeClass('pplr-arrow-bottom');
        jQuery(tis).children('.pplr-arrow').addClass('pplr-arrow-right');
        jQuery('.shopify-payment-button__button').prop('disabled',false).show();
        jQuery('.pplrabs').remove();
        pplrabsloaded = true;
        p_p_w_r();
        pplrqty();
        p_d_o = true;
		if(_SJ2[33]!==''){jQuery('.p_a_t_c,.' + _SJ[9]+',#' + _SJ[9]).addClass(_SJ2[33]).attr(_SJ2[33],'');}
        pplr_html = jQuery('.cstmfy_personalize_text').first().html();
        jQuery('.cstmfy_personalize_text').first().empty();
        pplrframe = 1;
      }
      else{
        p_d_o = false;
        pplr_prev_left();
        jQuery(tis).html(_SJ[21]);
        jQuery(tis).addClass('pplr_remove');
        jQuery('.cstmfy_c_required').prop('required',true);
        jQuery('.pplr-wrapper:not(.pplr_no_preview) .cstmfy_c_required,.pplr-wrapper:not(.pplr_no_preview) .pplrcheckbox,.pplr-wrapper:not(.pplr_no_preview) .pplr_imgg,.pplr-wrapper:not(.pplr_no_preview) .pplr_select,.pplr-wrapper:not(.pplr_no_preview) .pplr_text').prop('disabled',false);
        jQuery('.pplr_option .pplr_imgg').prop('disabled',true);
        jQuery('.shopify-payment-button__button').prop('disabled',true).hide();
        jQuery('.pplr_preview_wrapper').show();
        jQuery(tis).children('.pplr-arrow').removeClass('pplr-arrow-right');
        jQuery(tis).children('.pplr-arrow').addClass('pplr-arrow-bottom');
        ptabify();
        jQuery(_P_P).append("<style>" + fontface3 + "</style>");
        check_remember();
        checkinventory();
        updatecondition(pplrframe,false,false,true,true);
        if (hasfont) {
            WebFontConfig_pplr();
        }
    		if(_SJ2[33]!==''){jQuery('.p_a_t_c,.' + _SJ[9]+',#' + _SJ[9]).removeClass(_SJ2[33]).removeAttr(_SJ2[33]);}
        jQuery('input.pplr_check:checked').trigger('click');

      }
    })
    spn = 0;
    return;
  }
  if(jQuery('.crop-modal .pplr-p-left')[0]){
    return false;
  }

  var pplr_imgp = _PP[_CM + pplrframe].split(",")[18];
  if(pplr_imgp.indexOf('.shopify.com') == -1){pplr_imgp =app_link_pplr+resizepplr+pplr_imgp+'?v=123';
                                                }
  var pplrform = jQuery(tis).closest("form");
  var pplrvariantid = pplr_variant_id(pplrform);
  var pplravail = '';

   if(_SJ[27]==1){atcb='ADD TO CART';}
  var pplr_price = pplr_product.price;
	var nfind =true;
	for (var i = 0; i < pplr_product.variants.length; i++) {
	  if (pplr_product.variants[i].id == pplrvariantid) {
		  if (_CP[0] > 0) {
			if(pplr_product.variants[i]["featured_image"]){
			  var pplr_imgp = pplr_product.variants[i]["featured_image"]["src"];
			}
		  }
		if(pplr_product.variants[i]["available"]==false)
		{
		  pplravail = 'disabled';
		  if(jQuery('.p_a_t_c')[0]){
			  atcb = jQuery('.p_a_t_c').text();
		  }
		  if(jQuery('.p_a_t_c2')[0]){
			  atcb = jQuery('.p_a_t_c2').text();
		  }
		}
		var pplr_price = pplr_product.variants[i].price;
		nfind =false;
	  }
	}

	if(nfind){
		pplrvariantid = pplr_product.variants[0].id;
		pplr_price = pplr_product.variants[0].price;
	}

  jQuery(_P_P).append("<style>" + fontface3 + "</style>");

  jQuery("body").addClass("pplr_fixed");
  p_p_w_r();

  var b = "";
  var pplr_title_text = "";
  var a_p_t ="";
  var q_f = '';
  if (pricechange &&  typeof pplr_money_formate !== 'undefined') {
    if(pplr_money_formate.indexOf('{{amount')> -1 || pplr_money_formate.indexOf('{{ amount')> -1){
      var a = pplr_money_formate.replace(/<\/?[^>]+(>|$)/g, "");
      var b = "<span class='pplrcur pplr_cur money' data-cur='"+ a.split('{{')[0]+"' >"+a.split('{{')[0]+ pplr_price/ 100+a.split('}}')[0]+"</span>";
      var pplr_title_text = "<label class='pplr_h_title'>"+pplr_product.title+"<i class='_ps'> - </i>"+b+"</label>";
    }
    if(_SJ2[6]>0){
      a_p_t ="<span class='a_p_t'></span>";
      b='';
    }

  }

  if(_SJ2[9]>0){
    var _n = 1;
    var _xx = pplrform.find('[name="quantity"]');
    if(_xx[0]){
        var _min = _xx.attr('min');
        var _max = _xx.attr('max');
        if(_min>_n){_n = _min}
          _n = _xx.val();
    }
    q_f ="<span class='q_f'><label>"+_SJ2[10]+" </label><input class='q_fi' required onchange='pplrqty(true,this,"+_n+")' value='"+_n+"' min='"+_min+"' max='"+_max+"' name='quantity' type='number' /></span>";
  }
  var inputvariant= '<input type="hidden" name="id" value="'+pplrvariantid+'" />';
  jQuery("body").append('<div class="pplr-modal-overlay"></div><div  class="crop-modal"  style="overflow-y:auto;"><div class="pplr-popup pplr-modal-box" ><header class="p_h_d"><p class="pplrhleft"></p><a  onclick=\'pplr_w_h();\' class="js-modal-close pplr_close p_r_c"><i class="pfa fa-close"></i></a></header><div class="pplr-main" ><form action="/cart/add" method="post" enctype="multipart/form-data" class="pplr_form"><div class="pplr-p-left"><img src="' + pplr_imgp + '" /></div><div class="pplr-p-right" ><div class="pplr-modal-body pplrloading" >'+pplr_title_text+pplr_html +inputvariant+'</div></div><div class="pplr_ex_button"><div class="pplr_ex_inner">'+a_p_t+ q_f+b+'<button '+bcolor+' type="submit" '+pplravail+' name="add" class="p_a_t_c btn pplr-btn  button  Button--secondary '+_SJ[28]+'">'+atcb+'</button><a  onclick=\'pplr_w_h();\' class="js-modal-close pplr_close c_h_m p_r_c"><i class="pfa fa-close"></i></a></div></div></form></div></div></div>');
  jQuery('.cstmfy_personalize_text').remove();
  //jQuery("body").addClass("pplr-modal-open");
  jQuery("body").find(".crop-modal").show();

  if(!jQuery(".pplrloadfont")[0]){
    jQuery(_P_P).append(loadfont);
  }

  var imgObj2 = new Image();
  imgObj2.crossOrigin = 'Anonymous';
  imgObj2.onload = function() {
    jQuery(".pplr-preview-btn").remove();

    check_remember();

    if(typeof pplr_custom_form_add !=='undefined'){
      pplr_custom_form_add();
    }
    pplr_modal_correct();
    ptabify();
    checkinventory();
    updatecondition(pplrframe,false,false,true,true);
    if (hasfont) {
      WebFontConfig_pplr();
    }
    setTimeout(function() {
      pplr_modal_correct();
    },600);
	n_ad_cart(add_to_cart);

    jQuery('input.pplr_check:checked').trigger('click');

    jQuery('.pplr_tag').each(function() {
      var k = jQuery(this).siblings('.selected,.active');
      if(k[0]){
        var d = k.data('tag');
        selectthistag(jQuery(this).find('.pplr-selecter-item[data-val="'+d+'"]'));
      }else{
        selectthistag(jQuery(this).find('.pplr-selecter-item').first());
      }
    })

    jQuery(".pplr_form").off('submit').on("submit", function(e) {
        if(createproduct >1 && _CP[8]<3){
          if(jQuery(".pplr-wrapper:visible")[0] && jQuery('.p_a_t_c')[0]){   
              e.preventDefault();
            }
        }

    }); 

  }
  imgObj2.src = pplr_imgp+'?v=123';
imgObj2.onerror = function() {
 alert("Background Image removed or deleted .Please rectify configuration with valid background image " + imgObj2.src);
};

  dominicolors();

}



function pplr_prev_left(){
  if(p_d_o){
        p_p_w_r();
        return;
    }
  if(_SJ[25] > 1 && _CP[10] < 3  && _CP[8] < 2 && window.innerHeight > window.innerWidth){
    if(jQuery('.pplr')[0]){
        if(jQuery('.pplr').offset().top+jQuery('.pplr').height()>jQuery('form .product-personalizer').offset().top){
          return;
        }
      }

    if(!jQuery('.pplr-prev-left')[0] && pplrabsloaded){
		
		pplrabsloaded = false;
      var pplr = first_prod_img();

      var attr = pplr.attr('pplr-src');
      if (typeof attr !== typeof undefined && attr !== false) {
        if (pplr.attr('pplr-src') !== pplr.attr('src')) {
          pplr.attr('src', pplr.attr('pplr-src'));
          pplr.removeAttr("pplr-src");
        }
      }
      p_p_w_r();
      var pplr_imgp = _PP[_CM + 1].split(",")[18];  
      if(pplr_imgp.indexOf('.shopify.com') == -1){pplr_imgp =app_link_pplr+resizepplr+pplr_imgp+'?v=123';
        }
        else{
          pplr_imgp = pplr_imgp.replace(/.([^.]*)$/,"_1000x1000."+'$1');
        }

      var pplrform = jQuery('.product-personalizer').closest("form");

      var pplrvariantid = pplr_variant_id(pplrform);


      if (_CP[0] > 0) {
        for (var i = 0; i < pplr_product.variants.length; i++) {
          if (pplr_product.variants[i].id == pplrvariantid) {
            if(pplr_product.variants[i]["featured_image"]){
              var pplr_imgp = pplr_product.variants[i]["featured_image"]["src"].replace(/.([^.]*)$/,"_1000x1000."+'$1');
            }
          }
        }
      }

      jQuery('<div class="pplrabs"><div class="pplr-prev-left" style="float: left;width: 100%;"><img src="' + pplr_imgp + '" /></div></div>').insertBefore('.product-personalizer:first');
      var imgObj2 = new Image();
      imgObj2.onload = function() {
        jQuery(".pplr-prev-left img,.pplr-prev-left").css('max-height', pplrheight/2);
        var maxheight = pplrheight/2;

        if(maxheight < 250){
          var maxheight = 250;
        }

        jQuery('.product-personalizer').first().css({
          'max-height': maxheight,
          'overflow-y': ' auto ',
          'overflow-x': 'hidden'
        });
        jQuery('.pplr_tab').css({'max-height': maxheight,'overflow-y': ' auto'});
          LoadPplrWithFont(pplrframe);
      }
      imgObj2.src = pplr_imgp;

    }
  }
}


function pplr_delete(tis, k, f,g,l) {
  var control = jQuery('.pplr_monogram[data-frame="' + tis + '"]');
  var name = control.attr("name");
  var data_name = control.attr("data_name");

  control = jQuery('.pplr_monogram[data_name="' + data_name + '"]');
  control.each(function() {
    jQuery(this).wrap('<form>').closest('form').get(0).reset();
    jQuery(this).unwrap();
    jQuery(this).attr('disabled',false);
  })
    jQuery('.pplr_img_w[data-name="' + data_name + '"]').remove();
    var a = jQuery('.pplr-wrapper[data-main="' + tis + '"]');

  if (k) {
    jQuery('.img_url[data_name="' + data_name + '"]').attr("data-src", app_link_pplr+'images/blank.png'+'?v=123').attr("data-newr", 1);
    jQuery('.crop_img_url[data_name="' + data_name + '"]').attr("src", app_link_pplr+'images/blank.png'+'?v=123').attr("data-newr", 1);
    jQuery('.crop-modal[data-name="' + data_name + '"]').remove();

    if (!l) {
      jQuery('.pplr-crop[data-frame="' + tis + '"]').trigger('change');
    }

  } else {
    jQuery('.img_url[data-frame="' + tis + '"]').attr("data-src", app_link_pplr + _PP[_CM + tis].split(',')[15]+'?v=123');
    jQuery('.pplr-crop[data-frame="' + tis + '"]').val(_PP[_CM + tis].split(',')[22].split("-").join("_")).trigger('change');
  }
  jQuery('.pplr-crop[data-frame="' + tis + '"]').prop('disabled', true);
  jQuery('.pplrimage[data-frame="' + tis + '"]').removeClass("selected");
  jQuery('.img_url[data_name="' + data_name + '"]').parents('.pplr-wrapper').removeClass('p_h_m').removeClass('p_h_i');


  if (_CP[10] >2 ) {
    control.each(function() {
        var  fr = jQuery(this).attr('data-frame');
        a = jQuery('.pplr-wrapper[data-main="' + fr + '"]');
        a.find('.crop_header').remove();
    })
    return;
  }
  else
  {
    jQuery("body").removeClass("pplr-modal-open");
  }

  if (!f) {
    a.find('.crop_header').remove();
    jQuery(".crop-modal").hide();
    jQuery("body").removeClass("pplr-modal-open");
  }
  if(g){
    a.find('.crop_header').remove();
  }
}

function pplr_option_check(data_frame){
  var tfd = '[data-frame="' + data_frame + '"]';
  var tfm = '[data-main="' + data_frame + '"]';
  var pm = '.pplr_monogram';
  var am = ',.pplr_select';
  var a = jQuery(".pplr-swatch-element"+tfd);

  a.parent().removeClass('pplr_option');

  if(jQuery(pm+tfd).hasClass('fileupload')){
    jQuery(pm+tfd).prop('disabled', false).removeClass('pplr_option');
    jQuery('.pplr-crop'+tfd).prop('disabled', false).trigger('change');
    jQuery('.pplr_ins'+tfd+',.crop_header'+tfd).removeClass('pplr_option');
  }
  else{
    jQuery(pm+tfd+am+tfd).prop('disabled', false).trigger('change').removeClass('pplr_option');
    jQuery('.textBiggerSmaller'+tfd+',.pplr-character-count'+tfd+',.pplr_ins'+tfd+',.key_layout_sub'+tfd+',.pplr-btn-group'+tfd).removeClass('pplr_option');
  } 
  jQuery(".pplr_aux"+tfd).parents(RP).removeClass('pplr_option');

  if (jQuery(pm+tfm).val()!=='' && jQuery(pm+tfm).hasClass('pplr_text')) {
    jQuery(".pplr_aux"+tfd).prop('disabled', false);
  }
  else{
    jQuery(".pplr_aux"+tfd).prop('disabled', true);
  }
}

function pplr_option(tis) {
  var data_frame = jQuery(tis).attr('data-frame');
  var data_name = jQuery(tis).attr('name');
  var tfd2 = '[data-frame="' + data_frame + '"]';
  var pm = '.pplr_monogram';
  var am = ',.pplr_select';
  jQuery('input[name="' + data_name + '"]').each(function() {
    var this_frame = jQuery(this).attr('data-frame');
    var tfd = '[data-frame="' + this_frame + '"]';
    if (this_frame !== data_frame) {
      if(!jQuery(pm+tfd+am+tfd).hasClass('pplr_option')){

        jQuery(pm+tfd+am+tfd).prop('disabled', true).addClass('pplr_option');
        jQuery('.textBiggerSmaller'+tfd+',.pplr-character-count'+tfd+',.pplr_ins'+tfd+',.key_layout_sub'+tfd+',.crop_header'+tfd+',.pplr-btn-group'+tfd).addClass('pplr_option');

        jQuery('.pplr_aux'+tfd).prop('disabled', true);
        if(!jQuery('.pplr_aux'+tfd).hasClass('pplr-crop')){
           jQuery('.pplr_aux'+tfd).parents(RP).addClass('pplr_option');
        }
        jQuery(".pplr-swatch-element"+tfd).parent().addClass('pplr_option');
        if(jQuery(pm+tfd2).hasClass('fileupload')){
          jQuery(pm+tfd2).siblings('.pplr-crop').trigger('change');
        }
        else{
          jQuery(pm+tfd2+am+tfd2).trigger('input');
        }
      }

    }
  });
  pplr_option_check(data_frame);

}

function pplr_preview(e) {
  e.preventDefault();
  e.stopImmediatePropagation();
jQuery(".pplr_preview_wrapper").removeClass('pplr_preview_wrapper').addClass('pplr_preview_final');
  jQuery(".pplr").removeClass("pplr").addClass('pplr_final');
  jQuery("#pplr-preview").remove();
  clearTimeout(checktimout);
  var pplrlarge = _PP[_CM + pplrframe].split(',')[18];
  if(pplrlarge.indexOf('.shopify.com') == -1 && pplrlarge.indexOf(app_link_pplr) == -1){pplrlarge =app_link_pplr+resizepplr+pplrlarge+'?v=123';}
  jQuery("body").append("<div id='pplr-preview\'></div><div id='pplr-preview-bg\' onclick='pplr_preview_hide();\'></div>");
  jQuery("#pplr-preview").append("<a  onclick='pplr_preview_hide();\' class='js-modal-close pplr_close p_r_c\' ><i class='pfa fa-close'></i></a><div id='pplr-preview-wrapper\' ><img style='max-width:100%;max-height:100%;display:block;\' src='" + pplrlarge + "\' /></div>");
    var a = jQuery("#pplr-preview-wrapper");
    var b = jQuery("#pplr-preview img") ;
  a.append("<div class='pplr_loader'>Loading...</div>");
  jQuery("#pplr-preview").height(pplrheight - 80);
  jQuery('#pplr-preview-bg').height(jQuery(document).height());
  b.on("load", function() {
    b.css({
      "max-width" : jQuery(window).width()-40
    });  
    a.css({
      "width": b.width(),
      "height": b.height()
    });
    jQuery("#pplr-preview").width(b.width());
    jQuery("#pplr-preview").height(b.height());
    var margin = (pplrheight - jQuery("#pplr-preview").height()) / 2 - 20;
    jQuery("#pplr-preview").css({
      "top": margin,
      "bottom": margin,
      "max-width" : jQuery(window).width()
    });
    p_p_w_r();

    a.addClass("pplr");
    if (_CP[0] > 0) {
      pplrlarge = false;
    }
    checkpplrClass(pplrframe,a);
  });
}

function pplronload(pplr,ppf) {
  if (parseInt(_CP[8]) < 2) {
    pplr.parent().append("<div class='pplr_loader' style='display: none;''>Loading...</div>");
    jQuery('.pplr_loader').addClass("blurr");
    jQuery('.pplr_loader').fadeIn(3000,"swing");
    ppf.append('<div class="pplrloadingimage"></div>');
  }
}

function chooseimage(tis,k,r) {

  if(jQuery(tis).hasClass('vrdisabled')){
    return;
  }

  var name = jQuery(tis).attr("name");
  var frame = jQuery(tis).data("frame");
  var tag = jQuery(tis).data("tag");
  var a = jQuery('.pplr_monogram[name="' + name + '"]');
  var lock_color = jQuery(tis).attr("data-color");
  var data_val = jQuery(tis).attr("data-val");
  jQuery('.img_url[data-frame="' + frame + '"]').attr("data-src", jQuery(tis).attr("data-image"));
  if(jQuery(tis).hasClass('selected') && !jQuery('.cstmfy_c_required[data-frame="' + frame + '"]')[0] && _SJ[22] >2 && !jQuery(tis).hasClass('activeswatch')){
	  jQuery(tis).removeClass('selected');
	  jQuery('.img_url[data-frame="' + frame + '"]').attr("data-src", app_link_pplr+'images/blank.png'+'?v=123');
	  data_val='';
	  r = true;
  }
  else{
	    jQuery('.pplrimage[name="' + name + '"]').removeClass("selected");
	    jQuery(tis).addClass("selected");
  }

  jQuery(tis).parents(RP).removeClass('pplr_red_wrapper');
  a.val(data_val);
  var variant = jQuery(tis).attr('data-variant');
  a.attr('data-variant',variant);

  jQuery('.pplr_imgg[name="' + name + '"]').each(function() {
      var t = jQuery(this);
      if (t.attr('data-frame') !== frame) {
            var k = t.parent().find('span[data-val=\"' + data_val.replace(/"/g, '\\"')+ '"]');
            k.addClass('selected').siblings().removeClass('selected');
            var s = t.parent().find('img[name=\"' + name+ '"]');
            var tt = t.parent().find('[data-tag=\"' + tag+ '"]');
            if(tt && tag){
              t.parent().find('.pplr-swatch-element:not(.pplr_deselect)').hide();
              tt.show();
             t.parent().find('.pplr_tag [data-val=\"' + tag+ '"]').addClass('active').siblings().removeClass('active');
            }
            s.attr('data-src',k.attr('data-image'));
            var variant = k.data('variant');
            s.data('variant',variant);
            if(data_val==''){
              t.parent().find('span').removeClass('selected');
             s.attr('data-src',app_link_pplr+'images/blank.png'+'?v=123'); 
            }
            t.parent().find('.dropdowncolor:not(.color_p_main)').text(jQuery(tis).find('.img_dropdown').text());

      }
	  if(r){
		t.attr('disabled',true);
	  }
	  else{
		  if(!t.parents('.pplr_no_preview')[0]){
			  t.attr('disabled',false);
			}
	  }
	  
    });

var _m = _PP[_CM + frame].split(',');
  if(_m[39]==3){
    updatecondition(frame,false,false,true);
  }
  else{
    updatecondition(frame,frame,false,true);
  }
  if(lock_color!==''){jQuery('[c-color="single"]').attr('data-color',lock_color).trigger('change');} 

  var priceadd = parseFloat(_m[27]);
  if(_m[26]<2 || isNaN(priceadd) || variant !==''){
    priceadd = 0;
  }
  var dp = jQuery(tis).attr('data-price');
  if (typeof dp !== 'undefined' && dp !== false) { 
      k = parseFloat(dp);
  }
  a.addClass('pplraddprice');
  a.attr('data-price',(k+priceadd));

  pplrqty();
  jQuery(tis).parent('.img_thumb_dropdown').slideToggle(100);
  jQuery(tis).parent('.img_thumb_dropdown').prev('.pplr-selecter-selected:not(.color_p_main)').text(jQuery(tis).find('.img_dropdown').text());

};



function queryimgmatch(t) {
  var gmatch = false;
  var pplrRefImage = t.attr("src").split("?")[0].replace(queryreplacestring, ".").split("/products/").pop().split(".")[0];
  for (var j = 0; j < pplr_product["images"].length; j++) {
    var searchUrl = pplr_product["images"][j];
    searchUrl = searchUrl.split("?")[0].replace(queryreplacestring, ".").split("/products/").pop().split(".")[0];
    if (pplrRefImage.indexOf(searchUrl) > -1) {
      gmatch = true;
    }
  }
  if (gmatch) {
    return true;
  } else {
    return false;
  }
}
function checkopacity(t) {
  if (t.parents().css("opacity") > 0.2 && t.css("opacity") > 0.2) {
    return true;
  } else {
    return false;
  }
}

function isBOE(e) {
  var boundingRect = e.getBoundingClientRect();
  var left = boundingRect.left + 1;
  var right = boundingRect.right - 1;
  var top = boundingRect.top + 1;
  var bottom = boundingRect.bottom - 1;
  if(document.elementFromPoint(left, top) !== e) return true;
  if(document.elementFromPoint(right, top) !== e) return true;
  if(document.elementFromPoint(left, bottom) !== e) return true;
  if(document.elementFromPoint(right, bottom) !== e) return true;
  return false;
}

function isElementVisible(el) {
  var convertPoint = window.webkitConvertPointFromNodeToPage;
  if ("getBoundingClientRect" in el) {
    var rect = el.getBoundingClientRect(),
        vWidth = window.innerWidth || document.documentElement.clientWidth,
        vHeight = window.innerHeight || document.documentElement.clientHeight,
        efp = function(x, y) {
          return document.elementFromPoint(x, y)
        };
    if (rect.left + rect.width / 4 < 1) {
      return false;
    } else {
      return true;
    }
  } else if (convertPoint) {
    return true;

  }
}

function first_prod_img() {
  var pplrnotfound = true;

  var pplrcustomimg = jQuery("body img[src*='/images/"+Shopify.shop+"/\']:visible,body img[src*='/product-personalizer/resizepplr']:visible,body img[src*='product-personalizer/images']:visible");

  for (var i = 0; i < pplrcustomimg.length; i++) {
    if (pplrcustomimg.eq(i).parents().hasClass("pplr-p-left") && !pplrcustomimg.eq(i).parents().hasClass('pplr-p-right') ) {
      var pplrnotfound = false;
      return pplrcustomimg.eq(i);
    }
  }


  if (pplrnotfound) {
    for (var i = 0; i < pplrcustomimg.length; i++) {
      if(!pplrcustomimg.eq(i).hasClass('crop_img_url') && !pplrcustomimg.eq(i).hasClass('img_url') && !pplrcustomimg.eq(i).parents('.pplr-wrapper,.pplr_image_loader')[0] && !pplrcustomimg.eq(i).parents('.pplr-p-right')[0]){
        return pplrcustomimg.eq(i);
      }

    }

  }

  var pplrsrcset = jQuery("body img[srcset*='/products/\'],body img[data-srcset*='/products/\']:visible");
  for (var i = 0; i < pplrsrcset.length; i++) {
    var srcset = pplrsrcset.eq(i).attr('src');

    if (typeof srcset !== typeof undefined && srcset !== false && srcset.indexOf("shopify")>-1) {
    }
    else{
      var attr = pplrsrcset.eq(i).attr('srcset');
	  if (typeof attr !== typeof undefined && attr !== false) {
       if(attr.split(',').length>1){
              for (var k = 0; k < attr.split(',').length; k++) {
                var srcsetwidth = parseInt(attr.split(',')[k].split(' ').pop());
                if( srcsetwidth > 300 && srcsetwidth < 1000){
                  pplrsrcset.eq(i).attr('src',attr.split(',')[k].split(' ')[1]);
                }
              }
          }
          else{
            pplrsrcset.eq(i).attr('src',attr);
          }
	  }
    }
  }

  var pplrimg = jQuery("body img[src*='/products/\']:visible");
  var pplrwidths = pplrimg.map(function() {
    if (queryimgmatch(jQuery(this))) {
      return jQuery(this).width();
    } else {
      return 0;
    }
  }).get();
  var pplrmaxwidth = Math.max.apply(null, pplrwidths);

  for (var i = 0; i < pplrimg.length; i++) {
    if (pplrimg.eq(i).parents().hasClass("pplr-p-left")) {
      if (pplrnotfound && !pplrimg.eq(i).siblings().hasClass('pplr_prev')) {
        var first_prod_img = pplrimg.eq(i);
        var pplrnotfound = false;
        return first_prod_img;
      }
    }
  }
  for (var i = 0; i < pplrimg.length; i++) {
    if (queryimgmatch(pplrimg.eq(i))) {
      if (pplrimg.eq(i).parents().hasClass("pplr-prev-left")) {
        if (pplrnotfound && !pplrimg.eq(i).siblings().hasClass('pplr_prev')) {
          var first_prod_img = pplrimg.eq(i);
          var pplrnotfound = false;
          return first_prod_img;
        }
      }
    }
  }

  for (var i = 0; i < pplrimg.length; i++) {
      if (pplrimg.eq(i).parents('.'+_SJ[10])[0]) {
        if (pplrnotfound && !pplrimg.eq(i).siblings().hasClass('pplr_prev') && pplrimg.eq(i).offset().left >= -150) {
          var first_prod_img = pplrimg.eq(i);
          var pplrnotfound = false;
          return first_prod_img;
        }
      }
  }

var vnt = '.so-product-images-featured-wrap .so_slick-active,.product-detail .slick-active,.module[data-effect="zoom"],.product-single__photos .slick-active,.product__main-photos .slick-active,.product-main-image .slick-active,.product-photo-container .slick-active,.product-image-container .is-selected,.product-gallery .is-selected,.product_gallery .is-selected,.'+_SJ[10]+',.pplr-p-left,.product-single__photo-wrapper,.product-single__image,.product-single__photo,.flex-active-slide,.product__slideshow .slick-active,.product-gallery--viewer [data-gallery-selected="true"]';

  for (var i = 0; i < pplrimg.length; i++) {
    if (queryimgmatch(pplrimg.eq(i))) {
      if (pplrimg.eq(i).parents(vnt)[0]) {

        if (pplrnotfound && !pplrimg.eq(i).siblings().hasClass('pplr_prev') && pplrimg.eq(i).offset().left >= -100) {
          var first_prod_img = pplrimg.eq(i);
          var pplrnotfound = false;
          return first_prod_img;
        }
      }
    }
  }


    for (var i = 0; i < pplrimg.length; i++) {
      if (pplrimg.eq(i).parents(vnt)[0]) {
        if (pplrnotfound && !pplrimg.eq(i).siblings().hasClass('pplr_prev') && pplrimg.eq(i).offset().left >= -100) {
          var first_prod_img = pplrimg.eq(i);
          var pplrnotfound = false;
          return first_prod_img;
        }
      }
    }
    
  for (var i = 0; i < pplrimg.length; i++) {
      if (pplrimg.eq(i).parents('.slick-active,.is-selected')[0]) {
        if (pplrnotfound && !pplrimg.eq(i).siblings().hasClass('pplr_prev') && pplrimg.eq(i).width() > (pplrmaxwidth - 100)) {
          var first_prod_img = pplrimg.eq(i);
          var pplrnotfound = false;
          return first_prod_img;
        }
      }
    }



    if (pplrnotfound) {
    for (var i = 0; i < pplrimg.length; i++) {
      if (queryimgmatch(pplrimg.eq(i))) {
        var pplrimgnew = pplrimg.eq(i);
        var visible = isElementVisible(pplrimgnew.parent()[0]);
        if (checkopacity(pplrimg.eq(i)) && pplrimg.eq(i).width() > (pplrmaxwidth - 100) && visible && pplrnotfound && !pplrimg.eq(i).siblings().hasClass('pplr_prev') && pplrimg.eq(i).offset().left >= -5) {
          var first_prod_img = pplrimg.eq(i);
          pplrnotfound = false;
          break;
        }
      }
    }
  }
  if (pplrnotfound) {
    for (var i = 0; i < pplrimg.length; i++) {
      if (queryimgmatch(pplrimg.eq(i))) {
        if (checkopacity(pplrimg.eq(i)) && pplrimg.eq(i).width() > (pplrmaxwidth - 100) && pplrnotfound && !pplrimg.eq(i).siblings().hasClass('pplr_prev') && pplrimg.eq(i).offset().left >= -5) {
          var first_prod_img = pplrimg.eq(i);
          pplrnotfound = false;
          break;
        }
      }
    }
  }

  if (pplrnotfound) {
    for (var i = 0; i < pplrimg.length; i++) {
      if (pplrnotfound && !pplrimg.eq(i).siblings().hasClass('pplr_prev') && pplrimg.eq(i).offset().left >= -5) {
        var first_prod_img = pplrimg.eq(i);
        pplrnotfound = false;
        break;
      }
    }
  }
  if (pplrnotfound) {

    var first_prod_img = jQuery("body img[src*='/products/\']:visible").first();

  }

  return first_prod_img;
}
function WebFontConfig_pplr(){
      WebFontConfig = {
      custom: {
      families: fNamearray
      },
      loading: function() {},
      active: function() {
      font_loaded = true;
      LoadPplrWithFont(pplrframe);
      
      console.log('font loaded');
      },
      inactive: function() {
      console.log('font error');
      LoadPplrWithFont(pplrframe);
      font_loaded = false;
      },
      timeout: 3000
    };
    loadScript_p('//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js', function() {
    })
}

  function dowebfontconfig(pplr,ppf) {
    pplr.parent().addClass('pplr');
    var imgObj3 = new Image();
    imgObj3.onload = function() {
          pplronload(pplr,ppf);
      if(fNamearray.length>0){
        WebFontConfig_pplr();
      }
      else{
        font_loaded = true;
        LoadPplrWithFont(pplrframe);
      }
    }
    imgObj3.src = pplr.attr('src');
  }


function LoadPplrWithFont(frame, t, tis, k) {
  jQuery(tis).parents(RP).removeClass('pplr_red_wrapper');
  var _m = _PP[_CM + frame].split(',');
  var pplr_load = parseInt(_CP[8]);

  clearTimeout(checktimout);
  pplrframe = frame;
  if(typeof pplr_custom_LoadPplrWithFont !=='undefined'){
    pplr_custom_LoadPplrWithFont(pplrframe);
  }
  
  var speed = 0;
  
  if (tis) {

    if (jQuery(tis).hasClass('pplr_text')) {
      var speed = 300;
      if(window.innerHeight > window.innerWidth && jQuery(".pplr img")[0]){
        if(jQuery(".pplr img").get(0).naturalWidth>1000 || jQuery(".pplr img").get(0).naturalHeight>1000){
          speed = 500;
        }
      }
      var a = jQuery(".jscolor[data-frame='" + frame + "'],.pplr_font[data-frame='" + frame + "'],.pplrjscolor[data-frame='" + frame + "'],.pplr-size-select[data-frame='" + frame + "'],.pplr-align-select[data-frame='" + frame + "']");

      if (jQuery.trim(jQuery(tis).val()) !== '') {
        if (jQuery(".pplr-wrapper[data-main='" + frame + "']").css('display') !== 'none') {
        var d = "pplr_hide_duplicate";
          a.each(function() {
            var hd = jQuery(this);
                if(!hd.hasClass(d) && !hd.parent().hasClass('p_h_d_p')){
                  hd.prop('disabled', false);
                }
          });

        }
      } else {
        var d = "pplr_show_duplicate";
        if(!a.hasClass(d)){
          a.prop('disabled', true);
        }      
      }
    }
  }
if (tis) {
    if (jQuery(tis).hasClass('pplr_text')){
        var text = jQuery(tis).val();
          var b = jQuery(tis);
          if (b.hasClass('toUpperCase')) {
          b.val(text.toUpperCase()); 
          }
          if (b.hasClass('toLowerCase')) {
          b.val(text.toLowerCase());
          } 
          if (b.hasClass('tocapitalize')) {
          b.val(capitalize(text));
          }
          if (b.hasClass('tocapitalizeFirstLetter')) {
          b.val(capitalizeFirstLetter(text));
        }
    }
  }

 checktimout = setTimeout(function() {
    if (tis) {
    if (jQuery(tis).hasClass('pplr_text')){
         var _n = jQuery(tis).siblings('.pplr-character-count');
          var pplrline = jQuery(tis).attr('maxline');

          if (typeof pplrline == typeof undefined || pplrline == false || parseInt(pplrline) < 1) {
            pplrline = 1;
          }
          var maxchar = jQuery(tis).attr('data-maxlength');
          if (typeof maxchar == typeof undefined || maxchar == false) {
            maxchar = _m[17];
          }
          else{maxchar = maxchar / pplrline}
          limitTextarea(tis, pplrline, maxchar,_m[38],_m[13],_n);
      }
    }

	  if (t) {
  		var p_c_a = ['.pplr_monogram', '.jscolor'];
  		for (index = 0, len = p_c_a.length; index < len; ++index) {
  		  jQuery(p_c_a[index]).each(function() {
  			var t = jQuery(this);
  			var thisframe = jQuery(p_c_a[index] + "[data-frame='" + frame + "']");
  			if (t.attr('data-frame') !== frame) {
  			  if (t.attr('name') == thisframe.attr('name') && !thisframe.parents('.pplr-wrapper').hasClass('cp-sel-Photos') && !t.hasClass('pplr_imgg')) {
  				if (t.val() !== thisframe.val()) {
  				  t.val(thisframe.val());
  				  if(t.hasClass('pplr_text') && !t.hasClass('jscolor')){
  					  var _ll = _PP[_CM + t.attr('data-frame')].split(',');
              var _n = jQuery(t).siblings('.pplr-character-count');
  					  limitTextarea(t[0], _ll[7], _ll[17],_ll[38],_ll[13],_n);
  				  }
  				}

  			  }
  			}
		  });
		}

		var p_c_c = ['.pplr_font', '.pplrjscolor'];
		for (index = 0, len = p_c_c.length; index < len; ++index) {
		  jQuery(p_c_c[index]).each(function() {
			var t = jQuery(this);

			var thisframe = jQuery(p_c_c[index] + "[data-frame='" + frame + "']");
			if (t.attr('data-frame') !== frame) {
			  if (t.attr('name') == thisframe.attr('name') && !thisframe.parents('.pplr-wrapper').hasClass('cp-sel-Photos')) {
				if (t.val() !== thisframe.val()) {
				  t.val(thisframe.val());
				  t.attr('data-value', thisframe.attr('data-value'));
				  t.attr('data-height', thisframe.attr('data-height'));
				  t.parent().find('span[data-color=\"' + thisframe.attr('data-value') + '"]').addClass('selected').siblings().removeClass('selected');
				  t.parent().find('span[data-value=\"' + thisframe.attr('data-value') + '"]').addClass('selected-font').siblings().removeClass('selected-font');
				  t.parent().find('.pplr-selecter-selected:not(.dropdowncolor)').text(thisframe.val()).css('font-family',thisframe.attr('data-value').replace(".ttf", ""));
          var priceval = t.parent().find('.selected-font,.pplrgcolor .pplr-swatch-element.selected');
          if(priceval[0]){
            var ntv = priceval.attr('data-price');
              t.attr('data-price', ntv);
              if(ntv>0){t.addClass('pplraddprice');}
            }
				  t.parent().find('.pplr-selecter-selected .colorminithumb').css("background", thisframe.attr('data-value'));
					t.parent().find('.dcolorname').text(thisframe.val());
				}
			  }
			}

		  });
		}


	  jQuery('.img_url').each(function() {
		var t = jQuery(this);
		var thisframe = jQuery(".img_url[data-frame='" + frame + "']");
		var pplr_crop = jQuery(".pplr-crop[data-frame='" + t.attr('data-frame') + "']");
		var frame_pplr_crop = jQuery(".pplr-crop[data-frame='" + frame + "']");
		if (t.attr('data-frame') !== frame && !t.siblings('.pplr_monogram').hasClass('pplr_imgg') && !thisframe.siblings('.pplrjscolor')[0]) {
		  var tab1 = 1;
		  var tab2 =1;
		  if(t.parents('.pplr_tab')[0]){
			tab1 = t.parents('.pplr_tab').data('tab');
		  }
		  if(thisframe.parents('.pplr_tab')[0]){
			tab2 = thisframe.parents('.pplr_tab').data('tab');
		  }
		  if (t.attr('data_name') == thisframe.attr('data_name') && tab1 == tab2){
			if (t.attr('data-src') !== thisframe.attr('data-src')) {

			  t.attr('data-src',thisframe.attr('data-src'));
			  t.attr('data-newr',thisframe.attr('data-newr'));
        t.attr('copy','1');
			}
			if (pplr_crop.val() !== frame_pplr_crop.val()) {
			  pplr_crop.val(frame_pplr_crop.val());
			}

		  }



		}

	  });

	 }
    pplrqty();
    var _kk = true;
    if (pplr_load < 2 || _CP[10] >2) {
      checkpplrClass(frame, false, false);
      _kk = false;
    }

    if (k && pplr_load < 2 && _kk) {
      checkpplrClass(frame, false, false);
    }
  },speed) ;

}


function pplrnewload() {
  var pplr = first_prod_img();
  p_p_w_r();
  jQuery('.pplr_loader').remove();
  jQuery('.blurr').removeClass('blurr');
  pplr.parent().addClass('pplr');
  LoadPplrWithFont(1);
}

function check_current_frame(pplr){
  if (_CP[0] > 0) {
    return true;
  }

  var pplrRefImage = pplr.attr('src').split("?")[0].replace('_crop_center.', ".").replace(queryreplacestring, ".").split("/products/").pop().split(".").slice(0, -1).join(".");
  var pplrRefImage2 = pplr.attr('src').split("?")[0].replace('_crop_center.', ".").split("/products/").pop().split(".").slice(0, -1).join(".").split("_").slice(0, -1).join("_");

  for (var ii = 1; ii < parseInt(_CP[1])+1; ii++) {
    var searchUrl = _PP[_CM + ii].split(",")[18];
    if(searchUrl.indexOf('.shopify.com') == -1){searchUrl =app_link_pplr+resizepplr+searchUrl;
                                                  }
    searchUrl = searchUrl.split("?")[0].replace('_crop_center.', ".").replace(queryreplacestring, ".").split("/products/").pop().split(".").slice(0, -1).join(".");
    if (pplrRefImage === searchUrl || pplrRefImage2 === searchUrl) {
      pplrframe = ii;
      return true;
    }

  }
  return false;
}

function recursivelycheck(recursivetime) {
  
    if(recurstop){
      return;
    }
    var pplr = first_prod_img();
    if (jQuery('.pplr')[0] && check_current_frame(pplr)) {
      if (jQuery('.pplr img:visible:first').attr('src')  !== pplr.attr('src') || pplrcurrentimage !== pplr[0].currentSrc || jQuery(".pplr").offset().left < -10 || jQuery(".pplr").offset().left > jQuery(window).width()-jQuery(".pplr").width()+1) {
        console.log('Image Changed'); 
        check_current_frame(pplr);
        checkpplrClass(pplrframe, false, true);                

      }
    } else {
      check_current_frame(pplr);
      checkpplrClass(pplrframe, false, true);

    }
    recursivetime1 = recursivetime + 300;
    if (recursivetime1 < 3000) {
      checktimout = setTimeout(function() {
        recursivelycheck(recursivetime1);
      }, 300);

    }

}

function if_change_image(tis){

  if (_CP[0] > 0) {
    var pplr_img_now = p_img_now(pplrframe,tis);
    jQuery('.pplrabs img').attr('src',pplr_img_now.replace(/.([^.]*)$/,"_1000x1000."+'$1'));
  }

  if (!jQuery(tis).parent().hasClass('pplr') && !create_pplr && !jQuery(tis).hasClass('pplr')) {
    if(p_d_o){
        p_p_w_r();
        return;
    }
    if (_CP[8] > 0 || jQuery('.pplr')[0]) {
      clearTimeout(checktimout);
      checktimout = setTimeout(function() {
        recurstop = false;
        var recursivetime1=0;
        recursivelycheck(100); 
        pplrqty();
      }, 400);
    } else {
      p_p_w_r();
    }
  }
}




function checkpplrClass(pplrframe, d, t) {

  if (d) {
    var checkpplr = d.find("img");
    p_p_w_r();

    checkpplr.parent().addClass("pplr");
    CheckpplrImage(pplrframe, false);

  } else {

    var checkpplr = first_prod_img();
    if (jQuery(".pplr")[0]) {
      if (jQuery(".pplr img:first").attr("src") !== checkpplr.attr("src") || jQuery(".pplr").offset().left < 0 || jQuery(".pplr").offset().left > jQuery(window).width()-jQuery(".pplr").width() || pplrcurrentimage !== checkpplr[0].currentSrc) {
        p_p_w_r();
        checkpplr.parent().addClass("pplr");
      }
    } else {
      checkpplr.parent().addClass("pplr");
    }

    if (t) {
      CheckpplrImage(pplrframe, true);
          

    } else {
      CheckpplrImage(pplrframe);
    }
  }
}

function p_p_w(pplr){
  var a = jQuery('.pplr_preview_wrapper');
    if(!a[0]){
      jQuery('.pplr').append('<span class="pplr_preview_wrapper" style="position:absolute;"></span>');

    }
    var a = jQuery('.pplr_preview_wrapper');
    if(pplr){
    if(pplr.height()==0){
        var cc = pplr;
        var w = cc.get(0).naturalWidth;
        var h = cc.get(0).naturalHeight;
        var pw = pplr.width();
        var newh = pw*h/w;
        pplr.parent().height(newh);
    }
    if(pplr.height()>0 && pplr.width()>0){
        a.width(pplr.width());
        a.height(pplr.height());
      }
      else{
        console.log('lazy load');
        var pplr = jQuery(".pplr img[src*='/\']:visible:first,.pplr_print_main.pplr img"); 
        setTimeout(function(pplr) {
          p_p_w(pplr);
        },250)
      }
  }
  else{
    console.log('lazy load');
    setTimeout(function(pplr) {
      p_p_w(pplr);
    },250)
  }

}

function p_p_w_r(){
    jQuery('.pplr_preview_wrapper').remove();
    jQuery(".pplr").removeClass("pplr");
}


function pplrsingleimage(pplr,frame,pplrRefImage,pplrRefImage2,t){
  var searchUrl = _PP[_CM + frame].split(",")[18];
  if(searchUrl.indexOf('.shopify.com') == -1){searchUrl =app_link_pplr+resizepplr+searchUrl;}

  var searchUrlFirst = searchUrl;
  searchUrl = searchUrl.split("?")[0].replace('_crop_center.', ".").replace(queryreplacestring, ".").split("/products/").pop().split(".").slice(0, -1).join(".");
  if (t) {

    if (pplrRefImage === searchUrl || pplrRefImage2 === searchUrl) {
      pplr_image = pplr.attr("src");
      var attr = pplr.attr('srcset');
      if (typeof attr !== typeof undefined && attr !== false) {
        if(pplr.attr("srcset").split(',').length>1){
          for (var k = 0; k < pplr.attr("srcset").split(',').length; k++) {
            if(pplr.attr("srcset").split(',')[k].trim().split(' ')[0].indexOf('.shopify.com') > -1){
             pplr_image = pplr.attr("srcset").split(',')[k].trim().split(' ')[0];
            }
            var srcsetwidth = parseInt(pplr.attr("srcset").split(',')[k].split(' ').pop());
            if(srcsetwidth>jQuery(".pplr").width() && srcsetwidth > 500){
              break;
            }
          }
        }
      }

      p_p_w(pplr);

      update_pplr_wrapper();
      ChangeCanvas(frame);
    } else {

      p_p_w_r();

    }

  } else {
    pplr_image = searchUrlFirst+'?v=123';
    p_p_w(pplr);
    update_pplr_wrapper();
    ChangeCanvas(frame);
  }

}

function check_variant_image(vid){
  for (var j = 0; j < pplr_product["variants"].length; j++) {
    if(pplr_product["variants"][j]['id'] == vid)
    {
      return pplr_product["variants"][j]["featured_image"]["src"];
    }
  }

}


function CheckpplrImage(frame, t) {
  var pplr = jQuery(".pplr img[src*='/\']:visible:first,.pplr_print_main.pplr img"); 
  if(!pplr[0]){
    return;
  }

  var pplrRefImage = pplr.attr("src").split("?")[0].replace('_crop_center.', ".").replace(queryreplacestring, ".").split("/products/").pop().split(".").slice(0, -1).join(".");


  var pplrRefImage2 = pplr.attr("src").split("?")[0].replace('_crop_center.', ".").split("/products/").pop().split(".").slice(0, -1).join(".").split("_").slice(0, -1).join("_");

  if(pplr.attr("src").indexOf('.shopify.com') == -1){
    pplrsingleimage(pplr,frame,pplrRefImage,pplrRefImage2,t);
    return;
  }

  var attr = pplr.attr('srcset');
  if (typeof attr !== typeof undefined && attr !== false) {
    if(pplr.attr("srcset").split(',').length>1){
      var pplrRefImage = pplr.attr("srcset").split(',')[0].replace('_crop_center.', ".").split("?")[0].replace(queryreplacestring, ".").split("/products/").pop().split(".").slice(0, -1).join(".");
      var pplrRefImage2 = pplr.attr("srcset").split(',')[0].replace('_crop_center.', ".").split("?")[0].split("/products/").pop().split(".").slice(0, -1).join(".").split("_").slice(0, -1).join("_");
    }
  }


  if (_CP[0] > 0) {
    var pplr_search_image = true;
    var variant_now = pplr_variant_id(jQuery(RP).closest('form'));
    if (pplr_product["variants"][0]["featured_image"]) {
      var searchUrlFirst = pplr_product["variants"][0]["featured_image"]["src"];
      for (var j = 0; j < pplr_product["variants"].length; j++) {
        if (pplr_product["variants"][j]["featured_image"]) {
          var searchUrl = pplr_product["variants"][j]["featured_image"]["src"];
          var searchUrl2 = pplr_product["variants"][j]["featured_image"]["src"];
          searchUrl = searchUrl.split("?")[0].replace('_crop_center.', ".").split("/products/").pop().split(".").slice(0, -1).join(".");
          if (pplrRefImage === searchUrl || pplrRefImage2 === searchUrl) {
            pplr_image = pplr.attr("src");
            var attr = pplr.attr('srcset');
            if (typeof attr !== typeof undefined && attr !== false) {
              if(pplr.attr("srcset").split(',').length>1){
                for (var k = 0; k < pplr.attr("srcset").split(',').length; k++) {
                  if(pplr.attr("srcset").split(',')[k].trim().split(' ')[0].indexOf('.shopify.com') > -1){
                   pplr_image = pplr.attr("srcset").split(',')[k].trim().split(' ')[0];
                  }
                  var srcsetwidth = parseInt(pplr.attr("srcset").split(',')[k].split(' ').pop());
                  if(srcsetwidth>jQuery(".pplr").width() && srcsetwidth > 500){
                    break;
                  }
                }
              }
            }

            if(variant_now != pplr_product["variants"][j]['id']){
              console.log('variant mismatch');
              if(t){

              }else{
                pplr_image = check_variant_image(variant_now);
              }
            }
            p_p_w(pplr);
            update_pplr_wrapper();
            ChangeCanvas(frame);
            pplr_search_image = false;
            console.log('found');
            break;
          } else {}
        }
      }
      if (pplr_search_image) {
        if (t) {
          if (pplrRefImage === searchUrl || pplrRefImage2 === searchUrl) {
            var searchUrl = _PP[_CM + frame].split(",")[18];
            if(searchUrl.indexOf('.shopify.com') == -1){searchUrl =app_link_pplr+resizepplr+searchUrl+'?v=123';}
            pplr_image = searchUrl;
            p_p_w(pplr);
            update_pplr_wrapper();
            ChangeCanvas(frame);
          } else {  
            p_p_w_r();

          }
        } else {
          pplr_image = searchUrlFirst+'?v=123';
          p_p_w(pplr);
          update_pplr_wrapper();
          ChangeCanvas(frame);
        }
      }
    } else {
      pplrsingleimage(pplr,frame,pplrRefImage,pplrRefImage2);
    }
  } else {
    pplrsingleimage(pplr,frame,pplrRefImage,pplrRefImage2,t);
  }
}

function update_pplr_wrapper(){
  if(create_pplr){
    return;
  }
  var a = jQuery('.pplr_preview_wrapper');
  var b = jQuery('.pplr img:visible:first');
  if(a[0] && b[0]){
    a.css('left', b.css('padding-left'));
    a.css('margin-left', b.css('margin-left'));
    var offset_left = b.offset().left-  a.offset().left;
    if(offset_left>0){
      a.css('left', offset_left);
    }
    a.css('margin-top', b.css('margin-top'));
    var c = b.offset().top;
    var d = a.offset().top;
    if(c-d>5 || c-d<-5){
      a.css('top', c-d);
    }
    if(a.height()==b.height()){
      a.css('top', 0);
    }

  }
}

var eqn = 1;
var mainCanvas;
var svg;
function ChangeCanvas(frame, k) {
		pplrloading = true;
  var imgObj3 = new Image();
  imgObj3.crossOrigin = 'Anonymous';
  imgObj3.onload = function() {
    var canheight = imgObj3.naturalHeight;
    var canwidth = imgObj3.naturalWidth;
    var ioslimit = 1 ; 
    var wh = canheight * canwidth;
    if(iOS && pisSafari() && wh>16777210 || iOS && pisFacebookOrInstagram() && wh>16777210){
      if(canwidth>4096){
      ioslimit = 4096/canwidth;
    }else{
      ioslimit = 4096/canheight;
    }
      canheight= parseInt(canheight*ioslimit);
      canwidth= parseInt(canwidth*ioslimit);
    }

	if(canwidth>3000 || canheight>3000){
		if(!create_pplr){
			//resizepplr ='resizepplr.php?width=1200&height=1200&file=';
		}
    }
    if(canwidth>2600 && !create_pplr && window.innerHeight > window.innerWidth){
     //resizepplr ='resizepplr.php?width=1000&height=1000&file=';
    }
	
    if(canheight<1){
      canheight = canwidth*canratio;    
    }
    else{
      canratio = canheight/canwidth;
    }
    if(canheight<1 && canwidth<1){
      setTimeout(function() {
        ChangeCanvas(frame, k);
      },100)
    } 
	mainCanvas = document.createElement('canvas');
	mainCanvas.id = 'pplr_canvas';
    mainCanvas.width = canwidth;
    mainCanvas.height = canheight;
    mainCanvas.style.width = canwidth;
    mainCanvas.style.height = canheight;
	if(create_svg){
		svg = new C2S(canwidth,canheight);
	}
    eqn = 1;
    recursivecanvasbottom(svg,mainCanvas,frame,eqn,imgObj3);
  }
   imgObj3.onerror = function() {
     alert("Background Image removed or deleted .Please rectify configuration with valid background image " + imgObj3.src);
    };
  if (!create_pplr && pplr_image.indexOf('.shopify.com') >-1 && iOS && _CP[10] >2) {
    imgObj3.src = pplr_image.replace(/.([^.]*)$/,"_900x900."+'$1');

  }
  else{
    if (pplr_image.indexOf('?v=123') < 0 ) {
      pplr_image = pplr_image +'?v=123'
    }
    imgObj3.src = pplr_image;
  }
}

function canvasbottomcommon(svg,mainCanvas,frame,eqn,imgObj3){

  if(eqn==_CP[1]){
    eqn = 1;
    recursivecanvasmiddle(svg,mainCanvas,frame,eqn,imgObj3);
  }
  else{
    eqn = eqn + 1;
      recursivecanvasbottom(svg,mainCanvas,frame,eqn,imgObj3);
  }
}

function p_l_i(){
  if(jQuery(window).width()>760){
    if(!jQuery(".pplrloadingimage")[0]){jQuery(_P_P).append('<div class="pplrloadingimage"></div>');}
    if(!jQuery(".pplrloadingimage")[0]){jQuery(".pplr-p-right").append('<div class="pplrloadingimage"></div>');}
    jQuery('.pplrloadingimage').hide();
    setTimeout(function(){ jQuery('.pplrloadingimage').show(); }, 1000);
  }
}

function recursivecanvasbottom(svg,mainCanvas,frame,eqn,imgObj3){
  var m_ = _PP[_CM + eqn].split(','); 
  var colortype = 1;
  if (m_[13]>6 || m_[16]<2 || m_[39]==3 || jQuery('.pplr_no_preview[data-main=\"' + eqn + '"]').length>0 ) {
    canvasbottomcommon(svg,mainCanvas,frame,eqn,imgObj3);
  }
  else{
   var akk=jQuery('.pplrjscolor[data-frame=\"' + eqn + '"]');
	  if (akk.length !== 0) {
		  var val = akk.attr('data-value');
				var colortype = akk.attr('data-type');
			if(val ==''){
        var color = app_link_pplr+'images/blank.png'+'?v=123'
      }else{
          var color = app_link_pplr +'images/' + Shopify.shop + '/'+akk.attr('data-value')+'?v=123';
      }
	  }
	  
    var varifycanvas = _PP[_CM + frame].split(',')[18];
    if (m_[13] == 3 || m_[13] == 4) {

      p_l_i();
     if (m_[18] === varifycanvas) {
		    var imginfo = jQuery('.pplr-crop[data-frame="' + eqn + '"]').val().split('_');
            if (imginfo.length < 5) {
              var angle = 0;
            } else {
              var angle = imginfo[4];
            }
			  var imgObj = new Image();
			  imgObj.crossOrigin = 'Anonymous';
			  imgObj.onload = function() {
				if(colortype>1){
					var imgObj9 = new Image();
					imgObj9.crossOrigin = 'Anonymous';
					imgObj9.onload = function() {
                  
                      if (m_[16] == 2) {
                        getText(svg,mainCanvas, eqn, imginfo[0], imginfo[1], imginfo[2], imginfo[3], angle,imgObj,imgObj9);
                      }
						canvasbottomcommon(svg,mainCanvas,frame,eqn,imgObj3);
					  }
					  imgObj9.src = color;
                }
                else{
                    if (m_[16] == 2) {
                      getText(svg,mainCanvas, eqn, imginfo[0], imginfo[1], imginfo[2], imginfo[3], angle,imgObj);
                    }
                  canvasbottomcommon(svg,mainCanvas,frame,eqn,imgObj3);
                }
			  }

        var dname = jQuery('.pplr_monogram[data-frame=\"' + eqn + '"]').attr('data_name');
          if (jQuery('.pplr-modal-img[data-name=\"' + dname + '"]')[0] && !create_pplr) {
            imgObj.src  = jQuery('.pplr-modal-img[data-name=\"' + dname + '"]').attr('src');
          }else{
            imgObj.src = jQuery('.img_url[data-frame=\"' + eqn + '"]').attr('data-src');
          }
		  
		  imgObj.onerror = function() {
			 alert("Image Not Found " + imgObj.src);
			};
        }
      else{
        canvasbottomcommon(svg,mainCanvas,frame,eqn,imgObj3);
      }

    } else {		
      canvasbottomcommon(svg,mainCanvas,frame,eqn,imgObj3);  
    };
  }
}

function recursivecanvasmiddle(svg,mainCanvas,frame,eqn,imgObj3){
  var canheight = mainCanvas.height;
  var canwidth = mainCanvas.width;
  var ctxRef = mainCanvas.getContext('2d');
  if(create_svg){
	  ctxRef = svg;
  }
  if(create_pplr && createproduct>3){
      recursivecanvastop(svg,mainCanvas,frame,eqn);
  }
  else{

	if(create_svg){
		var canvas = document.createElement("canvas");
		  canvas.width = canwidth;
		  canvas.height = canheight;
		  var ctx = canvas.getContext("2d");
		  ctx.drawImage(imgObj3, 0, 0, imgObj3.width, imgObj3.height, 0, 0, canwidth, canheight); 
		  imgObj3 = canvas;
		}
      ctxRef.drawImage(imgObj3, 0, 0, imgObj3.width, imgObj3.height, 0, 0, canwidth, canheight); 
      eqn = 1;
        recursivecanvastop(svg,mainCanvas,frame,eqn);

  }
}

function canvastopcommon(svg,mainCanvas,frame,eqn){
  if(eqn==_CP[1]){
		if(create_svg){
			var getsvg = svg.getSvg();
			jQuery('.pplr_preview_wrapper').html(getsvg);

		}
		else{
			jQuery('.pplr_preview_wrapper').html(mainCanvas);
		}
    pplr_load_finish();
    if(create_pplr){
      if (pplrloadfinish == parseInt(_CP[1]) || _CP[0] > 0) {
        setTimeout(function() {
          pplr_final_print();
        },500);
      }
      else{
        pplrloadfinish=pplrloadfinish+1;
        loadpplrtrns(pplrloadfinish, pplrlarge);
      }
    }
    else{

      if(createproduct > 3 || _SJ[34]>2){

          var abc = pplr_image.split('?v=')[0].replace('https://','').replace('//',''); 
          if (abc.indexOf('.shopify.com') >-1) {
            var arrImage = abc.split('.');
            var strExtention = arrImage.pop();
            var strRemaining = arrImage.pop().replace(/_[a-zA-Z0-9@]+$/,'');
            abc = arrImage.join('.')+"."+strRemaining+"."+strExtention;
          }
          abc = abc.replace('resizepplr.php?width=1200&height=1200&file=','');
          abc = abc.replace('resizepplr.php?width=1000&height=1000&file=','');
          pplr_design_p[abc] = image_crop(jQuery('.pplr_preview_wrapper canvas')[0],600,600).toDataURL('image/png', 1.0);
      }

      jQuery(".pplr-p-left canvas").css('max-height', jQuery(".pplr_preview_wrapper").height());

    }

  }
  else{
    eqn = eqn + 1;
      recursivecanvastop(svg,mainCanvas,frame,eqn);
  }
} 

function recursivecanvastop(svg,mainCanvas,frame,eqn){

  var m_ = _PP[_CM + eqn].split(',');
  var colortype = 1;
  if (m_[13]>6 || m_[39]==3 || jQuery('.pplr_no_preview[data-main=\"' + eqn + '"]').length>0) {
    canvastopcommon(svg,mainCanvas,frame,eqn,0);
  }
  else{
	   var akk=jQuery('.pplrjscolor[data-frame=\"' + eqn + '"]');
	  if (akk.length !== 0) {
		  var val = akk.attr('data-value');
			var colortype = akk.attr('data-type');
      if(val ==''){
        var color = app_link_pplr+'images/blank.png'+'?v=123'
      }else{
    			var color = app_link_pplr +'images/' + Shopify.shop + '/'+akk.attr('data-value')+'?v=123';
      }
	  }
    var varifycanvas = _PP[_CM + frame].split(',')[18];
    if (m_[13] == 3 || m_[13] == 4) {
      p_l_i();
      if (m_[18] === varifycanvas) {
            var imginfo = jQuery('.pplr-crop[data-frame="' + eqn + '"]').val().split('_');
            if (imginfo.length < 5) {
              var angle = 0;
            } else {
              var angle = imginfo[4];
            }
            var imgObj = new Image();
            imgObj.crossOrigin = 'Anonymous';
            imgObj.onload = function() {
				if(colortype>1){

                var imgObj9 = new Image();
                imgObj9.crossOrigin = 'Anonymous';
                imgObj9.onload = function() {
                  
                      if (m_[16] == 1) {
                        getText(svg,mainCanvas, eqn, imginfo[0], imginfo[1], imginfo[2], imginfo[3], angle,imgObj,imgObj9);
                      }
                    canvastopcommon(svg,mainCanvas,frame,eqn);
                  }
                  imgObj9.src = color;
                }
                else{
                    if (m_[16] == 1) {
                      getText(svg,mainCanvas, eqn, imginfo[0], imginfo[1], imginfo[2], imginfo[3], angle,imgObj);
                    }
                  canvastopcommon(svg,mainCanvas,frame,eqn);
                }

            }
            var dname = jQuery('.pplr_monogram[data-frame=\"' + eqn + '"]').attr('data_name');
            if (jQuery('.pplr-modal-img[data-name=\"' + dname + '"]')[0] && !create_pplr) {
              imgObj.src  = jQuery('.pplr-modal-img[data-name=\"' + dname + '"]').attr('src');
            }else{
              imgObj.src = jQuery('.img_url[data-frame=\"' + eqn + '"]').attr('data-src');
            }


			imgObj.onerror = function() {
			 alert("Image Not Found " + imgObj.src);
			};
          }
          else{
              canvastopcommon(svg,mainCanvas,frame,eqn);
          }

    } else {
      if(colortype>1){
          var imgObj = new Image();
          imgObj.crossOrigin = 'Anonymous';
          imgObj.onload = function() {
            if (m_[18] === varifycanvas) {
              getText(svg,mainCanvas, eqn,0,0,0,0,0,imgObj);
            }
            canvastopcommon(svg,mainCanvas,frame,eqn);
          }
          imgObj.src =color;
      }
      else{

          if (m_[18] === varifycanvas) {
            getText(svg,mainCanvas, eqn);
          }
          canvastopcommon(svg,mainCanvas,frame,eqn);
        }

    };
  }
}

function pplr_preload_image(){
  jQuery(".pplr_image_loader img[src='']").each(function() {
    var f = jQuery(this).data("frame");
    if(!jQuery('.pplr-wrapper[data-main="' + f+ '"]').hasClass('pplr_no_preview')){
      jQuery(this).attr("src",jQuery(this).attr("data-src"));
    }
  })
}


function pplr_load_finish(){
	pplrloading = false;
  if(jQuery('.pplr img:visible:first')[0]){
    pplrcurrentimage = jQuery('.pplr img:visible:first')[0].currentSrc;
  }
  jQuery('.pplr img:first').css('border', 0);
  jQuery('.pplr_preview_wrapper').animate({"opacity": 1});
  jQuery("#pplr-preview").animate({"opacity": 1});
  jQuery(".pplr-modal-box").animate({'opacity': 1});
  jQuery(".pplrloadingimage").remove();
  jQuery('.pplr_loader').remove();
  jQuery('.blurr,.pplrloading').removeClass('blurr pplrloading');
jQuery('.pplr_thumb_image').removeClass('no_load_first');
if(!jQuery(".pplr_image_loaded")[0]){
jQuery('.pplr_image_loader').addClass('pplr_image_loaded');
jQuery(_P_P).append("<style>" + fontface + "</style>");

}
pplrcomplete();
  var b = jQuery('.pplr_preview_wrapper');
  var a = jQuery('.pplr_preview_wrapper canvas');
  if(a[0]){
    if(a.width()<1 || a.height()<1){
        var w = a.get(0).naturalWidth;
        var h = a.get(0).naturalHeight;
        var pw = b.width();
        var newh = pw*h/w;
      a.css({'width':b.width(),'height':newh,'position':'absolute'});
    }

  }
}

function capitalizeFirstLetter(string) {

  var lines = string.split('. ');

  for (var ii = 0; ii < lines.length; ii++) {
    lines[ii]= lines[ii].charAt(0).toUpperCase() + lines[ii].slice(1);

  }
  return lines.join('. ');
}

function pplrCHex2(hex, opacity) {
  hex = hex.replace('#', '');
  r = parseInt(hex.substring(0, 2), 16);
  g = parseInt(hex.substring(2, 4), 16);
  b = parseInt(hex.substring(4, 6), 16);

  result = [r,g,b];
  return result;
}


function pplrCHex(hex, opacity) {
  hex = hex.replace('#', '');
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
  return result;
}

function capitalize(text) {
  return text.replace(/\w\S*/g, function(tStr)
                      {
    return tStr.charAt(0).toUpperCase() + tStr.substr(1).toLowerCase();
  });
}


if (typeof limitTextarea == 'undefined') {
   var limitTextarea = function(textarea, maxLines, maxChar,k,u,_n) {
      var a = textarea.value;
      if(k==2){textarea.value =a.replace(/[^\w\s]/gi, '').replace(/_/g, '');}
      if(k==3){textarea.value =a.replace(/[^\w\s]/gi, '').replace(/[0-9]/g, "").replace(/_/g, '');}
      var lines = textarea.value.replace(/\\r/g, '').split('\n'),
          lines_removed, char_removed, i, pos,again;
      if (maxLines && lines.length > maxLines) {
        lines = lines.slice(0, maxLines);
        lines_removed = 1;
      }
      if (maxChar) {
        i = lines.length;

  		if(u<2){
  			if (lines[0].length > maxChar) {lines[0] = lines[0].slice(0, maxChar);}
  			char_removed = 1;

    		}
    		else{
    			while (i-- > 0)
    			  if (lines[i].length > maxChar) {
    				l = lines[i].slice(0,maxChar);
    				pos = lines[i].lastIndexOf(' ');
    				if (pos < 0) {
    					lines[i] = lines[i].slice(0, maxChar) + '\n' + lines[i].slice(maxChar);
              //if(lines[i].slice(maxChar).length>maxChar){
                again =1;
              //}

    				} else {
    				  if(lines[i][maxChar] == ' ' && lines[i].length == parseInt(maxChar)+1){
    				   l = lines[i].slice(0,maxChar);
    				  }
    				  pos = l.lastIndexOf(' ');
              var nospace = false;
              if(pos<1){
                pos = parseInt(maxChar)-1;
                nospace = true;
              }
    				  if(lines.length < maxLines) {
    						var x =  '\n' + lines[i].substring(pos + 1);
    					}else{
    						var x = '';
    					}
              if(nospace){pos=pos+1;}
    					lines[i] = lines[i].substring(0, pos) + x;
    					if(lines[i].substring(pos + 1).length>maxChar){
    						again =1;
    					}
    				}
    				char_removed = 1;
    			  }
    		}

        if (char_removed || lines_removed) {
          textarea.value = lines.join('\n');
          var _J = jQuery(textarea).attr('fpos');
          var kkt = textarea.value;
          if(kkt.length==parseInt(_J)+1){
            jQuery(textarea).attr('fpos',parseInt(_J)+1);
          }
        }
        if(again){
            limitTextarea(textarea, maxLines, maxChar,k,u,_n);
        }
      }
        if(_n[0]){
          _n.find('.ct').text((jQuery(textarea).attr('data-maxlength')-jQuery(textarea).val().split("\n").join("").length));
        }
    }
}


if (typeof pplr_wrapText == 'undefined') {
  var pplr_wrapText = function (context, text, x, y, maxWidth, font, areafSize, align, valign, maxlinenumber, line_height, h, fheight,m_,mainCanvas,pss,color,eqn,type,startAngle2,angle,inwardFacing,diameter,textHeight2,textMaxHeight,clockwise) {
    var linebreaks = text.split('\n');
    var maxsize = areafSize ;
    var rsize = areafSize ;
    var textWidth = get_tex_width(words, maxsize + 'pt ' + font);
    var textHeight = (getTextHeight(font, maxsize).height) * line_height * linebreaks.length;
    var fSize = maxsize;

    if(_SJ2[25]<1)
      {
        for (var ii = 0; ii < linebreaks.length; ii++) {
          var words = linebreaks[ii];
          var i, fSize;
          for (i = maxsize; i > 1; i--) {
            textWidth = get_tex_width(words, i + 'pt ' + font);
            textHeight = (getTextHeight(font, i).height) * line_height * linebreaks.length;
            if (textWidth < maxWidth && textHeight < h) {
              areafSize = i;
              fSize = i;
              maxsize = i;
              break;
            }
            if(textWidth/maxWidth>1.2){ i= parseInt(i*(maxWidth/textWidth)*1.2); }
          }
        }
      }


    var aff = jQuery('.pplr-size-select[data-frame="' + eqn + '"]');
    if(aff[0]){
      jQuery('.pplr-size-select[data-frame="' + eqn + '"]').val((aff.attr('data-size')*fSize/rsize).toFixed(2));
    }

    var lineHeightprime = (getTextHeight(font, fSize).height)* line_height;

    var lineHeight = (getTextHeight(font, fSize * fheight).height) * line_height;

    if (valign == '2') {
      y += (h - lineHeightprime * linebreaks.length) / 2 - lineHeight / 2 + areafSize / 2;
    }
    if (valign == '3') {
      y += (h - lineHeightprime * linebreaks.length);
    }
    var linenumber = 1;

    if(type>2){
      var dy = y;
      var v = dy* Math.sin(angle * Math.PI / 180);
      var x = -dy* Math.cos(angle * Math.PI / 180);
      context.translate(v, -x);
      textHeight=textHeight2;
    }

    for (var ii = 0; ii < linebreaks.length; ii++) {
      var words = linebreaks[ii];
      context.font = (fSize * fheight  + 'pt') + ' ' + font;
      var testWidth = context.measureText(words).width;
      if (align == 'left') {
        var fixalign = maxWidth / 2;
      }
      if (align == 'right') {
        var fixalign = -maxWidth / 2 + testWidth;
      }
      if (align == 'center') {
        var fixalign = testWidth / 2;
      }
      y += lineHeight;


      if(type<3){
        if(m_[49]<0 && m_[71]==3){
          context.strokeText(words,x - fixalign,y);
        }
        if(m_[71]==4){
          context.shadowOffsetX = -m_[49];
          context.shadowOffsetY = -m_[49];
          context.shadowColor = "rgba(0,0,0,1)"; 
        }
        context.fillText(words, x - fixalign, y);

    		if(m_[49]>0 && m_[71]==3){
    		  context.strokeText(words,x - fixalign,y);
    		}
    		if(m_[71]==4){       
    			context.shadowOffsetX = m_[49];
    			context.shadowOffsetY = m_[49];
    			context.shadowColor = "rgba(255,255,255,1)";	
    			context.fillText(words, x - fixalign, y);
    		}
      }
      else{

          if(isRTL(words[0])){words = words.split('').reverse().join('')}
      
          if (((['left', 'center'].indexOf(align) > -1) && inwardFacing) || (align == 'right' && !inwardFacing)) words = words.split('').reverse().join('');

        var startAngle = startAngle2;
          startAngle += ((Math.PI) * !inwardFacing);
          context.textBaseline = 'middle';
          context.textAlign = 'center';
          if (align == 'center') {
              for (var j = 0; j < words.length; j++) {
                  var charWid = context.measureText(words[j]).width;
            if (inwardFacing) {
            var kerning = 0;
            } else {
            var kerning = 2*Math.tan((charWid / 2) / (diameter / 2 - textHeight ))* getTextHeight(font, parseInt(fSize), words[j]).height;
            }
                  startAngle += ((charWid + (j == words.length - 1 ? 0 : kerning )) / (diameter / 2 - textHeight / 2 + rsize / 2)) / 2 * -clockwise;
              }
          }
          context.rotate(startAngle-(angle * Math.PI / 180));
          var ddd = 0 ;
          for (var j = 0; j < words.length; j++) {
              var charWid = context.measureText(words[j]).width;
          if (inwardFacing) {
          var kerning = 0;
          } else {
          var kerning = 2*Math.tan((charWid / 2) / (diameter / 2 - textHeight))* getTextHeight(font, parseInt(fSize), words[j]).height;
          }
          ddd+= (charWid / 2) / (diameter / 2 - textHeight / 2 + rsize / 2) * clockwise;

              context.rotate((charWid / 2) / (diameter / 2 - textHeight / 2 + rsize / 2) * clockwise);  
			    if (inwardFacing) {
				  var yy = (0 - diameter / 2+textMaxHeight/2 - textHeight/2);
				} else {
				  var yy = -1 * (0 - diameter / 2 + textHeight) + rsize / 2;
				}

        if(m_[49]<0 && m_[71]==3){
          context.strokeText(words[j], 0, yy);
        }  
				context.fillText(words[j], 0, yy);
				if(m_[49]>0 && m_[71]==3){
				  context.strokeText(words[j], 0, yy);
				}
				if(m_[71]==4){
					context.shadowOffsetX = m_[49];
					context.shadowOffsetY = m_[49];
					context.shadowColor = "rgba(255,255,255,1)";	
					context.strokeText(words[j], 0, yy);
				}
              context.rotate((charWid / 2 + kerning) / (diameter / 2 - textHeight / 2 + rsize / 2) * clockwise); // rotate half letter
             ddd+= (charWid / 2 + kerning) / (diameter / 2 - textHeight / 2 + rsize / 2) * clockwise;
          }
        context.rotate(-startAngle+(angle * Math.PI / 180)-ddd);

        var dy = lineHeight;
        var v = dy* Math.sin(angle * Math.PI / 180);
        var x = -dy* Math.cos(angle * Math.PI / 180);
        context.translate(v, -x);

      }

      linenumber = linenumber + 1;

    }
  }
  }



function getTextHeight(font, areaFsize, dtxt) {
  if (dtxt) {
    var Hg = dtxt;
  } else {
    var Hg = 'Hgf';
  }
  var text = jQuery('<span style="line-height:1 !important;vertical-align: middle;padding:0px !important;margin:0px !important;position:absolute;top:0px;z-index:999">' + Hg + '</span>').css({
    fontFamily: font,
    'font-size': areaFsize + 'pt'
  });


  var block = jQuery('<span style="display: inline-block; width: 1px; height: 0px;"></span>');

  var div = jQuery('<span></span>');
  div.append(text, block);

  var body = jQuery('body');
  body.append(div);
  try {

    var result = {};

    block.css({
      verticalAlign: 'baseline'
    });
    result.ascent = block.offset().top - text.offset().top;

    block.css({
      verticalAlign: 'bottom'
    });
   //result.height = block.offset().top - text.offset().top;
    result.height = text[0].offsetHeight;
    result.width = text.width();

    result.descent = result.height - result.ascent;

  } finally {
      div.remove();
  }
  return result;
};

function get_tex_width(txt, font) {
  this.element = document.createElement('canvas');
  this.context = this.element.getContext("2d");
  this.context.font = font;
  return this.context.measureText(txt).width;
}

function getText(svg,mainCanvas, eqn, uileft, uitop, perwidth, perheight, a,imgObj,imgObj9) {
  var canwidth = mainCanvas.width;
  var canheight= mainCanvas.height  ;
  var ctxRef = mainCanvas.getContext('2d');
  if(create_svg){
	  ctxRef = svg;
  }
  
  var m_ = _PP[_CM + eqn].split(',');

  var inputtype = m_[13];
  if (inputtype >6 || m_[39]==3 || jQuery('.pplr_no_preview[data-main=\"' + eqn + '"]').length>0 || jQuery('.pplr_option[data-frame=\"' + eqn + '"]').length>0) {
    return;
  }
  if(create_pplr && m_[39]==4){
	     return; 
  }
  var ratio = 1;
  var type = m_[10];

  if (jQuery('.img_url[data-frame=\"' + eqn + '"]')[0]) {
    var image = jQuery('.img_url[data-frame=\"' + eqn + '"]').attr('data-src');
  }

  var angle = m_[11];
  var diameter = ratio * parseInt(m_[5]) * canheight / 500;
  var xpos = ratio * m_[2] * canwidth / 100;
  var ypos = ratio * m_[3] * canheight / 100;
  var width = ratio * m_[4] * canwidth / 100;
  var height = ratio * m_[14] * canheight / 100;
  var mainwidth = width;
  var mainheight = height;


  if(m_[56]==1 && create_pplr === false){
    ctxRef.lineWidth = 2;
    ctxRef.beginPath();
    ctxRef.setLineDash([5]);
    ctxRef.rect(xpos-width/2,ypos,width,height);
    ctxRef.stroke();
  }


  var align = m_[20];
  var valign = m_[30];
  var color = m_[6];
  var colortype =1 ;
  if (jQuery('.pplr-size-select[data-frame=\"' + eqn + '"]').length !== 0) {
    var pss = parseInt(jQuery('.pplr-size-select[data-frame=\"' + eqn + '"]').attr('data-size'));
  }
  else{
    var pss = m_[1];
  }
  if (jQuery('.pplr-align-select[data-frame=\"' + eqn + '"]').length !== 0) {
    var  align = jQuery('.pplr-align-select[data-frame=\"' + eqn + '"]').val();
  }

  if (jQuery('.pplr_text[data-frame=\"' + eqn + '"]').length !== 0) {
    var color = jQuery('.pplr_text[data-frame=\"' + eqn + '"]').attr('data-color');
  }

  if (jQuery('.jscolor[data-frame=\"' + eqn + '"]').length !== 0) {
    var color = jQuery('input.jscolor[data-frame=\"' + eqn + '"]').val();
  }
  var akk=jQuery('.pplrjscolor[data-frame=\"' + eqn + '"]');
  if (akk.length !== 0) {
    var color = akk.attr('data-value');
    var colortype = akk.attr('data-type');
  }
  if (jQuery('input.pplr_font[data-frame=\"' + eqn + '"]').length !== 0) {
    var fName = jQuery('input.pplr_font[data-frame=\"' + eqn + '"]').attr('data-value').replace('.ttf', '').replace('_', '');
    var fheight = jQuery('input.pplr_font[data-frame=\"' + eqn + '"]').attr('data-height');
  } else {
    var fName = m_[0].split('/').pop(-1).replace('.ttf', '').replace('_', '');
    var fheight = 1;
  }
  var dfName = m_[0].split('/').pop(-1).replace('.ttf', '').replace('_', '');

  var opacity = 1 - m_[12] / 127;
  var line_height = m_[28];
  var fSize = ratio * pss * .75 * (canheight / 500);
  var areafSize = fSize;
  var dfSize =  ratio * m_[1] * .75 * (canheight / 500);
  var adjust = diameter;
  if (diameter < 0) {
    var inwardFacing = true;
    var textInside = true;
    var startAngle = 0;
    diameter = -diameter;
  } else {
    var inwardFacing = false;
    var startAngle = 180;
    var textInside = false;
  }
  align = align.toLowerCase();

  var clockwise = align == 'right' ? 1 : -1;
  startAngle = startAngle * (Math.PI / 180);

  if (inputtype == 3 || inputtype == 4) {
	  
    if (!uileft) uileft = 0;
    if (!uitop) uitop = 0;
    if (!perwidth) perwidth = width;
    if (!perheight) perheight = height;

    if (create_pplr || inputtype == 4 ) {
      var awr = jQuery('.img_url[data-frame="' + eqn + '"]').attr('data-newr');
        uileft=uileft*awr;
        uitop= uitop*awr;
        perwidth=perwidth*awr;
        perheight=perheight*awr;

    }
	
	
	var ay = height;
    var extraY = ay - ay * Math.cos(angle * Math.PI / 180);
    var extraX = height * Math.sin(angle * Math.PI / 180);
    var c = 0;
    var d = 0;
    var rto = perwidth / perheight;
    var slm = height;
    var rto2 = width / height;

    if (a == -90 || a == 270) {
      c = ay;
      d = (parseInt(width) - parseInt(height)) / 2;
      height = width;
      width = slm;
      var rto2 = width / height;
    }
    if (a == 90 || a == -270) {
      c = 0;
      d = (-parseInt(width) - parseInt(height)) / 2;
      height = width;
      width = slm;
      var rto2 = width / height;
    }

    if (a == 180) {
      c = parseInt(height);
      d = -parseInt(width);
      uileft= imgObj.width - uileft - perwidth;
      uitop = imgObj.height - uitop - perheight;
    }

    angle = parseInt(angle) - a;
	
if(create_pplr && jQuery('.crop_img_url[data-frame="' + eqn + '"]')[0]){

      var canvas_crop = document.createElement( 'canvas' );
      var ctx_crop = canvas_crop.getContext( "2d" );
      var t = uitop;
      var l = uileft;
      var w = perwidth;
       var h = perheight;
       if(t<0){
        t=0;h=h-t;
       }
      if(l<0){
        l=0;w=w-l;
       }
       if(w>imgObj.width-l){
        w = imgObj.width-l;
       }
      if(h>imgObj.height-t){
        h = imgObj.height-t;
       }
      canvas_crop.width = w;
      canvas_crop.height = h;
      ctx_crop.clearRect(0,0,w,h);
      ctx_crop.drawImage(imgObj,l,t,canvas_crop.width,canvas_crop.height, 0, 0, canvas_crop.width, canvas_crop.height);

      var canvas_r = document.createElement( 'canvas' );
      var ctx_r = canvas_r.getContext( "2d" );

      if(a == 180 || a == -180 || a == 0){
        canvas_r.width = w;
        canvas_r.height = h;
      }
      else{
        canvas_r.width = h;
        canvas_r.height = w;    
      }

      ctx_r.save();
      ctx_r.translate(canvas_r.width/2,canvas_r.height/2);

      ctx_r.rotate(a*Math.PI/180);

      ctx_r.drawImage(canvas_crop,-canvas_crop.width/2,-canvas_crop.height/2);

      ctx_r.restore();
	  
	  if(type > 2){
		  imgObj = canvas_r;
	  }
	  var cc = jQuery('.img_url[data-frame="' + eqn + '"]');
	  if(create_pplr && jQuery('.crop_img_url[data-frame="' + eqn + '"]')[0] &&_SJ2[26] !== 1 ){
		 if(cc.attr("data-src").indexOf("data:image")!== -1){
			var type = jQuery('.crop_img_url[data-frame="' + eqn + '"]').data('type');
			if(m_[42]=='2' && inputtype < 4){ 
			  var imageData = ctx_r.getImageData(0, 0, canvas_r.width, canvas_r.height);
			  var data = imageData.data;
			  for(var i = 0; i < data.length; i += 4) {
				var brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
				data[i] = brightness;
				data[i + 1] = brightness;
				data[i + 2] = brightness;
			  }
			  ctx_r.putImageData(imageData, 0, 0);
			}
		  var croppedImageDataURL = canvas_r.toDataURL(type, 1.0);
		  jQuery('.crop_img_url[data-frame="' + eqn + '"]').attr("src", croppedImageDataURL);
		  }
	  }
  }
	
	if(create_svg && jQuery('.img_url[data-frame="' + eqn + '"]').attr("data-src").indexOf("data:image") <0){
		var canvas = document.createElement("canvas");
		canvas.width = imgObj.width;
		canvas.height = imgObj.height;
		var ctx = canvas.getContext("2d");
		ctx.drawImage(imgObj, 0, 0, imgObj.width, imgObj.height);
		imgObj = canvas;
	}
	
    if(m_[42]=='2' && inputtype < 4){
      var canvas = document.createElement("canvas");
      canvas.width = imgObj.width;
      canvas.height = imgObj.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(imgObj,0,0);   
      var imageData = ctx.getImageData(0, 0, imgObj.width, imgObj.height);
      var data = imageData.data;
      for(var i = 0; i < data.length; i += 4) {
        var brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
        data[i] = brightness;
        data[i + 1] = brightness;
        data[i + 2] = brightness;
      }
      ctx.putImageData(imageData, 0, 0);
      imgObj = canvas;
    }
	
	if (align == 'left') {
        var e = 0;
      }
    if (rto2 > rto || rto2 == rto) {
		var w = parseInt(height * rto);
		 var h = parseInt(height);
		  if (align == 'right') {
			var e = parseInt(width - w);
		  }
		  if (align == 'center') {
			var e = parseInt((width - w) / 2);
		  }
		  var x = e,y=0;

    } else {
		var w = parseInt(width);
		  var h = parseInt(width/rto);
			var e = 0;
		  if (valign == '3') {
			var e = parseInt(height - h);
		  }
		  if (valign == '2') {
			var e = parseInt((height - h) / 2);
		  }
		  var x = 0,y=e;
	}
	
	if (m_[31] == 2 && m_[39] > 1) {

        x = 0;y=0;
      }
	  
	  if(uileft<0){var v = uileft*w/perwidth; var x=x-v/2; perwidth = parseInt(perwidth)+parseInt(uileft);w=w+v;uileft=0;}
	  if(uitop<0){var m = uitop*h/perheight; var y=y-m/2; perheight = parseInt(perheight)+parseInt(uitop);h=h+m;uitop=0;}
	  
	  if(imgObj.width<parseInt(uileft)+parseInt(perwidth)&& uileft>-1){
		  var v = (parseInt(uileft)+parseInt(perwidth)-imgObj.width)*w/perwidth;var x=x+v/2;
		  w=w-v;
		  perwidth = imgObj.width - parseInt(uileft);
		  
	  }
	  
	  if(imgObj.height<parseInt(uitop)+parseInt(perheight)&& uitop>-1){
		  var m = (parseInt(uitop)+parseInt(perheight)-imgObj.height)*h/perheight;
		  var y=y+m/2;
		  h=h-m;
		  perheight = imgObj.height - parseInt(uitop);
	  }
	  
	  var nn = (imgObj.width -parseInt(uileft) - parseInt(perwidth))*w/perwidth;
	  var qq = (imgObj.height -parseInt(uitop) - parseInt(perheight))*h/perheight;
	  if(nn<0){
		  var x=x-nn/2;
	  }
	  if(qq<0){
		  var y=y-qq/2;
	  }


  if (inputtype == 4) {
        var attr = jQuery('.img_url[data-frame="' + eqn + '"]').attr('copy');
      if (typeof attr !== typeof undefined && attr !== false) {
      } else{x = 0;y=0;}

    }
  	  

    if (type > 2 && inputtype == 3) {
		
	ctxRef.save();
	var ay =height;
	var extraY=ay-ay*Math.cos(angle*Math.PI/180);
	var extraX=height*Math.sin(angle*Math.PI/180);
	ctxRef.translate(xpos-w/2-extraX, ypos+extraY);
	ctxRef.rotate(-angle*Math.PI/180);
      var radius = diameter / 2;
      
      var arc = w / radius;
      if (!inwardFacing) {
        var angle = arc / 2 + Math.PI / 2;
      } else {
        var angle = 3 * Math.PI / 2 - arc / 2;
      }
		var v=parseInt(uileft);
		for (var sx = 0; sx < w; sx++){
		  var v= v+parseInt(perwidth)/w;
		  if(!inwardFacing){
		  var yy= y+radius-radius*Math.sin(angle);
		  }
		  else{
		  yy= y+0-radius-radius*Math.sin(angle);
		  }
			ctxRef.drawImage(imgObj,v,uitop,1,perheight,sx,yy,5,h);
		   if(!inwardFacing){
		  angle= angle- arc/w;
		  }
		  else{
		  angle= angle+ arc/w;
		  }
		}
	  ctxRef.restore();
      return;
    }
	

    ctxRef.save();
    ctxRef.translate(xpos - width / 2 - extraX - d, ypos + extraY + c);
	ctxRef.rotate(-angle * Math.PI / 180);
	
	
    if (inputtype == 4) {
		  var canvas = document.createElement("canvas");
		  canvas.width = imgObj.width;
		  canvas.height = imgObj.height;
		  var ctx = canvas.getContext("2d");
		  if (!isIE() || colortype>1){
			  ctx.globalCompositeOperation = 'multiply';
			}
		  ctx.drawImage(imgObj,0,0);  
			if (!isIE() || colortype>1){ 
			  ctx.globalCompositeOperation = 'source-atop';
			}

		  if(colortype>1){
			  if(create_svg){
				  ctx.fillStyle = "#ffffff";
			  }else{
				var pattern = ctx.createPattern(imgObj9, "repeat");
				ctx.fillStyle = pattern;
			  }
		  }else{
			ctx.fillStyle = color;
		  }
		if (!isIE() || colortype>1 && !create_svg){ 
		  ctx.fillRect(0,0,imgObj.width, imgObj.height);
		}


		if (isIE() && colortype<2){
			var rgb = pplrCHex2(color, 1);
			var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
			var data = imgData.data;
			for (var i = 0; i < data.length; i += 4) {
			  data[i] = rgb[0] * data[i] / 255;
			  data[i + 1] = rgb[1] * data[i + 1] / 255;
			  data[i + 2] = rgb[2]* data[i + 2] / 255;
			}
			ctx.putImageData(imgData, 0, 0);
			imgObj = canvas;
		  }
    }
	

	ctxRef.drawImage(imgObj, parseInt(uileft), parseInt(uitop), parseInt(perwidth), parseInt(perheight), x, y, w, h);

    if (inputtype == 4) {
      if(!isIE() || colortype>1){
        ctxRef.globalCompositeOperation=blendc[m_[54]];
		ctxRef.drawImage(canvas, parseInt(uileft), parseInt(uitop), parseInt(perwidth), parseInt(perheight), x, y, w, h);
        ctxRef.globalCompositeOperation='source-over';
      }
    }

       ctxRef.restore();

    return;

  }
  var xnc = jQuery('.pplr_monogram[data-main="' + eqn + '"]');

  if (m_[23] == 1 && !xnc.parent().hasClass('optionwithclass')) {
    if (xnc.val() !== '') {
      var pplrstr = xnc.val();
    } else {
      var pplrstr = decodeHtml(m_[9]);
    }
  } else {
    var pplrstr = xnc.val();
  }
  var text = pplrstr.replace(/\\/g, '');

  if(m_[38]=='5' && text !=='')
    {
      var _d = text.split('-')
      text =_d[1]+'/'+_d[2]+'/'+_d[0];
    }
	
	if(typeof pplr_modify_text !=='undefined'){
    text = pplr_modify_text(text,eqn);
  }

  var fcase = m_[19];

  if(fcase==2){
    text = text.toUpperCase(); 
  }
  if(fcase==3){
    text = text.toLowerCase();
  } 
  if(fcase==4){
    text = capitalize(text);
  }
  if(fcase==5){
    text = capitalizeFirstLetter(text);
  }
  ctxRef.shadowColor = "rgba(255,255,255,0)";

  var div = document.createElement('span');
  div.innerHTML = text.replace(/\s/g, "&nbsp;");
  div.style.position = 'absolute';
  div.style.top = '-10000px';
  div.style.left = '-10000px';
  div.style.fontFamily = fName;
  div.style.fontSize = parseInt(dfSize)+ 'pt';
  div.style.lineHeight = "1.42857143";
  document.body.appendChild(div);
  var textMaxWidth = get_tex_width(text, parseInt(dfSize) + 'pt ' + fName);
  var textMaxHeight = div.offsetHeight;
  var textWidth = get_tex_width(text, parseInt(dfSize)*fheight + 'pt ' + fName);
  var textHeight = div.offsetHeight;
  var fonts = parseInt(dfSize);
  if(typeof m_[40]== 'undefined'){m_[40]=1;}

  if(_SJ2[25]<1)
  {
    var i;
    var j=parseInt(fSize* fheight);
    for (i = parseInt(fSize); i > 1; i--) {
      div.style.fontSize = j + 'pt';
      div.innerHTML = text.replace(/\s/g, "&nbsp;");
      var textWidth = get_tex_width(text, parseInt(j) + 'pt ' + fName);
      var textHeight = div.offsetHeight;
      if (textWidth < width) {
        fSize = j;
        div.style.fontSize = fSize + 'pt';
        textWidth = get_tex_width(text, parseInt(j) + 'pt ' + fName);
        textHeight = div.offsetHeight;

        break;
      }
      if(textWidth>width*1.3){
        j= parseInt(j*(width/textWidth)*1.2);
      }
      else{
        j=j-1;
      }
    }
  }
  else{
    fSize=parseInt(fSize)* fheight;
    div.style.fontSize = fSize + 'pt';
    textHeight = div.offsetHeight;
    textWidth = get_tex_width(text, parseInt(fSize) + 'pt ' + fName);
  }
  jQuery(div).remove();

  var aff = jQuery('.pplr-size-select[data-frame="' + eqn + '"]');
  if(aff[0] && inputtype < 2){
    jQuery('.pplr-size-select[data-frame="' + eqn + '"]').val((fSize/(ratio  * 0.75 * (canheight / 500))).toFixed(2));
  }

  fSize = fSize + 'pt';
  if (!textInside) diameter += textHeight * 2;
  mainCanvas.style.backgroundColor = 'none';
  if(colortype>1){
	  if(create_svg){
		  ctxRef.fillStyle = "#ffffff";
		}else{
		var pattern = ctxRef.createPattern(imgObj, "repeat");
		ctxRef.fillStyle = pattern;
		}
  }else{
    ctxRef.fillStyle = pplrCHex(color, opacity);
  }

  ctxRef.font = fSize + ' ' + fName;

  if(typeof pplr_custom_text_stye !=='undefined'){
    pplr_custom_text_stye(ctxRef,m_,mainCanvas,pss,align,color,fName,fheight,fSize,text,textWidth,xpos,ypos,dfSize);
  }

m_[49]=m_[49]*canwidth/445;

  if(m_[71]==2){
    mainCanvas.style.backgroundColor = pplrCHex(color,0.03);
      var blur = 15;
      if(canheight>1000){
        blur = parseInt(18*canheight/1000);
      }

        ctxRef.shadowColor = color;
        ctxRef.shadowOffsetX = 0;
        ctxRef.shadowOffsetY = 0;
        ctxRef.shadowBlur = blur;
    }

  if(m_[71]==3){
        ctxRef.strokeStyle = m_[50];
        if(m_[49]<0){
        ctxRef.lineWidth = -2*m_[49];
        }else{
        ctxRef.lineWidth = m_[49];
      }
    }
	if(m_[71]==4){
		ctxRef.shadowOffsetX = -m_[49];
		ctxRef.shadowOffsetY = -m_[49];
		ctxRef.shadowColor = "rgba(0,0,0,1)";	
	}

  if (inputtype == 2) {
    if (type == 1) {
      var maxlinenumber = parseInt(m_[7]);
      pplr_wrapText(ctxRef, text, xpos, ypos, width, fName, parseInt(areafSize), align, valign, maxlinenumber, line_height, height, fheight,m_,mainCanvas,pss,color,eqn,type,startAngle,angle,inwardFacing,diameter,textHeight,textMaxHeight,clockwise);
      return (svg,mainCanvas);
    }
    ctxRef.font = (parseInt(areafSize) + 'pt') + ' ' + fName;
    ctxRef.save();
    var ay = width / 2;
    var extra = ay * Math.sin(angle * Math.PI / 180);
    var extra2 = ay - ay * Math.cos(angle * Math.PI / 180);
    var ad = height;
    var extraY = ad - ad * Math.cos(angle * Math.PI / 180);
    var extraX = ad * Math.sin(angle * Math.PI / 180);
    if(type>2){
          var dy = (adjust / 2-  textHeight / 2 + fonts / 2)
          var v = dy* Math.sin(angle * Math.PI / 180);
          var x = -dy* Math.cos(angle * Math.PI / 180);
          ctxRef.translate(xpos - extra2 - extraX-v, ypos - extra + extraY+x);
    }else{
       ctxRef.translate(xpos-extra2-extraX, ypos-extra+extraY);
       ctxRef.rotate(-angle*Math.PI/180); 
    }
    var maxlinenumber = jQuery("input[name='cstmfy_wrap[]']:eq(" + eqn + ")").val();
    pplr_wrapText(ctxRef, text, 0, 0, width, fName, parseInt(areafSize), align, valign, maxlinenumber, line_height, height, fheight,m_,mainCanvas,pss,color,eqn,type,startAngle,angle,inwardFacing,diameter,textHeight,textMaxHeight,clockwise);
    ctxRef.restore();
    return ;

  }


  var fixalign = textWidth / 2;
  if (align == 'left') {
    var fixalign = width / 2;
  }
  if (align == 'right') {
    var fixalign = -width / 2 + textWidth;
  }
  if (align == 'center') {
    var fixalign = textWidth / 2;
  }
  var style = m_[43];
  if(style>1){
	  
	if(type==2){
		ctxRef.save();
		var ay =width/2;					 	 
		var extra = ay * Math.sin(angle * Math.PI / 180);
		var extra2 = ay - ay * Math.cos(angle * Math.PI / 180);
		var ad = height;
		var extraY = ad - ad * Math.cos(angle * Math.PI / 180);
		var extraX = ad * Math.sin(angle * Math.PI / 180);
		ctxRef.translate(xpos - extra2 - extraX, ypos - extra + extraY);
		ctxRef.rotate(-angle*Math.PI/180);
		xpos = 0;
		ypos=0;
	}

    var fName2 = m_[60].split('/').pop(-1).replace('.ttf', '').replace('_', '');
    var fSize2 = ratio * m_[61] * .75 * (canheight / 500);
    var fonts2= parseInt(fSize2)*fheight*(pss/m_[1]);
    var xpos2 = ratio * (m_[62] * canwidth / 100)*(pss/m_[1]);
    var ypos2 = ratio * (m_[63] * canheight / 100);
    var fcase2 = m_[64];
    var fName3 = m_[66].split('/').pop(-1).replace('.ttf', '').replace('_', '');
    var fSize3 = ratio * m_[67] * .75 * (canheight / 500);
    var fonts3= parseInt(fSize3)*fheight*(pss/m_[1]);
    var xpos3 = ratio * (m_[68] * canwidth / 100)*(pss/m_[1]);
    var ypos3 = ratio * m_[69] * canheight / 100;
    var fcase3 = m_[70];

    var fixalign = width/2-get_tex_width('W', areafSize + 'pt ' + fName)/2;
	var c_h = 0 ;
	if(style>2){
		fixalign = fixalign+ (get_tex_width('WWW', areafSize + 'pt ' + fName)-get_tex_width('WWW', dfSize + 'pt ' + fName))/2;
		c_h = (getTextHeight(fName, areafSize, 'WWW').height-getTextHeight(fName, dfSize, 'WWW').height)/2;
	}

    if(text.length==1 && decodeHtml(m_[9]).length>1){

      text= text + decodeHtml(m_[9])[1];

    }
	
	if(text.length==2 && decodeHtml(m_[9]).length>2){

      text= text + decodeHtml(m_[9])[2];

    }

    if(text[0]){
      var a = text[0];
    }
    if(text[1]){
      var b = text[1];
      if(fcase2==1){
        b=b.toUpperCase(); 
      }
      if(fcase2==2){
        b= b.toLowerCase();
      } 
    }
	 if(text[2]){
      var c = text[2];
      if(fcase3==1){
        c= c.toUpperCase(); 
      }
      if(fcase3==2){
        c= c.toLowerCase();
      }
    }

    if(text[0]){
      ctxRef.font = areafSize + 'pt ' + fName;  
      ctxRef.fillText(a,xpos-fixalign-get_tex_width(a, areafSize + 'pt ' + fName)/2,ypos+(fonts/2)*(pss/m_[1])+parseInt(areafSize)/2-c_h);
    }

    if(text[1]){

      ctxRef.font = fonts2 + 'pt ' + fName2;  
      ctxRef.fillText(b,xpos+xpos2-fixalign-get_tex_width(b, fonts2 + 'pt ' + fName2)/2,ypos+ypos2+fonts2/2+parseInt(areafSize)/2-c_h);
    }

  if(style==3){

    if(text[2]){

      ctxRef.font = fonts3 + 'pt ' + fName3;  

      ctxRef.fillText(c,xpos+xpos2+xpos3-fixalign-get_tex_width(c, fonts3 + 'pt ' + fName3)/2,ypos+ypos3+fonts3/2+parseInt(areafSize)/2-c_h);
    }
  }
  
  if(type==2){
	ctxRef.restore();
	}
  return;
 }


  if (type == 1) {
	var k = [text, xpos - fixalign, ypos + parseInt(dfSize) / 2 + parseInt(fSize) / 2];
  if(m_[49]<0 && m_[71]==3){
    ctxRef.strokeText(k[0],k[1],k[2]);
  }
    ctxRef.fillText(k[0],k[1],k[2]);
    if(m_[71]==3 && m_[49]>0){
      ctxRef.strokeText(k[0],k[1],k[2]);
    }
	if(m_[71]==4){
		ctxRef.shadowOffsetX = m_[49];
		ctxRef.shadowOffsetY = m_[49];
		ctxRef.shadowColor = "rgba(255,255,255,1)";	
		ctxRef.fillText(k[0],k[1],k[2]);
	}
    return ;
  }


if(type>1){
	var ay = width / 2;
	var extra = ay * Math.sin(angle * Math.PI / 180);
	var extra2 = ay - ay * Math.cos(angle * Math.PI / 180);
	var ad = height;
	if (type == 2){var ad = height - fonts / 2 - parseInt(fSize) / 2;}
	var extraY = ad - ad * Math.cos(angle * Math.PI / 180);
	var extraX = ad * Math.sin(angle * Math.PI / 180);
}

  if (type == 2) {
    ctxRef.save();
    ctxRef.translate(xpos - extra2 - extraX, ypos + fonts / 2 + parseInt(fSize) / 2 - extra + extraY);
    ctxRef.rotate(-angle * Math.PI / 180);
    ctxRef.textAlign = align;
    var align_l = 0;
    if (align == 'left') {
      align_l= -width / 2;
    }
    if (align == 'right') {
      align_l= width / 2;
    }
  if(m_[49]<0 && m_[71]==3){
    ctxRef.strokeText(text, align_l, 0);
  }

    ctxRef.fillText(text, align_l, 0);

    if(m_[49]>0 && m_[71]==3 ){
      ctxRef.strokeText(text, align_l, 0);
    }
	if(m_[71]==4){
		ctxRef.shadowOffsetX = m_[49];
		ctxRef.shadowOffsetY = m_[49];
		ctxRef.shadowColor = "rgba(255,255,255,1)";	
		ctxRef.fillText(text, align_l, 0);
	}
    ctxRef.restore();
    return ;
  }


  if(isRTL(text[0])){text = text.split('').reverse().join('')}

  if (((['left', 'center'].indexOf(align) > -1) && inwardFacing) || (align == 'right' && !inwardFacing)) text = text.split('').reverse().join('');
  ctxRef.save();
  var dy = (adjust / 2-  textHeight / 2 + fonts / 2);
  var f = (diameter / 2 - textHeight / 2 + fonts / 2);
  var v = dy* Math.sin(angle * Math.PI / 180);
  var x = -dy* Math.cos(angle * Math.PI / 180);
  startAngle += ((Math.PI) * !inwardFacing);
  ctxRef.textBaseline = 'middle';
  ctxRef.textAlign = 'center';
  if (align == 'center') {
    for (var j = 0; j < text.length; j++) {
      var charWid = ctxRef.measureText(text[j]).width;
      if (inwardFacing) {
        var kerning = 0;
      } else {
        var kerning = 2*Math.tan((charWid / 2) / (diameter / 2 - textHeight ))* getTextHeight(fName, parseInt(fSize), text[j]).height;
      }
      startAngle += ((charWid + (j == text.length - 1 ? 0 : kerning )) / f) / 2 * -clockwise;
    }
  }
  
  var sa = 0;
  for (var j = 0; j < text.length; j++) {
    var charWid = ctxRef.measureText(text[j]).width;
	var kerning = 0;
    if (!inwardFacing) {
      var kerning = 2*Math.tan((charWid / 2) / (diameter / 2 - textHeight))* getTextHeight(fName, parseInt(fSize), text[j]).height;
    }
	
	ctxRef.save();
	ctxRef.translate(xpos - extra2 - extraX-v, ypos - extra + extraY+x);
	ctxRef.rotate(startAngle-(angle * Math.PI / 180)+sa+(charWid / 2 + kerning) / f * clockwise);
    if (inwardFacing) {
      var yy = (0 - diameter / 2+textMaxHeight/2 - textHeight/2);
    } else {
      var yy = -1 * (0 - diameter / 2 + textHeight) + fonts / 2 +textMaxHeight/2 - textHeight/2;
    }
    if(m_[49]<0 &&m_[71]==3){
      ctxRef.strokeText(text[j], 0, yy);
    }
    ctxRef.fillText(text[j], 0, yy);
    if(m_[49]>0 && m_[71]==3){
      ctxRef.strokeText(text[j], 0, yy);
    }
	if(m_[71]==4){
		ctxRef.shadowOffsetX = m_[49];
		ctxRef.shadowOffsetY = m_[49];
		ctxRef.shadowColor = "rgba(255,255,255,1)";	
		ctxRef.strokeText(text[j], 0, yy);
	}
    sa=sa+(charWid / 2) / f * clockwise+(charWid / 2 + kerning) / f * clockwise;
	ctxRef.restore();
  }
  
  ctxRef.restore();
  return ;
};

function getOrientation(file, callback) {
    var reader = new FileReader();
    reader.onload = function(e) {

        var view = new DataView(e.target.result);
        if (view.getUint16(0, false) != 0xFFD8)
        {
            return callback(-2);
        }
        var length = view.byteLength, offset = 2;
        while (offset < length) 
        {
            if (view.getUint16(offset+2, false) <= 8) return callback(-1);
            var marker = view.getUint16(offset, false);
            offset += 2;
            if (marker == 0xFFE1) 
            {
                if (view.getUint32(offset += 2, false) != 0x45786966) 
                {
                    return callback(-1);
                }

                var little = view.getUint16(offset += 6, false) == 0x4949;
                offset += view.getUint32(offset + 4, little);
                var tags = view.getUint16(offset, little);
                offset += 2;
                for (var i = 0; i < tags; i++)
                {
                    if (view.getUint16(offset + (i * 12), little) == 0x0112)
                    {
                        return callback(view.getUint16(offset + (i * 12) + 8, little));
                    }
                }
            }
            else if ((marker & 0xFF00) != 0xFF00)
            {
                break;
            }
            else
            { 
                offset += view.getUint16(offset, false);
            }
        }
        return callback(-1);
    };
    reader.readAsArrayBuffer(file);
}


function fileuploadpplr(tis, e) {
  jQuery(tis).closest("form").attr("enctype", "multipart/form-data");
  var frame = jQuery(tis).attr("data-frame");
  jQuery('.cp-sel-Photos[data-main="' + tis + '"] ul li').remove();

  if(_CP[8] <2){
    if (window.FileReader) {
		  var file = e.target.files[0];
		  if (file) {
			 if(file.size/1024/1024>69.8){
				 pplr_delete(frame, true, true);
				 alert("Maximum Size 20MB!");
				 return;
			 }
			if (/^image\//i.test(file.type)) {
					setTimeout(function() {
						jQuery('.crop_img_url[data-frame="' + frame + '"]').attr('data-type',file.type);
						readURL(file, tis, frame,file.type);
					}, 500);
					getOrientation(file, function(orientation) {
						jQuery('.img_url[data-frame="' + frame + '"]').attr("data-rotation", orientation);
					});

			} else {
				if(_PP[_CM + frame].split(',')[39]>2){
				  return;
				}

			}
		  }

    } else {
      console.log('filereader not found');
    }
  }
};

function blobToDataURL(blob) {
    var reader = new FileReader();
     reader.readAsDataURL(blob); 
     reader.onloadend = function() {
         base64data = reader.result;                
         return base64data;
     }
}

function readURL(file, input, frame ,type) {
  var reader = new FileReader();
  if(_PP[_CM + frame].split(',')[39]<3){
  jQuery(input).parents('.pplrfileuploadbutton').after('<div class="pprl-progressbar"><span class="progress-title">' + _SJ[5] + '</span><div class="loader-canvas"><div class="pplr-progress"></div></div><p class="progress-txt"></p></div>');
  }

  reader.onloadend = function() {
    var targetthis = reader.result;
    canvasimagepplr(input, targetthis, frame);
  }
  reader.onprogress = function(data) {
    if (data.lengthComputable) {
      var percentComplete = parseInt(((data.loaded / data.total) * 100), 10);
      jQuery(".loader-canvas .pplr-progress").width(percentComplete + "%");
      jQuery(".loader-canvas .progress-txt").text(parseInt(percentComplete) + "%");
    }
  }

    reader.readAsDataURL(file);
};

function dataurlToBlobUrl(url) {
  var parts = url.split(',', 2);
  var mime = parts[0].substr(5).split(';')[0];
  var blob = b64toBlob(parts[1], mime);
  return URL.createObjectURL(blob);
}

function b64toBlob(b64Data, contentType, sliceSize) {
  contentType = contentType || '';
  sliceSize = sliceSize || 512;

  var byteCharacters = atob(b64Data);
  var byteArrays = [];

  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    var slice = byteCharacters.slice(offset, offset + sliceSize);

    var byteNumbers = new Array(slice.length);
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    var byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }

  var blob = new Blob(byteArrays, {
    type: contentType
  });
  return blob;
}

function p_img_now(frame,input){

    var pplr_img_now = _PP[_CM + frame].split(',')[18];

  if (_CP[0] > 0) {
    var pplrform = jQuery(input).closest("form");
    var pplrvariantid = pplr_variant_id(pplrform);
    for (var i = 0; i < pplr_product.variants.length; i++) {
      if (pplr_product.variants[i].id == pplrvariantid) {
        if(pplr_product.variants[i]["featured_image"]){
          pplr_img_now = pplr_product.variants[i]["featured_image"]["src"];
          break;
        }

      }
    }
  }

  if(pplr_img_now.indexOf('.shopify.com') == -1){pplr_img_now =app_link_pplr+resizepplr+pplr_img_now+'?v=123';
                                                   }
   return pplr_img_now;


}

function canvasimagepplr(input, target, frame) {
  var pplr = jQuery(".pplr img:first");

  var data_name = jQuery(input).attr("data_name");

var pplr_img_now = p_img_now(frame,input);
  jQuery('.pplr-crop[data-frame="' + frame + '"]').prop("disabled", false);
  jQuery('.img_url[data-frame="' + frame + '"]').attr("data-src", target);
  if(_PP[_CM + frame].split(',')[39]>2){
    jQuery(".pprl-progressbar").remove();
    jQuery(".p_m_warning").remove();
    return;
  }

  var pplr_dd =  'pplr_delete(' + frame + ',true)';

var name = jQuery(input).attr("name");
  jQuery('input[name="' + name + '"]').each(function() {
  var frm  = jQuery(this).data('frame');
  var commmann= '<a  onclick="pplr_hide(' + frm + ');" class="js-modal-close pplr_close p_r_c"><i class="pfa fa-check"></i></a><a  onclick="pplr_zoomIn('+frm+');" class="js-modal-close pplr_close p_r_r"><i class="pfa fa-plus"></i></a><a  class="js-modal-close pplr_close p_r_l" onclick="pplr_zoomOut('+frm+');" ><i class="pfa fa-minus"></i></a><a  onclick="pplr_rotate('+frm+',-90);" class="js-modal-close pplr_close p_r_r"><i class="pfa fa-rotate-left"></i></a><a  class="js-modal-close pplr_close p_r_l" onclick="pplr_rotate('+frm+',90);" ><i class="pfa fa-rotate-right"></i></a><a  class="js-modal-close pplr_close p_r_d" onclick="pplr_delete(' + frm + ',true,true,true)" ><i class="pfa fa-trash-o"></i></a><div class="pplr_ex_button" style="display:none;"></div>';

  var pplr_img_now2 = p_img_now(frm,input);
  if (_CP[10] <3 ) {
    jQuery('.crop-modal[data-main="' + frm + '"]').remove();
    jQuery("body").append('<div  class="crop-modal" data-name="'+data_name+'" data-main="'+frm+'"><div class="pplr-popup pplr-modal-box"><header class="pplr_desktop">'+commmann+'</header><div class="pplr-main"><div class="pplr-p-left"><img src="' + pplr_img_now2 + '" /></div><div class="pplr-p-right" ><div class="pplr-modal-body"><img class="pplr-modal-img" data-name="'+data_name+'" data-frame="'+frm+'" src="' + target + '" /></div></div></div><header class="pplr_mobile">'+commmann+'</header></div></div>');
    jQuery('.pplr-wrapper[data-main="' + frm + '"]').addClass('p_h_i');
  }
  else{
    pplr_dd =  'pplr_delete(' + frm + ',true,true,true)';
    jQuery('.pplr-wrapper[data-main="' + frm + '"] .jscroll').before('<div class="crop_header" data-frame="' + frame + '" data-name="'+data_name+'"><div class="pplr-modal-image"><img class="pplr-modal-img" data-name="'+data_name+'" data-frame="'+frm+'" src="' + target + '" /></div><header>'+commmann+'</header></div>');
    jQuery('.pplr-wrapper[data-main="' + frm + '"]').addClass('p_h_m');
    if(parseInt(frame) !== parseInt(frm)){
      jQuery('.pplr-wrapper[data-main="' + frm + '"]').find('.crop_header').hide();
      jQuery('.pplr-wrapper[data-main="' + frm + '"]').removeClass('p_h_m').addClass('p_h_i');

    }
  }
})

  setTimeout(function() {
    var imgObj2 = new Image();
    imgObj2.crossOrigin = 'Anonymous';
    imgObj2.onload = function() {
      var imgObj3 = new Image();
      imgObj3.crossOrigin = 'Anonymous';
      imgObj3.onload = function() {

        jQuery(".pprl-progressbar").remove();
        jQuery(".p_m_warning").remove();

        var min_width = _PP[_CM + frame].split(",")[32];
        var min_height = _PP[_CM + frame].split(",")[33];
		var target2 = target;
		var angle = 0 ;
		var rt = jQuery('.img_url[data-frame="' + frame + '"]').attr("data-rotation");
		if(rt==6 || rt==5){angle = 90;}if(rt==3 || rt==4){angle = 180;}
		if(rt==8 || rt==7){angle = -90;}
    var cck = true;
    if(iOS && pisSafari() || iOS && pisFacebookOrInstagram()){
      var newcanvas = image_crop(imgObj3,4096,4096,angle);
    }
    else{
      var newcanvas = image_crop(imgObj3,false,false,angle);
      if(angle==0){
        cck =false;
      }
    }
		
		var type= jQuery('.crop_img_url[data-frame="' + frame + '"]').attr('data-type');
		var target2 = newcanvas.toDataURL(type);
    if(cck){
		  jQuery('.img_url[data-frame="' + frame + '"]').attr("data-src", target2);
    }

		jQuery('.pplr-modal-img[data-frame="'+frame+'"]').attr('src', target2);
		 
		var imgObj4 = new Image();
    imgObj4.crossOrigin = 'Anonymous';
      imgObj4.onload = function() {

        if (_CP[10] <3 ) {
         // jQuery("body").addClass("pplr-modal-open");
          jQuery("body").find('.crop-modal[data-main="'+frame+'"]').show();
          var nwidth = jQuery('.pplr-modal-img[data-frame="'+frame+'"]').get(0).naturalWidth;
          var nheight = jQuery('.pplr-modal-img[data-frame="'+frame+'"]').get(0).naturalHeight;

          if (min_width > nwidth || min_height > nheight) {
            jQuery(".pplr-modal-box").css('opacity', 1);
            jQuery(".pplr-modal-box").css('max-width', 400);
            if(_SJ[35] =='1'){
              jQuery('.pplr-wrapper[data-main="' + frame+ '"]').append('<span class="p_m_warning">Sorry min width ' + min_width + 'px & min height ' + min_height + 'px</span>');
            }
            else{
              jQuery('.pplr-wrapper[data-main="' + frame+ '"]').append('<span class="p_m_warning">'+ _SJ[35]+' ' + min_width + 'px '+_SJ[36]+' ' + min_height + 'px</span>');
            }
            pplr_delete(frame, true, true);
            pplr_hide(frame);
            return;
          }

        }
        else{

          var nwidth = jQuery('.pplr-modal-img[data-frame="'+frame+'"]').get(0).naturalWidth;
          var nheight = jQuery('.pplr-modal-img[data-frame="'+frame+'"]').get(0).naturalHeight;
          if (min_width > nwidth || min_height > nheight) {
            if(_SJ[35] =='1'){
              jQuery('.pplr-wrapper[data-main="' + frame+ '"]').append('<span class="p_m_warning">Sorry min width ' + min_width + 'px & min height ' + min_height + 'px</span>');
            }
            else{
              jQuery('.pplr-wrapper[data-main="' + frame+ '"]').append('<span class="p_m_warning">'+ _SJ[35]+' ' + min_width + 'px '+_SJ[36]+' ' + min_height + 'px</span>');
            }
            pplr_delete(frame, true, true);
            return;
          }

        }
        if (_CP[10] <3 ) {
          var delta = jQuery('.crop-modal[data-main="' + frame + '"]');
        }
        else{
          var delta = jQuery('.pplr-main');
        }
        var pwidth = delta.find(".pplr-p-left img").get(0).naturalWidth;
        var pheight = delta.find(".pplr-p-left img").get(0).naturalHeight;
        p_p_w_r();
        var ratio = (pwidth* _PP[_CM + frame].split(",")[4]) / (_PP[_CM + frame].split(",")[14] * pheight);

        if (_PP[_CM + frame].split(",")[31] < 2) {
          ratio = 0;
        }
		
        jQuery(input).parents(RP).removeClass('pplr_red_wrapper');

    		  var canvas = image_crop(imgObj3,1000,1000,angle);
            var width = canvas.width;
            var height = canvas.height;
            if(window.self == window.top){
    		     var nowtar = dataurlToBlobUrl(canvas.toDataURL( 'image/png' ));
            }
            else{
              var nowtar = canvas.toDataURL( 'image/png' );
            }
            jQuery('.pplr-modal-img[data-frame="' + frame + '"]').attr('src',nowtar).attr('angle',0).attr('ratio',ratio);

            if(!jQuery('.cp-sel-Photos[data-main="' + frame + '"] ul li')[0]){
                
                jQuery('input[name="' + name + '"]').each(function() {
                  var frm  = jQuery(this).data('frame');
                  var pplr_dd =  'pplr_delete(' + frm + ',true)';
                    jQuery(this).parents('.pplr-wrapper').find("ul").append('<li class="pplr_img_w" data-name="'+data_name+'"><a data-f="'+frm+'" class="pplr_img" href="' + nowtar + '" style="background-image:url(\'' + nowtar + '\');"><a class="pplr_shadow"></a><a class="pplr_modify" onclick="pplr_modify(' + frm + "," + width + "," + height + "," + ratio + "," + nwidth  + ')" ><i class="pfa fa-edit"></i></a><a class="pplr_delete" onclick="'+pplr_dd+'" ><i class="pfa fa-trash-o"></i></li>');
                    if(parseInt(frm) !==parseInt(frame) ){
                      jQuery('.fileupload[data-frame="' + frm + '"]').attr('disabled',true);
                      jQuery('.pplr-modal-img[data-frame="' + frm + '"]').attr('src',nowtar).attr('angle',0).attr('ratio',ratio);
                      if(!jQuery('.img_url[data-frame="' + frm + '"]').parents('.pplr-color-select')[0]){
                          if(cck){
                            jQuery('.img_url[data-frame="' + frm + '"]').attr("data-src", target2);
                          }
                          else{
                            jQuery('.img_url[data-frame="' + frm + '"]').attr("data-src", target);
                          }
                      }
                    }

                    });
            }
            if (_CP[10] >2 ) {
            jQuery(".crop_header:visible").css('max-height',jQuery(".pplr-p-right:visible").height());
            jQuery(".pplr-modal-image:visible").css('max-height',jQuery(".pplr-p-right:visible").height()-40);
            } 
            else{pplr_modal_correct(true);
    			 setTimeout(function() {
    			  pplr_modal_correct(true);
    			},600);
    		}

        cropperpplr(frame, width, height, ratio,nwidth);

        if (_CP[10] >2 ) {
            setTimeout(function() {
              var b = jQuery('.pplr-wrapper[data-main="' + frame+ '"]').find(".crop_header header");
              var c = jQuery(".pplr-p-right:visible");
              var a = -c.offset().top - c.height()+b.offset().top+b.height();
              if(a>0 && b.height()>0){
                c.animate({ scrollTop:c.scrollTop()+a});
              }
            },110);

        }
		}
		imgObj4.src = target2;

      }
      imgObj3.src = target;
    }
    imgObj2.src = pplr_img_now;
  }, 100);
}

function cropperpplr(frame, nwidth, nheight, ratio,k) {
  loadScript_p('//doshopify.com/product-personalizer/cropper.js', function() {
      var recheck;
      var vm = _SJ2[28];
      jQuery('.pplr-modal-img[data-frame="' + frame + '"]').cropper({
        aspectRatio: ratio,
        rotatable: true,
        scalable: true,
        movable:true,
        minCropBoxWidth:50,
        minCropBoxHeight:50,
		    autoCropArea:1,
        checkOrientation: true,
        minContainerWidth: jQuery('.pplr-modal-img[data-frame="' + frame + '"]').parent().width(),
        strict: false,
        viewMode: vm,
        crop: function(e) {
          clearTimeout(recheck);
          recheck = setTimeout(function() {
            recalluipplr(e, frame, nwidth, nheight,k);

          }, 100);

        }
      });

    });
}


function recalluipplr(ui, frame, nwidth, nheight,k) {

  var uileft = ui.x;
  var uitop = ui.y;
  var perwidth = ui.width;
  var perheight = ui.height;
  var rotate = parseInt(ui.rotate);

  if (rotate == -90 || rotate == 270) {
    var uileft = nwidth - ui.y - perheight;
    perheight = ui.width;
    var uitop = ui.x;
    perwidth = ui.height;
  }
  if (rotate == 90 || rotate == -270) {
    var uileft = ui.y;
    var uitop = nheight-ui.x-ui.width;
    perheight = ui.width;
    perwidth = ui.height;
  }
  if (rotate == -180) {
  rotate = 180;
  }
  var name = jQuery('.fileupload[data-frame="' + frame + '"]').attr("name");
  jQuery('.fileupload[name="' + name + '"]').each(function() {
  var frm  = jQuery(this).data('frame');
      jQuery('.img_url[data-frame="' + frm + '"]').attr('data-newr',(k/nwidth));
      jQuery('.pplr-crop[data-frame="' + frm + '"]').val((uileft.toFixed(0)) + "_" + (uitop.toFixed(0)) + "_" + (perwidth.toFixed(0)) + "_" + (perheight.toFixed(0)) + "_" + (rotate));
      var div = jQuery('.pplr-wrapper[data-main="' + frm + '"]').find('.pplr_img')[0];
      div.style.webkitTransform = 'rotate('+rotate+'deg)'; 
      div.style.mozTransform    = 'rotate('+rotate+'deg)'; 
      div.style.msTransform     = 'rotate('+rotate+'deg)'; 
      div.style.oTransform      = 'rotate('+rotate+'deg)'; 
      div.style.transform       = 'rotate('+rotate+'deg)';
    });
  jQuery('.pplr-crop[data-frame="' + frame + '"]').trigger("change");
}

function image_crop(imgObj3,a,b,c){
  var canvas = document.createElement( 'canvas' );
  var ctx = canvas.getContext( "2d" );

  var width = imgObj3.width;
  var height = imgObj3.height;
  var MAX_WIDTH = width;
  var MAX_HEIGHT = height;
  
  if(a && b){
  MAX_WIDTH = a;
  MAX_HEIGHT = b;
  }

  if ( width > height ) {
  if ( width > MAX_WIDTH ) {
    height *= MAX_WIDTH / width;
    width = MAX_WIDTH;
  }
  } else {
  if ( height > MAX_HEIGHT ) {
    width *= MAX_HEIGHT / height;
    height = MAX_HEIGHT;
  }
  }
  canvas.width = width;
  canvas.height = height;

  ctx.drawImage( imgObj3, 0, 0, width, height );
  
  if(c){
      var canvas_r = document.createElement( 'canvas' );
      var ctx_r = canvas_r.getContext( "2d" );

      if(c == 180 || c == -180 || c == 0){
        canvas_r.width = canvas.width;
        canvas_r.height = canvas.height;
      }
      else{
        canvas_r.width = canvas.height;
        canvas_r.height = canvas.width;    
      }
      if(c == 180 || c == -180){
          ctx_r.translate(canvas_r.width,canvas_r.height);
      }else{
    		if(c<0){
    			   ctx_r.translate(0,canvas_r.height);
    		}
    		else{
    			ctx_r.translate(canvas_r.width,0)
    		}
      }
      ctx_r.rotate(c*Math.PI/180);

      ctx_r.drawImage(canvas,0,0);
	  canvas = canvas_r;
  }
	  
  return canvas;
}

function pplr_rotate(k,l){
	var cr = jQuery('.pplr-modal-img[data-frame="' + k + '"]');
  var name = cr.attr('data-name');
	cr.parent().css('opacity',0)
	var a = cr.attr('angle');
	var r = cr.attr('ratio');
	var target = jQuery('.img_url[data-frame="' + k + '"]').attr('data-src');
	var imgObj3 = new Image();
      imgObj3.onload = function() {
			var newcanvas = image_crop(imgObj3,false,false,l);
			var type= jQuery('.crop_img_url[data-frame="' + k + '"]').attr('data-type');
			var target2 = newcanvas.toDataURL(type);
			jQuery('.img_url[data-frame="' + k + '"]').attr("data-src", target2);
			cr.attr("data-src", target);
			var nwidth = newcanvas.width;
			var canvas = image_crop(cr[0],1000,1000,l);
			var width = canvas.width;
			var height = canvas.height;
			var nowtar = dataurlToBlobUrl(canvas.toDataURL( 'image/png' ));
      jQuery('.pplr-modal-img[data-name="' + name + '"]').each(function() {
  			jQuery(this).attr('src',nowtar).attr('angle',l);
      })
			jQuery('.pplr_img[data-f="' + k + '"]').attr('src',nowtar).css('background-image','url(\'' + nowtar + '\')');
			cr.cropper("destroy");
			if (_CP[10] <3 ) {
				pplr_modal_correct(true);
			}
			cropperpplr(k, width, height, r,nwidth);
			cr.parent().animate({opacity: 1}, 1000);
	  }
	  imgObj3.src = target;
	}

function pplr_zoomIn(k){
	
	jQuery('.pplr-modal-img[data-frame="' + k + '"]').cropper('zoom', 0.1);

}
function pplr_zoomOut(k){jQuery('.pplr-modal-img[data-frame="' + k + '"]').cropper('zoom', -0.1);}


function pplr_modify(frame, width, height, ratio,nwidth) {
  if (_CP[10] >2 ) {
    jQuery('.pplr-wrapper[data-main="' + frame + '"]').find('.crop_header').show();
    jQuery('.pplr-wrapper[data-main="' + frame + '"]').addClass('p_h_m');
    cropperpplr(frame, width, height, ratio,nwidth);
    return;
  }
  p_p_w_r();
  //jQuery("body").addClass("pplr-modal-open");
  if(!jQuery(".crop-modal[data-main='"+frame+"'] cropper-container")[0]){
    cropperpplr(frame, width, height, ratio,nwidth);
  }
  jQuery(".crop-modal[data-main='"+frame+"']").show();
  p_p_w_r();
  jQuery('.pplr-crop[data-frame="' + frame + '"]').trigger('change');

}

function pplr_hide(tis,k) {
  if (_CP[10] >2 ) {
    jQuery('.pplr-wrapper[data-main="' + tis + '"]').find('.crop_header').hide();
    jQuery('.pplr-wrapper[data-main="' + tis + '"]').removeClass('p_h_m').addClass('p_h_i');
    return;
  }
  jQuery(".crop-modal").hide();
  jQuery("body").removeClass("pplr-modal-open");
  p_p_w_r();
  jQuery('.pplr-crop[data-frame="' + tis + '"]').trigger('change');
}



function numberWithCommas(nStr,d,f)
{
  var k = '.',n=',';
  if (typeof pplr_money_formate !== 'undefined' && !d) {
    if(pplr_money_formate.indexOf('amount_with_comma_separator')> -1){
      k = ',';n='.';
    }
  }
  if(d){
    if(f.indexOf('amount_with_comma_separator')> -1){
      k = ',';n='.';
    }
  }

  nStr += '';
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? k + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + n + '$2');
  }
  return x1 + x2;
}

if (typeof pplrqty == 'undefined') {
  var pplrqty = function (k,_l,_n) {

    if(k){
      if(jQuery(_l).val()<_n){jQuery(_l).val(_n)}
    }
    var pplrqty = 0;
    var pplrqtyreturn = 0;
    var pprice2 = pplr_product.price;
    var pplrform = jQuery(RP).closest("form");
    if(pplrform.find("[name='quantity']").length>0){
      var qty = pplrform.find("[name='quantity']").val();
    }
    else{
      var qty = 1 ;
    }

    if (pplrform.find("input[name='id']").length !== 0) {
      var pplrvariantid = pplrform.find("input[name='id']").val();
    } else {
      var pplrvariantid = pplrform.find("select[name='id']").val();
    }
    for (var i = 0; i < pplr_product.variants.length; i++) {
      if (pplr_product.variants[i].id == pplrvariantid) {
        var pprice2 = pplr_product.variants[i].price
        }
    }
    var hasAddi = false;
    var rate = Shopify.currency.rate;
	
    jQuery(".pplraddprice:not([disabled])").each(function() {
      var k= jQuery(this);
      if (jQuery.trim(k.val()) !== "" && k.val() !== "blank" && pplrischecked(k) && !k.parents('.pplr_no_preview')[0]) {
        var dp = k.attr("data-price").replace(/[^0-9.]/g, '');
    		if(dp == ''){dp = 0;}
            var a_p = parseFloat(dp);
    		if(a_p>0){	
    		var _J = k.attr('data-price-type');
    		if(k.hasClass('pplr_font')){
    			var fr = k.data('frame');
    			var _b = jQuery('.pplr_text[data-main="' + fr + '"]');
    			var _n = _b.attr('data-price-type');
    			if (typeof _n !== typeof undefined && _n !== false) {
    				if(_n==4){k=_b;_J=_n;}
    			}
    		}
        if (typeof _J !== typeof undefined && _J !== false) {
          if(_J==3){
            a_p = parseFloat(dp)*pprice2/10000;
          }

          if(_J==5){
            a_p = parseFloat(dp)*pprice2/10000+parseFloat(dp)*pplrqty/100;
          }

          if(_J==4){
            var f = k.attr("data-frame");

            if (typeof pplr_price_filter == 'undefined') {
              var pplr_price_filter = /[^0-9a-zA-Z]/g;
            }
            if(_PP[_CM + f].split(",")[38]>1){
              a_p = parseFloat(dp*(k.val().replace(pplr_price_filter, '').length));
            }
            else{
              a_p = parseFloat(dp*(k.val().replace(/\s/g, '').length));
            }

          }
        }
        var cur_adjust = 0 ;

        var dv  = k.attr('data-variant');
        if (typeof dv !== typeof undefined && dv !== false && createproduct !=='2' && createproduct !=='5') {
            if(dv ==''){
              pplrqtyreturn = pplrqtyreturn + a_p;
              hasAddi = true;
            }
            else{
              if(diffcur){
                var addr = Math.ceil(a_p*rate)- a_p*rate;
                var tttr = parseFloat((pplr_product.price).toString().slice(-2));
                var addr2 = tttr - 100;
                if(100-addr*100-tttr>0){
                  addr2 = tttr;
                }
                cur_adjust = (addr2+addr*100)/(100*rate);
              }
            }

          }
          else{
            pplrqtyreturn = pplrqtyreturn + a_p;
            hasAddi = true;
          }

          pplrqty = pplrqty + a_p+cur_adjust;
  		}
    }
  });
  if(hasAddi && diffcur && rounding>0){
    var vprice =  _SJ[26]*rate + rounding;
    var kkr = (Math.ceil(pplrqtyreturn*rate*100/vprice)*vprice-pplrqtyreturn*rate*100)/100;
    pplrqty = pplrqty + kkr/rate;
  }


	var _P2 = jQuery("."+_SJ2[8]+',#'+_SJ2[8]);
    if (_CP[10] <3 ) {
    var _P = jQuery("."+_SJ2[8]+',#'+_SJ2[8]);
    if (!_P[0]) {var _P = jQuery("#main .ProductMeta__Price:not(.Price--compareAt),.price-list:not(.product-item__price-list) .price:not(.price--compare) ,#ProductPrice-product .money,.gf_product-price.money,#productPrice .money,.product__current-price .money,#product-price .money,.product-price .sale,.product-single .price-item--sale:visible,#price-field .money,.pplrcur,#price .price,#ProductPrice-product-template .money,.product-single__meta .product__price .price-item--sale:visible,.product__price:not(.product__price--compare)>.money,.product-detail .theme-money,.price__container .current_price .money,."+_SJ2[8]+',#'+_SJ2[8]);}
	  if (!_P[0]) {var _P = jQuery(".product-single__price,form .price-item--regular .money,.new-price,form .price-item--regular:visible,#price,#ProductPrice-product-template,.price__container .current_price,.product__current-price,.product-price .money,.product__price.sale-price,#product-price");}
      if (!_P[0]) {var _P = jQuery(".product-single__price,form .price-item--regular,.product__price:not(.product__price--compare)");}
    }
    else{
      var _P = jQuery(".pplr-p-right .pplrcur,.pplr_ex_inner .pplrcur");
    }
	
	
  var _X = '';
	var _J = "$";
  var decimal = 2;
	
	if (_P[0]) {
	      var _J = _P.attr('data-cur');
		  if (typeof _J !== typeof undefined && _J !== false) {
        if (typeof pplr_money_formate !== 'undefined') {
          if(pplr_money_formate.indexOf('amount_no_decimals')> -1){
            decimal = 0;
          }
        }
		  }
		  else{
			if (typeof pplr_money_formate !== 'undefined') {
				  if(pplr_money_formate.indexOf('amount')> -1){
					var a = pplr_money_formate.replace(/<\/?[^>]+(>|$)/g, "");
					var _J = a.split('{{')[0];
					if(a.split('}}').length>1){
					  var _X = a.split('}}')[1];
					}
          if(_J.trim()==''){_P.attr('data-cur-place','right');_J = _X;}
				}

        if(pplr_money_formate.indexOf('amount_no_decimals')> -1){
          decimal = 0;
        }

			  }
		  }
	}
	
	if( Shopify.currency !== 'undefined' && _X ==''){
	var cc = {"gbp":'£', "usd":'$', "cad":'$', "aud":'$', "eur":'€', "jpy":'¥'};
		var mc = Shopify.currency["active"].toLowerCase();
		if(cc[mc]){_J = cc[mc];}
	};

	var a_p_t = jQuery('.a_p_t');
	var g = 1;
	var additional = (pplrqty*qty).toFixed(decimal);
	var _w ='';
  if (_P[0] && pricechange) {
		var pplr_total = ((pprice2 / 100)*qty + rate*pplrqty*qty).toFixed(decimal);
		var _s = jQuery(".doubly-wrapper .selected,.currency-switcher:not(.vitals-nice-select) .list .selected,.doubly-float");
		jQuery(".currency-switcher select").trigger('çhange');

		if(_s[0]){
			loadScript_p('//init.grizzlyapps.com/9e32c84f0db4f7b1eb40c32bdb0bdea9', function() {
          loadScript_p('//doshopify.com/product-personalizer/currency.js', function() {
    			  var b = Shopify.currency.active;
    			  if(_s.hasClass('currency-switcher-btn')){
    				  var k = _s.attr('doubly-currency');
    				  var _J = _s.text().split(" ")[2];
    			  }else{
              if(_s.hasClass('doubly-float')){
                var k = _s.find('.currency-switcher').val();
                var curr = pplr_currency[k].money_with_currency_format.replace("{{amount}}",',').replace("{{amount_with_comma_separator}}",',').replace("{{amount_no_decimals}}",',').split(',');
                  var _J = decodeHtml(curr[0]);
                  if(pplr_currency[k].money_format.indexOf(" ")>-1){
                    _J = _J + ' ';
                  }
                  _X = decodeHtml(curr[1]).replace('Ø¯.Ø¥','د.إ');
              }else{
      			     var k = _s.attr('data-display');
      			  	var _J = _s.attr('data-currency-symbol');
              }
    			  }
    				pplr_total = Currency.convert(pplr_total,Shopify.currency.active,k).toFixed(decimal);
    				additional = Currency.convert(pplrqty*qty,Shopify.currency.active,k).toFixed(decimal);
            var kkr = jQuery('.money[doubly-currency]');
            if(kkr[0]){
              if(kkr.text().indexOf(".95")>-1 || kkr.text().indexOf(",95")>-1){
                if(pplr_total>0){pplr_total = pplr_total.substr(0, (pplr_total.toString().indexOf(".") + 1)) + 95;}
                if(additional>0){additional = additional.substr(0, (additional.toString().indexOf(".") + 1)) + 95;}
              }
            }
    				_P.text(_J + numberWithCommas(pplr_total,1,pplr_currency[k].money_with_currency_format) +_X );
    				if(_SJ2[6]>0){a_p_t.html('<span class="money">'+_SJ2[7]+' '+_J + numberWithCommas(additional,1,pplr_currency[k].money_with_currency_format)+_X+'</span>')}
    			})
      })
		}
		else{
			//var _v=jQuery(".BOLD-mc-picker .name");if("undefined"!=typeof Currency&&"undefined"!=typeof cookieCurrency&&_v[0]){var _g=jQuery("[data-original-value]"),_c=1;if(_g[0]){var _l=parseFloat(_g.first().attr("data-original-value"))/100,_m=parseFloat(_g.first().attr("data-"+_v.first().text().toLowerCase()).replace(/[^\d.-]/g,""));_c=_l/_m}if(1==_c)var pplr_total=Currency.convert(pplr_total*_c,Shopify.currency.active,_v.first().text()).toFixed(2);else pplr_total=(pplr_total/_c).toFixed(2);_J=decodeHtml(Currency.moneyFormats[_v.first().text()].money_format.replace("{{amount}}","").replace("{{amount_no_decimals}}",""))}
			
		var _s = jQuery(".currency-picker[name='currencies'],.currency-selector select[name='currencies'],#currencies[name='currencies']");
		if(_s[0] && typeof Currency !=="undefined"  && typeof Currency.moneyFormats !=="undefined"){
			  var b = Shopify.currency.active;
			  var k = Currency.cookie.read();
				if (k == null) {
			  k = Shopify.currency.active;
			  }
			  var _d = Currency.moneyFormats[k]["money_with_currency_format"].replace("<span class=money>",'').replace("</span>",'').replace("{{amount_with_comma_separator}}",',').replace("{{amount}}",',').replace("{{amount_no_decimals}}",',').split(",");
			  var _J = decodeHtml(_d[0]);
			  var _w = _d[1];
				pplr_total = Currency.convert(pplr_total,Shopify.currency.active,k).toFixed(decimal);
				additional = Currency.convert(pplrqty*qty,Shopify.currency.active,k).toFixed(decimal);
				_P.text(_J + numberWithCommas(pplr_total)+_w);
		}else{

			pplr_total = (pplr_total*1).toFixed(decimal);
			additional = (rate*pplrqty*1*qty).toFixed(decimal);
		  _J=decodeHtml(_J).replace('&euro;','€').replace('&pound;','£');
		  if (_P.attr('data-cur-place') == 'right') {
			_P.text(numberWithCommas(pplr_total)  + _J);
		  } else {
			_P.text(_J + numberWithCommas(pplr_total)+_X);
		  }
		}		 
			if(a_p_t[0]){a_p_t.html(_SJ2[7]+' <span>'+_J + numberWithCommas(additional)+_w+'</span></br>')}
		}
	}
  if(rounding>0){
    return Math.ceil(pplrqtyreturn*rate);
  }
  else{
    return pplrqtyreturn*rate;
  }
  }
 }

function addthistoinput(tis){
  var a = jQuery(tis).parent('.key_layout');
  var is = a.siblings('.pplr_text');
  var oldval=is.val();
  var n = jQuery(tis).attr('data-value');
  var maxchar = is.attr('maxlength') || is.attr('data-maxlength');
    if (typeof maxchar == typeof undefined || maxchar == false) {
      maxchar = 50000;
    }
    if(oldval.length<maxchar+1){
    var _J = is.attr('fpos');
    if (typeof _J !== typeof undefined && _J !== false) {
  	  oldval = oldval.slice(0, _J) + n + oldval.slice(_J);
  	  is.attr('fpos',parseInt(_J)+n.length);
    }
    else{
  	  oldval = oldval + n
    }
  a.siblings('.pplr_text').val(oldval).trigger('input');
  }
}
function togglekey(tis){
  jQuery(tis).siblings('.key_layout').slideToggle();
}

function base64Encode(str) {
    var CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var out = "", i = 0, len = str.length, c1, c2, c3;
    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            out += CHARS.charAt(c1 >> 2);
            out += CHARS.charAt((c1 & 0x3) << 4);
            out += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            out += CHARS.charAt(c1 >> 2);
            out += CHARS.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
            out += CHARS.charAt((c2 & 0xF) << 2);
            out += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        out += CHARS.charAt(c1 >> 2);
        out += CHARS.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out += CHARS.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        out += CHARS.charAt(c3 & 0x3F);
    }
    return out;
}

function addfont(m_){
  var myfont = m_.split('/');
  var fct = myfont.length;
  myfont[fct - 1].replace(".ttf", "")
  loadfont += "<div  class='pplrloadfont' style=\"font-family:\'" + myfont[fct - 1].replace(".ttf", "") + "\' !important;\">a</div>";
  var link = app_link_pplr + m_ +'?v=123';
  var p_ttf = myfont[fct - 1].replace(".ttf", "");
  var c_f = false;
  if(typeof pplr_custom_font !=='undefined'){
    if(pplr_custom_font[p_ttf]){
      link = pplr_custom_font[p_ttf];
    }
  }
  fontface += "@font-face {font-family: '" + p_ttf + "';src: url('"+link+ "') format('truetype');} ";
  if(_SJ[34]>1){
    jQuery.ajax({
    url:link,
    cache:true,
    xhr: function() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 2) {
                if (xhr.status == 200) {
                    xhr.responseType = "blob";
                } else {
                    xhr.responseType = "text";
                }
            }
        };
        return xhr;
    },
    success: function(data){
      if(data instanceof Blob){
        var reader = new FileReader();
        reader.onload =  function(e){
          font_face_array[myfont[fct - 1].replace(".ttf", "")]= [p_ttf,btoa(e.target.result)];
        };
        reader.readAsBinaryString(data);
      }
      else{
          font_face_array[myfont[fct - 1].replace(".ttf", "")]= [p_ttf,base64Encode(data)];
      }
    },
    error:function(data){
      console.log(data);
    }
  });
  }
}


function pplr_Ready() {
  if (window.pplr_Loaded) {
    return;
  }
  window.pplr_Loaded = true;

  jQuery.fn.rC = jQuery.fn.removeClass;
  jQuery.fn._aC = jQuery.fn.addClass;

  var prodata = _CP;
  var cstmfy_all = prodata[0];
  var cstmfy_count = prodata[1];
  var url = prodata[2];
  var url1 = prodata[2];
  var img_size = prodata[3];
  var preview = prodata[9];
  var customize = prodata[10];
  if (prodata.length > 13) {
    var cstmfy_preview_text = prodata[13];
  } else {
    var cstmfy_preview_text = 'PREVIEW';
  }
  var text = '';

  var cstmfy_name = '';
  var cstmfy_default = '';
  var imageon = false;
  var pcropper = false;

  var pplrfontthumb = '';
  if (_SJ[19] == 2) {
    var pplrfontthumb = ' pplrfontthumb ';
  }
  var pplr_image_loader ='';

  for (var x = 1; x <= cstmfy_count; x++) {
    var ccolor = '';
    var cfont = '';
    var fcolor = '';
    var droptext= '';
    var tabx= false;
    var selectdisabled = '';
    if(_CP[10]==2){
      var selectdisabled =' disabled ';
    }
    var m_ = _PP[_CM + x].split(",");
    var frame = x;
    var cstmfy_name = decodeHtml(m_[8].replace(/\\/g, ""));
	var c_n = decodeHtml(m_[8]).replace(/(<([^>]+)>)/ig,"");
   cstmfy_name = jQuery.trim(cstmfy_name);
    if (cstmfy_name == '') { 
      var cstmfy_prop = x;
    } else {
      var cstmfy_prop = decodeHtml(m_[8].replace(/\\/g, '').replace(/\//g, '').replace(/"/g, "'").replace("]", " ").replace('[', " "));
    }
      
    if(cstmfy_name.indexOf('_')==0){
      cstmfy_name = cstmfy_name.substr(1);
    }
	 var cstmfy_class = " pplr-" + c_n.replace(/[^\w\s]/gi, '').split(' ').join('-').toLowerCase();

    cstmfy_class=cstmfy_class.replace("pplr-main", "");

    var cstmfy_class_opt = " pplr-" + c_n.split(' ').join('-').toLowerCase();
    cstmfy_class_opt=cstmfy_class_opt.replace("pplr-main", "");
	    var cstmfy_input_type = m_[13];
    var cstmfy_ins='';
    var tooltip = decodeHtml(m_[29]);
    if (tooltip !== '1' && jQuery.trim(tooltip) !== '' ) {
      if (_SJ[13] == 2 ) {
        var vins = ' <span class="ptooltip"><span class="qcon">?</span><span class="ptooltiptext">' + tooltip + '<span class="ptooltiparrow"></span></span></span>';
        if(cstmfy_input_type<8){
          cstmfy_name += vins;
        }
        else{
          cstmfy_ins =  vins;
        }
      } else if(_SJ[13] == 1) {
        cstmfy_name += ' <span class="ptbr">(</span>' + tooltip + '<span class="ptbr">)</span>';
      }
      else{
        cstmfy_ins =  ' <span class="pplr_ins" data-frame="' + x + '">' + tooltip + '</span>';
      }
    }

    var cstmfy_default = decodeHtml(m_[9].replace(/\\/g, ''));
    var cstmfy_color = m_[6];
    var cstmfy_required = '';
    var cstmfy_c_disabled = '';
    var cstmfy_c_required = '';
    var placeholder_default = m_[9].replace("\n", "").replace(/\\/g, '');
    var default_value = decodeHtml(m_[9]);
    var oindex= '';
    if(m_[38]=='1')
    {
      var pattern= '';
    }

    var type ='type="text"';

    if(m_[38]=='2')
    {
      var pattern= 'pattern="[a-zA-Z0-9\\s]+"'+' title="'+ tooltip.replace(/"/g, "'") + '"';
    }

    if(m_[38]=='3')
    {
      var pattern= 'pattern="[A-Za-z\\s]+"'+' title="'+ tooltip.replace(/"/g, "'") + '"';
    }

    if(m_[38]=='4')
    {
      var type ='type="number"';
    }

    if(m_[38]=='5')
    {
      var type ='type="date"';
    }

    if (m_[23] == '1' && customize !==2 &&  m_[39] !=='2' &&  m_[39] !=='4') {
      var cstmfy_required = ' required ';
      var placeholder_default = m_[9].replace("\n", "").replace(/\\/g, '');
      var default_value = '';
    }
    if (m_[23] == '1' &&  m_[39] !=='2' ) {
      var cstmfy_c_required = ' cstmfy_c_required '; 
    }

    if( m_[26] >1){ var default_value= '';}

    if (prodata[10] == 2) {
      var cstmfy_required = '';
    }
    var pplr_arrow = "";
    if (_SJ[0] == 2 && m_[13] !== 8) {
      cstmfy_class_opt = cstmfy_class_opt + ' pplr-collapsible pplr-hide ';
      var pplr_arrow = "<div class=\"pplr-arrow pplr-arrow-right\"></div>";
    } 

    if (m_[23] <3  && typeof(m_[37]) !== 'undefined') {
      if(m_[37]!=='1' && m_[37].replace(/ /g, '')!==''){
        oindex= '<label class="oindexlabel">'+m_[37]+'</label>';
        var tabx= true;
      }
    }

    var optionwith = '';
    var optionwithclass = '';
    for (var y = x; y > 0; y--) {
      var z = y + 1;
      if (z > cstmfy_count) {
        var z = cstmfy_count;
      }
      if (_PP[_CM + y].split(",")[23] == 3) {
        var optionwith = '<input class="pplr_check" type="radio" data-frame="' + x + '" onclick="pplr_option(this)" name="field' + (y - 1) + '"  > ';
        optionwithclass = ' optionwithclass ';
        oindex= '';
        var cstmfy_required = '';
        var cstmfy_c_required = '';
        var pplr_arrow = "";
        var placeholder_default = '';
      } else if (_PP[_CM + z].split(",")[23] == 3) {
        if (x == y) {

          var checked = ' checked ';
        } else {
          var checked = '';
        }
        var optionwith = '<input class="pplr_check" type="radio" data-frame="' + x + '" onclick="pplr_option(this)" name="field' + y + '" ' + checked + '> ';
        optionwithclass = ' optionwithclass ';
        oindex= '';
        var cstmfy_required = '';
        var cstmfy_c_required = '';
        var placeholder_default = '';
        var pplr_arrow = "";
        break;
      } else {
        break;
      }
    }

    var pplr_arrow_main = "";
    if (_SJ[0] == 2  && optionwith === '') {
      if(x == 1 && m_[23] <2 || m_[13] == '8'){}
        else{
        cstmfy_class = cstmfy_class + ' pplr-collapsible pplr-hide ';
        var pplr_arrow_main = "<div class=\"pplr-arrow pplr-arrow-right\"></div>";
      }
    }


    if(m_[57]==1 && tabend && tabstart< x){
      text +='</div>';
      tabend = false;

    }

    if(m_[57]==1 && tabx){
      tabstart = x;
      oindex ='';
      text +='<div class="pplr_tab" id="pplr_tab_'+x+'" data-tab="'+x+'">';
      tabend = true;
      pplr_tab +='<div class="pplr_tab_index" data-tab="'+x+'" onclick="pplr_tab_show('+x+',this)"><span>'+m_[37]+'</span></div>';
    }

    var cstmfy_fontname = m_[24].split('{{')[0];
	if(cstmfy_fontname.indexOf('_')==0){
      cstmfy_fontname = cstmfy_fontname.substr(1);
    }

    var cstmfy_static = ' '; 
    if(m_[39]=='2' && m_[13]<6 || m_[39]=='4')
    {
      var cstmfy_static = ' cstmfy_static '; 
      var cstmfy_c_disabled = ' ';
      var cstmfy_required = '';
	  var cstmfy_c_required = '';
    }
    var ccase ='';
    var fcase = m_[19];
    var transform = 'inherit';
    if(fcase==2){
      ccase = ' toUpperCase ';
      transform = 'uppercase';
    }
    if(fcase==3){
      ccase= ' toLowerCase ';
      transform = 'lowercase';
    } 
    if(fcase==4){
      ccase = ' tocapitalize ';
      transform = 'capitalize';
    }
    if(fcase==5){
      ccase = ' tocapitalizeFirstLetter ';
    }


    if(m_[24].split('{{').length>1){
      cstmfy_fontname+= ' <span class="ptooltip"><span class="qcon">?</span><span class="ptooltiptext">' + m_[24].split('{{')[1].replace("}}", "") + '<span class="ptooltiparrow"></span></span></span>';
    }
    var cstmfy_fontnamel = m_[24].split('{{')[0];
    if (cstmfy_fontnamel == '') {
      cstmfy_fontnamel = 'Font '+x;
    }
    var cstmfy_colorname = m_[25].split('{{')[0];

    if(m_[25].split('{{').length>1){
      cstmfy_colorname+= ' <span class="ptooltip"><span class="qcon">?</span><span class="ptooltiptext">' + m_[25].split('{{')[1].replace("}}", "") + '<span class="ptooltiparrow"></span></span></span>';
    }
  var cstmfy_prop_color = cstmfy_colorname;
  if(cstmfy_prop_color==''){cstmfy_prop_color= "_"+cstmfy_prop +"_color"+x;}

	if(cstmfy_colorname.indexOf('_')==0){
      cstmfy_colorname = cstmfy_colorname.substr(1);
    }
	
    var cstmfy_colornamel = m_[25].split('{{')[0];
    if (cstmfy_colornamel == '') {
      cstmfy_colornamel = 'Color '+x;
    }

    var displaycolor = "";
    var displayfont = "";
    var typedisabled = "";
    var typeclass = "";

    if (cstmfy_input_type > 2) {
      var displaycolor = "display:none;";
      var displayfont = "display:none;";
      var typedisabled = "disabled";
    }

    var pplrhidelabel = '';
    if (cstmfy_input_type==3) {
      var typeclass = " cp-sel-Photos ";
    }

    var cstmfy_max = m_[17];
    if (cstmfy_input_type > 1) {
      cstmfy_max = cstmfy_max*m_[7];
    }
    var maxline = m_[7];

	var nlc = "";
	if (prodata[10] > 2) {
		nlc = "no_load_first";
	}
    var crop = m_[22];
    var priceclass = '';
    var dataprice = '';
    var disabled = "";
    var ypos = m_[3];
    var deselect = "";
    var fileupload = 'fileupload ';
    var charleft = '';
    if(m_[17] < 200 && _SJ[31] !=1 && _SJ[31] !='' && _SJ2[23] >0 && m_[38] !=='5' && m_[13]<3){
	if(m_[43]==2 && m_[13]<2){cstmfy_max=2;}if(m_[43]==3 && m_[13]<2){cstmfy_max=3;}
      var charleft = '<span class="pplr-character-count" data-frame="' + frame + '"><span class="ct">'+cstmfy_max+'</span> <span class="lt">'+_SJ[31]+'</span><span class="lm"> / '+cstmfy_max+'</span></span>';
      cstmfy_class += ' p_c_c';
    }
    if (ypos > 100) {
      var fileupload = '';
    }
    if (m_[26] > 1) {
      var priceclass = ' pplraddprice';
      var dataprice = 'data-price="' + m_[27] + '" '+'data-price-type="' + m_[26] + '" ';
      pricechange = true;
    }

    if (m_[26] >1 || m_[23] > 1 || prodata[10] > 1) {
      if (cstmfy_default == '') {
        var disabled = " ";
      }
    }

    if (default_value == '') {
      var disabled = "";
    }
    if (m_[23] <2) {
      var disabled = "";
    }

    if (m_[23] == 2) {
      if (_SJ[22] == 2) {
        var deselect = "<a name=\"properties[" + cstmfy_prop + "]\" class=\"pplr-swatch-element pplrimage pplr_deselect\" data-price=\"0\" onclick=\"chooseimage(this,0,true);\" style=\"text-align:left;width: 100%;float: left;cursor: pointer;\" data-val=\"\" data-frame=\"" + frame + "\" data-image=\""+app_link_pplr+"images/blank.png\"><span class='img_dropdown' style='display:none;'>"+_SJ[21]+"</span>" + _SJ[21] + "</a>";
      } else if(_SJ[22] == 1) {
        var deselect = "<span name=\"properties[" + cstmfy_prop + "]\" class=\"pplr-swatch-element pplrimage pplr_deselect\" data-price=\"0\" onclick=\"chooseimage(this,0,true);\" style=\"text-align:center\" data-val=\"\" data-frame=\"" + frame + "\" data-image=\""+app_link_pplr+"images/blank.png\"><img src=\""+app_link_pplr+"cross.png\" style=\"max-width: 100%;max-height: 100%;float: none;margin: auto;\" /><span class='img_dropdown'>"+_SJ[21]+"</span></span>";

      }
    }
    if (m_[40] < 1 ) {
      var fonsizeselect= '<div class="textBiggerSmaller" data-frame="' + frame + '"><input name="properties[_font size ' + cstmfy_prop + ']" class="pplr-size-select" data-size="'+m_[1]+'" type="hidden" value="'+m_[1]+'" data-frame="'+x+'"/><a title="Smaller Font" class="sourceSmallerFont" onclick="sourceSmallerFont(this)">-</a><span title="Normal Font"><span>A</span><span>A</span><span>A</span></span><a title="Bigger Font" onclick="sourceBiggerFont(this)" class="sourceBiggerFont">+</a></div>';
    }
    else{ 
      var fonsizeselect= '';
    }
    if (m_[41] < 1 && m_[43] < 2) {
      var align = m_[20];
      var alignx='';
      var aligny='';
      var alignz='';

      if (align == 'left') {
        var alignx = 'active';
      }
      if (align == 'center') {
        var aligny = 'active';
      }
      if (align == 'right') {
        var alignz = 'active';
      }

      var alignselect= '<div class="pplr-btn-group" data-frame="' + frame + '"><input class="pplr-align-select" name="properties[_align ' + cstmfy_prop + ']" type="hidden" value="'+align+'" data-frame="'+x+'"/><button onclick="pplr_align_select(this,\'left\')" class="'+alignx+'" type="button"><i class="pfa fa-align-left"></i></button><button onclick="pplr_align_select(this,\'center\')" class="'+aligny+'" type="button"><i class="pfa fa-align-center"></i></button><button onclick="pplr_align_select(this,\'right\')" class="'+alignz+'" type="button"><i class="pfa fa-align-right"></i></button></div>';
    }
    else{
      var alignselect= '';
    }

    if (prodata[4] !== '0' || m_[35] !== '1') {
      if(cstmfy_input_type < 3){
        if (prodata[4] == 1 || m_[35] == '2') {
          var ccolor = "<div style=\"" + displaycolor + "\" class=\"pplr-wrapper  pplr-color-select" +cstmfy_static + typeclass + cstmfy_class_opt +optionwithclass+ "\" data-frame=\"" + frame + "\" ><label class='pplrlabel' onclick=\"pplr_unfold(this)\" >" + pplr_arrow + cstmfy_colorname + "</label><input  data-frame=\"" + frame + "\" type=\"text\" onchange=\"LoadPplrWithFont('" + frame + "\',true);\" " + typedisabled +disabled+ " name=\"properties[" + cstmfy_colornamel + "]\" value=\"" + cstmfy_color + "\" class=\"jscolor pplr_aux "+cstmfy_static+"\">"+cstmfy_ins+"</div>";
          gcolor = true;
        } else {
			
		var disp = '';
		var dataprice1 = 'data-price="' + 0 + '" ';
		var priceclass1 = '';

        if (m_[35] !== '1') {
          var colorgroup = colorgroup_json[m_[35]];
        } else {
          var colorgroup = colorgroup_json[prodata[4]];
        }

        var color_display = ' color_display_box ';
        if (_SJ[20] == 3) {
          var color_display = ' color_display_circle ';
        }

        if (colorgroup) {
          var colorkey = Object.keys(colorgroup)[0];
          var dcolorname = cstmfy_color;
          var dcolordata = cstmfy_color;
          var dcolortype = 1;
          var ecolor = '';
           var datavariant = 'data-variant="" ';
          if(Array.isArray(colorgroup[colorkey])){
            if(colorgroup[colorkey][1]>1){
              dcolortype = 2;
              dcolordata = colorgroup[colorkey][2];
			       dcolorname = colorkey;
            }
          }
		      if(Object.keys(colorgroup).length<2){disp = ' cstmfy_static ';}
          for (var y = 0; y < Object.keys(colorgroup).length; ++y) {
            var selectcolor = '';
            var colortype = 1;
            var pp=0;
            var colorkey = Object.keys(colorgroup)[y];
            var tooltip = '<div class="swtooltip">' + colorkey + '</div>';
            var colorname = colorkey;
			       var colordata = colorgroup[colorkey];
            var colorback = colordata;
            if(Array.isArray(colorgroup[colorkey])){
              var colordata = colorgroup[colorkey][0];
              var colordatam = colorgroup[colorkey][0];
              var colorback = colordata;
              if(colorgroup[colorkey][1]>1){
                colortype = 2;
                var colordata = colorgroup[colorkey][2];
                var colorback = 'url(\''+app_link_pplr + 'images/' + Shopify.shop + '/'+colorgroup[colorkey][2]+'?v=123'+'\')'; 
              }
      				if(colorgroup[colorkey][3]>0){
      					pp=parseFloat(colorgroup[colorkey][3]);
      						priceclass1 = ' pplraddprice ';
      						pricechange = true;
      				}
            }
            
            if (colordata == cstmfy_color || colordatam == cstmfy_color) {
                  selectcolor = 'selected';
                  dcolorname = colorname;
                  dcolordata = colordata;
          			  dcolortype = 1;
          			  if(colortype == 2){
          				  dcolortype = 2;
          				  dcolordata = colorgroup[colorkey][2];
          			  }
      			  if(pp>0){dataprice1 = 'data-price="' + pp + '" ';pricechange = true;}
              if(colorgroup[colorkey][7]){
                datavariant =  'data-variant="' + colorgroup[colorkey][7] + '" ';
              }
            }
              var variant = '';
              if(colorgroup[colorkey][7]){
                variant = colorgroup[colorkey][7];
              }

            var colorclass = ' pplr_'+ colorname.replace(/ /g, '_')+' ';
            if (_SJ[20] == 2) {
              ecolor += '<span class="pplr-selecter-item ' + selectcolor + '" data-variant="'+variant+'" data-color="' + colordata + '" data-price="'+pp+'" onclick="pplrColor(this,'+pp+')" data-type="'+colortype+'" data-name="' + colorname + '"><span class="colorminithumb" style="background:' + colorback + ';"></span>' + tooltip + '</span>';

            }
            else{
              ecolor += '<span class="pplr-swatch-element pplrColor ' + selectcolor + color_display+ colorclass+'" data-variant="'+variant+'" data-color="' + colordata + '" data-type="'+colortype+'" style="background:' + colorback + ';" data-price="'+pp+'" onclick="pplrColor(this,'+pp+')" data-name="' + colorname + '">' + tooltip + '</span>';
            }


          }

          if (_SJ[20] == 2) {

            var pplrcolordiv = "<span class=\"pplr-selecter-selected dropdowncolor\" onclick=\"pplrselecterselected(this)\">"+'<span class="colorminithumb" style="background:' + dcolordata + ';"></span><span class="dcolorname">'+dcolorname+"</span></span><div class=\"pplr-selecter-options\">";

          }
          else{
            var pplrcolordiv = "<div class=\"pplrgcolor  pplr-swatch-main\">";
          }
          if(cstmfy_colornamel==cstmfy_prop){cstmfy_colornamel=cstmfy_colornamel+' color'}

          ccolor = "<div style=\"" + displaycolor + "\" class=\"pplr-wrapper mcolor  pplr-color-select"+disp+cstmfy_static + typeclass + cstmfy_class_opt +optionwithclass+ " \" data-frame=\"" + frame + "\"><label class='pplrlabel "+pplrhidelabel+"' onclick=\"pplr_unfold(this)\" >" + pplr_arrow + cstmfy_colorname + "</label><input " + disabled + "  data-type=\""+dcolortype+"\" data-frame=\"" + frame + "\" onchange=\"LoadPplrWithFont('" + frame + "\',true);\" " + typedisabled + "  name=\"properties[" + cstmfy_colornamel + "]\" value=\"" + dcolorname + "\" data-value=\"" + dcolordata + "\" class=\"pplrjscolor pplr_aux"+cstmfy_static+priceclass1+"\" " + dataprice1 + datavariant +"/>"+pplrcolordiv;
          ccolor += ecolor + "</div></div>";
        }
      }
    }
    var color_choice = ' data-color="'+cstmfy_color+'" ';
    }
    else{
      var color_choice = ' c-color="single" data-color="'+cstmfy_color+'" ';
    }

    var pinputform = '';
    var selectedfamily = '';
    if(cstmfy_input_type < 3){
      hasfont = true;
    }
    if(image_load.indexOf(m_[18])<0){
        image_load.push(m_[18]);
        if(m_[18].indexOf('.shopify.com') == -1){
          pplr_image_loader += "<img style='width:0px;height:0px;' src data-frame='"+frame+"' data-src='"+app_link_pplr +m_[18]+'?v=123'+"' />";
        }
        else{
    	   pplr_image_loader += "<img style='width:0px;height:0px;' src data-frame='"+frame+"' data-src='"+m_[18]+"' />";
        }
      }
	var key_layout = '';
    var key_layout_class = '';

    if(cstmfy_input_type < 3){

       var myfont = m_[0].split('/');
        var fct = myfont.length;

        if(fontload.indexOf(m_[0])<0){
			if(m_[34] == '1' || m_[43]>1){
			  addfont(m_[0]);
			  fontload.push(m_[0]);
			}
        }

        if(m_[43]>1 && fontload.indexOf(m_[60])<0){
          addfont(m_[60]);
          fontload.push(m_[60]);
        }

        if(m_[43]>2 && fontload.indexOf(m_[66])<0){
          addfont(m_[66]);
          fontload.push(m_[66]);
        }

		if(_SJ[15] !=='' && _SJ[15] !=='Personalize'){
		  if(m_[38] >1){}
		  else{
			pinputform = "font-family:"+ myfont[fct - 1].replace(".ttf", "");
			var keyboard = _SJ[15].replace(/ /g, ",").split(',');
			var key_layout_class = ' inputkeylayout inputkeypos';
			if(_SJ2[5]>0){
			key_layout = '<div class="key_layout k_full" style="display:block;'+pinputform+'">';
			key_layout_class = ' inputkeypos ';
			}else{
			key_layout = '<div onclick="togglekey(this);" style="'+pinputform+'" class="key_layout_sub" data-frame="' + frame + '">⌨</div><div class="key_layout" style="display:none;'+pinputform+'">';
			}
			for (var y = 0; y < Object.keys(keyboard).length; ++y) {
        var a_input = decodeHtml(keyboard[y]);
        if(a_input.length>1){
          a_input=a_input.replace(/\\/g, '');
        }
			  key_layout +='<span onclick="addthistoinput(this)" data-value="'+a_input+'">'+a_input+'</span>';
			}
			if(_SJ[15].search(/[\u0590-\u05FF]/) && cstmfy_input_type == '2'){
			key_layout += '<span class="p_space" onclick="addthistoinput(this)" data-value="\n">&#8626;</span>';
			}
			key_layout += '</div>';
      var selectedfamily = pinputform;

		  }
		}

    }
    var font_list = '';
    if (_SJ[23] == 3) {
          selectedfamily = myfont[fct - 1].replace(".ttf", "");
      }


    if (prodata[6] !== '1' || m_[34] !== '1' &&  m_[43]<2) {

      if(cstmfy_input_type < 3){

        if (m_[34] !== '1') {
          var fontgroup = fontgroup_json[m_[34]];
        } else {
          var fontgroup = fontgroup_json[prodata[6]];
        }
		
    		var datapricef = 'data-price="' + 0 + '" ';
    		var priceclassf = '';
    		var pp=0;
    		var fheight = 1;
        if (fontgroup) {
          if(Object.keys(fontgroup)){
          var fontkey = Object.keys(fontgroup)[0];
          var sfheight = 1;
          var selectfontname = fontkey;
          if (fontgroup[fontkey] instanceof Array) {
            var selectedfontval = fontgroup[fontkey][0];
            selectedfamily = fontgroup[fontkey][0].replace(".ttf", "");
          } else {
            var selectedfontval = fontgroup[fontkey];
            selectedfamily = fontgroup[fontkey].replace(".ttf", "");
          }

          for (var y = 0; y < Object.keys(fontgroup).length; ++y) {
            var fontkey = Object.keys(fontgroup)[y];
            var selected_font = "";
            if (m_[0] !== '') {
              if (fontgroup[fontkey] instanceof Array) {
                var fontfamily = fontgroup[fontkey][0].replace(".ttf", "");
                var fontval = fontgroup[fontkey][0];

                var fheight = fontgroup[fontkey][1];
                if(fheight==0){fheight=1;}

              } else {
                var fontfamily = fontgroup[fontkey].replace(".ttf", "");
                var fontval = fontgroup[fontkey];
                var fheight = 1;
              }
              var fontname = fontkey;
              if (is_int(fontname)) {
                var fontname = fontfamily;
              }
              if (fontgroup[fontkey] instanceof Array) {
                var fontname = fontkey;
              }
			  
        			if(fontgroup[fontkey][2]>0){
        				var pp=parseFloat(fontgroup[fontkey][2]);
        				var priceclassf = ' pplraddprice';
        					pricechange = true;
        			}
        			else{var pp=0;}

              if (fontval === myfont[fct - 1] && fontname !== '') {
                var selectedfontval = decode_utf8(fontval);
                var selectfontname = decode_utf8(fontname);
                selectedfamily = fontfamily;
                var selected_font = " selected-font ";
                var sfheight = fheight;
			         	var datapricef = 'data-price="' + pp + '" ';
              }
      				var linkf = "font/" + Shopify.shop + "/" + decode_utf8(fontval);
      				if(fontload.indexOf(linkf)<0){
      				  addfont(linkf);
      				  fontload.push(linkf);
      				}
              if (_SJ[23] == 2) {
                fontfamily = 'inherit';
                selectedfamily = 'inherit';
              }
              var fontclass = ' pplr_'+ fontfamily.toLowerCase();
              font_list += '<span class="pplr-selecter-item ' + selected_font + fontclass + '" style="font-family:' + decode_utf8(fontfamily) + '" data-value="' + decode_utf8(fontval) + '"  data-height="' + fheight + '" data-name="' + decode_utf8(fontname) + '" data-price="'+pp+'" onclick="pplrselecteritem(this,'+pp+')">' + decode_utf8(fontname) + '</span>';
            }
          }

          if(cstmfy_fontnamel==cstmfy_prop){cstmfy_fontnamel=cstmfy_fontnamel+' font'}

          cfont = "<div style=\"" + displayfont + " \" class=\"pplr-wrapper  pplr-font-select" +cstmfy_static + typeclass + cstmfy_class_opt + pplrfontthumb +optionwithclass+ " \" data-frame=\"" + frame + "\"><label class='pplrlabel' onclick=\"pplr_unfold(this)\" >" + pplr_arrow + cstmfy_fontname + "</label><input type=\"hidden\" data-value=\"" + selectedfontval + "\" value=\"" + selectfontname + "\"   data-height=\"" + sfheight + "\" data-frame=\"" + frame + "\" " + disabled + datapricef + " onchange=\"LoadPplrWithFont('" + frame + "\',true);\" " + typedisabled + "   name=\"properties[" + cstmfy_fontnamel + "]\" class=\"pplr_font pplr_aux"+cstmfy_static+priceclassf+"\" /><span style=\"font-family:" + selectedfamily + "\" class=\"pplr-selecter-selected\" onclick='pplrselecterselected(this)'>" + selectfontname + "</span><div class=\"pplr-selecter-options\">" + font_list + "</div></div>";
        }
      }
      }
    }


    var image_thumb_list ='';
    if (cstmfy_input_type == 3 || cstmfy_input_type == 4) {
      var image_list = '';
      var tag = [];
      var taglist = '';

      if (m_[21] != 1) {

        var display_image =' img_thumb_small ';
        if(_SJ[24]==2){
          display_image =' img_thumb_big ';
        }

        if(_SJ[24]==3){
          display_image =' img_thumb_dropdown ';
        }
        if (_SJ[24] == 3 && m_[23] == 2) {

          var selectimagedefault = m_[15].replace(".jpg", "").split("/").pop().replace(".jpeg", "").replace(".png", "");
        }
        else{
          var selectimagedefault = '';
        }

        var selectimgsrc = app_link_pplr + m_[15]+'?v=123';

        var imagegroup = imagegroup_json[m_[21]];
        if (imagegroup) {
          var displayimagegroup = '';
          if (Object.keys(imagegroup).length > 1) {
            displayimagegroup = '';
          }

          var imgsrc = app_link_pplr + m_[15]+'?v=123';

          var datavariant = 'data-variant="" ';
		  
		  if(m_[26]>1){
			   var pradd = parseFloat(m_[27]);
			  var dataprice = 'data-price="' + m_[27] + '" ';
			}
			else{
			  var pradd = 0;
			  var dataprice = 'data-price="' + 0 + '" ';
			}

          for (var y = 0; y < Object.keys(imagegroup).length; ++y) {
            var selectimage = '';
            var imagekey = Object.keys(imagegroup)[y];
			       var data_price= 0;
            var vimg_back = '';
            var tag_c = ' data-tag="" ';
            var image_name = imagegroup[imagekey];
			
            var data_color = ' data-color="" ';
            if (imagegroup[imagekey] instanceof Array) {

              var imagelabel = '<span>' + decode_utf8(imagekey) + '</span>';
              var data_val = imagekey;
                if(imagegroup[imagekey][7] && _SJ[24] <3){
                  var tagarray = imagegroup[imagekey][7].split("|");
                  for (var k = 0; k < tagarray.length; ++k) {
					         var tt = decodeHtml(tagarray[k]).replace(/["']/g, "").replace(/ /g, '_');
                    tag_c = ' data-tag="'+tt.replace(/\./g, '')+'" ';
                    tag.push(tt);

                  }
                }
                image_name = imagegroup[imagekey][0];
                var vimg_back = imagegroup[imagekey][1].split("_");
                if(imagegroup[imagekey].length>3)
                {
                  data_color = ' data-color="'+imagegroup[imagekey][2]+'" ';
                  if (imagegroup[imagekey][3]) {
                    data_price= imagegroup[imagekey][3];
                  }
                }
            } else {
              var imagelabel = '';
              if (imagegroup[imagekey] instanceof Array) {
                var data_val = decode_utf8(image_name[0].replace(".jpg", "").split("/").pop().replace(".jpeg", "").replace(".png", ""));
                image_name = image_name[0];
              } else {
                var data_val = decode_utf8(image_name.replace(".jpg", "").split("/").pop().replace(".jpeg", "").replace(".png", ""));
              }
            }

            if (m_[15] == 'images/' + Shopify.shop + '/' + decode_utf8(image_name)) {
              var selectimage = 'selected';
              var selectimagedefault = data_val;
              var selectimgsrc = app_link_pplr + 'images/' + Shopify.shop + '/' + decode_utf8(image_name)+'?v=123';
              var dataprice = 'data-price="' + (parseFloat(data_price)+pradd) + '" ';
              if(imagegroup[imagekey][9]){
                datavariant =  'data-variant="' + imagegroup[imagekey][9] + '" ';
              }
            }
              var variant = '';
              if(imagegroup[imagekey][9]){
                variant = imagegroup[imagekey][9];
              }

            if(data_price>0){
              var priceclass = ' pplraddprice';
              pricechange = true;
            }

            var imgsrc = app_link_pplr+'images/' + Shopify.shop + '/' + decode_utf8(image_name)+'?v=123';


            if (vimg_back == '' || _SJ[24]>2 || imagegroup[imagekey][5]>3) {

              if(imagegroup[imagekey][5]>3){

                var imgsrc_thumb = app_link_pplr+'images/' + Shopify.shop + '/' + decode_utf8(imagegroup[imagekey][6])+'?v=123';

                tooltip = '<div class="swtooltip"><img data-src="' + imgsrc_thumb + '" />' + imagelabel + '</div>';
                image_list += "<span name=\"properties[" + cstmfy_prop + "]\" data-price=\""+data_price+"\" class=\"pplr-swatch-element pplrimage " + selectimage + "\" "+tag_c+" onclick=\"chooseimage(this,"+data_price+");\""+data_color+" data-variant='"+variant+"' data-thumb=\""+imgsrc_thumb+"\" style=\"background-image:url('" + img_loader + "') ;background-position: center center;background-size:contain;background-repeat:no-repeat;\" data-val=\"" + data_val + "\" data-frame=\"" + frame + "\" data-image=\"" + imgsrc + "\" ><span class='img_dropdown'>"+data_val+"</span>" + tooltip + "</span>";

              }
              else{
                if(imagegroup[imagekey][4]){

                  if(imagegroup[imagekey][4].indexOf('#') !== -1){
                    tooltip = '<div class="swtooltip">' + imagelabel + '</div>';
                    image_list += "<span name=\"properties[" + cstmfy_prop + "]\" data-price=\""+data_price+"\" class=\"pplr-swatch-element pplrimage " + selectimage + "\" "+tag_c+" onclick=\"chooseimage(this,"+data_price+");\""+data_color+" data-variant='"+variant+"'  style=\"background:"+imagegroup[imagekey][4]+";\" data-val=\"" + data_val + "\" data-frame=\"" + frame + "\" data-image=\"" + imgsrc + "\" ><span class='img_dropdown'>"+data_val+"</span>" + tooltip + "</span>";
                  }
                  else{
                    tooltip = '<div class="swtooltip"><img data-src="' + imgsrc + '" />' + imagelabel + '</div>';
                    image_list += "<span name=\"properties[" + cstmfy_prop + "]\" data-price=\""+data_price+"\" class=\"pplr-swatch-element pplrimage " + selectimage +"\" "+tag_c+" onclick=\"chooseimage(this,"+data_price+");\""+data_color+" data-variant='"+variant+"' data-thumb=\""+imgsrc+"\" style=\"background-image:url('" + img_loader + "') ;background-position: center center;background-size:contain;background-repeat:no-repeat;\" data-val=\"" + data_val + "\" data-frame=\"" + frame + "\" data-image=\"" + imgsrc + "\" ><span class='img_dropdown'>"+data_val+"</span>" + tooltip + "</span>";


                  } 
                }
                else{

                  tooltip = '<div class="swtooltip"><img data-src="' + imgsrc + '" />' + imagelabel + '</div>';
                  image_list += "<span name=\"properties[" + cstmfy_prop + "]\" data-price=\""+data_price+"\" class=\"pplr-swatch-element pplrimage " + selectimage +"\" "+tag_c+" onclick=\"chooseimage(this,"+data_price+");\""+data_color+" data-variant='"+variant+"' data-thumb=\""+imgsrc+"\" style=\"background-image:url('" + img_loader + "') ;background-position: center center;background-size:contain;background-repeat:no-repeat;\" data-val=\"" + data_val + "\" data-frame=\"" + frame + "\" data-image=\"" + imgsrc + "\" ><span class='img_dropdown'>"+data_val+"</span>" + tooltip + "</span>";
                }
              }
            } else {
          				var _x =1.33,_y=5,_z=6.65;
          				if(_SJ[24]==2){
          					_y=3;_z=4;
          				}

              tooltip = '<div class="swtooltip" ><div style="height:135px;width:180px; background-image:url(\'' + imgsrc + '\');background-position:' + -vimg_back[0]  + 'px ' + -vimg_back[1]/ _x + 'px;background-size:' + vimg_back[2] + 'px ' + vimg_back[3]/ _x + 'px;"></div>' + imagelabel + '</div>';

              image_list += "<span name=\"properties[" + cstmfy_prop + "]\" data-price=\""+data_price+"\" class=\"pplr-swatch-element pplrimage " + selectimage + "\" "+tag_c+" onclick=\"chooseimage(this,"+data_price+");\" "+data_color+" data-variant='"+variant+"' data-val=\"" + data_val + "\" data-frame=\"" + frame + "\" data-thumb=\""+imgsrc+"\" data-image=\"" + imgsrc + "\"" + 'style="background-image:url(\'' + img_loader + '\') !important;background-position:' + (-vimg_back[0] / _y-2) + 'px ' + (-vimg_back[1] / _z) + 'px;background-size:' + (vimg_back[2] / _y) + 'px ' + (vimg_back[3] / _z) + 'px !important;">' + tooltip + "</span>";


            }

          }
		  
		  

          if (_SJ[24] == 3) {
            image_thumb_list = "<span class=\"pplr-selecter-selected dropdowncolor\" onclick=\"pplrselecterselected(this)\" >"+selectimagedefault+"</span>";

          }

          var uniqueArray = tag.filter(function(item, pos) {
            return tag.indexOf(item) == pos;
          });

          var arjoin = uniqueArray.join();

          for (var i = 0; i < uniqueArray.length; i++) {
            taglist += "<span class='pplr-selecter-item' onclick='selectthistag(this,true)' data-val='"+uniqueArray[i]+"' data-group='"+arjoin+"'>" + uniqueArray[i] + "</span>";
          }

          if(taglist !=='' && _SJ[24] <3){
            taglist = '<div class="pplr-selecter-options pplr_tag">'+taglist+'</div>'; 

          }
          image_list += deselect;
        }
      }
      else{
        var cstmfy_prop_color = cstmfy_prop;
      }
    }


    if (cstmfy_input_type == 3) {
      var imgsrc = app_link_pplr + m_[15]+'?v=123';
      if(image_load.indexOf(m_[15])<0){
        image_load.push(m_[15]);
        pplr_image_loader += "<img style='width:0px;height:0px;' src data-frame='"+frame+"' data-src='"+imgsrc+"' />";
      }

      if (m_[21] == 1) {
        cimage = true;
        pcropper = true;

        jQuery('body').addClass('pplefileupload');
        var accept = "accept=\"image/jpg,image/jpeg,image/JPG,image/JPEG,image/png,image/PNG,image/svg+xml\"";
        if(m_[39]>2){accept = "accept=\".xlsx,.xls,image/*,.doc,.docx,.ppt,.pptx,.txt,.pdf,.eps,.ai,.psd,.indd,.raw,.mp3,.M4A,.MOV,.MP4\"";
      }
    		var ua = navigator.userAgent.toLowerCase();
    		if(/chrom(e|ium)/.test(ua) && ua.indexOf("android") > -1){
    		  accept ='';
    		}
        if(m_[26]>2){
             dataprice +=' data-price-type="' + m_[26] + '" ';
          }

        text += "<div class=\" pplr-wrapper " +cstmfy_static + cstmfy_class +optionwithclass+typeclass+ " \"   data-main=\"" + frame + "\">"+oindex+"<label class='pplrlabel' onclick=\"pplr_unfold(this)\" >" + pplr_arrow_main + optionwith + cstmfy_name + "</label><div class=\"jscroll\"><ul></ul></div><div class='pplrfileuploadbutton'><span class='pplrfileuploadcover' data-lockedat='1'> </span><img data-newr=\"1\" data-rotation=\"0\" class=\"img_url\" data_name=\"" + cstmfy_prop + "\" data-frame=\"" + frame + "\" style=\"display:none;\" data-src=\"" + imgsrc + "\" \><img class=\"crop_img_url\" data-type=\"image/png\"  data_name=\"" + cstmfy_prop + "\" data-frame=\"" + frame + "\" style=\"display:none;\" src=\"" + imgsrc + "\" \><input class=\"pplr_monogram " + fileupload + priceclass + cstmfy_c_required+"\" " + cstmfy_c_disabled+cstmfy_required + "  " + dataprice + " data-frame=\"" + frame + "\" autocomplete=\"off\" onchange=\"fileuploadpplr(this,event)\" data_name=\"" + cstmfy_prop + "\"  type=\"file\" name=\"properties[" + cstmfy_prop + "]\" "+accept+" /><input class=\"pplr-crop pplr_aux\" type=\"hidden\" onchange=\"LoadPplrWithFont('" + frame + "\',true);\" disabled  data-frame=\"" + frame + "\" value=\"" + crop.split("-").join("_") + "\" data_name=\"" + cstmfy_prop + "\" name=\"_Crop_x_y_width_height(px)_rotate " + frame + "\" /></div>"+cstmfy_ins+"</div>";

        imageon = true;

      } else {

         if(m_[26]>2){
             dataprice +=' data-price-type="' + m_[26] + '" ';
            }
            if(image_list==''){
              cstmfy_c_required ='';
              cstmfy_required ='';
            }

        text += "<div class=\"pplr-wrapper  "+ cstmfy_static + cstmfy_class +optionwithclass+ "\"  data-main=\"" + frame + "\" style=\"" + displayimagegroup + "\">"+oindex+"<label class='pplrlabel' onclick=\"pplr_unfold(this)\" >" + pplr_arrow_main + optionwith + cstmfy_name + "</label><img  name=\"properties[" + cstmfy_prop + "]\" data-newr=\"1\" class=\"img_url\" data_name=\"" + cstmfy_prop + "\" data-frame=\"" + frame + "\" style=\"display:none;\" data-src=\"" + selectimgsrc + "\" \><input class=\"pplr_imgg pplr_monogram " + priceclass +cstmfy_c_required+ "\" " + dataprice + datavariant+ " data-frame=\"" + frame + "\" onchange=\"LoadPplrWithFont('" + frame + "\',true,this);\"  oninput=\"LoadPplrWithFont('" + frame + "\',true,this);\" type=\"hidden\" value=\"" + selectimagedefault + "\" data_name=\"" + cstmfy_prop + "\"" +cstmfy_c_disabled  + cstmfy_required+" name=\"properties[" + cstmfy_prop + "]\" ><input disabled   data-frame=\"" + frame + "\" class=\"pplr-crop pplr_aux\" type=\"hidden\" value=\"" + crop.split("-").join("_") + "\"  multiple />"+image_thumb_list+"<div class=\"pplrgcolor pplr_thumb_image "+ nlc+" pplr-swatch-main"+display_image+"\">"+taglist+image_list+'</div>'+cstmfy_ins+'</div>';
      }


    } 

    else if (cstmfy_input_type == 4) {
	var disp = '';
	var dataprice = 'data-price="' + 0 + '" ';
	var priceclass = '';
	var priceclass1 = '';
  var datavariant = 'data-variant="" ';
	if(m_[26]>1){
		dataprice = 'data-price="' + m_[27] + '" ';
	  if (m_[21] == 1) {
		  priceclass1 = ' pplraddprice';
	  }else{
		  priceclass = ' pplraddprice';
	  }
      pricechange = true;
	}
	else{m_[27] = 0;}
      var dcolor = '';
      var colorgroup = colorgroup_json[m_[52]];

      var color_image_display = ' color_image_display_box ';
      if (_SJ[32] == 3) {
        var color_image_display = ' color_image_display_circle ';
      }
      if (_SJ[32] == 4) {
        var color_image_display = ' color_image_display_circle_big ';
      }

      if (Array.isArray(colorgroup) || typeof(colorgroup) !== 'undefined') {
        var colorkey = Object.keys(colorgroup)[0];
        var dcolorname = cstmfy_color;
        var dcolordata = cstmfy_color;
        var dcolortype = 1;

        var ecolor = '';
		var pp=0;
		if(Object.keys(colorgroup).length<2){disp = ' cstmfy_static ';}
        for (var y = 0; y < Object.keys(colorgroup).length; ++y) {
          var selectcolor = '';
          var colorkey = Object.keys(colorgroup)[y];
          var tooltip = '<div class="swtooltip">' + colorkey + '</div>';
          var colorname = colorkey;
          var colortype = 1;
          var dcolortype = 1;
          if(Array.isArray(colorgroup[colorkey])){
              var colordata = colorgroup[colorkey][0];
              var colordatam = colorgroup[colorkey][0];
              var colorback = colordata;
              if(colorgroup[colorkey][1]>1){
                    colortype = 2;
                var colordata = colorgroup[colorkey][2];
                var colorback = 'url(\''+app_link_pplr + 'images/' + Shopify.shop + '/'+colorgroup[colorkey][2]+'?v=123'+'\')';
              }
      		  	if(colorgroup[colorkey][3]>0){
              				var pp=parseFloat(colorgroup[colorkey][3]);
              					priceclass1 = ' pplraddprice ';
              					pricechange = true;
              			}
              			else{pp=0;}
                  }
                  else{
                    var colordata = colorgroup[colorkey];
                    var colorback = colordata;
                  }
      			pp=parseFloat(m_[27])+pp;

          if (colordata == cstmfy_color || colordatam == cstmfy_color ) {
            selectcolor = 'selected';
            dcolorname = colorname;
            dcolordata = colordata;
			       if(pp>0){dataprice = 'data-price="' + pp + '" ';}
             if(colorback.indexOf('#') == -1){
               dcolortype = 2;
             }
             if(colorgroup[colorkey][7]){
                datavariant =  'data-variant="' + colorgroup[colorkey][7] + '" ';
              }
          }

          var variant = '';
              if(colorgroup[colorkey][7]){
                variant = colorgroup[colorkey][7];
              }

          if (_SJ[32] == 5) {
            var cmt = '';
            if(colortype<2){var cmt = '<span class="colorminithumb" style="background:' + colorback + ';"></span>'}
            ecolor += '<span class="pplr-selecter-item ' + selectcolor +'" data-variant="'+variant+'" data-color="' + colordata + '" data-price="'+pp+'" onclick="pplrColor(this,'+pp+')" data-type="'+colortype+'" data-name="' + colorname + '">'+cmt + tooltip + '</span>';

          }
          else{
            ecolor += '<span class="pplr-swatch-element pplrColor ' + selectcolor + color_image_display+ '" data-variant="'+variant+'" data-color="' + colordata + '" data-type="'+colortype+'" style="background:' + colorback + ';" data-price="'+pp+'" onclick="pplrColor(this,'+pp+')" data-name="' + colorname + '">' + tooltip + '</span>';
          }

        }

        if (_SJ[32] == 5) {
            var cmt = '';
            if(dcolortype<2){var cmt = '<span class="colorminithumb" style="background:' + dcolordata + ';"></span>'}

          var pplrcolordiv = "<span class=\"pplr-selecter-selected dropdowncolor color_p_main\" onclick=\"pplrselecterselected(this)\">"+cmt+'<span class="dcolorname">'+dcolorname+"</span></span><div class=\"pplr-selecter-options\">";

        }
        else{
          var pplrcolordiv = "<div class=\"pplrgcolor  pplr-swatch-main\">";
        }

        if (m_[21] == 1) {
         var colorlabel = "";
        }
        else{
          var colorlabel = "<label class='pplrlabel "+pplrhidelabel+"' onclick=\"pplr_unfold(this)\" >" + pplr_arrow + cstmfy_colorname + "</label>";
        }

        fcolor = colorlabel+"<input data-frame=\"" + frame + "\" onchange=\"LoadPplrWithFont('" + frame + "\',true);\" "  + "  name=\"properties[" + cstmfy_prop_color + "]\" data-type=\""+dcolortype+"\" value=\"" + dcolorname + "\" data-value=\"" + dcolordata + "\" class=\"pplrjscolor pplr_aux "+cstmfy_c_required+priceclass1+ "\""+cstmfy_required+"/ " + dataprice + datavariant + "\>"+pplrcolordiv;
        fcolor += ecolor + "</div>";
      }
      else{
        var fcolor = "<div  class=\"pplr-wrapper  pplr-color-select" +cstmfy_static + typeclass +optionwithclass+"\" data-frame=\"" + frame + "\"  data-main=\"" + frame + "\"><label class='pplrlabel "+pplrhidelabel+"' onclick=\"pplr_unfold(this)\" >" + pplr_arrow + cstmfy_colorname + "</label><input   data-frame=\"" + frame + "\" type=\"text\" onchange=\"LoadPplrWithFont('" + frame + "\',true);\" "+ " name=\"properties[" + cstmfy_prop_color + "]\" value=\"" + cstmfy_color + "\" class=\"jscolor pplr_aux"+priceclass1+"\" " + dataprice + datavariant + "\>"+cstmfy_ins+"</div>";
        gcolor = true;
      }

      var imgsrc = app_link_pplr + m_[15]+'?v=123';
      if(image_load.indexOf(m_[15])<0){
        image_load.push(m_[15]);
        pplr_image_loader += "<img style='width:0px;height:0px;' src data-frame='"+frame+"' data-src='"+imgsrc+"' />";
      }
      if (m_[21] == 1) {
        text += "<div class=\" pplr-wrapper pplr-color-select"+disp +cstmfy_static + cstmfy_class +optionwithclass+typeclass+ " \"   data-main=\"" + frame + "\">"+oindex+"<label class='pplrlabel' onclick=\"pplr_unfold(this)\" >" + pplr_arrow_main + optionwith + cstmfy_name + "</label><img class=\"img_url pplr_n_d\" data-newr=\"1\" data_name=\"" + cstmfy_prop + "\" data-frame=\"" + frame + "\" style=\"width:0px;height:0px;display:none;\" data-src=\"" + imgsrc + "\" \><input class=\"pplr-crop\" type=\"hidden\" onchange=\"LoadPplrWithFont('" + frame + "\',true);\" disabled  data-frame=\"" + frame + "\" value=\"" + crop.split("-").join("_") + "\" data_name=\"" + cstmfy_prop + "\" name=\"_Crop_x_y_width_height(px)_rotate " + frame + "\" />"+fcolor+cstmfy_ins+"</div>";
      }
      else{
        if(cstmfy_prop == cstmfy_prop_color){
          cstmfy_prop = cstmfy_prop+'+';
        }
        text += "<div class=\" pplr-wrapper pplr-color-select" +cstmfy_static + cstmfy_class +optionwithclass+typeclass+ " \"   data-main=\"" + frame + "\">"+oindex+"<label class='pplrlabel' onclick=\"pplr_unfold(this)\" >" + pplr_arrow_main + optionwith + cstmfy_name + "</label><img class=\"img_url\" data-newr=\"1\" name=\"properties[" + cstmfy_prop + "]\" data_name=\"" + cstmfy_prop + "\" data-frame=\"" + frame + "\" style=\"width:0px;height:0px;display:none;\" data-src=\"" + imgsrc + "\" \><input class=\"pplr_imgg pplr_no_condition pplr_monogram " + priceclass +cstmfy_c_required+ "\" " + dataprice + datavariant + " data-frame=\"" + frame + "\" onchange=\"LoadPplrWithFont('" + frame + "\',true,this);\"   type=\"hidden\" value=\"" + selectimagedefault + "\" data_name=\"" + cstmfy_prop + "\"" +cstmfy_c_disabled + " name=\"properties[" + cstmfy_prop + "]\" ><input class=\"pplr-crop\" type=\"hidden\" onchange=\"LoadPplrWithFont('" + frame + "\',true);\" disabled  data-frame=\"" + frame + "\" value=\"" + crop.split("-").join("_") + "\" data_name=\"" + cstmfy_prop + "\" name=\"_Crop_x_y_width_height(px)_rotate " + frame + "\" />"+image_thumb_list+"<div class=\"pplrgcolor pplr-swatch-main pplrcolorimage"+display_image+"\">"+taglist+image_list+"</div>"+fcolor+cstmfy_ins+"</div>";
      }

    }

    else if (cstmfy_input_type == 7 ) {

      var dropdown = dropdown_json[m_[51]];
      var ddropkey = '';
	  var priceclass = ' pplraddprice ';
      var dataprice = 'data-price="' + 0 + '" '; 
      var datavariant = 'data-variant="" ';

      if (Array.isArray(dropdown) || typeof(dropdown) !== 'undefined') {

        if(m_[55] !=='0' && m_[55] !=='' && m_[44]<2){ droptext += '<option  selected data-price="0"  value="">'+m_[55]+'</option>';}

        for (var y = 0; y < Object.keys(dropdown).length; ++y) {

          var droptkey = Object.keys(dropdown)[y];
		  
		  var df = false;
		  var ddselect = '';
		  if('_'+droptkey == decodeHtml(m_[58]) || '_'+droptkey == m_[58]){
			  df = true;
			  ddselect = ' selected ';
		  }
		  if(m_[58] =='' || m_[58] =='1' || m_[58] =='0'){
			  if(m_[44]<2 && y==0 && m_[55] ==''){
				df = true; 
				ddselect = ' selected ';
			  }
		  }
		  
		  if(m_[58] =='0' && y==0 && m_[44]>1){df = true; 
				ddselect = ' selected ';}
		  
          if(df){
      				var data_price = dropdown[droptkey][0];
      				ddropkey = droptkey;
      				var dclass = ' active';
      				if(data_price){
      				  var priceclass = ' pplraddprice ';
      				  var dataprice = 'data-price="' + data_price + '" ';
                if(dropdown[droptkey][3]){
                var datavariant = 'data-variant="' + dropdown[droptkey][3] + '" ';
                }
      				}
          }
          else{
            var dclass = '';
          }
    		  var pclass = ' _pplr_'+decodeHtml(droptkey).replace(/(<([^>]+)>)/ig,"").split(' ').join('_').toLowerCase().replace(/"/g, '');
          var variant = '';
          if(dropdown[droptkey][3]){
            variant = dropdown[droptkey][3];
          }

        if(m_[44]==2){
          droptext += '<span class="pplr-drop-item' + pclass + dclass+'" data-variant="'+variant+'" data-price="'+dropdown[droptkey][0]+'"  data-value="' + extractContent(droptkey) + '" data-frame="'+x+'"   onclick="pplrselecteritemoption(this)">' + decodeHtml(droptkey) + '</span>';
          
          }else{

          droptext += "<option "+ddselect+" class='"+pclass+"' data-variant='"+variant+"' data-frame='"+x+"'  data-price='"+dropdown[droptkey][0]+"' value='"+droptkey+"'>"+decodeHtml(droptkey)+"</option>";
         }

          if(dropdown[droptkey][0]>0){pricechange = true;}
        }
        if(m_[55] !=='0' && m_[55] !=='' && m_[55]<2){ var dataprice = 'data-price="0" ';}

      }
	  else{
		  cstmfy_c_required = '';
		  cstmfy_required='';
	  }

      if(m_[44]==2){

        text += "<div class=\"pplr-wrapper  pplr-dropdown "+cstmfy_static + cstmfy_class + optionwithclass+"\"  data-main=\"" + frame + "\">"+oindex+"<label class='pplrlabel' onclick=\"pplr_unfold(this)\" >" + pplr_arrow_main + optionwith + cstmfy_name + "</label><input type=\"hidden\" class=\"pplr_select "+priceclass+cstmfy_c_required+cstmfy_static+"\" "+dataprice+ datavariant+selectdisabled+cstmfy_required+" data-frame=\"" + frame + "\" onchange=\"updatepricepplr(this);updatecondition("+frame+",false,true);pplrqty();\" value=\""+ddropkey+"\" name=\"properties[" + cstmfy_prop + "]\">"+droptext+cstmfy_ins+"</div>";

      }
      else{
        text += "<div class=\"pplr-wrapper  pplr-dropdown "+cstmfy_static + cstmfy_class + optionwithclass+"\"  data-main=\"" + frame + "\">"+oindex+"<label class='pplrlabel' onclick=\"pplr_unfold(this)\" >" + pplr_arrow_main + optionwith + cstmfy_name + "</label><select class=\"pplr_select "+priceclass+cstmfy_c_required+cstmfy_static+"\" "+dataprice+ datavariant+selectdisabled+cstmfy_required+" data-frame=\"" + frame + "\" onchange=\"updatepricepplr(this,true);updatecondition("+frame+",false,true);pplrqty();\"  name=\"properties[" + cstmfy_prop + "]\">"+droptext+"</select>"+cstmfy_ins+"</div>";

      }

    }

    else if (cstmfy_input_type == 8) {
      if(m_[53]==0){
        var checkbox = '';
      }
      else
      {
        var checkbox = ' checked ';
      }
      text += "<div class=\"pplr-wrapper  pplr-checkbox "+cstmfy_static + cstmfy_class + optionwithclass+"\" data-main=\"" + frame + "\"  data-main=\"" + frame + "\">"+oindex+"<label class='pplrlabel' onclick=\"pplr_unfold(this)\" > <input "+checkbox+cstmfy_required+dataprice+"  type=\"checkbox\" data-frame=\"" + frame + "\" onchange=\"updatecondition("+frame+",false,true);LoadPplrWithFont('" + frame + "\',true);\"  class=\"pplrcheckbox "+cstmfy_c_required+priceclass+"\" value=\""+_SJ[16]+"\" "+selectdisabled+" name=\"properties[" + cstmfy_prop + "]\"> " + pplr_arrow_main + optionwith + cstmfy_name + "</label>"+cstmfy_ins+"</div>";

    }

    else if (cstmfy_input_type == 2) {
      if(_SJ2[32]>0){selectedfamily = '';}

      text += "<div class=\"pplr-wrapper pplr-text "+cstmfy_static + cstmfy_class +optionwithclass+ "\"   data-main=\"" + frame + "\">"+oindex+"<label class='pplrlabel' onclick=\"pplr_unfold(this)\" >" + pplr_arrow_main + optionwith + cstmfy_name + "</label><textarea " + cstmfy_required + " type=\"text\" class=\"pplr_text pplr_monogram p_u_t" +key_layout_class+ priceclass+cstmfy_c_required +ccase+cstmfy_static+"\" " + cstmfy_c_disabled+dataprice+ pattern+color_choice + " data-main=\"" + frame + "\" data-frame=\"" + frame + "\" oninput=\"LoadPplrWithFont('" + frame + "',true,this);\"  onkeyup=\"LoadPplrWithFont('" + frame + "',true,this,event);\" style=\"text-transform:" + transform +';'+ pinputform+";font-family:" + selectedfamily +"\" d-placeholder='" + placeholder_default + "' placeholder='" + placeholder_default + "' name=\"properties[" + cstmfy_prop + "]\" data-maxlength=\"" + cstmfy_max + "\" maxline=\"" + maxline + "\" >" + default_value + "</textarea>"+key_layout+fonsizeselect+alignselect+charleft+cstmfy_ins+"</div>";
    } else {

      if(_SJ2[32]>0){selectedfamily = '';}

      text += "<div class=\"pplr-wrapper  pplr-text "+cstmfy_static + cstmfy_class + optionwithclass+"\"  data-main=\"" + frame + "\">"+oindex+"<label class='pplrlabel' onclick=\"pplr_unfold(this)\" >" + pplr_arrow_main + optionwith + cstmfy_name + "</label><input " + cstmfy_required + type+ " class=\"pplr_text pplr_monogram p_u_t"+key_layout_class + priceclass +cstmfy_c_required+ ccase+ cstmfy_static+"\" "+cstmfy_c_disabled + dataprice + pattern+color_choice + " data-main=\"" + frame + "\" data-frame=\"" + frame + "\" oninput=\"LoadPplrWithFont('" + frame + "',true,this);\"   style=\"text-transform:" + transform+';'+pinputform+";font-family:" + selectedfamily + "\" value=\"" + default_value + "\" d-placeholder='" + placeholder_default + "' placeholder=\"" + placeholder_default + "\" name=\"properties[" + cstmfy_prop + "]\" data-maxlength=\"" + cstmfy_max + "\" maxlength=\"" + cstmfy_max + "\" />"+key_layout+fonsizeselect+alignselect+charleft+cstmfy_ins+"</div>";
    }

    text += cfont + ccolor;

    if( x == cstmfy_count && tabend){
      tabstart = x;
      text +='</div>';
    }
  }

  if(_SJ2[6]>0 && _CP[10] <3){
      text +="<span class='a_p_t'></span>";
  }


  if (preview > 1 && prodata[8] < 3) {
    if(preview>2){var pplr_prev_mobile= ' pplr_prev_mobile ';}else{var pplr_prev_mobile= '';}
    text += '<button type="button" '+bcolor+' onclick="pplr_preview(event)"  class="btn pplr-btn  button pplr-preview-btn  Button--secondary '+_SJ[28]+pplr_prev_mobile+'">' + cstmfy_preview_text + '</button>';
  }

  if(_SJ[0]==2){var pplr_arrow='';}else{var pplr_arrow='';}

  if (prodata[10] > 1) {
	 pplr_html= text;
    text = '<button type="button" '+bcolor+' onclick="cstmfy_personalize_text(this,event)"  class="btn pplr-c-button pplr-btn button Button--secondary '+_SJ[28]+'">' +pplr_arrow+ prodata[14].replace(/\\/g, '') + '</button>';
  }
  if (prodata[10] < 3){
    text += loadfont;
  }
  text += "<div class='pplr_image_loader' style='width:0px;height:0px;'>"+pplr_image_loader +"</div>";
  jQuery('body').removeClass('product-personalizer');

  var pplr_id = jQuery(_P_P);
  if (pplr_id[0]) {
    pplr_id.first().html(text);
  }
var ppf = jQuery(_P_P).closest('form:visible');
  if(ppf.length==0 ){
    var pbefore = jQuery('.productForm .product-action,.selection-wrapper:last,.product-single__quantity-inventory,.product-form__item--quantity:visible,.product-single__quantity,.payment-and-quantity,.purchase-details,.product-detail.addtocart--button,form .product__quantity--button,form .quantity-product-template,.quantity-selector__wrapper:visible,.product_form .product-add,.shopify-product-form .product-page-qty,form .product-single__qty,.shopify-product-form .quanity-cart-row,.shopify-product-form .productForm__quantity,.product_form_options .purchase,[data-icon="gpicon-product-cartbutton"],.product-form__item--payment-button,form[action*="/cart/add"] .product-quantity-box:visible,.product-form__info-list:visible,.product-detail__quantity-row,#add-to-cart-form .selector-wrapper:last:visible,#Quantity-product,.productForm .productForm-block:last,.product-form--alt .product-form--atc,#add-to-cart-form.shopify-product-form .quantity,.product-form--regular .product-form--atc,#addToCartForm-product-template .quantity-selector-product-template,#product-form-options-wrap .product-quantity-w,#quantity-selector-product-template,#AddToCartForm #product-add,.product-qty.selector-wrapper,[data-pf-type="ProductQuantity"],.gt_product-quantity');
    if(!pbefore[0]){
      pbefore = jQuery('[data-icon="gpicon-product-quantity"]');
    }

    var pafter = jQuery('.ProductForm ProductForm__Option:last,#AddToCartForm-product .selector-wrapper:last:visible,#AddToCartForm-product-template .selector-wrapper:last:visible,.selector-wrapper.product-form__item:last,.product-form__controls-group .selector-wrapper:last:visible, .addToCartForm .selector-wrapper:last:visible,form .ProductForm__Variants,form .product-single__price-product-template,form .option-selectors,.product-single__form .product-single__variants:last,form .product-single__variants,.product-form__master-select,.productForm-block--options-inline,[data-icon="gpicon-product-swatches"]:last,.variant-group:last,#add-to-cart-product .product__variants:last,product-single__form .variant-wrapper:last,form.product-form .selector-wrapper:last:visible,#add-to-cart-form.shopify-product-form .product-variantsform-field,.shopify-product-form .swatch_options,.lh-wrap-variant');
	if(!pafter[0]){
		pafter = jQuery('[data-icon="gpicon-product-price"],.swatches-wrapper:visible:last');
	}
    if(pbefore.length>0 && pbefore.parent(':visible')[0]){
      jQuery(_P_P).insertBefore(pbefore.first());
    }
    else if(pafter.length>0 && pafter.parent(':visible')[0]){
      jQuery(_P_P).insertAfter(pafter.first());
    }
    else{
      var form =  jQuery('form[action*="/cart/add"]:visible').first();
      if(form[0]){
        jQuery(_P_P).prependTo(form);
      }else{
        jQuery(_P_P).prependTo(jQuery('form[action*="/cart/add"]').first());
      }
    } 
  }

  var ppf = jQuery(_P_P).closest('form:visible');
  ppf.attr('action', '/cart/add');


  if (prodata[10] > 3) {
    jQuery('form .'+_SJ[9]).hide().addClass('pplr_hide');
    jQuery('form #'+_SJ[9]).hide().addClass('pplr_hide');
    ppf.find('[name="add"],input[type="submit"]').hide().addClass('pplr_hide p_a_t_c2');
    ppf.find('[name="quantity"],.productForm-block,.variations_button .quantity-wrapper,.quantity.quantity-product-template').hide();
    ppf.find('[name="quantity"]').siblings('label,.plus,.minus,.js-change-quantity').hide();
    if(ppf.length>0 ){
      jQuery(_P_P).nextAll('div label input ,.product-form__item').hide();
    }
    ppf.addClass('popup_exclusive');
  }
  else{
	   jQuery('.pplr_add_to_cart').removeClass('pplr_add_to_cart');
  }
  if (prodata[10] == 1 || prodata[10] == 4) {
      setTimeout(function() {
        jQuery('.shopify-payment-button__button,.shopify-payment-button').hide().css({'visibility':'hidden','height':'0px','display': 'none !important'});
    },1000);
  }

  if(jQuery(_P_P).siblings('.purchase-details,.quanity-cart-row').css('display')=='flex'){
    jQuery(_P_P).wrap('<div style="display:flex;"></div>');
  }
  var nvle = jQuery(_P_P).siblings('div:visible');
  if(nvle[0]){
    jQuery(_P_P).css('float',nvle.css('float'));
  }
  pplr_id = jQuery(_P_P).first();
  if(pplr_id.height()<1){
    pplr_id.css('float','left');
  }


  pplr_id.css({
    'padding': _SJ[2],
    'margin': _SJ[3]
  });

  if (prodata[10] == 2) {
    jQuery('.product-personalizer').append('<div style="display:none" class="cstmfy_personalize_text" ></div>');
  }
  if(_SJ2[11]>0){
    if(prodata[10] == 1){
     jQuery('.product-personalizer').addClass('pplr_background');
    }
    if(prodata[10] == 2){
     jQuery('.cstmfy_personalize_text').addClass('pplr_background');
    }

   }

   if (prodata[10] <2) {
    if(typeof pplr_custom_form_add !=='undefined'){
      pplr_custom_form_add();
    }
  }

if(jQuery('.product-personalizer').length>1 && jQuery('.product-personalizer').closest('form:visible').length>0){
    jQuery('.product-personalizer').each(function() {
      var ppf = jQuery(this).closest('form:visible');
      if(!ppf[0]){
          jQuery(this).remove();
      }
    });
  }

setTimeout(function() {
  if(jQuery('.product-personalizer').closest('form').length<1 && prodata[10] <2){
    jQuery('.product-personalizer').remove();
  }
}, 100);


  for (var j = 0; j < _CP[1]; j++) {
    var m_ = _PP[_CM + (j + 1)].split(',');
	if(m_[13]<3){
		if (jQuery("input.pplr_font[data-frame='" + (j + 1) + "']")[0]) {
			var k = jQuery("input.pplr_font[data-frame='" + (j + 1) + "']").attr('data-value');
		  var selectfonts = k.replace('.ttf', '').replace('_', ''); 
		  m_[0] = "font/" + Shopify.shop + "/"+k;
      var link = app_link_pplr + m_[0]+'?v=123';
      var p_ttf = k.replace(".ttf", "");

		  		if(fNamearray.indexOf(selectfonts)<0){
					fNamearray.push(selectfonts);
          if(typeof pplr_custom_font !=='undefined'){
              if(pplr_custom_font[p_ttf]){
                link = pplr_custom_font[p_ttf];
              }
            }
				  fontface3 += "@font-face {font-family: '" + p_ttf + "';src: url('"+link + "') format('truetype');} ";
				  
				}
		} else {
			var k = m_[0].split('/').pop(-1);
			var selectfonts = k.replace('.ttf', '').replace('.TTF', '').replace('_', '');
			var link = app_link_pplr + m_[0]+'?v=123';
      var p_ttf = k.replace(".ttf", "");
				if(fNamearray.indexOf(selectfonts)<0){
					fNamearray.push(selectfonts);
				  if(typeof pplr_custom_font !=='undefined'){
              if(pplr_custom_font[p_ttf]){
                link = pplr_custom_font[p_ttf];
              }
            }
          fontface3 += "@font-face {font-family: '" + p_ttf + "';src: url('"+link + "') format('truetype');} ";
				  
				}
				
				if(m_[43]>1 && m_[13]<2){
					var selectfonts = m_[60].split('/').pop(-1).replace('.ttf', '').replace('.TTF', '').replace('_', '');
					if(fNamearray.indexOf(selectfonts)<0){
					  fNamearray.push(selectfonts);
				  fontface3 += "@font-face {font-family: '" + m_[60].split('/').pop(-1).replace(".ttf", "") + "';src: url('"+app_link_pplr + m_[60] + "') format('truetype');} ";
					}
				}

				if(m_[43]>2 && m_[13]<2){
					var selectfonts = m_[66].split('/').pop(-1).replace('.ttf', '').replace('.TTF', '').replace('_', '');
					if(fNamearray.indexOf(selectfonts)<0){
					  fNamearray.push(selectfonts);
				  fontface3 += "@font-face {font-family: '" + m_[66].split('/').pop(-1).replace(".ttf", "") + "';src: url('"+app_link_pplr + m_[66] + "') format('truetype');} ";
					}
				}
			}

    }
  }
   if(prodata[10]<2 && prodata[8]<3)
  {
    jQuery(_P_P).append("<style>" + fontface3 + "</style>");
  }
  if(prodata[10]<2 && prodata[8]<1 || prodata[10]<2 && prodata[8]>1)
  {
    jQuery(_P_P).append("<style>" + fontface + "</style>");
  }


  if(prodata[10]==2)
  {
  jQuery('.cstmfy_personalize_text').hide();
   jQuery('.cstmfy_c_required').prop('required',false);
   jQuery('.cstmfy_c_required,.pplrcheckbox,.pplr_imgg').prop('disabled',true);
  }
  check_remember();
  pplr_id.show();

  if (_CP[10] <3 ) {
      ptabify();
  }
   if (_CP[10] <3 ) {
    jQuery('input.pplr_check:checked').trigger('click');
        jQuery('.pplr_tag').each(function() {
      var k = jQuery(this).siblings('.selected,.active');
      if(k[0]){
        var d = k.data('tag');
        selectthistag(jQuery(this).find('.pplr-selecter-item[data-val="'+d+'"]'));
      }else{
        selectthistag(jQuery(this).find('.pplr-selecter-item').first());
      }
    })
  }

  if(_CP[10] <2 ){
    checkinventory();
    updatecondition(pplrframe,0,0,0,0,0,true);
    pplrqty();
  }
	 
  if (_CP[8] == 1 && _CP[10] <2 ) {

    var pplr = first_prod_img();
    if (typeof pplr !== 'undefined' && hasfont) {
      dowebfontconfig(pplr,ppf);
    }
    else{
      LoadPplrWithFont(pplrframe);
    }

    jQuery(window).on('load', function(font_loaded) {
      setTimeout(function() {
        var pplr = first_prod_img();
        if (typeof pplr !== 'undefined' && !pplrloading) {
          if (jQuery('.pplr').length > 1 || !(pplr.parent().hasClass('pplr')) || jQuery('.pplr').length < 1) {
            pplrnewload();
            console.log('document loaded');
            if (jQuery('.pplr').length < 1) {
              dowebfontconfig(pplr,ppf);
            }
          } else {
            if (font_loaded === false) {
              LoadPplrWithFont(pplrframe);
              console.log('document loaded');
            }
          }
        }
      }, 100);
    });

    setTimeout(function() {
      var pplr = first_prod_img();
      if (typeof pplr !== 'undefined' && !pplrloading) {
        if (jQuery('.pplr').length > 1 || !(pplr.parent().hasClass('pplr')) || jQuery('.pplr').length < 1) {
          pplrnewload();
          if (jQuery('.pplr').length < 1) {
            dowebfontconfig(pplr,ppf);
          }
        } else {
          if (font_loaded === false) {
            LoadPplrWithFont(pplrframe);
            console.log('3 seconds');
          }

        }

        if (jQuery('.pplr_preview_wrapper canvas').length > 0) {
          if(pplrcurrentimage!==jQuery('.pplr img:visible:first')[0].currentSrc){
            LoadPplrWithFont(pplrframe);
            console.log('lazy load');
          }

        }


      }
    }, 3100);
  }



  if (gcolor) {
    dominicolors();
  }
    jQuery.fn.bindFirst = function(name, fn) {
      var elem, handlers, i, _len;
      this.bind(name, fn);
      for (i = 0, _len = this.length; i < _len; i++) {
        elem = this[i];
        handlers = jQuery._data(elem).events[name.split('.')[0]];
        handlers.unshift(handlers.pop());
      }
    };


  jQuery(RP+',.cstmfy_personalize_text').closest("form").bindFirst("submit", function(e) {if(createproduct >2 && _CP[8]<3 && createproduct <6){
    if(p_d_o){
        return;
    }
  if(jQuery(".pplr-wrapper:visible")[0] && jQuery('.p_a_t_c')[0]){   
      e.preventDefault();
    }
  }});




  jQuery(document).off( "submit", 'form[action="/cart/add"]' , function(e) {} );
  jQuery(document).unbind( "submit", 'form[action="/cart/add"]' , function(e) {} );
  function p_a_t_c(){
    var pplrform = jQuery(".pplr_monogram,.pplr_select,.pplr-wrapper,.cstmfy_personalize_text").closest("form");
    var formaddbutton = pplrform.find(add_to_cart);
    if(!formaddbutton[0]){
        formaddbutton = pplrform.find('input[type="submit"], button[type="submit"]:not([data-quantity-action]),.' + _SJ[9]+',#' + _SJ[9]);
    }
    if(!formaddbutton[0]){
      if(typeof pplr_custom_ajaxcart_before =='undefined'){
        formaddbutton = pplrform.find('button:not(.pplr-c-button):not(.js-qty__adjust):not([data-quantity-action]):not(.js-qty-button)');
      }
    }

    formaddbutton.addClass('p_a_t_c');
  }

  p_a_t_c();

	n_ad_cart('.p_a_t_c');

  jQuery('.' + _SJ[9]+',#' + _SJ[9]).prop("type", "submit");

  
if(_CP[10] <2 && _CP[7]>1 && _CP[8]<3){
	jQuery('.p_a_t_c').removeClass('ajax_form_cart ajax-submit '+_SJ2[33]).removeAttr('data-grouped-addToCart data-btn-addToCart '+_SJ2[33]);
}
if(_CP[10] <2){
	jQuery('.p_a_t_c').removeAttr(_SJ2[33]).removeClass(_SJ2[33]);
}




  if (pcropper) {
    var link = "<link rel='stylesheet' type='text/css' href='"+app_link_pplr+"cropper.min.css'>";
    jQuery("head").append(link);
    loadScript_p('//doshopify.com/product-personalizer/cropper.js', function() {
    })
  }
  var link = "<link rel='stylesheet' type='text/css' href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'>";
  jQuery("head").append(link);


  if(_SJ[14]>1){
    jQuery(document).on('mousemove touchstart touchmove', '.pplr_preview_wrapper', function(e) {
      if(jQuery('.pplr_preview_wrapper canvas')[0]){
        if(window.innerHeight > window.innerWidth){
          jQuery("body").addClass("pplr_fixed");
        }
        jQuery('.pplr_preview_wrapper canvas').addClass('pplr_zoom');
        var a = jQuery(this).children('canvas'); 
        var targetWidth = a.get(0).width;
        var targetHeight = a.get(0).height;
        var sourceWidth = jQuery(this).width();
        var sourceHeight = jQuery(this).height();
        var xRatio = (jQuery(this).width() - targetWidth) / sourceWidth;
        var yRatio = (jQuery(this).height() - targetHeight) / sourceHeight;
        var offset = jQuery(this).offset();
        if(e.type == 'touchstart' || e.type == 'touchmove'){
          var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
          var left = (touch.pageX - offset.left);
          var top = (touch.pageY - offset.top);
        }
        else{
          var left = (e.pageX - offset.left);
          var top = (e.pageY - offset.top);
        }
        a.css('left',(left * xRatio));
        a.css('top',(top * yRatio));
      }
    });
    jQuery(document).on('touchend mouseout touchend', '.pplr_preview_wrapper', function(e) {
      jQuery('.pplr_preview_wrapper canvas').removeClass('pplr_zoom');
      jQuery("body").removeClass("pplr_fixed");
    })
  }

jQuery(document).on("click mouseover", ".ptooltip", function(event) { 
  var pplrfolder = jQuery(_P_P);
  if(jQuery(".pplr-p-right")[0]){
    pplrfolder = jQuery(".pplr-p-right");
  }
  jQuery(this).css({
    'z-index': 999
  });
  jQuery(this).siblings().css({
    'z-index': 10
  });
  var c = jQuery(this).children(".ptooltiptext");
  var el1 = jQuery(this);
  var el2 = jQuery(this).parents("label,.pplr-wrapper");
  var p1 = el1.offset();
  var p2 = el2.offset();
  var elh = c.height();
  if(elh>200){c.css({'width':'250','max-width':jQuery(this).parent().width()})};
  if(elh>300){c.css({'width':'300','max-width':jQuery(this).parent().width()})};

  var el3 = c.width(); 
  var pleft = jQuery(this).position().left+el3/2-el2.width();
  if(pleft<0){pleft=0;}
  var pright = jQuery(this).offset().left-el3/2-el2.offset().left;
  if(pright>0){pright=0;}
  c.css({
    'margin-left': (p2.left - p1.left),
    'left': jQuery(this).position().left-el3/2-pleft-pright
  });
  if ((p2.top - pplrfolder.offset().top) < c.height() && pplrfolder.css('overflow-y')=='auto') {
    c.css('bottom', -c.height() - 25);
    c.addClass('bottom').removeClass('top');

  } else {
    c.css('bottom', '160%');
    c.addClass('top').removeClass('bottom');
  }
  jQuery(this).find(".ptooltiparrow").css({
    'left': jQuery(this).position().left+7-c.position().left
  });

})


jQuery(document).on("mouseout", ".ptooltip", function(event) { 
        jQuery(this).css({
          'z-index': 10
        });
  })



jQuery(document).on("click mouseover", ".pplr-swatch-element", function(event) { 

  var pplrfolder = jQuery(_P_P);
  if(jQuery(".pplr-p-right")[0]){
    pplrfolder = jQuery(".pplr-p-right");
  }


    if(!jQuery(this).hasClass('pplr_deselect') & !jQuery(this).parent().hasClass('img_thumb_dropdown')){

        if(jQuery(this).hasClass('activeswatch')){
          return;
        }
      if(event.type == "mouseover" && iOS && pisSafari() || event.type == "mouseover" && iOS && pisFacebookOrInstagram()){
        jQuery(this).addClass('activeswatch');
        setTimeout(function() {
          jQuery('.activeswatch').removeClass('activeswatch');
        },500);
        jQuery(this).trigger('click');
      }
      
      if(jQuery(this).find('img[data-src]')[0]){
        var yy = jQuery(this).find('img[data-src]').attr("data-src");
        jQuery(this).find('img[data-src]').attr("src",yy);
      }

    
        jQuery(this).css({
          'z-index': 99
        });
        jQuery(this).siblings().css({
          'z-index': 10
        });
        jQuery('.pplr-swatch-element').children(".swtooltip").hide();
        var s = jQuery(this).children(".swtooltip");
        s.show();
        var p1 = s.offset();
        var p2 = jQuery(this).parent().offset();

        if (p1.left - p2.left >0 && parseInt(jQuery(this).width()/2-s.width()/2)>p1.left - p2.left) {
          s.css({
            'left': jQuery(this).width()/2-s.width()/2
          });
          s.removeClass('sleftafter').removeClass('sleftbefore');
        }

        if (p1.left - p2.left < 3) {
          s.css({
            'left': 0
          });
          s.addClass('sleftbefore').removeClass('sleftafter');
        }

        if (jQuery(this).parent().width() + p2.left-jQuery(this).offset().left < s.width()/2 ) {
          s.css({
            'left': -s.width()
          });
          s.addClass('sleftafter').removeClass('sleftbefore');
        }


        if (pplrfolder.offset().top > s.offset().top  || _SJ[0]==3 || jQuery(this).parents().hasClass('pplr_tab') || s.hasClass('after')) {
          s.css({
            'bottom': 'auto',
            'top': jQuery(this).height()+10
          });
          s.addClass('after').removeClass('before');
        } else {
          s.css({
            'bottom': '100%',
            'top': 'auto'
          });
          s.addClass('before').removeClass('after');

        }

    }

})
jQuery(document).on("mouseout", ".pplr-swatch-element", function(event) { 
    jQuery(this).css({
      'z-index': 10
    });
    var s = jQuery(this).children(".swtooltip");
    s.hide();
  })



  jQuery(window).on("resize orientationchange",function() {
    if(jQuery('.pplr')[0] ){
      if(jQuery(window).width()>760){
        jQuery('.pplrabs').remove();
      }
      pplr_modal_correct();
      jQuery('.pplr_preview_wrapper,pplr_preview_wrapper canvas').width(jQuery('.pplr img:visible:first').width());
      jQuery('.pplr_preview_wrapper,pplr_preview_wrapper canvas').height(jQuery('.pplr img:visible:first').height());
      update_pplr_wrapper();
    }
  })
jQuery(window).on("scroll",function() {
	if(jQuery(".pplr-modal-box:visible")[0]){
		if (_CP[10] <3 ) {
		pplr_modal_correct(true);
		}
	}
})

  if (_SJ[0] == 3 && _CP[10] <3) {
    pplr_id.first().css({
      'max-height': _SJ[1] + 'px',
      'overflow-y': 'auto',
      'padding': '5px',
      'overflow-x': 'hidden'
    });

    jQuery('.pplr_tab').css({
      'max-height': (_SJ[1]-80) + 'px',
      'overflow-y': 'auto',
      'overflow-x': 'hidden'
    });
  }

if(_CP[10] == 2){
  p_d_o = true;
}

  jQuery(document).on("keypress", ".pplr-wrapper input", function(event) { 
    if(event.keyCode == 13){
      jQuery(this).blur();
      return false;
    }
  });
if(typeof pplr_custom_code !=='undefined'){
  pplr_custom_code();
}
var a = '.currency-picker[name="currencies"],.doubly-wrapper .currency-switcher,.single-option-selector,.single-option-selector__radio,form[action="/cart/add"] input[type=radio],select[name="id"],.Popover__Value,input[name="id"],.'+_SJ[11];
if (_CP[10] < 3 && _CP[8] < 2) {
      setTimeout(function() {
        var variant_now = pplr_variant_id(jQuery(RP).closest('form'));
        var kkrmt;
        jQuery(document).on("change click touchstart blur focus", a, function(event) {
        clearTimeout(kkrmt);
         kkrmt =  setTimeout(function() {
          if(p_d_o){
              return;
            }
          change_frame = updatecondition(pplrframe,false,false,false,false,true);
          pplrqty();
          }, 10);
        });

        if (_CP[0] > 0 || pplr_product.variants[0]["featured_image"] ) {
          jQuery(document).on("change", a, function(event) { 
            setTimeout(function() {
            if(p_d_o){
                return;
              }
            if(!change_frame){
              if_change_image(this); 
            }
            }, 10);

          });
        }

        jQuery(document).on("touchstart click", '.slick-list a,body img[src*="/products/"],.flex-next, .flex-prev, .swatch-element,.flickity-prev-next-button,.'+_SJ[11], function(event) { 
          setTimeout(function() {
            if(p_d_o){
                return;
            }
          if_change_image(this);
           }, 10);

        });

        jQuery('body img[src*="/products/"],.Popover__Value,.ColorSwatch,.HorizontalList__Item,.flex-next, .flex-prev, .swatch-element,.flickity-prev-next-button,.'+_SJ[11]).on("click",function() {
          setTimeout(function() {
             p_a_t_c();
            n_ad_cart('.p_a_t_c');
            if(p_d_o){
                return;
            }
          if_change_image(this);
          }, 10);
          clearTimeout(kkrmt);
           kkrmt =  setTimeout(function() {
            var kkyt = pplr_variant_id(jQuery(RP).closest('form'));
            if(kkyt !== variant_now){
              variant_now = kkyt;
                if(p_d_o){
                    return;
                  }
                change_frame = updatecondition(pplrframe,false,false,false,false,true);
                pplrqty();
              }

            }, 10);

        });

      }, 200);
    }
    else{
        setTimeout(function() {
        jQuery(document).on("change click blur focus", a, function(event) { 
            if(p_d_o){
                return;
            }
            p_a_t_c();
            n_ad_cart('.p_a_t_c');
          change_frame = updatecondition(pplrframe,false,false,false,false,true);
          pplrqty();
        });


      }, 200);
    }

  if(_SJ2[3]>0){
      jQuery(document).on("change",'.pplr_text,.pplr_select', function(event) { 
        var p = jQuery(this);
        var cn = p.attr('data-frame')+'_pplr';
        var cv = p.val();
        setC(cn, cv);
      }
     )
    }
  var variant_now = pplr_variant_id(jQuery(RP).closest('form'));

	jQuery(document).on("mouseup click", function(e) {var a = jQuery(".key_layout:not(.k_full),.key_layout_sub,.inputkeylayout");if (!a.is(e.target) && a.has(e.target).length === 0) {jQuery(".key_layout:not(.k_full)").hide();}
    var a = jQuery(".pplr-swatch-element");if (!a.is(e.target) && a.has(e.target).length === 0) {jQuery(".pplr-swatch-element .swtooltip").hide();}
      var kkyt = pplr_variant_id(jQuery(RP).closest('form'));
      if(kkyt == variant_now){recurstop = true;}
  });

	if(Shopify.shop !== 'santa-sends.myshopify.com'){
	  jQuery(document).on("focus", '.pplr_text:not(.cstmfy_c_required)', function(event) { 
      jQuery(this).removeClass('p_u_t');
        if(jQuery(this).val()==jQuery(this).attr('d-placeholder') && _SJ2[30]<2){
          jQuery(this).val('').attr('d-placeholder','').trigger('input');
        }
      });
	}
	  
	  jQuery(document).on("focus", '.inputkeylayout', function(event) { 
	  jQuery(".key_layout").hide();
			jQuery(this).siblings(".key_layout:not(.k_full)").show();
      });
	  jQuery(document).on("click", '.pplr-p-right .minicolors-swatch', function(event) { 
		  if(jQuery(this).offset().top+200>jQuery('.pplr-p-right').offset().top+jQuery('.pplr-p-right').height()){
			setTimeout(function() {
			jQuery('.pplr-p-right').animate({ scrollTop:jQuery('.pplr-p-right').scrollTop()+150});
			}, 200);
		  }
	  })
	  
	  jQuery(document).on("focus focusout", '.inputkeypos', function(event) {
		jQuery(this).attr('fpos',event.target.selectionStart);
      });
	  
	  jQuery(document).on("mouseenter", '.pplr_red_wrapper', function(event) {
		jQuery(this).addClass('stopdance');
      });
	     jQuery(document).on("change", '[name="quantity"]', function(event) {
        pplrqty();
      });
	  
	  jQuery(document).on('scroll', function() {
		pplr_prev_left();
	  })

	  jQuery(document).on("touchstart click", '.pplr_select', function(event) {
		  if (event.type !== "click")
			jQuery(this).trigger('click');
	  });
	  
	  jQuery(document).on("touchstart click", '.pplrfileuploadcover', function(event) {
		     var link = jQuery(this);

			if(link.data('lockedat')>0) {
				link.data('lockedat', '0');
        if (event.type !== "click")
				jQuery(this).siblings('.fileupload').trigger('click');
				setTimeout(function () {
					link.data('lockedat', '1');
				}, 1000);
			}
	  });

	  if(pisSafari() && isMobile){
		jQuery('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">');
	  }
}


if (typeof jQuery === 'undefined') {
  loadScript_p('//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js', function() {
    jQuery(document).ready(pplr_Ready);
    pplrReadyCustom(function() {
      console.log('jQuery loaded');
      pplr_Ready(jQuery)
    });
  });
} else {
  var pplrwidth = jQuery(window).width();
  jQuery(document).ready(pplr_Ready);
  pplrReadyCustom(function() {

    jQuery.fn.pplr_ajax = jQuery.fn.ajax;
    pplr_Ready(jQuery)
  });
}