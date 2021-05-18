
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"90",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageTemplate"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionTotal"
    },{
      "function":"__j",
      "vtp_name":"gtm.original_referrer"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=window.C55||function(){};b.prototype.autoExcludeRefOnTransac=b.prototype.autoExcludeRefOnTransac||!0;window.C55=b;window.config55=new b;b=",["escape",["macro",4],8,16],";var d=",["escape",["macro",5],8,16],",a=document.referrer;if(a.match(new RegExp(\"^https?:\/\/\"+document.location.hostname,\"i\")))try{a=void 0}catch(c){}if(b\u0026\u0026d\u0026\u0026config55.autoExcludeRefOnTransac)try{a=void 0}catch(c){}else if(a.match(document.location.hostname))try{a=void 0}catch(c){}if(\"undefined\"!=typeof ",["escape",["macro",6],8,16],"||\"\"==",["escape",["macro",6],8,16],")try{a=\nvoid 0}catch(c){}else window.gtm=window.gtm||{},window.gtm.original_referrer=a;if(\"\"==a)try{a=void 0}catch(c){}return a})();"]
    },{
      "function":"__cid"
    },{
      "function":"__ctv"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(c){for(var a=c.get(\"hitPayload\").split(\"\\x26\"),b=0;b\u003Ca.length;b++){var d=a[b].split(\"\\x3d\");\"ClientIdOverriddenByCustomTask\"==d[1]\u0026\u0026(a[b]=d[0]+\"\\x3d\"+c.get(\"clientId\"))}return a}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){var a=window.C55||function(){};a.prototype.customTask=a.prototype.customTask||[",["escape",["macro",10],8,16],"];window.C55=a;window.config55=new a;a=\"_\"+b.get(\"trackingId\")+\"_originalSendTask\";var e=window[a]=window[a]||b.get(\"sendHitTask\");b.set(\"sendHitTask\",function(c){for(var d=0;d\u003Cconfig55.customTask.length;d++)try{var f=config55.customTask[d](c);c.set(\"hitPayload\",f.join(\"\\x26\"),!0)}catch(g){console.log(g)}e(c)})}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=window.C55||function(){};b.prototype.queryParameters=b.prototype.queryParameters||[\"q\",\"type\"];b.prototype.hash=b.prototype.hash||!0;b.prototype.excludeParams=b.prototype.excludeParams||[];b.prototype.virtualPageValues=b.prototype.virtualPageValues||[\"virtualPageview\"];b.prototype.insensitiveWords=b.prototype.insensitiveWords||[\"trackSocial\",\"trackEvent\",\"virtualPageview\"];b.prototype.indexKw=b.prototype.indexKw||function(d,a,c){var e;c=c||0;for(e=d.length;c\u003Ce;c+=1)if(a\u0026\u0026d[c].toString().toLowerCase()===\na.toLowerCase())return c;return-1};b.prototype.dataLayerInitiated=b.prototype.dataLayerInitiated||!1;b.prototype.initDataLayer=b.prototype.initDataLayer||function(){for(var d=window.document.getElementsByTagName(\"script\"),a,c=d.length,e=0,f,k=!1,g=this||{};e\u003Cc\u0026\u0026!k;)a=d[e].src,\/www\\.googletagmanager\\.com\\\/gtm\\.js\\?\/.test(a)\u0026\u0026a.split(\"id\\x3d\")[1].split(\"\\x26l\\x3d\")[0]===",["escape",["macro",8],8,16],"\u0026\u0026(f=a.split(\"\\x26l\\x3d\")[1],k=!0),e+=1;g.dataLayer=f?window[f]||[]:window.dataLayer||[];g._push=g.dataLayer.push;\ng.dataLayer.push=function(h){var l=(l=h?h.event:null)?g.indexKw(g.insensitiveWords,l.toLowerCase()):-1;-1!==l\u0026\u0026(h.event=g.insensitiveWords[l]);return g._push.call(g.dataLayer,h)};this.dataLayerInitiated=!0};0==b.prototype.dataLayerInitiated\u0026\u0026b.prototype.initDataLayer();b.utils=b.utils||{_log:[]};b.utils.isNative=b.utils.isNative||function(d){var a=\/\\s*\\[native code\\]\\s*\/i;try{return!!d.toString().match(a)}catch(c){return!1}};b.utils.enumerate=b.utils.enumerate||function(d){return function(a){var c,\ne;if(d)try{return e=Object.keys(a)}catch(f){}e=[];a=a?a.callee?a.slice(a):a:{};for(c in a)a.hasOwnProperty(c)\u0026\u0026e.push(c);return e}}(b.utils.isNative(Object.keys));b.utils.serialize=function(d){var a,c=[],e=\"\\x26\",f=\"\\x3d\";var k=1\u003Carguments.length?arguments:void 0!==d?d:{};var g=this.enumerate(k);var h=g.length;for(a=0;a\u003Ch;a+=1){var l=encodeURI(g[a]);k[g[a]]\u0026\u0026(l+=f+encodeURIComponent(k[g[a]]));c.push(l)}return c.join(e).replace(\/%20\/g,\"+\")};b.utils.objectify=b.utils.objectify||function(d){var a={},\nc=\/\u0026amp;|\u0026\/g,e=\"\\x3d\",f;-1!==d.search(c)?c=d.split(c,-1):d.length?(c={},c[d]=d.toString()):c=\"Array\"===typeof d?[d]:[];var k=this.enumerate(c);var g=k.length;for(f=0;f\u003Cg;f+=1){var h=decodeURI(c[k[f]].replace(\/\\+\/g,\"%20\"));var l=-1!==h.indexOf(e)?h.indexOf(e):d.length;var u=h.split(e,1);h=h.slice(l+1);a[u]=h}return a};b.utils.URLparse=b.utils.URLparse||function(d){var a=document.createElement(\"a\"),c={};a.href=d;c.hash=a.hash;c.params=b.utils.objectify(a.search.slice(1));c.pathname=\"\/\"!==a.pathname[0]?\n\"\/\"+a.pathname:a.pathname;c.host=a.hostname;c.protocol=a.protocol;c.port=a.port;return c};window.C55=b;window.config55=new b;var p=window.location,n=b.utils.URLparse(p),r=n.pathname,q=n.hash.slice(1),t=n.params,m=\"\";b.page={pagePosition:function(){var d=config55.dataLayer.length;for(--d;0\u003C=d;--d);return-1},queryParams:function(){var d=config55.dataLayer.length,a={},c;for(--d;0\u003C=d;--d)for(c=0;c\u003Cconfig55.queryParameters.length;c+=1)config55.dataLayer[d][config55.queryParameters[c]]\u0026\u0026!a.hasOwnProperty(config55.queryParameters[c])\u0026\u0026\n(a[config55.queryParameters[c]]=decodeURI(config55.dataLayer[d][config55.queryParameters[c]]).replace(\/(\\s)?[-0-9a-z.+]+(@|%40)[-0-9a-z.+]+\/ig,\"\"));return a},getEventName:function(){return config55.dataLayer[config55.dataLayer.length-1]?config55.dataLayer[config55.dataLayer.length-1].event:\"\"},pathname:function(){return-1===b.page.pagePosition()?r:config55.dataLayer[b.page.pagePosition()].page},removeQueryParams:function(d){var a,c=config55.excludeParams.length;for(a=0;a\u003Cc;a++)d.hasOwnProperty(config55.excludeParams[a])\u0026\u0026\ndelete d[config55.excludeParams[a]];return d},getSearch:function(d){d=d||b.page.pathname();var a=b.utils.serialize(b.page.removeQueryParams(t)),c=b.utils.serialize(b.page.removeQueryParams(b.page.queryParams())),e=c.split(\"\\x26\"),f;for(f=0;f\u003Ce.length;f+=1)if(\"\"!==e[f]\u0026\u0026a.match(e[f].split(\"\\x3d\")[0])){var k=new RegExp(\"(\\\\?|\\x26|^)\"+e[f].split(\"\\x3d\")[0]+\"([^\\x26]+)(\\x26|$)\",\"gi\");a=a.replace(k,\"\")}a?(d+=\"?\"+a,c\u0026\u0026(d+=\"\\x26\"+c)):c\u0026\u0026(d+=\"?\"+c);return d},init:function(){-1==config55.virtualPageValues.indexOf(b.page.getEventName())?\n(m=b.page.getSearch(),config55.hash\u0026\u0026q\u0026\u0026(m=m!==b.page.pathname()?m+(\"\\x26\"+q):m+(\"?\"+q))):(-1==b.page.pagePosition()?(p=window.location,\"QUICK_PREVIEW\"==",["escape",["macro",9],8,16],"\u0026\u0026console.log(\"the variable page is undefined on virtualPageview\")):p=config55.dataLayer[b.page.pagePosition()].page,n=b.utils.URLparse(p),r=n.pathname,q=n.hash.slice(1),t=n.params,m=b.page.getSearch(r));return m=decodeURI(m)}};return b.page.init()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.location.href;a=a.replace(\/%3Fsuccess%3Dtrue\/g,\"\");return a=a.replace(\/\\?success=true\/g,\"\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"siteSearchResults"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"clientId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"loginStatus"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productFormat"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productSize"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productFrequency"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionShippingMethod"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionPaymentMethod"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"minPrice"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"maxPrice"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"accountType"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",26],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":"UA-39342352-86",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","www\\.enfamil\\.com","value","UA-39342352-1"],["map","key","shop\\.enfamil\\.com","value","UA-39342352-1"],["map","key","checkout\\.enfamil\\.com","value","UA-39342352-1"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",2]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","userId","value",["macro",3]],["map","fieldName","referrer","value",["macro",7]],["map","fieldName","forceSSL","value","true"],["map","fieldName","dataSource","value",["template","web_",["macro",8],"_",["macro",9]]],["map","fieldName","allowLinker","value","true"],["map","fieldName","customTask","value",["macro",11]],["map","fieldName","anonymizeIp","value","true"],["map","fieldName","page","value",["macro",12]],["map","fieldName","location","value",["macro",13]]],
      "vtp_metric":["list",["map","index","1","metric",["macro",14]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",3]],["map","index","2","dimension",["macro",15]],["map","index","3","dimension",["macro",16]],["map","index","4","dimension",["macro",8]],["map","index","5","dimension",["macro",17]],["map","index","6","dimension",["macro",18]],["map","index","7","dimension",["macro",19]],["map","index","8","dimension",["macro",20]],["map","index","9","dimension",["macro",21]],["map","index","10","dimension",["macro",22]],["map","index","11","dimension",["macro",23]],["map","index","12","dimension",["macro",24]],["map","index","13","dimension",["macro",25]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",27],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"products.0.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"stepName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.C55||function(){};a.prototype.customDimProduct=a.prototype.customDimProduct||{5:\"productFormat\",6:\"productType\",7:\"productSize\",8:\"productFrequency\",11:\"minPrice\",12:\"maxPrice\"};a.prototype.customMetProduct=a.prototype.customMetProduct||{2:\"productRatings\"};a.prototype.insensitiveWords=a.prototype.insensitiveWords||[\"trackSocial\",\"trackEvent\",\"virtualPageview\"];a.prototype.indexKw=a.prototype.indexKw||function(d,f,c){var e;c=c||0;for(e=d.length;c\u003Ce;c+=1)if(f\u0026\u0026d[c].toString().toLowerCase()===\nf.toLowerCase())return c;return-1};a.prototype.dataLayerInitiated=a.prototype.dataLayerInitiated||!1;a.prototype.initDataLayer=a.prototype.initDataLayer||function(){for(var d=window.document.getElementsByTagName(\"script\"),f,c=d.length,e=0,h,k=!1,g=this||{};e\u003Cc\u0026\u0026!k;)f=d[e].src,\/www\\.googletagmanager\\.com\\\/gtm\\.js\\?\/.test(f)\u0026\u0026f.split(\"id\\x3d\")[1].split(\"\\x26l\\x3d\")[0]===",["escape",["macro",8],8,16],"\u0026\u0026(h=f.split(\"\\x26l\\x3d\")[1],k=!0),e+=1;g.dataLayer=h?window[h]||[]:window.dataLayer||[];g._push=g.dataLayer.push;\ng.dataLayer.push=function(n){var p=(p=n?n.event:null)?g.indexKw(g.insensitiveWords,p.toLowerCase()):-1;-1!==p\u0026\u0026(n.event=g.insensitiveWords[p]);return g._push.call(g.dataLayer,n)};this.dataLayerInitiated=!0};0==a.prototype.dataLayerInitiated\u0026\u0026a.prototype.initDataLayer();a.prototype.nodeExplorer=function(d,f,c,e){var h,k=e||0;if(d\u0026\u0026void 0!==d[f]\u0026\u0026(c\u0026\u0026d[f]===c||!c))return d;if(d instanceof Array\u0026\u00265\u003Ek)for(h=d.length-1;0\u003C=h;--h){if(e=this.nodeExplorer(d[h],f,c,k+1),void 0!==e)return e}else if(\"object\"===\ntypeof d\u0026\u00265\u003Ek)for(h in d)if(d.hasOwnProperty(h)\u0026\u0026(e=this.nodeExplorer(d[h],f,c,k+1),void 0!==e))return e};a.prototype.getDataLayerObject=function(d,f){return(d=this.nodeExplorer(this.dataLayer,d,f))?d:!1};a.prototype.getDataLayerListById=function(d){var f=function(c,e,h,k){var g;k=k||0;c\u0026\u0026void 0!==c[e]\u0026\u0026c[e]\u0026\u0026h.push(c);if(c instanceof Array\u0026\u00265\u003Ek)for(g=c.length-1;0\u003C=g;--g)r=f(c[g],e,h,k+1);else if(\"object\"===typeof c\u0026\u00265\u003Ek)for(g in c)c.hasOwnProperty(g)\u0026\u0026(r=f(c[g],e,h,k+1));return h};return f(this.dataLayer,\nd,[])};window.C55=a;window.config55=new a;a={};var b=config55.getDataLayerListById(\"event\")[0];switch(b.event){case \"eeListViewProduct\":case \"eeListViewFormulaFinder\":if(b=config55.getDataLayerObject(\"event\",\"eeListViewProduct\")||config55.getDataLayerObject(\"event\",\"eeListViewFormulaFinder\"))for(a.ecommerce=a.ecommerce||{},a.ecommerce.currencyCode=a.ecommerce.currencyCode||b.currencyCode,a.ecommerce.impressions=a.ecommerce.impressions||b.products,j=0;j\u003Ca.ecommerce.impressions.length;j++){for(var l in config55.customDimProduct)a.ecommerce.impressions[j][\"dimension\"+\nl]=a.ecommerce.impressions[j][config55.customDimProduct[l]]||\"\";for(var m in config55.customMetProduct)a.ecommerce.impressions[j][\"metric\"+m]=a.ecommerce.impressions[j][config55.customMetProduct[m]]||\"\"}break;case \"eeProductDetail\":b=config55.getDataLayerObject(\"event\",\"eeProductDetail\");b.eeSend=b.eeSend||0;if(b\u0026\u0026b.eeSend\u003Cconfig55.nbPvTpl){a.ecommerce=a.ecommerce||{};a.ecommerce.detail=a.ecommerce.detail||{};a.ecommerce.detail.actionField=a.ecommerce.detail.actionField||{};a.ecommerce.detail.actionField.list=\na.ecommerce.detail.actionField.list||b.list;a.ecommerce.detail.products=a.ecommerce.detail.products||b.products;for(j=0;j\u003Ca.ecommerce.detail.products.length;j++){for(l in config55.customDimProduct)a.ecommerce.detail.products[j][\"dimension\"+l]=a.ecommerce.detail.products[j][config55.customDimProduct[l]]||\"\";for(m in config55.customMetProduct)a.ecommerce.detail.products[j][\"metric\"+m]=a.ecommerce.detail.products[j][config55.customMetProduct[m]]||\"\"}b.eeSend+=1}break;case \"eeListClickProduct\":case \"eeListClickFormulaFinder\":if(b=\nconfig55.getDataLayerObject(\"event\",\"eeListClickProduct\")||config55.getDataLayerObject(\"event\",\"eeListClickFormulaFinder\"))for(a.ecommerce={},a.ecommerce.click={},a.ecommerce.click.actionField={},a.ecommerce.click.actionField.list=b.products[0].list,a.ecommerce.click.products=b.products,j=0;j\u003Ca.ecommerce.click.products.length;j++){for(l in config55.customDimProduct)a.ecommerce.click.products[j][\"dimension\"+l]=a.ecommerce.click.products[j][config55.customDimProduct[l]]||\"\";for(m in config55.customMetProduct)a.ecommerce.click.products[j][\"metric\"+\nm]=a.ecommerce.click.products[j][config55.customMetProduct[m]]||\"\"}break;case \"eePromoView\":if(b=config55.getDataLayerObject(\"event\",\"eePromoView\"))a.ecommerce={},a.ecommerce.promoView={},a.ecommerce.promoView.promotions=b.promotions;break;case \"eePromoClick\":if(b=config55.getDataLayerObject(\"event\",\"eePromoClick\"))a.ecommerce={},a.ecommerce.promoClick={},a.ecommerce.promoClick.promotions=b.promotions;break;case \"addToCart\":if(b=config55.getDataLayerObject(\"event\",\"addToCart\"))for(a.ecommerce={},\na.ecommerce.currencyCode=b.currencyCode,a.ecommerce.add={},a.ecommerce.add.products=b.products,j=0;j\u003Ca.ecommerce.add.products.length;j++){for(l in config55.customDimProduct)a.ecommerce.add.products[j][\"dimension\"+l]=a.ecommerce.add.products[j][config55.customDimProduct[l]]||\"\";for(m in config55.customMetProduct)a.ecommerce.add.products[j][\"metric\"+m]=a.ecommerce.add.products[j][config55.customMetProduct[m]]||\"\"}break;case \"removeFromCart\":if(b=config55.getDataLayerObject(\"event\",\"removeFromCart\"))for(a.ecommerce=\n{},a.ecommerce.remove={},a.ecommerce.remove.products=b.products,j=0;j\u003Ca.ecommerce.remove.products.length;j++){for(l in config55.customDimProduct)a.ecommerce.remove.products[j][\"dimension\"+l]=a.ecommerce.remove.products[j][config55.customDimProduct[l]]||\"\";for(m in config55.customMetProduct)a.ecommerce.remove.products[j][\"metric\"+m]=a.ecommerce.remove.products[j][config55.customMetProduct[m]]||\"\"}break;case \"eeCheckoutOption\":if(b=config55.getDataLayerObject(\"event\",\"eeCheckoutOption\"))a.ecommerce=\n{},a.ecommerce.checkout_option={},a.ecommerce.checkout_option.actionField={},a.ecommerce.checkout_option.actionField.step=b.checkoutStep,a.ecommerce.checkout_option.actionField.option=b.checkoutOption}return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promotions.0.position"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promotions.0.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promotions.0.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formulaCalculatorStep"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formulaCalculatorStepOption"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formulaFinderStep"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formulaFinderAnswer"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"articleName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productName"
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionAffiliation"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionTax"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionShipping"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionCoupon"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionCurrency"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"currencyCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"products"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.C55||function(){};a.prototype.customDimProduct=a.prototype.customDimProduct||{5:\"productFormat\",6:\"productType\",7:\"productSize\",8:\"productFrequency\",11:\"minPrice\",12:\"maxPrice\"};a.prototype.customMetProduct=a.prototype.customMetProduct||{2:\"productRatings\"};a.prototype.nbPvTpl=a.prototype.nbPvTpl||1;a.prototype.encodeCookie=a.prototype.encodeCookie||!0;a.prototype.expires=a.prototype.expires||(new Date(+new Date+15552E6)).toUTCString();a.prototype.path=a.prototype.path||\"\/\";\na.prototype.domain=a.prototype.domain||function(){var c,e=\"stld\\x3dcookie\",d=document.location.hostname.split(\".\",-1);for(c=d.length-1;0\u003C=c;--c){var f=d.slice(c).join(\".\");document.cookie=e+\";domain\\x3d.\"+f+\";\";if(-1\u003Cdocument.cookie.indexOf(e))return document.cookie=e.split(\"\\x3d\",-1)[0]+\"\\x3d;domain\\x3d.\"+f+\";expires\\x3dThu, 01 Jan 1970 00:00:01 GMT;\",f}}();a.prototype.insensitiveWords=a.prototype.insensitiveWords||[\"trackSocial\",\"trackEvent\",\"virtualPageview\"];a.prototype.indexKw=a.prototype.indexKw||\nfunction(c,e,d){var f;d=d||0;for(f=c.length;d\u003Cf;d+=1)if(e\u0026\u0026c[d].toString().toLowerCase()===e.toLowerCase())return d;return-1};a.prototype.dataLayerInitiated=a.prototype.dataLayerInitiated||!1;a.prototype.initDataLayer=a.prototype.initDataLayer||function(){for(var c=window.document.getElementsByTagName(\"script\"),e,d=c.length,f=0,l,m=!1,g=this||{};f\u003Cd\u0026\u0026!m;)e=c[f].src,\/www\\.googletagmanager\\.com\\\/gtm\\.js\\?\/.test(e)\u0026\u0026e.split(\"id\\x3d\")[1].split(\"\\x26l\\x3d\")[0]===",["escape",["macro",8],8,16],"\u0026\u0026(l=e.split(\"\\x26l\\x3d\")[1],\nm=!0),f+=1;g.dataLayer=l?window[l]||[]:window.dataLayer||[];g._push=g.dataLayer.push;g.dataLayer.push=function(n){var p=(p=n?n.event:null)?g.indexKw(g.insensitiveWords,p.toLowerCase()):-1;-1!==p\u0026\u0026(n.event=g.insensitiveWords[p]);return g._push.call(g.dataLayer,n)};this.dataLayerInitiated=!0};0==a.prototype.dataLayerInitiated\u0026\u0026a.prototype.initDataLayer();a.prototype.nodeExplorer=function(c,e,d,f){var l,m=f||0;if(c\u0026\u0026void 0!==c[e]\u0026\u0026(d\u0026\u0026c[e]===d||!d))return c;if(c instanceof Array\u0026\u00265\u003Em)for(l=c.length-\n1;0\u003C=l;--l){if(f=this.nodeExplorer(c[l],e,d,m+1),void 0!==f)return f}else if(\"object\"===typeof c\u0026\u00265\u003Em)for(l in c)if(c.hasOwnProperty(l)\u0026\u0026(f=this.nodeExplorer(c[l],e,d,m+1),void 0!==f))return f};a.prototype.getDataLayerValue=function(c){var e=this.nodeExplorer(this.dataLayer,c);return e?e[c]:\"\"};a.prototype.getDataLayerObject=function(c,e){return(c=this.nodeExplorer(this.dataLayer,c,e))?c:!1};a.prototype.getDataLayerListById=function(c){var e=function(d,f,l,m){var g;m=m||0;d\u0026\u0026void 0!==d[f]\u0026\u0026d[f]\u0026\u0026\nl.push(d);if(d instanceof Array\u0026\u00265\u003Em)for(g=d.length-1;0\u003C=g;--g)r=e(d[g],f,l,m+1);else if(\"object\"===typeof d\u0026\u00265\u003Em)for(g in d)d.hasOwnProperty(g)\u0026\u0026(r=e(d[g],f,l,m+1));return l};return e(this.dataLayer,c,[])};a.prototype.loadCookie=function(){document.cookie.match(\"__55\\x3d([^;$]*)\")?this.store=this.encodeCookie?JSON.parse(decodeURIComponent(document.cookie.match(\"__55\\x3d([^;$]*)\")[1])):JSON.parse(document.cookie.match(\"__55\\x3d([^;$]*)\")[1]):this.store={}};a.prototype.loadCookie();a.prototype.saveCookie=\nfunction(){window.document.cookie=this.encodeCookie?\"__55\\x3d\"+encodeURIComponent(JSON.stringify(this.store))+\";expires\\x3d\"+this.expires+\";path\\x3d\"+this.path+\";domain\\x3d\"+this.domain+\";\":\"__55\\x3d\"+JSON.stringify(this.store)+\";expires\\x3d\"+this.expires+\";path\\x3d\"+this.path+\";domain\\x3d\"+this.domain+\";\"};window.C55=a;window.config55=new a;a={};var q,t=config55.getDataLayerListById(\"eeAction\"),u=t.length;for(q=0;q\u003Cu;q+=1)switch(t[q].eeAction){case \"eeListView\":var b=config55.getDataLayerObject(\"eeAction\",\n\"eeListView\");b.eeSend=b.eeSend||0;if(b\u0026\u0026b.eeSend\u003Cconfig55.nbPvTpl){a.ecommerce=a.ecommerce||{};a.ecommerce.currencyCode=a.ecommerce.currencyCode||b.currencyCode;a.ecommerce.impressions=a.ecommerce.impressions||b.products;for(j=0;j\u003Ca.ecommerce.impressions.length;j++){for(var h in config55.customDimProduct)a.ecommerce.impressions[j][\"dimension\"+h]=a.ecommerce.impressions[j][config55.customDimProduct[h]]||\"\";for(var k in config55.customMetProduct)a.ecommerce.impressions[j][\"metric\"+k]=a.ecommerce.impressions[j][config55.customMetProduct[k]]||\n\"\"}b.eeSend+=1}break;case \"eeListClick\":b=config55.getDataLayerObject(\"eeAction\",\"eeListClick\");b.eeSend=b.eeSend||0;if(b\u0026\u0026b.eeSend\u003Cconfig55.nbPvTpl){a.ecommerce=a.ecommerce||{};a.ecommerce.click=a.ecommerce.click||{};a.ecommerce.click.actionField=a.ecommerce.click.actionField||{};a.ecommerce.click.actionField.list=a.ecommerce.click.actionField.list||b.list;a.ecommerce.click.products=a.ecommerce.click.products||b.products;for(j=0;j\u003Ca.ecommerce.click.products.length;j++){for(h in config55.customDimProduct)a.ecommerce.click.products[j][\"dimension\"+\nh]=a.ecommerce.click.products[j][config55.customDimProduct[h]]||\"\";for(k in config55.customMetProduct)a.ecommerce.click.products[j][\"metric\"+k]=a.ecommerce.click.products[j][config55.customMetProduct[k]]||\"\"}b.eeSend+=1}break;case \"eeProductDetail\":b=config55.getDataLayerObject(\"eeAction\",\"eeProductDetail\");b.eeSend=b.eeSend||0;if(b\u0026\u0026b.eeSend\u003Cconfig55.nbPvTpl){a.ecommerce=a.ecommerce||{};a.ecommerce.detail=a.ecommerce.detail||{};a.ecommerce.detail.actionField=a.ecommerce.detail.actionField||{};a.ecommerce.detail.actionField.list=\na.ecommerce.detail.actionField.list||b.list;a.ecommerce.detail.products=a.ecommerce.detail.products||b.products;for(j=0;j\u003Ca.ecommerce.detail.products.length;j++){for(h in config55.customDimProduct)a.ecommerce.detail.products[j][\"dimension\"+h]=a.ecommerce.detail.products[j][config55.customDimProduct[h]]||\"\";for(k in config55.customMetProduct)a.ecommerce.detail.products[j][\"metric\"+k]=a.ecommerce.detail.products[j][config55.customMetProduct[k]]||\"\"}b.eeSend+=1}break;case \"eePromoView\":b=config55.getDataLayerObject(\"eeAction\",\n\"eePromoView\");b.eeSend=b.eeSend||0;b\u0026\u0026b.eeSend\u003Cconfig55.nbPvTpl\u0026\u0026(a.ecommerce=a.ecommerce||{},a.ecommerce.promoView=a.ecommerce.promoView||{},a.ecommerce.promoView.promotions=a.ecommerce.promoView.promotions||b.promotions,b.eeSend+=1);break;case \"eeCheckout\":b=config55.getDataLayerObject(\"eeAction\",\"eeCheckout\");b.eeSend=b.eeSend||0;if(b\u0026\u0026b.eeSend\u003Cconfig55.nbPvTpl){a.ecommerce=a.ecommerce||{};a.ecommerce.checkout=a.ecommerce.checkout||{};a.ecommerce.checkout.actionField=a.ecommerce.checkout.actionField||\n{};a.ecommerce.checkout.actionField.step=a.ecommerce.checkout.actionField.step||b.checkoutStep;a.ecommerce.checkout.actionField.option=a.ecommerce.checkout.actionField.option||b.checkoutOption;a.ecommerce.checkout.products=a.ecommerce.checkout.products||b.products;for(j=0;j\u003Ca.ecommerce.checkout.products.length;j++){for(h in config55.customDimProduct)a.ecommerce.checkout.products[j][\"dimension\"+h]=a.ecommerce.checkout.products[j][config55.customDimProduct[h]]||\"\";for(k in config55.customMetProduct)a.ecommerce.checkout.products[j][\"metric\"+\nk]=a.ecommerce.checkout.products[j][config55.customMetProduct[k]]||\"\"}b.eeSend+=1}break;case \"eeRefund\":if(b=config55.getDataLayerObject(\"eeAction\",\"eeRefund\"),b.eeSend=b.eeSend||0,b\u0026\u0026b.eeSend\u003Cconfig55.nbPvTpl){a.ecommerce=a.ecommerce||{};a.ecommerce.refund=a.ecommerce.refund||{};a.ecommerce.refund.actionField=a.ecommerce.refund.actionField||{};a.ecommerce.refund.actionField.id=a.ecommerce.refund.actionField.id||b.transactionId;a.ecommerce.refund.products=a.ecommerce.refund.products||b.products;for(j=\n0;j\u003Ca.ecommerce.refund.products.length;j++){for(h in config55.customDimProduct)a.ecommerce.refund.products[j][\"dimension\"+h]=a.ecommerce.refund.products[j][config55.customDimProduct[h]]||\"\";for(k in config55.customMetProduct)a.ecommerce.refund.products[j][\"metric\"+k]=a.ecommerce.refund.products[j][config55.customMetProduct[k]]||\"\"}b.eeSend+=1}}b=\/shop\\.enfamil\\.com\\\/[0-9]{1,}\\\/orders\\\/[a-z0-9]{1,}\/;if(",["escape",["macro",4],8,16],"\u0026\u0026(",["escape",["macro",4],8,16],"!==config55.store.eeId||",["escape",["macro",4],8,16],"===config55.store.eeId\u0026\u0026\n1\u003Cconfig55.nbPvTpl\u0026\u0026config55.nbConversion\u0026\u0026config55.nbConversion\u003Cconfig55.nbPvTpl)\u0026\u0026",["escape",["macro",5],8,16],"\u0026\u0026!b.test(document.location.href)){a.ecommerce=a.ecommerce||{};a.ecommerce.purchase=a.ecommerce.purchase||{};a.ecommerce.purchase.actionField=a.ecommerce.purchase.actionField||{};a.ecommerce.purchase.actionField.id=",["escape",["macro",4],8,16],";a.ecommerce.purchase.actionField.revenue=",["escape",["macro",5],8,16],";a.ecommerce.purchase.actionField.affiliation=",["escape",["macro",44],8,16],";a.ecommerce.purchase.actionField.tax=\n",["escape",["macro",45],8,16],";a.ecommerce.purchase.actionField.shipping=",["escape",["macro",46],8,16],";a.ecommerce.purchase.actionField.coupon=",["escape",["macro",47],8,16],";a.ecommerce.currencyCode=",["escape",["macro",48],8,16],"||",["escape",["macro",49],8,16],";a.ecommerce.purchase.products=",["escape",["macro",50],8,16],";for(j=0;j\u003Ca.ecommerce.purchase.products.length;j++){for(h in config55.customDimProduct)a.ecommerce.purchase.products[j][\"dimension\"+h]=a.ecommerce.purchase.products[j][config55.customDimProduct[h]]||\"\";for(k in config55.customMetProduct)a.ecommerce.purchase.products[j][\"metric\"+\nk]=a.ecommerce.purchase.products[j][config55.customMetProduct[k]]||\"\"}config55.store.eeId=",["escape",["macro",4],8,16],";config55.saveCookie();config55.nbConversion=config55.nbConversion||0;config55.nbConversion++}return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"addToCartType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"previousArticleName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nextArticleName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sortType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sortValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productCardsListName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"filterType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"filterValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nextPage"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"audioValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"audioAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"audioLabel"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",26],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"G-QDFXSYY41K",
      "vtp_map":["list",["map","key","www\\.enfamil\\.com","value","G-5Q22KJTQ8G"],["map","key","shop\\.enfamil\\.com","value","G-5Q22KJTQ8G"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"originalReferrer"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"homePagePromoCreative"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eeAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"checkoutStep"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productPrice"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"checkoutMethod"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"checkoutUserType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"value"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"items"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"products.0.list"
    },{
      "function":"__e"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",79],
      "vtp_map":["list",["map","key","rc_rechargeCheckout","value","true"],["map","key","rc_rechargeTransaction","value","false"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",79],
      "vtp_map":["list",["map","key","rc_rechargeCheckout","value","Product Checkout"],["map","key","rc_rechargeTransaction","value","Product Purchase"]]
    },{
      "function":"__c",
      "vtp_value":"UA-39342352-1"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",85],
      "vtp_map":["list",["map","key","Join Enfamil Family Beginnings®","value","Header EFB Enroll"],["map","key","Enfamil® Family Beginnings","value","Nav EFB Enroll"]]
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"aria-label"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){var e=window.C55||function(){};e.prototype.youtubeParse=e.prototype.youtubeParse||!0;e.prototype.youtubeStepsHierarchy=e.prototype.youtubeStepsHierarchy||[{name:\"25%\",value:25,step:25},{name:\"50%\",value:50,step:25},{name:\"75%\",value:75,step:25},{name:\"100%\",value:98,step:25}];window.C55=e;window.config55=new e;config55.ytPlayers={};var p=0,u,v=\/youtube(?:-nocookie)?\\.com\\\/embed\\\/([^\\?|$]*)\/,w=\/youtube(?:-nocookie)?\\.com\\\/v\\\/([^\\?|$]*)\/,z=\/youtube(?:-nocookie)?\\.com\\\/v\\\/.*playerapiid=([^\u0026|$]*)\/,\nq={},m=[],n=[],x=function(){var b=Array.prototype.slice;try{b.call(document.getElementsByTagName(\"body\"))}catch(a){return function(){var c,f=this.length,d=[];if(!f)return[];for(c=0;c\u003Cf;c+=1)d.push(this[c]);return d}}return b}();e.youtube={players:{},pushGAEvent:function(b,a,c){b\u0026\u0026window.dataLayer.push({event:\"videoEvent\",videoAction:b,videoLabel:a,videoValue:c})},trackPercentageView:function(){var b={},a=1E3,c=function(f,d){var g=config55.youtubeStepsHierarchy,l=0,h=!1;try{l=d.getDuration()}catch(k){l=\nd.F.duration}var t=function(){var k=0,r=0,y;try{k=d.getCurrentTime(),r=Math.round(k\/l*100)}catch(A){k=d.F.currentTime,r=Math.round(k\/l*100)}k=0;for(y=g.length;k\u003Cy;k+=1)g[k].reached=g[k].reached||[],r\u003Eg[k].value\u0026\u0026!g[k].reached[f]\u0026\u0026(g[k].reached[f]=!0,e.youtube.pushGAEvent(g[k].name,f,g[k].step));h\u0026\u0026setTimeout(t,a)};return{start:function(){h||(h=!0,t())},stop:function(){h=!1}}};return function(f,d){b[f]||(b[f]=c(f,d));return b[f]}}(),ytOnStateChange:function(){return function(b){var a=b._videoId;switch(b.data){case YT.PlayerState.ENDED:try{this.getPlaylist\u0026\u0026\nthis.getPlaylist()\u0026\u0026(a=this.getPlaylist()[Math.max(this.getPlaylistIndex()-1,0)])}catch(c){this.F.playlist\u0026\u0026(a=this.F.playlist[Math.max(this.F.playlistIndex-1,0)])}e.youtube.pushGAEvent(\"Watch to End\",a);n[a]=\"Ended\";break;case YT.PlayerState.PLAYING:e.youtube.trackPercentageView(a,b.target).start();\"Play\"!==n[a]\u0026\u0026e.youtube.pushGAEvent(\"Play\",a);n[a]=\"Play\";break;case YT.PlayerState.PAUSED:e.youtube.trackPercentageView(a).stop()}}}(),registerPlayer:function(b,a){a=\"__ytOnStateChange_\"+a;var c=window[a]=\nfunction(f){return e.youtube.ytOnStateChange({data:f,_videoId:c._videoid})};c._videoid=b.data.match(w)[1];b.addEventListener(\"onStateChange\",a)},parseDOMForVideos:function(){var b,a;var c=document.getElementsByTagName(\"iframe\");var f=[].concat(x.call(document.getElementsByTagName(\"object\")),x.call(document.getElementsByTagName(\"embed\")));var d=0;for(b=c.length;d\u003Cb;d+=1)(a=c[d].src.match(v))\u0026\u0026-1===m.indexOf(c[d])\u0026\u0026(c[d].id||(c[d].id=\"ytvid_\"+ +new Date),a=c[d].id,e.youtube.players[a]=new YT.Player(a));\nd=0;for(b=f.length;d\u003Cb;d+=1)(a=(f[d].data||f[d].src).match(w))\u0026\u0026-1===m.indexOf(f[d])\u0026\u0026(m.push(f[d]),e.youtube.registerPlayer(f[d],a[1]));config55.youtubeParse\u0026\u0026setTimeout(e.youtube.parseDOMForVideos,500)},iframeAPIReady:function(){var b=window.YT;b._Player=b.Player;b.Player=function(a,c){c=c||{};c.events||(c.events={});var f=this,d=c.events||{},g=document.getElementById(a);var l=\"function\"===typeof d.onStateChange?d.onStateChange:function(){};m.push(g);d.onStateChange=function(h){h._videoId=c.videoId||\ng.src.match(v)[1];if(\"videoseries\"===h._videoId||\"playlist\"===h._videoId)try{h._videoId=h.target.getVideoData().video_id}catch(t){h._videoId=h.target.F.videoData.video_id}h.lastState=n;e.youtube.ytOnStateChange.call(f,h);l\u0026\u0026l.call(f,h)};b._Player.call(this,a,c)};b.Player.prototype=b._Player.prototype;window._onYouTubeIframeAPIReady\u0026\u0026window._onYouTubeIframeAPIReady();e.youtube.parseDOMForVideos()},PlayerReady:function(){return function(b){var a;if(b){if(!(a=q[b]))a:{a=b;var c=document.getElementsByTagName(\"object\"),\nf,d;var g=0;for(f=c.length;g\u003Cf;g+=1)if((d=c[g].data.match(z))\u0026\u0026d[1]===a){q[a]=c[g];a=q[a];break a}a=null}a\u0026\u0026(m.push(a),e.youtube.registerPlayer(a,b));window._onYouTubePlayerReady\u0026\u0026window._onYouTubePlayerReady(b)}}}(),main:function(){p||\"complete\"!==document.readyState||(p+=1,u=document.getElementsByTagName(\"head\")[0],window._onYouTubePlayerReady=window.onYouTubePlayerReady,window.onYouTubePlayerReady=e.youtube.PlayerReady,window.YT?function a(){if(!YT.Player)return setTimeout(a,16);e.youtube.iframeAPIReady()}():\n(window._onYouTubeIframeAPIReady=window.onYouTubeIframeAPIReady||null,window.onYouTubeIframeAPIReady=e.youtube.iframeAPIReady,function(){var b=document.createElement(\"script\"),a=document.createElement(\"a\"),c=u;a.href=\"dummy.jpg\";b.async=!0;b.src=\"file:\"===a.protocol?\"http:\/\/youtube.com\/iframe_api\":\"\/\/youtube.com\/iframe_api\";c.appendChild(b)}()))},onreadystatechange:function(){\"complete\"!==document.readyState||p||e.youtube.main()},init:function(){if(document.readyState){if(\"complete\"===document.readyState)return e.youtube.main()}else setTimeout(e.youtube.main,\n500);window.addEventListener?(window.addEventListener(\"DOMContentLoaded\",e.youtube.main),window.addEventListener(\"load\",e.youtube.main),document.addEventListener(\"readystatechange\",e.youtube.onreadystatechange)):(window.attachEvent(\"onload\",e.youtube.main),document.attachEvent(\"onreadystatechange\",e.youtube.onreadystatechange))}};e.youtube.init();return\"55youtube\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.C55||function(){};a.prototype.htmlVideoParse=a.prototype.htmlVideoParse||!0;a.prototype.htmlVideoStepsHierarchy=a.prototype.htmlVideoStepsHierarchy||[{name:\"25%\",value:25,step:25},{name:\"50%\",value:50,step:25},{name:\"75%\",value:75,step:25},{name:\"100%\",value:98,step:25}];window.C55=a;window.config55=new a;return function(){var f=0,g=[];a.htmlVideo={players:{},stepsByPlayer:{},pushGAEvent:function(b,c,e){b\u0026\u0026window.dataLayer.push({event:\"videoEvent\",videoAction:b,videoLabel:c,\nvideoValue:e})},trackPercentageView:function(b){var c=a.htmlVideo.stepsByPlayer[b.id],e=b.duration,d=Math.round(b.currentTime),h;e=Math.round(d\/e*100);d=0;for(h=c.length;d\u003Ch;d+=1)e\u003Ec[d].value\u0026\u0026!c[d].reached\u0026\u0026(c[d].reached=!0,a.htmlVideo.pushGAEvent(c[d].name,b.id,c[d].step))},onStateChange:function(b){switch(b.type){case \"timeupdate\":a.htmlVideo.trackPercentageView(b.target);break;case \"play\":\"play\"!==g[b.target.id]\u0026\u0026a.htmlVideo.pushGAEvent(\"Play\",b.target.id);g[b.target.id]=\"play\";break;case \"ended\":g[b.target.id]=\n\"ended\",a.htmlVideo.pushGAEvent(\"Watch to End\",b.target.id),a.htmlVideo.stepsByPlayer[b.target.id]=JSON.parse(JSON.stringify(config55.htmlVideoStepsHierarchy))}},registerPlayer:function(b){window.addEventListener?(b.addEventListener(\"play\",a.htmlVideo.onStateChange,!1),b.addEventListener(\"timeupdate\",a.htmlVideo.onStateChange,!1),b.addEventListener(\"ended\",a.htmlVideo.onStateChange,!1)):(b.attachEvent(\"play\",a.htmlVideo.onStateChange),b.attachEvent(\"timeupdate\",a.htmlVideo.onStateChange),b.attachEvent(\"ended\",\na.htmlVideo.onStateChange))},parseDOMForVideos:function(){var b=document.getElementsByTagName(\"video\"),c,e=b.length;for(c=0;c\u003Ce;c+=1){var d=b[c].id||b[c].currentSrc.split(\"\/\",-1).slice(-1)[0].split(\".\",1);b[c].id=d;a.htmlVideo.players[d]||(a.htmlVideo.players[d]=b[c],a.htmlVideo.registerPlayer(b[c]),a.htmlVideo.stepsByPlayer[d]=JSON.parse(JSON.stringify(config55.htmlVideoStepsHierarchy)))}config55.htmlVideoParse\u0026\u0026setTimeout(a.htmlVideo.parseDOMForVideos,500)},main:function(){f||\"complete\"!==document.readyState||\n(f+=1,a.htmlVideo.parseDOMForVideos())},onreadystatechange:function(){\"complete\"!==document.readyState||f||a.htmlVideo.main()},init:function(){if(document.readyState){if(\"complete\"===document.readyState)return a.htmlVideo.main()}else setTimeout(a.htmlVideo.main,500);window.addEventListener?(window.addEventListener(\"DOMContentLoaded\",a.htmlVideo.main),window.addEventListener(\"load\",a.htmlVideo.main),document.addEventListener(\"readystatechange\",a.htmlVideo.onreadystatechange)):(window.attachEvent(\"onload\",\na.htmlVideo.main),document.attachEvent(\"onreadystatechange\",a.htmlVideo.onreadystatechange))}};a.htmlVideo.init();return\"55htmlVideo\"}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productVariant"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"currency"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transaction_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productRatings"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productQuantity"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"siteSearchKeyword"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagePrimaryNav"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"siteSearchMethod"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"affiliation"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"shipping"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productCoupon"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"tax"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagePath"
    },{
      "function":"__c",
      "vtp_value":"6.0.0"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoStep"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productBrand"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"gclid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.C55||function(){};a.prototype.adblockMaxLoop=a.prototype.adblockMaxLoop||5;a.prototype.adblockActivated=a.prototype.adblockActivated||\"Adblock activate\";a.prototype.adblockDeactivated=a.prototype.adblockDeactivated||\"Adblock deactivate\";window.C55=a;window.config55=new a;var c,d=0,e;a.adblock={bait:null,baitClass:\"pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links\",baitStyle:\"width: 1px!important; height: 1px!important; position: absolute!important;left: -10000px!important; top: -1000px!important;\",\ncreateBait:function(){if(!a.adblock.bait){var b=document.createElement(\"div\");b.setAttribute(\"class\",a.adblock.baitClass);b.setAttribute(\"style\",a.adblock.baitStyle);a.adblock.bait=document.body.appendChild(b)}},removeBait:function(){document.body.removeChild(a.adblock.bait);a.adblock.bait=null},stopLoop:function(){c=null;d=0},checkBait:function(){var b=!1;if(!window.document.body.getAttribute(\"abp\")\u0026\u0026a.adblock.bait.offsetParent\u0026\u0026a.adblock.bait.offsetHeight\u0026\u0026a.adblock.bait.offsetLeft\u0026\u0026a.adblock.bait.offsetTop\u0026\u0026\na.adblock.bait.offsetWidth\u0026\u0026a.adblock.bait.clientHeight\u0026\u0026a.adblock.bait.clientWidth)if(window.getComputedStyle){var f=window.getComputedStyle(a.adblock.bait,null);!f||\"none\"!==f.getPropertyValue(\"display\")\u0026\u0026\"hidden\"!==f.getPropertyValue(\"visibility\")||(b=!0)}else\"none\"==a.adblock.bait.currentStyle.display\u0026\u0026\"hidden\"===a.adblock.bait.currentStyle.visibility\u0026\u0026(b=!0);else b=!0;c\u0026\u0026(d++,d\u003Econfig55.adblockMaxLoop?(a.adblock.stopLoop(),c=0):a.adblock.stopLoop(c));b?(a.adblock.stopLoop(),a.adblock.removeBait(),\ne=config55.adblockActivated):c||(a.adblock.removeBait(),e=config55.adblockDeactivated)},init:function(){a.adblock.createBait();d=0;a.adblock.checkBait()}};a.adblock.init();return e})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var d=window.C55||function(){};d.prototype.virtualPageValues=d.prototype.virtualPageValues||[\"virtualPageview\"];var m=\"spaVariable\";Array.prototype.indexOf||(Array.prototype.indexOf=function(g,a){if(!this)throw new TypeError('\"this\" is null or not defined');var b=this,e=b.length;a=+a||0;if(0===e)return-1;Infinity===Math.abs(a)\u0026\u0026(a=0);if(a\u003E=e)return-1;for(a=Math.max(0\u003C=a?a:e-Math.abs(a),0);a\u003Ce;){if(b.hasOwnProperty(a)\u0026\u0026b[a]===g)return a;a+=1}return-1});d.prototype.insensitiveWords=d.prototype.insensitiveWords||\n[\"trackSocial\",\"trackEvent\",\"virtualPageview\"];d.prototype.indexKw=d.prototype.indexKw||function(g,a,b){var e;b=b||0;for(e=g.length;b\u003Ce;b+=1)if(a\u0026\u0026g[b].toString().toLowerCase()===a.toLowerCase())return b;return-1};d.prototype.dataLayerInitiated=d.prototype.dataLayerInitiated||!1;d.prototype.initDataLayer=d.prototype.initDataLayer||function(){for(var g=window.document.getElementsByTagName(\"script\"),a,b=g.length,e=0,h,k=!1,c=this||{};e\u003Cb\u0026\u0026!k;)a=g[e].src,\/www\\.googletagmanager\\.com\\\/gtm\\.js\\?\/.test(a)\u0026\u0026\na.split(\"id\\x3d\")[1].split(\"\\x26l\\x3d\")[0]===",["escape",["macro",8],8,16],"\u0026\u0026(h=a.split(\"\\x26l\\x3d\")[1],k=!0),e+=1;c.dataLayer=h?window[h]||[]:window.dataLayer||[];c._push=c.dataLayer.push;c.dataLayer.push=function(f){var l=(l=f?f.event:null)?c.indexKw(c.insensitiveWords,l.toLowerCase()):-1;-1!==l\u0026\u0026(f.event=c.insensitiveWords[l]);return c._push.call(c.dataLayer,f)};this.dataLayerInitiated=!0};0==d.prototype.dataLayerInitiated\u0026\u0026d.prototype.initDataLayer();d.prototype.getDataLayerValueForSpa=function(g){_nodeExplorer=\nfunction(b,e,h,k){var c;var f=k||0;if(b\u0026\u0026void 0!==b[e])return b;if(b instanceof Array\u0026\u00265\u003Ef)for(c=b.length-1;0\u003C=c;--c){if(f=_nodeExplorer(b[c],e,h,k+1),-1!=h.indexOf(b[c].event)\u0026\u0026(c=0),void 0!==f)return f}else if(\"object\"===typeof b\u0026\u00265\u003Ef)for(c in b)if(b.hasOwnProperty(c)\u0026\u0026(\"event\"==c\u0026\u0026h.indexOf(b.event),f=_nodeExplorer(b[c],e,h,k+1),void 0!==f))return f};var a=_nodeExplorer(this.dataLayer,g,config55.virtualPageValues,0);return a?a[g]:void 0};window.C55=d;window.config55=new d;return config55.getDataLayerValueForSpa(m)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{if(\"undefined\"!==typeof ",["escape",["macro",60],8,16],"\u0026\u0026\"\"!==",["escape",["macro",60],8,16],")return document.location=",["escape",["macro",60],8,16],"}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.C55||function(){};a.prototype.htmlAudioParse=a.prototype.htmlAudioParse||!1;a.prototype.htmlAudioStepsHierarchy=a.prototype.htmlAudioStepsHierarchy||[{name:\"25%\",value:25,step:25},{name:\"50%\",value:50,step:25},{name:\"75%\",value:75,step:25},{name:\"100%\",value:98,step:25}];window.C55=a;window.config55=new a;return function(){var f=0,g=[];a.htmlAudio={players:{},stepsByPlayer:{},pushGAEvent:function(b,c,e){b\u0026\u0026window.dataLayer.push({event:\"audioEvent\",audioAction:b,audioLabel:c,\naudioValue:e})},trackPercentageView:function(b){var c=a.htmlAudio.stepsByPlayer[b.id],e=b.duration,d=Math.round(b.currentTime),h;e=Math.round(d\/e*100);d=0;for(h=c.length;d\u003Ch;d+=1)e\u003Ec[d].value\u0026\u0026!c[d].reached\u0026\u0026(c[d].reached=!0,a.htmlAudio.pushGAEvent(c[d].name,b.id,c[d].step))},onStateChange:function(b){switch(b.type){case \"timeupdate\":a.htmlAudio.trackPercentageView(b.target);break;case \"play\":\"play\"!==g[b.target.id]\u0026\u0026a.htmlAudio.pushGAEvent(\"Play\",b.target.id);g[b.target.id]=\"play\";break;case \"ended\":g[b.target.id]=\n\"ended\",a.htmlAudio.pushGAEvent(\"Listen to End\",b.target.id),a.htmlAudio.stepsByPlayer[b.target.id]=JSON.parse(JSON.stringify(config55.htmlAudioStepsHierarchy))}},registerPlayer:function(b){window.addEventListener?(b.addEventListener(\"play\",a.htmlAudio.onStateChange,!1),b.addEventListener(\"timeupdate\",a.htmlAudio.onStateChange,!1),b.addEventListener(\"ended\",a.htmlAudio.onStateChange,!1)):(b.attachEvent(\"play\",a.htmlAudio.onStateChange),b.attachEvent(\"timeupdate\",a.htmlAudio.onStateChange),b.attachEvent(\"ended\",\na.htmlAudio.onStateChange))},parseDOMForAudios:function(){var b=document.getElementsByTagName(\"audio\"),c,e=b.length;for(c=0;c\u003Ce;c+=1){var d=b[c].id||b[c].currentSrc.split(\"\/\",-1).slice(-1)[0].split(\".\",1);b[c].id=d;a.htmlAudio.players[d]||(a.htmlAudio.players[d]=b[c],a.htmlAudio.registerPlayer(b[c]),a.htmlAudio.stepsByPlayer[d]=JSON.parse(JSON.stringify(config55.htmlAudioStepsHierarchy)))}config55.htmlAudioParse\u0026\u0026setTimeout(a.htmlAudio.parseDOMForAudios,500)},main:function(){f||\"complete\"!==document.readyState||\n(f+=1,a.htmlAudio.parseDOMForAudios())},onreadystatechange:function(){\"complete\"!==document.readyState||f||a.htmlAudio.main()},init:function(){if(document.readyState){if(\"complete\"===document.readyState)return a.htmlAudio.main()}else setTimeout(a.htmlAudio.main,500);window.addEventListener?(window.addEventListener(\"DOMContentLoaded\",a.htmlAudio.main),window.addEventListener(\"load\",a.htmlAudio.main),document.addEventListener(\"readystatechange\",a.htmlAudio.onreadystatechange)):(window.attachEvent(\"onload\",\na.htmlAudio.main),document.attachEvent(\"onreadystatechange\",a.htmlAudio.onreadystatechange))}};a.htmlAudio.init();return\"55htmlAudio\"}})();"]
    },{
      "function":"__e"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(c){var f=[{name:\"EMAIL\",regex:\/(\u0026|\\?|#)(email|e-mail|mail)=[^\u0026#]+\/gi},{name:\"EMAIL\",regex:\/[^\u0026?=#]+(@|%40)[^@\u0026?=#]+\\.[^@\u0026?=#]+\/gi},{name:\"ADDRESS\",regex:\/(\u0026|\\?|#)address=[^\u0026#]+\/gi},{name:\"NAME\",regex:\/(\u0026|\\?|#)(firstname|surname|prenom|lastname|name|nom|username)=[^\u0026#]+\/gi},{name:\"PASSWORD\",regex:\/(\u0026|\\?|#)(password|pwd)=[^\u0026#]+\/gi},{name:\"PHONE\",regex:\/(\u0026|\\?|#)phone=[^\u0026#]+\/gi}],d=c.get(\"hitPayload\").split(\"\\x26\");for(c=0;c\u003Cd.length;c++){var e=d[c].split(\"\\x3d\");try{var a=\ndecodeURIComponent(decodeURIComponent(e[1]))}catch(b){a=decodeURIComponent(e[1])}f.forEach(function(b){a=null!==a.match(b.regex)\u0026\u00261\u003Ca.match(b.regex)[0].split(\"\\x3d\").length?a.replace(b.regex,a.match(b.regex)[0].split(\"\\x3d\")[0]+\"\\x3d[DELETED \"+b.name+\"]\"):a.replace(b.regex,\"[DELETED \"+b.name+\"]\")});e[1]=encodeURIComponent(a);d[c]=e.join(\"\\x3d\")}return d}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(f){var h=\"\/\/rawdata.55labs.com\",k=\"\/track\/",["escape",["macro",27],7],"\/\";f=f.get(\"hitPayload\");var l=function(b){var a=document.createElement(\"img\");a.width=1;a.height=1;a.src=b;return a},g=function(b,a,c){var e=l(b+\"?\"+a);e.onload=e.onerror=function(){e.onload=null;e.onerror=null;c()}},m=function(b,a,c){var e=window.XMLHttpRequest;if(!e)return!1;var d=new e;if(!(\"withCredentials\"in d))return!1;d.open(\"POST\",b,!0);d.withCredentials=!0;d.setRequestHeader(\"Content-Type\",\"text\/plain\");\nd.onreadysimgRequesttechange=function(){4==d.readySimgRequestte\u0026\u0026(c(),d=null)};d.send(a);return!0},n=function(b,a,c){window.navigator.sendBeacon?window.navigator.sendBeacon(b,a)?(c(),b=!0):b=!1:b=!1;return b},p=function(b,a,c){c=c||function(){};2036\u003E=a.length?g(b,a,c):8192\u003E=a.length\u0026\u0026(n(b,a,c)||m(b,a,c)||g(b,a,c))};p(h+k,f);return f.split(\"\\x26\")}})();"]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","true"],["map","fieldName","allowLinker","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-39342352-86",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "priority":1,
      "metadata":["map"],
      "setup_tags":["list",["tag",79,0]],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",51],
      "vtp_fieldsToSet":["list",["map","fieldName","nonInteraction","value","false"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",28],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",27],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_enableGA4Schema":false,
      "tag_id":94
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Scroll",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":["template",["macro",29],"%"],
      "vtp_eventLabel":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":26
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"formula comparison",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":"Compare",
      "vtp_eventLabel":["macro",30],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":33
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Form",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":["macro",31],
      "vtp_eventLabel":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":37
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Form",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":["macro",31],
      "vtp_eventLabel":"completion",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":43
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",12]]],
      "vtp_eventCategory":"Sign in Popin",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":46
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",33],
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",12]]],
      "vtp_eventCategory":"Internal marketing",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":["template","view - ",["macro",34]],
      "vtp_eventLabel":["macro",35],
      "vtp_dimension":["list",["map","index","11","dimension",["macro",36]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":48
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",33],
      "vtp_eventCategory":"Enhanced Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":"removeFromCart",
      "vtp_eventLabel":"More information in ecommerce reports",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":68
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"formula calculator",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":["macro",37],
      "vtp_eventLabel":["macro",38],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":70
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"account log-in",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":["macro",25],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":72
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"formula finder",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":["macro",39],
      "vtp_eventLabel":["macro",40],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":81
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",33],
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",12]]],
      "vtp_eventCategory":"product card view",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":"formula finder",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":82
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",33],
      "vtp_fieldsToSet":["list",["map","fieldName","transport","value","beacon"]],
      "vtp_eventCategory":"Article",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":["macro",41],
      "vtp_eventLabel":["macro",30],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":83
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"formula comparison",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":"add to comparison",
      "vtp_eventLabel":["macro",42],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":85
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"formula finder",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":"Chat Open",
      "vtp_eventLabel":["macro",40],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":88
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",33],
      "vtp_eventCategory":"add to cart",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":["macro",52],
      "vtp_eventLabel":["macro",30],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":101
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Article",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":"You May Also Lke",
      "vtp_eventLabel":["template",["macro",53],"_",["macro",54]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":102
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Sort",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":["template",["macro",55],"_",["macro",56]],
      "vtp_eventLabel":["macro",57],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":109
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Filter",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":["template",["macro",58],"_",["macro",59]],
      "vtp_eventLabel":["macro",57],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":111
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"formula comparison",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":"Shop Now",
      "vtp_eventLabel":["macro",42],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":112
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":113
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value","\/cart\/sign-in\/create-an-account"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":114
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",33],
      "vtp_fieldsToSet":["list",["map","fieldName","transport","value","beacon"]],
      "vtp_eventCategory":"Internal marketing",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":["template","click -",["macro",34]],
      "vtp_eventLabel":["macro",35],
      "vtp_dimension":["list",["map","index","11","dimension",["macro",36]],["map","index","12","dimension",["macro",60]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":115
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",61],
      "vtp_eventCategory":"Video",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":["macro",62],
      "vtp_eventLabel":["macro",63],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":159
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",64],
      "vtp_eventCategory":"Audio",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":["macro",65],
      "vtp_eventLabel":["macro",66],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":167
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",33],
      "vtp_fieldsToSet":["list",["map","fieldName","transport","value","beacon"]],
      "vtp_eventCategory":"product card click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":["macro",57],
      "vtp_eventLabel":["macro",30],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":171
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",33],
      "vtp_fieldsToSet":["list",["map","fieldName","transport","value","beacon"]],
      "vtp_eventCategory":"product card click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":"formula finder",
      "vtp_eventLabel":["macro",30],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":172
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",33],
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",12]]],
      "vtp_eventCategory":"product card view",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":["macro",57],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":175
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":"login",
      "vtp_eventParameters":["list",["map","name","method","value",["macro",25]]],
      "vtp_measurementId":["macro",67],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":180
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_fieldsToSet":["list",["map","name","page_referrer","value",["macro",68]],["map","name","page_path","value",["macro",12]],["map","name","content_group","value",["macro",2]],["map","name","page_location","value",["macro",13]]],
      "vtp_userProperties":["list",["map","name","userID","value",["macro",3]]],
      "vtp_sendPageView":true,
      "vtp_measurementId":["macro",67],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettings":false,
      "tag_id":181
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":"sign_up",
      "vtp_eventParameters":["list",["map","name","method","value",["macro",25]]],
      "vtp_measurementId":["macro",67],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":182
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":"view_promotion",
      "vtp_eventParameters":["list",["map","name","items","value","promotions"],["map","name","promotion_id","value",["macro",36]],["map","name","promotion_name","value",["macro",35]],["map","name","creative_name","value",["macro",69]],["map","name","creative_slot","value",["macro",34]],["map","name","location_id","value",["macro",2]]],
      "vtp_measurementId":["macro",67],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":183
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":"select_promotion",
      "vtp_eventParameters":["list",["map","name","items","value","promotions"],["map","name","promotion_id","value",["macro",36]],["map","name","promotion_name","value",["macro",35]],["map","name","creative_slot","value",["macro",34]],["map","name","location_id","value",["macro",2]],["map","name","creative_name","value",["macro",69]]],
      "vtp_measurementId":["macro",67],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":184
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":"view_item_list",
      "vtp_eventParameters":["list",["map","name","items","value",["macro",50]],["map","name","item_list_name","value",["macro",57]],["map","name","item_name","value",["macro",30]]],
      "vtp_measurementId":["macro",67],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":185
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":"select_item",
      "vtp_eventParameters":["list",["map","name","items","value",["macro",50]],["map","name","item_list_name","value",["macro",57]],["map","name","item_name","value",["macro",30]]],
      "vtp_measurementId":["macro",67],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":186
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":"generate_lead",
      "vtp_eventParameters":["list",["map","name","value","value",""],["map","name","currency","value",""],["map","name","form_name","value",["macro",31]]],
      "vtp_measurementId":["macro",67],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":188
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":"begin_checkout",
      "vtp_eventParameters":["list",["map","name","coupon","value",""],["map","name","currency","value",["macro",49]],["map","name","items","value",["macro",50]],["map","name","value","value",["macro",72]]],
      "vtp_measurementId":["macro",67],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":189
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":"purchase",
      "vtp_eventParameters":["list",["map","name","affiliation","value",""],["map","name","coupon","value",["macro",47]],["map","name","currency","value",["macro",49]],["map","name","items","value",["macro",50]],["map","name","transaction_id","value",["macro",4]],["map","name","shipping","value",["macro",46]],["map","name","tax","value",["macro",45]],["map","name","shipping_tier","value",["macro",21]],["map","name","payment_tier","value",["macro",22]],["map","name","checkout_method","value",["macro",74]],["map","name","checkout_user_type","value",["macro",75]],["map","name","value","value",["macro",5]]],
      "vtp_measurementId":["macro",67],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":192
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":"add_to_cart",
      "vtp_eventParameters":["list",["map","name","currency","value","USD"],["map","name","items","value",["macro",50]],["map","name","value","value",["macro",76]],["map","name","item_name","value",["macro",30]]],
      "vtp_measurementId":["macro",67],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":193
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":"view_cart",
      "vtp_eventParameters":["list",["map","name","currency","value",["macro",49]],["map","name","items","value",["macro",77]],["map","name","value","value",["macro",76]]],
      "vtp_measurementId":["macro",67],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":196
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":"view_item",
      "vtp_eventParameters":["list",["map","name","currency","value","USD"],["map","name","items","value",["macro",50]],["map","name","item_name","value",["macro",30]]],
      "vtp_measurementId":["macro",67],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":197
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":"view_item_list",
      "vtp_eventParameters":["list",["map","name","items","value",["macro",50]],["map","name","item_list_name","value",["macro",78]],["map","name","item_name","value",["macro",30]]],
      "vtp_measurementId":["macro",67],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":220
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":"select_item",
      "vtp_eventParameters":["list",["map","name","items","value",["macro",50]],["map","name","item_list_name","value",["macro",57]],["map","name","item_name","value",["macro",30]]],
      "vtp_measurementId":["macro",67],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":222
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",80],
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_eventCategory":"ReCharge Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",81],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",82],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":254
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",80],
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_eventCategory":"ReCharge Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",81],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",82],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":255
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Saving Tip Learn More Link",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":"Saving Tip Learn More Link Clicked",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":258
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Optimize360",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":"CTA - Why Enfamil",
      "vtp_eventLabel":["macro",84],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":261
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Optimize360",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":"CTA - Baby Formula Coupons",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":264
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Featured Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":266
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"join EFB Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":270
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Enrollment Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":["macro",86],
      "vtp_eventLabel":["template","Clicked on ",["macro",87]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":272
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Enfamil NeuroPro Offer",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":"Form Submission",
      "vtp_eventLabel":["macro",89],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":282
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"D2C Promo Banner Live Event Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":287
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"PLP to PDP Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":["template","Click on ",["macro",90]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":297
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"April Flash Sale Banner Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":["template","Click on ",["macro",87]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":316
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Add to Calendar Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":["macro",90],
      "vtp_eventLabel":["template","Clicked on ",["macro",87]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":327
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Add to Calendar Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":["macro",90],
      "vtp_eventLabel":["template","Clicked on ",["macro",87]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":329
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-WR7DKSX","nickname","Enfamil Media Container"]],
      "vtp_boundaries":["list"],
      "vtp_enableTypeRestrictions":false,
      "tag_id":337
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,100",
      "vtp_verticalThresholdOn":true,
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"31802580_25",
      "vtp_enableTriggerStartOption":true,
      "tag_id":338
    },{
      "function":"__hl",
      "tag_id":339
    },{
      "function":"__cl",
      "tag_id":340
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"31802580_260",
      "tag_id":341
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"31802580_263",
      "tag_id":342
    },{
      "function":"__cl",
      "tag_id":343
    },{
      "function":"__cl",
      "tag_id":344
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"31802580_273",
      "tag_id":345
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"31802580_283",
      "tag_id":346
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"31802580_288",
      "tag_id":347
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"31802580_296",
      "tag_id":348
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"31802580_298",
      "tag_id":349
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"31802580_315",
      "tag_id":350
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"31802580_323",
      "tag_id":351
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"31802580_326",
      "tag_id":352
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"31802580_328",
      "tag_id":353
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E",["escape",["macro",91],8,16],"();",["escape",["macro",92],8,16],"();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":165
    },{
      "function":"__html",
      "metadata":["map"],
      "unlimited":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/siteimproveanalytics.com\/js\/siteanalyze_796539.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":244
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"https:\/\/cdn.gamitee.io\/js\/dist\/en.bundle.js?external-id=",["escape",["macro",15],12],"\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":292
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar transactionId=\"",["escape",["macro",4],7],"\",value=\"",["escape",["macro",5],7],"\",productId=\"",["escape",["macro",93],7],"\",externalId=\"",["escape",["macro",15],7],"\",analyticsData=JSON.parse(localStorage.getItem(\"gamitee-analytics-data\"));if(analyticsData){var req=new XMLHttpRequest;req.open(\"POST\",\"https:\/\/analytics.gamitee.io\/report-transaction\");req.setRequestHeader(\"Content-Type\",\"application\/json\");req.send(JSON.stringify({analyticsData:analyticsData,transactionId:transactionId,value:value,productId:productId}))};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":293
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"optimize.activate\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":336
    },{
      "function":"__opt",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_optimizeContainerId":"GTM-PBPF8MF",
      "vtp_gaSettings":["macro",28],
      "vtp_trackingId":"UA-39342352-1",
      "tag_id":233
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"(^$|((^|,)31802580_25($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"compareStart"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"leadFormStep"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"leadFormCompletion"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"signinPopIn"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"eePromoView"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"removeFromCart"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"formulaCalculatorStep"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"accountLogin"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"formulaFinderStep"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"eeListViewFormulaFinder"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"eeListClickArticle"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"addToComparison"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"formulaFinderChatOpen"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"pushState"
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"efb|short\\-form"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.historyChange-v2"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"efb"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"1|2|3"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"short-form"
    },{
      "function":"_cn",
      "arg0":["macro",32],
      "arg1":"1"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"addToCart"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"RecommendedArticles"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"applySort"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"applyFilter"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"formulaComparisonShopNow"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"createAnAccountPopIn"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"eePromoClick"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"videoEvent"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"audioEvent"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"eeListClickProduct"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"eeListClickFormulaFinder"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"eeListViewProduct"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"virtualPageview"
    },{
      "function":"_cn",
      "arg0":["macro",70],
      "arg1":"eeCheckout"
    },{
      "function":"_cn",
      "arg0":["macro",71],
      "arg1":"1"
    },{
      "function":"_re",
      "arg0":["macro",73],
      "arg1":"\/checkouts\/.+\/thank_you"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.load"
    },{
      "function":"_cn",
      "arg0":["macro",73],
      "arg1":"\/cart"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"product detail"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"rc_rechargeCheckout"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"rc_rechargeTransaction"
    },{
      "function":"_css",
      "arg0":["macro",83],
      "arg1":"span.nav-main-link a strong"
    },{
      "function":"_cn",
      "arg0":["macro",73],
      "arg1":"www.enfamil.com\/products\/"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",84],
      "arg1":"\/why-enfamil\/enfamil-formula-family\/"
    },{
      "function":"_eq",
      "arg0":["macro",85],
      "arg1":"See Our Formulas"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"(^$|((^|,)31802580_260($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",84],
      "arg1":"https:\/\/www.enfamil.com\/baby-formula-coupons-samples\/|https:\/\/www.enfamil.com\/baby-formula-coupons-samples"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"(^$|((^|,)31802580_263($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",83],
      "arg1":"a.product-recommendation.link, a.product-recommendation.link, *"
    },{
      "function":"_re",
      "arg0":["macro",73],
      "arg1":"www.enfamil.com\/articles\/baby-feeding-timeline\/|www.enfamil.com\/articles\/signs-of-a-hungry-baby\/|www.enfamil.com\/articles\/help-ease-babys-gas-everyday-tips\/|www.enfamil.com\/articles\/how-stop-crying-baby-why-babies-cry-night\/|www.enfamil.com\/articles\/how-prevent-baby-spitting-up"
    },{
      "function":"_css",
      "arg0":["macro",83],
      "arg1":"a.joinEFB, a.joinEFB *"
    },{
      "function":"_re",
      "arg0":["macro",73],
      "arg1":"www.enfamil.com\/articles\/home-sweet-hospital-packing-checklist|www.enfamil.com\/articles\/encouraging-next-steps-7-9-months\/|www.enfamil.com\/articles\/pregnancy-swelling-how-relieve-puffiness\/|www.enfamil.com\/articles\/sleep-training-your-baby\/|www.enfamil.com\/articles\/four-labor-exercises-help-ease-labor\/|www.enfamil.com\/articles\/foods-avoid-while-pregnant-or-nursing\/"
    },{
      "function":"_cn",
      "arg0":["macro",84],
      "arg1":"\/enrollment\/"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"(^$|((^|,)31802580_273($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",88],
      "arg1":"consumer-form__form form--disabled"
    },{
      "function":"_cn",
      "arg0":["macro",87],
      "arg1":"\/enfamil-neuropro-offer\/"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"(^$|((^|,)31802580_283($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",84],
      "arg1":"https:\/\/shop.livescale.tv\/fuelthewonder\/"
    },{
      "function":"_eq",
      "arg0":["macro",89],
      "arg1":"Enfamil Live Event"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"(^$|((^|,)31802580_288($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",90],
      "arg1":"product-item__link"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"(^$|((^|,)31802580_296($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",90],
      "arg1":"product-item__shop-now"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"(^$|((^|,)31802580_298($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",83],
      "arg1":"div.content-grid__row.page-banner.page-banner--shorttext.page-banner--darkbg.content-grid--full-width a.image-as-link__link.link"
    },{
      "function":"_eq",
      "arg0":["macro",84],
      "arg1":"https:\/\/www.enfamil.com\/products\/subscribe-and-save\/"
    },{
      "function":"_eq",
      "arg0":["macro",87],
      "arg1":"\/"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"(^$|((^|,)31802580_315($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",87],
      "arg1":"\/products\/"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"(^$|((^|,)31802580_323($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",90],
      "arg1":"carousel-item__btn secondary link"
    },{
      "function":"_cn",
      "arg0":["macro",73],
      "arg1":"mothers-day-sale"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"(^$|((^|,)31802580_326($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",90],
      "arg1":"carousel-item__btn link"
    },{
      "function":"_eq",
      "arg0":["macro",73],
      "arg1":"https:\/\/www.enfamil.com\/products\/"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"(^$|((^|,)31802580_328($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.historyChange"
    }],
  "rules":[
    [["if",0,1],["add",1]],
    [["if",2],["add",2]],
    [["if",3],["add",3]],
    [["if",4],["add",4,35,20,30]],
    [["if",5],["add",5,0]],
    [["if",6],["add",6,31]],
    [["if",7],["add",7]],
    [["if",8],["add",8]],
    [["if",9],["add",9,28]],
    [["if",10],["add",10]],
    [["if",11],["add",11,41]],
    [["if",12],["add",12]],
    [["if",13],["add",13]],
    [["if",14],["add",14]],
    [["if",15],["add",0,29,57,74,78,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73]],
    [["if",16,18],["unless",17],["add",0,29]],
    [["if",3,19,20],["add",0,29]],
    [["if",3,21,22],["add",0,29]],
    [["if",23],["add",15,38]],
    [["if",24],["add",16]],
    [["if",25],["add",17]],
    [["if",26],["add",18]],
    [["if",27],["add",19]],
    [["if",28],["add",21]],
    [["if",29],["add",22,32]],
    [["if",30],["add",23]],
    [["if",31],["add",24]],
    [["if",32],["add",25,34]],
    [["if",33],["add",26,42]],
    [["if",34],["add",27,33]],
    [["if",35],["add",29]],
    [["if",15,36,37],["add",36]],
    [["if",38,39],["add",37,77],["block",76]],
    [["if",15,40],["add",39]],
    [["if",15,41],["add",40]],
    [["if",42],["add",43]],
    [["if",43],["add",44]],
    [["if",44,45,46],["add",45]],
    [["if",47,48,49,50],["add",46]],
    [["if",49,51,52],["add",47]],
    [["if",46,53,54],["add",48]],
    [["if",46,55,56],["add",49]],
    [["if",49,57,58],["add",50]],
    [["if",59,60,61,62],["add",51]],
    [["if",49,63,64,65],["add",52]],
    [["if",49,66,67],["add",53]],
    [["if",49,68,69],["add",53]],
    [["if",49,70,71,72,73],["add",54]],
    [["if",49,70,71,74,75],["add",54]],
    [["if",49,76,77,78],["add",55]],
    [["if",49,79,80,81],["add",56]],
    [["if",82],["add",75]],
    [["if",39],["add",76]],
    [["if",83],["add",78]]]
},
"runtime":[]




};

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var g,aa=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ca=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}},ea="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;
if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ia;a:{var ja={a:!0},ka={};try{ka.__proto__=ja;ia=ka.a;break a}catch(a){}ia=!1}fa=ia?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var la=fa,na=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ri=b.prototype},oa=this||self,pa=function(a){return a};var qa={},ra=function(a,b){qa[a]=qa[a]||[];qa[a][b]=!0},sa=function(a){for(var b=[],c=qa[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var ta=function(){},ua=function(a){return"function"==typeof a},m=function(a){return"string"==typeof a},va=function(a){return"number"==typeof a&&!isNaN(a)},wa=function(a){var b="[object Array]"==Object.prototype.toString.call(Object(a));Array.isArray?Array.isArray(a)!==b&&ra("TAGGING",4):ra("TAGGING",5);return b},Ba=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Da=function(a,b){if(a&&wa(a))for(var c=
0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ea=function(a,b){if(!va(a)||!va(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ha=function(a,b){for(var c=new Ga,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ia=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ka=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},La=
function(a){return Math.round(Number(a))||0},Ma=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Na=function(a){var b=[];if(wa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Oa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Qa=function(){return(new Date).getTime()},Ga=function(){this.prefix="gtm.";this.values={}};Ga.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ga.prototype.get=function(a){return this.values[this.prefix+a]};
var Ua=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Va=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},Xa=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Za=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},$a=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},ab=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},bb=/^\w{1,9}$/,
cb=function(a){var b=[];Ia(a,function(c,d){bb.test(c)&&d&&b.push(c)});return b.join(",")};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var db=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,fb=function(a){if(null==a)return String(a);var b=db.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},hb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},ib=function(a){if(!a||"object"!=fb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!hb(a,"constructor")&&!hb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||hb(a,b)},B=function(a,b){var c=b||("array"==fb(a)?[]:{}),d;for(d in a)if(hb(a,d)){var e=a[d];"array"==fb(e)?("array"!=fb(c[d])&&(c[d]=[]),c[d]=B(e,c[d])):ib(e)?(ib(c[d])||(c[d]={}),c[d]=B(e,c[d])):c[d]=e}return c};var jb=function(a){if(void 0===a||wa(a)||ib(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var kb=function(){var a=function(b){return{toString:function(){return b}}};return{Sf:a("consent"),Tf:a("consent_always_fire"),de:a("convert_case_to"),ee:a("convert_false_to"),fe:a("convert_null_to"),he:a("convert_true_to"),ie:a("convert_undefined_to"),Zh:a("debug_mode_metadata"),Ta:a("function"),Fg:a("instance_name"),Hg:a("live_only"),Ig:a("malware_disabled"),Jg:a("metadata"),bi:a("original_activity_id"),ci:a("original_vendor_template_id"),Lg:a("once_per_event"),Xe:a("once_per_load"),ei:a("priority_override"),
fi:a("respected_consent_types"),df:a("setup_tags"),ef:a("tag_id"),ff:a("teardown_tags")}}();
var lb=[],mb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},nb=function(a){return mb[a]},ob=/[\x00\x22\x26\x27\x3c\x3e]/g;var sb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,ub={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},vb=function(a){return ub[a]};lb[7]=function(a){return String(a).replace(sb,vb)};
lb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(sb,vb)+"'"}};var Fb=/['()]/g,Gb=function(a){return"%"+a.charCodeAt(0).toString(16)};lb[12]=function(a){var b=
encodeURIComponent(String(a));Fb.lastIndex=0;return Fb.test(b)?b.replace(Fb,Gb):b};var Hb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Jb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Kb=function(a){return Jb[a]};lb[16]=function(a){return a};var Mb;
var Nb=[],Ob=[],Pb=[],Qb=[],Rb=[],Sb={},Tb,Ub,Vb,Wb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Sb[c],e={},f;for(f in a)if(a.hasOwnProperty(f))if(0===f.indexOf("vtp_"))d&&b&&b.nf&&b.nf(a[f]),e[void 0!==d?f:f.substr(4)]=a[f];else if(f===kb.Tf.toString()&&a[f]){}
d&&b&&b.lf&&(e.vtp_gtmCachedValues=b.lf);return void 0!==d?d(e):Mb(c,e,b)},Yb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Xb(a[e],b,c));return d},Xb=function(a,b,c){if(wa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Xb(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=Nb[f];if(!h||b.Jd(h))return;c[f]=!0;try{var k=Yb(h,b,c);k.vtp_gtmEventId=b.id;
d=Wb(k,b);Vb&&(d=Vb.Zg(d,k))}catch(z){b.Af&&b.Af(z,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Xb(a[l],b,c)]=Xb(a[l+1],b,c);return d;case "template":d=[];for(var n=!1,p=1;p<a.length;p++){var q=Xb(a[p],b,c);Ub&&(n=n||q===Ub.sc);d.push(q)}return Ub&&n?Ub.bh(d):d.join("");case "escape":d=Xb(a[1],b,c);if(Ub&&wa(a[1])&&"macro"===a[1][0]&&Ub.uh(a))return Ub.Ih(d);d=String(d);for(var r=2;r<a.length;r++)lb[a[r]]&&(d=lb[a[r]](d));return d;case "tag":var t=a[1];if(!Qb[t])throw Error("Unable to resolve tag reference "+
t+".");return d={vf:a[2],index:t};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=Zb(u,b,c),x=!!a[4];return x||2!==v?x!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Zb=function(a,b,c){try{return Tb(Yb(a,b,c))}catch(d){JSON.stringify(a)}return 2};var bc=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}for(var c=[],d=[],e=$b(a),f=0;f<Ob.length;f++){var h=Ob[f],k=ac(h,e);if(k){for(var l=h.add||[],n=0;n<l.length;n++)c[l[n]]=!0;b(h.block||[])}else null===k&&b(h.block||[]);}for(var p=[],q=0;q<Qb.length;q++)c[q]&&!d[q]&&(p[q]=!0);return p},ac=function(a,b){for(var c=a["if"]||[],d=0;d<c.length;d++){var e=b(c[d]);if(0===e)return!1;if(2===e)return null}for(var f=
a.unless||[],h=0;h<f.length;h++){var k=b(f[h]);if(2===k)return null;if(1===k)return!1}return!0},$b=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Zb(Pb[c],a));return b[c]}};var cc={Zg:function(a,b){b[kb.de]&&"string"===typeof a&&(a=1==b[kb.de]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(kb.fe)&&null===a&&(a=b[kb.fe]);b.hasOwnProperty(kb.ie)&&void 0===a&&(a=b[kb.ie]);b.hasOwnProperty(kb.he)&&!0===a&&(a=b[kb.he]);b.hasOwnProperty(kb.ee)&&!1===a&&(a=b[kb.ee]);return a}};var E={Hb:"_ee",yc:"_syn_or_mod",gi:"_uei",md:"_eu",di:"_pci",$c:"event_callback",ic:"event_timeout",fa:"gtag.config",za:"gtag.get",oa:"purchase",ib:"refund",Oa:"begin_checkout",fb:"add_to_cart",hb:"remove_from_cart",bg:"view_cart",ne:"add_to_wishlist",ya:"view_item",me:"view_promotion",ke:"select_promotion",Vc:"select_item",bc:"view_item_list",je:"add_payment_info",ag:"add_shipping_info",Ka:"value_key",Ja:"value_callback",qa:"allow_ad_personalization_signals",mc:"restricted_data_processing",Ab:"allow_google_signals",
ra:"cookie_expires",Bb:"cookie_update",Fb:"session_duration",nc:"session_engaged_time",Ca:"user_properties",Ba:"transport_url",O:"ads_data_redaction",ld:"user_data",Cb:"first_party_collection",B:"ad_storage",D:"analytics_storage",be:"region",ce:"wait_for_update",Qa:"conversion_linker",Pa:"conversion_cookie_prefix",ja:"value",ba:"currency",Ne:"trip_type",W:"items",He:"passengers"};E.Qe=[E.oa,E.ib,E.Oa,E.fb,E.hb,E.bg,E.ne,E.ya,E.me,E.ke,E.bc,E.Vc,E.je,E.ag];
E.Pe=[E.qa,E.Ab,E.Bb];E.Re=[E.ra,E.ic,E.Fb,E.nc];var Bc=function(a){ra("GTM",a)};var Cc=function(a,b){this.m=a;this.defaultValue=void 0===b?!1:b};var Dc=new Cc(1936,!0),Ec=new Cc(1933);var Fc=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Gc=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Hc,Ic=function(){if(void 0===Hc){var a=null,b=oa.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:pa,createScript:pa,createScriptURL:pa})}catch(c){oa.console&&oa.console.error(c.message)}Hc=a}else Hc=a}return Hc};var Kc=function(a,b){this.m=b===Jc?a:""};Kc.prototype.toString=function(){return this.m+""};var Jc={};var Lc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Mc;a:{var Tc=oa.navigator;if(Tc){var Uc=Tc.userAgent;if(Uc){Mc=Uc;break a}}Mc=""}var Vc=function(a){return-1!=Mc.indexOf(a)};var Xc=function(a,b,c){this.m=c===Wc?a:""};Xc.prototype.toString=function(){return this.m.toString()};var Yc=function(a){return a instanceof Xc&&a.constructor===Xc?a.m:"type_error:SafeHtml"},Wc={},Zc=function(a){var b=Ic(),c=b?b.createHTML(a):a;return new Xc(c,null,Wc)},$c=new Xc(oa.trustedTypes&&oa.trustedTypes.emptyHTML||"",0,Wc);var ad=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);var c=a.firstChild.firstChild;a.innerHTML=Yc($c);return!c.parentElement}),bd=function(a,b){if(ad())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Yc(b)},cd=null,dd=/^[\w+/_-]+[=]{0,2}$/,ed=function(a){if(!a.querySelector)return"";var b=a.querySelector("script[nonce]");if(b){var c=
b.nonce||b.getAttribute("nonce");if(c&&dd.test(c))return c}return""};var G=window,I=document,fd=navigator,gd=I.currentScript&&I.currentScript.src,hd=function(a,b){var c=G[a];G[a]=void 0===c?b:c;return G[a]},id=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},jd=function(a,b,c){var d=I.createElement("script");d.type="text/javascript";d.async=!0;var e,f=Ic(),h=f?f.createScriptURL(a):a;e=new Kc(h,Jc);d.src=e instanceof Kc&&e.constructor===Kc?e.m:"type_error:TrustedResourceUrl";
var k;var l=d.ownerDocument&&d.ownerDocument.defaultView;l&&l!=oa?k=ed(l.document):(null===cd&&(cd=ed(oa.document)),k=cd);var n=k;n&&d.setAttribute("nonce",n);id(d,b);c&&(d.onerror=c);var p=I.getElementsByTagName("script")[0]||I.body||I.head;p.parentNode.insertBefore(d,p);return d},kd=function(){if(gd){var a=gd.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},ld=function(a,b){var c=I.createElement("iframe");c.height="0";c.width="0";c.style.display=
"none";c.style.visibility="hidden";var d=I.body&&I.body.lastChild||I.body||I.head;d.parentNode.insertBefore(c,d);id(c,b);void 0!==a&&(c.src=a);return c},md=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},nd=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},od=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+
b,c)},J=function(a){G.setTimeout(a,0)},sd=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},td=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},ud=function(a){var b=I.createElement("div"),c=Zc("A<div>"+a+"</div>");bd(b,c);b=b.lastChild;for(var d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},vd=function(a,b,c){c=c||100;for(var d={},e=0;e<
b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},wd=function(a){fd.sendBeacon&&fd.sendBeacon(a)||md(a)},xd=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var yd=function(){var a={};this.m=function(b,c){return null!=a[b]?a[b]:c};this.o=function(){a[Ec.m]=!0}};yd.m=void 0;yd.o=function(){return yd.m?yd.m:yd.m=new yd};var zd=function(a){return yd.o().m(a.m,a.defaultValue)};var Ad=[];function Bd(){var a=hd("google_tag_data",{});a.ics||(a.ics={entries:{},set:Cd,update:Dd,addListener:Ed,notifyListeners:Fd,active:!1,usedDefault:!1});return a.ics}
function Cd(a,b,c,d,e,f){var h=Bd();h.active=!0;h.usedDefault=!0;if(void 0!=b){var k=h.entries,l=k[a]||{},n=l.region,p=c&&m(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(""===d||p===e||(p===d?n!==e:!p&&!n)){var q=!!(f&&0<f&&void 0===l.update),r={region:p,initial:"granted"===b,update:l.update,quiet:q};if(""!==d||!1!==l.initial)k[a]=r;q&&G.setTimeout(function(){k[a]===r&&r.quiet&&(r.quiet=!1,Gd(a),Fd(),ra("TAGGING",2))},f)}}}
function Dd(a,b){var c=Bd();c.active=!0;if(void 0!=b){var d=Hd(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var h=Hd(a);f.quiet?(f.quiet=!1,Gd(a)):h!==d&&Gd(a)}}function Ed(a,b){Ad.push({zd:a,kh:b})}function Gd(a){for(var b=0;b<Ad.length;++b){var c=Ad[b];wa(c.zd)&&-1!==c.zd.indexOf(a)&&(c.Df=!0)}}function Fd(a){for(var b=0;b<Ad.length;++b){var c=Ad[b];if(c.Df){c.Df=!1;try{c.kh({pf:a})}catch(d){}}}}
var Hd=function(a){var b=Bd().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},Id=function(a){return(Bd().entries[a]||{}).initial},Jd=function(a){return!(Bd().entries[a]||{}).quiet},Kd=function(){return zd(Ec)?Bd().active:!1},Ld=function(){return Bd().usedDefault},Md=function(a,b){Bd().addListener(a,b)},Nd=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!Jd(b[e]))return!0;return!1}if(c()){var d=!1;Md(b,function(e){d||c()||(d=!0,a(e))})}else a({})},Od=
function(a,b){function c(){for(var f=[],h=0;h<d.length;h++){var k=d[h];!1===Hd(k)||e[k]||(f.push(k),e[k]=!0)}return f}var d=m(b)?[b]:b,e={};c().length!==d.length&&Md(d,function(f){var h=c();0<h.length&&(f.zd=h,a(f))})};function Pd(a){for(var b=[],c=0;c<Qd.length;c++){var d=a(Qd[c]);b[c]=!0===d?"1":!1===d?"0":"-"}return b.join("")}
var Qd=[E.B,E.D],Rd=function(a){var b=a[E.be];b&&Bc(40);var c=a[E.ce];c&&Bc(41);for(var d=wa(b)?b:[b],e=0;e<d.length;++e)for(var f in a)if(a.hasOwnProperty(f)&&f!==E.be&&f!==E.ce)if(-1<Ba(Qd,f)){var h=f,k=a[f],l=d[e];Bd().set(h,k,l,"US","US-CA",c)}else{}},Sd=function(a,
b){for(var c in a)if(a.hasOwnProperty(c))if(-1<Ba(Qd,c)){var d=c,e=a[c];Bd().update(d,e)}else{}Bd().notifyListeners(b)},N=function(a){var b=Hd(a);return void 0!=b?b:!0},Td=function(){return"G1"+Pd(Hd)},Ud=function(a,b){Od(a,b)},Vd=function(a,b){Nd(a,b)};var Xd=function(a){return Wd?I.querySelectorAll(a):null},Yd=function(a,b){if(!Wd)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!I.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Zd=!1;if(I.querySelectorAll)try{var $d=I.querySelectorAll(":root");$d&&1==$d.length&&$d[0]==I.documentElement&&(Zd=!0)}catch(a){}var Wd=Zd;var ae=function(a){if(I.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!G.getComputedStyle)return!0;var c=G.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-1)),f=Math.min(h,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=G.getComputedStyle(d,
null))}return!1};
var be=function(){var a=I.body,b=I.documentElement||a&&a.parentElement,c,d;if(I.compatMode&&"BackCompat"!==I.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,h){return f&&h?Math.min(f,h):Math.max(f,h)};Bc(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},ce=function(a){var b=be(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,h=e.right-e.left;return f&&h?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var je=/:[0-9]+$/,ke=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},ne=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=le(a.protocol)||le(G.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:G.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||G.location.hostname).replace(je,"").toLowerCase());return me(a,b,c,d,e)},me=function(a,b,c,d,e){var f,h=le(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=qe(a);break;case "protocol":f=h;break;case "host":f=a.hostname.replace(je,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==h?80:"https"==h?443:""));break;case "path":a.pathname||a.hostname||ra("TAGGING",
1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Ba(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=ke(f,e,void 0));break;case "extension":var n=a.pathname.split(".");f=1<n.length?n[n.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},le=function(a){return a?a.replace(":","").toLowerCase():""},qe=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");
b=0>c?a.href:a.href.substr(0,c)}return b},re=function(a){var b=I.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||ra("TAGGING",1),c="/"+c);var d=b.hostname.replace(je,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},se=function(a){function b(n){var p=n.split("=")[0];return 0>d.indexOf(p)?n:p+"=0"}function c(n){return n.split("&").map(b).filter(function(p){return void 0!=p}).join("&")}var d="gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
e=re(a),f=a.split(/[?#]/)[0],h=e.search,k=e.hash;"?"===h[0]&&(h=h.substring(1));"#"===k[0]&&(k=k.substring(1));h=c(h);k=c(k);""!==h&&(h="?"+h);""!==k&&(k="#"+k);var l=""+f+h+k;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var te=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),ue=new RegExp(/@(gmail|googlemail)\./i),ve=new RegExp(/support|noreply/i),we="SCRIPT STYLE IMG SVG PATH BR".split(" "),xe=["BR"];function ye(a){var b;if(a===I.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var h=0;h<f.childElementCount;h++)if(f.children[h]===a){e=h+1;break a}e=-1}else e=1}d=ye(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
function ze(a,b){if(1>=a.length)return a;var c=a.filter(b);return 0==c.length?a:c}function Ae(a){if(0==a.length)return null;var b;b=ze(a,function(c){return!ve.test(c.wb)});b=ze(b,function(c){return"INPUT"===c.element.tagName.toUpperCase()});b=ze(b,function(c){return!ae(c.element)});return b[0]}
var Be=function(){var a;var b=[],c=I.body;if(c){for(var d=c.querySelectorAll("*"),e=0;e<d.length&&1E4>e;e++){var f=d[e];if(!(0<=we.indexOf(f.tagName.toUpperCase()))){for(var h=!1,k=0;k<f.childElementCount&&1E4>k;k++)if(!(0<=xe.indexOf(f.children[k].tagName.toUpperCase()))){h=!0;break}h||b.push(f)}}a={elements:b,status:1E4<d.length?"2":"1"}}else a={elements:b,status:"4"};for(var l=a,n=l.elements,p=[],q=0;q<n.length;q++){var r=n[q],t=r.textContent;r.value&&(t=r.value);if(t){var u=t.match(te);if(u){var v=
u[0],x;if(G.location){var z=me(G.location,"host",!0);x=0<=v.toLowerCase().indexOf(z)}else x=!1;x||p.push({element:r,wb:v})}}}var w=Ae(p),y=[];if(w){var A=w.element,C={wb:w.wb,tagName:A.tagName,type:1};C.querySelector=ye(A);C.isVisible=!ae(A);y.push(C)}return{elements:y,status:10<p.length?"3":l.status}},Ce=function(a){return a.tagName+":"+a.isVisible+":"+a.wb.length+":"+ue.test(a.wb)};var Qe={},O=null,Re=Math.random();Qe.K="GTM-P3QGG32";Qe.xc="5c1";Qe.ai="";Qe.Vf="ChEI8KiIhQYQouTQvM2llbz/ARIkAITFpn9DqLBK6gzIXCQX4k5qhpoDNjTmXoo5eqIOF2R9+hWYGgLtFA\x3d\x3d";var Se={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Te={__paused:!0,__tg:!0},Ue;for(Ue in Se)Se.hasOwnProperty(Ue)&&(Te[Ue]=!0);var Ve="www.googletagmanager.com/gtm.js";
var We=Ve,Xe=Ma(""),Ye=null,Ze=null,$e="//www.googletagmanager.com/a?id="+Qe.K+"&cv=90",af={},bf={},cf=function(){var a=O.sequence||1;O.sequence=a+1;return a};Qe.Uf="";var df={},ef=new Ga,ff={},gf={},kf={name:"dataLayer",set:function(a,b){B(ab(a,b),ff);hf()},get:function(a){return jf(a,2)},reset:function(){ef=new Ga;ff={};hf()}},jf=function(a,b){return 2!=b?ef.get(a):lf(a)},lf=function(a){var b,c=a.split(".");b=b||[];for(var d=ff,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==Ba(b,d))return}return d},mf=function(a,b){gf.hasOwnProperty(a)||(ef.set(a,b),B(ab(a,b),ff),hf())},hf=function(a){Ia(gf,function(b,c){ef.set(b,c);B(ab(b,
void 0),ff);B(ab(b,c),ff);a&&delete gf[b]})},of=function(a,b,c){df[a]=df[a]||{};df[a][b]=nf(b,c)},nf=function(a,b){var c,d=1!==(void 0===b?2:b)?lf(a):ef.get(a);"array"===fb(d)||"object"===fb(d)?c=B(d):c=d;return c},pf=function(a,b){if(df[a])return df[a][b]},qf=function(a,b){df[a]&&delete df[a][b]};var tf={},uf=function(a,b){if(G._gtmexpgrp&&G._gtmexpgrp.hasOwnProperty(a))return G._gtmexpgrp[a];void 0===tf[a]&&(tf[a]=Math.floor(Math.random()*b));return tf[a]};var vf=function(a){var b=1,c,d,e;if(a)for(b=0,d=a.length-1;0<=d;d--)e=a.charCodeAt(d),b=(b<<6&268435455)+e+(e<<14),c=b&266338304,b=0!=c?b^c>>21:b;return b};function wf(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};function xf(a){return"null"!==a.origin};var Af=function(a,b,c,d){return yf(d)?wf(a,String(b||zf()),c):[]},Df=function(a,b,c,d,e){if(yf(e)){var f=Bf(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Cf(f,function(h){return h.Fc},b);if(1===f.length)return f[0].id;f=Cf(f,function(h){return h.Sb},c);return f[0]?f[0].id:void 0}}};function Ef(a,b,c,d){var e=zf(),f=window;xf(f)&&(f.document.cookie=a);var h=zf();return e!=h||void 0!=c&&0<=Af(b,h,!1,d).indexOf(c)}
var If=function(a,b,c){function d(t,u,v){if(null==v)return delete h[u],t;h[u]=v;return t+"; "+u+"="+v}function e(t,u){if(null==u)return delete h[u],t;h[u]=!0;return t+"; "+u}if(!yf(c.Ha))return 2;var f;void 0==b?f=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Ff(b),f=a+"="+b);var h={};f=d(f,"path",c.path);var k;c.expires instanceof Date?k=c.expires.toUTCString():null!=c.expires&&(k=""+c.expires);f=d(f,"expires",k);f=d(f,"max-age",c.mi);f=d(f,"samesite",
c.ni);c.oi&&(f=e(f,"secure"));var l=c.domain;if("auto"===l){for(var n=Gf(),p=0;p<n.length;++p){var q="none"!==n[p]?n[p]:void 0,r=d(f,"domain",q);r=e(r,c.flags);if(!Hf(q,c.path)&&Ef(r,a,b,c.Ha))return 0}return 1}l&&"none"!==l&&(f=d(f,"domain",l));f=e(f,c.flags);return Hf(l,c.path)?1:Ef(f,a,b,c.Ha)?0:1},Jf=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return If(a,b,c)};
function Cf(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function Bf(a,b,c){for(var d=[],e=Af(a,void 0,void 0,c),f=0;f<e.length;f++){var h=e[f].split("."),k=h.shift();if(!b||-1!==b.indexOf(k)){var l=h.shift();l&&(l=l.split("-"),d.push({id:h.join("."),Fc:1*l[0]||1,Sb:1*l[1]||1}))}}return d}
var Ff=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Kf=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Rf=/(^|\.)doubleclick\.net$/i,Hf=function(a,b){return Rf.test(window.document.location.hostname)||"/"===b&&Kf.test(a)},zf=function(){return xf(window)?window.document.cookie:""},Gf=function(){var a=[],b=window.document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));
var e=window.document.location.hostname;Rf.test(e)||Kf.test(e)||a.push("none");return a},yf=function(a){if(!zd(Ec)||!a||!Kd())return!0;if(!Jd(a))return!1;var b=Hd(a);return null==b?!0:!!b};var Sf=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var Tf=function(){return Vc("iPhone")&&!Vc("iPod")&&!Vc("iPad")};Vc("Opera");Vc("Trident")||Vc("MSIE");Vc("Edge");!Vc("Gecko")||-1!=Mc.toLowerCase().indexOf("webkit")&&!Vc("Edge")||Vc("Trident")||Vc("MSIE")||Vc("Edge");-1!=Mc.toLowerCase().indexOf("webkit")&&!Vc("Edge")&&Vc("Mobile");Vc("Macintosh");Vc("Windows");Vc("Linux")||Vc("CrOS");var Uf=oa.navigator||null;Uf&&(Uf.appVersion||"").indexOf("X11");Vc("Android");Tf();Vc("iPad");Vc("iPod");Tf()||Vc("iPad")||Vc("iPod");Mc.toLowerCase().indexOf("kaios");var Vf=function(){if(!G.crypto)return Math.random();try{var a=new Uint32Array(1);G.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}},Wf=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(k){e=!1}if(e)return c;var f;a:{try{var h=c.parent;if(h&&h!=c){f=h;break a}}catch(k){}f=null}if(!(c=f))break}return null};var Xf=function(a,b){for(var c=""+(a?"":fd.userAgent)+((xf(G)?I.cookie:null)||"")+(I.referrer||""),d=c.length,e=G.history.length;0<e;)c+=e--^d++;return[Math.round(2147483647*(b?Vf():Math.random()))^vf(c)&2147483647,Math.round(Qa()/1E3)].join(".")},$f=function(a,b,c,d,e){var f=Yf(b);return Df(a,f,Zf(c),d,e)},ag=function(a,b,c,d){var e=""+Yf(c),f=Zf(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Yf=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Zf=function(a){if(!a||
"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function bg(a,b,c){var d,e=Number(null!=a.tb?a.tb:void 0);0!==e&&(d=new Date((b||Qa())+1E3*(e||7776E3)));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var cg=["1"],dg={},hg=function(a){var b=eg(a.prefix);if(!dg[b]&&!fg(b,a.path,a.domain)){var c=Xf();if(0===gg(b,c,a)){var d=hd("google_tag_data",{});d._gcl_au?ra("GTM",57):d._gcl_au=c}fg(b,a.path,a.domain)}};function gg(a,b,c){var d=ag(b,"1",c.domain,c.path),e=bg(c);e.Ha="ad_storage";return Jf(a,d,e)}function fg(a,b,c){var d=$f(a,b,c,cg,"ad_storage");d&&(dg[a]=d);return d}function eg(a){return(a||"_gcl")+"_au"};var ig=function(a){for(var b=[],c=I.cookie.split(";"),d=new RegExp("^\\s*"+(a||"_gac")+"_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Yd:f[1],value:f[2],timestamp:Number(f[2].split(".")[1])||0})}b.sort(function(h,k){return k.timestamp-h.timestamp});return b};
function jg(a,b){var c=ig(a),d={};if(!c||!c.length)return d;for(var e=0;e<c.length;e++){var f=c[e].value.split(".");if(!("1"!==f[0]||b&&3>f.length||!b&&3!==f.length)&&Number(f[1])){d[c[e].Yd]||(d[c[e].Yd]=[]);var h={version:f[0],timestamp:1E3*Number(f[1]),ma:f[2]};b&&3<f.length&&(h.labels=f.slice(3));d[c[e].Yd].push(h)}}return d};function kg(){for(var a=lg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function mg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var lg,ng;
function og(a){function b(l){for(;d<a.length;){var n=a.charAt(d++),p=ng[n];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(n))throw Error("Unknown base64 encoding at char: "+n);}return l}lg=lg||mg();ng=ng||kg();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var pg;var tg=function(){var a=qg,b=rg,c=sg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){nd(I,"mousedown",d);nd(I,"keyup",d);nd(I,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},ug=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};sg().decorators.push(f)},vg=function(a,b,c){for(var d=sg().decorators,e={},f=0;f<d.length;++f){var h=
d[f],k;if(k=!c||h.forms)a:{var l=h.domains,n=a,p=!!h.sameHost;if(l&&(p||n!==I.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(n)){k=!0;break a}}else if(0<=n.indexOf(l[q])||p&&0<=l[q].indexOf(n)){k=!0;break a}k=!1}if(k){var r=h.placement;void 0==r&&(r=h.fragment?2:1);r===b&&Xa(e,h.callback())}}return e},sg=function(){var a=hd("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var wg=/(.*?)\*(.*?)\*(.*)/,xg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,yg=/^(?:www\.|m\.|amp\.)+/,zg=/([^?#]+)(\?[^#]*)?(#.*)?/;function Ag(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Cg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,h,k=String(d);lg=lg||mg();ng=ng||kg();for(var l=[],n=0;n<k.length;n+=3){var p=n+1<k.length,q=n+2<k.length,r=k.charCodeAt(n),t=p?k.charCodeAt(n+1):0,u=q?k.charCodeAt(n+2):0,v=r>>2,x=(r&3)<<4|t>>4,z=(t&15)<<2|u>>6,w=u&63;q||(w=64,p||(z=64));l.push(lg[v],lg[x],lg[z],lg[w])}h=l.join("");f.call(e,h)}}var y=b.join("*");return["1",Bg(y),
y].join("*")},Bg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=pg)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}pg=d;for(var l=4294967295,n=0;n<c.length;n++)l=l>>>8^pg[(l^c.charCodeAt(n))&255];return((l^-1)>>>0).toString(36)},Eg=function(){return function(a){var b=re(G.location.href),
c=b.search.replace("?",""),d=ke(c,"_gl",!0)||"";a.query=Dg(d)||{};var e=ne(b,"fragment").match(Ag("_gl"));a.fragment=Dg(e&&e[3]||"")||{}}},Fg=function(a){var b=Eg(),c=sg();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Xa(d,e.query),a&&Xa(d,e.fragment));return d},Dg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=wg.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var n=h[2],p=0;p<
b;++p)if(n===Bg(k,p)){l=!0;break a}l=!1}if(l){for(var q={},r=k?k.split("*"):[],t=0;t<r.length;t+=2)q[r[t]]=og(r[t+1]);return q}}}}catch(u){}};function Gg(a,b,c,d){function e(p){var q=p,r=Ag(a).exec(q),t=q;if(r){var u=r[2],v=r[4];t=r[1];v&&(t=t+u+v)}p=t;var x=p.charAt(p.length-1);p&&"&"!==x&&(p+="&");return p+n}d=void 0===d?!1:d;var f=zg.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",n=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function Hg(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=vg(b,1,c),e=vg(b,2,c),f=vg(b,3,c);if(Za(d)){var h=Cg(d);c?Ig("_gl",h,a):Jg("_gl",h,a,!1)}if(!c&&Za(e)){var k=Cg(e);Jg("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var n=l,p=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){Jg(n,p,q,void 0);break a}if("form"===q.tagName.toLowerCase()){Ig(n,p,q);break a}}"string"==typeof q&&Gg(n,p,q,void 0)}}
function Jg(a,b,c,d){if(c.href){var e=Gg(a,b,c.href,void 0===d?!1:d);Lc.test(e)&&(c.href=e)}}
function Ig(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=I.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var n=Gg(a,b,c.action);Lc.test(n)&&(c.action=n)}}}
var qg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Hg(e,e.hostname)}}catch(h){}},rg=function(a){try{if(a.action){var b=ne(re(a.action),"host");Hg(a,b)}}catch(c){}},Kg=function(a,b,c,d){tg();ug(a,b,"fragment"===c?2:1,!!d,!1)},Lg=function(a,b){tg();ug(a,[me(G.location,"host",!0)],b,!0,!0)},Mg=function(){var a=I.location.hostname,b=xg.exec(I.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(yg,""),l=e.replace(yg,""),n;if(!(n=k===l)){var p="."+l;n=k.substring(k.length-p.length,k.length)===p}return n},Ng=function(a,b){return!1===a?!1:a||b||Mg()};var Og={};var Pg=/^\w+$/,Qg=/^[\w-]+$/,Rg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp",gb:"_gb"},Sg=function(){if(!zd(Ec)||!Kd())return!0;var a=Hd("ad_storage");return null==a?!0:!!a},Tg=function(a,b){Jd("ad_storage")?Sg()?a():Od(a,"ad_storage"):b?ra("TAGGING",3):Nd(function(){Tg(a,!0)},["ad_storage"])},Vg=function(a){return Ug(a).map(function(b){return b.ma})},Ug=function(a){var b=[];if(!xf(G)||!I.cookie)return b;var c=Af(a,I.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d={},e=0;e<c.length;d=
{Yb:d.Yb},e++){var f=Wg(c[e]);if(null!=f){var h=f,k=h.version;d.Yb=h.ma;var l=h.timestamp,n=h.labels,p=Da(b,function(q){return function(r){return r.ma===q.Yb}}(d));p?(p.timestamp=Math.max(p.timestamp,l),p.labels=Xg(p.labels,n||[])):b.push({version:k,ma:d.Yb,timestamp:l,labels:n})}}b.sort(function(q,r){return r.timestamp-q.timestamp});return Yg(b)};function Xg(a,b){for(var c={},d=[],e=0;e<a.length;e++)c[a[e]]=!0,d.push(a[e]);for(var f=0;f<b.length;f++)c[b[f]]||d.push(b[f]);return d}
function Zg(a){return a&&"string"==typeof a&&a.match(Pg)?a:"_gcl"}
var ah=function(){var a=re(G.location.href),b=ne(a,"query",!1,void 0,"gclid"),c=ne(a,"query",!1,void 0,"gclsrc"),d=ne(a,"query",!1,void 0,"wbraid"),e=ne(a,"query",!1,void 0,"dclid");if(!b||!c||!d){var f=a.hash.replace("#","");b=b||ke(f,"gclid",void 0);c=c||ke(f,"gclsrc",void 0);d=d||ke(f,"wbraid",void 0)}return $g(b,c,e,d)},$g=function(a,b,c,d){var e={},f=function(h,k){e[k]||(e[k]=[]);e[k].push(h)};e.gclid=a;e.gclsrc=b;e.dclid=c;void 0!==d&&Qg.test(d)&&(e.gbraid=d,f(d,"gb"));if(void 0!==a&&a.match(Qg))switch(b){case void 0:f(a,
"aw");break;case "aw.ds":f(a,"aw");f(a,"dc");break;case "ds":f(a,"dc");break;case "3p.ds":f(a,"dc");break;case "gf":f(a,"gf");break;case "ha":f(a,"ha")}c&&f(c,"dc");return e},bh=function(a,b){switch(a){case void 0:case "aw":return"aw"===b;case "aw.ds":return"aw"===b||"dc"===b;case "ds":case "3p.ds":return"dc"===b;case "gf":return"gf"===b;case "ha":return"ha"===b}return!1},dh=function(a){var b=ah();Tg(function(){ch(b,a)})};
function ch(a,b,c,d){function e(p,q){var r=eh(p,f);r&&(Jf(r,q,h),k=!0)}b=b||{};d=d||[];var f=Zg(b.prefix);c=c||Qa();var h=bg(b,c,!0);h.Ha="ad_storage";var k=!1,l=Math.round(c/1E3),n=function(p){var q=["GCL",l,p];0<d.length&&q.push(d.join("."));return q.join(".")};a.aw&&e("aw",n(a.aw[0]));a.dc&&e("dc",n(a.dc[0]));a.gf&&e("gf",n(a.gf[0]));a.ha&&e("ha",n(a.ha[0]));a.gp&&e("gp",n(a.gp[0]));(void 0==Og.enable_gbraid_cookie_write?0:Og.enable_gbraid_cookie_write)&&!k&&a.gb&&e("gb",n(a.gb[0]))}
var gh=function(a,b){var c=Fg(!0);Tg(function(){for(var d=Zg(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Rg[f]){var h=eh(f,d),k=c[h];if(k){var l=Math.min(fh(k),Qa()),n;b:{var p=l;if(xf(G))for(var q=Af(h,I.cookie,void 0,"ad_storage"),r=0;r<q.length;++r)if(fh(q[r])>p){n=!0;break b}n=!1}if(!n){var t=bg(b,l,!0);t.Ha="ad_storage";Jf(h,k,t)}}}}ch($g(c.gclid,c.gclsrc),b)})},eh=function(a,b){var c=Rg[a];if(void 0!==c)return b+c},fh=function(a){return 0!==hh(a.split(".")).length?1E3*(Number(a.split(".")[1])||
0):0};function Wg(a){var b=hh(a.split("."));return 0===b.length?null:{version:b[0],ma:b[2],timestamp:1E3*(Number(b[1])||0),labels:b.slice(3)}}function hh(a){return 3>a.length||"GCL"!==a[0]&&"1"!==a[0]||!/^\d+$/.test(a[1])||!Qg.test(a[2])?[]:a}
var ih=function(a,b,c,d,e){if(wa(b)&&xf(G)){var f=Zg(e),h=function(){for(var k={},l=0;l<a.length;++l){var n=eh(a[l],f);if(n){var p=Af(n,I.cookie,void 0,"ad_storage");p.length&&(k[n]=p.sort()[p.length-1])}}return k};Tg(function(){Kg(h,b,c,d)})}},Yg=function(a){return a.filter(function(b){return Qg.test(b.ma)})},jh=function(a,b){if(xf(G)){for(var c=Zg(b.prefix),d={},e=0;e<a.length;e++)Rg[a[e]]&&(d[a[e]]=Rg[a[e]]);Tg(function(){Ia(d,function(f,h){var k=Af(c+h,I.cookie,void 0,"ad_storage");k.sort(function(t,
u){return fh(u)-fh(t)});if(k.length){var l=k[0],n=fh(l),p=0!==hh(l.split(".")).length?l.split(".").slice(3):[],q={},r;r=0!==hh(l.split(".")).length?l.split(".")[2]:void 0;q[f]=[r];ch(q,b,n,p)}})})}};function kh(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var lh=function(a){function b(e,f,h){h&&(e[f]=h)}if(Kd()){var c=ah();if(kh(c,a)){var d={};b(d,"gclid",c.gclid);b(d,"dclid",c.dclid);b(d,"gclsrc",c.gclsrc);b(d,"wbraid",c.gbraid);Lg(function(){return d},3);Lg(function(){var e={};return e._up="1",e},1)}}};function mh(a,b){var c=Zg(b),d=eh(a,c);if(!d)return 0;for(var e=Ug(d),f=0,h=0;h<e.length;h++)f=Math.max(f,e[h].timestamp);return f}
function nh(a){var b=0,c;for(c in a)for(var d=a[c],e=0;e<d.length;e++)b=Math.max(b,Number(d[e].timestamp));return b};var oh=/^\d+\.fls\.doubleclick\.net$/;function ph(a,b){Jd(E.B)?N(E.B)?a():Od(a,E.B):b?Bc(42):Vd(function(){ph(a,!0)},[E.B])}function qh(a){var b=re(G.location.href),c=ne(b,"host",!1);if(c&&c.match(oh)){var d=ne(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function rh(a,b,c){if("aw"===a||"dc"===a||"gb"===a){var d=qh("gcl"+a);if(d)return d.split(".")}var e=Zg(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!N(E.B)&&c,h;h=ah()[a]||[];if(0<h.length)return f?["0"]:h}var k=eh(a,e);return k?Vg(k):[]}function sh(a){var b=[];Ia(a,function(c,d){d=Yg(d);for(var e=[],f=0;f<d.length;f++)e.push(d[f].ma);e.length&&b.push(c+":"+e.join(","))});return b.join(";")}
var th=function(a){var b=qh("gac");return b?!N(E.B)&&a?"0":decodeURIComponent(b):sh(Sg()?jg():{})},uh=function(a){var b=qh("gacgb");return b?!N(E.B)&&a?"0":decodeURIComponent(b):sh(Sg()?jg("_gac_gb",!0):{})},vh=function(a,b,c){var d=ah(),e=[],f=d.gclid,h=d.dclid,k=d.gclsrc||"aw";!f||"aw.ds"!==k&&"aw"!==k&&"ds"!==k||c&&!bh(k,c)||e.push({ma:f,Dd:k});!h||c&&"dc"!==c||e.push({ma:h,Dd:"ds"});ph(function(){hg(b);var l=dg[eg(b.prefix)],n=!1;if(l&&0<e.length)for(var p=O.joined_auid=O.joined_auid||{},q=0;q<e.length;q++){var r=e[q],t=r.ma,u=r.Dd,v=(b.prefix||"_gcl")+"."+u+"."+t;if(!p[v]){var x="https://adservice.google.com/pagead/regclk";x="gb"===u?x+"?gbraid="+t+"&auid="+l:x+"?gclid="+t+"&auid="+l+"&gclsrc="+u;wd(x);n=p[v]=!0}}null==a&&(a=n);if(a&&
l){var z=eg(b.prefix),w=dg[z];w&&gg(z,w,b)}})},wh=function(a){var b;if(qh("gclaw")||qh("gac")||0<(ah().aw||[]).length)b=!1;else{var c;if(0<(ah().gb||[]).length)c=!0;else{var d=Math.max(mh("aw",a),nh(Sg()?jg():{}));c=Math.max(mh("gb",a),nh(Sg()?jg("_gac_gb",!0):{}))>d}b=c}return b};var xh=/[A-Z]+/,yh=/\s/,zh=function(a){if(m(a)&&(a=Oa(a),!yh.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(xh.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],F:d}}}}},Bh=function(a){for(var b={},c=0;c<a.length;++c){var d=zh(a[c]);d&&(b[d.id]=d)}Ah(b);var e=[];Ia(b,function(f,h){e.push(h)});return e};
function Ah(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.F[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Ch=function(){var a=!1;return a};var Eh=function(a,b,c,d){return(2===Dh()||d||"http:"!=G.location.protocol?a:b)+c},Dh=function(){var a=kd(),b;if(1===a)a:{var c=We;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=I.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Sh=function(a){if(N(E.B))return a;a=a.replace(/&url=([^&#]+)/,function(b,c){var d=se(decodeURIComponent(c));return"&url="+encodeURIComponent(d)});a=a.replace(/&ref=([^&#]+)/,function(b,c){var d=se(decodeURIComponent(c));return"&ref="+encodeURIComponent(d)});return a},Th=function(){var a;if(!(a=Xe)){var b;if(!0===G._gtmdgs)b=!0;else{var c=fd&&fd.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||
11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=La("1");return uf(1,100)<d?uf(2,2):-1},Uh=function(a){var b;if(!a||!a.length)return;for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&e.estimated_delivery_date?c.push(""+e.estimated_delivery_date):c.push("")}b=c.join(",");return b};var Vh=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Wh={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Xh={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Yh="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Zh=function(){var a=!1;return a},ai=function(a){var b=jf("gtm.allowlist")||jf("gtm.whitelist");b&&Bc(9);Zh()&&(b="google gtagfl lcl zone oid op".split(" "));var c=b&&$a(Na(b),Wh),d=jf("gtm.blocklist")||
jf("gtm.blacklist");d||(d=jf("tagTypeBlacklist"))&&Bc(3);d?Bc(8):d=[];$h()&&(d=Na(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Ba(Na(d),"google")&&Bc(2);var e=d&&$a(Na(d),Xh),f={};return function(h){var k=h&&h[kb.Ta];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=bf[k]||[],n=a(k,l);if(b){var p;if(p=
n)a:{if(0>Ba(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>Ba(c,l[q])){Bc(11);p=!1;break a}}else{p=!1;break a}p=!0}n=p}var r=!1;if(d){var t=0<=Ba(e,k);if(t)r=t;else{var u=Ha(e,l||[]);u&&Bc(10);r=u}}var v=!n||r;v||!(0<=Ba(l,"sandboxedScripts"))||c&&-1!==Ba(c,"sandboxedScripts")||(v=Ha(e,Yh));return f[k]=v}},$h=function(){return Vh.test(G.location&&G.location.hostname)};var bi={active:!0,isAllowed:function(){return!0}},ci=function(a){var b=O.zones;return b?b.checkState(Qe.K,a):bi},di=function(a){var b=O.zones;!b&&a&&(b=O.zones=a());return b};var ei=function(){},fi=function(){};var gi=!1,hi=0,ii=[];function ji(a){if(!gi){var b=I.createEventObject,c="complete"==I.readyState,d="interactive"==I.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){gi=!0;for(var e=0;e<ii.length;e++)J(ii[e])}ii.push=function(){for(var f=0;f<arguments.length;f++)J(arguments[f]);return 0}}}function ki(){if(!gi&&140>hi){hi++;try{I.documentElement.doScroll("left"),ji()}catch(a){G.setTimeout(ki,50)}}}var li=function(a){gi?a():ii.push(a)};var ri=function(a,b){this.m=!1;this.H=[];this.X={tags:[]};this.da=!1;this.o=this.C=0;qi(this,a,b)},si=function(a,b,c,d){if(Te.hasOwnProperty(b)||"__zone"===b)return-1;var e={};ib(d)&&(e=B(d,e));e.id=c;e.status="timeout";return a.X.tags.push(e)-1},ti=function(a,b,c,d){var e=a.X.tags[b];e&&(e.status=c,e.executionTime=d)},ui=function(a){if(!a.m){for(var b=a.H,c=0;c<b.length;c++)b[c]();a.m=!0;a.H.length=0}},qi=function(a,b,c){ua(b)&&vi(a,b);c&&G.setTimeout(function(){return ui(a)},Number(c))},vi=function(a,
b){var c=Va(function(){return J(function(){b(Qe.K,a.X)})});a.m?c():a.H.push(c)},wi=function(a){a.C++;return Va(function(){a.o++;a.da&&a.o>=a.C&&ui(a)})};var xi=function(){function a(d){return!va(d)||0>d?0:d}if(!O._li&&G.performance&&G.performance.timing){var b=G.performance.timing.navigationStart,c=va(kf.get("gtm.start"))?kf.get("gtm.start"):0;O._li={cst:a(c-b),cbt:a(Ze-b)}}};var Bi={},Ci=function(){return G.GoogleAnalyticsObject&&G[G.GoogleAnalyticsObject]},Di=!1;
var Ei=function(a){G.GoogleAnalyticsObject||(G.GoogleAnalyticsObject=a||"ga");var b=G.GoogleAnalyticsObject;if(G[b])G.hasOwnProperty(b)||Bc(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);G[b]=c}xi();return G[b]},Fi=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Ci();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},Gi=function(a){if(!Kd())return;var b=Ci();b(a+"require","linker");b(a+
"linker:passthrough",!0);};
var Ii=function(a){},Hi=function(){return G.GoogleAnalyticsObject||"ga"},Ji=function(a,b){return function(){var c=Ci(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var h=f.get("hitPayload"),k=f.get("hitCallback"),l=0>h.indexOf("&tid="+b);l&&(f.set("hitPayload",h.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",h,!0),f.set("hitCallback",k,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var Oi=function(){return"&tc="+Qb.filter(function(a){return a}).length},Ri=function(){2022<=Pi().length&&Qi()},Ti=function(){Si||(Si=G.setTimeout(Qi,500))},Qi=function(){Si&&(G.clearTimeout(Si),Si=void 0);void 0===Ui||Vi[Ui]&&!Wi&&!Xi||(Yi[Ui]||Zi.vh()||0>=$i--?(Bc(1),Yi[Ui]=!0):(Zi.Nh(),md(Pi()),Vi[Ui]=!0,aj=bj=cj=Xi=Wi=""))},Pi=function(){var a=Ui;if(void 0===a)return"";var b=sa("GTM"),c=sa("TAGGING");return[dj,Vi[a]?"":"&es=1",ej[a],b?"&u="+b:"",c?"&ut="+c:"",Oi(),Wi,Xi,cj?cj:"",bj,aj,"&z=0"].join("")},
gj=function(){dj=fj()},fj=function(){return[$e,"&v=3&t=t","&pid="+Ea(),"&rv="+Qe.xc].join("")},hj="0.005000">Math.random(),dj=fj(),Vi={},Wi="",Xi="",aj="",bj="",cj="",Ui=void 0,ej={},Yi={},Si=void 0,Zi=function(a,b){var c=0,d=0;return{vh:function(){if(c<a)return!1;Qa()-d>=b&&(c=0);return c>=a},Nh:function(){Qa()-d>=b&&(c=0);c++;d=Qa()}}}(2,1E3),$i=1E3,ij=function(a,b,c){if(hj&&!Yi[a]&&b){a!==Ui&&(Qi(),Ui=a);var d,e=String(b[kb.Ta]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;Wi=Wi?Wi+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(Sb[h]?"1":"2")+d;aj=aj?aj+"."+k:"&ti="+k;Ti();Ri()}},jj=function(a,b,c){if(hj&&!Yi[a]){a!==Ui&&(Qi(),Ui=a);var d=c+b;Xi=Xi?Xi+"."+d:"&epr="+d;Ti();Ri()}},kj=function(a,b,c){};
function lj(a,b,c,d){var e=Qb[a],f=mj(a,b,c,d);if(!f)return null;var h=Xb(e[kb.df],c,[]);if(h&&h.length){var k=h[0];f=lj(k.index,{onSuccess:f,onFailure:1===k.vf?b.terminate:f,terminate:b.terminate},c,d)}return f}
function mj(a,b,c,d){function e(){if(f[kb.Ig])k();else{var x=Yb(f,c,[]);var y=si(c.Ua,String(f[kb.Ta]),Number(f[kb.ef]),x[kb.Jg]),A=!1;x.vtp_gtmOnSuccess=function(){if(!A){A=!0;var D=Qa()-F;ij(c.id,Qb[a],"5");ti(c.Ua,y,"success",
D);h()}};x.vtp_gtmOnFailure=function(){if(!A){A=!0;var D=Qa()-F;ij(c.id,Qb[a],"6");ti(c.Ua,y,"failure",D);k()}};x.vtp_gtmTagId=f.tag_id;x.vtp_gtmEventId=c.id;ij(c.id,f,"1");var C=function(){var D=Qa()-F;ij(c.id,f,"7");ti(c.Ua,y,"exception",D);A||(A=!0,k())};var F=Qa();try{Wb(x,c)}catch(D){C(D)}}}var f=Qb[a],h=b.onSuccess,k=b.onFailure,l=b.terminate;if(c.Jd(f))return null;var n=Xb(f[kb.ff],c,[]);if(n&&n.length){var p=n[0],q=lj(p.index,{onSuccess:h,onFailure:k,terminate:l},c,d);if(!q)return null;h=q;k=2===p.vf?l:q}if(f[kb.Xe]||f[kb.Lg]){var r=f[kb.Xe]?Rb:
c.Uh,t=h,u=k;if(!r[a]){e=Va(e);var v=nj(a,r,e);h=v.onSuccess;k=v.onFailure}return function(){r[a](t,u)}}return e}function nj(a,b,c){var d=[],e=[];b[a]=oj(d,e,c);return{onSuccess:function(){b[a]=pj;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=qj;for(var f=0;f<e.length;f++)e[f]()}}}function oj(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function pj(a){a()}function qj(a,b){b()};var tj=function(a,b){for(var c=[],d=0;d<Qb.length;d++)if(a[d]){var e=Qb[d];var f=wi(b.Ua);try{var h=lj(d,{onSuccess:f,onFailure:f,terminate:f},b,d);if(h){var k=c,l=k.push,n=d,p=e["function"];if(!p)throw"Error: No function name given for function call.";var q=Sb[p];l.call(k,{Mf:n,Ef:q?q.priorityOverride||0:0,jh:h})}else rj(d,b),f()}catch(u){f()}}var r=b.Ua;r.da=!0;r.o>=r.C&&ui(r);c.sort(sj);for(var t=0;t<c.length;t++)c[t].jh();
return 0<c.length};function sj(a,b){var c,d=b.Ef,e=a.Ef;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Mf,k=b.Mf;f=h>k?1:h<k?-1:0}return f}function rj(a,b){if(!hj)return;var c=function(d){var e=b.Jd(Qb[d])?"3":"4",f=Xb(Qb[d][kb.df],b,[]);f&&f.length&&c(f[0].index);ij(b.id,Qb[d],e);var h=Xb(Qb[d][kb.ff],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var uj=!1,Aj=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(uj)return!1;uj=!0}var d=ci(b),e=!1;if(!d.active){if("gtm.js"!==c)return!1;e=!0;d=ci(Number.MAX_SAFE_INTEGER)}hj&&!Yi[b]&&Ui!==b&&(Qi(),Ui=b,aj=Wi="",ej[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,Ti());var f=a.eventCallback,h=a.eventTimeout,k={id:b,name:c,Jd:ai(d.isAllowed),Uh:[],Af:function(){Bc(6)},nf:vj(b),Ua:new ri(f,
h)};k.lf=wj();xj(b,k.Ua);var l=bc(k);e&&(l=yj(l));var n=tj(l,k);"gtm.js"!==c&&"gtm.sync"!==c||Ii(Qe.K);switch(c){case "gtm.init":n&&Bc(20)}return zj(l,n)};function vj(a){return function(b){hj&&(jb(b)||kj(a,"input",b))}}
function xj(a,b){of(a,"event",1);of(a,"ecommerce",1);of(a,"gtm");of(a,"eventModel");}function wj(){var a={};a.event=nf("event",1);a.ecommerce=nf("ecommerce",1);a.gtm=nf("gtm");a.eventModel=nf("eventModel");return a}function yj(a){for(var b=[],c=0;c<a.length;c++)a[c]&&Se[String(Qb[c][kb.Ta])]&&(b[c]=!0);return b}
function zj(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Qb[c]&&!Te[String(Qb[c][kb.Ta])])return!0;return!1}function Bj(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return re(""+c+b).href}}function Cj(a,b){return Dj()?Bj(a,b):void 0}function Dj(){var a=!1;return a};var Ej=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.remoteConfig={};this.globalConfig={};this.onSuccess=function(){};this.onFailure=function(){};this.setContainerTypeLoaded=function(){};this.getContainerTypeLoaded=function(){};this.eventId=void 0;this.isGtmEvent=!1},Fj=function(a){var b=new Ej;b.eventModel=a;return b},Gj=function(a,b){a.targetConfig=b;return a},Hj=function(a,b){a.containerConfig=b;return a},Ij=function(a,b){a.remoteConfig=b;return a},Jj=function(a,
b){a.globalConfig=b;return a},Kj=function(a,b){a.onSuccess=b;return a},Lj=function(a,b){a.setContainerTypeLoaded=b;return a},Mj=function(a,b){a.getContainerTypeLoaded=b;return a},Nj=function(a,b){a.onFailure=b;return a};
Ej.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.remoteConfig[a])return this.remoteConfig[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Oj=function(a){function b(e){Ia(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Ia(c,function(e){d.push(e)});return d};var Pj;if(3===Qe.xc.length)Pj="g";else{var Qj="G";Pj=Qj}
var Rj={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Pj,OPT:"o"},Sj=function(a){var b=Qe.K.split("-"),c=b[0].toUpperCase(),d=Rj[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Qe.xc.length){var h="w";f="2"+h}else f="";return f+d+Qe.xc+e};var Tj=function(){};var Uj=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},Vj=function(a,b){this.o=a;this.m=null;this.H={};this.da=0;this.X=void 0===b?500:b;this.C=null};na(Vj,Tj);
var Xj=function(a){return"function"===typeof a.o.__tcfapi||null!=Wj(a)};
Vj.prototype.addEventListener=function(a){var b={},c=Gc(function(){return a(b)}),d=0;-1!==this.X&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.X));var e=function(f,h){clearTimeout(d);f?(b=f,b.internalErrorState=Uj(b),h&&0===b.internalErrorState||(b.tcString="tcunavailable",h||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{Yj(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};Vj.prototype.removeEventListener=function(a){a&&a.listenerId&&Yj(this,"removeEventListener",null,a.listenerId)};
var ak=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var h=e;if(0===h)return!1;var k=c;2===c?(k=0,2===h&&(k=1)):3===c&&(k=1,1===h&&(k=0));var l;if(0===k)if(a.purpose&&a.vendor){var n=Zj(a.vendor.consents,void 0===d?"755":d);l=n&&"1"===b&&a.purposeOneTreatment&&("DE"===a.publisherCC||zd(Dc)&&"CH"===a.publisherCC)?!0:n&&Zj(a.purpose.consents,b)}else l=!0;else l=
1===k?a.purpose&&a.vendor?Zj(a.purpose.legitimateInterests,b)&&Zj(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},Zj=function(a,b){return!(!a||!a[b])},Yj=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.o.__tcfapi){var e=a.o.__tcfapi;e(b,2,c,d)}else if(Wj(a)){bk(a);var f=++a.da;a.H[f]=c;if(a.m){var h={};a.m.postMessage((h.__tcfapiCall={command:b,version:2,callId:f,parameter:d},h),"*")}}else c({},!1)},Wj=function(a){if(a.m)return a.m;a.m=Wf(a.o,"__tcfapiLocator");return a.m},
bk=function(a){a.C||(a.C=function(b){try{var c;c=("string"===typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.H[c.callId](c.returnValue,c.success)}catch(d){}},Sf(a.o,a.C))};var ck=!0;ck=!1;var dk={1:0,3:0,4:0,7:3,9:3,10:3};function ek(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var fk=ek("",550),gk=ek("",500);function hk(){var a=O.tcf||{};return O.tcf=a}
var ik=function(a,b){this.C=a;this.m=b;this.o=Qa();},jk=function(a){},kk=function(a){},qk=function(){var a=hk(),b=new Vj(G,ck?3E3:-1),c=new ik(b,a);if((lk()?!0===G.gtag_enable_tcf_support:!1!==G.gtag_enable_tcf_support)&&!a.active&&("function"===typeof G.__tcfapi||Xj(b))){a.active=!0;a.Tb={};mk();var d=null;ck?d=G.setTimeout(function(){nk(a);ok(a);d=null},gk):a.tcString="tcunavailable";try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)nk(a),ok(a),jk(c);
else{var f;a.gdprApplies=e.gdprApplies;if(!1===e.gdprApplies)f=pk(),b.removeEventListener(e);else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var h={},k;for(k in dk)if(dk.hasOwnProperty(k))if("1"===k){var l,n=e,p=!0;p=void 0===p?!1:p;var q;var r=n;!1===r.gdprApplies?q=!0:(void 0===r.internalErrorState&&(r.internalErrorState=Uj(r)),q="error"===r.cmpStatus||0!==r.internalErrorState||"loaded"===r.cmpStatus&&("tcloaded"===r.eventStatus||"useractioncomplete"===
r.eventStatus)?!0:!1);l=q?!1===n.gdprApplies||"tcunavailable"===n.tcString||void 0===n.gdprApplies&&!p||"string"!==typeof n.tcString||!n.tcString.length?!0:ak(n,"1",0):!1;h["1"]=l}else h[k]=ak(e,k,dk[k]);f=h}f&&(a.tcString=e.tcString||"tcempty",a.Tb=f,ok(a),jk(c))}}),kk(c)}catch(e){d&&(clearTimeout(d),d=null),nk(a),ok(a)}}};function nk(a){a.type="e";a.tcString="tcunavailable";ck&&(a.Tb=pk())}function mk(){var a={},b=(a.ad_storage="denied",a.wait_for_update=fk,a);Rd(b)}
var lk=function(){var a=!1;a=!0;return a};function pk(){var a={},b;for(b in dk)dk.hasOwnProperty(b)&&(a[b]=!0);return a}function ok(a){var b={},c=(b.ad_storage=a.Tb["1"]?"granted":"denied",b);rk();Sd(c,0)}
var sk=function(){var a=hk();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},rk=function(){var a=hk();return a.active?a.tcString||"":""},tk=function(){var a=hk();return a.active&&void 0!==a.gdprApplies?a.gdprApplies?"1":"0":""},uk=function(a){if(!dk.hasOwnProperty(String(a)))return!0;var b=hk();return b.active&&b.Tb?!!b.Tb[String(a)]:!0};var vk=!1;function wk(a){var b=String(G.location).split(/[?#]/)[0],c=Qe.Vf||G._CONSENT_MODE_SALT;return a?c?String(vf(b+a+c)):"0":""}
function xk(a){function b(u){var v;O.reported_gclid||(O.reported_gclid={});v=O.reported_gclid;var x;x=vk&&h&&(!Kd()||N(E.B))?l+"."+(f.prefix||"_gcl")+(u?"gcu":"gcs"):l+(u?"gcu":"gcs");if(!v[x]){v[x]=!0;var z=[],w={},y=function(P,R){R&&(z.push(P+"="+encodeURIComponent(R)),w[P]=!0)},A="https://www.google.com";if(Kd()){var C=N(E.B);y("gcs",Td());u&&y("gcu","1");Ld()&&y("gcd","G1"+Pd(Id));O.dedupe_gclid||
(O.dedupe_gclid=""+Xf());y("rnd",O.dedupe_gclid);if((!l||n&&"aw.ds"!==n)&&N(E.B)){var F=Vg("_gcl_aw");y("gclaw",F.join("."))}y("url",String(G.location).split(/[?#]/)[0]);y("dclid",yk(d,p));var D=!1;D=!0;C||!d&&!D||(A="https://pagead2.googlesyndication.com")}
y("gdpr_consent",rk()),y("gdpr",tk());"1"===Fg(!1)._up&&y("gtm_up","1");y("gclid",yk(d,l));y("gclsrc",n);if(!(w.gclid||w.dclid||w.gclaw)&&(y("gbraid",yk(d,q)),!w.gbraid&&Kd()&&N(E.B))){var H=Vg("_gcl_gb");y("gclgb",H.join("."))}y("gtm",Sj(!e));vk&&h&&N(E.B)&&(hg(f||{}),y("auid",dg[eg(f.prefix)]||""));
a.rf&&y("did",a.rf);var M=A+"/pagead/landing?"+z.join("&");wd(M)}}var c=!!a.yd,d=!!a.wa,e=a.T,f=void 0===a.Dc?{}:a.Dc,h=void 0===a.Jc?!0:a.Jc,k=ah(),l=k.gclid||"",n=k.gclsrc,p=k.dclid||"",q=k.gbraid||"",r=!c&&((!l||n&&"aw.ds"!==n?!1:!0)||q),t=Kd();if(r||t)t?Vd(function(){b();N(E.B)||Ud(function(u){return b(!0,u.pf)},E.B)},[E.B]):b()}function yk(a,b){var c=a&&!N(E.B);return b&&c?"0":b}var kl=function(){var a=!0;uk(7)&&uk(9)&&uk(10)||(a=!1);var b=!0;b=!1;b&&!jl()&&(a=!1);return a},jl=function(){var a=!0;uk(3)&&uk(4)||(a=!1);return a};var Il=!1;function Jl(){var a=O;return a.gcq=a.gcq||new Kl}
var Ll=function(a,b,c){Jl().register(a,b,c)},Ml=function(a,b,c,d){Jl().push("event",[b,a],c,d)},Nl=function(a,b){Jl().push("config",[a],b)},Ol=function(a,b,c,d){Jl().push("get",[a,b],c,d)},Pl={},Ql=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.remoteConfig={};this.o=null;this.m=!1},Rl=function(a,b,c,d,e){this.type=a;this.C=b;this.T=c||"";this.m=d;this.o=e},Kl=function(){this.H={};this.o={};this.m=[];this.C={AW:!1,UA:!1};this.enableDeferrableCommandAfterConfig=Il},Sl=function(a,
b){var c=zh(b);return a.H[c.containerId]=a.H[c.containerId]||new Ql},Tl=function(a,b,c){if(b){var d=zh(b);if(d&&1===Sl(a,b).status){Sl(a,b).status=2;var e={};hj&&(e.timeoutId=G.setTimeout(function(){Bc(38);Ti()},3E3));a.push("require",[e],d.containerId);Pl[d.containerId]=Qa();if(Ch()){}else{var h="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=G.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+h),l=Cj(c,h)||k;jd(l)}}}},Ul=function(a,b,c,d){if(d.T){var e=Sl(a,d.T),f=e.o;if(f){var h=B(c),k=B(e.targetConfig[d.T]),l=B(e.containerConfig),n=B(e.remoteConfig),p=B(a.o),q=jf("gtm.uniqueEventId"),r=zh(d.T).prefix,t=Mj(Lj(Nj(Kj(Jj(Ij(Hj(Gj(Fj(h),k),l),n),p),function(){
jj(q,r,"2");}),function(){jj(q,r,"3");}),function(u,v){a.C[u]=v}),function(u){return a.C[u]});try{jj(q,r,"1");f(d.T,b,d.C,t)}catch(u){jj(q,r,"4");}}}};g=Kl.prototype;
g.register=function(a,b,c){var d=Sl(this,a);if(3!==d.status){d.o=b;d.status=3;if(c){B(d.remoteConfig,c);d.remoteConfig=c}var e=zh(a),f=Pl[e.containerId];if(void 0!==f){var h=O[e.containerId].bootstrap,k=e.prefix.toUpperCase();O[e.containerId]._spx&&(k=k.toLowerCase());var l=jf("gtm.uniqueEventId"),n=k,p=Qa()-h;if(hj&&!Yi[l]){l!==Ui&&(Qi(),Ui=l);var q=n+"."+Math.floor(h-f)+
"."+Math.floor(p);bj=bj?bj+","+q:"&cl="+q}delete Pl[e.containerId]}this.flush()}};g.push=function(a,b,c,d){var e=Math.floor(Qa()/1E3);Tl(this,c,b[0][E.Ba]||this.o[E.Ba]);Il&&c&&Sl(this,c).m&&(d=!1);this.m.push(new Rl(a,e,c,b,d));d||this.flush()};g.insert=function(a,b,c){var d=Math.floor(Qa()/1E3);0<this.m.length?this.m.splice(1,0,new Rl(a,d,c,b,!1)):this.m.push(new Rl(a,d,c,b,!1))};
g.flush=function(a){for(var b=this,c=[],d=!1,e={};this.m.length;){var f=this.m[0];if(f.o)Il?!f.T||Sl(this,f.T).m?(f.o=!1,this.m.push(f)):c.push(f):(f.o=!1,this.m.push(f));else switch(f.type){case "require":if(3!==Sl(this,f.T).status&&!a){Il&&this.m.push.apply(this.m,c);return}hj&&G.clearTimeout(f.m[0].timeoutId);break;case "set":Ia(f.m[0],function(r,t){B(ab(r,t),b.o)});break;case "config":e.xa={};Ia(f.m[0],function(r){return function(t,u){B(ab(t,u),r.xa)}}(e));var h=!!e.xa[E.qc];delete e.xa[E.qc];
var k=Sl(this,f.T),l=zh(f.T),n=l.containerId===l.id;h||(n?k.containerConfig={}:k.targetConfig[f.T]={});k.m&&h||Ul(this,E.fa,e.xa,f);k.m=!0;delete e.xa[E.Hb];n?B(e.xa,k.containerConfig):B(e.xa,k.targetConfig[f.T]);Il&&(d=!0);break;case "event":e.Xb={};Ia(f.m[0],function(r){return function(t,u){B(ab(t,u),r.Xb)}}(e));Ul(this,f.m[1],e.Xb,f);break;case "get":var p={},q=(p[E.Ka]=f.m[0],p[E.Ja]=f.m[1],p);Ul(this,E.za,q,f)}this.m.shift();e={xa:e.xa,Xb:e.Xb}}Il&&(this.m.push.apply(this.m,c),d&&this.flush())};
g.getRemoteConfig=function(a){return Sl(this,a).remoteConfig};var Vl=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":xd(a,"className"),"gtm.elementId":a["for"]||sd(a,"id")||"","gtm.elementTarget":a.formTarget||xd(a,"target")||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||xd(a,"href")||a.src||a.code||a.codebase||"";return d},Wl=function(a){O.hasOwnProperty("autoEventsSettings")||(O.autoEventsSettings={});var b=O.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});
return b[a]},Xl=function(a,b,c){Wl(a)[b]=c},Yl=function(a,b,c,d){var e=Wl(a),f=Ua(e,b,d);e[b]=c(f)},Zl=function(a,b,c){var d=Wl(a);return Ua(d,b,c)};var $l=!!G.MutationObserver,am=void 0,bm=function(a){if(!am){var b=function(){var c=I.body;if(c)if($l)(new MutationObserver(function(){for(var e=0;e<am.length;e++)J(am[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;nd(c,"DOMNodeInserted",function(){d||(d=!0,J(function(){d=!1;for(var e=0;e<am.length;e++)J(am[e])}))})}};am=[];I.body?b():J(b)}am.push(a)};var dm=!1,em=[];function fm(){if(!dm){dm=!0;for(var a=0;a<em.length;a++)J(em[a])}}var gm=function(a){dm?J(a):em.push(a)};Object.freeze({dl:1,id:1});var hm="HA GF G UA AW DC".split(" "),im=!1,jm={},km=!1;function lm(a,b){var c={event:a};b&&(c.eventModel=B(b),b[E.$c]&&(c.eventCallback=b[E.$c]),b[E.ic]&&(c.eventTimeout=b[E.ic]));return c}function mm(a){a.hasOwnProperty("gtm.uniqueEventId")||Object.defineProperty(a,"gtm.uniqueEventId",{value:cf()});return a["gtm.uniqueEventId"]}
function nm(){return im}
var qm={config:function(a){var b,c;void 0===c&&(c=cf());return b},consent:function(a){function b(){nm()&&B(a[2],{subcommand:a[1]})}if(3===a.length){Bc(39);var c=cf(),d=a[1];"default"===d?(b(),Rd(a[2])):"update"===d&&(b(),Sd(a[2],c))}},event:function(a){var b=a[1];if(!(2>a.length)&&m(b)){var c;if(2<a.length){if(!ib(a[2])&&
void 0!=a[2]||3<a.length)return;c=a[2]}var d=lm(b,c),e=void 0;void 0===e&&cf();return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime){km=!0;nm();var b={event:"gtm.js","gtm.start":a[1].getTime()};return b}},policy:function(){},set:function(a){var b;2==a.length&&ib(a[1])?b=B(a[1]):3==a.length&&
m(a[1])&&(b={},ib(a[2])||wa(a[2])?b[a[1]]=B(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},rm={policy:!0};var sm=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},um=function(a){var b=tm(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Nm=function(a){if(Mm(a))return a;this.m=a};Nm.prototype.ph=function(){return this.m};var Mm=function(a){return!a||"object"!==fb(a)||ib(a)?!1:"getUntrustedUpdateValue"in a};Nm.prototype.getUntrustedUpdateValue=Nm.prototype.ph;var Om=[],Pm=!1,Qm=!1,Rm=!1,Sm=function(a){return G["dataLayer"].push(a)},Tm=function(a){var b=O["dataLayer"],c=b?b.subscribers:1,d=0,e=a;return function(){++d===c&&(e(),e=null)}};
function Um(a){var b=a._clear;Ia(a,function(d,e){"_clear"!==d&&(b&&mf(d,void 0),mf(d,e))});Ye||(Ye=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=cf(),a["gtm.uniqueEventId"]=c,mf("gtm.uniqueEventId",c));return Aj(a)}function Vm(){var a=Om[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(Ka(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function Wm(){for(var a=!1;!Rm&&0<Om.length;){var b=!1;if(b&&!Qm&&Vm()){var c={};Om.unshift((c.event=
"gtm.init",c));Qm=!0}var d=!1;if(d&&!Pm&&Vm()){var e={};Om.unshift((e.event="gtm.init_consent",e));Pm=!0}Rm=!0;delete ff.eventModel;hf();var f=Om.shift();if(null!=f){var h=Mm(f);
if(h){var k=f;f=Mm(k)?k.getUntrustedUpdateValue():void 0;for(var l=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],n=0;n<l.length;n++){var p=l[n],q=jf(p,1);if(wa(q)||ib(q))q=B(q);gf[p]=q}}try{if(ua(f))try{f.call(kf)}catch(y){}else if(wa(f)){var r=f;if(m(r[0])){var t=r[0].split("."),u=t.pop(),v=r.slice(1),x=jf(t.join("."),2);if(void 0!==x&&null!==x)try{x[u].apply(x,v)}catch(y){}}}else{if(Ka(f)){a:{var z=f;if(z.length&&m(z[0])){var w=qm[z[0]];if(w&&(!h||!rm[z[0]])){f=
w(z);break a}}f=void 0}if(!f){Rm=!1;continue}}a=Um(f)||a}}finally{h&&hf(!0)}}Rm=!1}return!a}function Xm(){var a=Wm();try{sm(G["dataLayer"],Qe.K)}catch(b){}return a}
var Zm=function(){var a=hd("dataLayer",[]),b=hd("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};li(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});gm(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<O.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Nm(arguments[f])}else e=[].slice.call(arguments,0);var h=c.apply(a,e);Om.push.apply(Om,e);if(300<
this.length)for(Bc(4);300<this.length;)this.shift();var k="boolean"!==typeof h||h;return Wm()&&k};var d=a.slice(0);Om.push.apply(Om,d);Ym()&&J(Xm)},Ym=function(){var a=!0;return a};var $m={};$m.sc=new String("undefined");
var an=function(a){this.m=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===$m.sc?b:a[d]);return c.join("")}};an.prototype.toString=function(){return this.m("undefined")};an.prototype.valueOf=an.prototype.toString;$m.Og=an;$m.ud={};$m.bh=function(a){return new an(a)};var bn={};$m.Oh=function(a,b){var c=cf();bn[c]=[a,b];return c};$m.qf=function(a){var b=a?0:1;return function(c){var d=bn[c];if(d&&"function"===typeof d[b])d[b]();bn[c]=void 0}};$m.uh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};$m.Ih=function(a){if(a===$m.sc)return a;var b=cf();$m.ud[b]=a;return'google_tag_manager["'+Qe.K+'"].macro('+b+")"};$m.Eh=function(a,b,c){a instanceof $m.Og&&(a=a.m($m.Oh(b,c)),b=ta);return{qh:a,onSuccess:b}};var cn=["input","select","textarea"],dn=["button","hidden","image","reset","submit"],en=function(a){var b=a.tagName.toLowerCase();return!Da(cn,function(c){return c===b})||"input"===b&&Da(dn,function(c){return c===a.type.toLowerCase()})?!1:!0},fn=function(a){return a.form?a.form.tagName?a.form:I.getElementById(a.form):vd(a,["form"],100)},gn=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(en(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var sn=G.clearTimeout,tn=G.setTimeout,V=function(a,b,c){if(Ch()){b&&J(b)}else return jd(a,b,c)},un=function(){return new Date},vn=function(){return G.location.href},wn=function(a){return ne(re(a),"fragment")},xn=function(a){return qe(re(a))},yn=function(a,b){return jf(a,b||2)},zn=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Sm(a)):d=Sm(a);return d},An=function(a,b){G[a]=b},X=function(a,b,c){b&&
(void 0===G[a]||c&&!G[a])&&(G[a]=b);return G[a]},Bn=function(a,b,c){return Af(a,b,void 0===c?!0:!!c)},Cn=function(a,b,c){return 0===Jf(a,b,c)},Dn=function(a,b){if(Ch()){b&&J(b)}else ld(a,b)},En=function(a){return!!Zl(a,"init",!1)},Fn=function(a){Xl(a,"init",!0)},Gn=function(a){var b=We+"?id="+encodeURIComponent(a)+"&l=dataLayer";V(Eh("https://","http://",b))},Hn=function(a,b,c){hj&&(jb(a)||kj(c,b,a))};var In=$m.Eh;function fo(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var go=new Ga;function ho(a,b,c){var d=c?"i":void 0;try{var e=String(b)+d,f=go.get(e);f||(f=new RegExp(b,d),go.set(e,f));return f.test(a)}catch(h){return!1}}
function io(a,b){function c(h){var k=re(h),l=ne(k,"protocol"),n=ne(k,"host",!0),p=ne(k,"port"),q=ne(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,n,p,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function jo(a){return ko(a)?1:0}
function ko(a){var b=a.arg0,c=a.arg1;if(a.any_of&&wa(c)){for(var d=0;d<c.length;d++){var e=B(a,{});B({arg1:c[d],any_of:void 0},e);if(jo(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var h=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var k=0;k<h.length;k++)if(b[h[k]]){f=b[h[k]](c);break a}}catch(n){}}f=!1}return f;case "_ew":return fo(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Ba(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":return ho(b,c,a.ignore_case);case "_sw":return 0==String(b).indexOf(String(c));case "_um":return io(b,c)}return!1};var lo=encodeURI,Y=encodeURIComponent,mo=md;var no=function(a,b){if(!a)return!1;var c=ne(re(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var oo=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};function Wp(){return G.gaGlobal=G.gaGlobal||{}}var Xp=function(){var a=Wp();a.hid=a.hid||Ea();return a.hid},Yp=function(a,b){var c=Wp();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var uq=function(){if(ua(G.__uspapi)){var a="";try{G.__uspapi("getUSPData",1,function(b,c){if(c&&b){var d=b.uspString;d&&/^[\da-zA-Z-]{1,20}$/.test(d)&&(a=d)}})}catch(b){}return a}};var Oq=window,Pq=document,Qq=function(a){var b=Oq._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Oq["ga-disable-"+a])return!0;try{var c=Oq.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=wf("AMP_TOKEN",String(Pq.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Pq.getElementById("__gaOptOutExtension")?!0:!1};var Rq={};function Uq(a){delete a.eventModel[E.Hb];Wq(a.eventModel)}var Wq=function(a){Ia(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[E.Ca]||{};Ia(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Zq=function(a,b,c){Ml(b,c,a)},$q=function(a,b,c){Ml(b,c,a,!0)},gr=function(a,b){};
function ar(a,b){}var Z={g:{}};
Z.g.gaawc=["google"],function(){function a(b,c,d){for(var e=0;e<c.length;e++)b.hasOwnProperty(c[e])&&(b[c[e]]=d(b[c[e]]))}(function(b){Z.__gaawc=b;Z.__gaawc.h="gaawc";Z.__gaawc.i=!0;Z.__gaawc.priorityOverride=10})(function(b){var c=String(b.vtp_measurementId),d=oo(b.vtp_fieldsToSet,"name","value")||{};if(d.hasOwnProperty(E.Ca)||b.vtp_userProperties){var e=d[E.Ca]||{};B(oo(b.vtp_userProperties,"name","value"),e);d[E.Ca]=e}b.vtp_enableSendToServerContainer&&b.vtp_transportUrl&&(d[E.Ba]=b.vtp_transportUrl,
d[E.Cb]=!0);a(d,E.Pe,function(f){return Ma(f)});a(d,E.Re,function(f){return Number(f)});d.send_page_view=b.vtp_sendPageView;Nl(d,c);J(b.vtp_gtmOnSuccess)})}();
Z.g.gaawe=["google"],function(){function a(d,e,f){for(var h=0;h<e.length;h++)d.hasOwnProperty(e[h])&&(d[e[h]]=f(d[e[h]]))}function b(d,e,f){var h={id:"transaction_id",revenue:"value",list:"item_list_name"},k={click:E.Vc,detail:E.ya,add:E.fb,remove:E.hb,checkout:E.Oa,checkout_option:"checkout_option",purchase:E.oa,refund:E.ib},l={},n=function(t,u){l[t]=l[t]||u},p=function(t,u,v){v=void 0===v?!1:v;c.push(6);if(t){l.items=l.items||[];for(var x={},z=0;z<t.length;x={Za:x.Za},z++)x.Za={},Ia(t[z],function(y){return function(A,
C){v&&"id"===A?y.Za.promotion_id=C:v&&"name"===A?y.Za.promotion_name=C:y.Za[A]=C}}(x)),l.items.push(x.Za)}if(u)for(var w in u)h.hasOwnProperty(w)?n(h[w],u[w]):n(w,u[w])},q;if("dataLayer"===d.vtp_getEcommerceDataFrom){d.vtp_gtmCachedValues&&(q=d.vtp_gtmCachedValues.eventModel);q=q||pf(d.vtp_gtmEventId,"eventModel");if(!q){d.vtp_gtmCachedValues&&
(q=d.vtp_gtmCachedValues.ecommerce);q=q||pf(d.vtp_gtmEventId,"ecommerce")}}else q=d.vtp_ecommerceMacroData;if(ib(q)){c.push(5);for(var r in q)q.hasOwnProperty(r)&&("currencyCode"===r?n("currency",q.currencyCode):"impressions"===r&&e===E.bc?p(q.impressions,null):"promoClick"===r&&e===E.ke?p(q.promoClick.promotions,q.promoClick.actionField,!0):"promoView"===r&&e===E.me?p(q.promoView.promotions,q.promoView.actionField,!0):k.hasOwnProperty(r)?e===
k[r]&&p(q[r].products,q[r].actionField):l[r]=q[r]);B(l,f)}}var c=[];(function(d){Z.__gaawe=d;Z.__gaawe.h="gaawe";Z.__gaawe.i=!0;Z.__gaawe.priorityOverride=0})(function(d){var e=String(d.vtp_measurementIdOverride||d.vtp_measurementId),f=String(d.vtp_eventName);if("_"===f.charAt(0))J(d.vtp_gtmOnFailure);else{var h={};c=[];d.vtp_sendEcommerceData&&(0<=E.Qe.indexOf(f)||"checkout_option"===f)&&b(d,f,h);var k=oo(d.vtp_eventParameters,"name","value"),l;for(l in k)k.hasOwnProperty(l)&&(h[l]=k[l]);if(h.hasOwnProperty(E.Ca)||
d.vtp_userProperties){var n=h[E.Ca]||{};B(oo(d.vtp_userProperties,"name","value"),n);h[E.Ca]=n}Wq(h);0<c.length&&(h[E.md]=c);a(h,E.Pe,function(p){return Ma(p)});a(h,E.Re,function(p){return Number(p)});Ml(f,h,e);J(d.vtp_gtmOnSuccess)}})}();Z.g.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.h="ctv";Z.__ctv.i=!0;Z.__ctv.priorityOverride=0})(function(){return"90"})}();
Z.g.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(w){for(var y=[],A=w.split(","),C=0;C<A.length;C++){var F=Number(A[C]);if(isNaN(F))return[];p.test(A[C])||y.push(F)}return y}function c(){var w=0,y=0;return function(){var A=be(),C=A.height;w=Math.max(v.scrollLeft+A.width,w);y=Math.max(v.scrollTop+C,y);return{fh:w,gh:y}}}function d(){t=X("self");
u=t.document;v=u.scrollingElement||u.body&&u.body.parentNode;z=c()}function e(w,y,A,C){var F=l(y),D={},H;for(H in F){D.ab=H;if(F.hasOwnProperty(D.ab)){var M=Number(D.ab);w<M||(zn({event:"gtm.scrollDepth","gtm.scrollThreshold":M,"gtm.scrollUnits":A.toLowerCase(),"gtm.scrollDirection":C,"gtm.triggers":F[D.ab].join(",")}),Yl("sdl",y,function(P){return function(R){delete R[P.ab];return R}}(D),{}))}D={ab:D.ab}}}function f(){var w=z(),y=w.fh,A=w.gh,C=y/v.scrollWidth*100,F=A/v.scrollHeight*100;e(y,"horiz.pix",
q.vc,r.Se);e(C,"horiz.pct",q.uc,r.Se);e(A,"vert.pix",q.vc,r.hf);e(F,"vert.pct",q.uc,r.hf);Xl("sdl","pending",!1)}function h(){var w=250,y=!1;u.scrollingElement&&u.documentElement&&t.addEventListener&&(w=50,y=!0);var A=0,C=!1,F=function(){C?A=tn(F,w):(A=0,f(),En("sdl")&&!a()&&(od(t,"scroll",D),od(t,"resize",D),Xl("sdl","init",!1)));C=!1},D=function(){y&&z();A?C=!0:(A=tn(F,w),Xl("sdl","pending",!0))};return D}function k(w,y,A){if(y){var C=b(String(w));Yl("sdl",A,function(F){for(var D=0;D<C.length;D++){var H=
String(C[D]);F.hasOwnProperty(H)||(F[H]=[]);F[H].push(y)}return F},{})}}function l(w){return Zl("sdl",w,{})}function n(w){J(w.vtp_gtmOnSuccess);var y=w.vtp_uniqueTriggerId,A=w.vtp_horizontalThresholdsPixels,C=w.vtp_horizontalThresholdsPercent,F=w.vtp_verticalThresholdUnits,D=w.vtp_verticalThresholdsPixels,H=w.vtp_verticalThresholdsPercent;switch(w.vtp_horizontalThresholdUnits){case q.vc:k(A,y,"horiz.pix");break;case q.uc:k(C,y,"horiz.pct")}switch(F){case q.vc:k(D,y,"vert.pix");break;case q.uc:k(H,
y,"vert.pct")}En("sdl")?Zl("sdl","pending")||(x||(d(),x=!0),J(function(){return f()})):(d(),x=!0,v&&(Fn("sdl"),Xl("sdl","pending",!0),J(function(){f();if(a()){var M=h();nd(t,"scroll",M);nd(t,"resize",M)}else Xl("sdl","init",!1)})))}var p=/^\s*$/,q={uc:"PERCENT",vc:"PIXELS"},r={hf:"vertical",Se:"horizontal"},t,u,v,x=!1,z;(function(w){Z.__sdl=w;Z.__sdl.h="sdl";Z.__sdl.i=!0;Z.__sdl.priorityOverride=0})(function(w){w.vtp_triggerStartOption?n(w):gm(function(){n(w)})})}();

Z.g.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.h="jsm";Z.__jsm.i=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=X("google_tag_manager");var d=c&&c.e&&c.e(b);Hn(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();
Z.g.c=["google"],function(){(function(a){Z.__c=a;Z.__c.h="c";Z.__c.i=!0;Z.__c.priorityOverride=0})(function(a){Hn(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Z.g.e=["google"],function(){(function(a){Z.__e=a;Z.__e.h="e";Z.__e.i=!0;Z.__e.priorityOverride=0})(function(a){var b=String(pf(a.vtp_gtmEventId,"event"));a.vtp_gtmCachedValues&&(b=String(a.vtp_gtmCachedValues.event));return b})}();
Z.g.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Vl(c,"gtm.click");zn(d)}}(function(b){Z.__cl=b;Z.__cl.h="cl";Z.__cl.i=!0;Z.__cl.priorityOverride=0})(function(b){if(!En("cl")){var c=X("document");nd(c,"click",a,!0);Fn("cl")}J(b.vtp_gtmOnSuccess)})}();
Z.g.j=["google"],function(){(function(a){Z.__j=a;Z.__j.h="j";Z.__j.i=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=X(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];Hn(c,"j",a.vtp_gtmEventId);return c})}();

Z.g.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.h="u";Z.__u.i=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:yn("gtm.url",1))||vn();var d=b[a("vtp_component")];if(!d||"URL"==d)return xn(String(c));var e=re(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],n;h?wa(k)?n=k:n=String(k).replace(/\s+/g,
"").split(","):n=[String(k)];for(var p=0;p<n.length;p++){var q=ne(e,"QUERY",void 0,void 0,n[p]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=ne(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.g.v=["google"],function(){(function(a){Z.__v=a;Z.__v.h="v";Z.__v.i=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=yn(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;Hn(d,"v",a.vtp_gtmEventId);return d})}();
Z.g.ua=["google"],function(){function a(q){return N(q)}function b(q,r,t){var u=!1;if(Kd()&&!u&&!e[q]){var v=!N(E.D),x=function(){var z=Ci(),w="gtm"+cf(),y=n(r);y["&gtm"]=Sj(!0);var A={name:w};l(y,A,!0);var C=void 0,F=A._useUp;z(function(){var D=z.getByName(t);D&&(C=D.get("clientId"))});
z("create",q,A);v&&N(E.D)&&(v=!1,z(function(){var D=z.getByName(w);!D||D.get("clientId")===C&&F||(y["&gcs"]=Td(),y["&gcu"]="1",D.set(y),D.send("pageview"))}));z(function(){z.remove(w)})};Od(x,E.D);Od(x,E.B);e[q]=!0}}var c,d={},e={},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,
cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},h={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},k={urlPassthrough:!0},l=function(q,r,t){var u=0;if(q)for(var v in q)if(!k[v]&&
q.hasOwnProperty(v)&&(t&&f[v]||!t&&void 0===f[v])){var x=h[v]?Ma(q[v]):q[v];"anonymizeIp"!=v||x||(x=void 0);r[v]=x;u++}return u},n=function(q){var r={};q.vtp_gaSettings&&B(oo(q.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),r);B(oo(q.vtp_fieldsToSet,"fieldName","value"),r);N(E.D)||(r.storage="none");N(E.B)||(r.allowAdFeatures=!1,r.storeGac=!1);kl()||(r.allowAdFeatures=!1);jl()||(r.allowAdPersonalizationSignals=!1);q.vtp_transportUrl&&(r._x_19=q.vtp_transportUrl);if(Ma(r.urlPassthrough)){r._useUp=!0;var t=!1;Kd()&&!t&&(r._cs=a)}return r},p=function(q){function r(ma,U){void 0!==U&&D("set",ma,U)}var t={},u={},v={},x={};
if(q.vtp_gaSettings){var z=q.vtp_gaSettings;B(oo(z.vtp_contentGroup,"index","group"),u);B(oo(z.vtp_dimension,"index","dimension"),v);B(oo(z.vtp_metric,"index","metric"),x);var w=B(z);w.vtp_fieldsToSet=void 0;w.vtp_contentGroup=void 0;w.vtp_dimension=void 0;w.vtp_metric=void 0;q=B(q,w)}B(oo(q.vtp_contentGroup,"index","group"),u);B(oo(q.vtp_dimension,"index","dimension"),v);B(oo(q.vtp_metric,"index","metric"),x);var y=n(q),A=Ei(q.vtp_functionName);if(ua(A)){var C="",F="";q.vtp_setTrackerName&&"string"==
typeof q.vtp_trackerName?""!==q.vtp_trackerName&&(F=q.vtp_trackerName,C=F+"."):(F="gtm"+cf(),C=F+".");var D=function(ma){var U=[].slice.call(arguments,0);U[0]=C+U[0];A.apply(window,U)},H=function(ma,U){return void 0===U?U:ma(U)},M=function(ma,U){if(U)for(var Wa in U)U.hasOwnProperty(Wa)&&D("set",ma+Wa,U[Wa])},P=function(){var ma={transaction_id:"id",affiliation:"affiliation",value:"revenue",tax:"tax",shipping:"shipping",coupon:"coupon",
item_list_name:"list"},U={},Wa=(U[E.Vc]="click",U[E.ya]="detail",U[E.fb]="add",U[E.hb]="remove",U[E.Oa]="checkout",U[E.oa]="purchase",U[E.ib]="refund",U),Nc={item_id:"id",item_name:"name",item_list_name:"list",item_brand:"brand",item_variant:"variant",index:"position",promotion_id:"id",promotion_name:"name",creative_name:"creative",creative_slot:"position"},yb={item_category:0,item_category2:1,item_category3:2,item_category4:3,item_category5:4},zb=function(Ja,Fa){for(var Ca in Ja)ma.hasOwnProperty(Ca)&&
(Ja[Fa]=Ja[Fa]||{},Ja[Fa].actionField=Ja[Fa].actionField||{},Ja[Fa].actionField[ma[Ca]]=Ja[Ca])},Ab=function(Ja,Fa){for(var Ca="",Ta=0;Ta<Fa.length;Ta++)void 0!==Fa[Ta]&&(""!==Ca&&(Ca+="/"),Ca+=Fa[Ta]);Ja.category=Ca},Ra=function(Ja){for(var Fa=[],Ca={},Ta=0;Ta<Ja.length;Ca={$a:Ca.$a,yb:Ca.yb},Ta++){Ca.$a={};var Rc=Ja[Ta];Ca.yb=[];Ia(Rc,function(pe){return function(qc,Sc){Nc.hasOwnProperty(qc)?pe.$a[Nc[qc]]=Sc:yb.hasOwnProperty(qc)?pe.yb[yb[qc]]=Sc:pe.$a[qc]=Sc}}(Ca));0<Ca.yb.length&&Ab(Ca.$a,Ca.yb);
Fa.push(Ca.$a)}return Fa},Sa=function(Ja,Fa,Ca){if(!ib(Fa))return!1;for(var Ta=Ua(Object(Fa),Ca,[]),Rc=0;Ta&&Rc<Ta.length;Rc++)D(Ja,Ta[Rc]);return!!Ta&&0<Ta.length},T;if(q.vtp_useEcommerceDataLayer){var Oc=!1;if(q.vtp_useGA4SchemaForEcommerce){q.vtp_gtmCachedValues&&(T=q.vtp_gtmCachedValues.eventModel);T=T||pf(q.vtp_gtmEventId,"eventModel");Oc=!!T}Oc||(T=yn("ecommerce",1))}else q.vtp_ecommerceMacroData&&(T=q.vtp_ecommerceMacroData.ecommerce,!T&&q.vtp_useGA4SchemaForEcommerce&&(T=q.vtp_ecommerceMacroData));if(!ib(T))return;T=Object(T);if(q.vtp_useGA4SchemaForEcommerce){T=
B(T);T.currencyCode=T.currencyCode||T.currency;var gb;q.vtp_gtmCachedValues&&(gb=q.vtp_gtmCachedValues.event);gb=gb||String(pf(q.vtp_gtmEventId,"event"));if("view_item_list"===gb&&!T.impressions&&T.items)T.impressions=Ra(T.items);else if("view_promotion"===gb&&!T.promoView&&T.items)T.promoView={},T.promoView.promotions=Ra(T.items);else if("select_promotion"===gb&&!T.promoClick)T.items&&(T.promoClick=
{},T.promoClick.promotions=Ra(T.items)),zb(T,"promoClick");else if(Wa.hasOwnProperty(gb)){var Pc=Wa[gb];T[Pc]||(T.items&&(T[Pc]={},T[Pc].products=Ra(T.items)),zb(T,Pc))}}var qd=Ua(y,"currencyCode",T.currencyCode);void 0!==qd&&D("set","&cu",qd);Sa("ec:addImpression",T,"impressions");if(Sa("ec:addPromo",T[T.promoClick?"promoClick":"promoView"],"promotions")&&T.promoClick){D("ec:setAction","promo_click",T.promoClick.actionField);return}for(var pc="detail checkout checkout_option click add remove purchase refund".split(" "),
Mf="refund purchase remove checkout checkout_option add click detail".split(" "),Bb=0;Bb<pc.length;Bb++){var rd=T[pc[Bb]];if(rd){Sa("ec:addProduct",rd,"products");D("ec:setAction",pc[Bb],rd.actionField);if(hj)for(var Qc=0;Qc<Mf.length;Qc++){var oe=T[Mf[Qc]];if(oe){oe!==rd&&Bc(13);break}}break}}},R={name:F};l(y,R,!0);var ba=q.vtp_trackingId||t.trackingId;A("create",ba,R);D("set","&gtm",Sj(!0));var Q=!1;Kd()&&!Q&&(D("set","&gcs",Td()),b(ba,q,F));y._x_19&&(null==gd&&delete y._x_19,y._x_20&&!d[F]&&(d[F]=!0,A(Ji(F,String(y._x_20)))));q.vtp_enableRecaptcha&&D("require","recaptcha","recaptcha.js");(function(ma,U){void 0!==q[U]&&D("set",ma,q[U])})("nonInteraction",
"vtp_nonInteraction");M("contentGroup",u);M("dimension",v);M("metric",x);var L={};l(y,L,!1)&&D("set",L);var S;q.vtp_enableLinkId&&D("require","linkid","linkid.js");D("set","hitCallback",function(){var ma=y&&y.hitCallback;ua(ma)&&ma();q.vtp_gtmOnSuccess()});var W=function(ma,U){return void 0===q[ma]?t[U]:q[ma]};if("TRACK_EVENT"==q.vtp_trackType){
q.vtp_enableEcommerce&&(D("require","ec","ec.js"),P());var ha={hitType:"event",eventCategory:String(W("vtp_eventCategory","category")),eventAction:String(W("vtp_eventAction","action")),eventLabel:H(String,W("vtp_eventLabel","label")),eventValue:H(La,W("vtp_eventValue","value"))};l(S,ha,!1);D("send",ha);}else if("TRACK_SOCIAL"==q.vtp_trackType){}else if("TRACK_TRANSACTION"==q.vtp_trackType){}else if("TRACK_TIMING"==q.vtp_trackType){}else if("DECORATE_LINK"==q.vtp_trackType){}else if("DECORATE_FORM"==q.vtp_trackType){}else if("TRACK_DATA"==q.vtp_trackType){}else{q.vtp_enableEcommerce&&(D("require","ec","ec.js"),P());if(q.vtp_doubleClick||"DISPLAY_FEATURES"==q.vtp_advertisingFeaturesType){var Ib="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
"");D("require","displayfeatures",void 0,{cookieName:Ib})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==q.vtp_advertisingFeaturesType){var tb="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");D("require","adfeatures",{cookieName:tb})}S?D("send","pageview",S):D("send","pageview");
Ma(y.urlPassthrough)&&Gi(C)}if(!c){var eb=q.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";q.vtp_useInternalVersion&&!q.vtp_useDebugVersion&&(eb="internal/"+eb);c=!0;var pd=Cj(y._x_19,"/analytics.js"),Lf=Eh("https:","http:","//www.google-analytics.com/"+eb,y&&!!y.forceSSL);V("analytics.js"===eb&&pd?pd:Lf,function(){var ma=Ci();ma&&ma.loaded||q.vtp_gtmOnFailure();},q.vtp_gtmOnFailure)}}else J(q.vtp_gtmOnFailure)};
(function(q){Z.__ua=q;Z.__ua.h="ua";Z.__ua.i=!0;Z.__ua.priorityOverride=0})(function(q){Vd(function(){p(q)},[E.D,E.B])})}();




Z.g.opt=["google"],function(){function a(l){return N(l)}var b,c={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},d={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,
legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},e={urlPassthrough:!0},f=function(l,n,p){var q=0;if(l)for(var r in l)if(!e[r]&&l.hasOwnProperty(r)&&(p&&c[r]||!p&&void 0===c[r])){var t=d[r]?Ma(l[r]):l[r];"anonymizeIp"!=r||t||(t=void 0);n[r]=t;q++}return q},h=function(l){var n={};l.vtp_gaSettings&&B(oo(l.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),n);B(oo(l.vtp_fieldsToSet,"fieldName","value"),n);
N(E.D)||(n.storage="none");N(E.B)||(n.allowAdFeatures=!1,n.storeGac=!1);kl()||(n.allowAdFeatures=!1);jl()||(n.allowAdPersonalizationSignals=!1);l.vtp_transportUrl&&(n._x_19=l.vtp_transportUrl);if(Ma(n.urlPassthrough)){n._useUp=!0;var p=!1;Kd()&&!p&&(n._cs=a)}return n},k=function(l){if(l.vtp_gaSettings){var n=B(l.vtp_gaSettings);n.vtp_fieldsToSet=void 0;l=B(l,n)}var p=h(l),q=Ei(l.vtp_functionName);if(ua(q)){q.r=!0;var r="",t="";l.vtp_setTrackerName&&"string"===typeof l.vtp_trackerName?""!==l.vtp_trackerName&&(t=l.vtp_trackerName,r=t+"."):(t="gtm"+cf(),r=t+".");var u={name:t};f(p,u,!0);var v={"&gtm":Sj(!0)};f(p,v,!1);
var x=encodeURI(Eh("https:","http:","//www.google-analytics.com/"+(l.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!p.forceSSL));q("create",l.vtp_trackingId,u);q(r+"set",v);q(r+"require",l.vtp_optimizeContainerId,{dataLayer:"dataLayer"});q(l.vtp_gtmOnSuccess);q(r+"require","render");b||(b=!0,V(x,function(){return Ci().loaded||l.vtp_gtmOnFailure()},l.vtp_gtmOnFailure));var z=X("dataLayer"),w=z&&z.hide;w&&(w.end||!0===w["GTM-P3QGG32"])&&(w[l.vtp_optimizeContainerId]=!0)}else J(l.vtp_gtmOnFailure)};
(function(l){Z.__opt=l;Z.__opt.h="opt";Z.__opt.i=!0;Z.__opt.priorityOverride=0})(function(l){Vd(function(){k(l)},[E.D,E.B])})}();
Z.g.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.h="cid";Z.__cid.i=!0;Z.__cid.priorityOverride=0})(function(){return Qe.K})}();



Z.g.aev=["google"],function(){function a(t,u,v){var x=t||pf(u,"gtm");if(x)return x[v]}function b(t,u,v,x,z){z||(z="element");var w=u+"."+v,y;if(p.hasOwnProperty(w))y=p[w];else{var A=a(t,u,z);if(A&&(y=x(A),p[w]=y,q.push(w),35<q.length)){var C=q.shift();delete p[C]}}return y}function c(t,u,v,x){var z=a(t,u,r[v]);return void 0!==z?z:x}function d(t,u){if(!t)return!1;var v=e(vn());wa(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var x=[v],z=0;z<u.length;z++){var w=u[z];if(w.hasOwnProperty("is_regex"))if(w.is_regex)try{w=
new RegExp(w.domain)}catch(A){continue}else w=w.domain;if(w instanceof RegExp){if(w.test(t))return!1}else{var y=w;if(0!=y.length){if(0<=e(t).indexOf(y))return!1;x.push(e(y))}}}return!no(t,x)}function e(t){n.test(t)||(t="http://"+t);return ne(re(t),"HOST",!0)}function f(t,u,v,x){switch(t){case "SUBMIT_TEXT":return b(u,v,"FORM."+t,h,"formSubmitElement")||x;case "LENGTH":var z=b(u,v,"FORM."+t,k);return void 0===z?x:z;case "INTERACTED_FIELD_ID":return l(u,v,"id",x);case "INTERACTED_FIELD_NAME":return l(u,
v,"name",x);case "INTERACTED_FIELD_TYPE":return l(u,v,"type",x);case "INTERACTED_FIELD_POSITION":var w=a(u,v,"interactedFormFieldPosition");return void 0===w?x:w;case "INTERACT_SEQUENCE_NUMBER":var y=a(u,v,"interactSequenceNumber");return void 0===y?x:y;default:return x}}function h(t){switch(t.tagName.toLowerCase()){case "input":return sd(t,"value");case "button":return td(t);default:return null}}function k(t){if("form"===t.tagName.toLowerCase()&&t.elements){for(var u=0,v=0;v<t.elements.length;v++)en(t.elements[v])&&
u++;return u}}function l(t,u,v,x){var z=a(t,u,"interactedFormField");return z&&sd(z,v)||x}var n=/^https?:\/\//i,p={},q=[],r={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(t){Z.__aev=t;Z.__aev.h="aev";Z.__aev.i=!0;Z.__aev.priorityOverride=
0})(function(t){var u=t.vtp_gtmEventId,v=t.vtp_defaultValue,x=t.vtp_varType,z;t.vtp_gtmCachedValues&&(z=t.vtp_gtmCachedValues.gtm);switch(x){case "TAG_NAME":var w=a(z,u,"element");return w&&w.tagName||v;case "TEXT":return b(z,u,x,td)||v;case "URL":var y;a:{var A=String(a(z,u,"elementUrl")||v||""),C=re(A),F=String(t.vtp_component||"URL");switch(F){case "URL":y=A;break a;case "IS_OUTBOUND":y=
d(A,t.vtp_affiliatedDomains);break a;default:y=ne(C,F,t.vtp_stripWww,t.vtp_defaultPages,t.vtp_queryKey)}}return y;case "ATTRIBUTE":var D;if(void 0===t.vtp_attribute)D=c(z,u,x,v);else{var H=t.vtp_attribute,M=a(z,u,"element");D=M&&sd(M,H)||v||""}return D;case "MD":var P=t.vtp_mdValue,R=b(z,u,"MD",on);return P&&R?rn(R,P)||v:R||v;case "FORM":return f(String(t.vtp_component||"SUBMIT_TEXT"),z,u,v);default:var ba=c(z,u,x,v);Hn(ba,"aev",t.vtp_gtmEventId);return ba}})}();

Z.g.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.h="gas";Z.__gas.i=!0;Z.__gas.priorityOverride=0})(function(a){var b=B(a),c=b;c[kb.Ta]=null;c[kb.Fg]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Z.g.hl=["google"],function(){function a(f){return f.target&&f.target.location&&f.target.location.href?f.target.location.href:vn()}function b(f,h){nd(f,"hashchange",function(k){var l=a(k);h({source:"hashchange",state:null,url:xn(l),V:wn(l)})})}function c(f,h){nd(f,"popstate",function(k){var l=a(k);h({source:"popstate",state:k.state,url:xn(l),V:wn(l)})})}function d(f,h,k){var l=h.history,n=l[f];if(ua(n))try{l[f]=function(p,q,r){n.apply(l,[].slice.call(arguments,0));k({source:f,state:p,url:xn(vn()),
V:wn(vn())})}}catch(p){}}function e(){var f={source:null,state:X("history").state||null,url:xn(vn()),V:wn(vn())};return function(h){var k=f,l={};l[k.source]=!0;l[h.source]=!0;if(!l.popstate||!l.hashchange||k.V!=h.V){var n={event:"gtm.historyChange","gtm.historyChangeSource":h.source,"gtm.oldUrlFragment":f.V,"gtm.newUrlFragment":h.V,"gtm.oldHistoryState":f.state,"gtm.newHistoryState":h.state,"gtm.oldUrl":f.url,"gtm.newUrl":h.url};f=h;zn(n)}}}(function(f){Z.__hl=f;Z.__hl.h="hl";Z.__hl.i=!0;Z.__hl.priorityOverride=
0})(function(f){var h=X("self");if(!En("hl")){var k=e();b(h,k);c(h,k);d("pushState",h,k);d("replaceState",h,k);Fn("hl")}J(f.vtp_gtmOnSuccess)})}();
Z.g.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.h="remm";Z.__remm.i=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=a.vtp_defaultValue,h=0;h<c.length;h++){var k=c[h].key||"";d&&(k="^"+k+"$");var l=new RegExp(k,e);if(l.test(b)){var n=c[h].value;a.vtp_replaceAfterMatch&&(n=String(b).replace(l,n));f=n;break}}Hn(f,"remm",a.vtp_gtmEventId);return f})}();
Z.g.fsl=[],function(){function a(){var e=X("document"),f=c(),h=HTMLFormElement.prototype.submit;nd(e,"click",function(k){var l=k.target;if(l&&(l=vd(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&sd(l,"value")){var n;l.form?l.form.tagName?n=l.form:n=I.getElementById(l.form):n=vd(l,["form"],100);n&&f.store(n,l)}},!1);nd(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var n=k.defaultPrevented||!1===k.returnValue,p=b(l)&&!n,q=f.get(l),r=!0;if(d(l,function(){if(r){var t;
q&&(t=e.createElement("input"),t.type="hidden",t.name=q.name,t.value=q.value,l.appendChild(t));h.call(l);t&&l.removeChild(t)}},n,p,q))r=!1;else return n||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),n=!0;d(k,function(){n&&h.call(k)},!1,l)&&(h.call(k),n=!1)}}function b(e){var f=e.target;return f&&"_self"!==f&&"_parent"!==f&&"_top"!==f?!1:!0}function c(){var e=[],f=function(h){return Da(e,function(k){return k.form===
h})};return{store:function(h,k){var l=f(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=f(h);return k?k.button:null}}}function d(e,f,h,k,l){var n=Zl("fsl",h?"nv.mwt":"mwt",0),p;p=h?Zl("fsl","nv.ids",[]):Zl("fsl","ids",[]);if(!p.length)return!0;var q=Vl(e,"gtm.formSubmit",p),r=e.action;r&&r.tagName&&(r=e.cloneNode(!1).action);q["gtm.elementUrl"]=r;l&&(q["gtm.formSubmitElement"]=l);if(k&&n){if(!zn(q,Tm(f),n))return!1}else zn(q,function(){},n||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.h=
"fsl";Z.__fsl.i=!0;Z.__fsl.priorityOverride=0})(function(e){var f=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(f){var n=function(q){return Math.max(k,q)};Yl("fsl","mwt",n,0);h||Yl("fsl","nv.mwt",n,0)}var p=function(q){q.push(l);return q};Yl("fsl","ids",p,[]);h||Yl("fsl","nv.ids",p,[]);En("fsl")||(a(),Fn("fsl"));J(e.vtp_gtmOnSuccess)})}();Z.g.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.h="smm";Z.__smm.i=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=oo(a.vtp_map,"key","value")||{},d=c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue;Hn(d,"smm",a.vtp_gtmEventId);return d})}();



Z.g.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.h="paused";Z.__paused.i=!0;Z.__paused.priorityOverride=0})(function(a){J(a.vtp_gtmOnFailure)})}();

Z.g.zone=[],function(){function a(n){for(var p=n.vtp_boundaries||[],q=0;q<p.length;q++)if(!p[q])return!1;return!0}function b(n){var p=Qe.K,q=p+":"+n.vtp_gtmTagId,r=yn("gtm.uniqueEventId")||0,t=di(function(){return new h}),u=a(n),v=n.vtp_enableTypeRestrictions?n.vtp_whitelistedTypes.map(function(y){return y.typeId}):null;v=v&&$a(v,f);if(t.registerZone(q,r,u,v))for(var x=n.vtp_childContainers.map(function(y){return y.publicId}),z=0;z<x.length;z++){var w=String(x[z]);t.registerChild(w,p,q)&&(0!==w.indexOf("GTM-")?
(function(y,A){zn(arguments)}("js",new Date),l&&O.addTargetToGroup(w),Nl({},w)):Gn(w))}}var c={active:!1,isAllowed:function(){return!1},wh:function(){return!1}},d={active:!0,isAllowed:function(){return!0},wh:function(){return!0}},e={zone:!0,cn:!0,css:!0,ew:!0,eq:!0,ge:!0,gt:!0,lc:!0,le:!0,lt:!0,re:!0,sw:!0,um:!0},f={cl:["ecl"],ecl:["cl"],ehl:["hl"],hl:["ehl"]},h=function(){this.m={};this.o={}};h.prototype.checkState=function(n,p){var q=this.m[n];if(!q)return d;var r=this.checkState(q.Bf,p);if(!r.active)return c;
for(var t=[],u=0;u<q.ae.length;u++){var v=this.o[q.ae[u]];v.Qb(p)&&t.push(v)}return t.length?{active:!0,isAllowed:function(x,z){z=z||[];var w=r.isAllowed;if(!w(x,z))return!1;for(var y=0;y<t.length;++y)if(t[y].isAllowed(x,z))return!0;return!1}}:c};h.prototype.unregisterChild=function(n){delete this.m[n]};h.prototype.registerZone=function(n,p,q,r){var t=this.o[n];if(t)return t.C(p,q),!1;if(!q)return!1;this.o[n]=new k(p,r);return!0};h.prototype.registerChild=function(n,p,q){var r=this.m[n];if(!r&&O[n]||
r&&r.Bf!==p)return!1;if(r)return r.ae.push(q),!1;this.m[n]={Bf:p,ae:[q]};return!0};var k=function(n,p){this.m=[{eventId:n,Qb:!0}];this.o=null;if(p){this.o={};for(var q=0;q<p.length;q++)this.o[p[q]]=!0}};k.prototype.C=function(n,p){var q=this.m[this.m.length-1];n<=q.eventId||q.Qb!=p&&this.m.push({eventId:n,Qb:p})};k.prototype.Qb=function(n){if(!this.m||0==this.m.length)return!1;for(var p=this.m.length-1;0<=p;p--)if(this.m[p].eventId<=n)return this.m[p].Qb;return!1};k.prototype.isAllowed=function(n,
p){p=p||[];if(!this.o||e[n]||this.o[n])return!0;for(var q=0;q<p.length;++q)if(this.o[p[q]])return!0;return!1};var l=!1;(function(n){Z.__zone=n;Z.__zone.h="zone";Z.__zone.i=!0;Z.__zone.priorityOverride=0})(function(n){b(n);J(n.vtp_gtmOnSuccess)})}();
Z.g.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var n=I.createElement("script");n.async=!1;n.type="text/javascript";n.id=k.id;n.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(n.charset=k.charset);var p=k.getAttribute("data-gtmsrc");p&&(n.src=p,id(n,l));d.insertBefore(n,null);p||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];k.firstChild;)q.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,q,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(r){J(h)}}}var c=function(d){if(I.body){var e=
d.vtp_gtmOnFailure,f=In(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.qh,k=f.onSuccess;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(I.body,ud(h),k,e)()}else tn(function(){c(d)},
200)};Z.__html=c;Z.__html.h="html";Z.__html.i=!0;Z.__html.priorityOverride=0}();






Z.g.lcl=[],function(){function a(){var c=X("document"),d=0,e=function(f){var h=f.target;if(h&&3!==f.which&&!(f.th||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;h=vd(h,["a","area"],100);if(!h)return f.returnValue;var k=f.defaultPrevented||!1===f.returnValue,l=Zl("lcl",k?"nv.mwt":"mwt",0),n;n=k?Zl("lcl","nv.ids",[]):Zl("lcl","ids",[]);if(n.length){var p=Vl(h,"gtm.linkClick",n);if(b(f,h,c)&&!k&&l&&h.href){var q=!!Da(String(xd(h,"rel")||"").split(" "),function(u){return"noreferrer"===u.toLowerCase()});
q&&Bc(36);var r=X((xd(h,"target")||"_self").substring(1)),t=!0;if(zn(p,Tm(function(){var u;if(u=t&&r){var v;a:if(q){var x;try{x=new MouseEvent(f.type,{bubbles:!0})}catch(z){if(!c.createEvent){v=!1;break a}x=c.createEvent("MouseEvents");x.initEvent(f.type,!0,!0)}x.th=!0;f.target.dispatchEvent(x);v=!0}else v=!1;u=!v}u&&(r.location.href=xd(h,"href"))}),l))t=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else zn(p,function(){},l||2E3);return!0}}};nd(c,"click",e,!1);nd(c,"auxclick",
e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=xd(d,"href"),h=f.indexOf("#"),k=xd(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=xn(f),n=xn(e.location);return l!==n}return!0}(function(c){Z.__lcl=c;Z.__lcl.h="lcl";Z.__lcl.i=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);
if(!f||0>=f)f=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(n){return Math.max(f,n)};Yl("lcl","mwt",k,0);e||Yl("lcl","nv.mwt",k,0)}var l=function(n){n.push(h);return n};Yl("lcl","ids",l,[]);e||Yl("lcl","nv.ids",l,[]);En("lcl")||(a(),Fn("lcl"));J(c.vtp_gtmOnSuccess)})}();


var hr={};hr.macro=function(a){if($m.ud.hasOwnProperty(a))return $m.ud[a]},hr.onHtmlSuccess=$m.qf(!0),hr.onHtmlFailure=$m.qf(!1);hr.dataLayer=kf;hr.callback=function(a){af.hasOwnProperty(a)&&ua(af[a])&&af[a]();delete af[a]};hr.bootstrap=0;hr._spx=!1;function ir(){O[Qe.K]=hr;Xa(bf,Z.g);Ub=Ub||$m;Vb=cc}
function jr(){yd.o().o();O=G.google_tag_manager=G.google_tag_manager||{};qk();Og.enable_gbraid_cookie_write=!0;if(O[Qe.K]){var a=O.zones;a&&a.unregisterChild(Qe.K);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Nb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)Qb.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)Pb.push(h[k]);for(var l=b.rules||[],n=0;n<l.length;n++){for(var p=l[n],q={},r=0;r<p.length;r++)q[p[r][0]]=Array.prototype.slice.call(p[r],1);Ob.push(q)}Sb=Z;Tb=jo;ir();Zm();gi=!1;hi=0;if("interactive"==I.readyState&&!I.createEventObject||"complete"==I.readyState)ji();
else{nd(I,"DOMContentLoaded",ji);nd(I,"readystatechange",ji);if(I.createEventObject&&I.documentElement.doScroll){var t=!0;try{t=!G.frameElement}catch(z){}t&&ki()}nd(G,"load",ji)}dm=!1;"complete"===I.readyState?fm():nd(G,"load",fm);a:{if(!hj)break a;G.setInterval(gj,
864E5);}Ze=(new Date).getTime();}}
(function(a){if(!G["__TAGGY_INSTALLED"]){var b=!1;if(I.referrer){var c=re(I.referrer);b="cct.google"===me(c,"host")}if(!b){var d=Af("googTaggyReferrer");b=d.length&&d[0].length}b&&(G["__TAGGY_INSTALLED"]=!0,jd("https://cct.google/taggy/agent.js"))}var f=function(){var n=G["google.tagmanager.debugui2.queue"];n||(n=[],G["google.tagmanager.debugui2.queue"]=n,jd("https://www.googletagmanager.com/debug/bootstrap"));var p={messageType:"CONTAINER_STARTING",data:{scriptSource:gd,containerProduct:"GTM",debug:!1}};p.data.resume=function(){a()};Qe.Uf&&(p.data.initialPublish=!0);n.push(p)},h="x"===ne(G.location,"query",!1,void 0,"gtm_debug");if(!h&&I.referrer){var k=re(I.referrer);h="tagassistant.google.com"===me(k,"host")}if(!h){var l=Af("__TAG_ASSISTANT");h=l.length&&l[0].length}G.__TAG_ASSISTANT_API&&(h=!0);h&&gd?f():a()})(jr);

})()
