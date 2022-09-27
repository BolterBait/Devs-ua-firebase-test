!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}})),a.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),a.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){return o.apply(null,arguments)};var r,n=(r=a("gD1JV"))&&r.__esModule?r:{default:r};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,r){return(o=i()?Reflect.construct:function(e,t,r){var a=[null];a.push.apply(a,t);var i=new(Function.bind.apply(e,a));return r&&n.default(i,r.prototype),i}).apply(null,arguments)}})),a.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),a("4Nugj");var i=a("bpxeT"),o=a("2TvXO"),s=a("b7ONl"),c=a("5hsTI"),u=a("iU1Pc"),l=a("4Nugj"),f=new(0,s.default);function h(){return(h=e(i)(e(o).mark((function t(r){var n,a;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(l.refs.backdropEntranceEl===r.target){t.next=2;break}return t.abrupt("return");case 2:return l.refs.backdropEntranceEl.classList.add("visually-hidden"),l.refs.page.classList.remove("no-scroll"),t.prev=4,t.next=7,f.fetchNonAlchogol();case 7:n=t.sent.data,a=n.drinks,(0,c.baseMarkUpCreate)(a,l.refs.menu_container),l.refs.headerEl.classList.add("visually-hidden"),l.refs.menu_wrap.classList.add("visually-hidden"),l.refs.heroImg.style.width="700px",l.refs.heroImgWrap.style.width="400px",l.refs.heroImgWrap.style.top="-40px",e(u).Notify.info("Only Non alchoholic cocktails for you",{timeout:"4000"}),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(4),console.log(t.t0);case 21:case"end":return t.stop()}}),t,null,[[4,18]])})))).apply(this,arguments)}l.refs.confirmButtonEl.addEventListener("click",(function(e){e.preventDefault(),l.refs.backdropEntranceEl.classList.add("visually-hidden"),l.refs.page.classList.remove("no-scroll")})),l.refs.backdropEntranceEl.addEventListener("click",(function(e){return h.apply(this,arguments)}));i=a("bpxeT"),o=a("2TvXO"),s=a("b7ONl"),c=a("5hsTI"),u=a("iU1Pc"),l=a("4Nugj");var p=new(0,s.default);function d(){return(d=e(i)(e(o).mark((function t(r){var n,a,i;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),1!==(n=r.target.textContent.toLowerCase()).length){t.next=21;break}return p.letter=n,t.prev=4,t.next=7,p.fetchByLetter();case 7:a=t.sent.data,i=a.drinks,console.log(i),v(),(0,c.baseMarkUpCreate)(i,l.refs.menu_container),t.next=19;break;case 14:t.prev=14,t.t0=t.catch(4),console.error(t.t0),e(u).Notify.failure("There are no cocktails with this name!"),v();case 19:t.next=22;break;case 21:e(u).Notify.failure("Please, push letter or number!");case 22:case"end":return t.stop()}}),t,null,[[4,14]])})))).apply(this,arguments)}function v(){l.refs.menu_container.innerHTML=""}l.refs.menu_wrap.addEventListener("click",(function(e){return d.apply(this,arguments)})),a("3jSZ7"),a("b7ONl"),a("c7Et0"),a("5hsTI"),a("kQreO"),a("8ONga");i=a("bpxeT");var b=a("8MBJY"),y=a("a2hTj"),g=a("hKHmD"),m={};Object.defineProperty(m,"__esModule",{value:!0}),m.default=function(e){return _.default(e)||w.default(e)||k.default(e)||E.default()};var _=I(a("kMC0W")),w=I(a("7AJDX")),E=I(a("8CtQK")),k=I(a("auk6i"));function I(e){return e&&e.__esModule?e:{default:e}}o=a("2TvXO"),i=a("bpxeT"),b=a("8MBJY"),y=a("a2hTj");var S={};Object.defineProperty(S,"__esModule",{value:!0}),S.default=function(e,t){return D.default(e)||C.default(e,t)||O.default(e,t)||x.default()};var D=A(a("8slrw")),C=A(a("7AJDX")),x=A(a("ifqQW")),O=A(a("auk6i"));function A(e){return e&&e.__esModule?e:{default:e}}o=a("2TvXO");var M=a("ds8z5"),B=(b=a("8MBJY"),y=a("a2hTj"),a("eYQtU")),T={};Object.defineProperty(T,"__esModule",{value:!0}),T.default=function(e){return H(e)};var L=R(a("ge8co")),N=R(a("cZGw3")),P=R(a("fVNic")),j=R(a("gD1JV"));function R(e){return e&&e.__esModule?e:{default:e}}function H(e){var t="function"==typeof Map?new Map:void 0;return H=function(e){if(null===e||!N.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return L.default(e,arguments,P.default(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),j.default(r,e)},H(e)}var V=a("2MbLg"),W=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var a=e.charCodeAt(n);a<128?t[r++]=a:a<2048?(t[r++]=a>>6|192,t[r++]=63&a|128):55296==(64512&a)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++n)),t[r++]=a>>18|240,t[r++]=a>>12&63|128,t[r++]=a>>6&63|128,t[r++]=63&a|128):(t[r++]=a>>12|224,t[r++]=a>>6&63|128,t[r++]=63&a|128)}return t},F={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],a=0;a<e.length;a+=3){var i=e[a],o=a+1<e.length,s=o?e[a+1]:0,c=a+2<e.length,u=c?e[a+2]:0,l=i>>2,f=(3&i)<<4|s>>4,h=(15&s)<<2|u>>6,p=63&u;c||(p=64,o||(h=64)),n.push(r[l],r[f],r[h],r[p])}return n.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(W(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],r=0,n=0;r<e.length;){var a=e[r++];if(a<128)t[n++]=String.fromCharCode(a);else if(a>191&&a<224){var i=e[r++];t[n++]=String.fromCharCode((31&a)<<6|63&i)}else if(a>239&&a<365){var o=((7&a)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(o>>10)),t[n++]=String.fromCharCode(56320+(1023&o))}else{var s=e[r++],c=e[r++];t[n++]=String.fromCharCode((15&a)<<12|(63&s)<<6|63&c)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],a=0;a<e.length;){var i=r[e.charAt(a++)],o=a<e.length?r[e.charAt(a)]:0,s=++a<e.length?r[e.charAt(a)]:64,c=++a<e.length?r[e.charAt(a)]:64;if(++a,null==i||null==o||null==s||null==c)throw Error();var u=i<<2|o>>4;if(n.push(u),64!==s){var l=o<<4&240|s>>2;if(n.push(l),64!==c){var f=s<<6&192|c;n.push(f)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},z=function(e){return function(e){var t=W(e);return F.encodeByteArray(t,!0)}(e).replace(/\./g,"")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var U=function(){"use strict";function t(){var r=this;e(b)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){r.resolve=e,r.reject=t}))}return e(y)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(r,n){r?t.reject(r):t.resolve(n),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(r):e(r,n))}}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var G=function(t){"use strict";e(B)(n,t);var r=e(V)(n);function n(t,a,i){var o;return e(b)(this,n),(o=r.call(this,a)).code=t,o.customData=i,o.name="FirebaseError",Object.setPrototypeOf(e(M)(o),n.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(M)(o),J.prototype.create),o}return n}(e(T)(Error)),J=function(){"use strict";function t(r,n,a){e(b)(this,t),this.service=r,this.serviceName=n,this.errors=a}return e(y)(t,[{key:"create",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var a=r[0]||{},i="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?$(o,a):"Error",c="".concat(this.serviceName,": ").concat(s," (").concat(i,")."),u=new G(i,c,a);return u}}]),t}();function $(e,t){return e.replace(K,(function(e,r){var n=t[r];return null!=n?String(n):"<".concat(r,"?>")}))}var K=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e,t){if(e===t)return!0;var r=Object.keys(e),n=Object.keys(t),a=!0,i=!1,o=void 0;try{for(var s,c=r[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var u=s.value;if(!n.includes(u))return!1;var l=e[u],f=t[u];if(Q(l)&&Q(f)){if(!X(l,f))return!1}else if(l!==f)return!1}}catch(e){i=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(i)throw o}}var h=!0,p=!1,d=void 0;try{for(var v,b=n[Symbol.iterator]();!(h=(v=b.next()).done);h=!0){var y=v.value;if(!r.includes(y))return!1}}catch(e){p=!0,d=e}finally{try{h||null==b.return||b.return()}finally{if(p)throw d}}return!0}function Q(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q=function(){"use strict";function t(r,n,a){e(b)(this,t),this.name=r,this.instanceFactory=n,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(y)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),Y="[DEFAULT]",Z=function(){"use strict";function t(r,n){e(b)(this,t),this.name=r,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(y)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var r=new U;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{var n=this.getOrInitializeService({instanceIdentifier:t});n&&r.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:Y})}catch(e){}var r=!0,n=!1,a=void 0;try{for(var i,o=this.instancesDeferred.entries()[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var s=e(S)(i.value,2),c=s[0],u=s[1],l=this.normalizeInstanceIdentifier(c);try{var f=this.getOrInitializeService({instanceIdentifier:l});u.resolve(f)}catch(e){}}}catch(e){n=!0,a=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw a}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(i)(e(o).mark((function r(){var n;return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=Array.from(t.instances.values()),r.next=3,Promise.all(e(m)(n.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(m)(n.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return r.stop()}}),r)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.options,n=void 0===r?{}:r,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error("".concat(this.name,"(").concat(a,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var i=this.getOrInitializeService({instanceIdentifier:a,options:n}),o=!0,s=!1,c=void 0;try{for(var u,l=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(u=l.next()).done);o=!0){var f=e(S)(u.value,2),h=f[0],p=f[1],d=this.normalizeInstanceIdentifier(h);a===d&&p.resolve(i)}}catch(e){s=!0,c=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw c}}return i}},{key:"onInit",value:function(e,t){var r,n=this.normalizeInstanceIdentifier(t),a=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;a.add(e),this.onInitCallbacks.set(n,a);var i=this.instances.get(n);return i&&e(i,n),function(){a.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var r=this.onInitCallbacks.get(t);if(r){var n=!0,a=!1,i=void 0;try{for(var o,s=r[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var c=o.value;try{c(e,t)}catch(e){}}}catch(e){a=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}}}},{key:"getOrInitializeService",value:function(e){var t,r=e.instanceIdentifier,n=e.options,a=void 0===n?{}:n,i=this.instances.get(r);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:(t=r,t===Y?void 0:t),options:a}),this.instances.set(r,i),this.instancesOptions.set(r,a),this.invokeOnInitCallbacks(i,r),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,r,i)}catch(e){}return i||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y;return this.component?this.component.multipleInstances?e:Y:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee,te,re=function(){"use strict";function t(r){e(b)(this,t),this.name=r,this.providers=new Map}return e(y)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Z(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),ne=(b=a("8MBJY"),y=a("a2hTj"),g=a("hKHmD"),[]);(te=ee||(ee={}))[te.DEBUG=0]="DEBUG",te[te.VERBOSE=1]="VERBOSE",te[te.INFO=2]="INFO",te[te.WARN=3]="WARN",te[te.ERROR=4]="ERROR",te[te.SILENT=5]="SILENT";var ae,ie={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},oe=ee.INFO,se=(ae={},e(g)(ae,ee.DEBUG,"log"),e(g)(ae,ee.VERBOSE,"log"),e(g)(ae,ee.INFO,"info"),e(g)(ae,ee.WARN,"warn"),e(g)(ae,ee.ERROR,"error"),ae),ce=function(t,r){for(var n=arguments.length,a=new Array(n>2?n-2:0),i=2;i<n;i++)a[i-2]=arguments[i];var o;if(!(r<t.logLevel)){var s=(new Date).toISOString(),c=se[r];if(!c)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(r,")"));(o=console)[c].apply(o,["[".concat(s,"]  ").concat(t.name,":")].concat(e(m)(a)))}},ue=function(){"use strict";function t(r){e(b)(this,t),this.name=r,this._logLevel=oe,this._logHandler=ce,this._userLogHandler=null,ne.push(this)}return e(y)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in ee))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?ie[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,ee.DEBUG].concat(e(m)(r))),this._logHandler.apply(this,[this,ee.DEBUG].concat(e(m)(r)))}},{key:"log",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,ee.VERBOSE].concat(e(m)(r))),this._logHandler.apply(this,[this,ee.VERBOSE].concat(e(m)(r)))}},{key:"info",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,ee.INFO].concat(e(m)(r))),this._logHandler.apply(this,[this,ee.INFO].concat(e(m)(r)))}},{key:"warn",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,ee.WARN].concat(e(m)(r))),this._logHandler.apply(this,[this,ee.WARN].concat(e(m)(r)))}},{key:"error",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,ee.ERROR].concat(e(m)(r))),this._logHandler.apply(this,[this,ee.ERROR].concat(e(m)(r)))}}]),t}();i=a("bpxeT");var le={};Object.defineProperty(le,"__esModule",{value:!0}),le.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){he.default(e,t,r[t])}))}return e};var fe,he=(fe=a("hKHmD"))&&fe.__esModule?fe:{default:fe};var pe,de;o=a("2TvXO");var ve=new WeakMap,be=new WeakMap,ye=new WeakMap,ge=new WeakMap,me=new WeakMap;var _e={get:function(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return be.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ye.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return ke(e[t])},set:function(e,t,r){return e[t]=r,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function we(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(de||(de=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.apply(Ie(this),r),ke(ve.get(this))}:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return ke(t.apply(Ie(this),r))}:function(r){for(var n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];var o,s=(o=t).call.apply(o,[Ie(this),r].concat(e(m)(a)));return ye.set(s,r.sort?r.sort():[r]),ke(s)}}function Ee(e){return"function"==typeof e?we(e):(e instanceof IDBTransaction&&function(e){if(!be.has(e)){var t=new Promise((function(t,r){var n=function(){e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=function(){t(),n()},i=function(){r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)}));be.set(e,t)}}(e),t=e,(pe||(pe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,_e):e);var t}function ke(e){if(e instanceof IDBRequest)return t=e,(r=new Promise((function(e,r){var n=function(){t.removeEventListener("success",a),t.removeEventListener("error",i)},a=function(){e(ke(t.result)),n()},i=function(){r(t.error),n()};t.addEventListener("success",a),t.addEventListener("error",i)}))).then((function(e){e instanceof IDBCursor&&ve.set(e,t)})).catch((function(){})),me.set(r,t),r;var t,r;if(ge.has(e))return ge.get(e);var n=Ee(e);return n!==e&&(ge.set(e,n),me.set(n,e)),n}var Ie=function(e){return me.get(e)};function Se(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.blocked,a=r.upgrade,i=r.blocking,o=r.terminated,s=indexedDB.open(e,t),c=ke(s);return a&&s.addEventListener("upgradeneeded",(function(e){a(ke(s.result),e.oldVersion,e.newVersion,ke(s.transaction))})),n&&s.addEventListener("blocked",(function(){return n()})),c.then((function(e){o&&e.addEventListener("close",(function(){return o()})),i&&e.addEventListener("versionchange",(function(){return i()}))})).catch((function(){})),c}var De=["get","getKey","getAll","getAllKeys","count"],Ce=["put","add","delete","clear"],xe=new Map;function Oe(t,r){if(t instanceof IDBDatabase&&!(r in t)&&"string"==typeof r){if(xe.get(r))return xe.get(r);var n=r.replace(/FromIndex$/,""),a=r!==n,s=Ce.includes(n);if(n in(a?IDBIndex:IDBObjectStore).prototype&&(s||De.includes(n))){var c,u=(c=e(i)(e(o).mark((function t(r){var i,c,u,l,f,h,p=arguments;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(i=p.length,c=new Array(i>1?i-1:0),u=1;u<i;u++)c[u-1]=p[u];return f=this.transaction(r,s?"readwrite":"readonly"),h=f.store,a&&(h=h.index(c.shift())),t.next=7,Promise.all([(l=h)[n].apply(l,e(m)(c)),s&&f.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return c.apply(this,arguments)});return xe.set(r,u),u}}}_e=function(t){return e(le)({},t,{get:function(e,r,n){return Oe(e,r)||t.get(e,r,n)},has:function(e,r){return!!Oe(e,r)||t.has(e,r)}})}(_e);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ae=function(){"use strict";function t(r){e(b)(this,t),this.container=r}return e(y)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var Me,Be,Te="@firebase/app",Le="0.7.33",Ne=new ue("@firebase/app"),Pe="[DEFAULT]",je=(Me={},e(g)(Me,Te,"fire-core"),e(g)(Me,"@firebase/app-compat","fire-core-compat"),e(g)(Me,"@firebase/analytics","fire-analytics"),e(g)(Me,"@firebase/analytics-compat","fire-analytics-compat"),e(g)(Me,"@firebase/app-check","fire-app-check"),e(g)(Me,"@firebase/app-check-compat","fire-app-check-compat"),e(g)(Me,"@firebase/auth","fire-auth"),e(g)(Me,"@firebase/auth-compat","fire-auth-compat"),e(g)(Me,"@firebase/database","fire-rtdb"),e(g)(Me,"@firebase/database-compat","fire-rtdb-compat"),e(g)(Me,"@firebase/functions","fire-fn"),e(g)(Me,"@firebase/functions-compat","fire-fn-compat"),e(g)(Me,"@firebase/installations","fire-iid"),e(g)(Me,"@firebase/installations-compat","fire-iid-compat"),e(g)(Me,"@firebase/messaging","fire-fcm"),e(g)(Me,"@firebase/messaging-compat","fire-fcm-compat"),e(g)(Me,"@firebase/performance","fire-perf"),e(g)(Me,"@firebase/performance-compat","fire-perf-compat"),e(g)(Me,"@firebase/remote-config","fire-rc"),e(g)(Me,"@firebase/remote-config-compat","fire-rc-compat"),e(g)(Me,"@firebase/storage","fire-gcs"),e(g)(Me,"@firebase/storage-compat","fire-gcs-compat"),e(g)(Me,"@firebase/firestore","fire-fst"),e(g)(Me,"@firebase/firestore-compat","fire-fst-compat"),e(g)(Me,"fire-js","fire-js"),e(g)(Me,"firebase","fire-js-all"),Me),Re=new Map,He=new Map;function Ve(e,t){try{e.container.addComponent(t)}catch(r){Ne.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),r)}}function We(e){var t=e.name;if(He.has(t))return Ne.debug("There were multiple attempts to register component ".concat(t,".")),!1;He.set(t,e);var r=!0,n=!1,a=void 0;try{for(var i,o=Re.values()[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){Ve(i.value,e)}}catch(e){n=!0,a=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw a}}return!0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Fe=(Be={},e(g)(Be,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),e(g)(Be,"bad-app-name","Illegal App name: '{$appName}"),e(g)(Be,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(g)(Be,"app-deleted","Firebase App named '{$appName}' already deleted"),e(g)(Be,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(g)(Be,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(g)(Be,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),e(g)(Be,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),e(g)(Be,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),e(g)(Be,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),Be),ze=new J("app","Firebase",Fe),Ue=function(){"use strict";function t(r,n,a){var i=this;e(b)(this,t),this._isDeleted=!1,this._options=Object.assign({},r),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new q("app",(function(){return i}),"PUBLIC"))}return e(y)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw ze.create("app-deleted",{appName:this._name})}}]),t}();function Ge(e,t,r){var n,a=null!==(n=je[e])&&void 0!==n?n:e;r&&(a+="-".concat(r));var i=a.match(/\s|\//),o=t.match(/\s|\//);if(i||o){var s=['Unable to register library "'.concat(a,'" with version "').concat(t,'":')];return i&&s.push('library name "'.concat(a,'" contains illegal characters (whitespace or "/")')),i&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void Ne.warn(s.join(" "))}We(new q("".concat(a,"-version"),(function(){return{library:a,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Je="firebase-heartbeat-store",$e=null;function Ke(){return $e||($e=Se("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(Je)}}).catch((function(e){throw ze.create("idb-open",{originalErrorMessage:e.message})}))),$e}function Xe(e){return Qe.apply(this,arguments)}function Qe(){return(Qe=e(i)(e(o).mark((function t(r){var n,a,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Ke();case 4:return a=e.sent,e.abrupt("return",a.transaction(Je).objectStore(Je).get(Ze(r)));case 8:e.prev=8,e.t0=e.catch(1),e.t0 instanceof G?Ne.warn(e.t0.message):(i=ze.create("idb-get",{originalErrorMessage:null===(n=e.t0)||void 0===n?void 0:n.message}),Ne.warn(i.message));case 11:case"end":return e.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function qe(e,t){return Ye.apply(this,arguments)}function Ye(){return(Ye=e(i)(e(o).mark((function t(r,n){var a,i,s,c,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Ke();case 4:return i=e.sent,s=i.transaction(Je,"readwrite"),c=s.objectStore(Je),e.next=9,c.put(n,Ze(r));case 9:return e.abrupt("return",s.done);case 12:e.prev=12,e.t0=e.catch(1),e.t0 instanceof G?Ne.warn(e.t0.message):(u=ze.create("idb-set",{originalErrorMessage:null===(a=e.t0)||void 0===a?void 0:a.message}),Ne.warn(u.message));case 15:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}function Ze(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et=function(){"use strict";function t(r){var n=this;e(b)(this,t),this.container=r,this._heartbeatsCache=null;var a=this.container.getProvider("app").getImmediate();this._storage=new at(a),this._heartbeatsCachePromise=this._storage.read().then((function(e){return n._heartbeatsCache=e,e}))}return e(y)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(i)(e(o).mark((function r(){var n,a,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.container.getProvider("platform-logger").getImmediate(),a=n.getPlatformInfoString(),i=tt(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==i&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===i}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:i,agent:a});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),r)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(i)(e(o).mark((function r(){var n,a,i,s,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(n=tt(),a=rt(t._heartbeatsCache.heartbeats),i=a.heartbeatsToSend,s=a.unsentEntries,c=z(JSON.stringify({version:2,heartbeats:i})),t._heartbeatsCache.lastSentHeartbeatDate=n,!(s.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=s,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",c);case 17:case"end":return e.stop()}}),r)})))()}}]),t}();function tt(){return(new Date).toISOString().substring(0,10)}function rt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,r=[],n=e.slice(),a=!0,i=!1,o=void 0;try{for(var s,c=function(e,a){var i=a.value,o=r.find((function(e){return e.agent===i.agent}));if(o){if(o.dates.push(i.date),it(r)>t)return o.dates.pop(),"break"}else if(r.push({agent:i.agent,dates:[i.date]}),it(r)>t)return r.pop(),"break";n=n.slice(1)},u=e[Symbol.iterator]();!(a=(s=u.next()).done);a=!0){var l=c(u,s);if("break"===l)break}}catch(e){i=!0,o=e}finally{try{a||null==u.return||u.return()}finally{if(i)throw o}}return{heartbeatsToSend:r,unsentEntries:n}}var nt,at=function(){"use strict";function t(r){e(b)(this,t),this.app=r,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(y)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(i)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("object"==typeof indexedDB){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",new Promise((function(e,t){try{var r=!0,n="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(n);a.onsuccess=function(){a.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},a.onupgradeneeded=function(){r=!1},a.onerror=function(){var e;t((null===(e=a.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(i)(e(o).mark((function r(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,Xe(t.app);case 9:return n=e.sent,e.abrupt("return",n||{heartbeats:[]});case 11:case"end":return e.stop()}}),r)})))()}},{key:"overwrite",value:function(t){var r=this;return e(i)(e(o).mark((function n(){var a,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,r._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,r.read();case 10:return i=e.sent,e.abrupt("return",qe(r.app,{lastSentHeartbeatDate:null!==(a=t.lastSentHeartbeatDate)&&void 0!==a?a:i.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),n)})))()}},{key:"add",value:function(t){var r=this;return e(i)(e(o).mark((function n(){var a,i;return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,r._canUseIndexedDBPromise;case 3:if(n.sent){n.next=8;break}return n.abrupt("return");case 8:return n.next=10,r.read();case 10:return i=n.sent,n.abrupt("return",qe(r.app,{lastSentHeartbeatDate:null!==(a=t.lastSentHeartbeatDate)&&void 0!==a?a:i.lastSentHeartbeatDate,heartbeats:e(m)(i.heartbeats).concat(e(m)(t.heartbeats))}));case 12:case"end":return n.stop()}}),n)})))()}}]),t}();function it(e){return z(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nt="",We(new q("platform-logger",(function(e){return new Ae(e)}),"PRIVATE")),We(new q("heartbeat",(function(e){return new et(e)}),"PRIVATE")),Ge(Te,Le,nt),Ge(Te,Le,"esm2017"),Ge("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ge("firebase","9.10.0","app");!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"!=typeof t){var r=t;t={name:r}}var n=Object.assign({name:Pe,automaticDataCollectionEnabled:!1},t),a=n.name;if("string"!=typeof a||!a)throw ze.create("bad-app-name",{appName:String(a)});var i=Re.get(a);if(i){if(X(e,i.options)&&X(n,i.config))return i;throw ze.create("duplicate-app",{appName:a})}var o=new re(a),s=!0,c=!1,u=void 0;try{for(var l,f=He.values()[Symbol.iterator]();!(s=(l=f.next()).done);s=!0){var h=l.value;o.addComponent(h)}}catch(e){c=!0,u=e}finally{try{s||null==f.return||f.return()}finally{if(c)throw u}}var p=new Ue(e,n,o);Re.set(a,p)}({apiKey:"AIzaSyBMQEt78CaPaq3dSOfApmBG4vPslBGp6pQ",authDomain:"filmoteka-5bf07.firebaseapp.com",projectId:"filmoteka-5bf07",storageBucket:"filmoteka-5bf07.appspot.com",messagingSenderId:"626342412224",appId:"1:626342412224:web:b02b966cc92ff4eefbd225",measurementId:"G-X5BM5EZZVP"})}();
//# sourceMappingURL=index.67f7c873.js.map
