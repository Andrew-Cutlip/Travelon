(this.webpackJsonpfront_end=this.webpackJsonpfront_end||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(4),i=n.n(a),s=(n(14),n(2)),r=(n(15),n(3),n(0));var l=function(e){return Object(r.jsx)("button",{onClick:e.onclick,children:e.text})},u=n(5);var j=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),o=n[0],a=n[1],i=Object(c.useState)(""),j=Object(s.a)(i,2),d=j[0],b=j[1],h=Object(c.useState)(""),O=Object(s.a)(h,2),g=O[0],m=O[1],x=Object(c.useState)(!1),p=Object(s.a)(x,2),f=p[0],v=p[1];Object(c.useEffect)((function(){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:d,password:o,email:g})};f&&(v(!1),fetch("/register",e).then((function(e){return e.json()})).then((function(e){console.log("Registered!"),console.log(e),a(""),b(""),m("");var t=e.success;console.log(t),console.log(o)})))}),[f,o,d,g,e]);var y=function(e){e.preventDefault(),console.log("Handling Submit"),v(!0)},S="891542752976-2b518b2l45tl0foe8c17pjm1h76pcf79.apps.googleusercontent.com",k=Object(c.useState)(!0),L=Object(s.a)(k,2),w=L[0],N=L[1],C=Object(c.useState)(!1),F=Object(s.a)(C,2),T=F[0],A=F[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Register"}),Object(r.jsxs)("form",{id:"Register",name:"Register",className:"Register",align:"Center",onSubmit:y,children:[Object(r.jsxs)("label",{children:["UserName:",Object(r.jsx)("input",{name:"username",type:"text",placeholder:"Username",required:!0,onChange:function(e){b(e.target.value)},value:d})]}),Object(r.jsxs)("label",{children:["Password:",Object(r.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,onChange:function(e){a(e.target.value)},value:o})]}),Object(r.jsxs)("label",{children:["Email:",Object(r.jsx)("input",{name:"email",type:"email",placeholder:"example@ex.com",required:!0,onChange:function(e){m(e.target.value)},value:g})]}),Object(r.jsx)("input",{type:"submit",value:"Submit",onClick:y}),Object(r.jsx)(l,{type:"Submit",className:"RedirectButton",text:"Already have an account: Login here",onclick:function(){return e.onclick("login")}}),w?Object(r.jsx)(u.GoogleLogin,{clientId:S,buttonText:"Login",onSuccess:function(e){console.log("Login Success:",e.profileObj),N(!1),A(!0)},onFailure:function(e){console.log("Login Failed:",e)},cookiePolicy:"single_host_origin",className:"gsignin"}):null,T?Object(r.jsx)(u.GoogleLogout,{clientId:S,buttonText:"Logout",onLogoutSuccess:function(e){alert("You have been signed out successfully."),N(!0),A(!1)}}):null]})]})};var d=function(e){var t="891542752976-2b518b2l45tl0foe8c17pjm1h76pcf79.apps.googleusercontent.com",n=Object(c.useState)(!0),o=Object(s.a)(n,2),a=o[0],i=o[1],j=Object(c.useState)(!1),d=Object(s.a)(j,2),b=d[0],h=d[1],O=Object(c.useState)(""),g=Object(s.a)(O,2),m=g[0],x=g[1],p=Object(c.useState)(""),f=Object(s.a)(p,2),v=f[0],y=f[1],S=Object(c.useState)(!1),k=Object(s.a)(S,2),L=k[0],w=k[1];Object(c.useEffect)((function(){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:v,password:m})};L&&(w(!1),fetch("/login",t).then((function(e){return e.json()})).then((function(t){console.log("LoggedIn!"),console.log(t),t.loggedIn&&(console.log("Changed to logged in"),e.changeLoginStatus()),console.log(v),e.setAccount(v);var n=t.success;console.log(n),x(""),y("")})))}),[L,m,v,e]);var N=function(e){e.preventDefault(),w(!0)};return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsxs)("form",{id:"Login-Form",className:"Login",name:"Login",onSubmit:N,children:[Object(r.jsxs)("label",{children:[" Username:",Object(r.jsx)("input",{type:"text",name:"username",id:"username",placeholder:"Username",onChange:function(e){y(e.target.value)},value:v})]}),Object(r.jsxs)("label",{children:[" Password:",Object(r.jsx)("input",{type:"password",name:"password",id:"logPassword",placeholder:"Password",onChange:function(e){x(e.target.value)},value:m})]}),Object(r.jsx)("input",{type:"submit",name:"submit",value:"Submit",onSubmit:N}),Object(r.jsx)(l,{text:"Create an account",onclick:function(){return e.onclick("register")}}),a?Object(r.jsx)(u.GoogleLogin,{clientId:t,buttonText:"Login",onSuccess:function(e){console.log("Login Success:",e.profileObj),i(!1),h(!0)},onFailure:function(e){console.log("Login Failed:",e)},cookiePolicy:"single_host_origin"}):null,b?Object(r.jsx)(u.GoogleLogout,{clientId:t,buttonText:"Logout",onLogoutSuccess:function(e){alert("You have been signed out successfully."),i(!0),h(!1)}}):null]})]})},b=n(8),h=function(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),o=n[0],a=n[1],i=Object(c.useState)(""),l=Object(s.a)(i,2),u=l[0],j=l[1],d=Object(c.useState)(""),b=Object(s.a)(d,2),h=b[0],O=b[1],g=Object(c.useState)(""),m=Object(s.a)(g,2),x=m[0],p=m[1],f=Object(c.useState)(""),v=Object(s.a)(f,2),y=v[0],S=v[1],k=Object(c.useState)(""),L=Object(s.a)(k,2),w=L[0],N=L[1],C=Object(c.useState)(""),F=Object(s.a)(C,2),T=F[0],A=F[1],I=Object(c.useState)(""),P=Object(s.a)(I,2),R=P[0],E=P[1];Object(c.useEffect)((function(){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:u,summary:h,location:x})};o&&(a(!1),fetch("/make-post",e).then((function(e){return e.json()})).then((function(e){if(e.error){var t=e.message;S(t)}})).then((function(e){return console.log(e)})))}),[o,x,a,u,h]);var U=function(){return""===u?(N("Title can't be blank"),!1):(N(""),!0)},J=function(){return""===h?(A("Summary can't be blank"),!1):(A(""),!0)},M=function(){return""===x?(E("Location can't be blank"),!1):(E(""),!0)};return Object(r.jsxs)("div",{id:"post-form",children:[Object(r.jsx)("h2",{children:"Make a Post"}),Object(r.jsxs)("form",{children:[Object(r.jsx)("div",{id:"server-error",children:y}),Object(r.jsxs)("label",{htmlFor:"title",children:["Title:",Object(r.jsx)("input",{type:"text",name:"title",id:"title",placeholder:"Title",value:u,onChange:function(e){j(e.target.value)}}),Object(r.jsx)("div",{className:"error",children:w})]}),Object(r.jsxs)("label",{htmlFor:"summary",children:["Summary:",Object(r.jsx)("textarea",{name:"summary",id:"summary",placeholder:"Summarize your trip here.",value:h,onChange:function(e){O(e.target.value)}}),Object(r.jsx)("div",{className:"error",children:T})]}),Object(r.jsxs)("label",{htmlFor:"location",children:["Location:",Object(r.jsx)("input",{type:"text",name:"location",id:"location",placeholder:"Location",value:x,onChange:function(e){p(e.target.value)}}),Object(r.jsx)("div",{className:"error",children:R})]}),Object(r.jsx)("input",{type:"submit",onClick:function(e){var t=U(),n=J(),c=M();t&&n&&c?a(!0):e.preventDefault()},value:"Add Post"})]})]})},O=function(e){var t=e.images;t&&(t=t.map((function(e){return Object(r.jsx)("img",{src:e.src,alt:e.alt})})));var n=e.ratings;return n&&(n=n.map((function(e){return Object(r.jsx)("div",{className:"rating",children:e.score})}))),Object(r.jsxs)("div",{className:"post",children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsx)("p",{children:e.summary}),Object(r.jsx)("p",{children:e.location}),t,n]})},g={width:"400px",height:"400px"},m={lat:-3.745,lng:-30.523},x={method:"GET",headers:{"Content-Type":"application/json"}},p=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1];return Object(c.useEffect)((function(){fetch("/get-posts",x).then((function(e){return e.json()})).then((function(e){var t=e.posts;console.log(t);var n=t.map((function(e){return console.log(e),Object(r.jsx)(O,{title:e.title,summary:e.summary,location:e.location})}));return o(n),e})).then((function(e){return console.log(e)}))}),[o]),Object(r.jsxs)("div",{id:"home",children:[Object(r.jsxs)("h1",{children:["Home",Object(r.jsx)("center",{children:Object(r.jsx)(b.b,{googleMapsApiKey:"AIzaSyB0ETFhO3BJFNA2LGz_ROSQQ-P9LWmnPLg",children:Object(r.jsx)(b.a,{mapContainerStyle:g,center:m,zoom:1,children:Object(r.jsx)(r.Fragment,{})})})})]}),Object(r.jsx)("p",{children:"If you love to travel, Why not share your experience to the world?"}),n,Object(r.jsx)(h,{})]})},f=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"My Account:"}),Object(r.jsxs)("p",{children:["Welcome ",e.accountName,"!"]})]})},v=function(){return Object(r.jsxs)("div",{id:"about",children:[Object(r.jsx)("h1",{children:"About us"}),Object(r.jsx)("h1",{children:"Development Team"}),Object(r.jsx)("h3",{children:"Background"}),Object(r.jsx)("p",{children:"We are a group of people who love to travel. Many of us a still pioneers at traveling, however, we know many people enjoy traveling as a hobby."}),Object(r.jsx)("h3",{children:"Goals"}),Object(r.jsx)("p",{children:"Our goal is to bring people together. Those who travel hundreds of miles can stay in cantact with each other and share their traveling experiences with other people."})]})},y=function(){return Object(r.jsxs)("div",{id:"contact",children:[Object(r.jsx)("h1",{children:"Contact us"}),Object(r.jsx)("p",{children:"If you are having trouble with the site or want more information. Feel free to contact us!"}),Object(r.jsx)("p",{children:"Information"}),Object(r.jsx)("p",{children:"Emails: some1@gmail.com"}),Object(r.jsx)("p",{children:"Phone: 777-7777-7777"}),Object(r.jsx)("p",{children:"Location: Buffalo"})]})},S=[],k=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),o=n[0],a=n[1],i=Object(c.useState)(""),l=Object(s.a)(i,2),u=l[0],j=l[1],d=Object(c.useState)(!1),b=Object(s.a)(d,2),h=b[0],O=b[1];Object(c.useEffect)((function(){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:u,friend:o})};h&&(O(!1),fetch("/friends",e).then((function(e){return e.json()})).then((function(e){console.log("Added friend!"),console.log(e),S=JSON.stringify(e),j(""),a("")})))}),[h,o,u,e]);var g=function(e){e.preventDefault(),O(!0)};return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Friend"}),Object(r.jsxs)("form",{id:"AddFriend-Form",className:"AddFriend",name:"AddFriend",onSubmit:g,children:[Object(r.jsxs)("label",{children:[" Your Username:",Object(r.jsx)("input",{type:"text",name:"username",id:"username",placeholder:"Username",onChange:function(e){j(e.target.value)},value:u})]}),Object(r.jsxs)("label",{children:[" Friend to Add:",Object(r.jsx)("input",{type:"friend",name:"friend",id:"logFriend",placeholder:"Friend",onChange:function(e){a(e.target.value)},value:o})]}),Object(r.jsx)("input",{type:"submit",name:"submit",value:"Submit",onSubmit:g})]}),Object(r.jsxs)("div",{children:[" ",Object(r.jsx)("h1",{children:' "My FriendsList" '}),Object(r.jsxs)("h2",{children:[" ",S," "]})]})]})},L=(n(18),n(9)),w={orange:"#FFD700",white:"#FFFAFA"};var N={container:{display:"flex",flexDirection:"column",alignItems:"center"},stars:{display:"flex",flexDirection:"row"},textarea:{border:"2px solid #a9a9a9",borderRadius:0,padding:50,margin:"20px 0",minHeight:160,width:400},button:{border:"1px solid #a9a9a9",borderRadius:0,width:100,padding:10,cursor:"pointer"}},C=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],o=t[1],a=Object(c.useState)(void 0),i=Object(s.a)(a,2),l=i[0],u=i[1],j=Array(5).fill(0),d=function(){u(void 0)};return Object(r.jsxs)("div",{style:N.container,children:[Object(r.jsx)("div",{style:N.stars,children:j.map((function(e,t){return Object(r.jsx)(L.a,{size:24,onClick:function(){o(t+1)},onMouseOver:function(){u(t+1)},onMouseLeave:d,color:(l||n)>t?w.orange:w.grey,style:{marginRight:30,cursor:"pointer"}},t)}))}),Object(r.jsx)("textarea",{placeholder:"Please share your own experience at this place",style:N.textarea}),Object(r.jsx)("button",{style:N.button,children:"Post"})]})},F=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),o=n[0],a=n[1],i=Object(c.useState)(""),l=Object(s.a)(i,2),u=l[0],j=l[1],d=Object(c.useState)(""),b=Object(s.a)(d,2),h=b[0],O=b[1],g=Object(c.useState)(!1),m=Object(s.a)(g,2),x=m[0],p=m[1];Object(c.useEffect)((function(){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:u,password:o,newusername:h})};x&&(p(!1),fetch("/change",t).then((function(e){return e.json()})).then((function(t){console.log("LoggedIn!"),console.log(t),t.loggedIn&&e.changeLoginStatus(),console.log(u),e.setAccount(h);var n=t.success;console.log(n),a(""),j(""),O("")})))}),[x,o,u,h,e]);var f=function(e){e.preventDefault(),p(!0)};return Object(r.jsxs)("div",{id:"account",children:[Object(r.jsx)("h2",{children:"My Account:"}),Object(r.jsxs)("p",{children:["Welcome ",e.accountName,"!"]}),Object(r.jsx)("h1",{children:"Change my username"}),Object(r.jsxs)("form",{id:"Login-Form",className:"Login",name:"Login",onSubmit:f,children:[Object(r.jsxs)("label",{children:[" Username:",Object(r.jsx)("input",{type:"text",name:"username",id:"username",placeholder:"Username",onChange:function(e){j(e.target.value)},value:u})]}),Object(r.jsxs)("label",{children:[" New Username:",Object(r.jsx)("input",{type:"text",name:"newusername",id:"newusername",placeholder:"New Username",onChange:function(e){O(e.target.value)},value:h})]}),Object(r.jsxs)("label",{children:[" Password:",Object(r.jsx)("input",{type:"password",name:"password",id:"logPassword",placeholder:"Password",onChange:function(e){a(e.target.value)},value:o})]}),Object(r.jsx)("input",{type:"submit",name:"submit",value:"Submit",onSubmit:f})]})]})},T=[],A=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),o=n[0],a=n[1],i=Object(c.useState)(!1),l=Object(s.a)(i,2),u=l[0],j=l[1];Object(c.useEffect)((function(){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({location:o})};u&&(j(!1),fetch("/rankings",e).then((function(e){return e.json()})).then((function(e){console.log("Show all venues!"),console.log(e),T=JSON.parse(JSON.stringify(e)),a("")})))}),[u,o,e]);var d=function(e){e.preventDefault(),j(!0)};return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"VENUE RANKINGS"}),Object(r.jsx)("center",{children:Object(r.jsxs)("form",{id:"Rankings-Form",className:"Rankings",name:"Rankings",onSubmit:d,children:[Object(r.jsx)("label",{children:Object(r.jsx)("input",{type:"friend",name:"friend",id:"logFriend",placeholder:"Enter Location",onChange:function(e){a(e.target.value)},value:o})}),Object(r.jsx)("input",{type:"submit",name:"submit",value:"See Venue Rankings",onSubmit:d})]})}),Object(r.jsxs)("div",{children:[" ",Object(r.jsx)("h1",{children:" "}),T.map((function(e){return Object(r.jsxs)("table",{border:"1",bordercolor:"green",bgcolor:"yellow",children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"USERNAME"}),Object(r.jsx)("td",{children:"COMMENT"}),Object(r.jsx)("td",{children:"VENUE"}),Object(r.jsx)("td",{children:"RATING"}),Object(r.jsx)("td",{children:"LOCATION"})]}),Object(r.jsxs)("tr",{children:[e.map((function(e){return Object(r.jsx)("td",{children:e.user_Id[0]})})),e.map((function(e){return Object(r.jsx)("td",{children:e.comment[0]})})),e.map((function(e){return Object(r.jsx)("td",{children:e.name})})),e.map((function(e){return Object(r.jsx)("td",{children:e.rating[0]})})),e.map((function(e){return Object(r.jsx)("td",{children:e.location})}))]}),Object(r.jsxs)("tr",{children:[e.map((function(e){return Object(r.jsx)("td",{children:e.user_Id[1]})})),e.map((function(e){return Object(r.jsx)("td",{children:e.comment[1]})})),e.map((function(e){return Object(r.jsx)("td",{children:e.name})})),e.map((function(e){return Object(r.jsx)("td",{children:e.rating[1]})})),e.map((function(e){return Object(r.jsx)("td",{children:e.location})}))]}),Object(r.jsxs)("tr",{children:[e.map((function(e){return Object(r.jsx)("td",{children:e.user_Id[2]})})),e.map((function(e){return Object(r.jsx)("td",{children:e.comment[2]})})),e.map((function(e){return Object(r.jsx)("td",{children:e.name})})),e.map((function(e){return Object(r.jsx)("td",{children:e.rating[2]})})),e.map((function(e){return Object(r.jsx)("td",{children:e.location})}))]})]})}))]})]})},I=function(e){var t;return t="register"===e.name?Object(r.jsx)(j,{onclick:e.onclick,changeLoginStatus:e.changeLoginStatus}):"login"===e.name?Object(r.jsx)(d,{onclick:e.onclick,setAccount:e.setAccount,changeLoginStatus:e.changeLoginStatus}):"account"===e.name?Object(r.jsx)(f,{accountName:e.accountName}):"about"===e.name?Object(r.jsx)(v,{}):"contact"===e.name?Object(r.jsx)(y,{}):"friendslist"===e.name?Object(r.jsx)(k,{}):"starRatings"===e.name?Object(r.jsx)(C,{}):"change"===e.name?Object(r.jsx)(F,{onclick:e.onclick}):"rankings"===e.name?Object(r.jsx)(A,{onclick:e.onclick}):Object(r.jsx)(p,{}),Object(r.jsx)("div",{id:"page",children:t})},P=function(e){return Object(r.jsx)("button",{onClick:function(){return e.changeLoginStatus()},children:"Log Out"})},R=function(e){var t=e.links.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)(l,{text:e.text,onclick:function(){return e.onclick(e.path)}})},e.key)})),n=e.loggedIn?Object(r.jsx)(P,{changeLoginStatus:e.changeLoginStatus}):"";return Object(r.jsxs)("nav",{children:[Object(r.jsx)("h1",{children:"Travelon"}),Object(r.jsx)("ul",{className:"nav-links",children:t}),n]})},E=function(e){return Object(r.jsx)("header",{className:"header",children:Object(r.jsx)(R,{links:e.links,changeLoginStatus:e.changeLoginStatus,loggedIn:e.loggedIn})})};var U=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],o=t[1],a=Object(c.useState)(""),i=Object(s.a)(a,2),l=i[0],u=i[1],j=Object(c.useState)(!1),d=Object(s.a)(j,2),b=d[0],h=d[1],O=function(e){o(e)},g=function(){console.log("changed login status"),h(!b)};Object(c.useEffect)((function(){document.title="Travelon "+n}),[n]);var m={onclick:O,text:"Login",path:"login",key:1},x={onclick:O,text:"Register",path:"register",key:2},p={onclick:O,text:"Account",path:"account",key:3},f=[{onclick:O,text:"Home",path:"home",key:0},{onclick:O,text:"About",path:"about",key:4},{onclick:O,text:"Contact",path:"contact",key:5},{onclick:O,text:"Friendslist",path:"friendslist",key:7},{onclick:O,text:"StarRatings",path:"starRatings",key:6},{onclick:O,text:"Change",path:"change",key:8},{onclick:O,text:"Rankings",path:"rankings",key:9}];return b?f.push(p):(f.push(m),f.push(x)),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(E,{links:f,loggedIn:b,changeLoginStatus:g}),Object(r.jsx)(I,{name:n,onclick:O,setAccount:function(e){u(e)},accountName:l,changeLoginStatus:g})]})})};i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(U,{})}),document.getElementById("root"))},3:function(e,t,n){}},[[19,1,2]]]);
//# sourceMappingURL=main.be06a0e2.chunk.js.map