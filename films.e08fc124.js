!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i);var a,o=i("dDDEV"),s=i("6Urw1"),u=i("bpxeT"),c=i("8MBJY"),l=i("a2hTj"),f=i("hKHmD"),h=i("1t1Wn"),d=i("2TvXO"),p=i("MjY8E"),v=i("kZfxc"),y=i("2xDiJ"),m=i("6ExWU"),g=(u=i("bpxeT"),f=i("hKHmD"),i("8nrFW")),k=(d=i("2TvXO"),p=i("MjY8E"),m=i("6ExWU"),y=i("2xDiJ"),i("ajgRO")),w="@firebase/installations",b="0.5.12",x=1e4,T="w:".concat(b),I="FIS_v2",_=36e5,S=(a={},e(f)(a,"missing-app-config-values",'Missing App configuration value: "{$valueName}"'),e(f)(a,"not-registered","Firebase Installation is not registered."),e(f)(a,"installation-not-found","Firebase Installation not found."),e(f)(a,"request-failed",'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'),e(f)(a,"app-offline","Could not process request. Application offline."),e(f)(a,"delete-pending-registration","Can't delete installation while there is a pending registration request."),a),E=new(0,y.ErrorFactory)("installations","Installations",S);function A(e){return e instanceof y.FirebaseError&&e.code.includes("request-failed")}
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
 */function D(e){var t=e.projectId;return"".concat("https://firebaseinstallations.googleapis.com/v1","/projects/").concat(t,"/installations")}function P(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function C(e,t){return N.apply(this,arguments)}function N(){return(N=e(u)(e(d).mark((function t(n,r){var i,a;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.json();case 2:return i=e.sent,a=i.error,e.abrupt("return",E.create("request-failed",{requestName:n,serverCode:a.code,serverMessage:a.message,serverStatus:a.status}));case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function F(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function V(e,t){var n=t.refreshToken,r=F(e);return r.append("Authorization",function(e){return"".concat(I," ").concat(e)}(n)),r}function R(e){return O.apply(this,arguments)}function O(){return(O=e(u)(e(d).mark((function t(n){var r;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:if(!((r=e.sent).status>=500&&r.status<600)){e.next=5;break}return e.abrupt("return",n());case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function M(e,t){return L.apply(this,arguments)}function L(){return(L=
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
e(u)(e(d).mark((function t(n,r){var i,a,o,s,u,c,l,f,h,p,v,y;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.appConfig,a=n.heartbeatServiceProvider,o=r.fid,s=D(i),u=F(i),!(c=a.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,c.getHeartbeatsHeader();case 7:(l=e.sent)&&u.append("x-firebase-client",l);case 9:return f={fid:o,authVersion:I,appId:i.appId,sdkVersion:T},h={method:"POST",headers:u,body:JSON.stringify(f)},e.next=13,R((function(){return fetch(s,h)}));case 13:if(!(p=e.sent).ok){e.next=22;break}return e.next=17,p.json();case 17:return v=e.sent,y={fid:v.fid||o,registrationStatus:2,refreshToken:v.refreshToken,authToken:P(v.authToken)},e.abrupt("return",y);case 22:return e.next=24,C("Create Installation",p);case 24:throw e.sent;case 25:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */function j(e){return new Promise((function(t){setTimeout(t,e)}))}
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
var q=/^[cdef][\w-]{21}$/;function U(){try{var t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;var n=function(t){return(n=t,btoa((r=String).fromCharCode.apply(r,e(g)(n))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var n,r}
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
 */(t);return q.test(n)?n:""}catch(e){return""}}function B(e){return"".concat(e.appName,"!").concat(e.appId)}
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
 */var z=new Map;function K(e,t){var n=B(e);G(n,t),function(e,t){var n=H();n&&n.postMessage({key:e,fid:t});Q()}(n,t)}function G(e,t){var n=z.get(e);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}var Y=null;function H(){return!Y&&"BroadcastChannel"in self&&((Y=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){G(e.data.key,e.data.fid)}),Y}function Q(){0===z.size&&Y&&(Y.close(),Y=null)}
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
 */var W="firebase-installations-store",$=null;function X(){return $||($=(0,k.openDB)("firebase-installations-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(W)}})),$}function J(e,t){return Z.apply(this,arguments)}function Z(){return(Z=e(u)(e(d).mark((function t(n,r){var i,a,o,s,u;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=B(n),e.next=3,X();case 3:return a=e.sent,o=a.transaction(W,"readwrite"),s=o.objectStore(W),e.next=8,s.get(i);case 8:return u=e.sent,e.next=11,s.put(r,i);case 11:return e.next=13,o.done;case 13:return u&&u.fid===r.fid||K(n,r.fid),e.abrupt("return",r);case 15:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ee(e){return te.apply(this,arguments)}function te(){return(te=e(u)(e(d).mark((function t(n){var r,i,a;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=B(n),e.next=3,X();case 3:return i=e.sent,a=i.transaction(W,"readwrite"),e.next=7,a.objectStore(W).delete(r);case 7:return e.next=9,a.done;case 9:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ne(e,t){return re.apply(this,arguments)}function re(){return(re=e(u)(e(d).mark((function t(n,r){var i,a,o,s,u,c;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=B(n),e.next=3,X();case 3:return a=e.sent,o=a.transaction(W,"readwrite"),s=o.objectStore(W),e.next=8,s.get(i);case 8:if(u=e.sent,void 0!==(c=r(u))){e.next=15;break}return e.next=13,s.delete(i);case 13:e.next=17;break;case 15:return e.next=17,s.put(c,i);case 17:return e.next=19,o.done;case 19:return!c||u&&u.fid===c.fid||K(n,c.fid),e.abrupt("return",c);case 21:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ie(e){return ae.apply(this,arguments)}function ae(){return(ae=
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
e(u)(e(d).mark((function t(n){var r,i;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,ne(n.appConfig,(function(e){var t=oe(e),i=se(n,t);return r=i.registrationPromise,i.installationEntry}));case 3:if(""!==(i=e.sent).fid){e.next=9;break}return e.next=7,r;case 7:return e.t0=e.sent,e.abrupt("return",{installationEntry:e.t0});case 9:return e.abrupt("return",{installationEntry:i,registrationPromise:r});case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function oe(e){return he(e||{fid:U(),registrationStatus:0})}function se(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(E.create("app-offline"))};var n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=function(e,t){return ue.apply(this,arguments)}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:ce(e)}:{installationEntry:t}}function ue(){return(ue=e(u)(e(d).mark((function t(n,r){var i;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M(n,r);case 3:return i=e.sent,e.abrupt("return",J(n.appConfig,i));case 7:if(e.prev=7,e.t0=e.catch(0),!A(e.t0)||409!==e.t0.customData.serverCode){e.next=14;break}return e.next=12,ee(n.appConfig);case 12:e.next=16;break;case 14:return e.next=16,J(n.appConfig,{fid:r.fid,registrationStatus:0});case 16:throw e.t0;case 17:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function ce(e){return le.apply(this,arguments)}function le(){return(le=e(u)(e(d).mark((function t(n){var r,i,a,o;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe(n.appConfig);case 2:r=e.sent;case 3:if(1!==r.registrationStatus){e.next=11;break}return e.next=6,j(100);case 6:return e.next=8,fe(n.appConfig);case 8:r=e.sent,e.next=3;break;case 11:if(0!==r.registrationStatus){e.next=22;break}return e.next=14,ie(n);case 14:if(i=e.sent,a=i.installationEntry,!(o=i.registrationPromise)){e.next=21;break}return e.abrupt("return",o);case 21:return e.abrupt("return",a);case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function fe(e){return ne(e,(function(e){if(!e)throw E.create("installation-not-found");return he(e)}))}function he(e){return 1===(t=e).registrationStatus&&t.registrationTime+x<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}function de(e,t){return pe.apply(this,arguments)}function pe(){return(pe=
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
e(u)(e(d).mark((function t(n,r){var i,a,o,s,u,c,l,f,h,p,v;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.appConfig,a=n.heartbeatServiceProvider,o=ve(i,r),s=V(i,r),!(u=a.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,u.getHeartbeatsHeader();case 7:(c=e.sent)&&s.append("x-firebase-client",c);case 9:return l={installation:{sdkVersion:T,appId:i.appId}},f={method:"POST",headers:s,body:JSON.stringify(l)},e.next=13,R((function(){return fetch(o,f)}));case 13:if(!(h=e.sent).ok){e.next=22;break}return e.next=17,h.json();case 17:return p=e.sent,v=P(p),e.abrupt("return",v);case 22:return e.next=24,C("Generate Auth Token",h);case 24:throw e.sent;case 25:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ve(e,t){var n=t.fid;return"".concat(D(e),"/").concat(n,"/authTokens:generate")}function ye(e){return me.apply(this,arguments)}function me(){return me=
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
e(u)(e(d).mark((function t(n){var r,i,a,o,s=arguments;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]&&s[1],e.next=4,ne(n.appConfig,(function(e){if(!Te(e))throw E.create("not-registered");var t=e.authToken;if(!r&&Ie(t))return e;if(1===t.requestStatus)return i=ge(n,r),e;if(!navigator.onLine)throw E.create("app-offline");var a=_e(e);return i=be(n,a),a}));case 4:if(a=e.sent,!i){e.next=11;break}return e.next=8,i;case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=a.authToken;case 12:return o=e.t0,e.abrupt("return",o);case 14:case"end":return e.stop()}}),t)}))),me.apply(this,arguments)}function ge(e,t){return ke.apply(this,arguments)}function ke(){return(ke=e(u)(e(d).mark((function t(n,r){var i,a;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,we(n.appConfig);case 2:i=e.sent;case 3:if(1!==i.authToken.requestStatus){e.next=11;break}return e.next=6,j(100);case 6:return e.next=8,we(n.appConfig);case 8:i=e.sent,e.next=3;break;case 11:if(0!==(a=i.authToken).requestStatus){e.next=16;break}return e.abrupt("return",ye(n,r));case 16:return e.abrupt("return",a);case 17:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function we(e){return ne(e,(function(e){if(!Te(e))throw E.create("not-registered");var t,n=e.authToken;return 1===(t=n).requestStatus&&t.requestTime+x<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}function be(e,t){return xe.apply(this,arguments)}function xe(){return(xe=e(u)(e(d).mark((function t(n,r){var i,a,o;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,de(n,r);case 3:return i=e.sent,a=Object.assign(Object.assign({},r),{authToken:i}),e.next=7,J(n.appConfig,a);case 7:return e.abrupt("return",i);case 10:if(e.prev=10,e.t0=e.catch(0),!A(e.t0)||401!==e.t0.customData.serverCode&&404!==e.t0.customData.serverCode){e.next=17;break}return e.next=15,ee(n.appConfig);case 15:e.next=20;break;case 17:return o=Object.assign(Object.assign({},r),{authToken:{requestStatus:0}}),e.next=20,J(n.appConfig,o);case 20:throw e.t0;case 21:case"end":return e.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function Te(e){return void 0!==e&&2===e.registrationStatus}function Ie(e){return 2===e.requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+_}(e)}function _e(e){var t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Se(){return(Se=
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
e(u)(e(d).mark((function t(n){var r,i,a,o;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n,e.next=3,ie(r);case 3:return i=e.sent,a=i.installationEntry,(o=i.registrationPromise)?o.catch(console.error):ye(r).catch(console.error),e.abrupt("return",a.fid);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ee(){return Ee=
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
e(u)(e(d).mark((function t(n){var r,i,a,o=arguments;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]&&o[1],i=n,e.next=4,Ae(i);case 4:return e.next=6,ye(i,r);case 6:return a=e.sent,e.abrupt("return",a.token);case 8:case"end":return e.stop()}}),t)}))),Ee.apply(this,arguments)}function Ae(e){return De.apply(this,arguments)}function De(){return(De=e(u)(e(d).mark((function t(n){var r;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie(n);case 2:if(!(r=e.sent.registrationPromise)){e.next=6;break}return e.next=6,r;case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Pe(e){return E.create("missing-app-config-values",{valueName:e})}
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
 */var Ce="installations",Ne=function(e){var t=e.getProvider("app").getImmediate(),n=
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
function(e){if(!e||!e.options)throw Pe("App Configuration");if(!e.name)throw Pe("App Name");var t=!0,n=!1,r=void 0;try{for(var i,a=["projectId","apiKey","appId"][Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(!e.options[o])throw Pe(o)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:(0,p._getProvider)(t,"heartbeat"),_delete:function(){return Promise.resolve()}}},Fe=function(e){var t=e.getProvider("app").getImmediate(),n=(0,p._getProvider)(t,Ce).getImmediate(),r={getId:function(){return function(e){return Se.apply(this,arguments)}(n)},getToken:function(e){return function(e){return Ee.apply(this,arguments)}(n,e)}};return r};(0,p._registerComponent)(new(0,m.Component)(Ce,Ne,"PUBLIC")),(0,p._registerComponent)(new(0,m.Component)("installations-internal",Fe,"PRIVATE")),(0,p.registerVersion)(w,b),(0,p.registerVersion)(w,b,"esm2017");
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
var Ve,Re="analytics",Oe=6e4,Me="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Le="https://www.googletagmanager.com/gtag/js",je=new(0,v.Logger)("@firebase/analytics");
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
function qe(e){return Promise.all(e.map((function(e){return e.catch((function(e){return e}))})))}function Ue(e,t){var n=document.createElement("script");n.src="".concat(Le,"?l=").concat(e,"&id=").concat(t),n.async=!0,document.head.appendChild(n)}function Be(e,t,n,r,i,a){return ze.apply(this,arguments)}function ze(){return(ze=e(u)(e(d).mark((function t(n,r,i,a,o,s){var u,c,l;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=a[o],e.prev=1,!u){e.next=7;break}return e.next=5,r[u];case 5:e.next=14;break;case 7:return e.next=9,qe(i);case 9:if(c=e.sent,!(l=c.find((function(e){return e.measurementId===o})))){e.next=14;break}return e.next=14,r[l.appId];case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),je.error(e.t0);case 19:n("config",o,s);case 20:case"end":return e.stop()}}),t,null,[[1,16]])})))).apply(this,arguments)}function Ke(e,t,n,r,i){return Ge.apply(this,arguments)}function Ge(){return(Ge=e(u)(e(d).mark((function t(n,r,i,a,o){var s,u,c,l,f,h,p,v,y,m,g;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,s=[],!o||!o.send_to){e.next=38;break}return u=o.send_to,Array.isArray(u)||(u=[u]),e.next=7,qe(i);case 7:c=e.sent,l=!0,f=!1,h=void 0,e.prev=9,p=u[Symbol.iterator]();case 11:if(l=(v=p.next()).done){e.next=24;break}if(y=v.value,m=c.find((function(e){return e.measurementId===y})),!(g=m&&r[m.appId])){e.next=19;break}s.push(g),e.next=21;break;case 19:return s=[],e.abrupt("break",24);case 21:l=!0,e.next=11;break;case 24:e.next=30;break;case 26:e.prev=26,e.t0=e.catch(9),f=!0,h=e.t0;case 30:e.prev=30,e.prev=31,l||null==p.return||p.return();case 33:if(e.prev=33,!f){e.next=36;break}throw h;case 36:return e.finish(33);case 37:return e.finish(30);case 38:return 0===s.length&&(s=Object.values(r)),e.next=41,Promise.all(s);case 41:n("event",a,o||{}),e.next=47;break;case 44:e.prev=44,e.t1=e.catch(0),je.error(e.t1);case 47:case"end":return e.stop()}}),t,null,[[0,44],[9,26,30,38],[31,,33,37]])})))).apply(this,arguments)}function Ye(t,n,r,i,a){var o=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];window[i].push(arguments)};return window[a]&&"function"==typeof window[a]&&(o=window[a]),window[a]=function(t,n,r,i){function a(){return(a=e(u)(e(d).mark((function a(o,s,u){return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"event"!==o){e.next=6;break}return e.next=4,Ke(t,n,r,s,u);case 4:e.next=12;break;case 6:if("config"!==o){e.next=11;break}return e.next=9,Be(t,n,r,i,s,u);case 9:e.next=12;break;case 11:"consent"===o?t("consent","update",u):t("set",s);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),je.error(e.t0);case 17:case"end":return e.stop()}}),a,null,[[0,14]])})))).apply(this,arguments)}return function(e,t,n){return a.apply(this,arguments)}}(o,t,n,r),{gtagCore:o,wrappedGtag:window[a]}}function He(){var e=window.document.getElementsByTagName("script"),t=!0,n=!1,r=void 0;try{for(var i,a=Object.values(e)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(o.src&&o.src.includes(Le))return o}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null}
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
var Qe=(Ve={},e(f)(Ve,"already-exists","A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId."),e(f)(Ve,"already-initialized","initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance."),e(f)(Ve,"already-initialized-settings","Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect."),e(f)(Ve,"interop-component-reg-failed","Firebase Analytics Interop Component failed to instantiate: {$reason}"),e(f)(Ve,"invalid-analytics-context","Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),e(f)(Ve,"indexeddb-unavailable","IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),e(f)(Ve,"fetch-throttle","The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}."),e(f)(Ve,"config-fetch-failed","Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}"),e(f)(Ve,"no-api-key",'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.'),e(f)(Ve,"no-app-id",'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'),Ve),We=new(0,y.ErrorFactory)("analytics","Analytics",Qe),$e=function(){"use strict";function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;e(c)(this,t),this.throttleMetadata=n,this.intervalMillis=r}return e(l)(t,[{key:"getThrottleMetadata",value:function(e){return this.throttleMetadata[e]}},{key:"setThrottleMetadata",value:function(e,t){this.throttleMetadata[e]=t}},{key:"deleteThrottleMetadata",value:function(e){delete this.throttleMetadata[e]}}]),t}(),Xe=new $e;function Je(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}function Ze(e){return et.apply(this,arguments)}function et(){return(et=e(u)(e(d).mark((function t(n){var r,i,a,o,s,u,c,l;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.appId,a=n.apiKey,o={method:"GET",headers:Je(a)},s=Me.replace("{app-id}",i),e.next=6,fetch(s,o);case 6:if(200===(u=e.sent).status||304===u.status){e.next=19;break}return c="",e.prev=9,e.next=12,u.json();case 12:l=e.sent,(null===(r=l.error)||void 0===r?void 0:r.message)&&(c=l.error.message),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(9);case 18:throw We.create("config-fetch-failed",{httpStatus:u.status,responseMessage:c});case 19:return e.abrupt("return",u.json());case 20:case"end":return e.stop()}}),t,null,[[9,16]])})))).apply(this,arguments)}function tt(e){return nt.apply(this,arguments)}function nt(){return nt=e(u)(e(d).mark((function t(n){var r,i,a,o,s,c,l,f,h=arguments;return e(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=h.length>1&&void 0!==h[1]?h[1]:Xe,i=h.length>2?h[2]:void 0,a=n.options,o=a.appId,s=a.apiKey,c=a.measurementId,o){t.next=4;break}throw We.create("no-app-id");case 4:if(s){t.next=8;break}if(!c){t.next=7;break}return t.abrupt("return",{measurementId:c,appId:o});case 7:throw We.create("no-api-key");case 8:return l=r.getThrottleMetadata(o)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new ct,setTimeout(e(u)(e(d).mark((function t(){return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.abort();case 1:case"end":return e.stop()}}),t)}))),void 0!==i?i:Oe),t.abrupt("return",rt({appId:o,apiKey:s,measurementId:c},l,f,r));case 12:case"end":return t.stop()}}),t)}))),nt.apply(this,arguments)}function rt(e,t,n){return it.apply(this,arguments)}function it(){return it=e(u)(e(d).mark((function t(n,r,i){var a,o,s,u,c,l,f,h,p,v,m,g=arguments;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.throttleEndTimeMillis,o=r.backoffCount,s=g.length>3&&void 0!==g[3]?g[3]:Xe,l=n.appId,f=n.measurementId,e.prev=3,e.next=6,at(i,a);case 6:e.next=14;break;case 8:if(e.prev=8,e.t0=e.catch(3),!f){e.next=13;break}return je.warn("Timed out fetching this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(f)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null===(u=e.t0)||void 0===u?void 0:u.message,"]")),e.abrupt("return",{appId:l,measurementId:f});case 13:throw e.t0;case 14:return e.prev=14,e.next=17,Ze(n);case 17:return h=e.sent,s.deleteThrottleMetadata(l),e.abrupt("return",h);case 22:if(e.prev=22,e.t1=e.catch(14),ot(p=e.t1)){e.next=33;break}if(s.deleteThrottleMetadata(l),!f){e.next=32;break}return je.warn("Failed to fetch this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(f)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null==p?void 0:p.message,"]")),e.abrupt("return",{appId:l,measurementId:f});case 32:throw e.t1;case 33:return v=503===Number(null===(c=null==p?void 0:p.customData)||void 0===c?void 0:c.httpStatus)?(0,y.calculateBackoffMillis)(o,s.intervalMillis,30):(0,y.calculateBackoffMillis)(o,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+v,backoffCount:o+1},s.setThrottleMetadata(l,m),je.debug("Calling attemptFetch again in ".concat(v," millis")),e.abrupt("return",rt(n,m,i,s));case 38:case"end":return e.stop()}}),t,null,[[3,8],[14,22]])}))),it.apply(this,arguments)}function at(e,t){return new Promise((function(n,r){var i=Math.max(t-Date.now(),0),a=setTimeout(n,i);e.addEventListener((function(){clearTimeout(a),r(We.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function ot(e){if(!(e instanceof y.FirebaseError&&e.customData))return!1;var t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}var st,ut,ct=function(){"use strict";function t(){e(c)(this,t),this.listeners=[]}return e(l)(t,[{key:"addEventListener",value:function(e){this.listeners.push(e)}},{key:"abort",value:function(){this.listeners.forEach((function(e){return e()}))}}]),t}();
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
 */function lt(){return(lt=e(u)(e(d).mark((function t(n,r,i,a,o){var s,u;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o||!o.global){e.next=5;break}return n("event",i,a),e.abrupt("return");case 5:return e.next=7,r;case 7:s=e.sent,u=Object.assign(Object.assign({},a),{send_to:s}),n("event",i,u);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ft(e){ut=e}function ht(e){st=e}function dt(){return pt.apply(this,arguments)}function pt(){return(pt=
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
e(u)(e(d).mark((function t(){var n;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,y.isIndexedDBAvailable)()){e.next=6;break}return je.warn(We.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),e.abrupt("return",!1);case 6:return e.prev=6,e.next=9,(0,y.validateIndexedDBOpenable)();case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(6),je.warn(We.create("indexeddb-unavailable",{errorInfo:null===(n=e.t0)||void 0===n?void 0:n.toString()}).message),e.abrupt("return",!1);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),t,null,[[6,11]])})))).apply(this,arguments)}function vt(){return(vt=e(u)(e(d).mark((function t(n,r,i,a,o,s,u){var c,l,f,p,v,y,m;return e(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(l=tt(n)).then((function(e){i[e.measurementId]=e.appId,n.options.measurementId&&e.measurementId!==n.options.measurementId&&je.warn("The measurement ID in the local Firebase config (".concat(n.options.measurementId,")")+" does not match the measurement ID fetched from the server (".concat(e.measurementId,").")+" To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")})).catch((function(e){return je.error(e)})),r.push(l),f=dt().then((function(e){return e?a.getId():void 0})),t.t0=e(h),t.next=8,Promise.all([l,f]);case 8:return t.t1=t.sent,p=(0,t.t0)(t.t1,2),v=p[0],y=p[1],He()||Ue(s,v.measurementId),ut&&(o("consent","default",ut),ft(void 0)),o("js",new Date),(m=null!==(c=null==u?void 0:u.config)&&void 0!==c?c:{}).origin="firebase",m.update=!0,null!=y&&(m.firebase_id=y),o("config",v.measurementId,m),st&&(o("set",st),ht(void 0)),t.abrupt("return",v.measurementId);case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
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
 */var yt,mt,gt=function(){"use strict";function t(n){e(c)(this,t),this.app=n}return e(l)(t,[{key:"_delete",value:function(){return delete kt[this.app.options.appId],Promise.resolve()}}]),t}(),kt={},wt=[],bt={},xt="dataLayer",Tt="gtag",It=!1;function _t(e,t,n){!function(){var e=[];if((0,y.isBrowserExtension)()&&e.push("This is a browser extension environment."),(0,y.areCookiesEnabled)()||e.push("Cookies are not available."),e.length>0){var t=e.map((function(e,t){return"(".concat(t+1,") ").concat(e)})).join(" "),n=We.create("invalid-analytics-context",{errorInfo:t});je.warn(n.message)}}();var r,i,a=e.options.appId;if(!a)throw We.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw We.create("no-api-key");je.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest'+" measurement ID for this Firebase app. Falling back to the measurement ID ".concat(e.options.measurementId)+' provided in the "measurementId" field in the local Firebase config.')}if(null!=kt[a])throw We.create("already-exists",{id:a});if(!It){r=xt,i=[],Array.isArray(window[r])?i=window[r]:window[r]=i;var o=Ye(kt,wt,bt,xt,Tt),s=o.wrappedGtag,u=o.gtagCore;mt=s,yt=u,It=!0}return kt[a]=function(e,t,n,r,i,a,o){return vt.apply(this,arguments)}(e,wt,bt,t,yt,xt,n),new gt(e)}function St(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,p._getProvider)(e,Re);if(n.isInitialized()){var r=n.getImmediate();if((0,y.deepEqual)(t,n.getOptions()))return r;throw We.create("already-initialized")}var i=n.initialize({options:t});return i}function Et(e,t,n,r){e=(0,y.getModularInstance)(e),function(e,t,n,r,i){return lt.apply(this,arguments)}(mt,kt[e.app.options.appId],t,n,r).catch((function(e){return je.error(e)}))}var At="@firebase/analytics",Dt="0.8.0";(0,p._registerComponent)(new(0,m.Component)(Re,(function(e,t){var n=t.options;return _t(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),n)}),"PUBLIC")),(0,p._registerComponent)(new(0,m.Component)("analytics-internal",(function(e){try{var t=e.getProvider(Re).getImmediate();return{logEvent:function(e,n,r){return Et(t,e,n,r)}}}catch(e){throw We.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),(0,p.registerVersion)(At,Dt),(0,p.registerVersion)(At,Dt,"esm2017");u=i("bpxeT"),c=i("8MBJY");var Pt=i("ge8co"),Ct=(l=i("a2hTj"),i("jh8P3")),Nt=i("fVNic"),Ft=i("eYQtU"),Vt=i("jmhxu"),Rt=(h=i("1t1Wn"),g=i("8nrFW"),i("l5bVx"),i("2MbLg")),Ot=(d=i("2TvXO"),p=i("MjY8E"),m=i("6ExWU"),v=i("kZfxc"),y=i("2xDiJ"),function(){"use strict";function t(n){e(c)(this,t),this.uid=n}return e(l)(t,[{key:"isAuthenticated",value:function(){return null!=this.uid}},{key:"toKey",value:function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}},{key:"isEqual",value:function(e){return e.uid===this.uid}}]),t}());Ot.UNAUTHENTICATED=new Ot(null),Ot.GOOGLE_CREDENTIALS=new Ot("google-credentials-uid"),Ot.FIRST_PARTY=new Ot("first-party-uid"),Ot.MOCK_USER=new Ot("mock-user");
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
var Mt="9.10.0",Lt=new(0,v.Logger)("@firebase/firestore");
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
 */function jt(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Lt.logLevel<=v.LogLevel.DEBUG){var a,o=r.map(Bt);(a=Lt).debug.apply(a,["Firestore (".concat(Mt,"): ").concat(t)].concat(e(g)(o)))}}function qt(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Lt.logLevel<=v.LogLevel.ERROR){var a,o=r.map(Bt);(a=Lt).error.apply(a,["Firestore (".concat(Mt,"): ").concat(t)].concat(e(g)(o)))}}function Ut(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Lt.logLevel<=v.LogLevel.WARN){var a,o=r.map(Bt);(a=Lt).warn.apply(a,["Firestore (".concat(Mt,"): ").concat(t)].concat(e(g)(o)))}}function Bt(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */var t}
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
 */function zt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unexpected state",t="FIRESTORE (".concat(Mt,") INTERNAL ASSERTION FAILED: ")+e;throw qt(t),new Error(t)}function Kt(e,t){e||zt()}function Gt(e,t){return e}
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
 */var Yt="cancelled",Ht="unknown",Qt="invalid-argument",Wt="deadline-exceeded",$t="not-found",Xt="permission-denied",Jt="unauthenticated",Zt="resource-exhausted",en="failed-precondition",tn="aborted",nn="out-of-range",rn="unimplemented",an="internal",on="unavailable",sn=function(t){"use strict";e(Ft)(r,t);var n=e(Rt)(r);function r(t,i){var a;return e(c)(this,r),(a=n.call(this,t,i)).code=t,a.message=i,a.toString=function(){return"".concat(a.name,": [code=").concat(a.code,"]: ").concat(a.message)},e(Vt)(a)}return r}(y.FirebaseError),un=function t(n,r){"use strict";e(c)(this,t),this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(n))},cn=function(){"use strict";function t(){e(c)(this,t)}return e(l)(t,[{key:"getToken",value:function(){return Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(Ot.UNAUTHENTICATED)}))}},{key:"shutdown",value:function(){}}]),t}(),ln=function(){"use strict";function t(n){var r=this;e(c)(this,t),this.auth=null,n.onInit((function(e){r.auth=e}))}return e(l)(t,[{key:"getToken",value:function(){var e=this;return this.auth?this.auth.getToken().then((function(t){return t?(Kt("string"==typeof t.accessToken),new un(t.accessToken,new Ot(e.auth.getUid()))):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){}},{key:"shutdown",value:function(){}}]),t}(),fn=function(){"use strict";function t(n,r,i,a){e(c)(this,t),this.t=n,this.i=r,this.o=i,this.u=a,this.type="FirstParty",this.user=Ot.FIRST_PARTY,this.h=new Map}return e(l)(t,[{key:"l",value:function(){return this.u?this.u():(Kt(!("object"!=typeof this.t||null===this.t||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}},{key:"headers",get:function(){this.h.set("X-Goog-AuthUser",this.i);var e=this.l();return e&&this.h.set("Authorization",e),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}]),t}(),hn=function(){"use strict";function t(n,r,i,a){e(c)(this,t),this.t=n,this.i=r,this.o=i,this.u=a}return e(l)(t,[{key:"getToken",value:function(){return Promise.resolve(new fn(this.t,this.i,this.o,this.u))}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(Ot.FIRST_PARTY)}))}},{key:"shutdown",value:function(){}},{key:"invalidateToken",value:function(){}}]),t}(),dn=function t(n){"use strict";e(c)(this,t),this.value=n,this.type="AppCheck",this.headers=new Map,n&&n.length>0&&this.headers.set("x-firebase-appcheck",this.value)},pn=function(){"use strict";function t(n){var r=this;e(c)(this,t),this.m=n,this.appCheck=null,n.onInit((function(e){r.appCheck=e}))}return e(l)(t,[{key:"getToken",value:function(){return this.appCheck?this.appCheck.getToken().then((function(e){return e?(Kt("string"==typeof e.token),new dn(e.token)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){}},{key:"shutdown",value:function(){}}]),t}(),vn=function t(n,r,i,a,o,s,u,l){"use strict";e(c)(this,t),this.databaseId=n,this.appId=r,this.persistenceKey=i,this.host=a,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=u,this.useFetchStreams=l},yn=function(){"use strict";function t(n,r){e(c)(this,t),this.projectId=n,this.database=r||"(default)"}return e(l)(t,[{key:"isDefaultDatabase",get:function(){return"(default)"===this.database}},{key:"isEqual",value:function(e){return e instanceof t&&e.projectId===this.projectId&&e.database===this.database}}],[{key:"empty",value:function(){return new t("","")}}]),t}(),mn=function(){"use strict";function t(n,r,i){e(c)(this,t),void 0===r?r=0:r>n.length&&zt(),void 0===i?i=n.length-r:i>n.length-r&&zt(),this.segments=n,this.offset=r,this.len=i}return e(l)(t,[{key:"length",get:function(){return this.len}},{key:"isEqual",value:function(e){return 0===t.comparator(this,e)}},{key:"child",value:function(e){var n=this.segments.slice(this.offset,this.limit());return e instanceof t?e.forEach((function(e){n.push(e)})):n.push(e),this.construct(n)}},{key:"limit",value:function(){return this.offset+this.length}},{key:"popFirst",value:function(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}},{key:"popLast",value:function(){return this.construct(this.segments,this.offset,this.length-1)}},{key:"firstSegment",value:function(){return this.segments[this.offset]}},{key:"lastSegment",value:function(){return this.get(this.length-1)}},{key:"get",value:function(e){return this.segments[this.offset+e]}},{key:"isEmpty",value:function(){return 0===this.length}},{key:"isPrefixOf",value:function(e){if(e.length<this.length)return!1;for(var t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}},{key:"isImmediateParentOf",value:function(e){if(this.length+1!==e.length)return!1;for(var t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}},{key:"forEach",value:function(e){for(var t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}},{key:"toArray",value:function(){return this.segments.slice(this.offset,this.limit())}}],[{key:"comparator",value:function(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n;r++){var i=e.get(r),a=t.get(r);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}]),t}(),gn=function(t){"use strict";e(Ft)(r,t);var n=e(Rt)(r);function r(){return e(c)(this,r),n.apply(this,arguments)}return e(l)(r,[{key:"construct",value:function(e,t,n){return new r(e,t,n)}},{key:"canonicalString",value:function(){return this.toArray().join("/")}},{key:"toString",value:function(){return this.canonicalString()}}],[{key:"fromString",value:function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];var a=[],o=!0,s=!1,u=void 0;try{for(var c,l=n[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var f,h=c.value;if(h.indexOf("//")>=0)throw new sn(Qt,"Invalid segment (".concat(h,"). Paths must not contain // in them."));(f=a).push.apply(f,e(g)(h.split("/").filter((function(e){return e.length>0}))))}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return new r(a)}},{key:"emptyPath",value:function(){return new r([])}}]),r}(mn),kn=/^[_a-zA-Z][_a-zA-Z0-9]*$/,wn=function(t){"use strict";e(Ft)(r,t);var n=e(Rt)(r);function r(){return e(c)(this,r),n.apply(this,arguments)}return e(l)(r,[{key:"construct",value:function(e,t,n){return new r(e,t,n)}},{key:"canonicalString",value:function(){return this.toArray().map((function(e){return e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),r.isValidIdentifier(e)||(e="`"+e+"`"),e})).join(".")}},{key:"toString",value:function(){return this.canonicalString()}},{key:"isKeyField",value:function(){return 1===this.length&&"__name__"===this.get(0)}}],[{key:"isValidIdentifier",value:function(e){return kn.test(e)}},{key:"keyField",value:function(){return new r(["__name__"])}},{key:"fromServerFormat",value:function(e){for(var t=[],n="",i=0,a=function(){if(0===n.length)throw new sn(Qt,"Invalid field path (".concat(e,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"));t.push(n),n=""},o=!1;i<e.length;){var s=e[i];if("\\"===s){if(i+1===e.length)throw new sn(Qt,"Path has trailing escape character: "+e);var u=e[i+1];if("\\"!==u&&"."!==u&&"`"!==u)throw new sn(Qt,"Path has invalid escape sequence: "+e);n+=u,i+=2}else"`"===s?(o=!o,i++):"."!==s||o?(n+=s,i++):(a(),i++)}if(a(),o)throw new sn(Qt,"Unterminated ` in path: "+e);return new r(t)}},{key:"emptyPath",value:function(){return new r([])}}]),r}(mn),bn=function(){"use strict";function t(n){e(c)(this,t),this.path=n}return e(l)(t,[{key:"collectionGroup",get:function(){return this.path.popLast().lastSegment()}},{key:"hasCollectionId",value:function(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}},{key:"getCollectionGroup",value:function(){return this.path.get(this.path.length-2)}},{key:"getCollectionPath",value:function(){return this.path.popLast()}},{key:"isEqual",value:function(e){return null!==e&&0===gn.comparator(this.path,e.path)}},{key:"toString",value:function(){return this.path.toString()}}],[{key:"fromPath",value:function(e){return new t(gn.fromString(e))}},{key:"fromName",value:function(e){return new t(gn.fromString(e).popFirst(5))}},{key:"empty",value:function(){return new t(gn.emptyPath())}},{key:"comparator",value:function(e,t){return gn.comparator(e.path,t.path)}},{key:"isDocumentKey",value:function(e){return e.length%2==0}},{key:"fromSegments",value:function(e){return new t(new gn(e.slice()))}}]),t}();
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
function xn(e,t,n){if(!n)throw new sn(Qt,"Function ".concat(e,"() cannot be called with an empty ").concat(t,"."))}function Tn(e){if(!bn.isDocumentKey(e))throw new sn(Qt,"Invalid document reference. Document references must have an even number of segments, but ".concat(e," has ").concat(e.length,"."))}function In(e){if(bn.isDocumentKey(e))throw new sn(Qt,"Invalid collection reference. Collection references must have an odd number of segments, but ".concat(e," has ").concat(e.length,"."))}function _n(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e="".concat(e.substring(0,20),"...")),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";var t=(n=e).constructor?n.constructor.name:null;return t?"a custom ".concat(t," object"):"an object"}var n;return"function"==typeof e?"a function":zt()}function Sn(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new sn(Qt,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");var n=_n(e);throw new sn(Qt,"Expected type '".concat(t.name,"', but it was: ").concat(n))}return e}
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
function En(e){return null==e}function An(e){return 0===e&&1/e==-1/0}
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
 */var Dn,Pn,Cn={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */function Nn(e){if(void 0===e)return qt("RPC_ERROR","HTTP error has no status"),Ht;switch(e){case 200:return"ok";case 400:return en;case 401:return Jt;case 403:return Xt;case 404:return $t;case 409:return tn;case 416:return nn;case 429:return Zt;case 499:return Yt;case 500:return Ht;case 501:return rn;case 503:return on;case 504:return Wt;default:return e>=200&&e<300?"ok":e>=400&&e<500?en:e>=500&&e<600?an:Ht}}
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
 */(Pn=Dn||(Dn={}))[Pn.OK=0]="OK",Pn[Pn.CANCELLED=1]="CANCELLED",Pn[Pn.UNKNOWN=2]="UNKNOWN",Pn[Pn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pn[Pn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pn[Pn.NOT_FOUND=5]="NOT_FOUND",Pn[Pn.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pn[Pn.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pn[Pn.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pn[Pn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pn[Pn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pn[Pn.ABORTED=10]="ABORTED",Pn[Pn.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pn[Pn.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pn[Pn.INTERNAL=13]="INTERNAL",Pn[Pn.UNAVAILABLE=14]="UNAVAILABLE",Pn[Pn.DATA_LOSS=15]="DATA_LOSS";var Fn=function(t){"use strict";e(Ft)(r,t);var n=e(Rt)(r);function r(t,i){var a;return e(c)(this,r),(a=n.call(this,t)).P=i,e(Vt)(a)}return e(l)(r,[{key:"V",value:function(e,t){throw new Error("Not supported by FetchConnection")}},{key:"A",value:function(t,n,r,i){var a=this;return e(u)(e(d).mark((function t(){var o,s;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=JSON.stringify(i),e.prev=2,e.next=5,a.P(n,{method:"POST",headers:r,body:o});case 5:s=e.sent,e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(2),new sn(Nn(e.t0.status),"Request failed with error: "+e.t0.statusText);case 11:if(s.ok){e.next=13;break}throw new sn(Nn(s.status),"Request failed with error: "+s.statusText);case 13:return e.abrupt("return",s.json());case 14:case"end":return e.stop()}}),t,null,[[2,8]])})))()}}]),r}(function(){"use strict";function t(n){e(c)(this,t),this.databaseInfo=n,this.databaseId=n.databaseId;var r=n.ssl?"https":"http";this.p=r+"://"+n.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}return e(l)(t,[{key:"v",value:function(e,t,n,r,i){var a=this.T(e,t);jt("RestConnection","Sending: ",a,n);var o={};return this.I(o,r,i),this.A(e,a,o,n).then((function(e){return jt("RestConnection","Received: ",e),e}),(function(t){throw Ut("RestConnection","".concat(e," failed with error: "),t,"url: ",a,"request:",n),t}))}},{key:"R",value:function(e,t,n,r,i,a){return this.v(e,t,n,r,i)}},{key:"I",value:function(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Mt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((function(t,n){return e[n]=t})),n&&n.headers.forEach((function(t,n){return e[n]=t}))}},{key:"T",value:function(e,t){var n=Cn[e];return"".concat(this.p,"/v1/").concat(t,":").concat(n)}}]),t}());
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
 */function Vn(e){var t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(var r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */var Rn=function(){"use strict";function t(){e(c)(this,t)}return e(l)(t,null,[{key:"N",value:function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";n.length<20;)for(var r=Vn(40),i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length));return n}}]),t}();function On(e,t){return e<t?-1:e>t?1:0}function Mn(e,t,n){return e.length===t.length&&e.every((function(e,r){return n(e,t[r])}))}
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
 */var Ln=function(){"use strict";function t(n,r){if(e(c)(this,t),this.seconds=n,this.nanoseconds=r,r<0)throw new sn(Qt,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new sn(Qt,"Timestamp nanoseconds out of range: "+r);if(n<-62135596800)throw new sn(Qt,"Timestamp seconds out of range: "+n);if(n>=253402300800)throw new sn(Qt,"Timestamp seconds out of range: "+n)}return e(l)(t,[{key:"toDate",value:function(){return new Date(this.toMillis())}},{key:"toMillis",value:function(){return 1e3*this.seconds+this.nanoseconds/1e6}},{key:"_compareTo",value:function(e){return this.seconds===e.seconds?On(this.nanoseconds,e.nanoseconds):On(this.seconds,e.seconds)}},{key:"isEqual",value:function(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}},{key:"toString",value:function(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}},{key:"toJSON",value:function(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}},{key:"valueOf",value:function(){var e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}],[{key:"now",value:function(){return t.fromMillis(Date.now())}},{key:"fromDate",value:function(e){return t.fromMillis(e.getTime())}},{key:"fromMillis",value:function(e){var n=Math.floor(e/1e3);return new t(n,Math.floor(1e6*(e-1e3*n)))}}]),t}(),jn=function(){"use strict";function t(n){e(c)(this,t),this.timestamp=n}return e(l)(t,[{key:"compareTo",value:function(e){return this.timestamp._compareTo(e.timestamp)}},{key:"isEqual",value:function(e){return this.timestamp.isEqual(e.timestamp)}},{key:"toMicroseconds",value:function(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}},{key:"toString",value:function(){return"SnapshotVersion("+this.timestamp.toString()+")"}},{key:"toTimestamp",value:function(){return this.timestamp}}],[{key:"fromTimestamp",value:function(e){return new t(e)}},{key:"min",value:function(){return new t(new Ln(0,0))}},{key:"max",value:function(){return new t(new Ln(253402300799,999999999))}}]),t}();
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
function qn(e){var t=0;for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Un(e,t){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}
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
 */var Bn=function(){"use strict";function t(n,r){e(c)(this,t),this.comparator=n,this.root=r||Kn.EMPTY}return e(l)(t,[{key:"insert",value:function(e,n){return new t(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Kn.BLACK,null,null))}},{key:"remove",value:function(e){return new t(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Kn.BLACK,null,null))}},{key:"get",value:function(e){for(var t=this.root;!t.isEmpty();){var n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}},{key:"indexOf",value:function(e){for(var t=0,n=this.root;!n.isEmpty();){var r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}},{key:"isEmpty",value:function(){return this.root.isEmpty()}},{key:"size",get:function(){return this.root.size}},{key:"minKey",value:function(){return this.root.minKey()}},{key:"maxKey",value:function(){return this.root.maxKey()}},{key:"inorderTraversal",value:function(e){return this.root.inorderTraversal(e)}},{key:"forEach",value:function(e){this.inorderTraversal((function(t,n){return e(t,n),!1}))}},{key:"toString",value:function(){var e=[];return this.inorderTraversal((function(t,n){return e.push("".concat(t,":").concat(n)),!1})),"{".concat(e.join(", "),"}")}},{key:"reverseTraversal",value:function(e){return this.root.reverseTraversal(e)}},{key:"getIterator",value:function(){return new zn(this.root,null,this.comparator,!1)}},{key:"getIteratorFrom",value:function(e){return new zn(this.root,e,this.comparator,!1)}},{key:"getReverseIterator",value:function(){return new zn(this.root,null,this.comparator,!0)}},{key:"getReverseIteratorFrom",value:function(e){return new zn(this.root,e,this.comparator,!0)}}]),t}(),zn=function(){"use strict";function t(n,r,i,a){e(c)(this,t),this.isReverse=a,this.nodeStack=[];for(var o=1;!n.isEmpty();)if(o=r?i(n.key,r):1,r&&a&&(o*=-1),o<0)n=this.isReverse?n.left:n.right;else{if(0===o){this.nodeStack.push(n);break}this.nodeStack.push(n),n=this.isReverse?n.right:n.left}}return e(l)(t,[{key:"getNext",value:function(){var e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}},{key:"hasNext",value:function(){return this.nodeStack.length>0}},{key:"peek",value:function(){if(0===this.nodeStack.length)return null;var e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}]),t}(),Kn=function(){"use strict";function t(n,r,i,a,o){e(c)(this,t),this.key=n,this.value=r,this.color=null!=i?i:t.RED,this.left=null!=a?a:t.EMPTY,this.right=null!=o?o:t.EMPTY,this.size=this.left.size+1+this.right.size}return e(l)(t,[{key:"copy",value:function(e,n,r,i,a){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=a?a:this.right)}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min",value:function(){return this.left.isEmpty()?this:this.left.min()}},{key:"minKey",value:function(){return this.min().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}},{key:"removeMin",value:function(){if(this.left.isEmpty())return t.EMPTY;var e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}},{key:"remove",value:function(e,n){var r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===n(e,i.key)){if(i.right.isEmpty())return t.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}},{key:"isRed",value:function(){return this.color}},{key:"fixUp",value:function(){var e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}},{key:"moveRedLeft",value:function(){var e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}},{key:"moveRedRight",value:function(){var e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}},{key:"rotateLeft",value:function(){var e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}},{key:"rotateRight",value:function(){var e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}},{key:"colorFlip",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth",value:function(){var e=this.check();return Math.pow(2,e)<=this.size+1}},{key:"check",value:function(){if(this.isRed()&&this.left.isRed())throw zt();if(this.right.isRed())throw zt();var e=this.left.check();if(e!==this.right.check())throw zt();return e+(this.isRed()?0:1)}}]),t}();Kn.EMPTY=null,Kn.RED=!0,Kn.BLACK=!1,Kn.EMPTY=new(function(){"use strict";function t(){e(c)(this,t),this.size=0}return e(l)(t,[{key:"key",get:function(){throw zt()}},{key:"value",get:function(){throw zt()}},{key:"color",get:function(){throw zt()}},{key:"left",get:function(){throw zt()}},{key:"right",get:function(){throw zt()}},{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new Kn(e,t)}},{key:"remove",value:function(e,t){return this}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"isRed",value:function(){return!1}},{key:"checkMaxDepth",value:function(){return!0}},{key:"check",value:function(){return 0}}]),t}());
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
var Gn=function(){"use strict";function t(n){e(c)(this,t),this.comparator=n,this.data=new Bn(this.comparator)}return e(l)(t,[{key:"has",value:function(e){return null!==this.data.get(e)}},{key:"first",value:function(){return this.data.minKey()}},{key:"last",value:function(){return this.data.maxKey()}},{key:"size",get:function(){return this.data.size}},{key:"indexOf",value:function(e){return this.data.indexOf(e)}},{key:"forEach",value:function(e){this.data.inorderTraversal((function(t,n){return e(t),!1}))}},{key:"forEachInRange",value:function(e,t){for(var n=this.data.getIteratorFrom(e[0]);n.hasNext();){var r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}},{key:"forEachWhile",value:function(e,t){var n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}},{key:"firstAfterOrEqual",value:function(e){var t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}},{key:"getIterator",value:function(){return new Yn(this.data.getIterator())}},{key:"getIteratorFrom",value:function(e){return new Yn(this.data.getIteratorFrom(e))}},{key:"add",value:function(e){return this.copy(this.data.remove(e).insert(e,!0))}},{key:"delete",value:function(e){return this.has(e)?this.copy(this.data.remove(e)):this}},{key:"isEmpty",value:function(){return this.data.isEmpty()}},{key:"unionWith",value:function(e){var t=this;return t.size<e.size&&(t=e,e=this),e.forEach((function(e){t=t.add(e)})),t}},{key:"isEqual",value:function(e){if(!(e instanceof t))return!1;if(this.size!==e.size)return!1;for(var n=this.data.getIterator(),r=e.data.getIterator();n.hasNext();){var i=n.getNext().key,a=r.getNext().key;if(0!==this.comparator(i,a))return!1}return!0}},{key:"toArray",value:function(){var e=[];return this.forEach((function(t){e.push(t)})),e}},{key:"toString",value:function(){var e=[];return this.forEach((function(t){return e.push(t)})),"SortedSet("+e.toString()+")"}},{key:"copy",value:function(e){var n=new t(this.comparator);return n.data=e,n}}]),t}(),Yn=function(){"use strict";function t(n){e(c)(this,t),this.iter=n}return e(l)(t,[{key:"getNext",value:function(){return this.iter.getNext().key}},{key:"hasNext",value:function(){return this.iter.hasNext()}}]),t}(),Hn=function(){"use strict";function t(n){e(c)(this,t),this.fields=n,n.sort(wn.comparator)}return e(l)(t,[{key:"unionWith",value:function(e){var n=new Gn(wn.comparator),r=!0,i=!1,a=void 0;try{for(var o,s=this.fields[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n=n.add(u)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}var c=!0,l=!1,f=void 0;try{for(var h,d=e[Symbol.iterator]();!(c=(h=d.next()).done);c=!0){var p=h.value;n=n.add(p)}}catch(e){l=!0,f=e}finally{try{c||null==d.return||d.return()}finally{if(l)throw f}}return new t(n.toArray())}},{key:"covers",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.fields[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value.isPrefixOf(e))return!0}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!1}},{key:"isEqual",value:function(e){return Mn(this.fields,e.fields,(function(e,t){return e.isEqual(t)}))}}],[{key:"empty",value:function(){return new t([])}}]),t}(),Qn=Symbol.iterator,Wn=function(){"use strict";function t(n){e(c)(this,t),this.binaryString=n}return e(l)(t,[{key:Qn,value:function(){var e=this,t=0;return{next:function(){return t<e.binaryString.length?{value:e.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}}},{key:"toBase64",value:function(){var e;return e=this.binaryString,btoa(e)}},{key:"toUint8Array",value:function(){return function(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}},{key:"approximateByteSize",value:function(){return 2*this.binaryString.length}},{key:"compareTo",value:function(e){return On(this.binaryString,e.binaryString)}},{key:"isEqual",value:function(e){return this.binaryString===e.binaryString}}],[{key:"fromBase64String",value:function(e){return new t(atob(e))}},{key:"fromUint8Array",value:function(e){return new t(function(e){for(var t="",n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}}]),t}();Wn.EMPTY_BYTE_STRING=new Wn("");var $n=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xn(e){if(Kt(!!e),"string"==typeof e){var t=0,n=$n.exec(e);if(Kt(!!n),n[1]){var r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}var i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Jn(e.seconds),nanos:Jn(e.nanos)}}function Jn(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Zn(e){return"string"==typeof e?Wn.fromBase64String(e):Wn.fromUint8Array(e)}
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
 */function er(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function tr(e){var t=e.mapValue.fields.__previous_value__;return er(t)?tr(t):t}function nr(e){var t=Xn(e.mapValue.fields.__local_write_time__.timestampValue);return new Ln(t.seconds,t.nanos)}
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
 */function rr(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?er(e)?4:"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue?9007199254740991:10:zt()}function ir(e,t){if(e===t)return!0;var n,r=rr(e);if(r!==rr(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return nr(e).isEqual(nr(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;var n=Xn(e.timestampValue),r=Xn(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return n=t,Zn(e.bytesValue).isEqual(Zn(n.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Jn(e.geoPointValue.latitude)===Jn(t.geoPointValue.latitude)&&Jn(e.geoPointValue.longitude)===Jn(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Jn(e.integerValue)===Jn(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){var n=Jn(e.doubleValue),r=Jn(t.doubleValue);return n===r?An(n)===An(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Mn(e.arrayValue.values||[],t.arrayValue.values||[],ir);case 10:return function(e,t){var n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(qn(n)!==qn(r))return!1;for(var i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!ir(n[i],r[i])))return!1;return!0}(e,t);default:return zt()}}function ar(e){return!!e&&"nullValue"in e}function or(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function sr(e){return!!e&&"mapValue"in e}function ur(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){var t={mapValue:{fields:{}}};return Un(e.mapValue.fields,(function(e,n){return t.mapValue.fields[e]=ur(n)})),t}if(e.arrayValue){for(var n={arrayValue:{values:[]}},r=0;r<(e.arrayValue.values||[]).length;++r)n.arrayValue.values[r]=ur(e.arrayValue.values[r]);return n}return Object.assign({},e)}var cr=function(){"use strict";function t(n){e(c)(this,t),this.value=n}return e(l)(t,[{key:"field",value:function(e){if(e.isEmpty())return this.value;for(var t=this.value,n=0;n<e.length-1;++n)if(!sr(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}},{key:"set",value:function(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ur(t)}},{key:"setAll",value:function(e){var t=this,n=wn.emptyPath(),r={},i=[];e.forEach((function(e,a){if(!n.isImmediateParentOf(a)){var o=t.getFieldsMap(n);t.applyChanges(o,r,i),r={},i=[],n=a.popLast()}e?r[a.lastSegment()]=ur(e):i.push(a.lastSegment())}));var a=this.getFieldsMap(n);this.applyChanges(a,r,i)}},{key:"delete",value:function(e){var t=this.field(e.popLast());sr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}},{key:"isEqual",value:function(e){return ir(this.value,e.value)}},{key:"getFieldsMap",value:function(e){var t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(var n=0;n<e.length;++n){var r=t.mapValue.fields[e.get(n)];sr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}},{key:"applyChanges",value:function(e,t,n){Un(t,(function(t,n){return e[t]=n}));var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;delete e[u]}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"clone",value:function(){return new t(ur(this.value))}}],[{key:"empty",value:function(){return new t({mapValue:{}})}}]),t}(),lr=function(){"use strict";function t(n,r,i,a,o,s){e(c)(this,t),this.key=n,this.documentType=r,this.version=i,this.readTime=a,this.data=o,this.documentState=s}return e(l)(t,[{key:"convertToFoundDocument",value:function(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}},{key:"convertToNoDocument",value:function(e){return this.version=e,this.documentType=2,this.data=cr.empty(),this.documentState=0,this}},{key:"convertToUnknownDocument",value:function(e){return this.version=e,this.documentType=3,this.data=cr.empty(),this.documentState=2,this}},{key:"setHasCommittedMutations",value:function(){return this.documentState=2,this}},{key:"setHasLocalMutations",value:function(){return this.documentState=1,this.version=jn.min(),this}},{key:"setReadTime",value:function(e){return this.readTime=e,this}},{key:"hasLocalMutations",get:function(){return 1===this.documentState}},{key:"hasCommittedMutations",get:function(){return 2===this.documentState}},{key:"hasPendingWrites",get:function(){return this.hasLocalMutations||this.hasCommittedMutations}},{key:"isValidDocument",value:function(){return 0!==this.documentType}},{key:"isFoundDocument",value:function(){return 1===this.documentType}},{key:"isNoDocument",value:function(){return 2===this.documentType}},{key:"isUnknownDocument",value:function(){return 3===this.documentType}},{key:"isEqual",value:function(e){return e instanceof t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}},{key:"mutableCopy",value:function(){return new t(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}},{key:"toString",value:function(){return"Document(".concat(this.key,", ").concat(this.version,", ").concat(JSON.stringify(this.data.value),", {documentType: ").concat(this.documentType,"}), {documentState: ").concat(this.documentState,"})")}}],[{key:"newInvalidDocument",value:function(e){return new t(e,0,jn.min(),jn.min(),cr.empty(),0)}},{key:"newFoundDocument",value:function(e,n,r){return new t(e,1,n,jn.min(),r,0)}},{key:"newNoDocument",value:function(e,n){return new t(e,2,n,jn.min(),cr.empty(),0)}},{key:"newUnknownDocument",value:function(e,n){return new t(e,3,n,jn.min(),cr.empty(),2)}}]),t}(),fr=function t(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;e(c)(this,t),this.path=n,this.collectionGroup=r,this.orderBy=i,this.filters=a,this.limit=o,this.startAt=s,this.endAt=u,this.D=null};
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
 */function hr(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;return new fr(e,t,n,r,i,a,o)}var dr=function t(n,r){"use strict";e(c)(this,t),this.position=n,this.inclusive=r},pr=function t(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";e(c)(this,t),this.field=n,this.dir=r};
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
var vr=function t(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"F",u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;e(c)(this,t),this.path=n,this.collectionGroup=r,this.explicitOrderBy=i,this.filters=a,this.limit=o,this.limitType=s,this.startAt=u,this.endAt=l,this.q=null,this.O=null,this.startAt,this.endAt};function yr(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function mr(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.filters[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(o.S())return o.field}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null}function gr(e){var t=Gt(e);if(null===t.q){t.q=[];var n=mr(t),r=yr(t);if(null!==n&&null===r)n.isKeyField()||t.q.push(new pr(n)),t.q.push(new pr(wn.keyField(),"asc"));else{var i=!1,a=!0,o=!1,s=void 0;try{for(var u,c=t.explicitOrderBy[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;t.q.push(l),l.field.isKeyField()&&(i=!0)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}if(!i){var f=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.q.push(new pr(wn.keyField(),f))}}}return t.q}function kr(e){var t=Gt(e);if(!t.O)if("F"===t.limitType)t.O=hr(t.path,t.collectionGroup,gr(t),t.filters,t.limit,t.startAt,t.endAt);else{var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=gr(t)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value,c="desc"===u.dir?"asc":"desc";n.push(new pr(u.field,c))}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}var l=t.endAt?new dr(t.endAt.position,t.endAt.inclusive):null,f=t.startAt?new dr(t.startAt.position,t.startAt.inclusive):null;t.O=hr(t.path,t.collectionGroup,n,t.filters,t.limit,l,f)}return t.O}
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
function wr(e,t){return"number"==typeof(n=t)&&Number.isInteger(n)&&!An(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER?function(e){return{integerValue:""+e}}(t):function(e,t){if(e.k){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:An(t)?"-0":t}}(e,t);var n}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */var br=function t(){"use strict";e(c)(this,t),this._=void 0},xr=function(t){"use strict";e(Ft)(r,t);var n=e(Rt)(r);function r(){return e(c)(this,r),n.apply(this,arguments)}return r}(br),Tr=function(t){"use strict";e(Ft)(r,t);var n=e(Rt)(r);function r(t){var i;return e(c)(this,r),(i=n.call(this)).elements=t,e(Vt)(i)}return r}(br),Ir=function(t){"use strict";e(Ft)(r,t);var n=e(Rt)(r);function r(t){var i;return e(c)(this,r),(i=n.call(this)).elements=t,e(Vt)(i)}return r}(br),_r=function(t){"use strict";e(Ft)(r,t);var n=e(Rt)(r);function r(t,i){var a;return e(c)(this,r),(a=n.call(this)).C=t,a.L=i,e(Vt)(a)}return r}(br),Sr=function(){"use strict";function t(n,r){e(c)(this,t),this.updateTime=n,this.exists=r}return e(l)(t,[{key:"isNone",get:function(){return void 0===this.updateTime&&void 0===this.exists}},{key:"isEqual",value:function(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}],[{key:"none",value:function(){return new t}},{key:"exists",value:function(e){return new t(void 0,e)}},{key:"updateTime",value:function(e){return new t(e)}}]),t}(),Er=function t(){"use strict";e(c)(this,t)},Ar=function(t){"use strict";e(Ft)(r,t);var n=e(Rt)(r);function r(t,i,a){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return e(c)(this,r),(o=n.call(this)).key=t,o.value=i,o.precondition=a,o.fieldTransforms=s,o.type=0,e(Vt)(o)}return e(l)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(Er),Dr=function(t){"use strict";e(Ft)(r,t);var n=e(Rt)(r);function r(t,i,a,o){var s,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];return e(c)(this,r),(s=n.call(this)).key=t,s.data=i,s.fieldMask=a,s.precondition=o,s.fieldTransforms=u,s.type=1,e(Vt)(s)}return e(l)(r,[{key:"getFieldMask",value:function(){return this.fieldMask}}]),r}(Er),Pr=function(t){"use strict";e(Ft)(r,t);var n=e(Rt)(r);function r(t,i){var a;return e(c)(this,r),(a=n.call(this)).key=t,a.precondition=i,a.type=2,a.fieldTransforms=[],e(Vt)(a)}return e(l)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(Er),Cr=function(t){"use strict";e(Ft)(r,t);var n=e(Rt)(r);function r(t,i){var a;return e(c)(this,r),(a=n.call(this)).key=t,a.precondition=i,a.type=3,a.fieldTransforms=[],e(Vt)(a)}return e(l)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(Er),Nr={asc:"ASCENDING",desc:"DESCENDING"},Fr={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Vr=function t(n,r){"use strict";e(c)(this,t),this.databaseId=n,this.k=r};function Rr(e,t){return e.k?"".concat(new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z",""),".").concat(("000000000"+t.nanoseconds).slice(-9),"Z"):{seconds:""+t.seconds,nanos:t.nanoseconds}}function Or(e,t){return e.k?t.toBase64():t.toUint8Array()}function Mr(e,t){return Rr(e,t.toTimestamp())}function Lr(e){return Kt(!!e),jn.fromTimestamp((t=Xn(e),new Ln(t.seconds,t.nanos)));var t}function jr(e,t){return(n=e,new gn(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function qr(e,t){return jr(e.databaseId,t.path)}function Ur(e,t){var n,r,i,a=(n=t,Kt($r(r=gn.fromString(n))),r);if(a.get(1)!==e.databaseId.projectId)throw new sn(Qt,"Tried to deserialize key from different project: "+a.get(1)+" vs "+e.databaseId.projectId);if(a.get(3)!==e.databaseId.database)throw new sn(Qt,"Tried to deserialize key from different database: "+a.get(3)+" vs "+e.databaseId.database);return new bn((Kt((i=a).length>4&&"documents"===i.get(4)),i.popFirst(5)))}function Br(e,t){return jr(e.databaseId,t)}function zr(e){return new gn(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Kr(e,t,n){return{name:qr(e,t),fields:n.value.mapValue.fields}}function Gr(e,t){var n,r,i;if(t instanceof Ar)n={update:Kr(e,t.key,t.value)};else if(t instanceof Pr)n={delete:qr(e,t.key)};else if(t instanceof Dr)n={update:Kr(e,t.key,t.data),updateMask:(r=t.fieldMask,i=[],r.fields.forEach((function(e){return i.push(e.canonicalString())})),{fieldPaths:i})};else{if(!(t instanceof Cr))return zt();n={verify:qr(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((function(e){return function(e,t){var n=t.transform;if(n instanceof xr)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Tr)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ir)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof _r)return{fieldPath:t.field.canonicalString(),increment:n.L};throw zt()}(0,e)}))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Mr(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:zt()}(e,t.precondition)),n}function Yr(e,t){var n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Br(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Br(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);var i=function(e){if(0!==e.length){var t=e.map((function(e){return function(e){if("=="===e.op){if(or(e.value))return{unaryFilter:{field:Wr(e.field),op:"IS_NAN"}};if(ar(e.value))return{unaryFilter:{field:Wr(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(or(e.value))return{unaryFilter:{field:Wr(e.field),op:"IS_NOT_NAN"}};if(ar(e.value))return{unaryFilter:{field:Wr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wr(e.field),op:Qr(e.op),value:e.value}}}(e)}));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}}(t.filters);i&&(n.structuredQuery.where=i);var a=function(e){if(0!==e.length)return e.map((function(e){return{field:Wr((t=e).field),direction:Hr(t.dir)};var t}))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);var o,s,u,c=(o=e,s=t.limit,o.k||En(s)?s:{value:s});return null!==c&&(n.structuredQuery.limit=c),t.startAt&&(n.structuredQuery.startAt={before:(u=t.startAt).inclusive,values:u.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Hr(e){return Nr[e]}function Qr(e){return Fr[e]}function Wr(e){return{fieldPath:e.canonicalString()}}function $r(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */function Xr(e){return new Vr(e,!0)}
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
 */var Jr=function(t){"use strict";e(Ft)(r,(function t(){e(c)(this,t)}));var n=e(Rt)(r);function r(t,i,a,o){var s;return e(c)(this,r),(s=n.call(this)).authCredentials=t,s.appCheckCredentials=i,s.Z=a,s.C=o,s.tt=!1,e(Vt)(s)}return e(l)(r,[{key:"et",value:function(){if(this.tt)throw new sn(en,"The client has already been terminated.")}},{key:"v",value:function(t,n,r){var i=this;return this.et(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((function(a){var o=e(h)(a,2),s=o[0],u=o[1];return i.Z.v(t,n,r,s,u)})).catch((function(e){throw"FirebaseError"===e.name?(e.code===Jt&&(i.authCredentials.invalidateToken(),i.appCheckCredentials.invalidateToken()),e):new sn(Ht,e.toString())}))}},{key:"R",value:function(t,n,r,i){var a=this;return this.et(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((function(o){var s=e(h)(o,2),u=s[0],c=s[1];return a.Z.R(t,n,r,u,c,i)})).catch((function(e){throw"FirebaseError"===e.name?(e.code===Jt&&(a.authCredentials.invalidateToken(),a.appCheckCredentials.invalidateToken()),e):new sn(Ht,e.toString())}))}},{key:"terminate",value:function(){this.tt=!0}}]),r}();
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
 */function Zr(e,t){return ei.apply(this,arguments)}function ei(){return(ei=e(u)(e(d).mark((function t(n,r){var i,a,o;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Gt(n),a=zr(i.C)+"/documents",o={writes:r.map((function(e){return Gr(i.C,e)}))},e.next=3,i.v("Commit",a,o);case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ti(){return(ti=e(u)(e(d).mark((function t(n,r){var i,a;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Gt(n),a=Yr(i.C,kr(r)),e.next=3,i.R("RunQuery",a.parent,{structuredQuery:a.structuredQuery});case 3:return e.abrupt("return",e.sent.filter((function(e){return!!e.document})).map((function(e){return t=i.C,n=e.document,r=Ur(t,n.name),a=Lr(n.updateTime),o=new cr({mapValue:{fields:n.fields}}),lr.newFoundDocument(r,a,o);var t,n,r,a,o})));case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var ni=new Map;function ri(e){if(e._terminated)throw new sn(en,"The client has already been terminated.");if(!ni.has(e)){jt("ComponentProvider","Initializing Datastore");var t=(a=e._databaseId,o=e.app.options.appId||"",s=e._persistenceKey,u=e._freezeSettings(),i=new vn(a,o,s,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams),new Fn(i,fetch.bind(null))),n=Xr(e._databaseId),r=function(e,t,n,r){return new Jr(e,t,n,r)}(e._authCredentials,e._appCheckCredentials,t,n);ni.set(e,r)}var i,a,o,s,u;
/**
 * @license
 * Copyright 2018 Google LLC
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
return ni.get(e)}var ii=function(){"use strict";function t(n){var r;if(e(c)(this,t),void 0===n.host){if(void 0!==n.ssl)throw new sn(Qt,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=n.host,this.ssl=null===(r=n.ssl)||void 0===r||r;if(this.credentials=n.credentials,this.ignoreUndefinedProperties=!!n.ignoreUndefinedProperties,void 0===n.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==n.cacheSizeBytes&&n.cacheSizeBytes<1048576)throw new sn(Qt,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=n.cacheSizeBytes}this.experimentalForceLongPolling=!!n.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!n.experimentalAutoDetectLongPolling,this.useFetchStreams=!!n.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new sn(Qt,"".concat("experimentalForceLongPolling"," and ").concat("experimentalAutoDetectLongPolling"," cannot be used together."))}(0,n.experimentalForceLongPolling,0,n.experimentalAutoDetectLongPolling)}return e(l)(t,[{key:"isEqual",value:function(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}]),t}(),ai=function(){"use strict";function t(n,r,i,a){e(c)(this,t),this._authCredentials=n,this._appCheckCredentials=r,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ii({}),this._settingsFrozen=!1}return e(l)(t,[{key:"app",get:function(){if(!this._app)throw new sn(en,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}},{key:"_initialized",get:function(){return this._settingsFrozen}},{key:"_terminated",get:function(){return void 0!==this._terminateTask}},{key:"_setSettings",value:function(e){if(this._settingsFrozen)throw new sn(en,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ii(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new cn;switch(e.type){case"gapi":var t=e.client;return new hn(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new sn(Qt,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}},{key:"_getSettings",value:function(){return this._settings}},{key:"_freezeSettings",value:function(){return this._settingsFrozen=!0,this._settings}},{key:"_delete",value:function(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}},{key:"toJSON",value:function(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}},{key:"_terminate",value:function(){return e=this,(t=ni.get(e))&&(jt("ComponentProvider","Removing Datastore"),ni.delete(e),t.terminate()),Promise.resolve();var e,t}}]),t}();
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
var oi=function(){"use strict";function t(n,r,i){e(c)(this,t),this.converter=r,this._key=i,this.type="document",this.firestore=n}return e(l)(t,[{key:"_path",get:function(){return this._key.path}},{key:"id",get:function(){return this._key.path.lastSegment()}},{key:"path",get:function(){return this._key.path.canonicalString()}},{key:"parent",get:function(){return new ui(this.firestore,this.converter,this._key.path.popLast())}},{key:"withConverter",value:function(e){return new t(this.firestore,e,this._key)}}]),t}(),si=function(){"use strict";function t(n,r,i){e(c)(this,t),this.converter=r,this._query=i,this.type="query",this.firestore=n}return e(l)(t,[{key:"withConverter",value:function(e){return new t(this.firestore,e,this._query)}}]),t}(),ui=function(t){"use strict";e(Ft)(r,t);var n=e(Rt)(r);function r(t,i,a){var o;return e(c)(this,r),(o=n.call(this,t,i,new vr(a)))._path=a,o.type="collection",e(Vt)(o)}return e(l)(r,[{key:"id",get:function(){return this._query.path.lastSegment()}},{key:"path",get:function(){return this._query.path.canonicalString()}},{key:"parent",get:function(){var e=this._path.popLast();return e.isEmpty()?null:new oi(this.firestore,null,new bn(e))}},{key:"withConverter",value:function(e){return new r(this.firestore,e,this._path)}}]),r}(si);function ci(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(t=(0,y.getModularInstance)(t),xn("collection","path",n),t instanceof ai){var o,s=(o=gn).fromString.apply(o,[n].concat(e(g)(i)));return In(s),new ui(t,null,s)}var u;if(!(t instanceof oi||t instanceof ui))throw new sn(Qt,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");var c=t._path.child((u=gn).fromString.apply(u,[n].concat(e(g)(i))));return In(c),new ui(t.firestore,null,c)}
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
var li=function(){"use strict";function t(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];e(c)(this,t);for(var a=0;a<r.length;++a)if(0===r[a].length)throw new sn(Qt,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wn(r)}return e(l)(t,[{key:"isEqual",value:function(e){return this._internalPath.isEqual(e._internalPath)}}]),t}();
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
var fi=function(){"use strict";function t(n){e(c)(this,t),this._byteString=n}return e(l)(t,[{key:"toBase64",value:function(){return this._byteString.toBase64()}},{key:"toUint8Array",value:function(){return this._byteString.toUint8Array()}},{key:"toString",value:function(){return"Bytes(base64: "+this.toBase64()+")"}},{key:"isEqual",value:function(e){return this._byteString.isEqual(e._byteString)}}],[{key:"fromBase64String",value:function(e){try{return new t(Wn.fromBase64String(e))}catch(e){throw new sn(Qt,"Failed to construct data from Base64 string: "+e)}}},{key:"fromUint8Array",value:function(e){return new t(Wn.fromUint8Array(e))}}]),t}(),hi=function t(n){"use strict";e(c)(this,t),this._methodName=n},di=function(){"use strict";function t(n,r){if(e(c)(this,t),!isFinite(n)||n<-90||n>90)throw new sn(Qt,"Latitude must be a number between -90 and 90, but was: "+n);if(!isFinite(r)||r<-180||r>180)throw new sn(Qt,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=n,this._long=r}return e(l)(t,[{key:"latitude",get:function(){return this._lat}},{key:"longitude",get:function(){return this._long}},{key:"isEqual",value:function(e){return this._lat===e._lat&&this._long===e._long}},{key:"toJSON",value:function(){return{latitude:this._lat,longitude:this._long}}},{key:"_compareTo",value:function(e){return On(this._lat,e._lat)||On(this._long,e._long)}}]),t}(),pi=/^__.*__$/,vi=function(){"use strict";function t(n,r,i){e(c)(this,t),this.data=n,this.fieldMask=r,this.fieldTransforms=i}return e(l)(t,[{key:"toMutation",value:function(e,t){return null!==this.fieldMask?new Dr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ar(e,this.data,t,this.fieldTransforms)}}]),t}();
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
 */function yi(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw zt()}}var mi=function(){"use strict";function t(n,r,i,a,o,s){e(c)(this,t),this.settings=n,this.databaseId=r,this.C=i,this.ignoreUndefinedProperties=a,void 0===o&&this.nt(),this.fieldTransforms=o||[],this.fieldMask=s||[]}return e(l)(t,[{key:"path",get:function(){return this.settings.path}},{key:"rt",get:function(){return this.settings.rt}},{key:"st",value:function(e){return new t(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.C,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}},{key:"it",value:function(e){var t,n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.st({path:n,ot:!1});return r.ut(e),r}},{key:"ct",value:function(e){var t,n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.st({path:n,ot:!1});return r.nt(),r}},{key:"at",value:function(e){return this.st({path:void 0,ot:!0})}},{key:"ht",value:function(e){return Ai(e,this.settings.methodName,this.settings.lt||!1,this.path,this.settings.ft)}},{key:"contains",value:function(e){return void 0!==this.fieldMask.find((function(t){return e.isPrefixOf(t)}))||void 0!==this.fieldTransforms.find((function(t){return e.isPrefixOf(t.field)}))}},{key:"nt",value:function(){if(this.path)for(var e=0;e<this.path.length;e++)this.ut(this.path.get(e))}},{key:"ut",value:function(e){if(0===e.length)throw this.ht("Document fields must not be empty");if(yi(this.rt)&&pi.test(e))throw this.ht('Document fields cannot begin and end with "__"')}}]),t}(),gi=function(){"use strict";function t(n,r,i){e(c)(this,t),this.databaseId=n,this.ignoreUndefinedProperties=r,this.C=i||Xr(n)}return e(l)(t,[{key:"dt",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new mi({rt:e,methodName:t,ft:n,path:wn.emptyPath(),ot:!1,lt:r},this.databaseId,this.C,this.ignoreUndefinedProperties)}}]),t}();function ki(e){var t=e._freezeSettings(),n=Xr(e._databaseId);return new gi(e._databaseId,!!t.ignoreUndefinedProperties,n)}function wi(e,t,n,r,i){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},o=e.dt(a.merge||a.mergeFields?2:0,t,n,i);Ii("Data must be an object, but it was:",o,r);var s,u,c=xi(r,o);if(a.merge)s=new Hn(o.fieldMask),u=o.fieldTransforms;else if(a.mergeFields){var l=[],f=!0,h=!1,d=void 0;try{for(var p,v=a.mergeFields[Symbol.iterator]();!(f=(p=v.next()).done);f=!0){var y=p.value,m=_i(t,y,n);if(!o.contains(m))throw new sn(Qt,"Field '".concat(m,"' is specified in your field mask but missing from your input data."));Di(l,m)||l.push(m)}}catch(e){h=!0,d=e}finally{try{f||null==v.return||v.return()}finally{if(h)throw d}}s=new Hn(l),u=o.fieldTransforms.filter((function(e){return s.covers(e.field)}))}else s=null,u=o.fieldTransforms;return new vi(new cr(c),s,u)}function bi(e,t){if(Ti(e=(0,y.getModularInstance)(e)))return Ii("Unsupported field value:",t,e),xi(e,t);if(e instanceof hi)return function(e,t){if(!yi(t.rt))throw t.ht("".concat(e._methodName,"() can only be used with update() and set()"));if(!t.path)throw t.ht("".concat(e._methodName,"() is not currently supported inside arrays"));var n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ot&&4!==t.rt)throw t.ht("Nested arrays are not supported");return function(e,t){var n=[],r=0,i=!0,a=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=bi(s.value,t.at(r));null==c&&(c={nullValue:"NULL_VALUE"}),n.push(c),r++}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,y.getModularInstance)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return wr(t.C,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){var n=Ln.fromDate(e);return{timestampValue:Rr(t.C,n)}}if(e instanceof Ln){var r=new Ln(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Rr(t.C,r)}}if(e instanceof di)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof fi)return{bytesValue:Or(t.C,e._byteString)};if(e instanceof oi){var i=t.databaseId,a=e.firestore._databaseId;if(!a.isEqual(i))throw t.ht("Document reference is for database ".concat(a.projectId,"/").concat(a.database," but should be for database ").concat(i.projectId,"/").concat(i.database));return{referenceValue:jr(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ht("Unsupported field value: ".concat(_n(e)))}(e,t)}function xi(e,t){var n={};return function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Un(e,(function(e,r){var i=bi(r,t.it(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Ti(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Ln||e instanceof di||e instanceof fi||e instanceof oi||e instanceof hi)}function Ii(e,t,n){if(!Ti(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){var r=_n(n);throw"an object"===r?t.ht(e+" a custom object"):t.ht(e+" "+r)}var i}function _i(e,t,n){if((t=(0,y.getModularInstance)(t))instanceof li)return t._internalPath;if("string"==typeof t)return Ei(e,t);throw Ai("Field path arguments must be of type string or ",e,!1,void 0,n)}var Si=new RegExp("[~\\*/\\[\\]]");function Ei(t,n,r){if(n.search(Si)>=0)throw Ai("Invalid field path (".concat(n,"). Paths must not contain '~', '*', '/', '[', or ']'"),t,!1,void 0,r);try{return e(Pt)(li,e(g)(n.split(".")))._internalPath}catch(e){throw Ai("Invalid field path (".concat(n,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"),t,!1,void 0,r)}}function Ai(e,t,n,r,i){var a=r&&!r.isEmpty(),o=void 0!==i,s="Function ".concat(t,"() called with invalid data");n&&(s+=" (via `toFirestore()`)"),s+=". ";var u="";return(a||o)&&(u+=" (found",a&&(u+=" in field ".concat(r)),o&&(u+=" in document ".concat(i)),u+=")"),new sn(Qt,s+e+u)}function Di(e,t){return e.some((function(e){return e.isEqual(t)}))}
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
 */var Pi=function(){"use strict";function t(n,r,i,a,o){e(c)(this,t),this._firestore=n,this._userDataWriter=r,this._key=i,this._document=a,this._converter=o}return e(l)(t,[{key:"id",get:function(){return this._key.path.lastSegment()}},{key:"ref",get:function(){return new oi(this._firestore,this._converter,this._key)}},{key:"exists",value:function(){return null!==this._document}},{key:"data",value:function(){if(this._document){if(this._converter){var e=new Ci(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}},{key:"get",value:function(e){if(this._document){var t=this._document.data.field(Fi("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}]),t}(),Ci=function(t){"use strict";e(Ft)(r,t);var n=e(Rt)(r);function r(){return e(c)(this,r),n.apply(this,arguments)}return e(l)(r,[{key:"data",value:function(){return e(Ct)(e(Nt)(r.prototype),"data",this).call(this)}}]),r}(Pi),Ni=function(){"use strict";function t(n,r){e(c)(this,t),this._docs=r,this.query=n}return e(l)(t,[{key:"docs",get:function(){return e(g)(this._docs)}},{key:"size",get:function(){return this.docs.length}},{key:"empty",get:function(){return 0===this.docs.length}},{key:"forEach",value:function(e,t){this._docs.forEach(e,t)}}]),t}();function Fi(e,t){return"string"==typeof t?Ei(e,t):t instanceof li?t._internalPath:t._delegate._internalPath}
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
function Vi(e,t,n){return e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t}var Ri=function(t){"use strict";e(Ft)(r,t);var n=e(Rt)(r);function r(t){var i;return e(c)(this,r),(i=n.call(this)).firestore=t,e(Vt)(i)}return e(l)(r,[{key:"convertBytes",value:function(e){return new fi(e)}},{key:"convertReference",value:function(e){var t=this.convertDocumentKey(e,this.firestore._databaseId);return new oi(this.firestore,null,t)}}]),r}(function(){"use strict";function t(){e(c)(this,t)}return e(l)(t,[{key:"convertValue",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";switch(rr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Jn(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Zn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw zt()}}},{key:"convertObject",value:function(e,t){var n=this,r={};return Un(e.fields,(function(e,i){r[e]=n.convertValue(i,t)})),r}},{key:"convertGeoPoint",value:function(e){return new di(Jn(e.latitude),Jn(e.longitude))}},{key:"convertArray",value:function(e,t){var n=this;return(e.values||[]).map((function(e){return n.convertValue(e,t)}))}},{key:"convertServerTimestamp",value:function(e,t){switch(t){case"previous":var n=tr(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(nr(e));default:return null}}},{key:"convertTimestamp",value:function(e){var t=Xn(e);return new Ln(t.seconds,t.nanos)}},{key:"convertDocumentKey",value:function(e,t){var n=gn.fromString(e);Kt($r(n));var r=new yn(n.get(1),n.get(3)),i=new bn(n.popFirst(5));return r.isEqual(t)||qt("Document ".concat(i," contains a document reference within a different database (").concat(r.projectId,"/").concat(r.database,") which is not supported. It will be treated as a reference in the current database (").concat(t.projectId,"/").concat(t.database,") instead.")),i}}]),t}());function Oi(e){!function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new sn(rn,"limitToLast() queries require specifying at least one orderBy() clause")}((e=Sn(e,si))._query);var t=ri(e.firestore),n=new Ri(e.firestore);return function(e,t){return ti.apply(this,arguments)}(t,e._query).then((function(t){var r=t.map((function(t){return new Ci(e.firestore,n,t.key,t,e.converter)}));return"L"===e._query.limitType&&r.reverse(),new Ni(e,r)}))}function Mi(t,n){var r=function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(t=(0,y.getModularInstance)(t),1===arguments.length&&(n=Rn.N()),xn("doc","path",n),t instanceof ai){var o,s=(o=gn).fromString.apply(o,[n].concat(e(g)(i)));return Tn(s),new oi(t,null,new bn(s))}var u;if(!(t instanceof oi||t instanceof ui))throw new sn(Qt,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");var c=t._path.child((u=gn).fromString.apply(u,[n].concat(e(g)(i))));return Tn(c),new oi(t.firestore,t instanceof ui?t.converter:null,new bn(c))}(t=Sn(t,ui)),i=Vi(t.converter,n),a=wi(ki(t.firestore),"addDoc",r._key,i,null!==r.converter,{});return Zr(ri(t.firestore),[a.toMutation(r._key,Sr.exists(!1))]).then((function(){return r}))}
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
var Li;
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
 */Li="".concat(p.SDK_VERSION,"_lite"),Mt=Li,(0,p._registerComponent)(new(0,m.Component)("firestore/lite",(function(e,t){var n=t.instanceIdentifier,r=t.options,i=e.getProvider("app").getImmediate(),a=new ai(new ln(e.getProvider("auth-internal")),new pn(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new sn(Qt,'"projectId" not provided in firebase.initializeApp.');return new yn(e.options.projectId,t)}(i,n),i);return r&&a._setSettings(r),a}),"PUBLIC").setMultipleInstances(!0)),(0,p.registerVersion)("firestore-lite","3.5.0",""),(0,p.registerVersion)("firestore-lite","3.5.0","esm2017"),i("4Nugj");var ji,qi,Ui,Bi,zi=i("6Iqm0"),Ki=(0,s.initializeApp)({apiKey:"AIzaSyBMQEt78CaPaq3dSOfApmBG4vPslBGp6pQ",authDomain:"filmoteka-5bf07.firebaseapp.com",projectId:"filmoteka-5bf07",storageBucket:"filmoteka-5bf07.appspot.com",messagingSenderId:"626342412224",appId:"1:626342412224:web:b02b966cc92ff4eefbd225",measurementId:"G-X5BM5EZZVP"}),Gi=(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,p.getApp)();e=(0,y.getModularInstance)(e);var t=(0,p._getProvider)(e,Re);t.isInitialized()?t.getImmediate():St(e)}(Ki),Ui="object"==typeof(ji=Ki)?ji:(0,p.getApp)(),Bi="string"==typeof ji?ji:qi||"(default)",(0,p._getProvider)(Ui,"firestore/lite").getImmediate({identifier:Bi})),Yi=ci(Gi,"watched");Oi(ci(Gi,"queue")).then((function(t){var n=[];t.docs.forEach((function(t){n.push(e(o)({},t.data(),{id:t.id}))})),console.log(n)})).catch((function(e){console.log(e.message)})),Oi(Yi).then((function(t){var n=[];t.docs.forEach((function(t){n.push(e(o)({},t.data(),{id:t.id}))})),console.log(n)})).catch((function(e){console.log(e.message)})),document.querySelector(".modal-film-wrap").addEventListener("click",(function(e){e.preventDefault(),console.log(e.target.id),Mi(Yi,{id:e.target.id,poster_path:zi.filmArray.poster_path,original_title:zi.filmArray.original_title,genres:Object.values(zi.filmArray.genres),release_date:"".concat(new Date(zi.filmArray.release_date).getFullYear())}).then((function(){}))}))}();
//# sourceMappingURL=films.e08fc124.js.map
