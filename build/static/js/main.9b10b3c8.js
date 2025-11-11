/*! For license information please see main.9b10b3c8.js.LICENSE.txt */
(()=>{var e={4:(e,t,n)=>{"use strict";var r=n(853),a=n(43),o=n(950);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function s(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function c(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function u(e){if(s(e)!==e)throw Error(i(188))}function d(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=d(e)))return t;e=e.sibling}return null}var p=Object.assign,f=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),g=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),y=Symbol.for("react.consumer"),w=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),C=Symbol.for("react.lazy");Symbol.for("react.scope");var E=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var T=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var z=Symbol.iterator;function P(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=z&&e[z]||e["@@iterator"])?e:null}var N=Symbol.for("react.client.reference");function $(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===N?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case m:return"Fragment";case v:return"Profiler";case x:return"StrictMode";case S:return"Suspense";case j:return"SuspenseList";case E:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case g:return"Portal";case w:return(e.displayName||"Context")+".Provider";case y:return(e._context.displayName||"Context")+".Consumer";case k:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case A:return null!==(t=e.displayName||null)?t:$(e.type)||"Memo";case C:t=e._payload,e=e._init;try{return $(e(t))}catch(n){}}return null}var R=Array.isArray,O=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M={pending:!1,data:null,method:null,action:null},D=[],L=-1;function I(e){return{current:e}}function B(e){0>L||(e.current=D[L],D[L]=null,L--)}function F(e,t){L++,D[L]=e.current,e.current=t}var U=I(null),H=I(null),W=I(null),Y=I(null);function V(e,t){switch(F(W,t),F(H,e),F(U,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ad(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=od(t=ad(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(U),F(U,e)}function G(){B(U),B(H),B(W)}function Q(e){null!==e.memoizedState&&F(Y,e);var t=U.current,n=od(t,e.type);t!==n&&(F(H,e),F(U,n))}function q(e){H.current===e&&(B(U),B(H)),Y.current===e&&(B(Y),Qd._currentValue=M)}var K=Object.prototype.hasOwnProperty,X=r.unstable_scheduleCallback,Z=r.unstable_cancelCallback,J=r.unstable_shouldYield,ee=r.unstable_requestPaint,te=r.unstable_now,ne=r.unstable_getCurrentPriorityLevel,re=r.unstable_ImmediatePriority,ae=r.unstable_UserBlockingPriority,oe=r.unstable_NormalPriority,ie=r.unstable_LowPriority,le=r.unstable_IdlePriority,se=r.log,ce=r.unstable_setDisableYieldValue,ue=null,de=null;function pe(e){if("function"===typeof se&&ce(e),de&&"function"===typeof de.setStrictMode)try{de.setStrictMode(ue,e)}catch(t){}}var fe=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(he(e)/ge|0)|0},he=Math.log,ge=Math.LN2;var me=256,xe=4194304;function ve(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194048&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function be(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var a=0,o=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var l=134217727&r;return 0!==l?0!==(r=l&~o)?a=ve(r):0!==(i&=l)?a=ve(i):n||0!==(n=l&~e)&&(a=ve(n)):0!==(l=r&~o)?a=ve(l):0!==i?a=ve(i):n||0!==(n=r&~e)&&(a=ve(n)),0===a?0:0!==t&&t!==a&&0===(t&o)&&((o=a&-a)>=(n=t&-t)||32===o&&0!==(4194048&n))?t:a}function ye(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function we(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ke(){var e=me;return 0===(4194048&(me<<=1))&&(me=256),e}function Se(){var e=xe;return 0===(62914560&(xe<<=1))&&(xe=4194304),e}function je(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ae(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ce(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-fe(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|4194090&n}function Ee(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-fe(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}function Te(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ze(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Pe(){var e=_.p;return 0!==e?e:void 0===(e=window.event)?32:cp(e.type)}var Ne=Math.random().toString(36).slice(2),$e="__reactFiber$"+Ne,Re="__reactProps$"+Ne,Oe="__reactContainer$"+Ne,_e="__reactEvents$"+Ne,Me="__reactListeners$"+Ne,De="__reactHandles$"+Ne,Le="__reactResources$"+Ne,Ie="__reactMarker$"+Ne;function Be(e){delete e[$e],delete e[Re],delete e[_e],delete e[Me],delete e[De]}function Fe(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Oe]||n[$e]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=bd(e);null!==e;){if(n=e[$e])return n;e=bd(e)}return t}n=(e=n).parentNode}return null}function Ue(e){if(e=e[$e]||e[Oe]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function He(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(i(33))}function We(e){var t=e[Le];return t||(t=e[Le]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ye(e){e[Ie]=!0}var Ve=new Set,Ge={};function Qe(e,t){qe(e,t),qe(e+"Capture",t)}function qe(e,t){for(Ge[e]=t,e=0;e<t.length;e++)Ve.add(t[e])}var Ke,Xe,Ze=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Je={},et={};function tt(e,t,n){if(a=t,K.call(et,a)||!K.call(Je,a)&&(Ze.test(a)?et[a]=!0:(Je[a]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var a}function nt(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function rt(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function at(e){if(void 0===Ke)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ke=t&&t[1]||"",Xe=-1<n.stack.indexOf("\n    at")?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+Ke+e+Xe}var ot=!1;function it(e,t){if(!e||ot)return"";ot=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(a){var r=a}Reflect.construct(e,[],n)}else{try{n.call()}catch(o){r=o}e.call(n.prototype)}}else{try{throw Error()}catch(i){r=i}(n=e())&&"function"===typeof n.catch&&n.catch((function(){}))}}catch(l){if(l&&r&&"string"===typeof l.stack)return[l.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=r.DetermineComponentFrameRoot(),i=o[0],l=o[1];if(i&&l){var s=i.split("\n"),c=l.split("\n");for(a=r=0;r<s.length&&!s[r].includes("DetermineComponentFrameRoot");)r++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(r===s.length||a===c.length)for(r=s.length-1,a=c.length-1;1<=r&&0<=a&&s[r]!==c[a];)a--;for(;1<=r&&0<=a;r--,a--)if(s[r]!==c[a]){if(1!==r||1!==a)do{if(r--,0>--a||s[r]!==c[a]){var u="\n"+s[r].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=r&&0<=a);break}}}finally{ot=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?at(n):""}function lt(e){switch(e.tag){case 26:case 27:case 5:return at(e.type);case 16:return at("Lazy");case 13:return at("Suspense");case 19:return at("SuspenseList");case 0:case 15:return it(e.type,!1);case 11:return it(e.type.render,!1);case 1:return it(e.type,!0);case 31:return at("Activity");default:return""}}function st(e){try{var t="";do{t+=lt(e),e=e.return}while(e);return t}catch(n){return"\nError generating stack: "+n.message+"\n"+n.stack}}function ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ut(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function dt(e){e._valueTracker||(e._valueTracker=function(e){var t=ut(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function pt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ut(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ft(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var ht=/[\n"\\]/g;function gt(e){return e.replace(ht,(function(e){return"\\"+e.charCodeAt(0).toString(16)+" "}))}function mt(e,t,n,r,a,o,i,l){e.name="",null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i?e.type=i:e.removeAttribute("type"),null!=t?"number"===i?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ct(t)):e.value!==""+ct(t)&&(e.value=""+ct(t)):"submit"!==i&&"reset"!==i||e.removeAttribute("value"),null!=t?vt(e,i,ct(t)):null!=n?vt(e,i,ct(n)):null!=r&&e.removeAttribute("value"),null==a&&null!=o&&(e.defaultChecked=!!o),null!=a&&(e.checked=a&&"function"!==typeof a&&"symbol"!==typeof a),null!=l&&"function"!==typeof l&&"symbol"!==typeof l&&"boolean"!==typeof l?e.name=""+ct(l):e.removeAttribute("name")}function xt(e,t,n,r,a,o,i,l){if(null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.type=o),null!=t||null!=n){if(!("submit"!==o&&"reset"!==o||void 0!==t&&null!==t))return;n=null!=n?""+ct(n):"",t=null!=t?""+ct(t):n,l||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:a)&&"symbol"!==typeof r&&!!r,e.checked=l?e.checked:!!r,e.defaultChecked=!!r,null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i&&(e.name=i)}function vt(e,t,n){"number"===t&&ft(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function bt(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ct(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function yt(e,t,n){null==t||((t=""+ct(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+ct(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function wt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(i(92));if(R(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=ct(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r)}function kt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var St=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jt(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||St.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function At(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(i(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&jt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&jt(e,o,t[o])}function Ct(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Et=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Tt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zt(e){return Tt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Pt=null;function Nt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var $t=null,Rt=null;function Ot(e){var t=Ue(e);if(t&&(e=t.stateNode)){var n=e[Re]||null;e:switch(e=t.stateNode,t.type){case"input":if(mt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+gt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Re]||null;if(!a)throw Error(i(90));mt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&pt(r)}break e;case"textarea":yt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&bt(e,!!n.multiple,t,!1)}}}var _t=!1;function Mt(e,t,n){if(_t)return e(t,n);_t=!0;try{return e(t)}finally{if(_t=!1,(null!==$t||null!==Rt)&&(Fc(),$t&&(t=$t,e=Rt,Rt=$t=null,Ot(t),e)))for(t=0;t<e.length;t++)Ot(e[t])}}function Dt(e,t){var n=e.stateNode;if(null===n)return null;var r=n[Re]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(i(231,t,typeof n));return n}var Lt=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),It=!1;if(Lt)try{var Bt={};Object.defineProperty(Bt,"passive",{get:function(){It=!0}}),window.addEventListener("test",Bt,Bt),window.removeEventListener("test",Bt,Bt)}catch(Rp){It=!1}var Ft=null,Ut=null,Ht=null;function Wt(){if(Ht)return Ht;var e,t,n=Ut,r=n.length,a="value"in Ft?Ft.value:Ft.textContent,o=a.length;for(e=0;e<r&&n[e]===a[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===a[o-t];t++);return Ht=a.slice(e,1<t?1-t:void 0)}function Yt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Vt(){return!0}function Gt(){return!1}function Qt(e){function t(t,n,r,a,o){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(a):a[i]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?Vt:Gt,this.isPropagationStopped=Gt,this}return p(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Vt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Vt)},persist:function(){},isPersistent:Vt}),t}var qt,Kt,Xt,Zt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jt=Qt(Zt),en=p({},Zt,{view:0,detail:0}),tn=Qt(en),nn=p({},en,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xt&&(Xt&&"mousemove"===e.type?(qt=e.screenX-Xt.screenX,Kt=e.screenY-Xt.screenY):Kt=qt=0,Xt=e),qt)},movementY:function(e){return"movementY"in e?e.movementY:Kt}}),rn=Qt(nn),an=Qt(p({},nn,{dataTransfer:0})),on=Qt(p({},en,{relatedTarget:0})),ln=Qt(p({},Zt,{animationName:0,elapsedTime:0,pseudoElement:0})),sn=Qt(p({},Zt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),cn=Qt(p({},Zt,{data:0})),un={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=pn[e])&&!!t[e]}function hn(){return fn}var gn=Qt(p({},en,{key:function(e){if(e.key){var t=un[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Yt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?dn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hn,charCode:function(e){return"keypress"===e.type?Yt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Yt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),mn=Qt(p({},nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),xn=Qt(p({},en,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hn})),vn=Qt(p({},Zt,{propertyName:0,elapsedTime:0,pseudoElement:0})),bn=Qt(p({},nn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),yn=Qt(p({},Zt,{newState:0,oldState:0})),wn=[9,13,27,32],kn=Lt&&"CompositionEvent"in window,Sn=null;Lt&&"documentMode"in document&&(Sn=document.documentMode);var jn=Lt&&"TextEvent"in window&&!Sn,An=Lt&&(!kn||Sn&&8<Sn&&11>=Sn),Cn=String.fromCharCode(32),En=!1;function Tn(e,t){switch(e){case"keyup":return-1!==wn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Pn=!1;var Nn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $n(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Nn[e.type]:"textarea"===t}function Rn(e,t,n,r){$t?Rt?Rt.push(r):Rt=[r]:$t=r,0<(t=Wu(t,"onChange")).length&&(n=new Jt("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var On=null,_n=null;function Mn(e){Mu(e,0)}function Dn(e){if(pt(He(e)))return e}function Ln(e,t){if("change"===e)return t}var In=!1;if(Lt){var Bn;if(Lt){var Fn="oninput"in document;if(!Fn){var Un=document.createElement("div");Un.setAttribute("oninput","return;"),Fn="function"===typeof Un.oninput}Bn=Fn}else Bn=!1;In=Bn&&(!document.documentMode||9<document.documentMode)}function Hn(){On&&(On.detachEvent("onpropertychange",Wn),_n=On=null)}function Wn(e){if("value"===e.propertyName&&Dn(_n)){var t=[];Rn(t,_n,e,Nt(e)),Mt(Mn,t)}}function Yn(e,t,n){"focusin"===e?(Hn(),_n=n,(On=t).attachEvent("onpropertychange",Wn)):"focusout"===e&&Hn()}function Vn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Dn(_n)}function Gn(e,t){if("click"===e)return Dn(t)}function Qn(e,t){if("input"===e||"change"===e)return Dn(t)}var qn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function Kn(e,t){if(qn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!K.call(t,a)||!qn(e[a],t[a]))return!1}return!0}function Xn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zn(e,t){var n,r=Xn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Xn(r)}}function Jn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Jn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function er(e){for(var t=ft((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=ft((e=t.contentWindow).document)}return t}function tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var nr=Lt&&"documentMode"in document&&11>=document.documentMode,rr=null,ar=null,or=null,ir=!1;function lr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;ir||null==rr||rr!==ft(r)||("selectionStart"in(r=rr)&&tr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},or&&Kn(or,r)||(or=r,0<(r=Wu(ar,"onSelect")).length&&(t=new Jt("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function sr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cr={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionrun:sr("Transition","TransitionRun"),transitionstart:sr("Transition","TransitionStart"),transitioncancel:sr("Transition","TransitionCancel"),transitionend:sr("Transition","TransitionEnd")},ur={},dr={};function pr(e){if(ur[e])return ur[e];if(!cr[e])return e;var t,n=cr[e];for(t in n)if(n.hasOwnProperty(t)&&t in dr)return ur[e]=n[t];return e}Lt&&(dr=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);var fr=pr("animationend"),hr=pr("animationiteration"),gr=pr("animationstart"),mr=pr("transitionrun"),xr=pr("transitionstart"),vr=pr("transitioncancel"),br=pr("transitionend"),yr=new Map,wr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(e,t){yr.set(e,t),Qe(t,[e])}wr.push("scrollEnd");var Sr=new WeakMap;function jr(e,t){if("object"===typeof e&&null!==e){var n=Sr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:st(t)},Sr.set(e,t),t)}return{value:e,source:t,stack:st(t)}}var Ar=[],Cr=0,Er=0;function Tr(){for(var e=Cr,t=Er=Cr=0;t<e;){var n=Ar[t];Ar[t++]=null;var r=Ar[t];Ar[t++]=null;var a=Ar[t];Ar[t++]=null;var o=Ar[t];if(Ar[t++]=null,null!==r&&null!==a){var i=r.pending;null===i?a.next=a:(a.next=i.next,i.next=a),r.pending=a}0!==o&&$r(n,a,o)}}function zr(e,t,n,r){Ar[Cr++]=e,Ar[Cr++]=t,Ar[Cr++]=n,Ar[Cr++]=r,Er|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Pr(e,t,n,r){return zr(e,t,n,r),Rr(e)}function Nr(e,t){return zr(e,null,null,t),Rr(e)}function $r(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var a=!1,o=e.return;null!==o;)o.childLanes|=n,null!==(r=o.alternate)&&(r.childLanes|=n),22===o.tag&&(null===(e=o.stateNode)||1&e._visibility||(a=!0)),e=o,o=o.return;return 3===e.tag?(o=e.stateNode,a&&null!==t&&(a=31-fe(n),null===(r=(e=o.hiddenUpdates)[a])?e[a]=[t]:r.push(t),t.lane=536870912|n),o):null}function Rr(e){if(50<$c)throw $c=0,Rc=null,Error(i(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Or={};function _r(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mr(e,t,n,r){return new _r(e,t,n,r)}function Dr(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Lr(e,t){var n=e.alternate;return null===n?((n=Mr(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ir(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Br(e,t,n,r,a,o){var l=0;if(r=e,"function"===typeof e)Dr(e)&&(l=1);else if("string"===typeof e)l=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,U.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case E:return(e=Mr(31,n,t,a)).elementType=E,e.lanes=o,e;case m:return Fr(n.children,a,o,t);case x:l=8,a|=24;break;case v:return(e=Mr(12,n,t,2|a)).elementType=v,e.lanes=o,e;case S:return(e=Mr(13,n,t,a)).elementType=S,e.lanes=o,e;case j:return(e=Mr(19,n,t,a)).elementType=j,e.lanes=o,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case b:case w:l=10;break e;case y:l=9;break e;case k:l=11;break e;case A:l=14;break e;case C:l=16,r=null;break e}l=29,n=Error(i(130,null===e?"null":typeof e,"")),r=null}return(t=Mr(l,n,t,a)).elementType=e,t.type=r,t.lanes=o,t}function Fr(e,t,n,r){return(e=Mr(7,e,r,t)).lanes=n,e}function Ur(e,t,n){return(e=Mr(6,e,null,t)).lanes=n,e}function Hr(e,t,n){return(t=Mr(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Wr=[],Yr=0,Vr=null,Gr=0,Qr=[],qr=0,Kr=null,Xr=1,Zr="";function Jr(e,t){Wr[Yr++]=Gr,Wr[Yr++]=Vr,Vr=e,Gr=t}function ea(e,t,n){Qr[qr++]=Xr,Qr[qr++]=Zr,Qr[qr++]=Kr,Kr=e;var r=Xr;e=Zr;var a=32-fe(r)-1;r&=~(1<<a),n+=1;var o=32-fe(t)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,Xr=1<<32-fe(t)+a|n<<a|r,Zr=o+e}else Xr=1<<o|n<<a|r,Zr=e}function ta(e){null!==e.return&&(Jr(e,1),ea(e,1,0))}function na(e){for(;e===Vr;)Vr=Wr[--Yr],Wr[Yr]=null,Gr=Wr[--Yr],Wr[Yr]=null;for(;e===Kr;)Kr=Qr[--qr],Qr[qr]=null,Zr=Qr[--qr],Qr[qr]=null,Xr=Qr[--qr],Qr[qr]=null}var ra=null,aa=null,oa=!1,ia=null,la=!1,sa=Error(i(519));function ca(e){throw ga(jr(Error(i(418,"")),e)),sa}function ua(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[$e]=e,t[Re]=r,n){case"dialog":Du("cancel",t),Du("close",t);break;case"iframe":case"object":case"embed":Du("load",t);break;case"video":case"audio":for(n=0;n<Ou.length;n++)Du(Ou[n],t);break;case"source":Du("error",t);break;case"img":case"image":case"link":Du("error",t),Du("load",t);break;case"details":Du("toggle",t);break;case"input":Du("invalid",t),xt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),dt(t);break;case"select":Du("invalid",t);break;case"textarea":Du("invalid",t),wt(t,r.value,r.defaultValue,r.children),dt(t)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||Ku(t.textContent,n)?(null!=r.popover&&(Du("beforetoggle",t),Du("toggle",t)),null!=r.onScroll&&Du("scroll",t),null!=r.onScrollEnd&&Du("scrollend",t),null!=r.onClick&&(t.onclick=Xu),t=!0):t=!1,t||ca(e)}function da(e){for(ra=e.return;ra;)switch(ra.tag){case 5:case 13:return void(la=!1);case 27:case 3:return void(la=!0);default:ra=ra.return}}function pa(e){if(e!==ra)return!1;if(!oa)return da(e),oa=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||id(e.type,e.memoizedProps)),t=!t),t&&aa&&ca(e),da(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,n=0;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===n){aa=xd(e.nextSibling);break e}n--}else"$"!==t&&"$!"!==t&&"$?"!==t||n++;e=e.nextSibling}aa=null}}else 27===n?(n=aa,fd(e.type)?(e=vd,vd=null,aa=e):aa=n):aa=ra?xd(e.stateNode.nextSibling):null;return!0}function fa(){aa=ra=null,oa=!1}function ha(){var e=ia;return null!==e&&(null===bc?bc=e:bc.push.apply(bc,e),ia=null),e}function ga(e){null===ia?ia=[e]:ia.push(e)}var ma=I(null),xa=null,va=null;function ba(e,t,n){F(ma,t._currentValue),t._currentValue=n}function ya(e){e._currentValue=ma.current,B(ma)}function wa(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ka(e,t,n,r){var a=e.child;for(null!==a&&(a.return=e);null!==a;){var o=a.dependencies;if(null!==o){var l=a.child;o=o.firstContext;e:for(;null!==o;){var s=o;o=a;for(var c=0;c<t.length;c++)if(s.context===t[c]){o.lanes|=n,null!==(s=o.alternate)&&(s.lanes|=n),wa(o.return,n,e),r||(l=null);break e}o=s.next}}else if(18===a.tag){if(null===(l=a.return))throw Error(i(341));l.lanes|=n,null!==(o=l.alternate)&&(o.lanes|=n),wa(l,n,e),l=null}else l=a.child;if(null!==l)l.return=a;else for(l=a;null!==l;){if(l===e){l=null;break}if(null!==(a=l.sibling)){a.return=l.return,l=a;break}l=l.return}a=l}}function Sa(e,t,n,r){e=null;for(var a=t,o=!1;null!==a;){if(!o)if(0!==(524288&a.flags))o=!0;else if(0!==(262144&a.flags))break;if(10===a.tag){var l=a.alternate;if(null===l)throw Error(i(387));if(null!==(l=l.memoizedProps)){var s=a.type;qn(a.pendingProps.value,l.value)||(null!==e?e.push(s):e=[s])}}else if(a===Y.current){if(null===(l=a.alternate))throw Error(i(387));l.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(null!==e?e.push(Qd):e=[Qd])}a=a.return}null!==e&&ka(t,e,n,r),t.flags|=262144}function ja(e){for(e=e.firstContext;null!==e;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Aa(e){xa=e,va=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Ca(e){return Ta(xa,e)}function Ea(e,t){return null===xa&&Aa(e),Ta(e,t)}function Ta(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===va){if(null===e)throw Error(i(308));va=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else va=va.next=t;return n}var za="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach((function(e){return e()}))}},Pa=r.unstable_scheduleCallback,Na=r.unstable_NormalPriority,$a={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ra(){return{controller:new za,data:new Map,refCount:0}}function Oa(e){e.refCount--,0===e.refCount&&Pa(Na,(function(){e.controller.abort()}))}var _a=null,Ma=0,Da=0,La=null;function Ia(){if(0===--Ma&&null!==_a){null!==La&&(La.status="fulfilled");var e=_a;_a=null,Da=0,La=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Ba=O.S;O.S=function(e,t){"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===_a){var n=_a=[];Ma=0,Da=zu(),La={status:"pending",value:void 0,then:function(e){n.push(e)}}}Ma++,t.then(Ia,Ia)}(0,t),null!==Ba&&Ba(e,t)};var Fa=I(null);function Ua(){var e=Fa.current;return null!==e?e:rc.pooledCache}function Ha(e,t){F(Fa,null===t?Fa.current:t.pool)}function Wa(){var e=Ua();return null===e?null:{parent:$a._currentValue,pool:e}}var Ya=Error(i(460)),Va=Error(i(474)),Ga=Error(i(542)),Qa={then:function(){}};function qa(e){return"fulfilled"===(e=e.status)||"rejected"===e}function Ka(){}function Xa(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Ka,Ka),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw eo(e=t.reason),e;default:if("string"===typeof t.status)t.then(Ka,Ka);else{if(null!==(e=rc)&&100<e.shellSuspendCounter)throw Error(i(482));(e=t).status="pending",e.then((function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}}),(function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}}))}switch(t.status){case"fulfilled":return t.value;case"rejected":throw eo(e=t.reason),e}throw Za=t,Ya}}var Za=null;function Ja(){if(null===Za)throw Error(i(459));var e=Za;return Za=null,e}function eo(e){if(e===Ya||e===Ga)throw Error(i(483))}var to=!1;function no(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ro(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ao(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function oo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&nc)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,t=Rr(e),$r(e,null,n),t}return zr(e,r,t,n),Rr(e)}function io(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Ee(e,n)}}function lo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var i={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===o?a=o=i:o=o.next=i,n=n.next}while(null!==n);null===o?a=o=t:o=o.next=t}else a=o=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var so=!1;function co(){if(so){if(null!==La)throw La}}function uo(e,t,n,r){so=!1;var a=e.updateQueue;to=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,c=s.next;s.next=null,null===i?o=c:i.next=c,i=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==i&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==o){var d=a.baseState;for(i=0,u=c=s=null,l=o;;){var f=-536870913&l.lane,h=f!==l.lane;if(h?(oc&f)===f:(r&f)===f){0!==f&&f===Da&&(so=!0),null!==u&&(u=u.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var g=e,m=l;f=t;var x=n;switch(m.tag){case 1:if("function"===typeof(g=m.payload)){d=g.call(x,d,f);break e}d=g;break e;case 3:g.flags=-65537&g.flags|128;case 0:if(null===(f="function"===typeof(g=m.payload)?g.call(x,d,f):g)||void 0===f)break e;d=p({},d,f);break e;case 2:to=!0}}null!==(f=l.callback)&&(e.flags|=64,h&&(e.flags|=8192),null===(h=a.callbacks)?a.callbacks=[f]:h.push(f))}else h={lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=h,s=d):u=u.next=h,i|=f;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(h=l).next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}null===u&&(s=d),a.baseState=s,a.firstBaseUpdate=c,a.lastBaseUpdate=u,null===o&&(a.shared.lanes=0),fc|=i,e.lanes=i,e.memoizedState=d}}function po(e,t){if("function"!==typeof e)throw Error(i(191,e));e.call(t)}function fo(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)po(n[e],t)}var ho=I(null),go=I(0);function mo(e,t){F(go,e=dc),F(ho,t),dc=e|t.baseLanes}function xo(){F(go,dc),F(ho,ho.current)}function vo(){dc=go.current,B(ho),B(go)}var bo=0,yo=null,wo=null,ko=null,So=!1,jo=!1,Ao=!1,Co=0,Eo=0,To=null,zo=0;function Po(){throw Error(i(321))}function No(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qn(e[n],t[n]))return!1;return!0}function $o(e,t,n,r,a,o){return bo=o,yo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=null===e||null===e.memoizedState?Vi:Gi,Ao=!1,o=n(r,a),Ao=!1,jo&&(o=Oo(t,n,r,a)),Ro(e),o}function Ro(e){O.H=Yi;var t=null!==wo&&null!==wo.next;if(bo=0,ko=wo=yo=null,So=!1,Eo=0,To=null,t)throw Error(i(300));null===e||El||null!==(e=e.dependencies)&&ja(e)&&(El=!0)}function Oo(e,t,n,r){yo=e;var a=0;do{if(jo&&(To=null),Eo=0,jo=!1,25<=a)throw Error(i(301));if(a+=1,ko=wo=null,null!=e.updateQueue){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,null!=o.memoCache&&(o.memoCache.index=0)}O.H=Qi,o=t(n,r)}while(jo);return o}function _o(){var e=O.H,t=e.useState()[0];return t="function"===typeof t.then?Fo(t):t,e=e.useState()[0],(null!==wo?wo.memoizedState:null)!==e&&(yo.flags|=1024),t}function Mo(){var e=0!==Co;return Co=0,e}function Do(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Lo(e){if(So){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}So=!1}bo=0,ko=wo=yo=null,jo=!1,Eo=Co=0,To=null}function Io(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ko?yo.memoizedState=ko=e:ko=ko.next=e,ko}function Bo(){if(null===wo){var e=yo.alternate;e=null!==e?e.memoizedState:null}else e=wo.next;var t=null===ko?yo.memoizedState:ko.next;if(null!==t)ko=t,wo=e;else{if(null===e){if(null===yo.alternate)throw Error(i(467));throw Error(i(310))}e={memoizedState:(wo=e).memoizedState,baseState:wo.baseState,baseQueue:wo.baseQueue,queue:wo.queue,next:null},null===ko?yo.memoizedState=ko=e:ko=ko.next=e}return ko}function Fo(e){var t=Eo;return Eo+=1,null===To&&(To=[]),e=Xa(To,e,t),t=yo,null===(null===ko?t.memoizedState:ko.next)&&(t=t.alternate,O.H=null===t||null===t.memoizedState?Vi:Gi),e}function Uo(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return Fo(e);if(e.$$typeof===w)return Ca(e)}throw Error(i(438,String(e)))}function Ho(e){var t=null,n=yo.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=yo.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map((function(e){return e.slice()})),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},yo.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=T;return t.index++,n}function Wo(e,t){return"function"===typeof t?t(e):t}function Yo(e){return Vo(Bo(),wo,e)}function Vo(e,t,n){var r=e.queue;if(null===r)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(null!==o){if(null!==a){var l=a.next;a.next=o.next,o.next=l}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,null===a)e.memoizedState=o;else{var s=l=null,c=null,u=t=a.next,d=!1;do{var p=-536870913&u.lane;if(p!==u.lane?(oc&p)===p:(bo&p)===p){var f=u.revertLane;if(0===f)null!==c&&(c=c.next={lane:0,revertLane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),p===Da&&(d=!0);else{if((bo&f)===f){u=u.next,f===Da&&(d=!0);continue}p={lane:0,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=p,l=o):c=c.next=p,yo.lanes|=f,fc|=f}p=u.action,Ao&&n(o,p),o=u.hasEagerState?u.eagerState:n(o,p)}else f={lane:p,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=f,l=o):c=c.next=f,yo.lanes|=p,fc|=p;u=u.next}while(null!==u&&u!==t);if(null===c?l=o:c.next=s,!qn(o,e.memoizedState)&&(El=!0,d&&null!==(n=La)))throw n;e.memoizedState=o,e.baseState=l,e.baseQueue=c,r.lastRenderedState=o}return null===a&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Go(e){var t=Bo(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{o=e(o,l.action),l=l.next}while(l!==a);qn(o,t.memoizedState)||(El=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Qo(e,t,n){var r=yo,a=Bo(),o=oa;if(o){if(void 0===n)throw Error(i(407));n=n()}else n=t();var l=!qn((wo||a).memoizedState,n);if(l&&(a.memoizedState=n,El=!0),a=a.queue,xi(2048,8,Xo.bind(null,r,a,e),[e]),a.getSnapshot!==t||l||null!==ko&&1&ko.memoizedState.tag){if(r.flags|=2048,hi(9,{destroy:void 0,resource:void 0},Ko.bind(null,r,a,n,t),null),null===rc)throw Error(i(349));o||0!==(124&bo)||qo(r,t,n)}return n}function qo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=yo.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},yo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ko(e,t,n,r){t.value=n,t.getSnapshot=r,Zo(t)&&Jo(e)}function Xo(e,t,n){return n((function(){Zo(t)&&Jo(e)}))}function Zo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qn(e,n)}catch(r){return!0}}function Jo(e){var t=Nr(e,2);null!==t&&Mc(t,e,2)}function ei(e){var t=Io();if("function"===typeof e){var n=e;if(e=n(),Ao){pe(!0);try{n()}finally{pe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:e},t}function ti(e,t,n,r){return e.baseState=n,Vo(e,wo,"function"===typeof r?r:Wo)}function ni(e,t,n,r,a){if(Ui(e))throw Error(i(485));if(null!==(e=t.action)){var o={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};null!==O.T?n(!0):o.isTransition=!1,r(o),null===(n=t.pending)?(o.next=t.pending=o,ri(t,o)):(o.next=n.next,t.pending=n.next=o)}}function ri(e,t){var n=t.action,r=t.payload,a=e.state;if(t.isTransition){var o=O.T,i={};O.T=i;try{var l=n(a,r),s=O.S;null!==s&&s(i,l),ai(e,t,l)}catch(c){ii(e,t,c)}finally{O.T=o}}else try{ai(e,t,o=n(a,r))}catch(u){ii(e,t,u)}}function ai(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then((function(n){oi(e,t,n)}),(function(n){return ii(e,t,n)})):oi(e,t,n)}function oi(e,t,n){t.status="fulfilled",t.value=n,li(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,ri(e,n)))}function ii(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,li(t),t=t.next}while(t!==r)}e.action=null}function li(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function si(e,t){return t}function ci(e,t){if(oa){var n=rc.formState;if(null!==n){e:{var r=yo;if(oa){if(aa){t:{for(var a=aa,o=la;8!==a.nodeType;){if(!o){a=null;break t}if(null===(a=xd(a.nextSibling))){a=null;break t}}a="F!"===(o=a.data)||"F"===o?a:null}if(a){aa=xd(a.nextSibling),r="F!"===a.data;break e}}ca(r)}r=!1}r&&(t=n[0])}}return(n=Io()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:si,lastRenderedState:t},n.queue=r,n=Ii.bind(null,yo,r),r.dispatch=n,r=ei(!1),o=Fi.bind(null,yo,!1,r.queue),a={state:t,dispatch:null,action:e,pending:null},(r=Io()).queue=a,n=ni.bind(null,yo,a,o,n),a.dispatch=n,r.memoizedState=e,[t,n,!1]}function ui(e){return di(Bo(),wo,e)}function di(e,t,n){if(t=Vo(e,t,si)[0],e=Yo(Wo)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var r=Fo(t)}catch(i){if(i===Ya)throw Ga;throw i}else r=t;var a=(t=Bo()).queue,o=a.dispatch;return n!==t.memoizedState&&(yo.flags|=2048,hi(9,{destroy:void 0,resource:void 0},pi.bind(null,a,n),null)),[r,o,e]}function pi(e,t){e.action=t}function fi(e){var t=Bo(),n=wo;if(null!==n)return di(t,n,e);Bo(),t=t.memoizedState;var r=(n=Bo()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function hi(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=yo.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},yo.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function gi(){return Bo().memoizedState}function mi(e,t,n,r){var a=Io();r=void 0===r?null:r,yo.flags|=e,a.memoizedState=hi(1|t,{destroy:void 0,resource:void 0},n,r)}function xi(e,t,n,r){var a=Bo();r=void 0===r?null:r;var o=a.memoizedState.inst;null!==wo&&null!==r&&No(r,wo.memoizedState.deps)?a.memoizedState=hi(t,o,n,r):(yo.flags|=e,a.memoizedState=hi(1|t,o,n,r))}function vi(e,t){mi(8390656,8,e,t)}function bi(e,t){xi(2048,8,e,t)}function yi(e,t){return xi(4,2,e,t)}function wi(e,t){return xi(4,4,e,t)}function ki(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function Si(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,xi(4,4,ki.bind(null,t,e),n)}function ji(){}function Ai(e,t){var n=Bo();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&No(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ci(e,t){var n=Bo();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&No(t,r[1]))return r[0];if(r=e(),Ao){pe(!0);try{e()}finally{pe(!1)}}return n.memoizedState=[r,t],r}function Ei(e,t,n){return void 0===n||0!==(1073741824&bo)?e.memoizedState=t:(e.memoizedState=n,e=_c(),yo.lanes|=e,fc|=e,n)}function Ti(e,t,n,r){return qn(n,t)?n:null!==ho.current?(e=Ei(e,n,r),qn(e,t)||(El=!0),e):0===(42&bo)?(El=!0,e.memoizedState=n):(e=_c(),yo.lanes|=e,fc|=e,t)}function zi(e,t,n,r,a){var o=_.p;_.p=0!==o&&8>o?o:8;var i=O.T,l={};O.T=l,Fi(e,!1,t,n);try{var s=a(),c=O.S;if(null!==c&&c(l,s),null!==s&&"object"===typeof s&&"function"===typeof s.then)Bi(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then((function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)}),(function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)})),r}(s,r),Oc());else Bi(e,t,r,Oc())}catch(u){Bi(e,t,{then:function(){},status:"rejected",reason:u},Oc())}finally{_.p=o,O.T=i}}function Pi(){}function Ni(e,t,n,r){if(5!==e.tag)throw Error(i(476));var a=$i(e).queue;zi(e,a,t,M,null===n?Pi:function(){return Ri(e),n(r)})}function $i(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:M,baseState:M,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:M},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function Ri(e){Bi(e,$i(e).next.queue,{},Oc())}function Oi(){return Ca(Qd)}function _i(){return Bo().memoizedState}function Mi(){return Bo().memoizedState}function Di(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Oc(),r=oo(t,e=ao(n),n);return null!==r&&(Mc(r,t,n),io(r,t,n)),t={cache:Ra()},void(e.payload=t)}t=t.return}}function Li(e,t,n){var r=Oc();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Ui(e)?Hi(t,n):null!==(n=Pr(e,t,n,r))&&(Mc(n,e,r),Wi(n,t,r))}function Ii(e,t,n){Bi(e,t,n,Oc())}function Bi(e,t,n,r){var a={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ui(e))Hi(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=o(i,n);if(a.hasEagerState=!0,a.eagerState=l,qn(l,i))return zr(e,t,a,0),null===rc&&Tr(),!1}catch(s){}if(null!==(n=Pr(e,t,a,r)))return Mc(n,e,r),Wi(n,t,r),!0}return!1}function Fi(e,t,n,r){if(r={lane:2,revertLane:zu(),action:r,hasEagerState:!1,eagerState:null,next:null},Ui(e)){if(t)throw Error(i(479))}else null!==(t=Pr(e,n,r,2))&&Mc(t,e,2)}function Ui(e){var t=e.alternate;return e===yo||null!==t&&t===yo}function Hi(e,t){jo=So=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wi(e,t,n){if(0!==(4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Ee(e,n)}}var Yi={readContext:Ca,use:Uo,useCallback:Po,useContext:Po,useEffect:Po,useImperativeHandle:Po,useLayoutEffect:Po,useInsertionEffect:Po,useMemo:Po,useReducer:Po,useRef:Po,useState:Po,useDebugValue:Po,useDeferredValue:Po,useTransition:Po,useSyncExternalStore:Po,useId:Po,useHostTransitionStatus:Po,useFormState:Po,useActionState:Po,useOptimistic:Po,useMemoCache:Po,useCacheRefresh:Po},Vi={readContext:Ca,use:Uo,useCallback:function(e,t){return Io().memoizedState=[e,void 0===t?null:t],e},useContext:Ca,useEffect:vi,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,mi(4194308,4,ki.bind(null,t,e),n)},useLayoutEffect:function(e,t){return mi(4194308,4,e,t)},useInsertionEffect:function(e,t){mi(4,2,e,t)},useMemo:function(e,t){var n=Io();t=void 0===t?null:t;var r=e();if(Ao){pe(!0);try{e()}finally{pe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Io();if(void 0!==n){var a=n(t);if(Ao){pe(!0);try{n(t)}finally{pe(!1)}}}else a=t;return r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=Li.bind(null,yo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Io().memoizedState=e},useState:function(e){var t=(e=ei(e)).queue,n=Ii.bind(null,yo,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ji,useDeferredValue:function(e,t){return Ei(Io(),e,t)},useTransition:function(){var e=ei(!1);return e=zi.bind(null,yo,e.queue,!0,!1),Io().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=yo,a=Io();if(oa){if(void 0===n)throw Error(i(407));n=n()}else{if(n=t(),null===rc)throw Error(i(349));0!==(124&oc)||qo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,vi(Xo.bind(null,r,o,e),[e]),r.flags|=2048,hi(9,{destroy:void 0,resource:void 0},Ko.bind(null,r,o,n,t),null),n},useId:function(){var e=Io(),t=rc.identifierPrefix;if(oa){var n=Zr;t="\xab"+t+"R"+(n=(Xr&~(1<<32-fe(Xr)-1)).toString(32)+n),0<(n=Co++)&&(t+="H"+n.toString(32)),t+="\xbb"}else t="\xab"+t+"r"+(n=zo++).toString(32)+"\xbb";return e.memoizedState=t},useHostTransitionStatus:Oi,useFormState:ci,useActionState:ci,useOptimistic:function(e){var t=Io();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fi.bind(null,yo,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ho,useCacheRefresh:function(){return Io().memoizedState=Di.bind(null,yo)}},Gi={readContext:Ca,use:Uo,useCallback:Ai,useContext:Ca,useEffect:bi,useImperativeHandle:Si,useInsertionEffect:yi,useLayoutEffect:wi,useMemo:Ci,useReducer:Yo,useRef:gi,useState:function(){return Yo(Wo)},useDebugValue:ji,useDeferredValue:function(e,t){return Ti(Bo(),wo.memoizedState,e,t)},useTransition:function(){var e=Yo(Wo)[0],t=Bo().memoizedState;return["boolean"===typeof e?e:Fo(e),t]},useSyncExternalStore:Qo,useId:_i,useHostTransitionStatus:Oi,useFormState:ui,useActionState:ui,useOptimistic:function(e,t){return ti(Bo(),0,e,t)},useMemoCache:Ho,useCacheRefresh:Mi},Qi={readContext:Ca,use:Uo,useCallback:Ai,useContext:Ca,useEffect:bi,useImperativeHandle:Si,useInsertionEffect:yi,useLayoutEffect:wi,useMemo:Ci,useReducer:Go,useRef:gi,useState:function(){return Go(Wo)},useDebugValue:ji,useDeferredValue:function(e,t){var n=Bo();return null===wo?Ei(n,e,t):Ti(n,wo.memoizedState,e,t)},useTransition:function(){var e=Go(Wo)[0],t=Bo().memoizedState;return["boolean"===typeof e?e:Fo(e),t]},useSyncExternalStore:Qo,useId:_i,useHostTransitionStatus:Oi,useFormState:fi,useActionState:fi,useOptimistic:function(e,t){var n=Bo();return null!==wo?ti(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ho,useCacheRefresh:Mi},qi=null,Ki=0;function Xi(e){var t=Ki;return Ki+=1,null===qi&&(qi=[]),Xa(qi,e,t)}function Zi(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function Ji(e,t){if(t.$$typeof===f)throw Error(i(525));throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function el(e){return(0,e._init)(e._payload)}function tl(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function a(e,t){return(e=Lr(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Ur(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function c(e,t,n,r){var o=n.type;return o===m?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===C&&el(o)===t.type)?(Zi(t=a(t,n.props),n),t.return=e,t):(Zi(t=Br(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Hr(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Fr(n,e.mode,r,o)).return=e,t):((t=a(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Ur(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case h:return Zi(n=Br(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case g:return(t=Hr(t,e.mode,n)).return=e,t;case C:return p(e,t=(0,t._init)(t._payload),n)}if(R(t)||P(t))return(t=Fr(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return p(e,Xi(t),n);if(t.$$typeof===w)return p(e,Ea(e,t),n);Ji(e,t)}return null}function f(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case h:return n.key===a?c(e,t,n,r):null;case g:return n.key===a?u(e,t,n,r):null;case C:return f(e,t,n=(a=n._init)(n._payload),r)}if(R(n)||P(n))return null!==a?null:d(e,t,n,r,null);if("function"===typeof n.then)return f(e,t,Xi(n),r);if(n.$$typeof===w)return f(e,t,Ea(e,n),r);Ji(e,n)}return null}function x(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case h:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case g:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case C:return x(e,t,n,r=(0,r._init)(r._payload),a)}if(R(r)||P(r))return d(t,e=e.get(n)||null,r,a,null);if("function"===typeof r.then)return x(e,t,n,Xi(r),a);if(r.$$typeof===w)return x(e,t,n,Ea(t,r),a);Ji(t,r)}return null}function v(s,c,u,d){if("object"===typeof u&&null!==u&&u.type===m&&null===u.key&&(u=u.props.children),"object"===typeof u&&null!==u){switch(u.$$typeof){case h:e:{for(var b=u.key;null!==c;){if(c.key===b){if((b=u.type)===m){if(7===c.tag){n(s,c.sibling),(d=a(c,u.props.children)).return=s,s=d;break e}}else if(c.elementType===b||"object"===typeof b&&null!==b&&b.$$typeof===C&&el(b)===c.type){n(s,c.sibling),Zi(d=a(c,u.props),u),d.return=s,s=d;break e}n(s,c);break}t(s,c),c=c.sibling}u.type===m?((d=Fr(u.props.children,s.mode,d,u.key)).return=s,s=d):(Zi(d=Br(u.type,u.key,u.props,null,s.mode,d),u),d.return=s,s=d)}return l(s);case g:e:{for(b=u.key;null!==c;){if(c.key===b){if(4===c.tag&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){n(s,c.sibling),(d=a(c,u.children||[])).return=s,s=d;break e}n(s,c);break}t(s,c),c=c.sibling}(d=Hr(u,s.mode,d)).return=s,s=d}return l(s);case C:return v(s,c,u=(b=u._init)(u._payload),d)}if(R(u))return function(a,i,l,s){for(var c=null,u=null,d=i,h=i=0,g=null;null!==d&&h<l.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var m=f(a,d,l[h],s);if(null===m){null===d&&(d=g);break}e&&d&&null===m.alternate&&t(a,d),i=o(m,i,h),null===u?c=m:u.sibling=m,u=m,d=g}if(h===l.length)return n(a,d),oa&&Jr(a,h),c;if(null===d){for(;h<l.length;h++)null!==(d=p(a,l[h],s))&&(i=o(d,i,h),null===u?c=d:u.sibling=d,u=d);return oa&&Jr(a,h),c}for(d=r(d);h<l.length;h++)null!==(g=x(d,a,h,l[h],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?h:g.key),i=o(g,i,h),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach((function(e){return t(a,e)})),oa&&Jr(a,h),c}(s,c,u,d);if(P(u)){if("function"!==typeof(b=P(u)))throw Error(i(150));return function(a,l,s,c){if(null==s)throw Error(i(151));for(var u=null,d=null,h=l,g=l=0,m=null,v=s.next();null!==h&&!v.done;g++,v=s.next()){h.index>g?(m=h,h=null):m=h.sibling;var b=f(a,h,v.value,c);if(null===b){null===h&&(h=m);break}e&&h&&null===b.alternate&&t(a,h),l=o(b,l,g),null===d?u=b:d.sibling=b,d=b,h=m}if(v.done)return n(a,h),oa&&Jr(a,g),u;if(null===h){for(;!v.done;g++,v=s.next())null!==(v=p(a,v.value,c))&&(l=o(v,l,g),null===d?u=v:d.sibling=v,d=v);return oa&&Jr(a,g),u}for(h=r(h);!v.done;g++,v=s.next())null!==(v=x(h,a,g,v.value,c))&&(e&&null!==v.alternate&&h.delete(null===v.key?g:v.key),l=o(v,l,g),null===d?u=v:d.sibling=v,d=v);return e&&h.forEach((function(e){return t(a,e)})),oa&&Jr(a,g),u}(s,c,u=b.call(u),d)}if("function"===typeof u.then)return v(s,c,Xi(u),d);if(u.$$typeof===w)return v(s,c,Ea(s,u),d);Ji(s,u)}return"string"===typeof u&&""!==u||"number"===typeof u||"bigint"===typeof u?(u=""+u,null!==c&&6===c.tag?(n(s,c.sibling),(d=a(c,u)).return=s,s=d):(n(s,c),(d=Ur(u,s.mode,d)).return=s,s=d),l(s)):n(s,c)}return function(e,t,n,r){try{Ki=0;var a=v(e,t,n,r);return qi=null,a}catch(i){if(i===Ya||i===Ga)throw i;var o=Mr(29,i,null,e.mode);return o.lanes=r,o.return=e,o}}}var nl=tl(!0),rl=tl(!1),al=I(null),ol=null;function il(e){var t=e.alternate;F(ul,1&ul.current),F(al,e),null===ol&&(null===t||null!==ho.current||null!==t.memoizedState)&&(ol=e)}function ll(e){if(22===e.tag){if(F(ul,ul.current),F(al,e),null===ol){var t=e.alternate;null!==t&&null!==t.memoizedState&&(ol=e)}}else sl()}function sl(){F(ul,ul.current),F(al,al.current)}function cl(e){B(al),ol===e&&(ol=null),B(ul)}var ul=I(0);function dl(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||md(n)))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function pl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:p({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var fl={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Oc(),a=ao(r);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=oo(e,a,r))&&(Mc(t,e,r),io(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Oc(),a=ao(r);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=oo(e,a,r))&&(Mc(t,e,r),io(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Oc(),r=ao(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=oo(e,r,n))&&(Mc(t,e,n),io(t,e,n))}};function hl(e,t,n,r,a,o,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,i):!t.prototype||!t.prototype.isPureReactComponent||(!Kn(n,r)||!Kn(a,o))}function gl(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fl.enqueueReplaceState(t,t.state,null)}function ml(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var a in n===t&&(n=p({},n)),e)void 0===n[a]&&(n[a]=e[a]);return n}var xl="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function vl(e){xl(e)}function bl(e){console.error(e)}function yl(e){xl(e)}function wl(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout((function(){throw n}))}}function kl(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout((function(){throw r}))}}function Sl(e,t,n){return(n=ao(n)).tag=3,n.payload={element:null},n.callback=function(){wl(e,t)},n}function jl(e){return(e=ao(e)).tag=3,e}function Al(e,t,n,r){var a=n.type.getDerivedStateFromError;if("function"===typeof a){var o=r.value;e.payload=function(){return a(o)},e.callback=function(){kl(t,n,r)}}var i=n.stateNode;null!==i&&"function"===typeof i.componentDidCatch&&(e.callback=function(){kl(t,n,r),"function"!==typeof a&&(null===jc?jc=new Set([this]):jc.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Cl=Error(i(461)),El=!1;function Tl(e,t,n,r){t.child=null===e?rl(t,null,n,r):nl(t,e.child,n,r)}function zl(e,t,n,r,a){n=n.render;var o=t.ref;if("ref"in r){var i={};for(var l in r)"ref"!==l&&(i[l]=r[l])}else i=r;return Aa(t),r=$o(e,t,n,i,o,a),l=Mo(),null===e||El?(oa&&l&&ta(t),t.flags|=1,Tl(e,t,r,a),t.child):(Do(e,t,a),ql(e,t,a))}function Pl(e,t,n,r,a){if(null===e){var o=n.type;return"function"!==typeof o||Dr(o)||void 0!==o.defaultProps||null!==n.compare?((e=Br(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Nl(e,t,o,r,a))}if(o=e.child,!Kl(e,a)){var i=o.memoizedProps;if((n=null!==(n=n.compare)?n:Kn)(i,r)&&e.ref===t.ref)return ql(e,t,a)}return t.flags|=1,(e=Lr(o,r)).ref=t.ref,e.return=t,t.child=e}function Nl(e,t,n,r,a){if(null!==e){var o=e.memoizedProps;if(Kn(o,r)&&e.ref===t.ref){if(El=!1,t.pendingProps=r=o,!Kl(e,a))return t.lanes=e.lanes,ql(e,t,a);0!==(131072&e.flags)&&(El=!0)}}return _l(e,t,n,r,a)}function $l(e,t,n){var r=t.pendingProps,a=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode){if(0!==(128&t.flags)){if(r=null!==o?o.baseLanes|n:n,null!==e){for(a=t.child=e.child,o=0;null!==a;)o=o|a.lanes|a.childLanes,a=a.sibling;t.childLanes=o&~r}else t.childLanes=0,t.child=null;return Rl(e,t,r,n)}if(0===(536870912&n))return t.lanes=t.childLanes=536870912,Rl(e,t,null!==o?o.baseLanes|n:n,n);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Ha(0,null!==o?o.cachePool:null),null!==o?mo(t,o):xo(),ll(t)}else null!==o?(Ha(0,o.cachePool),mo(t,o),sl(),t.memoizedState=null):(null!==e&&Ha(0,null),xo(),sl());return Tl(e,t,a,n),t.child}function Rl(e,t,n,r){var a=Ua();return a=null===a?null:{parent:$a._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},null!==e&&Ha(0,null),xo(),ll(t),null!==e&&Sa(e,t,r,!0),null}function Ol(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(i(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function _l(e,t,n,r,a){return Aa(t),n=$o(e,t,n,r,void 0,a),r=Mo(),null===e||El?(oa&&r&&ta(t),t.flags|=1,Tl(e,t,n,a),t.child):(Do(e,t,a),ql(e,t,a))}function Ml(e,t,n,r,a,o){return Aa(t),t.updateQueue=null,n=Oo(t,r,n,a),Ro(e),r=Mo(),null===e||El?(oa&&r&&ta(t),t.flags|=1,Tl(e,t,n,o),t.child):(Do(e,t,o),ql(e,t,o))}function Dl(e,t,n,r,a){if(Aa(t),null===t.stateNode){var o=Or,i=n.contextType;"object"===typeof i&&null!==i&&(o=Ca(i)),o=new n(r,o),t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,o.updater=fl,t.stateNode=o,o._reactInternals=t,(o=t.stateNode).props=r,o.state=t.memoizedState,o.refs={},no(t),i=n.contextType,o.context="object"===typeof i&&null!==i?Ca(i):Or,o.state=t.memoizedState,"function"===typeof(i=n.getDerivedStateFromProps)&&(pl(t,n,i,r),o.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(i=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),i!==o.state&&fl.enqueueReplaceState(o,o.state,null),uo(t,r,o,a),co(),o.state=t.memoizedState),"function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){o=t.stateNode;var l=t.memoizedProps,s=ml(n,l);o.props=s;var c=o.context,u=n.contextType;i=Or,"object"===typeof u&&null!==u&&(i=Ca(u));var d=n.getDerivedStateFromProps;u="function"===typeof d||"function"===typeof o.getSnapshotBeforeUpdate,l=t.pendingProps!==l,u||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l||c!==i)&&gl(t,o,r,i),to=!1;var p=t.memoizedState;o.state=p,uo(t,r,o,a),co(),c=t.memoizedState,l||p!==c||to?("function"===typeof d&&(pl(t,n,d,r),c=t.memoizedState),(s=to||hl(t,n,s,r,p,c,i))?(u||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=i,r=s):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ro(e,t),u=ml(n,i=t.memoizedProps),o.props=u,d=t.pendingProps,p=o.context,c=n.contextType,s=Or,"object"===typeof c&&null!==c&&(s=Ca(c)),(c="function"===typeof(l=n.getDerivedStateFromProps)||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(i!==d||p!==s)&&gl(t,o,r,s),to=!1,p=t.memoizedState,o.state=p,uo(t,r,o,a),co();var f=t.memoizedState;i!==d||p!==f||to||null!==e&&null!==e.dependencies&&ja(e.dependencies)?("function"===typeof l&&(pl(t,n,l,r),f=t.memoizedState),(u=to||hl(t,n,u,r,p,f,s)||null!==e&&null!==e.dependencies&&ja(e.dependencies))?(c||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,f,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,f,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=f),o.props=r,o.state=f,o.context=s,r=u):("function"!==typeof o.componentDidUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return o=r,Ol(e,t),r=0!==(128&t.flags),o||r?(o=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:o.render(),t.flags|=1,null!==e&&r?(t.child=nl(t,e.child,null,a),t.child=nl(t,null,n,a)):Tl(e,t,n,a),t.memoizedState=o.state,e=t.child):e=ql(e,t,a),e}function Ll(e,t,n,r){return fa(),t.flags|=256,Tl(e,t,n,r),t.child}var Il={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bl(e){return{baseLanes:e,cachePool:Wa()}}function Fl(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=mc),e}function Ul(e,t,n){var r,a=t.pendingProps,o=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&ul.current)),r&&(o=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(oa){if(o?il(t):sl(),oa){var s,c=aa;if(s=c){e:{for(s=c,c=la;8!==s.nodeType;){if(!c){c=null;break e}if(null===(s=xd(s.nextSibling))){c=null;break e}}c=s}null!==c?(t.memoizedState={dehydrated:c,treeContext:null!==Kr?{id:Xr,overflow:Zr}:null,retryLane:536870912,hydrationErrors:null},(s=Mr(18,null,null,0)).stateNode=c,s.return=t,t.child=s,ra=t,aa=null,s=!0):s=!1}s||ca(t)}if(null!==(c=t.memoizedState)&&null!==(c=c.dehydrated))return md(c)?t.lanes=32:t.lanes=536870912,null;cl(t)}return c=a.children,a=a.fallback,o?(sl(),c=Wl({mode:"hidden",children:c},o=t.mode),a=Fr(a,o,n,null),c.return=t,a.return=t,c.sibling=a,t.child=c,(o=t.child).memoizedState=Bl(n),o.childLanes=Fl(e,r,n),t.memoizedState=Il,a):(il(t),Hl(t,c))}if(null!==(s=e.memoizedState)&&null!==(c=s.dehydrated)){if(l)256&t.flags?(il(t),t.flags&=-257,t=Yl(e,t,n)):null!==t.memoizedState?(sl(),t.child=e.child,t.flags|=128,t=null):(sl(),o=a.fallback,c=t.mode,a=Wl({mode:"visible",children:a.children},c),(o=Fr(o,c,n,null)).flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,nl(t,e.child,null,n),(a=t.child).memoizedState=Bl(n),a.childLanes=Fl(e,r,n),t.memoizedState=Il,t=o);else if(il(t),md(c)){if(r=c.nextSibling&&c.nextSibling.dataset)var u=r.dgst;r=u,(a=Error(i(419))).stack="",a.digest=r,ga({value:a,source:null,stack:null}),t=Yl(e,t,n)}else if(El||Sa(e,t,n,!1),r=0!==(n&e.childLanes),El||r){if(null!==(r=rc)&&(0!==(a=0!==((a=0!==(42&(a=n&-n))?1:Te(a))&(r.suspendedLanes|n))?0:a)&&a!==s.retryLane))throw s.retryLane=a,Nr(e,a),Mc(r,e,a),Cl;"$?"===c.data||Gc(),t=Yl(e,t,n)}else"$?"===c.data?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,aa=xd(c.nextSibling),ra=t,oa=!0,ia=null,la=!1,null!==e&&(Qr[qr++]=Xr,Qr[qr++]=Zr,Qr[qr++]=Kr,Xr=e.id,Zr=e.overflow,Kr=t),(t=Hl(t,a.children)).flags|=4096);return t}return o?(sl(),o=a.fallback,c=t.mode,u=(s=e.child).sibling,(a=Lr(s,{mode:"hidden",children:a.children})).subtreeFlags=65011712&s.subtreeFlags,null!==u?o=Lr(u,o):(o=Fr(o,c,n,null)).flags|=2,o.return=t,a.return=t,a.sibling=o,t.child=a,a=o,o=t.child,null===(c=e.child.memoizedState)?c=Bl(n):(null!==(s=c.cachePool)?(u=$a._currentValue,s=s.parent!==u?{parent:u,pool:u}:s):s=Wa(),c={baseLanes:c.baseLanes|n,cachePool:s}),o.memoizedState=c,o.childLanes=Fl(e,r,n),t.memoizedState=Il,a):(il(t),e=(n=e.child).sibling,(n=Lr(n,{mode:"visible",children:a.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Hl(e,t){return(t=Wl({mode:"visible",children:t},e.mode)).return=e,e.child=t}function Wl(e,t){return(e=Mr(22,e,null,t)).lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Yl(e,t,n){return nl(t,e.child,null,n),(e=Hl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Vl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),wa(e.return,t,n)}function Gl(e,t,n,r,a){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function Ql(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(Tl(e,t,r.children,n),0!==(2&(r=ul.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Vl(e,n,t);else if(19===e.tag)Vl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(F(ul,r),a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===dl(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Gl(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===dl(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Gl(t,!0,n,null,o);break;case"together":Gl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ql(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),fc|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(Sa(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=Lr(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Lr(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Kl(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!ja(e))}function Xl(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)El=!0;else{if(!Kl(e,n)&&0===(128&t.flags))return El=!1,function(e,t,n){switch(t.tag){case 3:V(t,t.stateNode.containerInfo),ba(0,$a,e.memoizedState.cache),fa();break;case 27:case 5:Q(t);break;case 4:V(t,t.stateNode.containerInfo);break;case 10:ba(0,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(il(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Ul(e,t,n):(il(t),null!==(e=ql(e,t,n))?e.sibling:null);il(t);break;case 19:var a=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||(Sa(e,t,n,!1),r=0!==(n&t.childLanes)),a){if(r)return Ql(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),F(ul,ul.current),r)break;return null;case 22:case 23:return t.lanes=0,$l(e,t,n);case 24:ba(0,$a,e.memoizedState.cache)}return ql(e,t,n)}(e,t,n);El=0!==(131072&e.flags)}else El=!1,oa&&0!==(1048576&t.flags)&&ea(t,Gr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,a=r._init;if(r=a(r._payload),t.type=r,"function"!==typeof r){if(void 0!==r&&null!==r){if((a=r.$$typeof)===k){t.tag=11,t=zl(null,t,r,e,n);break e}if(a===A){t.tag=14,t=Pl(null,t,r,e,n);break e}}throw t=$(r)||r,Error(i(306,t,""))}Dr(r)?(e=ml(r,e),t.tag=1,t=Dl(null,t,r,e,n)):(t.tag=0,t=_l(null,t,r,e,n))}return t;case 0:return _l(e,t,t.type,t.pendingProps,n);case 1:return Dl(e,t,r=t.type,a=ml(r,t.pendingProps),n);case 3:e:{if(V(t,t.stateNode.containerInfo),null===e)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,ro(e,t),uo(t,r,null,n);var l=t.memoizedState;if(r=l.cache,ba(0,$a,r),r!==o.cache&&ka(t,[$a],n,!0),co(),r=l.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Ll(e,t,r,n);break e}if(r!==a){ga(a=jr(Error(i(424)),t)),t=Ll(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(aa=xd(e.firstChild),ra=t,oa=!0,ia=null,la=!0,n=rl(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(fa(),r===a){t=ql(e,t,n);break e}Tl(e,t,r,n)}t=t.child}return t;case 26:return Ol(e,t),null===e?(n=Td(t.type,null,t.pendingProps,null))?t.memoizedState=n:oa||(n=t.type,e=t.pendingProps,(r=rd(W.current).createElement(n))[$e]=t,r[Re]=e,ed(r,n,e),Ye(r),t.stateNode=r):t.memoizedState=Td(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Q(t),null===e&&oa&&(r=t.stateNode=yd(t.type,t.pendingProps,W.current),ra=t,la=!0,a=aa,fd(t.type)?(vd=a,aa=xd(r.firstChild)):aa=a),Tl(e,t,t.pendingProps.children,n),Ol(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&oa&&((a=r=aa)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[Ie])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(o=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(o!==a.rel||e.getAttribute("href")!==(null==a.href||""===a.href?null:a.href)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin)||e.getAttribute("title")!==(null==a.title?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((o=e.getAttribute("src"))!==(null==a.src?null:a.src)||e.getAttribute("type")!==(null==a.type?null:a.type)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var o=null==a.name?null:""+a.name;if("hidden"===a.type&&e.getAttribute("name")===o)return e}if(null===(e=xd(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,la))?(t.stateNode=r,ra=t,aa=xd(r.firstChild),la=!1,a=!0):a=!1),a||ca(t)),Q(t),a=t.type,o=t.pendingProps,l=null!==e?e.memoizedProps:null,r=o.children,id(a,o)?r=null:null!==l&&id(a,l)&&(t.flags|=32),null!==t.memoizedState&&(a=$o(e,t,_o,null,null,n),Qd._currentValue=a),Ol(e,t),Tl(e,t,r,n),t.child;case 6:return null===e&&oa&&((e=n=aa)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=xd(e.nextSibling)))return null}return e}(n,t.pendingProps,la))?(t.stateNode=n,ra=t,aa=null,e=!0):e=!1),e||ca(t)),null;case 13:return Ul(e,t,n);case 4:return V(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=nl(t,null,r,n):Tl(e,t,r,n),t.child;case 11:return zl(e,t,t.type,t.pendingProps,n);case 7:return Tl(e,t,t.pendingProps,n),t.child;case 8:case 12:return Tl(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ba(0,t.type,r.value),Tl(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Aa(t),r=r(a=Ca(a)),t.flags|=1,Tl(e,t,r,n),t.child;case 14:return Pl(e,t,t.type,t.pendingProps,n);case 15:return Nl(e,t,t.type,t.pendingProps,n);case 19:return Ql(e,t,n);case 31:return r=t.pendingProps,n=t.mode,r={mode:r.mode,children:r.children},null===e?((n=Wl(r,n)).ref=t.ref,t.child=n,n.return=t,t=n):((n=Lr(e.child,r)).ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return $l(e,t,n);case 24:return Aa(t),r=Ca($a),null===e?(null===(a=Ua())&&(a=rc,o=Ra(),a.pooledCache=o,o.refCount++,null!==o&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},no(t),ba(0,$a,a)):(0!==(e.lanes&n)&&(ro(e,t),uo(t,null,null,n),co()),a=e.memoizedState,o=t.memoizedState,a.parent!==r?(a={parent:r,cache:r},t.memoizedState=a,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=a),ba(0,$a,r)):(r=o.cache,ba(0,$a,r),r!==a.cache&&ka(t,[$a],n,!0))),Tl(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Zl(e){e.flags|=4}function Jl(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!Fd(t)){if(null!==(t=al.current)&&((4194048&oc)===oc?null!==ol:(62914560&oc)!==oc&&0===(536870912&oc)||t!==ol))throw Za=Qa,Va;e.flags|=8192}}function es(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Se():536870912,e.lanes|=t,xc|=t)}function ts(e,t){if(!oa)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ns(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=65011712&a.subtreeFlags,r|=65011712&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rs(e,t,n){var r=t.pendingProps;switch(na(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return ns(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ya($a),G(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(pa(t)?Zl(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,ha())),ns(t),null;case 26:return n=t.memoizedState,null===e?(Zl(t),null!==n?(ns(t),Jl(t,n)):(ns(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Zl(t),ns(t),Jl(t,n)):(ns(t),t.flags&=-16777217):(e.memoizedProps!==r&&Zl(t),ns(t),t.flags&=-16777217),null;case 27:q(t),n=W.current;var a=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Zl(t);else{if(!r){if(null===t.stateNode)throw Error(i(166));return ns(t),null}e=U.current,pa(t)?ua(t):(e=yd(a,r,n),t.stateNode=e,Zl(t))}return ns(t),null;case 5:if(q(t),n=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Zl(t);else{if(!r){if(null===t.stateNode)throw Error(i(166));return ns(t),null}if(e=U.current,pa(t))ua(t);else{switch(a=rd(W.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":(e=a.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"===typeof r.is?a.createElement("select",{is:r.is}):a.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e="string"===typeof r.is?a.createElement(n,{is:r.is}):a.createElement(n)}}e[$e]=t,e[Re]=r;e:for(a=t.child;null!==a;){if(5===a.tag||6===a.tag)e.appendChild(a.stateNode);else if(4!==a.tag&&27!==a.tag&&null!==a.child){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;null===a.sibling;){if(null===a.return||a.return===t)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;e:switch(ed(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Zl(t)}}return ns(t),t.flags&=-16777217,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&Zl(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(i(166));if(e=W.current,pa(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(a=ra))switch(a.tag){case 27:case 5:r=a.memoizedProps}e[$e]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||Ku(e.nodeValue,n)))||ca(t)}else(e=rd(e).createTextNode(r))[$e]=t,t.stateNode=e}return ns(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(a=pa(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(i(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(i(317));a[$e]=t}else fa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ns(t),a=!1}else a=ha(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return 256&t.flags?(cl(t),t):(cl(t),null)}if(cl(t),0!==(128&t.flags))return t.lanes=n,t;if(n=null!==r,e=null!==e&&null!==e.memoizedState,n){a=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(a=r.alternate.memoizedState.cachePool.pool);var o=null;null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),es(t,t.updateQueue),ns(t),null;case 4:return G(),null===e&&Bu(t.stateNode.containerInfo),ns(t),null;case 10:return ya(t.type),ns(t),null;case 19:if(B(ul),null===(a=t.memoizedState))return ns(t),null;if(r=0!==(128&t.flags),null===(o=a.rendering))if(r)ts(a,!1);else{if(0!==pc||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(o=dl(e))){for(t.flags|=128,ts(a,!1),e=o.updateQueue,t.updateQueue=e,es(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Ir(n,e),n=n.sibling;return F(ul,1&ul.current|2),t.child}e=e.sibling}null!==a.tail&&te()>kc&&(t.flags|=128,r=!0,ts(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=dl(o))){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,es(t,e),ts(a,!0),null===a.tail&&"hidden"===a.tailMode&&!o.alternate&&!oa)return ns(t),null}else 2*te()-a.renderingStartTime>kc&&536870912!==n&&(t.flags|=128,r=!0,ts(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(null!==(e=a.last)?e.sibling=o:t.child=o,a.last=o)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=te(),t.sibling=null,e=ul.current,F(ul,r?1&e|2:1&e),t):(ns(t),null);case 22:case 23:return cl(t),vo(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(ns(t),6&t.subtreeFlags&&(t.flags|=8192)):ns(t),null!==(n=t.updateQueue)&&es(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&B(Fa),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ya($a),ns(t),null;case 25:case 30:return null}throw Error(i(156,t.tag))}function as(e,t){switch(na(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return ya($a),G(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return q(t),null;case 13:if(cl(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));fa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return B(ul),null;case 4:return G(),null;case 10:return ya(t.type),null;case 22:case 23:return cl(t),vo(),null!==e&&B(Fa),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return ya($a),null;default:return null}}function os(e,t){switch(na(t),t.tag){case 3:ya($a),G();break;case 26:case 27:case 5:q(t);break;case 4:G();break;case 13:cl(t);break;case 19:B(ul);break;case 10:ya(t.type);break;case 22:case 23:cl(t),vo(),null!==e&&B(Fa);break;case 24:ya($a)}}function is(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var a=r.next;n=a;do{if((n.tag&e)===e){r=void 0;var o=n.create,i=n.inst;r=o(),i.destroy=r}n=n.next}while(n!==a)}}catch(l){uu(t,t.return,l)}}function ls(e,t,n){try{var r=t.updateQueue,a=null!==r?r.lastEffect:null;if(null!==a){var o=a.next;r=o;do{if((r.tag&e)===e){var i=r.inst,l=i.destroy;if(void 0!==l){i.destroy=void 0,a=t;var s=n,c=l;try{c()}catch(u){uu(a,s,u)}}}r=r.next}while(r!==o)}}catch(u){uu(t,t.return,u)}}function ss(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{fo(t,n)}catch(r){uu(e,e.return,r)}}}function cs(e,t,n){n.props=ml(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){uu(e,t,r)}}function us(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;default:r=e.stateNode}"function"===typeof n?e.refCleanup=n(r):n.current=r}}catch(a){uu(e,t,a)}}function ds(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(a){uu(e,t,a)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(o){uu(e,t,o)}else n.current=null}function ps(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(a){uu(e,e.return,a)}}function fs(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,o=null,l=null,s=null,c=null,u=null,d=null;for(h in n){var p=n[h];if(n.hasOwnProperty(h)&&null!=p)switch(h){case"checked":case"value":break;case"defaultValue":c=p;default:r.hasOwnProperty(h)||Zu(e,t,h,null,r,p)}}for(var f in r){var h=r[f];if(p=n[f],r.hasOwnProperty(f)&&(null!=h||null!=p))switch(f){case"type":o=h;break;case"name":a=h;break;case"checked":u=h;break;case"defaultChecked":d=h;break;case"value":l=h;break;case"defaultValue":s=h;break;case"children":case"dangerouslySetInnerHTML":if(null!=h)throw Error(i(137,t));break;default:h!==p&&Zu(e,t,f,h,r,p)}}return void mt(e,l,s,c,u,d,o,a);case"select":for(o in h=l=s=f=null,n)if(c=n[o],n.hasOwnProperty(o)&&null!=c)switch(o){case"value":break;case"multiple":h=c;default:r.hasOwnProperty(o)||Zu(e,t,o,null,r,c)}for(a in r)if(o=r[a],c=n[a],r.hasOwnProperty(a)&&(null!=o||null!=c))switch(a){case"value":f=o;break;case"defaultValue":s=o;break;case"multiple":l=o;default:o!==c&&Zu(e,t,a,o,r,c)}return t=s,n=l,r=h,void(null!=f?bt(e,!!n,f,!1):!!r!==!!n&&(null!=t?bt(e,!!n,t,!0):bt(e,!!n,n?[]:"",!1)));case"textarea":for(s in h=f=null,n)if(a=n[s],n.hasOwnProperty(s)&&null!=a&&!r.hasOwnProperty(s))switch(s){case"value":case"children":break;default:Zu(e,t,s,null,r,a)}for(l in r)if(a=r[l],o=n[l],r.hasOwnProperty(l)&&(null!=a||null!=o))switch(l){case"value":f=a;break;case"defaultValue":h=a;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=a)throw Error(i(91));break;default:a!==o&&Zu(e,t,l,a,r,o)}return void yt(e,f,h);case"option":for(var g in n)if(f=n[g],n.hasOwnProperty(g)&&null!=f&&!r.hasOwnProperty(g))if("selected"===g)e.selected=!1;else Zu(e,t,g,null,r,f);for(c in r)if(f=r[c],h=n[c],r.hasOwnProperty(c)&&f!==h&&(null!=f||null!=h))if("selected"===c)e.selected=f&&"function"!==typeof f&&"symbol"!==typeof f;else Zu(e,t,c,f,r,h);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var m in n)f=n[m],n.hasOwnProperty(m)&&null!=f&&!r.hasOwnProperty(m)&&Zu(e,t,m,null,r,f);for(u in r)if(f=r[u],h=n[u],r.hasOwnProperty(u)&&f!==h&&(null!=f||null!=h))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=f)throw Error(i(137,t));break;default:Zu(e,t,u,f,r,h)}return;default:if(Ct(t)){for(var x in n)f=n[x],n.hasOwnProperty(x)&&void 0!==f&&!r.hasOwnProperty(x)&&Ju(e,t,x,void 0,r,f);for(d in r)f=r[d],h=n[d],!r.hasOwnProperty(d)||f===h||void 0===f&&void 0===h||Ju(e,t,d,f,r,h);return}}for(var v in n)f=n[v],n.hasOwnProperty(v)&&null!=f&&!r.hasOwnProperty(v)&&Zu(e,t,v,null,r,f);for(p in r)f=r[p],h=n[p],!r.hasOwnProperty(p)||f===h||null==f&&null==h||Zu(e,t,p,f,r,h)}(r,e.type,n,t),r[Re]=t}catch(a){uu(e,e.return,a)}}function hs(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&fd(e.type)||4===e.tag}function gs(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||hs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&fd(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ms(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Xu));else if(4!==r&&(27===r&&fd(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(ms(e,t,n),e=e.sibling;null!==e;)ms(e,t,n),e=e.sibling}function xs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&(27===r&&fd(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(xs(e,t,n),e=e.sibling;null!==e;)xs(e,t,n),e=e.sibling}function vs(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);ed(t,r,n),t[$e]=e,t[Re]=n}catch(o){uu(e,e.return,o)}}var bs=!1,ys=!1,ws=!1,ks="function"===typeof WeakSet?WeakSet:Set,Ss=null;function js(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Ds(e,n),4&r&&is(5,n);break;case 1:if(Ds(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(i){uu(n,n.return,i)}else{var a=ml(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){uu(n,n.return,l)}}64&r&&ss(n),512&r&&us(n,n.return);break;case 3:if(Ds(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{fo(e,t)}catch(i){uu(n,n.return,i)}}break;case 27:null===t&&4&r&&vs(n);case 26:case 5:Ds(e,n),null===t&&4&r&&ps(n),512&r&&us(n,n.return);break;case 12:Ds(e,n);break;case 13:Ds(e,n),4&r&&Ps(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$?"!==e.data||"complete"===n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=hu.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||bs)){t=null!==t&&null!==t.memoizedState||ys,a=bs;var o=ys;bs=r,(ys=t)&&!o?Is(e,n,0!==(8772&n.subtreeFlags)):Ds(e,n),bs=a,ys=o}break;case 30:break;default:Ds(e,n)}}function As(e){var t=e.alternate;null!==t&&(e.alternate=null,As(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&Be(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Cs=null,Es=!1;function Ts(e,t,n){for(n=n.child;null!==n;)zs(e,t,n),n=n.sibling}function zs(e,t,n){if(de&&"function"===typeof de.onCommitFiberUnmount)try{de.onCommitFiberUnmount(ue,n)}catch(o){}switch(n.tag){case 26:ys||ds(n,t),Ts(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:ys||ds(n,t);var r=Cs,a=Es;fd(n.type)&&(Cs=n.stateNode,Es=!1),Ts(e,t,n),wd(n.stateNode),Cs=r,Es=a;break;case 5:ys||ds(n,t);case 6:if(r=Cs,a=Es,Cs=null,Ts(e,t,n),Es=a,null!==(Cs=r))if(Es)try{(9===Cs.nodeType?Cs.body:"HTML"===Cs.nodeName?Cs.ownerDocument.body:Cs).removeChild(n.stateNode)}catch(i){uu(n,t,i)}else try{Cs.removeChild(n.stateNode)}catch(i){uu(n,t,i)}break;case 18:null!==Cs&&(Es?(hd(9===(e=Cs).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),Ep(e)):hd(Cs,n.stateNode));break;case 4:r=Cs,a=Es,Cs=n.stateNode.containerInfo,Es=!0,Ts(e,t,n),Cs=r,Es=a;break;case 0:case 11:case 14:case 15:ys||ls(2,n,t),ys||ls(4,n,t),Ts(e,t,n);break;case 1:ys||(ds(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&cs(n,t,r)),Ts(e,t,n);break;case 21:Ts(e,t,n);break;case 22:ys=(r=ys)||null!==n.memoizedState,Ts(e,t,n),ys=r;break;default:Ts(e,t,n)}}function Ps(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{Ep(e)}catch(n){uu(t,t.return,n)}}function Ns(e,t){var n=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new ks),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new ks),t;default:throw Error(i(435,e.tag))}}(e);t.forEach((function(t){var r=gu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}function $s(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r],o=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 27:if(fd(s.type)){Cs=s.stateNode,Es=!1;break e}break;case 5:Cs=s.stateNode,Es=!1;break e;case 3:case 4:Cs=s.stateNode.containerInfo,Es=!0;break e}s=s.return}if(null===Cs)throw Error(i(160));zs(o,l,a),Cs=null,Es=!1,null!==(o=a.alternate)&&(o.return=null),a.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)Os(t,e),t=t.sibling}var Rs=null;function Os(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:$s(t,e),_s(e),4&r&&(ls(3,e,e.return),is(3,e),ls(5,e,e.return));break;case 1:$s(t,e),_s(e),512&r&&(ys||null===n||ds(n,n.return)),64&r&&bs&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var a=Rs;if($s(t,e),_s(e),512&r&&(ys||null===n||ds(n,n.return)),4&r){var o=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(r){case"title":(!(o=a.getElementsByTagName("title")[0])||o[Ie]||o[$e]||"http://www.w3.org/2000/svg"===o.namespaceURI||o.hasAttribute("itemprop"))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector("head > title"))),ed(o,r,n),o[$e]=e,Ye(o),r=o;break e;case"link":var l=Id("link","href",a).get(r+(n.href||""));if(l)for(var s=0;s<l.length;s++)if((o=l[s]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&o.getAttribute("rel")===(null==n.rel?null:n.rel)&&o.getAttribute("title")===(null==n.title?null:n.title)&&o.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){l.splice(s,1);break t}ed(o=a.createElement(r),r,n),a.head.appendChild(o);break;case"meta":if(l=Id("meta","content",a).get(r+(n.content||"")))for(s=0;s<l.length;s++)if((o=l[s]).getAttribute("content")===(null==n.content?null:""+n.content)&&o.getAttribute("name")===(null==n.name?null:n.name)&&o.getAttribute("property")===(null==n.property?null:n.property)&&o.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&o.getAttribute("charset")===(null==n.charSet?null:n.charSet)){l.splice(s,1);break t}ed(o=a.createElement(r),r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[$e]=e,Ye(o),r=o}e.stateNode=r}else Bd(a,e.type,e.stateNode);else e.stateNode=Od(a,r,e.memoizedProps);else o!==r?(null===o?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):o.count--,null===r?Bd(a,e.type,e.stateNode):Od(a,r,e.memoizedProps)):null===r&&null!==e.stateNode&&fs(e,e.memoizedProps,n.memoizedProps)}break;case 27:$s(t,e),_s(e),512&r&&(ys||null===n||ds(n,n.return)),null!==n&&4&r&&fs(e,e.memoizedProps,n.memoizedProps);break;case 5:if($s(t,e),_s(e),512&r&&(ys||null===n||ds(n,n.return)),32&e.flags){a=e.stateNode;try{kt(a,"")}catch(h){uu(e,e.return,h)}}4&r&&null!=e.stateNode&&fs(e,a=e.memoizedProps,null!==n?n.memoizedProps:a),1024&r&&(ws=!0);break;case 6:if($s(t,e),_s(e),4&r){if(null===e.stateNode)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(h){uu(e,e.return,h)}}break;case 3:if(Ld=null,a=Rs,Rs=jd(t.containerInfo),$s(t,e),Rs=a,_s(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ep(t.containerInfo)}catch(h){uu(e,e.return,h)}ws&&(ws=!1,Ms(e));break;case 4:r=Rs,Rs=jd(e.stateNode.containerInfo),$s(t,e),_s(e),Rs=r;break;case 12:default:$s(t,e),_s(e);break;case 13:$s(t,e),_s(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(wc=te()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Ns(e,r)));break;case 22:a=null!==e.memoizedState;var c=null!==n&&null!==n.memoizedState,u=bs,d=ys;if(bs=u||a,ys=d||c,$s(t,e),ys=d,bs=u,_s(e),8192&r)e:for(t=e.stateNode,t._visibility=a?-2&t._visibility:1|t._visibility,a&&(null===n||c||bs||ys||Ls(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){c=n=t;try{if(o=c.stateNode,a)"function"===typeof(l=o.style).setProperty?l.setProperty("display","none","important"):l.display="none";else{s=c.stateNode;var p=c.memoizedProps.style,f=void 0!==p&&null!==p&&p.hasOwnProperty("display")?p.display:null;s.style.display=null==f||"boolean"===typeof f?"":(""+f).trim()}}catch(h){uu(c,c.return,h)}}}else if(6===t.tag){if(null===n){c=t;try{c.stateNode.nodeValue=a?"":c.memoizedProps}catch(h){uu(c,c.return,h)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,Ns(e,n))));break;case 19:$s(t,e),_s(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Ns(e,r)));case 30:case 21:}}function _s(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(hs(r)){n=r;break}r=r.return}if(null==n)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;xs(e,gs(e),a);break;case 5:var o=n.stateNode;32&n.flags&&(kt(o,""),n.flags&=-33),xs(e,gs(e),o);break;case 3:case 4:var l=n.stateNode.containerInfo;ms(e,gs(e),l);break;default:throw Error(i(161))}}catch(s){uu(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Ms(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;Ms(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Ds(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)js(e,t.alternate,t),t=t.sibling}function Ls(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ls(4,t,t.return),Ls(t);break;case 1:ds(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&cs(t,t.return,n),Ls(t);break;case 27:wd(t.stateNode);case 26:case 5:ds(t,t.return),Ls(t);break;case 22:null===t.memoizedState&&Ls(t);break;default:Ls(t)}e=e.sibling}}function Is(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,a=e,o=t,i=o.flags;switch(o.tag){case 0:case 11:case 15:Is(a,o,n),is(4,o);break;case 1:if(Is(a,o,n),"function"===typeof(a=(r=o).stateNode).componentDidMount)try{a.componentDidMount()}catch(c){uu(r,r.return,c)}if(null!==(a=(r=o).updateQueue)){var l=r.stateNode;try{var s=a.shared.hiddenCallbacks;if(null!==s)for(a.shared.hiddenCallbacks=null,a=0;a<s.length;a++)po(s[a],l)}catch(c){uu(r,r.return,c)}}n&&64&i&&ss(o),us(o,o.return);break;case 27:vs(o);case 26:case 5:Is(a,o,n),n&&null===r&&4&i&&ps(o),us(o,o.return);break;case 12:Is(a,o,n);break;case 13:Is(a,o,n),n&&4&i&&Ps(a,o);break;case 22:null===o.memoizedState&&Is(a,o,n),us(o,o.return);break;case 30:break;default:Is(a,o,n)}t=t.sibling}}function Bs(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Oa(n))}function Fs(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Oa(e))}function Us(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)Hs(e,t,n,r),t=t.sibling}function Hs(e,t,n,r){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Us(e,t,n,r),2048&a&&is(9,t);break;case 1:case 13:default:Us(e,t,n,r);break;case 3:Us(e,t,n,r),2048&a&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Oa(e)));break;case 12:if(2048&a){Us(e,t,n,r),e=t.stateNode;try{var o=t.memoizedProps,i=o.id,l=o.onPostCommit;"function"===typeof l&&l(i,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(s){uu(t,t.return,s)}}else Us(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,i=t.alternate,null!==t.memoizedState?2&o._visibility?Us(e,t,n,r):Ys(e,t):2&o._visibility?Us(e,t,n,r):(o._visibility|=2,Ws(e,t,n,r,0!==(10256&t.subtreeFlags))),2048&a&&Bs(i,t);break;case 24:Us(e,t,n,r),2048&a&&Fs(t.alternate,t)}}function Ws(e,t,n,r,a){for(a=a&&0!==(10256&t.subtreeFlags),t=t.child;null!==t;){var o=e,i=t,l=n,s=r,c=i.flags;switch(i.tag){case 0:case 11:case 15:Ws(o,i,l,s,a),is(8,i);break;case 23:break;case 22:var u=i.stateNode;null!==i.memoizedState?2&u._visibility?Ws(o,i,l,s,a):Ys(o,i):(u._visibility|=2,Ws(o,i,l,s,a)),a&&2048&c&&Bs(i.alternate,i);break;case 24:Ws(o,i,l,s,a),a&&2048&c&&Fs(i.alternate,i);break;default:Ws(o,i,l,s,a)}t=t.sibling}}function Ys(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,a=r.flags;switch(r.tag){case 22:Ys(n,r),2048&a&&Bs(r.alternate,r);break;case 24:Ys(n,r),2048&a&&Fs(r.alternate,r);break;default:Ys(n,r)}t=t.sibling}}var Vs=8192;function Gs(e){if(e.subtreeFlags&Vs)for(e=e.child;null!==e;)Qs(e),e=e.sibling}function Qs(e){switch(e.tag){case 26:Gs(e),e.flags&Vs&&null!==e.memoizedState&&function(e,t,n){if(null===Ud)throw Error(i(475));var r=Ud;if("stylesheet"===t.type&&("string"!==typeof n.media||!1!==matchMedia(n.media).matches)&&0===(4&t.state.loading)){if(null===t.instance){var a=zd(n.href),o=e.querySelector(Pd(a));if(o)return null!==(e=o._p)&&"object"===typeof e&&"function"===typeof e.then&&(r.count++,r=Wd.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=o,void Ye(o);o=e.ownerDocument||e,n=Nd(n),(a=kd.get(a))&&Md(n,a),Ye(o=o.createElement("link"));var l=o;l._p=new Promise((function(e,t){l.onload=e,l.onerror=t})),ed(o,"link",n),t.instance=o}null===r.stylesheets&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&0===(3&t.state.loading)&&(r.count++,t=Wd.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}(Rs,e.memoizedState,e.memoizedProps);break;case 5:default:Gs(e);break;case 3:case 4:var t=Rs;Rs=jd(e.stateNode.containerInfo),Gs(e),Rs=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=Vs,Vs=16777216,Gs(e),Vs=t):Gs(e))}}function qs(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function Ks(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Ss=r,Js(r,e)}qs(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Xs(e),e=e.sibling}function Xs(e){switch(e.tag){case 0:case 11:case 15:Ks(e),2048&e.flags&&ls(9,e,e.return);break;case 3:case 12:default:Ks(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,Zs(e)):Ks(e)}}function Zs(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Ss=r,Js(r,e)}qs(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:ls(8,t,t.return),Zs(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,Zs(t));break;default:Zs(t)}e=e.sibling}}function Js(e,t){for(;null!==Ss;){var n=Ss;switch(n.tag){case 0:case 11:case 15:ls(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:Oa(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,Ss=r;else e:for(n=e;null!==Ss;){var a=(r=Ss).sibling,o=r.return;if(As(r),r===n){Ss=null;break e}if(null!==a){a.return=o,Ss=a;break e}Ss=o}}}var ec={getCacheForType:function(e){var t=Ca($a),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n}},tc="function"===typeof WeakMap?WeakMap:Map,nc=0,rc=null,ac=null,oc=0,ic=0,lc=null,sc=!1,cc=!1,uc=!1,dc=0,pc=0,fc=0,hc=0,gc=0,mc=0,xc=0,vc=null,bc=null,yc=!1,wc=0,kc=1/0,Sc=null,jc=null,Ac=0,Cc=null,Ec=null,Tc=0,zc=0,Pc=null,Nc=null,$c=0,Rc=null;function Oc(){if(0!==(2&nc)&&0!==oc)return oc&-oc;if(null!==O.T){return 0!==Da?Da:zu()}return Pe()}function _c(){0===mc&&(mc=0===(536870912&oc)||oa?ke():536870912);var e=al.current;return null!==e&&(e.flags|=32),mc}function Mc(e,t,n){(e!==rc||2!==ic&&9!==ic)&&null===e.cancelPendingCommit||(Hc(e,0),Bc(e,oc,mc,!1)),Ae(e,n),0!==(2&nc)&&e===rc||(e===rc&&(0===(2&nc)&&(hc|=n),4===pc&&Bc(e,oc,mc,!1)),ku(e))}function Dc(e,t,n){if(0!==(6&nc))throw Error(i(327));for(var r=!n&&0===(124&t)&&0===(t&e.expiredLanes)||ye(e,t),a=r?function(e,t){var n=nc;nc|=2;var r=Yc(),a=Vc();rc!==e||oc!==t?(Sc=null,kc=te()+500,Hc(e,t)):cc=ye(e,t);e:for(;;)try{if(0!==ic&&null!==ac){t=ac;var o=lc;t:switch(ic){case 1:ic=0,lc=null,Jc(e,t,o,1);break;case 2:case 9:if(qa(o)){ic=0,lc=null,Zc(t);break}t=function(){2!==ic&&9!==ic||rc!==e||(ic=7),ku(e)},o.then(t,t);break e;case 3:ic=7;break e;case 4:ic=5;break e;case 7:qa(o)?(ic=0,lc=null,Zc(t)):(ic=0,lc=null,Jc(e,t,o,7));break;case 5:var l=null;switch(ac.tag){case 26:l=ac.memoizedState;case 5:case 27:var s=ac;if(!l||Fd(l)){ic=0,lc=null;var c=s.sibling;if(null!==c)ac=c;else{var u=s.return;null!==u?(ac=u,eu(u)):ac=null}break t}}ic=0,lc=null,Jc(e,t,o,5);break;case 6:ic=0,lc=null,Jc(e,t,o,6);break;case 8:Uc(),pc=6;break e;default:throw Error(i(462))}}Kc();break}catch(d){Wc(e,d)}return va=xa=null,O.H=r,O.A=a,nc=n,null!==ac?0:(rc=null,oc=0,Tr(),pc)}(e,t):Qc(e,t,!0),o=r;;){if(0===a){cc&&!r&&Bc(e,t,0,!1);break}if(n=e.current.alternate,!o||Ic(n)){if(2===a){if(o=t,e.errorRecoveryDisabledLanes&o)var l=0;else l=0!==(l=-536870913&e.pendingLanes)?l:536870912&l?536870912:0;if(0!==l){t=l;e:{var s=e;a=vc;var c=s.current.memoizedState.isDehydrated;if(c&&(Hc(s,l).flags|=256),2!==(l=Qc(s,l,!1))){if(uc&&!c){s.errorRecoveryDisabledLanes|=o,hc|=o,a=4;break e}o=bc,bc=a,null!==o&&(null===bc?bc=o:bc.push.apply(bc,o))}a=l}if(o=!1,2!==a)continue}}if(1===a){Hc(e,0),Bc(e,t,0,!0);break}e:{switch(r=e,o=a){case 0:case 1:throw Error(i(345));case 4:if((4194048&t)!==t)break;case 6:Bc(r,t,mc,!sc);break e;case 2:bc=null;break;case 3:case 5:break;default:throw Error(i(329))}if((62914560&t)===t&&10<(a=wc+300-te())){if(Bc(r,t,mc,!sc),0!==be(r,0,!0))break e;r.timeoutHandle=sd(Lc.bind(null,r,n,bc,Sc,yc,t,mc,hc,xc,sc,o,2,-0,0),a)}else Lc(r,n,bc,Sc,yc,t,mc,hc,xc,sc,o,0,-0,0)}break}a=Qc(e,t,!1),o=!1}ku(e)}function Lc(e,t,n,r,a,o,l,s,c,u,d,p,f,h){if(e.timeoutHandle=-1,(8192&(p=t.subtreeFlags)||16785408===(16785408&p))&&(Ud={stylesheets:null,count:0,unsuspend:Hd},Qs(t),null!==(p=function(){if(null===Ud)throw Error(i(475));var e=Ud;return e.stylesheets&&0===e.count&&Vd(e,e.stylesheets),0<e.count?function(t){var n=setTimeout((function(){if(e.stylesheets&&Vd(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}),6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}())))return e.cancelPendingCommit=p(nu.bind(null,e,t,o,n,r,a,l,s,c,d,1,f,h)),void Bc(e,o,l,!u);nu(e,t,o,n,r,a,l,s,c)}function Ic(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!qn(o(),a))return!1}catch(i){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Bc(e,t,n,r){t&=~gc,t&=~hc,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var a=t;0<a;){var o=31-fe(a),i=1<<o;r[o]=-1,a&=~i}0!==n&&Ce(e,n,t)}function Fc(){return 0!==(6&nc)||(Su(0,!1),!1)}function Uc(){if(null!==ac){if(0===ic)var e=ac.return;else va=xa=null,Lo(e=ac),qi=null,Ki=0,e=ac;for(;null!==e;)os(e.alternate,e),e=e.return;ac=null}}function Hc(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,cd(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Uc(),rc=e,ac=n=Lr(e.current,null),oc=t,ic=0,lc=null,sc=!1,cc=ye(e,t),uc=!1,xc=mc=gc=hc=fc=pc=0,bc=vc=null,yc=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var a=31-fe(r),o=1<<a;t|=e[a],r&=~o}return dc=t,Tr(),n}function Wc(e,t){yo=null,O.H=Yi,t===Ya||t===Ga?(t=Ja(),ic=3):t===Va?(t=Ja(),ic=4):ic=t===Cl?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,lc=t,null===ac&&(pc=1,wl(e,jr(t,e.current)))}function Yc(){var e=O.H;return O.H=Yi,null===e?Yi:e}function Vc(){var e=O.A;return O.A=ec,e}function Gc(){pc=4,sc||(4194048&oc)!==oc&&null!==al.current||(cc=!0),0===(134217727&fc)&&0===(134217727&hc)||null===rc||Bc(rc,oc,mc,!1)}function Qc(e,t,n){var r=nc;nc|=2;var a=Yc(),o=Vc();rc===e&&oc===t||(Sc=null,Hc(e,t)),t=!1;var i=pc;e:for(;;)try{if(0!==ic&&null!==ac){var l=ac,s=lc;switch(ic){case 8:Uc(),i=6;break e;case 3:case 2:case 9:case 6:null===al.current&&(t=!0);var c=ic;if(ic=0,lc=null,Jc(e,l,s,c),n&&cc){i=0;break e}break;default:c=ic,ic=0,lc=null,Jc(e,l,s,c)}}qc(),i=pc;break}catch(u){Wc(e,u)}return t&&e.shellSuspendCounter++,va=xa=null,nc=r,O.H=a,O.A=o,null===ac&&(rc=null,oc=0,Tr()),i}function qc(){for(;null!==ac;)Xc(ac)}function Kc(){for(;null!==ac&&!J();)Xc(ac)}function Xc(e){var t=Xl(e.alternate,e,dc);e.memoizedProps=e.pendingProps,null===t?eu(e):ac=t}function Zc(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Ml(n,t,t.pendingProps,t.type,void 0,oc);break;case 11:t=Ml(n,t,t.pendingProps,t.type.render,t.ref,oc);break;case 5:Lo(t);default:os(n,t),t=Xl(n,t=ac=Ir(t,dc),dc)}e.memoizedProps=e.pendingProps,null===t?eu(e):ac=t}function Jc(e,t,n,r){va=xa=null,Lo(t),qi=null,Ki=0;var a=t.return;try{if(function(e,t,n,r,a){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&Sa(t,n,a,!0),null!==(n=al.current)){switch(n.tag){case 13:return null===ol?Gc():null===n.alternate&&0===pc&&(pc=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Qa?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),du(e,r,a)),!1;case 22:return n.flags|=65536,r===Qa?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),du(e,r,a)),!1}throw Error(i(435,n.tag))}return du(e,r,a),Gc(),!1}if(oa)return null!==(t=al.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==sa&&ga(jr(e=Error(i(422),{cause:r}),n))):(r!==sa&&ga(jr(t=Error(i(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,a&=-a,e.lanes|=a,r=jr(r,n),lo(e,a=Sl(e.stateNode,r,a)),4!==pc&&(pc=2)),!1;var o=Error(i(520),{cause:r});if(o=jr(o,n),null===vc?vc=[o]:vc.push(o),4!==pc&&(pc=2),null===t)return!0;r=jr(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,lo(n,e=Sl(n.stateNode,r,e)),!1;case 1:if(t=n.type,o=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==o&&"function"===typeof o.componentDidCatch&&(null===jc||!jc.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,Al(a=jl(a),e,n,r),lo(n,a),!1}n=n.return}while(null!==n);return!1}(e,a,t,n,oc))return pc=1,wl(e,jr(n,e.current)),void(ac=null)}catch(o){if(null!==a)throw ac=a,o;return pc=1,wl(e,jr(n,e.current)),void(ac=null)}32768&t.flags?(oa||1===r?e=!0:cc||0!==(536870912&oc)?e=!1:(sc=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=al.current)&&13===r.tag&&(r.flags|=16384))),tu(t,e)):eu(t)}function eu(e){var t=e;do{if(0!==(32768&t.flags))return void tu(t,sc);e=t.return;var n=rs(t.alternate,t,dc);if(null!==n)return void(ac=n);if(null!==(t=t.sibling))return void(ac=t);ac=t=e}while(null!==t);0===pc&&(pc=5)}function tu(e,t){do{var n=as(e.alternate,e);if(null!==n)return n.flags&=32767,void(ac=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(ac=e);ac=e=n}while(null!==e);pc=6,ac=null}function nu(e,t,n,r,a,o,l,s,c){e.cancelPendingCommit=null;do{lu()}while(0!==Ac);if(0!==(6&nc))throw Error(i(327));if(null!==t){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,function(e,t,n,r,a,o){var i=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var l=e.entanglements,s=e.expirationTimes,c=e.hiddenUpdates;for(n=i&~n;0<n;){var u=31-fe(n),d=1<<u;l[u]=0,s[u]=-1;var p=c[u];if(null!==p)for(c[u]=null,u=0;u<p.length;u++){var f=p[u];null!==f&&(f.lane&=-536870913)}n&=~d}0!==r&&Ce(e,r,0),0!==o&&0===a&&0!==e.tag&&(e.suspendedLanes|=o&~(i&~t))}(e,n,o|=Er,l,s,c),e===rc&&(ac=rc=null,oc=0),Ec=t,Cc=e,Tc=n,zc=o,Pc=a,Nc=r,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,X(oe,(function(){return su(),null}))):(e.callbackNode=null,e.callbackPriority=0),r=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||r){r=O.T,O.T=null,a=_.p,_.p=2,l=nc,nc|=4;try{!function(e,t){if(e=e.containerInfo,td=np,tr(e=er(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(m){n=null;break e}var l=0,s=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==n||0!==a&&3!==p.nodeType||(s=l+a),p!==o||0!==r&&3!==p.nodeType||(c=l+r),3===p.nodeType&&(l+=p.nodeValue.length),null!==(h=p.firstChild);)f=p,p=h;for(;;){if(p===e)break t;if(f===n&&++u===a&&(s=l),f===o&&++d===r&&(c=l),null!==(h=p.nextSibling))break;f=(p=f).parentNode}p=h}n=-1===s||-1===c?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(nd={focusedElem:e,selectionRange:n},np=!1,Ss=t;null!==Ss;)if(e=(t=Ss).child,0!==(1024&t.subtreeFlags)&&null!==e)e.return=t,Ss=e;else for(;null!==Ss;){switch(o=(t=Ss).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==o){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var g=ml(n.type,a,(n.elementType,n.type));e=r.getSnapshotBeforeUpdate(g,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(x){uu(n,n.return,x)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))gd(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":gd(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(i(163))}if(null!==(e=t.sibling)){e.return=t.return,Ss=e;break}Ss=t.return}}(e,t)}finally{nc=l,_.p=a,O.T=r}}Ac=1,ru(),au(),ou()}}function ru(){if(1===Ac){Ac=0;var e=Cc,t=Ec,n=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||n){n=O.T,O.T=null;var r=_.p;_.p=2;var a=nc;nc|=4;try{Os(t,e);var o=nd,i=er(e.containerInfo),l=o.focusedElem,s=o.selectionRange;if(i!==l&&l&&l.ownerDocument&&Jn(l.ownerDocument.documentElement,l)){if(null!==s&&tr(l)){var c=s.start,u=s.end;if(void 0===u&&(u=c),"selectionStart"in l)l.selectionStart=c,l.selectionEnd=Math.min(u,l.value.length);else{var d=l.ownerDocument||document,p=d&&d.defaultView||window;if(p.getSelection){var f=p.getSelection(),h=l.textContent.length,g=Math.min(s.start,h),m=void 0===s.end?g:Math.min(s.end,h);!f.extend&&g>m&&(i=m,m=g,g=i);var x=Zn(l,g),v=Zn(l,m);if(x&&v&&(1!==f.rangeCount||f.anchorNode!==x.node||f.anchorOffset!==x.offset||f.focusNode!==v.node||f.focusOffset!==v.offset)){var b=d.createRange();b.setStart(x.node,x.offset),f.removeAllRanges(),g>m?(f.addRange(b),f.extend(v.node,v.offset)):(b.setEnd(v.node,v.offset),f.addRange(b))}}}}for(d=[],f=l;f=f.parentNode;)1===f.nodeType&&d.push({element:f,left:f.scrollLeft,top:f.scrollTop});for("function"===typeof l.focus&&l.focus(),l=0;l<d.length;l++){var y=d[l];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}np=!!td,nd=td=null}finally{nc=a,_.p=r,O.T=n}}e.current=t,Ac=2}}function au(){if(2===Ac){Ac=0;var e=Cc,t=Ec,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=O.T,O.T=null;var r=_.p;_.p=2;var a=nc;nc|=4;try{js(e,t.alternate,t)}finally{nc=a,_.p=r,O.T=n}}Ac=3}}function ou(){if(4===Ac||3===Ac){Ac=0,ee();var e=Cc,t=Ec,n=Tc,r=Nc;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?Ac=5:(Ac=0,Ec=Cc=null,iu(e,e.pendingLanes));var a=e.pendingLanes;if(0===a&&(jc=null),ze(n),t=t.stateNode,de&&"function"===typeof de.onCommitFiberRoot)try{de.onCommitFiberRoot(ue,t,void 0,128===(128&t.current.flags))}catch(s){}if(null!==r){t=O.T,a=_.p,_.p=2,O.T=null;try{for(var o=e.onRecoverableError,i=0;i<r.length;i++){var l=r[i];o(l.value,{componentStack:l.stack})}}finally{O.T=t,_.p=a}}0!==(3&Tc)&&lu(),ku(e),a=e.pendingLanes,0!==(4194090&n)&&0!==(42&a)?e===Rc?$c++:($c=0,Rc=e):$c=0,Su(0,!1)}}function iu(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Oa(t)))}function lu(e){return ru(),au(),ou(),su()}function su(){if(5!==Ac)return!1;var e=Cc,t=zc;zc=0;var n=ze(Tc),r=O.T,a=_.p;try{_.p=32>n?32:n,O.T=null,n=Pc,Pc=null;var o=Cc,l=Tc;if(Ac=0,Ec=Cc=null,Tc=0,0!==(6&nc))throw Error(i(331));var s=nc;if(nc|=4,Xs(o.current),Hs(o,o.current,l,n),nc=s,Su(0,!1),de&&"function"===typeof de.onPostCommitFiberRoot)try{de.onPostCommitFiberRoot(ue,o)}catch(c){}return!0}finally{_.p=a,O.T=r,iu(e,t)}}function cu(e,t,n){t=jr(n,t),null!==(e=oo(e,t=Sl(e.stateNode,t,2),2))&&(Ae(e,2),ku(e))}function uu(e,t,n){if(3===e.tag)cu(e,e,n);else for(;null!==t;){if(3===t.tag){cu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===jc||!jc.has(r))){e=jr(n,e),null!==(r=oo(t,n=jl(2),2))&&(Al(n,r,t,e),Ae(r,2),ku(r));break}}t=t.return}}function du(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new tc;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(uc=!0,a.add(n),e=pu.bind(null,e,t,n),t.then(e,e))}function pu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,rc===e&&(oc&n)===n&&(4===pc||3===pc&&(62914560&oc)===oc&&300>te()-wc?0===(2&nc)&&Hc(e,0):gc|=n,xc===oc&&(xc=0)),ku(e)}function fu(e,t){0===t&&(t=Se()),null!==(e=Nr(e,t))&&(Ae(e,t),ku(e))}function hu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),fu(e,n)}function gu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}null!==r&&r.delete(t),fu(e,n)}var mu=null,xu=null,vu=!1,bu=!1,yu=!1,wu=0;function ku(e){e!==xu&&null===e.next&&(null===xu?mu=xu=e:xu=xu.next=e),bu=!0,vu||(vu=!0,dd((function(){0!==(6&nc)?X(re,ju):Au()})))}function Su(e,t){if(!yu&&bu){yu=!0;do{for(var n=!1,r=mu;null!==r;){if(!t)if(0!==e){var a=r.pendingLanes;if(0===a)var o=0;else{var i=r.suspendedLanes,l=r.pingedLanes;o=(1<<31-fe(42|e)+1)-1,o=201326741&(o&=a&~(i&~l))?201326741&o|1:o?2|o:0}0!==o&&(n=!0,Tu(r,o))}else o=oc,0===(3&(o=be(r,r===rc?o:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||ye(r,o)||(n=!0,Tu(r,o));r=r.next}}while(n);yu=!1}}function ju(){Au()}function Au(){bu=vu=!1;var e=0;0!==wu&&(function(){var e=window.event;if(e&&"popstate"===e.type)return e!==ld&&(ld=e,!0);return ld=null,!1}()&&(e=wu),wu=0);for(var t=te(),n=null,r=mu;null!==r;){var a=r.next,o=Cu(r,t);0===o?(r.next=null,null===n?mu=a:n.next=a,null===a&&(xu=n)):(n=r,(0!==e||0!==(3&o))&&(bu=!0)),r=a}Su(e,!1)}function Cu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=-62914561&e.pendingLanes;0<o;){var i=31-fe(o),l=1<<i,s=a[i];-1===s?0!==(l&n)&&0===(l&r)||(a[i]=we(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}if(n=oc,n=be(e,e===(t=rc)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===ic||9===ic)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&Z(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||ye(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&Z(r),ze(n)){case 2:case 8:n=ae;break;case 32:default:n=oe;break;case 268435456:n=le}return r=Eu.bind(null,e),n=X(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&Z(r),e.callbackPriority=2,e.callbackNode=null,2}function Eu(e,t){if(0!==Ac&&5!==Ac)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(lu()&&e.callbackNode!==n)return null;var r=oc;return 0===(r=be(e,e===rc?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Dc(e,r,t),Cu(e,te()),null!=e.callbackNode&&e.callbackNode===n?Eu.bind(null,e):null)}function Tu(e,t){if(lu())return null;Dc(e,t,!0)}function zu(){return 0===wu&&(wu=ke()),wu}function Pu(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:zt(""+e)}function Nu(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var $u=0;$u<wr.length;$u++){var Ru=wr[$u];kr(Ru.toLowerCase(),"on"+(Ru[0].toUpperCase()+Ru.slice(1)))}kr(fr,"onAnimationEnd"),kr(hr,"onAnimationIteration"),kr(gr,"onAnimationStart"),kr("dblclick","onDoubleClick"),kr("focusin","onFocus"),kr("focusout","onBlur"),kr(mr,"onTransitionRun"),kr(xr,"onTransitionStart"),kr(vr,"onTransitionCancel"),kr(br,"onTransitionEnd"),qe("onMouseEnter",["mouseout","mouseover"]),qe("onMouseLeave",["mouseout","mouseover"]),qe("onPointerEnter",["pointerout","pointerover"]),qe("onPointerLeave",["pointerout","pointerover"]),Qe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ou="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_u=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ou));function Mu(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&a.isPropagationStopped())break e;o=l,a.currentTarget=c;try{o(a)}catch(u){xl(u)}a.currentTarget=null,o=s}else for(i=0;i<r.length;i++){if(s=(l=r[i]).instance,c=l.currentTarget,l=l.listener,s!==o&&a.isPropagationStopped())break e;o=l,a.currentTarget=c;try{o(a)}catch(u){xl(u)}a.currentTarget=null,o=s}}}}function Du(e,t){var n=t[_e];void 0===n&&(n=t[_e]=new Set);var r=e+"__bubble";n.has(r)||(Fu(t,e,2,!1),n.add(r))}function Lu(e,t,n){var r=0;t&&(r|=4),Fu(n,e,r,t)}var Iu="_reactListening"+Math.random().toString(36).slice(2);function Bu(e){if(!e[Iu]){e[Iu]=!0,Ve.forEach((function(t){"selectionchange"!==t&&(_u.has(t)||Lu(t,!1,e),Lu(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Iu]||(t[Iu]=!0,Lu("selectionchange",!1,t))}}function Fu(e,t,n,r){switch(cp(t)){case 2:var a=rp;break;case 8:a=ap;break;default:a=op}n=a.bind(null,t,n,e),a=void 0,!It||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Uu(e,t,n,r,a){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===a)break;if(4===i)for(i=r.return;null!==i;){var c=i.tag;if((3===c||4===c)&&i.stateNode.containerInfo===a)return;i=i.return}for(;null!==l;){if(null===(i=Fe(l)))return;if(5===(c=i.tag)||6===c||26===c||27===c){r=o=i;continue e}l=l.parentNode}}r=r.return}Mt((function(){var r=o,a=Nt(n),i=[];e:{var l=yr.get(e);if(void 0!==l){var c=Jt,u=e;switch(e){case"keypress":if(0===Yt(n))break e;case"keydown":case"keyup":c=gn;break;case"focusin":u="focus",c=on;break;case"focusout":u="blur",c=on;break;case"beforeblur":case"afterblur":c=on;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=rn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=an;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=xn;break;case fr:case hr:case gr:c=ln;break;case br:c=vn;break;case"scroll":case"scrollend":c=tn;break;case"wheel":c=bn;break;case"copy":case"cut":case"paste":c=sn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=mn;break;case"toggle":case"beforetoggle":c=yn}var d=0!==(4&t),p=!d&&("scroll"===e||"scrollend"===e),f=d?null!==l?l+"Capture":null:l;d=[];for(var h,g=r;null!==g;){var m=g;if(h=m.stateNode,5!==(m=m.tag)&&26!==m&&27!==m||null===h||null===f||null!=(m=Dt(g,f))&&d.push(Hu(g,m,h)),p)break;g=g.return}0<d.length&&(l=new c(l,u,null,n,a),i.push({event:l,listeners:d}))}}if(0===(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===Pt||!(u=n.relatedTarget||n.fromElement)||!Fe(u)&&!u[Oe])&&(c||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,c?(c=r,null!==(u=(u=n.relatedTarget||n.toElement)?Fe(u):null)&&(p=s(u),d=u.tag,u!==p||5!==d&&27!==d&&6!==d)&&(u=null)):(c=null,u=r),c!==u)){if(d=rn,m="onMouseLeave",f="onMouseEnter",g="mouse","pointerout"!==e&&"pointerover"!==e||(d=mn,m="onPointerLeave",f="onPointerEnter",g="pointer"),p=null==c?l:He(c),h=null==u?l:He(u),(l=new d(m,g+"leave",c,n,a)).target=p,l.relatedTarget=h,m=null,Fe(a)===r&&((d=new d(f,g+"enter",u,n,a)).target=h,d.relatedTarget=p,m=d),p=m,c&&u)e:{for(f=u,g=0,h=d=c;h;h=Yu(h))g++;for(h=0,m=f;m;m=Yu(m))h++;for(;0<g-h;)d=Yu(d),g--;for(;0<h-g;)f=Yu(f),h--;for(;g--;){if(d===f||null!==f&&d===f.alternate)break e;d=Yu(d),f=Yu(f)}d=null}else d=null;null!==c&&Vu(i,l,c,d,!1),null!==u&&null!==p&&Vu(i,p,u,d,!0)}if("select"===(c=(l=r?He(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===c&&"file"===l.type)var x=Ln;else if($n(l))if(In)x=Qn;else{x=Vn;var v=Yn}else!(c=l.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==l.type&&"radio"!==l.type?r&&Ct(r.elementType)&&(x=Ln):x=Gn;switch(x&&(x=x(e,r))?Rn(i,x,n,a):(v&&v(e,l,r),"focusout"===e&&r&&"number"===l.type&&null!=r.memoizedProps.value&&vt(l,"number",l.value)),v=r?He(r):window,e){case"focusin":($n(v)||"true"===v.contentEditable)&&(rr=v,ar=r,or=null);break;case"focusout":or=ar=rr=null;break;case"mousedown":ir=!0;break;case"contextmenu":case"mouseup":case"dragend":ir=!1,lr(i,n,a);break;case"selectionchange":if(nr)break;case"keydown":case"keyup":lr(i,n,a)}var b;if(kn)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Pn?Tn(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(An&&"ko"!==n.locale&&(Pn||"onCompositionStart"!==y?"onCompositionEnd"===y&&Pn&&(b=Wt()):(Ut="value"in(Ft=a)?Ft.value:Ft.textContent,Pn=!0)),0<(v=Wu(r,y)).length&&(y=new cn(y,e,null,n,a),i.push({event:y,listeners:v}),b?y.data=b:null!==(b=zn(n))&&(y.data=b))),(b=jn?function(e,t){switch(e){case"compositionend":return zn(t);case"keypress":return 32!==t.which?null:(En=!0,Cn);case"textInput":return(e=t.data)===Cn&&En?null:e;default:return null}}(e,n):function(e,t){if(Pn)return"compositionend"===e||!kn&&Tn(e,t)?(e=Wt(),Ht=Ut=Ft=null,Pn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return An&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(y=Wu(r,"onBeforeInput")).length&&(v=new cn("onBeforeInput","beforeinput",null,n,a),i.push({event:v,listeners:y}),v.data=b)),function(e,t,n,r,a){if("submit"===t&&n&&n.stateNode===a){var o=Pu((a[Re]||null).action),i=r.submitter;i&&null!==(t=(t=i[Re]||null)?Pu(t.formAction):i.getAttribute("formAction"))&&(o=t,i=null);var l=new Jt("action","action",null,r,a);e.push({event:l,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==wu){var e=i?Nu(a,i):new FormData(a);Ni(n,{pending:!0,data:e,method:a.method,action:o},null,e)}}else"function"===typeof o&&(l.preventDefault(),e=i?Nu(a,i):new FormData(a),Ni(n,{pending:!0,data:e,method:a.method,action:o},o,e))},currentTarget:a}]})}}(i,e,r,n,a)}Mu(i,t)}))}function Hu(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wu(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,o=a.stateNode;if(5!==(a=a.tag)&&26!==a&&27!==a||null===o||(null!=(a=Dt(e,n))&&r.unshift(Hu(e,a,o)),null!=(a=Dt(e,t))&&r.push(Hu(e,a,o))),3===e.tag)return r;e=e.return}return[]}function Yu(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function Vu(e,t,n,r,a){for(var o=t._reactName,i=[];null!==n&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(l=l.tag,null!==s&&s===r)break;5!==l&&26!==l&&27!==l||null===c||(s=c,a?null!=(c=Dt(n,o))&&i.unshift(Hu(n,c,s)):a||null!=(c=Dt(n,o))&&i.push(Hu(n,c,s))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var Gu=/\r\n?/g,Qu=/\u0000|\uFFFD/g;function qu(e){return("string"===typeof e?e:""+e).replace(Gu,"\n").replace(Qu,"")}function Ku(e,t){return t=qu(t),qu(e)===t}function Xu(){}function Zu(e,t,n,r,a,o){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||kt(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&kt(e,""+r);break;case"className":nt(e,"class",r);break;case"tabIndex":nt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":nt(e,n,r);break;case"style":At(e,r,o);break;case"data":if("object"!==t){nt(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=zt(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof o&&("formAction"===n?("input"!==t&&Zu(e,t,"name",a.name,a,null),Zu(e,t,"formEncType",a.formEncType,a,null),Zu(e,t,"formMethod",a.formMethod,a,null),Zu(e,t,"formTarget",a.formTarget,a,null)):(Zu(e,t,"encType",a.encType,a,null),Zu(e,t,"method",a.method,a,null),Zu(e,t,"target",a.target,a,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=zt(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Xu);break;case"onScroll":null!=r&&Du("scroll",e);break;case"onScrollEnd":null!=r&&Du("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(i(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(i(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=zt(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Du("beforetoggle",e),Du("toggle",e),tt(e,"popover",r);break;case"xlinkActuate":rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":rt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":rt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":rt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":rt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":tt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&tt(e,n=Et.get(n)||n,r)}}function Ju(e,t,n,r,a,o){switch(n){case"style":At(e,r,o);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(i(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(i(60));e.innerHTML=n}}break;case"children":"string"===typeof r?kt(e,r):("number"===typeof r||"bigint"===typeof r)&&kt(e,""+r);break;case"onScroll":null!=r&&Du("scroll",e);break;case"onScrollEnd":null!=r&&Du("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Xu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:Ge.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),"function"===typeof(o=null!=(o=e[Re]||null)?o[n]:null)&&e.removeEventListener(t,o,a),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):tt(e,n,r):("function"!==typeof o&&null!==o&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a)))}}function ed(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Du("error",e),Du("load",e);var r,a=!1,o=!1;for(r in n)if(n.hasOwnProperty(r)){var l=n[r];if(null!=l)switch(r){case"src":a=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Zu(e,t,r,l,n,null)}}return o&&Zu(e,t,"srcSet",n.srcSet,n,null),void(a&&Zu(e,t,"src",n.src,n,null));case"input":Du("invalid",e);var s=r=l=o=null,c=null,u=null;for(a in n)if(n.hasOwnProperty(a)){var d=n[a];if(null!=d)switch(a){case"name":o=d;break;case"type":l=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":s=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(i(137,t));break;default:Zu(e,t,a,d,n,null)}}return xt(e,r,s,c,u,l,o,!1),void dt(e);case"select":for(o in Du("invalid",e),a=l=r=null,n)if(n.hasOwnProperty(o)&&null!=(s=n[o]))switch(o){case"value":r=s;break;case"defaultValue":l=s;break;case"multiple":a=s;default:Zu(e,t,o,s,n,null)}return t=r,n=l,e.multiple=!!a,void(null!=t?bt(e,!!a,t,!1):null!=n&&bt(e,!!a,n,!0));case"textarea":for(l in Du("invalid",e),r=o=a=null,n)if(n.hasOwnProperty(l)&&null!=(s=n[l]))switch(l){case"value":a=s;break;case"defaultValue":o=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(null!=s)throw Error(i(91));break;default:Zu(e,t,l,s,n,null)}return wt(e,a,o,r),void dt(e);case"option":for(c in n)if(n.hasOwnProperty(c)&&null!=(a=n[c]))if("selected"===c)e.selected=a&&"function"!==typeof a&&"symbol"!==typeof a;else Zu(e,t,c,a,n,null);return;case"dialog":Du("beforetoggle",e),Du("toggle",e),Du("cancel",e),Du("close",e);break;case"iframe":case"object":Du("load",e);break;case"video":case"audio":for(a=0;a<Ou.length;a++)Du(Ou[a],e);break;case"image":Du("error",e),Du("load",e);break;case"details":Du("toggle",e);break;case"embed":case"source":case"link":Du("error",e),Du("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&null!=(a=n[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Zu(e,t,u,a,n,null)}return;default:if(Ct(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(a=n[d])&&Ju(e,t,d,a,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(null!=(a=n[s])&&Zu(e,t,s,a,n,null))}var td=null,nd=null;function rd(e){return 9===e.nodeType?e:e.ownerDocument}function ad(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function od(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function id(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ld=null;var sd="function"===typeof setTimeout?setTimeout:void 0,cd="function"===typeof clearTimeout?clearTimeout:void 0,ud="function"===typeof Promise?Promise:void 0,dd="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ud?function(e){return ud.resolve(null).then(e).catch(pd)}:sd;function pd(e){setTimeout((function(){throw e}))}function fd(e){return"head"===e}function hd(e,t){var n=t,r=0,a=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType)if("/$"===(n=o.data)){if(0<r&&8>r){n=r;var i=e.ownerDocument;if(1&n&&wd(i.documentElement),2&n&&wd(i.body),4&n)for(wd(n=i.head),i=n.firstChild;i;){var l=i.nextSibling,s=i.nodeName;i[Ie]||"SCRIPT"===s||"STYLE"===s||"LINK"===s&&"stylesheet"===i.rel.toLowerCase()||n.removeChild(i),i=l}}if(0===a)return e.removeChild(o),void Ep(t);a--}else"$"===n||"$?"===n||"$!"===n?a++:r=n.charCodeAt(0)-48;else r=0;n=o}while(n);Ep(t)}function gd(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":gd(n),Be(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function md(e){return"$!"===e.data||"$?"===e.data&&"complete"===e.ownerDocument.readyState}function xd(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}var vd=null;function bd(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}function yd(e,t,n){switch(t=rd(n),e){case"html":if(!(e=t.documentElement))throw Error(i(452));return e;case"head":if(!(e=t.head))throw Error(i(453));return e;case"body":if(!(e=t.body))throw Error(i(454));return e;default:throw Error(i(451))}}function wd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Be(e)}var kd=new Map,Sd=new Set;function jd(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Ad=_.d;_.d={f:function(){var e=Ad.f(),t=Fc();return e||t},r:function(e){var t=Ue(e);null!==t&&5===t.tag&&"form"===t.type?Ri(t):Ad.r(e)},D:function(e){Ad.D(e),Ed("dns-prefetch",e,null)},C:function(e,t){Ad.C(e,t),Ed("preconnect",e,t)},L:function(e,t,n){Ad.L(e,t,n);var r=Cd;if(r&&e&&t){var a='link[rel="preload"][as="'+gt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(a+='[imagesrcset="'+gt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(a+='[imagesizes="'+gt(n.imageSizes)+'"]')):a+='[href="'+gt(e)+'"]';var o=a;switch(t){case"style":o=zd(e);break;case"script":o=$d(e)}kd.has(o)||(e=p({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),kd.set(o,e),null!==r.querySelector(a)||"style"===t&&r.querySelector(Pd(o))||"script"===t&&r.querySelector(Rd(o))||(ed(t=r.createElement("link"),"link",e),Ye(t),r.head.appendChild(t)))}},m:function(e,t){Ad.m(e,t);var n=Cd;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",a='link[rel="modulepreload"][as="'+gt(r)+'"][href="'+gt(e)+'"]',o=a;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=$d(e)}if(!kd.has(o)&&(e=p({rel:"modulepreload",href:e},t),kd.set(o,e),null===n.querySelector(a))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Rd(o)))return}ed(r=n.createElement("link"),"link",e),Ye(r),n.head.appendChild(r)}}},X:function(e,t){Ad.X(e,t);var n=Cd;if(n&&e){var r=We(n).hoistableScripts,a=$d(e),o=r.get(a);o||((o=n.querySelector(Rd(a)))||(e=p({src:e,async:!0},t),(t=kd.get(a))&&Dd(e,t),Ye(o=n.createElement("script")),ed(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(a,o))}},S:function(e,t,n){Ad.S(e,t,n);var r=Cd;if(r&&e){var a=We(r).hoistableStyles,o=zd(e);t=t||"default";var i=a.get(o);if(!i){var l={loading:0,preload:null};if(i=r.querySelector(Pd(o)))l.loading=5;else{e=p({rel:"stylesheet",href:e,"data-precedence":t},n),(n=kd.get(o))&&Md(e,n);var s=i=r.createElement("link");Ye(s),ed(s,"link",e),s._p=new Promise((function(e,t){s.onload=e,s.onerror=t})),s.addEventListener("load",(function(){l.loading|=1})),s.addEventListener("error",(function(){l.loading|=2})),l.loading|=4,_d(i,t,r)}i={type:"stylesheet",instance:i,count:1,state:l},a.set(o,i)}}},M:function(e,t){Ad.M(e,t);var n=Cd;if(n&&e){var r=We(n).hoistableScripts,a=$d(e),o=r.get(a);o||((o=n.querySelector(Rd(a)))||(e=p({src:e,async:!0,type:"module"},t),(t=kd.get(a))&&Dd(e,t),Ye(o=n.createElement("script")),ed(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(a,o))}}};var Cd="undefined"===typeof document?null:document;function Ed(e,t,n){var r=Cd;if(r&&"string"===typeof t&&t){var a=gt(t);a='link[rel="'+e+'"][href="'+a+'"]',"string"===typeof n&&(a+='[crossorigin="'+n+'"]'),Sd.has(a)||(Sd.add(a),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(a)&&(ed(t=r.createElement("link"),"link",e),Ye(t),r.head.appendChild(t)))}}function Td(e,t,n,r){var a,o,l,s,c=(c=W.current)?jd(c):null;if(!c)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=zd(n.href),(r=(n=We(c).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=zd(n.href);var u=We(c).hoistableStyles,d=u.get(e);if(d||(c=c.ownerDocument||c,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=c.querySelector(Pd(e)))&&!u._p&&(d.instance=u,d.state.loading=5),kd.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},kd.set(e,n),u||(a=c,o=e,l=n,s=d.state,a.querySelector('link[rel="preload"][as="style"]['+o+"]")?s.loading=1:(o=a.createElement("link"),s.preload=o,o.addEventListener("load",(function(){return s.loading|=1})),o.addEventListener("error",(function(){return s.loading|=2})),ed(o,"link",l),Ye(o),a.head.appendChild(o))))),t&&null===r)throw Error(i(528,""));return d}if(t&&null!==r)throw Error(i(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=$d(n),(r=(n=We(c).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function zd(e){return'href="'+gt(e)+'"'}function Pd(e){return'link[rel="stylesheet"]['+e+"]"}function Nd(e){return p({},e,{"data-precedence":e.precedence,precedence:null})}function $d(e){return'[src="'+gt(e)+'"]'}function Rd(e){return"script[async]"+e}function Od(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+gt(n.href)+'"]');if(r)return t.instance=r,Ye(r),r;var a=p({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return Ye(r=(e.ownerDocument||e).createElement("style")),ed(r,"style",a),_d(r,n.precedence,e),t.instance=r;case"stylesheet":a=zd(n.href);var o=e.querySelector(Pd(a));if(o)return t.state.loading|=4,t.instance=o,Ye(o),o;r=Nd(n),(a=kd.get(a))&&Md(r,a),Ye(o=(e.ownerDocument||e).createElement("link"));var l=o;return l._p=new Promise((function(e,t){l.onload=e,l.onerror=t})),ed(o,"link",r),t.state.loading|=4,_d(o,n.precedence,e),t.instance=o;case"script":return o=$d(n.src),(a=e.querySelector(Rd(o)))?(t.instance=a,Ye(a),a):(r=n,(a=kd.get(o))&&Dd(r=p({},n),a),Ye(a=(e=e.ownerDocument||e).createElement("script")),ed(a,"link",r),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(i(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,_d(r,n.precedence,e));return t.instance}function _d(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,o=a,i=0;i<r.length;i++){var l=r[i];if(l.dataset.precedence===t)o=l;else if(o!==a)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function Md(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Dd(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var Ld=null;function Id(e,t,n){if(null===Ld){var r=new Map,a=Ld=new Map;a.set(n,r)}else(r=(a=Ld).get(n))||(r=new Map,a.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var o=n[a];if(!(o[Ie]||o[$e]||"link"===e&&"stylesheet"===o.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==o.namespaceURI){var i=o.getAttribute(t)||"";i=e+i;var l=r.get(i);l?l.push(o):r.set(i,[o])}}return r}function Bd(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function Fd(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var Ud=null;function Hd(){}function Wd(){if(this.count--,0===this.count)if(this.stylesheets)Vd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var Yd=null;function Vd(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,Yd=new Map,t.forEach(Gd,e),Yd=null,Wd.call(e))}function Gd(e,t){if(!(4&t.state.loading)){var n=Yd.get(e);if(n)var r=n.get(null);else{n=new Map,Yd.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<a.length;o++){var i=a[o];"LINK"!==i.nodeName&&"not all"===i.getAttribute("media")||(n.set(i.dataset.precedence,i),r=i)}r&&n.set(null,r)}i=(a=t.instance).getAttribute("data-precedence"),(o=n.get(i)||r)===r&&n.set(null,a),n.set(i,a),this.count++,r=Wd.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),o?o.parentNode.insertBefore(a,o.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(a,e.firstChild),t.state.loading|=4}}var Qd={$$typeof:w,Provider:null,Consumer:null,_currentValue:M,_currentValue2:M,_threadCount:0};function qd(e,t,n,r,a,o,i,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=je(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=je(0),this.hiddenUpdates=je(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=o,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function Kd(e,t,n,r,a,o,i,l,s,c,u,d){return e=new qd(e,t,n,i,l,s,c,d),t=1,!0===o&&(t|=24),o=Mr(3,null,null,t),e.current=o,o.stateNode=e,(t=Ra()).refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:r,isDehydrated:n,cache:t},no(o),e}function Xd(e){return e?e=Or:Or}function Zd(e,t,n,r,a,o){a=Xd(a),null===r.context?r.context=a:r.pendingContext=a,(r=ao(t)).payload={element:n},null!==(o=void 0===o?null:o)&&(r.callback=o),null!==(n=oo(e,r,t))&&(Mc(n,0,t),io(n,e,t))}function Jd(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function ep(e,t){Jd(e,t),(e=e.alternate)&&Jd(e,t)}function tp(e){if(13===e.tag){var t=Nr(e,67108864);null!==t&&Mc(t,0,67108864),ep(e,67108864)}}var np=!0;function rp(e,t,n,r){var a=O.T;O.T=null;var o=_.p;try{_.p=2,op(e,t,n,r)}finally{_.p=o,O.T=a}}function ap(e,t,n,r){var a=O.T;O.T=null;var o=_.p;try{_.p=8,op(e,t,n,r)}finally{_.p=o,O.T=a}}function op(e,t,n,r){if(np){var a=ip(r);if(null===a)Uu(e,t,r,lp,n),vp(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return dp=bp(dp,e,t,n,r,a),!0;case"dragenter":return pp=bp(pp,e,t,n,r,a),!0;case"mouseover":return fp=bp(fp,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return hp.set(o,bp(hp.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,gp.set(o,bp(gp.get(o)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(vp(e,r),4&t&&-1<xp.indexOf(e)){for(;null!==a;){var o=Ue(a);if(null!==o)switch(o.tag){case 3:if((o=o.stateNode).current.memoizedState.isDehydrated){var i=ve(o.pendingLanes);if(0!==i){var l=o;for(l.pendingLanes|=2,l.entangledLanes|=2;i;){var s=1<<31-fe(i);l.entanglements[1]|=s,i&=~s}ku(o),0===(6&nc)&&(kc=te()+500,Su(0,!1))}}break;case 13:null!==(l=Nr(o,2))&&Mc(l,0,2),Fc(),ep(o,2)}if(null===(o=ip(r))&&Uu(e,t,r,lp,n),o===a)break;a=o}null!==a&&r.stopPropagation()}else Uu(e,t,r,null,n)}}function ip(e){return sp(e=Nt(e))}var lp=null;function sp(e){if(lp=null,null!==(e=Fe(e))){var t=s(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=c(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return lp=e,null}function cp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case re:return 2;case ae:return 8;case oe:case ie:return 32;case le:return 268435456;default:return 32}default:return 32}}var up=!1,dp=null,pp=null,fp=null,hp=new Map,gp=new Map,mp=[],xp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vp(e,t){switch(e){case"focusin":case"focusout":dp=null;break;case"dragenter":case"dragleave":pp=null;break;case"mouseover":case"mouseout":fp=null;break;case"pointerover":case"pointerout":hp.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gp.delete(t.pointerId)}}function bp(e,t,n,r,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},null!==t&&(null!==(t=Ue(t))&&tp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function yp(e){var t=Fe(e.target);if(null!==t){var n=s(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=c(n)))return e.blockedOn=t,void function(e,t){var n=_.p;try{return _.p=e,t()}finally{_.p=n}}(e.priority,(function(){if(13===n.tag){var e=Oc();e=Te(e);var t=Nr(n,e);null!==t&&Mc(t,0,e),ep(n,e)}}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function wp(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=ip(e.nativeEvent);if(null!==n)return null!==(t=Ue(n))&&tp(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Pt=r,n.target.dispatchEvent(r),Pt=null,t.shift()}return!0}function kp(e,t,n){wp(e)&&n.delete(t)}function Sp(){up=!1,null!==dp&&wp(dp)&&(dp=null),null!==pp&&wp(pp)&&(pp=null),null!==fp&&wp(fp)&&(fp=null),hp.forEach(kp),gp.forEach(kp)}function jp(e,t){e.blockedOn===t&&(e.blockedOn=null,up||(up=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Sp)))}var Ap=null;function Cp(e){Ap!==e&&(Ap=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,(function(){Ap===e&&(Ap=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],a=e[t+2];if("function"!==typeof r){if(null===sp(r||n))continue;break}var o=Ue(n);null!==o&&(e.splice(t,3),t-=3,Ni(o,{pending:!0,data:a,method:n.method,action:r},r,a))}})))}function Ep(e){function t(t){return jp(t,e)}null!==dp&&jp(dp,e),null!==pp&&jp(pp,e),null!==fp&&jp(fp,e),hp.forEach(t),gp.forEach(t);for(var n=0;n<mp.length;n++){var r=mp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<mp.length&&null===(n=mp[0]).blockedOn;)yp(n),null===n.blockedOn&&mp.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var a=n[r],o=n[r+1],i=a[Re]||null;if("function"===typeof o)i||Cp(n);else if(i){var l=null;if(o&&o.hasAttribute("formAction")){if(a=o,i=o[Re]||null)l=i.formAction;else if(null!==sp(a))continue}else l=i.action;"function"===typeof l?n[r+1]=l:(n.splice(r,3),r-=3),Cp(n)}}}function Tp(e){this._internalRoot=e}function zp(e){this._internalRoot=e}zp.prototype.render=Tp.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));Zd(t.current,Oc(),e,t,null,null)},zp.prototype.unmount=Tp.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;Zd(e.current,2,null,e,null,null),Fc(),t[Oe]=null}},zp.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pe();e={blockedOn:null,target:e,priority:t};for(var n=0;n<mp.length&&0!==t&&t<mp[n].priority;n++);mp.splice(n,0,e),0===n&&yp(e)}};var Pp=a.version;if("19.1.0"!==Pp)throw Error(i(527,Pp,"19.1.0"));_.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=s(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var o=a.alternate;if(null===o){if(null!==(r=a.return)){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return u(a),e;if(o===r)return u(a),t;o=o.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=o;else{for(var l=!1,c=a.child;c;){if(c===n){l=!0,n=a,r=o;break}if(c===r){l=!0,r=a,n=o;break}c=c.sibling}if(!l){for(c=o.child;c;){if(c===n){l=!0,n=o,r=a;break}if(c===r){l=!0,r=o,n=a;break}c=c.sibling}if(!l)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?d(e):null)?null:e.stateNode};var Np={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.0"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var $p=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$p.isDisabled&&$p.supportsFiber)try{ue=$p.inject(Np),de=$p}catch(Op){}}t.createRoot=function(e,t){if(!l(e))throw Error(i(299));var n=!1,r="",a=vl,o=bl,s=yl;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(a=t.onUncaughtError),void 0!==t.onCaughtError&&(o=t.onCaughtError),void 0!==t.onRecoverableError&&(s=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=Kd(e,1,!1,null,0,n,r,a,o,s,0,null),e[Oe]=t.current,Bu(e),new Tp(t)},t.hydrateRoot=function(e,t,n){if(!l(e))throw Error(i(299));var r=!1,a="",o=vl,s=bl,c=yl,u=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onUncaughtError&&(o=n.onUncaughtError),void 0!==n.onCaughtError&&(s=n.onCaughtError),void 0!==n.onRecoverableError&&(c=n.onRecoverableError),void 0!==n.unstable_transitionCallbacks&&n.unstable_transitionCallbacks,void 0!==n.formState&&(u=n.formState)),(t=Kd(e,1,!0,t,0,r,a,o,s,c,0,u)).context=Xd(null),n=t.current,(a=ao(r=Te(r=Oc()))).callback=null,oo(n,a,r),n=r,t.current.lanes=n,Ae(t,n),ku(t),e[Oe]=t.current,Bu(e),new zp(t)},t.version="19.1.0"},43:(e,t,n)=>{"use strict";e.exports=n(288)},191:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler");Symbol.for("react.provider");var l=Symbol.for("react.consumer"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.for("react.view_transition"),g=Symbol.for("react.client.reference");function m(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case a:case i:case o:case u:case d:case h:return e;default:switch(e=e&&e.$$typeof){case s:case c:case f:case p:case l:return e;default:return t}}case r:return t}}}t.Hy=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===i||e===o||e===u||e===d||"object"===typeof e&&null!==e&&(e.$$typeof===f||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===c||e.$$typeof===g||void 0!==e.getModuleId)}},288:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function x(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function v(){}function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=x.prototype;var y=b.prototype=new v;y.constructor=b,g(y,x.prototype),y.isPureReactComponent=!0;var w=Array.isArray,k={H:null,A:null,T:null,S:null,V:null},S=Object.prototype.hasOwnProperty;function j(e,t,r,a,o,i){return r=i.ref,{$$typeof:n,type:e,key:t,ref:void 0!==r?r:null,props:i}}function A(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function E(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(){}function z(e,t,a,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s,c,u=!1;if(null===e)u=!0;else switch(l){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0;break;case p:return z((u=e._init)(e._payload),t,a,o,i)}}if(u)return i=i(e),u=""===o?"."+E(e,0):o,w(i)?(a="",null!=u&&(a=u.replace(C,"$&/")+"/"),z(i,t,a,"",(function(e){return e}))):null!=i&&(A(i)&&(s=i,c=a+(null==i.key||e&&e.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+u,i=j(s.type,c,void 0,0,0,s.props)),t.push(i)),1;u=0;var d,h=""===o?".":o+":";if(w(e))for(var g=0;g<e.length;g++)u+=z(o=e[g],t,a,l=h+E(o,g),i);else if("function"===typeof(g=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=f&&d[f]||d["@@iterator"])?d:null))for(e=g.call(e),g=0;!(o=e.next()).done;)u+=z(o=o.value,t,a,l=h+E(o,g++),i);else if("object"===l){if("function"===typeof e.then)return z(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(T,T):(e.status="pending",e.then((function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)}),(function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)}))),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,a,o,i);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function P(e,t,n){if(null==e)return e;var r=[],a=0;return z(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function N(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function R(){}t.Children={map:P,forEach:function(e,t,n){P(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!A(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=x,t.Fragment=a,t.Profiler=i,t.PureComponent=b,t.StrictMode=o,t.Suspense=u,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return k.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=g({},e.props),a=e.key;if(null!=t)for(o in void 0!==t.ref&&void 0,void 0!==t.key&&(a=""+t.key),t)!S.call(t,o)||"key"===o||"__self"===o||"__source"===o||"ref"===o&&void 0===t.ref||(r[o]=t[o]);var o=arguments.length-2;if(1===o)r.children=n;else if(1<o){for(var i=Array(o),l=0;l<o;l++)i[l]=arguments[l+2];r.children=i}return j(e.type,a,void 0,0,0,r)},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:l,_context:e},e},t.createElement=function(e,t,n){var r,a={},o=null;if(null!=t)for(r in void 0!==t.key&&(o=""+t.key),t)S.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(a[r]=t[r]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];a.children=l}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===a[r]&&(a[r]=i[r]);return j(e,o,void 0,0,0,a)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=A,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:N}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=k.T,n={};k.T=n;try{var r=e(),a=k.S;null!==a&&a(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(R,$)}catch(o){$(o)}finally{k.T=t}},t.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},t.use=function(e){return k.H.use(e)},t.useActionState=function(e,t,n){return k.H.useActionState(e,t,n)},t.useCallback=function(e,t){return k.H.useCallback(e,t)},t.useContext=function(e){return k.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return k.H.useDeferredValue(e,t)},t.useEffect=function(e,t,n){var r=k.H;if("function"===typeof n)throw Error("useEffect CRUD overload is not enabled in this build of React.");return r.useEffect(e,t)},t.useId=function(){return k.H.useId()},t.useImperativeHandle=function(e,t,n){return k.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return k.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return k.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return k.H.useMemo(e,t)},t.useOptimistic=function(e,t){return k.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return k.H.useReducer(e,t,n)},t.useRef=function(e){return k.H.useRef(e)},t.useState=function(e){return k.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return k.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return k.H.useTransition()},t.version="19.1.0"},324:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var c=o[s];if(!l(c))return!1;var u=e[c],d=t[c];if(!1===(a=n?n.call(r,u,d,c):void 0)||void 0===a&&u!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},579:(e,t,n)=>{"use strict";e.exports=n(799)},672:(e,t,n)=>{"use strict";var r=n(43);function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var i={d:{f:o,r:function(){throw Error(a(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},l=Symbol.for("react.portal");var s=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(a(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:l,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,i.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&i.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin),a="string"===typeof t.integrity?t.integrity:void 0,o="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?i.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):"script"===n&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&i.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else i.d.m(e)},t.requestFormReset=function(e){i.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},t.useFormStatus=function(){return s.H.useHostTransitionStatus()},t.version="19.1.0"},799:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(e,t,r){var a=null;if(void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),"key"in t)for(var o in r={},t)"key"!==o&&(r[o]=t[o]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:a,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=a,t.jsxs=a},853:(e,t,n)=>{"use strict";e.exports=n(896)},896:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<o(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var l=2*(r+1)-1,s=e[l],c=l+1,u=e[c];if(0>o(s,n))c<a&&0>o(u,s)?(e[r]=u,e[c]=n,r=c):(e[r]=s,e[l]=n,r=l);else{if(!(c<a&&0>o(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,p=null,f=3,h=!1,g=!1,m=!1,x=!1,v="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(u);null!==t;){if(null===t.callback)a(u);else{if(!(t.startTime<=e))break;a(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function k(e){if(m=!1,w(e),!g)if(null!==r(c))g=!0,j||(j=!0,S());else{var t=r(u);null!==t&&$(k,t.startTime-e)}}var S,j=!1,A=-1,C=5,E=-1;function T(){return!!x||!(t.unstable_now()-E<C)}function z(){if(x=!1,j){var e=t.unstable_now();E=e;var n=!0;try{e:{g=!1,m&&(m=!1,b(A),A=-1),h=!0;var o=f;try{t:{for(w(e),p=r(c);null!==p&&!(p.expirationTime>e&&T());){var i=p.callback;if("function"===typeof i){p.callback=null,f=p.priorityLevel;var l=i(p.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof l){p.callback=l,w(e),n=!0;break t}p===r(c)&&a(c),w(e)}else a(c);p=r(c)}if(null!==p)n=!0;else{var s=r(u);null!==s&&$(k,s.startTime-e),n=!1}}break e}finally{p=null,f=o,h=!1}n=void 0}}finally{n?S():j=!1}}}if("function"===typeof y)S=function(){y(z)};else if("undefined"!==typeof MessageChannel){var P=new MessageChannel,N=P.port2;P.port1.onmessage=z,S=function(){N.postMessage(null)}}else S=function(){v(z,0)};function $(e,n){A=v((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_requestPaint=function(){x=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,a,o){var i=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?i+o:i:o=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>i?(e.sortIndex=o,n(u,e),null===r(c)&&e===r(u)&&(m?(b(A),A=-1):m=!0,$(k,o-i))):(e.sortIndex=l,n(c,e),g||h||(g=!0,j||(j=!0,S()))),e},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&a&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>r[e]));return i.default=()=>r,n.d(o,i),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".f5fc3553.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="stackflovfront:";n.l=(r,a,o,i)=>{if(e[r])e[r].push(a);else{var l,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+o),l.src=r),e[r]=[a];var p=(t,n)=>{l.onerror=l.onload=null,clearTimeout(f);var a=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(n))),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={792:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise(((n,r)=>a=e[t]=[n,r]));r.push(a[2]=o);var i=n.p+n.u(t),l=new Error;n.l(i,(r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,a[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var a,o,i=r[0],l=r[1],s=r[2],c=0;if(i.some((t=>0!==e[t]))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)s(n)}for(t&&t(r);c<i.length;c++)o=i[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkstackflovfront=self.webpackChunkstackflovfront||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e={};n.r(e),n.d(e,{hasBrowserEnv:()=>Ma,hasStandardBrowserEnv:()=>La,hasStandardBrowserWebWorkerEnv:()=>Ia,navigator:()=>Da,origin:()=>Ba});var t,r=n(43),a=n.t(r,2),o=n(391),i=n(950),l=n.t(i,2);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(t||(t={}));const c="popstate";function u(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function d(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function p(e,t){return{usr:e.state,key:e.key,idx:t}}function f(e,t,n,r){return void 0===n&&(n=null),s({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?g(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function h(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function g(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function m(e,n,r,a){void 0===a&&(a={});let{window:o=document.defaultView,v5Compat:i=!1}=a,l=o.history,d=t.Pop,g=null,m=x();function x(){return(l.state||{idx:null}).idx}function v(){d=t.Pop;let e=x(),n=null==e?null:e-m;m=e,g&&g({action:d,location:y.location,delta:n})}function b(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,n="string"===typeof e?e:h(e);return n=n.replace(/ $/,"%20"),u(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==m&&(m=0,l.replaceState(s({},l.state,{idx:m}),""));let y={get action(){return d},get location(){return e(o,l)},listen(e){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(c,v),g=e,()=>{o.removeEventListener(c,v),g=null}},createHref:e=>n(o,e),createURL:b,encodeLocation(e){let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,n){d=t.Push;let a=f(y.location,e,n);r&&r(a,e),m=x()+1;let s=p(a,m),c=y.createHref(a);try{l.pushState(s,"",c)}catch(u){if(u instanceof DOMException&&"DataCloneError"===u.name)throw u;o.location.assign(c)}i&&g&&g({action:d,location:y.location,delta:1})},replace:function(e,n){d=t.Replace;let a=f(y.location,e,n);r&&r(a,e),m=x();let o=p(a,m),s=y.createHref(a);l.replaceState(o,"",s),i&&g&&g({action:d,location:y.location,delta:0})},go:e=>l.go(e)};return y}var x;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(x||(x={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function v(e,t,n){return void 0===n&&(n="/"),b(e,t,n,!1)}function b(e,t,n,r){let a=R(("string"===typeof t?g(t):t).pathname||"/",n);if(null==a)return null;let o=y(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let i=null;for(let l=0;null==i&&l<o.length;++l){let e=$(a);i=P(o[l],e,r)}return i}function y(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let a=(e,a,o)=>{let i={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};i.relativePath.startsWith("/")&&(u(i.relativePath.startsWith(r),'Absolute route path "'+i.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(r.length));let l=L([r,i.relativePath]),s=n.concat(i);e.children&&e.children.length>0&&(u(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),y(e.children,t,s,l)),(null!=e.path||e.index)&&t.push({path:l,score:z(l,e.index),routesMeta:s})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of w(e.path))a(e,t,r);else a(e,t)})),t}function w(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return a?[o,""]:[o];let i=w(r.join("/")),l=[];return l.push(...i.map((e=>""===e?o:[o,e].join("/")))),a&&l.push(...i),l.map((t=>e.startsWith("/")&&""===t?"/":t))}const k=/^:[\w-]+$/,S=3,j=2,A=1,C=10,E=-2,T=e=>"*"===e;function z(e,t){let n=e.split("/"),r=n.length;return n.some(T)&&(r+=E),t&&(r+=j),n.filter((e=>!T(e))).reduce(((e,t)=>e+(k.test(t)?S:""===t?A:C)),r)}function P(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,a={},o="/",i=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,c="/"===o?t:t.slice(o.length)||"/",u=N({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},c),d=e.route;if(!u&&s&&n&&!r[r.length-1].route.index&&(u=N({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(a,u.params),i.push({params:a,pathname:L([o,u.pathname]),pathnameBase:I(L([o,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(o=L([o,u.pathnameBase]))}return i}function N(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);d("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))");let o=new RegExp(a,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=l[n]||"";i=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=a&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:o,pathnameBase:i,pattern:e}}function $(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return d(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function R(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function O(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function _(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function M(e,t){let n=_(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function D(e,t,n,r){let a;void 0===r&&(r=!1),"string"===typeof e?a=g(e):(a=s({},e),u(!a.pathname||!a.pathname.includes("?"),O("?","pathname","search",a)),u(!a.pathname||!a.pathname.includes("#"),O("#","pathname","hash",a)),u(!a.search||!a.search.includes("#"),O("#","search","hash",a)));let o,i=""===e||""===a.pathname,l=i?"/":a.pathname;if(null==l)o=n;else{let e=t.length-1;if(!r&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}o=e>=0?t[e]:"/"}let c=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"===typeof e?g(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:B(r),hash:F(a)}}(a,o),d=l&&"/"!==l&&l.endsWith("/"),p=(i||"."===l)&&n.endsWith("/");return c.pathname.endsWith("/")||!d&&!p||(c.pathname+="/"),c}const L=e=>e.join("/").replace(/\/\/+/g,"/"),I=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),B=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",F=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function U(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const H=["post","put","patch","delete"],W=(new Set(H),["get",...H]);new Set(W),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y.apply(this,arguments)}const V=r.createContext(null);const G=r.createContext(null);const Q=r.createContext(null);const q=r.createContext(null);const K=r.createContext({outlet:null,matches:[],isDataRoute:!1});const X=r.createContext(null);function Z(){return null!=r.useContext(q)}function J(){return Z()||u(!1),r.useContext(q).location}function ee(e){r.useContext(Q).static||r.useLayoutEffect(e)}function te(){let{isDataRoute:e}=r.useContext(K);return e?function(){let{router:e}=pe(ue.UseNavigateStable),t=he(de.UseNavigateStable),n=r.useRef(!1);return ee((()=>{n.current=!0})),r.useCallback((function(r,a){void 0===a&&(a={}),n.current&&("number"===typeof r?e.navigate(r):e.navigate(r,Y({fromRouteId:t},a)))}),[e,t])}():function(){Z()||u(!1);let e=r.useContext(V),{basename:t,future:n,navigator:a}=r.useContext(Q),{matches:o}=r.useContext(K),{pathname:i}=J(),l=JSON.stringify(M(o,n.v7_relativeSplatPath)),s=r.useRef(!1);return ee((()=>{s.current=!0})),r.useCallback((function(n,r){if(void 0===r&&(r={}),!s.current)return;if("number"===typeof n)return void a.go(n);let o=D(n,JSON.parse(l),i,"path"===r.relative);null==e&&"/"!==t&&(o.pathname="/"===o.pathname?t:L([t,o.pathname])),(r.replace?a.replace:a.push)(o,r.state,r)}),[t,a,l,i,e])}()}function ne(){let{matches:e}=r.useContext(K),t=e[e.length-1];return t?t.params:{}}function re(e,t){let{relative:n}=void 0===t?{}:t,{future:a}=r.useContext(Q),{matches:o}=r.useContext(K),{pathname:i}=J(),l=JSON.stringify(M(o,a.v7_relativeSplatPath));return r.useMemo((()=>D(e,JSON.parse(l),i,"path"===n)),[e,l,i,n])}function ae(e,n,a,o){Z()||u(!1);let{navigator:i,static:l}=r.useContext(Q),{matches:s}=r.useContext(K),c=s[s.length-1],d=c?c.params:{},p=(c&&c.pathname,c?c.pathnameBase:"/");c&&c.route;let f,h=J();if(n){var m;let e="string"===typeof n?g(n):n;"/"===p||(null==(m=e.pathname)?void 0:m.startsWith(p))||u(!1),f=e}else f=h;let x=f.pathname||"/",b=x;if("/"!==p){let e=p.replace(/^\//,"").split("/");b="/"+x.replace(/^\//,"").split("/").slice(e.length).join("/")}let y=!l&&a&&a.matches&&a.matches.length>0?a.matches:v(e,{pathname:b});let w=ce(y&&y.map((e=>Object.assign({},e,{params:Object.assign({},d,e.params),pathname:L([p,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?p:L([p,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),s,a,o);return n&&w?r.createElement(q.Provider,{value:{location:Y({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:t.Pop}},w):w}function oe(){let e=function(){var e;let t=r.useContext(X),n=fe(de.UseRouteError),a=he(de.UseRouteError);if(void 0!==t)return t;return null==(e=n.errors)?void 0:e[a]}(),t=U(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a};return r.createElement(r.Fragment,null,r.createElement("h2",null,"Unexpected Application Error!"),r.createElement("h3",{style:{fontStyle:"italic"}},t),n?r.createElement("pre",{style:o},n):null,null)}const ie=r.createElement(oe,null);class le extends r.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?r.createElement(K.Provider,{value:this.props.routeContext},r.createElement(X.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function se(e){let{routeContext:t,match:n,children:a}=e,o=r.useContext(V);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),r.createElement(K.Provider,{value:t},a)}function ce(e,t,n,a){var o;if(void 0===t&&(t=[]),void 0===n&&(n=null),void 0===a&&(a=null),null==e){var i;if(!n)return null;if(n.errors)e=n.matches;else{if(!(null!=(i=a)&&i.v7_partialHydration&&0===t.length&&!n.initialized&&n.matches.length>0))return null;e=n.matches}}let l=e,s=null==(o=n)?void 0:o.errors;if(null!=s){let e=l.findIndex((e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id])));e>=0||u(!1),l=l.slice(0,Math.min(l.length,e+1))}let c=!1,d=-1;if(n&&a&&a.v7_partialHydration)for(let r=0;r<l.length;r++){let e=l[r];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=r),e.route.id){let{loaderData:t,errors:r}=n,a=e.route.loader&&void 0===t[e.route.id]&&(!r||void 0===r[e.route.id]);if(e.route.lazy||a){c=!0,l=d>=0?l.slice(0,d+1):[l[0]];break}}}return l.reduceRight(((e,a,o)=>{let i,u=!1,p=null,f=null;var h;n&&(i=s&&a.route.id?s[a.route.id]:void 0,p=a.route.errorElement||ie,c&&(d<0&&0===o?(h="route-fallback",!1||ge[h]||(ge[h]=!0),u=!0,f=null):d===o&&(u=!0,f=a.route.hydrateFallbackElement||null)));let g=t.concat(l.slice(0,o+1)),m=()=>{let t;return t=i?p:u?f:a.route.Component?r.createElement(a.route.Component,null):a.route.element?a.route.element:e,r.createElement(se,{match:a,routeContext:{outlet:e,matches:g,isDataRoute:null!=n},children:t})};return n&&(a.route.ErrorBoundary||a.route.errorElement||0===o)?r.createElement(le,{location:n.location,revalidation:n.revalidation,component:p,error:i,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()}),null)}var ue=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ue||{}),de=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(de||{});function pe(e){let t=r.useContext(V);return t||u(!1),t}function fe(e){let t=r.useContext(G);return t||u(!1),t}function he(e){let t=function(){let e=r.useContext(K);return e||u(!1),e}(),n=t.matches[t.matches.length-1];return n.route.id||u(!1),n.route.id}const ge={};function me(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}a.startTransition;function xe(e){u(!1)}function ve(e){let{basename:n="/",children:a=null,location:o,navigationType:i=t.Pop,navigator:l,static:s=!1,future:c}=e;Z()&&u(!1);let d=n.replace(/^\/*/,"/"),p=r.useMemo((()=>({basename:d,navigator:l,static:s,future:Y({v7_relativeSplatPath:!1},c)})),[d,c,l,s]);"string"===typeof o&&(o=g(o));let{pathname:f="/",search:h="",hash:m="",state:x=null,key:v="default"}=o,b=r.useMemo((()=>{let e=R(f,d);return null==e?null:{location:{pathname:e,search:h,hash:m,state:x,key:v},navigationType:i}}),[d,f,h,m,x,v,i]);return null==b?null:r.createElement(Q.Provider,{value:p},r.createElement(q.Provider,{children:a,value:b}))}function be(e){let{children:t,location:n}=e;return ae(ye(t),n)}new Promise((()=>{}));r.Component;function ye(e,t){void 0===t&&(t=[]);let n=[];return r.Children.forEach(e,((e,a)=>{if(!r.isValidElement(e))return;let o=[...t,a];if(e.type===r.Fragment)return void n.push.apply(n,ye(e.props.children,o));e.type!==xe&&u(!1),e.props.index&&e.props.children&&u(!1);let i={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(i.children=ye(e.props.children,o)),n.push(i)})),n}function we(){return we=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},we.apply(this,arguments)}function ke(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function Se(e){return void 0===e&&(e=""),new URLSearchParams("string"===typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce(((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map((e=>[n,e])):[[n,r]])}),[]))}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const je=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(lw){}new Map;const Ae=a.startTransition;l.flushSync,a.useId;function Ce(e){let{basename:t,children:n,future:a,window:o}=e,i=r.useRef();var l;null==i.current&&(i.current=(void 0===(l={window:o,v5Compat:!0})&&(l={}),m((function(e,t){let{pathname:n,search:r,hash:a}=e.location;return f("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:h(t)}),null,l)));let s=i.current,[c,u]=r.useState({action:s.action,location:s.location}),{v7_startTransition:d}=a||{},p=r.useCallback((e=>{d&&Ae?Ae((()=>u(e))):u(e)}),[u,d]);return r.useLayoutEffect((()=>s.listen(p)),[s,p]),r.useEffect((()=>me(a)),[a]),r.createElement(ve,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:s,future:a})}const Ee="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,Te=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ze=r.forwardRef((function(e,t){let n,{onClick:a,relative:o,reloadDocument:i,replace:l,state:s,target:c,to:d,preventScrollReset:p,viewTransition:f}=e,g=ke(e,je),{basename:m}=r.useContext(Q),x=!1;if("string"===typeof d&&Te.test(d)&&(n=d,Ee))try{let e=new URL(window.location.href),t=d.startsWith("//")?new URL(e.protocol+d):new URL(d),n=R(t.pathname,m);t.origin===e.origin&&null!=n?d=n+t.search+t.hash:x=!0}catch(lw){}let v=function(e,t){let{relative:n}=void 0===t?{}:t;Z()||u(!1);let{basename:a,navigator:o}=r.useContext(Q),{hash:i,pathname:l,search:s}=re(e,{relative:n}),c=l;return"/"!==a&&(c="/"===l?a:L([a,l])),o.createHref({pathname:c,search:s,hash:i})}(d,{relative:o}),b=function(e,t){let{target:n,replace:a,state:o,preventScrollReset:i,relative:l,viewTransition:s}=void 0===t?{}:t,c=te(),u=J(),d=re(e,{relative:l});return r.useCallback((t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,n)){t.preventDefault();let n=void 0!==a?a:h(u)===h(d);c(e,{replace:n,state:o,preventScrollReset:i,relative:l,viewTransition:s})}}),[u,c,d,a,o,n,e,i,l,s])}(d,{replace:l,state:s,target:c,preventScrollReset:p,relative:o,viewTransition:f});return r.createElement("a",we({},g,{href:n||v,onClick:x||i?a:function(e){a&&a(e),e.defaultPrevented||b(e)},ref:t,target:c}))}));var Pe,Ne;function $e(e){let t=r.useRef(Se(e)),n=r.useRef(!1),a=J(),o=r.useMemo((()=>function(e,t){let n=Se(e);return t&&t.forEach(((e,r)=>{n.has(r)||t.getAll(r).forEach((e=>{n.append(r,e)}))})),n}(a.search,n.current?null:t.current)),[a.search]),i=te(),l=r.useCallback(((e,t)=>{const r=Se("function"===typeof e?e(o):e);n.current=!0,i("?"+r,t)}),[i,o]);return[o,l]}(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Pe||(Pe={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Ne||(Ne={}));var Re=function(){return Re=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},Re.apply(this,arguments)};Object.create;function Oe(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var _e=n(324),Me=n.n(_e),De="-ms-",Le="-moz-",Ie="-webkit-",Be="comm",Fe="rule",Ue="decl",He="@keyframes",We=Math.abs,Ye=String.fromCharCode,Ve=Object.assign;function Ge(e){return e.trim()}function Qe(e,t){return(e=t.exec(e))?e[0]:e}function qe(e,t,n){return e.replace(t,n)}function Ke(e,t,n){return e.indexOf(t,n)}function Xe(e,t){return 0|e.charCodeAt(t)}function Ze(e,t,n){return e.slice(t,n)}function Je(e){return e.length}function et(e){return e.length}function tt(e,t){return t.push(e),e}function nt(e,t){return e.filter((function(e){return!Qe(e,t)}))}var rt=1,at=1,ot=0,it=0,lt=0,st="";function ct(e,t,n,r,a,o,i,l){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:rt,column:at,length:i,return:"",siblings:l}}function ut(e,t){return Ve(ct("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function dt(e){for(;e.root;)e=ut(e.root,{children:[e]});tt(e,e.siblings)}function pt(){return lt=it>0?Xe(st,--it):0,at--,10===lt&&(at=1,rt--),lt}function ft(){return lt=it<ot?Xe(st,it++):0,at++,10===lt&&(at=1,rt++),lt}function ht(){return Xe(st,it)}function gt(){return it}function mt(e,t){return Ze(st,e,t)}function xt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function vt(e){return rt=at=1,ot=Je(st=e),it=0,[]}function bt(e){return st="",e}function yt(e){return Ge(mt(it-1,St(91===e?e+2:40===e?e+1:e)))}function wt(e){for(;(lt=ht())&&lt<33;)ft();return xt(e)>2||xt(lt)>3?"":" "}function kt(e,t){for(;--t&&ft()&&!(lt<48||lt>102||lt>57&&lt<65||lt>70&&lt<97););return mt(e,gt()+(t<6&&32==ht()&&32==ft()))}function St(e){for(;ft();)switch(lt){case e:return it;case 34:case 39:34!==e&&39!==e&&St(lt);break;case 40:41===e&&St(e);break;case 92:ft()}return it}function jt(e,t){for(;ft()&&e+lt!==57&&(e+lt!==84||47!==ht()););return"/*"+mt(t,it-1)+"*"+Ye(47===e?e:ft())}function At(e){for(;!xt(ht());)ft();return mt(e,it)}function Ct(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Et(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case Ue:return e.return=e.return||e.value;case Be:return"";case He:return e.return=e.value+"{"+Ct(e.children,r)+"}";case Fe:if(!Je(e.value=e.props.join(",")))return""}return Je(n=Ct(e.children,r))?e.return=e.value+"{"+n+"}":""}function Tt(e,t,n){switch(function(e,t){return 45^Xe(e,0)?(((t<<2^Xe(e,0))<<2^Xe(e,1))<<2^Xe(e,2))<<2^Xe(e,3):0}(e,t)){case 5103:return Ie+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ie+e+e;case 4789:return Le+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Ie+e+Le+e+De+e+e;case 5936:switch(Xe(e,t+11)){case 114:return Ie+e+De+qe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Ie+e+De+qe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Ie+e+De+qe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Ie+e+De+e+e;case 6165:return Ie+e+De+"flex-"+e+e;case 5187:return Ie+e+qe(e,/(\w+).+(:[^]+)/,Ie+"box-$1$2"+De+"flex-$1$2")+e;case 5443:return Ie+e+De+"flex-item-"+qe(e,/flex-|-self/g,"")+(Qe(e,/flex-|baseline/)?"":De+"grid-row-"+qe(e,/flex-|-self/g,""))+e;case 4675:return Ie+e+De+"flex-line-pack"+qe(e,/align-content|flex-|-self/g,"")+e;case 5548:return Ie+e+De+qe(e,"shrink","negative")+e;case 5292:return Ie+e+De+qe(e,"basis","preferred-size")+e;case 6060:return Ie+"box-"+qe(e,"-grow","")+Ie+e+De+qe(e,"grow","positive")+e;case 4554:return Ie+qe(e,/([^-])(transform)/g,"$1"+Ie+"$2")+e;case 6187:return qe(qe(qe(e,/(zoom-|grab)/,Ie+"$1"),/(image-set)/,Ie+"$1"),e,"")+e;case 5495:case 3959:return qe(e,/(image-set\([^]*)/,Ie+"$1$`$1");case 4968:return qe(qe(e,/(.+:)(flex-)?(.*)/,Ie+"box-pack:$3"+De+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ie+e+e;case 4200:if(!Qe(e,/flex-|baseline/))return De+"grid-column-align"+Ze(e,t)+e;break;case 2592:case 3360:return De+qe(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,Qe(e.props,/grid-\w+-end/)}))?~Ke(e+(n=n[t].value),"span",0)?e:De+qe(e,"-start","")+e+De+"grid-row-span:"+(~Ke(n,"span",0)?Qe(n,/\d+/):+Qe(n,/\d+/)-+Qe(e,/\d+/))+";":De+qe(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return Qe(e.props,/grid-\w+-start/)}))?e:De+qe(qe(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return qe(e,/(.+)-inline(.+)/,Ie+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Je(e)-1-t>6)switch(Xe(e,t+1)){case 109:if(45!==Xe(e,t+4))break;case 102:return qe(e,/(.+:)(.+)-([^]+)/,"$1"+Ie+"$2-$3$1"+Le+(108==Xe(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Ke(e,"stretch",0)?Tt(qe(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return qe(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,a,o,i,l){return De+n+":"+r+l+(a?De+n+"-span:"+(o?i:+i-+r)+l:"")+e}));case 4949:if(121===Xe(e,t+6))return qe(e,":",":"+Ie)+e;break;case 6444:switch(Xe(e,45===Xe(e,14)?18:11)){case 120:return qe(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ie+(45===Xe(e,14)?"inline-":"")+"box$3$1"+Ie+"$2$3$1"+De+"$2box$3")+e;case 100:return qe(e,":",":"+De)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return qe(e,"scroll-","scroll-snap-")+e}return e}function zt(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ue:return void(e.return=Tt(e.value,e.length,n));case He:return Ct([ut(e,{value:qe(e.value,"@","@"+Ie)})],r);case Fe:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(Qe(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":dt(ut(e,{props:[qe(t,/:(read-\w+)/,":-moz-$1")]})),dt(ut(e,{props:[t]})),Ve(e,{props:nt(n,r)});break;case"::placeholder":dt(ut(e,{props:[qe(t,/:(plac\w+)/,":"+Ie+"input-$1")]})),dt(ut(e,{props:[qe(t,/:(plac\w+)/,":-moz-$1")]})),dt(ut(e,{props:[qe(t,/:(plac\w+)/,De+"input-$1")]})),dt(ut(e,{props:[t]})),Ve(e,{props:nt(n,r)})}return""}))}}function Pt(e){return bt(Nt("",null,null,null,[""],e=vt(e),0,[0],e))}function Nt(e,t,n,r,a,o,i,l,s){for(var c=0,u=0,d=i,p=0,f=0,h=0,g=1,m=1,x=1,v=0,b="",y=a,w=o,k=r,S=b;m;)switch(h=v,v=ft()){case 40:if(108!=h&&58==Xe(S,d-1)){-1!=Ke(S+=qe(yt(v),"&","&\f"),"&\f",We(c?l[c-1]:0))&&(x=-1);break}case 34:case 39:case 91:S+=yt(v);break;case 9:case 10:case 13:case 32:S+=wt(h);break;case 92:S+=kt(gt()-1,7);continue;case 47:switch(ht()){case 42:case 47:tt(Rt(jt(ft(),gt()),t,n,s),s);break;default:S+="/"}break;case 123*g:l[c++]=Je(S)*x;case 125*g:case 59:case 0:switch(v){case 0:case 125:m=0;case 59+u:-1==x&&(S=qe(S,/\f/g,"")),f>0&&Je(S)-d&&tt(f>32?Ot(S+";",r,n,d-1,s):Ot(qe(S," ","")+";",r,n,d-2,s),s);break;case 59:S+=";";default:if(tt(k=$t(S,t,n,c,u,a,l,b,y=[],w=[],d,o),o),123===v)if(0===u)Nt(S,t,k,k,y,o,d,l,w);else switch(99===p&&110===Xe(S,3)?100:p){case 100:case 108:case 109:case 115:Nt(e,k,k,r&&tt($t(e,k,k,0,0,a,l,b,a,y=[],d,w),w),a,w,d,l,r?y:w);break;default:Nt(S,k,k,k,[""],w,0,l,w)}}c=u=f=0,g=x=1,b=S="",d=i;break;case 58:d=1+Je(S),f=h;default:if(g<1)if(123==v)--g;else if(125==v&&0==g++&&125==pt())continue;switch(S+=Ye(v),v*g){case 38:x=u>0?1:(S+="\f",-1);break;case 44:l[c++]=(Je(S)-1)*x,x=1;break;case 64:45===ht()&&(S+=yt(ft())),p=ht(),u=d=Je(b=S+=At(gt())),v++;break;case 45:45===h&&2==Je(S)&&(g=0)}}return o}function $t(e,t,n,r,a,o,i,l,s,c,u,d){for(var p=a-1,f=0===a?o:[""],h=et(f),g=0,m=0,x=0;g<r;++g)for(var v=0,b=Ze(e,p+1,p=We(m=i[g])),y=e;v<h;++v)(y=Ge(m>0?f[v]+" "+b:qe(b,/&\f/g,f[v])))&&(s[x++]=y);return ct(e,t,n,0===a?Fe:l,s,c,u,d)}function Rt(e,t,n,r){return ct(e,t,n,Be,Ye(lt),Ze(e,2,-2),0,r)}function Ot(e,t,n,r,a){return ct(e,t,n,Ue,Ze(e,0,r),Ze(e,r+1,-1),r,a)}var _t={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Mt="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_BASE_URL:"https://api.stackflov.com"}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_BASE_URL:"https://api.stackflov.com"}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_BASE_URL:"https://api.stackflov.com"}.SC_ATTR)||"data-styled",Dt="active",Lt="data-styled-version",It="6.1.17",Bt="/*!sc*/\n",Ft="undefined"!=typeof window&&"HTMLElement"in window,Ut=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_BASE_URL:"https://api.stackflov.com"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_BASE_URL:"https://api.stackflov.com"}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_BASE_URL:"https://api.stackflov.com"}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_BASE_URL:"https://api.stackflov.com"}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_BASE_URL:"https://api.stackflov.com"}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_BASE_URL:"https://api.stackflov.com"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_BASE_URL:"https://api.stackflov.com"}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_BASE_URL:"https://api.stackflov.com"}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_BASE_URL:"https://api.stackflov.com"}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_BASE_URL:"https://api.stackflov.com"}.SC_DISABLE_SPEEDY)),Ht=(new Set,Object.freeze([])),Wt=Object.freeze({});function Yt(e,t,n){return void 0===n&&(n=Wt),e.theme!==n.theme&&e.theme||t||n.theme}var Vt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Gt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Qt=/(^-|-$)/g;function qt(e){return e.replace(Gt,"-").replace(Qt,"")}var Kt=/(a)(d)/gi,Xt=function(e){return String.fromCharCode(e+(e>25?39:97))};function Zt(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Xt(t%52)+n;return(Xt(t%52)+n).replace(Kt,"$1-$2")}var Jt,en=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},tn=function(e){return en(5381,e)};function nn(e){return Zt(tn(e)>>>0)}function rn(e){return e.displayName||e.name||"Component"}function an(e){return"string"==typeof e&&!0}var on="function"==typeof Symbol&&Symbol.for,ln=on?Symbol.for("react.memo"):60115,sn=on?Symbol.for("react.forward_ref"):60112,cn={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},un={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},dn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},pn=((Jt={})[sn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Jt[ln]=dn,Jt);function fn(e){return("type"in(t=e)&&t.type.$$typeof)===ln?dn:"$$typeof"in e?pn[e.$$typeof]:cn;var t}var hn=Object.defineProperty,gn=Object.getOwnPropertyNames,mn=Object.getOwnPropertySymbols,xn=Object.getOwnPropertyDescriptor,vn=Object.getPrototypeOf,bn=Object.prototype;function yn(e,t,n){if("string"!=typeof t){if(bn){var r=vn(t);r&&r!==bn&&yn(e,r,n)}var a=gn(t);mn&&(a=a.concat(mn(t)));for(var o=fn(e),i=fn(t),l=0;l<a.length;++l){var s=a[l];if(!(s in un||n&&n[s]||i&&s in i||o&&s in o)){var c=xn(t,s);try{hn(e,s,c)}catch(e){}}}}return e}function wn(e){return"function"==typeof e}function kn(e){return"object"==typeof e&&"styledComponentId"in e}function Sn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function jn(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function An(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Cn(e,t,n){if(void 0===n&&(n=!1),!n&&!An(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Cn(e[r],t[r]);else if(An(t))for(var r in t)e[r]=Cn(e[r],t[r]);return e}function En(e,t){Object.defineProperty(e,"toString",{value:t})}function Tn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var zn=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw Tn(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var o=r;o<a;o++)this.groupSizes[o]=0}for(var i=this.indexOfGroup(e+1),l=(o=0,t.length);o<l;o++)this.tag.insertRule(i,t[o])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,o=r;o<a;o++)t+="".concat(this.tag.getRule(o)).concat(Bt);return t},e}(),Pn=new Map,Nn=new Map,$n=1,Rn=function(e){if(Pn.has(e))return Pn.get(e);for(;Nn.has($n);)$n++;var t=$n++;return Pn.set(e,t),Nn.set(t,e),t},On=function(e,t){$n=t+1,Pn.set(e,t),Nn.set(t,e)},_n="style[".concat(Mt,"][").concat(Lt,'="').concat(It,'"]'),Mn=new RegExp("^".concat(Mt,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Dn=function(e,t,n){for(var r,a=n.split(","),o=0,i=a.length;o<i;o++)(r=a[o])&&e.registerName(t,r)},Ln=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Bt),a=[],o=0,i=r.length;o<i;o++){var l=r[o].trim();if(l){var s=l.match(Mn);if(s){var c=0|parseInt(s[1],10),u=s[2];0!==c&&(On(u,c),Dn(e,u,s[3]),e.getTag().insertRules(c,a)),a.length=0}else a.push(l)}}},In=function(e){for(var t=document.querySelectorAll(_n),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(Mt)!==Dt&&(Ln(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function Bn(){return n.nc}var Fn=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(Mt,"]")));return t[t.length-1]}(n),o=void 0!==a?a.nextSibling:null;r.setAttribute(Mt,Dt),r.setAttribute(Lt,It);var i=Bn();return i&&r.setAttribute("nonce",i),n.insertBefore(r,o),r},Un=function(){function e(e){this.element=Fn(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}throw Tn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Hn=function(){function e(e){this.element=Fn(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Wn=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Yn=Ft,Vn={isServer:!Ft,useCSSOMInjection:!Ut},Gn=function(){function e(e,t,n){void 0===e&&(e=Wt),void 0===t&&(t={});var r=this;this.options=Re(Re({},Vn),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Ft&&Yn&&(Yn=!1,In(this)),En(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return Nn.get(e)}(n);if(void 0===a)return"continue";var o=e.names.get(a),i=t.getGroup(n);if(void 0===o||!o.size||0===i.length)return"continue";var l="".concat(Mt,".g").concat(n,'[id="').concat(a,'"]'),s="";void 0!==o&&o.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(i).concat(l,'{content:"').concat(s,'"}').concat(Bt)},o=0;o<n;o++)a(o);return r}(r)}))}return e.registerId=function(e){return Rn(e)},e.prototype.rehydrate=function(){!this.server&&Ft&&In(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(Re(Re({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Wn(n):t?new Un(n):new Hn(n)}(this.options),new zn(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Rn(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Rn(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Rn(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Qn=/&/g,qn=/^\s*\/\/.*$/gm;function Kn(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Kn(e.children,t)),e}))}function Xn(e){var t,n,r,a=void 0===e?Wt:e,o=a.options,i=void 0===o?Wt:o,l=a.plugins,s=void 0===l?Ht:l,c=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},u=s.slice();u.push((function(e){e.type===Fe&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Qn,n).replace(r,c))})),i.prefix&&u.push(zt),u.push(Et);var d=function(e,a,o,l){void 0===a&&(a=""),void 0===o&&(o=""),void 0===l&&(l="&"),t=l,n=a,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(qn,""),c=Pt(o||a?"".concat(o," ").concat(a," { ").concat(s," }"):s);i.namespace&&(c=Kn(c,i.namespace));var d,p=[];return Ct(c,function(e){var t=et(e);return function(n,r,a,o){for(var i="",l=0;l<t;l++)i+=e[l](n,r,a,o)||"";return i}}(u.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return d.hash=s.length?s.reduce((function(e,t){return t.name||Tn(15),en(e,t.name)}),5381).toString():"",d}var Zn=new Gn,Jn=Xn(),er=r.createContext({shouldForwardProp:void 0,styleSheet:Zn,stylis:Jn}),tr=(er.Consumer,r.createContext(void 0));function nr(){return(0,r.useContext)(er)}function rr(e){var t=(0,r.useState)(e.stylisPlugins),n=t[0],a=t[1],o=nr().styleSheet,i=(0,r.useMemo)((function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,o]),l=(0,r.useMemo)((function(){return Xn({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})}),[e.enableVendorPrefixes,e.namespace,n]);(0,r.useEffect)((function(){Me()(n,e.stylisPlugins)||a(e.stylisPlugins)}),[e.stylisPlugins]);var s=(0,r.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:l}}),[e.shouldForwardProp,i,l]);return r.createElement(er.Provider,{value:s},r.createElement(tr.Provider,{value:l},e.children))}var ar=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Jn);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,En(this,(function(){throw Tn(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Jn),this.name+e.hash},e}(),or=function(e){return e>="A"&&e<="Z"};function ir(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;or(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var lr=function(e){return null==e||!1===e||""===e},sr=function(e){var t,n,r=[];for(var a in e){var o=e[a];e.hasOwnProperty(a)&&!lr(o)&&(Array.isArray(o)&&o.isCss||wn(o)?r.push("".concat(ir(a),":"),o,";"):An(o)?r.push.apply(r,Oe(Oe(["".concat(a," {")],sr(o),!1),["}"],!1)):r.push("".concat(ir(a),": ").concat((t=a,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in _t||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function cr(e,t,n,r){return lr(e)?[]:kn(e)?[".".concat(e.styledComponentId)]:wn(e)?!wn(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:cr(e(t),t,n,r):e instanceof ar?n?(e.inject(n,r),[e.getName(r)]):[e]:An(e)?sr(e):Array.isArray(e)?Array.prototype.concat.apply(Ht,e.map((function(e){return cr(e,t,n,r)}))):[e.toString()];var a}function ur(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(wn(n)&&!kn(n))return!1}return!0}var dr=tn(It),pr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&ur(e),this.componentId=t,this.baseHash=en(dr,t),this.baseStyle=n,Gn.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Sn(r,this.staticRulesId);else{var a=jn(cr(this.rules,e,t,n)),o=Zt(en(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,o)){var i=n(a,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,i)}r=Sn(r,o),this.staticRulesId=o}else{for(var l=en(this.baseHash,n.hash),s="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)s+=u;else if(u){var d=jn(cr(u,e,t,n));l=en(l,d+c),s+=d}}if(s){var p=Zt(l>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(s,".".concat(p),void 0,this.componentId)),r=Sn(r,p)}}return r},e}(),fr=r.createContext(void 0);fr.Consumer;var hr={};new Set;function gr(e,t,n){var a=kn(e),o=e,i=!an(e),l=t.attrs,s=void 0===l?Ht:l,c=t.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":qt(e);hr[n]=(hr[n]||0)+1;var r="".concat(n,"-").concat(nn(It+n+hr[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):c,d=t.displayName,p=void 0===d?function(e){return an(e)?"styled.".concat(e):"Styled(".concat(rn(e),")")}(e):d,f=t.displayName&&t.componentId?"".concat(qt(t.displayName),"-").concat(t.componentId):t.componentId||u,h=a&&o.attrs?o.attrs.concat(s).filter(Boolean):s,g=t.shouldForwardProp;if(a&&o.shouldForwardProp){var m=o.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;g=function(e,t){return m(e,t)&&x(e,t)}}else g=m}var v=new pr(n,f,a?o.componentStyle:void 0);function b(e,t){return function(e,t,n){var a=e.attrs,o=e.componentStyle,i=e.defaultProps,l=e.foldedComponentIds,s=e.styledComponentId,c=e.target,u=r.useContext(fr),d=nr(),p=e.shouldForwardProp||d.shouldForwardProp,f=Yt(t,u,i)||Wt,h=function(e,t,n){for(var r,a=Re(Re({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var i=wn(r=e[o])?r(a):r;for(var l in i)a[l]="className"===l?Sn(a[l],i[l]):"style"===l?Re(Re({},a[l]),i[l]):i[l]}return t.className&&(a.className=Sn(a.className,t.className)),a}(a,t,f),g=h.as||c,m={};for(var x in h)void 0===h[x]||"$"===x[0]||"as"===x||"theme"===x&&h.theme===f||("forwardedAs"===x?m.as=h.forwardedAs:p&&!p(x,g)||(m[x]=h[x]));var v=function(e,t){var n=nr();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,h),b=Sn(l,s);return v&&(b+=" "+v),h.className&&(b+=" "+h.className),m[an(g)&&!Vt.has(g)?"class":"className"]=b,n&&(m.ref=n),(0,r.createElement)(g,m)}(y,e,t)}b.displayName=p;var y=r.forwardRef(b);return y.attrs=h,y.componentStyle=v,y.displayName=p,y.shouldForwardProp=g,y.foldedComponentIds=a?Sn(o.foldedComponentIds,o.styledComponentId):"",y.styledComponentId=f,y.target=a?o.target:e,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)Cn(e,a[r],!0);return e}({},o.defaultProps,e):e}}),En(y,(function(){return".".concat(y.styledComponentId)})),i&&yn(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function mr(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var xr=function(e){return Object.assign(e,{isCss:!0})};function vr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(wn(e)||An(e))return xr(cr(mr(Ht,Oe([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?cr(r):xr(cr(mr(r,t)))}function br(e,t,n){if(void 0===n&&(n=Wt),!t)throw Tn(1,t);var r=function(r){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,vr.apply(void 0,Oe([r],a,!1)))};return r.attrs=function(r){return br(e,t,Re(Re({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return br(e,t,Re(Re({},n),r))},r}var yr=function(e){return br(gr,e)},wr=yr;Vt.forEach((function(e){wr[e]=yr(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=ur(e),Gn.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var a=r(jn(cr(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Gn.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();function kr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=jn(vr.apply(void 0,Oe([e],t,!1))),a=nn(r);return new ar(a,r)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Bn(),r=jn([n&&'nonce="'.concat(n,'"'),"".concat(Mt,'="true"'),"".concat(Lt,'="').concat(It,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Tn(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw Tn(2);var n=e.instance.toString();if(!n)return[];var a=((t={})[Mt]="",t[Lt]=It,t.dangerouslySetInnerHTML={__html:n},t),o=Bn();return o&&(a.nonce=o),[r.createElement("style",Re({},a,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Gn({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Tn(2);return r.createElement(rr,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Tn(3)}})(),"__sc-".concat(Mt,"__");const Sr=wr.header`
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: saturate(140%) blur(6px);
  background: rgba(255, 255, 255, 0.85);
  border-bottom: 1px solid #eef0f3;
`,jr=wr.div`
  width: 100%;
  max-width: 1200px;
  height: 60px;
  margin: 0 auto;
  padding: 0 16px;

  font-size: 16px;
  font-family: "INTERVARIABLE", system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  color: #111827;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  box-sizing: border-box;
`,Ar=wr.div`
  display: flex;
  align-items: center;
  min-width: 120px;
`,Cr=wr.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: inherit;
  font-weight: 800;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`,Er=wr.nav`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  gap: 10px;
  min-width: 280px;
`,Tr=wr.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  flex: 0 0 auto;
  white-space: nowrap;
`,zr=wr.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 14px;
  border-radius: 999px;

  border: 1px solid ${e=>{let{$active:t}=e;return t?"rgba(99,102,241,.45)":"#d7dee6"}};
  background: ${e=>{let{$active:t}=e;return t?"rgba(99,102,241,.08)":"#fff"}};
  color: #111827;
  font-weight: ${e=>{let{$active:t}=e;return t?700:500}};
  font-size: 14px;

  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease, transform 0.05s ease, box-shadow 0.15s ease;

  &:hover {
    background: ${e=>{let{$active:t}=e;return t?"rgba(99,102,241,.12)":"#f8fafc"}};
    border-color: ${e=>{let{$active:t}=e;return t?"rgba(99,102,241,.55)":"#c7d2de"}};
  }
  &:active {
    transform: translateY(1px);
  }
  &:focus-visible {
    outline: 2px solid rgba(99, 102, 241, 0.35);
    outline-offset: 2px;
  }
`;wr.div`
  height: 60px;
  display: flex;
  align-items: center;
  gap: 8px;
`,wr.div``,wr.div``;function Pr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var Nr=function e(t,n){function r(e,r,a){if("undefined"!==typeof document){"number"===typeof(a=Pr({},n,a)).expires&&(a.expires=new Date(Date.now()+864e5*a.expires)),a.expires&&(a.expires=a.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var o="";for(var i in a)a[i]&&(o+="; "+i,!0!==a[i]&&(o+="="+a[i].split(";")[0]));return document.cookie=e+"="+t.write(r,e)+o}}return Object.create({set:r,get:function(e){if("undefined"!==typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],r={},a=0;a<n.length;a++){var o=n[a].split("="),i=o.slice(1).join("=");try{var l=decodeURIComponent(o[0]);if(r[l]=t.read(i,l),e===l)break}catch(lw){}}return e?r[e]:r}},remove:function(e,t){r(e,"",Pr({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,Pr({},this.attributes,t))},withConverter:function(t){return e(Pr({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});function $r(e,t){return function(){return e.apply(t,arguments)}}const{toString:Rr}=Object.prototype,{getPrototypeOf:Or}=Object,_r=(Mr=Object.create(null),e=>{const t=Rr.call(e);return Mr[t]||(Mr[t]=t.slice(8,-1).toLowerCase())});var Mr;const Dr=e=>(e=e.toLowerCase(),t=>_r(t)===e),Lr=e=>t=>typeof t===e,{isArray:Ir}=Array,Br=Lr("undefined");const Fr=Dr("ArrayBuffer");const Ur=Lr("string"),Hr=Lr("function"),Wr=Lr("number"),Yr=e=>null!==e&&"object"===typeof e,Vr=e=>{if("object"!==_r(e))return!1;const t=Or(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Gr=Dr("Date"),Qr=Dr("File"),qr=Dr("Blob"),Kr=Dr("FileList"),Xr=Dr("URLSearchParams"),[Zr,Jr,ea,ta]=["ReadableStream","Request","Response","Headers"].map(Dr);function na(e,t){let n,r,{allOwnKeys:a=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),Ir(e))for(n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else{const r=a?Object.getOwnPropertyNames(e):Object.keys(e),o=r.length;let i;for(n=0;n<o;n++)i=r[n],t.call(null,e[i],i,e)}}function ra(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,a=n.length;for(;a-- >0;)if(r=n[a],t===r.toLowerCase())return r;return null}const aa="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global,oa=e=>!Br(e)&&e!==aa;const ia=(la="undefined"!==typeof Uint8Array&&Or(Uint8Array),e=>la&&e instanceof la);var la;const sa=Dr("HTMLFormElement"),ca=(e=>{let{hasOwnProperty:t}=e;return(e,n)=>t.call(e,n)})(Object.prototype),ua=Dr("RegExp"),da=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};na(n,((n,a)=>{let o;!1!==(o=t(n,a,e))&&(r[a]=o||n)})),Object.defineProperties(e,r)};const pa=Dr("AsyncFunction"),fa=(ha="function"===typeof setImmediate,ga=Hr(aa.postMessage),ha?setImmediate:ga?((e,t)=>(aa.addEventListener("message",(n=>{let{source:r,data:a}=n;r===aa&&a===e&&t.length&&t.shift()()}),!1),n=>{t.push(n),aa.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e));var ha,ga;const ma="undefined"!==typeof queueMicrotask?queueMicrotask.bind(aa):"undefined"!==typeof process&&process.nextTick||fa,xa={isArray:Ir,isArrayBuffer:Fr,isBuffer:function(e){return null!==e&&!Br(e)&&null!==e.constructor&&!Br(e.constructor)&&Hr(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||Hr(e.append)&&("formdata"===(t=_r(e))||"object"===t&&Hr(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&Fr(e.buffer),t},isString:Ur,isNumber:Wr,isBoolean:e=>!0===e||!1===e,isObject:Yr,isPlainObject:Vr,isReadableStream:Zr,isRequest:Jr,isResponse:ea,isHeaders:ta,isUndefined:Br,isDate:Gr,isFile:Qr,isBlob:qr,isRegExp:ua,isFunction:Hr,isStream:e=>Yr(e)&&Hr(e.pipe),isURLSearchParams:Xr,isTypedArray:ia,isFileList:Kr,forEach:na,merge:function e(){const{caseless:t}=oa(this)&&this||{},n={},r=(r,a)=>{const o=t&&ra(n,a)||a;Vr(n[o])&&Vr(r)?n[o]=e(n[o],r):Vr(r)?n[o]=e({},r):Ir(r)?n[o]=r.slice():n[o]=r};for(let a=0,o=arguments.length;a<o;a++)arguments[a]&&na(arguments[a],r);return n},extend:function(e,t,n){let{allOwnKeys:r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return na(t,((t,r)=>{n&&Hr(t)?e[r]=$r(t,n):e[r]=t}),{allOwnKeys:r}),e},trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let a,o,i;const l={};if(t=t||{},null==e)return t;do{for(a=Object.getOwnPropertyNames(e),o=a.length;o-- >0;)i=a[o],r&&!r(i,e,t)||l[i]||(t[i]=e[i],l[i]=!0);e=!1!==n&&Or(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:_r,kindOfTest:Dr,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(Ir(e))return e;let t=e.length;if(!Wr(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:sa,hasOwnProperty:ca,hasOwnProp:ca,reduceDescriptors:da,freezeMethods:e=>{da(e,((t,n)=>{if(Hr(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];Hr(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return Ir(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:ra,global:aa,isContextDefined:oa,isSpecCompliantForm:function(e){return!!(e&&Hr(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(Yr(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const a=Ir(e)?[]:{};return na(e,((e,t)=>{const o=n(e,r+1);!Br(o)&&(a[t]=o)})),t[r]=void 0,a}}return e};return n(e,0)},isAsyncFn:pa,isThenable:e=>e&&(Yr(e)||Hr(e))&&Hr(e.then)&&Hr(e.catch),setImmediate:fa,asap:ma};function va(e,t,n,r,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),a&&(this.response=a,this.status=a.status?a.status:null)}xa.inherits(va,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:xa.toJSONObject(this.config),code:this.code,status:this.status}}});const ba=va.prototype,ya={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{ya[e]={value:e}})),Object.defineProperties(va,ya),Object.defineProperty(ba,"isAxiosError",{value:!0}),va.from=(e,t,n,r,a,o)=>{const i=Object.create(ba);return xa.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),va.call(i,e.message,t,n,r,a),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const wa=va;function ka(e){return xa.isPlainObject(e)||xa.isArray(e)}function Sa(e){return xa.endsWith(e,"[]")?e.slice(0,-2):e}function ja(e,t,n){return e?e.concat(t).map((function(e,t){return e=Sa(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const Aa=xa.toFlatObject(xa,{},null,(function(e){return/^is[A-Z]/.test(e)}));const Ca=function(e,t,n){if(!xa.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=xa.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!xa.isUndefined(t[e])}))).metaTokens,a=n.visitor||c,o=n.dots,i=n.indexes,l=(n.Blob||"undefined"!==typeof Blob&&Blob)&&xa.isSpecCompliantForm(t);if(!xa.isFunction(a))throw new TypeError("visitor must be a function");function s(e){if(null===e)return"";if(xa.isDate(e))return e.toISOString();if(!l&&xa.isBlob(e))throw new wa("Blob is not supported. Use a Buffer instead.");return xa.isArrayBuffer(e)||xa.isTypedArray(e)?l&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,n,a){let l=e;if(e&&!a&&"object"===typeof e)if(xa.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(xa.isArray(e)&&function(e){return xa.isArray(e)&&!e.some(ka)}(e)||(xa.isFileList(e)||xa.endsWith(n,"[]"))&&(l=xa.toArray(e)))return n=Sa(n),l.forEach((function(e,r){!xa.isUndefined(e)&&null!==e&&t.append(!0===i?ja([n],r,o):null===i?n:n+"[]",s(e))})),!1;return!!ka(e)||(t.append(ja(a,n,o),s(e)),!1)}const u=[],d=Object.assign(Aa,{defaultVisitor:c,convertValue:s,isVisitable:ka});if(!xa.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!xa.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),xa.forEach(n,(function(n,o){!0===(!(xa.isUndefined(n)||null===n)&&a.call(t,n,xa.isString(o)?o.trim():o,r,d))&&e(n,r?r.concat(o):[o])})),u.pop()}}(e),t};function Ea(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Ta(e,t){this._pairs=[],e&&Ca(e,this,t)}const za=Ta.prototype;za.append=function(e,t){this._pairs.push([e,t])},za.toString=function(e){const t=e?function(t){return e.call(this,t,Ea)}:Ea;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const Pa=Ta;function Na(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function $a(e,t,n){if(!t)return e;const r=n&&n.encode||Na;xa.isFunction(n)&&(n={serialize:n});const a=n&&n.serialize;let o;if(o=a?a(t,n):xa.isURLSearchParams(t)?t.toString():new Pa(t,n).toString(r),o){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}const Ra=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){xa.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},Oa={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},_a={isBrowser:!0,classes:{URLSearchParams:"undefined"!==typeof URLSearchParams?URLSearchParams:Pa,FormData:"undefined"!==typeof FormData?FormData:null,Blob:"undefined"!==typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},Ma="undefined"!==typeof window&&"undefined"!==typeof document,Da="object"===typeof navigator&&navigator||void 0,La=Ma&&(!Da||["ReactNative","NativeScript","NS"].indexOf(Da.product)<0),Ia="undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts,Ba=Ma&&window.location.href||"http://localhost",Fa={...e,..._a};const Ua=function(e){function t(e,n,r,a){let o=e[a++];if("__proto__"===o)return!0;const i=Number.isFinite(+o),l=a>=e.length;if(o=!o&&xa.isArray(r)?r.length:o,l)return xa.hasOwnProp(r,o)?r[o]=[r[o],n]:r[o]=n,!i;r[o]&&xa.isObject(r[o])||(r[o]=[]);return t(e,n,r[o],a)&&xa.isArray(r[o])&&(r[o]=function(e){const t={},n=Object.keys(e);let r;const a=n.length;let o;for(r=0;r<a;r++)o=n[r],t[o]=e[o];return t}(r[o])),!i}if(xa.isFormData(e)&&xa.isFunction(e.entries)){const n={};return xa.forEachEntry(e,((e,r)=>{t(function(e){return xa.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null};const Ha={transitional:Oa,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,a=xa.isObject(e);a&&xa.isHTMLForm(e)&&(e=new FormData(e));if(xa.isFormData(e))return r?JSON.stringify(Ua(e)):e;if(xa.isArrayBuffer(e)||xa.isBuffer(e)||xa.isStream(e)||xa.isFile(e)||xa.isBlob(e)||xa.isReadableStream(e))return e;if(xa.isArrayBufferView(e))return e.buffer;if(xa.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(a){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return Ca(e,new Fa.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return Fa.isNode&&xa.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((o=xa.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Ca(o?{"files[]":e}:e,t&&new t,this.formSerializer)}}return a||r?(t.setContentType("application/json",!1),function(e,t,n){if(xa.isString(e))try{return(t||JSON.parse)(e),xa.trim(e)}catch(lw){if("SyntaxError"!==lw.name)throw lw}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||Ha.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(xa.isResponse(e)||xa.isReadableStream(e))return e;if(e&&xa.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(lw){if(n){if("SyntaxError"===lw.name)throw wa.from(lw,wa.ERR_BAD_RESPONSE,this,null,this.response);throw lw}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Fa.classes.FormData,Blob:Fa.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};xa.forEach(["delete","get","head","post","put","patch"],(e=>{Ha.headers[e]={}}));const Wa=Ha,Ya=xa.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Va=Symbol("internals");function Ga(e){return e&&String(e).trim().toLowerCase()}function Qa(e){return!1===e||null==e?e:xa.isArray(e)?e.map(Qa):String(e)}function qa(e,t,n,r,a){return xa.isFunction(r)?r.call(this,t,n):(a&&(t=n),xa.isString(t)?xa.isString(r)?-1!==t.indexOf(r):xa.isRegExp(r)?r.test(t):void 0:void 0)}class Ka{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function a(e,t,n){const a=Ga(t);if(!a)throw new Error("header name must be a non-empty string");const o=xa.findKey(r,a);(!o||void 0===r[o]||!0===n||void 0===n&&!1!==r[o])&&(r[o||t]=Qa(e))}const o=(e,t)=>xa.forEach(e,((e,n)=>a(e,n,t)));if(xa.isPlainObject(e)||e instanceof this.constructor)o(e,t);else if(xa.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))o((e=>{const t={};let n,r,a;return e&&e.split("\n").forEach((function(e){a=e.indexOf(":"),n=e.substring(0,a).trim().toLowerCase(),r=e.substring(a+1).trim(),!n||t[n]&&Ya[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t);else if(xa.isHeaders(e))for(const[i,l]of e.entries())a(l,i,n);else null!=e&&a(t,e,n);return this}get(e,t){if(e=Ga(e)){const n=xa.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(xa.isFunction(t))return t.call(this,e,n);if(xa.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Ga(e)){const n=xa.findKey(this,e);return!(!n||void 0===this[n]||t&&!qa(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function a(e){if(e=Ga(e)){const a=xa.findKey(n,e);!a||t&&!qa(0,n[a],a,t)||(delete n[a],r=!0)}}return xa.isArray(e)?e.forEach(a):a(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const a=t[n];e&&!qa(0,this[a],a,e,!0)||(delete this[a],r=!0)}return r}normalize(e){const t=this,n={};return xa.forEach(this,((r,a)=>{const o=xa.findKey(n,a);if(o)return t[o]=Qa(r),void delete t[a];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(a):String(a).trim();i!==a&&delete t[a],t[i]=Qa(r),n[i]=!0})),this}concat(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.constructor.concat(this,...t)}toJSON(e){const t=Object.create(null);return xa.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&xa.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((e=>{let[t,n]=e;return t+": "+n})).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e){const t=new this(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return r.forEach((e=>t.set(e))),t}static accessor(e){const t=(this[Va]=this[Va]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=Ga(e);t[r]||(!function(e,t){const n=xa.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,a){return this[r].call(this,t,e,n,a)},configurable:!0})}))}(n,e),t[r]=!0)}return xa.isArray(e)?e.forEach(r):r(e),this}}Ka.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),xa.reduceDescriptors(Ka.prototype,((e,t)=>{let{value:n}=e,r=t[0].toUpperCase()+t.slice(1);return{get:()=>n,set(e){this[r]=e}}})),xa.freezeMethods(Ka);const Xa=Ka;function Za(e,t){const n=this||Wa,r=t||n,a=Xa.from(r.headers);let o=r.data;return xa.forEach(e,(function(e){o=e.call(n,o,a.normalize(),t?t.status:void 0)})),a.normalize(),o}function Ja(e){return!(!e||!e.__CANCEL__)}function eo(e,t,n){wa.call(this,null==e?"canceled":e,wa.ERR_CANCELED,t,n),this.name="CanceledError"}xa.inherits(eo,wa,{__CANCEL__:!0});const to=eo;function no(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new wa("Request failed with status code "+n.status,[wa.ERR_BAD_REQUEST,wa.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}const ro=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let a,o=0,i=0;return t=void 0!==t?t:1e3,function(l){const s=Date.now(),c=r[i];a||(a=s),n[o]=l,r[o]=s;let u=i,d=0;for(;u!==o;)d+=n[u++],u%=e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),s-a<t)return;const p=c&&s-c;return p?Math.round(1e3*d/p):void 0}};const ao=function(e,t){let n,r,a=0,o=1e3/t;const i=function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();a=o,n=null,r&&(clearTimeout(r),r=null),e.apply(null,t)};return[function(){const e=Date.now(),t=e-a;for(var l=arguments.length,s=new Array(l),c=0;c<l;c++)s[c]=arguments[c];t>=o?i(s,e):(n=s,r||(r=setTimeout((()=>{r=null,i(n)}),o-t)))},()=>n&&i(n)]},oo=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=0;const a=ro(50,250);return ao((n=>{const o=n.loaded,i=n.lengthComputable?n.total:void 0,l=o-r,s=a(l);r=o;e({loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:s||void 0,estimated:s&&i&&o<=i?(i-o)/s:void 0,event:n,lengthComputable:null!=i,[t?"download":"upload"]:!0})}),n)},io=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},lo=e=>function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return xa.asap((()=>e(...n)))},so=Fa.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Fa.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Fa.origin),Fa.navigator&&/(msie|trident)/i.test(Fa.navigator.userAgent)):()=>!0,co=Fa.hasStandardBrowserEnv?{write(e,t,n,r,a,o){const i=[e+"="+encodeURIComponent(t)];xa.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),xa.isString(r)&&i.push("path="+r),xa.isString(a)&&i.push("domain="+a),!0===o&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function uo(e,t,n){let r=!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);return e&&(r||0==n)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const po=e=>e instanceof Xa?{...e}:e;function fo(e,t){t=t||{};const n={};function r(e,t,n,r){return xa.isPlainObject(e)&&xa.isPlainObject(t)?xa.merge.call({caseless:r},e,t):xa.isPlainObject(t)?xa.merge({},t):xa.isArray(t)?t.slice():t}function a(e,t,n,a){return xa.isUndefined(t)?xa.isUndefined(e)?void 0:r(void 0,e,0,a):r(e,t,0,a)}function o(e,t){if(!xa.isUndefined(t))return r(void 0,t)}function i(e,t){return xa.isUndefined(t)?xa.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function l(n,a,o){return o in t?r(n,a):o in e?r(void 0,n):void 0}const s={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(e,t,n)=>a(po(e),po(t),0,!0)};return xa.forEach(Object.keys(Object.assign({},e,t)),(function(r){const o=s[r]||a,i=o(e[r],t[r],r);xa.isUndefined(i)&&o!==l||(n[r]=i)})),n}const ho=e=>{const t=fo({},e);let n,{data:r,withXSRFToken:a,xsrfHeaderName:o,xsrfCookieName:i,headers:l,auth:s}=t;if(t.headers=l=Xa.from(l),t.url=$a(uo(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),s&&l.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):""))),xa.isFormData(r))if(Fa.hasStandardBrowserEnv||Fa.hasStandardBrowserWebWorkerEnv)l.setContentType(void 0);else if(!1!==(n=l.getContentType())){const[e,...t]=n?n.split(";").map((e=>e.trim())).filter(Boolean):[];l.setContentType([e||"multipart/form-data",...t].join("; "))}if(Fa.hasStandardBrowserEnv&&(a&&xa.isFunction(a)&&(a=a(t)),a||!1!==a&&so(t.url))){const e=o&&i&&co.read(i);e&&l.set(o,e)}return t},go="undefined"!==typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){const r=ho(e);let a=r.data;const o=Xa.from(r.headers).normalize();let i,l,s,c,u,{responseType:d,onUploadProgress:p,onDownloadProgress:f}=r;function h(){c&&c(),u&&u(),r.cancelToken&&r.cancelToken.unsubscribe(i),r.signal&&r.signal.removeEventListener("abort",i)}let g=new XMLHttpRequest;function m(){if(!g)return;const r=Xa.from("getAllResponseHeaders"in g&&g.getAllResponseHeaders());no((function(e){t(e),h()}),(function(e){n(e),h()}),{data:d&&"text"!==d&&"json"!==d?g.response:g.responseText,status:g.status,statusText:g.statusText,headers:r,config:e,request:g}),g=null}g.open(r.method.toUpperCase(),r.url,!0),g.timeout=r.timeout,"onloadend"in g?g.onloadend=m:g.onreadystatechange=function(){g&&4===g.readyState&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))&&setTimeout(m)},g.onabort=function(){g&&(n(new wa("Request aborted",wa.ECONNABORTED,e,g)),g=null)},g.onerror=function(){n(new wa("Network Error",wa.ERR_NETWORK,e,g)),g=null},g.ontimeout=function(){let t=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const a=r.transitional||Oa;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new wa(t,a.clarifyTimeoutError?wa.ETIMEDOUT:wa.ECONNABORTED,e,g)),g=null},void 0===a&&o.setContentType(null),"setRequestHeader"in g&&xa.forEach(o.toJSON(),(function(e,t){g.setRequestHeader(t,e)})),xa.isUndefined(r.withCredentials)||(g.withCredentials=!!r.withCredentials),d&&"json"!==d&&(g.responseType=r.responseType),f&&([s,u]=oo(f,!0),g.addEventListener("progress",s)),p&&g.upload&&([l,c]=oo(p),g.upload.addEventListener("progress",l),g.upload.addEventListener("loadend",c)),(r.cancelToken||r.signal)&&(i=t=>{g&&(n(!t||t.type?new to(null,e,g):t),g.abort(),g=null)},r.cancelToken&&r.cancelToken.subscribe(i),r.signal&&(r.signal.aborted?i():r.signal.addEventListener("abort",i)));const x=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(r.url);x&&-1===Fa.protocols.indexOf(x)?n(new wa("Unsupported protocol "+x+":",wa.ERR_BAD_REQUEST,e)):g.send(a||null)}))},mo=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n,r=new AbortController;const a=function(e){if(!n){n=!0,i();const t=e instanceof Error?e:this.reason;r.abort(t instanceof wa?t:new to(t instanceof Error?t.message:t))}};let o=t&&setTimeout((()=>{o=null,a(new wa(`timeout ${t} of ms exceeded`,wa.ETIMEDOUT))}),t);const i=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(a):e.removeEventListener("abort",a)})),e=null)};e.forEach((e=>e.addEventListener("abort",a)));const{signal:l}=r;return l.unsubscribe=()=>xa.asap(i),l}},xo=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,a=0;for(;a<n;)r=a+t,yield e.slice(a,r),a=r},vo=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},bo=(e,t,n,r)=>{const a=async function*(e,t){for await(const n of vo(e))yield*xo(n,t)}(e,t);let o,i=0,l=e=>{o||(o=!0,r&&r(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await a.next();if(t)return l(),void e.close();let o=r.byteLength;if(n){let e=i+=o;n(e)}e.enqueue(new Uint8Array(r))}catch(t){throw l(t),t}},cancel:e=>(l(e),a.return())},{highWaterMark:2})},yo="function"===typeof fetch&&"function"===typeof Request&&"function"===typeof Response,wo=yo&&"function"===typeof ReadableStream,ko=yo&&("function"===typeof TextEncoder?(So=new TextEncoder,e=>So.encode(e)):async e=>new Uint8Array(await new Response(e).arrayBuffer()));var So;const jo=function(e){try{for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return!!e(...n)}catch(lw){return!1}},Ao=wo&&jo((()=>{let e=!1;const t=new Request(Fa.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),Co=wo&&jo((()=>xa.isReadableStream(new Response("").body))),Eo={stream:Co&&(e=>e.body)};var To;yo&&(To=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!Eo[e]&&(Eo[e]=xa.isFunction(To[e])?t=>t[e]():(t,n)=>{throw new wa(`Response type '${e}' is not supported`,wa.ERR_NOT_SUPPORT,n)})})));const zo=async(e,t)=>{const n=xa.toFiniteNumber(e.getContentLength());return null==n?(async e=>{if(null==e)return 0;if(xa.isBlob(e))return e.size;if(xa.isSpecCompliantForm(e)){const t=new Request(Fa.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return xa.isArrayBufferView(e)||xa.isArrayBuffer(e)?e.byteLength:(xa.isURLSearchParams(e)&&(e+=""),xa.isString(e)?(await ko(e)).byteLength:void 0)})(t):n},Po=yo&&(async e=>{let{url:t,method:n,data:r,signal:a,cancelToken:o,timeout:i,onDownloadProgress:l,onUploadProgress:s,responseType:c,headers:u,withCredentials:d="same-origin",fetchOptions:p}=ho(e);c=c?(c+"").toLowerCase():"text";let f,h=mo([a,o&&o.toAbortSignal()],i);const g=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let m;try{if(s&&Ao&&"get"!==n&&"head"!==n&&0!==(m=await zo(u,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});if(xa.isFormData(r)&&(e=n.headers.get("content-type"))&&u.setContentType(e),n.body){const[e,t]=io(m,oo(lo(s)));r=bo(n.body,65536,e,t)}}xa.isString(d)||(d=d?"include":"omit");const a="credentials"in Request.prototype;f=new Request(t,{...p,signal:h,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:a?d:void 0});let o=await fetch(f);const i=Co&&("stream"===c||"response"===c);if(Co&&(l||i&&g)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=o[t]}));const t=xa.toFiniteNumber(o.headers.get("content-length")),[n,r]=l&&io(t,oo(lo(l),!0))||[];o=new Response(bo(o.body,65536,n,(()=>{r&&r(),g&&g()})),e)}c=c||"text";let x=await Eo[xa.findKey(Eo,c)||"text"](o,e);return!i&&g&&g(),await new Promise(((t,n)=>{no(t,n,{data:x,headers:Xa.from(o.headers),status:o.status,statusText:o.statusText,config:e,request:f})}))}catch(x){if(g&&g(),x&&"TypeError"===x.name&&/fetch/i.test(x.message))throw Object.assign(new wa("Network Error",wa.ERR_NETWORK,e,f),{cause:x.cause||x});throw wa.from(x,x&&x.code,e,f)}}),No={http:null,xhr:go,fetch:Po};xa.forEach(No,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(lw){}Object.defineProperty(e,"adapterName",{value:t})}}));const $o=e=>`- ${e}`,Ro=e=>xa.isFunction(e)||null===e||!1===e,Oo=e=>{e=xa.isArray(e)?e:[e];const{length:t}=e;let n,r;const a={};for(let o=0;o<t;o++){let t;if(n=e[o],r=n,!Ro(n)&&(r=No[(t=String(n)).toLowerCase()],void 0===r))throw new wa(`Unknown adapter '${t}'`);if(r)break;a[t||"#"+o]=r}if(!r){const e=Object.entries(a).map((e=>{let[t,n]=e;return`adapter ${t} `+(!1===n?"is not supported by the environment":"is not available in the build")}));let n=t?e.length>1?"since :\n"+e.map($o).join("\n"):" "+$o(e[0]):"as no adapter specified";throw new wa("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r};function _o(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new to(null,e)}function Mo(e){_o(e),e.headers=Xa.from(e.headers),e.data=Za.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Oo(e.adapter||Wa.adapter)(e).then((function(t){return _o(e),t.data=Za.call(e,e.transformResponse,t),t.headers=Xa.from(t.headers),t}),(function(t){return Ja(t)||(_o(e),t&&t.response&&(t.response.data=Za.call(e,e.transformResponse,t.response),t.response.headers=Xa.from(t.response.headers))),Promise.reject(t)}))}const Do="1.8.4",Lo={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Lo[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Io={};Lo.transitional=function(e,t,n){function r(e,t){return"[Axios v1.8.4] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,a,o)=>{if(!1===e)throw new wa(r(a," has been removed"+(t?" in "+t:"")),wa.ERR_DEPRECATED);return t&&!Io[a]&&(Io[a]=!0,console.warn(r(a," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,a,o)}},Lo.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};const Bo={assertOptions:function(e,t,n){if("object"!==typeof e)throw new wa("options must be an object",wa.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let a=r.length;for(;a-- >0;){const o=r[a],i=t[o];if(i){const t=e[o],n=void 0===t||i(t,o,e);if(!0!==n)throw new wa("option "+o+" must be "+n,wa.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new wa("Unknown option "+o,wa.ERR_BAD_OPTION)}},validators:Lo},Fo=Bo.validators;class Uo{constructor(e){this.defaults=e,this.interceptors={request:new Ra,response:new Ra}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}catch(lw){}}throw n}}_request(e,t){"string"===typeof e?(t=t||{}).url=e:t=e||{},t=fo(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:a}=t;void 0!==n&&Bo.assertOptions(n,{silentJSONParsing:Fo.transitional(Fo.boolean),forcedJSONParsing:Fo.transitional(Fo.boolean),clarifyTimeoutError:Fo.transitional(Fo.boolean)},!1),null!=r&&(xa.isFunction(r)?t.paramsSerializer={serialize:r}:Bo.assertOptions(r,{encode:Fo.function,serialize:Fo.function},!0)),void 0!==t.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),Bo.assertOptions(t,{baseUrl:Fo.spelling("baseURL"),withXsrfToken:Fo.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=a&&xa.merge(a.common,a[t.method]);a&&xa.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete a[e]})),t.headers=Xa.concat(o,a);const i=[];let l=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(l=l&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const s=[];let c;this.interceptors.response.forEach((function(e){s.push(e.fulfilled,e.rejected)}));let u,d=0;if(!l){const e=[Mo.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,s),u=e.length,c=Promise.resolve(t);d<u;)c=c.then(e[d++],e[d++]);return c}u=i.length;let p=t;for(d=0;d<u;){const e=i[d++],t=i[d++];try{p=e(p)}catch(f){t.call(this,f);break}}try{c=Mo.call(this,p)}catch(f){return Promise.reject(f)}for(d=0,u=s.length;d<u;)c=c.then(s[d++],s[d++]);return c}getUri(e){return $a(uo((e=fo(this.defaults,e)).baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}}xa.forEach(["delete","get","head","options"],(function(e){Uo.prototype[e]=function(t,n){return this.request(fo(n||{},{method:e,url:t,data:(n||{}).data}))}})),xa.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,a){return this.request(fo(a||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Uo.prototype[e]=t(),Uo.prototype[e+"Form"]=t(!0)}));const Ho=Uo;class Wo{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,a){n.reason||(n.reason=new to(e,r,a),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new Wo((function(t){e=t})),cancel:e}}}const Yo=Wo;const Vo={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Vo).forEach((e=>{let[t,n]=e;Vo[n]=t}));const Go=Vo;const Qo=function e(t){const n=new Ho(t),r=$r(Ho.prototype.request,n);return xa.extend(r,Ho.prototype,n,{allOwnKeys:!0}),xa.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(fo(t,n))},r}(Wa);Qo.Axios=Ho,Qo.CanceledError=to,Qo.CancelToken=Yo,Qo.isCancel=Ja,Qo.VERSION=Do,Qo.toFormData=Ca,Qo.AxiosError=wa,Qo.Cancel=Qo.CanceledError,Qo.all=function(e){return Promise.all(e)},Qo.spread=function(e){return function(t){return e.apply(null,t)}},Qo.isAxiosError=function(e){return xa.isObject(e)&&!0===e.isAxiosError},Qo.mergeConfig=fo,Qo.AxiosHeaders=Xa,Qo.formToJSON=e=>Ua(xa.isHTMLForm(e)?new FormData(e):e),Qo.getAdapter=Oo,Qo.HttpStatusCode=Go,Qo.default=Qo;const qo=Qo;var Ko=n(579);const Xo=wr.span`
  position: relative;
  display: inline-block;
  padding-right: 18px;
`,Zo=wr.span`
  position: absolute;
  top: -6px; right: 0;
  min-width: 16px; height: 16px; padding: 0 4px;
  border-radius: 999px; background: #ef4444; color: #fff;
  font-size: 10px; line-height: 16px; text-align: center; font-weight: 700;
`,Jo=wr.div`
  position: fixed; inset: 0;
  background: rgba(15,18,28,.45);
  display: flex; align-items: center; justify-content: center;
  z-index: 9999;
`,ei=wr.div`
  width: min(720px, 92vw);
  max-height: 80vh; overflow: auto;
  background: #fff; border-radius: 16px; box-shadow: 0 18px 48px rgba(0,0,0,.35);
  padding: 18px;
`,ti=wr.div`
  display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;
  h3 { margin: 0; font-size: 20px; }
  .right { display: flex; gap: 8px; }
  button { border: 1px solid #e2e8f0; background: #fff; cursor: pointer; border-radius: 10px; padding: 8px 10px; font-size: 13px; }
`,ni=wr.div` border-top: 1px solid #e5e7eb; `,ri=wr.div`
  display: grid; grid-template-columns: 96px 1fr 120px;
  gap: 10px; align-items: center; padding: 12px 0; border-bottom: 1px solid #f1f5f9;
`,ai=wr.span`
  display: inline-flex; align-items: center; justify-content: center;
  padding: 6px 10px; font-size: 12px; border-radius: 999px;
  border: 1px solid #dbeafe; background: #eff6ff; color: #1d4ed8; font-weight: 700;
`,oi=wr.button`
  border: none; background: transparent; color: #111827; text-decoration: underline; cursor: pointer; font-size: 13px;
`,ii=wr.div` padding: 32px 0; color: #94a3b8; text-align: center; `,li=()=>{const e=te(),t=J(),n=Nr.get("accessToken"),[a,o]=(0,r.useState)({}),[i,l]=(0,r.useState)(!1),[s,c]=(0,r.useState)(0),[u,d]=(0,r.useState)(!1),[p,f]=(0,r.useState)(!1),[h,g]=(0,r.useState)([]),m="https://api.stackflov.com";(0,r.useEffect)((()=>{const e=Nr.get("accessToken");if(!e)return l(!1);qo.get(`${m}/users/me`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},withCredentials:!0}).then((e=>{o(e.data),l(!0)})).catch((()=>l(!1)))}),[n,m]),(0,r.useEffect)((()=>{const e=Nr.get("accessToken");e&&qo.get(`${m}/notifications/unread-count`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},withCredentials:!0}).then((e=>{var t,n;const r="number"===typeof e.data?e.data:null!==(t=null===(n=e.data)||void 0===n?void 0:n.count)&&void 0!==t?t:0;c(r)})).catch((()=>{}))}),[i,m]);const x=e=>{const n=t.pathname;if("/"===e){return["/","/trace","/boards"].some((e=>n===e||n.startsWith(e+"/")))}return n===e||n.startsWith(e+"/")};return(0,Ko.jsxs)(Ko.Fragment,{children:[(0,Ko.jsx)(Sr,{children:(0,Ko.jsxs)(jr,{children:[(0,Ko.jsx)(Ar,{children:(0,Ko.jsx)(Cr,{onClick:()=>e("/"),children:"\ucc38\uce58\uce94"})}),(0,Ko.jsxs)(Er,{children:[(0,Ko.jsx)(zr,{$active:x("/"),onClick:()=>e("/"),children:"\uc790\ucde8\ub85c\uadf8"}),(0,Ko.jsx)(zr,{$active:x("/nibangnebang"),onClick:()=>e("/nibangnebang"),children:"\ub2c8\ubc29\ub0b4\ubc29"}),(0,Ko.jsx)(zr,{$active:x("/notices"),onClick:()=>e("/notices"),children:"\uacf5\uc9c0\uc0ac\ud56d"})]}),(0,Ko.jsxs)(Tr,{children:[(0,Ko.jsx)(zr,{$active:x("/notifications"),onClick:()=>{if(!i)return void e("/login");d(!0),f(!0);const t=Nr.get("accessToken");qo.get(`${m}/notifications?page=0&size=6`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},withCredentials:!0}).then((e=>{var t;const n=Array.isArray(null===(t=e.data)||void 0===t?void 0:t.content)?e.data.content:Array.isArray(e.data)?e.data:[];g(n)})).catch((()=>g([]))).finally((()=>f(!1)))},children:(0,Ko.jsxs)(Xo,{children:["\uc54c\ub9bc",s>0&&(0,Ko.jsx)(Zo,{children:s>99?"99+":s})]})}),i?(0,Ko.jsx)(zr,{onClick:()=>{qo.post(`${m}/auth/logout`,{},{headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},withCredentials:!0}).then((()=>{Nr.remove("accessToken"),Nr.remove("refreshToken"),l(!1),o({}),c(0),e("/login")})).catch((e=>console.error("Logout error:",e)))},children:"Logout"}):(0,Ko.jsx)(zr,{$active:x("/login"),onClick:()=>e("/login"),children:"Login"}),(0,Ko.jsx)(zr,{$active:x("/profile"),onClick:()=>e("/profile"),children:"Profile"})]})]})}),u&&(0,Ko.jsx)(Jo,{onClick:()=>d(!1),children:(0,Ko.jsxs)(ei,{onClick:e=>e.stopPropagation(),children:[(0,Ko.jsxs)(ti,{children:[(0,Ko.jsx)("h3",{children:"\uc54c\ub9bc"}),(0,Ko.jsxs)("div",{className:"right",children:[(0,Ko.jsx)("button",{onClick:()=>e("/notifications"),children:"\uc804\uccb4 \ubcf4\uae30"}),(0,Ko.jsx)("button",{onClick:()=>d(!1),children:"\ub2eb\uae30"})]})]}),p?(0,Ko.jsx)(ii,{children:"\ubd88\ub7ec\uc624\ub294 \uc911\u2026"}):0===h.length?(0,Ko.jsx)(ii,{children:"\uc0c8 \uc54c\ub9bc\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."}):(0,Ko.jsx)(ni,{children:h.map((e=>{var t;return(0,Ko.jsxs)(ri,{children:[(0,Ko.jsx)(ai,{children:e.type||"INFO"}),(0,Ko.jsx)("div",{style:{fontSize:15,fontWeight:e.read?400:700},children:e.message||e.content||"\uc54c\ub9bc \ub0b4\uc6a9"}),(0,Ko.jsx)("div",{style:{textAlign:"right"},children:e.link||e.targetUrl?(0,Ko.jsx)(oi,{onClick:()=>window.location.assign(e.link||e.targetUrl),children:"\ubc14\ub85c\uac00\uae30"}):(0,Ko.jsx)("span",{style:{color:"#94a3b8",fontSize:12},children:"\ub9c1\ud06c \uc5c6\uc74c"})})]},null!==(t=e.id)&&void 0!==t?t:`${e.type}-${e.createdAt}`)}))})]})})]})},si=kr`
  0%   { opacity: 0; transform: translateY(8px) scale(.98); }
  70%  { opacity: 1; transform: translateY(0)   scale(1.01); }
  100% { opacity: 1; transform: translateY(0)   scale(1); }
`,ci=wr.section`
   min-height: calc(100vh - 60px);
  display: grid;
  /* 위쪽 배치 + 가로 중앙 정렬 */
  place-items: start center;
  /* 화면 크기에 따라 살짝만 내려오게: 6vh 정도 */
  padding: clamp(16px, 6vh, 72px) 16px 24px;
  background:
    radial-gradient(1200px 600px at 0% 0%, rgba(99,102,241,.06), transparent 60%),
    radial-gradient(1200px 600px at 100% 100%, rgba(14,165,233,.06), transparent 60%),
    #f7f8fb;
`,ui=wr.div`
  width: min(420px, 92vw);
  background: #fff;
  border: 1px solid #eef0f3;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(18, 23, 38, 0.08);
  padding: 22px 22px 18px;
  animation: ${si} .38s cubic-bezier(.2,.65,.2,1) both;
`,di=wr.div`
  margin-bottom: 14px;
`,pi=wr.h1`
  margin: 0 0 6px;
  font-size: 26px;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: #111827;
`,fi=wr.p`
  margin: 0;
  font-size: 14px;
  color: #6b7280;
`,hi=wr.div`
  margin-top: 6px;
`,gi=wr.div`
  display: grid;
  gap: 6px;
  margin-top: 12px;
`,mi=wr.label`
  font-size: 13px;
  color: #374151;
`,xi=wr.input`
  height: 44px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 0 12px;
  font-size: 15px;
  outline: none;
  transition: border-color .15s ease, box-shadow .15s ease, background .2s ease;

  &:hover {
    background: #fafafa;
  }
  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 4px rgba(99,102,241,.14);
    background: #fff;
  }
`,vi=wr.div`
  margin-top: 8px;
  font-size: 13px;
  color: #ef4444;
`,bi=wr.button`
  width: 100%;
  height: 46px;
  margin-top: 16px;

  background: #111827;
  color: #fff;
  border: 1px solid #111827;
  border-radius: 12px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;

   transition: transform .05s ease, box-shadow .15s ease,
            background .15s ease, border-color .15s ease, color .15s ease;

 /* 마우스 올리면 회색 버튼 + 검정 글자 */
 &:hover {
   background: #e5e7eb;     /* 밝은 회색 */
   border-color: #e5e7eb;
   color: #111827;          /* 글자는 검정 */
 }
 &:focus-visible {
   outline: 2px solid #cbd5e1;
   outline-offset: 2px;
 }
  &:active { transform: translateY(1px); }
  &:disabled {
    opacity: .65;
    cursor: not-allowed;
    box-shadow: none;
  }
`,yi=wr.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 18px 0 12px;

  &::before, &::after {
    content: "";
    height: 1px;
    flex: 1 1 auto;
    background: #eef0f3;
  }
`,wi=wr.span`
  font-size: 12px;
  color: #6b7280;
`,ki=wr.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
`,Si=wr.button`
  width: 52px;
  height: 52px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  background: #fff;
  cursor: pointer;
  padding: 0;
  display: grid;
  place-items: center;
  transition: transform .05s ease, box-shadow .15s ease, border-color .15s ease, background .15s ease;

  img { width: 26px; height: 26px; object-fit: contain; }

  &:hover {
    border-color: #cfd6de;
    background: #fafafa;
    box-shadow: 0 6px 16px rgba(18, 23, 38, 0.06);
  }
  &:active { transform: translateY(1px); }
`,ji=wr.div`
  margin-top: 16px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  font-size: 13px;
`,Ai=wr.button`
  border: none;
  background: transparent;
  color: #111827;
  font-weight: 700;
  cursor: pointer;
  padding: 0 2px;
  border-radius: 6px;

  &:hover { text-decoration: underline; }
`,Ci=n.p+"static/media/google-logo.264682585e33eac2bcb2.png",Ei=n.p+"static/media/KakaoTalk_logo.svg.418d9722e4776084181a.png",Ti=()=>{const e=te(),[t,n]=(0,r.useState)(""),[a,o]=(0,r.useState)(""),[i,l]=(0,r.useState)(!1),[s,c]=(0,r.useState)(""),u="https://api.stackflov.com",d=async()=>{if(c(""),t&&a){l(!0);try{const n={email:t,password:a},r=await qo.post(`${u}/auth/login`,n,{headers:{"Content-Type":"application/json"},withCredentials:!0}),{accessToken:o,refreshToken:i}=r.data||{};o&&Nr.set("accessToken",o),i&&Nr.set("refreshToken",i),e("/")}catch(lw){var n,r,o,i;const t=(null===(n=lw.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.message)||(null===(o=lw.response)||void 0===o||null===(i=o.data)||void 0===i?void 0:i.error)||"\ub85c\uadf8\uc778\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4. \uc544\uc774\ub514/\ube44\ubc00\ubc88\ud638\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694.";c(t)}finally{l(!1)}}else c("\uc544\uc774\ub514\uc640 \ube44\ubc00\ubc88\ud638\ub97c \ubaa8\ub450 \uc785\ub825\ud558\uc138\uc694.")},p=e=>{"Enter"===e.key&&(e.preventDefault(),d())};return(0,Ko.jsx)(ci,{children:(0,Ko.jsxs)(ui,{children:[(0,Ko.jsxs)(di,{children:[(0,Ko.jsx)(pi,{children:"\ub85c\uadf8\uc778"}),(0,Ko.jsx)(fi,{children:"Stackflov\uc5d0 \uc624\uc2e0 \uac78 \ud658\uc601\ud574\uc694 \ud83d\udc4b"})]}),(0,Ko.jsxs)(hi,{children:[(0,Ko.jsxs)(gi,{children:[(0,Ko.jsx)(mi,{htmlFor:"login-id",children:"\uc544\uc774\ub514 (\uc774\uba54\uc77c)"}),(0,Ko.jsx)(xi,{id:"login-id",placeholder:"you@example.com",value:t,onChange:e=>n(e.target.value),onKeyDown:p,autoComplete:"username"})]}),(0,Ko.jsxs)(gi,{children:[(0,Ko.jsx)(mi,{htmlFor:"login-pw",children:"\ube44\ubc00\ubc88\ud638"}),(0,Ko.jsx)(xi,{id:"login-pw",type:"password",placeholder:"\ube44\ubc00\ubc88\ud638",value:a,onChange:e=>o(e.target.value),onKeyDown:p,autoComplete:"current-password"})]}),s&&(0,Ko.jsx)(vi,{children:s}),(0,Ko.jsx)(bi,{className:"login",onClick:d,disabled:i,"aria-busy":i,children:i?"\ub85c\uadf8\uc778 \uc911\u2026":"\ub85c\uadf8\uc778"})]}),(0,Ko.jsx)(yi,{children:(0,Ko.jsx)(wi,{children:"\uac04\ud3b8 \ub85c\uadf8\uc778"})}),(0,Ko.jsxs)(ki,{children:[(0,Ko.jsx)(Si,{onClick:()=>window.location.href=`${u}/oauth2/authorization/google`,title:"Google\ub85c \uacc4\uc18d\ud558\uae30",children:(0,Ko.jsx)("img",{src:Ci,alt:"Google"})}),(0,Ko.jsx)(Si,{onClick:()=>window.location.href=`${u}/oauth2/authorization/naver`,title:"Naver\ub85c \uacc4\uc18d\ud558\uae30",children:(0,Ko.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjMAAAIzCAYAAAD1UpjCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAACHJSURBVHhe7d13kJ3lfejx31mttNKqa1UxxRTTizGmGRcRIGBiOlgY27gR2zOJ7x+5M3fGd+6dW5J4biaTyWQmNzETnIjegjGG0IxMEd0GApgJ3RJFbdV2VXe15b7Pq9dFF4RWQrs6zzmfj+Zsec5K/sfSfHmfVouh+tNoiXNi72iPL8RgXFiMHBu1mFJ8binfBwDYFYPRV3xcVnTFY8XXN0dXPBJ/HauLj4Nbf+CD7Thmri5+5tMxvvifOCsG4o+LP/bEYmRi8Y6IAQB2n8HoLz52FZ1xd7TGP8ZB8Wz859gc12x9e3tGVZ/f3/8q3j+h+KO64j8V/wP/pRhJT2PGFp+H/kQHAGAoatFSvMYVXx1dZM0nY1X0xcnxbiyNjfHa9p/SbD9mvl/8gacVf9Bg/FnxB19ajMwqXiIGABgJs4rqOLbImfHxB7GoCJq12wua94+ZtD7mrDghxsR/K747p/jDJhefhQwAMDJqZXdMKl7HxEDRJUfFq/FOETSLy3e38d6YSVNL58cpxcf/UXx3WvFHpWklAICRV4sxxcdjoi3a4/R4M5bGmnh92yc028ZMeiJzWhwWrcVXUfyWiPHlOADAnjO6eO0XA9Ebp8QbsSS6io+/te2OpCkxqeieLxe9c1bxXXq0AwBQD2YU1XJpkTVp9igtEv6t3z2ZSdNLZ8VXy+3Xtdi3GLFGBgCoD2kNzWBMLb6aEcfHK7Ek3olfb51u+t2TmZ44PPri3OJHP1qNAADUj61Bc1KMjXNidMypRqsnM9+PiXFWXFb8yBeKVzrV11MZAKAepbNoxsYp5dOZxfFG9I8qT/j9o/hEbIqvFl8dVfxQ69afBQCoM1u3bE+MUdEVV8TLsSLWtsSr0V58cWzxxsHFqy39HABAHZsY6XqlV+KQWB5tLdESU4vG+UTxRjrhFwCg/g3GoUW/pFd7SwzEfsVQeiozoXwTAKD+TS6C5rjiNSvtZkpPZWzFBgDykdbO1OLw4jUnxcz+xWt6+QYAQC4Gi4YZjI6WODtmF9+2bx0FAMhEugj7+7FXS/THxPJbAIDctKYnM7Vt7zcAAMjIjLRmRswAAHkajNHb3poNAJAZMQMAZE3MAABZEzMAQNbEDACQNTEDAGRNzAAAWRMzAEDWxAwAkDUxAwBkTcwAAFkTMwBA1sQMAJA1MQMAZE3MAABZEzMAQNbEDACQNTEDAGRNzAAAWRMzAEDWxAwAkDUxAwBkTcwAAFkTMwBA1sQMAJA1MQMAZE3MAABZEzMAQNbEDACQNTEDAGRNzAAAWRMzAEDWxAwAkDUxAwBkTcwAAFkTMwBA1sQMAJA1MQMAZE3MAABZEzMAQNbEDACQNTEDAGRNzAAAWRMzAEDWxAwAkDUxAwBkTcwAAFkTMwBA1sQMAJA1MQMAZE3MAABZEzMAQNbEDACQNTEDAGRNzAAAWRMzAEDWxAwAkDUxAwBkTcwAAFkTMwBA1sQMAJA1MQMAZE3MAABZEzMAQNbEDACQNTEDAGRNzAAAWRMzAEDWxAwAkDUxAwBkTcwAAFkTMwBA1sQMAJA1MQMAZE3MAABZEzMAQNbEDACQNTEDAGRNzAAAWRMzAEDWxAwAkDUxAwBkTcwAAFkTMwBA1sQMAJA1MQMAZE3MAABZEzMAQNbEDACQNTEDAGRNzAAAWRMzAEDWxAwAkDUxAwBkTcwAAFkTMwBA1sQMAJA1MQMAZE3MAABZEzMAQNbEDACQNTEDAGRNzAAAWRMzAEDWxAwAkDUxAwBkTcwAAFkTMwBA1sQMAJA1MQMAZE3MAABZEzMAQNbEDACQNTEDAGRNzAAAWRMzAEDWxAwAkDUxAwBkTcwAAFkTMwBA1sQMAJA1MQMAZE3MAABZEzMAQNbEDACQNTEDAGRNzAAAWRMzAEDWxAwAkDUxAwBkTcwAAFkTMwBA1mqxMB4rPn9q67cwPFpqLdFWa4tRtVHVCEMxMDgQvYO90TfYV40w3NL/V0fXRkdrrbX4B7JWjbKztgxuid6B3hgsfsEw+5GYYUQcPf7o+NM5fxrHTzhe0OyEt3reiquWXxUPrH0g1vevr0YZTh8d+9G4YtYVcdrk02L8qPHVKDsjBfitK2+Na1dcG0t6l1SjMGzEDCPjxIknxp/v++dx6pRTy//iZWh6BnrirjV3xV+/89fxzPpnPKEZAQePOzi+v/f348LpF8akUZOqUXZG+v/tlcuujL99929jUc+iahSGzY+smYE61tbSFmdNOSvOnnp2TG+dXo0C8PvEDNS5NNXxzdnfjNOnnB5jW8ZWowD8hpiBDMwZPSe+MvMrccKEE8rFqQD8jpiBDKRF0ydNPCnO7Tg39mnbxy4bgN8jZiATk1onxbwZ8+IL074Q01qnVaMAiBnIRHoas/eYveOyGZeVW91b/PUFKPnXEDLzyQmfjEtnXBoHjD2gGgFobmIGMpPWz6SppvM7zo+Zo2dWowDNS8xAhtLupi/N+FJ8dtJnnVILND0xAxmq1Wpx5Pgjy1NqDxp7UPEX2V9loHn5FxAyNaY2ppxuOmPKGTG5dXI1CtB8xAxkbOKoifEnc/6kjBrTTUCzEjOQub3a9oqLpl8Ux4w/xunAQFMSM5C5NN00d9LcOGfaObHXmL2cDgw0HTEDDSCtmUmH6Z059czypGCAZiJmoEHs27ZvfG3m1+K48ceVZ9EANAsxAw3k4+M/Xh6ml8IGoFmIGWgg40aNK2/Wdjow0EzEDDSQtPh3v7b94tLpl8bJE0+O9pb26h2AxiVmoAGlW7UvmXFJ7D92/2oEoHGJGWhAY1vGxrnTzo0zpjodGGh8YgYaVDod+I9n/XF8furnnQ4MNDQxAw3soHEHxcXTL44j24+M1lprNQrQWMQMNLB0OvCpk0+Ns6eeHbNGz6pGARqLmIEGN611Wnxr9rfi9Cmn290ENCQxA03gI2M+EpfNvCyOm3Cc6Sag4YgZaBInTTwpLuy4MPZp26caAWgMYgaaRNrddE7HOeXupo7WjmoUIH9iBppEOh34wLEHxuUzL48TJ50YbS1t1TsAeRMz0GSOnXBsnD/NZZRA4xAz0GTSdu3zOs4rt2unnU4AuRMz0IRmjJ4R35j1jTh1yqm2awPZEzPQhNL6mUPGHRKXdFwSR7QfYbs2kDUxA00qXUaZLqJMh+mZbgJyJmagiaWI+fbsb5dXHrTV7G4C8iRmoMnt17ZfXD7rcqcDA9kSM9DkarVanDzx5Di349zYu23vcj0NQE7EDBBTWqfERdMvijOmnBGTWydXowB5EDNA+TTmoLEHxddmfi2OHX9sjKqNqt4BqH9iBvitdBnlF2d8sVxHA5ALMQP8Vnoi80dT/yjOnHJmTG2dWo0C1DcxA2xj7zF7xzdmfyPmTp7rdGAgC2IG2Eba3XRU+1FxQccFcdC4g4p/JPwzAdQ3/0oB75FOBz532rlx1pSzTDcBdU/MAO8rbdG+YvYVTgcG6p6YAbZrv7H7xZdmfCk+PuHjTgcG6paYAbZrTG1MzJ0yN86Zdk7sNWYvpwMDdUnMAB8orZmZN2NenDbltJg4amI1ClA/xAzwgX5zOvDlMy+Po8Yf5ekMUHfEDDAk6XTgtF17n7Z9qhGA+iBmgCFpa2mLCzsuLNfPdLR2VKMAe56YAYYkTS+lO5sunXFpnDDxhPIsGoB6IGaAIWuptcTxE46PL07/Yuw/dv9qFGDPEjPATimnm6ZfWB6mN2HUhGoUYM8RM8BOmzRqUnxn9nfizKlnxriWcdUowJ4hZoBdcvC4g+Oijovi8PbDnQ4M7FFiBtglaQHwGVPPiLOnnR0zR8+sRgFGnpgBdlnaov31mV+PP5jyB9E+qr0aBRhZYgbYZWm79gFjD4gvz/hyHNN+TIyqjareARg5Ygb40D416VNxfsf58ZExH6lGAEaOmAE+tHQBZYqZtLspXUwJMJLEDPChpemmtLspXUb5yQmfjDG1MdU7AMNPzAC7TQqZdH/Tvm37ViMAw0/MALtN2q590fSLyi3b6WA9gJEgZoDdavro6XHF7CvK7dpOBwZGgpgBdqu0fubQcYfGBR0XxCHjDrFdGxh2YgbY7dpb2uPzUz8fp0853e4mYNiJGWBYzBg9I7631/fK27VH10ZXowC7n5gBhk3a1XTZjMvimPFOBwaGj5gBhtVnJn8mzus4L+aMmVONAOxeYgYYVtNap8XFHRfHGVPOiMmtk6tRgN1HzADDqtzd1H5ofHXmV+Pj4z8erbXW6h2A3UPMACPilEmnlNu1XUYJ7G5iBhgR6b6mdBnlaVNOKy+mBNhdxAwwYtLupu/M/k7MnTy3vPoAYHcQM8CISetnjmw/snxC87FxH7NdG9gtxAwwotpHtccXpn2hPEzPZZTA7iBmgBE3c/TM+O7s78ZnJ33W6cDAhyZmgD0iTTN9eeaX4+jxR5tuAj4UMQPsEem8mbQQ+OypZ5dPagB2lZgB9pjpo6fHvBnzbNcGPhQxA+wxaXfTEe1HxNdmfq38nL4H2FliBtjjPj3p03HJ9Etin7Z9qhGAoRMzwB6XDtBLN2un6SbbtYGdJWaAurB/2/7ldNNJE0+KtlpbNQqwY2IGqAsttZY4fsLx5XTT/uP2t34GGDIxA9SNdDrwuR3nlqcD290EDJWYAerKb04H/tzkz5U3bQPsiJgB6s7B4w6OL07/YhzefrjTgYEdEjNA3Um7m86YckacPc3pwMCOiRmgLs0cMzMunXFpeQZNe0t7NQrwXmIGqEtpN9NR7UfFN2Z9I44cf6TdTcB2iRmgrqUnM+dNOy/2GrNXNQKwLTED1LUJoybE+R3nOx0Y2C4xA9S1NL10yLhD4qszvxrHTTguRtdGV+8AbCVmgLqXtmefPPHkuKjjoti3bd9qFGArMQNkYfyo8TFv5ryYO3mu3U3ANsQMkI2O1o64YvYV8ZnJn3E6MPBbYgbIRlo/c3T70TFv+rw4tP1QpwMDJTEDZCVdRnnm1DPL3U1TW6dWo0AzEzNAduaMmVNeRvmZSZ+xuwkQM0B+0nRTuowyXXdwxPgjTDdBkxMzQLbSVNMFHRfE7DGzqxGgGYkZIFvTWqfFBdMuiFMnnep0YGhiYgbIVppuOrz98PJ04KPHHx2ttdbqHaCZiBkga2m9TDp35txp55YLg4HmI2aA7I1rGRfzZsyL06ecXl5MCTQXMQM0hL3H7B3fmvWt+PSkT0dbS1s1CjQDMQM0hJZaS7luJk03HTj2QNu1oYmIGaBhTBw1MS7suDBOnXyq6SZoImIGaCgzx8yMb8/+ttOBoYmIGaChpO3aR7QfEV+Z8ZXydOA0/QQ0Nn/LgYaT1st8dvJn46wpZ8WM1hnVKNCoxAzQkGaPnl3e3XTqFOtnoNGJGaAh1Wq1OGb8MXH5zMvLU4Jb/HMHDcvfbshEz0BPLOtdFl39XTFQ/GJoPjfpc+V2bZdRQuMSM5CJLYNbYmH3wnis67Ho6uuqRtmR9lHtcfH0i8vt2uNHja9GgUYiZiAjS3qXxN8v/ft4pPuRMm4YmoPGHhTfnPXNOHniydFWczowNBoxA5l5edPLcUvnLfHKpldisPjFjqXdTSdOPDHOm3Ze7Dt233L7NtA4xAxk6IG1D8SPV/44lvYurUbYkTTFdOH0C8s1NKaboLGIGchQ55bO+NeV/xoPrn0wuvu7q1F2ZK8xe8V353y3vIzS6cDQOMQMZChNL7206aW4rvO6+NWGX0X/YH/1DjuSTgf+0owvldu1XUYJjUHMQKYGBgfi4a6H4841d8ayLcuqUXZkbMvYOGPKGfGHU/8wOlo7qlEgZ2IGMrZpYFPc3Hlz3LfmPtNNOyGdOTNv+rw4ZdIp0d7SXo0CuRIzkLm3et6K6zuvj1+s+0X0DvZWo3yQtJvpuAnHxddnfT0Oaz/M7ibInJiBzKX1Milkfrzqx/Hm5jedDrwT5k6e63RgaABiBhrAuv51cduq22LB2gXR3We6aagmjppYbtdOUeMySsiXmIEGsbx3ecxfPj+e6H7CdNMQpemlw8YdVl5G+Ynxn7BdGzIlZqCBPL/h+bhx5Y3x6qZXnQ48RGl7dloIfNH0i2Kftn2qUSAnYgYaSLqvKU013bPmnvJgPYYmTTddMv2SOHnSydHW4u4myI2YgQaTrji4evnV8bO1PyvX0jA0aRHw9+Z8L+ZOmmu6CTIjZqDBpOmldBlluu7gjc1vVKPsSFo/c2T7kXHx9Ivj4HEHF/84+ucRcuFvKzSgtF37gTUPxB2r7ohlvU4HHqp0AeUJE0+II8YfEeNaxlWjQL0TM9Cg1g+sj2tXXBv3rXU68M5I1x2kU4Hd2wT5EDPQwBb3LI4bO2+MZ9Y/Ez2DPdUoQGMRM9DA+gb7ynNn7lp9V7zb867t2kBDEjPQ4NIU002dN5U3bG/s31iNAjQOMQNNYEnvkvjHZf8YC7sXlmfRADQSMQNN4qUNL5WXUb62+TWXUQINRcxAk9g0sCnuWX1P3L/6/li9ZXU1CpA/MQNNIi3+faf3nZi/Yn483P1wbBywfgZoDGIGmsxLG1+Kmztvjtc3vV6NAORNzECTSdu102WUd6+522WUQEMQM9CE1vStiWuWXxP3rrnX6cBA9sQMNKG0fibtarpp5U3x/IbnbdcGsiZmoEml6aaFXQvL04GX9i6tRgHyI2agia3rXxfXrLgmHul6JHoG3N0E5EnMQJNb3rs8rlp+VXk6cO9gbzUKkA8xA00urZ95dv2zcfuq2+PNzW86HRjIjpgBYn3/+rhz9Z3x87U/j66+rmoUIA9iBiifzrzd83b8cNkP49HuR003AVkRM8Bvvbjhxbht5W3xxqY3ysAByIGYAbZx/9r7y+3aTgcGciFmgG0s610WN3TeEA+tfahcSwNQ78QMsI00vfTCxhfius7r4lcbfxX9g/3VOwD1ScwA7zEwOBAPdT0U96+5P1ZuWVmNAtQnMQO8r3Q68NUrro4Huh6IjQMbq1GA+iNmgO1a3LM45i+fH0+te8p2baBuiRlgu9J6mafXPV2eDrxo8yKnAwN1ScwAH6i7vzvuWHVHeZjehv4N1ShA/RAzwA691fNWXLnsynii+4noG+yrRgHqg5gBhiRdRnnzypvj9c2vOx0YqCtiBhiS9EQmnQ58z5p7bNcG6oqYAYbs3Z534/oV18cj3Y9YPwPUDTEDDFmaXvr3Df8eN6y4IV7b/JrpJqAuiBlgp6Tt2vetuS/uXH2nyyiBuiBmgJ22YWBD3NR5U3nlgdOBgT1NzAC75NVNr5anAz+z/pnYMrilGgUYeWIG2CVpd9Pj6x6Pu1bfVS4Mtn4G2FPEDLDLuvq64obOG+LB7gdjY7/pJmDPEDPAh/JOzzvxL8v/pbzDyenAwJ4gZoAP7Zfrfhm3rro13tz8pukmYMSJGeBD2zywOe5efXe5ZXt13+pqFGBkiBngQ0tPY9JllNd0XlPerr1pYFP1DsDwEzPAblGeDrz+3+OWzlvK6SaAkSJmgN0mLQC+d8295WWUq/pWVaMAw0vMALvVmr41cfXyq+OBNQ+4jBIYEWIG2K3SdFM6HfjmlTfHixtftF0bGHZiBtjtegd748GuB+Onq38aS3uXVqMAw0PMAMNibd/auHbFtfF49+Nl3AAMFzEDDJt0OvBVy6+KJ7ufNN0EDBsxAwyrdM3B7atvj8U9i8v1NAC7m5gBhtW6/nVxx6o7yt1NaeoJYHcTM8CwSk9jFm1eFFetuCoeX/d49Az2VO8A7B5iBhh2vzkd+NbOW+PXm35djQLsHmIGGBFpAfD9a++Pe9fe63RgYLcSM8CIWda7LK5bcV080vVIbBzYWI0CfDhiBhgxabrphQ0vxPWd18dLG1+K/sH+6h2AXSdmgBG1ZXBLPLj2wbhn9T2xYsuKahRg14kZYMSt7lsd81fMj0e7H3U6MPChiRlgj3ir56345+X/HE+te6p8WgOwq8QMsEek9TIpZO5cfWe83fN2uZ4GYFeIGWCPSScC/2TVT+Kx7sdiQ/+GahRg54gZYI9JT2Ne2/Ra/N2Sv4sn1j1hdxOwS8QMsMc9t+G5uH3V7eU6GoCdJWaAPW5gcCDuWXNP/Nuaf3M6MLDTxAxQFxZvXhzXr7i+XD/jdGBgZ4gZoC6k9TPPrn82blhxQ7y66dXye4ChEDNA3UgH6KXppp+t+Vms6VtTjQJ8MDED1JXu/u64pvOaWNi90OnAwJCIGaDuvLLxlbhq2VXxi3W/cDowsENiBqg7KWCe6H4i7lp9V7zb8671M8AHEjNAXUqXUd6y8pZ4cv2T0TPQU40CvJeYAepSehrz5uY348qlV8bT6552OjCwXWIGqGtPrnsyblt1WyzqWWS6CXhfYgaoa2mK6e7Vd8fP1/68vJgS4P8nZoC6lp7GvNHzRsxfMT8eX/d4bB7YXL0DsJWYAere4OBgPLXuqbil85ZYtHlRNQqwlZgBspAWAKet2netuctllMA2xAyQjXTFwU2dN5WXUZpuAn5DzADZSOtnXtr4Uly34rp4YcML0TfYV70DNDMxA2QlPZFZsHZBOd20fMvyahRoZmIGyE46HfimFTeVVx44HRgQM0CWXtv8WvzTsn+KX67/pekmaHJiBshWOh34J6t+Em/3vF2upwGak5gBsrWuf13csfqOWNC1ILr6uqpRoNmIGSBb6WnM65teL3c3PbP+megd7K3eAZqJmAGyloImnTtzY+eNsXjz4moUaCZiBsheWgB895q7494195YH6wHNRcwADSGdOXPjyhvj0e5HY9PApmoUaAZiBmgIA4MD8ez6Z+PmzpvjlY2vlHc5Ac1BzAANIx2gd9+a+8opp84tndUo0OjEDNBQVvatjKtXXF2eQbNlcEs1CjQyMQM0nDc2vxHXrLimnHZyOjA0PjEDNJy0XuahrofK04Hf7Xm33L4NNC4xAzSktX1r445Vd5S7mzb0b6hGgUYkZoCGlJ7GvLzp5fiHZf8Qv1j/C7uboIGJGaBhpaB5et3Tcfuq2+Pt3rerUaDRiBmgoaUFwD9d9dO4Z/U9TgeGBiVmgIaXnsrc0HlDuV1788DmahRoFGIGaHjpdOB0q/ZNnTfFa5tei4HiF9A4xAzQFNJ9TXevvjsWdC2Irr6uahRoBGIGaBrpdOCrll0VC7sWOh0YGoiYAZrKq5tejfkr5sdz65+zXRsahJgBmkp6IvNY92PlZZRLepeU27eBvIkZoOmkG7Vv6bzF7iZoEGIGaDrpacx/bPqP+OGyH5a7nEw3Qd7EDNC0Hu16NG5beVu80/tONQLkSMwATSutn7l3zb3xYNeD0dVvuzbkSswATStNN726+dWYv3x+PNlt/QzkSswATS2dDpwWAt+88uZY1LOoGgVyImaAptcz0FNeRrlg7YLo7u+uRoFciBmAwqq+VXH1iqvj8e7HnQ4MmREzAJUXN7wY16y4Jl7Y8EL0DfZVo0C9EzMAlbQAOE01pR1O6WA9IA9iBuD3pIi5bsV18fT6pz2dgUyIGYDfk7Zrv7zp5bhy6ZXxy/W/dDowZEDMALyPR7sfjdtX3R5v97xdBg5Qv8QMwPtY378+7lp1Vzzc/XCs619XjQL1qBYL47Hi86e2fgvDY86YOXHKpFNin7Z9ioLW0Luid7C33G3z3IbnoqvP0fsjoaXWEoeNOyyOn3B8TBs9rfgHs1a9wwdJU3PPb3i+vMTTuT2MgB+JGQAgZz/yn8gAQNbEDACQNTEDAGRNzAAAWRMzAEDWxAwAkDUxAwBkTcwAAFkTMwBA1sQMAJA1MQMAZE3MAABZEzMAQNbEDACQNTEDAGRNzAAAWRMzAEDWxAwAkDUxAwBkTcwAAFkTMwBA1sQMAJA1MQMAZE3MAABZEzMAQNbEDACQNTEDAGRNzAAAWRMzAEDWxAwAkDUxAwBkTcwAAFkTMwBA1sQMAJA1MQMAZE3MAABZEzMAQNbEDACQNTEDAGRNzAAAWRMzAEDWxAwAkDUxAwBkTcwAAFkTMwBA1sQMAJA1MQMAZE3MAABZEzMAQNbEDACQNTEDAGRNzAAAWRMzAEDWxAwAkDUxAwBkTcwAAFkTMwBA1sQMAJA1MQMAZE3MAABZEzMAQNbEDACQNTEDAGRNzAAAWRMzAEDWxAwAkDUxAwBkTcwAAFkTMwBA1sQMAJA1MQMAZE3MAABZEzMAQNbEDACQNTEDAGRNzAAAWRMzAEDWxAwAkDUxAwBkTcwAAFkTMwBA1sQMAJA1MQMAZE3MAABZEzMAQNbEDACQNTEDAGRNzAAAWRMzAEDWxAwAkDUxAwBkTcwAAFkTMwBA1sQMAJA1MQMAZE3MAABZEzMAQNbEDACQNTEDAGRNzAAAWRMzAEDWxAwAkDUxAwBkTcwAAFkTMwBA1sQMAJA1MQMAZE3MAABZEzMAQNbEDACQNTEDAGRNzAAAWRMzAEDWxAwAkDUxAwBkTcwAAFkTMwBA1sQMAJA1MQMAZE3MAABZEzMAQNbEDACQNTEDAGRNzAAAWRMzAEDWxAwAkDUxAwBkTcwAAFkTMwBA1sQMAJA1MQMAZE3MAABZSzEzsPVLAID8pJhZt/VLAIDM1GJ1SwxGT/UtAEBuVrXEfdFZfNG39XsAgEwMFv2yMZanaaa3itfqchAAIB9L4m9iZYqZl4rX0nIIACAXtfhV8VqaYua1GIx3is+mmgCAPAxGb/Hx+eK1pCUGYlkxkL5Zld4DAKh7tVhcfHy5eK1riYmxNsbG08U3abC/eAEA1K+08Hcwnov2eDHGxMZRsSAGYlasjwNjn6JyDil+pH3rTwIA1KFavFt8vDX+Zzwad8eGtGYmoiuWxuZ4uKicXxffOREYAKhP6alMxNPREwuLr9akoVHpQzE0GAfEO/Gx2K/46vBiZFw5DgBQT2qxIlrih/FX8VDcXy4CrmImebgYmBNvx4FF1tSKjxGtW98AAKgDg7GhaJQr4y/iprj3d2fkbZ1m+o3e+HX0x43FV8+W3wEA1IfNRcjcV3TKT2Mglldjpd89mUkeL35kr1gSB8bo4ruPFb9pavG5Vr4HALAnDBZ9Uounitf/jR/Ek0XSbHOv5LYxkzxa/MDMeCEOKj7XyqCZVowKGgBg5KUFv7V4LLbEn8dfxIK4/70XZL83ZpLHit+4X/xHkTK9xR/y0WIkBc22U1IAAMNrc/F6LFrj/xS/Hon73n8JzPYD5YDYEDPi+uKrvyyC5qni83tKCABgmGws+uOuqMX/jgNjYUzffofseProv8eYODMOK/7APyu+O7t4pXU07/9EBwDgw0nnyKQLsH9YFMgNRcq8E/9Wjm3X0NfC/NeYFmcVvyLmFa9Tit9pLQ0AsHsMFr9qRbgMxoLidW38IJ6K+2JD9e4HGvoTloWxqciXtI7mqeJ3pZu204Kc9JQmXX9gPQ0AsCvSU5dFxev2oiv+Lnpifvxl0Rs/G/ryll17svKDaI3Ti7TZHAcU351U/CmfLz4fW7wmlV3liQ0A8H5qRSlsvTppRfFKdxDcU7yeKdJlcfxVrIsFO3/p9e6Lju/HxDgrZkVLHFp8l6agAAC2NRhvFSnzZvwglr/fNmsAgCYT8f8AM7QB4LvrshoAAAAASUVORK5CYII=",alt:"Naver"})}),(0,Ko.jsx)(Si,{onClick:()=>window.location.href=`${u}/oauth2/authorization/kakao`,title:"Kakao\ub85c \uacc4\uc18d\ud558\uae30",children:(0,Ko.jsx)("img",{src:Ei,alt:"Kakao"})})]}),(0,Ko.jsxs)(ji,{children:[(0,Ko.jsx)("span",{children:"\ucc98\uc74c\uc774\uc2e0\uac00\uc694?"}),(0,Ko.jsx)(Ai,{onClick:()=>e("/register"),children:"\ud68c\uc6d0\uac00\uc785"}),(0,Ko.jsx)("span",{children:"\xb7"}),(0,Ko.jsx)(Ai,{onClick:()=>e("/account/reset"),children:"\ube44\ubc00\ubc88\ud638 \uc7ac\uc124\uc815"})]})]})})},zi=()=>(0,Ko.jsx)("div",{children:(0,Ko.jsx)(Ti,{})}),Pi=kr`
  0%   { opacity: 0; transform: translateY(8px) scale(.99); }
  100% { opacity: 1; transform: translateY(0)   scale(1); }
`,Ni=kr`
  0%   { opacity: 0; transform: translateY(6px) scale(.98); }
  70%  { opacity: 1; transform: translateY(0)   scale(1.02); }
  100% { opacity: 1; transform: translateY(0)   scale(1); }
`,$i=wr.section`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 6px 16px 0;     /* 상단 살짝만 띄우고, 아래 여백 최소화 */
`,Ri=wr.h1`
  margin: 4px 0 12px;
  padding-bottom: 10px;          /* 선이 들어갈 공간 확보 */
  overflow: visible;
  font-size: 42px;
  font-weight: 900;
  letter-spacing: -0.02em;
  line-height: 1.2;
  position: relative;
  animation: ${Pi} .35s ease both;

  /* 굵은 검은 줄 대신, 포인트 언더라인 */
  &::after {
    content: "";
    position: absolute;
    left: 0; bottom: clamp(140px, 20vw, 280px);
    width: 88px; height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, #111827, #6366f1);
  }
`,Oi=wr.ul`
  margin: 10px 0 8px;     /* 리스트와 간격 줄이기 */
  padding: 0;
  list-style: none;

  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,_i=wr.button`
  --active-border: rgba(99,102,241,.45);
  --idle-border: #cdd8e3;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 64px;
  height: 36px;
  padding: 0 14px;

  border: 1.5px solid ${e=>{let{$active:t}=e;return t?"var(--active-border)":"var(--idle-border)"}};
  border-radius: 999px;
  background: ${e=>{let{$active:t}=e;return t?"rgba(99,102,241,.08)":"#fff"}};
  color: #111827;
  font-size: 14px;
  font-weight: ${e=>{let{$active:t}=e;return t?700:500}};
  cursor: pointer;

  transition: background .15s ease, border-color .15s ease, transform .05s ease, box-shadow .15s ease;
  animation: ${Ni} .36s cubic-bezier(.2,.65,.2,1) both;
  animation-delay: var(--stagger, 0ms);

  &:hover {
    background: ${e=>{let{$active:t}=e;return t?"rgba(99,102,241,.12)":"#f8fafc"}};
    border-color: ${e=>{let{$active:t}=e;return t?"rgba(99,102,241,.55)":"#bfd0e0"}};
  }
  &:active { transform: translateY(1px); }
  &:focus-visible {
    outline: 2px solid rgba(99,102,241,.35);
    outline-offset: 2px;
  }
`,Mi=wr.button`
  margin-left: auto;              /* 우측 끝으로 밀기 */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 14px;

  border-radius: 999px;
  border: 1.5px solid #cdd8e3;
  background: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: background .15s ease, border-color .15s ease, transform .05s ease;

  &:hover { background: #f0f5fb; border-color: #b7c8d9; }
  &:active { transform: translateY(1px); }
`,Di=e=>{let{nowCategory:t,setNowCategory:n}=e;const r=Nr.get("accessToken"),a=te(),o=[{key:99,label:"\uc804\uccb4"},{key:0,label:"\ud83c\udfe0 \uc790\ucde8"},{key:1,label:"\u26a1 \ubc88\uac1c"},{key:2,label:"\ud83c\udf6f \uafc0\ud301"},{key:3,label:"\ud83c\udf59 \ub808\uc2dc\ud53c"}];return(0,Ko.jsxs)($i,{children:[(0,Ko.jsx)(Ri,{children:"\uc790\ucde8\ub85c\uadf8"}),(0,Ko.jsxs)(Oi,{children:[o.map(((e,r)=>(0,Ko.jsx)("li",{style:{listStyle:"none"},children:(0,Ko.jsx)(_i,{$active:t===e.key,"aria-pressed":t===e.key,onClick:()=>n(e.key),style:{"--stagger":60*r+"ms"},children:e.label})},e.key))),(0,Ko.jsx)(Mi,{onClick:()=>{if(!r)return alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \uae30\ub2a5\uc785\ub2c8\ub2e4.");a("/trace/create")},style:{"--stagger":60*o.length+"ms"},title:"\uae00\uc4f0\uae30",children:"\uae00\uc4f0\uae30"})]})]})},Li=wr.div`
  --card-radius: 16px;
  --card-border: 1px solid #e9e9ec;
  --card-hover: 0 6px 20px rgba(0, 0, 0, 0.06);
  --text-strong: #111827;
  --text-sub: #6b7280;
  --brand: #6366f1;
  --like: #ef4444;
  --bookmark: #0ea5e9;

  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 8px 16px 24px;

  @media (max-width: 768px) {
    padding: 8px 12px 20px;
  }
`,Ii=wr.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
`,Bi=wr.li`
  list-style: none;
`,Fi=kr`
  0%   { opacity: 0; transform: translateY(8px) scale(0.99); }
  60%  { opacity: 1; transform: translateY(0)    scale(1.000); }
  100% { opacity: 1; transform: translateY(0)    scale(1.000); }
`,Ui=wr.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 12px;

  background: #fff;
  border: var(--card-border);
  border-radius: var(--card-radius);
  padding: 16px 16px 14px;
  transition: box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease;

  /* reveal 초기 상태 */
  opacity: 0;
  transform: translateY(4px) scale(0.995);

  /* 화면 진입 후 1회 재생 */
  &[data-show="true"] {
    animation: ${Fi} 420ms cubic-bezier(.2,.65,.2,1) both;
    animation-delay: var(--reveal-delay, 0ms);
  }

  &:hover {
    box-shadow: var(--card-hover);
    transform: translateY(-1px);
    border-color: rgba(99, 102, 241, 0.25);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    align-items: flex-start;
  }
`,Hi=wr.div`
  min-width: 0; /* ellipsis */
`,Wi=wr.h3`
  margin: 0 0 6px;
  font-size: 20px;
  font-weight: 800;
  line-height: 1.35;
  color: var(--text-strong);
  cursor: pointer;

  display: -webkit-box;
  -webkit-line-clamp: 2; /* 2줄 말줄임 */
  -webkit-box-orient: vertical;
  overflow: hidden;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
    color: var(--brand);
  }
`,Yi=wr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 16px;
  align-items: center;
`,Vi=wr.span`
  font-size: 14px;
  color: var(--text-sub);
`,Gi="\n  display: inline-flex;\n  gap: 6px;\n  align-items: center;\n  color: var(--text-sub);\n  font-size: 14px;\n\n  .meta-icon {\n    font-size: 20px !important;\n  }\n  .meta-text {\n    line-height: 1;\n  }\n",Qi=wr.span`
  ${Gi}
`,qi=wr.span`
  ${Gi}
`,Ki=wr.div`
  display: inline-flex;
  gap: 6px;
  align-items: center;
`,Xi=wr.button`
  display: inline-flex;
  gap: 6px;
  align-items: center;
  justify-content: center;

  border: 1px solid
    ${e=>{let{$active:t,$bookmark:n}=e;return t?n?"rgba(14, 165, 233, 0.35)":"rgba(239, 68, 68, 0.35)":"#e5e7eb"}};
  background: ${e=>{let{$active:t,$bookmark:n}=e;return t?n?"rgba(14, 165, 233, 0.08)":"rgba(239, 68, 68, 0.08)":"#fff"}};
  color: ${e=>{let{$active:t,$bookmark:n}=e;return t?n?"#0ea5e9":"#ef4444":"#374151"}};

  padding: 8px 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease, transform 0.05s ease;

  svg {
    font-size: 22px;
  }

  .count {
    font-size: 14px;
    min-width: 10px;
  }

  &:hover {
    background: ${e=>{let{$bookmark:t}=e;return t?"rgba(14, 165, 233, 0.12)":"rgba(239, 68, 68, 0.12)"}};
    border-color: ${e=>{let{$bookmark:t}=e;return t?"rgba(14, 165, 233, 0.45)":"rgba(239, 68, 68, 0.45)"}};
  }

  &:active {
    transform: translateY(1px) scale(0.98);
  }
`,Zi=wr.div`
  border: 1px dashed #d1d5db;
  border-radius: 16px;
  padding: 32px 20px;
  text-align: center;
  color: #6b7280;
  background: linear-gradient(0deg, rgba(249, 250, 251, 0.6), rgba(249, 250, 251, 0.6)),
    repeating-linear-gradient(
      -45deg,
      rgba(99, 102, 241, 0.06) 0px,
      rgba(99, 102, 241, 0.06) 6px,
      transparent 6px,
      transparent 12px
    );
  span {
    display: block;
    margin-top: 6px;
    font-size: 14px;
  }
`,Ji=kr`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,el=wr.div`
  height: 96px;
  border-radius: var(--card-radius);
  border: var(--card-border);
  background: linear-gradient(
    90deg,
    #f6f7f9 25%,
    #eceff3 37%,
    #f6f7f9 63%
  );
  background-size: 400% 100%;
  animation: ${Ji} 1.1s ease-in-out infinite;
`;wr.span``,wr.span``;function tl(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=tl(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}const nl=function(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=tl(e))&&(r&&(r+=" "),r+=t);return r};function rl(e){const t=new URL(`https://mui.com/production-error/?code=${e}`);for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return r.forEach((e=>t.searchParams.append("args[]",e))),`Minified MUI error #${e}; visit ${t} for the full message.`}function al(e){if("string"!==typeof e)throw new Error(rl(7));return e.charAt(0).toUpperCase()+e.slice(1)}const ol=al;function il(){return il=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},il.apply(null,arguments)}var ll=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(lw){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)})),this.tags=[],this.ctr=0},e}(),sl=Math.abs,cl=String.fromCharCode,ul=Object.assign;function dl(e){return e.trim()}function pl(e,t,n){return e.replace(t,n)}function fl(e,t){return e.indexOf(t)}function hl(e,t){return 0|e.charCodeAt(t)}function gl(e,t,n){return e.slice(t,n)}function ml(e){return e.length}function xl(e){return e.length}function vl(e,t){return t.push(e),e}var bl=1,yl=1,wl=0,kl=0,Sl=0,jl="";function Al(e,t,n,r,a,o,i){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:bl,column:yl,length:i,return:""}}function Cl(e,t){return ul(Al("",null,null,"",null,null,0),e,{length:-e.length},t)}function El(){return Sl=kl<wl?hl(jl,kl++):0,yl++,10===Sl&&(yl=1,bl++),Sl}function Tl(){return hl(jl,kl)}function zl(){return kl}function Pl(e,t){return gl(jl,e,t)}function Nl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $l(e){return bl=yl=1,wl=ml(jl=e),kl=0,[]}function Rl(e){return jl="",e}function Ol(e){return dl(Pl(kl-1,Dl(91===e?e+2:40===e?e+1:e)))}function _l(e){for(;(Sl=Tl())&&Sl<33;)El();return Nl(e)>2||Nl(Sl)>3?"":" "}function Ml(e,t){for(;--t&&El()&&!(Sl<48||Sl>102||Sl>57&&Sl<65||Sl>70&&Sl<97););return Pl(e,zl()+(t<6&&32==Tl()&&32==El()))}function Dl(e){for(;El();)switch(Sl){case e:return kl;case 34:case 39:34!==e&&39!==e&&Dl(Sl);break;case 40:41===e&&Dl(e);break;case 92:El()}return kl}function Ll(e,t){for(;El()&&e+Sl!==57&&(e+Sl!==84||47!==Tl()););return"/*"+Pl(t,kl-1)+"*"+cl(47===e?e:El())}function Il(e){for(;!Nl(Tl());)El();return Pl(e,kl)}var Bl="-ms-",Fl="-moz-",Ul="-webkit-",Hl="comm",Wl="rule",Yl="decl",Vl="@keyframes";function Gl(e,t){for(var n="",r=xl(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function Ql(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case Yl:return e.return=e.return||e.value;case Hl:return"";case Vl:return e.return=e.value+"{"+Gl(e.children,r)+"}";case Wl:e.value=e.props.join(",")}return ml(n=Gl(e.children,r))?e.return=e.value+"{"+n+"}":""}function ql(e){return Rl(Kl("",null,null,null,[""],e=$l(e),0,[0],e))}function Kl(e,t,n,r,a,o,i,l,s){for(var c=0,u=0,d=i,p=0,f=0,h=0,g=1,m=1,x=1,v=0,b="",y=a,w=o,k=r,S=b;m;)switch(h=v,v=El()){case 40:if(108!=h&&58==hl(S,d-1)){-1!=fl(S+=pl(Ol(v),"&","&\f"),"&\f")&&(x=-1);break}case 34:case 39:case 91:S+=Ol(v);break;case 9:case 10:case 13:case 32:S+=_l(h);break;case 92:S+=Ml(zl()-1,7);continue;case 47:switch(Tl()){case 42:case 47:vl(Zl(Ll(El(),zl()),t,n),s);break;default:S+="/"}break;case 123*g:l[c++]=ml(S)*x;case 125*g:case 59:case 0:switch(v){case 0:case 125:m=0;case 59+u:-1==x&&(S=pl(S,/\f/g,"")),f>0&&ml(S)-d&&vl(f>32?Jl(S+";",r,n,d-1):Jl(pl(S," ","")+";",r,n,d-2),s);break;case 59:S+=";";default:if(vl(k=Xl(S,t,n,c,u,a,l,b,y=[],w=[],d),o),123===v)if(0===u)Kl(S,t,k,k,y,o,d,l,w);else switch(99===p&&110===hl(S,3)?100:p){case 100:case 108:case 109:case 115:Kl(e,k,k,r&&vl(Xl(e,k,k,0,0,a,l,b,a,y=[],d),w),a,w,d,l,r?y:w);break;default:Kl(S,k,k,k,[""],w,0,l,w)}}c=u=f=0,g=x=1,b=S="",d=i;break;case 58:d=1+ml(S),f=h;default:if(g<1)if(123==v)--g;else if(125==v&&0==g++&&125==(Sl=kl>0?hl(jl,--kl):0,yl--,10===Sl&&(yl=1,bl--),Sl))continue;switch(S+=cl(v),v*g){case 38:x=u>0?1:(S+="\f",-1);break;case 44:l[c++]=(ml(S)-1)*x,x=1;break;case 64:45===Tl()&&(S+=Ol(El())),p=Tl(),u=d=ml(b=S+=Il(zl())),v++;break;case 45:45===h&&2==ml(S)&&(g=0)}}return o}function Xl(e,t,n,r,a,o,i,l,s,c,u){for(var d=a-1,p=0===a?o:[""],f=xl(p),h=0,g=0,m=0;h<r;++h)for(var x=0,v=gl(e,d+1,d=sl(g=i[h])),b=e;x<f;++x)(b=dl(g>0?p[x]+" "+v:pl(v,/&\f/g,p[x])))&&(s[m++]=b);return Al(e,t,n,0===a?Wl:l,s,c,u)}function Zl(e,t,n){return Al(e,t,n,Hl,cl(Sl),gl(e,2,-2),0)}function Jl(e,t,n,r){return Al(e,t,n,Yl,gl(e,0,r),gl(e,r+1,-1),r)}var es=function(e,t,n){for(var r=0,a=0;r=a,a=Tl(),38===r&&12===a&&(t[n]=1),!Nl(a);)El();return Pl(e,kl)},ts=function(e,t){return Rl(function(e,t){var n=-1,r=44;do{switch(Nl(r)){case 0:38===r&&12===Tl()&&(t[n]=1),e[n]+=es(kl-1,t,n);break;case 2:e[n]+=Ol(r);break;case 4:if(44===r){e[++n]=58===Tl()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=cl(r)}}while(r=El());return e}($l(e),t))},ns=new WeakMap,rs=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||ns.get(n))&&!r){ns.set(e,!0);for(var a=[],o=ts(t,a),i=n.props,l=0,s=0;l<o.length;l++)for(var c=0;c<i.length;c++,s++)e.props[s]=a[l]?o[l].replace(/&\f/g,i[c]):i[c]+" "+o[l]}}},as=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function os(e,t){switch(function(e,t){return 45^hl(e,0)?(((t<<2^hl(e,0))<<2^hl(e,1))<<2^hl(e,2))<<2^hl(e,3):0}(e,t)){case 5103:return Ul+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ul+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Ul+e+Fl+e+Bl+e+e;case 6828:case 4268:return Ul+e+Bl+e+e;case 6165:return Ul+e+Bl+"flex-"+e+e;case 5187:return Ul+e+pl(e,/(\w+).+(:[^]+)/,Ul+"box-$1$2"+Bl+"flex-$1$2")+e;case 5443:return Ul+e+Bl+"flex-item-"+pl(e,/flex-|-self/,"")+e;case 4675:return Ul+e+Bl+"flex-line-pack"+pl(e,/align-content|flex-|-self/,"")+e;case 5548:return Ul+e+Bl+pl(e,"shrink","negative")+e;case 5292:return Ul+e+Bl+pl(e,"basis","preferred-size")+e;case 6060:return Ul+"box-"+pl(e,"-grow","")+Ul+e+Bl+pl(e,"grow","positive")+e;case 4554:return Ul+pl(e,/([^-])(transform)/g,"$1"+Ul+"$2")+e;case 6187:return pl(pl(pl(e,/(zoom-|grab)/,Ul+"$1"),/(image-set)/,Ul+"$1"),e,"")+e;case 5495:case 3959:return pl(e,/(image-set\([^]*)/,Ul+"$1$`$1");case 4968:return pl(pl(e,/(.+:)(flex-)?(.*)/,Ul+"box-pack:$3"+Bl+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ul+e+e;case 4095:case 3583:case 4068:case 2532:return pl(e,/(.+)-inline(.+)/,Ul+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ml(e)-1-t>6)switch(hl(e,t+1)){case 109:if(45!==hl(e,t+4))break;case 102:return pl(e,/(.+:)(.+)-([^]+)/,"$1"+Ul+"$2-$3$1"+Fl+(108==hl(e,t+3)?"$3":"$2-$3"))+e;case 115:return~fl(e,"stretch")?os(pl(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==hl(e,t+1))break;case 6444:switch(hl(e,ml(e)-3-(~fl(e,"!important")&&10))){case 107:return pl(e,":",":"+Ul)+e;case 101:return pl(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Ul+(45===hl(e,14)?"inline-":"")+"box$3$1"+Ul+"$2$3$1"+Bl+"$2box$3")+e}break;case 5936:switch(hl(e,t+11)){case 114:return Ul+e+Bl+pl(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Ul+e+Bl+pl(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Ul+e+Bl+pl(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Ul+e+Bl+e+e}return e}var is=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Yl:e.return=os(e.value,e.length);break;case Vl:return Gl([Cl(e,{value:pl(e.value,"@","@"+Ul)})],r);case Wl:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Gl([Cl(e,{props:[pl(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return Gl([Cl(e,{props:[pl(t,/:(plac\w+)/,":"+Ul+"input-$1")]}),Cl(e,{props:[pl(t,/:(plac\w+)/,":-moz-$1")]}),Cl(e,{props:[pl(t,/:(plac\w+)/,Bl+"input-$1")]})],r)}return""}))}}],ls=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var r,a,o=e.stylisPlugins||is,i={},l=[];r=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)i[t[n]]=!0;l.push(e)}));var s,c,u=[Ql,(c=function(e){s.insert(e)},function(e){e.root||(e=e.return)&&c(e)})],d=function(e){var t=xl(e);return function(n,r,a,o){for(var i="",l=0;l<t;l++)i+=e[l](n,r,a,o)||"";return i}}([rs,as].concat(o,u));a=function(e,t,n,r){s=n,Gl(ql(e?e+"{"+t.styles+"}":t.styles),d),r&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new ll({key:t,container:r,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:a};return p.sheet.hydrate(l),p};var ss={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function cs(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var us=/[A-Z]|^ms/g,ds=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ps=function(e){return 45===e.charCodeAt(1)},fs=function(e){return null!=e&&"boolean"!==typeof e},hs=cs((function(e){return ps(e)?e:e.replace(us,"-$&").toLowerCase()})),gs=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(ds,(function(e,t,n){return xs={name:t,styles:n,next:xs},t}))}return 1===ss[e]||ps(e)||"number"!==typeof t||0===t?t:t+"px"};function ms(e,t,n){if(null==n)return"";var r=n;if(void 0!==r.__emotion_styles)return r;switch(typeof n){case"boolean":return"";case"object":var a=n;if(1===a.anim)return xs={name:a.name,styles:a.styles,next:xs},a.name;var o=n;if(void 0!==o.styles){var i=o.next;if(void 0!==i)for(;void 0!==i;)xs={name:i.name,styles:i.styles,next:xs},i=i.next;return o.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=ms(e,t,n[a])+";";else for(var o in n){var i=n[o];if("object"!==typeof i){var l=i;null!=t&&void 0!==t[l]?r+=o+"{"+t[l]+"}":fs(l)&&(r+=hs(o)+":"+gs(o,l)+";")}else if(!Array.isArray(i)||"string"!==typeof i[0]||null!=t&&void 0!==t[i[0]]){var s=ms(e,t,i);switch(o){case"animation":case"animationName":r+=hs(o)+":"+s+";";break;default:r+=o+"{"+s+"}"}}else for(var c=0;c<i.length;c++)fs(i[c])&&(r+=hs(o)+":"+gs(o,i[c])+";")}return r}(e,t,n);case"function":if(void 0!==e){var l=xs,s=n(e);return xs=l,ms(e,t,s)}}var c=n;if(null==t)return c;var u=t[c];return void 0!==u?u:c}var xs,vs=/label:\s*([^\s;{]+)\s*(;|$)/g;function bs(e,t,n){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,a="";xs=void 0;var o=e[0];null==o||void 0===o.raw?(r=!1,a+=ms(n,t,o)):a+=o[0];for(var i=1;i<e.length;i++){if(a+=ms(n,t,e[i]),r)a+=o[i]}vs.lastIndex=0;for(var l,s="";null!==(l=vs.exec(a));)s+="-"+l[1];var c=function(e){for(var t,n=0,r=0,a=e.length;a>=4;++r,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(a){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}(a)+s;return{name:c,styles:a,next:xs}}var ys=!!a.useInsertionEffect&&a.useInsertionEffect,ws=ys||function(e){return e()},ks=(ys||r.useLayoutEffect,r.createContext("undefined"!==typeof HTMLElement?ls({key:"css"}):null)),Ss=(ks.Provider,function(e){return(0,r.forwardRef)((function(t,n){var a=(0,r.useContext)(ks);return e(t,a,n)}))}),js=r.createContext({});var As=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)};function Cs(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var Es=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Ts=Cs((function(e){return Es.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),zs=function(e){return"theme"!==e},Ps=function(e){return"string"===typeof e&&e.charCodeAt(0)>96?Ts:zs},Ns=function(e,t,n){var r;if(t){var a=t.shouldForwardProp;r=e.__emotion_forwardProp&&a?function(t){return e.__emotion_forwardProp(t)&&a(t)}:a}return"function"!==typeof r&&n&&(r=e.__emotion_forwardProp),r},$s=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return As(t,n,r),ws((function(){return function(e,t,n){As(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+r:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}}(t,n,r)})),null},Rs=function e(t,n){var a,o,i=t.__emotion_real===t,l=i&&t.__emotion_base||t;void 0!==n&&(a=n.label,o=n.target);var s=Ns(t,n,i),c=s||Ps(l),u=!c("as");return function(){var d=arguments,p=i&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==a&&p.push("label:"+a+";"),null==d[0]||void 0===d[0].raw)p.push.apply(p,d);else{var f=d[0];p.push(f[0]);for(var h=d.length,g=1;g<h;g++)p.push(d[g],f[g])}var m=Ss((function(e,t,n){var a=u&&e.as||l,i="",d=[],f=e;if(null==e.theme){for(var h in f={},e)f[h]=e[h];f.theme=r.useContext(js)}"string"===typeof e.className?i=function(e,t,n){var r="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]+";"):n&&(r+=n+" ")})),r}(t.registered,d,e.className):null!=e.className&&(i=e.className+" ");var g=bs(p.concat(d),t.registered,f);i+=t.key+"-"+g.name,void 0!==o&&(i+=" "+o);var m=u&&void 0===s?Ps(a):c,x={};for(var v in e)u&&"as"===v||m(v)&&(x[v]=e[v]);return x.className=i,n&&(x.ref=n),r.createElement(r.Fragment,null,r.createElement($s,{cache:t,serialized:g,isStringTag:"string"===typeof a}),r.createElement(a,x))}));return m.displayName=void 0!==a?a:"Styled("+("string"===typeof l?l:l.displayName||l.name||"Component")+")",m.defaultProps=t.defaultProps,m.__emotion_real=m,m.__emotion_base=l,m.__emotion_styles=p,m.__emotion_forwardProp=s,Object.defineProperty(m,"toString",{value:function(){return"."+o}}),m.withComponent=function(t,r){return e(t,il({},n,r,{shouldForwardProp:Ns(m,r,!0)})).apply(void 0,p)},m}}.bind(null);["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){Rs[e]=Rs(e)}));const Os=[];function _s(e){return Os[0]=e,bs(Os)}var Ms=n(191);function Ds(e){if("object"!==typeof e||null===e)return!1;const t=Object.getPrototypeOf(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Ls(e){if(r.isValidElement(e)||(0,Ms.Hy)(e)||!Ds(e))return e;const t={};return Object.keys(e).forEach((n=>{t[n]=Ls(e[n])})),t}function Is(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{clone:!0};const a=n.clone?{...e}:e;return Ds(e)&&Ds(t)&&Object.keys(t).forEach((o=>{r.isValidElement(t[o])||(0,Ms.Hy)(t[o])?a[o]=t[o]:Ds(t[o])&&Object.prototype.hasOwnProperty.call(e,o)&&Ds(e[o])?a[o]=Is(e[o],t[o],n):n.clone?a[o]=Ds(t[o])?Ls(t[o]):t[o]:a[o]=t[o]})),a}function Bs(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5,...a}=e,o=(e=>{const t=Object.keys(e).map((t=>({key:t,val:e[t]})))||[];return t.sort(((e,t)=>e.val-t.val)),t.reduce(((e,t)=>({...e,[t.key]:t.val})),{})})(t),i=Object.keys(o);function l(e){return`@media (min-width:${"number"===typeof t[e]?t[e]:e}${n})`}function s(e){return`@media (max-width:${("number"===typeof t[e]?t[e]:e)-r/100}${n})`}function c(e,a){const o=i.indexOf(a);return`@media (min-width:${"number"===typeof t[e]?t[e]:e}${n}) and (max-width:${(-1!==o&&"number"===typeof t[i[o]]?t[i[o]]:a)-r/100}${n})`}return{keys:i,values:o,up:l,down:s,between:c,only:function(e){return i.indexOf(e)+1<i.length?c(e,i[i.indexOf(e)+1]):l(e)},not:function(e){const t=i.indexOf(e);return 0===t?l(i[1]):t===i.length-1?s(i[t]):c(e,i[i.indexOf(e)+1]).replace("@media","@media not all and")},unit:n,...a}}const Fs={borderRadius:4},Us={xs:0,sm:600,md:900,lg:1200,xl:1536},Hs={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${Us[e]}px)`},Ws={containerQueries:e=>({up:t=>{let n="number"===typeof t?t:Us[t]||t;return"number"===typeof n&&(n=`${n}px`),e?`@container ${e} (min-width:${n})`:`@container (min-width:${n})`}})};function Ys(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const e=r.breakpoints||Hs;return t.reduce(((r,a,o)=>(r[e.up(e.keys[o])]=n(t[o]),r)),{})}if("object"===typeof t){const e=r.breakpoints||Hs;return Object.keys(t).reduce(((a,o)=>{if(function(e,t){return"@"===t||t.startsWith("@")&&(e.some((e=>t.startsWith(`@${e}`)))||!!t.match(/^@\d/))}(e.keys,o)){const e=function(e,t){const n=t.match(/^@([^/]+)?\/?(.+)?$/);if(!n)return null;const[,r,a]=n,o=Number.isNaN(+r)?r||0:+r;return e.containerQueries(a).up(o)}(r.containerQueries?r:Ws,o);e&&(a[e]=n(t[o],o))}else if(Object.keys(e.values||Us).includes(o)){a[e.up(o)]=n(t[o],o)}else{const e=o;a[e]=t[e]}return a}),{})}return n(t)}function Vs(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=e.keys?.reduce(((t,n)=>(t[e.up(n)]={},t)),{});return t||{}}function Gs(e,t){return e.reduce(((e,t)=>{const n=e[t];return(!n||0===Object.keys(n).length)&&delete e[t],e}),t)}function Qs(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(!t||"string"!==typeof t)return null;if(e&&e.vars&&n){const n=`vars.${t}`.split(".").reduce(((e,t)=>e&&e[t]?e[t]:null),e);if(null!=n)return n}return t.split(".").reduce(((e,t)=>e&&null!=e[t]?e[t]:null),e)}function qs(e,t,n){let r,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;return r="function"===typeof e?e(n):Array.isArray(e)?e[n]||a:Qs(e,n)||a,t&&(r=t(r,a,e)),r}const Ks=function(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:a}=e,o=e=>{if(null==e[t])return null;const o=e[t],i=Qs(e.theme,r)||{};return Ys(e,o,(e=>{let r=qs(i,a,e);return e===r&&"string"===typeof e&&(r=qs(i,a,`${t}${"default"===e?"":al(e)}`,e)),!1===n?r:{[n]:r}}))};return o.propTypes={},o.filterProps=[t],o};const Xs=function(e,t){return t?Is(e,t,{clone:!1}):e};const Zs={m:"margin",p:"padding"},Js={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},ec={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},tc=function(e){const t={};return n=>(void 0===t[n]&&(t[n]=e(n)),t[n])}((e=>{if(e.length>2){if(!ec[e])return[e];e=ec[e]}const[t,n]=e.split(""),r=Zs[t],a=Js[n]||"";return Array.isArray(a)?a.map((e=>r+e)):[r+a]})),nc=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],rc=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],ac=[...nc,...rc];function oc(e,t,n,r){const a=Qs(e,t,!0)??n;return"number"===typeof a||"string"===typeof a?e=>"string"===typeof e?e:"string"===typeof a?a.startsWith("var(")&&0===e?0:a.startsWith("var(")&&1===e?a:`calc(${e} * ${a})`:a*e:Array.isArray(a)?e=>{if("string"===typeof e)return e;const t=Math.abs(e);const n=a[t];return e>=0?n:"number"===typeof n?-n:"string"===typeof n&&n.startsWith("var(")?`calc(-1 * ${n})`:`-${n}`}:"function"===typeof a?a:()=>{}}function ic(e){return oc(e,"spacing",8)}function lc(e,t){return"string"===typeof t||null==t?t:e(t)}function sc(e,t,n,r){if(!t.includes(n))return null;const a=function(e,t){return n=>e.reduce(((e,r)=>(e[r]=lc(t,n),e)),{})}(tc(n),r);return Ys(e,e[n],a)}function cc(e,t){const n=ic(e.theme);return Object.keys(e).map((r=>sc(e,t,r,n))).reduce(Xs,{})}function uc(e){return cc(e,nc)}function dc(e){return cc(e,rc)}function pc(e){return cc(e,ac)}uc.propTypes={},uc.filterProps=nc,dc.propTypes={},dc.filterProps=rc,pc.propTypes={},pc.filterProps=ac;function fc(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ic({spacing:e});if(e.mui)return e;const n=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(0===n.length?[1]:n).map((e=>{const n=t(e);return"number"===typeof n?`${n}px`:n})).join(" ")};return n.mui=!0,n}const hc=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const r=t.reduce(((e,t)=>(t.filterProps.forEach((n=>{e[n]=t})),e)),{}),a=e=>Object.keys(e).reduce(((t,n)=>r[n]?Xs(t,r[n](e)):t),{});return a.propTypes={},a.filterProps=t.reduce(((e,t)=>e.concat(t.filterProps)),[]),a};function gc(e){return"number"!==typeof e?e:`${e}px solid`}function mc(e,t){return Ks({prop:e,themeKey:"borders",transform:t})}const xc=mc("border",gc),vc=mc("borderTop",gc),bc=mc("borderRight",gc),yc=mc("borderBottom",gc),wc=mc("borderLeft",gc),kc=mc("borderColor"),Sc=mc("borderTopColor"),jc=mc("borderRightColor"),Ac=mc("borderBottomColor"),Cc=mc("borderLeftColor"),Ec=mc("outline",gc),Tc=mc("outlineColor"),zc=e=>{if(void 0!==e.borderRadius&&null!==e.borderRadius){const t=oc(e.theme,"shape.borderRadius",4),n=e=>({borderRadius:lc(t,e)});return Ys(e,e.borderRadius,n)}return null};zc.propTypes={},zc.filterProps=["borderRadius"];hc(xc,vc,bc,yc,wc,kc,Sc,jc,Ac,Cc,zc,Ec,Tc);const Pc=e=>{if(void 0!==e.gap&&null!==e.gap){const t=oc(e.theme,"spacing",8),n=e=>({gap:lc(t,e)});return Ys(e,e.gap,n)}return null};Pc.propTypes={},Pc.filterProps=["gap"];const Nc=e=>{if(void 0!==e.columnGap&&null!==e.columnGap){const t=oc(e.theme,"spacing",8),n=e=>({columnGap:lc(t,e)});return Ys(e,e.columnGap,n)}return null};Nc.propTypes={},Nc.filterProps=["columnGap"];const $c=e=>{if(void 0!==e.rowGap&&null!==e.rowGap){const t=oc(e.theme,"spacing",8),n=e=>({rowGap:lc(t,e)});return Ys(e,e.rowGap,n)}return null};$c.propTypes={},$c.filterProps=["rowGap"];hc(Pc,Nc,$c,Ks({prop:"gridColumn"}),Ks({prop:"gridRow"}),Ks({prop:"gridAutoFlow"}),Ks({prop:"gridAutoColumns"}),Ks({prop:"gridAutoRows"}),Ks({prop:"gridTemplateColumns"}),Ks({prop:"gridTemplateRows"}),Ks({prop:"gridTemplateAreas"}),Ks({prop:"gridArea"}));function Rc(e,t){return"grey"===t?t:e}hc(Ks({prop:"color",themeKey:"palette",transform:Rc}),Ks({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Rc}),Ks({prop:"backgroundColor",themeKey:"palette",transform:Rc}));function Oc(e){return e<=1&&0!==e?100*e+"%":e}const _c=Ks({prop:"width",transform:Oc}),Mc=e=>{if(void 0!==e.maxWidth&&null!==e.maxWidth){const t=t=>{const n=e.theme?.breakpoints?.values?.[t]||Us[t];return n?"px"!==e.theme?.breakpoints?.unit?{maxWidth:`${n}${e.theme.breakpoints.unit}`}:{maxWidth:n}:{maxWidth:Oc(t)}};return Ys(e,e.maxWidth,t)}return null};Mc.filterProps=["maxWidth"];const Dc=Ks({prop:"minWidth",transform:Oc}),Lc=Ks({prop:"height",transform:Oc}),Ic=Ks({prop:"maxHeight",transform:Oc}),Bc=Ks({prop:"minHeight",transform:Oc}),Fc=(Ks({prop:"size",cssProperty:"width",transform:Oc}),Ks({prop:"size",cssProperty:"height",transform:Oc}),hc(_c,Mc,Dc,Lc,Ic,Bc,Ks({prop:"boxSizing"})),{border:{themeKey:"borders",transform:gc},borderTop:{themeKey:"borders",transform:gc},borderRight:{themeKey:"borders",transform:gc},borderBottom:{themeKey:"borders",transform:gc},borderLeft:{themeKey:"borders",transform:gc},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:gc},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:zc},color:{themeKey:"palette",transform:Rc},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Rc},backgroundColor:{themeKey:"palette",transform:Rc},p:{style:dc},pt:{style:dc},pr:{style:dc},pb:{style:dc},pl:{style:dc},px:{style:dc},py:{style:dc},padding:{style:dc},paddingTop:{style:dc},paddingRight:{style:dc},paddingBottom:{style:dc},paddingLeft:{style:dc},paddingX:{style:dc},paddingY:{style:dc},paddingInline:{style:dc},paddingInlineStart:{style:dc},paddingInlineEnd:{style:dc},paddingBlock:{style:dc},paddingBlockStart:{style:dc},paddingBlockEnd:{style:dc},m:{style:uc},mt:{style:uc},mr:{style:uc},mb:{style:uc},ml:{style:uc},mx:{style:uc},my:{style:uc},margin:{style:uc},marginTop:{style:uc},marginRight:{style:uc},marginBottom:{style:uc},marginLeft:{style:uc},marginX:{style:uc},marginY:{style:uc},marginInline:{style:uc},marginInlineStart:{style:uc},marginInlineEnd:{style:uc},marginBlock:{style:uc},marginBlockStart:{style:uc},marginBlockEnd:{style:uc},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Pc},rowGap:{style:$c},columnGap:{style:Nc},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Oc},maxWidth:{style:Mc},minWidth:{transform:Oc},height:{transform:Oc},maxHeight:{transform:Oc},minHeight:{transform:Oc},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}});const Uc=function(){function e(e,t,n,r){const a={[e]:t,theme:n},o=r[e];if(!o)return{[e]:t};const{cssProperty:i=e,themeKey:l,transform:s,style:c}=o;if(null==t)return null;if("typography"===l&&"inherit"===t)return{[e]:t};const u=Qs(n,l)||{};if(c)return c(a);return Ys(a,t,(t=>{let n=qs(u,s,t);return t===n&&"string"===typeof t&&(n=qs(u,s,`${e}${"default"===t?"":al(t)}`,t)),!1===i?n:{[i]:n}}))}return function t(n){const{sx:r,theme:a={}}=n||{};if(!r)return null;const o=a.unstable_sxConfig??Fc;function i(n){let r=n;if("function"===typeof n)r=n(a);else if("object"!==typeof n)return n;if(!r)return null;const i=Vs(a.breakpoints),l=Object.keys(i);let s=i;return Object.keys(r).forEach((n=>{const i=function(e,t){return"function"===typeof e?e(t):e}(r[n],a);if(null!==i&&void 0!==i)if("object"===typeof i)if(o[n])s=Xs(s,e(n,i,a,o));else{const e=Ys({theme:a},i,(e=>({[n]:e})));!function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const r=t.reduce(((e,t)=>e.concat(Object.keys(t))),[]),a=new Set(r);return t.every((e=>a.size===Object.keys(e).length))}(e,i)?s=Xs(s,e):s[n]=t({sx:i,theme:a})}else s=Xs(s,e(n,i,a,o))})),function(e,t){if(!e.containerQueries)return t;const n=Object.keys(t).filter((e=>e.startsWith("@container"))).sort(((e,t)=>{const n=/min-width:\s*([0-9.]+)/;return+(e.match(n)?.[1]||0)-+(t.match(n)?.[1]||0)}));return n.length?n.reduce(((e,n)=>{const r=t[n];return delete e[n],e[n]=r,e}),{...t}):t}(a,Gs(l,s))}return Array.isArray(r)?r.map(i):i(r)}}();Uc.filterProps=["sx"];const Hc=Uc;function Wc(e,t){const n=this;if(n.vars){if(!n.colorSchemes?.[e]||"function"!==typeof n.getColorSchemeSelector)return{};let r=n.getColorSchemeSelector(e);return"&"===r?t:((r.includes("data-")||r.includes("."))&&(r=`*:where(${r.replace(/\s*&$/,"")}) &`),{[r]:t})}return n.palette.mode===e?t:{}}const Yc=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{breakpoints:t={},palette:n={},spacing:r,shape:a={},...o}=e;let i=Is({breakpoints:Bs(t),direction:"ltr",components:{},palette:{mode:"light",...n},spacing:fc(r),shape:{...Fs,...a}},o);i=function(e){const t=(e,t)=>e.replace("@media",t?`@container ${t}`:"@container");function n(n,r){n.up=function(){return t(e.breakpoints.up(...arguments),r)},n.down=function(){return t(e.breakpoints.down(...arguments),r)},n.between=function(){return t(e.breakpoints.between(...arguments),r)},n.only=function(){return t(e.breakpoints.only(...arguments),r)},n.not=function(){const n=t(e.breakpoints.not(...arguments),r);return n.includes("not all and")?n.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):n}}const r={},a=e=>(n(r,e),r);return n(a),{...e,containerQueries:a}}(i),i.applyStyles=Wc;for(var l=arguments.length,s=new Array(l>1?l-1:0),c=1;c<l;c++)s[c-1]=arguments[c];return i=s.reduce(((e,t)=>Is(e,t)),i),i.unstable_sxConfig={...Fc,...o?.unstable_sxConfig},i.unstable_sx=function(e){return Hc({sx:e,theme:this})},i};function Vc(e){const{variants:t,...n}=e,r={variants:t,style:_s(n),isProcessed:!0};return r.style===n||t&&t.forEach((e=>{"function"!==typeof e.style&&(e.style=_s(e.style))})),r}const Gc=Yc();function Qc(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}function qc(e){return e?(t,n)=>n[e]:null}function Kc(e,t){const n="function"===typeof t?t(e):t;if(Array.isArray(n))return n.flatMap((t=>Kc(e,t)));if(Array.isArray(n?.variants)){let t;if(n.isProcessed)t=n.style;else{const{variants:e,...r}=n;t=r}return Xc(e,n.variants,[t])}return n?.isProcessed?n.style:n}function Xc(e,t){let n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];e:for(let a=0;a<t.length;a+=1){const o=t[a];if("function"===typeof o.props){if(n??={...e,...e.ownerState,ownerState:e.ownerState},!o.props(n))continue}else for(const t in o.props)if(e[t]!==o.props[t]&&e.ownerState?.[t]!==o.props[t])continue e;"function"===typeof o.style?(n??={...e,...e.ownerState,ownerState:e.ownerState},r.push(o.style(n))):r.push(o.style)}return r}function Zc(e,t){}function Jc(e){return e?e.charAt(0).toLowerCase()+e.slice(1):e}const eu=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MIN_SAFE_INTEGER,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Number.MAX_SAFE_INTEGER;return Math.max(t,Math.min(e,n))};function tu(e){return eu(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2&&void 0!==arguments[2]?arguments[2]:1)}function nu(e){if(e.type)return e;if("#"===e.charAt(0))return nu(function(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&1===n[0].length&&(n=n.map((e=>e+e))),n?`rgb${4===n.length?"a":""}(${n.map(((e,t)=>t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3)).join(", ")})`:""}(e));const t=e.indexOf("("),n=e.substring(0,t);if(!["rgb","rgba","hsl","hsla","color"].includes(n))throw new Error(rl(9,e));let r,a=e.substring(t+1,e.length-1);if("color"===n){if(a=a.split(" "),r=a.shift(),4===a.length&&"/"===a[3].charAt(0)&&(a[3]=a[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(r))throw new Error(rl(10,r))}else a=a.split(",");return a=a.map((e=>parseFloat(e))),{type:n,values:a,colorSpace:r}}const ru=(e,t)=>{try{return(e=>{const t=nu(e);return t.values.slice(0,3).map(((e,n)=>t.type.includes("hsl")&&0!==n?`${e}%`:e)).join(" ")})(e)}catch(n){return e}};function au(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.includes("rgb")?r=r.map(((e,t)=>t<3?parseInt(e,10):e)):t.includes("hsl")&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),r=t.includes("color")?`${n} ${r.join(" ")}`:`${r.join(", ")}`,`${t}(${r})`}function ou(e){e=nu(e);const{values:t}=e,n=t[0],r=t[1]/100,a=t[2]/100,o=r*Math.min(a,1-a),i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e+n/30)%12;return a-o*Math.max(Math.min(t-3,9-t,1),-1)};let l="rgb";const s=[Math.round(255*i(0)),Math.round(255*i(8)),Math.round(255*i(4))];return"hsla"===e.type&&(l+="a",s.push(t[3])),au({type:l,values:s})}function iu(e){let t="hsl"===(e=nu(e)).type||"hsla"===e.type?nu(ou(e)).values:e.values;return t=t.map((t=>("color"!==e.type&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4))),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function lu(e,t,n){try{return function(e,t){return e=nu(e),t=tu(t),"rgb"!==e.type&&"hsl"!==e.type||(e.type+="a"),"color"===e.type?e.values[3]=`/${t}`:e.values[3]=t,au(e)}(e,t)}catch(r){return e}}function su(e,t){if(e=nu(e),t=tu(t),e.type.includes("hsl"))e.values[2]*=1-t;else if(e.type.includes("rgb")||e.type.includes("color"))for(let n=0;n<3;n+=1)e.values[n]*=1-t;return au(e)}function cu(e,t,n){try{return su(e,t)}catch(r){return e}}function uu(e,t){if(e=nu(e),t=tu(t),e.type.includes("hsl"))e.values[2]+=(100-e.values[2])*t;else if(e.type.includes("rgb"))for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.includes("color"))for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return au(e)}function du(e,t,n){try{return uu(e,t)}catch(r){return e}}function pu(e,t,n){try{return function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.15;return iu(e)>.5?su(e,t):uu(e,t)}(e,t)}catch(r){return e}}const fu={black:"#000",white:"#fff"},hu={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},gu={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},mu={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},xu={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},vu={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},bu={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},yu={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};function wu(){return{text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:fu.white,default:fu.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}}}const ku=wu();function Su(){return{text:{primary:fu.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:fu.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}}}const ju=Su();function Au(e,t,n,r){const a=r.light||r,o=r.dark||1.5*r;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:"light"===t?e.light=uu(e.main,a):"dark"===t&&(e.dark=su(e.main,o)))}function Cu(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2,...a}=e,o=e.primary||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:vu[200],light:vu[50],dark:vu[400]}:{main:vu[700],light:vu[400],dark:vu[800]}}(t),i=e.secondary||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:gu[200],light:gu[50],dark:gu[400]}:{main:gu[500],light:gu[300],dark:gu[700]}}(t),l=e.error||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:mu[500],light:mu[300],dark:mu[700]}:{main:mu[700],light:mu[400],dark:mu[800]}}(t),s=e.info||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:bu[400],light:bu[300],dark:bu[700]}:{main:bu[700],light:bu[500],dark:bu[900]}}(t),c=e.success||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:yu[400],light:yu[300],dark:yu[700]}:{main:yu[800],light:yu[500],dark:yu[900]}}(t),u=e.warning||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:xu[400],light:xu[300],dark:xu[700]}:{main:"#ed6c02",light:xu[500],dark:xu[900]}}(t);function d(e){const t=function(e,t){const n=iu(e),r=iu(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}(e,ju.text.primary)>=n?ju.text.primary:ku.text.primary;return t}const p=e=>{let{color:t,name:n,mainShade:a=500,lightShade:o=300,darkShade:i=700}=e;if(t={...t},!t.main&&t[a]&&(t.main=t[a]),!t.hasOwnProperty("main"))throw new Error(rl(11,n?` (${n})`:"",a));if("string"!==typeof t.main)throw new Error(rl(12,n?` (${n})`:"",JSON.stringify(t.main)));return Au(t,"light",o,r),Au(t,"dark",i,r),t.contrastText||(t.contrastText=d(t.main)),t};let f;"light"===t?f=wu():"dark"===t&&(f=Su());return Is({common:{...fu},mode:t,primary:p({color:o,name:"primary"}),secondary:p({color:i,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:p({color:l,name:"error"}),warning:p({color:u,name:"warning"}),info:p({color:s,name:"info"}),success:p({color:c,name:"success"}),grey:hu,contrastThreshold:n,getContrastText:d,augmentColor:p,tonalOffset:r,...f},a)}function Eu(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";function t(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];if(!r.length)return"";const o=r[0];return"string"!==typeof o||o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, ${o}`:`, var(--${e?`${e}-`:""}${o}${t(...r.slice(1))})`}return function(n){for(var r=arguments.length,a=new Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=arguments[o];return`var(--${e?`${e}-`:""}${n}${t(...a)})`}}function Tu(e){const t={};return Object.entries(e).forEach((e=>{const[n,r]=e;"object"===typeof r&&(t[n]=`${r.fontStyle?`${r.fontStyle} `:""}${r.fontVariant?`${r.fontVariant} `:""}${r.fontWeight?`${r.fontWeight} `:""}${r.fontStretch?`${r.fontStretch} `:""}${r.fontSize||""}${r.lineHeight?`/${r.lineHeight} `:""}${r.fontFamily||""}`)})),t}const zu=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],a=e;t.forEach(((e,o)=>{o===t.length-1?Array.isArray(a)?a[Number(e)]=n:a&&"object"===typeof a&&(a[e]=n):a&&"object"===typeof a&&(a[e]||(a[e]=r.includes(e)?[]:{}),a=a[e])}))};function Pu(e,t){const{prefix:n,shouldSkipGeneratingVar:r}=t||{},a={},o={},i={};var l,s;return l=(e,t,l)=>{if(("string"===typeof t||"number"===typeof t)&&(!r||!r(e,t))){const r=`--${n?`${n}-`:""}${e.join("-")}`,s=((e,t)=>"number"===typeof t?["lineHeight","fontWeight","opacity","zIndex"].some((t=>e.includes(t)))||e[e.length-1].toLowerCase().includes("opacity")?t:`${t}px`:t)(e,t);Object.assign(a,{[r]:s}),zu(o,e,`var(${r})`,l),zu(i,e,`var(${r}, ${s})`,l)}},s=e=>"vars"===e[0],function e(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];Object.entries(t).forEach((t=>{let[a,o]=t;(!s||s&&!s([...n,a]))&&void 0!==o&&null!==o&&("object"===typeof o&&Object.keys(o).length>0?e(o,[...n,a],Array.isArray(o)?[...r,a]:r):l([...n,a],o,r))}))}(e),{css:a,vars:o,varsWithDefaults:i}}const Nu=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{getSelector:n=m,disableCssColorScheme:r,colorSchemeSelector:a}=t,{colorSchemes:o={},components:i,defaultColorScheme:l="light",...s}=e,{vars:c,css:u,varsWithDefaults:d}=Pu(s,t);let p=d;const f={},{[l]:h,...g}=o;if(Object.entries(g||{}).forEach((e=>{let[n,r]=e;const{vars:a,css:o,varsWithDefaults:i}=Pu(r,t);p=Is(p,i),f[n]={css:o,vars:a}})),h){const{css:e,vars:n,varsWithDefaults:r}=Pu(h,t);p=Is(p,r),f[l]={css:e,vars:n}}function m(t,n){let r=a;if("class"===a&&(r=".%s"),"data"===a&&(r="[data-%s]"),a?.startsWith("data-")&&!a.includes("%s")&&(r=`[${a}="%s"]`),t){if("media"===r){if(e.defaultColorScheme===t)return":root";const r=o[t]?.palette?.mode||t;return{[`@media (prefers-color-scheme: ${r})`]:{":root":n}}}if(r)return e.defaultColorScheme===t?`:root, ${r.replace("%s",String(t))}`:r.replace("%s",String(t))}return":root"}return{vars:p,generateThemeVars:()=>{let e={...c};return Object.entries(f).forEach((t=>{let[,{vars:n}]=t;e=Is(e,n)})),e},generateStyleSheets:()=>{const t=[],a=e.defaultColorScheme||"light";function i(e,n){Object.keys(n).length&&t.push("string"===typeof e?{[e]:{...n}}:e)}i(n(void 0,{...u}),u);const{[a]:l,...s}=f;if(l){const{css:e}=l,t=o[a]?.palette?.mode,s=!r&&t?{colorScheme:t,...e}:{...e};i(n(a,{...s}),s)}return Object.entries(s).forEach((e=>{let[t,{css:a}]=e;const l=o[t]?.palette?.mode,s=!r&&l?{colorScheme:l,...a}:{...a};i(n(t,{...s}),s)})),t}}};function $u(e,t){return{toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}},...t}}const Ru={textTransform:"uppercase"},Ou='"Roboto", "Helvetica", "Arial", sans-serif';function _u(e,t){const{fontFamily:n=Ou,fontSize:r=14,fontWeightLight:a=300,fontWeightRegular:o=400,fontWeightMedium:i=500,fontWeightBold:l=700,htmlFontSize:s=16,allVariants:c,pxToRem:u,...d}="function"===typeof t?t(e):t;const p=r/14,f=u||(e=>e/s*p+"rem"),h=(e,t,r,a,o)=>{return{fontFamily:n,fontWeight:e,fontSize:f(t),lineHeight:r,...n===Ou?{letterSpacing:(i=a/t,Math.round(1e5*i)/1e5)+"em"}:{},...o,...c};var i},g={h1:h(a,96,1.167,-1.5),h2:h(a,60,1.2,-.5),h3:h(o,48,1.167,0),h4:h(o,34,1.235,.25),h5:h(o,24,1.334,0),h6:h(i,20,1.6,.15),subtitle1:h(o,16,1.75,.15),subtitle2:h(i,14,1.57,.1),body1:h(o,16,1.5,.15),body2:h(o,14,1.43,.15),button:h(i,14,1.75,.4,Ru),caption:h(o,12,1.66,.4),overline:h(o,12,2.66,1,Ru),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Is({htmlFontSize:s,pxToRem:f,fontFamily:n,fontSize:r,fontWeightLight:a,fontWeightRegular:o,fontWeightMedium:i,fontWeightBold:l,...g},d,{clone:!1})}function Mu(){return[`${arguments.length<=0?void 0:arguments[0]}px ${arguments.length<=1?void 0:arguments[1]}px ${arguments.length<=2?void 0:arguments[2]}px ${arguments.length<=3?void 0:arguments[3]}px rgba(0,0,0,0.2)`,`${arguments.length<=4?void 0:arguments[4]}px ${arguments.length<=5?void 0:arguments[5]}px ${arguments.length<=6?void 0:arguments[6]}px ${arguments.length<=7?void 0:arguments[7]}px rgba(0,0,0,0.14)`,`${arguments.length<=8?void 0:arguments[8]}px ${arguments.length<=9?void 0:arguments[9]}px ${arguments.length<=10?void 0:arguments[10]}px ${arguments.length<=11?void 0:arguments[11]}px rgba(0,0,0,0.12)`].join(",")}const Du=["none",Mu(0,2,1,-1,0,1,1,0,0,1,3,0),Mu(0,3,1,-2,0,2,2,0,0,1,5,0),Mu(0,3,3,-2,0,3,4,0,0,1,8,0),Mu(0,2,4,-1,0,4,5,0,0,1,10,0),Mu(0,3,5,-1,0,5,8,0,0,1,14,0),Mu(0,3,5,-1,0,6,10,0,0,1,18,0),Mu(0,4,5,-2,0,7,10,1,0,2,16,1),Mu(0,5,5,-3,0,8,10,1,0,3,14,2),Mu(0,5,6,-3,0,9,12,1,0,3,16,2),Mu(0,6,6,-3,0,10,14,1,0,4,18,3),Mu(0,6,7,-4,0,11,15,1,0,4,20,3),Mu(0,7,8,-4,0,12,17,2,0,5,22,4),Mu(0,7,8,-4,0,13,19,2,0,5,24,4),Mu(0,7,9,-4,0,14,21,2,0,5,26,4),Mu(0,8,9,-5,0,15,22,2,0,6,28,5),Mu(0,8,10,-5,0,16,24,2,0,6,30,5),Mu(0,8,11,-5,0,17,26,2,0,6,32,5),Mu(0,9,11,-5,0,18,28,2,0,7,34,6),Mu(0,9,12,-6,0,19,29,2,0,7,36,6),Mu(0,10,13,-6,0,20,31,3,0,8,38,7),Mu(0,10,13,-6,0,21,33,3,0,8,40,7),Mu(0,10,14,-6,0,22,35,3,0,8,42,7),Mu(0,11,14,-7,0,23,36,3,0,9,44,8),Mu(0,11,15,-7,0,24,38,3,0,9,46,8)],Lu={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},Iu={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Bu(e){return`${Math.round(e)}ms`}function Fu(e){if(!e)return 0;const t=e/36;return Math.min(Math.round(10*(4+15*t**.25+t/5)),3e3)}function Uu(e){const t={...Lu,...e.easing},n={...Iu,...e.duration};return{getAutoHeightDuration:Fu,create:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["all"],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{duration:a=n.standard,easing:o=t.easeInOut,delay:i=0,...l}=r;return(Array.isArray(e)?e:[e]).map((e=>`${e} ${"string"===typeof a?a:Bu(a)} ${o} ${"string"===typeof i?i:Bu(i)}`)).join(",")},...e,easing:t,duration:n}}const Hu={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function Wu(){const e={...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}};return function e(t){const n=Object.entries(t);for(let a=0;a<n.length;a++){const[o,i]=n[a];!Ds(r=i)&&"undefined"!==typeof r&&"string"!==typeof r&&"boolean"!==typeof r&&"number"!==typeof r&&!Array.isArray(r)||o.startsWith("unstable_")?delete t[o]:Ds(i)&&(t[o]={...i},e(t[o]))}var r}(e),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';\n\nconst theme = ${JSON.stringify(e,null,2)};\n\ntheme.breakpoints = createBreakpoints(theme.breakpoints || {});\ntheme.transitions = createTransitions(theme.transitions || {});\n\nexport default theme;`}const Yu=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{breakpoints:t,mixins:n={},spacing:r,palette:a={},transitions:o={},typography:i={},shape:l,...s}=e;if(e.vars&&void 0===e.generateThemeVars)throw new Error(rl(20));const c=Cu(a),u=Yc(e);let d=Is(u,{mixins:$u(u.breakpoints,n),palette:c,shadows:Du.slice(),typography:_u(c,i),transitions:Uu(o),zIndex:{...Hu}});d=Is(d,s);for(var p=arguments.length,f=new Array(p>1?p-1:0),h=1;h<p;h++)f[h-1]=arguments[h];return d=f.reduce(((e,t)=>Is(e,t)),d),d.unstable_sxConfig={...Fc,...s?.unstable_sxConfig},d.unstable_sx=function(e){return Hc({sx:e,theme:this})},d.toRuntimeSource=Wu,d};const Vu=[...Array(25)].map(((e,t)=>{if(0===t)return"none";const n=function(e){let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,Math.round(10*t)/1e3}(t);return`linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`}));function Gu(e){return{inputPlaceholder:"dark"===e?.5:.42,inputUnderline:"dark"===e?.7:.42,switchTrackDisabled:"dark"===e?.2:.12,switchTrack:"dark"===e?.3:.38}}function Qu(e){return"dark"===e?Vu:[]}function qu(e){return!!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!e[0].match(/sxConfig$/)||"palette"===e[0]&&!!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/)}const Ku=e=>[...[...Array(25)].map(((t,n)=>`--${e?`${e}-`:""}overlays-${n}`)),`--${e?`${e}-`:""}palette-AppBar-darkBg`,`--${e?`${e}-`:""}palette-AppBar-darkColor`],Xu=e=>(t,n)=>{const r=e.rootSelector||":root",a=e.colorSchemeSelector;let o=a;if("class"===a&&(o=".%s"),"data"===a&&(o="[data-%s]"),a?.startsWith("data-")&&!a.includes("%s")&&(o=`[${a}="%s"]`),e.defaultColorScheme===t){if("dark"===t){const a={};return Ku(e.cssVarPrefix).forEach((e=>{a[e]=n[e],delete n[e]})),"media"===o?{[r]:n,"@media (prefers-color-scheme: dark)":{[r]:a}}:o?{[o.replace("%s",t)]:a,[`${r}, ${o.replace("%s",t)}`]:n}:{[r]:{...n,...a}}}if(o&&"media"!==o)return`${r}, ${o.replace("%s",String(t))}`}else if(t){if("media"===o)return{[`@media (prefers-color-scheme: ${String(t)})`]:{[r]:n}};if(o)return o.replace("%s",String(t))}return r};function Zu(e,t,n){!e[t]&&n&&(e[t]=n)}function Ju(e){return"string"===typeof e&&e.startsWith("hsl")?ou(e):e}function ed(e,t){`${t}Channel`in e||(e[`${t}Channel`]=ru(Ju(e[t])))}const td=e=>{try{return e()}catch(t){}};function nd(e,t,n,r){if(!t)return;t=!0===t?{}:t;const a="dark"===r?"dark":"light";if(!n)return void(e[r]=function(e){const{palette:t={mode:"light"},opacity:n,overlays:r,...a}=e,o=Cu(t);return{palette:o,opacity:{...Gu(o.mode),...n},overlays:r||Qu(o.mode),...a}}({...t,palette:{mode:a,...t?.palette}}));const{palette:o,...i}=Yu({...n,palette:{mode:a,...t?.palette}});return e[r]={...t,palette:o,opacity:{...Gu(a),...t?.opacity},overlays:t?.overlays||Qu(a)},i}function rd(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{colorSchemes:t={light:!0},defaultColorScheme:n,disableCssColorScheme:r=!1,cssVarPrefix:a="mui",shouldSkipGeneratingVar:o=qu,colorSchemeSelector:i=(t.light&&t.dark?"media":void 0),rootSelector:l=":root",...s}=e,c=Object.keys(t)[0],u=n||(t.light&&"light"!==c?"light":c),d=function(){return Eu(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mui")}(a),{[u]:p,light:f,dark:h,...g}=t,m={...g};let x=p;if(("dark"===u&&!("dark"in t)||"light"===u&&!("light"in t))&&(x=!0),!x)throw new Error(rl(21,u));const v=nd(m,x,s,u);f&&!m.light&&nd(m,f,void 0,"light"),h&&!m.dark&&nd(m,h,void 0,"dark");let b={defaultColorScheme:u,...v,cssVarPrefix:a,colorSchemeSelector:i,rootSelector:l,getCssVar:d,colorSchemes:m,font:{...Tu(v.typography),...v.font},spacing:(y=s.spacing,"number"===typeof y?`${y}px`:"string"===typeof y||"function"===typeof y||Array.isArray(y)?y:"8px")};var y;Object.keys(b.colorSchemes).forEach((e=>{const t=b.colorSchemes[e].palette,n=e=>{const n=e.split("-"),r=n[1],a=n[2];return d(e,t[r][a])};var r;if("light"===t.mode&&(Zu(t.common,"background","#fff"),Zu(t.common,"onBackground","#000")),"dark"===t.mode&&(Zu(t.common,"background","#000"),Zu(t.common,"onBackground","#fff")),r=t,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"].forEach((e=>{r[e]||(r[e]={})})),"light"===t.mode){Zu(t.Alert,"errorColor",cu(t.error.light,.6)),Zu(t.Alert,"infoColor",cu(t.info.light,.6)),Zu(t.Alert,"successColor",cu(t.success.light,.6)),Zu(t.Alert,"warningColor",cu(t.warning.light,.6)),Zu(t.Alert,"errorFilledBg",n("palette-error-main")),Zu(t.Alert,"infoFilledBg",n("palette-info-main")),Zu(t.Alert,"successFilledBg",n("palette-success-main")),Zu(t.Alert,"warningFilledBg",n("palette-warning-main")),Zu(t.Alert,"errorFilledColor",td((()=>t.getContrastText(t.error.main)))),Zu(t.Alert,"infoFilledColor",td((()=>t.getContrastText(t.info.main)))),Zu(t.Alert,"successFilledColor",td((()=>t.getContrastText(t.success.main)))),Zu(t.Alert,"warningFilledColor",td((()=>t.getContrastText(t.warning.main)))),Zu(t.Alert,"errorStandardBg",du(t.error.light,.9)),Zu(t.Alert,"infoStandardBg",du(t.info.light,.9)),Zu(t.Alert,"successStandardBg",du(t.success.light,.9)),Zu(t.Alert,"warningStandardBg",du(t.warning.light,.9)),Zu(t.Alert,"errorIconColor",n("palette-error-main")),Zu(t.Alert,"infoIconColor",n("palette-info-main")),Zu(t.Alert,"successIconColor",n("palette-success-main")),Zu(t.Alert,"warningIconColor",n("palette-warning-main")),Zu(t.AppBar,"defaultBg",n("palette-grey-100")),Zu(t.Avatar,"defaultBg",n("palette-grey-400")),Zu(t.Button,"inheritContainedBg",n("palette-grey-300")),Zu(t.Button,"inheritContainedHoverBg",n("palette-grey-A100")),Zu(t.Chip,"defaultBorder",n("palette-grey-400")),Zu(t.Chip,"defaultAvatarColor",n("palette-grey-700")),Zu(t.Chip,"defaultIconColor",n("palette-grey-700")),Zu(t.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),Zu(t.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),Zu(t.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),Zu(t.LinearProgress,"primaryBg",du(t.primary.main,.62)),Zu(t.LinearProgress,"secondaryBg",du(t.secondary.main,.62)),Zu(t.LinearProgress,"errorBg",du(t.error.main,.62)),Zu(t.LinearProgress,"infoBg",du(t.info.main,.62)),Zu(t.LinearProgress,"successBg",du(t.success.main,.62)),Zu(t.LinearProgress,"warningBg",du(t.warning.main,.62)),Zu(t.Skeleton,"bg",`rgba(${n("palette-text-primaryChannel")} / 0.11)`),Zu(t.Slider,"primaryTrack",du(t.primary.main,.62)),Zu(t.Slider,"secondaryTrack",du(t.secondary.main,.62)),Zu(t.Slider,"errorTrack",du(t.error.main,.62)),Zu(t.Slider,"infoTrack",du(t.info.main,.62)),Zu(t.Slider,"successTrack",du(t.success.main,.62)),Zu(t.Slider,"warningTrack",du(t.warning.main,.62));const e=pu(t.background.default,.8);Zu(t.SnackbarContent,"bg",e),Zu(t.SnackbarContent,"color",td((()=>t.getContrastText(e)))),Zu(t.SpeedDialAction,"fabHoverBg",pu(t.background.paper,.15)),Zu(t.StepConnector,"border",n("palette-grey-400")),Zu(t.StepContent,"border",n("palette-grey-400")),Zu(t.Switch,"defaultColor",n("palette-common-white")),Zu(t.Switch,"defaultDisabledColor",n("palette-grey-100")),Zu(t.Switch,"primaryDisabledColor",du(t.primary.main,.62)),Zu(t.Switch,"secondaryDisabledColor",du(t.secondary.main,.62)),Zu(t.Switch,"errorDisabledColor",du(t.error.main,.62)),Zu(t.Switch,"infoDisabledColor",du(t.info.main,.62)),Zu(t.Switch,"successDisabledColor",du(t.success.main,.62)),Zu(t.Switch,"warningDisabledColor",du(t.warning.main,.62)),Zu(t.TableCell,"border",du(lu(t.divider,1),.88)),Zu(t.Tooltip,"bg",lu(t.grey[700],.92))}if("dark"===t.mode){Zu(t.Alert,"errorColor",du(t.error.light,.6)),Zu(t.Alert,"infoColor",du(t.info.light,.6)),Zu(t.Alert,"successColor",du(t.success.light,.6)),Zu(t.Alert,"warningColor",du(t.warning.light,.6)),Zu(t.Alert,"errorFilledBg",n("palette-error-dark")),Zu(t.Alert,"infoFilledBg",n("palette-info-dark")),Zu(t.Alert,"successFilledBg",n("palette-success-dark")),Zu(t.Alert,"warningFilledBg",n("palette-warning-dark")),Zu(t.Alert,"errorFilledColor",td((()=>t.getContrastText(t.error.dark)))),Zu(t.Alert,"infoFilledColor",td((()=>t.getContrastText(t.info.dark)))),Zu(t.Alert,"successFilledColor",td((()=>t.getContrastText(t.success.dark)))),Zu(t.Alert,"warningFilledColor",td((()=>t.getContrastText(t.warning.dark)))),Zu(t.Alert,"errorStandardBg",cu(t.error.light,.9)),Zu(t.Alert,"infoStandardBg",cu(t.info.light,.9)),Zu(t.Alert,"successStandardBg",cu(t.success.light,.9)),Zu(t.Alert,"warningStandardBg",cu(t.warning.light,.9)),Zu(t.Alert,"errorIconColor",n("palette-error-main")),Zu(t.Alert,"infoIconColor",n("palette-info-main")),Zu(t.Alert,"successIconColor",n("palette-success-main")),Zu(t.Alert,"warningIconColor",n("palette-warning-main")),Zu(t.AppBar,"defaultBg",n("palette-grey-900")),Zu(t.AppBar,"darkBg",n("palette-background-paper")),Zu(t.AppBar,"darkColor",n("palette-text-primary")),Zu(t.Avatar,"defaultBg",n("palette-grey-600")),Zu(t.Button,"inheritContainedBg",n("palette-grey-800")),Zu(t.Button,"inheritContainedHoverBg",n("palette-grey-700")),Zu(t.Chip,"defaultBorder",n("palette-grey-700")),Zu(t.Chip,"defaultAvatarColor",n("palette-grey-300")),Zu(t.Chip,"defaultIconColor",n("palette-grey-300")),Zu(t.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),Zu(t.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),Zu(t.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),Zu(t.LinearProgress,"primaryBg",cu(t.primary.main,.5)),Zu(t.LinearProgress,"secondaryBg",cu(t.secondary.main,.5)),Zu(t.LinearProgress,"errorBg",cu(t.error.main,.5)),Zu(t.LinearProgress,"infoBg",cu(t.info.main,.5)),Zu(t.LinearProgress,"successBg",cu(t.success.main,.5)),Zu(t.LinearProgress,"warningBg",cu(t.warning.main,.5)),Zu(t.Skeleton,"bg",`rgba(${n("palette-text-primaryChannel")} / 0.13)`),Zu(t.Slider,"primaryTrack",cu(t.primary.main,.5)),Zu(t.Slider,"secondaryTrack",cu(t.secondary.main,.5)),Zu(t.Slider,"errorTrack",cu(t.error.main,.5)),Zu(t.Slider,"infoTrack",cu(t.info.main,.5)),Zu(t.Slider,"successTrack",cu(t.success.main,.5)),Zu(t.Slider,"warningTrack",cu(t.warning.main,.5));const e=pu(t.background.default,.98);Zu(t.SnackbarContent,"bg",e),Zu(t.SnackbarContent,"color",td((()=>t.getContrastText(e)))),Zu(t.SpeedDialAction,"fabHoverBg",pu(t.background.paper,.15)),Zu(t.StepConnector,"border",n("palette-grey-600")),Zu(t.StepContent,"border",n("palette-grey-600")),Zu(t.Switch,"defaultColor",n("palette-grey-300")),Zu(t.Switch,"defaultDisabledColor",n("palette-grey-600")),Zu(t.Switch,"primaryDisabledColor",cu(t.primary.main,.55)),Zu(t.Switch,"secondaryDisabledColor",cu(t.secondary.main,.55)),Zu(t.Switch,"errorDisabledColor",cu(t.error.main,.55)),Zu(t.Switch,"infoDisabledColor",cu(t.info.main,.55)),Zu(t.Switch,"successDisabledColor",cu(t.success.main,.55)),Zu(t.Switch,"warningDisabledColor",cu(t.warning.main,.55)),Zu(t.TableCell,"border",cu(lu(t.divider,1),.68)),Zu(t.Tooltip,"bg",lu(t.grey[700],.92))}ed(t.background,"default"),ed(t.background,"paper"),ed(t.common,"background"),ed(t.common,"onBackground"),ed(t,"divider"),Object.keys(t).forEach((e=>{const n=t[e];"tonalOffset"!==e&&n&&"object"===typeof n&&(n.main&&Zu(t[e],"mainChannel",ru(Ju(n.main))),n.light&&Zu(t[e],"lightChannel",ru(Ju(n.light))),n.dark&&Zu(t[e],"darkChannel",ru(Ju(n.dark))),n.contrastText&&Zu(t[e],"contrastTextChannel",ru(Ju(n.contrastText))),"text"===e&&(ed(t[e],"primary"),ed(t[e],"secondary")),"action"===e&&(n.active&&ed(t[e],"active"),n.selected&&ed(t[e],"selected")))}))}));for(var w=arguments.length,k=new Array(w>1?w-1:0),S=1;S<w;S++)k[S-1]=arguments[S];b=k.reduce(((e,t)=>Is(e,t)),b);const j={prefix:a,disableCssColorScheme:r,shouldSkipGeneratingVar:o,getSelector:Xu(b)},{vars:A,generateThemeVars:C,generateStyleSheets:E}=Nu(b,j);return b.vars=A,Object.entries(b.colorSchemes[b.defaultColorScheme]).forEach((e=>{let[t,n]=e;b[t]=n})),b.generateThemeVars=C,b.generateStyleSheets=E,b.generateSpacing=function(){return fc(s.spacing,ic(this))},b.getColorSchemeSelector=function(e){return function(t){return"media"===e?`@media (prefers-color-scheme: ${t})`:e?e.startsWith("data-")&&!e.includes("%s")?`[${e}="${t}"] &`:"class"===e?`.${t} &`:"data"===e?`[data-${t}] &`:`${e.replace("%s",t)} &`:"&"}}(i),b.spacing=b.generateSpacing(),b.shouldSkipGeneratingVar=o,b.unstable_sxConfig={...Fc,...s?.unstable_sxConfig},b.unstable_sx=function(e){return Hc({sx:e,theme:this})},b.toRuntimeSource=Wu,b}function ad(e,t,n){e.colorSchemes&&n&&(e.colorSchemes[t]={...!0!==n&&n,palette:Cu({...!0===n?{}:n.palette,mode:t})})}const od=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{palette:t,cssVariables:n=!1,colorSchemes:r=(t?void 0:{light:!0}),defaultColorScheme:a=t?.mode,...o}=e,i=a||"light",l=r?.[i],s={...r,...t?{[i]:{..."boolean"!==typeof l&&l,palette:t}}:void 0};for(var c=arguments.length,u=new Array(c>1?c-1:0),d=1;d<c;d++)u[d-1]=arguments[d];if(!1===n){if(!("colorSchemes"in e))return Yu(e,...u);let n=t;"palette"in e||s[i]&&(!0!==s[i]?n=s[i].palette:"dark"===i&&(n={mode:"dark"}));const r=Yu({...e,palette:n},...u);return r.defaultColorScheme=i,r.colorSchemes=s,"light"===r.palette.mode&&(r.colorSchemes.light={...!0!==s.light&&s.light,palette:r.palette},ad(r,"dark",s.dark)),"dark"===r.palette.mode&&(r.colorSchemes.dark={...!0!==s.dark&&s.dark,palette:r.palette},ad(r,"light",s.light)),r}return t||"light"in s||"light"!==i||(s.light=!0),rd({...o,colorSchemes:s,defaultColorScheme:i,..."boolean"!==typeof n&&n},...u)}();const id=function(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e},ld=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{themeId:t,defaultTheme:n=Gc,rootShouldForwardProp:r=Qc,slotShouldForwardProp:a=Qc}=e;function o(e){!function(e,t,n){e.theme=function(e){for(const t in e)return!1;return!0}(e.theme)?n:e.theme[t]||e.theme}(e,t,n)}return function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))}(e,(e=>e.filter((e=>e!==Hc))));const{name:n,slot:i,skipVariantsResolver:l,skipSx:s,overridesResolver:c=qc(Jc(i)),...u}=t,d=void 0!==l?l:i&&"Root"!==i&&"root"!==i||!1,p=s||!1;let f=Qc;"Root"===i||"root"===i?f=r:i?f=a:function(e){return"string"===typeof e&&e.charCodeAt(0)>96}(e)&&(f=void 0);const h=function(e,t){return Rs(e,t)}(e,{shouldForwardProp:f,label:Zc(n,i),...u}),g=e=>{if(e.__emotion_real===e)return e;if("function"===typeof e)return function(t){return Kc(t,e)};if(Ds(e)){const t=Vc(e);return t.variants?function(e){return Kc(e,t)}:t.style}return e},m=function(){const t=[];for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];const l=a.map(g),s=[];if(t.push(o),n&&c&&s.push((function(e){const t=e.theme,r=t.components?.[n]?.styleOverrides;if(!r)return null;const a={};for(const n in r)a[n]=Kc(e,r[n]);return c(e,a)})),n&&!d&&s.push((function(e){const t=e.theme,r=t?.components?.[n]?.variants;return r?Xc(e,r):null})),p||s.push(Hc),Array.isArray(l[0])){const e=l.shift(),n=new Array(t.length).fill(""),r=new Array(s.length).fill("");let a;a=[...n,...e,...r],a.raw=[...n,...e.raw,...r],t.unshift(a)}const u=[...t,...l,...s],f=h(...u);return e.muiName&&(f.muiName=e.muiName),f};return h.withConfig&&(m.withConfig=h.withConfig),m}}({themeId:"$$material",defaultTheme:od,rootShouldForwardProp:e=>id(e)&&"classes"!==e}),sd=ld,cd={theme:void 0};const ud=function(e){let t,n;return function(r){let a=t;return void 0!==a&&r.theme===n||(cd.theme=r.theme,a=Vc(e(cd)),t=a,n=r.theme),a}};function dd(e,t){const n={...t};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){const a=r;if("components"===a||"slots"===a)n[a]={...e[a],...n[a]};else if("componentsProps"===a||"slotProps"===a){const r=e[a],o=t[a];if(o)if(r){n[a]={...o};for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e)){const t=e;n[a][t]=dd(r[t],o[t])}}else n[a]=o;else n[a]=r||{}}else void 0===n[a]&&(n[a]=e[a])}return n}const pd=r.createContext(void 0);function fd(e){let{props:t,name:n}=e;return function(e){const{theme:t,name:n,props:r}=e;if(!t||!t.components||!t.components[n])return r;const a=t.components[n];return a.defaultProps?dd(a.defaultProps,r):a.styleOverrides||a.variants?r:dd(a,r)}({props:t,name:n,theme:{components:r.useContext(pd)}})}const hd=e=>e,gd=(()=>{let e=hd;return{configure(t){e=t},generate:t=>e(t),reset(){e=hd}}})(),md={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function xd(e,t){const n=md[t];return n?`${arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Mui"}-${n}`:`${gd.generate(e)}-${t}`}function vd(e){return xd("MuiSvgIcon",e)}!function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Mui";const r={};t.forEach((t=>{r[t]=xd(e,t,n)}))}("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const bd=sd("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,"inherit"!==n.color&&t[`color${ol(n.color)}`],t[`fontSize${ol(n.fontSize)}`]]}})(ud((e=>{let{theme:t}=e;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:t.transitions?.create?.("fill",{duration:(t.vars??t).transitions?.duration?.shorter}),variants:[{props:e=>!e.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:t.typography?.pxToRem?.(20)||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:t.typography?.pxToRem?.(24)||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:t.typography?.pxToRem?.(35)||"2.1875rem"}},...Object.entries((t.vars??t).palette).filter((e=>{let[,t]=e;return t&&t.main})).map((e=>{let[n]=e;return{props:{color:n},style:{color:(t.vars??t).palette?.[n]?.main}}})),{props:{color:"action"},style:{color:(t.vars??t).palette?.action?.active}},{props:{color:"disabled"},style:{color:(t.vars??t).palette?.action?.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}}))),yd=r.forwardRef((function(e,t){const n=fd({props:e,name:"MuiSvgIcon"});const{children:a,className:o,color:i="inherit",component:l="svg",fontSize:s="medium",htmlColor:c,inheritViewBox:u=!1,titleAccess:d,viewBox:p="0 0 24 24",...f}=n,h=r.isValidElement(a)&&"svg"===a.type,g={...n,color:i,component:l,fontSize:s,instanceFontSize:e.fontSize,inheritViewBox:u,viewBox:p,hasSvgAsChild:h},m={};u||(m.viewBox=p);const x=(e=>{const{color:t,fontSize:n,classes:r}=e;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;const r={};for(const a in e){const o=e[a];let i="",l=!0;for(let e=0;e<o.length;e+=1){const r=o[e];r&&(i+=(!0===l?"":" ")+t(r),l=!1,n&&n[r]&&(i+=" "+n[r]))}r[a]=i}return r}({root:["root","inherit"!==t&&`color${ol(t)}`,`fontSize${ol(n)}`]},vd,r)})(g);return(0,Ko.jsxs)(bd,{as:l,className:nl(x.root,o),focusable:"false",color:c,"aria-hidden":!d||void 0,role:d?"img":void 0,ref:t,...m,...f,...h&&a.props,ownerState:g,children:[h?a.props.children:a,d?(0,Ko.jsx)("title",{children:d}):null]})}));yd.muiName="SvgIcon";const wd=yd;function kd(e,t){function n(t,n){return(0,Ko.jsx)(wd,{"data-testid":void 0,ref:n,...t,children:e})}return n.muiName=wd.muiName,r.memo(r.forwardRef(n))}const Sd=kd((0,Ko.jsx)("path",{d:"M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4"})),jd=kd((0,Ko.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"})),Ad=kd((0,Ko.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"})),Cd=kd((0,Ko.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"})),Ed=kd((0,Ko.jsx)("path",{d:"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2m0 15-5-2.18L7 18V5h10z"})),Td=kd((0,Ko.jsx)("path",{d:"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2"})),zd=e=>{let{nowCategory:t}=e;const[n,a]=(0,r.useState)([]),[o,i]=(0,r.useState)(!0),l=te(),s=(0,r.useRef)(null);(0,r.useEffect)((()=>{const e=Nr.get("accessToken");i(!0),qo.get("https://api.stackflov.com/boards",{headers:e?{Authorization:`Bearer ${e}`}:{},withCredentials:!0}).then((e=>{var t;a(Array.isArray(null===(t=e.data)||void 0===t?void 0:t.content)?e.data.content:[])})).catch((e=>{console.error("\uac8c\uc2dc\uae00 \ubaa9\ub85d \ub85c\ub529 \uc2e4\ud328:",e),a([])})).finally((()=>i(!1)))}),[]),(0,r.useEffect)((()=>{if(!s.current)return;const e=s.current.querySelectorAll("[data-reveal='true']"),t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&(e.target.setAttribute("data-show","true"),t.unobserve(e.target))}))}),{threshold:.15,rootMargin:"0px 0px -8% 0px"});return e.forEach((e=>t.observe(e))),()=>t.disconnect()}),[o,t]);const c=(0,r.useMemo)((()=>99===t?n:n.filter((e=>e.category===t))),[t,n]);return o?(0,Ko.jsx)(Li,{children:(0,Ko.jsx)(Ii,{ref:s,children:Array.from({length:6}).map(((e,t)=>(0,Ko.jsx)(el,{},t)))})}):c.length?(0,Ko.jsx)(Li,{children:(0,Ko.jsx)(Ii,{ref:s,children:c.map(((e,t)=>{var n,r;return(0,Ko.jsx)(Bi,{children:(0,Ko.jsxs)(Ui,{"data-reveal":"true",style:{"--reveal-delay":60*Math.min(t,8)+"ms"},children:[(0,Ko.jsxs)(Hi,{children:[(0,Ko.jsx)(Wi,{role:"button",tabIndex:0,onClick:()=>l(`/trace/detail/${e.id}`),onKeyDown:t=>{"Enter"===t.key&&l(`/trace/detail/${e.id}`)},title:e.title,children:e.title}),(0,Ko.jsxs)(Yi,{children:[(0,Ko.jsx)(Vi,{children:null===(n=e.createdAt)||void 0===n?void 0:n.slice(0,10)}),(0,Ko.jsxs)(Qi,{title:e.authorNickname,children:[(0,Ko.jsx)(Sd,{className:"meta-icon"}),(0,Ko.jsx)("span",{className:"meta-text",children:e.authorNickname})]}),(0,Ko.jsxs)(qi,{title:`\uc870\ud68c\uc218 ${null!==(r=e.viewCount)&&void 0!==r?r:0}`,children:[(0,Ko.jsx)(jd,{className:"meta-icon"}),(0,Ko.jsx)("span",{className:"meta-text",children:"number"===typeof e.viewCount?e.viewCount:0})]})]})]}),(0,Ko.jsxs)(Ki,{children:[(0,Ko.jsxs)(Xi,{"aria-label":e.liked?"\uc88b\uc544\uc694 \ucde8\uc18c":"\uc88b\uc544\uc694",$active:!!e.liked,onClick:()=>((e,t)=>{const n=Nr.get("accessToken");if(!n)return alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.");qo({method:t?"delete":"post",url:t?`https://api.stackflov.com/likes?boardId=${e}`:"https://api.stackflov.com/likes",data:t?null:{boardId:e},headers:{Authorization:`Bearer ${n}`},withCredentials:!0}).then((()=>{a((n=>n.map((n=>n.id===e?{...n,liked:!t,good:"number"===typeof n.good?n.good+(t?-1:1):n.good}:n))))})).catch((e=>console.error("\uc88b\uc544\uc694 \ucc98\ub9ac \uc2e4\ud328:",e.response||e)))})(e.id,e.liked),children:[e.liked?(0,Ko.jsx)(Cd,{}):(0,Ko.jsx)(Ad,{}),(0,Ko.jsx)("span",{className:"count",children:"number"===typeof e.good&&e.good>0?e.good:""})]}),(0,Ko.jsxs)(Xi,{"aria-label":e.bookmarked?"\ubd81\ub9c8\ud06c \ucde8\uc18c":"\ubd81\ub9c8\ud06c",$bookmark:!0,$active:!!e.bookmarked,onClick:()=>((e,t)=>{const n=Nr.get("accessToken");if(!n)return alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.");qo({method:t?"delete":"post",url:"https://api.stackflov.com/bookmarks",data:{boardId:e},headers:{Authorization:`Bearer ${n}`},withCredentials:!0}).then((()=>{a((n=>n.map((n=>n.id===e?{...n,bookmarked:!t}:n))))})).catch((e=>console.error("\ubd81\ub9c8\ud06c \ucc98\ub9ac \uc2e4\ud328:",e.response||e)))})(e.id,e.bookmarked),children:[e.bookmarked?(0,Ko.jsx)(Td,{}):(0,Ko.jsx)(Ed,{}),(0,Ko.jsx)("span",{className:"count",children:"number"===typeof e.bookMark&&e.bookMark>0?e.bookMark:""})]})]})]})},e.id)}))})}):(0,Ko.jsx)(Li,{children:(0,Ko.jsxs)(Zi,{children:["\uc544\uc9c1 \ud45c\uc2dc\ud560 \uac8c\uc2dc\uae00\uc774 \uc5c6\uc5b4\uc694.",(0,Ko.jsx)("span",{children:"\uccab \uae00\uc744 \uc791\uc131\ud574\ubcf4\uc138\uc694!"})]})})},Pd=()=>{const[e,t]=(0,r.useState)(99);return(0,Ko.jsxs)("div",{children:[(0,Ko.jsx)(Di,{nowCategory:e,setNowCategory:t}),(0,Ko.jsx)(zd,{nowCategory:e})]})},Nd=()=>(0,Ko.jsx)("div",{children:"page3"}),$d=wr.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;   /* 리스트와 동일 */
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0,0,0,.06);
`,Rd=wr.div`
  width: 100%;
  height: 600px;
`,Od=wr.div`
  position: absolute;
  top: 12px;
  left: 12px;
  width: 320px;
  background: rgba(255,255,255,.92);
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 6px 22px rgba(0,0,0,.18);
  z-index: 10;
  overflow-y: auto;
  max-height: 320px;

  input {
    width: 100%;
    padding: 10px 12px;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
    outline: none;
    font-size: 14px;
    box-sizing: border-box;
  }
`,_d=wr.div`
  cursor: pointer;
  padding: 8px 10px;
  border-bottom: 1px solid #eee;
  &:hover { background: #f8fafc; }
  strong { display: block; color: #111827; }
  small  { color: #6b7280; }
`,Md=e=>{let{reviews:t,setMap:n,markers:a,setVisiblePosts:o}=e;const i=(0,r.useRef)(null),l=(0,r.useRef)(null),s=(0,r.useRef)(null),[c,u]=(0,r.useState)(""),[d,p]=(0,r.useState)([]),f=te();(0,r.useEffect)((()=>{var e;const t=()=>{window.kakao.maps.load((()=>{var e;const t={center:new window.kakao.maps.LatLng(37.566826,126.9786567),level:4},r=new window.kakao.maps.Map(i.current,t);l.current=r,n&&n(r),s.current=new window.kakao.maps.InfoWindow({zIndex:1}),window.kakao.maps.event.addListener(r,"bounds_changed",(()=>{if(null===a||void 0===a||!a.current||0===a.current.length)return;const e=r.getBounds(),t=a.current.filter((t=>{let{marker:n}=t;return e.contain(n.getPosition())})).map((e=>{let{data:t}=e;return t}));o&&o(t)})),null!==(e=window.navigator)&&void 0!==e&&e.geolocation&&window.navigator.geolocation.getCurrentPosition((e=>{const{latitude:t,longitude:n}=e.coords;r.panTo(new window.kakao.maps.LatLng(t,n))}))}))};if(null!==(e=window.kakao)&&void 0!==e&&e.maps)t();else{const e=document.createElement("script");e.src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=a36b7d03721cc984f5787d0b37f4a395&libraries=services&autoload=false",e.async=!0,e.onload=t,document.head.appendChild(e)}}),[n,a,o]),(0,r.useEffect)((()=>{if(!l.current||null===t||void 0===t||!t.length)return;if(null===a||void 0===a||!a.current)return;const e=new window.kakao.maps.services.Geocoder;a.current.forEach((e=>{let{marker:t}=e;return t.setMap(null)})),a.current=[],Promise.all(t.map((t=>new Promise((n=>{e.addressSearch(t.address,((e,r)=>{if(r===window.kakao.maps.services.Status.OK){const n=new window.kakao.maps.LatLng(e[0].y,e[0].x),r=new window.kakao.maps.Marker({map:l.current,position:n});window.kakao.maps.event.addListener(r,"click",(()=>{f(`/nibangnebang/${t.id}`)})),window.kakao.maps.event.addListener(r,"mouseover",(()=>{s.current.setContent(`<div style="padding:5px;font-size:12px;">${t.content}</div>`),s.current.open(l.current,r)})),window.kakao.maps.event.addListener(r,"mouseout",(()=>{s.current.close()})),a.current.push({marker:r,data:t})}n()}))}))))).then((()=>{const e=l.current.getBounds(),t=a.current.filter((t=>{let{marker:n}=t;return e.contain(n.getPosition())})).map((e=>{let{data:t}=e;return t}));o&&o(t)}))}),[t,a,f,o]),(0,r.useEffect)((()=>{if(!c.trim())return p([]);p(t.filter((e=>(e.content||"").toLowerCase().includes(c.toLowerCase()))))}),[c,t]);return(0,Ko.jsxs)($d,{children:[(0,Ko.jsxs)(Od,{children:[(0,Ko.jsx)("input",{type:"text",placeholder:"\ub0b4\uc6a9\uc73c\ub85c \ub9ac\ubdf0 \uac80\uc0c9",value:c,onChange:e=>u(e.target.value)}),""!==c.trim()&&(d.length?d.map((e=>(0,Ko.jsxs)(_d,{onClick:()=>(e=>{if(!l.current||null===a||void 0===a||!a.current)return;const t=a.current.find((t=>t.data.id===e.id));if(!t)return;const n=t.marker.getPosition();l.current.panTo(n),l.current.setLevel(3,{animate:!0}),s.current.setContent(`<div style="padding:5px;font-size:12px;">${e.content}</div>`),s.current.open(l.current,t.marker),u("")})(e),children:[(0,Ko.jsx)("strong",{children:e.content}),(0,Ko.jsx)("small",{children:e.address})]},e.id))):(0,Ko.jsx)("div",{style:{padding:8,color:"#777"},children:"\uac80\uc0c9 \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."}))]}),(0,Ko.jsx)(Rd,{id:"map",ref:i})]})},Dd=wr.div`
  margin: 16px auto 0;
  width: 100%;
  max-width: 1200px;  /* 지도와 동일 */
`,Ld=wr.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`,Id=wr.li`
  width: 100%;
`,Bd=wr.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  align-items: center;

  width: 97%;
  padding: 16px 18px;
  border-radius: 16px;
  background: #fff;
  border: 1px solid #eef2f7;
  box-shadow: 0 8px 18px rgba(0,0,0,.06);
  margin: 10px 0;
`,Fd=wr.div`
  grid-column: 1 / -1;
  font-size: 13px;
  color: #6b7280;
`,Ud=wr.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Hd=wr.div`
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  color: #111827;
  &:hover { text-decoration: underline; }
`,Wd=wr.div`
  font-size: 14px;
  color: #6b7280;
`,Yd=wr.button`
  justify-self: end;
  width: 44px; height: 44px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  background: #fff;
  display: grid; place-items: center;
  cursor: pointer;
  transition: box-shadow .15s ease, transform .02s ease;
  &:hover  { box-shadow: 0 6px 18px rgba(0,0,0,.08); }
  &:active { transform: translateY(1px); }
`,Vd=e=>{let{postsToDisplay:t}=e;const[n,a]=(0,r.useState)([]),[o,i]=(0,r.useState)(null),l=Nr.get("accessToken"),s=te();(0,r.useEffect)((()=>{a(t||[])}),[t]),(0,r.useEffect)((()=>{l&&qo.get("https://api.stackflov.com/users/me",{headers:{Authorization:`Bearer ${l}`},withCredentials:!0}).then((e=>i(e.data))).catch((e=>console.error("Error fetching user data:",e)))}),[l]);return n.length?(0,Ko.jsx)(Dd,{children:(0,Ko.jsx)(Ld,{children:n.map((e=>{var t;return(0,Ko.jsx)(Id,{children:(0,Ko.jsxs)(Bd,{children:[(0,Ko.jsx)(Fd,{children:null===(t=e.createdAt)||void 0===t?void 0:t.slice(0,10)}),(0,Ko.jsxs)(Ud,{children:[(0,Ko.jsx)(Hd,{onClick:()=>s(`/nibangnebang/${e.id}`),children:e.content}),(0,Ko.jsx)(Wd,{children:e.authorNickname})]}),e.isLike?(0,Ko.jsx)(Yd,{onClick:()=>(e=>{if(!o)return alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \uae30\ub2a5\uc785\ub2c8\ub2e4.");qo.delete(`https://api.stackflov.com/likes?reviewId=${e}`,{headers:{Authorization:`Bearer ${l}`},withCredentials:!0}).then((()=>a((t=>t.map((t=>t.id===e?{...t,isLike:!1}:t)))))).catch((e=>console.error("\uc88b\uc544\uc694 \ucde8\uc18c \uc2e4\ud328:",(null===e||void 0===e?void 0:e.response)||e)))})(e.id),title:"\uc88b\uc544\uc694 \ucde8\uc18c",children:(0,Ko.jsx)(Cd,{style:{color:"red"}})}):(0,Ko.jsx)(Yd,{onClick:()=>(e=>{if(!o)return alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \uae30\ub2a5\uc785\ub2c8\ub2e4.");qo.post("https://api.stackflov.com/likes",{reviewId:e},{headers:{"Content-Type":"application/json",Authorization:`Bearer ${l}`},withCredentials:!0}).then((()=>a((t=>t.map((t=>t.id===e?{...t,isLike:!0}:t)))))).catch((e=>console.error("\uc88b\uc544\uc694 \uc2e4\ud328:",(null===e||void 0===e?void 0:e.response)||e)))})(e.id),title:"\uc88b\uc544\uc694",children:(0,Ko.jsx)(Ad,{})})]})},e.id)}))})}):(0,Ko.jsx)(Dd,{children:(0,Ko.jsx)("div",{style:{color:"#6b7280",padding:"16px"},children:"\uc9c0\ub3c4\uc5d0 \ud45c\uc2dc\ub41c \uac8c\uc2dc\uae00\uc774 \uc5c6\uac70\ub098, \uc120\ud0dd\ud55c \uc870\uac74\uc5d0 \ud574\ub2f9\ud558\ub294 \uae00\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."})})},Gd=kr`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,Qd=wr.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 8px 16px 24px;
  box-sizing: border-box;
`,qd=wr.h1`
  /* ── 자취로그(TraceLogBigTitleWrapper)와 동일 스타일 ── */
  margin: 4px 0 12px;
  padding-bottom: 10px;
  overflow: visible;
  font-size: 42px;
  font-weight: 900;
  letter-spacing: -0.02em;
  line-height: 1.2;
  position: relative;
  animation: ${Gd} .35s ease both;

  &::after {
    content: "";
    position: absolute;
    left: 0; bottom: clamp(140px, 20vw, 280px);
    width: 88px; height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, #111827, #6366f1);
  }
`,Kd=(wr.ul`
  margin: 10px 0 8px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,wr.li`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 82px;
  height: 36px;
  padding: 0 12px;
  border-radius: 999px;
  border: 1px solid #d1d5db;
  background: ${e=>e.selectCategory?"#EEF2FF":"#fff"};
  color: #111827;
  font-weight: 800;
  font-size: 14px;
  letter-spacing: .01em;
  transition: transform .04s ease, box-shadow .15s ease;
  &:hover  { box-shadow: 0 4px 14px rgba(99,102,241,.18); }
  &:active { transform: translateY(1px); }
`,wr.button`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 16px;
  border-radius: 999px;
  border: 1px solid #d1d5db;
  background: #fff;
  font-weight: 800;
  font-size: 14px;
  cursor: pointer;
  transition: background .15s ease, box-shadow .15s ease, transform .02s ease;
  &:hover  { background: #F8FAFC; box-shadow: 0 4px 14px rgba(0,0,0,.08); }
  &:active { transform: translateY(1px); }
`,wr.div`
  margin: 0 auto;
  width: 1200px;
  height: 75px;
`),Xd=(wr.div`
  margin: 0 auto;
  width: 1200px;
  height: 80px;
  border-bottom: 5px solid black;
  font-size: 48px;
  font-weight: bold;
`,wr.ul`
  margin: 0 auto;
  width: 1200px;
  height: 70px;
`),Zd=wr.li`
  margin: 0 auto;
  width: 70px;
  padding: 10px 15px;
  height: 20px;
  float: left;
  list-style: none;
  border: 2px solid #cdd8e3;
  border-radius: 15px;
  margin: 10px 10px 0 0;
  text-align: center;
  background-color: ${e=>1==e.selectCategory?"#CDD8E3":"#ffffff"};
  transition-duration: 500ms;
`,Jd=wr.div`
  width: 70px;
  padding: 10px 15px;
  height: 20px;
  float: right;
  list-style: none;
  border: 2px solid #cdd8e3;
  border-radius: 15px;
  margin: 10px 40px 0 0;
  text-align: center;
  background-color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: #cdd8e3;
  }
  transition-duration: 500ms;
`,ep=e=>{let{nowCategory:t,setNowCategory:n}=e;const r=J(),a=te(),o=Nr.get("accessToken");return(0,Ko.jsx)(Kd,{children:(0,Ko.jsxs)(Xd,{children:["/"==r.pathname&&(0,Ko.jsxs)(Ko.Fragment,{children:[(0,Ko.jsx)(Zd,{selectCategory:99==t,onClick:()=>{n(99)},children:"\uc804\uccb4"}),(0,Ko.jsx)(Zd,{selectCategory:1==t,onClick:()=>{n(1)},children:"\ud83c\udfe0 \uc790\ucde8"}),(0,Ko.jsx)(Zd,{selectCategory:2==t,onClick:()=>{n(2)},children:"\u26a1 \ubc88\uac1c"}),(0,Ko.jsx)(Zd,{selectCategory:3==t,onClick:()=>{n(3)},children:"\ud83c\udf6f\ufe0f \uafc0\ud301"}),(0,Ko.jsx)(Zd,{selectCategory:4==t,onClick:()=>{n(4)},children:"\ud83c\udf59 \ub808\uc2dc\ud53c"})]}),(0,Ko.jsx)(Jd,{onClick:()=>{void 0!=o?a("/nibangnebang/create"):alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \uae30\ub2a5\uc785\ub2c8\ub2e4.")},children:"\uae00\uc4f0\uae30"})]})})};const tp=function(){const[e,t]=(0,r.useState)(null),[n,a]=(0,r.useState)([]),[o,i]=(0,r.useState)([]),l=(0,r.useRef)([]),[s,c]=(0,r.useState)(99),u=Nr.get("accessToken");(0,r.useEffect)((()=>{qo.get("https://api.stackflov.com/map/reviews",{headers:{Authorization:`Bearer ${u}`},withCredentials:!0}).then((e=>{a(e.data.content||[]),console.log("\uc804\uccb4 \ub9ac\ubdf0 \ub370\uc774\ud130 \ub85c\ub4dc:",e.data.content)}))}),[]);const d=(0,r.useMemo)((()=>99===s?o:o.filter((e=>e.category===s))),[o,s]);return(0,Ko.jsxs)(Qd,{children:[(0,Ko.jsx)(qd,{children:"\ub2c8\ubc29\ub0b4\ubc29"}),(0,Ko.jsx)(ep,{nowCategory:s,setNowCategory:c}),(0,Ko.jsx)(Md,{reviews:n,setMap:t,markers:l,setVisiblePosts:i}),(0,Ko.jsx)(Vd,{postsToDisplay:d})]})},np=wr.div`
  padding: 0px;
  width: 100%;
  height: 775px;
  font-family: "INTERVARIABLE";
  font-weight: bold;
`,rp=wr.div`
  width: 375px;
  height: 775px;
  margin: 0 auto;
  padding: 0;
`,ap=wr.div`
  width: 375px;
  height: 60px;
  font-size: 32px;
  border-bottom: 1px solid black;
  margin-bottom: 1rem;
  font-weight: bold;
`,op=wr.div`
  margin: 0 0 0 9rem;
`,ip=wr.div`
  width: 375px;
  height: 100px;
`,lp=wr.img`
  width: 90px;
  height: 90px;
  margin: 0 0 0 9rem;
  border: 5px solid black;
  border-radius: 50px;
`,sp=wr.div`
  width: 375px;
  height: 535px;
`,cp=wr.div`
  width: 375px;
  height: 60px;
  display: flex; // 추가됨
  align-items: center; // 추가됨
  margin-bottom: 0.5rem; // 선택적으로 항목 간 간격
`,up=wr.div`
  width: ${e=>e.width}px;
  height: 30px;
  margin-right: 1rem; // 추가됨
`,dp=wr.input`
  border-radius: 5px;
  width: ${e=>e.width}px;
  height: 30px;
  background-color: rgba(208, 208, 208, 0.2);
  border: 1px solid rgb(110, 110, 110);
  transition-duration: 500ms;
  &:hover {
    color: black;
    background-color: rgba(208, 208, 208, 0.8);
  }
`,pp=wr.button`
  width: 80px;
  height: 33px;
  margin: 0 0 0 0.5rem;
  background-color: ${e=>e.backgroundColor};
  color: #ffffff;
  border: none;
  transition-duration: 500ms;
  border-radius: 8px;
  &:hover {
    color: black;
    background-color: ${e=>e.backgroundColor};
  }
`,fp=wr.div`
  width: 375px;
  height: 40px;
  margin: 1rem 0 0 0;
`,hp=wr.button`
  height: 30px;
  width: 375px;
  background-color: rgba(205, 216, 227, 0.8);
  color: #ffffff;
  border: none;
  transition-duration: 500ms;
  border-radius: 8px;
  &:hover {
    color: black;
    background-color: rgba(208, 208, 208, 0.5);
  }
`,gp=n.p+"static/media/none_images.ee7ea2d282adcc121fb2.png",mp=()=>{const[e,t]=(0,r.useState)(""),[n,a]=(0,r.useState)(""),[o,i]=(0,r.useState)(""),[l,s]=(0,r.useState)(!1),[c,u]=(0,r.useState)(""),[d,p]=(0,r.useState)(""),[f,h]=(0,r.useState)(""),[g,m]=(0,r.useState)(""),[x,v]=(0,r.useState)(""),[b,y]=(0,r.useState)(!1);(0,r.useEffect)((()=>{s(n==o)}),[o]),(0,r.useEffect)((()=>{0!=e.length&&0!=n.length&&0!=o&&0!=c.length&&0!=d.length&&0!=f.length&&0!=g.length&&0!=x.length&&y(!0)}),[e,n,o,l,c,d,f,g,x]);const w=te();return(0,Ko.jsx)(np,{children:(0,Ko.jsxs)(rp,{children:[(0,Ko.jsx)(ap,{children:(0,Ko.jsx)(op,{children:"Regiter"})}),(0,Ko.jsx)(ip,{children:(0,Ko.jsx)(lp,{src:gp})}),(0,Ko.jsxs)(sp,{children:[(0,Ko.jsxs)(cp,{children:[(0,Ko.jsx)(up,{width:100,children:"\uc544\uc774\ub514"}),(0,Ko.jsx)(dp,{width:160,onChange:e=>{t(e.target.value)}}),(0,Ko.jsx)(pp,{disabled:b,backgroundColor:1==b?"black":"gray",onClick:()=>{"test@test.com"==e?alert("\uc774\ubbf8 \uc874\uc7ac\ud558\ub294 \uc544\uc774\ub514\uc785\ub2c8\ub2e4."):(alert("\uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc544\uc774\ub514\uc785\ub2c8\ub2e4."),y(!0))},children:"\uc911\ubcf5 \ud655\uc778"})]}),(0,Ko.jsxs)(cp,{children:[(0,Ko.jsx)(up,{width:100,children:"\ube44\ubc00\ubc88\ud638"}),(0,Ko.jsx)(dp,{type:"password",width:250,onChange:e=>{a(e.target.value)}})]}),(0,Ko.jsxs)(cp,{children:[(0,Ko.jsx)(up,{width:100,children:"\ube44\ubc00\ubc88\ud638 \ud655\uc778"}),(0,Ko.jsx)(dp,{type:"password",width:250,onChange:e=>{i(e.target.value)}})]}),(0,Ko.jsxs)(cp,{children:[(0,Ko.jsx)(up,{width:100,children:"\ub2c9\ub124\uc784"}),(0,Ko.jsx)(dp,{width:250,onChange:e=>{u(e.target.value)}})]}),(0,Ko.jsxs)(cp,{children:[(0,Ko.jsx)(up,{width:100,children:"\uc804\ud654\ubc88\ud638"}),(0,Ko.jsx)(dp,{width:250,onChange:e=>{p(e.target.value)}})]}),(0,Ko.jsxs)(cp,{children:[(0,Ko.jsx)(up,{width:100,children:"\uc6b0\ud3b8\ubc88\ud638"}),(0,Ko.jsx)(dp,{width:250,onChange:e=>{h(e.target.value)}})]}),(0,Ko.jsxs)(cp,{children:[(0,Ko.jsx)(up,{width:100,children:"\uc8fc\uc18c"}),(0,Ko.jsx)(dp,{width:250,onChange:e=>{m(e.target.value)}})]}),(0,Ko.jsxs)(cp,{children:[(0,Ko.jsx)(up,{width:100,children:"\uc0c1\uc138\uc8fc\uc18c"}),(0,Ko.jsx)(dp,{width:250,onChange:e=>{v(e.target.value)}})]})]}),(0,Ko.jsx)(fp,{children:(0,Ko.jsx)(hp,{onClick:()=>{(async()=>{try{if(1==b){const t={email:e,password:n,nickname:c,profileImage:null,address:g,phoneNumber:d,socialType:"NONE",socialId:"",level:0,role:"USER"};await qo.post("https://api.stackflov.com/auth/register",t,{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((()=>{w("/")}))}}catch(t){console.error("Error fetching data:",t)}})()},children:"\ud68c\uc6d0\uac00\uc785"})})]})})},xp=()=>(0,Ko.jsx)("div",{children:(0,Ko.jsx)(mp,{})}),vp="#ffffff",bp="#e5e7eb",yp="#eef2f7",wp="#111827",kp="#6b7280",Sp="#FFC341",jp="#77ABE0",Ap="#E3F0FE",Cp="0 10px 28px rgba(0,0,0,.06)",Ep=vr`
  outline: none;
  box-shadow: 0 0 0 3px rgba(255,195,65,.25);
  border-color: ${Sp};
`,Tp=kr`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,zp=wr.div`
  /* 2열 그리드: 아바타/요약 → 등급 → 정보 → 버튼 */
  display: grid;
  grid-template-columns: minmax(220px, 260px) minmax(0, 1fr);
  grid-template-areas:
    "avatar bio"
    "level level"
    "history history"
    "actions actions";
  gap: 16px 24px;
  width: 100%;
  min-width: 0;
  animation: ${Tp} .28s ease both;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "avatar"
      "bio"
      "level"
      "history"
      "actions";
  }
`,Pp=wr.div`
  grid-area: avatar;
  background: ${vp};
  border: 1px solid ${yp};
  border-radius: 16px;
  padding: 20px;
  display: grid;
  place-items: center;
  box-shadow: ${Cp};

  .avatar {
    width: 180px; height: 180px; border-radius: 50%; object-fit: cover;
  }
  .avatar-fallback {
    font-size: 180px; color: ${kp};
  }
`,Np=wr.div`
  grid-area: bio;
  background: ${vp};
  border: 1px solid ${yp};
  border-radius: 16px;
  padding: 20px;
  box-shadow: ${Cp};
  color: ${wp};
`,$p=wr.div`
  font-size: 36px;
  display: inline-block;
  margin-right: 10px;
`,Rp=wr.span`
  font-size: 32px;
  font-weight: 800;
  margin-right: 4px;
`,Op=wr.div`
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
`,_p=wr.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 700;
  color: ${wp};
`,Mp=wr.span`
  padding: 6px 10px;
  border-radius: 12px;
  color: ${jp};
  background: ${Ap};
  font-weight: 600;
`,Dp=wr.div`
  grid-area: level;
  background: ${vp};
  border: 1px solid ${yp};
  border-radius: 16px;
  padding: 18px;
  box-shadow: ${Cp};
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 10px 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,Lp=wr.div`
  font-size: 18px;
  font-weight: 800;
  color: ${wp};
`,Ip=wr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`,Bp=wr.button`
  padding: 6px 14px;
  border: 2px solid ${yp};
  border-radius: 999px;
  background: ${e=>{let{$active:t}=e;return t?"#F3F6FA":"#fff"}};
  color: ${wp};
  cursor: default;
  font-weight: 700;
  transition: border-color .15s ease, background .15s ease;
  ${e=>{let{$active:t}=e;return t&&`border-color: ${Sp};`}}
`,Fp=wr.div`
  grid-column: 1 / -1;
  font-size: 16px;
  color: ${kp};
`,Up=wr.div`
  grid-area: history;
  background: ${vp};
  border: 1px solid ${yp};
  border-radius: 16px;
  padding: 20px;
  box-shadow: ${Cp};
  display: grid;
  gap: 14px;

  /* 각 행 기본 2열(라벨/필드) */
  .zip-row { grid-template-columns: 120px 1fr auto; }
  .addr-row { grid-template-columns: 120px 1fr; }
`,Hp=wr.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  align-items: center;
  gap: 10px 16px;
`,Wp=vr`
  font-size: 16px;
  font-weight: 800;
  color: ${wp};
`,Yp=vr`
  min-width: 0;
  height: 42px;
  font-size: 16px;
  border: 1px solid ${bp};
  border-radius: 10px;
  padding: 0 12px;
  box-sizing: border-box;
  transition: border-color .15s ease, box-shadow .15s ease, background .15s ease;
  &:focus { ${Ep} }
  &::placeholder { color: ${kp}; }
`,Vp=wr.div`${Wp}`,Gp=wr.div`
  font-size: 16px; color: ${wp};
`,Qp=wr.div`${Wp}`,qp=wr.div`
  font-size: 16px; color: ${wp};
  word-break: break-all;
`,Kp=wr.div`${Wp}`,Xp=wr.input`${Yp}`,Zp=wr.div`${Wp}`,Jp=wr.input`${Yp}`,ef=wr.div`${Wp}`,tf=wr.input`${Yp}`,nf=wr.button`
  height: 42px;
  padding: 0 14px;
  border: 1px solid ${bp};
  border-radius: 999px;
  background: #fff;
  font-weight: 700;
  cursor: pointer;
  transition: transform .12s ease, box-shadow .12s ease, background .12s ease;
  &:hover { transform: translateY(-1px); box-shadow: 0 6px 16px rgba(0,0,0,.06); }
  &:focus { ${Ep} }
`,rf=wr.input`
  grid-column: 2 / -1;
  ${Yp};
`,af=wr.input`
  grid-column: 1 / -1;
  ${Yp};
  height: 42px;
`,of=(wr.div``,wr.div`
  grid-area: actions;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`),lf=vr`
  height: 44px;
  padding: 0 18px;
  font-size: 16px;
  font-weight: 800;
  border-radius: 999px;
  border: 1px solid ${bp};
  background: #fff;
  cursor: pointer;
  transition: transform .12s ease, box-shadow .12s ease, background .12s ease, border-color .12s ease;
  &:hover { transform: translateY(-1px); box-shadow: 0 8px 20px rgba(0,0,0,.07); }
  &:focus { ${Ep} }
`,sf=wr.button`
  ${lf};
`,cf=wr.button`
  ${lf};
  background: ${Sp};
  border-color: ${Sp};
`,uf=kd((0,Ko.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20"})),df=()=>{var e;const[t,n]=(0,r.useState)(""),[a,o]=(0,r.useState)(""),[i,l]=(0,r.useState)(""),s=Nr.get("accessToken"),[c,u]=(0,r.useState)({});(0,r.useEffect)((()=>{const e=Nr.get("accessToken");e&&qo.get("https://api.stackflov.com/users/me",{headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},withCredentials:!0}).then((e=>u(e.data))).catch((e=>console.error("Error fetching user data:",e)))}),[s]),(0,r.useEffect)((()=>{n((null===c||void 0===c?void 0:c.nickname)||""),o((null===c||void 0===c?void 0:c.phoneNumber)||""),l((null===c||void 0===c?void 0:c.address)||"")}),[c]);const d=0===(null===c||void 0===c?void 0:c.level)?"\ud83e\udd49":1===(null===c||void 0===c?void 0:c.level)?"\ud83e\udd48":"\ud83e\udd47",p=0===(null===c||void 0===c?void 0:c.level)?"\ud53c\uce04":1===(null===c||void 0===c?void 0:c.level)?"\ud53c\uce74\uce04":"\ub77c\uc774\uce04";return(0,Ko.jsxs)(zp,{children:[(0,Ko.jsx)(Pp,{children:null!==c&&void 0!==c&&c.profileImage?(0,Ko.jsx)("img",{src:c.profileImage,alt:"user",className:"avatar"}):(0,Ko.jsx)(uf,{className:"avatar-fallback"})}),(0,Ko.jsxs)(Np,{children:[(0,Ko.jsx)($p,{"aria-label":`\ub4f1\uae09 ${p}`,children:d}),(0,Ko.jsx)(Rp,{children:(null===c||void 0===c?void 0:c.nickname)||"user"}),"\ub2d8",(0,Ko.jsxs)(Op,{children:[(0,Ko.jsxs)(_p,{children:[(0,Ko.jsx)(Mp,{children:"\ud314\ub85c\uc6cc"}),"1"]}),(0,Ko.jsxs)(_p,{children:[(0,Ko.jsx)(Mp,{children:"\ud314\ub85c\uc6b0"}),"2"]}),(0,Ko.jsxs)(_p,{children:[(0,Ko.jsx)(Mp,{children:"\ubd81\ub9c8\ud06c"}),"3"]})]})]}),(0,Ko.jsxs)(Dp,{children:[(0,Ko.jsx)(Lp,{children:"\ub4f1\uae09"}),(0,Ko.jsxs)(Ip,{children:[(0,Ko.jsx)(Bp,{$active:0===(null===c||void 0===c?void 0:c.level),children:"\ud83e\udd49 \ud53c\uce04"}),(0,Ko.jsx)(Bp,{$active:1===(null===c||void 0===c?void 0:c.level),children:"\ud83e\udd48 \ud53c\uce74\uce04"}),(0,Ko.jsx)(Bp,{$active:2===(null===c||void 0===c?void 0:c.level),children:"\ud83e\udd47 \ub77c\uc774\uce04"})]}),(0,Ko.jsxs)(Fp,{children:["\ud604\uc7ac \ub4f1\uae09\uc740 ",(0,Ko.jsxs)("strong",{children:[d," ",p]})," \uc785\ub2c8\ub2e4.",(0,Ko.jsx)("br",{}),"\uac8c\uc2dc\uae00 5\uac1c\ub97c \ub354 \uc791\uc131\ud574\uc11c"," ",(0,Ko.jsx)("strong",{children:0===(null===c||void 0===c?void 0:c.level)?"\ud83e\udd48 \ud53c\uce74\uce04":"\ud83e\udd47 \ub77c\uc774\uce04"})," ","\ub4f1\uae09\uc744 \ub2ec\uc131\ud574 \ubcf4\uc138\uc694!"]})]}),(0,Ko.jsxs)(Up,{children:[(0,Ko.jsxs)(Hp,{children:[(0,Ko.jsx)(Vp,{children:"\uac00\uc785\uc77c"}),(0,Ko.jsx)(Gp,{children:(null===c||void 0===c||null===(e=c.createdAt)||void 0===e?void 0:e.slice(0,10))||"-"})]}),(0,Ko.jsxs)(Hp,{children:[(0,Ko.jsx)(Qp,{children:"ID"}),(0,Ko.jsx)(qp,{children:(null===c||void 0===c?void 0:c.email)||"-"})]}),(0,Ko.jsxs)(Hp,{children:[(0,Ko.jsx)(Kp,{children:"\ub2c9\ub124\uc784"}),(0,Ko.jsx)(Xp,{value:t,onChange:e=>n(e.target.value),placeholder:"\ub2c9\ub124\uc784"})]}),(0,Ko.jsxs)(Hp,{children:[(0,Ko.jsx)(Zp,{children:"\uc804\ud654\ubc88\ud638"}),(0,Ko.jsx)(Jp,{value:a,onChange:e=>o(e.target.value),placeholder:"010-0000-0000"})]}),(0,Ko.jsxs)(Hp,{className:"zip-row",children:[(0,Ko.jsx)(ef,{children:"\uc8fc\uc18c"}),(0,Ko.jsx)(tf,{value:i,onChange:e=>l(e.target.value),placeholder:"\uae30\ubcf8 \uc8fc\uc18c"}),(0,Ko.jsx)(nf,{type:"button",children:"\uc6b0\ud3b8\ubc88\ud638"})]}),(0,Ko.jsx)(Hp,{className:"addr-row",children:(0,Ko.jsx)(rf,{placeholder:"\uc0c1\uc138 \uc8fc\uc18c"})}),(0,Ko.jsx)(af,{placeholder:"\ucc38\uace0 \ud56d\ubaa9 (\uc120\ud0dd)"})]}),(0,Ko.jsxs)(of,{children:[(0,Ko.jsx)(sf,{type:"button",children:"\ucde8\uc18c"}),(0,Ko.jsx)(cf,{type:"button",children:"\uc800\uc7a5"})]})]})},pf=kr`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,ff=kr`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,hf=kr`
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
`,gf="#fff",mf="#e5e7eb",xf="#0f172a",vf="#FFC341",bf="0 12px 30px rgba(2,6,23,.06)",yf="rgba(255,255,255,.06)",wf="rgba(255,255,255,.12)",kf="#e5e7eb",Sf="#FFC341",jf="0 12px 34px rgba(0,0,0,.35)",Af=wr.div`
  --radius: 16px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px;
  box-sizing: border-box;

  /* ✅ 2-컬럼 그리드 (float 제거, 오버플로 방지) */
  display: grid;
  grid-template-columns: minmax(180px, 240px) minmax(0, 1fr);
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header header"
    "side content";
  column-gap: 24px;
  row-gap: 12px;

  background: ${gf};
  border: 1px solid ${mf};
  border-radius: var(--radius);
  box-shadow: ${bf};
  animation: ${pf} .35s ease both;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "side"
      "content";
    padding: 16px;
  }

  @media (prefers-color-scheme: dark) {
    background: ${yf};
    border-color: ${wf};
    box-shadow: ${jf};
  }
`,Cf=wr.div`
  grid-area: header;
  position: relative;
  font-size: 32px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: ${xf};
  padding-bottom: 16px;
  border-bottom: 1px dashed ${mf};

  &::after {
    content: "";
    position: absolute;
    left: 0; bottom: -1px;
    height: 3px; width: 140px;
    background: linear-gradient(90deg, ${vf}, transparent 80%);
    transform-origin: left;
    animation: ${hf} 420ms ease-out both;
  }

  @media (prefers-color-scheme: dark) {
    color: ${kf};
    border-bottom-color: ${wf};
    &::after { background: linear-gradient(90deg, ${Sf}, transparent 80%); }
  }
`,Ef=wr.div`
  grid-area: side;
  align-self: start;
  height: fit-content;
  background: ${gf};
  border: 1px solid ${mf};
  border-radius: 14px;
  padding: 14px;
  box-shadow: inset 0 1px 0 rgba(0,0,0,.02);
  animation: ${ff} .3s ease both;
  position: sticky;
  top: 16px;

  @media (max-width: 900px) {
    position: static;
    display: flex;
    overflow-x: auto;
    gap: 8px;
  }

  @media (prefers-color-scheme: dark) {
    background: ${yf};
    border-color: ${wf};
    box-shadow: inset 0 1px 0 rgba(255,255,255,.03);
  }
`,Tf=wr.button`
  width: 100%;
  display: flex; align-items: center; gap: 10px;
  padding: 12px 12px;
  margin-bottom: 8px;
  border: 1px solid ${e=>{let{$active:t}=e;return t?vf:mf}};
  border-radius: 12px;
  background: ${e=>{let{$active:t}=e;return t?"rgba(255,195,65,.12)":gf}};
  color: ${xf};
  font-size: 15px; font-weight: ${e=>{let{$active:t}=e;return t?700:500}};
  letter-spacing: -0.01em;
  cursor: pointer; outline: none;
  transition: transform .15s ease, box-shadow .15s ease, border-color .15s ease;
  position: relative;

  &:hover {
    transform: translateX(2px);
    box-shadow: 0 6px 16px rgba(0,0,0,.08);
    border-color: ${vf};
  }

  /* 좌측 액센트 바 */
  &::before {
    content: "";
    position: absolute; left: 6px; top: 10px; bottom: 10px;
    width: 4px; border-radius: 3px;
    background: ${e=>{let{$active:t}=e;return t?vf:"transparent"}};
    transition: background .2s ease;
  }

  .icon { display: inline-flex; align-items: center; }
  .label { white-space: nowrap; }

  ${e=>{let{$admin:t}=e;return t&&"border-style: dashed;"}}

  @media (max-width: 900px) {
    min-width: max-content;
    margin-bottom: 0;
  }

  @media (prefers-color-scheme: dark) {
    border-color: ${e=>{let{$active:t}=e;return t?Sf:wf}};
    background: ${e=>{let{$active:t}=e;return t?"rgba(255,195,65,.16)":yf}};
    color: ${kf};
    &:hover { box-shadow: 0 6px 16px rgba(0,0,0,.2); }
    &::before { background: ${e=>{let{$active:t}=e;return t?Sf:"transparent"}}; }
  }
`,zf=wr.div`
  grid-area: content;

  /* ✅ 내부가 넓어도 컨테이너 안으로 */
  min-width: 0;
  max-width: 100%;
  box-sizing: border-box;
  & > * { max-width: 100%; min-width: 0; }

  background: ${gf};
  border: 1px solid ${mf};
  border-radius: 14px;
  padding: 20px 22px; /* 오른쪽 살짝 여유 */
  color: ${xf};
  box-shadow: inset 0 1px 0 rgba(0,0,0,.02);
  animation: ${pf} .28s ease both;

  @media (prefers-color-scheme: dark) {
    background: ${yf};
    border-color: ${wf};
    color: ${kf};
    box-shadow: inset 0 1px 0 rgba(255,255,255,.03);
  }
`,Pf="#fff",Nf="#e5e7eb",$f="#0f172a",Rf="#6b7280",Of="0 10px 26px rgba(0,0,0,.06)",_f=kr`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,Mf=wr.div`
  width: 100%;
  min-width: 0;
  background: ${Pf};
  border: 1px solid ${Nf};
  border-radius: 14px;
  box-shadow: ${Of};
  padding: 18px 18px 8px;
  animation: ${_f} .28s ease both;
  box-sizing: border-box;
`,Df=wr.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
`,Lf=wr.div`
  font-size: 28px;
  font-weight: 800;
  color: ${$f};
  flex: 0 0 auto;
`,If=wr.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`,Bf=wr.select`
  height: 34px;
  padding: 0 28px 0 10px;
  font-size: 14px;
  border: 1px solid ${Nf};
  border-radius: 999px;
  background: #fff;
  width: 98px;          /* 콤팩트 */
  appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, #111 50%),
                    linear-gradient(135deg, #111 50%, transparent 50%);
  background-position: calc(100% - 16px) 50%, calc(100% - 11px) 50%;
  background-size: 6px 6px, 6px 6px;
  background-repeat: no-repeat;
`,Ff=wr.button`
  width: 34px; height: 34px;
  display: inline-flex; align-items: center; justify-content: center;
  border: 1px solid ${Nf};
  border-radius: 999px;
  background: #fff;
  cursor: pointer;
  transition: transform .12s ease, box-shadow .12s ease, background .12s ease;
  &:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,.08); }
`,Uf=wr.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,Hf=wr.div`
  display: grid;
  grid-template-columns: 120px 1fr 90px 40px;
  align-items: center;
  gap: 8px 12px;

  padding: 14px 8px;
  border-bottom: 1px solid ${Nf};
  cursor: pointer;
  transition: background .14s ease, transform .12s ease;
  min-width: 0;  /* 제목 줄바꿈/ellipsis 허용 */

  &:hover { background: #fafafa; }
  &:active { transform: translateY(1px); }

  @media (max-width: 680px) {
    grid-template-columns: 90px 1fr 70px 36px;
  }
`,Wf=wr.div`
  font-size: 13px;
  color: ${Rf};
`,Yf=wr.div`
  font-size: 18px;
  font-weight: 700;
  color: ${$f};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;  /* grid 자식에서 필수 */
`,Vf=wr.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
  font-size: 14px;
  color: ${Rf};
  .count { color: ${$f}; font-weight: 600; }
`,Gf=wr.button`
  width: 34px; height: 34px;
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: 999px;
  border: 1px solid #fecaca;
  background: #fff;
  color: #ef4444;
  cursor: pointer;
  transition: transform .12s ease, box-shadow .12s ease, background .12s ease;
  &:hover { background: rgba(239,68,68,.06); transform: translateY(-1px); }
`,Qf=wr.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
  font-size: 14px;
  color: ${Rf};
  .count { color: ${$f}; font-weight: 600; }
`,qf=(wr(Qf)``,kd((0,Ko.jsx)("path",{d:"M3 18h6v-2H3zM3 6v2h18V6zm0 7h12v-2H3z"}))),Kf=kd((0,Ko.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"})),Xf=()=>{const[e,t]=(0,r.useState)([]),n=te(),a=Nr.get("accessToken"),[o,i]=(0,r.useState)({}),[l,s]=(0,r.useState)("createdAt");(0,r.useEffect)((()=>{const e=Nr.get("accessToken");e&&qo.get("https://api.stackflov.com/users/me",{headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},withCredentials:!0}).then((e=>i(e.data))).catch((e=>console.error("Error fetching user data:",e)))}),[a]),(0,r.useEffect)((()=>{null!==o&&void 0!==o&&o.email&&qo.get("https://api.stackflov.com/boards",{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((e=>{var n;const r=((null===(n=e.data)||void 0===n?void 0:n.content)||[]).filter((e=>e.authorEmail===o.email));t(r)})).catch((e=>console.error(e)))}),[o]);const c=[...e].sort(((e,t)=>"views"===l?(t.viewCount||0)-(e.viewCount||0):(t.createdAt||"").localeCompare(e.createdAt||"")));return(0,Ko.jsxs)(Mf,{children:[(0,Ko.jsxs)(Df,{children:[(0,Ko.jsx)(Lf,{children:"\ub0b4 \uac8c\uc2dc\uae00"}),(0,Ko.jsxs)(If,{children:[(0,Ko.jsxs)(Bf,{value:l,onChange:e=>s(e.target.value),"aria-label":"\uc815\ub82c",children:[(0,Ko.jsx)("option",{value:"createdAt",children:"\ub4f1\ub85d\uc77c"}),(0,Ko.jsx)("option",{value:"views",children:"\uc870\ud68c\uc218"})]}),(0,Ko.jsx)(Ff,{"aria-hidden":!0,children:(0,Ko.jsx)(qf,{fontSize:"small"})})]})]}),(0,Ko.jsx)(Uf,{children:c.map((e=>{var t;return(0,Ko.jsxs)(Hf,{onClick:()=>n(`/trace/detail/${e.id}`),role:"button",tabIndex:0,onKeyDown:t=>"Enter"===t.key&&n(`/trace/detail/${e.id}`),children:[(0,Ko.jsx)(Wf,{children:null===(t=e.createdAt)||void 0===t?void 0:t.slice(0,10)}),(0,Ko.jsx)(Yf,{title:e.title,children:e.title}),(0,Ko.jsxs)(Vf,{children:[(0,Ko.jsx)(jd,{fontSize:"small"}),(0,Ko.jsx)("span",{className:"count",children:e.viewCount})]}),(0,Ko.jsx)(Gf,{type:"button",onClick:e=>{e.stopPropagation(),alert("\uc0ad\uc81c \uae30\ub2a5\uc740 \ucd94\ud6c4 \uc5f0\uacb0\ud574\uc8fc\uc138\uc694.")},"aria-label":"\uc0ad\uc81c",title:"\uc0ad\uc81c",children:(0,Ko.jsx)(Kf,{fontSize:"small"})})]},e.id)}))})]})},Zf="#fff",Jf="#e5e7eb",eh="#0f172a",th="#6b7280",nh="0 10px 26px rgba(0,0,0,.06)",rh=kr`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,ah=wr.div`
  width: 100%;
  min-width: 0;
  background: ${Zf};
  border: 1px solid ${Jf};
  border-radius: 14px;
  box-shadow: ${nh};
  padding: 18px 18px 8px;
  animation: ${rh} .28s ease both;
  box-sizing: border-box;
`,oh=wr.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
`,ih=wr.div`
  font-size: 28px;
  font-weight: 800;
  color: ${eh};
  flex: 0 0 auto;
`,lh=wr.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`,sh=wr.select`
  height: 34px;
  padding: 0 28px 0 10px;
  font-size: 14px;
  border: 1px solid ${Jf};
  border-radius: 999px;
  background: #fff;
  width: 98px;
  appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, #111 50%),
                    linear-gradient(135deg, #111 50%, transparent 50%);
  background-position: calc(100% - 16px) 50%, calc(100% - 11px) 50%;
  background-size: 6px 6px, 6px 6px;
  background-repeat: no-repeat;
`,ch=wr.button`
  width: 34px; height: 34px;
  display: inline-flex; align-items: center; justify-content: center;
  border: 1px solid ${Jf};
  border-radius: 999px;
  background: #fff;
  cursor: pointer;
  transition: transform .12s ease, box-shadow .12s ease, background .12s ease;
  &:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,.08); }
`,uh=wr.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,dh=wr.div`
  display: grid;
  grid-template-columns: 120px 1fr 60px;
  align-items: center;
  gap: 8px 12px;

  padding: 12px 8px;
  border-bottom: 1px solid ${Jf};
  cursor: pointer;
  transition: background .14s ease, transform .12s ease;
  min-width: 0;

  &:hover { background: #fafafa; }
  &:active { transform: translateY(1px); }

  @media (max-width: 680px) {
    grid-template-columns: 90px 1fr 56px;
  }
`,ph=wr.div`
  font-size: 13px;
  color: ${th};
`,fh=wr.div`
  font-size: 16px;
  font-weight: 600;
  color: ${eh};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
`,hh=wr.button`
  height: 34px;
  padding: 0 12px;
  border-radius: 999px;
  border: 1px solid #fecaca;
  background: #fff;
  color: #ef4444;
  font-weight: 700;
  cursor: pointer;
  transition: transform .12s ease, box-shadow .12s ease, background .12s ease;
  justify-self: end;

  &:hover { background: rgba(239,68,68,.06); transform: translateY(-1px); }
`,gh=(wr.div``,wr.div``,wr.div``,wr.div``,wr.div``,wr.div``,()=>{const[e,t]=(0,r.useState)([]),[n,a]=(0,r.useState)("createdAt"),[o,i]=(0,r.useState)(!1),l=te(),s=Nr.get("accessToken");(0,r.useEffect)((()=>{const e=Nr.get("accessToken");e?qo.get("https://api.stackflov.com/my/comments/board",{headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},withCredentials:!0}).then((e=>{var n,r;i(!0),t(null!==(n=null===e||void 0===e||null===(r=e.data)||void 0===r?void 0:r.content)&&void 0!==n?n:[])})).catch((e=>{console.error("Error fetching my replies:",e),i(!1)})):i(!1)}),[s]);const c=[...e].sort(((e,t)=>(t.createdAt||"").localeCompare(e.createdAt||"")));return(0,Ko.jsxs)(ah,{children:[(0,Ko.jsxs)(oh,{children:[(0,Ko.jsx)(ih,{children:"\ub0b4 \ub313\uae00"}),(0,Ko.jsxs)(lh,{children:[(0,Ko.jsx)(sh,{value:n,onChange:e=>a(e.target.value),"aria-label":"\uc815\ub82c",children:(0,Ko.jsx)("option",{value:"createdAt",children:"\ub4f1\ub85d\uc77c"})}),(0,Ko.jsx)(ch,{"aria-hidden":!0,children:(0,Ko.jsx)(qf,{fontSize:"small"})})]})]}),(0,Ko.jsx)(uh,{children:c.map((e=>{var n;return(0,Ko.jsxs)(dh,{onClick:()=>{e.boardId&&l(`/trace/detail/${e.boardId}`)},role:"button",tabIndex:0,onKeyDown:t=>{"Enter"===t.key&&e.boardId&&l(`/trace/detail/${e.boardId}`)},children:[(0,Ko.jsx)(ph,{children:null===(n=e.createdAt)||void 0===n?void 0:n.slice(0,10)}),(0,Ko.jsx)(fh,{title:e.content,children:e.content}),(0,Ko.jsx)(hh,{type:"button",onClick:n=>{n.stopPropagation(),(e=>{const n=Nr.get("accessToken");n&&qo.delete(`https://api.stackflov.com/comments/${e}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},withCredentials:!0}).then((()=>{t((t=>t.filter((t=>t.id!==e))))})).catch((e=>{console.error("Error deleting reply:",e)}))})(e.id)},"aria-label":"\uc0ad\uc81c",title:"\uc0ad\uc81c",children:"\uc0ad\uc81c"})]},e.id)}))})]})}),mh=()=>{const[e,t]=(0,r.useState)([]),[n,a]=(0,r.useState)(),[o,i]=(0,r.useState)([]),l=Nr.get("accessToken");return(0,r.useEffect)((()=>{qo.get("https://api.stackflov.com/bookmarks/my",{headers:{Authorization:`Bearer ${l}`,"Content-Type":"application/json"},withCredentials:!0}).then((e=>{const t=e.data;i(t)}))}),[]),(0,r.useEffect)((()=>{const e=o.map((e=>(0,Ko.jsxs)(Hf,{children:[(0,Ko.jsx)(Wf,{children:e.createdAt.slice(0,10)}),(0,Ko.jsx)(Yf,{children:e.boardTitle}),(0,Ko.jsxs)(Qf,{onClick:()=>{var t;t=e.boardId,qo.delete("https://api.stackflov.com/bookmarks",{headers:{"Content-Type":"application/json",Authorization:`Bearer ${l}`},withCredentials:!0,data:{boardId:t}}).then((e=>{console.log("\ubd81\ub9c8\ud06c \uc0ad\uc81c \uc131\uacf5:",e.data),alert("\ubd81\ub9c8\ud06c\uac00 \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")})).catch((e=>{console.error("\ubd81\ub9c8\ud06c \uc0ad\uc81c \uc2e4\ud328:",e),e.response?alert(`\uc624\ub958: ${e.response.data.message||"\ubd81\ub9c8\ud06c \uc0ad\uc81c\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."}`):alert("\ub124\ud2b8\uc6cc\ud06c \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.")}))},children:[(0,Ko.jsx)(Td,{style:{fontSize:"40px"}}),e.bookMark]})]})));a(e)}),[o]),(0,Ko.jsxs)(Mf,{children:[(0,Ko.jsxs)(Df,{children:[(0,Ko.jsx)(Lf,{children:"\ub0b4 \ubd81\ub9c8\ud06c"}),(0,Ko.jsx)(Ff,{children:(0,Ko.jsx)(qf,{})}),(0,Ko.jsxs)(Bf,{children:[(0,Ko.jsx)("option",{children:"\ub4f1\ub85d\uc77c"}),(0,Ko.jsx)("option",{children:"\uc870\ud68c\uc218"}),(0,Ko.jsx)("option",{children:"\uc88b\uc544\uc694"}),(0,Ko.jsx)("option",{children:"\ubd81\ub9c8\ud06c"})]})]}),n]})},xh=kd((0,Ko.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"})),vh=kd((0,Ko.jsx)("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 9h12v2H6zm8 5H6v-2h8zm4-6H6V6h12z"})),bh=kd((0,Ko.jsx)("path",{d:"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2"})),yh=kd([(0,Ko.jsx)("path",{d:"M17 11c.34 0 .67.04 1 .09V6.27L10.5 3 3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82.55-.13 1.08-.32 1.6-.55-.69-.98-1.1-2.17-1.1-3.45 0-3.31 2.69-6 6-6"},"0"),(0,Ko.jsx)("path",{d:"M17 13c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 1.38c.62 0 1.12.51 1.12 1.12s-.51 1.12-1.12 1.12-1.12-.51-1.12-1.12.5-1.12 1.12-1.12m0 5.37c-.93 0-1.74-.46-2.24-1.17.05-.72 1.51-1.08 2.24-1.08s2.19.36 2.24 1.08c-.5.71-1.31 1.17-2.24 1.17"},"1")]),wh=[{id:0,label:"\ub0b4 \ud504\ub85c\ud544",icon:(0,Ko.jsx)(uf,{fontSize:"small"})},{id:1,label:"\ub0b4 \uac8c\uc2dc\uae00",icon:(0,Ko.jsx)(xh,{fontSize:"small"})},{id:2,label:"\ub0b4 \ub313\uae00",icon:(0,Ko.jsx)(vh,{fontSize:"small"})},{id:3,label:"\ubd81\ub9c8\ud06c",icon:(0,Ko.jsx)(bh,{fontSize:"small"})}],kh=()=>{const[e,t]=(0,r.useState)(),n=Nr.get("accessToken"),[a,o]=(0,r.useState)(0),i=te();return(0,r.useEffect)((()=>{const e=Nr.get("accessToken");e&&qo.get("https://api.stackflov.com/users/me",{headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},withCredentials:!0}).then((e=>t(e.data))).catch((e=>console.error("Error fetching user data:",e)))}),[n]),(0,Ko.jsxs)(Af,{children:[(0,Ko.jsx)(Cf,{children:"\ub9c8\uc774 \ud398\uc774\uc9c0"}),(0,Ko.jsxs)(Ef,{children:[wh.map((e=>(0,Ko.jsxs)(Tf,{$active:a===e.id,onClick:()=>o(e.id),"aria-current":a===e.id?"page":void 0,children:[(0,Ko.jsx)("span",{className:"icon",children:e.icon}),(0,Ko.jsx)("span",{className:"label",children:e.label})]},e.id))),"ADMIN"===(null===e||void 0===e?void 0:e.role)&&(0,Ko.jsxs)(Tf,{as:"button",$admin:!0,onClick:()=>i("/admin"),children:[(0,Ko.jsx)("span",{className:"icon",children:(0,Ko.jsx)(yh,{fontSize:"small"})}),(0,Ko.jsx)("span",{className:"label",children:"\uc5b4\ub4dc\ubbfc"})]})]}),(0,Ko.jsxs)(zf,{children:[0===a&&(0,Ko.jsx)(df,{}),1===a&&(0,Ko.jsx)(Xf,{}),2===a&&(0,Ko.jsx)(gh,{}),3===a&&(0,Ko.jsx)(mh,{})]},a)]})},Sh=kr`
  0%   { opacity: 0; transform: translateY(10px) scale(.985); }
  60%  { opacity: 1; transform: translateY(0)     scale(1); }
  100% { opacity: 1; transform: translateY(0)     scale(1); }
`,jh=kr`
  0%,100% { box-shadow: 0 0 0 0 rgba(99,102,241,.0); }
  50%     { box-shadow: 0 0 0 6px rgba(99,102,241,.07); }
`,Ah=wr.div`
  --bg: #ffffff;
  --ink: #111827;
  --muted: #6b7280;
  --line: #e9e9ec;
  --brand: #6366f1;      /* indigo */
  --accent: #8b5cf6;     /* violet */
  --surface: #f8fafc;

  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 16px 16px 40px;
  box-sizing: border-box;
  color: var(--ink);

  @media (max-width: 768px) {
    padding: 12px 12px 28px;
  }
`,Ch=wr.header`
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 14px 0 18px;
  border-bottom: 1px solid var(--line);

  /* gradient underline */
  &::after {
    content: "";
    position: absolute;
    left: 0; right: 0; bottom: -2px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, var(--brand), var(--accent));
    opacity: .75;
  }

  /* reveal */
  opacity: 0; transform: translateY(6px);
  &[data-show="true"] { animation: ${Sh} 420ms cubic-bezier(.2,.65,.2,1) both; }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 6px;
    &::after { bottom: -1px; height: 2px; }
  }
`,Eh=wr.div`
  grid-column: 1 / -1;
  font-weight: 800;
  font-size: 13px;
  letter-spacing: .02em;
  color: var(--muted);
  text-transform: uppercase;
`,Th=wr.h1`
  margin: 0;
  font-size: 30px;
  font-weight: 900;
  line-height: 1.25;
  letter-spacing: -.01em;

  @media (max-width: 768px) { font-size: 22px; }
`,zh=wr.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  justify-self: end;

  @media (max-width: 600px) { justify-self: start; }
`,Ph=wr.li`
  list-style: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 96px;
  height: 36px;
  padding: 0 12px;
  border-radius: 999px;

  background: linear-gradient(180deg, #edf2ff, #e9ecff);
  border: 1px solid rgba(99,102,241,.35);
  color: #1e1b4b;
  font-weight: 800;
  font-size: 13px;

  transition: transform .04s ease, box-shadow .15s ease;
  &:hover { box-shadow: 0 4px 14px rgba(99,102,241,.18); }
  &:active { transform: translateY(1px); }
`,Nh=wr.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 12px 0 10px;
`,$h=wr.span`
  font-size: 14px;
  color: var(--muted);
`,Rh=wr.section`
  padding: 14px 0 8px;

  opacity: 0; transform: translateY(6px);
  &[data-show="true"] { animation: ${Sh} 420ms cubic-bezier(.2,.65,.2,1) 40ms both; }
`,Oh=wr.article`
  font-size: 18px;
  line-height: 1.8;
  color: #1f2937;
  word-break: break-word;
  margin-top: 6px;

  @media (max-width: 768px) { font-size: 16px; }
`,_h=wr.div`
  width: 100%;
  margin-top: 20px;
  padding-top: 18px;
  border-top: 1px solid var(--line);

  img {
    width: 100%;
    max-width: 760px;
    height: 420px;
    display: block;
    margin: 14px auto 0;
    object-fit: contain;
    background: var(--surface);
    border: 1px solid #eef2f7;
    border-radius: 14px;
    transition: transform .2s ease, box-shadow .2s ease;
  }

  img:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 28px rgba(0,0,0,.08);
  }

  @media (max-width: 1200px) { img { height: 320px; max-width: 620px; } }
  @media (max-width:  600px) { img { height: 200px; max-width: 100%; } }
`,Mh=wr.section`
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 20px 0;
  border-top: 1px solid var(--line);

  opacity: 0; transform: translateY(6px);
  &[data-show="true"] { animation: ${Sh} 420ms cubic-bezier(.2,.65,.2,1) 80ms both; }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`,Dh=wr.div`
  width: 96px;
  height: 96px;
  border-radius: 999px;
  overflow: hidden;
  background: #e6e6e6;
  display: grid;
  place-items: center;
  outline: 3px solid #eef2ff;

  @media (max-width: 768px) { width: 72px; height: 72px; }
  @media (max-width: 600px)  { width: 56px; height: 56px; }
`,Lh=wr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ih=wr.div`
  font-size: 18px;
  font-weight: 800;

  @media (max-width: 768px) { font-size: 16px; }
`,Bh=wr.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  min-width: 104px;
  height: 38px;
  padding: 0 14px;

  border: 1px solid rgba(99,102,241,.35);
  border-radius: 999px;
  background: linear-gradient(180deg, #fff, #f6f7ff);
  color: #1e1b4b;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;

  transition: transform .02s ease, box-shadow .15s ease, background .15s ease;
  &:hover  { box-shadow: 0 6px 18px rgba(99,102,241,.18); background: #f3f4ff; }
  &:active { transform: translateY(1px); }
`,Fh=wr.div`
  display: flex; flex-direction: column;
`,Uh=wr.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`,Hh=wr.span`
  font-size: 16px;
  font-weight: 800;
  color: #1f2937;
  margin-right: 12px;
`,Wh=wr.span`
  font-size: 13px;
  color: var(--muted);
`,Yh=wr.div`
  margin-top: 8px;
  font-size: 15px;
  color: #222;
  word-break: break-word;
`,Vh=(wr.div``,wr.div`
  width: 60px; height: 60px; border-radius: 50%;
  overflow: hidden; background: #e6e6e6;
  display: grid; place-items: center;
`,wr.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px; margin-top: 16px;
`,kr`
  0%   { opacity: 0; transform: translateY(8px) scale(.985); }
  60%  { opacity: 1; transform: translateY(0)    scale(1.00); }
  100% { opacity: 1; transform: translateY(0)    scale(1.00); }
`),Gh=wr.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 12px;

  margin-top: 22px;
  padding: 18px;
  border-radius: 16px;

  /* 은은한 유리카드 느낌 */
  background: rgba(248, 250, 252, .85);
  border: 1px solid #e5e7eb;
  backdrop-filter: blur(6px);

  /* 그RADIENT 외곽선 */
  &::before {
    content: "";
    position: absolute; inset: 0;
    border-radius: 16px;
    padding: 1px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6);
    -webkit-mask:
      linear-gradient(#000 0 0) content-box, 
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor; mask-composite: exclude;
    opacity: .15;
    pointer-events: none;
  }

  /* 등장 애니메이션 */
  opacity: 0; transform: translateY(6px);
  animation: ${Vh} 420ms cubic-bezier(.2,.65,.2,1) forwards;

  /* 포커스 들어오면 반짝 + 그림자 */
  &:focus-within {
    border-color: rgba(99,102,241,.45);
    box-shadow: 0 12px 30px rgba(99,102,241,.12);
    animation: ${Vh} 420ms cubic-bezier(.2,.65,.2,1) forwards, ${jh} 900ms ease 1;
    &::before { opacity: .28; }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
    padding: 12px;
  }
`,Qh=wr.textarea`
  flex: 1;
  min-height: 70px;
  max-height: 240px;
  resize: vertical;

  border: none;
  border-radius: 12px;
  background: #fff;
  padding: 14px 14px;
  font-size: 15px;
  line-height: 1.6;
  color: #111827;

  box-shadow: inset 0 0 0 1px #eef2f7;
  outline: none;
  transition: box-shadow .15s ease, background .15s ease;

  &::placeholder { color: #9aa3af; }

  &:focus {
    box-shadow: inset 0 0 0 1.6px rgba(99,102,241,.45);
    background: #ffffff;
  }

  @media (max-width: 600px) { font-size: 14px; min-height: 56px; }
`,qh=wr.button`
  align-self: stretch;         /* 세로로 꽉 차서 시각적 균형 */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  min-width: 118px;
  height: 46px;
  padding: 0 16px;

  border: none;
  border-radius: 12px;
  cursor: pointer;

  /* 인디고→블루 그라디언트 */
  background: linear-gradient(180deg, #5a67ff, #3f51ff);
  color: #fff;
  font-weight: 800;
  font-size: 15px;
  letter-spacing: .02em;

  box-shadow: 0 10px 22px rgba(63,81,255,.22), 0 1px 0 rgba(0,0,0,.06);
  transition: transform .02s ease, filter .15s ease, box-shadow .15s ease;

  &:hover  { filter: brightness(1.03); box-shadow: 0 14px 26px rgba(63,81,255,.28); }
  &:active { transform: translateY(1px); }
  &:disabled { opacity: .55; cursor: not-allowed; box-shadow: none; }
`,Kh=kr`
  0%   { opacity: 0; transform: translateY(8px) scale(.985); }
  100% { opacity: 1; transform: translateY(0)    scale(1.00); }
`,Xh=kr`
  0%   { opacity: 1; transform: scaleY(1); }
  100% { opacity: 0; transform: scaleY(.9); }
`,Zh=kr`
  0%   { box-shadow: 0 0 0 0 rgba(99,102,241,.18); }
  100% { box-shadow: 0 0 0 0 rgba(99,102,241,0);  }
`,Jh=wr.div`
  margin-top: 14px;
  padding: 18px 18px 16px;
  background: #ffffff;
  border: 1px solid #e9e9ec;
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(0,0,0,.04);
  position: relative;
  overflow: hidden;
  transform-origin: top left;
  transition: box-shadow .2s ease, transform .06s ease, border-color .2s ease;

  /* 좌측 컬러 레일 */
  &::before {
    content: "";
    position: absolute;
    left: -1px; top: 0; bottom: 0;
    width: 4px;
    border-radius: 16px 0 0 16px;
    background: linear-gradient(180deg, var(--brand), var(--accent));
    opacity: .75;
  }

  &:hover  { box-shadow: 0 8px 26px rgba(0,0,0,.08); border-color: rgba(99,102,241,.25); }
  &:active { transform: translateY(1px); }

  /* ✅ 상태별 애니메이션 */
  ${e=>{let{$anim:t}=e;return"enter"===t&&vr`
    animation: ${Kh} .28s ease-out both;
  `}}
  ${e=>{let{$anim:t}=e;return"new"===t&&vr`
    animation: ${Kh} .28s ease-out both, ${Zh} 900ms ease .28s 1;
    box-shadow: 0 10px 24px rgba(99,102,241,.18);
    border-color: rgba(99,102,241,.35);
  `}}
  ${e=>{let{$anim:t}=e;return"exit"===t&&vr`
    animation: ${Xh} .26s ease-in forwards;
    pointer-events: none;
  `}}
`,eg=[{key:"SPAM",label:"\uc2a4\ud338/\uad11\uace0"},{key:"ABUSE",label:"\uc695\uc124/\ube44\ubc29"},{key:"PORNOGRAPHY",label:"\uc74c\ub780\ubb3c"},{key:"ILLEGAL",label:"\ubd88\ubc95 \uc815\ubcf4"},{key:"OTHER",label:"\uae30\ud0c0(\uc9c1\uc811 \uc785\ub825)"}];function tg(e){let{contentId:t,contentType:n,accessToken:a,size:o="sm"}=e;const[i,l]=(0,r.useState)(!1),[s,c]=(0,r.useState)("SPAM"),[u,d]=(0,r.useState)(""),[p,f]=(0,r.useState)(!1),h=(0,r.useMemo)((()=>p||"OTHER"===s&&0===u.trim().length),[p,s,u]);return(0,Ko.jsxs)(Ko.Fragment,{children:[(0,Ko.jsxs)(ng,{$size:o,type:"button",onClick:()=>l(!0),title:"\uc2e0\uace0\ud558\uae30","aria-label":"\uc2e0\uace0\ud558\uae30",children:[(0,Ko.jsx)("span",{style:{transform:"translateY(-1px)"},children:"\ud83d\udea9"}),(0,Ko.jsx)("span",{children:"\uc2e0\uace0"})]}),i&&(0,Ko.jsx)(rg,{onClick:()=>!p&&l(!1),children:(0,Ko.jsxs)(ag,{onClick:e=>e.stopPropagation(),children:[(0,Ko.jsx)("h3",{style:{marginTop:0},children:"\uc2e0\uace0\ud558\uae30"}),(0,Ko.jsxs)("div",{style:{marginBottom:8,fontSize:14,color:"#64748b"},children:["\ub300\uc0c1: ",(0,Ko.jsx)("b",{children:n})," ",(0,Ko.jsxs)("code",{style:{color:"#475569"},children:["#",t]})]}),(0,Ko.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8},children:eg.map((e=>(0,Ko.jsxs)("label",{style:{display:"flex",gap:8,alignItems:"center",border:"1px solid #e2e8f0",borderRadius:8,padding:8},children:[(0,Ko.jsx)("input",{type:"radio",name:"report-reason",value:e.key,checked:s===e.key,onChange:()=>c(e.key)}),(0,Ko.jsx)("span",{children:e.label})]},e.key)))}),(0,Ko.jsxs)("div",{style:{marginTop:12},children:[(0,Ko.jsx)("textarea",{placeholder:"OTHER"===s?"\uae30\ud0c0 \uc0ac\uc720\ub97c \uad6c\uccb4\uc801\uc73c\ub85c \uc801\uc5b4\uc8fc\uc138\uc694(\ud544\uc218)":"\ucd94\uac00 \uc124\uba85\uc774 \uc788\uc73c\uba74 \uc785\ub825",value:u,onChange:e=>d(e.target.value.slice(0,2e3)),style:{width:"100%",minHeight:96,border:"1px solid #e2e8f0",borderRadius:10,padding:"10px 12px",fontSize:14}}),(0,Ko.jsxs)("div",{style:{textAlign:"right",fontSize:12,color:"#94a3b8"},children:[u.length,"/2000"]})]}),(0,Ko.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},children:[(0,Ko.jsx)("button",{disabled:p,onClick:()=>l(!1),style:{padding:"8px 12px",borderRadius:10,border:"1px solid #e2e8f0",background:"#fff"},children:"\ucde8\uc18c"}),(0,Ko.jsx)("button",{disabled:h,onClick:async()=>{try{f(!0),await qo.post("https://api.stackflov.com/reports",{contentId:t,contentType:n,reason:s,details:"OTHER"===s?u.trim():(null===u||void 0===u?void 0:u.trim())||""},{headers:a?{Authorization:`Bearer ${a}`}:{},withCredentials:!0}),alert("\uc2e0\uace0\uac00 \uc815\uc0c1\uc801\uc73c\ub85c \uc811\uc218\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),l(!1),c("SPAM"),d("")}catch(lw){var e;const n=null===lw||void 0===lw||null===(e=lw.response)||void 0===e?void 0:e.status;401===n?alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."):409===n?alert("\uc774\ubbf8 \uc2e0\uace0\ub41c \ucf58\ud150\uce20\uc785\ub2c8\ub2e4."):400===n?alert("\uc785\ub825\uac12\uc744 \ud655\uc778\ud574 \uc8fc\uc138\uc694."):alert("\uc2e0\uace0 \ucc98\ub9ac \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.")}finally{f(!1)}},style:{padding:"8px 12px",borderRadius:10,border:"1px solid #1e293b",background:"#111827",color:"#fff",opacity:h?.5:1},children:p?"\uc804\uc1a1 \uc911...":"\uc2e0\uace0 \uc811\uc218"})]})]})})]})}const ng=wr.button`
  display: inline-flex; align-items: center; gap: 6px;
  border: 1px solid #e2e8f0; background: #fff; cursor: pointer;
  border-radius: 999px; line-height: 1;
  padding: ${e=>"sm"===e.$size?"4px 8px":"6px 10px"};
  font-size: ${e=>"sm"===e.$size?"12px":"14px"};
  &:hover { background: #f8fafc; }
`,rg=wr.div`
  position: fixed; inset: 0; background: rgba(15,18,28,.45);
  display:flex; align-items:center; justify-content:center; z-index: 9999;
`,ag=wr.div`
  width:min(720px,92vw); max-height:86vh; overflow:auto;
  background:#fff; border-radius:16px; box-shadow:0 18px 48px rgba(0,0,0,.35);
  padding:18px;
`,og=wr.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,ig=wr.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 13px;
  line-height: 1;
  border: 1px solid
    ${e=>"danger"===e.$variant?"#fecaca":"ghost"===e.$variant?"#e2e8f0":"success"===e.$variant?"#86efac":"#cbd5e1"};
  background: ${e=>"danger"===e.$variant?"#fff1f2":"ghost"===e.$variant?"#ffffff":"success"===e.$variant?"#ecfdf5":"#f8fafc"};
  color: ${e=>"danger"===e.$variant?"#b91c1c":"ghost"===e.$variant?"#334155":"success"===e.$variant?"#065f46":"#111827"};
  cursor: pointer;
  transition: background 0.15s ease, box-shadow 0.15s ease, transform 0.02s ease;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.04);

  &:hover {
    background: ${e=>"danger"===e.$variant?"#ffe4e6":"ghost"===e.$variant?"#f8fafc":"success"===e.$variant?"#dcfce7":"#eef2ff"};
  }
  &:active {
    transform: translateY(1px);
  }
  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,lg=e=>(0,Ko.jsxs)(ig,{...e,children:[(0,Ko.jsx)("span",{children:"\u270f\ufe0f"}),(0,Ko.jsx)("span",{children:"\uc218\uc815"})]}),sg=e=>(0,Ko.jsxs)(ig,{...e,$variant:"danger",children:[(0,Ko.jsx)("span",{children:"\ud83d\uddd1\ufe0f"}),(0,Ko.jsx)("span",{children:"\uc0ad\uc81c"})]}),cg=e=>(0,Ko.jsxs)(ig,{...e,$variant:"success",children:[(0,Ko.jsx)("span",{children:"\ud83d\udcbe"}),(0,Ko.jsx)("span",{children:"\uc800\uc7a5"})]}),ug=e=>(0,Ko.jsxs)(ig,{...e,$variant:"ghost",children:[(0,Ko.jsx)("span",{children:"\u21a9\ufe0f"}),(0,Ko.jsx)("span",{children:"\ucde8\uc18c"})]}),dg=wr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 6px;
`,pg=wr.button`
  appearance: none;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #334155;
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 13px;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
  &:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
  }
`,fg=()=>{var e;const[t,n]=(0,r.useState)({}),[a,o]=(0,r.useState)([]),[i,l]=(0,r.useState)(""),[s,c]=(0,r.useState)(""),[u,d]=(0,r.useState)(null),[p,f]=(0,r.useState)([]),[h,g]=(0,r.useState)(null),[m,x]=(0,r.useState)(!1),[v,b]=(0,r.useState)({}),y=(0,r.useRef)(new Set),w=Nr.get("accessToken"),k=te(),{no:S}=ne(),j=(0,r.useRef)(null);(0,r.useEffect)((()=>{const e=j.current;if(!e)return;const t=e.querySelectorAll("[data-reveal='true']"),n=new IntersectionObserver((e=>{e.forEach((e=>{if(!e.isIntersecting)return;const t=Number(e.target.getAttribute("data-delay")||0);setTimeout((()=>e.target.setAttribute("data-show","true")),t),n.unobserve(e.target)}))}),{threshold:.15,rootMargin:"0px 0px -8% 0px"});return t.forEach((e=>n.observe(e))),()=>n.disconnect()}),[t.id,a.length]),(0,r.useEffect)((()=>{qo.get(`https://api.stackflov.com/boards/${S}`,{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((e=>n(e.data))).catch((e=>console.error("Error fetching board:",e)))}),[S]);const A=(0,r.useRef)(!1);(0,r.useEffect)((()=>{const e=Nr.get("accessToken");e&&!A.current&&(A.current=!0,qo.get("https://api.stackflov.com/users/me",{headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},withCredentials:!0}).then((t=>(d(t.data),qo.get(`https://api.stackflov.com/follows/following/${t.data.id}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},withCredentials:!0})))).then((e=>{null!==e&&void 0!==e&&e.data&&f(e.data.map((e=>e.id)))})).catch((e=>console.error("Error fetching me/followings:",e))))}),[]);const C=(0,r.useCallback)((()=>{qo.get(`https://api.stackflov.com/comments/board/${S}`,{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((e=>{const t=Array.isArray(e.data)?e.data:[],n=y.current,r=t.filter((e=>!n.has(e.id)));r.length&&b((e=>({...e,...Object.fromEntries(r.map((e=>[e.id,"new"])))}))),y.current=new Set(t.map((e=>e.id))),o(t)})).catch((e=>console.error("Error fetching replies:",e)))}),[S]);(0,r.useEffect)((()=>{C()}),[C]);const E=Array.isArray(t.imageUrls)&&t.imageUrls.length>0,T=(0,r.useMemo)((()=>t.authorProfileImageUrl||"https://d3sutbt651osyh.cloudfront.net/assets/profile/default.png"),[t.authorProfileImageUrl]);(0,r.useEffect)((()=>x(!1)),[T]);const z=(0,r.useMemo)((()=>!!t.authorId&&p.includes(t.authorId)),[p,t.authorId]),P=(0,r.useMemo)((()=>function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace(/(^|\s)#[a-zA-Z0-9\u3131-\u314e\u314f-\u3163\uac00-\ud7a3_]+/gm,"$1").replace(/[ \t]+(\r?\n)/g,"$1")}((null===t||void 0===t?void 0:t.content)||"")),[null===t||void 0===t?void 0:t.content]),N=(0,r.useMemo)((()=>Array.isArray(null===t||void 0===t?void 0:t.hashtags)&&t.hashtags.length>0?t.hashtags.map(String):(e=>{if(!e)return[];const t=/#([a-zA-Z0-9\u3131-\u314e\u314f-\u3163\uac00-\ud7a3_]+)/g,n=new Set;let r;for(;r=t.exec(e);)n.add(r[1]);return Array.from(n)})(null===t||void 0===t?void 0:t.content)),[t]);return(0,Ko.jsxs)(Ah,{ref:j,children:[(0,Ko.jsxs)(Ch,{"data-reveal":"true","data-delay":"0",children:[(0,Ko.jsx)(Eh,{children:"\uc790\ucde8\ub85c\uadf8"}),(0,Ko.jsx)(Th,{children:t.title}),(0,Ko.jsxs)(zh,{children:[(0,Ko.jsx)(tg,{contentId:Number(S),contentType:"BOARD",accessToken:w,size:"sm",variant:"pill"}),(0,Ko.jsx)(Ph,{children:{0:"\ud83c\udfe0 \uc790\ucde8",1:"\u26a1 \ubc88\uac1c",2:"\ud83c\udf6f\ufe0f \uafc0\ud301",3:"\ud83c\udf59 \ub808\uc2dc\ud53c"}[t.category]})]}),N.length>0&&(0,Ko.jsx)("div",{style:{gridColumn:"1 / -1"},children:(0,Ko.jsx)(dg,{children:N.map((e=>(0,Ko.jsxs)(pg,{onClick:()=>k(`/trace?tag=${encodeURIComponent(e)}`),title:`#${e} \ud0dc\uadf8\ub85c \ubcf4\uae30`,children:["#",e]},e)))})})]}),(0,Ko.jsxs)(Rh,{"data-reveal":"true","data-delay":"60",children:[(0,Ko.jsxs)(Nh,{children:[(0,Ko.jsxs)($h,{children:["\uc791\uc131\uc77c : ",(null===t||void 0===t||null===(e=t.createdAt)||void 0===e?void 0:e.slice(0,10))||""]}),(null===u||void 0===u?void 0:u.email)&&t.authorEmail===u.email&&(0,Ko.jsxs)(og,{children:[(0,Ko.jsx)(lg,{onClick:()=>k(`/trace/update/${S}`)}),(0,Ko.jsx)(sg,{onClick:async()=>{if(null!==u&&void 0!==u&&u.email&&u.email===t.authorEmail){if(window.confirm("\uc774 \uac8c\uc2dc\uae00\uc744 \uc0ad\uc81c\ud560\uae4c\uc694?"))try{await qo.delete(`https://api.stackflov.com/boards/${S}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${w}`},withCredentials:!0}),alert("\uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),k("/")}catch(n){var e;console.error("Error deleting board:",(null===n||void 0===n?void 0:n.response)||n);const t=403===(null===n||void 0===n||null===(e=n.response)||void 0===e?void 0:e.status)?"\uc0ad\uc81c \uad8c\ud55c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.":"\uc0ad\uc81c\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.";alert(t)}}else alert("\uc791\uc131\uc790\ub9cc \uc0ad\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")}})]})]}),(0,Ko.jsx)(Oh,{children:P}),E&&(0,Ko.jsx)(_h,{children:t.imageUrls.map(((e,t)=>(0,Ko.jsx)("img",{src:e,alt:`\uac8c\uc2dc\uae00 \uc774\ubbf8\uc9c0 ${t+1}`,loading:"lazy",decoding:"async"},t)))})]}),(0,Ko.jsxs)(Mh,{"data-reveal":"true","data-delay":"120",children:[(0,Ko.jsx)(Dh,{style:{borderRadius:"50%",overflow:"hidden"},children:m?(0,Ko.jsx)(uf,{style:{fontSize:72,color:"#c8ceda"}}):(0,Ko.jsx)("img",{src:T,alt:"author",width:100,height:100,loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",objectFit:"cover"},onError:e=>{e.currentTarget.onerror=null,x(!0)}},T)}),(0,Ko.jsxs)(Lh,{children:[(0,Ko.jsx)(Ih,{children:t.authorEmail}),z?(0,Ko.jsx)(Bh,{onClick:()=>{if(null===u||void 0===u||!u.id)return alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \uae30\ub2a5\uc785\ub2c8\ub2e4.");qo.delete(`https://api.stackflov.com/follows/${t.authorId}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${w}`},withCredentials:!0}).then((()=>f((e=>e.filter((e=>e!==t.authorId)))))).catch((e=>console.error("Error unfollow:",e)))},children:"\ud83d\ude3d \uc5b8\ud314\ub85c\uc6b0\ud558\uae30"}):(0,Ko.jsx)(Bh,{onClick:()=>{if(null===u||void 0===u||!u.id)return alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \uae30\ub2a5\uc785\ub2c8\ub2e4.");qo.post("https://api.stackflov.com/follows/follow",{followedId:t.authorId},{headers:{"Content-Type":"application/json",Authorization:`Bearer ${w}`},withCredentials:!0}).then((()=>f((e=>[...e,t.authorId])))).catch((e=>console.error("Error follow:",e)))},children:"\ud83d\ude3d \ud314\ub85c\uc6b0\ud558\uae30"})]})]}),(0,Ko.jsxs)(Gh,{"data-reveal":"true","data-delay":"160",children:[(0,Ko.jsx)(Qh,{placeholder:"\ub313\uae00\uc744 \uc785\ub825\ud558\uc138\uc694",value:i,onChange:e=>l(e.target.value)}),(0,Ko.jsx)(qh,{onClick:()=>{if(null===u||void 0===u||!u.id)return alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \uae30\ub2a5\uc785\ub2c8\ub2e4.");qo.post("https://api.stackflov.com/comments",{boardId:S,content:i},{headers:{"Content-Type":"application/json",Authorization:`Bearer ${w}`},withCredentials:!0}).then((()=>{l(""),C()})).catch((e=>console.error("Error creating reply:",e)))},children:"\ub313\uae00 \uc791\uc131"})]}),a.map(((e,t)=>{var n;const r=h===e.id;return(0,Ko.jsx)(Jh,{$anim:v[e.id]||"enter",onAnimationEnd:()=>{b((t=>{const{[e.id]:n,...r}=t;return r}))},"data-reveal":"true","data-delay":200+40*Math.min(t,10),children:(0,Ko.jsxs)(Fh,{children:[(0,Ko.jsxs)(Uh,{children:[(0,Ko.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,Ko.jsx)(Hh,{children:e.authorEmail}),(0,Ko.jsx)(Wh,{children:(null===(n=e.createdAt)||void 0===n?void 0:n.slice(0,10))||""})]}),(0,Ko.jsxs)(og,{children:[(0,Ko.jsx)(tg,{contentId:e.id,contentType:"COMMENT",accessToken:w,size:"sm",variant:"pill"}),(null===u||void 0===u?void 0:u.email)===e.authorEmail&&!r&&(0,Ko.jsxs)(Ko.Fragment,{children:[(0,Ko.jsx)(lg,{onClick:()=>{g(e.id),c(e.content)}}),(0,Ko.jsx)(sg,{onClick:()=>{return t=e.id,b((e=>({...e,[t]:"exit"}))),void setTimeout((()=>{o((e=>{const n=e.filter((e=>e.id!==t));return y.current=new Set(n.map((e=>e.id))),n})),h===t&&(g(null),c("")),qo.delete(`https://api.stackflov.com/comments/${t}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${w}`},withCredentials:!0}).then((()=>{})).catch((e=>{console.error("Error deleting reply:",e),C()}))}),260);var t}})]}),(null===u||void 0===u?void 0:u.email)===e.authorEmail&&r&&(0,Ko.jsxs)(Ko.Fragment,{children:[(0,Ko.jsx)(cg,{onClick:()=>{return t=e.id,void qo.put(`https://api.stackflov.com/comments/${t}`,{boardId:S,content:s},{headers:{"Content-Type":"application/json",Authorization:`Bearer ${w}`},withCredentials:!0}).then((()=>{g(null),c(""),C()})).catch((e=>console.error("Error updating reply:",e)));var t}}),(0,Ko.jsx)(ug,{onClick:()=>g(null)})]})]})]}),r?(0,Ko.jsx)(Qh,{value:s,onChange:e=>c(e.target.value)}):(0,Ko.jsx)(Yh,{children:e.content})]})},e.id)}))]})},hg=kr`
  0%   { opacity: 0; transform: translateY(10px) scale(.985); }
  60%  { opacity: 1; transform: translateY(0)     scale(1); }
  100% { opacity: 1; transform: translateY(0)     scale(1); }
`,gg=kr`
  0%,100% { box-shadow: 0 0 0 0 rgba(99,102,241,.0); }
  50%     { box-shadow: 0 0 0 6px rgba(99,102,241,.08); }
`,mg=kr`
  0%   { opacity: 0; transform: translateY(6px) scale(.985); }
  60%  { opacity: 1; transform: translateY(0)    scale(1.00); }
  100% { opacity: 1; transform: translateY(0)    scale(1.00); }
`,xg=wr.div`
  --ink: #111827;
  --muted: #6b7280;
  --line: #e5e7eb;
  --brand: #6366f1;
  --accent: #8b5cf6;
  --surface: #f8fafc;

  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 16px;
  box-sizing: border-box;
  color: var(--ink);
`,vg=wr.div`
  position: relative;
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 12px;
  align-items: center;
  padding: 12px 0 14px;
  border-bottom: 1px solid var(--line);

  &::after {
    content: "";
    position: absolute;
    left: 0; right: 0; bottom: -2px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, var(--brand), var(--accent));
    opacity: .75;
  }

  opacity: 0; transform: translateY(6px);
  &[data-show="true"] { animation: ${hg} 420ms cubic-bezier(.2,.65,.2,1) both; }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    &::after { height: 2px; bottom: -1px; }
  }
`,bg=wr.div`
  font-size: 18px;
  font-weight: 900;
  color: var(--muted);
`,yg=wr.input`
  width: 100%;
  height: 56px;
  border-radius: 12px;
  border: 1px solid var(--line);
  padding: 0 14px;
  font-size: 20px;
  outline: none;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,.03);

  &:focus {
    border-color: rgba(99,102,241,.45);
    animation: ${gg} 900ms ease 1;
  }
`,wg=wr.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  padding: 14px 0;

  opacity: 0; transform: translateY(6px);
  &[data-show="true"] { animation: ${hg} 420ms cubic-bezier(.2,.65,.2,1) 40ms both; }
`,kg=wr.div`
  font-size: 16px;
  font-weight: 900;
  color: var(--muted);
  margin-right: 6px;
`,Sg=wr.li`
  list-style: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 88px;
  height: 36px;
  padding: 0 12px;
  border-radius: 999px;

  background: ${e=>e.selectCategory?"linear-gradient(180deg, #edf2ff, #e9ecff)":"#ffffff"};
  border: 1px solid
    ${e=>e.selectCategory?"rgba(99,102,241,.45)":"#e5e7eb"};
  color: ${e=>e.selectCategory?"#1e1b4b":"#111827"};
  font-weight: 800;
  font-size: 13px;

  cursor: pointer;
  transition: transform .02s ease, box-shadow .15s ease, background .15s ease;

  &:hover { box-shadow: 0 6px 18px rgba(99,102,241,.18); }
  &:active { transform: translateY(1px); }
`,jg=wr.div`
  padding-top: 6px;

  opacity: 0; transform: translateY(6px);
  &[data-show="true"] { animation: ${hg} 420ms cubic-bezier(.2,.65,.2,1) 80ms both; }
`,Ag=wr.textarea`
  width: 100%;
  min-height: 280px;
  border-radius: 14px;
  border: 1px solid var(--line);
  padding: 14px;
  font-size: 16px;
  line-height: 1.75;
  outline: none;
  resize: vertical;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,.03);

  &:focus {
    border-color: rgba(99,102,241,.45);
    animation: ${gg} 900ms ease 1;
  }
`,Cg=wr.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;

  .count {
    color: #6b7280;
    font-size: 14px;
  }
`,Eg=wr.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  height: 40px;
  padding: 0 14px;
  border-radius: 12px;
  border: 1px solid rgba(99,102,241,.35);
  background: linear-gradient(180deg, #fff, #f6f7ff);
  color: #1e1b4b;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;

  transition: transform .02s ease, box-shadow .15s ease, background .15s ease;
  &:hover  { box-shadow: 0 6px 18px rgba(99,102,241,.18); background: #f3f4ff; }
  &:active { transform: translateY(1px); }
`,Tg=wr.input`
  display: none;
`,zg=wr.div`
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
  gap: 12px;
`,Pg=wr.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  box-shadow: 0 8px 18px rgba(0,0,0,.06);
  animation: ${mg} 320ms ease both;

  img {
    position: absolute;
    inset: 0;
    width: 100%; height: 100%;
    object-fit: cover;
  }
`,Ng=wr.button`
  position: absolute;
  top: 6px; right: 6px;
  background: rgba(17,24,39,.75);
  color: #fff;
  border: 0;
  border-radius: 8px;
  font-size: 12px;
  padding: 4px 6px;
  cursor: pointer;

  &:hover { background: rgba(17,24,39,.9); }
`,$g=wr.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 16px 0;
  margin-top: 10px;

  opacity: 0; transform: translateY(6px);
  &[data-show="true"] { animation: ${hg} 420ms cubic-bezier(.2,.65,.2,1) 120ms both; }
`,Rg=wr.button`
  min-width: 110px;
  height: 44px;
  padding: 0 16px;
  border: none;
  border-radius: 12px;
  cursor: pointer;

  background: linear-gradient(180deg, #5a67ff, #3f51ff);
  color: #fff;
  font-weight: 800;
  font-size: 15px;
  letter-spacing: .02em;

  box-shadow: 0 10px 22px rgba(63,81,255,.22), 0 1px 0 rgba(0,0,0,.06);
  transition: transform .02s ease, filter .15s ease, box-shadow .15s ease;

  &:hover  { filter: brightness(1.03); box-shadow: 0 14px 26px rgba(63,81,255,.28); }
  &:active { transform: translateY(1px); }
  &:disabled { opacity: .55; cursor: not-allowed; box-shadow: none; }
`,Og=wr.button`
  min-width: 110px;
  height: 44px;
  padding: 0 16px;

  border-radius: 12px;
  border: 1px solid #cdd8e3;
  background: #fff;
  color: #111827;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;

  transition: background .15s ease, border-color .15s ease, transform .02s ease;

  &:hover  { background: #f6f7f9; border-color: #bfc9d4; }
  &:active { transform: translateY(1px); }
`,_g=(wr.div`
  font-size: 14px;
  color: var(--muted);
`,wr.div`
  font-size: 16px;
  color: var(--ink);
`,/#([0-9A-Za-z\uac00-\ud7a3_]{1,20})/g);const Mg=wr.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 0 16px;
`,Dg=wr.div`
  font-size: 14px;
  color: #374151;
  min-width: 64px;
`,Lg=wr.input`
  flex: 1;
  min-width: 200px;
  height: 38px;
  padding: 0 12px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  outline: none;
  &:focus { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,.15); }
`,Ig=wr.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid #e5e7eb;
  background: #f9fafb;
  color: #111827;
  font-size: 13px;
`,Bg=wr.button`
  border: 0;
  background: transparent;
  color: #ef4444;
  cursor: pointer;
  padding: 0 2px;
  line-height: 1;
`,Fg=()=>{const[e,t]=(0,r.useState)(0),[n,a]=(0,r.useState)(""),[o,i]=(0,r.useState)(""),[l,s]=(0,r.useState)(""),[c,u]=(0,r.useState)([]),[d,p]=(0,r.useState)([]),[f,h]=(0,r.useState)([]),[g,m]=(0,r.useState)(!1),x=te(),v=Nr.get("accessToken");(0,r.useEffect)((()=>{v||(alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \uae30\ub2a5\uc785\ub2c8\ub2e4."),x("/login"))}),[v,x]);(0,r.useEffect)((()=>{const e=d.map((e=>URL.createObjectURL(e)));return h(e),()=>e.forEach((e=>URL.revokeObjectURL(e)))}),[d]);const b=e=>{const t=function(e){if(!e)return"";let t=String(e).trim();return t?(t=t.replace(/^#+/,""),t=t.replace(/\s+/g,""),t=t.replace(/[^0-9A-Za-z\uac00-\ud7a3_]/g,""),t?t.slice(0,20):""):""}(e);t?(u((e=>{const n=new Set(e.map((e=>e.toLowerCase())));return n.has(t.toLowerCase())?e:[...e,t]})),s("")):s("")},y=(0,r.useMemo)((()=>{const e=new Set;if(!o)return e;let t;for(;t=_g.exec(o);)e.add(t[1]);return e}),[o]);return(0,Ko.jsxs)(xg,{as:"form",onSubmit:async t=>{if(t.preventDefault(),n.trim()&&o.trim()){if(!g)try{m(!0);const t=new Set(Array.from(y).map((e=>e.toLowerCase()))),r=c.filter((e=>!t.has(e.toLowerCase())));let a=o.trim();if(r.length){a=`${a}\n\n${r.map((e=>`#${e}`)).join(" ")}`.trim()}const i=new FormData,l={title:n.trim(),content:a,category:Number(e)};i.append("data",new Blob([JSON.stringify(l)],{type:"application/json"}));for(const e of d)i.append("images",e);const s=await qo.post("https://api.stackflov.com/boards/multipart",i,{headers:{Authorization:`Bearer ${v}`},withCredentials:!0});await(async e=>{var t,n,r,a,o,i;let l=Number(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.id)||Number(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.boardId)||Number(null===e||void 0===e||null===(r=e.data)||void 0===r||null===(a=r.data)||void 0===a?void 0:a.id)||Number(null===e||void 0===e||null===(o=e.data)||void 0===o||null===(i=o.result)||void 0===i?void 0:i.id);if(!Number.isFinite(l)){const t=(null===e||void 0===e?void 0:e.headers)&&(e.headers.location||e.headers.Location);if(t){const e=String(t).match(/(\d+)(?:\/)?$/);e&&(l=Number(e[1]))}}if(!Number.isFinite(l)){var s;const t=null===e||void 0===e||null===(s=e.request)||void 0===s?void 0:s.responseURL;if(t){const e=String(t).match(/(\d+)(?:\/)?$/);e&&(l=Number(e[1]))}}if(!Number.isFinite(l))try{var c,u;const e=await qo.get("https://api.stackflov.com/boards",{params:{size:1,sort:"id,desc"},withCredentials:!0}),t=null===e||void 0===e||null===(c=e.data)||void 0===c||null===(u=c.content)||void 0===u?void 0:u[0];null!==t&&void 0!==t&&t.id&&(l=Number(t.id))}catch(Ht){}Number.isFinite(l)?x(`/trace/detail/${l}`):x("/trace")})(s)}catch(s){var r,a,i,l;const e=(null===s||void 0===s||null===(r=s.response)||void 0===r||null===(a=r.data)||void 0===a?void 0:a.message)||(null===s||void 0===s||null===(i=s.response)||void 0===i?void 0:i.data)||(null===s||void 0===s?void 0:s.message);console.error("\uac8c\uc2dc\uae00 \uc791\uc131 \uc2e4\ud328:",null===s||void 0===s||null===(l=s.response)||void 0===l?void 0:l.status,e),"string"===typeof e&&e.includes("\uae08\uc9c0\ub41c \ub2e8\uc5b4")?alert(e):alert("\uac8c\uc2dc\uae00 \uc791\uc131\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}finally{m(!1)}}else alert("\uc81c\ubaa9\uacfc \ub0b4\uc6a9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694.")},children:[(0,Ko.jsxs)(vg,{"data-show":"true",children:[(0,Ko.jsx)(bg,{children:"\uc81c\ubaa9"}),(0,Ko.jsx)(yg,{placeholder:"\uae00 \uc81c\ubaa9\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694.",value:n,onChange:e=>a(e.target.value),maxLength:120})]}),(0,Ko.jsxs)(wg,{"data-show":"true",children:[(0,Ko.jsx)(kg,{children:"\uce74\ud14c\uace0\ub9ac"}),(0,Ko.jsx)(Sg,{selectCategory:0===e,onClick:()=>t(0),children:"\ud83c\udfe0 \uc790\ucde8"}),(0,Ko.jsx)(Sg,{selectCategory:1===e,onClick:()=>t(1),children:"\u26a1 \ubc88\uac1c"}),(0,Ko.jsx)(Sg,{selectCategory:2===e,onClick:()=>t(2),children:"\ud83c\udf6f\ufe0f \uafc0\ud301"}),(0,Ko.jsx)(Sg,{selectCategory:3===e,onClick:()=>t(3),children:"\ud83c\udf59 \ub808\uc2dc\ud53c"})]}),(0,Ko.jsxs)(jg,{"data-show":"true",children:[(0,Ko.jsx)(Ag,{placeholder:"\uae00 \ub0b4\uc6a9\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694. (\ud574\uc2dc\ud0dc\uadf8\ub294 #\ub85c \uc9c1\uc811 \uc801\uc5b4\ub3c4 \ub418\uace0, \uc544\ub798 \uce69\uc73c\ub85c \ucd94\uac00\ud574\ub3c4 \ub429\ub2c8\ub2e4)",value:o,onChange:e=>i(e.target.value)}),(0,Ko.jsxs)(Mg,{children:[(0,Ko.jsx)(Dg,{children:"\ud574\uc2dc\ud0dc\uadf8"}),(0,Ko.jsx)(Lg,{placeholder:"#\ud0dc\uadf8 \uc785\ub825 \ud6c4 Enter (\uc601\ubb38/\uc22b\uc790/\ud55c\uae00/_)",value:l,onChange:e=>s(e.target.value),onKeyDown:e=>{["Enter"," ","Comma",","].includes(e.key)&&(e.preventDefault(),b(l))},onBlur:()=>b(l)}),c.map((e=>(0,Ko.jsxs)(Ig,{children:[(0,Ko.jsxs)("span",{children:["#",e]}),(0,Ko.jsx)(Bg,{type:"button",onClick:()=>(e=>u((t=>t.filter((t=>t.toLowerCase()!==String(e).toLowerCase())))))(e),children:"\xd7"})]},e)))]}),(0,Ko.jsxs)(Cg,{children:[(0,Ko.jsx)(Eg,{htmlFor:"upload-images",children:"\ud83d\udcce \uc774\ubbf8\uc9c0 \uc120\ud0dd"}),(0,Ko.jsx)(Tg,{id:"upload-images",type:"file",accept:"image/*",multiple:!0,onChange:e=>{const t=Array.from(e.target.files||[]);if(!t.length)return;const n=[];for(const i of t)i.size/1024/1024>10?alert(`\uc774\ubbf8\uc9c0 ${i.name} \uc6a9\ub7c9\uc774 10MB\ub97c \ucd08\uacfc\ud569\ub2c8\ub2e4.`):n.push(i);const r=[...d,...n].slice(0,10),a=[],o=new Set;for(const i of r){const e=`${i.name}-${i.size}`;o.has(e)||(o.add(e),a.push(i))}p(a),e.target.value=""}}),d.length>0&&(0,Ko.jsxs)("span",{className:"count",children:[d.length,"\uac1c \uc120\ud0dd\ub428"]})]}),(0,Ko.jsx)(zg,{children:f.map(((e,t)=>(0,Ko.jsxs)(Pg,{children:[(0,Ko.jsx)("img",{src:e,alt:`preview-${t}`}),(0,Ko.jsx)(Ng,{type:"button",onClick:()=>(e=>p((t=>t.filter(((t,n)=>n!==e)))))(t),children:"\uc81c\uac70"})]},e)))})]}),(0,Ko.jsxs)($g,{"data-show":"true",children:[(0,Ko.jsx)(Rg,{type:"submit",disabled:g,children:g?"\ub4f1\ub85d \uc911...":"\ud83d\ude3d \ub4f1\ub85d"}),(0,Ko.jsx)(Og,{type:"button",onClick:()=>x(-1),disabled:g,children:"\ud83d\ude3d \ucde8\uc18c"})]})]})},Ug=kr`
  0%   { opacity: 0; transform: translateY(10px) scale(.985); }
  60%  { opacity: 1; transform: translateY(0)     scale(1); }
  100% { opacity: 1; transform: translateY(0)     scale(1); }
`,Hg=kr`
  0%,100% { box-shadow: 0 0 0 0 rgba(99,102,241,.0); }
  50%     { box-shadow: 0 0 0 6px rgba(99,102,241,.08); }
`,Wg=kr`
  0%   { opacity: 0; transform: translateY(6px) scale(.985); }
  60%  { opacity: 1; transform: translateY(0)    scale(1.000); }
  100% { opacity: 1; transform: translateY(0)    scale(1.000); }
`,Yg=wr.div`
  --ink: #0f172a;
  --muted: #6b7280;
  --line: #e9e9ec;
  --brand: #6366f1;
  --accent: #8b5cf6;

  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 16px 16px 40px;
  color: var(--ink);

  opacity: 0; transform: translateY(8px);
  &[data-show="true"] { animation: ${Ug} 420ms cubic-bezier(.2,.65,.2,1) both; }

  @media (max-width: 768px) {
    padding: 12px 12px 28px;
  }
`,Vg=wr.div`
  display: grid;
  grid-template-columns: 84px 1fr;
  gap: 12px;
  align-items: center;
  padding: 10px 0 14px;
  border-bottom: 1px solid var(--line);
`,Gg=wr.div`
  font-size: 18px;
  font-weight: 800;
  letter-spacing: .01em;
  color: var(--ink);
`,Qg=wr.input`
  width: 100%;
  height: 54px;
  padding: 0 14px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 14px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  outline: none;
  transition: box-shadow .15s ease, border-color .15s ease;

  &:focus {
    border-color: rgba(99,102,241,.45);
    box-shadow: 0 10px 24px rgba(99,102,241,.12);
    animation: ${Hg} 900ms ease 1;
  }
`,qg=wr.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 14px 0 12px;
`,Kg=wr.div`
  font-size: 16px;
  font-weight: 800;
  color: var(--muted);
  margin-right: 6px;
`,Xg=wr.li`
  list-style: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-width: 92px;
  height: 36px;
  padding: 0 12px;
  border-radius: 999px;

  cursor: pointer;
  user-select: none;

  border: 1px solid
    ${e=>e.selectCategory?"rgba(99,102,241,.45)":"#e5e7eb"};
  color: ${e=>e.selectCategory?"#1e1b4b":"#374151"};
  background: ${e=>e.selectCategory?"linear-gradient(180deg, #edf2ff, #e9ecff)":"#ffffff"};

  transition: transform .02s ease, box-shadow .15s ease, border-color .15s ease, background .15s ease;

  &:hover {
    box-shadow: 0 8px 18px rgba(99,102,241,.16);
    border-color: rgba(99,102,241,.35);
  }
  &:active { transform: translateY(1px); }
`,Zg=wr.div`
  padding: 8px 0 0;
`,Jg=wr.textarea`
  width: 100%;
  min-height: 340px;
  resize: vertical;

  margin-top: 12px;
  padding: 16px;
  font-size: 16px;
  line-height: 1.75;

  border-radius: 16px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  outline: none;

  transition: box-shadow .15s ease, border-color .15s ease;

  &:focus {
    border-color: rgba(99,102,241,.45);
    box-shadow: 0 12px 30px rgba(99,102,241,.12);
    animation: ${Hg} 900ms ease 1;
  }

  @media (max-width: 768px) {
    min-height: 260px;
  }
`,em=wr.div`
  margin-top: 18px;
  font-size: 14px;
  font-weight: 800;
  color: #6b7280;
  letter-spacing: .02em;
`,tm=wr.div`
  margin: 18px 0 6px;
  height: 1px;
  background: #eef2f7;
`,nm=wr.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;

  height: 38px;
  padding: 0 12px;
  border-radius: 999px;

  font-weight: 800;
  font-size: 14px;
  color: #1e1b4b;

  border: 1px solid rgba(99,102,241,.35);
  background: linear-gradient(180deg, #fff, #f6f7ff);

  cursor: pointer;
  transition: transform .02s ease, box-shadow .15s ease, background .15s ease;

  &:hover  { box-shadow: 0 6px 18px rgba(99,102,241,.18); background: #f3f4ff; }
  &:active { transform: translateY(1px); }
`,rm=wr.input`
  display: none;
`,am=wr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 12px;
  margin-top: 8px;
`,om=wr.div`
  position: relative;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 8px 18px rgba(0,0,0,.06);
  animation: ${Wg} 360ms cubic-bezier(.2,.65,.2,1) both;

  img {
    width: 100%;
    height: 120px;
    object-fit: cover;
    display: block;
    filter: ${e=>e.$removed?"grayscale(1) opacity(.6)":"none"};
    transition: filter .15s ease;
  }

  .badge {
    position: absolute;
    left: 8px;
    top: 8px;
    font-size: 12px;
    font-weight: 800;
    padding: 4px 8px;
    border-radius: 999px;
    color: #fff;
    background: #ef4444;
    box-shadow: 0 6px 16px rgba(239,68,68,.25);
  }
`,im=wr.button`
  position: absolute;
  right: 8px;
  top: 8px;

  height: 28px;
  padding: 0 8px;
  border: none;
  border-radius: 8px;

  font-size: 12px;
  font-weight: 800;
  color: #fff;

  background: rgba(17,24,39,.78);
  cursor: pointer;
  transition: opacity .15s ease, transform .02s ease;

  &:hover { opacity: .92; }
  &:active { transform: translateY(1px); }
`,lm=wr.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 14px;
`,sm="\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n\n  min-width: 120px;\n  height: 44px;\n  padding: 0 16px;\n\n  font-size: 15px;\n  font-weight: 800;\n  letter-spacing: .01em;\n\n  border-radius: 12px;\n  cursor: pointer;\n  transition: transform .02s ease, filter .15s ease, box-shadow .15s ease;\n  border: 1px solid transparent;\n\n  &:active { transform: translateY(1px); }\n  &:disabled { opacity: .55; cursor: not-allowed; box-shadow: none; }\n",cm=wr.button`
  ${sm}
  color: #fff;
  background: linear-gradient(180deg, #5a67ff, #3f51ff);
  box-shadow: 0 10px 22px rgba(63,81,255,.22), 0 1px 0 rgba(0,0,0,.06);

  &:hover { filter: brightness(1.03); box-shadow: 0 14px 26px rgba(63,81,255,.28); }
`,um=wr.button`
  ${sm}
  background: #ffffff;
  color: #1f2937;
  border-color: #e5e7eb;

  &:hover { filter: brightness(1.02); box-shadow: 0 8px 18px rgba(0,0,0,.10); }
`,dm=/#([0-9A-Za-z\uac00-\ud7a3_]{1,20})/g;const pm=wr.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 0 16px;
`,fm=wr.div`
  font-size: 14px;
  color: #374151;
  min-width: 64px;
`,hm=wr.input`
  flex: 1;
  min-width: 200px;
  height: 38px;
  padding: 0 12px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  outline: none;
  &:focus { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,.15); }
`,gm=wr.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid #e5e7eb;
  background: #f9fafb;
  color: #111827;
  font-size: 13px;
`,mm=wr.button`
  border: 0;
  background: transparent;
  color: #ef4444;
  cursor: pointer;
  padding: 0 2px;
  line-height: 1;
`,xm=()=>{const e=te(),{no:t}=ne(),[n,a]=(0,r.useState)(""),[o,i]=(0,r.useState)(""),[l,s]=(0,r.useState)(0),[c,u]=(0,r.useState)(!0),[d,p]=(0,r.useState)(!1),[f,h]=(0,r.useState)([]),[g,m]=(0,r.useState)(new Set),[x,v]=(0,r.useState)([]),[b,y]=(0,r.useState)([]),[w,k]=(0,r.useState)(""),[S,j]=(0,r.useState)([]),A=Nr.get("accessToken");(0,r.useEffect)((()=>{A||(alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \uae30\ub2a5\uc785\ub2c8\ub2e4."),e("/login"))}),[A,e]),(0,r.useEffect)((()=>{let e=!0;return u(!0),qo.get(`https://api.stackflov.com/boards/${t}`,{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((t=>{var n,r,o,l;if(!e)return;const c=null!==(n=t.data)&&void 0!==n?n:{};a(null!==(r=c.title)&&void 0!==r?r:"");const u=null!==(o=c.content)&&void 0!==o?o:"",d=new Set;let p;for(;p=dm.exec(u);)d.add(p[1]);var f;j(Array.from(d)),i((f=u)?f.replace(dm,"").replace(/[ \t]{2,}/g," ").replace(/\n{3,}/g,"\n\n").trim():"");const g=Number(null!==(l=c.category)&&void 0!==l?l:0);s([0,1,2,3].includes(g)?g:0),h(Array.isArray(c.imageUrls)?c.imageUrls:[])})).catch((e=>{console.error("\uac8c\uc2dc\uae00 \uc870\ud68c \uc2e4\ud328:",(null===e||void 0===e?void 0:e.response)||e),alert("\uac8c\uc2dc\uae00\uc744 \ubd88\ub7ec\uc624\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4.")})).finally((()=>e&&u(!1))),()=>{e=!1}}),[t]);(0,r.useEffect)((()=>{const e=x.map((e=>URL.createObjectURL(e)));return y(e),()=>e.forEach((e=>URL.revokeObjectURL(e)))}),[x]);const C=(0,r.useMemo)((()=>g.size),[g]),E=e=>{const t=function(e){if(!e)return"";let t=String(e).trim();return t?(t=t.replace(/^#+/,""),t=t.replace(/\s+/g,""),t=t.replace(/[^0-9A-Za-z\uac00-\ud7a3_]/g,""),t.slice(0,20)):""}(e);t?(j((e=>{const n=new Set(e.map((e=>e.toLowerCase())));return n.has(t.toLowerCase())?e:[...e,t]})),k("")):k("")},T=(0,r.useMemo)((()=>{const e=new Set;if(!o)return e;let t;for(;t=dm.exec(o);)e.add(t[1]);return e}),[o]);return(0,Ko.jsxs)(Yg,{"data-show":!c,children:[(0,Ko.jsxs)(Vg,{children:[(0,Ko.jsx)(Gg,{children:"\uc81c\ubaa9"}),(0,Ko.jsx)(Qg,{placeholder:"\uae00 \uc81c\ubaa9\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694.",value:n,onChange:e=>a(e.target.value),maxLength:120})]}),(0,Ko.jsxs)(qg,{children:[(0,Ko.jsx)(Kg,{children:"\uce74\ud14c\uace0\ub9ac"}),(0,Ko.jsx)(Xg,{role:"button",tabIndex:0,selectCategory:0===l,onClick:()=>s(0),onKeyDown:e=>"Enter"===e.key&&s(0),"aria-pressed":0===l,children:"\ud83c\udfe0 \uc790\ucde8"}),(0,Ko.jsx)(Xg,{role:"button",tabIndex:0,selectCategory:1===l,onClick:()=>s(1),onKeyDown:e=>"Enter"===e.key&&s(1),"aria-pressed":1===l,children:"\u26a1 \ubc88\uac1c"}),(0,Ko.jsx)(Xg,{role:"button",tabIndex:0,selectCategory:2===l,onClick:()=>s(2),onKeyDown:e=>"Enter"===e.key&&s(2),"aria-pressed":2===l,children:"\ud83c\udf6f\ufe0f \uafc0\ud301"}),(0,Ko.jsx)(Xg,{role:"button",tabIndex:0,selectCategory:3===l,onClick:()=>s(3),onKeyDown:e=>"Enter"===e.key&&s(3),"aria-pressed":3===l,children:"\ud83c\udf59 \ub808\uc2dc\ud53c"})]}),(0,Ko.jsxs)(Zg,{children:[(0,Ko.jsx)(Jg,{placeholder:"\uae00 \ub0b4\uc6a9\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694. (\ud574\uc2dc\ud0dc\uadf8\ub294 \uc544\ub798 \uce69\uc5d0\uc11c \uad00\ub9ac\ub429\ub2c8\ub2e4)",value:o,onChange:e=>i(e.target.value)}),(0,Ko.jsx)(tm,{}),(0,Ko.jsx)(em,{children:"\ud574\uc2dc\ud0dc\uadf8"}),(0,Ko.jsxs)(pm,{children:[(0,Ko.jsx)(fm,{children:"\ud574\uc2dc\ud0dc\uadf8"}),(0,Ko.jsx)(hm,{placeholder:"#\ud0dc\uadf8 \uc785\ub825 \ud6c4 Enter (\uc601\ubb38/\uc22b\uc790/\ud55c\uae00/_)",value:w,onChange:e=>k(e.target.value),onKeyDown:e=>{["Enter"," ","Comma",","].includes(e.key)&&(e.preventDefault(),E(w))},onBlur:()=>E(w),maxLength:20}),S.map((e=>(0,Ko.jsxs)(gm,{children:[(0,Ko.jsxs)("span",{children:["#",e]}),(0,Ko.jsx)(mm,{type:"button",onClick:()=>(e=>j((t=>t.filter((t=>t.toLowerCase()!==String(e).toLowerCase())))))(e),children:"\xd7"})]},e)))]}),(0,Ko.jsx)(tm,{}),(0,Ko.jsx)(em,{children:"\uae30\uc874 \uc774\ubbf8\uc9c0 (\ud074\ub9ad\ud558\uc5ec \uc81c\uac70/\ucde8\uc18c)"}),(0,Ko.jsxs)(am,{children:[0===f.length&&(0,Ko.jsx)("div",{style:{color:"#6b7280",fontSize:14},children:"\ub4f1\ub85d\ub41c \uc774\ubbf8\uc9c0\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."}),f.map(((e,t)=>{const n=g.has(e);return(0,Ko.jsxs)(om,{$removed:n,onClick:()=>(e=>{m((t=>{const n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n}))})(e),title:n?"\uc0ad\uc81c \ucde8\uc18c":"\uc0ad\uc81c \uc608\uc815",children:[(0,Ko.jsx)("img",{src:e,alt:`existing-${t}`}),n&&(0,Ko.jsx)("span",{className:"badge",children:"\uc0ad\uc81c \uc608\uc815"})]},e+t)}))]}),(0,Ko.jsxs)(em,{style:{marginTop:18},children:["\uc0c8 \uc774\ubbf8\uc9c0 \ucd94\uac00 ",x.length>0?`(${x.length}\uac1c)`:""]}),(0,Ko.jsx)(nm,{htmlFor:"update-upload",children:"\ud83d\udcce \uc774\ubbf8\uc9c0 \uc120\ud0dd"}),(0,Ko.jsx)(rm,{id:"update-upload",type:"file",accept:"image/*",multiple:!0,onChange:e=>{const t=Array.from(e.target.files||[]);if(!t.length)return;const n=[];for(const o of t){o.size/1024/1024>10?alert(`\uc774\ubbf8\uc9c0 ${o.name} \uc6a9\ub7c9\uc774 10MB\ub97c \ucd08\uacfc\ud569\ub2c8\ub2e4.`):n.push(o)}const r=new Set(x.map((e=>`${e.name}-${e.size}`))),a=[...x];for(const o of n){const e=`${o.name}-${o.size}`;r.has(e)||(r.add(e),a.push(o))}v(a.slice(0,10)),e.target.value=""}}),(0,Ko.jsx)(am,{style:{marginTop:8},children:b.map(((e,t)=>(0,Ko.jsxs)(om,{$removable:!0,children:[(0,Ko.jsx)("img",{src:e,alt:`new-${t}`}),(0,Ko.jsx)(im,{type:"button",onClick:()=>(e=>{v((t=>t.filter(((t,n)=>n!==e))))})(t),children:"\uc81c\uac70"})]},e)))})]}),(0,Ko.jsxs)(lm,{children:[(0,Ko.jsx)(cm,{type:"button",onClick:async r=>{if(r.preventDefault(),!d)if(n.trim()&&o.trim()){p(!0);try{const r=new Set(S.map((e=>e.toLowerCase()))),a=new Set(Array.from(T).map((e=>e.toLowerCase()))),i=Array.from(new Set([...r,...a]));let s=o.trim();if(i.length){s=`${s}\n\n${i.map((e=>`#${e}`)).join(" ")}`.trim()}const c={title:n.trim(),content:s,category:Number(l),removeImageUrls:Array.from(g)},u=new FormData;u.append("data",new Blob([JSON.stringify(c)],{type:"application/json"}));for(const e of x)u.append("images",e);await qo.put(`https://api.stackflov.com/boards/${t}`,u,{headers:{Authorization:`Bearer ${A}`},withCredentials:!0}),e(`/trace/detail/${t}`)}catch(s){var a,i;console.error("\uac8c\uc2dc\uae00 \uc218\uc815 \uc2e4\ud328:",null===s||void 0===s||null===(a=s.response)||void 0===a?void 0:a.status,(null===s||void 0===s||null===(i=s.response)||void 0===i?void 0:i.data)||(null===s||void 0===s?void 0:s.message)),alert("\uc218\uc815\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}finally{p(!1)}}else alert("\uc81c\ubaa9\uacfc \ub0b4\uc6a9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694.")},disabled:d,"aria-busy":d,title:C?`\uc0ad\uc81c \uc608\uc815 ${C}\uac1c, \uc0c8 \uc774\ubbf8\uc9c0 ${x.length}\uac1c`:`\uc0c8 \uc774\ubbf8\uc9c0 ${x.length}\uac1c`,children:d?"\uc218\uc815 \uc911...":"\ud83d\ude3d \uc218\uc815"}),(0,Ko.jsx)(um,{type:"button",onClick:()=>e(`/trace/detail/${t}`),disabled:d,children:"\ucde8\uc18c"})]})]})},vm=qo.create({baseURL:"https://api.stackflov.com"});vm.interceptors.request.use((e=>{const t=Nr.get("accessToken");return t&&(e.headers.Authorization=`Bearer ${t}`),e}));const bm=vm,ym=wr.div`
  max-width: 1200px;        /* ✅ 요구사항: 고정 1100px */
  margin: 0 auto;
  padding: 16px;
`,wm=wr.div`
  margin-bottom: 12px;
`,km=wr.h2`
  margin: 0 0 4px;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.2px;
`,Sm=wr.p`
  margin: 0;
  color: #6b7280;
  font-size: 14px;
`,jm=wr.div`
  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #fff;
  margin-bottom: 16px;
`,Am=wr.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
`,Cm=wr.select`
  height: 40px;
  padding: 0 10px;
  border: 1.5px solid #d1d5db;
  border-radius: 10px;
  background: #fff;
`,Em=wr.input`
  flex: 1 1 360px;
  min-width: 240px;
  height: 40px;
  padding: 0 12px;
  border: 1.5px solid #d1d5db;
  border-radius: 10px;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
  }
`,Tm=wr.div`
  flex: 1 1 auto;
`,zm=wr.button`
  height: 40px;
  padding: 0 14px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.05s ease, background 0.15s ease, opacity 0.15s ease;
  &:active { transform: translateY(1px); }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`,Pm=wr(zm)`
  color: #fff;
  background: #111827;
  border: 1px solid #111827;
  &:hover:not(:disabled) { background: #0b1220; }
`,Nm=wr(zm)`
  color: #111827;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  &:hover:not(:disabled) { background: #eef2f7; }
`,$m=wr(zm)`
  color: #111827;
  background: #fff;
  border: 1px solid #e5e7eb;
  &:hover:not(:disabled) { background: #f3f4f6; }
`,Rm=wr(zm)`
  color: #b91c1c;
  background: #fff;
  border: 1px solid #fecaca;
  &:hover:not(:disabled) { background: #fee2e2; }
`,Om=wr.th`
  text-align: left;
  padding: 12px 10px;
  color: #6b7280;
  font-size: 13px;
  border-bottom: 1px solid #eef2f7;
  ${e=>e.w&&vr`width: ${e.w}px;`};
`,_m=wr.td`
  padding: 12px 10px;
  border-top: 1px solid #f3f4f6;
  vertical-align: middle;
  ${e=>e.w&&vr`width: ${e.w}px;`};
  ${e=>e.ellipsis&&vr`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `};
  ${e=>e.mono&&vr`
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                 'Liberation Mono', 'Courier New', monospace;
  `};
`,Mm=wr.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  ${e=>"success"===e.type&&vr`
    color: #065f46; background: #d1fae5; border: 1px solid #a7f3d0;
  `};
  ${e=>"danger"===e.type&&vr`
    color: #991b1b; background: #fee2e2; border: 1px solid #fecaca;
  `};
`,Dm=wr.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,Lm=wr.div`
  margin-top: 12px;
  display: flex;
  gap: 8px;
  align-items: center;
`,Im=wr.span`
  color: #6b7280;
  font-size: 14px;
`,Bm=wr.div`
  padding: 12px 0;
  color: #dc2626;
`,Fm=wr.div`
  padding: 12px 0;
  color: #374151;
`,Um=wr.div`
  padding: 48px 12px;
  text-align: center;
  color: #6b7280;
  border: 1px dashed #e5e7eb;
  border-radius: 12px;
  background: #fafafa;
`,Hm=wr.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  overflow-x: auto;      /* ← 추가 */
`,Wm=wr.table`
  width: 100%;
  min-width: 880px;      /* ← 너무 줄어들지 않게 안전폭 */
  border-collapse: separate;
  border-spacing: 0;
  table-layout: fixed;   /* ← ellipsis 잘 동작 & 균등 배치 */
`,Ym=wr.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,Vm=wr.div`
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  background: #fff;
  transition: transform .06s ease, box-shadow .15s ease, border-color .15s ease;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 14px rgba(0,0,0,.06);
    border-color: #e3e6ef;
  }

  ${e=>e.$warn&&vr`
    border-color: #ffe4e6;
    background: #fff1f2;
    &:hover {
      box-shadow: 0 6px 14px rgba(244,63,94,.12);
      border-color: #fecdd3;
    }
  `}
`,Gm=wr.div`
  color: #6b7280;
  font-size: 14px;
  font-weight: 700;
`,Qm=wr.div`
  margin-top: 4px;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -0.3px;
  color: #111827;
`,qm=wr.div`
  margin-top: 24px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`,Km=wr(ze)`
  height: 40px;
  padding: 0 14px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  color: #111827;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  text-decoration: none;
  transition: background .15s ease, transform .06s ease, border-color .15s ease;
  &:hover {
    background: #eef2f7;
    transform: translateY(-1px);
    border-color: #e3e6ef;
  }
`,Xm=(wr.div`
  margin-top: 18px;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 1px 0 rgba(17,24,39,0.02);
`,wr.div`
  font-weight: 800;
  font-size: 16px;
  letter-spacing: -0.2px;
  color: #111827;
  margin-bottom: 8px;
`,e=>"number"===typeof e?e.toLocaleString():"-");function Zm(){const[e,t]=(0,r.useState)(null),[n,a]=(0,r.useState)(!0),[o,i]=(0,r.useState)(null);if((0,r.useEffect)((()=>{let e=!0;return a(!0),i(null),bm.get("/admin/dashboard/stats").then((n=>{let{data:r}=n;e&&t(r||{})})).catch((t=>{var n,r;e&&i((null===t||void 0===t||null===(n=t.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.message)||t.message||"\ubd88\ub7ec\uc624\uae30 \uc2e4\ud328")})).finally((()=>{e&&a(!1)})),()=>{e=!1}}),[]),n)return(0,Ko.jsx)(ym,{children:"\ub300\uc2dc\ubcf4\ub4dc \ubd88\ub7ec\uc624\ub294 \uc911\u2026"});if(o)return(0,Ko.jsxs)(ym,{style:{color:"#c00"},children:["\uc624\ub958: ",String(o)]});const{totalUsers:l,activeUsers:s,totalBoards:c,totalComments:u,totalReports:d,pendingReports:p,todayNewUsers:f,todayNewBoards:h}=e||{};return(0,Ko.jsxs)(ym,{children:[(0,Ko.jsxs)(wm,{children:[(0,Ko.jsx)(km,{children:"\uad00\ub9ac\uc790 \ub300\uc2dc\ubcf4\ub4dc"}),(0,Ko.jsx)(Sm,{children:"\ud575\uc2ec \uc9c0\ud45c \uc694\uc57d\uacfc \ube60\ub978 \uc774\ub3d9 \ub9c1\ud06c"})]}),(0,Ko.jsxs)(Ym,{children:[(0,Ko.jsx)(Jm,{title:"\ucd1d \uc0ac\uc6a9\uc790",value:Xm(l),to:"/admin/users"}),(0,Ko.jsx)(Jm,{title:"\ud65c\uc131 \uc0ac\uc6a9\uc790",value:Xm(s)}),(0,Ko.jsx)(Jm,{title:"\uac8c\uc2dc\ubb3c \uc218",value:Xm(c),to:"/admin/boards"}),(0,Ko.jsx)(Jm,{title:"\ub313\uae00 \uc218",value:Xm(u)})]}),(0,Ko.jsxs)(Ym,{style:{marginTop:16},children:[(0,Ko.jsx)(Jm,{title:"\uc2e0\uace0 \ucd1d\ud569",value:Xm(d),to:"/admin/reports"}),(0,Ko.jsx)(Jm,{title:"\ub300\uae30 \uc911 \uc2e0\uace0",value:Xm(p),to:"/admin/reports",warn:!0}),(0,Ko.jsx)(Jm,{title:"\uc624\ub298 \uc2e0\uaddc",value:`\uc720\uc800 ${Xm(f)} / \uae00 ${Xm(h)}`})]}),(0,Ko.jsxs)(qm,{children:[(0,Ko.jsx)(Km,{to:"/admin/users",children:"\uc0ac\uc6a9\uc790 \uad00\ub9ac"}),(0,Ko.jsx)(Km,{to:"/admin/boards",children:"\uac8c\uc2dc\ubb3c \uad00\ub9ac"}),(0,Ko.jsx)(Km,{to:"/admin/reports",children:"\uc2e0\uace0 \uad00\ub9ac"}),(0,Ko.jsx)(Km,{to:"/admin/banned-words",children:"\uae08\uc9c0\uc5b4 \uad00\ub9ac"}),(0,Ko.jsx)(Km,{to:"/admin/dashboard/detailed",children:"\uc0c1\uc138 \ud1b5\uacc4"}),(0,Ko.jsx)(Km,{to:"/admin/notices",children:"\uacf5\uc9c0 \uad00\ub9ac"})]})]})}function Jm(e){let{title:t,value:n,to:r,warn:a}=e;const o=(0,Ko.jsxs)(Vm,{$warn:a,children:[(0,Ko.jsx)(Gm,{children:t}),(0,Ko.jsx)(Qm,{children:n})]});return r?(0,Ko.jsx)(ze,{to:r,style:{textDecoration:"none"},children:o}):o}const ex=e=>{var t,n,r,a,o,i,l;return null!==(t=null!==(n=null!==(r=null!==(a=null!==(o=null!==(i=null===e||void 0===e?void 0:e.id)&&void 0!==i?i:null===e||void 0===e?void 0:e.boardId)&&void 0!==o?o:null===e||void 0===e?void 0:e.board_id)&&void 0!==a?a:null===e||void 0===e?void 0:e.boardNo)&&void 0!==r?r:null===e||void 0===e?void 0:e.no)&&void 0!==n?n:null===e||void 0===e||null===(l=e.board)||void 0===l?void 0:l.id)&&void 0!==t?t:null};function tx(){var e;const t=ne(),[n]=$e(),a=t.userId||n.get("userId"),[o,i]=(0,r.useState)([]),[l,s]=(0,r.useState)({totalPages:0,number:0,first:!0,last:!0}),[c,u]=(0,r.useState)(0),[d,p]=(0,r.useState)(!1),[f,h]=(0,r.useState)(null),[g,m]=(0,r.useState)(null),x=(0,r.useMemo)((()=>({page:c,size:10})),[c]),v=async()=>{if(a){p(!0),h(null);try{var e,t,n,r;const{data:o}=await bm.get(`/admin/users/${a}/boards`,{params:x}),l=Array.isArray(null===o||void 0===o?void 0:o.content)?o.content:[];i(l),s({totalPages:null!==(e=null===o||void 0===o?void 0:o.totalPages)&&void 0!==e?e:1,number:null!==(t=null===o||void 0===o?void 0:o.number)&&void 0!==t?t:c,first:null!==(n=null===o||void 0===o?void 0:o.first)&&void 0!==n?n:0===c,last:null!==(r=null===o||void 0===o?void 0:o.last)&&void 0!==r?r:null===o||void 0===o||!o.totalPages||c>=o.totalPages-1})}catch(lw){var o,l;h((null===lw||void 0===lw||null===(o=lw.response)||void 0===o||null===(l=o.data)||void 0===l?void 0:l.message)||lw.message||"\ubd88\ub7ec\uc624\uae30 \uc2e4\ud328")}finally{p(!1)}}};(0,r.useEffect)((()=>{v()}),[a,x]);const b=te();return(0,Ko.jsxs)(ym,{children:[(0,Ko.jsxs)(wm,{children:[(0,Ko.jsx)(km,{children:"\uc0ac\uc6a9\uc790\ubcc4 \uac8c\uc2dc\uae00"}),(0,Ko.jsxs)(Sm,{children:["\uc120\ud0dd \uc0ac\uc6a9\uc790(",(0,Ko.jsx)("b",{children:null!==a&&void 0!==a?a:"-"}),")\uc758 \uac8c\uc2dc\uae00 \uc0c1\ud0dc\ub97c \uc870\ud68c/\uad00\ub9ac\ud569\ub2c8\ub2e4."]})]}),(0,Ko.jsx)(jm,{children:(0,Ko.jsxs)(Am,{children:[(0,Ko.jsx)(Nm,{onClick:()=>b("/admin/users"),children:"\uc0ac\uc6a9\uc790 \ubaa9\ub85d\uc73c\ub85c"}),(0,Ko.jsx)(Pm,{onClick:v,children:"\uc0c8\ub85c\uace0\uce68"})]})}),d&&(0,Ko.jsx)(Fm,{children:"\ubd88\ub7ec\uc624\ub294 \uc911\u2026"}),f&&(0,Ko.jsxs)(Bm,{children:["\uc624\ub958: ",String(f)]}),!d&&!f&&(0===o.length?(0,Ko.jsx)(Um,{children:"\uacb0\uacfc \uc5c6\uc74c"}):(0,Ko.jsxs)(Ko.Fragment,{children:[(0,Ko.jsx)(Hm,{children:(0,Ko.jsxs)(Wm,{children:[(0,Ko.jsx)("thead",{children:(0,Ko.jsxs)("tr",{children:[(0,Ko.jsx)(Om,{children:"\uc81c\ubaa9"}),(0,Ko.jsx)(Om,{w:140,children:"\uc0c1\ud0dc"}),(0,Ko.jsx)(Om,{w:180,children:"\uc791\uc131\uc77c"}),(0,Ko.jsx)(Om,{w:260,children:"\uc561\uc158"})]})}),(0,Ko.jsx)("tbody",{children:o.map((e=>{const t=ex(e),n=(e=>{var t,n;return!1!==(null!==(t=null!==(n=null===e||void 0===e?void 0:e.active)&&void 0!==n?n:null===e||void 0===e?void 0:e.isActive)&&void 0!==t?t:"ACTIVE"===(null===e||void 0===e?void 0:e.status))})(e),r=(e=>{var t,n,r;return null!==(t=null!==(n=null!==(r=null===e||void 0===e?void 0:e.title)&&void 0!==r?r:null===e||void 0===e?void 0:e.subject)&&void 0!==n?n:null===e||void 0===e?void 0:e.name)&&void 0!==t?t:""})(e),a=(e=>{var t,n,r;return null!==(t=null!==(n=null!==(r=null===e||void 0===e?void 0:e.createdAt)&&void 0!==r?r:null===e||void 0===e?void 0:e.created_at)&&void 0!==n?n:null===e||void 0===e?void 0:e.created_date)&&void 0!==t?t:null})(e);return(0,Ko.jsxs)("tr",{children:[(0,Ko.jsx)(_m,{title:r,ellipsis:!0,children:r}),(0,Ko.jsx)(_m,{w:140,children:n?(0,Ko.jsx)(Mm,{type:"success",children:"ACTIVE"}):(0,Ko.jsx)(Mm,{type:"danger",children:"INACTIVE"})}),(0,Ko.jsx)(_m,{w:180,children:(o=a,o?String(o).slice(0,10):"-")}),(0,Ko.jsx)(_m,{w:260,children:(0,Ko.jsx)(Dm,{children:n?(0,Ko.jsx)($m,{disabled:g===t,onClick:()=>(async e=>{const t=ex(e);if(!t)return alert("\uac8c\uc2dc\uae00 ID\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.");if(window.confirm(`\uac8c\uc2dc\uae00 #${t} \uc744(\ub97c) \ube44\ud65c\uc131\ud654\ud560\uae4c\uc694?`)){m(t);try{await bm.delete(`/admin/boards/${encodeURIComponent(t)}`),await v()}catch(lw){var n,r;alert(`\ube44\ud65c\uc131\ud654 \uc2e4\ud328: ${(null===lw||void 0===lw||null===(n=lw.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.message)||lw.message}`)}finally{m(null)}}})(e),children:g===t?"\ucc98\ub9ac \uc911\u2026":"\ube44\ud65c\uc131\ud654"}):(0,Ko.jsx)(Pm,{disabled:g===t,onClick:()=>(async e=>{const t=ex(e);if(!t)return alert("\uac8c\uc2dc\uae00 ID\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.");if(window.confirm(`\uac8c\uc2dc\uae00 #${t} \uc744(\ub97c) \ubcf5\uad6c\ud560\uae4c\uc694?`)){m(t);try{await bm.put(`/admin/content/board/${encodeURIComponent(t)}/reactivate`),await v()}catch(lw){var n,r;alert(`\ubcf5\uad6c \uc2e4\ud328: ${(null===lw||void 0===lw||null===(n=lw.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.message)||lw.message}`)}finally{m(null)}}})(e),children:g===t?"\ucc98\ub9ac \uc911\u2026":"\ubcf5\uad6c"})})})]},null!==t&&void 0!==t?t:r);var o}))})]})}),(0,Ko.jsxs)(Lm,{children:[(0,Ko.jsx)($m,{disabled:l.first,onClick:()=>u((e=>Math.max(0,e-1))),children:"\uc774\uc804"}),(0,Ko.jsxs)(Im,{children:[(null!==(e=l.number)&&void 0!==e?e:c)+1," / ",l.totalPages]}),(0,Ko.jsx)($m,{disabled:l.last,onClick:()=>u((e=>e+1)),children:"\ub2e4\uc74c"})]})]}))]})}function nx(e){var t;let{user:n,onClose:a}=e;const{userId:o}=ne(),i=null!==(t=null===n||void 0===n?void 0:n.id)&&void 0!==t?t:o?Number(o):void 0,l=(null===n||void 0===n?void 0:n.email)||(null===n||void 0===n?void 0:n.name)||i||"-",s=!!a,[c,u]=(0,r.useState)([]),[d,p]=(0,r.useState)(""),[f,h]=(0,r.useState)(!1),[g,m]=(0,r.useState)(!1),[x,v]=(0,r.useState)(null),[b,y]=(0,r.useState)(null),[w,k]=(0,r.useState)(""),[S,j]=(0,r.useState)(!1),A=e=>{var t,n,r,a,o,i,l,s,c,u,d,p,f;const h=null!==(t=null!==(n=null!==(r=null!==(a=null===e||void 0===e?void 0:e.id)&&void 0!==a?a:null===e||void 0===e?void 0:e.memoId)&&void 0!==r?r:null===e||void 0===e?void 0:e.noteId)&&void 0!==n?n:null===e||void 0===e?void 0:e.adminNoteId)&&void 0!==t?t:null===e||void 0===e?void 0:e.admin_note_id,g=null!==(o=null!==(i=null!==(l=null===e||void 0===e?void 0:e.content)&&void 0!==l?l:null===e||void 0===e?void 0:e.message)&&void 0!==i?i:null===e||void 0===e?void 0:e.memo)&&void 0!==o?o:"",m=null!==(s=null!==(c=null!==(u=null===e||void 0===e?void 0:e.adminEmail)&&void 0!==u?u:null===e||void 0===e?void 0:e.authorEmail)&&void 0!==c?c:null===e||void 0===e||null===(d=e.admin)||void 0===d?void 0:d.email)&&void 0!==s?s:"-",x=null!==(p=null!==(f=null===e||void 0===e?void 0:e.createdAt)&&void 0!==f?f:null===e||void 0===e?void 0:e.created_at)&&void 0!==p?p:"-";return{...e,_id:h,_content:g,_adminEmail:m,_createdAt:x}},C=async()=>{if(i){h(!0),v(null);try{const{data:e}=await bm.get(`/admin/users/${i}/memos`),t=Array.isArray(e)?e:[];u(t.map(A))}catch(lw){var e,t;v((null===lw||void 0===lw||null===(e=lw.response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||lw.message||"\ubd88\ub7ec\uc624\uae30 \uc2e4\ud328")}finally{h(!1)}}},E=()=>{y(null),k("")},T=async()=>{if(!i)return alert("userId\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.");if(!b)return alert("memoId\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.");const e=w.trim();if(!e)return alert("\uc218\uc815\ud560 \ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694.");j(!0);try{await bm.put(`/admin/users/${i}/memos/${b}`,{content:e}),y(null),k(""),await C()}catch(lw){var t,n;alert(`\uc218\uc815 \uc2e4\ud328: ${(null===lw||void 0===lw||null===(t=lw.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)||lw.message}`)}finally{j(!1)}};(0,r.useEffect)((()=>{C()}),[i]);const z=s?a:()=>window.history.back(),P=(0,Ko.jsxs)(ym,{style:{maxWidth:s?760:1100,padding:s?8:16},children:[(0,Ko.jsxs)(wm,{style:{marginBottom:8},children:[(0,Ko.jsx)(km,{children:"\uc6b4\uc601 \uba54\ubaa8"}),(0,Ko.jsxs)(Sm,{children:["\ub300\uc0c1: ",(0,Ko.jsx)("b",{children:l})]})]}),(0,Ko.jsx)(jm,{children:(0,Ko.jsxs)(Am,{style:{alignItems:"flex-start"},children:[(0,Ko.jsx)(ox,{rows:3,value:d,onChange:e=>p(e.target.value),placeholder:"\uba54\ubaa8\ub97c \uc785\ub825\ud558\uc138\uc694"}),(0,Ko.jsx)(Pm,{onClick:async()=>{const e=d.trim();if(!e)return alert("\uba54\ubaa8 \ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694.");if(!i)return alert("userId\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.");m(!0);try{await bm.post(`/admin/users/${i}/memos`,{content:e}),p(""),await C()}catch(lw){var t,n;alert(`\ub4f1\ub85d \uc2e4\ud328: ${(null===lw||void 0===lw||null===(t=lw.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)||lw.message}`)}finally{m(!1)}},disabled:g,children:g?"\ub4f1\ub85d \uc911\u2026":"\uba54\ubaa8 \ub4f1\ub85d"}),(0,Ko.jsx)(Nm,{onClick:C,children:"\uc0c8\ub85c\uace0\uce68"}),(0,Ko.jsx)($m,{onClick:z,children:"\ub2eb\uae30"})]})}),f&&(0,Ko.jsx)(Fm,{children:"\ubd88\ub7ec\uc624\ub294 \uc911\u2026"}),x&&(0,Ko.jsxs)(Bm,{children:["\uc624\ub958: ",String(x)]}),!f&&!x&&(0===c.length?(0,Ko.jsx)(Um,{children:"\uba54\ubaa8 \uc5c6\uc74c"}):(0,Ko.jsx)(ix,{children:c.map((e=>{var t,n;const r=b===e._id;return(0,Ko.jsxs)(lx,{children:[(0,Ko.jsxs)(sx,{children:[(0,Ko.jsxs)(cx,{children:[(0,Ko.jsxs)(ux,{children:["#",null!==(n=e._id)&&void 0!==n?n:"?"]}),(0,Ko.jsxs)("span",{children:["\xb7 \uc791\uc131\uc790: ",e._adminEmail]}),(0,Ko.jsx)(dx,{children:"\xb7"}),(0,Ko.jsx)("span",{children:String(e._createdAt).slice(0,10)})]}),!r&&(0,Ko.jsxs)(px,{children:[(0,Ko.jsx)($m,{onClick:()=>(e=>{y(e._id),k(e._content||"")})(e),children:"\uc218\uc815"}),(0,Ko.jsx)(Rm,{onClick:()=>(async e=>{if(!i)return alert("userId\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.");if(!e)return alert("memoId\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.");if(window.confirm(`\uba54\ubaa8 #${e} \ub97c \uc0ad\uc81c\ud560\uae4c\uc694?`))try{await bm.delete(`/admin/users/${i}/memos/${e}`),await C()}catch(lw){var t,n;alert(`\uc0ad\uc81c \uc2e4\ud328: ${(null===lw||void 0===lw||null===(t=lw.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)||lw.message}`)}})(e._id),children:"\uc0ad\uc81c"})]})]}),r?(0,Ko.jsxs)(Ko.Fragment,{children:[(0,Ko.jsx)(ox,{rows:4,value:w,onChange:e=>k(e.target.value)}),(0,Ko.jsxs)(Am,{style:{marginTop:8},children:[(0,Ko.jsx)(Pm,{onClick:T,disabled:S,children:S?"\uc800\uc7a5 \uc911\u2026":"\uc800\uc7a5"}),(0,Ko.jsx)(Nm,{onClick:E,disabled:S,children:"\ucde8\uc18c"})]})]}):(0,Ko.jsx)(fx,{children:e._content})]},null!==(t=e._id)&&void 0!==t?t:Math.random())}))}))]});return s?(0,Ko.jsx)(rx,{onClick:z,children:(0,Ko.jsx)(ax,{onClick:e=>e.stopPropagation(),children:P})}):(0,Ko.jsx)("div",{style:{padding:0},children:P})}const rx=wr.div`
  position: fixed;
  inset: 0;
  background: rgba(10, 15, 25, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,ax=wr.div`
  width: min(760px, 92vw);
  max-height: 86vh;
  overflow: auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.35);
`,ox=wr.textarea`
  flex: 1 1 520px;
  min-height: 96px;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 14px;
  line-height: 1.5;
  resize: vertical;
  outline: none;
  transition: border-color .15s ease, box-shadow .15s ease;
  &:focus {
    border-color: #94a3b8;
    box-shadow: 0 0 0 3px rgba(148,163,184,.25);
  }
`,ix=wr.div`
  display: grid;
  gap: 10px;
`,lx=wr.div`
  background: #fff;
  border: 1px solid #eef2f7;
  border-radius: 12px;
  padding: 12px;
`,sx=wr.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 8px;
  margin-bottom: 8px;
  color: #475569;
  font-size: 13px;
`,cx=wr.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
`,ux=wr.span`
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  color: #64748b;
`,dx=wr.span`
  color: #cbd5e1;
`,px=wr.div`
  display: flex;
  gap: 6px;
`,fx=wr.div`
  white-space: pre-wrap;
  line-height: 1.6;
  color: #0f172a;
  font-size: 14px;
`,hx=["USER","ADMIN"],gx=["ACTIVE","INACTIVE"];function mx(){var e;const[t,n]=(0,r.useState)(0),[a,o]=(0,r.useState)(""),[i,l]=(0,r.useState)(null),[s,c]=(0,r.useState)(!1),[u,d]=(0,r.useState)(null),[p,f]=(0,r.useState)(null),[h,g]=(0,r.useState)(null);async function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;c(!0),d(null);try{const{data:t}=await bm.get("/admin/users",{params:{page:e,size:10}});l(t),n(e)}catch(lw){var t,r;d((null===lw||void 0===lw||null===(t=lw.response)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message)||lw.message||"\ubd88\ub7ec\uc624\uae30 \uc2e4\ud328")}finally{c(!1)}}(0,r.useEffect)((()=>{m(0)}),[]);const x=(null===i||void 0===i?void 0:i.content)||[],v=null!==(e=null===i||void 0===i?void 0:i.totalPages)&&void 0!==e?e:0,b=()=>m(0);return(0,Ko.jsxs)(ym,{children:[(0,Ko.jsxs)(wm,{children:[(0,Ko.jsx)(km,{children:"\uc0ac\uc6a9\uc790 \uad00\ub9ac"}),(0,Ko.jsx)(Sm,{children:"\uc5ed\ud560/\uc0c1\ud0dc/\uc815\uc9c0 \ucc98\ub9ac\ub97c \uad00\ub9ac\ud558\uace0, \uac8c\uc2dc\uae00\xb7\ub313\uae00 \uc5f4\ub78c\uc73c\ub85c \uc774\uc5b4\uc9d1\ub2c8\ub2e4."})]}),(0,Ko.jsx)(jm,{children:(0,Ko.jsxs)(Am,{children:[(0,Ko.jsx)(Em,{value:a,onChange:e=>o(e.target.value),onKeyDown:e=>"Enter"===e.key&&b(),placeholder:"\uc774\uba54\uc77c/\ub2c9\ub124\uc784 \uac80\uc0c9"}),(0,Ko.jsx)(Pm,{onClick:b,children:"\uac80\uc0c9"}),(0,Ko.jsx)(Nm,{onClick:()=>{o(""),m(0)},children:"\ucd08\uae30\ud654"})]})}),s&&(0,Ko.jsx)(Fm,{children:"\ubd88\ub7ec\uc624\ub294 \uc911\u2026"}),u&&(0,Ko.jsxs)(Bm,{children:["\uc624\ub958: ",String(u)]}),!s&&!u&&(0===x.length?(0,Ko.jsx)(Um,{children:"\uacb0\uacfc \uc5c6\uc74c"}):(0,Ko.jsxs)(Ko.Fragment,{children:[(0,Ko.jsx)(Hm,{children:(0,Ko.jsxs)(Wm,{children:[(0,Ko.jsx)("thead",{children:(0,Ko.jsxs)("tr",{children:[(0,Ko.jsx)(Om,{w:260,children:"Email"}),(0,Ko.jsx)(Om,{w:90,children:"Nickname"}),(0,Ko.jsx)(Om,{w:80,children:"Role"}),(0,Ko.jsx)(Om,{w:80,children:"Status"}),(0,Ko.jsx)(Om,{w:90,children:"\uac00\uc785\uc77c"}),(0,Ko.jsx)(Om,{children:"\uc561\uc158"})]})}),(0,Ko.jsx)("tbody",{children:x.map((e=>{const n=e.createdAt&&String(e.createdAt).slice(0,10)||e.created_date&&String(e.created_date).slice(0,10)||"-",r=e.role||e.roles&&e.roles.join(", ")||"-",a=e.status||(e.active?"ACTIVE":"INACTIVE"),o=e.nickname||e.name||"-";return(0,Ko.jsxs)("tr",{children:[(0,Ko.jsx)(_m,{w:260,ellipsis:!0,title:e.email,children:e.email}),(0,Ko.jsx)(_m,{w:90,ellipsis:!0,title:o,children:o}),(0,Ko.jsx)(_m,{w:80,ellipsis:!0,title:r,children:r}),(0,Ko.jsx)(_m,{w:80,children:a}),(0,Ko.jsx)(_m,{w:90,children:n}),(0,Ko.jsx)(_m,{children:(0,Ko.jsxs)(Dm,{children:[(0,Ko.jsx)(Pm,{compact:!0,onClick:()=>g({id:e.userId,email:e.email,name:o}),children:"\uba54\ubaa8"}),(0,Ko.jsxs)(Cm,{compact:!0,defaultValue:"",disabled:p===e.userId,onChange:n=>(async(e,r,a)=>{const o=(e=>(e||"").replace(/^ROLE_/,""))(r);if(!hx.includes(o))return alert("\ud5c8\uc6a9\ub418\uc9c0 \uc54a\ub294 \uc5ed\ud560 \uac12\uc785\ub2c8\ub2e4."),void(a&&(a.value=""));f(e);try{await bm.put(`/admin/users/${e}/role`,{role:o},{headers:{"Content-Type":"application/json"},withCredentials:!0}),await m(t)}catch(n){var i,l;alert(`\uc5ed\ud560 \ubcc0\uacbd \uc2e4\ud328: ${(null===n||void 0===n||null===(i=n.response)||void 0===i||null===(l=i.data)||void 0===l?void 0:l.message)||n.message}`)}finally{f(null),a&&(a.value="")}})(e.userId,n.target.value,n.target),"aria-label":"\uc5ed\ud560 \ubcc0\uacbd",children:[(0,Ko.jsx)("option",{value:"",disabled:!0,children:"\uc5ed\ud560 \ubcc0\uacbd"}),(0,Ko.jsx)("option",{value:"USER",children:"USER"}),(0,Ko.jsx)("option",{value:"ADMIN",children:"ADMIN"})]}),(0,Ko.jsxs)(Cm,{compact:!0,defaultValue:"",disabled:p===e.userId,onChange:n=>(async(e,r,a)=>{if(!gx.includes(r))return alert("\ud5c8\uc6a9\ub418\uc9c0 \uc54a\ub294 \uc0c1\ud0dc \uac12\uc785\ub2c8\ub2e4."),void(a&&(a.value=""));const o=(e=>"ACTIVE"===e)(r);f(e);try{await bm.put(`/admin/users/${e}/status`,{active:o},{headers:{"Content-Type":"application/json"},withCredentials:!0}),await m(t)}catch(n){var i,l;alert(`\uc0c1\ud0dc \ubcc0\uacbd \uc2e4\ud328: ${(null===n||void 0===n||null===(i=n.response)||void 0===i||null===(l=i.data)||void 0===l?void 0:l.message)||n.message}`)}finally{f(null),a&&(a.value="")}})(e.userId,n.target.value,n.target),"aria-label":"\uc0c1\ud0dc \ubcc0\uacbd",children:[(0,Ko.jsx)("option",{value:"",disabled:!0,children:"\uc0c1\ud0dc \ubcc0\uacbd"}),(0,Ko.jsx)("option",{value:"ACTIVE",children:"ACTIVE"}),(0,Ko.jsx)("option",{value:"INACTIVE",children:"INACTIVE"})]}),(0,Ko.jsxs)(Cm,{compact:!0,defaultValue:"",disabled:p===e.userId,onChange:n=>(async(e,r,a)=>{if(r)if(window.confirm(`\uc815\ub9d0 \uc774 \uc0ac\uc6a9\uc790\ub97c ${r}\ub85c \uc815\uc9c0\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?`)){f(e);try{await bm.put(`/admin/users/${e}/suspend`,{period:r},{headers:{"Content-Type":"application/json"},withCredentials:!0}),await m(t)}catch(n){var o,i;alert(`\uc815\uc9c0 \ucc98\ub9ac \uc2e4\ud328: ${(null===n||void 0===n||null===(o=n.response)||void 0===o||null===(i=o.data)||void 0===i?void 0:i.message)||n.message}`)}finally{f(null),a&&(a.value="")}}else a&&(a.value="")})(e.userId,n.target.value,n.target),"aria-label":"\uc815\uc9c0 \uae30\uac04",children:[(0,Ko.jsx)("option",{value:"",disabled:!0,children:"\uc815\uc9c0 \uae30\uac04"}),(0,Ko.jsx)("option",{value:"THREE_DAYS",children:"3\uc77c"}),(0,Ko.jsx)("option",{value:"SEVEN_DAYS",children:"7\uc77c"}),(0,Ko.jsx)("option",{value:"TEN_DAYS",children:"10\uc77c"}),(0,Ko.jsx)("option",{value:"THIRTY_DAYS",children:"30\uc77c"}),(0,Ko.jsx)("option",{value:"SIX_MONTHS",children:"6\uac1c\uc6d4"}),(0,Ko.jsx)("option",{value:"PERMANENT",children:"\uc601\uad6c"})]}),Number(e.boardCount)>0&&(0,Ko.jsx)(Pm,{as:ze,to:`/admin/users/${e.userId}/boards`,compact:!0,title:`\uac8c\uc2dc\uae00 ${e.boardCount.toLocaleString()}\uac1c`,children:"\uac8c\uc2dc\uae00 \ubcf4\uae30"}),Number(e.commentCount)>0&&(0,Ko.jsx)(Nm,{as:ze,to:`/admin/users/${e.userId}/comments`,compact:!0,title:`\ub313\uae00 ${e.commentCount.toLocaleString()}\uac1c`,children:"\ub313\uae00 \ubcf4\uae30"})]})})]},e.userId)}))})]})}),(0,Ko.jsxs)(Lm,{children:[(0,Ko.jsx)($m,{disabled:t<=0,onClick:()=>m(t-1),children:"\uc774\uc804"}),(0,Ko.jsxs)(Im,{children:[t+1," / ",v||1]}),(0,Ko.jsx)($m,{disabled:t>=v-1,onClick:()=>m(t+1),children:"\ub2e4\uc74c"})]})]})),h&&(0,Ko.jsx)(nx,{user:h,onClose:()=>g(null)})]})}const xx=wr.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 16px;
`,vx=wr.div`
  margin-bottom: 12px;
`,bx=wr.h2`
  margin: 0 0 4px;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.2px;
`,yx=wr.p`
  margin: 0;
  color: #6b7280;
  font-size: 14px;
`,wx=wr.div`
  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #fff;
  margin-bottom: 16px;
`,kx=wr.div`
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
`,Sx=wr.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
`,jx=wr.select`
  height: 40px;
  padding: 0 10px;
  border: 1.5px solid #d1d5db;
  border-radius: 10px;
  background: #fff;
`,Ax=wr.input`
  flex: 1 1 360px;
  min-width: 240px;
  height: 40px;
  padding: 0 12px;
  border: 1.5px solid #d1d5db;
  border-radius: 10px;
  outline: none;
  transition: border-color .15s ease;
  &:focus { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,.15); }
`,Cx=wr.div`
  flex: 1 1 auto;
`,Ex=wr.button`
  height: 40px;
  padding: 0 14px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: transform .05s ease, background .15s ease, opacity .15s ease;
  &:active { transform: translateY(1px); }
  &:disabled { opacity: .6; cursor: not-allowed; }
`,Tx=wr(Ex)`
  color: #fff;
  background: #111827;
  border: 1px solid #111827;
  &:hover:not(:disabled) { background: #0b1220; }
`,zx=wr(Ex)`
  color: #111827;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  &:hover:not(:disabled) { background: #eef2f7; }
`,Px=wr(Ex)`
  color: #111827;
  background: #fff;
  border: 1px solid #e5e7eb;
  &:hover:not(:disabled) { background: #f3f4f6; }
`,Nx=wr(Ex)`
  color: #b91c1c;
  background: #fff;
  border: 1px solid #fecaca;
  &:hover:not(:disabled) { background: #fee2e2; }
`,$x=wr.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;

  thead tr {
    background: #fafafa;
  }
  tbody tr:hover {
    background: #fafafa;
  }
`,Rx=wr.th`
  text-align: left;
  padding: 12px 10px;
  color: #6b7280;
  font-size: 13px;
  border-bottom: 1px solid #eef2f7;
  ${e=>e.w&&vr`width: ${e.w}px;`};
`,Ox=wr.td`
  padding: 12px 10px;
  border-top: 1px solid #f3f4f6;
  vertical-align: middle;
  ${e=>e.w&&vr`width: ${e.w}px;`};
  ${e=>e.ellipsis&&vr`
    overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
  `};
  ${e=>e.mono&&vr`
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  `};
`,_x=wr.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  ${e=>"success"===e.type&&vr`
    color: #065f46; background: #d1fae5; border: 1px solid #a7f3d0;
  `};
  ${e=>"danger"===e.type&&vr`
    color: #991b1b; background: #fee2e2; border: 1px solid #fecaca;
  `};
`,Mx=wr.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,Dx=wr.div`
  margin-top: 12px;
  display: flex;
  gap: 8px;
  align-items: center;
`,Lx=wr.span`
  color: #6b7280;
  font-size: 14px;
`,Ix=wr.div`
  padding: 12px 0;
  color: #dc2626;
`,Bx=wr.div`
  padding: 12px 0;
  color: #374151;
`,Fx=wr.div`
  padding: 48px 12px;
  text-align: center;
  color: #6b7280;
  border: 1px dashed #e5e7eb;
  border-radius: 12px;
  background: #fafafa;
`,Ux=[{value:"TITLE",label:"\uc81c\ubaa9"},{value:"CONTENT",label:"\ub0b4\uc6a9"},{value:"AUTHOR",label:"\uc791\uc131\uc790"}];function Hx(){var e;const[t,n]=(0,r.useState)("TITLE"),[a,o]=(0,r.useState)(""),[i,l]=(0,r.useState)(0),[s,c]=(0,r.useState)([]),[u,d]=(0,r.useState)({totalPages:0,number:0,first:!0,last:!0}),[p,f]=(0,r.useState)(!1),[h,g]=(0,r.useState)(null),[m,x]=(0,r.useState)(!1),[v,b]=(0,r.useState)(null),[y,w]=(0,r.useState)((()=>new Set)),k=e=>{var t;return null!==(t=e.id)&&void 0!==t?t:e.boardId},S=e=>{var t,n;return e.authorNickname||e.authorEmail||(null===(t=e.author)||void 0===t?void 0:t.nickname)||(null===(n=e.author)||void 0===n?void 0:n.email)||"-"},j=(0,r.useMemo)((()=>({type:t,keyword:a.trim(),page:i,size:10})),[t,a,i]),A=async()=>{f(!0),g(null);try{var e,t,n,r,a;const{data:o}=await bm.get("/admin/boards/search",{params:j}),l=null!==(e=null===o||void 0===o?void 0:o.content)&&void 0!==e?e:[];c(l),d({totalPages:null!==(t=null===o||void 0===o?void 0:o.totalPages)&&void 0!==t?t:1,number:null!==(n=null===o||void 0===o?void 0:o.number)&&void 0!==n?n:i,first:null!==(r=null===o||void 0===o?void 0:o.first)&&void 0!==r?r:0===i,last:null!==(a=null===o||void 0===o?void 0:o.last)&&void 0!==a?a:null===o||void 0===o||!o.totalPages||i>=o.totalPages-1}),w(new Set)}catch(lw){var o,l;g((null===lw||void 0===lw||null===(o=lw.response)||void 0===o||null===(l=o.data)||void 0===l?void 0:l.message)||lw.message||"\ubd88\ub7ec\uc624\uae30 \uc2e4\ud328")}finally{f(!1)}};(0,r.useEffect)((()=>{A()}),[j]);const C=async e=>{if(window.confirm(`\uac8c\uc2dc\uae00 #${e} \uc744(\ub97c) \ubcf5\uad6c\ud560\uae4c\uc694?`)){b(e);try{await async function(e,t){try{await bm.put(`/admin/content/${e.toLowerCase()}/${t}/reactivate`)}catch{await bm.put(`/admin/content/${e.toUpperCase()}/${t}/reactivate`)}}("board",e),await A()}catch(lw){var t,n;alert(`\ubcf5\uad6c \uc2e4\ud328: ${(null===lw||void 0===lw||null===(t=lw.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)||lw.message}`)}finally{b(null)}}};return(0,Ko.jsxs)(xx,{children:[(0,Ko.jsxs)(vx,{children:[(0,Ko.jsx)(bx,{children:"\uac8c\uc2dc\ubb3c \uad00\ub9ac"}),(0,Ko.jsx)(yx,{children:"\uc81c\ubaa9/\ub0b4\uc6a9/\uc791\uc131\uc790 \uae30\uc900\uc73c\ub85c \uac80\uc0c9\ud558\uace0 \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud569\ub2c8\ub2e4."})]}),(0,Ko.jsx)(wx,{children:(0,Ko.jsxs)(Sx,{children:[(0,Ko.jsx)(jx,{value:t,onChange:e=>{l(0),n(e.target.value)},children:Ux.map((e=>(0,Ko.jsx)("option",{value:e.value,children:e.label},e.value)))}),(0,Ko.jsx)(Ax,{value:a,onChange:e=>o(e.target.value),onKeyDown:e=>"Enter"===e.key&&l(0),placeholder:"\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud558\uc138\uc694"}),(0,Ko.jsx)(Tx,{onClick:()=>l(0),children:"\uac80\uc0c9"}),(0,Ko.jsx)(zx,{onClick:A,children:"\uc0c8\ub85c\uace0\uce68"}),(0,Ko.jsx)(Cx,{}),(0,Ko.jsx)(Nx,{onClick:async()=>{const e=Array.from(y);if(0===e.length)return alert("\uc120\ud0dd\ub41c \uac8c\uc2dc\uae00\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.");if(window.confirm(`${e.length}\uac1c \uac8c\uc2dc\uae00\uc744 \ube44\ud65c\uc131\ud654\ud560\uae4c\uc694?`)){x(!0);try{await bm.post("/admin/boards/bulk-deactivate",{ids:e}),await A()}catch(lw){var t,n;alert(`\uc77c\uad04 \ube44\ud65c\uc131\ud654 \uc2e4\ud328: ${(null===lw||void 0===lw||null===(t=lw.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)||lw.message}`)}finally{x(!1)}}},disabled:m||0===y.size,children:m?"\uc77c\uad04 \ucc98\ub9ac \uc911\u2026":`\uc120\ud0dd \ube44\ud65c\uc131\ud654 (${y.size})`})]})}),p&&(0,Ko.jsx)(Bx,{children:"\ubd88\ub7ec\uc624\ub294 \uc911\u2026"}),h&&(0,Ko.jsxs)(Ix,{children:["\uc624\ub958: ",String(h)]}),!p&&!h&&(0===s.length?(0,Ko.jsx)(Fx,{children:"\uacb0\uacfc \uc5c6\uc74c"}):(0,Ko.jsxs)(Ko.Fragment,{children:[(0,Ko.jsx)(kx,{children:(0,Ko.jsxs)($x,{children:[(0,Ko.jsx)("thead",{children:(0,Ko.jsxs)("tr",{children:[(0,Ko.jsx)(Rx,{w:44,children:(0,Ko.jsx)("input",{type:"checkbox",checked:s.length>0&&y.size===s.length,onChange:e=>(e=>{if(!e)return void w(new Set);const t=s.map((e=>k(e)));w(new Set(t))})(e.target.checked),"aria-label":"select-all"})}),(0,Ko.jsx)(Rx,{children:"\uc81c\ubaa9"}),(0,Ko.jsx)(Rx,{w:200,children:"\uc791\uc131\uc790"}),(0,Ko.jsx)(Rx,{w:140,children:"\uc0c1\ud0dc"}),(0,Ko.jsx)(Rx,{w:180,children:"\uc791\uc131\uc77c"}),(0,Ko.jsx)(Rx,{w:260,children:"\uc561\uc158"})]})}),(0,Ko.jsx)("tbody",{children:s.map((e=>{const t=k(e),n=(e=>{var t;return!1!==(null!==(t=e.active)&&void 0!==t?t:e.isActive)})(e);return(0,Ko.jsxs)("tr",{children:[(0,Ko.jsx)(Ox,{w:44,children:(0,Ko.jsx)("input",{type:"checkbox",checked:y.has(t),onChange:e=>((e,t)=>{w((n=>{const r=new Set(n);return t?r.add(e):r.delete(e),r}))})(t,e.target.checked),"aria-label":`select-${t}`})}),(0,Ko.jsx)(Ox,{title:e.title,ellipsis:!0,children:e.title}),(0,Ko.jsx)(Ox,{w:200,children:S(e)}),(0,Ko.jsx)(Ox,{w:140,children:n?(0,Ko.jsx)(_x,{type:"success",children:"ACTIVE"}):(0,Ko.jsx)(_x,{type:"danger",children:"INACTIVE"})}),(0,Ko.jsx)(Ox,{w:180,children:(e.createdAt||"").slice(0,10)||"-"}),(0,Ko.jsx)(Ox,{w:260,children:(0,Ko.jsx)(Mx,{children:n?(0,Ko.jsx)(Px,{disabled:v===t,onClick:()=>(async e=>{if(window.confirm(`\uac8c\uc2dc\uae00 #${e} \uc744(\ub97c) \ube44\ud65c\uc131\ud654\ud560\uae4c\uc694?`)){b(e);try{await bm.delete(`/admin/boards/${e}`),await A()}catch(lw){var t,n;alert(`\ube44\ud65c\uc131\ud654 \uc2e4\ud328: ${(null===lw||void 0===lw||null===(t=lw.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)||lw.message}`)}finally{b(null)}}})(t),children:v===t?"\ucc98\ub9ac \uc911\u2026":"\ube44\ud65c\uc131\ud654"}):(0,Ko.jsx)(Tx,{disabled:v===t,onClick:()=>C(t),children:v===t?"\ucc98\ub9ac \uc911\u2026":"\ubcf5\uad6c"})})})]},t)}))})]})}),(0,Ko.jsxs)(Dx,{children:[(0,Ko.jsx)(Px,{disabled:u.first,onClick:()=>l((e=>Math.max(0,e-1))),children:"\uc774\uc804"}),(0,Ko.jsxs)(Lx,{children:[(null!==(e=u.number)&&void 0!==e?e:i)+1," / ",u.totalPages]}),(0,Ko.jsx)(Px,{disabled:u.last,onClick:()=>l((e=>e+1)),children:"\ub2e4\uc74c"})]})]}))]})}const Wx=e=>{var t,n,r;return null!==(t=null!==(n=null!==(r=null===e||void 0===e?void 0:e.content)&&void 0!==r?r:null===e||void 0===e?void 0:e.text)&&void 0!==n?n:null===e||void 0===e?void 0:e.body)&&void 0!==t?t:"-"},Yx=e=>{var t,n;const r=null!==(t=null!==(n=null===e||void 0===e?void 0:e.createdAt)&&void 0!==n?n:null===e||void 0===e?void 0:e.created_at)&&void 0!==t?t:null===e||void 0===e?void 0:e.created_date;return r?String(r).slice(0,10):"-"};function Vx(){var e;const t=ne(),[n]=$e(),a=te(),o=t.userId||n.get("userId"),[i,l]=(0,r.useState)([]),[s,c]=(0,r.useState)({totalPages:0,number:0,first:!0,last:!0}),[u,d]=(0,r.useState)(0),[p,f]=(0,r.useState)(!1),[h,g]=(0,r.useState)(null),[m,x]=(0,r.useState)(null),v=(0,r.useMemo)((()=>({page:u,size:10})),[u]),b=async()=>{if(o){f(!0),g(null);try{var e,t,n,r,a;const{data:i}=await bm.get(`/admin/users/${o}/comments`,{params:v}),s=null!==(e=null===i||void 0===i?void 0:i.content)&&void 0!==e?e:[];l(s),c({totalPages:null!==(t=null===i||void 0===i?void 0:i.totalPages)&&void 0!==t?t:1,number:null!==(n=null===i||void 0===i?void 0:i.number)&&void 0!==n?n:u,first:null!==(r=null===i||void 0===i?void 0:i.first)&&void 0!==r?r:0===u,last:null!==(a=null===i||void 0===i?void 0:i.last)&&void 0!==a?a:null===i||void 0===i||!i.totalPages||u>=i.totalPages-1})}catch(lw){var i,s;g((null===lw||void 0===lw||null===(i=lw.response)||void 0===i||null===(s=i.data)||void 0===s?void 0:s.message)||lw.message||"\ubd88\ub7ec\uc624\uae30 \uc2e4\ud328")}finally{f(!1)}}};(0,r.useEffect)((()=>{b()}),[v,o]);const y=async e=>{if(window.confirm(`\ub313\uae00 #${e} \uc744(\ub97c) \ubcf5\uad6c\ud560\uae4c\uc694?`)){x(e);try{await async function(e,t){try{await bm.put(`/admin/content/${e.toLowerCase()}/${t}/reactivate`)}catch{await bm.put(`/admin/content/${e.toUpperCase()}/${t}/reactivate`)}}("comment",e),await b()}catch(lw){var t,n;alert(`\ubcf5\uad6c \uc2e4\ud328: ${(null===lw||void 0===lw||null===(t=lw.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)||lw.message}`)}finally{x(null)}}};return(0,Ko.jsxs)(ym,{children:[(0,Ko.jsxs)(wm,{children:[(0,Ko.jsx)(km,{children:"\uc0ac\uc6a9\uc790\ubcc4 \ub313\uae00"}),(0,Ko.jsxs)(Sm,{children:["\uc120\ud0dd \uc0ac\uc6a9\uc790(",(0,Ko.jsx)("b",{children:null!==o&&void 0!==o?o:"-"}),")\uc758 \ub313\uae00 \uc0c1\ud0dc\ub97c \uc870\ud68c/\uad00\ub9ac\ud569\ub2c8\ub2e4."]})]}),(0,Ko.jsx)(jm,{children:(0,Ko.jsxs)(Am,{children:[(0,Ko.jsx)(Nm,{onClick:()=>a("/admin/users"),children:"\uc0ac\uc6a9\uc790 \ubaa9\ub85d\uc73c\ub85c"}),(0,Ko.jsx)(Pm,{onClick:b,children:"\uc0c8\ub85c\uace0\uce68"})]})}),p&&(0,Ko.jsx)(Fm,{children:"\ubd88\ub7ec\uc624\ub294 \uc911\u2026"}),h&&(0,Ko.jsxs)(Bm,{children:["\uc624\ub958: ",String(h)]}),!p&&!h&&(0===i.length?(0,Ko.jsx)(Um,{children:"\uacb0\uacfc \uc5c6\uc74c"}):(0,Ko.jsxs)(Ko.Fragment,{children:[(0,Ko.jsx)(Hm,{children:(0,Ko.jsxs)(Wm,{children:[(0,Ko.jsx)("thead",{children:(0,Ko.jsxs)("tr",{children:[(0,Ko.jsx)(Om,{children:"\ub0b4\uc6a9"}),(0,Ko.jsx)(Om,{w:140,children:"\uc0c1\ud0dc"}),(0,Ko.jsx)(Om,{w:180,children:"\uc791\uc131\uc77c"}),(0,Ko.jsx)(Om,{w:260,children:"\uc561\uc158"})]})}),(0,Ko.jsx)("tbody",{children:i.map((e=>{const t=(e=>{var t,n,r;return null!==(t=null!==(n=null!==(r=null===e||void 0===e?void 0:e.commentId)&&void 0!==r?r:null===e||void 0===e?void 0:e.id)&&void 0!==n?n:null===e||void 0===e?void 0:e.comment_id)&&void 0!==t?t:null===e||void 0===e?void 0:e._id})(e),n=(e=>"boolean"===typeof(null===e||void 0===e?void 0:e.active)?e.active:"boolean"!==typeof(null===e||void 0===e?void 0:e.isActive)||e.isActive)(e);return(0,Ko.jsxs)("tr",{children:[(0,Ko.jsx)(_m,{ellipsis:!0,title:Wx(e),children:Wx(e)}),(0,Ko.jsx)(_m,{w:140,children:n?(0,Ko.jsx)(Mm,{type:"success",children:"ACTIVE"}):(0,Ko.jsx)(Mm,{type:"danger",children:"INACTIVE"})}),(0,Ko.jsx)(_m,{w:180,children:Yx(e)}),(0,Ko.jsx)(_m,{w:260,children:(0,Ko.jsx)(Dm,{children:n?(0,Ko.jsx)($m,{disabled:m===t,onClick:()=>(async e=>{if(window.confirm(`\ub313\uae00 #${e} \uc744(\ub97c) \ube44\ud65c\uc131\ud654\ud560\uae4c\uc694?`)){x(e);try{await bm.delete(`/admin/comments/${e}`),await b()}catch(lw){var t,n;alert(`\ube44\ud65c\uc131\ud654 \uc2e4\ud328: ${(null===lw||void 0===lw||null===(t=lw.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)||lw.message}`)}finally{x(null)}}})(t),children:m===t?"\ucc98\ub9ac \uc911\u2026":"\ube44\ud65c\uc131\ud654"}):(0,Ko.jsx)(Pm,{disabled:m===t,onClick:()=>y(t),children:m===t?"\ucc98\ub9ac \uc911\u2026":"\ubcf5\uad6c"})})})]},t)}))})]})}),(0,Ko.jsxs)(Lm,{children:[(0,Ko.jsx)($m,{disabled:s.first,onClick:()=>d((e=>Math.max(0,e-1))),children:"\uc774\uc804"}),(0,Ko.jsxs)(Im,{children:[(null!==(e=s.number)&&void 0!==e?e:u)+1," / ",s.totalPages]}),(0,Ko.jsx)($m,{disabled:s.last,onClick:()=>d((e=>e+1)),children:"\ub2e4\uc74c"})]})]}))]})}const Gx=e=>{var t,n,r,a,o,i,l,s,c,u,d,p,f,h,g,m,x,v;const b=null!==(t=null!==(n=null!==(r=null===e||void 0===e?void 0:e.id)&&void 0!==r?r:null===e||void 0===e?void 0:e.commentId)&&void 0!==n?n:null===e||void 0===e?void 0:e.comment_id)&&void 0!==t?t:null===e||void 0===e?void 0:e.comment_id_seq,y=null!==(a=null!==(o=null!==(i=null===e||void 0===e?void 0:e.content)&&void 0!==i?i:null===e||void 0===e?void 0:e.text)&&void 0!==o?o:null===e||void 0===e?void 0:e.body)&&void 0!==a?a:"",w=null!==(l=null!==(s=null!==(c=null!==(u=null!==(d=null!==(p=null!==(f=null===e||void 0===e?void 0:e.authorNickname)&&void 0!==f?f:null===e||void 0===e?void 0:e.authorEmail)&&void 0!==p?p:null===e||void 0===e?void 0:e.userEmail)&&void 0!==d?d:null===e||void 0===e?void 0:e.writerEmail)&&void 0!==u?u:null===e||void 0===e||null===(h=e.author)||void 0===h?void 0:h.nickname)&&void 0!==c?c:null===e||void 0===e||null===(g=e.author)||void 0===g?void 0:g.email)&&void 0!==s?s:null===e||void 0===e||null===(m=e.user)||void 0===m?void 0:m.email)&&void 0!==l?l:"-",k="boolean"===typeof(null===e||void 0===e?void 0:e.active)?e.active:"boolean"!==typeof(null===e||void 0===e?void 0:e.isActive)||e.isActive,S=null!==(x=null!==(v=null===e||void 0===e?void 0:e.createdAt)&&void 0!==v?v:null===e||void 0===e?void 0:e.created_at)&&void 0!==x?x:null;return{_id:b,_content:y,_author:w,_active:k,_created:S?"string"===typeof S?S.slice(0,10):String(S).slice(0,10):"-",__raw:e}};function Qx(){var e;const[t,n]=(0,r.useState)(""),[a,o]=(0,r.useState)(0),[i,l]=(0,r.useState)([]),[s,c]=(0,r.useState)({totalPages:0,number:0,first:!0,last:!0}),[u,d]=(0,r.useState)(!1),[p,f]=(0,r.useState)(null),[h,g]=(0,r.useState)(!1),[m,x]=(0,r.useState)(null),[v,b]=(0,r.useState)((()=>new Set)),y=(0,r.useMemo)((()=>({keyword:t.trim(),page:a,size:10})),[t,a]),w=async()=>{d(!0),f(null);try{var e,t,n,r,o;const{data:i}=await bm.get("/admin/comments/search",{params:y}),s=(null!==(e=null===i||void 0===i?void 0:i.content)&&void 0!==e?e:[]).map(Gx);l(s),c({totalPages:null!==(t=null===i||void 0===i?void 0:i.totalPages)&&void 0!==t?t:1,number:null!==(n=null===i||void 0===i?void 0:i.number)&&void 0!==n?n:a,first:null!==(r=null===i||void 0===i?void 0:i.first)&&void 0!==r?r:0===a,last:null!==(o=null===i||void 0===i?void 0:i.last)&&void 0!==o?o:null===i||void 0===i||!i.totalPages||a>=i.totalPages-1}),b(new Set)}catch(lw){var i,s;f((null===lw||void 0===lw||null===(i=lw.response)||void 0===i||null===(s=i.data)||void 0===s?void 0:s.message)||lw.message||"\ubd88\ub7ec\uc624\uae30 \uc2e4\ud328")}finally{d(!1)}};(0,r.useEffect)((()=>{w()}),[y]);const k=async e=>{if(window.confirm(`\ub313\uae00 #${e} \uc744(\ub97c) \ubcf5\uad6c\ud560\uae4c\uc694?`)){x(e);try{await async function(e,t){try{await bm.put(`/admin/content/${e.toLowerCase()}/${t}/reactivate`)}catch{await bm.put(`/admin/content/${e.toUpperCase()}/${t}/reactivate`)}}("comment",e),await w()}catch(lw){var t,n;alert(`\ubcf5\uad6c \uc2e4\ud328: ${(null===lw||void 0===lw||null===(t=lw.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)||lw.message}`)}finally{x(null)}}};return(0,Ko.jsxs)(ym,{children:[(0,Ko.jsxs)(wm,{children:[(0,Ko.jsx)(km,{children:"\ub313\uae00 \uad00\ub9ac"}),(0,Ko.jsx)(Sm,{children:"\ub0b4\uc6a9/\uc791\uc131\uc790 \uae30\uc900\uc73c\ub85c \uac80\uc0c9\ud558\uace0 \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud569\ub2c8\ub2e4."})]}),(0,Ko.jsx)(jm,{children:(0,Ko.jsxs)(Am,{children:[(0,Ko.jsx)(Em,{value:t,onChange:e=>n(e.target.value),onKeyDown:e=>"Enter"===e.key&&o(0),placeholder:"\ub313\uae00 \ub0b4\uc6a9\xb7\uc791\uc131\uc790 \ud0a4\uc6cc\ub4dc"}),(0,Ko.jsx)(Pm,{onClick:()=>o(0),children:"\uac80\uc0c9"}),(0,Ko.jsx)(Nm,{onClick:w,children:"\uc0c8\ub85c\uace0\uce68"}),(0,Ko.jsx)(Tm,{}),(0,Ko.jsx)($m,{onClick:async()=>{const e=Array.from(v);if(0===e.length)return alert("\uc120\ud0dd\ub41c \ub313\uae00\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.");if(window.confirm(`${e.length}\uac1c \ub313\uae00\uc744 \ube44\ud65c\uc131\ud654\ud560\uae4c\uc694?`)){g(!0);try{await bm.post("/admin/comments/bulk-deactivate",{ids:e}),await w()}catch(lw){var t,n;alert(`\uc77c\uad04 \ube44\ud65c\uc131\ud654 \uc2e4\ud328: ${(null===lw||void 0===lw||null===(t=lw.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)||lw.message}`)}finally{g(!1)}}},disabled:h||0===v.size,children:h?"\uc77c\uad04 \ucc98\ub9ac \uc911\u2026":`\uc120\ud0dd \ube44\ud65c\uc131\ud654 (${v.size})`})]})}),u&&(0,Ko.jsx)(Fm,{children:"\ubd88\ub7ec\uc624\ub294 \uc911\u2026"}),p&&(0,Ko.jsxs)(Bm,{children:["\uc624\ub958: ",String(p)]}),!u&&!p&&(0===i.length?(0,Ko.jsx)(Um,{children:"\uacb0\uacfc \uc5c6\uc74c"}):(0,Ko.jsxs)(Ko.Fragment,{children:[(0,Ko.jsx)(Hm,{children:(0,Ko.jsxs)(Wm,{children:[(0,Ko.jsx)("thead",{children:(0,Ko.jsxs)("tr",{children:[(0,Ko.jsx)(Om,{w:44,children:(0,Ko.jsx)("input",{type:"checkbox",checked:i.length>0&&v.size===i.length,onChange:e=>{return t=e.target.checked,void b(t?new Set(i.map((e=>e._id))):new Set);var t},"aria-label":"select-all"})}),(0,Ko.jsx)(Om,{children:"\ub0b4\uc6a9"}),(0,Ko.jsx)(Om,{w:200,children:"\uc791\uc131\uc790"}),(0,Ko.jsx)(Om,{w:140,children:"\uc0c1\ud0dc"}),(0,Ko.jsx)(Om,{w:180,children:"\uc791\uc131\uc77c"}),(0,Ko.jsx)(Om,{w:200,children:"\uc561\uc158"})]})}),(0,Ko.jsx)("tbody",{children:i.map((e=>{const t=e._id,n=!!e._active;return(0,Ko.jsxs)("tr",{children:[(0,Ko.jsx)(_m,{w:44,children:(0,Ko.jsx)("input",{type:"checkbox",checked:v.has(t),onChange:e=>((e,t)=>{b((n=>{const r=new Set(n);return t?r.add(e):r.delete(e),r}))})(t,e.target.checked),"aria-label":`select-${t}`})}),(0,Ko.jsx)(_m,{title:e._content,ellipsis:!0,children:e._content}),(0,Ko.jsx)(_m,{w:200,children:e._author}),(0,Ko.jsx)(_m,{w:140,children:n?(0,Ko.jsx)(Mm,{type:"success",children:"ACTIVE"}):(0,Ko.jsx)(Mm,{type:"danger",children:"INACTIVE"})}),(0,Ko.jsx)(_m,{w:180,children:e._created}),(0,Ko.jsx)(_m,{w:200,children:(0,Ko.jsx)(Dm,{children:n?(0,Ko.jsx)($m,{disabled:m===t,onClick:()=>(async e=>{if(window.confirm(`\ub313\uae00 #${e} \uc744(\ub97c) \ube44\ud65c\uc131\ud654\ud560\uae4c\uc694?`)){x(e);try{await bm.delete(`/admin/comments/${e}`),await w()}catch(lw){var t,n;alert(`\ube44\ud65c\uc131\ud654 \uc2e4\ud328: ${(null===lw||void 0===lw||null===(t=lw.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)||lw.message}`)}finally{x(null)}}})(t),children:m===t?"\ucc98\ub9ac \uc911\u2026":"\ube44\ud65c\uc131\ud654"}):(0,Ko.jsx)(Pm,{disabled:m===t,onClick:()=>k(t),children:m===t?"\ucc98\ub9ac \uc911\u2026":"\ubcf5\uad6c"})})})]},t)}))})]})}),(0,Ko.jsxs)(Lm,{children:[(0,Ko.jsx)($m,{disabled:s.first,onClick:()=>o((e=>Math.max(0,e-1))),children:"\uc774\uc804"}),(0,Ko.jsxs)(Im,{children:[(null!==(e=s.number)&&void 0!==e?e:a)+1," / ",s.totalPages]}),(0,Ko.jsx)($m,{disabled:s.last,onClick:()=>o((e=>e+1)),children:"\ub2e4\uc74c"})]})]}))]})}function qx(){var e;const[t,n]=(0,r.useState)(0),[a,o]=(0,r.useState)([]),[i,l]=(0,r.useState)({totalPages:0,number:0,first:!0,last:!0}),[s,c]=(0,r.useState)(!1),[u,d]=(0,r.useState)(null),[p,f]=(0,r.useState)(""),[h,g]=(0,r.useState)(null),m=(0,r.useMemo)((()=>({page:t,size:10})),[t]),x=async()=>{c(!0),d(null);try{var e,n,r,a,i;const{data:s}=await bm.get("/admin/reports/pending",{params:m}),c=null!==(e=null===s||void 0===s?void 0:s.content)&&void 0!==e?e:[];o(c),l({totalPages:null!==(n=null===s||void 0===s?void 0:s.totalPages)&&void 0!==n?n:1,number:null!==(r=null===s||void 0===s?void 0:s.number)&&void 0!==r?r:t,first:null!==(a=null===s||void 0===s?void 0:s.first)&&void 0!==a?a:0===t,last:null!==(i=null===s||void 0===s?void 0:s.last)&&void 0!==i?i:null===s||void 0===s||!s.totalPages||t>=s.totalPages-1})}catch(lw){var s,u;d((null===lw||void 0===lw||null===(s=lw.response)||void 0===s||null===(u=s.data)||void 0===u?void 0:u.message)||lw.message||"\ubd88\ub7ec\uc624\uae30 \uc2e4\ud328")}finally{c(!1)}};(0,r.useEffect)((()=>{x()}),[m]);const v=async(e,t)=>{if(t){g(e);try{await bm.post(`/admin/reports/${e}/process`,{status:t,adminComment:p||""}),await x()}catch(lw){var n,r;alert(`\ucc98\ub9ac \uc2e4\ud328: ${(null===lw||void 0===lw||null===(n=lw.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.message)||lw.message}`)}finally{g(null)}}};const b=e=>"REVIEWED"===e?(0,Ko.jsx)(Mm,{type:"success",children:"REVIEWED"}):"REJECTED"===e?(0,Ko.jsx)(Mm,{type:"danger",children:"REJECTED"}):(0,Ko.jsx)(Mm,{children:"PENDING"});return(0,Ko.jsxs)(ym,{children:[(0,Ko.jsxs)(wm,{children:[(0,Ko.jsx)(km,{children:"\uc2e0\uace0 \uad00\ub9ac(\ub300\uae30\uc911)"}),(0,Ko.jsx)(Sm,{children:"\ub300\uae30 \uc911\uc778 \uc2e0\uace0\ub97c \uac80\ud1a0\ud558\uace0 \ucc98\ub9ac \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud569\ub2c8\ub2e4."})]}),(0,Ko.jsx)(jm,{children:(0,Ko.jsxs)(Am,{children:[(0,Ko.jsx)(Em,{value:p,onChange:e=>f(e.target.value),placeholder:"\uad00\ub9ac\uc790 \ucf54\uba58\ud2b8(\uc120\ud0dd)"}),(0,Ko.jsx)(Pm,{onClick:x,children:"\uc0c8\ub85c\uace0\uce68"}),(0,Ko.jsx)(Tm,{})]})}),s&&(0,Ko.jsx)(Fm,{children:"\ubd88\ub7ec\uc624\ub294 \uc911\u2026"}),u&&(0,Ko.jsxs)(Bm,{children:["\uc624\ub958: ",String(u)]}),!s&&!u&&(0===a.length?(0,Ko.jsx)(Um,{children:"\uacb0\uacfc \uc5c6\uc74c"}):(0,Ko.jsxs)(Ko.Fragment,{children:[(0,Ko.jsx)(Hm,{children:(0,Ko.jsxs)(Wm,{children:[(0,Ko.jsx)("thead",{children:(0,Ko.jsxs)("tr",{children:[(0,Ko.jsx)(Om,{w:60,children:"#"}),(0,Ko.jsx)(Om,{w:100,children:"\uc0c1\ud0dc"}),(0,Ko.jsx)(Om,{w:110,children:"\uc720\ud615"}),(0,Ko.jsx)(Om,{w:80,children:"\ucf58\ud150\uce20ID"}),(0,Ko.jsx)(Om,{w:100,children:"\uc2e0\uace0\uc790"}),(0,Ko.jsx)(Om,{w:100,children:"\uc791\uc131\uc790"}),(0,Ko.jsx)(Om,{w:100,children:"\uc0ac\uc720"}),"            ",(0,Ko.jsx)(Om,{w:80,children:"\ub9c1\ud06c"}),(0,Ko.jsx)(Om,{w:300,children:"\ucc98\ub9ac"})]})}),(0,Ko.jsx)("tbody",{children:a.map((e=>(0,Ko.jsxs)("tr",{children:[(0,Ko.jsx)(_m,{w:60,children:e.reportId}),(0,Ko.jsx)(_m,{w:100,children:b(e.status)}),(0,Ko.jsx)(_m,{w:110,children:e.contentType||e.type}),(0,Ko.jsx)(_m,{w:90,children:e.contentId}),(0,Ko.jsx)(_m,{w:130,ellipsis:!0,children:e.reporterNickname||"-"}),(0,Ko.jsx)(_m,{w:180,ellipsis:!0,children:e.reportedUserId?`${e.reportedUserId} (${e.reportedUserNickname})`:"-"}),(0,Ko.jsx)(_m,{ellipsis:!0,children:e.reason||"-"}),(0,Ko.jsx)(_m,{w:80,children:(0,Ko.jsx)(Dm,{children:(0,Ko.jsx)(Nm,{onClick:()=>{const t=function(e){if(e.contentUrl)return e.contentUrl;const t=e.contentType||e.type;return"BOARD"===t?`/trace/detail/${e.contentId}`:"REVIEW"===t?`/reviews/${e.contentId}`:"COMMENT"===t?"BOARD"===e.parentType&&e.parentBoardId?`/boards/${e.parentBoardId}#comment-${e.contentId}`:"REVIEW"===e.parentType&&e.parentReviewId?`/reviews/${e.parentReviewId}#comment-${e.contentId}`:`/comments/board/${e.contentId}`:"#"}(e);t&&"#"!==t?window.open(t,"_blank"):alert("\ub9c1\ud06c \uc815\ubcf4\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.")},children:"\ubcf4\uae30"})})}),(0,Ko.jsx)(_m,{w:200,children:(0,Ko.jsxs)(Dm,{children:[(0,Ko.jsx)(Pm,{disabled:h===e.reportId,onClick:()=>v(e.reportId,"REVIEWED"),children:h===e.reportId?"\ucc98\ub9ac \uc911\u2026":"\uc2b9\uc778(\uc0ad\uc81c)"}),(0,Ko.jsx)($m,{disabled:h===e.reportId,onClick:()=>v(e.reportId,"PENDING"),children:h===e.reportId?"\ucc98\ub9ac \uc911\u2026":"\ubcf4\ub958"})]})})]},e.reportId)))})]})}),(0,Ko.jsxs)(Lm,{children:[(0,Ko.jsx)($m,{disabled:i.first,onClick:()=>n((e=>Math.max(0,e-1))),children:"\uc774\uc804"}),(0,Ko.jsxs)(Im,{children:[(null!==(e=i.number)&&void 0!==e?e:t)+1," / ",i.totalPages]}),(0,Ko.jsx)($m,{disabled:i.last,onClick:()=>n((e=>e+1)),children:"\ub2e4\uc74c"})]})]}))]})}const Kx=[{v:"7d",label:"\ucd5c\uadfc 7\uc77c"},{v:"30d",label:"\ucd5c\uadfc 30\uc77c"},{v:"90d",label:"\ucd5c\uadfc 90\uc77c"},{v:"custom",label:"\uc0ac\uc6a9\uc790 \uc9c0\uc815"}];function Xx(){const[e,t]=(0,r.useState)("7d"),[n,a]=(0,r.useState)(""),[o,i]=(0,r.useState)(""),[l,s]=(0,r.useState)(!1),[c,u]=(0,r.useState)(null),[d,p]=(0,r.useState)(null),f=(0,r.useMemo)((()=>{const t={};return"custom"!==e?t.range=e:(n&&(t.startDate=n),o&&(t.endDate=o)),t}),[e,n,o]),h=async()=>{s(!0),u(null);try{const{data:e}=await bm.get("/admin/dashboard/detailed-stats",{params:f});p(e||{})}catch(lw){var e,t;u((null===lw||void 0===lw||null===(e=lw.response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||lw.message||"\ubd88\ub7ec\uc624\uae30 \uc2e4\ud328")}finally{s(!1)}};(0,r.useEffect)((()=>{h()}),[f]);const g=d&&"object"===typeof d?Object.entries(d):[],m=(e,t)=>Array.isArray(e)?e.reduce(((e,n)=>e+(Number(n[t])||0)),0):0;return(0,Ko.jsxs)(ym,{children:[(0,Ko.jsxs)(wm,{children:[(0,Ko.jsx)(km,{children:"\uc0c1\uc138 \ud1b5\uacc4"}),(0,Ko.jsx)(Sm,{children:"\uae30\uac04\ubcc4 \uc9c0\ud45c\ub97c \uc870\ud68c\ud558\uace0, \uc6d0\ubcf8 \ub370\uc774\ud130\ub97c \ud45c\ub85c \ud655\uc778\ud560 \uc218 \uc788\uc5b4\uc694."})]}),(0,Ko.jsx)(jm,{children:(0,Ko.jsxs)(Am,{children:[(0,Ko.jsx)(Cm,{value:e,onChange:e=>t(e.target.value),children:Kx.map((e=>(0,Ko.jsx)("option",{value:e.v,children:e.label},e.v)))}),"custom"===e&&(0,Ko.jsxs)(Ko.Fragment,{children:[(0,Ko.jsx)(Em,{type:"date",value:n,onChange:e=>a(e.target.value),style:{flex:"0 0 180px"}}),(0,Ko.jsx)("span",{children:"~"}),(0,Ko.jsx)(Em,{type:"date",value:o,onChange:e=>i(e.target.value),style:{flex:"0 0 180px"}})]}),(0,Ko.jsx)(Pm,{onClick:h,children:"\uc0c8\ub85c\uace0\uce68"}),(0,Ko.jsx)(Tm,{})]})}),(0,Ko.jsxs)(Ym,{style:{marginBottom:12},children:[(0,Ko.jsx)(Zx,{title:"\uc2e0\uaddc \uc0ac\uc6a9\uc790(\ud569\uacc4)",value:Jx(m(null===d||void 0===d?void 0:d.dailySignups,"count"))}),(0,Ko.jsx)(Zx,{title:"\uc2e0\uaddc \uac8c\uc2dc\uae00(\ud569\uacc4)",value:Jx(m(null===d||void 0===d?void 0:d.dailyBoards,"count"))}),(0,Ko.jsx)(Zx,{title:"\uc2e0\uaddc \ub313\uae00(\ud569\uacc4)",value:Jx(m(null===d||void 0===d?void 0:d.dailyComments,"count"))}),(0,Ko.jsx)(Zx,{title:"\uc2e0\uaddc \ub9ac\ubdf0(\ud569\uacc4)",value:Jx(m(null===d||void 0===d?void 0:d.dailyReviews,"count"))})]}),l&&(0,Ko.jsx)(Fm,{children:"\ubd88\ub7ec\uc624\ub294 \uc911\u2026"}),c&&(0,Ko.jsxs)(Bm,{children:["\uc624\ub958: ",String(c)]}),!l&&!c&&(0===g.length?(0,Ko.jsx)(Um,{children:"\ub370\uc774\ud130 \uc5c6\uc74c"}):(0,Ko.jsx)(Hm,{children:(0,Ko.jsxs)(Wm,{children:[(0,Ko.jsx)("thead",{children:(0,Ko.jsxs)("tr",{children:[(0,Ko.jsx)(Om,{w:260,children:"\ud0a4"}),(0,Ko.jsx)(Om,{children:"\uac12"})]})}),(0,Ko.jsx)("tbody",{children:g.map((e=>{let[t,n]=e;return(0,Ko.jsxs)("tr",{children:[(0,Ko.jsx)(_m,{w:260,children:t}),(0,Ko.jsx)(_m,{children:nv(n)})]},t)}))})]})}))]})}function Zx(e){let{title:t,value:n}=e;return(0,Ko.jsxs)(Vm,{children:[(0,Ko.jsx)(Gm,{children:t}),(0,Ko.jsx)(Qm,{children:n})]})}const Jx=e=>"number"===typeof e?e.toLocaleString():null!==e&&void 0!==e?e:"-",ev=e=>e&&"object"===typeof e,tv=e=>Array.isArray(e);function nv(e){return tv(e)?e.length>0&&"object"===typeof e[0]?(0,Ko.jsx)(rv,{data:e}):(0,Ko.jsx)("pre",{style:{margin:0},children:JSON.stringify(e,null,2)}):ev(e)?(0,Ko.jsx)("pre",{style:{margin:0},children:JSON.stringify(e,null,2)}):String(e)}function rv(e){let{data:t}=e;const n=(e,t)=>e?t.find((t=>t in e)):void 0,r=t.length?n(t[0],["date","day"]):"date",a=t.length?n(t[0],["count","value"]):"count";return(0,Ko.jsxs)(Wm,{style:{margin:0},children:[(0,Ko.jsx)("thead",{children:(0,Ko.jsxs)("tr",{children:[(0,Ko.jsx)(Om,{w:140,children:"\ub0a0\uc9dc"}),(0,Ko.jsx)(Om,{w:120,style:{textAlign:"right"},children:"\uc218\uce58"})]})}),(0,Ko.jsx)("tbody",{children:t.map(((e,t)=>{var n,o;return(0,Ko.jsxs)("tr",{children:[(0,Ko.jsx)(_m,{w:140,children:(o=e[r],Array.isArray(o)?`${o[0]}-${String(o[1]).padStart(2,"0")}-${String(o[2]).padStart(2,"0")}`:o)}),(0,Ko.jsx)(_m,{w:120,style:{textAlign:"right"},children:"number"===typeof e[a]?e[a].toLocaleString():String(null!==(n=e[a])&&void 0!==n?n:"-")})]},t)}))})]})}const av=wr.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 16px;
`,ov=wr.div`
  margin-bottom: 12px;
`,iv=wr.h2`
  margin: 0 0 4px;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.2px;
`,lv=wr.p`
  margin: 0;
  color: #6b7280;
  font-size: 14px;
`,sv=wr.div`
  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #fff;
  margin-bottom: 16px;
`,cv=wr.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
`,uv=wr.input`
  flex: 1 1 320px;
  min-width: 220px;
  height: 40px;
  padding: 0 12px;
  border: 1.5px solid #d1d5db;
  border-radius: 10px;
  font-size: 14px;
  outline: none;
  transition: border-color .15s ease;
  &:focus { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,.15); }
`,dv=wr.button`
  height: 40px;
  padding: 0 14px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: transform .05s ease, background .15s ease, opacity .15s ease;
  &:active { transform: translateY(1px); }
  &:disabled { opacity: .6; cursor: not-allowed; }
`,pv=wr(dv)`
  color: #fff;
  background: #111827;
  border: 1px solid #111827;
  &:hover:not(:disabled) { background: #0b1220; }
`,fv=wr(dv)`
  color: #111827;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  &:hover:not(:disabled) { background: #eef2f7; }
`,hv=wr.div`
  padding: 12px 0;
  color: #374151;
`,gv=wr.div`
  padding: 12px 0;
  color: #dc2626;
`,mv=wr.div`
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #fff;
  overflow: hidden;
`,xv=wr.div`
  display: flex;
  gap: 12px;
  padding: 12px;
  color: #6b7280;
  font-size: 13px;
  background: #fafafa;
`,vv=wr.div`
  height: 1px;
  background: #eef2f7;
`,bv=wr.div`
  display: flex;
  flex-direction: column;
`,yv=wr.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 12px;
  border-top: 1px solid #f3f4f6;
  &:first-child { border-top: 0; }
  &:hover { background: #fafafa; }
`,wv=wr.div`
  flex: ${e=>e.w?`0 0 ${e.w}px`:"1 1 auto"};
  text-align: ${e=>e.align||"left"};
  color: ${e=>e.muted?"#6b7280":"inherit"};
  font-family: ${e=>e.mono?"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace":"inherit"};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,kv=wr(dv)`
  color: #b91c1c;
  background: #fff;
  border: 1px solid #fecaca;
  &:hover:not(:disabled) { background: #fee2e2; }
`,Sv=wr.div`
  padding: 48px 12px;
  text-align: center;
  color: #6b7280;
  border: 1px dashed #e5e7eb;
  border-radius: 12px;
  background: #fafafa;
`,jv=wr.div`
  font-size: 32px;
  margin-bottom: 8px;
`,Av=wr.div`
  font-weight: 700;
  margin-bottom: 4px;
`;function Cv(){const[e,t]=(0,r.useState)([]),[n,a]=(0,r.useState)(""),[o,i]=(0,r.useState)(!1),[l,s]=(0,r.useState)(null),[c,u]=(0,r.useState)(null),d=async()=>{i(!0),s(null);try{const{data:e}=await bm.get("/admin/banned-words");t(Array.isArray(e)?e:[])}catch(lw){var e,n;s((null===lw||void 0===lw||null===(e=lw.response)||void 0===e||null===(n=e.data)||void 0===n?void 0:n.message)||lw.message||"\ubd88\ub7ec\uc624\uae30 \uc2e4\ud328")}finally{i(!1)}},p=async()=>{const e=n.trim();if(!e)return alert("\ub2e8\uc5b4\ub97c \uc785\ub825\ud558\uc138\uc694.");try{await bm.post("/admin/banned-words",{word:e}),a(""),await d()}catch(lw){var t,r;alert(`\ucd94\uac00 \uc2e4\ud328: ${(null===lw||void 0===lw||null===(t=lw.response)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message)||lw.message}`)}};return(0,r.useEffect)((()=>{d()}),[]),(0,Ko.jsxs)(av,{children:[(0,Ko.jsxs)(ov,{children:[(0,Ko.jsx)(iv,{children:"\uae08\uc9c0\uc5b4 \uad00\ub9ac"}),(0,Ko.jsx)(lv,{children:"\ucee4\ubba4\ub2c8\ud2f0 \ub0b4 \ubd80\uc801\uc808\ud55c \ub2e8\uc5b4\ub97c \ub4f1\ub85d/\uc0ad\uc81c\ud569\ub2c8\ub2e4."})]}),(0,Ko.jsx)(sv,{children:(0,Ko.jsxs)(cv,{children:[(0,Ko.jsx)(uv,{value:n,onChange:e=>a(e.target.value),placeholder:"\uc608) \uc2a4\ud338\ub2e8\uc5b4",onKeyDown:e=>"Enter"===e.key&&p()}),(0,Ko.jsx)(pv,{onClick:p,disabled:o||!n.trim(),children:"\ucd94\uac00"}),(0,Ko.jsx)(fv,{onClick:d,disabled:o,children:"\uc0c8\ub85c\uace0\uce68"})]})}),o&&(0,Ko.jsx)(hv,{children:"\ubd88\ub7ec\uc624\ub294 \uc911\u2026"}),l&&(0,Ko.jsxs)(gv,{children:["\uc624\ub958: ",String(l)]}),!o&&!l&&(0===e.length?(0,Ko.jsxs)(Sv,{children:[(0,Ko.jsx)(jv,{children:"\ud83d\uddc2\ufe0f"}),(0,Ko.jsx)(Av,{children:"\ub4f1\ub85d\ub41c \uae08\uc9c0\uc5b4\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."}),(0,Ko.jsx)("small",{children:"\uc0c1\ub2e8 \uc785\ub825\ucc3d\uc5d0 \ub2e8\uc5b4\ub97c \ucd94\uac00\ud574 \ubcf4\uc138\uc694."})]}):(0,Ko.jsxs)(mv,{children:[(0,Ko.jsxs)(xv,{children:[(0,Ko.jsx)(wv,{w:200,children:"\uc0dd\uc131\uc77c"}),(0,Ko.jsx)(wv,{children:"\ub2e8\uc5b4"}),(0,Ko.jsx)(wv,{w:140,align:"right",children:"\uc561\uc158"})]}),(0,Ko.jsx)(vv,{}),(0,Ko.jsx)(bv,{children:e.map((e=>(0,Ko.jsxs)(yv,{children:[(0,Ko.jsx)(wv,{w:200,muted:!0,children:Ev(e.createdAt)}),(0,Ko.jsx)(wv,{title:e.word,mono:!0,children:e.word}),(0,Ko.jsx)(wv,{w:140,align:"right",children:(0,Ko.jsx)(kv,{onClick:()=>(async e=>{if(window.confirm(`'${e}' \uc744(\ub97c) \uc0ad\uc81c\ud560\uae4c\uc694?`)){u(e);try{await bm.delete("/admin/banned-words",{data:{word:e}}),await d()}catch(lw){var t,n;alert(`\uc0ad\uc81c \uc2e4\ud328: ${(null===lw||void 0===lw||null===(t=lw.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)||lw.message}`)}finally{u(null)}}})(e.word),disabled:c===e.word,children:c===e.word?"\uc0ad\uc81c \uc911\u2026":"\uc0ad\uc81c"})})]},e.id)))})]}))]})}function Ev(e){try{if(!e)return"-";if("string"===typeof e)return e.slice(0,10);const t=new Date(e);return isNaN(t.getTime())?"-":t.toISOString().slice(0,10)}catch{return"-"}}async function Tv(e,t){try{await bm.put(`/admin/content/${e.toLowerCase()}/${t}/reactivate`)}catch(Ht){await bm.put(`/admin/content/${e.toUpperCase()}/${t}/reactivate`)}}function zv(){const[e,t]=(0,r.useState)(""),[n,a]=(0,r.useState)(""),[o,i]=(0,r.useState)(!1),[l,s]=(0,r.useState)([]),c=e=>s((t=>[{ts:(new Date).toISOString(),text:e},...t].slice(0,200))),u=e=>e.split(/[\s,]+/).map((e=>e.trim())).filter(Boolean).map(Number).filter((e=>Number.isInteger(e)&&e>0));return(0,Ko.jsxs)(ym,{children:[(0,Ko.jsxs)(wm,{children:[(0,Ko.jsx)(km,{children:"\ub9ac\ubdf0 \uad00\ub9ac"}),(0,Ko.jsx)(Sm,{children:"\ub9ac\ubdf0 \ucf58\ud150\uce20\ub97c \ub2e8\uac74/\uc77c\uad04\ub85c \ube44\ud65c\uc131\ud654\ud558\uac70\ub098 \ubcf5\uad6c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]}),(0,Ko.jsx)(jm,{children:(0,Ko.jsxs)(Am,{children:[(0,Ko.jsx)(Em,{value:e,onChange:e=>t(e.target.value),placeholder:"\ub9ac\ubdf0 ID",type:"number",style:{maxWidth:220}}),(0,Ko.jsx)(Rm,{disabled:o,onClick:()=>(async e=>{if(!e)return alert("\ub9ac\ubdf0 ID\ub97c \uc785\ub825\ud558\uc138\uc694.");if(window.confirm(`\ub9ac\ubdf0 #${e} \uc744(\ub97c) \ube44\ud65c\uc131\ud654\ud560\uae4c\uc694?`)){i(!0);try{await bm.delete(`/admin/reviews/${e}`),c(`\ube44\ud65c\uc131\ud654 \uc644\ub8cc: #${e}`)}catch(lw){var t,n,r,a;c(`\ube44\ud65c\uc131\ud654 \uc2e4\ud328: #${e} - ${(null===lw||void 0===lw||null===(t=lw.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)||lw.message}`),alert(`\uc2e4\ud328: ${(null===lw||void 0===lw||null===(r=lw.response)||void 0===r||null===(a=r.data)||void 0===a?void 0:a.message)||lw.message}`)}finally{i(!1)}}})(Number(e)),children:o?"\ucc98\ub9ac \uc911\u2026":"\ube44\ud65c\uc131\ud654"}),(0,Ko.jsx)(Pm,{disabled:o,onClick:()=>(async e=>{if(!e)return alert("\ub9ac\ubdf0 ID\ub97c \uc785\ub825\ud558\uc138\uc694.");if(window.confirm(`\ub9ac\ubdf0 #${e} \uc744(\ub97c) \ubcf5\uad6c\ud560\uae4c\uc694?`)){i(!0);try{await Tv("review",e),c(`\ubcf5\uad6c \uc644\ub8cc: #${e}`)}catch(lw){var t,n,r,a;c(`\ubcf5\uad6c \uc2e4\ud328: #${e} - ${(null===lw||void 0===lw||null===(t=lw.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)||lw.message}`),alert(`\uc2e4\ud328: ${(null===lw||void 0===lw||null===(r=lw.response)||void 0===r||null===(a=r.data)||void 0===a?void 0:a.message)||lw.message}`)}finally{i(!1)}}})(Number(e)),children:o?"\ucc98\ub9ac \uc911\u2026":"\ubcf5\uad6c"})]})}),(0,Ko.jsx)(jm,{children:(0,Ko.jsxs)("details",{open:!0,children:[(0,Ko.jsx)("summary",{style:{cursor:"pointer",userSelect:"none",fontWeight:600,marginBottom:8},children:"\uc77c\uad04 \ucc98\ub9ac (\uc904\ubc14\uafc8/\uc27c\ud45c\ub85c \uad6c\ubd84)"}),(0,Ko.jsx)("textarea",{value:n,onChange:e=>a(e.target.value),rows:6,placeholder:"\uc608)\n101,102,103\n\ub610\ub294\n201\n202\n203",style:{width:"100%",border:"1px solid #e5e7eb",borderRadius:10,padding:10,outline:"none",fontFamily:"inherit",resize:"vertical",background:"#fff"}}),(0,Ko.jsxs)(Am,{style:{marginTop:8},children:[(0,Ko.jsx)(Rm,{disabled:o,onClick:async()=>{const e=u(n);if(0===e.length)return alert("ID \ubaa9\ub85d\uc744 \uc785\ub825\ud558\uc138\uc694.");if(window.confirm(`${e.length}\uac1c \ub9ac\ubdf0\ub97c \ube44\ud65c\uc131\ud654\ud560\uae4c\uc694?`)){i(!0);try{for(const n of e)try{await bm.delete(`/admin/reviews/${n}`),c(`\ube44\ud65c\uc131\ud654 \uc644\ub8cc: #${n}`)}catch(lw){var t,r;c(`\ube44\ud65c\uc131\ud654 \uc2e4\ud328: #${n} - ${(null===lw||void 0===lw||null===(t=lw.response)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message)||lw.message}`)}alert("\uc77c\uad04 \ucc98\ub9ac \uc644\ub8cc(\uc790\uc138\ud55c \uacb0\uacfc\ub294 \ub85c\uadf8 \ucc38\uc870)")}finally{i(!1)}}},children:o?"\ucc98\ub9ac \uc911\u2026":"\uc77c\uad04 \ube44\ud65c\uc131\ud654"}),(0,Ko.jsx)(Pm,{disabled:o,onClick:async()=>{const e=u(n);if(0===e.length)return alert("ID \ubaa9\ub85d\uc744 \uc785\ub825\ud558\uc138\uc694.");if(window.confirm(`${e.length}\uac1c \ub9ac\ubdf0\ub97c \ubcf5\uad6c\ud560\uae4c\uc694?`)){i(!0);try{for(const n of e)try{await Tv("review",n),c(`\ubcf5\uad6c \uc644\ub8cc: #${n}`)}catch(lw){var t,r;c(`\ubcf5\uad6c \uc2e4\ud328: #${n} - ${(null===lw||void 0===lw||null===(t=lw.response)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message)||lw.message}`)}alert("\uc77c\uad04 \ucc98\ub9ac \uc644\ub8cc(\uc790\uc138\ud55c \uacb0\uacfc\ub294 \ub85c\uadf8 \ucc38\uc870)")}finally{i(!1)}}},children:o?"\ucc98\ub9ac \uc911\u2026":"\uc77c\uad04 \ubcf5\uad6c"}),(0,Ko.jsx)(Nm,{onClick:()=>a(""),children:"\uc9c0\uc6b0\uae30"})]})]})}),(0,Ko.jsxs)(jm,{children:[(0,Ko.jsx)("div",{style:{fontWeight:600,marginBottom:8},children:"\ucc98\ub9ac \ub85c\uadf8"}),(0,Ko.jsxs)("div",{style:{maxHeight:280,overflow:"auto",border:"1px dashed #e5e7eb",borderRadius:12,padding:10,background:"#fafafa"},children:[0===l.length&&(0,Ko.jsx)(Fm,{children:"\uc544\uc9c1 \ub85c\uadf8\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."}),l.map(((e,t)=>(0,Ko.jsxs)("div",{style:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",fontSize:12,marginBottom:4,whiteSpace:"pre-wrap"},children:[(0,Ko.jsxs)("span",{style:{color:"#6b7280"},children:["[",e.ts,"]"]})," ",e.text]},t)))]})]})]})}const Pv=kr`
  0%   { opacity: 0; transform: translateY(10px) scale(.985); }
  60%  { opacity: 1; transform: translateY(0)     scale(1); }
  100% { opacity: 1; transform: translateY(0)     scale(1); }
`,Nv=kr`
  0%,100% { box-shadow: 0 0 0 0 rgba(99,102,241,.0); }
  50%     { box-shadow: 0 0 0 6px rgba(99,102,241,.08); }
`,$v=kr`
  0%   { opacity: 0; transform: translateY(6px) scale(.985); }
  100% { opacity: 1; transform: translateY(0)   scale(1); }
`,Rv=wr.div`
  --ink: #111827;
  --muted: #6b7280;
  --line: #e5e7eb;
  --brand: #6366f1;
  --accent: #8b5cf6;
  --surface: #f8fafc;

  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 16px 16px 28px;
  color: var(--ink);
`,Ov=wr.header`
  position: relative;
  display: grid;
  grid-template-columns: 88px 1fr;
  gap: 12px;
  align-items: center;
  padding: 14px 0 18px;
  border-bottom: 1px solid var(--line);

  &::after {
    content: "";
    position: absolute;
    left: 0; right: 0; bottom: -2px;
    height: 3px;
    border-radius: 2px;
    border-bottom: 1px solid var(--line);
    opacity: .75;
  }

  opacity: 0; transform: translateY(6px);
  &[data-show="true"] { animation: ${Pv} 420ms cubic-bezier(.2,.65,.2,1) both; }

  @media (max-width: 560px) {
    grid-template-columns: 72px 1fr;
    &::after { height: 2px; bottom: -1px; }
  }
`,_v=wr.header`
  position: relative;
  display: grid;
  grid-template-columns: 88px 1fr;
  gap: 12px;
  align-items: center;
  padding: 14px 0 18px;

  &::after {
    content: "";
    position: absolute;
    left: 0; right: 0; bottom: -2px;
    height: 3px;
    border-radius: 2px;
    border-bottom: 1px solid var(--line);
    opacity: .75;
  }

  opacity: 0; transform: translateY(6px);
  &[data-show="true"] { animation: ${Pv} 420ms cubic-bezier(.2,.65,.2,1) both; }

  @media (max-width: 560px) {
    grid-template-columns: 72px 1fr;
    &::after { height: 2px; bottom: -1px; }
  }
`,Mv=wr.div`
  font-size: 18px;
  font-weight: 900;
  letter-spacing: .01em;
`,Dv=wr.div`
  color: var(--muted);
  font-size: 16px;
  font-weight: 900;
  letter-spacing: .01em;
`,Lv=wr.input`
  height: 48px;
  border-radius: 12px;
  border: 1px solid var(--line);
  padding: 0 14px;
  font-size: 18px;
  outline: none;
  background: #fff;
  transition: box-shadow .15s ease, border-color .15s ease;

  &:focus {
    border-color: rgba(99,102,241,.45);
    box-shadow: 0 8px 24px rgba(99,102,241,.12);
    animation: ${Nv} 900ms ease 1;
  }
`,Iv=wr.section`
  padding: 16px 0 10px;

  opacity: 0; transform: translateY(6px);
  &[data-show="true"] { animation: ${Pv} 420ms cubic-bezier(.2,.65,.2,1) 40ms both; }
`,Bv=wr.textarea`
  width: 100%;
  min-height: 220px;
  border-radius: 14px;
  border: 1px solid var(--line);
  padding: 14px;
  font-size: 16px;
  line-height: 1.7;
  background: #fff;
  outline: none;
  resize: vertical;
  transition: box-shadow .15s ease, border-color .15s ease, background .15s ease;

  &:focus {
    border-color: rgba(99,102,241,.45);
    box-shadow: 0 10px 28px rgba(99,102,241,.12);
    background: #ffffff;
  }
`,Fv=wr.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 14px;

  .count {
    color: var(--muted);
    font-size: 14px;
  }

  @media (max-width: 560px) {
    flex-wrap: wrap;
  }
`,Uv=wr.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;

  height: 38px;
  padding: 0 12px;
  border-radius: 999px;

  font-weight: 800;
  font-size: 14px;
  color: #1e1b4b;

  border: 1px solid rgba(99,102,241,.35);
  background: linear-gradient(180deg, #fff, #f6f7ff);

  cursor: pointer;
  transition: transform .02s ease, box-shadow .15s ease, background .15s ease;

  &:hover  { box-shadow: 0 6px 18px rgba(99,102,241,.18); background: #f3f4ff; }
  &:active { transform: translateY(1px); }
`,Hv=wr.input`
  display: none;
`,Wv=wr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(108px, 1fr));
  gap: 12px;
  margin-top: 12px;
`,Yv=wr.div`
  position: relative;
  overflow: hidden;
  border-radius: 14px;
  background: var(--surface);
  border: 1px solid #eef2f7;
  animation: ${$v} 260ms ease both;

  &:hover img { transform: scale(1.02); }

  img {
    width: 100%;
    height: 108px;
    object-fit: cover;
    display: block;
    transition: transform .2s ease;
  }
`,Vv=wr.button`
  position: absolute;
  top: 8px; right: 8px;
  height: 28px;
  padding: 0 8px;
  border: none;
  border-radius: 8px;
  background: rgba(17,24,39,.75);
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  transition: opacity .15s ease;
  opacity: .95;
  &:hover { opacity: 1; }
`,Gv=wr.footer`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  padding-top: 12px;
  border-top: 1px solid var(--line);

  opacity: 0; transform: translateY(6px);
  &[data-show="true"] { animation: ${Pv} 420ms cubic-bezier(.2,.65,.2,1) 80ms both; }
`,Qv="\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  min-width: 120px;\n  height: 44px;\n  padding: 0 16px;\n  border-radius: 12px;\n  font-weight: 800;\n  font-size: 15px;\n  letter-spacing: .01em;\n  cursor: pointer;\n  transition: transform .02s ease, filter .15s ease, box-shadow .15s ease;\n  border: none;\n",qv=wr.button`
  ${Qv}
  background: linear-gradient(180deg, #5a67ff, #3f51ff);
  color: #fff;
  box-shadow: 0 10px 22px rgba(63,81,255,.22), 0 1px 0 rgba(0,0,0,.06);

  &:hover { filter: brightness(1.03); box-shadow: 0 14px 26px rgba(63,81,255,.28); }
  &:active { transform: translateY(1px); }
  &:disabled { opacity: .55; cursor: not-allowed; box-shadow: none; }
`,Kv=wr.button`
  ${Qv}
  background: #ffffff;
  color: #111827;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 0 rgba(0,0,0,.04);

  &:hover { background: #f8fafc; }
  &:active { transform: translateY(1px); }
  &:disabled { opacity: .55; cursor: not-allowed; box-shadow: none; }
`;wr.div``,wr.div``,wr.div``,wr.li``,wr.div``;const Xv=function(e){let{value:t=0,onChange:n}=e;const[a,o]=(0,r.useState)(null);return(0,Ko.jsxs)("div",{style:{display:"flex",gap:6,margin:"10px 0"},children:[[0,1,2,3,4,5].map((e=>(0,Ko.jsx)("span",{style:{cursor:"pointer",fontSize:"2rem",color:null!==a?e<=a?"#FFD600":"#CCCCCC":e<=t?"#FFD600":"#CCCCCC",transition:"color 0.2s"},onClick:()=>n(e),onMouseEnter:()=>o(e),onMouseLeave:()=>o(null),children:"\u2605"},e))),(0,Ko.jsxs)("span",{style:{marginLeft:8,fontSize:"1.2rem"},children:[t,"\uc810"]})]})},Zv=()=>{const[e,t]=(0,r.useState)(""),[n,a]=(0,r.useState)(""),[o,i]=(0,r.useState)(""),[l,s]=(0,r.useState)(0),[c,u]=(0,r.useState)([]),[d,p]=(0,r.useState)([]),[f,h]=(0,r.useState)(!1),g=te(),m=Nr.get("accessToken");(0,r.useEffect)((()=>{m||(alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \uae30\ub2a5\uc785\ub2c8\ub2e4."),g("/login"))}),[m,g]);(0,r.useEffect)((()=>()=>d.forEach((e=>URL.revokeObjectURL(e)))),[]),(0,r.useEffect)((()=>{d.forEach((e=>URL.revokeObjectURL(e)));const e=c.map((e=>URL.createObjectURL(e)));return p(e),()=>e.forEach((e=>URL.revokeObjectURL(e)))}),[c]);return(0,Ko.jsxs)(Rv,{as:"form",onSubmit:async t=>{if(t.preventDefault(),e.trim()&&o.trim()&&n.trim()&&0!==l){if(!f)try{h(!0);const t=new FormData,r={title:e.trim(),address:n.trim(),content:o.trim(),rating:Number(l)};t.append("data",new Blob([JSON.stringify(r)],{type:"application/json"}));for(const e of c)t.append("images",e);await qo.post("https://api.stackflov.com/map/reviews",t,{headers:{Authorization:`Bearer ${m}`},withCredentials:!0}),g("/nibangnebang")}catch(i){var r,a;console.error("\uac8c\uc2dc\uae00 \uc791\uc131 \uc2e4\ud328:",null===i||void 0===i||null===(r=i.response)||void 0===r?void 0:r.status,(null===i||void 0===i||null===(a=i.response)||void 0===a?void 0:a.data)||(null===i||void 0===i?void 0:i.message)),alert("\uac8c\uc2dc\uae00 \uc791\uc131\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}finally{h(!1)}}else alert("\uc81c\ubaa9, \ub0b4\uc6a9, \uc8fc\uc18c, \ubcc4\uc810\uc744 \ubaa8\ub450 \uc785\ub825\ud574\uc8fc\uc138\uc694.")},children:[(0,Ko.jsxs)(Ov,{"data-show":"true",children:[(0,Ko.jsx)(Mv,{children:"\uc81c\ubaa9"}),(0,Ko.jsx)(Lv,{placeholder:"\uae00 \uc81c\ubaa9\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694.",value:e,onChange:e=>t(e.target.value),maxLength:120})]}),(0,Ko.jsxs)(Iv,{"data-show":"true",children:[(0,Ko.jsx)(Bv,{placeholder:"\uae00 \ub0b4\uc6a9\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694.",value:o,onChange:e=>i(e.target.value)}),(0,Ko.jsxs)("div",{style:{marginTop:14,display:"grid",gap:10},children:[(0,Ko.jsx)("input",{placeholder:"ex) \uc11c\uc6b8\ud2b9\ubcc4\uc2dc \uc885\ub85c\uad6c",value:n,onChange:e=>a(e.target.value),style:{height:44,borderRadius:12,border:"1px solid #e5e7eb",padding:"0 14px",fontSize:15,outline:"none"}}),(0,Ko.jsx)("div",{children:(0,Ko.jsx)(Xv,{value:l,onChange:s})})]}),(0,Ko.jsxs)(Fv,{children:[(0,Ko.jsx)(Uv,{htmlFor:"nbnb-upload",children:"\ud83d\udcce \uc774\ubbf8\uc9c0 \uc120\ud0dd"}),(0,Ko.jsx)(Hv,{id:"nbnb-upload",type:"file",multiple:!0,accept:"image/*",onChange:e=>{const t=Array.from(e.target.files||[]);if(!t.length)return;const n=[];for(const i of t)i.size/1024/1024>10?alert(`\uc774\ubbf8\uc9c0 ${i.name} \uc6a9\ub7c9\uc774 10MB\ub97c \ucd08\uacfc\ud569\ub2c8\ub2e4.`):n.push(i);const r=[...c,...n].slice(0,10),a=[],o=new Set;for(const i of r){const e=`${i.name}-${i.size}`;o.has(e)||(o.add(e),a.push(i))}u(a),e.target.value=""}}),c.length>0&&(0,Ko.jsxs)("span",{className:"count",children:[c.length,"\uac1c \uc120\ud0dd\ub428"]})]}),(0,Ko.jsx)(Wv,{children:d.map(((e,t)=>(0,Ko.jsxs)(Yv,{children:[(0,Ko.jsx)("img",{src:e,alt:`preview-${t}`,loading:"lazy",decoding:"async"}),(0,Ko.jsx)(Vv,{type:"button",onClick:()=>(e=>{u((t=>t.filter(((t,n)=>n!==e))))})(t),children:"\uc81c\uac70"})]},e)))})]}),(0,Ko.jsxs)(Gv,{"data-show":"true",children:[(0,Ko.jsx)(qv,{type:"submit",disabled:f,children:f?"\ub4f1\ub85d \uc911...":"\ud83d\ude3d \ub4f1\ub85d"}),(0,Ko.jsx)(Kv,{type:"button",onClick:()=>{window.confirm("\uc791\uc131\uc744 \ucde8\uc18c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&g("/nibangnebang")},disabled:f,children:"\ud83d\ude3d \ucde8\uc18c"})]})]})},Jv=e=>e?e.map((e=>{var t,n,r,a,o;return"string"===typeof e?{id:e,url:e}:{id:null!==(t=null!==(n=null!==(r=null!==(a=null===e||void 0===e?void 0:e.id)&&void 0!==a?a:null===e||void 0===e?void 0:e.imageId)&&void 0!==r?r:null===e||void 0===e?void 0:e.seq)&&void 0!==n?n:null===e||void 0===e?void 0:e.pk)&&void 0!==t?t:null===e||void 0===e?void 0:e.url,url:null!==(o=null===e||void 0===e?void 0:e.imageUrl)&&void 0!==o?o:null===e||void 0===e?void 0:e.url}})).filter((e=>e.id&&e.url)):[],eb=()=>{const{id:e}=ne(),t=te(),[n,a]=(0,r.useState)(""),[o,i]=(0,r.useState)(""),[l,s]=(0,r.useState)(""),[c,u]=(0,r.useState)(0),[d,p]=(0,r.useState)(!0),[f,h]=(0,r.useState)([]),[g,m]=(0,r.useState)(new Set),[x,v]=(0,r.useState)([]),[b,y]=(0,r.useState)([]),w=Nr.get("accessToken")||localStorage.getItem("accessToken");(0,r.useEffect)((()=>()=>b.forEach((e=>URL.revokeObjectURL(e)))),[b]),(0,r.useEffect)((()=>{(async()=>{if(!w)return alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \uae30\ub2a5\uc785\ub2c8\ub2e4."),void t("/login");p(!0);try{var n,r,o,l;const{data:t}=await qo.get(`https://api.stackflov.com/map/${e}`,{headers:{Authorization:`Bearer ${w}`},withCredentials:!0});a(null!==(n=null===t||void 0===t?void 0:t.title)&&void 0!==n?n:""),i(null!==(r=null===t||void 0===t?void 0:t.address)&&void 0!==r?r:""),s(null!==(o=null===t||void 0===t?void 0:t.content)&&void 0!==o?o:""),u(Number(null!==(l=null===t||void 0===t?void 0:t.rating)&&void 0!==l?l:0));const c=Jv(null===t||void 0===t?void 0:t.imageUrls).concat(Jv(null===t||void 0===t?void 0:t.images)).concat(Jv(null===t||void 0===t?void 0:t.imageList)).concat(Jv(null===t||void 0===t?void 0:t.reviewImages)),d=Array.from(new Map(c.map((e=>[String(e.id),e]))).values());h(d)}catch(x){try{var c,d,f,g,m;const n=((null===(c=(await qo.get("https://api.stackflov.com/map/reviews",{headers:{Authorization:`Bearer ${w}`},withCredentials:!0})).data)||void 0===c?void 0:c.content)||[]).find((t=>String(t.id)===String(e)));if(!n)return alert("\ub9ac\ubdf0 \uc815\ubcf4\ub97c \ucc3e\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4."),void t("/nibangnebang");a(null!==(d=null===n||void 0===n?void 0:n.title)&&void 0!==d?d:""),i(null!==(f=null===n||void 0===n?void 0:n.address)&&void 0!==f?f:""),s(null!==(g=null===n||void 0===n?void 0:n.content)&&void 0!==g?g:""),u(Number(null!==(m=null===n||void 0===n?void 0:n.rating)&&void 0!==m?m:0));const r=Jv(null===n||void 0===n?void 0:n.imageUrls).concat(Jv(null===n||void 0===n?void 0:n.images)).concat(Jv(null===n||void 0===n?void 0:n.imageList)).concat(Jv(null===n||void 0===n?void 0:n.reviewImages)),o=Array.from(new Map(r.map((e=>[String(e.id),e]))).values());h(o)}catch(v){return console.error("\ub9ac\ubdf0 \uc870\ud68c \uc2e4\ud328:",x,v),alert("\ub9ac\ubdf0 \uc870\ud68c \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."),void t("/nibangnebang")}}finally{p(!1)}})()}),[e,w,t]);const k=f.length>0,S=(0,r.useMemo)((()=>g.size),[g]);return d?(0,Ko.jsx)(Rv,{children:(0,Ko.jsx)("div",{style:{padding:16},children:"\ub85c\ub529 \uc911\u2026"})}):(0,Ko.jsxs)(Rv,{children:[(0,Ko.jsxs)(Ov,{"data-show":"true",children:[(0,Ko.jsx)(Mv,{children:"\uc81c\ubaa9"}),(0,Ko.jsx)(Lv,{type:"text",placeholder:"\uae00 \uc81c\ubaa9\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694.",value:n,onChange:e=>a(e.target.value)})]}),(0,Ko.jsxs)(_v,{"data-show":"true",children:[(0,Ko.jsx)(Dv,{children:"\uc8fc\uc18c"}),(0,Ko.jsx)(Lv,{type:"text",placeholder:"\uc8fc\uc18c(\uc790\uc720 \ud615\uc2dd)",value:o,onChange:e=>i(e.target.value)})]}),(0,Ko.jsx)(Iv,{"data-show":"true",children:(0,Ko.jsx)(Bv,{rows:8,placeholder:"\uae00 \ub0b4\uc6a9\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694.",value:l,onChange:e=>s(e.target.value)})}),(0,Ko.jsx)(Xv,{value:c,onChange:e=>u(Math.round(e))}),(0,Ko.jsxs)("div",{style:{marginTop:18},children:[(0,Ko.jsxs)(em,{children:["\uae30\uc874 \uc774\ubbf8\uc9c0 ",k?`(\ud074\ub9ad\ud558\uc5ec ${S?"\ubcf5\uad6c/\uc0ad\uc81c":"\uc0ad\uc81c"} \ud45c\uc2dc)`:""]}),k?(0,Ko.jsx)(Wv,{children:f.map((e=>{const t=g.has(String(e.id));return(0,Ko.jsxs)(Yv,{onClick:()=>{return t=e.id,void m((e=>{const n=new Set(e),r=String(t);return n.has(r)?n.delete(r):n.add(r),n}));var t},style:{cursor:"pointer",opacity:t?.45:1,outline:t?"2px dashed #ef4444":"none",position:"relative"},title:t?"\uc0ad\uc81c \ucde8\uc18c":"\uc0ad\uc81c",children:[(0,Ko.jsx)("img",{src:e.url,alt:"review"}),t&&(0,Ko.jsx)("div",{style:{position:"absolute",top:6,left:6,background:"rgba(239,68,68,.9)",color:"#fff",fontSize:12,padding:"2px 6px",borderRadius:8},children:"\uc0ad\uc81c \uc608\uc815"})]},String(e.id))}))}):(0,Ko.jsx)("p",{style:{color:"#6b7280",fontSize:14,margin:"4px 0 14px"},children:"\ub4f1\ub85d\ub41c \uc774\ubbf8\uc9c0\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."}),(0,Ko.jsx)(em,{style:{marginTop:18},children:"\uc0c8 \uc774\ubbf8\uc9c0 \ucd94\uac00"}),(0,Ko.jsx)(Uv,{htmlFor:"update-upload",children:"\ud83d\udcce \uc774\ubbf8\uc9c0 \uc120\ud0dd"}),(0,Ko.jsx)(Hv,{id:"update-upload",type:"file",multiple:!0,accept:"image/*",onChange:e=>{const t=Array.from(e.target.files||[]);if(!t.length)return;const n=t.map((e=>URL.createObjectURL(e)));v((e=>[...e,...t])),y((e=>[...e,...n])),e.target.value=""}}),b.length>0&&(0,Ko.jsxs)(Ko.Fragment,{children:[(0,Ko.jsx)("div",{style:{marginTop:10,color:"#6b7280",fontSize:14},children:"\ucd94\uac00\ud560 \uc774\ubbf8\uc9c0"}),(0,Ko.jsx)(Wv,{children:b.map(((e,t)=>(0,Ko.jsxs)(Yv,{children:[(0,Ko.jsx)("img",{src:e,alt:`new-${t}`}),(0,Ko.jsx)(Vv,{onClick:()=>(e=>{v((t=>t.filter(((t,n)=>n!==e)))),y((t=>{const n=t[e];return n&&URL.revokeObjectURL(n),t.filter(((t,n)=>n!==e))}))})(t),children:"\uc81c\uac70"})]},e)))})]})]}),(0,Ko.jsxs)(Gv,{"data-show":"true",children:[(0,Ko.jsx)(qv,{onClick:async r=>{var a;if(null===r||void 0===r||null===(a=r.preventDefault)||void 0===a||a.call(r),!w)return alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \uae30\ub2a5\uc785\ub2c8\ub2e4."),void t("/login");const i=Array.from(g),s=f.filter((e=>g.has(e.id))).map((e=>e.url)).filter(Boolean),u=Math.max(1,Math.min(5,Math.round(Number(c)))),d={title:n,address:o,content:l,rating:u,deleteImageIds:i,imageIdsToDelete:i,deleteImageUrls:s,imageUrlsToDelete:s},p=`https://api.stackflov.com/map/reviews/${e}`;try{const e=new FormData,n=JSON.stringify(d);e.append("data",new Blob([n],{type:"application/json"})),e.append("request",new Blob([n],{type:"application/json"})),e.append("dto",new Blob([n],{type:"application/json"})),x.forEach((t=>e.append("images",t))),i.forEach((t=>e.append("deleteImageId",String(t)))),s.forEach((t=>e.append("deleteImageUrl",t))),await qo.put(p,e,{headers:{Authorization:`Bearer ${w}`},withCredentials:!0}),alert("\uc218\uc815 \uc644\ub8cc"),t("/nibangnebang")}catch(y){var h,m,v,b;console.error("\ub9ac\ubdf0 \uc218\uc815 \uc2e4\ud328:",null===y||void 0===y||null===(h=y.response)||void 0===h?void 0:h.status,(null===y||void 0===y||null===(m=y.response)||void 0===m?void 0:m.data)||(null===y||void 0===y?void 0:y.message)),alert("\uc218\uc815 \uc2e4\ud328: "+((null===y||void 0===y||null===(v=y.response)||void 0===v||null===(b=v.data)||void 0===b?void 0:b.message)||(null===y||void 0===y?void 0:y.message)||"\uc54c \uc218 \uc5c6\ub294 \uc624\ub958"))}},children:"\ud83d\ude3d \uc218\uc815"}),(0,Ko.jsx)(Kv,{onClick:()=>t(`/nibangnebang/${e}`),children:"\ud83d\ude3d \ucde8\uc18c"})]})]})},tb=kr`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0);  }
`,nb=wr.div`
  display: flow-root;
`,rb=wr.section`
  display: flow-root;
  width: 100%;
`,ab=wr.div`
  position: relative;
  margin: 4px 0 12px;
  padding-bottom: 10px;
  animation: ${tb} 0.3s ease both;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 88px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, #111827, #6366f1);
  }
`,ob=wr.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,ib=wr.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 13px;
  line-height: 1;
  border: 1px solid
    ${e=>"danger"===e.$variant?"#fecaca":"ghost"===e.$variant?"#e2e8f0":"success"===e.$variant?"#86efac":"#cbd5e1"};
  background: ${e=>"danger"===e.$variant?"#fff1f2":"ghost"===e.$variant?"#ffffff":"success"===e.$variant?"#ecfdf5":"#f8fafc"};
  color: ${e=>"danger"===e.$variant?"#b91c1c":"ghost"===e.$variant?"#334155":"success"===e.$variant?"#065f46":"#111827"};
  cursor: pointer;
  transition: background 0.15s ease, box-shadow 0.15s ease, transform 0.02s ease;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.04);

  &:hover {
    background: ${e=>"danger"===e.$variant?"#ffe4e6":"ghost"===e.$variant?"#f8fafc":"success"===e.$variant?"#dcfce7":"#eef2ff"};
  }
  &:active { transform: translateY(1px); }
  &:disabled { opacity: 0.55; cursor: not-allowed; }
`,lb=wr.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`,sb=wr.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #334155;
  font-size: 13px;
`,cb=wr.div`
  display: inline-flex;
  gap: 2px;
  font-size: 16px;
  line-height: 1;
  transform: translateY(1px);
`,ub=wr.img`
  width: 100%;
  height: clamp(220px, 39vw, 420px);
  object-fit: cover;
  border-radius: 16px;
  display: block;
  background: #f3f4f6;
`,db=wr.div`
  margin-top: 16px;
  padding-top: 12px;
 border-top: 1px solid #eee;
  display: flex;
  align-items: center;
  gap: 16px;
`,pb=wr.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  background: #f3f4f6;
  display: block;
`,fb=wr.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,hb=wr.div`
  font-weight: 700;
  color: #111827;
`,gb=wr.div`
  font-size: 13px;
  color: #6b7280;
`,mb="https://d3sutbt651osyh.cloudfront.net/assets/profile/default.png",xb=e=>(0,Ko.jsxs)(ib,{...e,children:[(0,Ko.jsx)("span",{children:"\u270f\ufe0f"}),(0,Ko.jsx)("span",{children:"\uc218\uc815"})]}),vb=e=>(0,Ko.jsxs)(ib,{...e,$variant:"danger",children:[(0,Ko.jsx)("span",{children:"\ud83d\uddd1\ufe0f"}),(0,Ko.jsx)("span",{children:"\uc0ad\uc81c"})]}),bb=e=>(0,Ko.jsxs)(ib,{...e,$variant:"success",children:[(0,Ko.jsx)("span",{children:"\ud83d\udcbe"}),(0,Ko.jsx)("span",{children:"\uc800\uc7a5"})]}),yb=e=>(0,Ko.jsxs)(ib,{...e,$variant:"ghost",children:[(0,Ko.jsx)("span",{children:"\u21a9\ufe0f"}),(0,Ko.jsx)("span",{children:"\ucde8\uc18c"})]}),wb=()=>{var e,t,n,a;const{id:o}=ne(),i=te(),l=Nr.get("accessToken"),[s,c]=(0,r.useState)(null),[u,d]=(0,r.useState)(null),[p,f]=(0,r.useState)([]),[h,g]=(0,r.useState)(""),[m,x]=(0,r.useState)(""),[v,b]=(0,r.useState)(null),y=(0,r.useRef)(!1);(0,r.useEffect)((()=>{const e={"Content-Type":"application/json"};l&&(e.Authorization=`Bearer ${l}`),qo.get(`https://api.stackflov.com/map/${o}`,{headers:e,withCredentials:!0}).then((e=>c(e.data))).catch((e=>console.error("Error fetching review detail:",e)))}),[o,l]);const w=(0,r.useMemo)((()=>s?Array.isArray(s.hashtags)&&s.hashtags.length>0?s.hashtags.map(String):(e=>{if(!e)return[];const t=/#([a-zA-Z0-9\u3131-\u314e\u314f-\u3163\uac00-\ud7a3_]+)/g,n=new Set;let r;for(;r=t.exec(e);)n.add(r[1]);return Array.from(n)})(s.content):[]),[s]);(0,r.useEffect)((()=>{l&&!y.current&&(y.current=!0,qo.get("https://api.stackflov.com/users/me",{headers:{"Content-Type":"application/json",Authorization:`Bearer ${l}`},withCredentials:!0}).then((e=>d(e.data))).catch((e=>console.error("Error fetching me:",e))))}),[l]);const k=()=>{const e={"Content-Type":"application/json"};l&&(e.Authorization=`Bearer ${l}`),qo.get(`https://api.stackflov.com/comments/review/${o}`,{headers:e,withCredentials:!0}).then((e=>f(e.data))).catch((e=>{console.error("Error fetching replies:",(null===e||void 0===e?void 0:e.response)||e)}))};(0,r.useEffect)((()=>{k()}),[o]);const S=(0,r.useMemo)((()=>!(!s||!u)&&s.authorEmail===u.email),[s,u]);if(!s)return(0,Ko.jsx)("div",{style:{padding:24},children:"\ub85c\ub529 \uc911\u2026"});const j=(null===s||void 0===s?void 0:s.authorEmail)||(null===s||void 0===s?void 0:s.authorNickname)||(null===s||void 0===s||null===(e=s.author)||void 0===e?void 0:e.email)||"\uc775\uba85",A=(null===s||void 0===s?void 0:s.authorProfileImageUrl)||(null===s||void 0===s||null===(t=s.author)||void 0===t?void 0:t.profileImageUrl)||(null===s||void 0===s||null===(n=s.author)||void 0===n?void 0:n.profileImage)||mb;return(0,Ko.jsxs)(Ah,{children:[(0,Ko.jsxs)(nb,{children:[(0,Ko.jsx)(Eh,{children:"\ub2c8\ubc29\ub0b4\ubc29"}),(0,Ko.jsx)(ab,{children:(0,Ko.jsx)(Th,{style:{margin:0},children:s.title})})]}),(0,Ko.jsxs)(zh,{style:{float:"none",width:"100%"},children:[(0,Ko.jsxs)(lb,{children:[(0,Ko.jsxs)(sb,{children:[(0,Ko.jsx)("span",{children:"\ud83d\udccd"}),(0,Ko.jsx)("span",{children:s.address||"\uc8fc\uc18c \ubbf8\uae30\uc7ac"})]}),(0,Ko.jsxs)(sb,{children:[(0,Ko.jsx)("span",{children:"\ud3c9\uc810"}),(0,Ko.jsx)(cb,{children:Array.from({length:5}).map(((e,t)=>(0,Ko.jsx)("span",{children:t<s.rating?"\u2605":"\u2606"},t)))})]}),(0,Ko.jsx)(tg,{contentId:Number(o),contentType:"REVIEW",accessToken:l,size:"sm",variant:"pill"})]}),w.length>0&&(0,Ko.jsx)(lb,{style:{marginTop:6},children:w.map((e=>(0,Ko.jsxs)(sb,{role:"button",onClick:()=>i(`/nibangnebang?tag=${encodeURIComponent(e)}`),title:`#${e} \ud0dc\uadf8\ub85c \ubcf4\uae30`,style:{cursor:"pointer"},children:["#",e]},e)))})]}),(0,Ko.jsxs)(rb,{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:16},children:[(0,Ko.jsxs)(Nh,{children:[(0,Ko.jsxs)($h,{style:{float:"none",width:"auto",padding:"8px 0"},children:["\uc791\uc131\uc77c : ",null===s||void 0===s||null===(a=s.createdAt)||void 0===a?void 0:a.slice(0,10)]}),S&&(0,Ko.jsxs)(ob,{children:[(0,Ko.jsx)(xb,{onClick:()=>i(`/nibangnebang/update/${o}`)}),(0,Ko.jsx)(vb,{onClick:async()=>{if(S){if(window.confirm("\uc774 \ub9ac\ubdf0\ub97c \uc0ad\uc81c\ud560\uae4c\uc694?"))try{await qo.delete(`https://api.stackflov.com/map/${o}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${l}`},withCredentials:!0}),alert("\uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),i("/nibangnebang")}catch(e){console.error("Error deleting review:",(null===e||void 0===e?void 0:e.response)||e),alert("\uc0ad\uc81c\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}}else alert("\uc791\uc131\uc790\ub9cc \uc0ad\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")}})]})]}),(0,Ko.jsx)(Oh,{style:{whiteSpace:"pre-wrap",float:"none",width:"100%"},children:s.content}),Array.isArray(s.imageUrls)&&s.imageUrls.length>0&&(0,Ko.jsx)(_h,{style:{gap:14},children:s.imageUrls.map(((e,t)=>(0,Ko.jsx)(ub,{src:e,alt:`review-${t}`,loading:"lazy",decoding:"async",onError:e=>{e.currentTarget.onerror=null,e.currentTarget.style.display="none"}},`${e}-${t}`)))})]}),(0,Ko.jsxs)(db,{children:[(0,Ko.jsx)(pb,{src:A||mb,alt:"author",onError:e=>{e.currentTarget.onerror=null,e.currentTarget.src=mb}}),(0,Ko.jsxs)(fb,{children:[(0,Ko.jsx)(hb,{children:j}),(null===s||void 0===s?void 0:s.authorEmail)&&(0,Ko.jsx)(gb,{children:s.authorEmail}),(0,Ko.jsx)(Bh,{disabled:!0,style:{width:"fit-content",opacity:.7},children:"\ud83d\ude3d \ud314\ub85c\uc6b0"})]})]}),(0,Ko.jsxs)(Gh,{children:[(0,Ko.jsx)(Qh,{placeholder:"\ub313\uae00\uc744 \uc785\ub825\ud558\uc138\uc694",value:h,onChange:e=>g(e.target.value)}),(0,Ko.jsx)(qh,{onClick:()=>{l&&null!==u&&void 0!==u&&u.id?qo.post("https://api.stackflov.com/comments",{reviewId:o,content:h},{headers:{"Content-Type":"application/json",Authorization:`Bearer ${l}`},withCredentials:!0}).then((()=>{g(""),k()})).catch((e=>console.error("Error creating reply:",e))):alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \uae30\ub2a5\uc785\ub2c8\ub2e4.")},children:"\ub313\uae00 \uc791\uc131"})]}),p.map((e=>{const t=v===e.id,n=(null===u||void 0===u?void 0:u.email)&&u.email===e.authorEmail;return(0,Ko.jsx)(Jh,{children:(0,Ko.jsxs)(Fh,{children:[(0,Ko.jsxs)(Uh,{children:[(0,Ko.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,Ko.jsx)(Hh,{children:e.authorEmail}),(0,Ko.jsx)(Wh,{children:e.createdAt?e.createdAt.slice(0,10):""})]}),(0,Ko.jsxs)(ob,{children:[(0,Ko.jsx)(tg,{contentId:e.id,contentType:"COMMENT",accessToken:l,size:"sm",variant:"pill"}),n&&(t?(0,Ko.jsxs)(Ko.Fragment,{children:[(0,Ko.jsx)(bb,{onClick:()=>{return t=e.id,void qo.put(`https://api.stackflov.com/comments/${t}`,{reviewId:o,content:m},{headers:{"Content-Type":"application/json",Authorization:`Bearer ${l}`},withCredentials:!0}).then((()=>{b(null),x(""),k()})).catch((e=>console.error("Error updating reply:",e)));var t}}),(0,Ko.jsx)(yb,{onClick:()=>b(null)})]}):(0,Ko.jsxs)(Ko.Fragment,{children:[(0,Ko.jsx)(xb,{onClick:()=>{b(e.id),x(e.content)}}),(0,Ko.jsx)(vb,{onClick:()=>{return t=e.id,void qo.delete(`https://api.stackflov.com/comments/${t}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${l}`},withCredentials:!0}).then((()=>k())).catch((e=>console.error("Error deleting reply:",e)));var t}})]}))]})]}),t?(0,Ko.jsx)(Qh,{value:m,onChange:e=>x(e.target.value)}):(0,Ko.jsx)(Yh,{children:e.content})]})},e.id)}))]})},kb=wr.div`
  max-width: 960px;
  margin: 24px auto;
  padding: 0 16px;
`,Sb=wr.h1`
  margin: 0 0 16px;
  font-size: 22px;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.2px;
`,jb=wr.p`
  color: #475569;
`,Ab=wr.p`
  color: #c00;
`,Cb=wr.p`
  color: #64748b;
`,Eb=wr.div`
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background: #fff;
  overflow: hidden;
`,Tb=wr.div`
  display: grid;
  grid-template-columns: 1fr 120px 100px 160px;
  gap: 8px;
  padding: 12px 12px;
  border-bottom: 1px solid #e2e8f0;

  &:last-child {
    border-bottom: 0;
  }
`,zb=wr.div`
  font-weight: 700;
  color: #0f172a;

  a {
    color: inherit;
    text-decoration: none;
  }
`,Pb=wr.span`
  color: #64748b;
  align-self: center;
`,Nb=wr.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 16px;
  align-items: center;
`,$b=wr.button`
  padding: 6px 10px;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  background: #fff;
  cursor: pointer;

  &:disabled {
    opacity: .5;
    cursor: not-allowed;
  }
`,Rb=wr.span`
  padding: 0 8px;
  color: #0f172a;
`;function Ob(){var e;const[t,n]=$e(),a=Number(null!==(e=t.get("page"))&&void 0!==e?e:0),[o,i]=(0,r.useState)(Number.isNaN(a)?0:a),[l,s]=(0,r.useState)([]),[c,u]=(0,r.useState)({totalPages:0,number:0,first:!0,last:!0}),[d,p]=(0,r.useState)(!1),[f,h]=(0,r.useState)(null),g=(0,r.useMemo)((()=>({page:o,size:10,sort:"createdAt,DESC",active:!0})),[o]);(0,r.useEffect)((()=>{(async()=>{p(!0),h(null);try{var e,t;const{data:n}=await bm.get("/notices",{params:g}),r=(Array.isArray(null===n||void 0===n?void 0:n.content)?n.content:[]).filter((e=>!1!==(null===e||void 0===e?void 0:e.active)));s(r),u({totalPages:null!==(e=null===n||void 0===n?void 0:n.totalPages)&&void 0!==e?e:0,number:null!==(t=null===n||void 0===n?void 0:n.number)&&void 0!==t?t:0,first:!(null===n||void 0===n||!n.first),last:!(null===n||void 0===n||!n.last)})}catch(lw){h(lw)}finally{p(!1)}})()}),[g]),(0,r.useEffect)((()=>{n({page:o})}),[o,n]);const m=e=>{e<0||e>=c.totalPages||i(e)};return(0,Ko.jsxs)(kb,{children:[(0,Ko.jsx)(Sb,{children:"\uacf5\uc9c0\uc0ac\ud56d"}),d&&(0,Ko.jsx)(jb,{children:"\ubd88\ub7ec\uc624\ub294 \uc911..."}),f&&(0,Ko.jsx)(Ab,{children:"\ubaa9\ub85d\uc744 \ubd88\ub7ec\uc624\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4."}),!d&&0===l.length&&(0,Ko.jsx)(Cb,{children:"\ub4f1\ub85d\ub41c \uacf5\uc9c0\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."}),l.length>0&&(0,Ko.jsxs)(Ko.Fragment,{children:[(0,Ko.jsx)(Eb,{children:l.map((e=>{var t;return(0,Ko.jsxs)(Tb,{children:[(0,Ko.jsx)(zb,{children:(0,Ko.jsx)(ze,{to:`/notices/${e.id}`,children:e.title})}),(0,Ko.jsx)(Pb,{children:e.authorNickname||"\uad00\ub9ac\uc790"}),(0,Ko.jsxs)(Pb,{children:["\uc870\ud68c ",null!==(t=e.viewCount)&&void 0!==t?t:0]}),(0,Ko.jsx)(Pb,{children:e.createdAt?new Date(e.createdAt).toLocaleString():"-"})]},e.id)}))}),c.totalPages>1&&(0,Ko.jsxs)(Nb,{children:[(0,Ko.jsx)($b,{onClick:()=>m(0),disabled:c.first,children:"\u226a"}),(0,Ko.jsx)($b,{onClick:()=>m(o-1),disabled:c.first,children:"\uc774\uc804"}),(0,Ko.jsxs)(Rb,{children:[o+1," / ",c.totalPages]}),(0,Ko.jsx)($b,{onClick:()=>m(o+1),disabled:c.last,children:"\ub2e4\uc74c"}),(0,Ko.jsx)($b,{onClick:()=>m(c.totalPages-1),disabled:c.last,children:"\u226b"})]})]})]})}const _b=wr.div`
  max-width: 960px;
  margin: 24px auto;
  padding: 0 16px;
`,Mb=wr.button`
  margin-bottom: 12px;
  padding: 6px 10px;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  background: #fff;
  cursor: pointer;
  transition: background .12s ease;
  &:hover { background: #f8fafc; }
`,Db=wr.h1`
  margin: 0 0 8px;
  font-size: 22px;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.2px;
`,Lb=wr.div`
  color: #64748b;
  margin-bottom: 16px;
  font-size: 14px;
`,Ib=wr.div`
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);
`,Bb=wr.pre`
  white-space: pre-wrap;
  word-break: break-word;
  line-height: 1.7;
  margin: 0;
  font-family: inherit;
  font-size: 15px;
  color: #0f172a;
`,Fb=wr.div`
  margin-top: 24px;
  a {
    color: #0f172a;
    text-decoration: none;
    border-bottom: 1px solid #0f172a;
    padding-bottom: 1px;
  }
`,Ub=wr.div`
  max-width: 960px;
  margin: 24px auto;
  padding: 0 16px;
  color: #475569;
`,Hb=wr.div`
  max-width: 960px;
  margin: 24px auto;
  padding: 0 16px;
  color: #c00;
`;function Wb(){var e;const{noticeId:t}=ne(),n=te(),[a,o]=(0,r.useState)(null),[i,l]=(0,r.useState)(!1),[s,c]=(0,r.useState)(null);if((0,r.useEffect)((()=>{(async()=>{l(!0),c(null);try{const{data:e}=await bm.get(`/notices/${t}`);o(e)}catch(lw){c(lw)}finally{l(!1)}})()}),[t]),i)return(0,Ko.jsx)(Ub,{children:"\ubd88\ub7ec\uc624\ub294 \uc911..."});if(s)return(0,Ko.jsx)(Hb,{children:"\uc874\uc7ac\ud558\uc9c0 \uc54a\uac70\ub098 \uc0ad\uc81c\ub41c \uacf5\uc9c0\uc785\ub2c8\ub2e4."});if(!a)return null;const u=a.createdAt?new Date(a.createdAt).toLocaleString():"";return(0,Ko.jsxs)(_b,{children:[(0,Ko.jsx)(Mb,{onClick:()=>n(-1),children:"\u2190 \ub4a4\ub85c"}),(0,Ko.jsx)(Db,{children:a.title}),(0,Ko.jsxs)(Lb,{children:[a.authorNickname," \xb7 \uc870\ud68c ",null!==(e=a.viewCount)&&void 0!==e?e:0," \xb7 ",u]}),(0,Ko.jsx)(Ib,{children:(0,Ko.jsx)(Bb,{children:a.content})}),(0,Ko.jsx)(Fb,{children:(0,Ko.jsx)(ze,{to:"/notices",children:"\ubaa9\ub85d\uc73c\ub85c"})})]})}const Yb=wr.div`
  max-width: 960px;
  margin: 24px auto;
  padding: 0 16px;
`,Vb=wr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`,Gb=wr.h1`
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  color: #0f172a;
`,Qb=wr.button`
  padding: 8px 12px;
  border-radius: 10px;
  background: #0f172a;
  color: #fff;
  border: 1px solid #0f172a;
  cursor: pointer;
  transition: transform .04s ease, box-shadow .15s ease;
  &:hover { box-shadow: 0 6px 16px rgba(15,23,42,.18); }
  &:active { transform: translateY(1px); }
`,qb=wr.div`
  border-top: 1px solid #e2e8f0;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
`,Kb=wr.div`
  display: grid;
  grid-template-columns: 1fr 160px 160px 120px;
  gap: 8px;
  padding: 12px 12px;
  border-bottom: 1px solid #e2e8f0;
  &:last-child { border-bottom: 0; }
`,Xb=wr.div`
  font-weight: 700;
  color: #0f172a;
  a { color: inherit; text-decoration: none; }
`,Zb=wr.span`
  color: #64748b;
  align-self: center;
`,Jb=wr.div`
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: flex-start;

  button {
    padding: 6px 10px;
    border-radius: 10px;
    border: 1px solid #cbd5e1;
    background: #fff;
    cursor: pointer;
  }
`,ey=wr.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 16px;
`,ty=wr.button`
  padding: 6px 10px;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  background: #fff;
  cursor: pointer;
  &:disabled { opacity: .5; cursor: not-allowed; }
`,ny=wr.p`
  color: #475569;
`,ry=wr.p`
  color: #c00;
`,ay=wr.p`
  color: #64748b;
  padding: 16px 0;
`;function oy(){var e;const[t,n]=$e(),a=Number(null!==(e=t.get("page"))&&void 0!==e?e:0),[o,i]=(0,r.useState)(Number.isNaN(a)?0:a),[l,s]=(0,r.useState)([]),[c,u]=(0,r.useState)({totalPages:0,number:0,first:!0,last:!0}),[d,p]=(0,r.useState)(!1),[f,h]=(0,r.useState)(null),g=te(),m=(0,r.useMemo)((()=>({page:o,size:10,sort:"createdAt,DESC",active:!0})),[o]),x=(0,r.useCallback)((async()=>{p(!0),h(null);try{var e,t,n;const{data:r}=await bm.get("/notices",{params:m}),a=(Array.isArray(null===r||void 0===r?void 0:r.content)?r.content:[]).filter((e=>!1!==(null===e||void 0===e?void 0:e.active)));s(a),u({totalPages:null!==(e=null===r||void 0===r?void 0:r.totalPages)&&void 0!==e?e:0,number:null!==(t=null===r||void 0===r?void 0:r.number)&&void 0!==t?t:0,first:!(null===r||void 0===r||!r.first),last:!(null===r||void 0===r||!r.last)}),0===a.length&&(null!==(n=null===r||void 0===r?void 0:r.totalPages)&&void 0!==n?n:0)>0&&o>0&&i((e=>Math.max(0,e-1)))}catch(lw){h(lw)}finally{p(!1)}}),[m,o]);(0,r.useEffect)((()=>{x()}),[x]),(0,r.useEffect)((()=>{n({page:o})}),[o,n]);const v=e=>{e<0||e>=c.totalPages||i(e)};return(0,Ko.jsxs)(Yb,{children:[(0,Ko.jsxs)(Vb,{children:[(0,Ko.jsx)(Gb,{children:"\uacf5\uc9c0 \uad00\ub9ac"}),(0,Ko.jsx)(Qb,{onClick:()=>g("/admin/notices/new"),children:"+ \uc0c8 \uacf5\uc9c0"})]}),d&&(0,Ko.jsx)(ny,{children:"\ubd88\ub7ec\uc624\ub294 \uc911..."}),f&&(0,Ko.jsx)(ry,{children:"\ubaa9\ub85d \ub85c\ub4dc \uc2e4\ud328"}),!d&&0===l.length&&(0,Ko.jsx)(ay,{children:"\ub4f1\ub85d\ub41c \uacf5\uc9c0\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."}),l.length>0&&(0,Ko.jsx)(qb,{children:l.map((e=>(0,Ko.jsxs)(Kb,{children:[(0,Ko.jsx)(Xb,{children:(0,Ko.jsx)(ze,{to:`/notices/${e.id}`,children:e.title})}),(0,Ko.jsx)(Zb,{children:e.authorNickname||"\uad00\ub9ac\uc790"}),(0,Ko.jsx)(Zb,{children:e.createdAt?new Date(e.createdAt).toLocaleString():"-"}),(0,Ko.jsxs)(Jb,{children:[(0,Ko.jsx)("button",{onClick:()=>g(`/admin/notices/${e.id}/edit`),children:"\uc218\uc815"}),(0,Ko.jsx)("button",{onClick:()=>(async e=>{if(window.confirm("\uc774 \uacf5\uc9c0\ub97c \uc0ad\uc81c(\ube44\ud65c\uc131\ud654)\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"))try{await bm.delete(`/admin/notices/${e}`),await x(),alert("\uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")}catch(lw){console.error(lw),alert("\uc0ad\uc81c\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4. \uad8c\ud55c\uc744 \ud655\uc778\ud558\uc138\uc694.")}})(e.id),children:"\uc0ad\uc81c"})]})]},e.id)))}),c.totalPages>1&&(0,Ko.jsxs)(ey,{children:[(0,Ko.jsx)(ty,{onClick:()=>v(0),disabled:c.first,children:"\u226a"}),(0,Ko.jsx)(ty,{onClick:()=>v(o-1),disabled:c.first,children:"\uc774\uc804"}),(0,Ko.jsxs)("span",{children:[o+1," / ",c.totalPages]}),(0,Ko.jsx)(ty,{onClick:()=>v(o+1),disabled:c.last,children:"\ub2e4\uc74c"}),(0,Ko.jsx)(ty,{onClick:()=>v(c.totalPages-1),disabled:c.last,children:"\u226b"})]})]})}const iy=wr.form`
  display: grid;
  gap: 12px;
`,ly=wr.label`
  display: grid;
  gap: 6px;
  font-size: 14px;
  color: #0f172a;
`,sy=wr.input`
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  outline: none;
  transition: border-color .15s ease, box-shadow .15s ease;
  &:focus {
    border-color: #0f172a;
    box-shadow: 0 0 0 3px rgba(15,23,42,.12);
  }
`,cy=wr.textarea`
  width: 100%;
  min-height: 160px;
  padding: 8px 10px;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  resize: vertical;
  outline: none;
  transition: border-color .15s ease, box-shadow .15s ease;
  &:focus {
    border-color: #0f172a;
    box-shadow: 0 0 0 3px rgba(15,23,42,.12);
  }
`,uy=wr.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`,dy=wr.button`
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid #0f172a;
  background: #0f172a;
  color: #fff;
  cursor: pointer;
  transition: transform .04s ease, box-shadow .15s ease, opacity .15s ease;
  &:hover { box-shadow: 0 6px 16px rgba(15,23,42,.18); }
  &:active { transform: translateY(1px); }
  &:disabled { opacity: .6; cursor: not-allowed; }
`;function py(e){var t,n;let{initial:a,busy:o,onSubmit:i}=e;const[l,s]=(0,r.useState)(null!==(t=null===a||void 0===a?void 0:a.title)&&void 0!==t?t:""),[c,u]=(0,r.useState)(null!==(n=null===a||void 0===a?void 0:a.content)&&void 0!==n?n:"");(0,r.useEffect)((()=>{var e,t;s(null!==(e=null===a||void 0===a?void 0:a.title)&&void 0!==e?e:""),u(null!==(t=null===a||void 0===a?void 0:a.content)&&void 0!==t?t:"")}),[a]);return(0,Ko.jsxs)(iy,{onSubmit:e=>{e.preventDefault(),i({title:l.trim(),content:c.trim()})},children:[(0,Ko.jsxs)(ly,{htmlFor:"notice-title",children:["\uc81c\ubaa9",(0,Ko.jsx)(sy,{id:"notice-title",type:"text",value:l,onChange:e=>s(e.target.value),required:!0,placeholder:"\uacf5\uc9c0 \uc81c\ubaa9"})]}),(0,Ko.jsxs)(ly,{htmlFor:"notice-content",children:["\ub0b4\uc6a9",(0,Ko.jsx)(cy,{id:"notice-content",value:c,onChange:e=>u(e.target.value),required:!0,placeholder:"\uacf5\uc9c0 \ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694",rows:10})]}),(0,Ko.jsx)(uy,{children:(0,Ko.jsx)(dy,{type:"submit",disabled:o,children:o?"\uc800\uc7a5 \uc911...":"\uc800\uc7a5"})})]})}const fy=wr.div`
  max-width: 960px;
  margin: 24px auto;
  padding: 0 16px;
`,hy=wr.h1`
  margin: 0 0 16px;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.2px;
  color: #0f172a;
`,gy=wr.div`
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);
`,my=wr.div`
  max-width: 960px;
  margin: 24px auto;
  padding: 0 16px;
  color: #475569;
`,xy=wr.div`
  max-width: 960px;
  margin: 24px auto;
  padding: 0 16px;
  color: #c00;
`;function vy(){const{noticeId:e}=ne(),t=te(),n=!e||"new"===e,[a,o]=(0,r.useState)(null),[i,l]=(0,r.useState)(!1),[s,c]=(0,r.useState)(null);(0,r.useEffect)((()=>{n||(async()=>{try{const{data:t}=await bm.get(`/notices/${e}`);o({title:t.title,content:t.content})}catch(lw){c(lw)}})()}),[n,e]);return n||a||s?s?(0,Ko.jsx)(xy,{children:"\uacf5\uc9c0 \uc815\ubcf4\ub97c \ubd88\ub7ec\uc624\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4."}):(0,Ko.jsxs)(fy,{children:[(0,Ko.jsx)(hy,{children:n?"\uc0c8 \uacf5\uc9c0 \uc791\uc131":"\uacf5\uc9c0 \uc218\uc815"}),(0,Ko.jsx)(gy,{children:(0,Ko.jsx)(py,{initial:a,busy:i,onSubmit:async r=>{l(!0),c(null);try{if(n){const{data:e}=await bm.post("/admin/notices",r);alert("\uc0dd\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),t(`/notices/${e}`)}else await bm.put(`/admin/notices/${e}`,r),alert("\uc218\uc815\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),t(`/notices/${e}`)}catch(lw){console.error(lw),c(lw),alert("\uc800\uc7a5\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4. (\uad8c\ud55c \ub610\ub294 \uc785\ub825\uac12 \ud655\uc778)")}finally{l(!1)}}})})]}):(0,Ko.jsx)(my,{children:"\ubd88\ub7ec\uc624\ub294 \uc911..."})}const by=wr.div`
  max-width: 960px;
  margin: 24px auto;
  padding: 0 16px;
`,yy=wr.div`
  display: flex;
  gap: 12px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  flex-wrap: wrap;
`,wy=wr.h1`
  margin: 0;
  font-size: 22px;
  font-weight: 800;
  color: #0f172a;
`,ky=wr.div`
  display: flex;
  gap: 8px;
`,Sy=wr.button`
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid #0f172a;
  background: #0f172a;
  color: #fff;
  cursor: pointer;
  transition: transform .04s ease, box-shadow .15s ease, opacity .15s ease;
  &:hover { box-shadow: 0 6px 16px rgba(15,23,42,.18); }
  &:active { transform: translateY(1px); }
  &:disabled { opacity: .6; cursor: not-allowed; }
`,jy=wr.button`
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #0f172a;
  cursor: pointer;
`,Ay=wr.div`
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background: #fff;
  overflow: hidden;
`,Cy=wr.div`
  display: grid;
  grid-template-columns: 120px 1fr 140px 110px 120px;
  gap: 8px;
  padding: 12px 12px;
  border-bottom: 1px solid #e2e8f0;
  &:last-child { border-bottom: 0; }
`,Ey=wr.div`
  display: flex;
  align-items: center;
  color: #0f172a;
`,Ty=wr.span`
  display: inline-flex;
  align-items: center;
  height: 26px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  background: #eff6ff;
  color: #1d4ed8;
  border: 1px solid #bfdbfe;
`,zy=wr.span`
  display: inline-flex;
  align-items: center;
  height: 26px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  ${e=>{let{$read:t}=e;return t?"background:#ecfccb;color:#3f6212;border:1px solid #d9f99d;":"background:#fee2e2;color:#991b1b;border:1px solid #fecaca;"}}
`,Py=wr(ze)`
  color: #0f172a;
  text-decoration: none;
  border-bottom: 1px solid #0f172a;
  padding-bottom: 1px;
`,Ny=wr.div`
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;

  button {
    padding: 6px 10px;
    border-radius: 10px;
    border: 1px solid #cbd5e1;
    background: #fff;
    cursor: pointer;
  }
`,$y=wr.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 16px;
  align-items: center;
`,Ry=wr.button`
  padding: 6px 10px;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  background: #fff;
  cursor: pointer;
  &:disabled { opacity: .5; cursor: not-allowed; }
`,Oy=wr.span`
  padding: 0 8px;
  color: #0f172a;
`,_y=wr.p` color:#475569; `,My=wr.p` color:#c00; `,Dy=wr.p` color:#64748b; `;function Ly(){var e;const t=te(),[n,a]=$e(),o=Number(null!==(e=n.get("page"))&&void 0!==e?e:0),[i,l]=(0,r.useState)(Number.isNaN(o)?0:o),[s,c]=(0,r.useState)([]),[u,d]=(0,r.useState)({totalPages:0,number:0,first:!0,last:!0}),[p,f]=(0,r.useState)(!1),[h,g]=(0,r.useState)(null),m=(0,r.useMemo)((()=>({page:i,size:10,sort:"createdAt,DESC"})),[i]),x=(0,r.useCallback)((async()=>{f(!0),g(null);try{var e;const{data:t}=await bm.get("/notifications",{params:m});c(null!==(e=t.content)&&void 0!==e?e:[]),d({totalPages:t.totalPages,number:t.number,first:t.first,last:t.last})}catch(lw){g(lw)}finally{f(!1)}}),[m]);(0,r.useEffect)((()=>{x()}),[x]),(0,r.useEffect)((()=>{a({page:i})}),[i,a]);const v=e=>{e<0||e>=u.totalPages||l(e)},b=e=>{const t=(e=>{if(!e)return"#";try{const t=new URL(e,window.location.origin);return t.origin===window.location.origin?t.pathname+t.search+t.hash:e}catch{return e}})(e),n=t.match(/^\/boards\/(\d+)/);return n?`/trace/detail/${n[1]}`:t};return(0,Ko.jsxs)(by,{children:[(0,Ko.jsxs)(yy,{children:[(0,Ko.jsx)(wy,{children:"\uc54c\ub9bc"}),(0,Ko.jsxs)(ky,{children:[(0,Ko.jsx)(jy,{onClick:x,children:"\uc0c8\ub85c\uace0\uce68"}),(0,Ko.jsx)(Sy,{onClick:async()=>{if(window.confirm("\ubaa8\ub4e0 \uc54c\ub9bc\uc744 \uc77d\uc74c \ucc98\ub9ac\ud560\uae4c\uc694?"))try{await bm.post("/notifications/read-all"),l(0),await x()}catch(lw){alert("\uc804\uccb4 \uc77d\uc74c \ucc98\ub9ac \uc2e4\ud328")}},children:"\uc804\uccb4 \uc77d\uc74c"})]})]}),p&&(0,Ko.jsx)(_y,{children:"\ubd88\ub7ec\uc624\ub294 \uc911..."}),h&&(0,Ko.jsx)(My,{children:"\ubaa9\ub85d\uc744 \ubd88\ub7ec\uc624\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4."}),!p&&0===s.length&&(0,Ko.jsx)(Dy,{children:"\uc54c\ub9bc\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."}),s.length>0&&(0,Ko.jsxs)(Ko.Fragment,{children:[(0,Ko.jsx)(Ay,{children:s.map((e=>{const n=e.createdAt?new Date(e.createdAt).toLocaleString():"";return(0,Ko.jsxs)(Cy,{children:[(0,Ko.jsx)(Ey,{children:(0,Ko.jsx)(Ty,{children:e.type})}),(0,Ko.jsx)(Ey,{style:{fontWeight:700},children:e.message}),(0,Ko.jsx)(Ey,{children:n}),(0,Ko.jsx)(Ey,{children:(0,Ko.jsx)(zy,{$read:e.read,children:e.read?"\uc77d\uc74c":"\uc548 \uc77d\uc74c"})}),(0,Ko.jsxs)(Ny,{children:[e.link&&(0,Ko.jsx)(Py,{to:b(e.link),onClick:n=>{n.preventDefault(),(async e=>{const n=b(e.link);try{e.read||(await bm.post(`/notifications/${e.id}/read`),await x())}catch(Ht){}finally{t(n)}})(e)},children:"\ubc14\ub85c\uac00\uae30"}),!e.read&&(0,Ko.jsx)("button",{onClick:()=>(async e=>{try{await bm.post(`/notifications/${e}/read`),await x()}catch(lw){alert("\uc77d\uc74c \ucc98\ub9ac \uc2e4\ud328")}})(e.id),children:"\uc77d\uc74c"})]})]},e.id)}))}),u.totalPages>1&&(0,Ko.jsxs)($y,{children:[(0,Ko.jsx)(Ry,{onClick:()=>v(0),disabled:u.first,children:"\u226a"}),(0,Ko.jsx)(Ry,{onClick:()=>v(i-1),disabled:u.first,children:"\uc774\uc804"}),(0,Ko.jsxs)(Oy,{children:[i+1," / ",u.totalPages]}),(0,Ko.jsx)(Ry,{onClick:()=>v(i+1),disabled:u.last,children:"\ub2e4\uc74c"}),(0,Ko.jsx)(Ry,{onClick:()=>v(u.totalPages-1),disabled:u.last,children:"\u226b"})]})]})]})}const Iy=wr.div`
  max-width: 1100px;
  margin: 24px auto;
  padding: 0 16px;
`,By=wr.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 12px;
  margin-bottom: 12px;
`,Fy=wr.h1`
  margin: 0;
  font-size: 22px;
  font-weight: 800;
  color: #0f172a;
`,Uy=wr.p`
  margin: 0;
  color: #64748b;
  font-size: 14px;
`,Hy=wr.div`
  display: grid;
  grid-template-columns: repeat( auto-fill, minmax(260px, 1fr) );
  gap: 14px;
`,Wy=wr(ze)`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 6px 18px rgba(15,23,42,.06);
  transition: transform .05s ease, box-shadow .15s ease;
  &:hover { box-shadow: 0 12px 24px rgba(15,23,42,.10); transform: translateY(-1px); }
`,Yy=wr.div`
  background: #f1f5f9;
  aspect-ratio: 16/9;
  width: 100%;
  img {
    width: 100%; height: 100%; object-fit: cover; display: block;
  }
`,Vy=wr.div`
  padding: 12px;
  display: grid;
  gap: 8px;
`,Gy=wr.h3`
  margin: 0;
  font-size: 16px;
  line-height: 1.4;
  color: #0f172a;
`,Qy=wr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #64748b;
  font-size: 13px;
`,qy=wr(ze)`
  color: #0f172a;
  font-weight: 700;
  text-decoration: none;
  &:hover { text-decoration: underline; }
`,Ky=wr.div`
  display: flex;
  gap: 10px;
  color: #64748b;
  font-size: 13px;
`,Xy=wr.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 18px;
  align-items: center;
`,Zy=wr.button`
  padding: 6px 10px;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  background: #fff;
  cursor: pointer;
  &:disabled { opacity: .5; cursor: not-allowed; }
`,Jy=wr.span`
  padding: 0 8px;
  color: #0f172a;
`,ew=wr.p` color:#475569; `,tw=wr.p` color:#c00; `,nw=wr.p` color:#64748b; `,rw=e=>"number"===typeof e?e.toLocaleString():"-";function aw(){var e;const[t,n]=$e(),a=Number(null!==(e=t.get("page"))&&void 0!==e?e:0),[o,i]=(0,r.useState)(Number.isNaN(a)?0:a),[l,s]=(0,r.useState)([]),[c,u]=(0,r.useState)({totalPages:0,number:0,first:!0,last:!0}),[d,p]=(0,r.useState)(!1),[f,h]=(0,r.useState)(null),g=(0,r.useMemo)((()=>({page:o,size:12,sort:"createdAt,DESC"})),[o]),m=(0,r.useCallback)((async()=>{p(!0),h(null);try{var e;const{data:t}=await bm.get("/feed",{params:g});s(null!==(e=t.content)&&void 0!==e?e:[]),u({totalPages:t.totalPages,number:t.number,first:t.first,last:t.last})}catch(lw){h(lw)}finally{p(!1)}}),[g]);(0,r.useEffect)((()=>{m()}),[m]),(0,r.useEffect)((()=>{n({page:o})}),[o,n]);const x=e=>{e<0||e>=c.totalPages||i(e)};return(0,Ko.jsxs)(Iy,{children:[(0,Ko.jsx)(By,{children:(0,Ko.jsxs)("div",{children:[(0,Ko.jsx)(Fy,{children:"\ud53c\ub4dc"}),(0,Ko.jsx)(Uy,{children:"\ub0b4\uac00 \ud314\ub85c\uc6b0\ud55c \uc0ac\ub78c\ub4e4\uc758 \ucd5c\uc2e0 \uac8c\uc2dc\uae00"})]})}),d&&(0,Ko.jsx)(ew,{children:"\ubd88\ub7ec\uc624\ub294 \uc911..."}),f&&(0,Ko.jsx)(tw,{children:"\ud53c\ub4dc\ub97c \ubd88\ub7ec\uc624\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4."}),!d&&0===l.length&&(0,Ko.jsx)(nw,{children:"\ud314\ub85c\uc6b0\ud55c \uc0ac\uc6a9\uc790\uc758 \uac8c\uc2dc\uae00\uc774 \uc544\uc9c1 \uc5c6\uc5b4\uc694."}),l.length>0&&(0,Ko.jsxs)(Ko.Fragment,{children:[(0,Ko.jsx)(Hy,{children:l.map((e=>{const t=`/boards/${e.id}`,n=`/users/${e.authorId}`;return(0,Ko.jsxs)(Wy,{to:t,children:[(0,Ko.jsx)(Yy,{children:e.thumbnailUrl?(0,Ko.jsx)("img",{src:e.thumbnailUrl,alt:""}):null}),(0,Ko.jsxs)(Vy,{children:[(0,Ko.jsx)(Gy,{title:e.title,children:e.title}),(0,Ko.jsxs)(Qy,{children:[(0,Ko.jsx)(qy,{to:n,children:e.authorNickname}),(0,Ko.jsx)("span",{children:(r=e.createdAt,r?new Date(r).toLocaleString():"")})]}),(0,Ko.jsxs)(Ky,{children:[(0,Ko.jsxs)("span",{children:["\uc88b\uc544\uc694 ",rw(e.likeCount)]}),(0,Ko.jsxs)("span",{children:["\uc870\ud68c ",rw(e.viewCount)]})]})]})]},e.id);var r}))}),c.totalPages>1&&(0,Ko.jsxs)(Xy,{children:[(0,Ko.jsx)(Zy,{onClick:()=>x(0),disabled:c.first,children:"\u226a"}),(0,Ko.jsx)(Zy,{onClick:()=>x(o-1),disabled:c.first,children:"\uc774\uc804"}),(0,Ko.jsxs)(Jy,{children:[o+1," / ",c.totalPages]}),(0,Ko.jsx)(Zy,{onClick:()=>x(o+1),disabled:c.last,children:"\ub2e4\uc74c"}),(0,Ko.jsx)(Zy,{onClick:()=>x(c.totalPages-1),disabled:c.last,children:"\u226b"})]})]})]})}const ow=()=>(0,Ko.jsxs)("div",{children:[(0,Ko.jsx)(li,{}),(0,Ko.jsx)(be,{children:(0,Ko.jsxs)(xe,{children:[(0,Ko.jsx)(xe,{exact:!0,path:"/",element:(0,Ko.jsx)(Pd,{})}),(0,Ko.jsx)(xe,{exact:!0,path:"/trace/detail/:no",element:(0,Ko.jsx)(fg,{})}),(0,Ko.jsx)(xe,{exact:!0,path:"/trace/create",element:(0,Ko.jsx)(Fg,{})}),(0,Ko.jsx)(xe,{exact:!0,path:"/trace/update/:no",element:(0,Ko.jsx)(xm,{})}),(0,Ko.jsx)(xe,{exact:!0,path:"/nibangnebang",element:(0,Ko.jsx)(tp,{})}),(0,Ko.jsx)(xe,{exact:!0,path:"/nibangnebang/:id",element:(0,Ko.jsx)(wb,{})}),(0,Ko.jsx)(xe,{exact:!0,path:"/nibangnebang/create",element:(0,Ko.jsx)(Zv,{})}),(0,Ko.jsx)(xe,{exact:!0,path:"/nibangnebang/update/:id",element:(0,Ko.jsx)(eb,{})}),(0,Ko.jsx)(xe,{exact:!0,path:"/page3",element:(0,Ko.jsx)(Nd,{})}),(0,Ko.jsx)(xe,{exact:!0,path:"/login",element:(0,Ko.jsx)(zi,{})}),(0,Ko.jsx)(xe,{exact:!0,path:"/register",element:(0,Ko.jsx)(xp,{})}),(0,Ko.jsx)(xe,{exact:!0,path:"/profile",element:(0,Ko.jsx)(kh,{})}),(0,Ko.jsx)(xe,{exact:!0,path:"/admin",element:(0,Ko.jsx)(Zm,{})}),(0,Ko.jsx)(xe,{exact:!0,path:"/admin/users",element:(0,Ko.jsx)(mx,{})}),(0,Ko.jsx)(xe,{exact:!0,path:"/admin/boards",element:(0,Ko.jsx)(Hx,{})}),(0,Ko.jsx)(xe,{exact:!0,path:"/admin/users/:userId/boards",element:(0,Ko.jsx)(tx,{})}),(0,Ko.jsx)(xe,{exact:!0,path:"/admin/users/:userId/comments",element:(0,Ko.jsx)(Vx,{})}),(0,Ko.jsx)(xe,{path:"/admin/users/:userId/memos",element:(0,Ko.jsx)(nx,{})}),(0,Ko.jsx)(xe,{path:"/admin/comments",element:(0,Ko.jsx)(Qx,{})}),(0,Ko.jsx)(xe,{path:"/admin/reports",element:(0,Ko.jsx)(qx,{})}),(0,Ko.jsx)(xe,{path:"/admin/dashboard/detailed",element:(0,Ko.jsx)(Xx,{})}),(0,Ko.jsx)(xe,{path:"/admin/banned-words",element:(0,Ko.jsx)(Cv,{})}),(0,Ko.jsx)(xe,{path:"/admin/reviews",element:(0,Ko.jsx)(zv,{})}),(0,Ko.jsx)(xe,{path:"/notices",element:(0,Ko.jsx)(Ob,{})}),(0,Ko.jsx)(xe,{path:"/notices/:noticeId",element:(0,Ko.jsx)(Wb,{})}),(0,Ko.jsx)(xe,{path:"/admin/notices",element:(0,Ko.jsx)(oy,{})}),(0,Ko.jsx)(xe,{path:"/admin/notices/new",element:(0,Ko.jsx)(vy,{})}),(0,Ko.jsx)(xe,{path:"/admin/notices/:noticeId/edit",element:(0,Ko.jsx)(vy,{})}),(0,Ko.jsx)(xe,{path:"/notifications",element:(0,Ko.jsx)(Ly,{})}),(0,Ko.jsx)(xe,{path:"/feed",element:(0,Ko.jsx)(aw,{})})]})})]}),iw=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then((t=>{let{getCLS:n,getFID:r,getFCP:a,getLCP:o,getTTFB:i}=t;n(e),r(e),a(e),o(e),i(e)}))};o.createRoot(document.getElementById("root")).render((0,Ko.jsx)(r.StrictMode,{children:(0,Ko.jsx)(Ce,{children:(0,Ko.jsx)(ow,{})})})),iw()})()})();
//# sourceMappingURL=main.9b10b3c8.js.map