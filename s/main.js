// baffle 0.3.6 - A tiny javascript library for obfuscating and revealing text in DOM elements. Copyright (c) 2016 Cam Wiegert <cam@camwiegert.com> - https://camwiegert.github.io/baffle License: MIT
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.baffle=e():t.baffle=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var i=n(2),o=r(i);t.exports=o["default"]},function(t,e){"use strict";function n(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function r(t,e){return t.split("").map(e).join("")}function i(t){return t[Math.floor(Math.random()*t.length)]}function o(t,e){for(var n=0,r=t.length;n<r;n++)e(t[n],n)}function u(t){return t.map(function(t,e){return!!t&&e}).filter(function(t){return t!==!1})}function s(t){return"string"==typeof t?[].slice.call(document.querySelectorAll(t)):[NodeList,HTMLCollection].some(function(e){return t instanceof e})?[].slice.call(t):t.nodeType?[t]:t}Object.defineProperty(e,"__esModule",{value:!0}),e.extend=n,e.mapString=r,e.sample=i,e.each=o,e.getTruthyIndices=u,e.getElements=s},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),u=n(3),s=r(u),c={characters:"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz~!@#$%^&*()-+=[]{}|;:,./<>?",exclude:[" "],speed:50},a=function(){function t(e,n){i(this,t),this.options=(0,o.extend)(Object.create(c),n),this.elements=(0,o.getElements)(e).map(s["default"]),this.running=!1}return t.prototype.once=function(){var t=this;return(0,o.each)(this.elements,function(e){return e.write(t.options.characters,t.options.exclude)}),this.running=!0,this},t.prototype.start=function(){var t=this;return clearInterval(this.interval),(0,o.each)(this.elements,function(t){return t.init()}),this.interval=setInterval(function(){return t.once()},this.options.speed),this.running=!0,this},t.prototype.stop=function(){return clearInterval(this.interval),this.running=!1,this},t.prototype.set=function(t){return(0,o.extend)(this.options,t),this.running&&this.start(),this},t.prototype.text=function(t){var e=this;return(0,o.each)(this.elements,function(n){n.text(t(n.value)),e.running||n.write()}),this},t.prototype.reveal=function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?0:arguments[0],n=arguments.length<=1||void 0===arguments[1]?0:arguments[1],r=e/this.options.speed||1,i=function(){clearInterval(t.interval),t.running=!0,t.interval=setInterval(function(){var e=t.elements.filter(function(t){return!t.bitmap.every(function(t){return!t})});(0,o.each)(e,function(e){var n=Math.ceil(e.value.length/r);e.decay(n).write(t.options.characters,t.options.exclude)}),e.length||(t.stop(),(0,o.each)(t.elements,function(t){return t.init()}))},t.options.speed)};return setTimeout(i,n),this},t}();e["default"]=function(t,e){return new a(t,e)}},function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var u=n(1),s=function(){function t(e){o(this,t),this.value=e,this.init()}return t.prototype.init=function(){return this.bitmap=this.value.split("").map(function(){return 1}),this},t.prototype.render=function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],n=arguments.length<=1||void 0===arguments[1]?[]:arguments[1];return e.length?(0,u.mapString)(this.value,function(r,i){return n.indexOf(r)>-1?r:t.bitmap[i]?(0,u.sample)(e):r}):this.value},t.prototype.decay=function(){for(var t=arguments.length<=0||void 0===arguments[0]?1:arguments[0];t--;){var e=(0,u.getTruthyIndices)(this.bitmap);this.bitmap[(0,u.sample)(e)]=0}return this},t.prototype.text=function(){var t=arguments.length<=0||void 0===arguments[0]?this.value:arguments[0];return this.value=t,this.init(),this},t}(),c=function(t){function e(n){o(this,e);var i=r(this,t.call(this,n.textContent));return i.element=n,i}return i(e,t),e.prototype.write=function(t,e){return this.element.textContent=this.render(t,e),this},e}(s);e["default"]=function(t){return new c(t)}}])});

