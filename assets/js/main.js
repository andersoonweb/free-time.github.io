$(document).ready(function(){echo.init({offset:100,throttle:250,unload:!1}),$(document).on("click",".mfp-iframe",function(e){e.preventDefault(),$(this).magnificPopup({type:"iframe"}).magnificPopup("open")}),inphinity("#main").set({navSelector:"p.pagination",nextSelector:"p.pagination a.older",itemSelector:"#main"})}),$(function(){$(".nav-category").click(function(){$(".sub-menu").toggle()})}),function(e,t){"function"==typeof define&&define.amd?define(function(){return t(e)}):"object"==typeof exports?module.exports=t:e.echo=t(e)}(this,function(e){"use strict";var t,n,i,a,o,s={},r=function(){},l=function(e){return null===e.offsetParent},c=function(e,t){if(l(e))return!1;var n=e.getBoundingClientRect();return n.right>=t.l&&n.bottom>=t.t&&n.left<=t.r&&n.top<=t.b},h=function(){(a||!n)&&(clearTimeout(n),n=setTimeout(function(){s.render(),n=null},i))};return s.init=function(n){n=n||{};var l=n.offset||0,c=n.offsetVertical||l,d=n.offsetHorizontal||l,u=function(e,t){return parseInt(e||t,10)};t={t:u(n.offsetTop,c),b:u(n.offsetBottom,c),l:u(n.offsetLeft,d),r:u(n.offsetRight,d)},i=u(n.throttle,250),a=n.debounce!==!1,o=!!n.unload,r=n.callback||r,s.render(),document.addEventListener?(e.addEventListener("scroll",h,!1),e.addEventListener("load",h,!1)):(e.attachEvent("onscroll",h),e.attachEvent("onload",h))},s.render=function(){for(var n,i,a=document.querySelectorAll("img[data-echo], [data-echo-background]"),l=a.length,h={l:0-t.l,t:0-t.t,b:(e.innerHeight||document.documentElement.clientHeight)+t.b,r:(e.innerWidth||document.documentElement.clientWidth)+t.r},d=0;l>d;d++)i=a[d],c(i,h)?(o&&i.setAttribute("data-echo-placeholder",i.src),null!==i.getAttribute("data-echo-background")?i.style.backgroundImage="url("+i.getAttribute("data-echo-background")+")":i.src=i.getAttribute("data-echo"),o||(i.removeAttribute("data-echo"),i.removeAttribute("data-echo-background")),r(i,"load")):o&&(n=i.getAttribute("data-echo-placeholder"))&&(null!==i.getAttribute("data-echo-background")?i.style.backgroundImage="url("+n+")":i.src=n,i.removeAttribute("data-echo-placeholder"),r(i,"unload"));l||s.detach()},s.detach=function(){document.removeEventListener?e.removeEventListener("scroll",h):e.detachEvent("onscroll",h),clearTimeout(n)},s});var inphinity=function(){return this.loading=!1,this.debug=!1,this.url="",this.currentPage=1,this.itemSelector="div.post",this.nextSelector="div.navigation a:first",this.navSelector="div.navigation",this.basePath=!1,this.path=!1,this.dataType="html",this.bag=!1,this.bagClassName=!1,this.loader=!1,this.trustedRequest=!1,this.defaults={finishedMsg:"<em>That's all folks!</em>",animationSpeed:500},this.scroller=function(e){if(this.loading!==!0){var t=this.element.offsetTop+this.element.offsetHeight,n=t-e;750>=n&&(this.loading=!0,this.request())}},this.getPath=function(){var e=this.basePath;if(e.match(/^(.*?)\b2\b(.*?$)/))e=e.match(/^(.*?)\b2\b(.*?$)/).slice(1);else if(e.match(/^(.*?)2(.*?$)/)){if(e.match(/^(.*?page=)2(\/.*|$)/))return e=e.match(/^(.*?page=)2(\/.*|$)/).slice(1);e=e.match(/^(.*?)2(.*?$)/).slice(1)}else{if(e.match(/^(.*?page=)1(\/.*|$)/))return e=e.match(/^(.*?page=)1(\/.*|$)/).slice(1);this.currentPage=e.match(/\d+/)[0]-1,e=[this.path,""]}return e},this.getUrlPath=function(){var e=document.querySelector(this.nextSelector).href.split("/");return e[e.length-1]},this.createBag=function(){var e=document.createElement("div");e.style.display="none",this.bagClassName=this.bagClassName||"ph-bag",e.className=this.bagClassName,this.element.appendChild(e),this.bag=document.querySelector("."+this.bagClassName)},this.createLoader=function(){var e=document.createElement("div");e.style.display="none",e.className="ph-loader",this.element.appendChild(e),this.loader=document.querySelector(".ph-loader")},this.updateLoader=function(){this.element.removeChild(this.loader),this.createLoader()},this.loaderToggle=function(e,t){this.loader.style.display="block",e===!0?this.animation().fadeIn(this.loader,t):e===!1&&this.animation().fadeOut(this.loader,t)},this.request=function(){var e=this,t=e.path+""+(e.currentPage+1),n=new XMLHttpRequest;window.location.pathname.indexOf(e.path)>-1&&(t="../"+t),e.loaderToggle(!0),n.open("GET",encodeURI(t)),n.onload=function(){if(200===n.status||e.trustedRequest){var t=/<body[^>]*>((.|[\n\r])*)<\/body>/im.exec(n.responseText).slice(1)[0];e.trustedRequest=!0,e.loaderToggle(!1,e.render.bind(e,t))}else e._debug("Request failed. Returned status of "+n.status)},n.send()},this.render=function(e,t){var n=this;n.bag.innerHTML=e;var i=n.bag.querySelectorAll(n.itemSelector);if(!i.length)return n.finished();if(t!==!0){var a=document.querySelector(n.navSelector);return n.animation().fadeOut(a,function(){return n.render(e,!0)})}for(var o=0;o<i.length;o++)n.element.appendChild(i[o]);n.toNext()},this.toNext=function(){this.updateLoader(),this.currentPage=this.currentPage+1,this.loading=!1},this.finished=function(){var e=document.createElement("div");e.className="ph-end",e.innerHTML=this.defaults.finishedMsg,this.element.appendChild(e)},this.on=function(e){return this.sel=e,this.element=document.querySelector(e),this},this.set=function(e){e.navSelector&&(this.navSelector=e.navSelector),e.nextSelector&&(this.nextSelector=e.nextSelector),e.itemSelector&&(this.itemSelector=e.itemSelector),e.path&&(this.path=e.path),e.basePath&&(this.basePath=e.basePath),e.finishedMsg&&(this.defaults.finishedMsg=e.finishedMsg),e.animationSpeed&&(this.defaults.animationSpeed=e.animationSpeed,"slow"===e.animationSpeed&&(this.defaults.animationSpeed=800),"normal"===e.animationSpeed&&(this.defaults.animationSpeed=500),"fast"===e.animationSpeed&&(this.defaults.animationSpeed=300)),this.init()},this.init=function(){this.basePath=this.basePath||this.getUrlPath(),this.path=this.path||this.getPath()[0]||"page",this.createLoader(),this.createBag(),this.setEventScroll()},this.setEventScroll=function(){var e=this;window.addEventListener("scroll",function(t){e.scroller(window.scrollY||t.target.activeElement.scrollTop)})},this._debug=function(e){console.log("Inphinity: ",e)},this.animation=function(){var e=this;return{fadeOut:function(t,n){t.style.opacity=1;var i=+new Date,a=function(){if(t.style.opacity=+t.style.opacity-(new Date-i)/e.defaults.animationSpeed,i=+new Date,+t.style.opacity>0)window.requestAnimationFrame&&requestAnimationFrame(a)||setTimeout(a,16);else{if(t.style.display="none","undefined"==typeof n)return!0;n()}};a()},fadeIn:function(t,n){t.style.opacity=0;var i=+new Date,a=function(){if(t.style.opacity=+t.style.opacity+(new Date-i)/e.defaults.animationSpeed,i=+new Date,+t.style.opacity<1)window.requestAnimationFrame&&requestAnimationFrame(a)||setTimeout(a,16);else{if("undefined"==typeof n)return!0;n()}};a()}}},this.on.bind(this)}();