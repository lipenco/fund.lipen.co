/*! skrollr 0.6.5 (2013-05-22) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
(function(e,t,r){"use strict";function n(r){if(o=t.documentElement,a=t.body,M(),j=this,r=r||{},J=r.constants||{},r.easing)for(var n in r.easing)U[n]=r.easing[n];rt=r.edgeStrategy||"ease",X={beforerender:r.beforerender,render:r.render},Z=r.forceHeight!==!1,Z&&(Ft=r.scale||1),Q=r.smoothScrolling!==!1,et={targetTop:j.getScrollTop()},zt=(r.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),zt?(W=t.getElementById("skrollr-body"),W&&dt(),ot(),St(o,[y,S],[T])):St(o,[y,b],[T]),j.refresh(),ht(e,"resize orientationchange",yt);var i=R();return function l(){lt(),i(l)}(),j}var o,a,i=e.skrollr={get:function(){return j},init:function(e){return j||new n(e)},VERSION:"0.6.5"},l=Object.prototype.hasOwnProperty,s=e.Math,c=e.getComputedStyle,f="touchstart",u="touchmove",p="touchcancel",g="touchend",m="skrollable",d=m+"-before",v=m+"-between",h=m+"-after",y="skrollr",T="no-"+y,b=y+"-desktop",S=y+"-mobile",k="linear",w=1e3,x=6e-4,A=200,E="start",F="end",C="center",D="bottom",H="___skrollable_id",V=/^\s+|\s+$/g,z=/^data(?:-(_\w+))?(?:-?(-?\d+))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,O=/\s*([\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,P=/^([a-z\-]+)\[(\w+)\]$/,q=/-([a-z])/g,I=function(e,t){return t.toUpperCase()},B=/[\-+]?[\d]*\.?[\d]+/g,_=/\{\?\}/g,G=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,L=/[a-z\-]+-gradient/g,N="",$="",M=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(c){var t=c(a,null);for(var n in t)if(N=n.match(e)||+n==n&&t[n].match(e))break;if(!N)return N=$="",r;N=N[0],"-"===N.slice(0,1)?($=N,N={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[N]):$="-"+N.toLowerCase()+"-"}},R=function(){var t=e.requestAnimationFrame||e[N.toLowerCase()+"RequestAnimationFrame"],r=xt();return(zt||!t)&&(t=function(t){var n=xt()-r,o=s.max(0,33-n);e.setTimeout(function(){r=xt(),t()},o)}),t},U={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-s.cos(e*s.PI)/2+.5},sqrt:function(e){return s.sqrt(e)},outCubic:function(e){return s.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-s.abs(3*s.cos(1.028*e*t)/t)}};n.prototype.refresh=function(e){var n,o,a=!1;for(e===r?(a=!0,Y=[],Vt=0,e=t.getElementsByTagName("*")):e=[].concat(e),n=0,o=e.length;o>n;n++){var i=e[n],l=i,s=[],c=Q,f=rt;if(i.attributes){for(var u=0,p=i.attributes.length;p>u;u++){var g=i.attributes[u];if("data-anchor-target"!==g.name)if("data-smooth-scrolling"!==g.name)if("data-edge-strategy"!==g.name){var d=g.name.match(z);if(null!==d){var v=d[1];v=v&&J[v.substr(1)]||0;var h=(0|d[2])+v,y=d[3],T=d[4]||y,b={offset:h,props:g.value,element:i};s.push(b),y&&y!==E&&y!==F?(b.mode="relative",b.anchors=[y,T]):(b.mode="absolute",y===F?b.isEnd=!0:(b.frame=h*Ft,delete b.offset))}}else f=g.value;else c="off"!==g.value;else if(l=t.querySelector(g.value),null===l)throw'Unable to find anchor target "'+g.value+'"'}if(s.length){var S,k,w;!a&&H in i?(w=i[H],S=Y[w].styleAttr,k=Y[w].classAttr):(w=i[H]=Vt++,S=i.style.cssText,k=bt(i)),Y[w]={element:i,styleAttr:S,classAttr:k,anchorTarget:l,keyFrames:s,smoothScrolling:c,edgeStrategy:f},St(i,[m],[])}}}for(yt(),n=0,o=e.length;o>n;n++){var x=Y[e[n][H]];x!==r&&(st(x),ft(x))}return j},n.prototype.relativeToAbsolute=function(e,t,r){var n=o.clientHeight,a=e.getBoundingClientRect(),i=a.top,l=a.bottom-a.top;return t===D?i-=n:t===C&&(i-=n/2),r===D?i+=l:r===C&&(i+=l/2),i+=j.getScrollTop(),0|i+.5},n.prototype.animateTo=function(e,t){t=t||{};var n=xt(),o=j.getScrollTop();return K={startTop:o,topDiff:e-o,targetTop:e,duration:t.duration||w,startTime:n,endTime:n+(t.duration||w),easing:U[t.easing||k],done:t.done},K.topDiff||(K.done&&K.done.call(j,!1),K=r),j},n.prototype.stopAnimateTo=function(){K&&K.done&&K.done.call(j,!0),K=r},n.prototype.isAnimatingTo=function(){return!!K},n.prototype.setScrollTop=function(t,r){return r===!0&&(Dt=t,tt=!0),zt?(Ot=s.min(s.max(t,0),Et),W&&vt(W,"transform","translate(0, "+-Ot+"px) "+nt)):e.scrollTo(0,t),j},n.prototype.getScrollTop=function(){return zt?Ot:e.pageYOffset||o.scrollTop||a.scrollTop||0},n.prototype.on=function(e,t){return X[e]=t,j},n.prototype.off=function(e){return delete X[e],j};var j,Y,W,X,Z,J,K,Q,et,tt,rt,nt,ot=function(){var t,n,i,l,c,m,d,v,h,y,T;ht(o,[f,u,p,g].join(" "),function(e){e.preventDefault();var o=e.changedTouches[0];switch(l=o.clientY,c=o.clientX,h=e.timeStamp,e.type){case f:t&&t.blur(),t=e.target,n=m=l,i=c,v=h;break;case u:d=l-m,T=h-y,j.setScrollTop(Ot-d),m=l,y=h;break;default:case p:case g:var a=n-l,b=i-c,S=b*b+a*a;if(49>S)return t.focus(),t.click(),r;t=r;var k=d/T;k=s.max(s.min(k,3),-3);var w=s.abs(k/x),A=k*w+.5*x*w*w,E=j.getScrollTop()-A,F=0;E>Et?(F=(Et-E)/A,E=Et):0>E&&(F=-E/A,E=0),w*=1-F,j.animateTo(E,{easing:"outCubic",duration:w})}}),e.scrollTo(0,0),o.style.overflow=a.style.overflow="hidden"},at=function(){var e,t,r,n,o,a,i,l,c;for(l=0,c=Y.length;c>l;l++)for(e=Y[l],t=e.element,r=e.anchorTarget,n=e.keyFrames,o=0,a=n.length;a>o;o++)i=n[o],"relative"===i.mode&&(mt(t),i.frame=j.relativeToAbsolute(r,i.anchors[0],i.anchors[1])-i.offset,mt(t,!0)),Z&&!i.isEnd&&i.frame>Et&&(Et=i.frame);for(Et=s.max(Et,Tt()),l=0,c=Y.length;c>l;l++){for(e=Y[l],n=e.keyFrames,o=0,a=n.length;a>o;o++)i=n[o],i.isEnd&&(i.frame=Et-i.offset);e.keyFrames.sort(At)}},it=function(e,t){for(var r=0,n=Y.length;n>r;r++){var o,a,i=Y[r],s=i.element,c=i.smoothScrolling?e:t,f=i.keyFrames,u=f[0].frame,p=f[f.length-1].frame,g=u>c,y=c>p,T=f[g?0:f.length-1];if(g||y){if(g&&-1===i.edge||y&&1===i.edge)continue;switch(St(s,[g?d:h],[d,v,h]),i.edge=g?-1:1,i.edgeStrategy){case"reset":mt(s);continue;case"set":var b=T.props;for(o in b)l.call(b,o)&&(a=gt(b[o].value),vt(s,o,a));continue;default:case"ease":c=T.frame}}else 0!==i.edge&&(St(s,[m,v],[d,h]),i.edge=0);for(var S=0,k=f.length-1;k>S;S++)if(c>=f[S].frame&&f[S+1].frame>=c){var w=f[S],x=f[S+1];for(o in w.props)if(l.call(w.props,o)){var A=(c-w.frame)/(x.frame-w.frame);A=w.props[o].easing(A),a=pt(w.props[o].value,x.props[o].value,A),a=gt(a),vt(s,o,a)}break}}},lt=function(){var e,t,n=j.getScrollTop(),o=xt();if(K)o>=K.endTime?(n=K.targetTop,e=K.done,K=r):(t=K.easing((o-K.startTime)/K.duration),n=0|K.startTop+t*K.topDiff),j.setScrollTop(n);else if(!zt){var a=et.targetTop-n;a&&(et={startTop:Dt,topDiff:n-Dt,targetTop:n,startTime:Ht,endTime:Ht+A}),et.endTime>=o&&(t=U.sqrt((o-et.startTime)/A),n=0|et.startTop+t*et.topDiff)}if(tt||Dt!==n){Ct=n>=Dt?"down":"up",tt=!1;var i={curTop:n,lastTop:Dt,maxTop:Et,direction:Ct},l=X.beforerender&&X.beforerender.call(j,i);l!==!1&&(it(n,j.getScrollTop()),Dt=n,X.render&&X.render.call(j,i)),e&&e.call(j,!1)}Ht=o},st=function(e){for(var t=0,r=e.keyFrames.length;r>t;t++){for(var n,o,a,i,l=e.keyFrames[t],s={};null!==(i=O.exec(l.props));)a=i[1],o=i[2],n=a.match(P),null!==n?(a=n[1],n=n[2]):n=k,o=o.indexOf("!")?ct(o):[o.slice(1)],s[a]={value:o,easing:U[n]};l.props=s}},ct=function(e){var t=[];return G.lastIndex=0,e=e.replace(G,function(e){return e.replace(B,function(e){return 100*(e/255)+"%"})}),$&&(L.lastIndex=0,e=e.replace(L,function(e){return $+e})),e=e.replace(B,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},ft=function(e){var t,r,n={};for(t=0,r=e.keyFrames.length;r>t;t++)ut(e.keyFrames[t],n);for(n={},t=e.keyFrames.length-1;t>=0;t--)ut(e.keyFrames[t],n)},ut=function(e,t){var r;for(r in t)l.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},pt=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;o>n;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},gt=function(e){var t=1;return _.lastIndex=0,e[0].replace(_,function(){return e[t++]})},mt=function(e,t){e=[].concat(e);for(var r,n,o=0,a=e.length;a>o;o++)n=e[o],r=Y[n[H]],r&&(t?(n.style.cssText=r.dirtyStyleAttr,St(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=bt(n),n.style.cssText=r.styleAttr,St(n,r.classAttr)))},dt=function(){nt="translateZ(0)",vt(W,"transform",nt);var e=c(W),t=e.getPropertyValue("transform"),r=e.getPropertyValue($+"transform"),n=t&&"none"!==t||r&&"none"!==r;n||(nt="")},vt=i.setStyle=function(e,t,r){var n=e.style;if(t=t.replace(q,I).replace("-",""),"zIndex"===t)n[t]=""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{N&&(n[N+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(o){}},ht=i.addEvent=function(t,r,n){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1}),n.call(this,t)};r=r.split(" ");for(var a=0,i=r.length;i>a;a++)t.addEventListener?t.addEventListener(r[a],n,!1):t.attachEvent("on"+r[a],o)},yt=function(){var e=j.getScrollTop();Et=0,Z&&!zt&&(a.style.height="auto"),at(),Z&&!zt&&(a.style.height=Et+o.clientHeight+"px"),zt?j.setScrollTop(s.min(j.getScrollTop(),Et)):j.setScrollTop(e,!0),tt=!0},Tt=function(){var e=W&&W.offsetHeight||0,t=s.max(e,a.scrollHeight,a.offsetHeight,o.scrollHeight,o.offsetHeight,o.clientHeight);return t-o.clientHeight},bt=function(t){var r="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[r],r="baseVal"),t[r]},St=function(t,n,o){var a="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[a],a="baseVal"),o===r)return t[a]=n,r;for(var i=t[a],l=0,s=o.length;s>l;l++)i=wt(i).replace(wt(o[l])," ");i=kt(i);for(var c=0,f=n.length;f>c;c++)-1===wt(i).indexOf(wt(n[c]))&&(i+=" "+n[c]);t[a]=kt(i)},kt=function(e){return e.replace(V,"")},wt=function(e){return" "+e+" "},xt=Date.now||function(){return+new Date},At=function(e,t){return e.frame-t.frame},Et=0,Ft=1,Ct="down",Dt=-1,Ht=xt(),Vt=0,zt=!1,Ot=0})(window,document);
This looks like a JavaScript file. Click this bar to format it.No 4