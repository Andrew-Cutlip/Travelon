(this.webpackJsonpfront_end=this.webpackJsonpfront_end||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),s=n(4),a=n.n(s),i=(n(14),n(2)),r=(n(15),n(3),n(1));var l=function(e){return Object(r.jsx)("button",{onClick:e.onclick,children:e.text})},u=n(5);var j=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),o=n[0],s=n[1],a=Object(c.useState)(""),j=Object(i.a)(a,2),b=j[0],d=j[1],h=Object(c.useState)(""),g=Object(i.a)(h,2),O=g[0],x=g[1],m=Object(c.useState)(!1),p=Object(i.a)(m,2),f=p[0],v=p[1];Object(c.useEffect)((function(){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:b,password:o,email:O})};f&&(v(!1),fetch("/register",e).then((function(e){return e.json()})).then((function(e){console.log("Registered!"),console.log(e),s(""),d(""),x("");var t=e.success;console.log(t),console.log(o)})))}),[f,o,b,O,e]);var S=function(e){e.preventDefault(),console.log("Handling Submit"),v(!0)},y="891542752976-2b518b2l45tl0foe8c17pjm1h76pcf79.apps.googleusercontent.com",k=Object(c.useState)(!0),L=Object(i.a)(k,2),w=L[0],F=L[1],C=Object(c.useState)(!1),N=Object(i.a)(C,2),A=N[0],P=N[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Register"}),Object(r.jsxs)("form",{id:"Register",name:"Register",className:"Register",align:"Center",onSubmit:S,children:[Object(r.jsxs)("label",{children:["UserName:",Object(r.jsx)("input",{name:"username",type:"text",placeholder:"Username",required:!0,onChange:function(e){d(e.target.value)},value:b})]}),Object(r.jsxs)("label",{children:["Password:",Object(r.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,onChange:function(e){s(e.target.value)},value:o})]}),Object(r.jsxs)("label",{children:["Email:",Object(r.jsx)("input",{name:"email",type:"email",placeholder:"example@ex.com",required:!0,onChange:function(e){x(e.target.value)},value:O})]}),Object(r.jsx)("input",{type:"submit",value:"Submit",onClick:S}),Object(r.jsx)(l,{type:"Submit",className:"RedirectButton",text:"Already have an account: Login here",onclick:function(){return e.onclick("login")}}),w?Object(r.jsx)(u.GoogleLogin,{clientId:y,buttonText:"Login",onSuccess:function(e){console.log("Login Success:",e.profileObj),F(!1),P(!0)},onFailure:function(e){console.log("Login Failed:",e)},cookiePolicy:"single_host_origin",className:"gsignin"}):null,A?Object(r.jsx)(u.GoogleLogout,{clientId:y,buttonText:"Logout",onLogoutSuccess:function(e){alert("You have been signed out successfully."),F(!0),P(!1)}}):null]})]})};var b=function(e){var t="891542752976-2b518b2l45tl0foe8c17pjm1h76pcf79.apps.googleusercontent.com",n=Object(c.useState)(!0),o=Object(i.a)(n,2),s=o[0],a=o[1],j=Object(c.useState)(!1),b=Object(i.a)(j,2),d=b[0],h=b[1],g=Object(c.useState)(""),O=Object(i.a)(g,2),x=O[0],m=O[1],p=Object(c.useState)(""),f=Object(i.a)(p,2),v=f[0],S=f[1],y=Object(c.useState)(!1),k=Object(i.a)(y,2),L=k[0],w=k[1];Object(c.useEffect)((function(){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:v,password:x})};L&&(w(!1),fetch("/login",t).then((function(e){return e.json()})).then((function(t){console.log("LoggedIn!"),console.log(t),t.loggedIn&&(console.log("Changed to logged in"),e.changeLoginStatus()),console.log(v),e.setAccount(v);var n=t.success;console.log(n),m(""),S("")})))}),[L,x,v,e]);var F=function(e){e.preventDefault(),w(!0)};return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsxs)("form",{id:"Login-Form",className:"Login",name:"Login",onSubmit:F,children:[Object(r.jsxs)("label",{children:[" Username:",Object(r.jsx)("input",{type:"text",name:"username",id:"username",placeholder:"Username",onChange:function(e){S(e.target.value)},value:v})]}),Object(r.jsxs)("label",{children:[" Password:",Object(r.jsx)("input",{type:"password",name:"password",id:"logPassword",placeholder:"Password",onChange:function(e){m(e.target.value)},value:x})]}),Object(r.jsx)("input",{type:"submit",name:"submit",value:"Submit",onSubmit:F}),Object(r.jsx)(l,{text:"Create an account",onclick:function(){return e.onclick("register")}}),s?Object(r.jsx)(u.GoogleLogin,{clientId:t,buttonText:"Login",onSuccess:function(e){console.log("Login Success:",e.profileObj),a(!1),h(!0)},onFailure:function(e){console.log("Login Failed:",e)},cookiePolicy:"single_host_origin"}):null,d?Object(r.jsx)(u.GoogleLogout,{clientId:t,buttonText:"Logout",onLogoutSuccess:function(e){alert("You have been signed out successfully."),a(!0),h(!1)}}):null]})]})},d=n(8),h={width:"400px",height:"400px"},g={lat:-3.745,lng:-30.523},O=function(){return Object(r.jsxs)("div",{id:"home",children:[Object(r.jsxs)("h1",{children:["Home",Object(r.jsx)("center",{children:Object(r.jsx)(d.b,{googleMapsApiKey:"AIzaSyB0ETFhO3BJFNA2LGz_ROSQQ-P9LWmnPLg",children:Object(r.jsx)(d.a,{mapContainerStyle:h,center:g,zoom:1,children:Object(r.jsx)(r.Fragment,{})})})})]}),Object(r.jsx)("p",{children:"If you love to travel, Why not share your experience to the world?"})]})},x=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"My Account:"}),Object(r.jsxs)("p",{children:["Welcome ",e.accountName,"!"]})]})},m=function(){return Object(r.jsxs)("div",{id:"about",children:[Object(r.jsx)("h1",{children:"About us"}),Object(r.jsx)("h1",{children:"Development Team"}),Object(r.jsx)("h3",{children:"Background"}),Object(r.jsx)("p",{children:"We are a group of people who love to travel. Many of us a still pioneers at traveling, however, we know many people enjoy traveling as a hobby."}),Object(r.jsx)("h3",{children:"Goals"}),Object(r.jsx)("p",{children:"Our goal is to bring people together. Those who travel hundreds of miles can stay in cantact with each other and share their traveling experiences with other people."})]})},p=function(){return Object(r.jsxs)("div",{id:"contact",children:[Object(r.jsx)("h1",{children:"Contact us"}),Object(r.jsx)("p",{children:"If you are having trouble with the site or want more information. Feel free to contact us!"}),Object(r.jsx)("p",{children:"Information"}),Object(r.jsx)("p",{children:"Emails: some1@gmail.com"}),Object(r.jsx)("p",{children:"Phone: 777-7777-7777"}),Object(r.jsx)("p",{children:"Location: Buffalo"})]})},f=[],v=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),o=n[0],s=n[1],a=Object(c.useState)(""),l=Object(i.a)(a,2),u=l[0],j=l[1],b=Object(c.useState)(!1),d=Object(i.a)(b,2),h=d[0],g=d[1];Object(c.useEffect)((function(){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:u,friend:o})};h&&(g(!1),fetch("/friends",e).then((function(e){return e.json()})).then((function(e){console.log("Added friend!"),console.log(e),f=JSON.stringify(e),j(""),s("")})))}),[h,o,u,e]);var O=function(e){e.preventDefault(),g(!0)};return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Friend"}),Object(r.jsxs)("form",{id:"AddFriend-Form",className:"AddFriend",name:"AddFriend",onSubmit:O,children:[Object(r.jsxs)("label",{children:[" Your Username:",Object(r.jsx)("input",{type:"text",name:"username",id:"username",placeholder:"Username",onChange:function(e){j(e.target.value)},value:u})]}),Object(r.jsxs)("label",{children:[" Friend to Add:",Object(r.jsx)("input",{type:"friend",name:"friend",id:"logFriend",placeholder:"Friend",onChange:function(e){s(e.target.value)},value:o})]}),Object(r.jsx)("input",{type:"submit",name:"submit",value:"Submit",onSubmit:O})]}),Object(r.jsxs)("div",{children:[" ",Object(r.jsx)("h1",{children:' "My FriendsList" '}),Object(r.jsxs)("h2",{children:[" ",f," "]})]})]})},S=(n(18),n(9)),y={orange:"#FFD700",white:"#FFFAFA"};var k={container:{display:"flex",flexDirection:"column",alignItems:"center"},stars:{display:"flex",flexDirection:"row"},textarea:{border:"2px solid #a9a9a9",borderRadius:0,padding:50,margin:"20px 0",minHeight:160,width:400},button:{border:"1px solid #a9a9a9",borderRadius:0,width:100,padding:10,cursor:"pointer"}},L=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),n=t[0],o=t[1],s=Object(c.useState)(void 0),a=Object(i.a)(s,2),l=a[0],u=a[1],j=Array(5).fill(0),b=function(){u(void 0)};return Object(r.jsxs)("div",{style:k.container,children:[Object(r.jsx)("div",{style:k.stars,children:j.map((function(e,t){return Object(r.jsx)(S.a,{size:24,onClick:function(){o(t+1)},onMouseOver:function(){u(t+1)},onMouseLeave:b,color:(l||n)>t?y.orange:y.grey,style:{marginRight:30,cursor:"pointer"}},t)}))}),Object(r.jsx)("textarea",{placeholder:"Please share your own experience at this place",style:k.textarea}),Object(r.jsx)("button",{style:k.button,children:"Post"})]})},w=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),o=n[0],s=n[1],a=Object(c.useState)(""),l=Object(i.a)(a,2),u=l[0],j=l[1],b=Object(c.useState)(""),d=Object(i.a)(b,2),h=d[0],g=d[1],O=Object(c.useState)(!1),x=Object(i.a)(O,2),m=x[0],p=x[1];Object(c.useEffect)((function(){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:u,password:o,newusername:h})};m&&(p(!1),fetch("/change",t).then((function(e){return e.json()})).then((function(t){console.log("LoggedIn!"),console.log(t),t.loggedIn&&e.changeLoginStatus(),console.log(u),e.setAccount(h);var n=t.success;console.log(n),s(""),j(""),g("")})))}),[m,o,u,h,e]);var f=function(e){e.preventDefault(),p(!0)};return Object(r.jsxs)("div",{id:"account",children:[Object(r.jsx)("h2",{children:"My Account:"}),Object(r.jsxs)("p",{children:["Welcome ",e.accountName,"!"]}),Object(r.jsx)("h1",{children:"Change my username"}),Object(r.jsxs)("form",{id:"Login-Form",className:"Login",name:"Login",onSubmit:f,children:[Object(r.jsxs)("label",{children:[" Username:",Object(r.jsx)("input",{type:"text",name:"username",id:"username",placeholder:"Username",onChange:function(e){j(e.target.value)},value:u})]}),Object(r.jsxs)("label",{children:[" New Username:",Object(r.jsx)("input",{type:"text",name:"newusername",id:"newusername",placeholder:"New Username",onChange:function(e){g(e.target.value)},value:h})]}),Object(r.jsxs)("label",{children:[" Password:",Object(r.jsx)("input",{type:"password",name:"password",id:"logPassword",placeholder:"Password",onChange:function(e){s(e.target.value)},value:o})]}),Object(r.jsx)("input",{type:"submit",name:"submit",value:"Submit",onSubmit:f})]})]})},F=[],C=function(e){var t=Object(c.useState)(!1),n=Object(i.a)(t,2),o=n[0],s=n[1];Object(c.useEffect)((function(){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})};o&&(s(!1),fetch("/rankings",e).then((function(e){return e.json()})).then((function(e){console.log("Show all venues!"),console.log(e),F=JSON.stringify(e)})))}),[o,e]);var a=function(e){e.preventDefault(),s(!0)};return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"All Venues"}),Object(r.jsx)("center",{children:Object(r.jsx)("form",{id:"Rankings-Form",className:"Rankings",name:"Rankings",onSubmit:a,children:Object(r.jsx)("input",{type:"submit",name:"submit",value:"See Venue Rankings",onSubmit:a})})}),Object(r.jsxs)("div",{children:[" ",Object(r.jsx)("h1",{children:"  "}),Object(r.jsxs)("h2",{children:[" ",F," "]})]})]})},N=function(e){var t;return t="register"===e.name?Object(r.jsx)(j,{onclick:e.onclick,changeLoginStatus:e.changeLoginStatus}):"login"===e.name?Object(r.jsx)(b,{onclick:e.onclick,setAccount:e.setAccount,changeLoginStatus:e.changeLoginStatus}):"account"===e.name?Object(r.jsx)(x,{accountName:e.accountName}):"about"===e.name?Object(r.jsx)(m,{}):"contact"===e.name?Object(r.jsx)(p,{}):"friendslist"===e.name?Object(r.jsx)(v,{}):"starRatings"===e.name?Object(r.jsx)(L,{}):"change"===e.name?Object(r.jsx)(w,{onclick:e.onclick}):"rankings"===e.name?Object(r.jsx)(C,{onclick:e.onclick}):Object(r.jsx)(O,{}),Object(r.jsx)("div",{id:"page",children:t})},A=function(e){return Object(r.jsx)("button",{onClick:function(){return e.changeLoginStatus()},children:"Log Out"})},P=function(e){var t=e.links.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)(l,{text:e.text,onclick:function(){return e.onclick(e.path)}})},e.key)})),n=e.loggedIn?Object(r.jsx)(A,{changeLoginStatus:e.changeLoginStatus}):"";return Object(r.jsxs)("nav",{children:[Object(r.jsx)("h1",{children:"Travelon"}),Object(r.jsx)("ul",{className:"nav-links",children:t}),n]})},R=function(e){return Object(r.jsx)("header",{className:"header",children:Object(r.jsx)(P,{links:e.links,changeLoginStatus:e.changeLoginStatus,loggedIn:e.loggedIn})})};var T=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],s=Object(c.useState)(""),a=Object(i.a)(s,2),l=a[0],u=a[1],j=Object(c.useState)(!1),b=Object(i.a)(j,2),d=b[0],h=b[1],g=function(e){o(e)},O=function(){console.log("changed login status"),h(!d)};Object(c.useEffect)((function(){document.title="Travelon "+n}),[n]);var x={onclick:g,text:"Login",path:"login",key:1},m={onclick:g,text:"Register",path:"register",key:2},p={onclick:g,text:"Account",path:"account",key:3},f=[{onclick:g,text:"Home",path:"home",key:0},{onclick:g,text:"About",path:"about",key:4},{onclick:g,text:"Contact",path:"contact",key:5},{onclick:g,text:"Friendslist",path:"friendslist",key:7},{onclick:g,text:"StarRatings",path:"starRatings",key:6},{onclick:g,text:"Change",path:"change",key:8},{onclick:g,text:"Rankings",path:"rankings",key:9}];return d?f.push(p):(f.push(x),f.push(m)),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(R,{links:f,loggedIn:d,changeLoginStatus:O}),Object(r.jsx)(N,{name:n,onclick:g,setAccount:function(e){u(e)},accountName:l,changeLoginStatus:O})]})})};a.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(T,{})}),document.getElementById("root"))},3:function(e,t,n){}},[[19,1,2]]]);
//# sourceMappingURL=main.5bf41c73.chunk.js.map