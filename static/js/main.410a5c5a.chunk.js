(this["webpackJsonphuilin-portfolio"]=this["webpackJsonphuilin-portfolio"]||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},110:function(e,t,a){},153:function(e,t,a){},155:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(75),c=a.n(o),i=(a(95),a(34)),l=a(15),s=a(4),m=a(5),p=a(7),u=a(6),h=a(8),d=(a(96),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={current:"home"},a.handleClick=function(e){a.setState({current:e.key})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"header"},r.a.createElement("div",{className:"nav-container"},[{name:"Home",path:"/"},{name:"About",path:"/about"},{name:"Projects",path:"/projects"},{name:"Blog",href:"https://tayhuilin.wixsite.com/portfolio"},{name:"Contact",path:"/contact"}].map((function(e){return e.path?r.a.createElement(i.b,{className:"nav-item",to:e.path},r.a.createElement("span",null,e.name)):r.a.createElement("a",{className:"nav-item",target:"_blank",rel:"noopener noreferrer",href:e.href},e.name)}))))}}]),t}(n.Component)),f=(a(102),function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"home",className:"page-container"},r.a.createElement("div",{class:"home-container"},r.a.createElement("div",{className:"home-title"},"Hi, I'm Hui Lin!"),r.a.createElement("div",{className:"home-desc"},"I'm a developer from Singapore.",r.a.createElement("br",null),"Welcome to my portfolio!")))}}]),t}(n.Component)),g=a(77),b=a.n(g),j=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"about",className:"page-container"},r.a.createElement("div",{className:"page-title"},"About Me"),r.a.createElement("div",{className:"page-desc"},"Hello! I'm Hui Lin, a developer from Singapore.",r.a.createElement("br",null),r.a.createElement("br",null),"This is where I display my projects I've done in the course of my development journey. I enjoy learning about new technologies and creating things with them. I have special interests in web and mobile applications development and software engineering!",r.a.createElement("br",null),r.a.createElement("br",null),"More about my qualifications in my\xa0",r.a.createElement("a",{href:b.a,target:"_blank",rel:"noopener noreferrer"},"resume"),"!"))}}]),t}(n.Component),E=(a(103),function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.project;return r.a.createElement("div",{className:"project-container"},r.a.createElement("div",{className:"project-title"},e.name),r.a.createElement("div",{className:"project-detail-container"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:e.image,alt:"developer portfolio project"})),r.a.createElement("div",{class:"project-desc-container"},r.a.createElement("div",{className:"project-desc"},e.description),r.a.createElement("br",null),r.a.createElement("div",{className:"project-language"},"Language: ",e.language),e.link&&r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"project-link"},"View in Github")))))}}]),t}(n.Component)),v=a(78),y=a.n(v),O=a(79),w=a.n(O),k=a(80),N=a.n(k),S=a(81),A=a.n(S),C=[{name:"FoodTree",description:"iOS application to target food wastage in Singapore - especially leftovers from the F&B industry.",image:w.a,category:"School",language:"Swift",link:"https://github.com/huilynt/foodtree"},{name:"MADRecipes",description:"Android recipe management application to store and retrieve recipes in your phone! Includes with a shopping list and timer too.",image:N.a,category:"School",language:"Java",link:"https://github.com/huilynt/MADRecipes"},{name:"Patch",description:"Android application that encourages interaction - match up with other users who have similar hobbies and interests, connect & socialize with new friends.",image:A.a,category:"School",language:"Java",link:"https://github.com/huilynt/Patch/"},{name:"Community",description:"Basic front-end website to showcase some community centres of Singapore.",image:y.a,category:"School",language:"HTML, CSS, jQuery",link:"https://github.com/huilynt/FED_Assignment/"}],I=a(158),_=a(159),H=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"project",className:"page-container"},r.a.createElement("div",{className:"page-title"},"Projects"),r.a.createElement("p",{className:"page-desc"},"Here are some of the projects I have done in my 3 years of polytechnic! It also includes some personal projects done for self-learning purposes.",r.a.createElement("br",null),r.a.createElement("br",null),"More projects can be found on my\xa0",r.a.createElement("a",{href:"https://github.com/huilynt/",target:"_blank",rel:"noopener noreferrer"},"github"),"!"),r.a.createElement(I.a,{justify:"space-around",gutter:16},C.map((function(e){return r.a.createElement(_.a,{span:8},r.a.createElement(E,{project:e}))}))))}}]),t}(n.Component),x=a(156),M=(a(110),function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"contact",className:"page-container"},r.a.createElement("div",{className:"page-title"},"More ways to find me"),r.a.createElement("div",{className:"page-desc"},"Feel free to contact me at my socials below!"),r.a.createElement("div",{className:"contact-icons"},r.a.createElement("a",{href:"mailto:appledcse@yahoo.com",rel:"noopener noreferrer",title:"email"},r.a.createElement(x.a,{type:"mail",theme:"filled"})),r.a.createElement("a",{href:"https://github.com/huilynt/",target:"_blank",rel:"noopener noreferrer",title:"github"},r.a.createElement(x.a,{type:"github"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/hui-lin-tay/",target:"_blank",rel:"noopener noreferrer",title:"linkedin"},r.a.createElement(x.a,{type:"linkedin",theme:"filled"}))))}}]),t}(n.Component));a(153),a(154);var P=function(){var e=[{name:"Home",path:"/",component:f},{name:"About",path:"/about",component:j},{name:"Projects",path:"/projects",component:H},{name:"Contact",path:"/contact",component:M}];return r.a.createElement(i.a,null,r.a.createElement(d,null),r.a.createElement(l.c,null,e.map((function(e){return r.a.createElement(l.a,{key:e.name,exact:!0,path:e.path,component:e.component})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},77:function(e,t,a){e.exports=a.p+"static/media/Resume_TayHuiLin_010420.1ded11cd.pdf"},78:function(e,t,a){e.exports=a.p+"static/media/FED_Assignment.5bb5eece.jpg"},79:function(e,t,a){e.exports=a.p+"static/media/foodtree.71f2beb3.png"},80:function(e,t,a){e.exports=a.p+"static/media/MAD_Recipes.eb0a18c8.jpeg"},81:function(e,t,a){e.exports=a.p+"static/media/Patch.6c9205d9.png"},90:function(e,t,a){e.exports=a(155)},95:function(e,t,a){},96:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.410a5c5a.chunk.js.map