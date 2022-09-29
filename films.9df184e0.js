!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},n.parcelRequired7c6=a),a.register("c69b4",(function(t,n){e(t.exports,"getFirestore",(function(){return a("hbbGa").getFirestore})),e(t.exports,"collection",(function(){return a("hbbGa").collection})),e(t.exports,"getDocs",(function(){return a("hbbGa").getDocs})),e(t.exports,"addDoc",(function(){return a("hbbGa").addDoc})),a("hbbGa")})),a.register("hbbGa",(function(n,r){e(n.exports,"getFirestore",(function(){return Kt})),e(n.exports,"collection",(function(){return Qt})),e(n.exports,"getDocs",(function(){return xn})),e(n.exports,"addDoc",(function(){return Tn}));var i=a("bpxeT"),o=a("8MBJY"),s=a("ge8co"),u=a("a2hTj"),c=a("jh8P3"),l=a("fVNic"),f=a("eYQtU"),h=a("jmhxu"),d=a("1t1Wn"),p=a("8nrFW"),v=(a("l5bVx"),a("2MbLg")),y=a("2TvXO"),m=a("MjY8E"),g=a("6ExWU"),k=a("kZfxc"),w=a("2xDiJ"),b=function(){"use strict";function e(n){t(o)(this,e),this.uid=n}return t(u)(e,[{key:"isAuthenticated",value:function(){return null!=this.uid}},{key:"toKey",value:function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}},{key:"isEqual",value:function(e){return e.uid===this.uid}}]),e}();b.UNAUTHENTICATED=new b(null),b.GOOGLE_CREDENTIALS=new b("google-credentials-uid"),b.FIRST_PARTY=new b("first-party-uid"),b.MOCK_USER=new b("mock-user");
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
var x="9.10.0",T=new(0,k.Logger)("@firebase/firestore");
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
 */function I(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(T.logLevel<=k.LogLevel.DEBUG){var a,o=r.map(E);(a=T).debug.apply(a,["Firestore (".concat(x,"): ").concat(e)].concat(t(p)(o)))}}function _(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(T.logLevel<=k.LogLevel.ERROR){var a,o=r.map(E);(a=T).error.apply(a,["Firestore (".concat(x,"): ").concat(e)].concat(t(p)(o)))}}function S(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(T.logLevel<=k.LogLevel.WARN){var a,o=r.map(E);(a=T).warn.apply(a,["Firestore (".concat(x,"): ").concat(e)].concat(t(p)(o)))}}function E(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unexpected state",t="FIRESTORE (".concat(x,") INTERNAL ASSERTION FAILED: ")+e;throw _(t),new Error(t)}function D(e,t){e||A()}function P(e,t){return e}
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
 */var C="cancelled",N="unknown",F="invalid-argument",V="deadline-exceeded",R="not-found",O="permission-denied",M="unauthenticated",L="resource-exhausted",j="failed-precondition",q="aborted",U="out-of-range",B="unimplemented",z="internal",K="unavailable",G=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e,i){var a;return t(o)(this,r),(a=n.call(this,e,i)).code=e,a.message=i,a.toString=function(){return"".concat(a.name,": [code=").concat(a.code,"]: ").concat(a.message)},t(h)(a)}return r}(w.FirebaseError),H=function e(n,r){"use strict";t(o)(this,e),this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(n))},Y=function(){"use strict";function e(){t(o)(this,e)}return t(u)(e,[{key:"getToken",value:function(){return Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(b.UNAUTHENTICATED)}))}},{key:"shutdown",value:function(){}}]),e}(),Q=function(){"use strict";function e(n){var r=this;t(o)(this,e),this.auth=null,n.onInit((function(e){r.auth=e}))}return t(u)(e,[{key:"getToken",value:function(){var e=this;return this.auth?this.auth.getToken().then((function(t){return t?(D("string"==typeof t.accessToken),new H(t.accessToken,new b(e.auth.getUid()))):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){}},{key:"shutdown",value:function(){}}]),e}(),W=function(){"use strict";function e(n,r,i,a){t(o)(this,e),this.t=n,this.i=r,this.o=i,this.u=a,this.type="FirstParty",this.user=b.FIRST_PARTY,this.h=new Map}return t(u)(e,[{key:"l",value:function(){return this.u?this.u():(D(!("object"!=typeof this.t||null===this.t||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}},{key:"headers",get:function(){this.h.set("X-Goog-AuthUser",this.i);var e=this.l();return e&&this.h.set("Authorization",e),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}]),e}(),$=function(){"use strict";function e(n,r,i,a){t(o)(this,e),this.t=n,this.i=r,this.o=i,this.u=a}return t(u)(e,[{key:"getToken",value:function(){return Promise.resolve(new W(this.t,this.i,this.o,this.u))}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(b.FIRST_PARTY)}))}},{key:"shutdown",value:function(){}},{key:"invalidateToken",value:function(){}}]),e}(),X=function e(n){"use strict";t(o)(this,e),this.value=n,this.type="AppCheck",this.headers=new Map,n&&n.length>0&&this.headers.set("x-firebase-appcheck",this.value)},J=function(){"use strict";function e(n){var r=this;t(o)(this,e),this.m=n,this.appCheck=null,n.onInit((function(e){r.appCheck=e}))}return t(u)(e,[{key:"getToken",value:function(){return this.appCheck?this.appCheck.getToken().then((function(e){return e?(D("string"==typeof e.token),new X(e.token)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){}},{key:"shutdown",value:function(){}}]),e}(),Z=function e(n,r,i,a,s,u,c,l){"use strict";t(o)(this,e),this.databaseId=n,this.appId=r,this.persistenceKey=i,this.host=a,this.ssl=s,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.useFetchStreams=l},ee=function(){"use strict";function e(n,r){t(o)(this,e),this.projectId=n,this.database=r||"(default)"}return t(u)(e,[{key:"isDefaultDatabase",get:function(){return"(default)"===this.database}},{key:"isEqual",value:function(t){return t instanceof e&&t.projectId===this.projectId&&t.database===this.database}}],[{key:"empty",value:function(){return new e("","")}}]),e}(),te=function(){"use strict";function e(n,r,i){t(o)(this,e),void 0===r?r=0:r>n.length&&A(),void 0===i?i=n.length-r:i>n.length-r&&A(),this.segments=n,this.offset=r,this.len=i}return t(u)(e,[{key:"length",get:function(){return this.len}},{key:"isEqual",value:function(t){return 0===e.comparator(this,t)}},{key:"child",value:function(t){var n=this.segments.slice(this.offset,this.limit());return t instanceof e?t.forEach((function(e){n.push(e)})):n.push(t),this.construct(n)}},{key:"limit",value:function(){return this.offset+this.length}},{key:"popFirst",value:function(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}},{key:"popLast",value:function(){return this.construct(this.segments,this.offset,this.length-1)}},{key:"firstSegment",value:function(){return this.segments[this.offset]}},{key:"lastSegment",value:function(){return this.get(this.length-1)}},{key:"get",value:function(e){return this.segments[this.offset+e]}},{key:"isEmpty",value:function(){return 0===this.length}},{key:"isPrefixOf",value:function(e){if(e.length<this.length)return!1;for(var t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}},{key:"isImmediateParentOf",value:function(e){if(this.length+1!==e.length)return!1;for(var t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}},{key:"forEach",value:function(e){for(var t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}},{key:"toArray",value:function(){return this.segments.slice(this.offset,this.limit())}}],[{key:"comparator",value:function(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n;r++){var i=e.get(r),a=t.get(r);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}]),e}(),ne=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(){return t(o)(this,r),n.apply(this,arguments)}return t(u)(r,[{key:"construct",value:function(e,t,n){return new r(e,t,n)}},{key:"canonicalString",value:function(){return this.toArray().join("/")}},{key:"toString",value:function(){return this.canonicalString()}}],[{key:"fromString",value:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];var a=[],o=!0,s=!1,u=void 0;try{for(var c,l=n[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var f,h=c.value;if(h.indexOf("//")>=0)throw new G(F,"Invalid segment (".concat(h,"). Paths must not contain // in them."));(f=a).push.apply(f,t(p)(h.split("/").filter((function(e){return e.length>0}))))}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return new r(a)}},{key:"emptyPath",value:function(){return new r([])}}]),r}(te),re=/^[_a-zA-Z][_a-zA-Z0-9]*$/,ie=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(){return t(o)(this,r),n.apply(this,arguments)}return t(u)(r,[{key:"construct",value:function(e,t,n){return new r(e,t,n)}},{key:"canonicalString",value:function(){return this.toArray().map((function(e){return e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),r.isValidIdentifier(e)||(e="`"+e+"`"),e})).join(".")}},{key:"toString",value:function(){return this.canonicalString()}},{key:"isKeyField",value:function(){return 1===this.length&&"__name__"===this.get(0)}}],[{key:"isValidIdentifier",value:function(e){return re.test(e)}},{key:"keyField",value:function(){return new r(["__name__"])}},{key:"fromServerFormat",value:function(e){for(var t=[],n="",i=0,a=function(){if(0===n.length)throw new G(F,"Invalid field path (".concat(e,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"));t.push(n),n=""},o=!1;i<e.length;){var s=e[i];if("\\"===s){if(i+1===e.length)throw new G(F,"Path has trailing escape character: "+e);var u=e[i+1];if("\\"!==u&&"."!==u&&"`"!==u)throw new G(F,"Path has invalid escape sequence: "+e);n+=u,i+=2}else"`"===s?(o=!o,i++):"."!==s||o?(n+=s,i++):(a(),i++)}if(a(),o)throw new G(F,"Unterminated ` in path: "+e);return new r(t)}},{key:"emptyPath",value:function(){return new r([])}}]),r}(te),ae=function(){"use strict";function e(n){t(o)(this,e),this.path=n}return t(u)(e,[{key:"collectionGroup",get:function(){return this.path.popLast().lastSegment()}},{key:"hasCollectionId",value:function(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}},{key:"getCollectionGroup",value:function(){return this.path.get(this.path.length-2)}},{key:"getCollectionPath",value:function(){return this.path.popLast()}},{key:"isEqual",value:function(e){return null!==e&&0===ne.comparator(this.path,e.path)}},{key:"toString",value:function(){return this.path.toString()}}],[{key:"fromPath",value:function(t){return new e(ne.fromString(t))}},{key:"fromName",value:function(t){return new e(ne.fromString(t).popFirst(5))}},{key:"empty",value:function(){return new e(ne.emptyPath())}},{key:"comparator",value:function(e,t){return ne.comparator(e.path,t.path)}},{key:"isDocumentKey",value:function(e){return e.length%2==0}},{key:"fromSegments",value:function(t){return new e(new ne(t.slice()))}}]),e}();
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
function oe(e,t,n){if(!n)throw new G(F,"Function ".concat(e,"() cannot be called with an empty ").concat(t,"."))}function se(e){if(!ae.isDocumentKey(e))throw new G(F,"Invalid document reference. Document references must have an even number of segments, but ".concat(e," has ").concat(e.length,"."))}function ue(e){if(ae.isDocumentKey(e))throw new G(F,"Invalid collection reference. Collection references must have an odd number of segments, but ".concat(e," has ").concat(e.length,"."))}function ce(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e="".concat(e.substring(0,20),"...")),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";var t=(n=e).constructor?n.constructor.name:null;return t?"a custom ".concat(t," object"):"an object"}var n;return"function"==typeof e?"a function":A()}function le(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new G(F,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");var n=ce(e);throw new G(F,"Expected type '".concat(t.name,"', but it was: ").concat(n))}return e}
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
function fe(e){return null==e}function he(e){return 0===e&&1/e==-1/0}
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
 */var de,pe,ve={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */function ye(e){if(void 0===e)return _("RPC_ERROR","HTTP error has no status"),N;switch(e){case 200:return"ok";case 400:return j;case 401:return M;case 403:return O;case 404:return R;case 409:return q;case 416:return U;case 429:return L;case 499:return C;case 500:return N;case 501:return B;case 503:return K;case 504:return V;default:return e>=200&&e<300?"ok":e>=400&&e<500?j:e>=500&&e<600?z:N}}
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
 */(pe=de||(de={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";var me=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e,i){var a;return t(o)(this,r),(a=n.call(this,e)).P=i,t(h)(a)}return t(u)(r,[{key:"V",value:function(e,t){throw new Error("Not supported by FetchConnection")}},{key:"A",value:function(e,n,r,a){var o=this;return t(i)(t(y).mark((function e(){var i,s;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=JSON.stringify(a),e.prev=2,e.next=5,o.P(n,{method:"POST",headers:r,body:i});case 5:s=e.sent,e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(2),new G(ye(e.t0.status),"Request failed with error: "+e.t0.statusText);case 11:if(s.ok){e.next=13;break}throw new G(ye(s.status),"Request failed with error: "+s.statusText);case 13:return e.abrupt("return",s.json());case 14:case"end":return e.stop()}}),e,null,[[2,8]])})))()}}]),r}(function(){"use strict";function e(n){t(o)(this,e),this.databaseInfo=n,this.databaseId=n.databaseId;var r=n.ssl?"https":"http";this.p=r+"://"+n.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}return t(u)(e,[{key:"v",value:function(e,t,n,r,i){var a=this.T(e,t);I("RestConnection","Sending: ",a,n);var o={};return this.I(o,r,i),this.A(e,a,o,n).then((function(e){return I("RestConnection","Received: ",e),e}),(function(t){throw S("RestConnection","".concat(e," failed with error: "),t,"url: ",a,"request:",n),t}))}},{key:"R",value:function(e,t,n,r,i,a){return this.v(e,t,n,r,i)}},{key:"I",value:function(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+x,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((function(t,n){return e[n]=t})),n&&n.headers.forEach((function(t,n){return e[n]=t}))}},{key:"T",value:function(e,t){var n=ve[e];return"".concat(this.p,"/v1/").concat(t,":").concat(n)}}]),e}());
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
 */function ge(e){var t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(var r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */var ke=function(){"use strict";function e(){t(o)(this,e)}return t(u)(e,null,[{key:"N",value:function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";n.length<20;)for(var r=ge(40),i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length));return n}}]),e}();function we(e,t){return e<t?-1:e>t?1:0}function be(e,t,n){return e.length===t.length&&e.every((function(e,r){return n(e,t[r])}))}
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
 */var xe=function(){"use strict";function e(n,r){if(t(o)(this,e),this.seconds=n,this.nanoseconds=r,r<0)throw new G(F,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new G(F,"Timestamp nanoseconds out of range: "+r);if(n<-62135596800)throw new G(F,"Timestamp seconds out of range: "+n);if(n>=253402300800)throw new G(F,"Timestamp seconds out of range: "+n)}return t(u)(e,[{key:"toDate",value:function(){return new Date(this.toMillis())}},{key:"toMillis",value:function(){return 1e3*this.seconds+this.nanoseconds/1e6}},{key:"_compareTo",value:function(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}},{key:"isEqual",value:function(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}},{key:"toString",value:function(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}},{key:"toJSON",value:function(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}},{key:"valueOf",value:function(){var e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}],[{key:"now",value:function(){return e.fromMillis(Date.now())}},{key:"fromDate",value:function(t){return e.fromMillis(t.getTime())}},{key:"fromMillis",value:function(t){var n=Math.floor(t/1e3);return new e(n,Math.floor(1e6*(t-1e3*n)))}}]),e}(),Te=function(){"use strict";function e(n){t(o)(this,e),this.timestamp=n}return t(u)(e,[{key:"compareTo",value:function(e){return this.timestamp._compareTo(e.timestamp)}},{key:"isEqual",value:function(e){return this.timestamp.isEqual(e.timestamp)}},{key:"toMicroseconds",value:function(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}},{key:"toString",value:function(){return"SnapshotVersion("+this.timestamp.toString()+")"}},{key:"toTimestamp",value:function(){return this.timestamp}}],[{key:"fromTimestamp",value:function(t){return new e(t)}},{key:"min",value:function(){return new e(new xe(0,0))}},{key:"max",value:function(){return new e(new xe(253402300799,999999999))}}]),e}();
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
function Ie(e){var t=0;for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function _e(e,t){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}
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
 */var Se=function(){"use strict";function e(n,r){t(o)(this,e),this.comparator=n,this.root=r||Ae.EMPTY}return t(u)(e,[{key:"insert",value:function(t,n){return new e(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Ae.BLACK,null,null))}},{key:"remove",value:function(t){return new e(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ae.BLACK,null,null))}},{key:"get",value:function(e){for(var t=this.root;!t.isEmpty();){var n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}},{key:"indexOf",value:function(e){for(var t=0,n=this.root;!n.isEmpty();){var r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}},{key:"isEmpty",value:function(){return this.root.isEmpty()}},{key:"size",get:function(){return this.root.size}},{key:"minKey",value:function(){return this.root.minKey()}},{key:"maxKey",value:function(){return this.root.maxKey()}},{key:"inorderTraversal",value:function(e){return this.root.inorderTraversal(e)}},{key:"forEach",value:function(e){this.inorderTraversal((function(t,n){return e(t,n),!1}))}},{key:"toString",value:function(){var e=[];return this.inorderTraversal((function(t,n){return e.push("".concat(t,":").concat(n)),!1})),"{".concat(e.join(", "),"}")}},{key:"reverseTraversal",value:function(e){return this.root.reverseTraversal(e)}},{key:"getIterator",value:function(){return new Ee(this.root,null,this.comparator,!1)}},{key:"getIteratorFrom",value:function(e){return new Ee(this.root,e,this.comparator,!1)}},{key:"getReverseIterator",value:function(){return new Ee(this.root,null,this.comparator,!0)}},{key:"getReverseIteratorFrom",value:function(e){return new Ee(this.root,e,this.comparator,!0)}}]),e}(),Ee=function(){"use strict";function e(n,r,i,a){t(o)(this,e),this.isReverse=a,this.nodeStack=[];for(var s=1;!n.isEmpty();)if(s=r?i(n.key,r):1,r&&a&&(s*=-1),s<0)n=this.isReverse?n.left:n.right;else{if(0===s){this.nodeStack.push(n);break}this.nodeStack.push(n),n=this.isReverse?n.right:n.left}}return t(u)(e,[{key:"getNext",value:function(){var e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}},{key:"hasNext",value:function(){return this.nodeStack.length>0}},{key:"peek",value:function(){if(0===this.nodeStack.length)return null;var e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}]),e}(),Ae=function(){"use strict";function e(n,r,i,a,s){t(o)(this,e),this.key=n,this.value=r,this.color=null!=i?i:e.RED,this.left=null!=a?a:e.EMPTY,this.right=null!=s?s:e.EMPTY,this.size=this.left.size+1+this.right.size}return t(u)(e,[{key:"copy",value:function(t,n,r,i,a){return new e(null!=t?t:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=a?a:this.right)}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min",value:function(){return this.left.isEmpty()?this:this.left.min()}},{key:"minKey",value:function(){return this.min().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}},{key:"removeMin",value:function(){if(this.left.isEmpty())return e.EMPTY;var t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),(t=t.copy(null,null,null,t.left.removeMin(),null)).fixUp()}},{key:"remove",value:function(t,n){var r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===n(t,i.key)){if(i.right.isEmpty())return e.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}},{key:"isRed",value:function(){return this.color}},{key:"fixUp",value:function(){var e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}},{key:"moveRedLeft",value:function(){var e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}},{key:"moveRedRight",value:function(){var e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}},{key:"rotateLeft",value:function(){var t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}},{key:"rotateRight",value:function(){var t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}},{key:"colorFlip",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth",value:function(){var e=this.check();return Math.pow(2,e)<=this.size+1}},{key:"check",value:function(){if(this.isRed()&&this.left.isRed())throw A();if(this.right.isRed())throw A();var e=this.left.check();if(e!==this.right.check())throw A();return e+(this.isRed()?0:1)}}]),e}();Ae.EMPTY=null,Ae.RED=!0,Ae.BLACK=!1,Ae.EMPTY=new(function(){"use strict";function e(){t(o)(this,e),this.size=0}return t(u)(e,[{key:"key",get:function(){throw A()}},{key:"value",get:function(){throw A()}},{key:"color",get:function(){throw A()}},{key:"left",get:function(){throw A()}},{key:"right",get:function(){throw A()}},{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new Ae(e,t)}},{key:"remove",value:function(e,t){return this}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"isRed",value:function(){return!1}},{key:"checkMaxDepth",value:function(){return!0}},{key:"check",value:function(){return 0}}]),e}());
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
var De=function(){"use strict";function e(n){t(o)(this,e),this.comparator=n,this.data=new Se(this.comparator)}return t(u)(e,[{key:"has",value:function(e){return null!==this.data.get(e)}},{key:"first",value:function(){return this.data.minKey()}},{key:"last",value:function(){return this.data.maxKey()}},{key:"size",get:function(){return this.data.size}},{key:"indexOf",value:function(e){return this.data.indexOf(e)}},{key:"forEach",value:function(e){this.data.inorderTraversal((function(t,n){return e(t),!1}))}},{key:"forEachInRange",value:function(e,t){for(var n=this.data.getIteratorFrom(e[0]);n.hasNext();){var r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}},{key:"forEachWhile",value:function(e,t){var n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}},{key:"firstAfterOrEqual",value:function(e){var t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}},{key:"getIterator",value:function(){return new Pe(this.data.getIterator())}},{key:"getIteratorFrom",value:function(e){return new Pe(this.data.getIteratorFrom(e))}},{key:"add",value:function(e){return this.copy(this.data.remove(e).insert(e,!0))}},{key:"delete",value:function(e){return this.has(e)?this.copy(this.data.remove(e)):this}},{key:"isEmpty",value:function(){return this.data.isEmpty()}},{key:"unionWith",value:function(e){var t=this;return t.size<e.size&&(t=e,e=this),e.forEach((function(e){t=t.add(e)})),t}},{key:"isEqual",value:function(t){if(!(t instanceof e))return!1;if(this.size!==t.size)return!1;for(var n=this.data.getIterator(),r=t.data.getIterator();n.hasNext();){var i=n.getNext().key,a=r.getNext().key;if(0!==this.comparator(i,a))return!1}return!0}},{key:"toArray",value:function(){var e=[];return this.forEach((function(t){e.push(t)})),e}},{key:"toString",value:function(){var e=[];return this.forEach((function(t){return e.push(t)})),"SortedSet("+e.toString()+")"}},{key:"copy",value:function(t){var n=new e(this.comparator);return n.data=t,n}}]),e}(),Pe=function(){"use strict";function e(n){t(o)(this,e),this.iter=n}return t(u)(e,[{key:"getNext",value:function(){return this.iter.getNext().key}},{key:"hasNext",value:function(){return this.iter.hasNext()}}]),e}(),Ce=function(){"use strict";function e(n){t(o)(this,e),this.fields=n,n.sort(ie.comparator)}return t(u)(e,[{key:"unionWith",value:function(t){var n=new De(ie.comparator),r=!0,i=!1,a=void 0;try{for(var o,s=this.fields[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n=n.add(u)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}var c=!0,l=!1,f=void 0;try{for(var h,d=t[Symbol.iterator]();!(c=(h=d.next()).done);c=!0){var p=h.value;n=n.add(p)}}catch(e){l=!0,f=e}finally{try{c||null==d.return||d.return()}finally{if(l)throw f}}return new e(n.toArray())}},{key:"covers",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.fields[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value.isPrefixOf(e))return!0}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!1}},{key:"isEqual",value:function(e){return be(this.fields,e.fields,(function(e,t){return e.isEqual(t)}))}}],[{key:"empty",value:function(){return new e([])}}]),e}(),Ne=Symbol.iterator,Fe=function(){"use strict";function e(n){t(o)(this,e),this.binaryString=n}return t(u)(e,[{key:Ne,value:function(){var e=this,t=0;return{next:function(){return t<e.binaryString.length?{value:e.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}}},{key:"toBase64",value:function(){var e;return e=this.binaryString,btoa(e)}},{key:"toUint8Array",value:function(){return function(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}},{key:"approximateByteSize",value:function(){return 2*this.binaryString.length}},{key:"compareTo",value:function(e){return we(this.binaryString,e.binaryString)}},{key:"isEqual",value:function(e){return this.binaryString===e.binaryString}}],[{key:"fromBase64String",value:function(t){return new e(atob(t))}},{key:"fromUint8Array",value:function(t){return new e(function(e){for(var t="",n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(t))}}]),e}();Fe.EMPTY_BYTE_STRING=new Fe("");var Ve=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Re(e){if(D(!!e),"string"==typeof e){var t=0,n=Ve.exec(e);if(D(!!n),n[1]){var r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}var i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Oe(e.seconds),nanos:Oe(e.nanos)}}function Oe(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Me(e){return"string"==typeof e?Fe.fromBase64String(e):Fe.fromUint8Array(e)}
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
 */function Le(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function je(e){var t=e.mapValue.fields.__previous_value__;return Le(t)?je(t):t}function qe(e){var t=Re(e.mapValue.fields.__local_write_time__.timestampValue);return new xe(t.seconds,t.nanos)}
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
 */function Ue(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Le(e)?4:"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue?9007199254740991:10:A()}function Be(e,t){if(e===t)return!0;var n,r=Ue(e);if(r!==Ue(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return qe(e).isEqual(qe(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;var n=Re(e.timestampValue),r=Re(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return n=t,Me(e.bytesValue).isEqual(Me(n.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Oe(e.geoPointValue.latitude)===Oe(t.geoPointValue.latitude)&&Oe(e.geoPointValue.longitude)===Oe(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Oe(e.integerValue)===Oe(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){var n=Oe(e.doubleValue),r=Oe(t.doubleValue);return n===r?he(n)===he(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return be(e.arrayValue.values||[],t.arrayValue.values||[],Be);case 10:return function(e,t){var n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Ie(n)!==Ie(r))return!1;for(var i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Be(n[i],r[i])))return!1;return!0}(e,t);default:return A()}}function ze(e){return!!e&&"nullValue"in e}function Ke(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ge(e){return!!e&&"mapValue"in e}function He(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){var t={mapValue:{fields:{}}};return _e(e.mapValue.fields,(function(e,n){return t.mapValue.fields[e]=He(n)})),t}if(e.arrayValue){for(var n={arrayValue:{values:[]}},r=0;r<(e.arrayValue.values||[]).length;++r)n.arrayValue.values[r]=He(e.arrayValue.values[r]);return n}return Object.assign({},e)}var Ye=function(){"use strict";function e(n){t(o)(this,e),this.value=n}return t(u)(e,[{key:"field",value:function(e){if(e.isEmpty())return this.value;for(var t=this.value,n=0;n<e.length-1;++n)if(!Ge(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}},{key:"set",value:function(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=He(t)}},{key:"setAll",value:function(e){var t=this,n=ie.emptyPath(),r={},i=[];e.forEach((function(e,a){if(!n.isImmediateParentOf(a)){var o=t.getFieldsMap(n);t.applyChanges(o,r,i),r={},i=[],n=a.popLast()}e?r[a.lastSegment()]=He(e):i.push(a.lastSegment())}));var a=this.getFieldsMap(n);this.applyChanges(a,r,i)}},{key:"delete",value:function(e){var t=this.field(e.popLast());Ge(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}},{key:"isEqual",value:function(e){return Be(this.value,e.value)}},{key:"getFieldsMap",value:function(e){var t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(var n=0;n<e.length;++n){var r=t.mapValue.fields[e.get(n)];Ge(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}},{key:"applyChanges",value:function(e,t,n){_e(t,(function(t,n){return e[t]=n}));var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;delete e[u]}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"clone",value:function(){return new e(He(this.value))}}],[{key:"empty",value:function(){return new e({mapValue:{}})}}]),e}(),Qe=function(){"use strict";function e(n,r,i,a,s,u){t(o)(this,e),this.key=n,this.documentType=r,this.version=i,this.readTime=a,this.data=s,this.documentState=u}return t(u)(e,[{key:"convertToFoundDocument",value:function(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}},{key:"convertToNoDocument",value:function(e){return this.version=e,this.documentType=2,this.data=Ye.empty(),this.documentState=0,this}},{key:"convertToUnknownDocument",value:function(e){return this.version=e,this.documentType=3,this.data=Ye.empty(),this.documentState=2,this}},{key:"setHasCommittedMutations",value:function(){return this.documentState=2,this}},{key:"setHasLocalMutations",value:function(){return this.documentState=1,this.version=Te.min(),this}},{key:"setReadTime",value:function(e){return this.readTime=e,this}},{key:"hasLocalMutations",get:function(){return 1===this.documentState}},{key:"hasCommittedMutations",get:function(){return 2===this.documentState}},{key:"hasPendingWrites",get:function(){return this.hasLocalMutations||this.hasCommittedMutations}},{key:"isValidDocument",value:function(){return 0!==this.documentType}},{key:"isFoundDocument",value:function(){return 1===this.documentType}},{key:"isNoDocument",value:function(){return 2===this.documentType}},{key:"isUnknownDocument",value:function(){return 3===this.documentType}},{key:"isEqual",value:function(t){return t instanceof e&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}},{key:"mutableCopy",value:function(){return new e(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}},{key:"toString",value:function(){return"Document(".concat(this.key,", ").concat(this.version,", ").concat(JSON.stringify(this.data.value),", {documentType: ").concat(this.documentType,"}), {documentState: ").concat(this.documentState,"})")}}],[{key:"newInvalidDocument",value:function(t){return new e(t,0,Te.min(),Te.min(),Ye.empty(),0)}},{key:"newFoundDocument",value:function(t,n,r){return new e(t,1,n,Te.min(),r,0)}},{key:"newNoDocument",value:function(t,n){return new e(t,2,n,Te.min(),Ye.empty(),0)}},{key:"newUnknownDocument",value:function(t,n){return new e(t,3,n,Te.min(),Ye.empty(),2)}}]),e}(),We=function e(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;t(o)(this,e),this.path=n,this.collectionGroup=r,this.orderBy=i,this.filters=a,this.limit=s,this.startAt=u,this.endAt=c,this.D=null};
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
 */function $e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;return new We(e,t,n,r,i,a,o)}var Xe=function e(n,r){"use strict";t(o)(this,e),this.position=n,this.inclusive=r},Je=function e(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";t(o)(this,e),this.field=n,this.dir=r};
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
var Ze=function e(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"F",c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;t(o)(this,e),this.path=n,this.collectionGroup=r,this.explicitOrderBy=i,this.filters=a,this.limit=s,this.limitType=u,this.startAt=c,this.endAt=l,this.q=null,this.O=null,this.startAt,this.endAt};function et(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function tt(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.filters[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(o.S())return o.field}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null}function nt(e){var t=P(e);if(null===t.q){t.q=[];var n=tt(t),r=et(t);if(null!==n&&null===r)n.isKeyField()||t.q.push(new Je(n)),t.q.push(new Je(ie.keyField(),"asc"));else{var i=!1,a=!0,o=!1,s=void 0;try{for(var u,c=t.explicitOrderBy[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;t.q.push(l),l.field.isKeyField()&&(i=!0)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}if(!i){var f=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.q.push(new Je(ie.keyField(),f))}}}return t.q}function rt(e){var t=P(e);if(!t.O)if("F"===t.limitType)t.O=$e(t.path,t.collectionGroup,nt(t),t.filters,t.limit,t.startAt,t.endAt);else{var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=nt(t)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value,c="desc"===u.dir?"asc":"desc";n.push(new Je(u.field,c))}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}var l=t.endAt?new Xe(t.endAt.position,t.endAt.inclusive):null,f=t.startAt?new Xe(t.startAt.position,t.startAt.inclusive):null;t.O=$e(t.path,t.collectionGroup,n,t.filters,t.limit,l,f)}return t.O}
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
function it(e,t){return"number"==typeof(n=t)&&Number.isInteger(n)&&!he(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER?function(e){return{integerValue:""+e}}(t):function(e,t){if(e.k){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:he(t)?"-0":t}}(e,t);var n}
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
 */var at=function e(){"use strict";t(o)(this,e),this._=void 0},ot=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(){return t(o)(this,r),n.apply(this,arguments)}return r}(at),st=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e){var i;return t(o)(this,r),(i=n.call(this)).elements=e,t(h)(i)}return r}(at),ut=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e){var i;return t(o)(this,r),(i=n.call(this)).elements=e,t(h)(i)}return r}(at),ct=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e,i){var a;return t(o)(this,r),(a=n.call(this)).C=e,a.L=i,t(h)(a)}return r}(at),lt=function(){"use strict";function e(n,r){t(o)(this,e),this.updateTime=n,this.exists=r}return t(u)(e,[{key:"isNone",get:function(){return void 0===this.updateTime&&void 0===this.exists}},{key:"isEqual",value:function(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}],[{key:"none",value:function(){return new e}},{key:"exists",value:function(t){return new e(void 0,t)}},{key:"updateTime",value:function(t){return new e(t)}}]),e}(),ft=function e(){"use strict";t(o)(this,e)},ht=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e,i,a){var s,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return t(o)(this,r),(s=n.call(this)).key=e,s.value=i,s.precondition=a,s.fieldTransforms=u,s.type=0,t(h)(s)}return t(u)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(ft),dt=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e,i,a,s){var u,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];return t(o)(this,r),(u=n.call(this)).key=e,u.data=i,u.fieldMask=a,u.precondition=s,u.fieldTransforms=c,u.type=1,t(h)(u)}return t(u)(r,[{key:"getFieldMask",value:function(){return this.fieldMask}}]),r}(ft),pt=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e,i){var a;return t(o)(this,r),(a=n.call(this)).key=e,a.precondition=i,a.type=2,a.fieldTransforms=[],t(h)(a)}return t(u)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(ft),vt=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e,i){var a;return t(o)(this,r),(a=n.call(this)).key=e,a.precondition=i,a.type=3,a.fieldTransforms=[],t(h)(a)}return t(u)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(ft),yt={asc:"ASCENDING",desc:"DESCENDING"},mt={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gt=function e(n,r){"use strict";t(o)(this,e),this.databaseId=n,this.k=r};function kt(e,t){return e.k?"".concat(new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z",""),".").concat(("000000000"+t.nanoseconds).slice(-9),"Z"):{seconds:""+t.seconds,nanos:t.nanoseconds}}function wt(e,t){return e.k?t.toBase64():t.toUint8Array()}function bt(e,t){return kt(e,t.toTimestamp())}function xt(e){return D(!!e),Te.fromTimestamp((t=Re(e),new xe(t.seconds,t.nanos)));var t}function Tt(e,t){return(n=e,new ne(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function It(e,t){return Tt(e.databaseId,t.path)}function _t(e,t){var n,r,i,a=(n=t,D(Vt(r=ne.fromString(n))),r);if(a.get(1)!==e.databaseId.projectId)throw new G(F,"Tried to deserialize key from different project: "+a.get(1)+" vs "+e.databaseId.projectId);if(a.get(3)!==e.databaseId.database)throw new G(F,"Tried to deserialize key from different database: "+a.get(3)+" vs "+e.databaseId.database);return new ae((D((i=a).length>4&&"documents"===i.get(4)),i.popFirst(5)))}function St(e,t){return Tt(e.databaseId,t)}function Et(e){return new ne(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function At(e,t,n){return{name:It(e,t),fields:n.value.mapValue.fields}}function Dt(e,t){var n,r,i;if(t instanceof ht)n={update:At(e,t.key,t.value)};else if(t instanceof pt)n={delete:It(e,t.key)};else if(t instanceof dt)n={update:At(e,t.key,t.data),updateMask:(r=t.fieldMask,i=[],r.fields.forEach((function(e){return i.push(e.canonicalString())})),{fieldPaths:i})};else{if(!(t instanceof vt))return A();n={verify:It(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((function(e){return function(e,t){var n=t.transform;if(n instanceof ot)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof st)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ut)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ct)return{fieldPath:t.field.canonicalString(),increment:n.L};throw A()}(0,e)}))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:bt(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:A()}(e,t.precondition)),n}function Pt(e,t){var n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=St(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=St(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);var i=function(e){if(0!==e.length){var t=e.map((function(e){return function(e){if("=="===e.op){if(Ke(e.value))return{unaryFilter:{field:Ft(e.field),op:"IS_NAN"}};if(ze(e.value))return{unaryFilter:{field:Ft(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Ke(e.value))return{unaryFilter:{field:Ft(e.field),op:"IS_NOT_NAN"}};if(ze(e.value))return{unaryFilter:{field:Ft(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ft(e.field),op:Nt(e.op),value:e.value}}}(e)}));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}}(t.filters);i&&(n.structuredQuery.where=i);var a=function(e){if(0!==e.length)return e.map((function(e){return{field:Ft((t=e).field),direction:Ct(t.dir)};var t}))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);var o,s,u,c=(o=e,s=t.limit,o.k||fe(s)?s:{value:s});return null!==c&&(n.structuredQuery.limit=c),t.startAt&&(n.structuredQuery.startAt={before:(u=t.startAt).inclusive,values:u.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Ct(e){return yt[e]}function Nt(e){return mt[e]}function Ft(e){return{fieldPath:e.canonicalString()}}function Vt(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */function Rt(e){return new gt(e,!0)}
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
 */var Ot=function(e){"use strict";t(f)(r,(function e(){t(o)(this,e)}));var n=t(v)(r);function r(e,i,a,s){var u;return t(o)(this,r),(u=n.call(this)).authCredentials=e,u.appCheckCredentials=i,u.Z=a,u.C=s,u.tt=!1,t(h)(u)}return t(u)(r,[{key:"et",value:function(){if(this.tt)throw new G(j,"The client has already been terminated.")}},{key:"v",value:function(e,n,r){var i=this;return this.et(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((function(a){var o=t(d)(a,2),s=o[0],u=o[1];return i.Z.v(e,n,r,s,u)})).catch((function(e){throw"FirebaseError"===e.name?(e.code===M&&(i.authCredentials.invalidateToken(),i.appCheckCredentials.invalidateToken()),e):new G(N,e.toString())}))}},{key:"R",value:function(e,n,r,i){var a=this;return this.et(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((function(o){var s=t(d)(o,2),u=s[0],c=s[1];return a.Z.R(e,n,r,u,c,i)})).catch((function(e){throw"FirebaseError"===e.name?(e.code===M&&(a.authCredentials.invalidateToken(),a.appCheckCredentials.invalidateToken()),e):new G(N,e.toString())}))}},{key:"terminate",value:function(){this.tt=!0}}]),r}();
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
 */function Mt(e,t){return Lt.apply(this,arguments)}function Lt(){return(Lt=t(i)(t(y).mark((function e(n,r){var i,a,o;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=P(n),a=Et(i.C)+"/documents",o={writes:r.map((function(e){return Dt(i.C,e)}))},e.next=3,i.v("Commit",a,o);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function jt(){return(jt=t(i)(t(y).mark((function e(n,r){var i,a;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=P(n),a=Pt(i.C,rt(r)),e.next=3,i.R("RunQuery",a.parent,{structuredQuery:a.structuredQuery});case 3:return e.abrupt("return",e.sent.filter((function(e){return!!e.document})).map((function(e){return t=i.C,n=e.document,r=_t(t,n.name),a=xt(n.updateTime),o=new Ye({mapValue:{fields:n.fields}}),Qe.newFoundDocument(r,a,o);var t,n,r,a,o})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
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
 */var qt=new Map;function Ut(e){if(e._terminated)throw new G(j,"The client has already been terminated.");if(!qt.has(e)){I("ComponentProvider","Initializing Datastore");var t=(a=e._databaseId,o=e.app.options.appId||"",s=e._persistenceKey,u=e._freezeSettings(),i=new Z(a,o,s,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams),new me(i,fetch.bind(null))),n=Rt(e._databaseId),r=function(e,t,n,r){return new Ot(e,t,n,r)}(e._authCredentials,e._appCheckCredentials,t,n);qt.set(e,r)}var i,a,o,s,u;
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
return qt.get(e)}var Bt=function(){"use strict";function e(n){var r;if(t(o)(this,e),void 0===n.host){if(void 0!==n.ssl)throw new G(F,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=n.host,this.ssl=null===(r=n.ssl)||void 0===r||r;if(this.credentials=n.credentials,this.ignoreUndefinedProperties=!!n.ignoreUndefinedProperties,void 0===n.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==n.cacheSizeBytes&&n.cacheSizeBytes<1048576)throw new G(F,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=n.cacheSizeBytes}this.experimentalForceLongPolling=!!n.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!n.experimentalAutoDetectLongPolling,this.useFetchStreams=!!n.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new G(F,"".concat("experimentalForceLongPolling"," and ").concat("experimentalAutoDetectLongPolling"," cannot be used together."))}(0,n.experimentalForceLongPolling,0,n.experimentalAutoDetectLongPolling)}return t(u)(e,[{key:"isEqual",value:function(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}]),e}(),zt=function(){"use strict";function e(n,r,i,a){t(o)(this,e),this._authCredentials=n,this._appCheckCredentials=r,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bt({}),this._settingsFrozen=!1}return t(u)(e,[{key:"app",get:function(){if(!this._app)throw new G(j,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}},{key:"_initialized",get:function(){return this._settingsFrozen}},{key:"_terminated",get:function(){return void 0!==this._terminateTask}},{key:"_setSettings",value:function(e){if(this._settingsFrozen)throw new G(j,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bt(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Y;switch(e.type){case"gapi":var t=e.client;return new $(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new G(F,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}},{key:"_getSettings",value:function(){return this._settings}},{key:"_freezeSettings",value:function(){return this._settingsFrozen=!0,this._settings}},{key:"_delete",value:function(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}},{key:"toJSON",value:function(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}},{key:"_terminate",value:function(){return e=this,(t=qt.get(e))&&(I("ComponentProvider","Removing Datastore"),qt.delete(e),t.terminate()),Promise.resolve();var e,t}}]),e}();
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
 */function Kt(e,t){var n="object"==typeof e?e:(0,m.getApp)(),r="string"==typeof e?e:t||"(default)";return(0,m._getProvider)(n,"firestore/lite").getImmediate({identifier:r})}
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
var Gt=function(){"use strict";function e(n,r,i){t(o)(this,e),this.converter=r,this._key=i,this.type="document",this.firestore=n}return t(u)(e,[{key:"_path",get:function(){return this._key.path}},{key:"id",get:function(){return this._key.path.lastSegment()}},{key:"path",get:function(){return this._key.path.canonicalString()}},{key:"parent",get:function(){return new Yt(this.firestore,this.converter,this._key.path.popLast())}},{key:"withConverter",value:function(t){return new e(this.firestore,t,this._key)}}]),e}(),Ht=function(){"use strict";function e(n,r,i){t(o)(this,e),this.converter=r,this._query=i,this.type="query",this.firestore=n}return t(u)(e,[{key:"withConverter",value:function(t){return new e(this.firestore,t,this._query)}}]),e}(),Yt=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e,i,a){var s;return t(o)(this,r),(s=n.call(this,e,i,new Ze(a)))._path=a,s.type="collection",t(h)(s)}return t(u)(r,[{key:"id",get:function(){return this._query.path.lastSegment()}},{key:"path",get:function(){return this._query.path.canonicalString()}},{key:"parent",get:function(){var e=this._path.popLast();return e.isEmpty()?null:new Gt(this.firestore,null,new ae(e))}},{key:"withConverter",value:function(e){return new r(this.firestore,e,this._path)}}]),r}(Ht);function Qt(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(e=(0,w.getModularInstance)(e),oe("collection","path",n),e instanceof zt){var o,s=(o=ne).fromString.apply(o,[n].concat(t(p)(i)));return ue(s),new Yt(e,null,s)}var u;if(!(e instanceof Gt||e instanceof Yt))throw new G(F,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");var c=e._path.child((u=ne).fromString.apply(u,[n].concat(t(p)(i))));return ue(c),new Yt(e.firestore,null,c)}
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
var Wt=function(){"use strict";function e(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];t(o)(this,e);for(var a=0;a<r.length;++a)if(0===r[a].length)throw new G(F,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ie(r)}return t(u)(e,[{key:"isEqual",value:function(e){return this._internalPath.isEqual(e._internalPath)}}]),e}();
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
var $t=function(){"use strict";function e(n){t(o)(this,e),this._byteString=n}return t(u)(e,[{key:"toBase64",value:function(){return this._byteString.toBase64()}},{key:"toUint8Array",value:function(){return this._byteString.toUint8Array()}},{key:"toString",value:function(){return"Bytes(base64: "+this.toBase64()+")"}},{key:"isEqual",value:function(e){return this._byteString.isEqual(e._byteString)}}],[{key:"fromBase64String",value:function(t){try{return new e(Fe.fromBase64String(t))}catch(e){throw new G(F,"Failed to construct data from Base64 string: "+e)}}},{key:"fromUint8Array",value:function(t){return new e(Fe.fromUint8Array(t))}}]),e}(),Xt=function e(n){"use strict";t(o)(this,e),this._methodName=n},Jt=function(){"use strict";function e(n,r){if(t(o)(this,e),!isFinite(n)||n<-90||n>90)throw new G(F,"Latitude must be a number between -90 and 90, but was: "+n);if(!isFinite(r)||r<-180||r>180)throw new G(F,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=n,this._long=r}return t(u)(e,[{key:"latitude",get:function(){return this._lat}},{key:"longitude",get:function(){return this._long}},{key:"isEqual",value:function(e){return this._lat===e._lat&&this._long===e._long}},{key:"toJSON",value:function(){return{latitude:this._lat,longitude:this._long}}},{key:"_compareTo",value:function(e){return we(this._lat,e._lat)||we(this._long,e._long)}}]),e}(),Zt=/^__.*__$/,en=function(){"use strict";function e(n,r,i){t(o)(this,e),this.data=n,this.fieldMask=r,this.fieldTransforms=i}return t(u)(e,[{key:"toMutation",value:function(e,t){return null!==this.fieldMask?new dt(e,this.data,this.fieldMask,t,this.fieldTransforms):new ht(e,this.data,t,this.fieldTransforms)}}]),e}();
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
 */function tn(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw A()}}var nn=function(){"use strict";function e(n,r,i,a,s,u){t(o)(this,e),this.settings=n,this.databaseId=r,this.C=i,this.ignoreUndefinedProperties=a,void 0===s&&this.nt(),this.fieldTransforms=s||[],this.fieldMask=u||[]}return t(u)(e,[{key:"path",get:function(){return this.settings.path}},{key:"rt",get:function(){return this.settings.rt}},{key:"st",value:function(t){return new e(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.C,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}},{key:"it",value:function(e){var t,n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.st({path:n,ot:!1});return r.ut(e),r}},{key:"ct",value:function(e){var t,n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.st({path:n,ot:!1});return r.nt(),r}},{key:"at",value:function(e){return this.st({path:void 0,ot:!0})}},{key:"ht",value:function(e){return pn(e,this.settings.methodName,this.settings.lt||!1,this.path,this.settings.ft)}},{key:"contains",value:function(e){return void 0!==this.fieldMask.find((function(t){return e.isPrefixOf(t)}))||void 0!==this.fieldTransforms.find((function(t){return e.isPrefixOf(t.field)}))}},{key:"nt",value:function(){if(this.path)for(var e=0;e<this.path.length;e++)this.ut(this.path.get(e))}},{key:"ut",value:function(e){if(0===e.length)throw this.ht("Document fields must not be empty");if(tn(this.rt)&&Zt.test(e))throw this.ht('Document fields cannot begin and end with "__"')}}]),e}(),rn=function(){"use strict";function e(n,r,i){t(o)(this,e),this.databaseId=n,this.ignoreUndefinedProperties=r,this.C=i||Rt(n)}return t(u)(e,[{key:"dt",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new nn({rt:e,methodName:t,ft:n,path:ie.emptyPath(),ot:!1,lt:r},this.databaseId,this.C,this.ignoreUndefinedProperties)}}]),e}();function an(e){var t=e._freezeSettings(),n=Rt(e._databaseId);return new rn(e._databaseId,!!t.ignoreUndefinedProperties,n)}function on(e,t,n,r,i){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},o=e.dt(a.merge||a.mergeFields?2:0,t,n,i);ln("Data must be an object, but it was:",o,r);var s,u,c=un(r,o);if(a.merge)s=new Ce(o.fieldMask),u=o.fieldTransforms;else if(a.mergeFields){var l=[],f=!0,h=!1,d=void 0;try{for(var p,v=a.mergeFields[Symbol.iterator]();!(f=(p=v.next()).done);f=!0){var y=p.value,m=fn(t,y,n);if(!o.contains(m))throw new G(F,"Field '".concat(m,"' is specified in your field mask but missing from your input data."));vn(l,m)||l.push(m)}}catch(e){h=!0,d=e}finally{try{f||null==v.return||v.return()}finally{if(h)throw d}}s=new Ce(l),u=o.fieldTransforms.filter((function(e){return s.covers(e.field)}))}else s=null,u=o.fieldTransforms;return new en(new Ye(c),s,u)}function sn(e,t){if(cn(e=(0,w.getModularInstance)(e)))return ln("Unsupported field value:",t,e),un(e,t);if(e instanceof Xt)return function(e,t){if(!tn(t.rt))throw t.ht("".concat(e._methodName,"() can only be used with update() and set()"));if(!t.path)throw t.ht("".concat(e._methodName,"() is not currently supported inside arrays"));var n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ot&&4!==t.rt)throw t.ht("Nested arrays are not supported");return function(e,t){var n=[],r=0,i=!0,a=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=sn(s.value,t.at(r));null==c&&(c={nullValue:"NULL_VALUE"}),n.push(c),r++}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,w.getModularInstance)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return it(t.C,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){var n=xe.fromDate(e);return{timestampValue:kt(t.C,n)}}if(e instanceof xe){var r=new xe(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:kt(t.C,r)}}if(e instanceof Jt)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof $t)return{bytesValue:wt(t.C,e._byteString)};if(e instanceof Gt){var i=t.databaseId,a=e.firestore._databaseId;if(!a.isEqual(i))throw t.ht("Document reference is for database ".concat(a.projectId,"/").concat(a.database," but should be for database ").concat(i.projectId,"/").concat(i.database));return{referenceValue:Tt(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ht("Unsupported field value: ".concat(ce(e)))}(e,t)}function un(e,t){var n={};return function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):_e(e,(function(e,r){var i=sn(r,t.it(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function cn(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof xe||e instanceof Jt||e instanceof $t||e instanceof Gt||e instanceof Xt)}function ln(e,t,n){if(!cn(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){var r=ce(n);throw"an object"===r?t.ht(e+" a custom object"):t.ht(e+" "+r)}var i}function fn(e,t,n){if((t=(0,w.getModularInstance)(t))instanceof Wt)return t._internalPath;if("string"==typeof t)return dn(e,t);throw pn("Field path arguments must be of type string or ",e,!1,void 0,n)}var hn=new RegExp("[~\\*/\\[\\]]");function dn(e,n,r){if(n.search(hn)>=0)throw pn("Invalid field path (".concat(n,"). Paths must not contain '~', '*', '/', '[', or ']'"),e,!1,void 0,r);try{return t(s)(Wt,t(p)(n.split(".")))._internalPath}catch(t){throw pn("Invalid field path (".concat(n,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"),e,!1,void 0,r)}}function pn(e,t,n,r,i){var a=r&&!r.isEmpty(),o=void 0!==i,s="Function ".concat(t,"() called with invalid data");n&&(s+=" (via `toFirestore()`)"),s+=". ";var u="";return(a||o)&&(u+=" (found",a&&(u+=" in field ".concat(r)),o&&(u+=" in document ".concat(i)),u+=")"),new G(F,s+e+u)}function vn(e,t){return e.some((function(e){return e.isEqual(t)}))}
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
 */var yn=function(){"use strict";function e(n,r,i,a,s){t(o)(this,e),this._firestore=n,this._userDataWriter=r,this._key=i,this._document=a,this._converter=s}return t(u)(e,[{key:"id",get:function(){return this._key.path.lastSegment()}},{key:"ref",get:function(){return new Gt(this._firestore,this._converter,this._key)}},{key:"exists",value:function(){return null!==this._document}},{key:"data",value:function(){if(this._document){if(this._converter){var e=new mn(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}},{key:"get",value:function(e){if(this._document){var t=this._document.data.field(kn("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}]),e}(),mn=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(){return t(o)(this,r),n.apply(this,arguments)}return t(u)(r,[{key:"data",value:function(){return t(c)(t(l)(r.prototype),"data",this).call(this)}}]),r}(yn),gn=function(){"use strict";function e(n,r){t(o)(this,e),this._docs=r,this.query=n}return t(u)(e,[{key:"docs",get:function(){return t(p)(this._docs)}},{key:"size",get:function(){return this.docs.length}},{key:"empty",get:function(){return 0===this.docs.length}},{key:"forEach",value:function(e,t){this._docs.forEach(e,t)}}]),e}();function kn(e,t){return"string"==typeof t?dn(e,t):t instanceof Wt?t._internalPath:t._delegate._internalPath}
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
function wn(e,t,n){return e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t}var bn=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e){var i;return t(o)(this,r),(i=n.call(this)).firestore=e,t(h)(i)}return t(u)(r,[{key:"convertBytes",value:function(e){return new $t(e)}},{key:"convertReference",value:function(e){var t=this.convertDocumentKey(e,this.firestore._databaseId);return new Gt(this.firestore,null,t)}}]),r}(function(){"use strict";function e(){t(o)(this,e)}return t(u)(e,[{key:"convertValue",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";switch(Ue(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Me(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw A()}}},{key:"convertObject",value:function(e,t){var n=this,r={};return _e(e.fields,(function(e,i){r[e]=n.convertValue(i,t)})),r}},{key:"convertGeoPoint",value:function(e){return new Jt(Oe(e.latitude),Oe(e.longitude))}},{key:"convertArray",value:function(e,t){var n=this;return(e.values||[]).map((function(e){return n.convertValue(e,t)}))}},{key:"convertServerTimestamp",value:function(e,t){switch(t){case"previous":var n=je(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(qe(e));default:return null}}},{key:"convertTimestamp",value:function(e){var t=Re(e);return new xe(t.seconds,t.nanos)}},{key:"convertDocumentKey",value:function(e,t){var n=ne.fromString(e);D(Vt(n));var r=new ee(n.get(1),n.get(3)),i=new ae(n.popFirst(5));return r.isEqual(t)||_("Document ".concat(i," contains a document reference within a different database (").concat(r.projectId,"/").concat(r.database,") which is not supported. It will be treated as a reference in the current database (").concat(t.projectId,"/").concat(t.database,") instead.")),i}}]),e}());function xn(e){!function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new G(B,"limitToLast() queries require specifying at least one orderBy() clause")}((e=le(e,Ht))._query);var t=Ut(e.firestore),n=new bn(e.firestore);return function(e,t){return jt.apply(this,arguments)}(t,e._query).then((function(t){var r=t.map((function(t){return new mn(e.firestore,n,t.key,t,e.converter)}));return"L"===e._query.limitType&&r.reverse(),new gn(e,r)}))}function Tn(e,n){var r=function(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(e=(0,w.getModularInstance)(e),1===arguments.length&&(n=ke.N()),oe("doc","path",n),e instanceof zt){var o,s=(o=ne).fromString.apply(o,[n].concat(t(p)(i)));return se(s),new Gt(e,null,new ae(s))}var u;if(!(e instanceof Gt||e instanceof Yt))throw new G(F,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");var c=e._path.child((u=ne).fromString.apply(u,[n].concat(t(p)(i))));return se(c),new Gt(e.firestore,e instanceof Yt?e.converter:null,new ae(c))}(e=le(e,Yt)),i=wn(e.converter,n),a=on(an(e.firestore),"addDoc",r._key,i,null!==r.converter,{});return Mt(Ut(e.firestore),[a.toMutation(r._key,lt.exists(!1))]).then((function(){return r}))}
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
var In;
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
 */In="".concat(m.SDK_VERSION,"_lite"),x=In,(0,m._registerComponent)(new(0,g.Component)("firestore/lite",(function(e,t){var n=t.instanceIdentifier,r=t.options,i=e.getProvider("app").getImmediate(),a=new zt(new Q(e.getProvider("auth-internal")),new J(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new G(F,'"projectId" not provided in firebase.initializeApp.');return new ee(e.options.projectId,t)}(i,n),i);return r&&a._setSettings(r),a}),"PUBLIC").setMultipleInstances(!0)),(0,m.registerVersion)("firestore-lite","3.5.0",""),(0,m.registerVersion)("firestore-lite","3.5.0","esm2017")}));var o,s=a("dDDEV"),u=a("6Urw1"),c=a("bpxeT"),l=a("8MBJY"),f=a("a2hTj"),h=a("hKHmD"),d=a("1t1Wn"),p=a("2TvXO"),v=a("MjY8E"),y=a("kZfxc"),m=a("2xDiJ"),g=a("6ExWU"),k=(c=a("bpxeT"),h=a("hKHmD"),a("8nrFW")),w=(p=a("2TvXO"),v=a("MjY8E"),g=a("6ExWU"),m=a("2xDiJ"),a("ajgRO")),b="@firebase/installations",x="0.5.12",T=1e4,I="w:".concat(x),_="FIS_v2",S=36e5,E=(o={},t(h)(o,"missing-app-config-values",'Missing App configuration value: "{$valueName}"'),t(h)(o,"not-registered","Firebase Installation is not registered."),t(h)(o,"installation-not-found","Firebase Installation not found."),t(h)(o,"request-failed",'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'),t(h)(o,"app-offline","Could not process request. Application offline."),t(h)(o,"delete-pending-registration","Can't delete installation while there is a pending registration request."),o),A=new(0,m.ErrorFactory)("installations","Installations",E);function D(e){return e instanceof m.FirebaseError&&e.code.includes("request-failed")}
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
 */function P(e){var t=e.projectId;return"".concat("https://firebaseinstallations.googleapis.com/v1","/projects/").concat(t,"/installations")}function C(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function N(e,t){return F.apply(this,arguments)}function F(){return(F=t(c)(t(p).mark((function e(n,r){var i,a;return t(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.json();case 2:return i=e.sent,a=i.error,e.abrupt("return",A.create("request-failed",{requestName:n,serverCode:a.code,serverMessage:a.message,serverStatus:a.status}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function R(e,t){var n=t.refreshToken,r=V(e);return r.append("Authorization",function(e){return"".concat(_," ").concat(e)}(n)),r}function O(e){return M.apply(this,arguments)}function M(){return(M=t(c)(t(p).mark((function e(n){var r;return t(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:if(!((r=e.sent).status>=500&&r.status<600)){e.next=5;break}return e.abrupt("return",n());case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e,t){return j.apply(this,arguments)}function j(){return(j=
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
t(c)(t(p).mark((function e(n,r){var i,a,o,s,u,c,l,f,h,d,v,y;return t(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.appConfig,a=n.heartbeatServiceProvider,o=r.fid,s=P(i),u=V(i),!(c=a.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,c.getHeartbeatsHeader();case 7:(l=e.sent)&&u.append("x-firebase-client",l);case 9:return f={fid:o,authVersion:_,appId:i.appId,sdkVersion:I},h={method:"POST",headers:u,body:JSON.stringify(f)},e.next=13,O((function(){return fetch(s,h)}));case 13:if(!(d=e.sent).ok){e.next=22;break}return e.next=17,d.json();case 17:return v=e.sent,y={fid:v.fid||o,registrationStatus:2,refreshToken:v.refreshToken,authToken:C(v.authToken)},e.abrupt("return",y);case 22:return e.next=24,N("Create Installation",d);case 24:throw e.sent;case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
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
 */function q(e){return new Promise((function(t){setTimeout(t,e)}))}
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
var U=/^[cdef][\w-]{21}$/;function B(){try{var e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;var n=function(e){return(n=e,btoa((r=String).fromCharCode.apply(r,t(k)(n))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var n,r}
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
 */(e);return U.test(n)?n:""}catch(e){return""}}function z(e){return"".concat(e.appName,"!").concat(e.appId)}
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
 */var K=new Map;function G(e,t){var n=z(e);H(n,t),function(e,t){var n=Q();n&&n.postMessage({key:e,fid:t});W()}(n,t)}function H(e,t){var n=K.get(e);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}var Y=null;function Q(){return!Y&&"BroadcastChannel"in self&&((Y=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){H(e.data.key,e.data.fid)}),Y}function W(){0===K.size&&Y&&(Y.close(),Y=null)}
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
 */var $="firebase-installations-store",X=null;function J(){return X||(X=(0,w.openDB)("firebase-installations-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore($)}})),X}function Z(e,t){return ee.apply(this,arguments)}function ee(){return(ee=t(c)(t(p).mark((function e(n,r){var i,a,o,s,u;return t(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=z(n),e.next=3,J();case 3:return a=e.sent,o=a.transaction($,"readwrite"),s=o.objectStore($),e.next=8,s.get(i);case 8:return u=e.sent,e.next=11,s.put(r,i);case 11:return e.next=13,o.done;case 13:return u&&u.fid===r.fid||G(n,r.fid),e.abrupt("return",r);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function te(e){return ne.apply(this,arguments)}function ne(){return(ne=t(c)(t(p).mark((function e(n){var r,i,a;return t(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=z(n),e.next=3,J();case 3:return i=e.sent,a=i.transaction($,"readwrite"),e.next=7,a.objectStore($).delete(r);case 7:return e.next=9,a.done;case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function re(e,t){return ie.apply(this,arguments)}function ie(){return(ie=t(c)(t(p).mark((function e(n,r){var i,a,o,s,u,c;return t(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=z(n),e.next=3,J();case 3:return a=e.sent,o=a.transaction($,"readwrite"),s=o.objectStore($),e.next=8,s.get(i);case 8:if(u=e.sent,void 0!==(c=r(u))){e.next=15;break}return e.next=13,s.delete(i);case 13:e.next=17;break;case 15:return e.next=17,s.put(c,i);case 17:return e.next=19,o.done;case 19:return!c||u&&u.fid===c.fid||G(n,c.fid),e.abrupt("return",c);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ae(e){return oe.apply(this,arguments)}function oe(){return(oe=
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
t(c)(t(p).mark((function e(n){var r,i;return t(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,re(n.appConfig,(function(e){var t=se(e),i=ue(n,t);return r=i.registrationPromise,i.installationEntry}));case 3:if(""!==(i=e.sent).fid){e.next=9;break}return e.next=7,r;case 7:return e.t0=e.sent,e.abrupt("return",{installationEntry:e.t0});case 9:return e.abrupt("return",{installationEntry:i,registrationPromise:r});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function se(e){return de(e||{fid:B(),registrationStatus:0})}function ue(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(A.create("app-offline"))};var n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=function(e,t){return ce.apply(this,arguments)}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:le(e)}:{installationEntry:t}}function ce(){return(ce=t(c)(t(p).mark((function e(n,r){var i;return t(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L(n,r);case 3:return i=e.sent,e.abrupt("return",Z(n.appConfig,i));case 7:if(e.prev=7,e.t0=e.catch(0),!D(e.t0)||409!==e.t0.customData.serverCode){e.next=14;break}return e.next=12,te(n.appConfig);case 12:e.next=16;break;case 14:return e.next=16,Z(n.appConfig,{fid:r.fid,registrationStatus:0});case 16:throw e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function le(e){return fe.apply(this,arguments)}function fe(){return(fe=t(c)(t(p).mark((function e(n){var r,i,a,o;return t(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he(n.appConfig);case 2:r=e.sent;case 3:if(1!==r.registrationStatus){e.next=11;break}return e.next=6,q(100);case 6:return e.next=8,he(n.appConfig);case 8:r=e.sent,e.next=3;break;case 11:if(0!==r.registrationStatus){e.next=22;break}return e.next=14,ae(n);case 14:if(i=e.sent,a=i.installationEntry,!(o=i.registrationPromise)){e.next=21;break}return e.abrupt("return",o);case 21:return e.abrupt("return",a);case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function he(e){return re(e,(function(e){if(!e)throw A.create("installation-not-found");return de(e)}))}function de(e){return 1===(t=e).registrationStatus&&t.registrationTime+T<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}function pe(e,t){return ve.apply(this,arguments)}function ve(){return(ve=
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
t(c)(t(p).mark((function e(n,r){var i,a,o,s,u,c,l,f,h,d,v;return t(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.appConfig,a=n.heartbeatServiceProvider,o=ye(i,r),s=R(i,r),!(u=a.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,u.getHeartbeatsHeader();case 7:(c=e.sent)&&s.append("x-firebase-client",c);case 9:return l={installation:{sdkVersion:I,appId:i.appId}},f={method:"POST",headers:s,body:JSON.stringify(l)},e.next=13,O((function(){return fetch(o,f)}));case 13:if(!(h=e.sent).ok){e.next=22;break}return e.next=17,h.json();case 17:return d=e.sent,v=C(d),e.abrupt("return",v);case 22:return e.next=24,N("Generate Auth Token",h);case 24:throw e.sent;case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ye(e,t){var n=t.fid;return"".concat(P(e),"/").concat(n,"/authTokens:generate")}function me(e){return ge.apply(this,arguments)}function ge(){return ge=
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
t(c)(t(p).mark((function e(n){var r,i,a,o,s=arguments;return t(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]&&s[1],e.next=4,re(n.appConfig,(function(e){if(!Ie(e))throw A.create("not-registered");var t=e.authToken;if(!r&&_e(t))return e;if(1===t.requestStatus)return i=ke(n,r),e;if(!navigator.onLine)throw A.create("app-offline");var a=Se(e);return i=xe(n,a),a}));case 4:if(a=e.sent,!i){e.next=11;break}return e.next=8,i;case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=a.authToken;case 12:return o=e.t0,e.abrupt("return",o);case 14:case"end":return e.stop()}}),e)}))),ge.apply(this,arguments)}function ke(e,t){return we.apply(this,arguments)}function we(){return(we=t(c)(t(p).mark((function e(n,r){var i,a;return t(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,be(n.appConfig);case 2:i=e.sent;case 3:if(1!==i.authToken.requestStatus){e.next=11;break}return e.next=6,q(100);case 6:return e.next=8,be(n.appConfig);case 8:i=e.sent,e.next=3;break;case 11:if(0!==(a=i.authToken).requestStatus){e.next=16;break}return e.abrupt("return",me(n,r));case 16:return e.abrupt("return",a);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function be(e){return re(e,(function(e){if(!Ie(e))throw A.create("not-registered");var t,n=e.authToken;return 1===(t=n).requestStatus&&t.requestTime+T<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}function xe(e,t){return Te.apply(this,arguments)}function Te(){return(Te=t(c)(t(p).mark((function e(n,r){var i,a,o;return t(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,pe(n,r);case 3:return i=e.sent,a=Object.assign(Object.assign({},r),{authToken:i}),e.next=7,Z(n.appConfig,a);case 7:return e.abrupt("return",i);case 10:if(e.prev=10,e.t0=e.catch(0),!D(e.t0)||401!==e.t0.customData.serverCode&&404!==e.t0.customData.serverCode){e.next=17;break}return e.next=15,te(n.appConfig);case 15:e.next=20;break;case 17:return o=Object.assign(Object.assign({},r),{authToken:{requestStatus:0}}),e.next=20,Z(n.appConfig,o);case 20:throw e.t0;case 21:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function Ie(e){return void 0!==e&&2===e.registrationStatus}function _e(e){return 2===e.requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+S}(e)}function Se(e){var t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Ee(){return(Ee=
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
t(c)(t(p).mark((function e(n){var r,i,a,o;return t(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n,e.next=3,ae(r);case 3:return i=e.sent,a=i.installationEntry,(o=i.registrationPromise)?o.catch(console.error):me(r).catch(console.error),e.abrupt("return",a.fid);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ae(){return Ae=
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
t(c)(t(p).mark((function e(n){var r,i,a,o=arguments;return t(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]&&o[1],i=n,e.next=4,De(i);case 4:return e.next=6,me(i,r);case 6:return a=e.sent,e.abrupt("return",a.token);case 8:case"end":return e.stop()}}),e)}))),Ae.apply(this,arguments)}function De(e){return Pe.apply(this,arguments)}function Pe(){return(Pe=t(c)(t(p).mark((function e(n){var r;return t(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae(n);case 2:if(!(r=e.sent.registrationPromise)){e.next=6;break}return e.next=6,r;case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ce(e){return A.create("missing-app-config-values",{valueName:e})}
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
 */var Ne="installations",Fe=function(e){var t=e.getProvider("app").getImmediate(),n=
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
function(e){if(!e||!e.options)throw Ce("App Configuration");if(!e.name)throw Ce("App Name");var t=!0,n=!1,r=void 0;try{for(var i,a=["projectId","apiKey","appId"][Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(!e.options[o])throw Ce(o)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:(0,v._getProvider)(t,"heartbeat"),_delete:function(){return Promise.resolve()}}},Ve=function(e){var t=e.getProvider("app").getImmediate(),n=(0,v._getProvider)(t,Ne).getImmediate(),r={getId:function(){return function(e){return Ee.apply(this,arguments)}(n)},getToken:function(e){return function(e){return Ae.apply(this,arguments)}(n,e)}};return r};(0,v._registerComponent)(new(0,g.Component)(Ne,Fe,"PUBLIC")),(0,v._registerComponent)(new(0,g.Component)("installations-internal",Ve,"PRIVATE")),(0,v.registerVersion)(b,x),(0,v.registerVersion)(b,x,"esm2017");
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
var Re,Oe="analytics",Me=6e4,Le="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",je="https://www.googletagmanager.com/gtag/js",qe=new(0,y.Logger)("@firebase/analytics");
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
function Ue(e){return Promise.all(e.map((function(e){return e.catch((function(e){return e}))})))}function Be(e,t){var n=document.createElement("script");n.src="".concat(je,"?l=").concat(e,"&id=").concat(t),n.async=!0,document.head.appendChild(n)}function ze(e,t,n,r,i,a){return Ke.apply(this,arguments)}function Ke(){return(Ke=t(c)(t(p).mark((function e(n,r,i,a,o,s){var u,c,l;return t(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=a[o],e.prev=1,!u){e.next=7;break}return e.next=5,r[u];case 5:e.next=14;break;case 7:return e.next=9,Ue(i);case 9:if(c=e.sent,!(l=c.find((function(e){return e.measurementId===o})))){e.next=14;break}return e.next=14,r[l.appId];case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),qe.error(e.t0);case 19:n("config",o,s);case 20:case"end":return e.stop()}}),e,null,[[1,16]])})))).apply(this,arguments)}function Ge(e,t,n,r,i){return He.apply(this,arguments)}function He(){return(He=t(c)(t(p).mark((function e(n,r,i,a,o){var s,u,c,l,f,h,d,v,y,m,g;return t(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,s=[],!o||!o.send_to){e.next=38;break}return u=o.send_to,Array.isArray(u)||(u=[u]),e.next=7,Ue(i);case 7:c=e.sent,l=!0,f=!1,h=void 0,e.prev=9,d=u[Symbol.iterator]();case 11:if(l=(v=d.next()).done){e.next=24;break}if(y=v.value,m=c.find((function(e){return e.measurementId===y})),!(g=m&&r[m.appId])){e.next=19;break}s.push(g),e.next=21;break;case 19:return s=[],e.abrupt("break",24);case 21:l=!0,e.next=11;break;case 24:e.next=30;break;case 26:e.prev=26,e.t0=e.catch(9),f=!0,h=e.t0;case 30:e.prev=30,e.prev=31,l||null==d.return||d.return();case 33:if(e.prev=33,!f){e.next=36;break}throw h;case 36:return e.finish(33);case 37:return e.finish(30);case 38:return 0===s.length&&(s=Object.values(r)),e.next=41,Promise.all(s);case 41:n("event",a,o||{}),e.next=47;break;case 44:e.prev=44,e.t1=e.catch(0),qe.error(e.t1);case 47:case"end":return e.stop()}}),e,null,[[0,44],[9,26,30,38],[31,,33,37]])})))).apply(this,arguments)}function Ye(e,n,r,i,a){var o=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];window[i].push(arguments)};return window[a]&&"function"==typeof window[a]&&(o=window[a]),window[a]=function(e,n,r,i){function a(){return(a=t(c)(t(p).mark((function a(o,s,u){return t(p).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,"event"!==o){t.next=6;break}return t.next=4,Ge(e,n,r,s,u);case 4:t.next=12;break;case 6:if("config"!==o){t.next=11;break}return t.next=9,ze(e,n,r,i,s,u);case 9:t.next=12;break;case 11:"consent"===o?e("consent","update",u):e("set",s);case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),qe.error(t.t0);case 17:case"end":return t.stop()}}),a,null,[[0,14]])})))).apply(this,arguments)}return function(e,t,n){return a.apply(this,arguments)}}(o,e,n,r),{gtagCore:o,wrappedGtag:window[a]}}function Qe(){var e=window.document.getElementsByTagName("script"),t=!0,n=!1,r=void 0;try{for(var i,a=Object.values(e)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(o.src&&o.src.includes(je))return o}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null}
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
var We=(Re={},t(h)(Re,"already-exists","A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId."),t(h)(Re,"already-initialized","initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance."),t(h)(Re,"already-initialized-settings","Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect."),t(h)(Re,"interop-component-reg-failed","Firebase Analytics Interop Component failed to instantiate: {$reason}"),t(h)(Re,"invalid-analytics-context","Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),t(h)(Re,"indexeddb-unavailable","IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),t(h)(Re,"fetch-throttle","The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}."),t(h)(Re,"config-fetch-failed","Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}"),t(h)(Re,"no-api-key",'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.'),t(h)(Re,"no-app-id",'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'),Re),$e=new(0,m.ErrorFactory)("analytics","Analytics",We),Xe=function(){"use strict";function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;t(l)(this,e),this.throttleMetadata=n,this.intervalMillis=r}return t(f)(e,[{key:"getThrottleMetadata",value:function(e){return this.throttleMetadata[e]}},{key:"setThrottleMetadata",value:function(e,t){this.throttleMetadata[e]=t}},{key:"deleteThrottleMetadata",value:function(e){delete this.throttleMetadata[e]}}]),e}(),Je=new Xe;function Ze(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}function et(e){return tt.apply(this,arguments)}function tt(){return(tt=t(c)(t(p).mark((function e(n){var r,i,a,o,s,u,c,l;return t(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.appId,a=n.apiKey,o={method:"GET",headers:Ze(a)},s=Le.replace("{app-id}",i),e.next=6,fetch(s,o);case 6:if(200===(u=e.sent).status||304===u.status){e.next=19;break}return c="",e.prev=9,e.next=12,u.json();case 12:l=e.sent,(null===(r=l.error)||void 0===r?void 0:r.message)&&(c=l.error.message),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(9);case 18:throw $e.create("config-fetch-failed",{httpStatus:u.status,responseMessage:c});case 19:return e.abrupt("return",u.json());case 20:case"end":return e.stop()}}),e,null,[[9,16]])})))).apply(this,arguments)}function nt(e){return rt.apply(this,arguments)}function rt(){return rt=t(c)(t(p).mark((function e(n){var r,i,a,o,s,u,l,f,h=arguments;return t(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=h.length>1&&void 0!==h[1]?h[1]:Je,i=h.length>2?h[2]:void 0,a=n.options,o=a.appId,s=a.apiKey,u=a.measurementId,o){e.next=4;break}throw $e.create("no-app-id");case 4:if(s){e.next=8;break}if(!u){e.next=7;break}return e.abrupt("return",{measurementId:u,appId:o});case 7:throw $e.create("no-api-key");case 8:return l=r.getThrottleMetadata(o)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new lt,setTimeout(t(c)(t(p).mark((function e(){return t(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.abort();case 1:case"end":return e.stop()}}),e)}))),void 0!==i?i:Me),e.abrupt("return",it({appId:o,apiKey:s,measurementId:u},l,f,r));case 12:case"end":return e.stop()}}),e)}))),rt.apply(this,arguments)}function it(e,t,n){return at.apply(this,arguments)}function at(){return at=t(c)(t(p).mark((function e(n,r,i){var a,o,s,u,c,l,f,h,d,v,y,g=arguments;return t(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.throttleEndTimeMillis,o=r.backoffCount,s=g.length>3&&void 0!==g[3]?g[3]:Je,l=n.appId,f=n.measurementId,e.prev=3,e.next=6,ot(i,a);case 6:e.next=14;break;case 8:if(e.prev=8,e.t0=e.catch(3),!f){e.next=13;break}return qe.warn("Timed out fetching this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(f)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null===(u=e.t0)||void 0===u?void 0:u.message,"]")),e.abrupt("return",{appId:l,measurementId:f});case 13:throw e.t0;case 14:return e.prev=14,e.next=17,et(n);case 17:return h=e.sent,s.deleteThrottleMetadata(l),e.abrupt("return",h);case 22:if(e.prev=22,e.t1=e.catch(14),st(d=e.t1)){e.next=33;break}if(s.deleteThrottleMetadata(l),!f){e.next=32;break}return qe.warn("Failed to fetch this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(f)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null==d?void 0:d.message,"]")),e.abrupt("return",{appId:l,measurementId:f});case 32:throw e.t1;case 33:return v=503===Number(null===(c=null==d?void 0:d.customData)||void 0===c?void 0:c.httpStatus)?(0,m.calculateBackoffMillis)(o,s.intervalMillis,30):(0,m.calculateBackoffMillis)(o,s.intervalMillis),y={throttleEndTimeMillis:Date.now()+v,backoffCount:o+1},s.setThrottleMetadata(l,y),qe.debug("Calling attemptFetch again in ".concat(v," millis")),e.abrupt("return",it(n,y,i,s));case 38:case"end":return e.stop()}}),e,null,[[3,8],[14,22]])}))),at.apply(this,arguments)}function ot(e,t){return new Promise((function(n,r){var i=Math.max(t-Date.now(),0),a=setTimeout(n,i);e.addEventListener((function(){clearTimeout(a),r($e.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function st(e){if(!(e instanceof m.FirebaseError&&e.customData))return!1;var t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}var ut,ct,lt=function(){"use strict";function e(){t(l)(this,e),this.listeners=[]}return t(f)(e,[{key:"addEventListener",value:function(e){this.listeners.push(e)}},{key:"abort",value:function(){this.listeners.forEach((function(e){return e()}))}}]),e}();
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
 */function ft(){return(ft=t(c)(t(p).mark((function e(n,r,i,a,o){var s,u;return t(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o||!o.global){e.next=5;break}return n("event",i,a),e.abrupt("return");case 5:return e.next=7,r;case 7:s=e.sent,u=Object.assign(Object.assign({},a),{send_to:s}),n("event",i,u);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ht(e){ct=e}function dt(e){ut=e}function pt(){return vt.apply(this,arguments)}function vt(){return(vt=
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
t(c)(t(p).mark((function e(){var n;return t(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,m.isIndexedDBAvailable)()){e.next=6;break}return qe.warn($e.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),e.abrupt("return",!1);case 6:return e.prev=6,e.next=9,(0,m.validateIndexedDBOpenable)();case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(6),qe.warn($e.create("indexeddb-unavailable",{errorInfo:null===(n=e.t0)||void 0===n?void 0:n.toString()}).message),e.abrupt("return",!1);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e,null,[[6,11]])})))).apply(this,arguments)}function yt(){return(yt=t(c)(t(p).mark((function e(n,r,i,a,o,s,u){var c,l,f,h,v,y,m;return t(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l=nt(n)).then((function(e){i[e.measurementId]=e.appId,n.options.measurementId&&e.measurementId!==n.options.measurementId&&qe.warn("The measurement ID in the local Firebase config (".concat(n.options.measurementId,")")+" does not match the measurement ID fetched from the server (".concat(e.measurementId,").")+" To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")})).catch((function(e){return qe.error(e)})),r.push(l),f=pt().then((function(e){return e?a.getId():void 0})),e.t0=t(d),e.next=8,Promise.all([l,f]);case 8:return e.t1=e.sent,h=(0,e.t0)(e.t1,2),v=h[0],y=h[1],Qe()||Be(s,v.measurementId),ct&&(o("consent","default",ct),ht(void 0)),o("js",new Date),(m=null!==(c=null==u?void 0:u.config)&&void 0!==c?c:{}).origin="firebase",m.update=!0,null!=y&&(m.firebase_id=y),o("config",v.measurementId,m),ut&&(o("set",ut),dt(void 0)),e.abrupt("return",v.measurementId);case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
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
 */var mt,gt,kt=function(){"use strict";function e(n){t(l)(this,e),this.app=n}return t(f)(e,[{key:"_delete",value:function(){return delete wt[this.app.options.appId],Promise.resolve()}}]),e}(),wt={},bt=[],xt={},Tt="dataLayer",It="gtag",_t=!1;function St(e,t,n){!function(){var e=[];if((0,m.isBrowserExtension)()&&e.push("This is a browser extension environment."),(0,m.areCookiesEnabled)()||e.push("Cookies are not available."),e.length>0){var t=e.map((function(e,t){return"(".concat(t+1,") ").concat(e)})).join(" "),n=$e.create("invalid-analytics-context",{errorInfo:t});qe.warn(n.message)}}();var r,i,a=e.options.appId;if(!a)throw $e.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw $e.create("no-api-key");qe.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest'+" measurement ID for this Firebase app. Falling back to the measurement ID ".concat(e.options.measurementId)+' provided in the "measurementId" field in the local Firebase config.')}if(null!=wt[a])throw $e.create("already-exists",{id:a});if(!_t){r=Tt,i=[],Array.isArray(window[r])?i=window[r]:window[r]=i;var o=Ye(wt,bt,xt,Tt,It),s=o.wrappedGtag,u=o.gtagCore;gt=s,mt=u,_t=!0}return wt[a]=function(e,t,n,r,i,a,o){return yt.apply(this,arguments)}(e,bt,xt,t,mt,Tt,n),new kt(e)}function Et(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,v._getProvider)(e,Oe);if(n.isInitialized()){var r=n.getImmediate();if((0,m.deepEqual)(t,n.getOptions()))return r;throw $e.create("already-initialized")}var i=n.initialize({options:t});return i}function At(e,t,n,r){e=(0,m.getModularInstance)(e),function(e,t,n,r,i){return ft.apply(this,arguments)}(gt,wt[e.app.options.appId],t,n,r).catch((function(e){return qe.error(e)}))}var Dt="@firebase/analytics",Pt="0.8.0";(0,v._registerComponent)(new(0,g.Component)(Oe,(function(e,t){var n=t.options;return St(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),n)}),"PUBLIC")),(0,v._registerComponent)(new(0,g.Component)("analytics-internal",(function(e){try{var t=e.getProvider(Oe).getImmediate();return{logEvent:function(e,n,r){return At(t,e,n,r)}}}catch(e){throw $e.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),(0,v.registerVersion)(Dt,Pt),(0,v.registerVersion)(Dt,Pt,"esm2017"),a("c69b4");var Ct=a("hbbGa"),Nt=a("4Nugj"),Ft=(0,u.initializeApp)({apiKey:"AIzaSyBMQEt78CaPaq3dSOfApmBG4vPslBGp6pQ",authDomain:"filmoteka-5bf07.firebaseapp.com",projectId:"filmoteka-5bf07",storageBucket:"filmoteka-5bf07.appspot.com",messagingSenderId:"626342412224",appId:"1:626342412224:web:b02b966cc92ff4eefbd225",measurementId:"G-X5BM5EZZVP"}),Vt=(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,v.getApp)();e=(0,m.getModularInstance)(e);var t=(0,v._getProvider)(e,Oe);t.isInitialized()?t.getImmediate():Et(e)}(Ft),(0,Ct.getFirestore)(Ft)),Rt=(0,Ct.collection)(Vt,"watched"),Ot=(0,Ct.collection)(Vt,"queue");(0,Ct.getDocs)(Ot).then((function(e){var n=[];e.docs.forEach((function(e){n.push(t(s)({},e.data(),{id:e.id}))})),console.log(n)})).catch((function(e){console.log(e.message)})),(0,Ct.getDocs)(Rt).then((function(e){var n=[];e.docs.forEach((function(e){n.push(t(s)({},e.data(),{id:e.id}))})),console.log(n)})).catch((function(e){console.log(e.message)})),document.querySelector(".modal-film-wrap").addEventListener("click",(function(e){e.preventDefault(),console.log(e.target.id),(0,Ct.addDoc)(Rt,{id:e.target.id}).then((function(){Nt.refs.watchedHederBtnEl.classList.add("active"),Nt.refs.watchedHederBtnEl.textContent="Remove"}))}))}();
//# sourceMappingURL=films.9df184e0.js.map
