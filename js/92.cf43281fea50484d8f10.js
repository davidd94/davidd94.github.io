(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{cNRt:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return S}));e("HAE/"),e("WLL4"),e("jm62"),e("ioFf"),e("rGqo"),e("yt8O"),e("Btvt"),e("RW0V"),e("V+eJ"),e("Vd3H"),e("8+KV"),e("0l/t"),e("bWfx");var i,o,r=e("rePB"),a=(e("dRSK"),e("q1tI")),s=e.n(a),u=e("ZqbR"),l=e("nOHt"),d=e("HQnQ"),c=e("bnQg"),f=e("TSYQ"),m=e.n(f),g=e("RMmg"),b=e("JRPe");!function(n){n.vitamins="vitamins",n.nutrients="nutrients",n.minerals="minerals",n.ingredients="ingredients",n.nutritions="nutritions"}(i||(i={})),function(n){n.nutrients="nutrientes",n.minerals="minerales",n.vitamins="vitaminas",n.ingredients="ingredientes"}(o||(o={}));e("pIFo");var p=e("aM5I"),_=s.a.createElement,h=function(n){var t=n.metaField,e=t.key,i=t.value,r=n.seeAllState,a=n.isViewIngredients,s=Object(u.useSelector)((function(n){return n})).intl.locale;return _("div",{className:m()("nutrition-information__metafields-container",{"show-more":r||a}),key:e},_("div",{className:"nutrition-information__metafields-icon"}),_("div",{className:"nutrition-information__metafields-header"},s===p.a&&o[e]?o[e]:e),_(g.DangerouslySetInnerHtml,{className:"nutrition-information__metafields-content",html:i}))},v=s.a.createElement,y=Object(b.injectIntl)((function(n){var t=n.baseMetafields,e=n.intl.formatMessage,o=n.handleToggle,r=n.ingredientsToggled,s=n.isViewIngredients,l=Object(a.useState)(!1),d=l[0],c=l[1],f=r?"components.sk.components.shopify.nutritionInformation.hideIngredients":"components.sk.components.shopify.nutritionInformation.viewIngredients",m=Object(u.useSelector)((function(n){return n.webConfig})).isAMP;return v("div",{className:"nutrition-information__metafields"},m?v("div",{hidden:"hidden",id:"nutrition-information__metafields-container",className:"nutrition-information__metafields-container"},v("div",{className:"nutrition-information__metafields-icon"}),t.map((function(n,t){return v("div",{hidden:0!==t?"hidden":void 0,"data-amp-bind-hidden":"nutriId !='".concat(t,"'")},v("div",{className:"nutrition-information__metafields-header"},n.key),v("div",{dangerouslySetInnerHTML:{__html:n.value.replace("<strong>","")}}))}))):t.map((function(n){return v(h,{metaField:n,seeAllState:d,isViewIngredients:s})})),m?v("div",null,v(g.Button,{type:"button",id:"nutrition-information__metafields-btn",on:"tap:nutrition-information__metafields-container.show,nutrition-information__metafields-btn.hide,nutrition-information__metafields-btn-toggled.show",className:"nutrition-information__metafields-btn",ariaLabel:"".concat(e({id:"components.sk.components.shopify.nutritionInformation.allIngredients",defaultMessage:"See all ingredients"}))},v(b.FormattedMessage,{id:"components.sk.components.shopify.nutritionInformation.allIngredients",defaultMessage:"See all ingredients"})),v(g.Button,{type:"button",hidden:"hidden",id:"nutrition-information__metafields-btn-toggled",on:"tap:nutrition-information__metafields-container.hide,nutrition-information__metafields-btn.show,nutrition-information__metafields-btn-toggled.hide",className:"nutrition-information__metafields-btn",ariaLabel:"".concat(e({id:"components.sk.components.shopify.nutritionInformation.lessIngredients",defaultMessage:"See less ingredients"}))},v(b.FormattedMessage,{id:"components.sk.components.shopify.nutritionInformation.lessIngredients",defaultMessage:"See less ingredients"}))):s?null:v(g.Button,{className:"nutrition-information__metafields-btn",onClick:function(){o(i.ingredients),c(!d)},ariaLabel:"".concat(e({id:f,defaultMessage:f}))},v(b.FormattedMessage,{id:f,defaultMessage:f})))})),O=s.a.createElement,I=Object(b.injectIntl)((function(n){var t=n.nutrientsMetafield,e=Object(u.useSelector)((function(n){return n})).intl.locale;return O("div",{className:"nutrition-information__nutrients"},t.map((function(n){return O("div",{className:"nutrition-information__nutrients-container"},O("div",{className:"nutrition-information__nutrients-header"},e===p.a&&o[n.key]?o[n.key]:n.key),O("section",null,O(g.DangerouslySetInnerHtml,{html:n.value,className:"nutrition-information__nutrients-content"})))})))})),j=s.a.createElement,k=Object(b.injectIntl)((function(n){var t=n.nutritionMetafields,e=n.nutritionsToggled,o=n.ingredientsToggled,r=n.handleToggle,a=n.filterMetaField,s=n.currentTab,l=n.isViewIngredients,d=n.intl.formatMessage,c=e?"components.sk.components.shopify.nutritionInformation.nutrients.open":"components.sk.components.shopify.nutritionInformation.nutrients.close",f=Object(u.useSelector)((function(n){return n.webConfig})).isAMP;return t.length?j("div",{className:"nutrition-information"},j("div",{className:"nutrition-information__wrapper"},j("div",{className:"nutrition-information__toggle-bar"},j("div",{className:"nutrition-information__header"},j("h2",null,j(b.FormattedMessage,{id:"components.sk.components.shopify.nutritionInformation.header",defaultMessage:"Nutrients and Ingredients"}))),j("div",{className:"nutrition-information__button"},f?j("span",null,j(g.Button,{type:"button",id:"nutrition-information-toggle-button",on:"tap:nutrition-information-container.show,nutrition-information-toggle-button.hide,nutrition-information-toggle-button-toggled.show",className:"nutrition-information__toggle-button",ariaLabel:d({id:"components.sk.components.shopify.nutritionInformation.nutrients.open",defaultMessage:"Open Nutrition and Information"})}),j(g.Button,{type:"button",hidden:"hidden",id:"nutrition-information-toggle-button-toggled",on:"tap:nutrition-information-container.hide,nutrition-information-toggle-button.show,nutrition-information-toggle-button-toggled.hide",className:"nutrition-information__toggle-button nutrition-information__toggle-button--toggled",ariaLabel:d({id:"components.sk.components.shopify.nutritionInformation.nutrients.close",defaultMessage:"Close Nutrition and Information"})})):j(g.Button,{onClick:function(){return r(i.nutritions)},className:m()("nutrition-information__toggle-button",{"nutrition-information__toggle-button--toggled":e}),ariaLabel:d({id:c,defaultMessage:c})}))),f?j("div",{hidden:"hidden",id:"nutrition-information-container",className:"nutrition-information__container"},j(I,{nutrientsMetafield:a,handleToggle:r,currentTab:s}),j(y,{baseMetafields:t,handleToggle:r,ingredientsToggled:o})):null,e?j("div",{className:"nutrition-information__container"},j(I,{nutrientsMetafield:a,handleToggle:r,currentTab:s}),j(y,{baseMetafields:t.filter((function(n){return n.key===i.ingredients})),handleToggle:r,ingredientsToggled:o,isViewIngredients:l})):null)):null})),M=(e("kIq+"),s.a.createElement);function w(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function N(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?w(Object(e),!0).forEach((function(t){Object(r.a)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):w(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var S=function(n){var t,e=n.productId,o=n.value,r=Object(a.useState)(!1),s=r[0],f=r[1],m=Object(a.useState)(!!o),g=m[0],b=m[1],p=Object(a.useState)(i.nutrients),_=p[0],h=p[1],v=Object(u.useSelector)((function(n){return n.shopify})).products,y=Object(u.useSelector)((function(n){return n.currentVariant})).currentVariant,O=v.find((function(n){return n.id===e})),I=Object(u.useSelector)((function(n){return Object(c.t)(n)(Object(l.useRouter)())}))||O,j=function(n,t){var e=t&&Object(c.o)(N({},{title:t.title,variantOption:c.f.format})),i="".concat(d.c.nutrition,"_").concat(e);return n.metafields&&e?Object(c.i)({metaFields:n.metafields,namespace:i.substring(0,c.e)}).map((function(n){return N({},n,{key:n.key.toLowerCase()})})):[]},w=Object(a.useMemo)((function(){return j(I,y)}),[I,y]),S=!(1!==(null===w||void 0===w?void 0:w.length)||"ingredients"!==w[0].key),T=w.filter((function(n){return n.key!==i.ingredients})),P={nutrients:1,minerals:2,vitamins:3,others:4};T.forEach((function(n){n.sortId=P[n.key]||P.others})),T.sort((function(n,t){return(n.sortId||0)>(t.sortId||0)?1:-1})),Object(a.useEffect)((function(){var n;T?h(null===(n=T[0])||void 0===n?void 0:n.key):h(i.nutrients)}),[null===(t=T[0])||void 0===t?void 0:t.key]);var V,E=Object(u.useSelector)((function(n){return n.webConfig})).isAMP,F=[];if(E&&I.variants){I.variants.forEach((function(n){var t=n?j(I,n).filter((function(n){return n.key===i.ingredients})):null;t&&t[0]&&F.push(t[0])}));var L=function(n,t){return n.map((function(n){return n[t]})).map((function(n,t,e){return e.indexOf(n)===t&&t})).filter((function(t){return n[t]})).map((function(t){return n[t]}))};F=F?L(F,"namespace"):[],V=(V=j(I,I.variants&&I.variants[0]).filter((function(n){return n.key!==i.ingredients})))?L(V,"key"):null}return M(k,{nutritionMetafields:E?F:w,nutritionsToggled:g,ingredientsToggled:s,handleToggle:function(n){switch(n){case i.ingredients:f(!s);break;case i.nutritions:b(!g),f(!1);break;default:h(n)}},filterMetaField:E?V:T,currentTab:_,isViewIngredients:S})}}}]);