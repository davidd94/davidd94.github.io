(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{gS3i:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return P}));r("KKXr"),r("Z2Ku"),r("L9s1"),r("0l/t"),r("dRSK");var n=r("q1tI"),c=r.n(n),i=r("ZqbR"),s=r("kAFW"),u=r("nOHt"),o=r("HQnQ"),d=r("bnQg"),l=r("675Y"),a=(r("bWfx"),r("JRPe")),f=r("RndJ"),p=r("FTIV"),b=r("0WZ0"),m=c.a.createElement,j=Object(a.injectIntl)((function(e){var t=e.relatedProducts,r=e.itemPerPage,n=e.itemAlign,c=e.productListRef,s=e.setInViewProducts,u=Object(i.useSelector)((function(e){return e.webConfig})).isAMP;return t.length?m("div",{className:"related-products",ref:c},m("div",{className:"related-products__content product-list"},u?m("amp-carousel",{width:"300",height:"400",layout:"responsive",type:"slides"},t.map((function(e,t){return m("div",{className:"col product-list__products",key:"listProducts".concat(e.id)},m(b.a,{key:e.id,product:e,position:t,parentName:p.b.relatedProduct,setInViewProducts:s}))}))):m(f.a,{cellAlign:"left"===n?"left":"center",slidesToShow:r,className:t.length<=r?"slider--less-items":""},t.map((function(e,t){return m("div",{className:"col product-list__products",key:"listProducts".concat(e.id)},m(b.a,{key:e.id,product:e,position:t,parentName:p.b.relatedProduct,setInViewProducts:s}))}))))):null})),O=(r("qr9J"),c.a.createElement),P=function(e){var t=e.productId,r=Object(i.useSelector)((function(e){return e.shopify})).products,c=r.find((function(e){return e.id===t})),a=Object(n.useState)([]),f=a[0],p=a[1],b=Object(i.useSelector)((function(e){return Object(d.t)(e)(Object(u.useRouter)())}))||c,m=Object(n.useMemo)((function(){return Object(o.l)(b.metafields)}),[b]),P=Object(i.useSelector)((function(e){return e.slideShowPicker})),w=P.slideIndex,v=P.slides,S=Object(i.useSelector)((function(e){return e.userData})),g=[],I=[],h=Object(n.useRef)(null),k=function(e,t){if(t)return e.filter((function(e){return t.value.split(",").includes(e.parsedId)}))};Object(n.useEffect)((function(){var e=k(r,m);e&&p(e)}),[r,m]);var N=Object(n.useState)(3),R=N[0],V=N[1],y=Object(n.useState)("left"),A=y[0],_=y[1],J=Object(s.d)(),E=J.isMobile,K=J.isTablet,L=J.isDesktop;Object(n.useEffect)((function(){E?(V(1.1),_("center")):(K||L)&&(V(3),_("left"))}),[E,K,L]);var M=Object(i.useSelector)((function(e){return e.webConfig})).isAMP,q=k(r,m);return O(j,{relatedProducts:M?q:f,itemPerPage:R,itemAlign:A,productListRef:h,setInViewProducts:function(e){var t=e.product,r=e.inView,n=e.parentName;return Object(l.a)({product:t,inView:r,parentName:n,viewedProducts:I,inViewProducts:g,userData:S,slides:v,slideIndex:w,productListRef:h})}})}}}]);