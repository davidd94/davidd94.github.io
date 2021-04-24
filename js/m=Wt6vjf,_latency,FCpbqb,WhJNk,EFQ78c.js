"use strict";this.default_InstantbuyFrontendBuyflowPayframeUi=this.default_InstantbuyFrontendBuyflowPayframeUi||{};(function(_){var window=this;
try{
_.u("sy28");
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/

_.w();

_.u("Wt6vjf");
var OI=function(a){(0,_.L)(this,a,"f.bo",-1,null,null)};_.G(OI,_.B);OI.ua="f.bo";OI.prototype.qa=function(){return _.ah(this,1)};
var PI=function(){_.Th.call(this)};_.F(PI,_.Th);PI.prototype.Y=function(){this.bj=!1;QI(this);_.Th.prototype.Y.call(this)};PI.prototype.g=function(){RI(this);if(this.af)return SI(this),!1;if(!this.Ej)return TI(this),!0;_.N(this,"p");if(!this.ci)return TI(this),!0;this.gh?(_.N(this,"r"),TI(this)):SI(this);return!1};
var UI=function(a){var b=new _.Bs(a.mn);null!=a.ui&&b.g.set("authuser",a.ui);return b},SI=function(a){a.af=!0;var b=UI(a),c="rt=r&f_uid="+encodeURIComponent(String(a.ci));_.al(b,(0,_.v)(a.h,a),"POST",c)};
PI.prototype.h=function(a){a=a.target;RI(this);if(_.jl(a)){this.yg=0;if(this.gh)this.af=!1,_.N(this,"r");else if(this.Ej)_.N(this,"s");else{try{var b=_.kl(a),c=JSON.parse(b.substring(b.indexOf("\n")));var d=(new OI(c[0])).qa()}catch(e){_.Va(null,e);_.N(this,"t");VI(this);return}this.af=!1;d?_.N(this,"q"):_.N(this,"r")}TI(this)}else{if(0!=a.jc()){d="";try{d=_.kl(a)}catch(e){}a=Error("gb`"+a.jc()+"`"+UI(this).toString()+"`"+String(a.B)+"`"+d);_.Va(null,a);_.N(this,"t")}VI(this)}};
var RI=function(a){var b=_.jB.get("https:"==window.location.protocol?"SAPISID":"APISID","");a.gh=""!==a.xg&&""===b;a.Ej=a.xg!=b;a.xg=b},VI=function(a){a.gh||(a.af=!0,a.yg=Math.min(2*(a.yg||3),60),TI(a))},TI=function(a){if(a.bj||a.af)QI(a),a.Bh=window.setTimeout((0,_.v)(a.g,a),1E3*Math.max(3,a.yg))},QI=function(a){a.Bh&&(window.clearTimeout(a.Bh),a.Bh=0)};_.k=PI.prototype;_.k.V=null;_.k.yg=0;_.k.Bh=0;_.k.xg=null;_.k.gh=!1;_.k.Ej=!1;_.k.ui=null;_.k.mn="/_/idv/";_.k.ci="";_.k.bj=!1;_.k.af=!1;
_.Sa(_.wj,PI);
_.Ha().cb(function(a){var b=new PI;_.ek(a,_.wj,b);if(_.M(_.Xi,1)){a=_.M(_.Xi,1);var c=_.Ui("WZsZ1e").$(null);b.ci=a;void 0!==c&&(b.xg=c);a=_.As();0==a.lastIndexOf("/",0)||(a="/"+a);b.mn=a+"/idv/";(a=_.dh(_.Xi,3,"0"))&&_.Ui("gGcLoe").xa(!1)&&(b.ui=a);b.bj=!0;b.g()}});

_.w();

_.cs=function(a,b){var c=[],d=_.Bi(b),e=function(f){return _.xf(f)&&d(f)};a.Oa(function(f){(f=_.Af(f,e,!0))&&!_.na(c,f)&&c.push(f)});return new _.Li(c)};_.u("syp");
_.ds=1;_.es=16;_.fs=!1;

_.w();

_.u("sy1s");
_.bC=function(a,b,c,d,e,f,g){_.TB.call(this,a,_.JB,b,_.lB,c,d,e,void 0,f,g)};_.F(_.bC,_.TB);

_.w();

var W,dC,eC,qC,vC;W=function(a,b){a in cC||(cC[a]=b)};dC=function(a){return cC[a]};eC=function(){return!(!window.performance||!window.performance.now)};_.fC=function(){return eC()?window.performance.now():_.Nc()};
_.lC=function(){if(!gC){gC=!0;W("aboveFoldResourceAverageLoadTime","15768337714740149157");W("aboveFoldResourceCacheHitCount","7099598553576769501");W("aboveFoldResourceCount","9797767207516844257");W("aboveFoldResourceLoadTime","4553553160178503526");W("allResourceAverageLoadTime","15605813632677093659");W("allResourceCacheHitCount","17914751415692637656");W("allResourceCount","7094487270460551484");W("allResourceLoadTime","12563104964214410683");W("animFps","14113926844082461540");W("averageInputDelay",
"8359544496734816350");W("badStatNsfsNeg","13872498202689960064");W("badStatNtplt0Neg","354216789093826216");W("badStatPageLoadMax","3847706865871909365");W("badStatRcvNeg","16524297656573436470");W("badStatRenderDoneMax","3971493379259425170");W("badStatRqtNeg","13881028373313035890");W("badStatSrtNeg","17963189982512678884");W("badStatUnknown","13370756392768907763");W("bl","16147638372540442232");W("cls","522022639063469804");W("con","16829267986558572790");W("cssResourceAverageLoadTime","14307859671070593733");
W("cssResourceCacheHitCount","7494582641517049914");W("cssResourceCount","14906952326733574741");W("cssResourceLoadTime","4891744519482609478");W("cssSize","10652791942255425261");W("cssl","2397168675742140944");W("dataCacheHitCount","6081458428798455447");W("dataCacheMissCount","7842746373913139455");W("dns","5790177495296899286");W("fcp","16254156456118481799");W("firstInputCodeLoadingDelay","7355862829888568636");W("firstInputDelay","16057581369328409502");W("fp","12542193546769209995");W("heapSize",
"1757184925777806825");W("heapSizeLimit","4950535922500196698");W("heapUsed","3079121564595244695");W("imgResourceAverageLoadTime","13378126313938116970");W("imgResourceCacheHitCount","8519598536373642887");W("imgResourceCount","6667106912793420619");W("imgResourceLoadTime","8147743178319688099");W("jsl","14719340685975485085");W("jsreq","390095353588474974");W("lateCssSize","4132870161583308123");W("lcp","13622174389243279923");W("linkResourceAverageLoadTime","476083397694989718");W("linkResourceCacheHitCount",
"8791060314450143495");W("linkResourceCount","10118692516388306266");W("linkResourceLoadTime","408159237941253787");W("n2h","2917163396991171123");W("nativeFirstInputDelay","3328225046418674513");W("nsfs","17276521865292187132");W("ntplt0","8257051839445688306");W("ntplt1","7792735449360349632");W("ntsrt","15419336178855610526");W("ol","17077408715954654437");W("prt","3318688667027929436");W("rcv","749851692583976763");W("renderDone","2590352547652502501");W("renderReady","1329135419338222217");W("req",
"16339156775003354937");W("scriptResourceAverageLoadTime","2107494750385856652");W("scriptResourceCacheHitCount","1309831198388189068");W("scriptResourceCount","6342145065879578001");W("scriptResourceLoadTime","13596961294000664596");W("v2ff","13141743767448786909");W("v2lf","892786264899828735");var a=_.Ui("zChJod");if(null==a.g)throw Error("H`"+a.h);a=a.$();a=_.oh(a,hC);var b=void 0;_.M(a,2)?b=_.M(a,2):iC.Mp&&(b="https://www.google.com/log?format=json&hasfast=true");b=new _.bC(iC.fh,_.dh(_.Xi,3,
"0"),b,void 0,!0);a=_.ah(a,1)||!1;b.B=a;_.jC=new kC(b)}};_.oC=function(a){if(_.p.performance&&_.p.performance.memory){var b=_.p.performance.memory,c={};0==b.totalJSHeapSize||isNaN(b.totalJSHeapSize)||[["heapSizeLimit",b.jsHeapSizeLimit],["heapSize",b.totalJSHeapSize],["heapUsed",b.usedJSHeapSize]].forEach(function(d){isNaN(d[1])||(c[d[0]]=Math.round(d[1]/mC))});_.nC(a,[c])}};
_.rC=function(a){var b=document,c={};if(a.g==_.pC){var d=qC(b,"style[data-href]");c.cssSize=d}d=_.p.css_size||0;b=qC(b,"style[data-late-css]");c.lateCssSize=b-d;_.p.css_size=b;_.nC(a,[c])};qC=function(a,b){var c=0;_.r(a.querySelectorAll(b),function(d){c+=d.textContent.length});return isNaN(c)?0:c};
_.xC=function(a,b){var c={};for(d in sC)c[d]=new tC(sC[d]);_.p.performance&&_.p.performance.getEntriesByType&&_.p.performance.now&&_.p.performance.getEntriesByType("resource").forEach(function(g){var h=g.initiatorType;h&&h in sC&&"img"!=h&&(uC(c.all,g,b),uC(c[h],g,b))});vC(c);var d=[];for(var e in c){var f=wC(c[e],a,e);f&&d.push(f)}_.nC(a,d)};
vC=function(a){var b=_.jC;b=_.yC?_.p.iml_start:_.zC(b);for(var c=_.E(document.getElementsByTagName("img")),d=c.next();!d.done;d=c.next())if(d=d.value,d.hasAttribute("data-iml")){var e=Number(d.getAttribute("data-iml")),f=Math.max(e-b,0);AC(a.all,b,e,f,null);AC(a.img,b,e,f,null);"true"===d.getAttribute("data-atf")&&AC(a.aboveFold,b,e,f,null)}};_.u("sy1q");
var iC={fh:241,Mp:!1};
var cC={};
var hC=function(a){(0,_.L)(this,a,0,-1,null,null)};_.G(hC,_.B);
var CC;CC=new _.Qf(function(a){_.BC=a});
var DC=function(a){(0,_.L)(this,a,0,-1,null,null)};_.G(DC,_.B);DC.prototype.bb=function(){return _.M(this,2)};
var GC=function(a){(0,_.L)(this,a,0,-1,EC,FC)};_.G(GC,_.B);var EC=[3],FC=[[1,4]];
var IC=function(a){(0,_.L)(this,a,0,-1,HC,null)};_.G(IC,_.B);var HC=[2],JC=function(a,b){_.sb(a,2,b)};
var KC,LC;KC=function(a){this.g={};this.v=dC;this.u=a?a:new _.tB;this.o="";this.j=null;this.reset()};LC=function(a,b){b=b?b.Xa():"";_.Ud(a.g,b)||(a.g[b]={});a.h=a.g[b];a.o=b};_.NC=function(a){a.j=1+Math.round(Math.random()*(MC-1))};KC.prototype.reset=function(){this.g={};this.h={};this.g[this.o]=this.h;this.B=Date.now()};
KC.prototype.flush=function(a){_.Pd(this.g,function(b,c){b=OC(this,b);0<_.gh(b,GC,2).length&&(c&&_.C(b,5,c),c=_.nh(this.u),null!=this.j&&_.C(c,12,this.j),_.uB(c,b.Xa()),a.log(c))},this);this.reset()};
var OC=function(a,b){var c=new IC;if(_.Vd(b))return c;var d=function(f){var g=[];_.Pd(f,function(h,l){var m=new DC;l=_.C(m,1,Number(l));h=_.C(l,2,h);g.push(h)});return g},e=a.v;_.C(c,1,a.B);JC(c,function(f){var g=[];_.Pd(f,function(h,l){var m=new GC;l=e(l);m=_.mB(m,1,FC[0],l);h=d(h);h=_.sb(m,3,h);g.push(h)});return g}(b));return c},PC=function(a,b,c){var d=a.h;d=null!==d&&b in d?d[b]:void 0;d||(d={},a.h[b]=d);a=String(c);b=null!==d&&a in d?d[a]:void 0;d[a]=b?b+1:1};
var QC=function(a,b){this.h=a;this.g=new KC(b)};QC.prototype.flush=function(){this.g.flush(this.h)};var RC=function(a,b){this.h=a;this.g=b},SC=function(a,b){this.h=a;this.g=b};
_.TC=function(a){(0,_.L)(this,a,0,-1,null,null)};_.G(_.TC,_.B);
var MC,UC,$C,cD,aD,kC;MC=Math.pow(2,31)-1;UC=function(a,b){this.h=a;this.g=b};_.pC=new UC("PL",1);_.VC=new UC("MS",2);_.WC=new UC("VT",3);_.XC=function(a,b,c,d,e,f){b.forEach(function(){});this.C=!1;this.h=[];this.B=[];this.M=[];this.S=a;this.j=[b];this.u=[];this.o=!1;this.g=d;this.V=new QC(a,f);a=this.v(c);e&&_.C(a,3,e);LC(this.V.g,a)};_.XC.prototype.v=function(a){var b=new _.TC;a=_.C(b,2,a+"_"+this.g.h);return _.C(a,1,this.g.g)};_.nC=function(a,b){_.va(a.u,b)};
_.YC=function(a,b,c){var d={};d[b]=c;_.nC(a,[d])};$C=function(a){a.j.forEach(function(b){var c=b[0];c=c[Object.keys(c)[0]];for(var d=1;d<b.length;d++){var e=b[d],f;for(f in e){var g=Math.round(e[f]-c);if(_.ZC(a,f,g)){if(f in cC&&cC[f]){var h=new SC(f,a.V.g);PC(h.g,h.h,g)}}else 0>g&&(a.C=!0)}}});a.u.forEach(function(b){for(var c in b)if(c in cC&&cC[c]){var d=new RC(c,a.V.g);PC(d.g,d.h,Math.round(b[c]))}})};
_.bD=function(a){CC.then(function(){if(!a.o){$C(a);if(0<a.h.length&&(!a.C||eC())){for(var b={},c=_.E(a.h),d=c.next();!d.done;d=c.next()){var e=_.E(d.value);d=e.next().value;e.next();e=e.next().value;d="(< 0)"===e&&"ntsrt"===d?"badStatSrtNeg":"(< 0)"===e&&"req"===d?"badStatRqtNeg":"(< 0)"===e&&"rcv"===d?"badStatRcvNeg":"(< 0)"===e&&"nsfs"===d?"badStatNsfsNeg":"(< 0)"===e&&"ntplt0"===d?"badStatNtplt0Neg":"(> max)"===e&&"ol"===d?"badStatPageLoadMax":"(> max)"===e&&"renderDone"===d?"badStatRenderDoneMax":
"badStatUnknown";b[d]=d in b?b[d]+1:1}for(var f in b)c=new RC(f,a.V.g),PC(c.g,c.h,b[f]);"badStatUnknown"in b&&!("badStatPageLoadMax"in b)&&(b=aD(a),_.Va(b,Error("bb`bad_clearcut_stat")))}a.V.flush();a.S.flush(void 0,(0,_.v)(a.J,a));a.o=!0}})};_.XC.prototype.J=function(a,b){var c=["cc-failure: "+a];b&&c.push(", "+b);cD(this,c.join(""));"net-send-failed"!=a&&(a=aD(this),_.Va(a,Error("bb`bad_clearcut_submit")))};
_.ZC=function(a,b,c){return 0>c?(a.h.push([b,String(c),"(< 0)"]),!1):6E5<c?(a.h.push([b,String(c),"(> max)"]),!1):!0};cD=function(a,b){a.B.push(b)};
aD=function(a){function b(h,l){return h+"="+JSON.stringify(l)}var c="reportType="+a.g.h,d=b("invalid_metrics",a.h.map(function(h){var l=_.E(h);h=l.next().value;var m=l.next().value;l=l.next().value;return h+"="+m+" "+l})),e=b("stats",a.u),f=b("timelines",a.j),g=b("extra",a.B);a="timings=["+a.M.map(function(h){return[h.label,JSON.stringify(h.timing)].join(": ")}).join(", ")+"]";return["",c,d,e,f,g,a].join("\n")};
kC=function(a){var b=iC.Zx,c=iC.vx,d=iC.zx,e=iC.Tx,f=_.fh(a.o,_.wB,1);var g=_.fh(f,_.vB,11)||new _.vB;var h=_.Ui("cfb2h").$();g=_.C(g,7,h);_.ih(f,11,g);_.VB(a,f);this.j=a;this.v=b;this.o=c;this.g=null;this.h=d;this.u=e};_.zC=function(a){null!=a.h?(a=a.h,a=eC()?a-window.performance.timing.navigationStart:a):a=window.cc_latency_start_time;return a};_.dD=function(a,b){var c=_.jC,d=[{"":_.fC()}];return new _.XC(c.j,d,a,b,c.v,c.o)};
var gC=!1;
var mC,eD,fD,tC,uC,AC,wC,sC;mC=Math.pow(2,20);_.yC=!1;eD=function(a,b,c,d){this.g=a;this.o=b;this.h=c;this.j=d};fD=function(a,b,c,d){this.start=a;this.end=b;this.duration=c;this.g=d};tC=function(a){this.type=a;this.entries=[];this.start=Infinity;this.end=-Infinity;this.g=0};uC=function(a,b,c){b.responseEnd>c||AC(a,b.startTime,b.responseEnd,b.duration,"transferSize"in b?b.transferSize:null)};AC=function(a,b,c,d,e){b=new fD(b,c,d,e);0>=b.end||0>b.duration||a.entries.push(b)};
wC=function(a,b,c){if(0==a.entries.length){var d={};return d[a.type.g]=0,d}var e=0;a.entries.forEach(function(t){a.start=Math.min(a.start,t.start);a.end=Math.max(a.end,t.end);a.g+=t.duration;0===t.g&&(e+=1)});d=a.entries.length;for(var f=a.end-a.start,g=a.g/a.entries.length,h=!1,l=_.E([[c+"ResourceLoadTime",f],[c+"AverageResourceLoadTime",g]]),m=l.next();!m.done;m=l.next()){var n=_.E(m.value);m=n.next().value;n=n.next().value;h=!_.ZC(b,m,n)||h}if(h)return cD(b,a.entries.reduce(function(t,z){return t+
["{start: "+z.start,"end: "+z.end,"duration: "+z.duration,"transferSize: "+z.g+"},"].join(", ")},c+" entries: ")),null;b={};b[a.type.g]=d;b[a.type.o]=f;b[a.type.h]=g;b[a.type.j]=e;return b};sC={};sC.all=new eD("allResourceCount","allResourceLoadTime","allResourceAverageLoadTime","allResourceCacheHitCount");sC.aboveFold=new eD("aboveFoldResourceCount","aboveFoldResourceLoadTime","aboveFoldResourceAverageLoadTime","aboveFoldResourceCacheHitCount");
sC.css=new eD("cssResourceCount","cssResourceLoadTime","cssResourceAverageLoadTime","cssResourceCacheHitCount");sC.img=new eD("imgResourceCount","imgResourceLoadTime","imgResourceAverageLoadTime","imgResourceCacheHitCount");sC.link=new eD("linkResourceCount","linkResourceLoadTime","linkResourceAverageLoadTime","linkResourceCacheHitCount");sC.script=new eD("scriptResourceCount","scriptResourceLoadTime","scriptResourceAverageLoadTime","scriptResourceCacheHitCount");

_.w();

var SH=function(){return!(!window.performance||!window.performance.timing)},UH=function(a,b,c,d,e){0>=c||0>=d||_.ZC(a,b,d-c)&&(e||TH(a,c))(b,d)},VH=function(a){if(SH()){var b=_.jC,c=window.performance.timing;var d=null!=b.h?b.h:SH()?window.performance.timing.navigationStart:void 0;b=null!=b.u?b.u:SH()?window.performance.timing.responseStart:void 0;a.M.push({label:"addNavigationTimings",timing:c});UH(a,"dns",c.domainLookupStart,c.domainLookupEnd);UH(a,"con",c.connectStart,c.connectEnd);UH(a,"req",
c.requestStart,b);UH(a,"rcv",b,c.responseEnd);if(0<d){var e=TH(a,d);UH(a,"ntsrt",d,b,e);UH(a,"nsfs",d,c.fetchStart,e);UH(a,"ntplt0",d,c.loadEventStart,e);UH(a,"ntplt1",d,c.loadEventEnd,e)}}},WH=function(a){if(_.p.performance&&_.p.performance.getEntriesByType&&0!=_.p.performance.getEntriesByType("paint").length){a=TH(a,0);var b=_.p.performance.getEntriesByType("paint");b=_.E(b);for(var c=b.next();!c.done;c=b.next())switch(c=c.value,c.name){case "first-paint":a("fp",c.startTime+c.duration);break;case "first-contentful-paint":a("fcp",
c.startTime+c.duration)}}},XH=function(a){var b;return _.p.PerformanceObserver&&_.p.PerformanceObserver.prototype.takeRecords&&(null==(b=_.p.PerformanceObserver.supportedEntryTypes)?void 0:b.includes(a))},YH=function(a){if(!XH(a))return[];var b=new PerformanceObserver(function(){});b.observe({type:a,buffered:!0});a=b.takeRecords();b.disconnect();return a},$H=function(a){if(!ZH){var b=YH("first-input");if(0<b.length){var c={};c.nativeFirstInputDelay=b[0].processingStart-b[0].startTime;_.nC(a,[c]);
ZH=!0}}},aI=function(a){var b=YH("largest-contentful-paint");0<b.length&&(b=b[b.length-1].startTime,TH(a,0)("lcp",b));$H(a);if(XH("layout-shift")){b=YH("layout-shift").filter(function(d){return!d.hadRecentInput}).map(function(d){return d.value}).reduce(function(d,e){return d+e},0);var c={};c.cls=Math.floor(1E3*b);_.nC(a,[c])}},bI=function(){var a=_.dD("U8wled",_.VC);_.NC(a.V.g);_.oC(a);_.fs&&_.YC(a,"animFps",1E3/(_.es/_.ds));var b=[];if(!_.Ll.v&&null!=_.Ll.j){var c={};c.firstInputDelay=_.Ll.j;b.push(c);
_.Ll.v=!0}null!=_.Ll.g&&(c={},c.averageInputDelay=_.Ll.g,b.push(c));_.Ll.u||null==_.Ll.h||(c={},c.firstInputCodeLoadingDelay=_.Ll.h,b.push(c),_.Ll.u=!0);_.Ll.o=0;_.Ll.g=null;_.nC(a,b);$H(a);_.bD(a);(_.p.performance&&_.p.performance.memory||_.fs||XH("first-input"))&&setTimeout(bI,18E5)},dI=function(){var a=cI(_.jC).find(function(b){return"ol"in b});return a?a.ol:Infinity},TH=function(a,b){var c=[{"":b}];a.j.push(c);return function(d,e){var f={};f[d]=e||_.fC();c.push(f)}},eI=function(a,b){b=_.NB(new _.MB,
b);_.WB(a.j,b)},cI=function(a){return[{"":_.zC(a)}].concat(_.oc(window.cc_latency))},fI=function(){var a=_.jC;if(!a.g){var b=window.prt;if(0<b){var c={};window.cc_latency.push((c.prt=b,c))}b=cI(a);a.g=new _.XC(a.j,b,window.cc_aid,_.pC,a.v,a.o)}return a.g.o?null:a.g},ZH=!1;_.u("_latency");
_.lC();_.Ha().cb(function(){var a=_.Ui("fPDxwd");a.ac()&&eI(_.jC,a.j().map(function(b){return b.number()}));(0,_.BC)();if(a=fI())_.NC(a.V.g),_.xC(a,dI()),VH(a),WH(a),aI(a),_.oC(a),_.rC(a),_.bD(a);setTimeout(bI,3E5)});

_.w();

_.u("FCpbqb");
_.Ha().cb(function(a){_.cc(_.Bp,a)});

_.w();

_.u("WhJNk");
var MH=new Date(1262304E6),NH=new Date(12779424E5),OH=new Date(129384E7),PH=function(a,b){b?a.push(Math.round((b-MH.getTime())/6E4)):a.push(null)},QH=function(a,b,c){a.push(b.getTimezoneOffset()/15+56);a:{var d=b.getTimezoneOffset();var e=c.getTimezoneOffset();if(d!=e)for(b=b.getTime()/6E4,c=c.getTime()/6E4;b<=c;){var f=(b>>1)+(c>>1),g=6E4*f,h=(new Date(g+3E4)).getTimezoneOffset();if((new Date(g-3E4)).getTimezoneOffset()!=h){d=g;break a}if(h==d)b=f+1;else if(h==e)c=f-1;else break}d=null}PH(a,d)};
var RH=function(a){_.R.call(this,a.K);this.g=a.D.window;var b=void 0===b?!1:b;if(_.jB.isEnabled()&&(void 0===_.jB.get("OTZ")||b)){a=_.jB.set;b=[];var c=new Date;PH(b,c.getTime());b.push(c.getTimezoneOffset()/15+56);QH(b,MH,NH);QH(b,NH,OH);a.call(_.jB,"OTZ",b.join("_"),{lj:2592E3,path:"/",domain:void 0,ns:"https:"===this.g.get().location.protocol})}};_.F(RH,_.R);RH.H=_.R.H;RH.G=function(){return{D:{window:_.So}}};_.S(_.Bp,RH);

_.w();

_.gs=function(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0};_.gs.prototype.Ia=function(a){return a instanceof _.gs&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};_.gs.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};_.gs.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};_.gs.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
_.hs=function(a){if(1==a.nodeType){try{var b=a.getBoundingClientRect()}catch(c){b={left:0,top:0,right:0,bottom:0}}return new _.gs(b.left,b.top)}a=a.changedTouches?a.changedTouches[0]:a;return new _.gs(a.clientX,a.clientY)};_.is=function(a,b){a=_.hs(a);b=_.hs(b);return new _.gs(a.x-b.x,a.y-b.y)};_.u("syo");
var ks,ls,ms,ns,os,ps,qs,ss,ts,us,ys,xs;
(function(){for(var a=["ms","moz","webkit","o"],b=0;b<a.length&&!window.requestAnimationFrame;++b)window.requestAnimationFrame=window[a[b]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[a[b]+"CancelAnimationFrame"]||window[a[b]+"CancelRequestAnimationFrame"];if(!window.requestAnimationFrame){var c=0;window.requestAnimationFrame=function(d){var e=(new Date).getTime(),f=Math.max(0,16-(e-c));c=e+f;return window.setTimeout(function(){d(e+f)},f)};window.cancelAnimationFrame||(window.cancelAnimationFrame=
function(d){clearTimeout(d)})}})();_.js=function(){};ks=[[],[]];ls=0;ms=!1;ns=null;os=0;ps=0;qs=0;_.rs=0;ss=0;ts=function(a){this.g=this.h=void 0;this.j=!1;this.o=a;this.u=_.js};ts.prototype.measure=function(a){this.h=a;return this};ts.prototype.Aa=function(a){this.g=a;return this};ts.prototype.Ba=function(){this.j=!0;return this};_.vs=function(a){var b={measure:a.h,Aa:a.g,Oj:a.u,Ba:a.j};a=a.o;b.Oj||(b.Oj=_.js);return us(b,a)};_.ws=function(a){return new ts(a)};
us=function(a,b){var c=ss++,d=Math.max(a.measure?a.measure.length:0,a.Aa?a.Aa.length:0),e={id:c,fm:a.measure,hm:a.Aa,context:b,mb:[]},f=e;return function(){var g=0!==f.T;g&&(f=Object.assign({T:0},e));b||(f.context=this);f.mb=Array.prototype.slice.call(arguments);d>arguments.length&&f.mb.push(new a.Oj);g&&(g=ls,!a.Ba||0==_.rs||a.measure&&1!=_.rs||(g=(g+1)%2),ks[g].push(f));return xs()}};
ys=function(a,b){ms=!1;var c={};_.rs=1;for(var d=0;d<a.length;++d){var e=a[d];e.mb[e.mb.length-1]&&(e.mb[e.mb.length-1].now=b);if(e.fm){e.T=1;try{e.fm.apply(e.context,e.mb)}catch(f){c[d]=!0,_.da(f)}}}_.rs=2;for(d=0;d<a.length;++d)if(e=a[d],e.mb[e.mb.length-1]&&(e.mb[e.mb.length-1].now=b),!c[d]&&e.hm){e.T=2;try{e.hm.apply(e.context,e.mb)}catch(f){_.da(f)}}0<os&&1<b&&(a=b-os,500>a&&(_.es+=a,_.ds++,_.fs=!0,100<a&&ps++,qs<a&&(qs=a)));os=ms&&1<b?b:0};
xs=function(){ms||(ms=!0,ns=new Promise(function(a){window.requestAnimationFrame(function(b){var c=ks[ls];ls=(ls+1)%2;try{ys(c,b)}finally{_.rs=0,c.length=0}a()})}));return ns};

_.w();

var nI,oI,pI;nI=function(a){return _.K.ad&&!_.K.je&&!_.K.Yh&&!_.K.Xh&&mI(a)};oI=function(){return _.K.ad&&(_.K.Yh||_.K.Xh)&&mI("32")&&!mI("47")};pI=function(a){return"string"===typeof a?parseInt(a,10):a};
_.zI=function(a,b){var c=a._mxNDff;if(c&&!b)return _.nh(c);b=new qI;a._mxNDff=b;_.C(b,1,9);c=_.Ui("LVIXXb").number();_.C(b,2,c);a.devicePixelRatio?(c=a.devicePixelRatio,c="string"===typeof c?parseFloat(c):c):c=1;isNaN(c)?(rI("NaN devicePixelRatio"),c=1):0>=c&&(rI("non-positive devicePixelRatio"),c=1);_.C(b,3,c);var d=pI(a.innerWidth),e=pI(a.innerHeight);isNaN(d)?rI("NaN innerWidth"):0>d?rI("negative innerWidth"):isNaN(e)?rI("NaN innerHeight"):0>e?rI("negative innerHeight"):(d=sI(tI(new uI,d),e),_.ih(b,
5,d));a.screen&&c&&(d=pI(a.screen.width),a=pI(a.screen.height),isNaN(d)?rI("NaN screenWidth"):0>d?rI("negative screenWidth"):isNaN(a)?rI("NaN screenHeight"):0>a?rI("negative screenHeight"):(a=sI(tI(new uI,d*c),a*c),_.ih(b,4,a)));a=new vI;a=_.C(a,1,_.Lb()&&(nI("23")||_.K.ad&&_.K.je&&mI("25")||!_.K.ad&&!_.K.Th&&_.K.je&&mI("4.2")||_.K.ki&&mI("12.10")||oI()));a=_.C(a,2,_.Lb()&&(nI("17")||_.K.ad&&_.K.je&&mI("25")||!_.K.ad&&!_.K.Th&&_.K.je&&mI("4.0")||_.K.ki&&mI("11.10")||oI()));a=_.C(a,4,!!window.PushManager);
_.ih(b,6,a);a=new wI;_.xI&&(c=_.xI,d=c.vs(),_.C(a,1,d),d=c.zf(),_.C(a,2,d),c=c.Af(),_.C(a,3,c));_.ih(b,7,a);_.yI(b);return _.nh(b)};_.yI=function(a){if(_.LI){var b=_.fh(a,uI,5);if(b){if(!_.fh(_.LI,uI,5)){var c=new uI;_.ih(_.LI,5,c)}sI(tI(_.fh(_.LI,uI,5),b.Pc()),b.getHeight())}if(a=_.fh(a,wI,7))_.fh(_.LI,wI,7)||(b=new wI,_.ih(_.LI,7,b)),b=_.fh(_.LI,wI,7),c=_.ah(a,1),b=_.C(b,1,c),c=a.zf(),b=_.C(b,2,c),a=a.Af(),_.C(b,3,a)}else _.LI=_.nh(a)};_.u("sy2a");
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
_.K.vp=function(){if(_.K.jk)return _.K.Be(/Firefox\/([0-9.]+)/);if(_.K.mk||_.K.Th||_.K.ki)return _.Ue;if(_.K.ad)return _.Ge()?_.K.Be(/CriOS\/([0-9.]+)/):_.K.Be(/Chrome\/([0-9.]+)/);if(_.K.li&&!_.Ge())return _.K.Be(/Version\/([0-9.]+)/);if(_.K.Yh||_.K.Xh){var a=_.K.hl(/Version\/(\S+).*Mobile\/(\S+)/);if(a)return a[1]+"."+a[2]}else if(_.K.je)return(a=_.K.Be(/Android\s+([0-9.]+)/))?a:_.K.Be(/Version\/([0-9.]+)/);return""};_.K.Be=function(a){return(a=_.K.hl(a))?a[1]:""};_.K.hl=function(a){return a.exec(_.Ld)};
_.K.VERSION=_.K.vp();_.K.Wq=function(a){return 0<=_.Kd(_.K.VERSION,a)};
var mI=_.K.Wq;
var wI=function(a){(0,_.L)(this,a,0,-1,null,null)};_.G(wI,_.B);wI.prototype.zf=function(){return _.M(this,2)};wI.prototype.Af=function(){return _.M(this,3)};
var qI=function(a){(0,_.L)(this,a,0,-1,null,null)};_.G(qI,_.B);var uI=function(a){(0,_.L)(this,a,0,-1,null,null)};_.G(uI,_.B);var vI=function(a){(0,_.L)(this,a,0,-1,null,null)};_.G(vI,_.B);uI.prototype.getHeight=function(){return _.M(this,2)};var sI=function(a,b){return _.C(a,2,b)};uI.prototype.Pc=function(){return _.M(this,3)};var tI=function(a,b){return _.C(a,3,b)};qI.prototype.Dl=function(){return _.M(this,1)};
var MI=function(a){a=Error.call(this,a);this.message=a.message;"stack"in a&&(this.stack=a.stack)},rI;_.F(MI,Error);rI=function(a){_.da(new MI("<eye3-stackless title='"+a+"' owner='frameworks-web-alerts'/>"))};_.LI=null;_.xI=null;

_.w();

_.u("lwddkf");
_.XI=function(a){_.R.call(this,a.K);this.v=a.ba.request;this.C=WI(this);this.g=a.D.window.get();this.B=_.Sy(this.g);this.V=this.o=null;this.u=this.g!=this.g.parent;this.u||(this.j=0,this.B.listen("resize",this.h,!1,this),this.h())};_.F(_.XI,_.R);_.XI.H=_.R.H;_.XI.G=function(){return{ba:{request:_.lx},D:{window:_.So}}};_.XI.prototype.h=function(){this.u||(this.j&&clearTimeout(this.j),this.j=setTimeout(this.C,3E3))};
var WI=function(a){return _.vs(_.ws().measure(function(){var b=_.zI(a.g,!0),c=b.Xa();a.o&&b==a.o||(a.o=c,b=_.Ww(a.v,_.As()+"/browserinfo",b),_.cw(b.g,"FAIL"),b.send().then(function(){},function(d){throw d;}))}))};_.S(_.Cp,_.XI);

_.w();

_.u("EFQ78c");
var YI=function(a){(0,_.L)(this,a,"af.httprm",-1,null,null)};_.G(YI,_.B);YI.ua="af.httprm";
var ZI=function(a){_.R.call(this,a.K);this.B=a.ba.request;this.C=a.D.To;this.h=this.g=-1;this.v=this.u=this.o=null;a=this.B.g;_.Jh(a,"j",this.Gq,!1,this);_.Jh(a,"data:af.httprm",this.Mq,!1,this);_.xI=this;this.j=new _.Vh(6E4);_.Jh(this.j,"tick",this.Ss,!1,this);this.start()};_.F(ZI,_.R);ZI.H=_.R.H;ZI.G=function(){return{ba:{request:_.lx},D:{To:_.XI}}};_.k=ZI.prototype;_.k.start=function(){this.j.start()};_.k.vs=function(){var a=this.zf(),b=this.Af();return 1==a||1==b||!1};
_.k.zf=function(){return-1==this.g?0:250<this.g?1:2};_.k.Af=function(){return-1==this.h?0:5E-4>this.h?1:2};_.k.Ss=function(){var a=this.zf(),b=this.Af();if(a!=this.o||b!=this.u||0!=this.v)this.C.h(),this.o=a,this.u=b,this.v=0;if(.2>Math.random()){a=_.As()+"/gen204/?tmambps="+this.h+"&rtembps=-1&rttms="+this.g;if(b=navigator.connection||navigator.mozConnection||navigator.webkitConnection)a+="&ct="+b.type,"downlinkMax"in b&&(a+="&dm="+b.downlinkMax);_.ue(new Image,a)}};
_.k.Gq=function(a){if(a=a.g){var b=a.Zk-a.dn,c=b-a.vh.g;0<b&&0<c&&(a=a.U/1E3/c,this.h=-1==this.h?a:.3*a+.7*this.h)}};_.k.Mq=function(a){a=_.M(new YI(a.data),3)||-1;0<a&&(this.g=-1==this.g?a:.3*a+.7*this.g)};_.S(_.Dp,ZI);

_.w();

}catch(e){_._DumpException(e)}
}).call(this,this.default_InstantbuyFrontendBuyflowPayframeUi);
// Google Inc.
