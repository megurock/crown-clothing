(this["webpackJsonpcrown-clothing"]=this["webpackJsonpcrown-clothing"]||[]).push([[0],{109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(30),i=n.n(c),o=n(19),l=n(9),u=n(53),s=n(13),m=n(32),p=(n(73),n(54)),d=n.n(p),f=n(10),b={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE"},E={currentUser:null,error:null},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.SIGN_IN_SUCCESS:return Object(f.a)({},e,{currentUser:t.payload,error:null});case b.SIGN_OUT_SUCCESS:return Object(f.a)({},e,{currentUser:null,error:null});case b.SIGN_IN_FAILURE:case b.SIGN_OUT_FAILURE:case b.SIGN_UP_FAILURE:return Object(f.a)({},e,{error:t.payload});default:return e}},O={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",CLEAR_CART:"CLEAR_CART"},h=n(61),g=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(f.a)({},e,{quantity:e.quantity+1}):e})):[].concat(Object(h.a)(e),[Object(f.a)({},t,{quantity:1})])},S=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(f.a)({},e,{quantity:e.quantity-1}):e}))},j={hidden:!0,cartItems:[]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.TOGGLE_CART_HIDDEN:return Object(f.a)({},e,{hidden:!e.hidden});case O.ADD_ITEM:return Object(f.a)({},e,{cartItems:g(e.cartItems,t.payload)});case O.CLEAR_ITEM_FROM_CART:return Object(f.a)({},e,{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case O.REMOVE_ITEM:return Object(f.a)({},e,{cartItems:S(e.cartItems,t.payload)});case O.CLEAR_CART:return Object(f.a)({},e,{cartItems:[]});default:return e}},_={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;return t.type,e},C={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"},w={collections:null,isFetching:!1,errorMessage:void 0},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C.FETCH_COLLECTIONS_START:return Object(f.a)({},e,{isFetching:!0});case C.FETCH_COLLECTIONS_SUCCESS:return Object(f.a)({},e,{isFetching:!1,collections:t.payload});case C.FETCH_COLLECTIONS_FAILURE:return Object(f.a)({},e,{isFetching:!1,errorMessage:t.payload});default:return e}},x={key:"root",storage:d.a,whitelist:["cart"]},T=Object(s.c)({user:v,cart:y,directory:I,shop:N}),k=Object(m.a)(x,T),U=n(62),R=n(2),A=n.n(R),L=n(5),G=function(e){return{type:C.FETCH_COLLECTIONS_SUCCESS,payload:e}},F=n(27),P=n.n(F);n(77),n(80);P.a.initializeApp({apiKey:"AIzaSyCp5paroBM4bRAa6bj3FUjyc2gRpl-fDqo",authDomain:"crown-db-ff3c7.firebaseapp.com",databaseURL:"https://crown-db-ff3c7.firebaseio.com",projectId:"crown-db-ff3c7",storageBucket:"crown-db-ff3c7.appspot.com",messagingSenderId:"593917527836",appId:"1:593917527836:web:2159c79d4321b621a81cd9",measurementId:"G-4KHDLJ021X"});var H=function(e,t){var n,a,r,c;return A.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(e){i.next=2;break}return i.abrupt("return");case 2:return n=q.doc("users/".concat(e.uid)),i.next=5,A.a.awrap(n.get());case 5:if(i.sent.exists){i.next=17;break}return a=e.displayName,r=e.email,c=new Date,i.prev=9,i.next=12,A.a.awrap(n.set(Object(f.a)({displayName:a,email:r,createdAt:c},t)));case 12:i.next=17;break;case 14:i.prev=14,i.t0=i.catch(9),console.log("error creating user",i.t0.message);case 17:return i.abrupt("return",n);case 18:case"end":return i.stop()}}),null,null,[[9,14]])},M=function(e){return e.docs.map((function(e){var t=e.data(),n=t.title,a=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:a}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})},D=P.a.auth(),q=P.a.firestore(),z=new P.a.auth.GoogleAuthProvider;z.setCustomParameters({prompt:"select_account"});P.a;var V=A.a.mark(W),K=A.a.mark(J),B=A.a.mark($);function W(){var e,t,n;return A.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e=q.collection("collections"),a.next=4,e.get();case 4:return t=a.sent,a.next=7,Object(L.b)(M,t);case 7:return n=a.sent,a.next=10,Object(L.c)(G(n));case 10:a.next=16;break;case 12:return a.prev=12,a.t0=a.catch(0),a.next=16,Object(L.c)((r=a.t0.message,{type:C.FETCH_COLLECTIONS_FAILURE,payload:r}));case 16:case"end":return a.stop()}var r}),V,null,[[0,12]])}function J(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.d)(C.FETCH_COLLECTIONS_START,W);case 2:case"end":return e.stop()}}),K)}function $(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.a)([Object(L.b)(J)]);case 2:case"end":return e.stop()}}),B)}var Q=function(e){return{type:b.SIGN_IN_FAILURE,payload:e}},Y=function(e){var t=e.user,n=e.additionalData;return{type:b.SIGN_UP_SUCCESS,payload:{user:t,additionalData:n}}},X=A.a.mark(pe),Z=A.a.mark(de),ee=A.a.mark(fe),te=A.a.mark(be),ne=A.a.mark(Ee),ae=A.a.mark(ve),re=A.a.mark(Oe),ce=A.a.mark(he),ie=A.a.mark(ge),oe=A.a.mark(Se),le=A.a.mark(je),ue=A.a.mark(ye),se=A.a.mark(_e),me=A.a.mark(Ie);function pe(e,t){var n,a;return A.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(L.b)(H,e,t);case 3:return n=r.sent,r.next=6,n.get();case 6:return a=r.sent,r.next=9,Object(L.c)((c=Object(f.a)({id:a.id},a.data()),{type:b.SIGN_IN_SUCCESS,payload:c}));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(0),r.next=15,Object(L.c)(Q(r.t0));case 15:case"end":return r.stop()}var c}),X,null,[[0,11]])}function de(){var e,t;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,D.signInWithPopup(z);case 3:return e=n.sent,t=e.user,n.next=7,pe(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(L.c)(Q(n.t0));case 13:case"end":return n.stop()}}),Z,null,[[0,9]])}function fe(e){var t,n,a,r,c;return A.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.email,a=t.password,i.prev=1,i.next=4,D.signInWithEmailAndPassword(n,a);case 4:return r=i.sent,c=r.user,i.next=8,pe(c);case 8:i.next=14;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(L.c)(Q(i.t0));case 14:case"end":return i.stop()}}),ee,null,[[1,10]])}function be(){var e;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e,t){var n=D.onAuthStateChanged((function(t){n(),e(t)}),t)}));case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,pe(e);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(L.c)(Q(t.t0));case 14:case"end":return t.stop()}}),te,null,[[0,10]])}function Ee(e){var t,n,a,r,c,i;return A.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,n=t.email,a=t.password,r=t.displayName,o.prev=1,o.next=4,D.createUserWithEmailAndPassword(n,a);case 4:return c=o.sent,i=c.user,o.next=8,Object(L.c)(Y({user:i,additionalData:{displayName:r}}));case 8:o.next=14;break;case 10:return o.prev=10,o.t0=o.catch(1),o.next=14,Object(L.c)((l=o.t0,{type:b.SIGN_UP_FAILURE,payload:l}));case 14:case"end":return o.stop()}var l}),ne,null,[[1,10]])}function ve(e){var t,n,a;return A.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,n=t.user,a=t.additionalData,r.next=3,pe(n,a);case 3:case"end":return r.stop()}}),ae)}function Oe(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.signOut();case 3:return e.next=5,Object(L.c)({type:b.SIGN_OUT_SUCCESS});case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(L.c)((t=e.t0,{type:b.SIGN_OUT_FAILURE,payload:t}));case 11:case"end":return e.stop()}var t}),re,null,[[0,7]])}function he(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.d)(b.GOOGLE_SIGN_IN_START,de);case 2:case"end":return e.stop()}}),ce)}function ge(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.d)(b.EMAIL_SIGN_IN_START,fe);case 2:case"end":return e.stop()}}),ie)}function Se(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.d)(b.CHECK_USER_SESSION,be);case 2:case"end":return e.stop()}}),oe)}function je(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.d)(b.SIGN_OUT_START,Oe);case 2:case"end":return e.stop()}}),le)}function ye(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.d)(b.SIGN_UP_START,Ee);case 2:case"end":return e.stop()}}),ue)}function _e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.d)(b.SIGN_UP_SUCCESS,ve);case 2:case"end":return e.stop()}}),se)}function Ie(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.a)([Object(L.b)(he),Object(L.b)(ge),Object(L.b)(Se),Object(L.b)(je),Object(L.b)(ye),Object(L.b)(_e)]);case 2:case"end":return e.stop()}}),me)}var Ce=function(){return{type:O.TOGGLE_CART_HIDDEN}},we=function(e){return{type:O.ADD_ITEM,payload:e}},Ne=A.a.mark(ke),xe=A.a.mark(Ue),Te=A.a.mark(Re);function ke(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.c)({type:O.CLEAR_CART});case 2:case"end":return e.stop()}}),Ne)}function Ue(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.d)(b.SIGN_OUT_SUCCESS,ke);case 2:case"end":return e.stop()}}),xe)}function Re(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.a)([Object(L.b)(Ue)]);case 2:case"end":return e.stop()}}),Te)}var Ae=A.a.mark(Le);function Le(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.a)([Object(L.b)($),Object(L.b)(Ie),Object(L.b)(Re)]);case 2:case"end":return e.stop()}}),Ae)}var Ge=Object(U.a)(),Fe=[Ge];var Pe=Object(s.e)(k,s.a.apply(void 0,Fe));Ge.run(Le);var He=Object(m.b)(Pe),Me=n(23),De=n(8),qe=(n(82),n(20)),ze=Object(De.a)([function(e){return e.directory}],(function(e){return e.sections})),Ve=(n(83),Object(Me.g)((function(e){var t=e.title,n=e.imageUrl,a=e.size,c=e.history,i=e.linkUrl,o=e.match;return r.a.createElement("div",{className:"".concat(a," menu-item"),onClick:function(){return c.push("".concat(o.url).concat(i))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),Ke=(n(85),Object(De.b)({sections:ze})),Be=Object(l.b)(Ke)((function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,n=Object(qe.a)(e,["id"]);return r.a.createElement(Ve,Object.assign({key:t},n))})))})),We=n(11),Je=n(12);function $e(){var e=Object(We.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px 80px;\n"]);return $e=function(){return e},e}var Qe=Je.b.div($e()),Ye=function(){return r.a.createElement(Qe,null,r.a.createElement(Be,null))},Xe=function(e){return e.shop},Ze=Object(De.a)([Xe],(function(e){return e.collections})),et=Object(De.a)([Ze],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})),tt=Object(De.a)([Xe],(function(e){return e.isFetching})),nt=Object(De.a)([Xe],(function(e){return!!e.collections}));function at(){var e=Object(We.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return at=function(){return e},e}function rt(){var e=Object(We.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return rt=function(){return e},e}var ct=Je.b.div(rt()),it=Je.b.div(at()),ot=function(e){return function(t){var n=t.isLoading,a=Object(qe.a)(t,["isLoading"]);return n?r.a.createElement(ct,null,r.a.createElement(it,null)):r.a.createElement(e,a)}};function lt(){var e=Object(We.a)(["\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-family: 'Open Sans Condensed';\n  font-weight: bolder;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n\n  ","\n"]);return lt=function(){return e},e}function ut(){var e=Object(We.a)(["\n  background-color: #4285f4;\n  color: white;\n\n  &:hover {\n    background-color: #357ae8;\n    border: none;\n  }\n"]);return ut=function(){return e},e}function st(){var e=Object(We.a)(["\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]);return st=function(){return e},e}function mt(){var e=Object(We.a)(["\n  background-color: black;\n  color: white;\n  border: none;\n\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n"]);return mt=function(){return e},e}var pt=Object(Je.a)(mt()),dt=Object(Je.a)(st()),ft=Object(Je.a)(ut()),bt=Je.b.button(lt(),(function(e){return e.isGoogleSignIn?ft:e.inverted?dt:pt})),Et=function(e){var t=e.children,n=Object(qe.a)(e,["children"]);return r.a.createElement(bt,n,t)};function vt(){var e=Object(We.a)(["\n  width: 10%;\n  text-align: right;\n"]);return vt=function(){return e},e}function Ot(){var e=Object(We.a)(["\n  width: 90%;\n  margin-bottom: 15px;\n"]);return Ot=function(){return e},e}function ht(){var e=Object(We.a)(["\n  width: 100%;\n  height: 5%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 18px;\n"]);return ht=function(){return e},e}function gt(){var e=Object(We.a)(["\n  width: 100%;\n  height: 95%;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 5px;\n  background-image: ",";\n"]);return gt=function(){return e},e}function St(){var e=Object(We.a)(["\n  width: 80%;\n  opacity: 0.7;\n  position: absolute;\n  top: 255px;\n  display: none;\n"]);return St=function(){return e},e}function jt(){var e=Object(We.a)(["\n  width: 22vw;\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  align-items: center;\n  position: relative;\n  &:hover {\n    .image {\n      opacity: 0.8;\n    }\n    button {\n      opacity: 0.85;\n      display: flex;\n    }\n  }\n"]);return jt=function(){return e},e}var yt=Je.b.div(jt()),_t=Object(Je.b)(Et)(St()),It=Je.b.div(gt(),(function(e){var t=e.imageUrl;return"url(".concat(t,")")})),Ct=Je.b.div(ht()),wt=Je.b.span(Ot()),Nt=Je.b.span(vt()),xt=Object(l.b)(null,(function(e){return{addItem:function(t){return e(we(t))}}}))((function(e){var t=e.item,n=e.addItem,a=t.name,c=t.price,i=t.imageUrl;return r.a.createElement(yt,null,r.a.createElement(It,{className:"image",imageUrl:i}),r.a.createElement(Ct,null,r.a.createElement(wt,null,a),r.a.createElement(Nt,null,c)),r.a.createElement(_t,{onClick:function(){return n(t)},inverted:!0},"Add to cart"))})),Tt=(n(86),Object(Me.g)((function(e){var t=e.title,n=e.items,a=e.history,c=e.match,i=e.routeName;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title",onClick:function(){return a.push("".concat(c.path,"/").concat(i))}},t.toUpperCase()),r.a.createElement("div",{className:"preview"},n.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(xt,{key:e.id,item:e})}))))}))),kt=(n(87),Object(De.b)({collections:et})),Ut=Object(l.b)(kt)((function(e){var t=e.collections;return r.a.createElement("div",{className:"collections-overview"},t.map((function(e){var t=e.id,n=Object(qe.a)(e,["id"]);return r.a.createElement(Tt,Object.assign({key:t},n))})))})),Rt=Object(De.b)({isLoading:tt}),At=Object(s.d)(Object(l.b)(Rt),ot)(Ut),Lt=(n(88),Object(l.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(De.a)([Ze],(function(e){return e?e[n]:null})))(e)};var n}))((function(e){var t=e.collection,n=t.title,a=t.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},n),r.a.createElement("div",{className:"items"},a.map((function(e){return r.a.createElement(xt,{key:e.id,item:e})}))))}))),Gt=Object(De.b)({isLoading:function(e){return!nt(e)}}),Ft=Object(s.d)(Object(l.b)(Gt),ot)(Lt),Pt=Object(l.b)(null,(function(e){return{fetchCollectionsStart:function(){return e({type:C.FETCH_COLLECTIONS_START})}}}))((function(e){var t=e.fetchCollectionsStart,n=e.match;return Object(a.useEffect)((function(){t()}),[t]),r.a.createElement("div",{className:"shop-page"},r.a.createElement(Me.b,{exact:!0,path:"".concat(n.path),component:At}),r.a.createElement(Me.b,{path:"".concat(n.path,"/:collectionId"),component:Ft}))})),Ht=n(26),Mt=n(33),Dt=(n(89),function(e){var t=e.handleChange,n=e.label,a=Object(qe.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},a)),n?r.a.createElement("label",{className:"".concat(a.value.length?"shrink":""," form-input-label")},n):null)});function qt(){var e=Object(We.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return qt=function(){return e},e}function zt(){var e=Object(We.a)(["\n  margin: 10px 0;\n"]);return zt=function(){return e},e}function Vt(){var e=Object(We.a)(["\n  width: 380px;\n  display: flex;\n  flex-direction: column;\n"]);return Vt=function(){return e},e}var Kt=Je.b.div(Vt()),Bt=Je.b.h2(zt()),Wt=Je.b.div(qt()),Jt=Object(l.b)(null,(function(e){return{googleSignInStart:function(){return e({type:b.GOOGLE_SIGN_IN_START})},emailSignInStart:function(t,n){return e({type:b.EMAIL_SIGN_IN_START,payload:{email:t,password:n}})}}}))((function(e){var t=e.emailSignInStart,n=e.googleSignInStart,c=Object(a.useState)({email:"",password:""}),i=Object(Mt.a)(c,2),o=i[0],l=i[1],u=o.email,s=o.password,m=function(e){var t=e.target,n=t.value,a=t.name;l(Object(f.a)({},o,Object(Ht.a)({},a,n)))};return r.a.createElement(Kt,null,r.a.createElement(Bt,null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:function(e){return A.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:e.preventDefault(),t(u,s);case 2:case"end":return n.stop()}}))}},r.a.createElement(Dt,{name:"email",type:"email",handleChange:m,value:u,label:"email",required:!0}),r.a.createElement(Dt,{name:"password",type:"password",value:s,handleChange:m,label:"password",required:!0}),r.a.createElement(Wt,null,r.a.createElement(Et,{type:"submit"},"Sign in"),r.a.createElement(Et,{type:"button",onClick:n,isGoogleSignIn:!0},"Sign in with Google"))))})),$t=(n(90),Object(l.b)(null,(function(e){return{signUpStart:function(t){return e(function(e){return{type:b.SIGN_UP_START,payload:e}}(t))}}}))((function(e){var t=e.signUpStart,n=Object(a.useState)({displayName:"",email:"",password:"",confirmPassword:""}),c=Object(Mt.a)(n,2),i=c[0],o=c[1],l=i.displayName,u=i.email,s=i.password,m=i.confirmPassword,p=function(e){var t=e.target,n=t.name,a=t.value;o(Object(f.a)({},i,Object(Ht.a)({},n,a)))};return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have an account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:function(e){return A.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),s===m){n.next=4;break}return alert("password don't match"),n.abrupt("return");case 4:t({displayName:l,email:u,password:s});case 5:case"end":return n.stop()}}))}},r.a.createElement(Dt,{type:"text",name:"displayName",value:l,onChange:p,label:"Display Name",required:!0}),r.a.createElement(Dt,{type:"email",name:"email",value:u,onChange:p,label:"Email",required:!0}),r.a.createElement(Dt,{type:"password",name:"password",value:s,onChange:p,label:"Password",required:!0}),r.a.createElement(Dt,{type:"password",name:"confirmPassword",value:m,onChange:p,label:"Confirm Password",required:!0}),r.a.createElement(Et,{type:"submit"},"Sign up")))}))),Qt=(n(91),function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(Jt,null),r.a.createElement($t,null))}),Yt=function(e){return e.cart},Xt=Object(De.a)([Yt],(function(e){return e.cartItems})),Zt=Object(De.a)([Yt],(function(e){return e.hidden})),en=Object(De.a)([Xt],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),tn=Object(De.a)([Xt],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),nn=(n(92),Object(l.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:O.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(we(t))},removeItem:function(t){return e(function(e){return{type:O.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,a=e.addItem,c=e.removeItem,i=t.name,o=t.imageUrl,l=t.quantity,u=t.price;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{alt:"item",src:o})),r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"quantity"},r.a.createElement("span",{className:"arrow",onClick:function(){c(t)}},"\u276e"),r.a.createElement("span",{className:"value"},l),r.a.createElement("span",{className:"arrow",onClick:function(){return a(t)}},"\u276f")),r.a.createElement("span",{className:"price"},u),r.a.createElement("div",{className:"remove-button",onClick:function(){n(t)}},"\u2715"))}))),an=n(59),rn=n.n(an),cn=n(60),on=n.n(cn),ln=function(e){var t=e.price,n=100*t;return r.a.createElement(rn.a,{label:"Pay Now",name:"Crown Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"http://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){console.log(e),on()({url:"payment",method:"post",data:{amount:n,token:e}}).then((function(e){alert("Payment successful")})).catch((function(e){console.log("Payment error: "+JSON.parse(e))}))},stripeKey:"pk_test_chmIn9IN2Ch2o8bZ8cVP6cgC00mDI8Ks7u"})},un=(n(109),Object(De.b)({cartItems:Xt,total:tn})),sn=Object(l.b)(un)((function(e){var t=e.cartItems,n=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map((function(e){return r.a.createElement(nn,{key:e.id,cartItem:e})})),r.a.createElement("div",{className:"total"},"TOTAL: $",n),r.a.createElement("div",{className:"test-warning"},"*Please use the following test credit card for payments*",r.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/20 - CVV: 123"),r.a.createElement(ln,{price:n}))})),mn=Object(De.a)([function(e){return e.user}],(function(e){return e.currentUser}));function pn(){return(pn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function dn(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var fn=r.a.createElement("g",null),bn=r.a.createElement("g",null),En=r.a.createElement("g",null),vn=r.a.createElement("g",null),On=r.a.createElement("g",null),hn=r.a.createElement("g",null),gn=r.a.createElement("g",null),Sn=r.a.createElement("g",null),jn=r.a.createElement("g",null),yn=r.a.createElement("g",null),_n=r.a.createElement("g",null),In=r.a.createElement("g",null),Cn=r.a.createElement("g",null),wn=r.a.createElement("g",null),Nn=r.a.createElement("g",null),xn=function(e){var t=e.svgRef,n=e.title,a=dn(e,["svgRef","title"]);return r.a.createElement("svg",pn({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},a),n?r.a.createElement("title",null,n):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),fn,bn,En,vn,On,hn,gn,Sn,jn,yn,_n,In,Cn,wn,Nn)},Tn=r.a.forwardRef((function(e,t){return r.a.createElement(xn,pn({svgRef:t},e))})),kn=(n.p,n(110),Object(De.b)({itemCount:en})),Un=Object(l.b)(kn,(function(e){return{toggleCartHidden:function(){return e(Ce())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(Tn,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},n))})),Rn=(n(111),function(e){var t=e.item,n=t.imageUrl,a=t.price,c=t.name,i=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:n,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},i," x $",a)))}),An=(n(112),Object(De.b)({cartItems:Xt})),Ln=Object(Me.g)(Object(l.b)(An)((function(e){var t=e.cartItems,n=e.history,a=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(Rn,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"Your cart is empty.")),r.a.createElement(Et,{onClick:function(){n.push("/checkout"),a(Ce())}},"GO TO CHECKOUT"))})));function Gn(){return(Gn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Fn(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Pn=r.a.createElement("title",null,"Group"),Hn=r.a.createElement("desc",null,"Created with Sketch."),Mn=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),Dn=function(e){var t=e.svgRef,n=e.title,a=Fn(e,["svgRef","title"]);return r.a.createElement("svg",Gn({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},a),void 0===n?Pn:n?r.a.createElement("title",null,n):null,Hn,Mn)},qn=r.a.forwardRef((function(e,t){return r.a.createElement(Dn,Gn({svgRef:t},e))}));n.p;function zn(){var e=Object(We.a)(["\n  padding: 10px 15px;\n  cursor: pointer;\n"]);return zn=function(){return e},e}function Vn(){var e=Object(We.a)(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  cursor: pointer;\n"]);return Vn=function(){return e},e}function Kn(){var e=Object(We.a)(["\n  height: 100%;\n  width: 70px;\n  padding: 25px;\n"]);return Kn=function(){return e},e}function Bn(){var e=Object(We.a)(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n"]);return Bn=function(){return e},e}var Wn=Je.b.div(Bn()),Jn=Object(Je.b)(o.b)(Kn()),$n=Je.b.div(Vn()),Qn=Object(Je.b)(o.b)(zn()),Yn=Object(De.b)({currentUser:mn,hidden:Zt}),Xn=Object(l.b)(Yn,(function(e){return{signOutStart:function(){return e({type:b.SIGN_OUT_START})}}}))((function(e){var t=e.currentUser,n=e.hidden,a=e.signOutStart;return r.a.createElement(Wn,null,r.a.createElement(Jn,{to:"/"},r.a.createElement(qn,{className:"logo"})),r.a.createElement($n,null,r.a.createElement(Qn,{to:"/shop"},"Shop"),r.a.createElement(Qn,{to:"/contact"},"Contact"),t?r.a.createElement(Qn,{as:"div",onClick:a},"Sign Out"):r.a.createElement(Qn,{to:"/signin"},"Sin In"),r.a.createElement(Un,null)),n?null:r.a.createElement(Ln,null))})),Zn=Object(De.b)({currentUser:mn}),ea=Object(l.b)(Zn,(function(e){return{checkUserSession:function(){return e({type:b.CHECK_USER_SESSION})}}}))((function(e){var t=e.checkUserSession,n=e.currentUser;return Object(a.useEffect)((function(){t()}),[t]),r.a.createElement("div",null,r.a.createElement(Xn,null),r.a.createElement(Me.d,null,r.a.createElement(Me.b,{exact:!0,path:"/",component:Ye}),r.a.createElement(Me.b,{path:"/shop",component:Pt}),r.a.createElement(Me.b,{exact:!0,path:"/checkout",component:sn}),r.a.createElement(Me.b,{exact:!0,path:"/signin",render:function(){return n?r.a.createElement(Me.a,{to:"/"}):r.a.createElement(Qt,null)}})))}));n(113);i.a.render(r.a.createElement(l.a,{store:Pe},r.a.createElement(o.a,null,r.a.createElement(u.a,{persistor:He},r.a.createElement(ea,null)))),document.getElementById("root"))},64:function(e,t,n){e.exports=n(114)},82:function(e,t,n){},83:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){}},[[64,1,2]]]);
//# sourceMappingURL=main.f1fe505b.chunk.js.map