var Froogaloop=function(){function e(a){return new e.fn.init(a)}function g(a,c,b){if(!b.contentWindow.postMessage)return!1;a=JSON.stringify({method:a,value:c});b.contentWindow.postMessage(a,h)}function l(a){var c,b;try{c=JSON.parse(a.data),b=c.event||c.method}catch(e){}"ready"!=b||k||(k=!0);if(!/^https?:\/\/player.vimeo.com/.test(a.origin))return!1;"*"===h&&(h=a.origin);a=c.value;var m=c.data,f=""===f?null:c.player_id;c=f?d[f][b]:d[b];b=[];if(!c)return!1;void 0!==a&&b.push(a);m&&b.push(m);f&&b.push(f);
return 0<b.length?c.apply(null,b):c.call()}function n(a,c,b){b?(d[b]||(d[b]={}),d[b][a]=c):d[a]=c}var d={},k=!1,h="*";e.fn=e.prototype={element:null,init:function(a){"string"===typeof a&&(a=document.getElementById(a));this.element=a;return this},api:function(a,c){if(!this.element||!a)return!1;var b=this.element,d=""!==b.id?b.id:null,e=c&&c.constructor&&c.call&&c.apply?null:c,f=c&&c.constructor&&c.call&&c.apply?c:null;f&&n(a,f,d);g(a,e,b);return this},addEvent:function(a,c){if(!this.element)return!1;
var b=this.element,d=""!==b.id?b.id:null;n(a,c,d);"ready"!=a?g("addEventListener",a,b):"ready"==a&&k&&c.call(null,d);return this},removeEvent:function(a){if(!this.element)return!1;var c=this.element,b=""!==c.id?c.id:null;a:{if(b&&d[b]){if(!d[b][a]){b=!1;break a}d[b][a]=null}else{if(!d[a]){b=!1;break a}d[a]=null}b=!0}"ready"!=a&&b&&g("removeEventListener",a,c)}};e.fn.init.prototype=e.fn;window.addEventListener?window.addEventListener("message",l,!1):window.attachEvent("onmessage",l);return window.Froogaloop=
window.$f=e}();
jQuery.extend(jQuery.easing,{ easeInOutExpo: function (x, t, b, c, d) { if (t==0) return b; if (t==d) return b+c; if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b; return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;}  });
// vivus - JavaScript library to make drawing animation on SVG @version v0.2.3 @link https://github.com/maxwellito/vivus @license MIT
"use strict";!function(t,e){function r(r){if("undefined"==typeof r)throw new Error('Pathformer [constructor]: "element" parameter is required');if(r.constructor===String&&(r=e.getElementById(r),!r))throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');if(!(r.constructor instanceof t.SVGElement||/^svg$/i.test(r.nodeName)))throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');this.el=r,this.scan(r)}function n(t,e,r){this.isReady=!1,this.setElement(t,e),this.setOptions(e),this.setCallback(r),this.isReady&&this.init()}r.prototype.TYPES=["line","ellipse","circle","polygon","polyline","rect"],r.prototype.ATTR_WATCH=["cx","cy","points","r","rx","ry","x","x1","x2","y","y1","y2"],r.prototype.scan=function(t){for(var e,r,n,i,a=t.querySelectorAll(this.TYPES.join(",")),o=0;o<a.length;o++)r=a[o],e=this[r.tagName.toLowerCase()+"ToPath"],n=e(this.parseAttr(r.attributes)),i=this.pathMaker(r,n),r.parentNode.replaceChild(i,r)},r.prototype.lineToPath=function(t){var e={};return e.d="M"+t.x1+","+t.y1+"L"+t.x2+","+t.y2,e},r.prototype.rectToPath=function(t){var e={},r=parseFloat(t.x)||0,n=parseFloat(t.y)||0,i=parseFloat(t.width)||0,a=parseFloat(t.height)||0;return e.d="M"+r+" "+n+" ",e.d+="L"+(r+i)+" "+n+" ",e.d+="L"+(r+i)+" "+(n+a)+" ",e.d+="L"+r+" "+(n+a)+" Z",e},r.prototype.polylineToPath=function(t){var e,r,n={},i=t.points.trim().split(" ");if(-1===t.points.indexOf(",")){var a=[];for(e=0;e<i.length;e+=2)a.push(i[e]+","+i[e+1]);i=a}for(r="M"+i[0],e=1;e<i.length;e++)-1!==i[e].indexOf(",")&&(r+="L"+i[e]);return n.d=r,n},r.prototype.polygonToPath=function(t){var e=r.prototype.polylineToPath(t);return e.d+="Z",e},r.prototype.ellipseToPath=function(t){var e=t.cx-t.rx,r=t.cy,n=parseFloat(t.cx)+parseFloat(t.rx),i=t.cy,a={};return a.d="M"+e+","+r+"A"+t.rx+","+t.ry+" 0,1,1 "+n+","+i+"A"+t.rx+","+t.ry+" 0,1,1 "+e+","+i,a},r.prototype.circleToPath=function(t){var e={},r=t.cx-t.r,n=t.cy,i=parseFloat(t.cx)+parseFloat(t.r),a=t.cy;return e.d="M"+r+","+n+"A"+t.r+","+t.r+" 0,1,1 "+i+","+a+"A"+t.r+","+t.r+" 0,1,1 "+r+","+a,e},r.prototype.pathMaker=function(t,r){var n,i,a=e.createElementNS("http://www.w3.org/2000/svg","path");for(n=0;n<t.attributes.length;n++)i=t.attributes[n],-1===this.ATTR_WATCH.indexOf(i.name)&&a.setAttribute(i.name,i.value);for(n in r)a.setAttribute(n,r[n]);return a},r.prototype.parseAttr=function(t){for(var e,r={},n=0;n<t.length;n++){if(e=t[n],-1!==this.ATTR_WATCH.indexOf(e.name)&&-1!==e.value.indexOf("%"))throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");r[e.name]=e.value}return r};var i,a,o;n.LINEAR=function(t){return t},n.EASE=function(t){return-Math.cos(t*Math.PI)/2+.5},n.EASE_OUT=function(t){return 1-Math.pow(1-t,3)},n.EASE_IN=function(t){return Math.pow(t,3)},n.EASE_OUT_BOUNCE=function(t){var e=-Math.cos(.5*t*Math.PI)+1,r=Math.pow(e,1.5),n=Math.pow(1-t,2),i=-Math.abs(Math.cos(2.5*r*Math.PI))+1;return 1-n+i*n},n.prototype.setElement=function(r,n){if("undefined"==typeof r)throw new Error('Vivus [constructor]: "element" parameter is required');if(r.constructor===String&&(r=e.getElementById(r),!r))throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');if(this.parentEl=r,n&&n.file){var i=e.createElement("object");i.setAttribute("type","image/svg+xml"),i.setAttribute("data",n.file),i.setAttribute("width","100%"),i.setAttribute("height","100%"),r.appendChild(i),r=i}switch(r.constructor){case t.SVGSVGElement:case t.SVGElement:this.el=r,this.isReady=!0;break;case t.HTMLObjectElement:if(this.el=r.contentDocument&&r.contentDocument.querySelector("svg"),this.el)return this.isReady=!0,void 0;var a=this;r.addEventListener("load",function(){if(a.el=r.contentDocument&&r.contentDocument.querySelector("svg"),!a.el)throw new Error("Vivus [constructor]: object loaded does not contain any SVG");a.isReady=!0,a.init()});break;default:throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)')}},n.prototype.setOptions=function(e){var r=["delayed","async","oneByOne","scenario","scenario-sync"],i=["inViewport","manual","autostart"];if(void 0!==e&&e.constructor!==Object)throw new Error('Vivus [constructor]: "options" parameter must be an object');if(e=e||{},e.type&&-1===r.indexOf(e.type))throw new Error("Vivus [constructor]: "+e.type+" is not an existing animation `type`");if(this.type=e.type||r[0],e.start&&-1===i.indexOf(e.start))throw new Error("Vivus [constructor]: "+e.start+" is not an existing `start` option");if(this.start=e.start||i[0],this.isIE=-1!==t.navigator.userAgent.indexOf("MSIE")||-1!==t.navigator.userAgent.indexOf("Trident/")||-1!==t.navigator.userAgent.indexOf("Edge/"),this.duration=o(e.duration,120),this.delay=o(e.delay,null),this.dashGap=o(e.dashGap,2),this.forceRender=e.hasOwnProperty("forceRender")?!!e.forceRender:this.isIE,this.selfDestroy=!!e.selfDestroy,this.onReady=e.onReady,this.ignoreInvisible=e.hasOwnProperty("ignoreInvisible")?!!e.ignoreInvisible:!1,this.animTimingFunction=e.animTimingFunction||n.LINEAR,this.pathTimingFunction=e.pathTimingFunction||n.LINEAR,this.delay>=this.duration)throw new Error("Vivus [constructor]: delay must be shorter than duration")},n.prototype.setCallback=function(t){if(t&&t.constructor!==Function)throw new Error('Vivus [constructor]: "callback" parameter must be a function');this.callback=t||function(){}},n.prototype.mapping=function(){var e,r,n,i,a,s,h,u;for(u=s=h=0,r=this.el.querySelectorAll("path"),e=0;e<r.length;e++)n=r[e],this.isInvisible(n)||(a={el:n,length:Math.ceil(n.getTotalLength())},isNaN(a.length)?t.console&&console.warn&&console.warn("Vivus [mapping]: cannot retrieve a path element length",n):(s+=a.length,this.map.push(a),n.style.strokeDasharray=a.length+" "+(a.length+this.dashGap),n.style.strokeDashoffset=a.length,this.isIE&&(a.length+=this.dashGap),this.renderPath(e)));for(s=0===s?1:s,this.delay=null===this.delay?this.duration/3:this.delay,this.delayUnit=this.delay/(r.length>1?r.length-1:1),e=0;e<this.map.length;e++){switch(a=this.map[e],this.type){case"delayed":a.startAt=this.delayUnit*e,a.duration=this.duration-this.delay;break;case"oneByOne":a.startAt=h/s*this.duration,a.duration=a.length/s*this.duration;break;case"async":a.startAt=0,a.duration=this.duration;break;case"scenario-sync":n=r[e],i=this.parseAttr(n),a.startAt=u+(o(i["data-delay"],this.delayUnit)||0),a.duration=o(i["data-duration"],this.duration),u=void 0!==i["data-async"]?a.startAt:a.startAt+a.duration,this.frameLength=Math.max(this.frameLength,a.startAt+a.duration);break;case"scenario":n=r[e],i=this.parseAttr(n),a.startAt=o(i["data-start"],this.delayUnit)||0,a.duration=o(i["data-duration"],this.duration),this.frameLength=Math.max(this.frameLength,a.startAt+a.duration)}h+=a.length,this.frameLength=this.frameLength||this.duration}},n.prototype.drawer=function(){var t=this;this.currentFrame+=this.speed,this.currentFrame<=0?(this.stop(),this.reset(),this.callback(this)):this.currentFrame>=this.frameLength?(this.stop(),this.currentFrame=this.frameLength,this.trace(),this.selfDestroy&&this.destroy(),this.callback(this)):(this.trace(),this.handle=i(function(){t.drawer()}))},n.prototype.trace=function(){var t,e,r,n;for(n=this.animTimingFunction(this.currentFrame/this.frameLength)*this.frameLength,t=0;t<this.map.length;t++)r=this.map[t],e=(n-r.startAt)/r.duration,e=this.pathTimingFunction(Math.max(0,Math.min(1,e))),r.progress!==e&&(r.progress=e,r.el.style.strokeDashoffset=Math.floor(r.length*(1-e)),this.renderPath(t))},n.prototype.renderPath=function(t){if(this.forceRender&&this.map&&this.map[t]){var e=this.map[t],r=e.el.cloneNode(!0);e.el.parentNode.replaceChild(r,e.el),e.el=r}},n.prototype.init=function(){this.frameLength=0,this.currentFrame=0,this.map=[],new r(this.el),this.mapping(),this.starter(),this.onReady&&this.onReady(this)},n.prototype.starter=function(){switch(this.start){case"manual":return;case"autostart":this.play();break;case"inViewport":var e=this,r=function(){e.isInViewport(e.parentEl,1)&&(e.play(),t.removeEventListener("scroll",r))};t.addEventListener("scroll",r),r()}},n.prototype.getStatus=function(){return 0===this.currentFrame?"start":this.currentFrame===this.frameLength?"end":"progress"},n.prototype.reset=function(){return this.setFrameProgress(0)},n.prototype.finish=function(){return this.setFrameProgress(1)},n.prototype.setFrameProgress=function(t){return t=Math.min(1,Math.max(0,t)),this.currentFrame=Math.round(this.frameLength*t),this.trace(),this},n.prototype.play=function(t){if(t&&"number"!=typeof t)throw new Error("Vivus [play]: invalid speed");return this.speed=t||1,this.handle||this.drawer(),this},n.prototype.stop=function(){return this.handle&&(a(this.handle),delete this.handle),this},n.prototype.destroy=function(){var t,e;for(t=0;t<this.map.length;t++)e=this.map[t],e.el.style.strokeDashoffset=null,e.el.style.strokeDasharray=null,this.renderPath(t)},n.prototype.isInvisible=function(t){var e,r=t.getAttribute("data-ignore");return null!==r?"false"!==r:this.ignoreInvisible?(e=t.getBoundingClientRect(),!e.width&&!e.height):!1},n.prototype.parseAttr=function(t){var e,r={};if(t&&t.attributes)for(var n=0;n<t.attributes.length;n++)e=t.attributes[n],r[e.name]=e.value;return r},n.prototype.isInViewport=function(t,e){var r=this.scrollY(),n=r+this.getViewportH(),i=t.getBoundingClientRect(),a=i.height,o=r+i.top,s=o+a;return e=e||0,n>=o+a*e&&s>=r},n.prototype.docElem=t.document.documentElement,n.prototype.getViewportH=function(){var e=this.docElem.clientHeight,r=t.innerHeight;return r>e?r:e},n.prototype.scrollY=function(){return t.pageYOffset||this.docElem.scrollTop},i=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),a=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||t.msCancelAnimationFrame||function(e){return t.clearTimeout(e)}}(),o=function(t,e){var r=parseInt(t,10);return r>=0?r:e},"function"==typeof define&&define.amd?define([],function(){return n}):"object"==typeof exports?module.exports=n:t.Vivus=n}(window,document);
if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; };

var pryct={ 
        forthwear: {
            client:'forthwear',
            titulo:'smart textile indumentary'},
        maxion: {
            client:'maxion',
            titulo:'steel processing'},
        endur:{
            client:'endur',
            titulo:'high quality clothing and textile'},
        therapedic: {
            client:'therapedic',
            titulo:'descanso, salud y bienestar'},
        colagenato: {
            client:'colagenato',
            titulo:'cuidado del cabello'},
        garantiplus: {
            client:'garantiplus',
            titulo:'garantía mecánica comercial'},
        avalinguo: {
            client:'avalinguo',
            titulo:'language learning'},
        puntoderma: {
            client:'puntoderma',
            titulo:'farmacias y consultoría'},
        skingroup_camp: {
            client:'skingroup',
            titulo:'campaña de posicionamiento'},
        hotelcentral: {
            client:'Hotel Central',
            titulo:'a mix of Mexico & Barcelona'},
        cruzazul_dc: {
            client:'cemento cruz azul',
            titulo:'historia de una marca'},
        skingroup: {
            client:'skingroup',
            titulo:'la nueva versión de ti'},
        shefitness: {
            client:'shefitness',
            titulo:'clothing & lifestyle co.'},
        saneugenio: {
            client:'saneugenio',
            titulo:'residencial campestre'},
        visualix: {
            client:'visualix',
            titulo:'big data platform'},
        hliving: {
            client:'huasteca living',
            titulo:'interiorismo'},
        haciendaelangel: {
            client:'hacienda el angel',
            titulo:'everlasting moments'},
        vidusa: {
            client:'vidusa',
            titulo:'desarrolladora inmobiliaria'},
        conglomerado: {
            client:'conglomerado',
            titulo:'oficinas conglomerado'},
        mezcal: {
            client:'mezcal',
            titulo:'gastropub montreal'},
        cambridge: {
            client:'colegio cambridge',
            titulo:'COLEGIO CAMBRIDGE DE MONTERREY'},
        duramax: {
            client:'duramax',
            titulo:'calzado industrial'},
        puerta: {
            client:'la puerta de las letras',
            titulo:'aprendizaje especializado'},
        mstrwrks: {
            client:'mstrwrks',
            titulo:'manufactura especializada'},
        performatica: {
            client:'performatica',
            titulo:'loyalty innovations'},
        cruzazul_ar: {
            client:'cemento cruz azul',
            titulo:'todos construimos méxico'},
        elorigen: {
            client:'El origen',
            titulo:'Artisan clothing'},
        vitela: {
            client:'vitela',
            titulo:'cafe de exportación'}
        },
    vis = (function(){ 
    var stateKey, eventKey, keys = {hidden: "visibilitychange",webkitHidden: "webkitvisibilitychange",mozHidden: "mozvisibilitychange",msHidden: "msvisibilitychange"};
    for (stateKey in keys) {if (stateKey in document){ eventKey = keys[stateKey]; break;}}
    return function(c) {if (c) document.addEventListener(eventKey, c); return !document[stateKey];} })();

vis(function(){
    document.title=vis() ? 'la\u205fDelegación.\u205f–\u205f' : 'Vuelve!\u205f(っ˘̩╭╮˘̩)っ\u205f\u205f';
    setInterval(function (){if (!vis()) document.title = document.title.substring(1) + document.title[0];}, 300);});

$(function() {
	var animando = false,
        firstLoad = false,
        pst=0,
        mnu='<div id="m"><div class="center"><div class="p1 g2 logo"/><div class="logocliente g2"/></div><div class="mbtn"><div class="nicn"/></div></div>',
        nav='<aside id="cap"/><aside id="nav"/>',
        mpa='<div id="smap"><div class="mbtn x"/><div class="center"><div class="g3"><h4><a href="/" class=dmd>inicio</a></h4><p>proyectos</p><p>perfil</p><p>contacto</p></div><div class="g3"><h4><a href="/#ps" class=dmd data-l="#ps">proyectos</a></h4><p>portafolio selecto</p><p>proyectos internos</p><p>paramétrica</p></div><div class="g3"><h4><a href="/perfil/" class=dmd>perfil</a></h4><p>estudio</p><p>proceso</p><p>div. gráfica</p><p>div. digital</p><p>div. industrial</p><p>clientes</p><p>premios</p></div><div class="g3"><h4><a href="/contacto/" class=dmd>contacto</a></h4><p>redes / teléfonos</p><p>prensa / servicio</p><p>talento</p><p>locación</p></div></div><div class=capa/></div>',
        ldr='<div id=loader><h1 class=noletra/><div/><div/><div/><div/><div/><div/></div>',
        footer='<footer class="bt pad5"><div class=center><div class=g3><a href="tel:8116368533" class=noitem target="_blank"><p><span class=d>+52 1</span> 811 636 8533</p></a><h5><br>La Delegación <br>mexicana de diseño <br>© 2016</h5></div><div class=g3><a href="contacto/"><p>Bosques de Álamos 548</p><br><p>Santa Catarina, N.L.</p><br><p class=d>México</p></a></div><div class=g3 id=redes1><a href="mailto:asesoria@ladelegacion.mx?Subject=Hola" class=noitem target="_blank"><p>mail</p></a><br><a href="https://www.behance.net/ladelegacion" id=be class=noitem target="_blank"><p>behance</p></a><br><a href="https://www.facebook.com/ladelegacion" id=fb class=noitem target="_blank"><p>facebook</p></a><br><a href="https://twitter.com/ladelegacion" id=tt class=noitem target="_blank"><p>twitter</p></a><br> <a href="https://plus.google.com/+ladelegacion" id=gp class=noitem target="_blank"><p>g+</p></a></div><div class=g3 id=redes2><a href="http://instagram.com/ladelegacion" id=ig class=noitem target="_blank"><p>instagram</p></a><br><a href="http://www.youtube.com/user/ladelegacion" id=yt class=noitem target="_blank"><p>youtube</p></a><br><a href="https://vimeo.com/ladelegacion" id=vi class=noitem target="_blank"><p>vimeo</p></a><br><a href="http://www.pinterest.com/ladelegacion" id=pi class=noitem target="_blank"><p>pinterest</p></a></div></div></footer>',
        mas='<div class="g6 pad5" id=maspro><a class="dmd" href="/#ps"><h2>más </h2><br><h2>proyectos</h2></a></div><div class="g6 pad5" id=masper><a class="dmd" href="/perfil/"><h2>perfil y </h2><br><h2>estrategia</h2></a></div><div class="g6 pad5" id=mascon><a class="dmd" href="/contacto/"><h2>formas de </h2><br><h2>contacto</h2></a></div>',
        mas='<section id=mas class=bt><div class="center np">'+mas+'</div></section>',
        supra='<div id=supra>'+ldr+mnu+mpa+nav+'</div>';
	$('body').prepend(supra).append(mas,footer);
    setTimeout(function(){ if($(window).scrollTop() == 0) $('body').addClass('full'); }, 1000);
    $().redes();
    todo();

    function cambioPag(url, bool){  
        animando = true;
        $('body').addClass('cambio');
        baffle('#loader h1 *:not(h3)',{characters:'|/X'}).start().reveal(600,800);
        setTimeout(function(){ cargaNueva(url, bool); },1100) }

    function cargaNueva(url, bool){ 
        url = ('' == url) ? 'index.html' : url;
        var newSection = url.replace('index.html','').replace('/','').replace('pro','').replace(/^\//g,''), 
            section = $('<div class="'+newSection+'"></div>');
        section.load(url+' main>*', function(event){
            $('main').html(section).find('header').unwrap();
            setTimeout(function(){ todo(); animando = false;
                $('#loader').addClass('out');
                setTimeout(function(){  
                    if (location.hash) $('html, body').animate({scrollTop: $(location.hash).offset().top},350); 
                    else $('html, body').animate({scrollTop: $('body').offset().top},350);
                    if ($('body.menu').length) $('.x.mbtn')[0].click();
                    $('body').removeClass('cambio');
                    $('#loader').removeClass('out'); }, 1100);
                if( !soporta() ) animando = false; }, 600);
            if(url!=window.location && bool){ window.history.pushState({path:url},'',url); }; });}

    function soporta(){ return $('html').hasClass('csstransitions'); }

        $('input[type=text]').each(function(){
         var text_value=$(this).val();
         if(text_value!=''){console.log('Value exist');} });

    $(window).on('keydown', function(e) { if(e.which === 27) $('.mbtn')[0].click(); })
                .on('scroll', function(){ var st = $(this).scrollTop();
                                            $('body').toggleClass('full', st == 0);
                                            $('body').toggleClass('hid', st > pst);
                                            pst = st; })
                .on('popstate',function(){ 
                    if(firstLoad){ var nuevaArray = location.pathname.split('/'), 
                            nueva = nuevaArray[nuevaArray.length - 1];
                        if(!animando){cambioPag(nueva, false);
                                      $('body,#loader div,.capa').css('background-color','#333');
                                      baffle('#loader h1',{characters:'|/X'}).start().text(text=>'la delegación –').reveal(600,900); } } firstLoad = true; });
    $('form').on('submit',function(e){ e.preventDefault();
                var cmp=$(this).serializeArray();
                var brf=$.map(cmp,function(i,f){ return '\n- '+i.name+'\n'+i.value; }).join(); 
                  console.log(brf);
                brief(brf);                   });
    $(document).on('click','.mbtn',function(){ $('body').toggleClass('menu').toggleClass('hid'); })
                .on('click','.btnrep',function(){ 
                    var b=$(this),
                        ii=b.prev().attr('name'),
                        i=b.prev().clone().val('').attr('name',ii+'i').removeAttr('id').addClass('safo'),
                        l=b.prev().prev().clone().removeAttr('for');
                    b.before(l,i).prev().focus(); })
                .on('input','textarea',function(){ $(this).outerHeight('4vw').outerHeight(this.scrollHeight); })
                .on('change','#brief textarea,#brief input:not(.safo)',function(){
                        var f=0,p=$('progress'),
                            e=$('#brief textarea,#brief input:not(.safo):not([type=checkbox])');
                        $('input:checked').length ? f+=1:'';
                        e.each(function(){ if (!$(this).val()=='') f+=1; });
                        p.attr('value',f*4); })
                .on('mouseleave','.act',function(){ $('.act').removeClass('act'); })
                .on('click','a[href]:not(.noitem):not([href*="maps"])',function(event){ 
                        event.preventDefault();
                        var p=$(this),
                            nueva=p.attr('href'),
                            item=p.text(),
                            t=this.getAttribute('data-l'),
                            l=$(t),
                            elm=$('body,#loader div,.capa'),
                            ldrh1=$('#loader h1'),
                            tit='<span>'+item.split('/')[0]+'</span><h3>'+item.split('/')[1]+'</h3>';
                        if (this.hasAttribute('data-l') && l.length){
                            $('html, body').animate({scrollTop: $(t).offset().top},350); }
                        else {
                            if (p.find('.clr').length) { 
                                var color=p.find('.clr').css('background-color');
                                ldrh1.html(tit);
                                elm.css('background-color',color); 
                                p.addClass('shot'); }
                            else if (p.hasClass('dmd')) {
                                ldrh1.html('<span>'+item+'</span>');
                                elm.css('background-color','#333'); }
                            if( !animando ) cambioPag(nueva, true);
                            firstLoad = true; console.log('⟹ '+item); 
                                            } });

});

function elmsig(x){ return $(x).next(); };

function initMap(){ console.log('mapa');
    var lalo={lat:25.677,lng:-100.455},
        mo={scrollwheel:false,zoom:15,center:lalo,disableDefaultUI:true,
            styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#b0a371"},{"visibility":"on"},{"saturation":"0"},{"lightness":"50"}]}]},
        map=new google.maps.Map($('#mapa')[0],mo),
        marker=new google.maps.Marker({position: lalo,map: map,icon:'/i/dmd.escudo.16b.png'}); }

function brief(brf){
    var doc = new jsPDF()
    doc.text(brf, 10, 10)
    doc.save('a4.pdf')
}

function todo(){ 
        var nav='<a class="dmd" href="/#ps" data-l="#ps"><h4>proyectos</h4></a><a class="dmd" href="/perfil/"><h4>perfil</h4></a><a class="dmd" href="/contacto/"><h4>contacto</h4></a>',
            capini="<div class=escudo /><h4>v.11 &#8212; est.'11</h4>",
            brief='<progress value=0 max=100></progress>',
            movil=window.matchMedia("only screen and (max-width: 480px)"),
            cip=0,
            n0=Object.keys(pryct);
    
    $('body').attr('data-m','con');
    if ($('#pryct').length){ 
        var fldr=location.pathname.split('/')[2],
            bdg=$('#pryct').attr('class'),
            bdg=({'grf':'<div class="bdgg"><div/><div/></div>',
                 'dgt':'<div class="bdgd"><div/><div/></div>',
                 'ind':'<div class="bdgi"><div/><div/></div>'})[bdg],
            clntlgo='url(/pro/'+fldr+'/logo.png)',
            clnt=(pryct)[fldr].client,
            ttl=(pryct)[fldr].titulo,
            sigpro='<a><div class="clr sig"><div/></div></a>',
            navpro=nav+sigpro,
            cappro=bdg+'<h4>'+clnt+'</h4>',
            n1 = n0.indexOf(fldr),
            n1 = (n1+2>n0.length) ? n1=0 : n1=n1+1,
            car = '/pro/'+n0[n1]+'/',
            n = car+'cover.jpg',
            t = '<h4>'+(pryct)[n0[n1]].client+' / '+(pryct)[n0[n1]].titulo+'</h4>',
            header='<div class=center><div class=g6><h1>'+ttl+'</h1><h3 id=cliente class="p2 np">'+clnt+'</h3></div><img class="g6" src="/pro/'+fldr+'/cover.jpg"></div>';

        $('.logocliente').addClass('act').css('background-image',clntlgo); 
        $('#pryct').html(header);
        $('#cap').html(cappro);
        $('#nav').html(navpro);
        if ($('svg').length) {
            $('svg').each(function(){ 
                var svgx = $(this).attr('id'), 
                    myVivus = new Vivus(svgx,{start:'autostart',pathTimingFunction:Vivus.EASE_OUT,animTimingFunction:Vivus.EASE_IN}, function (myVivus){ 
                        if (myVivus.getStatus() === 'end') 
                            setTimeout(function(){ 
                                myVivus.play(-1); 
                                setTimeout(function(){ myVivus.stop().reset().play(); },1600); },3000); });
                    myVivus.stop().reset().play(); }); };
        
        //mierda de proyecto sig
        $('#nav .sig div').css('background-image','url('+n+')')
            .append(t).parents('a').attr('href',car);
        var m = new Image();
        m.addEventListener("load", function(){ 
            var ct = new ColorThief(), c = ct.getColor(m,8);
            $('#nav .sig').css('background-color','rgb('+c+')'); },false);
        m.src = n; 
        //acaba mierda de proyecto sig
    
        $('iframe').each(function(){var p = $f( $(this)[0] ),
                                        s = $(this).parent('.iframe'),
                                        v = $(this).attr('src'),
                                        c = 0,
                                        u = uid();
            function uid(){ var id='video' + c++; if($("#"+id).length == 0) return id; else return uid(); };
            $(this).attr({id:u,src:v+'&player_id='+u}).load(function(){
                p.addEvent('ready',function() {
                            p.addEvent('pause',function () { s.removeClass('play'); });
                            p.addEvent('finish',function () { s.removeClass('play'); });
                            p.addEvent('playProgress',function () { s.addClass('play'); }); }); }); });
    }
    else{ $('#nav').html(nav); 
          $('#cap').html(capini);
        if ($('.logocliente.act').length) $('.logocliente.act').removeClass('act');
        if ($('#perfil').length){ $('body').attr('data-m','per'); }
        else if ($('#brief').length){ $('#cap').append(brief); }
        else if ($('#mapa').length){ 
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.src = "https://maps.googleapis.com/maps/api/js?callback=initMap";
            $("head").append(s); }
        else if ($('#ps').length){ 
            $('body').attr('data-m','pro');
             if (!movil.matches) $('#ps a:not([href])').addClass('act');
             if (typeof $itemsPaletas=='undefined'){
                 
                 Object.keys(pryct).forEach(function(i){
                     $('#ps .center').append('<a href="/pro/'+i+'/"><figure id='+i+' class="g3 np inact" style="background-image:url(/pro/'+i+'/cover.jpg);"><div class="clr"><i/><i/></div><div class="lgo" style="background-image:url(/pro/'+i+'/logo.png);"/><h4>'+pryct[i].client+' / '+pryct[i].titulo+'</h4></figure></a>');
                     $('<img u='+i+' src="/pro/'+i+'/cover.jpg">').load(function(){ 
                         $(this).remove();
                         
                         var ct = new ColorThief(), 
                             clr = ct.getPalette(this,2);
                         $('#'+this.getAttribute('u'))
                             .find('.clr').css('background','rgb('+clr[0]+')')
                             .find('i:first-child').css('background','rgb('+clr[1]+')')
                             .next('i').css('background','rgb('+clr[2]+')')
                             .closest('figure').removeClass('inact');
                         
                         cip++; console.log(cip);
                         $itemsPaletas=$('#ps').html(); }); }); }
             else{  $('#ps').html($itemsPaletas);
                     console.log('paleton'); }; }; };
    
    (function letra(){
        $('h1,h2,h3').not('.noletra').each(function(){ var arr=$(this);
            baffle(this,{characters:'|/X'}).start().reveal(1200);
            setTimeout(function(){
                var ltr = Math.floor(Math.random()*arr.text().length+1), 
                    nvo = arr.text().replace(/([A-Za-z0-9])/g, function (match, p1, offset){
                        if (offset == ltr){ return "<span class=d>"+match+"</span>"; } return match; });
                arr.html(nvo);
            },2000); }); })();

	console.log('╭( ･ㅂ･)و');
};

(function($) {
  $.fn.redes = function() {
    var s={ fb: 'ladelegacion',
            ig: 'ladelegacion',
            gp: '+ladelegacion',
            yt: 'ladelegacion',
            pi: 'ladelegacion',
            vi: 'ladelegacion',
            tt: 'la_delegacion',
            be: 'ladelegacion',
           
            instagram_token:'1037757709.ce84057.48171702ae664fae826ff580e38cc516',
            facebook_token:'518495178306991%7Ce8ee525567b1c1f6db017a450d3b5b64',
           
            google_plus_key:'AIzaSyCynnN3KZ8okgIrsYREvxkQ8My_3UWp8kw',
            youtube_key:'AIzaSyDXpwzqSs41Kp9IZj49efV3CSrVxUDAwS0',
            vimeo_token:'961a0b29198b9ed293a6a70d2c160b0f',
            behance_client_id:'mpX9kGiySp7YxrTCCw6FwNmKvDLNAt49'},
            e=' <span class=d>',
            g='</span>';

    function fb(){
      $.ajax({ url: 'https://graph.facebook.com/v2.8/'+s.fb,
        dataType: 'json',
        type: 'GET',
        data: {
          access_token:s.facebook_token,
          fields:'fan_count'},
        success: function(data) {   
          var followers = parseInt(data.fan_count);
          var k = kFormatter(followers);
          $('#fb p').append(e+k+g);
          getTotal(followers); 
        } 
      }); 
    }
    function gp(){
      $.ajax({ url: 'https://www.googleapis.com/plus/v1/people/' + s.gp,
        type: "GET",
        dataType: "json",
        data:{ key:s.google_plus_key },
        success: function (data) {
          var followers = parseInt(data.circledByCount);
          var k = kFormatter(followers);
          $('#gp p').append(e+k+g);
          getTotal(followers); 
        }
      });
    }
    /*function tt(){
      //Twitter API - Requires PHP.
      //References
      //http://stackoverflow.com/questions/17409227/follower-count-number-in-twitter
      //https://github.com/J7mbo/twitter-api-php
      $.ajax({ url: '../SocialCounters/twitter/index.php',
        dataType: 'json',
        type: 'GET',
        data:{ user:s.twitter_user },
        success: function(data) {   
          var followers = parseInt(data.followers),
              k = kFormatter(followers);
          $('#tt p').append(e+k+g);
          getTotal(followers); 
        } 
      }); 
    }*/
    function be(){
      $.ajax({ url: 'https://api.behance.net/v2/users/'+s.be,
        dataType: 'jsonp',
        type: 'GET',
        data:{ client_id: s.behance_client_id },
        success: function(data) {   
          var followers = parseInt(data.user.stats.followers),
              k = kFormatter(followers);
          $('#be p').append(e+k+g);
          getTotal(followers); 
        } 
      }); 
    }
    function pi(){
      $.ajax({ url: 'https://api.pinterest.com/v3/pidgets/users/'+s.pi+'/pins',
        dataType: 'jsonp',
        type: 'GET',
        success: function(data) {   
          var followers = parseInt(data.data.user.follower_count),
              k = kFormatter(followers);
          $('#pi p').append(e+k+g); 
          getTotal(followers); 
        } 
      }); 
    }
    function ig(){
      //https://www.youtube.com/watch?v=LkuJtIcXR68
      //http://instagram.pixelunion.net
      //http://dmolsen.com/2013/04/05/generating-access-tokens-for-instagram
      //http://ka.lpe.sh/2015/12/24/this-request-requires-scope-public_content-but-this-access-token-is-not-authorized-with-this-scope/
      $.ajax({ url: 'https://api.instagram.com/v1/users/self/',
        dataType: 'jsonp',
        type: 'GET',
        data: { access_token: s.instagram_token },
        success: function(data) {
          var followers = parseInt(data.data.counts.followed_by),
              k = kFormatter(followers);
          $('#ig p').append(e+k+g);
          getTotal(followers); 
        }
      });
    }
    function yt(){
      $.ajax({ url: 'https://www.googleapis.com/youtube/v3/channels',
        dataType: 'jsonp',
        type: 'GET',
        data:{
          part:'statistics',
          forUsername:s.yt,
          key: s.youtube_key},
        success: function(data) {   
          var subscribers = parseInt(data.items[0].statistics.subscriberCount),
              k = kFormatter(subscribers);
          $('#yt p').append(e+k+g);
          getTotal(subscribers); 
        } 
      }); 
    }
    function vi(){
      $.ajax({
        url: 'https://api.vimeo.com/users/'+s.vi+'/followers',
        dataType: 'json',
        type: 'GET',
        data:{ access_token: s.vimeo_token },
        success: function(data) {   
          var followers = parseInt(data.total),
              k = kFormatter(followers);
          $('#vi p').append(e+k+g);
          getTotal(followers); 
        } 
      }); 
    }
    //Function to add commas to the thousandths
    $.fn.digits = function(){ 
      return this.each(function(){ 
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
      }) }
    //Function to add K to thousands
    function kFormatter(num) { return num>999 ? (num/1000).toFixed(1)+' k' : num; }
    //Get an integer paramenter from each ajax call
    //Total Counter
    var total = 0;
    function getTotal(data) {
      total = total + data;
      $("#total").html(total).digits();
      $("#total_k").html(kFormatter(total));}

    //Call Functions
      /*if(s.tt!=''){ tt(); }*/
      if(s.pi!=''){ pi(); }
      if(s.fb!='' && s.facebook_token!=''){ fb(); }
      if(s.ig!='' && s.instagram_token!=''){ ig();}
      if(s.gp!='' && s.google_plus_key!=''){ gp();}
      if(s.yt!='' && s.youtube_key!=''){ yt(); }
      if(s.vi!='' && s.vimeo_token!=''){ vi();}
      if(s.be!='' && s.behance_client_id!=''){ be(); }
  };
}(jQuery));