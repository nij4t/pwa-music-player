(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{35:function(e,t,r){"use strict";var a=r(1),n=r(2),o=r(4),i=r(3),c=r(5),s=r(0),l=r.n(s),u=(r(36),function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"shouldComponentUpdate",value:function(e){return e.percent!==this.props.percent}},{key:"render",value:function(){return l.a.createElement("div",{className:"progress-bar"},l.a.createElement("div",{className:"progress-bar__mask",style:{transform:"scale(".concat(this.props.percent,", 1)")}},l.a.createElement("div",{className:"progress-bar__progress"})),l.a.createElement("div",{className:"progress-bar__bg"}))}}]),t}(s.Component));t.a=u},36:function(e,t,r){},41:function(e,t,r){e.exports=function(){"use strict";function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],a=!0,n=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(s){n=!0,o=s}finally{try{a||null==c.return||c.return()}finally{if(n)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function r(e,r,a){for(var n={},o=0;o<r;o+=a){var i=e[o],c=e[o+1],s=e[o+2],l=e[o+3],u=Math.round(i/24)+","+Math.round(c/24)+","+Math.round(s/24);n[u]?n[u]=[n[u][0]+i*l,n[u][1]+c*l,n[u][2]+s*l,n[u][3]+l,n[u][4]+1]:n[u]=[i*l,c*l,s*l,l,1]}var h=Object.keys(n).map(function(e){return n[e]}).sort(function(e,t){var r=e[4],a=t[4];return r>a?-1:r===a?0:1}),p=t(h[0],5),f=p[0],m=p[1],d=p[2],v=p[3],g=p[4];return v?[Math.round(f/v),Math.round(m/v),Math.round(d/v),Math.round(v/g)]:[0,0,0,0]}function a(e,t,r){for(var a=0,n=0,o=0,i=0,c=0,s=0;s<t;s+=r){var l=e[s+3],u=e[s]*l,h=e[s+1]*l,p=e[s+2]*l;a+=u,n+=h,o+=p,i+=l,c++}return i?[Math.round(a/i),Math.round(n/i),Math.round(o/i),Math.round(i/c)]:[0,0,0,0]}function n(e,t,r){for(var a=0,n=0,o=0,i=0,c=0,s=0;s<t;s+=r){var l=e[s],u=e[s+1],h=e[s+2],p=e[s+3];a+=l*l*p,n+=u*u*p,o+=h*h*p,i+=p,c++}return i?[Math.round(Math.sqrt(a/i)),Math.round(Math.sqrt(n/i)),Math.round(Math.sqrt(o/i)),Math.round(i/c)]:[0,0,0,0]}return function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)}return o=t,(i=[{key:"getColorAsync",value:function(e,t){if(e){if(e.complete){var r=this.getColor(e,t);return r.error?Promise.reject(r.error):Promise.resolve(r)}return this._bindImageEvents(e,t)}return Promise.reject(Error("Call .getColorAsync(null) without resource."))}},{key:"getColor",value:function(e,t){t=t||{};var r=this._getDefaultColor(t),a=r;if(!e)return this._outputError(t,"call .getColor(null) without resource."),this._prepareResult(r);var n=this._getOriginalSize(e),o=this._prepareSizeAndPosition(n,t);if(!o.srcWidth||!o.srcHeight||!o.destWidth||!o.destHeight)return this._outputError(t,'incorrect sizes for resource "'.concat(e.src,'".')),this._prepareResult(r);if(!this._ctx&&(this._canvas=this._makeCanvas(),this._ctx=this._canvas.getContext&&this._canvas.getContext("2d"),!this._ctx))return this._outputError(t,"Canvas Context 2D is not supported in this browser."),this._prepareResult(r);this._canvas.width=o.destWidth,this._canvas.height=o.destHeight;try{this._ctx.clearRect(0,0,o.destWidth,o.destHeight),this._ctx.drawImage(e,o.srcLeft,o.srcTop,o.srcWidth,o.srcHeight,0,0,o.destWidth,o.destHeight);var i=this._ctx.getImageData(0,0,o.destWidth,o.destHeight).data;a=this.getColorFromArray4(i,t)}catch(c){this._outputError(t,"security error (CORS) for resource ".concat(e.src,".\nDetails: https://developer.mozilla.org/en/docs/Web/HTML/CORS_enabled_image"),c)}return this._prepareResult(a)}},{key:"getColorFromArray4",value:function(e,t){t=t||{};var o=e.length;if(o<4)return this._getDefaultColor(t);var i,c=o-o%4,s=4*(t.step||1);switch(t.algorithm||"sqrt"){case"simple":i=a;break;case"sqrt":i=n;break;case"dominant":i=r;break;default:throw new Error("".concat("FastAverageColor: ").concat(t.algorithm," is unknown algorithm."))}return i(e,c,s)}},{key:"destroy",value:function(){delete this._canvas,delete this._ctx}},{key:"_getDefaultColor",value:function(e){return this._getOption(e,"defaultColor",[255,255,255,255])}},{key:"_getOption",value:function(e,t,r){return"undefined"===typeof e[t]?r:e[t]}},{key:"_prepareSizeAndPosition",value:function(e,t){var r,a=this._getOption(t,"left",0),n=this._getOption(t,"top",0),o=this._getOption(t,"width",e.width),i=this._getOption(t,"height",e.height),c=o,s=i;return"precision"===t.mode?{srcLeft:a,srcTop:n,srcWidth:o,srcHeight:i,destWidth:c,destHeight:s}:(o>i?(r=o/i,c=100,s=Math.round(c/r)):(r=i/o,s=100,c=Math.round(s/r)),(c>o||s>i||c<10||s<10)&&(c=o,s=i),{srcLeft:a,srcTop:n,srcWidth:o,srcHeight:i,destWidth:c,destHeight:s})}},{key:"_bindImageEvents",value:function(e,t){var r=this;return new Promise(function(a,n){var o=function(){s();var o=r.getColor(e,t);o.error?n(o.error):a(o)},i=function(){s(),n(new Error("".concat("FastAverageColor: ","Error loading image ").concat(e.src,".")))},c=function(){s(),n(new Error("".concat("FastAverageColor: ",'Image "').concat(e.src,'" loading aborted.')))},s=function(){e.removeEventListener("load",o),e.removeEventListener("error",i),e.removeEventListener("abort",c)};e.addEventListener("load",o),e.addEventListener("error",i),e.addEventListener("abort",c)})}},{key:"_prepareResult",value:function(e){var t=e.slice(0,3),r=[].concat(t,e[3]/255),a=this._isDark(e);return{value:e,rgb:"rgb("+t.join(",")+")",rgba:"rgba("+r.join(",")+")",hex:this._arrayToHex(t),hexa:this._arrayToHex(e),isDark:a,isLight:!a}}},{key:"_getOriginalSize",value:function(e){return e instanceof HTMLImageElement?{width:e.naturalWidth,height:e.naturalHeight}:e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:{width:e.width,height:e.height}}},{key:"_toHex",value:function(e){var t=e.toString(16);return 1===t.length?"0"+t:t}},{key:"_arrayToHex",value:function(e){return"#"+e.map(this._toHex).join("")}},{key:"_isDark",value:function(e){var t=(299*e[0]+587*e[1]+114*e[2])/1e3;return t<128}},{key:"_makeCanvas",value:function(){return"undefined"===typeof window?new OffscreenCanvas(1,1):document.createElement("canvas")}},{key:"_outputError",value:function(e,t,r){e.silent||(console.error("".concat("FastAverageColor: ").concat(t)),r&&console.error(r))}}])&&e(o.prototype,i),c&&e(o,c),t;var o,i,c}()}()},42:function(e,t,r){},43:function(e,t,r){},45:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r(2),o=r(4),i=r(3),c=r(5),s=r(0),l=r.n(s),u=r(35),h=r(14),p=r(8),f=r.n(p),m=r(9),d=r(12),v=r(41),g=r.n(v),b=r(11);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var k=l.a.createElement("path",{d:"M57 6H1a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h56a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm-1 44H2V8h54v42z"}),w=l.a.createElement("path",{d:"M16 28.138a5.575 5.575 0 0 0 5.569-5.568c0-3.072-2.498-5.57-5.569-5.57s-5.569 2.498-5.569 5.569A5.575 5.575 0 0 0 16 28.138zM16 19c1.968 0 3.569 1.602 3.569 3.569S17.968 26.138 16 26.138s-3.569-1.601-3.569-3.568S14.032 19 16 19zM7 46c.234 0 .47-.082.66-.249l16.313-14.362L34.275 41.69a.999.999 0 1 0 1.414-1.414l-4.807-4.807 9.181-10.054 11.261 10.323a1 1 0 0 0 1.351-1.475l-12-11a1.031 1.031 0 0 0-.72-.262 1.002 1.002 0 0 0-.694.325l-9.794 10.727-4.743-4.743a1 1 0 0 0-1.368-.044L6.339 44.249A1 1 0 0 0 7 46z"}),E=function(e){var t=e.svgRef,r=_(e,["svgRef"]);return l.a.createElement("svg",y({viewBox:"0 0 58 58",ref:t},r),k,w)},O=l.a.forwardRef(function(e,t){return l.a.createElement(E,y({svgRef:t},e))}),C=(r.p,r(42),function(e){function t(e){var r;return Object(a.a)(this,t),(r=Object(o.a)(this,Object(i.a)(t).call(this,e))).onLoadImage=function(){var e=Object(m.a)(f.a.mark(function e(t){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.fac.getColor(t.target,{algorithm:"simple"}),e.next=3,Object(b.a)(200);case 3:requestAnimationFrame(function(){r._hideLoader(),r._setAlbumShadowColor(a),r._displayAlbumCover()});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),r.loader=l.a.createRef(),r.image=l.a.createRef(),r.view=l.a.createRef(),r.fac=new g.a,r._onLoadDummyImage=r._onLoadDummyImage.bind(Object(d.a)(r)),r}return Object(c.a)(t,e),Object(n.a)(t,[{key:"_onLoadDummyImage",value:function(){var e=Object(m.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)(200);case 2:this.image.current.src=this.props.src,this.image.current.classList.remove("album-cover__image--loaded"),this.icon.classList.remove("album-cover__icon--active");case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"_displayLoadingCover",value:function(){var e=this;this.imageDummy.src=this.props.src,this.image.current.classList.add("album-cover__image--loaded"),requestAnimationFrame(function(){e.view.current.style.boxShadow="rgba(107, 179, 237, .5) 0px 24px 35px -16px",e.loader.current.classList.remove("hide"),e.loader.current.classList.add("show"),e.icon.classList.add("album-cover__icon--active")})}},{key:"_setAlbumShadowColor",value:function(e){var t=e.hex.replace("#","").match(/[A-Za-z0-9]{2}/g).map(function(e){return parseInt(e,16)});this.view.current.style.boxShadow="0 24px 35px -16px rgba(".concat(t[0],", ").concat(t[1],", ").concat(t[2],", 0.7)")}},{key:"_displayAlbumCover",value:function(){this.image.current.attributes.src=this.props.src,this.image.current.classList.add("album-cover__image--loaded")}},{key:"_hideLoader",value:function(){this.loader.current.classList.add("hide")}},{key:"componentDidMount",value:function(){this.icon=document.querySelector(".album-cover__icon"),this.imageDummy=new Image,this.imageDummy.onload=this._onLoadDummyImage}},{key:"componentDidUpdate",value:function(e){e.src!==this.props.src&&this._displayLoadingCover()}},{key:"render",value:function(){return l.a.createElement("div",{ref:this.view,className:"album-cover"},l.a.createElement(O,{className:"album-cover__icon"}),l.a.createElement("div",{ref:this.loader,className:"album-cover__loader"}),l.a.createElement("img",{ref:this.image,className:"album-cover__image",crossOrigin:"",onLoad:this.onLoadImage,alt:this.props.alt}))}}]),t}(s.PureComponent)),x=function(e){var t=parseInt(e,10),r=Math.floor(t/3600),a=Math.floor((t-3600*r)/60),n=t-3600*r-60*a;return a<10&&(a="0"+a),n<10&&(n="0"+n),"".concat(a,":").concat(n)},j=r(10),L=r(15);function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var R=l.a.createElement("path",{d:"M15.5 0c-1.103 0-2 .897-2 2v40c0 1.103.897 2 2 2s2-.897 2-2V2c0-1.103-.897-2-2-2zM28.5 0c-1.103 0-2 .897-2 2v40c0 1.103.897 2 2 2s2-.897 2-2V2c0-1.103-.897-2-2-2z"}),H=function(e){var t=e.svgRef,r=P(e,["svgRef"]);return l.a.createElement("svg",M({viewBox:"0 0 44 44",ref:t},r),R)},N=l.a.forwardRef(function(e,t){return l.a.createElement(H,M({svgRef:t},e))});r.p;function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var I=l.a.createElement("path",{d:"M23.491 144.032c0-28.762 23.399-52.155 52.161-52.155h185.706l-46.874 46.874 14.31 14.305 71.301-71.295L228.8 10.47l-14.3 14.31 46.863 46.868H75.657c-39.912 0-72.389 32.477-72.389 72.389v7.419h20.228v-7.424h-.005z"}),z=l.a.createElement("path",{d:"M276.604 156.058c0 28.762-23.404 52.155-52.166 52.155H38.726l46.879-46.874L71.29 147.04 0 218.335l71.295 71.29 14.299-14.31-46.874-46.868h185.711c39.917 0 72.394-32.471 72.394-72.388v-7.419h-20.228v7.419h.007z"}),D=function(e){var t=e.svgRef,r=A(e,["svgRef"]);return l.a.createElement("svg",S({viewBox:"0 0 300.095 300.095",ref:t},r),I,z)},W=l.a.forwardRef(function(e,t){return l.a.createElement(D,S({svgRef:t},e))});r.p;function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var q=l.a.createElement("path",{d:"M312.453 199.601a116.167 116.167 0 0 0-20.053-16.128 119.472 119.472 0 0 0-64.427-18.859 118.952 118.952 0 0 0-84.48 34.987L34.949 308.23a119.466 119.466 0 0 0-34.91 84.318c-.042 65.98 53.41 119.501 119.39 119.543a118.7 118.7 0 0 0 84.395-34.816l89.6-89.6a8.534 8.534 0 0 0-6.059-14.592h-3.413a143.626 143.626 0 0 1-54.613-10.581 8.533 8.533 0 0 0-9.301 1.877l-64.427 64.512c-20.006 20.006-52.442 20.006-72.448 0-20.006-20.006-20.006-52.442 0-72.448l108.971-108.885c19.99-19.965 52.373-19.965 72.363 0 13.472 12.679 34.486 12.679 47.957 0a34.134 34.134 0 0 0 9.899-21.675 34.137 34.137 0 0 0-9.9-26.282z"}),V=l.a.createElement("path",{d:"M477.061 34.993c-46.657-46.657-122.303-46.657-168.96 0l-89.515 89.429a8.533 8.533 0 0 0-1.792 9.387 8.532 8.532 0 0 0 8.021 5.205h3.157a143.357 143.357 0 0 1 54.528 10.667 8.533 8.533 0 0 0 9.301-1.877l64.256-64.171c20.006-20.006 52.442-20.006 72.448 0 20.006 20.006 20.006 52.442 0 72.448l-80.043 79.957-.683.768-27.989 27.819c-19.99 19.965-52.373 19.965-72.363 0-13.472-12.679-34.486-12.679-47.957 0a34.139 34.139 0 0 0-9.899 21.845 34.137 34.137 0 0 0 9.899 26.283 118.447 118.447 0 0 0 34.133 23.893c1.792.853 3.584 1.536 5.376 2.304 1.792.768 3.669 1.365 5.461 2.048a67.799 67.799 0 0 0 5.461 1.792l5.035 1.365c3.413.853 6.827 1.536 10.325 2.133 4.214.626 8.458 1.025 12.715 1.195H284.461l5.12-.597c1.877-.085 3.84-.512 6.059-.512h2.901l5.888-.853 2.731-.512 4.949-1.024h.939a119.456 119.456 0 0 0 55.381-31.403l108.629-108.629c46.66-46.657 46.66-122.303.003-168.96z"}),B=function(e){var t=e.svgRef,r=F(e,["svgRef"]);return l.a.createElement("svg",T({viewBox:"0 0 512.092 512.092",ref:t},r),q,V)},J=l.a.forwardRef(function(e,t){return l.a.createElement(B,T({svgRef:t},e))}),U=(r.p,r(43),function(e){function t(){var e,r;Object(a.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(r=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).onPlayClick=function(){r.props.onPlayClick(r.props.track)},r.onPauseClick=function(){r.props.onPauseClick(r.props.track)},r.onLinkClick=function(){window.open(r.props.track.permalink_url)},r}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return l.a.createElement(s.Fragment,null,l.a.createElement("div",{className:"detail__track","aria-live":"polite","aria-atomic":"false"},l.a.createElement(C,{hide:!this.props.active,src:this.props.track.artwork_url.replace("t50x50","t300x300"),alt:"album artwork from track ".concat(this.props.track.title)}),l.a.createElement("div",{className:"detail__controls"},l.a.createElement("div",{className:"detail__info"},l.a.createElement("h3",{className:"title"},this.props.track.title),l.a.createElement("p",{className:"artist"},this.props.track.artist)),l.a.createElement(u.a,{percent:this.props.track.percentage}),l.a.createElement("div",{className:"detail__timing"},l.a.createElement("time",{className:"time"},x(this.props.track.currentTime)),l.a.createElement("time",{className:"time"},x(this.props.track.duration/1e3))),l.a.createElement("div",{className:"detail__buttons"},l.a.createElement(j.a,{label:"repeat song",tabEnabled:this.props.active,className:"icon-button ".concat(this.props.repeat?"icon-button--high-light":""),onClick:this.props.onRepeatClick,icon:l.a.createElement(W,{className:"icon icon--back",width:16})}),l.a.createElement("button",{name:"previous song",tabIndex:this.props.active?"0":"-1",className:"prev-button",onClick:this.props.onPlayPrev},l.a.createElement(L.a,{width:16})),l.a.createElement(h.a,{name:"pause button",className:"pause",tabEnabled:this.props.active,active:this.props.track.playing&&!this.props.track.paused,onClick:this.onPauseClick,icon:l.a.createElement(N,{width:24})}),l.a.createElement(h.a,{name:"play button",className:"play",tabEnabled:this.props.active,active:!this.props.track.playing&&this.props.track.paused,onClick:this.onPlayClick,icon:l.a.createElement(L.a,{width:24})}),l.a.createElement("button",{name:"next song button",tabIndex:this.props.active?"0":"-1",className:"next-button",onClick:this.props.onPlayNext},l.a.createElement(L.a,{width:16})),l.a.createElement(j.a,{label:"song link",tabEnabled:this.props.active,className:"icon-button",onClick:this.onLinkClick,icon:l.a.createElement(J,{className:"icon icon--back",width:16})})))))}}]),t}(s.PureComponent));t.default=U}}]);
//# sourceMappingURL=3.c1df42bd.chunk.js.map