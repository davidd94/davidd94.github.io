
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"86",
  
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
      "function":"__opt",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_optimizeContainerId":"GTM-PBPF8MF",
      "vtp_gaSettings":["macro",28],
      "tag_id":233
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
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-WR7DKSX","nickname","Enfamil Media Container"]],
      "vtp_boundaries":["list"],
      "vtp_enableTypeRestrictions":false,
      "tag_id":317
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,100",
      "vtp_verticalThresholdOn":true,
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"31802580_25",
      "vtp_enableTriggerStartOption":true,
      "tag_id":318
    },{
      "function":"__hl",
      "tag_id":319
    },{
      "function":"__cl",
      "tag_id":320
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"31802580_260",
      "tag_id":321
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"31802580_263",
      "tag_id":322
    },{
      "function":"__cl",
      "tag_id":323
    },{
      "function":"__cl",
      "tag_id":324
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"31802580_273",
      "tag_id":325
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"31802580_283",
      "tag_id":326
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"31802580_288",
      "tag_id":327
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"31802580_296",
      "tag_id":328
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"31802580_298",
      "tag_id":329
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"31802580_315",
      "tag_id":330
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"31802580_323",
      "tag_id":331
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
      "arg0":["macro",0],
      "arg1":"gtm.dom"
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
    [["if",15],["add",0,29,43,56,71,57,58,59,60,61,62,63,64,65,66,67,68,69,70]],
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
    [["if",38,39],["add",37,74],["block",73]],
    [["if",15,40],["add",39]],
    [["if",15,41],["add",40]],
    [["if",42],["add",44]],
    [["if",43],["add",45]],
    [["if",44,45,46],["add",46]],
    [["if",47,48,49,50],["add",47]],
    [["if",49,51,52],["add",48]],
    [["if",46,53,54],["add",49]],
    [["if",46,55,56],["add",50]],
    [["if",49,57,58],["add",51]],
    [["if",59,60,61,62],["add",52]],
    [["if",49,63,64,65],["add",53]],
    [["if",49,66,67],["add",54]],
    [["if",49,68,69],["add",54]],
    [["if",49,70,71,72,73],["add",55]],
    [["if",49,70,71,74,75],["add",55]],
    [["if",76],["add",72]],
    [["if",39],["add",73]]]
},
"runtime":[]




};

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ca=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ba(a)}},da="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ea;
if("function"==typeof Object.setPrototypeOf)ea=Object.setPrototypeOf;else{var ia;a:{var ja={a:!0},ma={};try{ma.__proto__=ja;ia=ma.a;break a}catch(a){}ia=!1}ea=ia?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var oa=ea,pa=function(a,b){a.prototype=da(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Xh=b.prototype},qa=this||self,ra=/^[\w+/_-]+[=]{0,2}$/,sa=null,ta=function(a){var b=a.querySelector&&a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");if(c&&ra.test(c))return c}return""},ua=function(a){return a};var va={},wa=function(a,b){va[a]=va[a]||[];va[a][b]=!0},ya=function(a){for(var b=[],c=va[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var za=function(){},Ba=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},Ca=function(a){return"number"==typeof a&&!isNaN(a)},Ea=function(a){var b="[object Array]"==Object.prototype.toString.call(Object(a));Array.isArray?Array.isArray(a)!==b&&wa("TAGGING",4):wa("TAGGING",5);return b},Fa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ga=function(a,b){if(a&&Ea(a))for(var c=
0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ha=function(a,b){if(!Ca(a)||!Ca(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},La=function(a,b){for(var c=new Ja,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ma=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Na=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Oa=
function(a){return Math.round(Number(a))||0},Pa=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ra=function(a){var b=[];if(Ea(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Va=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Wa=function(){return(new Date).getTime()},Ja=function(){this.prefix="gtm.";this.values={}};Ja.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ja.prototype.get=function(a){return this.values[this.prefix+a]};
var Xa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},$a=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},ab=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},bb=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},cb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},eb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},gb=/^\w{1,9}$/,
hb=function(a){var b=[];Ma(a,function(c,d){gb.test(c)&&d&&b.push(c)});return b.join(",")};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var ib=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,jb=function(a){if(null==a)return String(a);var b=ib.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},kb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},mb=function(a){if(!a||"object"!=jb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!kb(a,"constructor")&&!kb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||kb(a,b)},m=function(a,b){var c=b||("array"==jb(a)?[]:{}),d;for(d in a)if(kb(a,d)){var e=a[d];"array"==jb(e)?("array"!=jb(c[d])&&(c[d]=[]),c[d]=m(e,c[d])):mb(e)?(mb(c[d])||(c[d]={}),c[d]=m(e,c[d])):c[d]=e}return c};var qb=function(a){if(void 0===a||Ea(a)||mb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var rb=function(){var a=function(b){return{toString:function(){return b}}};return{Cf:a("consent"),Df:a("consent_always_fire"),Ud:a("convert_case_to"),Vd:a("convert_false_to"),Wd:a("convert_null_to"),Xd:a("convert_true_to"),Yd:a("convert_undefined_to"),Hh:a("debug_mode_metadata"),Oa:a("function"),qg:a("instance_name"),sg:a("live_only"),ug:a("malware_disabled"),vg:a("metadata"),Kh:a("original_activity_id"),Lh:a("original_vendor_template_id"),xg:a("once_per_event"),Le:a("once_per_load"),Nh:a("priority_override"),
Qe:a("setup_tags"),Re:a("tag_id"),Se:a("teardown_tags")}}();
var sb=[],tb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},ub=function(a){return tb[a]},vb=/[\x00\x22\x26\x27\x3c\x3e]/g;var Ab=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Cb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Db=function(a){return Cb[a]};sb[7]=function(a){return String(a).replace(Ab,Db)};
sb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Ab,Db)+"'"}};var Jb=/['()]/g,Kb=function(a){return"%"+a.charCodeAt(0).toString(16)};sb[12]=function(a){var b=
encodeURIComponent(String(a));Jb.lastIndex=0;return Jb.test(b)?b.replace(Jb,Kb):b};var Lb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Mb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Pb=function(a){return Mb[a]};sb[16]=function(a){return a};var Rb;
var Sb=[],Tb=[],Ub=[],Vb=[],Wb=[],Xb={},Yb,Zb,$b,ac=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Xb[c],e={},f;for(f in a)if(a.hasOwnProperty(f))if(0===f.indexOf("vtp_"))d&&b&&b.We&&b.We(a[f]),e[void 0!==d?f:f.substr(4)]=a[f];else if(f===rb.Df.toString()&&a[f]){}return void 0!==d?d(e):Rb(c,e,b)},cc=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=bc(a[e],b,c));return d},bc=function(a,b,c){if(Ea(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(bc(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=Sb[f];if(!h||b.zd(h))return;c[f]=!0;try{var k=cc(h,b,c);k.vtp_gtmEventId=b.id;
d=ac(k,b);$b&&(d=$b.Lg(d,k))}catch(z){b.jf&&b.jf(z,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[bc(a[l],b,c)]=bc(a[l+1],b,c);return d;case "template":d=[];for(var n=!1,q=1;q<a.length;q++){var p=bc(a[q],b,c);Zb&&(n=n||p===Zb.hc);d.push(p)}return Zb&&n?Zb.Og(d):d.join("");case "escape":d=bc(a[1],b,c);if(Zb&&Ea(a[1])&&"macro"===a[1][0]&&Zb.gh(a))return Zb.uh(d);d=String(d);for(var r=2;r<a.length;r++)sb[a[r]]&&(d=sb[a[r]](d));return d;case "tag":var u=a[1];if(!Vb[u])throw Error("Unable to resolve tag reference "+
u+".");return d={bf:a[2],index:u};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=dc(t,b,c),x=!!a[4];return x||2!==v?x!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},dc=function(a,b,c){try{return Yb(cc(a,b,c))}catch(d){JSON.stringify(a)}return 2};var ec=null,ic=function(a){function b(p){for(var r=0;r<p.length;r++)d[p[r]]=!0}var c=[],d=[];ec=fc(a);for(var e=0;e<Tb.length;e++){var f=Tb[e],h=hc(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var n=[],q=0;q<Vb.length;q++)c[q]&&!d[q]&&(n[q]=!0);return n},hc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=ec(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=ec(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},fc=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=dc(Ub[c],a));return b[c]}};var jc={Lg:function(a,b){b[rb.Ud]&&"string"===typeof a&&(a=1==b[rb.Ud]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(rb.Wd)&&null===a&&(a=b[rb.Wd]);b.hasOwnProperty(rb.Yd)&&void 0===a&&(a=b[rb.Yd]);b.hasOwnProperty(rb.Xd)&&!0===a&&(a=b[rb.Xd]);b.hasOwnProperty(rb.Vd)&&!1===a&&(a=b[rb.Vd]);return a}};var B={zb:"_ee",nc:"_syn_or_mod",Oh:"_uei",ed:"_eu",Mh:"_pci",Sc:"event_callback",Yb:"event_timeout",Z:"gtag.config",ra:"gtag.get",qa:"purchase",Ya:"refund",La:"begin_checkout",Wa:"add_to_cart",Xa:"remove_from_cart",Mf:"view_cart",be:"add_to_wishlist",Ca:"view_item",ae:"view_promotion",$d:"select_promotion",Nc:"select_item",Vb:"view_item_list",Zd:"add_payment_info",Lf:"add_shipping_info",Ea:"value_key",Da:"value_callback",ia:"allow_ad_personalization_signals",$c:"restricted_data_processing",pb:"allow_google_signals",
ja:"cookie_expires",sb:"cookie_update",wb:"session_duration",bc:"session_engaged_time",va:"user_properties",Ga:"transport_url",N:"ads_data_redaction",dd:"user_data",Zb:"first_party_collection",B:"ad_storage",I:"analytics_storage",Sd:"region",Td:"wait_for_update"};
B.Ee=[B.qa,B.Ya,B.La,B.Wa,B.Xa,B.Mf,B.be,B.Ca,B.ae,B.$d,B.Vb,B.Nc,B.Zd,B.Lf];B.De=[B.ia,B.pb,B.sb];B.Fe=[B.ja,B.Yb,B.wb,B.bc];var E=function(a){wa("GTM",a)};var Gc=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Hc=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Ic,Jc=function(){if(void 0===Ic){var a=null,b=qa.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ua,createScript:ua,createScriptURL:ua})}catch(c){qa.console&&qa.console.error(c.message)}Ic=a}else Ic=a}return Ic};var Lc=function(a,b){this.m=b===Kc?a:""};Lc.prototype.toString=function(){return this.m+""};var Kc={};var Mc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Nc;a:{var Qc=qa.navigator;if(Qc){var Rc=Qc.userAgent;if(Rc){Nc=Rc;break a}}Nc=""}var Sc=function(a){return-1!=Nc.indexOf(a)};var Uc=function(a,b,c){this.m=c===Tc?a:""};Uc.prototype.toString=function(){return this.m.toString()};var Vc=function(a){return a instanceof Uc&&a.constructor===Uc?a.m:"type_error:SafeHtml"},Tc={},Wc=function(a){var b=Jc(),c=b?b.createHTML(a):a;return new Uc(c,null,Tc)},Xc=new Uc(qa.trustedTypes&&qa.trustedTypes.emptyHTML||"",0,Tc);var Yc=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);var c=a.firstChild.firstChild;a.innerHTML=Vc(Xc);return!c.parentElement}),Zc=function(a,b){if(Yc())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Vc(b)};var G=window,I=document,$c=navigator,ad=I.currentScript&&I.currentScript.src,bd=function(a,b){var c=G[a];G[a]=void 0===c?b:c;return G[a]},cd=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},dd=function(a,b,c){var d=I.createElement("script");d.type="text/javascript";d.async=!0;var e,f=Jc(),h=f?f.createScriptURL(a):a;e=new Lc(h,Kc);d.src=e instanceof Lc&&e.constructor===Lc?e.m:"type_error:TrustedResourceUrl";
var k;var l=d.ownerDocument&&d.ownerDocument.defaultView;l&&l!=qa?k=ta(l.document):(null===sa&&(sa=ta(qa.document)),k=sa);k&&d.setAttribute("nonce",k);cd(d,b);c&&(d.onerror=c);var n=I.getElementsByTagName("script")[0]||I.body||I.head;n.parentNode.insertBefore(d,n);return d},ed=function(){if(ad){var a=ad.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},fd=function(a,b){var c=I.createElement("iframe");c.height="0";c.width="0";c.style.display="none";
c.style.visibility="hidden";var d=I.body&&I.body.lastChild||I.body||I.head;d.parentNode.insertBefore(c,d);cd(c,b);void 0!==a&&(c.src=a);return c},gd=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},hd=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},id=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+
b,c)},J=function(a){G.setTimeout(a,0)},jd=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},kd=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},ld=function(a){var b=I.createElement("div"),c=Wc("A<div>"+a+"</div>");Zc(b,c);b=b.lastChild;for(var d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},od=function(a,b,c){c=c||100;for(var d={},e=0;e<
b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},pd=function(a){$c.sendBeacon&&$c.sendBeacon(a)||gd(a)},qd=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var rd=function(a,b){this.m=a;this.defaultValue=void 0===b?!1:b};var sd=new rd(1936,!0),td=new rd(364295992),ud=new rd(1933);var vd=function(){var a={};this.m=function(b,c){return null!=a[b]?a[b]:c};this.o=function(){a[ud.m]=!0}};vd.m=void 0;vd.o=function(){return vd.m?vd.m:vd.m=new vd};var wd=function(a){return vd.o().m(a.m,a.defaultValue)};var xd=[];function yd(){var a=bd("google_tag_data",{});a.ics||(a.ics={entries:{},set:zd,update:Ad,addListener:Bd,notifyListeners:Cd,active:!1,usedDefault:!1});return a.ics}
function zd(a,b,c,d,e,f){var h=yd();h.active=!0;h.usedDefault=!0;if(void 0!=b){var k=h.entries,l=k[a]||{},n=l.region,q=c&&g(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(""===d||q===e||(q===d?n!==e:!q&&!n)){var p=!!(f&&0<f&&void 0===l.update),r={region:q,initial:"granted"===b,update:l.update,quiet:p};if(""!==d||!1!==l.initial)k[a]=r;p&&G.setTimeout(function(){k[a]===r&&r.quiet&&(r.quiet=!1,Dd(a),Cd(),wa("TAGGING",2))},f)}}}
function Ad(a,b){var c=yd();c.active=!0;if(void 0!=b){var d=Ed(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var h=Ed(a);f.quiet?(f.quiet=!1,Dd(a)):h!==d&&Dd(a)}}function Bd(a,b){xd.push({Ye:a,Wg:b})}function Dd(a){for(var b=0;b<xd.length;++b){var c=xd[b];Ea(c.Ye)&&-1!==c.Ye.indexOf(a)&&(c.nf=!0)}}function Cd(a){for(var b=0;b<xd.length;++b){var c=xd[b];if(c.nf){c.nf=!1;try{c.Wg({Xe:a})}catch(d){}}}}
var Ed=function(a){var b=yd().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},Fd=function(a){return(yd().entries[a]||{}).initial},Gd=function(a){return!(yd().entries[a]||{}).quiet},Hd=function(){return wd(ud)?yd().active:!1},Id=function(){return yd().usedDefault},Jd=function(a,b){yd().addListener(a,b)},Kd=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!Gd(b[e]))return!0;return!1}if(c()){var d=!1;Jd(b,function(e){d||c()||(d=!0,a(e))})}else a({})},Ld=
function(a,b){if(!1===Ed(b)){var c=!1;Jd([b],function(d){!c&&Ed(b)&&(a(d),c=!0)})}};function Md(a){for(var b=[],c=0;c<Nd.length;c++){var d=a(Nd[c]);b[c]=!0===d?"1":!1===d?"0":"-"}return b.join("")}
var Nd=[B.B,B.I],Od=function(a){var b=a[B.Sd];b&&E(40);var c=a[B.Td];c&&E(41);for(var d=Ea(b)?b:[b],e=0;e<d.length;++e)for(var f in a)if(a.hasOwnProperty(f)&&f!==B.Sd&&f!==B.Td)if(-1<Fa(Nd,f)){var h=f,k=a[f],l=d[e];yd().set(h,k,l,"US","US-CA",c)}else{}},Pd=function(a,b){for(var c in a)if(a.hasOwnProperty(c))if(-1<
Fa(Nd,c)){var d=c,e=a[c];yd().update(d,e)}else{}yd().notifyListeners(b)},Qd=function(a){var b=Ed(a);return void 0!=b?b:!0},Rd=function(){return"G1"+Md(Ed)},Sd=function(a,b){Kd(a,b)};var Ud=function(a){return Td?I.querySelectorAll(a):null},Vd=function(a,b){if(!Td)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!I.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Wd=!1;if(I.querySelectorAll)try{var Xd=I.querySelectorAll(":root");Xd&&1==Xd.length&&Xd[0]==I.documentElement&&(Wd=!0)}catch(a){}var Td=Wd;var Yd=function(a){if(I.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!G.getComputedStyle)return!0;var c=G.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-1)),f=Math.min(h,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=G.getComputedStyle(d,
null))}return!1};
var Zd=function(){var a=I.body,b=I.documentElement||a&&a.parentElement,c,d;if(I.compatMode&&"BackCompat"!==I.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,h){return f&&h?Math.min(f,h):Math.max(f,h)};E(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},$d=function(a){var b=Zd(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,h=e.right-e.left;return f&&h?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var ge=/:[0-9]+$/,ke=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},ne=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=le(a.protocol)||le(G.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:G.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||G.location.hostname).replace(ge,"").toLowerCase());return me(a,b,c,d,e)},me=function(a,b,c,d,e){var f,h=le(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=oe(a);break;case "protocol":f=h;break;case "host":f=a.hostname.replace(ge,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==h?80:"https"==h?443:""));break;case "path":a.pathname||a.hostname||wa("TAGGING",
1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Fa(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=ke(f,e,void 0));break;case "extension":var n=a.pathname.split(".");f=1<n.length?n[n.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},le=function(a){return a?a.replace(":","").toLowerCase():""},oe=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");
b=0>c?a.href:a.href.substr(0,c)}return b},pe=function(a){var b=I.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||wa("TAGGING",1),c="/"+c);var d=b.hostname.replace(ge,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},qe=function(a){function b(n){var q=n.split("=")[0];return 0>d.indexOf(q)?n:q+"=0"}function c(n){return n.split("&").map(b).filter(function(q){return void 0!=q}).join("&")}var d="gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
e=pe(a),f=a.split(/[?#]/)[0],h=e.search,k=e.hash;"?"===h[0]&&(h=h.substring(1));"#"===k[0]&&(k=k.substring(1));h=c(h);k=c(k);""!==h&&(h="?"+h);""!==k&&(k="#"+k);var l=""+f+h+k;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var re=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),se=new RegExp(/support|noreply/i),te=["SCRIPT","IMG","SVG","PATH","BR"],ue=["BR"];function ve(a){var b;if(a===I.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var h=0;h<f.childElementCount;h++)if(f.children[h]===a){e=h+1;break a}e=-1}else e=1}d=ve(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
function we(a,b){if(1>=a.length)return a;var c=a.filter(b);return 0==c.length?a:c}function xe(a){if(0==a.length)return null;var b;b=we(a,function(c){return!se.test(c.Lc)});b=we(b,function(c){return"INPUT"===c.element.tagName.toUpperCase()});b=we(b,function(c){return!Yd(c.element)});return b[0]}
function ye(){var a;var b=[],c=I.body;if(c){for(var d=c.querySelectorAll("*"),e=0;e<d.length&&1E4>e;e++){var f=d[e];if(!(0<=te.indexOf(f.tagName.toUpperCase()))){for(var h=!1,k=0;k<f.childElementCount&&1E4>k;k++)if(!(0<=ue.indexOf(f.children[k].tagName.toUpperCase()))){h=!0;break}h||b.push(f)}}a={elements:b,status:1E4<d.length?"2":"1"}}else a={elements:b,status:"4"};for(var l=a,n=l.elements,q=[],p=0;p<n.length;p++){var r=n[p],u=r.textContent;r.value&&(u=r.value);if(u){var t=u.match(re);if(t){var v=
t[0],x;if(G.location){var z=me(G.location,"host",!0);x=0<=v.toLowerCase().indexOf(z)}else x=!1;x||q.push({element:r,Lc:v})}}}var w=xe(q),y=[];if(w){var A=w.element;y.push({Lc:w.Lc,querySelector:ve(A),tagName:A.tagName,isVisible:!Yd(A),type:1,hf:!0})}return{elements:y,status:10<q.length?"3":l.status}}var Me={},L=null,Ne=Math.random();Me.D="GTM-P3QGG32";Me.mc="4e1";Me.Jh="";Me.Ff="ChAI8IOPhAYQp/bkooqhsMZtEiQA32zavNKVCz+eh5ylRV+ysfXPuIfFwVXoirIgz+b5rkh06CMaAusg";var Oe={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Pe={__paused:!0,__tg:!0},Qe;for(Qe in Oe)Oe.hasOwnProperty(Qe)&&(Pe[Qe]=!0);var Re="www.googletagmanager.com/gtm.js";
var Se=Re,Te=Pa(""),Ue=null,Ve=null,We="//www.googletagmanager.com/a?id="+Me.D+"&cv=86",Xe={},Ye={},Ze=function(){var a=L.sequence||1;L.sequence=a+1;return a};Me.Ef="";var $e={},af=new Ja,bf={},cf={},ff={name:"dataLayer",set:function(a,b){m(eb(a,b),bf);df()},get:function(a){return ef(a,2)},reset:function(){af=new Ja;bf={};df()}},ef=function(a,b){return 2!=b?af.get(a):gf(a)},gf=function(a){var b,c=a.split(".");b=b||[];for(var d=bf,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==Fa(b,d))return}return d},hf=function(a,b){cf.hasOwnProperty(a)||(af.set(a,b),m(eb(a,b),bf),df())},df=function(a){Ma(cf,function(b,c){af.set(b,c);m(eb(b,
void 0),bf);m(eb(b,c),bf);a&&delete cf[b]})},kf=function(a,b,c){$e[a]=$e[a]||{};$e[a][b]=jf(b,c)},jf=function(a,b){var c,d=1!==(void 0===b?2:b)?gf(a):af.get(a);"array"===jb(d)||"object"===jb(d)?c=m(d):c=d;return c},lf=function(a,b){if($e[a])return $e[a][b]},mf=function(a,b){$e[a]&&delete $e[a][b]};var pf={},qf=function(a,b){if(G._gtmexpgrp&&G._gtmexpgrp.hasOwnProperty(a))return G._gtmexpgrp[a];void 0===pf[a]&&(pf[a]=Math.floor(Math.random()*b));return pf[a]};var rf=function(a){var b=1,c,d,e;if(a)for(b=0,d=a.length-1;0<=d;d--)e=a.charCodeAt(d),b=(b<<6&268435455)+e+(e<<14),c=b&266338304,b=0!=c?b^c>>21:b;return b};function sf(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};function tf(a){return wd(td)?"null"!==a.origin:!0};var wf=function(a,b,c,d){return uf(d)?sf(a,String(b||vf()),c):[]},zf=function(a,b,c,d,e){if(uf(e)){var f=xf(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=yf(f,function(h){return h.wc},b);if(1===f.length)return f[0].id;f=yf(f,function(h){return h.Mb},c);return f[0]?f[0].id:void 0}}};function Af(a,b,c,d){var e=vf(),f=window;tf(f)&&(f.document.cookie=a);var h=vf();return e!=h||void 0!=c&&0<=wf(b,h,!1,d).indexOf(c)}
var Ef=function(a,b,c){function d(u,t,v){if(null==v)return delete h[t],u;h[t]=v;return u+"; "+t+"="+v}function e(u,t){if(null==t)return delete h[t],u;h[t]=!0;return u+"; "+t}if(!uf(c.Aa))return 2;var f;void 0==b?f=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Bf(b),f=a+"="+b);var h={};f=d(f,"path",c.path);var k;c.expires instanceof Date?k=c.expires.toUTCString():null!=c.expires&&(k=""+c.expires);f=d(f,"expires",k);f=d(f,"max-age",c.Uh);f=d(f,"samesite",
c.Vh);c.Wh&&(f=e(f,"secure"));var l=c.domain;if("auto"===l){for(var n=Cf(),q=0;q<n.length;++q){var p="none"!==n[q]?n[q]:void 0,r=d(f,"domain",p);r=e(r,c.flags);if(!Df(p,c.path)&&Af(r,a,b,c.Aa))return 0}return 1}l&&"none"!==l&&(f=d(f,"domain",l));f=e(f,c.flags);return Df(l,c.path)?1:Af(f,a,b,c.Aa)?0:1},Kf=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Ef(a,b,c)};
function yf(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function xf(a,b,c){for(var d=[],e=wf(a,void 0,void 0,c),f=0;f<e.length;f++){var h=e[f].split("."),k=h.shift();if(!b||-1!==b.indexOf(k)){var l=h.shift();l&&(l=l.split("-"),d.push({id:h.join("."),wc:1*l[0]||1,Mb:1*l[1]||1}))}}return d}
var Bf=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Lf=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Mf=/(^|\.)doubleclick\.net$/i,Df=function(a,b){return Mf.test(window.document.location.hostname)||"/"===b&&Lf.test(a)},vf=function(){return tf(window)?window.document.cookie:""},Cf=function(){var a=[],b=window.document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));
var e=window.document.location.hostname;Mf.test(e)||Lf.test(e)||a.push("none");return a},uf=function(a){if(!wd(ud)||!a||!Hd())return!0;if(!Gd(a))return!1;var b=Ed(a);return null==b?!0:!!b};var Nf=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var Of=function(){return Sc("iPhone")&&!Sc("iPod")&&!Sc("iPad")};Sc("Opera");Sc("Trident")||Sc("MSIE");Sc("Edge");!Sc("Gecko")||-1!=Nc.toLowerCase().indexOf("webkit")&&!Sc("Edge")||Sc("Trident")||Sc("MSIE")||Sc("Edge");-1!=Nc.toLowerCase().indexOf("webkit")&&!Sc("Edge")&&Sc("Mobile");Sc("Macintosh");Sc("Windows");Sc("Linux")||Sc("CrOS");var Pf=qa.navigator||null;Pf&&(Pf.appVersion||"").indexOf("X11");Sc("Android");Of();Sc("iPad");Sc("iPod");Of()||Sc("iPad")||Sc("iPod");Nc.toLowerCase().indexOf("kaios");var Qf=function(){if(!G.crypto)return Math.random();try{var a=new Uint32Array(1);G.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}},Rf=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(k){e=!1}if(e)return c;var f;a:{try{var h=c.parent;if(h&&h!=c){f=h;break a}}catch(k){}f=null}if(!(c=f))break}return null};var Sf=function(a,b){for(var c=Math.round(2147483647*(b?Qf():Math.random())),d=tf(G)?I.cookie:null,e=""+(a?"":$c.userAgent)+(d||"")+(I.referrer||""),f=e.length,h=G.history.length;0<h;)e+=h--^f++;return[c^rf(e)&2147483647,Math.round(Wa()/1E3)].join(".")},Vf=function(a,b,c,d,e){var f=Tf(b);return zf(a,f,Uf(c),d,e)},Wf=function(a,b,c,d){var e=""+Tf(c),f=Uf(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Tf=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Uf=function(a){if(!a||
"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Xf(a,b,c){var d,e=Number(null!=a.ib?a.ib:void 0);0!==e&&(d=new Date((b||Wa())+1E3*(e||7776E3)));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var Yf=["1"],Zf={},bg=function(a){var b=$f(a.prefix),c=Zf[b];c&&ag(b,c,a)},dg=function(a){var b=$f(a.prefix);if(!Zf[b]&&!cg(b,a.path,a.domain)){var c=Sf();if(0===ag(b,c,a)){var d=bd("google_tag_data",{});d._gcl_au?wa("GTM",57):d._gcl_au=c}cg(b,a.path,a.domain)}};function ag(a,b,c){var d=Wf(b,"1",c.domain,c.path),e=Xf(c);e.Aa="ad_storage";return Kf(a,d,e)}function cg(a,b,c){var d=Vf(a,b,c,Yf,"ad_storage");d&&(Zf[a]=d);return d}function $f(a){return(a||"_gcl")+"_au"};var eg=function(a){for(var b=[],c=I.cookie.split(";"),d=new RegExp("^\\s*"+(a||"_gac")+"_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Od:f[1],value:f[2],timestamp:Number(f[2].split(".")[1])||0})}b.sort(function(h,k){return k.timestamp-h.timestamp});return b};
function fg(a,b){var c=eg(a),d={};if(!c||!c.length)return d;for(var e=0;e<c.length;e++){var f=c[e].value.split(".");if(!("1"!==f[0]||b&&3>f.length||!b&&3!==f.length)&&Number(f[1])){d[c[e].Od]||(d[c[e].Od]=[]);var h={version:f[0],timestamp:1E3*Number(f[1]),da:f[2]};b&&3<f.length&&(h.labels=f.slice(3));d[c[e].Od].push(h)}}return d};function gg(){for(var a=hg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function ig(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var hg,jg;
function kg(a){function b(l){for(;d<a.length;){var n=a.charAt(d++),q=jg[n];if(null!=q)return q;if(!/^[\s\xa0]*$/.test(n))throw Error("Unknown base64 encoding at char: "+n);}return l}hg=hg||ig();jg=jg||gg();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var lg;var pg=function(){var a=mg,b=ng,c=og(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){hd(I,"mousedown",d);hd(I,"keyup",d);hd(I,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},qg=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};og().decorators.push(f)},rg=function(a,b,c){for(var d=og().decorators,e={},f=0;f<d.length;++f){var h=
d[f],k;if(k=!c||h.forms)a:{var l=h.domains,n=a,q=!!h.sameHost;if(l&&(q||n!==I.location.hostname))for(var p=0;p<l.length;p++)if(l[p]instanceof RegExp){if(l[p].test(n)){k=!0;break a}}else if(0<=n.indexOf(l[p])||q&&0<=l[p].indexOf(n)){k=!0;break a}k=!1}if(k){var r=h.placement;void 0==r&&(r=h.fragment?2:1);r===b&&ab(e,h.callback())}}return e},og=function(){var a=bd("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var sg=/(.*?)\*(.*?)\*(.*)/,tg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,ug=/^(?:www\.|m\.|amp\.)+/,vg=/([^?#]+)(\?[^#]*)?(#.*)?/;function wg(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var yg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,h,k=String(d);hg=hg||ig();jg=jg||gg();for(var l=[],n=0;n<k.length;n+=3){var q=n+1<k.length,p=n+2<k.length,r=k.charCodeAt(n),u=q?k.charCodeAt(n+1):0,t=p?k.charCodeAt(n+2):0,v=r>>2,x=(r&3)<<4|u>>4,z=(u&15)<<2|t>>6,w=t&63;p||(w=64,q||(z=64));l.push(hg[v],hg[x],hg[z],hg[w])}h=l.join("");f.call(e,h)}}var y=b.join("*");return["1",xg(y),
y].join("*")},xg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=lg)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}lg=d;for(var l=4294967295,n=0;n<c.length;n++)l=l>>>8^lg[(l^c.charCodeAt(n))&255];return((l^-1)>>>0).toString(36)},Ag=function(){return function(a){var b=pe(G.location.href),
c=b.search.replace("?",""),d=ke(c,"_gl",!0)||"";a.query=zg(d)||{};var e=ne(b,"fragment").match(wg("_gl"));a.fragment=zg(e&&e[3]||"")||{}}},Bg=function(a){var b=Ag(),c=og();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(ab(d,e.query),a&&ab(d,e.fragment));return d},zg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=sg.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var n=h[2],q=0;q<
b;++q)if(n===xg(k,q)){l=!0;break a}l=!1}if(l){for(var p={},r=k?k.split("*"):[],u=0;u<r.length;u+=2)p[r[u]]=kg(r[u+1]);return p}}}}catch(t){}};function Cg(a,b,c,d){function e(q){var p=q,r=wg(a).exec(p),u=p;if(r){var t=r[2],v=r[4];u=r[1];v&&(u=u+t+v)}q=u;var x=q.charAt(q.length-1);q&&"&"!==x&&(q+="&");return q+n}d=void 0===d?!1:d;var f=vg.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",n=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function Dg(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=rg(b,1,c),e=rg(b,2,c),f=rg(b,3,c);if(bb(d)){var h=yg(d);c?Eg("_gl",h,a):Fg("_gl",h,a,!1)}if(!c&&bb(e)){var k=yg(e);Fg("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var n=l,q=f[l],p=a;if(p.tagName){if("a"===p.tagName.toLowerCase()){Fg(n,q,p,void 0);break a}if("form"===p.tagName.toLowerCase()){Eg(n,q,p);break a}}"string"==typeof p&&Cg(n,q,p,void 0)}}
function Fg(a,b,c,d){if(c.href){var e=Cg(a,b,c.href,void 0===d?!1:d);Mc.test(e)&&(c.href=e)}}
function Eg(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=I.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var n=Cg(a,b,c.action);Mc.test(n)&&(c.action=n)}}}
var mg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Dg(e,e.hostname)}}catch(h){}},ng=function(a){try{if(a.action){var b=ne(pe(a.action),"host");Dg(a,b)}}catch(c){}},Gg=function(a,b,c,d){pg();qg(a,b,"fragment"===c?2:1,!!d,!1)},Hg=function(a,b){pg();qg(a,[me(G.location,"host",!0)],b,!0,!0)},Ig=function(){var a=I.location.hostname,b=tg.exec(I.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(ug,""),l=e.replace(ug,""),n;if(!(n=k===l)){var q="."+l;n=k.substring(k.length-q.length,k.length)===q}return n},Jg=function(a,b){return!1===a?!1:a||b||Ig()};var Kg={};var Lg=/^\w+$/,Mg=/^[\w-]+$/,Ng={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp",gb:"_gb"},Og=function(){if(!wd(ud)||!Hd())return!0;var a=Ed("ad_storage");return null==a?!0:!!a},Pg=function(a,b){Gd("ad_storage")?Og()?a():Ld(a,"ad_storage"):b?wa("TAGGING",3):Kd(function(){Pg(a,!0)},["ad_storage"])},Rg=function(a){return Qg(a).map(function(b){return b.da})},Qg=function(a){var b=[];if(!tf(G)||!I.cookie)return b;var c=wf(a,I.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d={},e=0;e<c.length;d=
{Sb:d.Sb},e++){var f=Sg(c[e]);if(null!=f){var h=f,k=h.version;d.Sb=h.da;var l=h.timestamp,n=h.labels,q=Ga(b,function(p){return function(r){return r.da===p.Sb}}(d));q?(q.timestamp=Math.max(q.timestamp,l),q.labels=Tg(q.labels,n||[])):b.push({version:k,da:d.Sb,timestamp:l,labels:n})}}b.sort(function(p,r){return r.timestamp-p.timestamp});return Ug(b)};function Tg(a,b){for(var c={},d=[],e=0;e<a.length;e++)c[a[e]]=!0,d.push(a[e]);for(var f=0;f<b.length;f++)c[b[f]]||d.push(b[f]);return d}
function Vg(a){return a&&"string"==typeof a&&a.match(Lg)?a:"_gcl"}
var Xg=function(){var a=pe(G.location.href),b=ne(a,"query",!1,void 0,"gclid"),c=ne(a,"query",!1,void 0,"gclsrc"),d=ne(a,"query",!1,void 0,"wbraid"),e=ne(a,"query",!1,void 0,"dclid");if(!b||!c||!d){var f=a.hash.replace("#","");b=b||ke(f,"gclid",void 0);c=c||ke(f,"gclsrc",void 0);d=d||ke(f,"wbraid",void 0)}return Wg(b,c,e,d)},Wg=function(a,b,c,d){var e={},f=function(h,k){e[k]||(e[k]=[]);e[k].push(h)};e.gclid=a;e.gclsrc=b;e.dclid=c;void 0!==d&&Mg.test(d)&&(e.gbraid=d,f(d,"gb"));if(void 0!==a&&a.match(Mg))switch(b){case void 0:f(a,
"aw");break;case "aw.ds":f(a,"aw");f(a,"dc");break;case "ds":f(a,"dc");break;case "3p.ds":f(a,"dc");break;case "gf":f(a,"gf");break;case "ha":f(a,"ha")}c&&f(c,"dc");return e},Yg=function(a,b){switch(a){case void 0:case "aw":return"aw"===b;case "aw.ds":return"aw"===b||"dc"===b;case "ds":case "3p.ds":return"dc"===b;case "gf":return"gf"===b;case "ha":return"ha"===b}return!1},$g=function(a){var b=Xg();Pg(function(){Zg(b,a)})};
function Zg(a,b,c,d){function e(q,p){var r=ah(q,f);r&&(Kf(r,p,h),k=!0)}b=b||{};d=d||[];var f=Vg(b.prefix);c=c||Wa();var h=Xf(b,c,!0);h.Aa="ad_storage";var k=!1,l=Math.round(c/1E3),n=function(q){var p=["GCL",l,q];0<d.length&&p.push(d.join("."));return p.join(".")};a.aw&&e("aw",n(a.aw[0]));a.dc&&e("dc",n(a.dc[0]));a.gf&&e("gf",n(a.gf[0]));a.ha&&e("ha",n(a.ha[0]));a.gp&&e("gp",n(a.gp[0]));(void 0==Kg.enable_gbraid_cookie_write?0:Kg.enable_gbraid_cookie_write)&&!k&&a.gb&&e("gb",n(a.gb[0]))}
var ch=function(a,b){var c=Bg(!0);Pg(function(){for(var d=Vg(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Ng[f]){var h=ah(f,d),k=c[h];if(k){var l=Math.min(bh(k),Wa()),n;b:{var q=l,p=h;if(tf(G))for(var r=wf(p,I.cookie,void 0,"ad_storage"),u=0;u<r.length;++u)if(bh(r[u])>q){n=!0;break b}n=!1}if(!n){var t=Xf(b,l,!0);t.Aa="ad_storage";Kf(h,k,t)}}}}Zg(Wg(c.gclid,c.gclsrc),b)})},ah=function(a,b){var c=Ng[a];if(void 0!==c)return b+c},bh=function(a){return 0!==dh(a.split(".")).length?1E3*(Number(a.split(".")[1])||
0):0};function Sg(a){var b=dh(a.split("."));return 0===b.length?null:{version:b[0],da:b[2],timestamp:1E3*(Number(b[1])||0),labels:b.slice(3)}}function dh(a){return 3>a.length||"GCL"!==a[0]&&"1"!==a[0]||!/^\d+$/.test(a[1])||!Mg.test(a[2])?[]:a}
var eh=function(a,b,c,d,e){if(Ea(b)&&tf(G)){var f=Vg(e),h=function(){for(var k={},l=0;l<a.length;++l){var n=ah(a[l],f);if(n){var q=wf(n,I.cookie,void 0,"ad_storage");q.length&&(k[n]=q.sort()[q.length-1])}}return k};Pg(function(){Gg(h,b,c,d)})}},Ug=function(a){return a.filter(function(b){return Mg.test(b.da)})},fh=function(a,b){if(tf(G)){for(var c=Vg(b.prefix),d={},e=0;e<a.length;e++)Ng[a[e]]&&(d[a[e]]=Ng[a[e]]);Pg(function(){Ma(d,function(f,h){var k=wf(c+h,I.cookie,void 0,"ad_storage");k.sort(function(u,
t){return bh(t)-bh(u)});if(k.length){var l=k[0],n=bh(l),q=0!==dh(l.split(".")).length?l.split(".").slice(3):[],p={},r;r=0!==dh(l.split(".")).length?l.split(".")[2]:void 0;p[f]=[r];Zg(p,b,n,q)}})})}};function gh(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var hh=function(a){function b(e,f,h){h&&(e[f]=h)}if(Hd()){var c=Xg();if(gh(c,a)){var d={};b(d,"gclid",c.gclid);b(d,"dclid",c.dclid);b(d,"gclsrc",c.gclsrc);b(d,"wbraid",c.gbraid);Hg(function(){return d},3);Hg(function(){var e={};return e._up="1",e},1)}}};function ih(a,b){var c=Vg(b),d=ah(a,c);if(!d)return 0;for(var e=Qg(d),f=0,h=0;h<e.length;h++)f=Math.max(f,e[h].timestamp);return f}
function jh(a){var b=0,c;for(c in a)for(var d=a[c],e=0;e<d.length;e++)b=Math.max(b,Number(d[e].timestamp));return b};var kh=/^\d+\.fls\.doubleclick\.net$/,lh=!1;lh=!0;function mh(a,b){Gd(B.B)?Qd(B.B)?a():Ld(a,B.B):b?E(42):Sd(function(){mh(a,!0)},[B.B])}function nh(a){var b=pe(G.location.href),c=ne(b,"host",!1);if(c&&c.match(kh)){var d=ne(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}function oh(a){return Xg()[a]||[]}
function ph(a,b,c){if("aw"===a||"dc"===a||"gb"===a){var d=nh("gcl"+a);if(d)return d.split(".")}var e=Vg(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Qd(B.B)&&c,h=oh(a);if(0<h.length)return f?["0"]:h}var k=ah(a,e);return k?Rg(k):[]}function qh(a){var b=[];Ma(a,function(c,d){d=Ug(d);for(var e=[],f=0;f<d.length;f++)e.push(d[f].da);e.length&&b.push(c+":"+e.join(","))});return b.join(";")}
var rh=function(a){var b=nh("gac");return b?!Qd(B.B)&&a?"0":decodeURIComponent(b):qh(Og()?fg():{})},sh=function(a){var b=nh("gacgb");return b?!Qd(B.B)&&a?"0":decodeURIComponent(b):qh(Og()?fg("_gac_gb",!0):{})},uh=function(a,b){if(lh)th(a,b,"dc");else{var c=oh("dc");mh(function(){dg(b);var d=Zf[$f(b.prefix)],e=!1;if(d&&0<c.length){var f=L.joined_au=L.joined_au||{},h=b.prefix||"_gcl";if(!f[h])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;pd(l);e=f[h]=!0}}null==
a&&(a=e);a&&d&&bg(b)})}},th=function(a,b,c){var d=Xg(),e=[],f=d.gclid,h=d.dclid,k=d.gclsrc||"aw";!f||"aw.ds"!==k&&"aw"!==k&&"ds"!==k||c&&!Yg(k,c)||e.push({da:f,td:k});!h||c&&"dc"!==c||e.push({da:h,td:"ds"});0===e.length&&d.gbraid&&void 0===c&&e.push({da:d.gbraid,td:"gb"});mh(function(){dg(b);var l=Zf[$f(b.prefix)],n=!1;if(l&&0<e.length)for(var q=L.joined_auid=L.joined_auid||{},p=0;p<
e.length;p++){var r=e[p],u=r.da,t=r.td,v=(b.prefix||"_gcl")+"."+t+"."+u;if(!q[v]){var x="https://adservice.google.com/pagead/regclk";x="gb"===t?x+"?gbraid="+u+"&auid="+l:x+"?gclid="+u+"&auid="+l+"&gclsrc="+t;pd(x);n=q[v]=!0}}null==a&&(a=n);a&&l&&bg(b)})},vh=function(a){var b;if(nh("gclaw")||nh("gac")||0<oh("aw").length)b=!1;else{var c;if(0<oh("gb").length)c=!0;else{var d=Math.max(ih("aw",a),jh(Og()?fg():{}));c=Math.max(ih("gb",a),jh(Og()?fg("_gac_gb",!0):{}))>d}b=c}return b};var wh=/[A-Z]+/,xh=/\s/,yh=function(a){if(g(a)&&(a=Va(a),!xh.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(wh.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],F:d}}}}},Ah=function(a){for(var b={},c=0;c<a.length;++c){var d=yh(a[c]);d&&(b[d.id]=d)}zh(b);var e=[];Ma(b,function(f,h){e.push(h)});return e};
function zh(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.F[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Bh=function(){var a=!1;return a};var Dh=function(a,b,c,d){return(2===Ch()||d||"http:"!=G.location.protocol?a:b)+c},Ch=function(){var a=ed(),b;if(1===a)a:{var c=Se;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=I.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Rh=function(a){return Qd(B.B)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=qe(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})},Sh=function(){var a;if(!(a=Te)){var b;if(!0===G._gtmdgs)b=!0;else{var c=$c&&$c.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Oa("1");return qf(1,100)<d?qf(2,2):-1},Th=function(a){var b;
if(!a||!a.length)return;for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&e.estimated_delivery_date?c.push(""+e.estimated_delivery_date):c.push("")}b=c.join(",");return b};var Uh=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Vh={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Wh={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Xh="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Yh=function(){var a=!1;return a},$h=function(a){var b=ef("gtm.allowlist")||ef("gtm.whitelist");b&&E(9);Yh()&&(b="google gtagfl lcl zone oid op".split(" "));var c=b&&cb(Ra(b),Vh),d=ef("gtm.blocklist")||
ef("gtm.blacklist");d||(d=ef("tagTypeBlacklist"))&&E(3);d?E(8):d=[];Zh()&&(d=Ra(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Fa(Ra(d),"google")&&E(2);var e=d&&cb(Ra(d),Wh),f={};return function(h){var k=h&&h[rb.Oa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=Ye[k]||[],n=a(k,l);if(b){var q;if(q=
n)a:{if(0>Fa(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>Fa(c,l[p])){E(11);q=!1;break a}}else{q=!1;break a}q=!0}n=q}var r=!1;if(d){var u=0<=Fa(e,k);if(u)r=u;else{var t=La(e,l||[]);t&&E(10);r=t}}var v=!n||r;v||!(0<=Fa(l,"sandboxedScripts"))||c&&-1!==Fa(c,"sandboxedScripts")||(v=La(e,Xh));return f[k]=v}},Zh=function(){return Uh.test(G.location&&G.location.hostname)};var ai={active:!0,isAllowed:function(){return!0}},bi=function(a){var b=L.zones;return b?b.checkState(Me.D,a):ai},ci=function(a){var b=L.zones;!b&&a&&(b=L.zones=a());return b};var di=function(){},ei=function(){};var ki=!1,li=0,mi=[];function ni(a){if(!ki){var b=I.createEventObject,c="complete"==I.readyState,d="interactive"==I.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){ki=!0;for(var e=0;e<mi.length;e++)J(mi[e])}mi.push=function(){for(var f=0;f<arguments.length;f++)J(arguments[f]);return 0}}}function oi(){if(!ki&&140>li){li++;try{I.documentElement.doScroll("left"),ni()}catch(a){G.setTimeout(oi,50)}}}var pi=function(a){ki?a():mi.push(a)};var ri=function(a,b){this.m=!1;this.H=[];this.T={tags:[]};this.Y=!1;this.o=this.C=0;qi(this,a,b)},si=function(a,b,c,d){if(Pe.hasOwnProperty(b)||"__zone"===b)return-1;var e={};mb(d)&&(e=m(d,e));e.id=c;e.status="timeout";return a.T.tags.push(e)-1},ti=function(a,b,c,d){var e=a.T.tags[b];e&&(e.status=c,e.executionTime=d)},ui=function(a){if(!a.m){for(var b=a.H,c=0;c<b.length;c++)b[c]();a.m=!0;a.H.length=0}},qi=function(a,b,c){Ba(b)&&vi(a,b);c&&G.setTimeout(function(){return ui(a)},Number(c))},vi=function(a,
b){var c=$a(function(){return J(function(){b(Me.D,a.T)})});a.m?c():a.H.push(c)},wi=function(a){a.C++;return $a(function(){a.o++;a.Y&&a.o>=a.C&&ui(a)})};var xi=function(){function a(d){return!Ca(d)||0>d?0:d}if(!L._li&&G.performance&&G.performance.timing){var b=G.performance.timing.navigationStart,c=Ca(ff.get("gtm.start"))?ff.get("gtm.start"):0;L._li={cst:a(c-b),cbt:a(Ve-b)}}};var Bi={},Ci=function(){return G.GoogleAnalyticsObject&&G[G.GoogleAnalyticsObject]},Di=!1;
var Ei=function(a){G.GoogleAnalyticsObject||(G.GoogleAnalyticsObject=a||"ga");var b=G.GoogleAnalyticsObject;if(G[b])G.hasOwnProperty(b)||E(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);G[b]=c}xi();return G[b]},Fi=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Ci();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},Gi=function(a){if(!Hd())return;var b=Ci();b(a+"require","linker");b(a+"linker:passthrough",
!0);};
var Ii=function(a){},Hi=function(){return G.GoogleAnalyticsObject||"ga"},Ji=function(a,b){return function(){var c=Ci(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var h=f.get("hitPayload"),k=f.get("hitCallback"),l=0>h.indexOf("&tid="+b);l&&(f.set("hitPayload",h.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",h,!0),f.set("hitCallback",k,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var Oi=function(){return"&tc="+Vb.filter(function(a){return a}).length},Ri=function(){2022<=Pi().length&&Qi()},Ti=function(){Si||(Si=G.setTimeout(Qi,500))},Qi=function(){Si&&(G.clearTimeout(Si),Si=void 0);void 0===Ui||Vi[Ui]&&!Wi&&!Xi||(Yi[Ui]||Zi.hh()||0>=$i--?(E(1),Yi[Ui]=!0):(Zi.yh(),gd(Pi()),Vi[Ui]=!0,aj=bj=cj=Xi=Wi=""))},Pi=function(){var a=Ui;if(void 0===a)return"";var b=ya("GTM"),c=ya("TAGGING");return[dj,Vi[a]?"":"&es=1",ej[a],b?"&u="+b:"",c?"&ut="+c:"",Oi(),Wi,Xi,cj?cj:"",bj,aj,"&z=0"].join("")},
gj=function(){dj=fj()},fj=function(){return[We,"&v=3&t=t","&pid="+Ha(),"&rv="+Me.mc].join("")},hj="0.005000">Math.random(),dj=fj(),Vi={},Wi="",Xi="",aj="",bj="",cj="",Ui=void 0,ej={},Yi={},Si=void 0,Zi=function(a,b){var c=0,d=0;return{hh:function(){if(c<a)return!1;Wa()-d>=b&&(c=0);return c>=a},yh:function(){Wa()-d>=b&&(c=0);c++;d=Wa()}}}(2,1E3),$i=1E3,ij=function(a,b,c){if(hj&&!Yi[a]&&b){a!==Ui&&(Qi(),Ui=a);var d,e=String(b[rb.Oa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;Wi=Wi?Wi+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(Xb[h]?"1":"2")+d;aj=aj?aj+"."+k:"&ti="+k;Ti();Ri()}},jj=function(a,b,c){if(hj&&!Yi[a]){a!==Ui&&(Qi(),Ui=a);var d=c+b;Xi=Xi?Xi+"."+d:"&epr="+d;Ti();Ri()}},kj=function(a,b,c){};
function lj(a,b,c,d){var e=Vb[a],f=mj(a,b,c,d);if(!f)return null;var h=bc(e[rb.Qe],c,[]);if(h&&h.length){var k=h[0];f=lj(k.index,{onSuccess:f,onFailure:1===k.bf?b.terminate:f,terminate:b.terminate},c,d)}return f}
function mj(a,b,c,d){function e(){if(f[rb.ug])k();else{var x=cc(f,c,[]);var y=si(c.Pa,String(f[rb.Oa]),Number(f[rb.Re]),x[rb.vg]),A=!1;x.vtp_gtmOnSuccess=function(){if(!A){A=!0;var D=Wa()-F;ij(c.id,Vb[a],"5");ti(c.Pa,y,"success",
D);h()}};x.vtp_gtmOnFailure=function(){if(!A){A=!0;var D=Wa()-F;ij(c.id,Vb[a],"6");ti(c.Pa,y,"failure",D);k()}};x.vtp_gtmTagId=f.tag_id;x.vtp_gtmEventId=c.id;ij(c.id,f,"1");var C=function(){var D=Wa()-F;ij(c.id,f,"7");ti(c.Pa,y,"exception",D);A||(A=!0,k())};var F=Wa();try{ac(x,c)}catch(D){C(D)}}}var f=Vb[a],h=b.onSuccess,k=b.onFailure,l=b.terminate;if(c.zd(f))return null;var n=bc(f[rb.Se],c,[]);if(n&&n.length){var q=n[0],p=lj(q.index,{onSuccess:h,onFailure:k,terminate:l},c,d);if(!p)return null;h=p;k=2===q.bf?l:p}if(f[rb.Le]||f[rb.xg]){var r=f[rb.Le]?Wb:
c.Dh,u=h,t=k;if(!r[a]){e=$a(e);var v=nj(a,r,e);h=v.onSuccess;k=v.onFailure}return function(){r[a](u,t)}}return e}function nj(a,b,c){var d=[],e=[];b[a]=oj(d,e,c);return{onSuccess:function(){b[a]=pj;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=qj;for(var f=0;f<e.length;f++)e[f]()}}}function oj(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function pj(a){a()}function qj(a,b){b()};var tj=function(a,b){for(var c=[],d=0;d<Vb.length;d++)if(a[d]){var e=Vb[d];var f=wi(b.Pa);try{var h=lj(d,{onSuccess:f,onFailure:f,terminate:f},b,d);if(h){var k=c,l=k.push,n=d,q=e["function"];if(!q)throw"Error: No function name given for function call.";var p=Xb[q];l.call(k,{wf:n,pf:p?p.priorityOverride||0:0,Vg:h})}else rj(d,b),f()}catch(t){f()}}var r=b.Pa;r.Y=!0;r.o>=r.C&&ui(r);c.sort(sj);for(var u=0;u<c.length;u++)c[u].Vg();
return 0<c.length};function sj(a,b){var c,d=b.pf,e=a.pf;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.wf,k=b.wf;f=h>k?1:h<k?-1:0}return f}function rj(a,b){if(!hj)return;var c=function(d){var e=b.zd(Vb[d])?"3":"4",f=bc(Vb[d][rb.Qe],b,[]);f&&f.length&&c(f[0].index);ij(b.id,Vb[d],e);var h=bc(Vb[d][rb.Se],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var uj=!1,Aj=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(uj)return!1;uj=!0}var d=bi(b),e=!1;if(!d.active){if("gtm.js"!==c)return!1;e=!0;d=bi(Number.MAX_SAFE_INTEGER)}hj&&!Yi[b]&&Ui!==b&&(Qi(),Ui=b,aj=Wi="",ej[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,Ti());var f=a.eventCallback,h=a.eventTimeout,k={id:b,name:c,zd:$h(d.isAllowed),Dh:[],jf:function(){E(6)},We:vj(b),Pa:new ri(f,
h)};xj(b,k.Pa);var l=ic(k);e&&(l=yj(l));var n=tj(l,k);"gtm.js"!==c&&"gtm.sync"!==c||Ii(Me.D);switch(c){case "gtm.init":n&&E(20)}return zj(l,n)};function vj(a){return function(b){hj&&(qb(b)||kj(a,"input",b))}}
function xj(a,b){kf(a,"event",1);kf(a,"ecommerce",1);kf(a,"gtm");kf(a,"eventModel");}function wj(){var a={};a.event=jf("event",1);a.ecommerce=jf("ecommerce",1);a.gtm=jf("gtm");a.eventModel=jf("eventModel");return a}function yj(a){for(var b=[],c=0;c<a.length;c++)a[c]&&Oe[String(Vb[c][rb.Oa])]&&(b[c]=!0);return b}
function zj(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Vb[c]&&!Pe[String(Vb[c][rb.Oa])])return!0;return!1}function Bj(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return pe(""+c+b).href}}function Cj(a,b){return Dj()?Bj(a,b):void 0}function Dj(){var a=!1;return a};var Ej=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.remoteConfig={};this.globalConfig={};this.onSuccess=function(){};this.onFailure=function(){};this.setContainerTypeLoaded=function(){};this.getContainerTypeLoaded=function(){};this.eventId=void 0},Fj=function(a){var b=new Ej;b.eventModel=a;return b},Gj=function(a,b){a.targetConfig=b;return a},Hj=function(a,b){a.containerConfig=b;return a},Ij=function(a,b){a.remoteConfig=b;return a},Jj=function(a,b){a.globalConfig=
b;return a},Kj=function(a,b){a.onSuccess=b;return a},Lj=function(a,b){a.setContainerTypeLoaded=b;return a},Mj=function(a,b){a.getContainerTypeLoaded=b;return a},Nj=function(a,b){a.onFailure=b;return a};Ej.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.remoteConfig[a])return this.remoteConfig[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Oj=function(a){function b(e){Ma(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Ma(c,function(e){d.push(e)});return d};var Pj;if(3===Me.mc.length)Pj="g";else{var Qj="G";Pj=Qj}
var Rj={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Pj,OPT:"o"},Sj=function(a){var b=Me.D.split("-"),c=b[0].toUpperCase(),d=Rj[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Me.mc.length){var h="w";f="2"+h}else f="";return f+d+Me.mc+e};var Tj=function(){};var Uj=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},Vj=function(a,b){this.o=a;this.m=null;this.H={};this.Y=0;this.T=void 0===b?500:b;this.C=null};pa(Vj,Tj);
var Xj=function(a){return"function"===typeof a.o.__tcfapi||null!=Wj(a)};
Vj.prototype.addEventListener=function(a){var b={},c=Hc(function(){return a(b)}),d=0;-1!==this.T&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.T));var e=function(f,h){clearTimeout(d);f?(b=f,b.internalErrorState=Uj(b),h&&0===b.internalErrorState||(b.tcString="tcunavailable",h||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{Yj(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};Vj.prototype.removeEventListener=function(a){a&&a.listenerId&&Yj(this,"removeEventListener",null,a.listenerId)};
var ak=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var h=e;if(0===h)return!1;var k=c;2===c?(k=0,2===h&&(k=1)):3===c&&(k=1,1===h&&(k=0));var l;if(0===k)if(a.purpose&&a.vendor){var n=Zj(a.vendor.consents,void 0===d?"755":d);l=n&&"1"===b&&a.purposeOneTreatment&&("DE"===a.publisherCC||wd(sd)&&"CH"===a.publisherCC)?!0:n&&Zj(a.purpose.consents,b)}else l=!0;else l=
1===k?a.purpose&&a.vendor?Zj(a.purpose.legitimateInterests,b)&&Zj(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},Zj=function(a,b){return!(!a||!a[b])},Yj=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.o.__tcfapi){var e=a.o.__tcfapi;e(b,2,c,d)}else if(Wj(a)){bk(a);var f=++a.Y;a.H[f]=c;if(a.m){var h={};a.m.postMessage((h.__tcfapiCall={command:b,version:2,callId:f,parameter:d},h),"*")}}else c({},!1)},Wj=function(a){if(a.m)return a.m;a.m=Rf(a.o,"__tcfapiLocator");return a.m},
bk=function(a){a.C||(a.C=function(b){try{var c;c=("string"===typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.H[c.callId](c.returnValue,c.success)}catch(d){}},Nf(a.o,a.C))};var ck=!0;ck=!1;var dk={1:0,3:0,4:0,7:3,9:3,10:3};function ek(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var fk=ek("",550),gk=ek("",500);function hk(){var a=L.tcf||{};return L.tcf=a}
var ik=function(a,b){this.C=a;this.m=b;this.o=Wa();},jk=function(a){},kk=function(a){},qk=function(){var a=hk(),b=new Vj(G,ck?3E3:-1),c=new ik(b,a);if((lk()?!0===G.gtag_enable_tcf_support:!1!==G.gtag_enable_tcf_support)&&!a.active&&("function"===typeof G.__tcfapi||Xj(b))){a.active=!0;a.Nb={};mk();var d=null;ck?d=G.setTimeout(function(){nk(a);ok(a);d=null},gk):a.tcString="tcunavailable";try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)nk(a),ok(a),jk(c);
else{var f;a.gdprApplies=e.gdprApplies;if(!1===e.gdprApplies)f=pk(),b.removeEventListener(e);else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var h={},k;for(k in dk)if(dk.hasOwnProperty(k))if("1"===k){var l,n=e,q=!0;q=void 0===q?!1:q;var p;var r=n;!1===r.gdprApplies?p=!0:(void 0===r.internalErrorState&&(r.internalErrorState=Uj(r)),p="error"===r.cmpStatus||0!==r.internalErrorState||"loaded"===r.cmpStatus&&("tcloaded"===r.eventStatus||"useractioncomplete"===
r.eventStatus)?!0:!1);l=p?!1===n.gdprApplies||"tcunavailable"===n.tcString||void 0===n.gdprApplies&&!q||"string"!==typeof n.tcString||!n.tcString.length?!0:ak(n,"1",0):!1;h["1"]=l}else h[k]=ak(e,k,dk[k]);f=h}f&&(a.tcString=e.tcString||"tcempty",a.Nb=f,ok(a),jk(c))}}),kk(c)}catch(e){d&&(clearTimeout(d),d=null),nk(a),ok(a)}}};function nk(a){a.type="e";a.tcString="tcunavailable";ck&&(a.Nb=pk())}function mk(){var a={};Od((a.ad_storage="denied",a.wait_for_update=fk,a))}
var lk=function(){var a=!1;a=!0;return a};function pk(){var a={},b;for(b in dk)dk.hasOwnProperty(b)&&(a[b]=!0);return a}function ok(a){var b={};Pd((b.ad_storage=a.Nb["1"]?"granted":"denied",b))}
var rk=function(){var a=hk();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},sk=function(){var a=hk();return a.active?a.tcString||"":""},tk=function(){var a=hk();return a.active&&void 0!==a.gdprApplies?a.gdprApplies?"1":"0":""},uk=function(a){if(!dk.hasOwnProperty(String(a)))return!0;var b=hk();return b.active&&b.Nb?!!b.Nb[String(a)]:!0};var vk=!1;function wk(a){var b=String(G.location).split(/[?#]/)[0],c=Me.Ff||G._CONSENT_MODE_SALT;return a?c?String(rf(b+a+c)):"0":""}
function xk(a){function b(t){var v;L.reported_gclid||(L.reported_gclid={});v=L.reported_gclid;var x;x=vk&&h&&(!Hd()||Qd(B.B))?l+"."+(f.prefix||"_gcl")+(t?"gcu":"gcs"):l+(t?"gcu":"gcs");if(!v[x]){v[x]=!0;var z=[],w={},y=function(N,R){R&&(z.push(N+"="+encodeURIComponent(R)),w[N]=!0)},A="https://www.google.com";if(Hd()){var C=Qd(B.B);y("gcs",Rd());t&&y("gcu","1");Id()&&y("gcd","G1"+Md(Fd));L.dedupe_gclid||
(L.dedupe_gclid=""+Sf());y("rnd",L.dedupe_gclid);if((!l||n&&"aw.ds"!==n)&&Qd(B.B)){var F=Rg("_gcl_aw");y("gclaw",F.join("."))}y("url",String(G.location).split(/[?#]/)[0]);y("dclid",yk(d,q));var D=!1;D=!0;C||!d&&!D||(A="https://pagead2.googlesyndication.com")}
y("gdpr_consent",sk()),y("gdpr",tk());"1"===Bg(!1)._up&&y("gtm_up","1");y("gclid",yk(d,l));y("gclsrc",n);if(!(w.gclid||w.dclid||w.gclaw)&&(y("gbraid",yk(d,p)),!w.gbraid&&Hd()&&Qd(B.B))){var H=Rg("_gcl_gb");y("gclgb",H.join("."))}y("gtm",Sj(!e));vk&&h&&Qd(B.B)&&(dg(f||{}),y("auid",Zf[$f(f.prefix)]||""));
a.$e&&y("did",a.$e);var M=A+"/pagead/landing?"+z.join("&");pd(M)}}var c=!!a.pd,d=!!a.na,e=a.R,f=void 0===a.uc?{}:a.uc,h=void 0===a.Ac?!0:a.Ac,k=Xg(),l=k.gclid||"",n=k.gclsrc,q=k.dclid||"",p=k.gbraid||"",r=!c&&((!l||n&&"aw.ds"!==n?!1:!0)||p),u=Hd();if(r||u)u?Sd(function(){b();Qd(B.B)||Ld(function(t){return b(!0,t.Xe)},B.B)},[B.B]):b()}function yk(a,b){var c=a&&!Qd(B.B);return b&&c?"0":b}var jl=function(){var a=!0;uk(7)&&uk(9)&&uk(10)||(a=!1);var b=!0;b=!1;b&&!il()&&(a=!1);return a},il=function(){var a=!0;uk(3)&&uk(4)||(a=!1);return a};var Fl=!1;function Gl(){var a=L;return a.gcq=a.gcq||new Hl}
var Il=function(a,b,c){Gl().register(a,b,c)},Jl=function(a,b,c,d){Gl().push("event",[b,a],c,d)},Kl=function(a,b){Gl().push("config",[a],b)},Ll=function(a,b,c,d){Gl().push("get",[a,b],c,d)},Ml={},Nl=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.remoteConfig={};this.o=null;this.m=!1},Ol=function(a,b,c,d,e){this.type=a;this.C=b;this.R=c||"";this.m=d;this.o=e},Hl=function(){this.H={};this.o={};this.m=[];this.C={AW:!1,UA:!1}},Pl=function(a,b){var c=yh(b);return a.H[c.containerId]=
a.H[c.containerId]||new Nl},Ql=function(a,b,c){if(b){var d=yh(b);if(d&&1===Pl(a,b).status){Pl(a,b).status=2;var e={};hj&&(e.timeoutId=G.setTimeout(function(){E(38);Ti()},3E3));a.push("require",[e],d.containerId);Ml[d.containerId]=Wa();if(Bh()){}else{var h=
"/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=G.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+h),l=Cj(c,h)||k;dd(l)}}}},Rl=function(a,b,c,d){if(d.R){var e=Pl(a,d.R),f=e.o;if(f){var h=m(c),k=m(e.targetConfig[d.R]),l=m(e.containerConfig),n=m(e.remoteConfig),q=m(a.o),p=ef("gtm.uniqueEventId"),r=yh(d.R).prefix,u=Mj(Lj(Nj(Kj(Jj(Ij(Hj(Gj(Fj(h),k),l),n),q),function(){jj(p,r,"2");}),function(){
jj(p,r,"3");}),function(t,v){a.C[t]=v}),function(t){return a.C[t]});try{jj(p,r,"1");f(d.R,b,d.C,u)}catch(t){jj(p,r,"4");}}}};aa=Hl.prototype;
aa.register=function(a,b,c){var d=Pl(this,a);if(3!==d.status){d.o=b;d.status=3;if(c){m(d.remoteConfig,c);d.remoteConfig=c}var e=yh(a),f=Ml[e.containerId];if(void 0!==f){var h=L[e.containerId].bootstrap,k=e.prefix.toUpperCase();L[e.containerId]._spx&&(k=k.toLowerCase());var l=ef("gtm.uniqueEventId"),n=k,q=Wa()-h;if(hj&&!Yi[l]){l!==Ui&&(Qi(),Ui=l);var p=n+"."+Math.floor(h-f)+
"."+Math.floor(q);bj=bj?bj+","+p:"&cl="+p}delete Ml[e.containerId]}this.flush()}};aa.push=function(a,b,c,d){var e=Math.floor(Wa()/1E3);Ql(this,c,b[0][B.Ga]||this.o[B.Ga]);Fl&&c&&Pl(this,c).m&&(d=!1);this.m.push(new Ol(a,e,c,b,d));d||this.flush()};aa.insert=function(a,b,c){var d=Math.floor(Wa()/1E3);0<this.m.length?this.m.splice(1,0,new Ol(a,d,c,b,!1)):this.m.push(new Ol(a,d,c,b,!1))};
aa.flush=function(a){for(var b=this,c=[],d=!1,e={};this.m.length;){var f=this.m[0];if(f.o)Fl?!f.R||Pl(this,f.R).m?(f.o=!1,this.m.push(f)):c.push(f):(f.o=!1,this.m.push(f));else switch(f.type){case "require":if(3!==Pl(this,f.R).status&&!a){Fl&&this.m.push.apply(this.m,c);return}hj&&G.clearTimeout(f.m[0].timeoutId);break;case "set":Ma(f.m[0],function(r,u){m(eb(r,u),b.o)});break;case "config":e.oa={};Ma(f.m[0],function(r){return function(u,t){m(eb(u,t),r.oa)}}(e));var h=!!e.oa[B.fc];delete e.oa[B.fc];
var k=Pl(this,f.R),l=yh(f.R),n=l.containerId===l.id;h||(n?k.containerConfig={}:k.targetConfig[f.R]={});k.m&&h||Rl(this,B.Z,e.oa,f);k.m=!0;delete e.oa[B.zb];n?m(e.oa,k.containerConfig):m(e.oa,k.targetConfig[f.R]);Fl&&(d=!0);break;case "event":e.Rb={};Ma(f.m[0],function(r){return function(u,t){m(eb(u,t),r.Rb)}}(e));Rl(this,f.m[1],e.Rb,f);break;case "get":var q={},p=(q[B.Ea]=f.m[0],q[B.Da]=f.m[1],q);Rl(this,B.ra,p,f)}this.m.shift();e={oa:e.oa,Rb:e.Rb}}Fl&&(this.m.push.apply(this.m,c),d&&this.flush())};
aa.getRemoteConfig=function(a){return Pl(this,a).remoteConfig};var Sl=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":qd(a,"className"),"gtm.elementId":a["for"]||jd(a,"id")||"","gtm.elementTarget":a.formTarget||qd(a,"target")||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||qd(a,"href")||a.src||a.code||a.codebase||"";return d},Tl=function(a){L.hasOwnProperty("autoEventsSettings")||(L.autoEventsSettings={});var b=L.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});
return b[a]},Ul=function(a,b,c){Tl(a)[b]=c},Vl=function(a,b,c,d){var e=Tl(a),f=Xa(e,b,d);e[b]=c(f)},Wl=function(a,b,c){var d=Tl(a);return Xa(d,b,c)};var Xl=!!G.MutationObserver,Yl=void 0,Zl=function(a){if(!Yl){var b=function(){var c=I.body;if(c)if(Xl)(new MutationObserver(function(){for(var e=0;e<Yl.length;e++)J(Yl[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;hd(c,"DOMNodeInserted",function(){d||(d=!0,J(function(){d=!1;for(var e=0;e<Yl.length;e++)J(Yl[e])}))})}};Yl=[];I.body?b():J(b)}Yl.push(a)};var am=!1,bm=[];function cm(){if(!am){am=!0;for(var a=0;a<bm.length;a++)J(bm[a])}}var dm=function(a){am?J(a):bm.push(a)};Object.freeze({dl:1,id:1});var em="HA GF G UA AW DC".split(" "),fm=!1,gm={},hm=!1;function im(a,b){var c={event:a};b&&(c.eventModel=m(b),b[B.Sc]&&(c.eventCallback=b[B.Sc]),b[B.Yb]&&(c.eventTimeout=b[B.Yb]));return c}function jm(){return fm}
var mm={config:function(a){var b;return b},consent:function(a){function b(){jm()&&
m(a[2],{subcommand:a[1]})}if(3===a.length){E(39);var c=Ze(),d=a[1];"default"===d?(b(),Od(a[2])):"update"===d&&(b(),Pd(a[2],c))}},event:function(a){var b=a[1];if(!(2>a.length)&&g(b)){var c;if(2<a.length){if(!mb(a[2])&&void 0!=a[2]||3<a.length)return;c=a[2]}var d=im(b,c);return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime)return hm=!0,jm(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(){},set:function(a){var b;2==a.length&&mb(a[1])?b=m(a[1]):3==a.length&&g(a[1])&&(b={},mb(a[2])||Ea(a[2])?b[a[1]]=m(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},nm={policy:!0};var om=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},qm=function(a){var b=pm(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Km=function(a){if(Jm(a))return a;this.m=a};Km.prototype.ah=function(){return this.m};var Jm=function(a){return!a||"object"!==jb(a)||mb(a)?!1:"getUntrustedUpdateValue"in a};Km.prototype.getUntrustedUpdateValue=Km.prototype.ah;var Lm=[],Mm=!1,Nm=!1,Om=!1,Pm=function(a){return G["dataLayer"].push(a)},Qm=function(a){var b=L["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Rm(a){var b=a._clear;Ma(a,function(d,e){"_clear"!==d&&(b&&hf(d,void 0),hf(d,e))});Ue||(Ue=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Ze(),a["gtm.uniqueEventId"]=c,hf("gtm.uniqueEventId",c));return Aj(a)}function Sm(){var a=Lm[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(Na(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function Tm(){for(var a=!1;!Om&&0<Lm.length;){var b=!1;if(b&&!Nm&&Sm()){var c={};Lm.unshift((c.event=
"gtm.init",c));Nm=!0}var d=!1;if(d&&!Mm&&Sm()){var e={};Lm.unshift((e.event="gtm.init_consent",e));Mm=!0}Om=!0;delete bf.eventModel;df();var f=Lm.shift();if(null!=f){var h=Jm(f);
if(h){var k=f;f=Jm(k)?k.getUntrustedUpdateValue():void 0;for(var l=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],n=0;n<l.length;n++){var q=l[n],p=ef(q,1);if(Ea(p)||mb(p))p=m(p);cf[q]=p}}try{if(Ba(f))try{f.call(ff)}catch(y){}else if(Ea(f)){var r=f;if(g(r[0])){var u=r[0].split("."),t=u.pop(),v=r.slice(1),x=ef(u.join("."),2);if(void 0!==x&&null!==x)try{x[t].apply(x,v)}catch(y){}}}else{if(Na(f)){a:{var z=f;if(z.length&&g(z[0])){var w=mm[z[0]];if(w&&(!h||!nm[z[0]])){f=
w(z);break a}}f=void 0}if(!f){Om=!1;continue}}a=Rm(f)||a}}finally{h&&df(!0)}}Om=!1}return!a}function Um(){var a=Tm();try{om(G["dataLayer"],Me.D)}catch(b){}return a}
var Wm=function(){var a=bd("dataLayer",[]),b=bd("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};pi(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});dm(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<L.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Km(arguments[f])}else e=[].slice.call(arguments,0);var h=c.apply(a,e);Lm.push.apply(Lm,e);if(300<
this.length)for(E(4);300<this.length;)this.shift();var k="boolean"!==typeof h||h;return Tm()&&k};var d=a.slice(0);Lm.push.apply(Lm,d);Vm()&&J(Um)},Vm=function(){var a=!0;return a};var Xm={};Xm.hc=new String("undefined");
var Ym=function(a){this.m=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Xm.hc?b:a[d]);return c.join("")}};Ym.prototype.toString=function(){return this.m("undefined")};Ym.prototype.valueOf=Ym.prototype.toString;Xm.Ag=Ym;Xm.ld={};Xm.Og=function(a){return new Ym(a)};var Zm={};Xm.zh=function(a,b){var c=Ze();Zm[c]=[a,b];return c};Xm.Ze=function(a){var b=a?0:1;return function(c){var d=Zm[c];if(d&&"function"===typeof d[b])d[b]();Zm[c]=void 0}};Xm.gh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Xm.uh=function(a){if(a===Xm.hc)return a;var b=Ze();Xm.ld[b]=a;return'google_tag_manager["'+Me.D+'"].macro('+b+")"};Xm.qh=function(a,b,c){a instanceof Xm.Ag&&(a=a.m(Xm.zh(b,c)),b=za);return{bh:a,onSuccess:b}};var $m=["input","select","textarea"],an=["button","hidden","image","reset","submit"],bn=function(a){var b=a.tagName.toLowerCase();return!Ga($m,function(c){return c===b})||"input"===b&&Ga(an,function(c){return c===a.type.toLowerCase()})?!1:!0},cn=function(a){return a.form?a.form.tagName?a.form:I.getElementById(a.form):od(a,["form"],100)},dn=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(bn(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var pn=G.clearTimeout,qn=G.setTimeout,O=function(a,b,c){if(Bh()){b&&J(b)}else return dd(a,b,c)},rn=function(){return new Date},sn=function(){return G.location.href},tn=function(a){return ne(pe(a),"fragment")},un=function(a){return oe(pe(a))},vn=function(a,b){return ef(a,b||2)},wn=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Pm(a)):d=Pm(a);return d},xn=function(a,b){G[a]=b},W=function(a,b,c){b&&
(void 0===G[a]||c&&!G[a])&&(G[a]=b);return G[a]},yn=function(a,b,c){return wf(a,b,void 0===c?!0:!!c)},zn=function(a,b,c){return 0===Kf(a,b,c)},An=function(a,b){if(Bh()){b&&J(b)}else fd(a,b)},Bn=function(a){return!!Wl(a,"init",!1)},Cn=function(a){Ul(a,"init",!0)},Dn=function(a){var b=Se+"?id="+encodeURIComponent(a)+"&l=dataLayer";O(Dh("https://","http://",b))},En=function(a,b,c){hj&&(qb(a)||kj(c,b,a))};var Fn=Xm.qh;function bo(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var co=new Ja;function eo(a,b,c){var d=c?"i":void 0;try{var e=String(b)+d,f=co.get(e);f||(f=new RegExp(b,d),co.set(e,f));return f.test(a)}catch(h){return!1}}
function fo(a,b){function c(h){var k=pe(h),l=ne(k,"protocol"),n=ne(k,"host",!0),q=ne(k,"port"),p=ne(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==q||"https"==l&&"443"==q)l="web",q="default";return[l,n,q,p]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function go(a){return ho(a)?1:0}
function ho(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ea(c)){for(var d=0;d<c.length;d++){var e=m(a,{});m({arg1:c[d],any_of:void 0},e);if(go(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var h=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var k=0;k<h.length;k++)if(b[h[k]]){f=b[h[k]](c);break a}}catch(n){}}f=!1}return f;case "_ew":return bo(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Fa(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":return eo(b,c,a.ignore_case);case "_sw":return 0==String(b).indexOf(String(c));case "_um":return fo(b,c)}return!1};var io=encodeURI,X=encodeURIComponent,jo=gd;var ko=function(a,b){if(!a)return!1;var c=ne(pe(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var lo=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};function Sp(){return G.gaGlobal=G.gaGlobal||{}}var Tp=function(){var a=Sp();a.hid=a.hid||Ha();return a.hid},Up=function(a,b){var c=Sp();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var Eq=window,Fq=document,Gq=function(a){var b=Eq._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Eq["ga-disable-"+a])return!0;try{var c=Eq.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=sf("AMP_TOKEN",String(Fq.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Fq.getElementById("__gaOptOutExtension")?!0:!1};var Hq={};function Jq(a){delete a.eventModel[B.zb];Lq(a.eventModel)}var Lq=function(a){Ma(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[B.va]||{};Ma(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Oq=function(a,b,c){Jl(b,c,a)},Pq=function(a,b,c){Jl(b,c,a,!0)},Wq=function(a,b){};
function Qq(a,b){}var Z={g:{}};
Z.g.gaawc=["google"],function(){function a(b,c,d){for(var e=0;e<c.length;e++)b.hasOwnProperty(c[e])&&(b[c[e]]=d(b[c[e]]))}(function(b){Z.__gaawc=b;Z.__gaawc.h="gaawc";Z.__gaawc.i=!0;Z.__gaawc.priorityOverride=10})(function(b){var c=String(b.vtp_measurementId),d=lo(b.vtp_fieldsToSet,"name","value")||{};if(d.hasOwnProperty(B.va)||b.vtp_userProperties){var e=d[B.va]||{};m(lo(b.vtp_userProperties,"name","value"),e);d[B.va]=e}a(d,B.De,function(f){return Pa(f)});a(d,B.Fe,function(f){return Number(f)});
d.send_page_view=b.vtp_sendPageView;Kl(d,c);J(b.vtp_gtmOnSuccess)})}();
Z.g.gaawe=["google"],function(){function a(d,e,f){for(var h=0;h<e.length;h++)d.hasOwnProperty(e[h])&&(d[e[h]]=f(d[e[h]]))}function b(d,e,f){var h={id:"transaction_id",revenue:"value",list:"item_list_name"},k={click:B.Nc,detail:B.Ca,add:B.Wa,remove:B.Xa,checkout:B.La,checkout_option:"checkout_option",purchase:B.qa,refund:B.Ya},l={},n=function(u,t){l[u]=l[u]||t},q=function(u,t,v){v=void 0===v?!1:v;c.push(6);if(u){l.items=l.items||[];for(var x={},z=0;z<u.length;x={Ta:x.Ta},z++)x.Ta={},Ma(u[z],function(y){return function(A,
C){v&&"id"===A?y.Ta.promotion_id=C:v&&"name"===A?y.Ta.promotion_name=C:y.Ta[A]=C}}(x)),l.items.push(x.Ta)}if(t)for(var w in t)h.hasOwnProperty(w)?n(h[w],t[w]):n(w,t[w])},p;if("dataLayer"===d.vtp_getEcommerceDataFrom){p=p||lf(d.vtp_gtmEventId,"eventModel");if(!p){p=p||lf(d.vtp_gtmEventId,"ecommerce")}}else p=d.vtp_ecommerceMacroData;if(mb(p)){c.push(5);for(var r in p)p.hasOwnProperty(r)&&("currencyCode"===r?n("currency",p.currencyCode):"impressions"===r&&e===B.Vb?q(p.impressions,null):"promoClick"===r&&e===B.$d?q(p.promoClick.promotions,p.promoClick.actionField,!0):"promoView"===r&&e===B.ae?q(p.promoView.promotions,p.promoView.actionField,!0):k.hasOwnProperty(r)?e===
k[r]&&q(p[r].products,p[r].actionField):l[r]=p[r]);m(l,f)}}var c=[];(function(d){Z.__gaawe=d;Z.__gaawe.h="gaawe";Z.__gaawe.i=!0;Z.__gaawe.priorityOverride=0})(function(d){var e=String(d.vtp_measurementIdOverride||d.vtp_measurementId),f=String(d.vtp_eventName);if("_"===f.charAt(0))J(d.vtp_gtmOnFailure);else{var h={};c=[];d.vtp_sendEcommerceData&&(0<=B.Ee.indexOf(f)||"checkout_option"===f)&&b(d,f,h);var k=lo(d.vtp_eventParameters,"name","value"),l;for(l in k)k.hasOwnProperty(l)&&(h[l]=k[l]);if(h.hasOwnProperty(B.va)||
d.vtp_userProperties){var n=h[B.va]||{};m(lo(d.vtp_userProperties,"name","value"),n);h[B.va]=n}Lq(h);0<c.length&&(h[B.ed]=c);a(h,B.De,function(q){return Pa(q)});a(h,B.Fe,function(q){return Number(q)});Jl(f,h,e);J(d.vtp_gtmOnSuccess)}})}();Z.g.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.h="ctv";Z.__ctv.i=!0;Z.__ctv.priorityOverride=0})(function(){return"86"})}();
Z.g.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(w){for(var y=[],A=w.split(","),C=0;C<A.length;C++){var F=Number(A[C]);if(isNaN(F))return[];q.test(A[C])||y.push(F)}return y}function c(){var w=0,y=0;return function(){var A=Zd(),C=A.height;w=Math.max(v.scrollLeft+A.width,w);y=Math.max(v.scrollTop+C,y);return{Rg:w,Sg:y}}}function d(){u=W("self");
t=u.document;v=t.scrollingElement||t.body&&t.body.parentNode;z=c()}function e(w,y,A,C){var F=l(y),D={},H;for(H in F){D.Ua=H;if(F.hasOwnProperty(D.Ua)){var M=Number(D.Ua);w<M||(wn({event:"gtm.scrollDepth","gtm.scrollThreshold":M,"gtm.scrollUnits":A.toLowerCase(),"gtm.scrollDirection":C,"gtm.triggers":F[D.Ua].join(",")}),Vl("sdl",y,function(N){return function(R){delete R[N.Ua];return R}}(D),{}))}D={Ua:D.Ua}}}function f(){var w=z(),y=w.Rg,A=w.Sg,C=y/v.scrollWidth*100,F=A/v.scrollHeight*100;e(y,"horiz.pix",
p.jc,r.Ge);e(C,"horiz.pct",p.ic,r.Ge);e(A,"vert.pix",p.jc,r.Te);e(F,"vert.pct",p.ic,r.Te);Ul("sdl","pending",!1)}function h(){var w=250,y=!1;t.scrollingElement&&t.documentElement&&u.addEventListener&&(w=50,y=!0);var A=0,C=!1,F=function(){C?A=qn(F,w):(A=0,f(),Bn("sdl")&&!a()&&(id(u,"scroll",D),id(u,"resize",D),Ul("sdl","init",!1)));C=!1},D=function(){y&&z();A?C=!0:(A=qn(F,w),Ul("sdl","pending",!0))};return D}function k(w,y,A){if(y){var C=b(String(w));Vl("sdl",A,function(F){for(var D=0;D<C.length;D++){var H=
String(C[D]);F.hasOwnProperty(H)||(F[H]=[]);F[H].push(y)}return F},{})}}function l(w){return Wl("sdl",w,{})}function n(w){J(w.vtp_gtmOnSuccess);var y=w.vtp_uniqueTriggerId,A=w.vtp_horizontalThresholdsPixels,C=w.vtp_horizontalThresholdsPercent,F=w.vtp_verticalThresholdUnits,D=w.vtp_verticalThresholdsPixels,H=w.vtp_verticalThresholdsPercent;switch(w.vtp_horizontalThresholdUnits){case p.jc:k(A,y,"horiz.pix");break;case p.ic:k(C,y,"horiz.pct")}switch(F){case p.jc:k(D,y,"vert.pix");break;case p.ic:k(H,
y,"vert.pct")}Bn("sdl")?Wl("sdl","pending")||(x||(d(),x=!0),J(function(){return f()})):(d(),x=!0,v&&(Cn("sdl"),Ul("sdl","pending",!0),J(function(){f();if(a()){var M=h();hd(u,"scroll",M);hd(u,"resize",M)}else Ul("sdl","init",!1)})))}var q=/^\s*$/,p={ic:"PERCENT",jc:"PIXELS"},r={Te:"vertical",Ge:"horizontal"},u,t,v,x=!1,z;(function(w){Z.__sdl=w;Z.__sdl.h="sdl";Z.__sdl.i=!0;Z.__sdl.priorityOverride=0})(function(w){w.vtp_triggerStartOption?n(w):dm(function(){n(w)})})}();

Z.g.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.h="jsm";Z.__jsm.i=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");var d=c&&c.e&&c.e(b);En(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();
Z.g.c=["google"],function(){(function(a){Z.__c=a;Z.__c.h="c";Z.__c.i=!0;Z.__c.priorityOverride=0})(function(a){En(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Z.g.e=["google"],function(){(function(a){Z.__e=a;Z.__e.h="e";Z.__e.i=!0;Z.__e.priorityOverride=0})(function(a){var b=String(lf(a.vtp_gtmEventId,"event"));return b})}();
Z.g.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Sl(c,"gtm.click");wn(d)}}(function(b){Z.__cl=b;Z.__cl.h="cl";Z.__cl.i=!0;Z.__cl.priorityOverride=0})(function(b){if(!Bn("cl")){var c=W("document");hd(c,"click",a,!0);Cn("cl")}J(b.vtp_gtmOnSuccess)})}();
Z.g.j=["google"],function(){(function(a){Z.__j=a;Z.__j.h="j";Z.__j.i=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=W(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];En(c,"j",a.vtp_gtmEventId);return c})}();

Z.g.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.h="u";Z.__u.i=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:vn("gtm.url",1))||sn();var d=b[a("vtp_component")];if(!d||"URL"==d)return un(String(c));var e=pe(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],n;h?Ea(k)?n=k:n=String(k).replace(/\s+/g,
"").split(","):n=[String(k)];for(var q=0;q<n.length;q++){var p=ne(e,"QUERY",void 0,void 0,n[q]);if(void 0!=p&&(!l||""!==p)){f=p;break a}}f=void 0}else f=ne(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.g.v=["google"],function(){(function(a){Z.__v=a;Z.__v.h="v";Z.__v.i=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=vn(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;En(d,"v",a.vtp_gtmEventId);return d})}();
Z.g.ua=["google"],function(){function a(p){return Qd(p)}function b(p,r,u){var t=!1;if(Hd()&&!t&&!e[p]){var v=!1,x=function(){var z=Ci(),w="gtm"+Ze(),y=n(r),A={name:w};l(y,A,!0);var C=void 0,F=A._useUp;
z("create",p,A);z(function(){z.remove(w)})};Ld(x,B.I);Ld(x,B.B);e[p]=!0}}var c,d={},e={},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,
cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},h={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},k={urlPassthrough:!0},l=function(p,r,u){var t=0;if(p)for(var v in p)if(!k[v]&&
p.hasOwnProperty(v)&&(u&&f[v]||!u&&void 0===f[v])){var x=h[v]?Pa(p[v]):p[v];"anonymizeIp"!=v||x||(x=void 0);r[v]=x;t++}return t},n=function(p){var r={};p.vtp_gaSettings&&m(lo(p.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),r);m(lo(p.vtp_fieldsToSet,"fieldName","value"),r);Qd(B.I)||(r.storage="none");Qd(B.B)||(r.allowAdFeatures=!1,r.storeGac=!1);jl()||(r.allowAdFeatures=!1);il()||(r.allowAdPersonalizationSignals=!1);p.vtp_transportUrl&&(r._x_19=p.vtp_transportUrl);if(Pa(r.urlPassthrough)){r._useUp=!0;var u=!1;Hd()&&!u&&(r._cs=a)}return r},q=function(p){function r(fa,V){void 0!==V&&D("set",fa,V)}var u={},t={},v={},x={};
if(p.vtp_gaSettings){var z=p.vtp_gaSettings;m(lo(z.vtp_contentGroup,"index","group"),t);m(lo(z.vtp_dimension,"index","dimension"),v);m(lo(z.vtp_metric,"index","metric"),x);var w=m(z);w.vtp_fieldsToSet=void 0;w.vtp_contentGroup=void 0;w.vtp_dimension=void 0;w.vtp_metric=void 0;p=m(p,w)}m(lo(p.vtp_contentGroup,"index","group"),t);m(lo(p.vtp_dimension,"index","dimension"),v);m(lo(p.vtp_metric,"index","metric"),x);var y=n(p),A=Ei(p.vtp_functionName);if(Ba(A)){var C="",F="";p.vtp_setTrackerName&&"string"==
typeof p.vtp_trackerName?""!==p.vtp_trackerName&&(F=p.vtp_trackerName,C=F+"."):(F="gtm"+Ze(),C=F+".");var D=function(fa){var V=[].slice.call(arguments,0);V[0]=C+V[0];A.apply(window,V)},H=function(fa,V){return void 0===V?V:fa(V)},M=function(fa,V){if(V)for(var nb in V)V.hasOwnProperty(nb)&&D("set",fa+nb,V[nb])},N=function(){var fa={transaction_id:"id",affiliation:"affiliation",value:"revenue",tax:"tax",shipping:"shipping",coupon:"coupon",
item_list_name:"list"},V={},nb=(V[B.Nc]="click",V[B.Ca]="detail",V[B.Wa]="add",V[B.Xa]="remove",V[B.La]="checkout",V[B.qa]="purchase",V[B.Ya]="refund",V),Nb={item_id:"id",item_name:"name",item_list_name:"list",item_brand:"brand",item_category:"category",item_variant:"variant",index:"position",promotion_id:"id",promotion_name:"name",creative_name:"creative",creative_slot:"position"},Ob=function(Ta,Ua){for(var Ia in Ta)fa.hasOwnProperty(Ia)&&(Ta[Ua]=Ta[Ua]||{},Ta[Ua].actionField=Ta[Ua].actionField||
{},Ta[Ua].actionField[fa[Ia]]=Ta[Ia])},ob=function(Ta){for(var Ua=[],Ia={},pb=0;pb<Ta.length;Ia={nb:Ia.nb},pb++)Ia.nb={},Ma(Ta[pb],function(rc){return function(je,Ff){Nb.hasOwnProperty(je)?rc.nb[Nb[je]]=Ff:rc.nb[je]=Ff}}(Ia)),Ua.push(Ia.nb);return Ua},Qa=function(Ta,Ua,Ia){if(!mb(Ua))return!1;for(var pb=Xa(Object(Ua),Ia,[]),rc=0;pb&&rc<pb.length;rc++)D(Ta,pb[rc]);return!!pb&&0<pb.length},Q;if(p.vtp_useEcommerceDataLayer){var fb=!1;if(p.vtp_useGA4SchemaForEcommerce){Q=Q||lf(p.vtp_gtmEventId,"eventModel");fb=!!Q}
fb||(Q=vn("ecommerce",1))}else p.vtp_ecommerceMacroData&&(Q=p.vtp_ecommerceMacroData.ecommerce,!Q&&p.vtp_useGA4SchemaForEcommerce&&(Q=p.vtp_ecommerceMacroData));if(!mb(Q))return;Q=Object(Q);if(p.vtp_useGA4SchemaForEcommerce){Q=m(Q);Q.currencyCode=Q.currencyCode||Q.currency;var Sa;Sa=Sa||String(lf(p.vtp_gtmEventId,"event"));if("view_item_list"===
Sa&&!Q.impressions&&Q.items)Q.impressions=ob(Q.items);else if("view_promotion"===Sa&&!Q.promoView&&Q.items)Q.promoView={},Q.promoView.promotions=ob(Q.items);else if("select_promotion"===Sa&&!Q.promoClick)Q.items&&(Q.promoClick={},Q.promoClick.promotions=ob(Q.items)),Ob(Q,"promoClick");else if(nb.hasOwnProperty(Sa)){var gc=nb[Sa];Q[gc]||(Q.items&&(Q[gc]={},Q[gc].products=ob(Q.items)),Ob(Q,gc))}}var he=Xa(y,"currencyCode",Q.currencyCode);void 0!==he&&D("set","&cu",he);Qa("ec:addImpression",Q,"impressions");
if(Qa("ec:addPromo",Q[Q.promoClick?"promoClick":"promoView"],"promotions")&&Q.promoClick){D("ec:setAction","promo_click",Q.promoClick.actionField);return}for(var Oc="detail checkout checkout_option click add remove purchase refund".split(" "),Pc="refund purchase remove checkout checkout_option add click detail".split(" "),md=0;md<Oc.length;md++){var Bb=Q[Oc[md]];if(Bb){Qa("ec:addProduct",Bb,"products");D("ec:setAction",Oc[md],Bb.actionField);if(hj)for(var ie=0;ie<Pc.length;ie++){var nd=Q[Pc[ie]];
if(nd){nd!==Bb&&E(13);break}}break}}},R={name:F};l(y,R,!0);var ha=p.vtp_trackingId||u.trackingId;A("create",ha,R);D("set","&gtm",Sj(!0));var S=!1;
Hd()&&!S&&(D("set","&gcs",Rd()),b(ha,p,F));y._x_19&&(null==ad&&delete y._x_19,y._x_20&&!d[F]&&(d[F]=!0,A(Ji(F,String(y._x_20)))));p.vtp_enableRecaptcha&&D("require","recaptcha","recaptcha.js");(function(fa,V){void 0!==p[V]&&D("set",fa,p[V])})("nonInteraction","vtp_nonInteraction");M("contentGroup",t);M("dimension",v);M("metric",x);var K={};l(y,K,!1)&&D("set",K);var T;
p.vtp_enableLinkId&&D("require","linkid","linkid.js");D("set","hitCallback",function(){var fa=y&&y.hitCallback;Ba(fa)&&fa();p.vtp_gtmOnSuccess()});var U=function(fa,V){return void 0===p[fa]?u[V]:p[fa]};if("TRACK_EVENT"==p.vtp_trackType){p.vtp_enableEcommerce&&(D("require","ec","ec.js"),N());var la={hitType:"event",eventCategory:String(U("vtp_eventCategory","category")),eventAction:String(U("vtp_eventAction","action")),eventLabel:H(String,
U("vtp_eventLabel","label")),eventValue:H(Oa,U("vtp_eventValue","value"))};l(T,la,!1);D("send",la);}else if("TRACK_SOCIAL"==p.vtp_trackType){}else if("TRACK_TRANSACTION"==
p.vtp_trackType){}else if("TRACK_TIMING"==p.vtp_trackType){}else if("DECORATE_LINK"==
p.vtp_trackType){}else if("DECORATE_FORM"==p.vtp_trackType){}else if("TRACK_DATA"==p.vtp_trackType){}else{p.vtp_enableEcommerce&&
(D("require","ec","ec.js"),N());if(p.vtp_doubleClick||"DISPLAY_FEATURES"==p.vtp_advertisingFeaturesType){var Ka="_dc_gtm_"+String(p.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");D("require","displayfeatures",void 0,{cookieName:Ka})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==p.vtp_advertisingFeaturesType){var Ya="_dc_gtm_"+String(p.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");D("require","adfeatures",{cookieName:Ya})}T?D("send","pageview",T):D("send","pageview");Pa(y.urlPassthrough)&&Gi(C)}if(!c){var db=p.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";p.vtp_useInternalVersion&&!p.vtp_useDebugVersion&&(db="internal/"+db);c=!0;var xb=Cj(y._x_19,"/analytics.js"),Za=Dh("https:","http:","//www.google-analytics.com/"+db,y&&!!y.forceSSL);O("analytics.js"===db&&xb?xb:Za,function(){var fa=
Ci();fa&&fa.loaded||p.vtp_gtmOnFailure();},p.vtp_gtmOnFailure)}}else J(p.vtp_gtmOnFailure)};(function(p){Z.__ua=p;Z.__ua.h="ua";Z.__ua.i=!0;Z.__ua.priorityOverride=0})(function(p){Sd(function(){q(p)},
[B.I,B.B])})}();




Z.g.opt=["google"],function(){var a;(function(b){Z.__opt=b;Z.__opt.h="opt";Z.__opt.i=!0;Z.__opt.priorityOverride=0})(function(b){var c={};if(b.vtp_gaSettings){var d=b.vtp_gaSettings;m(lo(d.vtp_fieldsToSet,"fieldName","value"),c);b.vtp_gaSettings=null;d.vtp_fieldsToSet=void 0;var e=m(d);b=m(b,e)||{}}m(lo(b.vtp_fieldsToSet,"fieldName","value"),c);var f=Ei(b.vtp_functionName);if(Ba(f)){f.r=!0;var h="",k="";b.vtp_setTrackerName&&
"string"===typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(k=b.vtp_trackerName,h=k+"."):(k="gtm"+Ze(),h=k+".");var l={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},n={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,
javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},q=function(x,z,w){var y=0,A;for(A in x)if(x.hasOwnProperty(A)&&(w&&l[A]||!w&&void 0===l[A])){var C=n[A]?Pa(x[A]):x[A];"anonymizeIp"!==A||C||(C=void 0);z[A]=C;y++}return y},p={name:k};q(c,p,!0);var r={"&gtm":Sj(!0)};q(c,r,!1);var u=encodeURI(Dh("https:","http:","//www.google-analytics.com/"+(b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!c.forceSSL));f("create",b.vtp_trackingId,p);f(h+
"set",r);f(h+"require",b.vtp_optimizeContainerId,{dataLayer:"dataLayer"});f(b.vtp_gtmOnSuccess);f(h+"require","render");a||(a=!0,O(u,function(){return Ci().loaded||b.vtp_gtmOnFailure()},b.vtp_gtmOnFailure));var t=W("dataLayer"),v=t&&t.hide;v&&(v.end||!0===v["GTM-P3QGG32"])&&(v[b.vtp_optimizeContainerId]=!0)}else J(b.vtp_gtmOnFailure)})}();
Z.g.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.h="cid";Z.__cid.i=!0;Z.__cid.priorityOverride=0})(function(){return Me.D})}();



Z.g.aev=["google"],function(){function a(u,t,v){var x=u||lf(t,"gtm");if(x)return x[v]}function b(u,t,v,x,z){z||(z="element");var w=t+"."+v,y;if(q.hasOwnProperty(w))y=q[w];else{var A=a(u,t,z);if(A&&(y=x(A),q[w]=y,p.push(w),35<p.length)){var C=p.shift();delete q[C]}}return y}function c(u,t,v,x){var z=a(u,t,r[v]);return void 0!==z?z:x}function d(u,t){if(!u)return!1;var v=e(sn());Ea(t)||(t=String(t||"").replace(/\s+/g,"").split(","));for(var x=[v],z=0;z<t.length;z++){var w=t[z];if(w.hasOwnProperty("is_regex"))if(w.is_regex)try{w=
new RegExp(w.domain)}catch(A){continue}else w=w.domain;if(w instanceof RegExp){if(w.test(u))return!1}else{var y=w;if(0!=y.length){if(0<=e(u).indexOf(y))return!1;x.push(e(y))}}}return!ko(u,x)}function e(u){n.test(u)||(u="http://"+u);return ne(pe(u),"HOST",!0)}function f(u,t,v,x){switch(u){case "SUBMIT_TEXT":return b(t,v,"FORM."+u,h,"formSubmitElement")||x;case "LENGTH":var z=b(t,v,"FORM."+u,k);return void 0===z?x:z;case "INTERACTED_FIELD_ID":return l(t,v,"id",x);case "INTERACTED_FIELD_NAME":return l(t,
v,"name",x);case "INTERACTED_FIELD_TYPE":return l(t,v,"type",x);case "INTERACTED_FIELD_POSITION":var w=a(t,v,"interactedFormFieldPosition");return void 0===w?x:w;case "INTERACT_SEQUENCE_NUMBER":var y=a(t,v,"interactSequenceNumber");return void 0===y?x:y;default:return x}}function h(u){switch(u.tagName.toLowerCase()){case "input":return jd(u,"value");case "button":return kd(u);default:return null}}function k(u){if("form"===u.tagName.toLowerCase()&&u.elements){for(var t=0,v=0;v<u.elements.length;v++)bn(u.elements[v])&&
t++;return t}}function l(u,t,v,x){var z=a(u,t,"interactedFormField");return z&&jd(z,v)||x}var n=/^https?:\/\//i,q={},p=[],r={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(u){Z.__aev=u;Z.__aev.h="aev";Z.__aev.i=!0;Z.__aev.priorityOverride=
0})(function(u){var t=u.vtp_gtmEventId,v=u.vtp_defaultValue,x=u.vtp_varType,z;switch(x){case "TAG_NAME":var w=a(z,t,"element");return w&&w.tagName||v;case "TEXT":return b(z,t,x,kd)||v;case "URL":var y;a:{var A=String(a(z,t,"elementUrl")||v||""),C=pe(A),F=String(u.vtp_component||"URL");switch(F){case "URL":y=A;break a;case "IS_OUTBOUND":y=
d(A,u.vtp_affiliatedDomains);break a;default:y=ne(C,F,u.vtp_stripWww,u.vtp_defaultPages,u.vtp_queryKey)}}return y;case "ATTRIBUTE":var D;if(void 0===u.vtp_attribute)D=c(z,t,x,v);else{var H=u.vtp_attribute,M=a(z,t,"element");D=M&&jd(M,H)||v||""}return D;case "MD":var N=u.vtp_mdValue,R=b(z,t,"MD",ln);return N&&R?on(R,N)||v:R||v;case "FORM":return f(String(u.vtp_component||"SUBMIT_TEXT"),z,t,v);default:var ha=c(z,t,x,v);En(ha,"aev",u.vtp_gtmEventId);return ha}})}();

Z.g.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.h="gas";Z.__gas.i=!0;Z.__gas.priorityOverride=0})(function(a){var b=m(a),c=b;c[rb.Oa]=null;c[rb.qg]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Z.g.hl=["google"],function(){function a(f){return f.target&&f.target.location&&f.target.location.href?f.target.location.href:sn()}function b(f,h){hd(f,"hashchange",function(k){var l=a(k);h({source:"hashchange",state:null,url:un(l),S:tn(l)})})}function c(f,h){hd(f,"popstate",function(k){var l=a(k);h({source:"popstate",state:k.state,url:un(l),S:tn(l)})})}function d(f,h,k){var l=h.history,n=l[f];if(Ba(n))try{l[f]=function(q,p,r){n.apply(l,[].slice.call(arguments,0));k({source:f,state:q,url:un(sn()),
S:tn(sn())})}}catch(q){}}function e(){var f={source:null,state:W("history").state||null,url:un(sn()),S:tn(sn())};return function(h){var k=f,l={};l[k.source]=!0;l[h.source]=!0;if(!l.popstate||!l.hashchange||k.S!=h.S){var n={event:"gtm.historyChange","gtm.historyChangeSource":h.source,"gtm.oldUrlFragment":f.S,"gtm.newUrlFragment":h.S,"gtm.oldHistoryState":f.state,"gtm.newHistoryState":h.state,"gtm.oldUrl":f.url,"gtm.newUrl":h.url};f=h;wn(n)}}}(function(f){Z.__hl=f;Z.__hl.h="hl";Z.__hl.i=!0;Z.__hl.priorityOverride=
0})(function(f){var h=W("self");if(!Bn("hl")){var k=e();b(h,k);c(h,k);d("pushState",h,k);d("replaceState",h,k);Cn("hl")}J(f.vtp_gtmOnSuccess)})}();
Z.g.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.h="remm";Z.__remm.i=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=a.vtp_defaultValue,h=0;h<c.length;h++){var k=c[h].key||"";d&&(k="^"+k+"$");var l=new RegExp(k,e);if(l.test(b)){var n=c[h].value;a.vtp_replaceAfterMatch&&(n=String(b).replace(l,n));f=n;break}}En(f,"remm",a.vtp_gtmEventId);return f})}();
Z.g.fsl=[],function(){function a(){var e=W("document"),f=c(),h=HTMLFormElement.prototype.submit;hd(e,"click",function(k){var l=k.target;if(l&&(l=od(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&jd(l,"value")){var n;l.form?l.form.tagName?n=l.form:n=I.getElementById(l.form):n=od(l,["form"],100);n&&f.store(n,l)}},!1);hd(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var n=k.defaultPrevented||!1===k.returnValue,q=b(l)&&!n,p=f.get(l),r=!0;if(d(l,function(){if(r){var u;
p&&(u=e.createElement("input"),u.type="hidden",u.name=p.name,u.value=p.value,l.appendChild(u));h.call(l);u&&l.removeChild(u)}},n,q,p))r=!1;else return n||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),n=!0;d(k,function(){n&&h.call(k)},!1,l)&&(h.call(k),n=!1)}}function b(e){var f=e.target;return f&&"_self"!==f&&"_parent"!==f&&"_top"!==f?!1:!0}function c(){var e=[],f=function(h){return Ga(e,function(k){return k.form===
h})};return{store:function(h,k){var l=f(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=f(h);return k?k.button:null}}}function d(e,f,h,k,l){var n=Wl("fsl",h?"nv.mwt":"mwt",0),q;q=h?Wl("fsl","nv.ids",[]):Wl("fsl","ids",[]);if(!q.length)return!0;var p=Sl(e,"gtm.formSubmit",q),r=e.action;r&&r.tagName&&(r=e.cloneNode(!1).action);p["gtm.elementUrl"]=r;l&&(p["gtm.formSubmitElement"]=l);if(k&&n){if(!wn(p,Qm(f),n))return!1}else wn(p,function(){},n||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.h=
"fsl";Z.__fsl.i=!0;Z.__fsl.priorityOverride=0})(function(e){var f=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(f){var n=function(p){return Math.max(k,p)};Vl("fsl","mwt",n,0);h||Vl("fsl","nv.mwt",n,0)}var q=function(p){p.push(l);return p};Vl("fsl","ids",q,[]);h||Vl("fsl","nv.ids",q,[]);Bn("fsl")||(a(),Cn("fsl"));J(e.vtp_gtmOnSuccess)})}();Z.g.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.h="smm";Z.__smm.i=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=lo(a.vtp_map,"key","value")||{},d=c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue;En(d,"smm",a.vtp_gtmEventId);return d})}();



Z.g.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.h="paused";Z.__paused.i=!0;Z.__paused.priorityOverride=0})(function(a){J(a.vtp_gtmOnFailure)})}();

Z.g.zone=[],function(){function a(n){for(var q=n.vtp_boundaries||[],p=0;p<q.length;p++)if(!q[p])return!1;return!0}function b(n){var q=Me.D,p=q+":"+n.vtp_gtmTagId,r=vn("gtm.uniqueEventId")||0,u=ci(function(){return new h}),t=a(n),v=n.vtp_enableTypeRestrictions?n.vtp_whitelistedTypes.map(function(y){return y.typeId}):null;v=v&&cb(v,f);if(u.registerZone(p,r,t,v))for(var x=n.vtp_childContainers.map(function(y){return y.publicId}),z=0;z<x.length;z++){var w=String(x[z]);u.registerChild(w,q,p)&&(0!==w.indexOf("GTM-")?
(function(y,A){wn(arguments)}("js",new Date),l&&L.addTargetToGroup(w),Kl({},w)):Dn(w))}}var c={active:!1,isAllowed:function(){return!1},ih:function(){return!1}},d={active:!0,isAllowed:function(){return!0},ih:function(){return!0}},e={zone:!0,cn:!0,css:!0,ew:!0,eq:!0,ge:!0,gt:!0,lc:!0,le:!0,lt:!0,re:!0,sw:!0,um:!0},f={cl:["ecl"],ecl:["cl"],ehl:["hl"],hl:["ehl"]},h=function(){this.m={};this.o={}};h.prototype.checkState=function(n,q){var p=this.m[n];if(!p)return d;var r=this.checkState(p.kf,q);if(!r.active)return c;
for(var u=[],t=0;t<p.Rd.length;t++){var v=this.o[p.Rd[t]];v.Kb(q)&&u.push(v)}return u.length?{active:!0,isAllowed:function(x,z){z=z||[];var w=r.isAllowed;if(!w(x,z))return!1;for(var y=0;y<u.length;++y)if(u[y].isAllowed(x,z))return!0;return!1}}:c};h.prototype.unregisterChild=function(n){delete this.m[n]};h.prototype.registerZone=function(n,q,p,r){var u=this.o[n];if(u)return u.C(q,p),!1;if(!p)return!1;this.o[n]=new k(q,r);return!0};h.prototype.registerChild=function(n,q,p){var r=this.m[n];if(!r&&L[n]||
r&&r.kf!==q)return!1;if(r)return r.Rd.push(p),!1;this.m[n]={kf:q,Rd:[p]};return!0};var k=function(n,q){this.m=[{eventId:n,Kb:!0}];this.o=null;if(q){this.o={};for(var p=0;p<q.length;p++)this.o[q[p]]=!0}};k.prototype.C=function(n,q){var p=this.m[this.m.length-1];n<=p.eventId||p.Kb!=q&&this.m.push({eventId:n,Kb:q})};k.prototype.Kb=function(n){if(!this.m||0==this.m.length)return!1;for(var q=this.m.length-1;0<=q;q--)if(this.m[q].eventId<=n)return this.m[q].Kb;return!1};k.prototype.isAllowed=function(n,
q){q=q||[];if(!this.o||e[n]||this.o[n])return!0;for(var p=0;p<q.length;++p)if(this.o[q[p]])return!0;return!1};var l=!1;(function(n){Z.__zone=n;Z.__zone.h="zone";Z.__zone.i=!0;Z.__zone.priorityOverride=0})(function(n){b(n);J(n.vtp_gtmOnSuccess)})}();
Z.g.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var n=I.createElement("script");n.async=!1;n.type="text/javascript";n.id=k.id;n.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(n.charset=k.charset);var q=k.getAttribute("data-gtmsrc");q&&(n.src=q,cd(n,l));d.insertBefore(n,null);q||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(r){J(h)}}}var c=function(d){if(I.body){var e=
d.vtp_gtmOnFailure,f=Fn(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.bh,k=f.onSuccess;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(I.body,ld(h),k,e)()}else qn(function(){c(d)},
200)};Z.__html=c;Z.__html.h="html";Z.__html.i=!0;Z.__html.priorityOverride=0}();






