(function(t){function e(e){for(var a,s,r=e[0],c=e[1],u=e[2],l=0,g=[];l<r.length;l++)s=r[l],n[s]&&g.push(n[s][0]),n[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(g.length)g.shift()();return o.push.apply(o,u||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],a=!0,s=1;s<i.length;s++){var c=i[s];0!==n[c]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=i[0]))}return t}var a={},n={app:0},o=[];function s(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"03be59e7"}[t]+".js"}function r(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.e=function(t){var e=[],i=n[t];if(0!==i)if(i)e.push(i[2]);else{var a=new Promise(function(e,a){i=n[t]=[e,a]});e.push(i[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=s(t),o=function(e){c.onerror=c.onload=null,clearTimeout(u);var i=n[t];if(0!==i){if(i){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+a+": "+o+")");s.type=a,s.request=o,i[1](s)}n[t]=void 0}};var u=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},r.m=t,r.c=a,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"026d":function(t,e,i){t.exports=i.p+"img/set.b0927d26.png"},1:function(t,e){},"118c":function(t,e,i){},1771:function(t,e,i){var a={"./background.png":"30b3","./cel.png":"4ea8","./close.png":"cd5c","./game_material.png":"199b","./logo.png":"cf05","./pencil.png":"5a11","./play.png":"df84","./set.png":"026d","./stop.png":"e7e7"};function n(t){var e=o(t);return i(e)}function o(t){var e=a[t];if(!(e+1)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return e}n.keys=function(){return Object.keys(a)},n.resolve=o,t.exports=n,n.id="1771"},"199b":function(t,e,i){t.exports=i.p+"img/game_material.09b5ed85.png"},2:function(t,e){},3:function(t,e){},"30b3":function(t,e,i){t.exports=i.p+"img/background.74226a3c.png"},"34b5":function(t,e,i){"use strict";var a=i("f0c9"),n=i.n(a);n.a},"3a27":function(t,e,i){},"3dfd":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-container",{attrs:{fluid:""}},[i("headerview"),i("b-row",[t.modal?i("authview"):t._e(),t.congoModal?i("scoreviewmodal",{attrs:{score:t.run,isLogin:t.isLogin}}):t._e(),i("b-col",{attrs:{md:"3"}},[i("scoreboard")],1),i("b-col",{attrs:{md:"6"}},[i("gameview")],1),i("b-col",{attrs:{md:"3"}},[i("leaderboard")],1)],1)],1)],1)},n=[],o=i("f499"),s=i.n(o),r=(i("c5f6"),i("56d7")),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"top-view"},[t.login?i("b-button",{staticClass:"login-btn",attrs:{variant:"outline-primary"},on:{click:t.openModal}},[t._v("Login")]):t._e(),t.login?t._e():i("b-button",{staticClass:"logout-btn",on:{click:t.logOut}},[t._v("Logout")])],1)},u=[],l=(i("d485"),{name:"headerview",data:function(){return{login:!0,signData:{id:Number,email:String,image:String,familyName:String,fulName:String}}},methods:{openModal:function(){r["eventBus"].openLoginModal("login")},getUserData:function(){this.signData=localStorage.getItem("cricket_auth"),null==this.signData?this.login=!0:this.login=!1},logOut:function(){localStorage.removeItem("cricket_auth"),r["eventBus"].refreshGame(),this.login=!0}},beforeMount:function(){this.getUserData()},created:function(){var t=this;r["eventBus"].$on("logout",function(){t.login=!1})}}),d=l,g=(i("6513"),i("2877")),h=Object(g["a"])(d,c,u,!1,null,"07e141ca",null),f=h.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"game-container"},[a("b-row",[a("b-col",{attrs:{id:"game"}},[a("b-img",{style:t.style,attrs:{src:i("199b"),center:"",fluid:"",height:"450%",width:"450%",id:"img"}}),a("b-img",{staticClass:"indicator",attrs:{src:i("5a11"),center:"",fluid:"",height:"60%",width:"60%"}}),a("hr",{staticStyle:{"background-color":"black",height:"2px"}}),a("div",{staticClass:"button-positions"},[a("b-img",{attrs:{src:t.getImage(t.buttonIcon),height:"60px"},on:{click:t.playOrStop}})],1)],1)],1)],1)},b=[],m={name:"gameview",data:function(){return{degree:0,blur:0,isStop:!1,run:0,status:"Status",isPlay:!1,buttonIcon:"play.png"}},computed:{style:function(){return{transform:"rotate("+this.degree+"deg)",filter:"blur("+this.blur+"px)",top:0}}},methods:{getImage:function(t){return i("1771")("./"+t)},roatedAnimation:function(){this.isStop?this.isStop=!1:(this.blur=15,this.style,setTimeout(this.roatedAnimation,0),this.degree>360?this.degree=0:this.degree++)},stopAnimation:function(){this.blur=0,this.isStop=!0,this.resetStatus()},playOrStop:function(){this.isPlay?(this.stopAnimation(),this.isPlay=!1,this.buttonIcon="play.png"):(this.roatedAnimation(),this.isPlay=!0,this.buttonIcon="stop.png")},resetStatus:function(){this.degree>=0&&this.degree<=21?(this.status="LBW",this.run=-1):this.degree>21&&this.degree<=45?(this.status="4 Run",this.run=4):this.degree>45&&this.degree<=90?(this.status="Bold Out",this.run=-1):this.degree>90&&this.degree<=112?(this.status="Dot Ball",this.run=0):this.degree>112&&this.degree<=135?(this.status="Run Out",this.run=-1):this.degree>135&&this.degree<=180?(this.status=" 1 Run",this.run=1):this.degree>180&&this.degree<=202?(this.status="Hit Wicket",this.run=-1):this.degree>202&&this.degree<=225?(this.status="Dot Ball",this.run=0):this.degree>225&&this.degree<=247?(this.status="Wide",this.run=1):this.degree>247&&this.degree<=270?(this.status="3 Run",this.run=3):this.degree>270&&this.degree<=292?(this.status="Catch Out",this.run=-1):this.degree>292&&this.degree<=315?(this.status="6 Run",this.run=6):this.degree>315&&this.degree<=338?(this.status="No Ball",this.run=1):this.degree>338&&this.degree<=360&&(this.status="2 Run",this.run=2),r["eventBus"].scoreStatus(this.run)}},created:function(){var t=this;r["eventBus"].$on("refresh",function(){t.degree=0})}},v=m,S=(i("6773"),Object(g["a"])(v,p,b,!1,null,"52f0aff0",null)),k=S.exports,_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-row",{staticStyle:{"margin-top":"30px"}},[i("b-col",[i("b-card",{attrs:{"bg-variant":"dark",header:"Leaderboard","text-variant":"white","header-class":"text-center"}},[i("b-card-text",{staticClass:"sub-title"},[t._v("Top 5 highest score")]),t._l(t.leaderData,function(e,a){return i("div",{staticClass:"details"},[i("b-row",[i("b-col",{attrs:{cols:"2"}},[t._v(t._s(a+1))]),i("b-col",{attrs:{cols:"6"}},[t._v(t._s(e.userName))]),i("b-col",{attrs:{cols:"4"}},[i("span",{staticStyle:{float:"right",color:"yellow"}},[t._v(t._s(e.score))])])],1)],1)}),t.isLogin?t._e():i("div",{attrs:{slot:"footer"},slot:"footer"},[i("b-card-text",{staticClass:"sub-title"},[t._v("Your score")]),i("div",{staticClass:"details"},[i("b-row",[i("b-col",{attrs:{cols:"2"}},[t._v(t._s(t.position))]),i("b-col",{attrs:{cols:"6"}},[t._v(t._s(t.userName))]),i("b-col",{attrs:{cols:"4"}},[i("span",{staticStyle:{float:"right",color:"yellow"}},[t._v(t._s(t.score))])])],1)],1)],1)],2)],1)],1)},y=[],w=(i("3e8f"),{name:"leaderboard",data:function(){return{isLogin:!0,leaderData:[],position:0,userName:"",score:0,scoreBoard:{id:Number,score:Number,userID:Number,userName:String},signData:{id:Number,fulName:String,email:String,loginType:String}}},methods:{getData:function(){var t=this;this.signData=JSON.parse(localStorage.getItem("cricket_auth")),null!=this.signData&&this.$http.get("https://pavilion.com.bd:9090/score/find/"+this.signData["id"]).then(function(e){e.ok&&(t.scoreBoard=e.data,t.position=t.scoreBoard["id"],t.userName=t.scoreBoard["userName"],t.score=t.scoreBoard["score"])})},getLeaderboardData:function(){var t=this;this.$http.get("https://pavilion.com.bd:9090/score/all").then(function(e){if(e.ok){var i=[];for(var a in e.data)t.scoreBoard=e.data[a],i.push(t.scoreBoard),console.log(t.scoreBoard);t.leaderData=i}})}},beforeMount:function(){this.getLeaderboardData(),this.getData()},created:function(){var t=this;r["eventBus"].$on("updateLeaderboard",function(e){e?(t.getLeaderboardData(),t.getData(),t.isLogin=!1):(t.getLeaderboardData(),t.isLogin=!0)})}}),D=w,B=(i("95bd"),Object(g["a"])(D,_,y,!1,null,"6fd26b19",null)),x=B.exports,L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-row",{staticStyle:{"margin-top":"30px"}},[i("b-col",[i("b-card",{staticClass:"card-header",attrs:{"bg-variant":"dark","body-bg-variant":"black",header:"Scoreboard",fluidGrow:"","text-variant":"white","header-text-variant":"white","header-class":"text-center"}},[i("div",[i("b-row",[i("b-col",[i("b-card-text",[t._v("Run: ")])],1),i("b-col",[i("b-card-text",{staticStyle:{float:"right"}},[t._v(t._s(t.score))])],1)],1),i("hr",{staticStyle:{"background-color":"yellow",height:"2px"}}),i("b-row",[i("b-col",{attrs:{cols:"4"}},[i("p",{staticStyle:{float:"left"}},[t._v("Wicket:")])]),i("b-col",{staticStyle:{float:"right"}},[i("div",{class:{notOut:!t.isWicketFirst,out:t.isWicketFirst},staticStyle:{float:"right"}}),i("div",{class:{notOut:!t.isWicketSecond,out:t.isWicketSecond},staticStyle:{float:"right"}}),i("div",{class:{notOut:!t.isWicketThird,out:t.isWicketThird},staticStyle:{float:"right"}}),i("div",{class:{notOut:!t.isWicketFourth,out:t.isWicketFourth},staticStyle:{float:"right"}}),i("div",{class:{notOut:!t.isWicketFifth,out:t.isWicketFifth},staticStyle:{float:"right"}})])],1)],1)])],1)],1)},C=[],N={name:"scoreboard",props:{status:Number},data:function(){return{score:0,wicket:0,isWicketFirst:!1,isWicketSecond:!1,isWicketThird:!1,isWicketFourth:!1,isWicketFifth:!1}},methods:{run:function(){this.score+=this.status}},created:function(){var t=this;r["eventBus"].$on("changeStatus",function(e){if(-1!=e)t.score+=e;else switch(t.wicket+=1,t.wicket){case 1:t.isWicketFirst=!0;break;case 2:t.isWicketSecond=!0;break;case 3:t.isWicketThird=!0;break;case 4:t.isWicketFourth=!0;break;case 5:t.isWicketFifth=!0,r["eventBus"].feedbackStatus(t.score);break}}),r["eventBus"].$on("refresh",function(){t.score=0,t.wicket=0,t.isWicketFirst=!1,t.isWicketSecond=!1,t.isWicketThird=!1,t.isWicketFourth=!1,t.isWicketFifth=!1})}},O=N,$=(i("b2f1"),Object(g["a"])(O,L,C,!1,null,"402f97f4",null)),W=$.exports,I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("transition",{attrs:{name:"modal"}},[i("div",{staticClass:"modal-mask"},[i("div",{staticClass:"modal-wrapper"},[i("div",{staticClass:"modal-container"},[i("div",{staticClass:"modal-header"},[i("h5",[t._v("Sign In")])]),i("div",{staticClass:"modal-body"},[i("GoogleLogin",{staticClass:"g-signin-button",attrs:{params:t.params,onSuccess:t.onSuccess,onFailure:t.onFailure}},[t._v("Sign In with Google\n            ")]),i("br"),i("br"),i("v-facebook-login",{attrs:{"app-id":"1087532861266711"}})],1),i("div",{staticClass:"modal-footer"},[i("b-button",{on:{click:t.closeModal}},[t._v("Close")])],1)])])])])],1)},M=[],j=i("e571"),F=i.n(j),T=i("6d76"),P=i.n(T),E=(i("df7c"),{components:{GoogleLogin:F.a,VFacebookLogin:P.a},name:"auth",data:function(){return{score:0,email:"",password:"",params:{client_id:"1025638494646-drbrc0n5uoo9q2nu868ibkgb4mjdd7nv.apps.googleusercontent.com",redirect_uri:"https://pavilion.com.bd:9090"},signData:{id:Number,fulName:String,email:String,loginType:String}}},methods:{onSuccess:function(t){this.signData["email"]=t.getBasicProfile().getEmail(),this.signData["fulName"]=t.getBasicProfile().getName(),this.signData["loginType"]="google",this.submit()},onFailure:function(t){console.log(t)},closeModal:function(){r["eventBus"].closeLoginModal()},submit:function(){var t=this;this.$http.post("https://pavilion.com.bd:9090/user/login",s()(this.signData)).then(function(e){e.ok&&(console.log(e),t.signData=e.data,localStorage.removeItem("cricket_auth"),localStorage.setItem("cricket_auth",s()(t.signData)),console.log(JSON.parse(localStorage.getItem("cricket_auth"))),r["eventBus"].enableLogout(),r["eventBus"].loginUpdateApp(!0))})}}}),G=E,A=(i("34b5"),Object(g["a"])(G,I,M,!1,null,"1998f607",null)),U=A.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("b-row",{staticClass:"modal-container"},[a("b-col",{staticClass:"nopadding",attrs:{cols:"9"}},[a("b-card",{staticClass:"text-container nopadding",attrs:{"bg-variant":"dark","header-class":"text-center","text-variant":"white"}},[a("div",{attrs:{slot:"header"},slot:"header"},[t._v(" Congratulation ")]),a("b-card-text",{staticClass:"nopadding"},[t._v("Your new score is: "+t._s(t.score))]),a("br"),a("hr"),t.isLogin?t._e():a("b-button",{on:{click:t.refreshGame}},[t._v("Again")]),t.isLogin?a("div",{attrs:{slot:"footer"},slot:"footer"},[t.isSignInClick?t._e():a("small",{staticClass:"text-muted"},[t._v("\n                  Want to\n                  "),a("b",[t._v("Join")]),t._v(" Leaderboard?\n                  "),a("b-link",{staticClass:"card-link",on:{click:t.displaySignin}},[t._v("Sign in")])],1),a("br"),t.isSignInClick?a("GoogleLogin",{staticClass:"g-signin-button",attrs:{params:t.params,onSuccess:t.onSuccess,onFailure:t.onFailure}},[t._v("Sign In with Google")]):t._e()],1):t._e()],1)],1),a("b-col",{staticClass:"nopadding",attrs:{cols:"3"}},[a("b-img",{staticClass:"close-icon",attrs:{src:i("cd5c"),height:"20%"},on:{click:t.closeCongoModal}}),a("b-img",{attrs:{src:i("4ea8"),height:"200",width:"100%",center:"",fluid:""}})],1)],1)],1)])])],1)},R=[],q={name:"scoreviewmodal",props:{score:Number,isLogin:Boolean},data:function(){return{name:"Sakib",params:{client_id:"1025638494646-drbrc0n5uoo9q2nu868ibkgb4mjdd7nv.apps.googleusercontent.com",redirect_uri:"https://pavilion.com.bd:9090"},signData:{id:Number,fulName:String,email:String,loginType:String},isSignInClick:!1}},methods:{refreshGame:function(){r["eventBus"].refreshGame()},displaySignin:function(){this.isSignInClick=!0},closeCongoModal:function(){this.refreshGame()},onSuccess:function(t){this.signData["email"]=t.getBasicProfile().getEmail(),this.signData["fulName"]=t.getBasicProfile().getName(),this.signData["loginType"]="google",this.submit()},onFailure:function(t){console.log(t)},submit:function(){var t=this;this.$http.post("https://pavilion.com.bd:9090/user/login",s()(this.signData)).then(function(e){e.ok&&(console.log(e),t.signData=e.data,localStorage.removeItem("cricket_auth"),localStorage.setItem("cricket_auth",s()(t.signData)),console.log(JSON.parse(localStorage.getItem("cricket_auth"))),r["eventBus"].enableLogout(),r["eventBus"].loginUpdateApp(!0),r["eventBus"].updateDatabase())})}},components:{auth:U,GoogleLogin:F.a}},V=q,Y=(i("f02e"),Object(g["a"])(V,J,R,!1,null,"1da72791",null)),H=Y.exports,Q={name:"app",data:function(){return{modal:!1,btnLogin:!0,congoModal:!1,run:0,isLogin:!0,scoreBoard:{id:Number,score:Number,userID:Number,userName:String},signData:{id:Number,fulName:String,email:String,loginType:String},userId:Number}},methods:{getUserData:function(){this.signData=JSON.parse(localStorage.getItem("cricket_auth")),null==this.signData?(this.isLogin=!0,r["eventBus"].updateLeaderboard(!1)):(this.isLogin=!1,r["eventBus"].updateLeaderboard(!0))},updateScoreToDatabase:function(){this.signData=JSON.parse(localStorage.getItem("cricket_auth")),this.scoreBoard["score"]=this.run,this.scoreBoard["userID"]=this.signData["id"],this.scoreBoard["userName"]=this.signData["fulName"],this.$http.post("https://pavilion.com.bd:9090/score/add",s()(this.scoreBoard)).then(function(t){console.log(t)})}},beforeMount:function(){this.getUserData()},created:function(){var t=this;r["eventBus"].$on("feedback",function(e){t.congoModal=!0,t.run=e,t.isLogin||t.updateScoreToDatabase()}),r["eventBus"].$on("openModal",function(e){t.modal=!0}),r["eventBus"].$on("closeModal",function(){t.modal=!1}),r["eventBus"].$on("refresh",function(){t.getUserData(),t.modal=!1,t.btnLogin=!0,t.congoModal=!1,t.run=0}),r["eventBus"].$on("loginStatus",function(e){e&&(t.getUserData(),t.isLogin=!1,t.modal=!1)}),r["eventBus"].$on("updateDatabase",function(){t.updateScoreToDatabase()})},components:{headerview:f,gameview:k,leaderboard:x,scoreboard:W,authview:U,scoreviewmodal:H}},z=Q,K=Object(g["a"])(z,a,n,!1,null,"cca3e8b0",null);e["a"]=K.exports},"41cb":function(t,e,i){"use strict";var a=i("2b0e"),n=i("8c4f"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:i("cf05")}}),a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},s=[],r={name:"home",components:{}},c=r,u=i("2877"),l=Object(u["a"])(c,o,s,!1,null,null,null),d=l.exports;a["default"].use(n["a"]);e["a"]=new n["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:d},{path:"/about",name:"about",component:function(){return i.e("about").then(i.bind(null,"f820"))}}]})},"4ea8":function(t,e,i){t.exports=i.p+"img/cel.6013b872.png"},"56d7":function(t,e,i){"use strict";i.r(e),function(t){i.d(e,"eventBus",function(){return f});i("cadf"),i("551c"),i("f751"),i("097d");var a=i("2b0e"),n=i("28dd"),o=i("67b0"),s=i("41cb"),r=i("1157"),c=i.n(r),u=i("9f7b"),l=i.n(u),d=(i("f9e3"),i("2dd8"),i("4c76")),g=i.n(d),h=i("3dfd");i("a3ad");t.jQuery=c.a,a["default"].component("b-img",g.a),a["default"].use(l.a),a["default"].use(n["a"]),a["default"].use(o["a"]),a["default"].config.productionTip=!1;var f=new a["default"]({methods:{scoreStatus:function(t){this.$emit("changeStatus",t)},feedbackStatus:function(t){this.$emit("feedback",t)},openLoginModal:function(t){this.$emit("openModal",t)},closeLoginModal:function(){this.$emit("closeModal")},enableLogout:function(){this.$emit("logout")},refreshGame:function(){this.$emit("refresh")},loginUpdateApp:function(t){this.$emit("loginStatus",t)},updateDatabase:function(){this.$emit("updateDatabase")},updateLeaderboard:function(t){this.$emit("updateLeaderboard",t)}}});new a["default"]({router:s["a"],render:function(t){return t(h["a"])}}).$mount("#app")}.call(this,i("c8ba"))},"5a11":function(t,e,i){t.exports=i.p+"img/pencil.a1273dad.png"},6513:function(t,e,i){"use strict";var a=i("b7af"),n=i.n(a);n.a},6773:function(t,e,i){"use strict";var a=i("b4a0"),n=i.n(a);n.a},"8cfc":function(t,e,i){},"95bd":function(t,e,i){"use strict";var a=i("118c"),n=i.n(a);n.a},b2f1:function(t,e,i){"use strict";var a=i("3a27"),n=i.n(a);n.a},b4a0:function(t,e,i){},b7af:function(t,e,i){},cd5c:function(t,e,i){t.exports=i.p+"img/close.2d7f8e8c.png"},cf05:function(t,e,i){t.exports=i.p+"img/logo.82b9c7a5.png"},df84:function(t,e,i){t.exports=i.p+"img/play.7d9f6e70.png"},e7e7:function(t,e,i){t.exports=i.p+"img/stop.095cb57c.png"},f02e:function(t,e,i){"use strict";var a=i("8cfc"),n=i.n(a);n.a},f0c9:function(t,e,i){}});
//# sourceMappingURL=app.e4f2232b.js.map