(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{"ovp+":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return m}));t("dRSK");var a=t("q1tI"),o=t.n(a),r=t("ZqbR"),s=t("HQnQ"),i=t("nOHt"),p=(t("pIFo"),t("bWfx"),t("JRPe")),u=t("RMmg"),d=t("TSYQ"),l=t.n(d),c=o.a.createElement,g=Object(p.injectIntl)((function(e){var n=e.prepMetafield,t=e.handlePreparationUseToggle,o=e.preparationUseToggled,i=e.variants,d=e.intl.formatMessage,g=Object(a.useState)(!1),f=g[0],b=g[1],m=function(e){return e?"components.sk.components.shopify.preparationAndUse.seeLess":"components.sk.components.shopify.preparationAndUse.seeAll"},_=function(e){return e?"components.sk.components.shopify.preparationAndUse.open":"components.sk.components.shopify.preparationAndUse.close"},h=Object(r.useSelector)((function(e){return e.webConfig})).isAMP;return n||h?c("div",{className:l()("preparation-and-use",{"show-more":f}),id:"preparation-and-use"},c("div",{className:"preparation-and-use__wrapper"},c("div",{className:"preparation-and-use__toggle-bar"},c("div",{className:"preparation-and-use__header"},c("h2",null,c(p.FormattedMessage,{id:"components.sk.components.shopify.preparationAndUse.header",defaultMessage:"Preparation and Use"}))),c("div",{className:"preparation-and-use__button"},h?c("span",null,c(u.Button,{type:"button",id:"preparation-and-use__toggle-button",on:"tap:preparation-and-use-container.show,preparation-and-use__toggle-button.hide,preparation-and-use__toggle-button-toggled.show",className:"preparation-and-use__toggle-button",ariaLabel:d({id:"components.sk.components.shopify.preparationAndUse.open",defaultMessage:"Open Preparation and Use"})}),c(u.Button,{type:"button",hidden:"hidden",id:"preparation-and-use__toggle-button-toggled",on:"tap:preparation-and-use-container.hide,preparation-and-use__toggle-button.show,preparation-and-use__toggle-button-toggled.hide",className:"preparation-and-use__toggle-button preparation-and-use__toggle-button--toggled",ariaLabel:d({id:"components.sk.components.shopify.preparationAndUse.close",defaultMessage:"Close Preparation and Use"})})):c(u.Button,{onClick:t,className:l()("preparation-and-use__toggle-button",{"preparation-and-use__toggle-button--toggled":o}),ariaLabel:d({id:_(o),defaultMessage:_(o)})}))),o&&n?c("div",{className:"preparation-and-use__container"},c("div",{className:"preparation-and-use__content"},c(u.DangerouslySetInnerHtml,{html:n.value})),c("div",{className:"preparation-and-use__content-more-button"},c(u.Button,{onClick:function(){return b(!f)},ariaLabel:d({id:m(f),defaultMessage:m(f)})},c(p.FormattedMessage,{id:m(f),defaultMessage:m(f)})))):null,h?c("div",{hidden:!0,className:"preparation-and-use__container",id:"preparation-and-use-container"},c("div",{className:"preparation-and-use__content"},i&&i.map((function(e,n){var t=e.metafields,a=Object(s.o)(t).find((function(e){return"prep"===e.key}));return a?c("section",null,c("div",{hidden:0!==n?"hidden":void 0,"data-amp-bind-hidden":"prepId !='".concat(n,"'"),dangerouslySetInnerHTML:{__html:a.value.replace("<strong>","")}})):null})))):null)):null})),f=(t("9zWu"),t("bnQg")),b=o.a.createElement,m=function(e){var n=e.productId,t=e.value,o=Object(i.useRouter)(),p=Object(r.useSelector)((function(e){return e.shopify})).products.find((function(e){return e.id===n})),u=Object(r.useSelector)((function(e){return Object(f.t)(e)(o)}))||p,d=Object(a.useState)(null),l=d[0],c=d[1],m=Object(a.useState)(!!t),_=m[0],h=m[1],v=Object(r.useSelector)((function(e){return e.currentVariant})).currentVariant,O=Object(a.useMemo)((function(){return Object(s.o)(null===l||void 0===l?void 0:l.metafields).find((function(e){return"prep"===e.key}))}),[l]),j=Object(a.useCallback)((function(){h((function(e){return!e}))}),[]);return Object(a.useEffect)((function(){v&&c(v)}),[v]),b(g,{prepMetafield:O,handlePreparationUseToggle:j,preparationUseToggled:_,variants:u.variants})}}}]);