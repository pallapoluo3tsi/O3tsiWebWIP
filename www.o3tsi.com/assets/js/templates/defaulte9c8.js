function rightImgSectionFix(a){var b=a.querySelector(".image").cloneNode(!0);b.className+=" responsive-fix",a.childNodes[0].insertBefore(b,a.childNodes[0].childNodes[0])}function throttledResize(){for(i=0;i<tabSection.length;i++)heightAdjust(tabSection[i].querySelector(".tabby.active"))}function tabHeight(a){var b=a.querySelectorAll(".tabby"),c=0;for(i=0;i<b.length;i++)b[i].offsetHeight>c&&(c=b[i].offsetHeight),b[i].className.indexOf("active")>-1&&$.Velocity(b[i],{translateX:"0vh"},{duration:0}),0===i&&(a.childNodes[0].style.minHeight=c+"px");$.Velocity(a.childNodes[0],{opacity:[1,0]},{duration:150})}function tabSwitch(a){if(void 0===typeof a&&(a=this),-1===a.className.indexOf("active")){var b=a.getAttribute("data-href"),c=document.querySelector('.tabby[data-target="'+b+'"]'),d=document.querySelector(".tab-top .active"),e=document.querySelector(".tabby.active"),f=heightAdjust(c),g=whichTab(a)-whichTab(d)>0?1:-1,h=200*g,i={duration:250,delay:100};c.offsetHeight>e.offsetHeight?i.begin=f:i.complete=f,$.Velocity(e,{translateX:[h+"vh","0vh"]},{duration:500}),$.Velocity(c,{translateX:["0vh",-1*g+"vh"]},i),$.Velocity(document.querySelector(".tab-container"),"scroll",{duration:800,offset:-120}),d.className=d.className.replace("active",""),e.className=e.className.replace("active",""),a.className+=" active",c.className+=" active"}}function heightAdjust(a){$.Velocity(a.parentNode,{minHeight:a.offsetHeight+"px"},{duration:150})}function whichTab(a){for(var b=0;null!==(a=a.previousSibling);)++b;return b}var tabs=document.querySelectorAll(".tab-top a");for(i=0;i<tabs.length;i++)tabs[i].addEventListener("click",function(a){a.preventDefault(),tabSwitch(this)});var tabSection=document.querySelectorAll(".tab-main");for(i=0;i<tabSection.length;i++)tabHeight(tabSection[i]);if(window.addEventListener("resize",_.throttle(throttledResize,200)),window.onload=function(){if(void 0!==window.location.hash.split("#")[1]){var a=window.location.hash.split("#")[1];tabSwitch(document.querySelectorAll('[data-href="'+a+'"]')[0])}},window.onhashchange=function(){if(void 0!==window.location.hash.split("#")[1]){var a=window.location.hash.split("#")[1];tabSwitch(document.querySelectorAll('[data-href="'+a+'"]')[0])}},mobile){var features=document.querySelectorAll("aside"),featureWPs=[];for(i=0;i<features.length;i++)featureWPs.push(new Waypoint({element:features[i],handler:function(a){var b=document.querySelector("aside.active");b&&(b.className=b.className.replace(" active","")),this.element.className+=" active"},offset:"25%"}))}var rightImgSections=document.querySelectorAll(".img-section.right");for(i=0;i<rightImgSections.length;i++)rightImgSectionFix(rightImgSections[i]);var shifty=!1;if(window.innerWidth<768){for(var logoEl=document.querySelector(".trust-logos"),logos=logoEl.querySelectorAll("figure"),i=0;i<logos.length;i++)logoShift(logos[i],4e3,100,100,300);shifty=!0}window.onresize=function(a){if(window.innerWidth<768&&!shifty)for(var b=document.querySelector(".trust-logos"),c=b.querySelectorAll("figure"),d=0;d<c.length;d++)logoShift(c[d],4e3,100,100,300)};