Z.g.lcl=[],function(){function a(){var c=W("document"),d=0,e=function(f){var h=f.target;if(h&&3!==f.which&&!(f.fh||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;h=od(h,["a","area"],100);if(!h)return f.returnValue;var k=f.defaultPrevented||!1===f.returnValue,l=Wl("lcl",k?"nv.mwt":"mwt",0),n;n=k?Wl("lcl","nv.ids",[]):Wl("lcl","ids",[]);if(n.length){var q=Sl(h,"gtm.linkClick",n);if(b(f,h,c)&&!k&&l&&h.href){var p=!!Ga(String(qd(h,"rel")||"").split(" "),function(t){return"noreferrer"===t.toLowerCase()});
p&&E(36);var r=W((qd(h,"target")||"_self").substring(1)),u=!0;if(wn(q,Qm(function(){var t;if(t=u&&r){var v;a:if(p){var x;try{x=new MouseEvent(f.type,{bubbles:!0})}catch(z){if(!c.createEvent){v=!1;break a}x=c.createEvent("MouseEvents");x.initEvent(f.type,!0,!0)}x.fh=!0;f.target.dispatchEvent(x);v=!0}else v=!1;t=!v}t&&(r.location.href=qd(h,"href"))}),l))u=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else wn(q,function(){},l||2E3);return!0}}};hd(c,"click",e,!1);hd(c,"auxclick",
e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=qd(d,"href"),h=f.indexOf("#"),k=qd(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=un(f),n=un(e.location);return l!==n}return!0}(function(c){Z.__lcl=c;Z.__lcl.h="lcl";Z.__lcl.i=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);
if(!f||0>=f)f=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(n){return Math.max(f,n)};Vl("lcl","mwt",k,0);e||Vl("lcl","nv.mwt",k,0)}var l=function(n){n.push(h);return n};Vl("lcl","ids",l,[]);e||Vl("lcl","nv.ids",l,[]);Bn("lcl")||(a(),Cn("lcl"));J(c.vtp_gtmOnSuccess)})}();


var Xq={};Xq.macro=function(a){if(Xm.ld.hasOwnProperty(a))return Xm.ld[a]},Xq.onHtmlSuccess=Xm.Ze(!0),Xq.onHtmlFailure=Xm.Ze(!1);Xq.dataLayer=ff;Xq.callback=function(a){Xe.hasOwnProperty(a)&&Ba(Xe[a])&&Xe[a]();delete Xe[a]};Xq.bootstrap=0;Xq._spx=!1;function Yq(){L[Me.D]=Xq;ab(Ye,Z.g);Zb=Zb||Xm;$b=jc}
function Zq(){vd.o().o();L=G.google_tag_manager=G.google_tag_manager||{};qk();Kg.enable_gbraid_cookie_write=!0;if(L[Me.D]){var a=L.zones;a&&a.unregisterChild(Me.D);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Sb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)Vb.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)Ub.push(h[k]);for(var l=b.rules||[],n=0;n<l.length;n++){for(var q=l[n],p={},r=0;r<q.length;r++)p[q[r][0]]=Array.prototype.slice.call(q[r],1);Tb.push(p)}Xb=Z;Yb=go;Yq();Wm();ki=!1;li=0;if("interactive"==I.readyState&&!I.createEventObject||"complete"==I.readyState)ni();
else{hd(I,"DOMContentLoaded",ni);hd(I,"readystatechange",ni);if(I.createEventObject&&I.documentElement.doScroll){var u=!0;try{u=!G.frameElement}catch(z){}u&&oi()}hd(G,"load",ni)}am=!1;"complete"===I.readyState?cm():hd(G,"load",cm);a:{if(!hj)break a;G.setInterval(gj,
864E5);}Ve=(new Date).getTime();}}
(function(a){if(!G["__TAGGY_INSTALLED"]){var b=!1;if(I.referrer){var c=pe(I.referrer);b="cct.google"===me(c,"host")}if(!b){var d=wf("googTaggyReferrer");b=d.length&&d[0].length}b&&(G["__TAGGY_INSTALLED"]=!0,dd("https://cct.google/taggy/agent.js"))}var f=function(){var n=G["google.tagmanager.debugui2.queue"];n||(n=[],G["google.tagmanager.debugui2.queue"]=n,dd("https://www.googletagmanager.com/debug/bootstrap"));var q={messageType:"CONTAINER_STARTING",data:{scriptSource:ad,containerProduct:"GTM",debug:!1}};q.data.resume=function(){a()};Me.Ef&&(q.data.initialPublish=!0);n.push(q)},h="x"===ne(G.location,"query",!1,void 0,"gtm_debug");if(!h&&I.referrer){var k=pe(I.referrer);h="tagassistant.google.com"===me(k,"host")}if(!h){var l=wf("__TAG_ASSISTANT");h=l.length&&l[0].length}G.__TAG_ASSISTANT_API&&(h=!0);h&&ad?f():a()})(Zq);

})()
