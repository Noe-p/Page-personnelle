(function(A){function e(e){for(var n,r,i=e[0],a=e[1],s=e[2],p=0,u=[];p<i.length;p++)r=i[p],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&u.push(c[r][0]),c[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(A[n]=a[n]);l&&l(e);while(u.length)u.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var A,e=0;e<o.length;e++){for(var t=o[e],n=!0,i=1;i<t.length;i++){var a=t[i];0!==c[a]&&(n=!1)}n&&(o.splice(e--,1),A=r(r.s=t[0]))}return A}var n={},c={app:0},o=[];function r(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return A[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=A,r.c=n,r.d=function(A,e,t){r.o(A,e)||Object.defineProperty(A,e,{enumerable:!0,get:t})},r.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},r.t=function(A,e){if(1&e&&(A=r(A)),8&e)return A;if(4&e&&"object"===typeof A&&A&&A.__esModule)return A;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:A}),2&e&&"string"!=typeof A)for(var n in A)r.d(t,n,function(e){return A[e]}.bind(null,n));return t},r.n=function(A){var e=A&&A.__esModule?function(){return A["default"]}:function(){return A};return r.d(e,"a",e),e},r.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var l=a;o.push([0,"chunk-vendors"]),t()})({0:function(A,e,t){A.exports=t("56d7")},"036b":function(A,e,t){A.exports=t.p+"img/flecheTop.6bc2dee7.png"},"0fe5":function(A,e,t){A.exports=t.p+"img/angularTodoApp.acb795dc.png"},"1b67":function(A,e,t){},"209f":function(A,e,t){A.exports=t.p+"img/raconte.78070e17.png"},"23f2":function(A,e,t){"use strict";t("6f38")},"260b":function(A,e,t){"use strict";t("875b")},"26a7":function(A,e,t){var n={"./N.png":"654e","./P.png":"5078","./angular.png":"c042","./css.png":"5e47","./cv.png":"ff9b","./flecheTop.png":"036b","./github.png":"d1b0","./html.png":"b255","./javaScript.png":"778f","./lettre.png":"88ab","./linkedin.png":"c81a","./menu.png":"ddef","./php.png":"6972","./python.png":"a681","./sql.png":"7afc","./telephone.png":"d825","./vue.png":"2f87"};function c(A){var e=o(A);return t(e)}function o(A){if(!t.o(n,A)){var e=new Error("Cannot find module '"+A+"'");throw e.code="MODULE_NOT_FOUND",e}return n[A]}c.keys=function(){return Object.keys(n)},c.resolve=o,A.exports=c,c.id="26a7"},"2f85":function(A,e,t){},"2f87":function(A,e,t){A.exports=t.p+"img/vue.39faba29.png"},5078:function(A,e,t){A.exports=t.p+"img/P.fd3d100f.png"},"56d7":function(A,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("7a23");function c(A,e,t,c,o,r){var i=Object(n["h"])("HomePage");return Object(n["f"])(),Object(n["c"])(i)}var o=t("036b"),r=t.n(o),i={id:"projects"},a=Object(n["e"])("h1",null,"Some projects...",-1),s=Object(n["e"])("footer",null,[Object(n["e"])("a",{href:"#top"},[Object(n["e"])("img",{src:r.a,alt:"flecheTop"})])],-1);function l(A,e,t,c,o,r){var l=Object(n["h"])("Navbar"),p=Object(n["h"])("Header"),u=Object(n["h"])("Selection"),g=Object(n["h"])("Project"),j=Object(n["h"])("About");return Object(n["f"])(),Object(n["c"])(n["a"],null,[Object(n["e"])(l),Object(n["e"])(p),Object(n["e"])("article",i,[a,Object(n["e"])(u,{editSelection:r.editSelection},null,8,["editSelection"]),(Object(n["f"])(!0),Object(n["c"])(n["a"],null,Object(n["g"])(A.projects,(function(A){return Object(n["f"])(),Object(n["c"])("div",{key:A},[Object(n["e"])(g,{title:A.title,img:A.img,url:A.url,langs:A.langs,framework:A.framework},null,8,["title","img","url","langs","framework"])])})),128))]),Object(n["e"])(j),s],64)}t("a434");var p=t("654e"),u=t.n(p),g=t("5078"),j=t.n(g),f=t("ddef"),b=t.n(f),d={class:"navbar open"},m=Object(n["e"])("div",{class:"navNoe open underlign"},[Object(n["e"])("a",{href:"#top"},[Object(n["e"])("img",{src:u.a,alt:"N"}),Object(n["e"])("img",{src:j.a,alt:"P"})])],-1),O=Object(n["e"])("div",{class:"menu open"},[Object(n["e"])("img",{class:"menu1",src:b.a,alt:"navbar1"}),Object(n["e"])("img",{class:"menu2",src:b.a,alt:"navbar2"})],-1),h=Object(n["e"])("section",null,[Object(n["e"])("div",{class:"navProjects open"},[Object(n["e"])("a",{href:"#projects"},"Projects")]),Object(n["e"])("div",{class:"navAbout open"},[Object(n["e"])("a",{href:"#about"},"About")])],-1);function v(A,e,t,c,o,r){return Object(n["f"])(),Object(n["c"])("aside",d,[m,O,h])}var w={name:"App"};t("260b");w.render=v;var k=w,H=t("d1b0"),I=t.n(H),S=t("88ab"),y=t.n(S),B=t("d825"),x=t.n(B),E=t("ff9b"),P=t.n(E),D=t("c81a"),Q=t.n(D),G={id:"top"},C=Object(n["e"])("h1",null,"Noé PHILIPPE",-1),U=Object(n["e"])("h2",null,[Object(n["d"])("Web Developer"),Object(n["e"])("br"),Object(n["e"])("p",null,"I am looking for a work-study contract")],-1),M=Object(n["e"])("div",{class:"buttons"},[Object(n["e"])("button",null,[Object(n["e"])("a",{target:"blank",href:"https://github.com/Noe-p"},[Object(n["e"])("img",{src:I.a,alt:"github"})])]),Object(n["e"])("button",null,[Object(n["e"])("a",{href:"mailto:noephilippe29@gmail.com"},[Object(n["e"])("img",{src:y.a,alt:"mail"})])]),Object(n["e"])("button",null,[Object(n["e"])("a",{href:"tel:0781533181"},[Object(n["e"])("img",{src:x.a,alt:"phone"})])]),Object(n["e"])("button",null,[Object(n["e"])("a",{target:"blank",href:"../../CV_Noé_PHILIPPE.pdf"},[Object(n["e"])("img",{src:P.a,alt:"cv"})])]),Object(n["e"])("button",null,[Object(n["e"])("a",{target:"blank",href:"https://www.linkedin.com/in/no%C3%A9-philippe-90318020b/"},[Object(n["e"])("img",{src:Q.a,alt:"linkedin"})])])],-1);function L(A,e,t,c,o,r){return Object(n["f"])(),Object(n["c"])("header",G,[C,U,M])}var R={name:"Header"};t("f34b");R.render=L;var J=R,N=t("9ca6"),Y=t.n(N),F=t("f464"),q=t.n(F),T={id:"about"},z=Object(n["e"])("h1",null,[Object(n["d"])("I'm a futur apprentice at "),Object(n["e"])("span",null,"Sorbonne University"),Object(n["d"])(" in Paris,")],-1),X=Object(n["e"])("div",{class:"studies"},[Object(n["e"])("article",null,[Object(n["e"])("p",null,[Object(n["d"])("I'm 22, I love to "),Object(n["e"])("span",null,"design"),Object(n["d"])(" and "),Object(n["e"])("span",null,"develop"),Object(n["d"])(" website with animations and intuitive interfaces. The interesting part to me is to imagine, create and apply ideas that are in my mind. ")]),Object(n["e"])("p",null,[Object(n["d"])(" I'm currently studying in the second year of the computer science bachelor's degree in Brest. This university education gave me strong knowledge in "),Object(n["e"])("span",null,"development"),Object(n["d"])(". ")])]),Object(n["e"])("img",{src:Y.a,alt:"Noe"})],-1),W=Object(n["e"])("div",{class:"passion"},[Object(n["e"])("img",{src:q.a,alt:"Guitar"}),Object(n["e"])("article",null,[Object(n["e"])("p",null,[Object(n["d"])(' Next year, I will be an apprentice at the "Projet Web et Mobile" bachelor\'s at '),Object(n["e"])("span",null,"Sorbonne University"),Object(n["d"])(". This training includes lessons of Front-End and Back-End developpement, and lessons of UX-design and animations. ")]),Object(n["e"])("p",null,[Object(n["d"])(" I like to "),Object(n["e"])("span",null,"build projects"),Object(n["d"])(' with a team, share and communicate ideas. Precisely, I play guitar in a band "Saad" during my free time. I think that music is very similar to developpement. ')])])],-1),Z=Object(n["e"])("p",{class:"contactMe"},[Object(n["d"])(" If you are interested in my profile, You can contact me at "),Object(n["e"])("a",{href:"mailto:noephilippe29@gmail.com"},"noephilippe29@gmail.com.")],-1);function V(A,e,t,c,o,r){return Object(n["f"])(),Object(n["c"])("article",T,[z,X,W,Z])}var K={name:"About"};t("9c16");K.render=V;var _=K,$={class:"project-item"},AA={class:"languages"};function eA(A,e,c,o,r,i){return Object(n["f"])(),Object(n["c"])("div",$,[Object(n["e"])("h2",null,Object(n["i"])(c.title),1),Object(n["e"])("a",{target:"blank",href:[[c.url]]},[Object(n["e"])("img",{src:t("bb6e")("./".concat(c.img)),alt:[[c.title]]},null,8,["src","alt"]),Object(n["e"])("section",AA,[(Object(n["f"])(!0),Object(n["c"])(n["a"],null,Object(n["g"])(c.langs,(function(A){return Object(n["f"])(),Object(n["c"])("div",{key:A},[Object(n["e"])("img",{src:t("26a7")("./".concat(A,".png")),alt:[[A]]},null,8,["src","alt"])])})),128)),(Object(n["f"])(!0),Object(n["c"])(n["a"],null,Object(n["g"])(c.framework,(function(A){return Object(n["f"])(),Object(n["c"])("div",{key:A},[Object(n["e"])("img",{class:"framework",src:t("26a7")("./".concat(A,".png")),alt:[[A]]},null,8,["src","alt"])])})),128))])],8,["href"])])}var tA={name:"Project",props:{title:String,img:String,url:String,langs:Array,framework:Array}};t("6ed9");tA.render=eA;var nA=tA,cA={class:"selection"},oA={class:"language"},rA=Object(n["e"])("h2",null,"Languages",-1),iA={class:"items"},aA={class:"framework"},sA=Object(n["e"])("h2",null,"Frameworks",-1),lA={class:"items"},pA=Object(n["e"])("h3",{class:"noSelection"},"Sorry, neither project matches to your selection",-1);function uA(A,e,t,c,o,r){return Object(n["f"])(),Object(n["c"])(n["a"],null,[Object(n["e"])("div",cA,[Object(n["e"])("div",oA,[rA,Object(n["e"])("div",iA,[Object(n["e"])("p",{class:"html",onClick:e[1]||(e[1]=function(A){return t.editSelection("html")})},"HTML5/CSS"),Object(n["e"])("p",{class:"javaScript",onClick:e[2]||(e[2]=function(A){return t.editSelection("javaScript")})},"JavaScript"),Object(n["e"])("p",{class:"sql",onClick:e[3]||(e[3]=function(A){return t.editSelection("sql")})},"SQL"),Object(n["e"])("p",{class:"php",onClick:e[4]||(e[4]=function(A){return t.editSelection("php")})},"PHP"),Object(n["e"])("p",{class:"python",onClick:e[5]||(e[5]=function(A){return t.editSelection("python")})},"Python")])]),Object(n["e"])("div",aA,[sA,Object(n["e"])("div",lA,[Object(n["e"])("p",{class:"angular",onClick:e[6]||(e[6]=function(A){return t.editSelection("angular")})},"Angular"),Object(n["e"])("p",{class:"vue",onClick:e[7]||(e[7]=function(A){return t.editSelection("vue")})},"Vue.js")])])]),pA],64)}var gA={name:"Selection",props:{editSelection:Function}};t("8226");gA.render=uA;var jA=gA,fA=[{title:"Focus",img:"focus.png",langs:["html","css","javaScript","php","sql"],framework:[],url:"https://github.com/Noe-p/Developpement-application-web"},{title:"Space Invaders",img:"spaceInvaders.png",langs:["python"],framework:[],url:"https://github.com/Noe-p/Space-Invaders"},{title:"Angular Todo App",img:"angularTodoApp.png",langs:["html","css","javaScript"],framework:["angular"],url:"https://github.com/Noe-p/angular-todo-app"},{title:"Batz",img:"batz.png",langs:["html","css","javaScript"],framework:[],url:"https://location-maison-iledebatz.fr/"},{title:"Todo List",img:"todoApp.png",langs:["html","css","javaScript"],framework:["vue"],url:"https://github.com/Noe-p/todo-list"},{title:"Raconte",img:"raconte.png",langs:["html","css","javaScript"],framework:[],url:"https://raconte-reportage.com/index.html"}],bA={name:"HomePage",components:{Navbar:k,Header:J,About:_,Project:nA,Selection:jA},data:function(){return{projects:[],selection:[]}},methods:{editSelection:function(A){var e=-1;for(var t in this.projects=[],this.selection)this.selection[t]==A&&(e=t);-1==e?(this.selection.push(A),document.querySelector("."+A).classList.add("checked")):(this.selection.splice(e,1),document.querySelector("."+A).classList.remove("checked")),this.addProject(),0==this.projects.length?document.querySelector(".noSelection").classList.add("visible"):document.querySelector(".noSelection").classList.remove("visible")},addProject:function(){var A;for(var e in fA){for(var t in A=0,this.selection){for(var n in fA[e].langs)fA[e].langs[n]==this.selection[t]&&(A+=1);for(var c in fA[e].framework)fA[e].framework[c]==this.selection[t]&&(A+=1)}A==this.selection.length&&this.projects.unshift(fA[e])}}},mounted:function(){this.addProject()}};t("b908");bA.render=l;var dA=bA,mA={name:"App",components:{HomePage:dA}};t("23f2");mA.render=c;var OA=mA;Object(n["b"])(OA).mount("#app");var hA=document.querySelector(".menu"),vA=document.querySelector(".navbar"),wA=document.querySelector(".navNoe"),kA=document.querySelector(".navAbout"),HA=document.querySelector(".navProjects");hA.onclick=function(){hA.classList.toggle("open"),vA.classList.toggle("open"),wA.classList.toggle("open"),kA.classList.toggle("open"),HA.classList.toggle("open")};var IA=document.getElementById("projects"),SA=document.getElementById("top"),yA=document.getElementById("about");window.addEventListener("scroll",(function(){window.scrollY>SA.offsetTop-100&&window.scrollY<IA.offsetTop-100?wA.classList.add("underlign"):wA.classList.remove("underlign"),window.scrollY>vA.offsetHeight+5?vA.classList.add("underlign"):vA.classList.remove("underlign"),window.scrollY>IA.offsetTop-100&&window.scrollY<yA.offsetTop-100?HA.classList.add("underlign"):HA.classList.remove("underlign"),window.scrollY>yA.offsetTop-100?kA.classList.add("underlign"):kA.classList.remove("underlign")}));var BA=document.querySelector(".studies"),xA=document.querySelector(".passion");window.addEventListener("scroll",(function(){window.scrollY>yA.offsetTop-200&&BA.classList.add("open"),window.scrollY>yA.offsetTop+BA.offsetHeight-200&&xA.classList.add("open")}))},"5e47":function(A,e,t){A.exports=t.p+"img/css.69589ba4.png"},"654e":function(A,e,t){A.exports=t.p+"img/N.c372af2c.png"},6972:function(A,e,t){A.exports=t.p+"img/php.6944d29d.png"},6987:function(A,e,t){},"69cc":function(A,e,t){A.exports=t.p+"img/focus.50dbc3f7.png"},"6ed9":function(A,e,t){"use strict";t("a433")},"6f38":function(A,e,t){},"778f":function(A,e,t){A.exports=t.p+"img/javaScript.e48039a8.png"},"7aa1":function(A,e,t){A.exports=t.p+"img/spaceInvaders.6ff1e540.png"},"7afc":function(A,e,t){A.exports=t.p+"img/sql.42efc28d.png"},8226:function(A,e,t){"use strict";t("c0fe")},"82f4":function(A,e,t){A.exports=t.p+"img/batz.d53a929d.png"},"875b":function(A,e,t){},"88ab":function(A,e,t){A.exports=t.p+"img/lettre.20af5a21.png"},"9c16":function(A,e,t){"use strict";t("6987")},"9ca6":function(A,e,t){A.exports=t.p+"img/noe.c52e6f90.jpg"},a433:function(A,e,t){},a681:function(A,e,t){A.exports=t.p+"img/python.ca68a65b.png"},b255:function(A,e,t){A.exports=t.p+"img/html.8ca75df9.png"},b908:function(A,e,t){"use strict";t("1b67")},bb6e:function(A,e,t){var n={"./angularTodoApp.png":"0fe5","./batz.png":"82f4","./focus.png":"69cc","./guitar.jpg":"f464","./noe.jpg":"9ca6","./raconte.png":"209f","./spaceInvaders.png":"7aa1","./todoApp.png":"e4fd"};function c(A){var e=o(A);return t(e)}function o(A){if(!t.o(n,A)){var e=new Error("Cannot find module '"+A+"'");throw e.code="MODULE_NOT_FOUND",e}return n[A]}c.keys=function(){return Object.keys(n)},c.resolve=o,A.exports=c,c.id="bb6e"},c042:function(A,e,t){A.exports=t.p+"img/angular.03538de7.png"},c0fe:function(A,e,t){},c81a:function(A,e){A.exports="data:image/png;base64,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"},d1b0:function(A,e,t){A.exports=t.p+"img/github.ff85b1c2.png"},d825:function(A,e,t){A.exports=t.p+"img/telephone.dee1fec5.png"},ddef:function(A,e){A.exports="data:image/png;base64,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"},e4fd:function(A,e,t){A.exports=t.p+"img/todoApp.9a5a503b.png"},f34b:function(A,e,t){"use strict";t("2f85")},f464:function(A,e,t){A.exports=t.p+"img/guitar.b6950778.jpg"},ff9b:function(A,e,t){A.exports=t.p+"img/cv.a12dfd9e.png"}});
//# sourceMappingURL=app.8f0f1893.js.map