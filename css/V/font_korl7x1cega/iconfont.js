(function(window){var svgSprite='<svg><symbol id="icon-vip" viewBox="0 0 1024 1024"><path d="M26.284569 116.246723l431.047428 0 0 36.312877c-25.941382 3.518578-44.072532 9.081832-53.923827 16.957087-10.053595 7.842743-15.082199 20.074677-15.082199 36.833077 0 23.763042 16.689762 74.236929 50.105412 151.385536 33.415649 77.033006 80.302321 173.569915 140.865928 289.534862 63.189896-140.226515 106.659141-241.340464 130.017583-303.327397 23.32593-62.153108 34.990701-104.751739 34.990701-127.990969 0-19.388302-6.032879-34.033387-17.878276-43.639032-12.083821-9.80072-31.988711-16.238199-59.974769-19.236577L666.452551 116.246723l332.650081 0 0 36.833077c-32.628124 2.445664-59.776081 12.600409-81.711197 30.39921-21.718366 17.997488-46.886672 54.108065-75.053355 108.786905-37.840965 74.385042-79.915784 162.212206-126.603768 263.676568-46.464009 101.431849-93.975644 209.550441-142.253129 324.08845-22.607042 41.388443-94.192394 42.797319-113.931108 0-26.143682-53.591477-61.950808-127.304593-107.266041-221.583687C190.086277 321.610273 83.239286 153.0798 32.133211 153.0798L26.284569 153.0798 26.284569 116.246723z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)