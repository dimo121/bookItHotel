(this["webpackJsonpts-frontend"]=this["webpackJsonpts-frontend"]||[]).push([[0],{159:function(e,t,n){},571:function(e,t){},618:function(e,t,n){},619:function(e,t,n){},620:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n.n(a),s=n(134),c=n.n(s),i=(n(159),n(7)),o=n.n(i),u=n(14),p=n(10),h=n(11),l=n(32),j=n(17),b=n(16),d=n(62),O=n(148),f=n(147),v=n(86),x="\thttps://35wqd3ztkd.execute-api.ap-southeast-2.amazonaws.com/prod/",m={REGION:"ap-southeast-2",USER_POOL_ID:"ap-southeast-2_EcdMNVail",APP_CLIENT_ID:"327v0ohcahj7j03e7oumaiknsd",IDENTITY_POOL_ID:"ap-southeast-2:bc55e356-6b52-4c67-8f81-62150f983da3",SPACES_PHOTO_BUCKET:"spaces-photos-0a066d6e213a",api:{baseUrl:x,spacesUrl:"".concat(x,"spaces")}},S=n(37);v.default.configure({Auth:{mandatorySignIn:!1,region:m.REGION,userPoolId:m.USER_POOL_ID,userPoolWebClientId:m.APP_CLIENT_ID,identityPoolId:m.IDENTITY_POOL_ID,authenticationFlowType:"USER_PASSWORD_AUTH"}});var g=function(){function e(){Object(p.a)(this,e)}return Object(h.a)(e,[{key:"login",value:function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.signIn(t,n);case 3:return a=e.sent,e.abrupt("return",{cognitoUser:a,username:a.getUsername()});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",void 0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getUserAttributes",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,f.a.userAttributes(t.cognitoUser);case 3:return a=e.sent,n.push.apply(n,Object(O.a)(a)),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAWSTemporaryCreds",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="cognito-idp.".concat(m.REGION,".amazonaws.com/").concat(m.USER_POOL_ID),S.config.credentials=new S.CognitoIdentityCredentials({IdentityPoolId:m.IDENTITY_POOL_ID,Logins:Object(d.a)({},n,t.getSignInUserSession().getIdToken().getJwtToken())},{region:m.REGION}),e.next=4,this.refreshCredentials();case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"refreshCredentials",value:function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){S.config.credentials.refresh((function(n){n?t(n):e()}))})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),y=n(19),w=Object(y.a)(),k=n(4),I=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",loginAttempted:!1,loginSuccesful:!1},e}return Object(h.a)(n,[{key:"onSubmit",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({loginAttempted:!0}),e.next=4,this.props.authService.login(this.state.username,this.state.password);case 4:(n=e.sent)?(this.setState({loginSuccesful:!0}),this.props.setUser(n),w.push("./profile")):(this.setState({loginSuccesful:!1}),console.log("wrong login"));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onUserChange",value:function(e){this.setState({username:e.target.value})}},{key:"onPasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){var e,t=this;return this.state.loginSuccesful?e=Object(k.jsx)("label",{children:"Login successful"}):this.state.loginAttempted&&(e=Object(k.jsx)("label",{children:"Login failed"})),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("h2",{children:"Please login!"}),Object(k.jsxs)("form",{onSubmit:function(e){return t.onSubmit(e)},children:[Object(k.jsx)("input",{onChange:function(e){return t.onUserChange(e)},placeholder:"Username...",value:this.state.username}),Object(k.jsx)("br",{}),Object(k.jsx)("input",{onChange:function(e){return t.onPasswordChange(e)},placeholder:"Password...",value:this.state.password,type:"password"}),Object(k.jsx)("br",{}),Object(k.jsx)("button",{type:"submit",children:"Login"})]}),e]})}}]),n}(r.a.Component),C=n(27),U=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e;return e=this.props.user?Object(k.jsx)(C.a,{to:"/logout",style:{float:"right"},children:this.props.user.username}):Object(k.jsx)(C.a,{to:"/login",style:{float:"right"},children:"Login"}),Object(k.jsxs)("div",{className:"navbar",children:[Object(k.jsx)(C.a,{to:"/",children:"Home"}),Object(k.jsx)(C.a,{to:"/profile",children:"Profile"}),Object(k.jsx)(C.a,{to:"/spaces",children:"Spaces"}),e]})}}]),n}(r.a.Component),P=n(13),T=n(145),N=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={userAttributes:[]},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.user){e.next=5;break}return e.next=3,this.props.authService.getUserAttributes(this.props.user);case 3:t=e.sent,this.setState({userAttributes:t});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderUserAttributes",value:function(){var e,t=[],n=Object(T.a)(this.state.userAttributes);try{for(n.s();!(e=n.n()).done;){var a=e.value;t.push(Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{children:a.Name}),Object(k.jsx)("td",{children:a.Value})]},a.Name))}}catch(r){n.e(r)}finally{n.f()}return Object(k.jsx)("table",{children:Object(k.jsx)("tbody",{children:t})})}},{key:"render",value:function(){var e;return e=this.props.user?Object(k.jsxs)("div",{children:[Object(k.jsxs)("h3",{children:["Hello ",this.props.user.username]}),Object(k.jsx)("br",{}),"Here are your attributes:",Object(k.jsx)("br",{}),this.renderUserAttributes()]}):Object(k.jsx)(C.a,{to:"login",children:"Please login"}),Object(k.jsxs)("div",{children:["This is the profile page",e]})}}]),n}(r.a.Component),E=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(k.jsx)("div",{children:"Welcome to the Home page."})}}]),n}(r.a.Component),A=n.p+"static/media/hotel.34dba7aa.jpg",_=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(k.jsxs)("div",{className:"space-component",children:[this.props.photoUrl?Object(k.jsx)("img",{src:this.props.photoUrl,alt:""}):Object(k.jsx)("img",{src:A,alt:"",style:{width:"12em",height:"15em"}}),Object(k.jsx)("br",{}),Object(k.jsx)("label",{children:this.props.name}),Object(k.jsx)("br",{}),Object(k.jsx)("label",{children:this.props.spaceId}),Object(k.jsx)("br",{}),Object(k.jsx)("label",{children:this.props.location}),Object(k.jsx)("br",{}),Object(k.jsx)("button",{onClick:function(){return e.props.reserveSpace(e.props.spaceId)},children:"Reserve"}),Object(k.jsx)("br",{})]})}}]),n}(r.a.Component),L=(n(618),n(619),function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return this.props.show?Object(k.jsx)("div",{className:"modal",children:Object(k.jsxs)("div",{className:"modal-content",children:[Object(k.jsx)("h2",{children:" You tried to reserve :"}),Object(k.jsx)("h3",{className:"modalText",children:this.props.content}),Object(k.jsx)("button",{onClick:function(){return e.props.close()},children:"Ok, Close me"})]})}):null}}]),n}(r.a.Component)),D=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={spaces:[],showModal:!1,modalContent:""},a.reserveSpace=a.reserveSpace.bind(Object(l.a)(a)),a.renderSpaces=a.renderSpaces.bind(Object(l.a)(a)),a.closeModal=a.closeModal.bind(Object(l.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.dataService.getSpaces();case 2:t=e.sent,this.setState({spaces:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"reserveSpace",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.dataService.reserveSpace(t);case 2:(n=e.sent)?this.setState({showModal:!0,modalContent:"You reserved the space with id ".concat(t," and reservation number ").concat(n)}):this.setState({showModal:!0,modalContent:"You can't reserve the space with id ".concat(t)});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"renderSpaces",value:function(){var e=this,t=[];return this.state.spaces.forEach((function(n,a){return t.push(Object(k.jsx)(_,{location:n.location,name:n.name,spaceId:n.spaceId,reserveSpace:e.reserveSpace},a))})),t}},{key:"closeModal",value:function(){this.setState({showModal:!1,modalContent:""})}},{key:"render",value:function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)("h2",{children:"Welcome to the Spaces page!"}),Object(k.jsx)(C.a,{to:"/createSpace",children:"Create space"}),Object(k.jsx)("br",{}),Object(k.jsx)("div",{className:"spaces-container",children:this.renderSpaces()}),Object(k.jsx)(L,{show:this.state.showModal,content:this.state.modalContent,close:this.closeModal})]})}}]),n}(r.a.Component);S.config.update({region:m.REGION});var R=function(){function e(){Object(p.a)(this,e),this.dataSpaces=[]}return Object(h.a)(e,[{key:"uploadPublicFile",value:function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.name,e.next=3,new S.S3({region:m.REGION}).upload({Bucket:n,Key:a,Body:t,ACL:"public-read"}).promise();case 3:return r=e.sent,e.abrupt("return",r.Location);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"createSpace",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a,r,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.photo){e.next=6;break}return e.next=3,this.uploadPublicFile(t.photo,m.SPACES_PHOTO_BUCKET);case 3:n=e.sent,t.photoURL=n,t.photo=void 0;case 6:return a=m.api.spacesUrl,r={method:"POST",body:JSON.stringify(t)},e.next=10,fetch(a,r);case 10:return s=e.sent,e.next=13,s.json();case 13:return c=e.sent,e.abrupt("return",JSON.stringify(c.id));case 15:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSpaces",value:function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.dataSpaces.push({spaceId:"1",name:"The Retro Hotel",location:"Bondi Junction"}),this.dataSpaces.push({spaceId:"2",name:"The Bondi Hotel",location:"Bondi Beach"}),this.dataSpaces.push({spaceId:"3",name:"The Earlwood Inn",location:"Other"}),this.dataSpaces.push({spaceId:"1",name:"The Retro Hotel",location:"Bondi Junction"}),this.dataSpaces.push({spaceId:"2",name:"The Bondi Hotel",location:"Bondi Beach"}),this.dataSpaces.push({spaceId:"3",name:"The Earlwood Inn",location:"Other"}),this.dataSpaces.push({spaceId:"1",name:"The Retro Hotel",location:"Bondi Junction"}),this.dataSpaces.push({spaceId:"2",name:"The Bondi Hotel",location:"Bondi Beach"}),this.dataSpaces.push({spaceId:"3",name:"The Earlwood Inn",location:"Other"}),e.abrupt("return",this.dataSpaces);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"reserveSpace",value:function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("1"!==t){e.next=4;break}return e.abrupt("return","5555");case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),B=n(146),H=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(h.a)(n,[{key:"setName",value:function(e){this.setState({name:e.target.value})}},{key:"setLocation",value:function(e){this.setState({location:e.target.value})}},{key:"setDescription",value:function(e){this.setState({description:e.target.value})}},{key:"setPhotoUrl",value:function(e){e.target.files&&e.target.files[0]&&this.setState({photo:e.target.files[0]})}},{key:"handleSubmit",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=Object(B.a)({},this.state),e.prev=2,e.next=5,this.props.dataService.createSpace(n);case 5:a=e.sent,console.log(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this;if(this.state.photo){var n=URL.createObjectURL(this.state.photo);e=Object(k.jsx)("img",{alt:"",src:n})}else e=Object(k.jsx)("div",{});return Object(k.jsxs)("form",{onSubmit:function(e){return t.handleSubmit(e)},children:[Object(k.jsxs)("label",{children:["Name:",Object(k.jsx)("br",{}),Object(k.jsx)("input",{name:"space name",value:this.state.name,onChange:function(e){return t.setName(e)}})]}),Object(k.jsx)("br",{}),Object(k.jsxs)("label",{children:["Location:",Object(k.jsx)("br",{}),Object(k.jsx)("input",{name:"space location",value:this.state.location,onChange:function(e){return t.setLocation(e)}})]}),Object(k.jsx)("br",{}),Object(k.jsxs)("label",{children:["Description:",Object(k.jsx)("br",{}),Object(k.jsx)("input",{name:"space description",value:this.state.description,onChange:function(e){return t.setDescription(e)}})]}),Object(k.jsx)("br",{}),Object(k.jsxs)("label",{children:["Photo:",Object(k.jsx)("br",{}),Object(k.jsx)("input",{name:"space name",type:"file",onChange:function(e){return t.setPhotoUrl(e)}})]}),Object(k.jsx)("br",{}),e,Object(k.jsx)("br",{}),Object(k.jsx)("input",{"data-test":"submit-button",type:"submit",value:"Create space"})]})}}]),n}(a.Component),M=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).authService=new g,a.dataService=new R,a.state={user:void 0},a.setUser=a.setUser.bind(Object(l.a)(a)),a}return Object(h.a)(n,[{key:"setUser",value:function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({user:t}),e.next=3,this.authService.getAWSTemporaryCreds(t.cognitoUser);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(k.jsx)("div",{className:"main-container",children:Object(k.jsx)(P.b,{history:w,children:Object(k.jsxs)("div",{children:[Object(k.jsx)(U,{user:this.state.user}),Object(k.jsxs)(P.c,{children:[Object(k.jsx)(P.a,{exact:!0,path:"/",component:E}),Object(k.jsx)(P.a,{exact:!0,path:"/login",children:Object(k.jsx)(I,{authService:this.authService,setUser:this.setUser})}),Object(k.jsx)(P.a,{exact:!0,path:"/profile",children:Object(k.jsx)(N,{authService:this.authService,user:this.state.user})}),Object(k.jsx)(P.a,{exact:!0,path:"/spaces",children:Object(k.jsx)(D,{dataService:this.dataService})}),Object(k.jsx)(P.a,{exact:!0,path:"/createspace",children:Object(k.jsx)(H,{dataService:this.dataService})})]})]})})})}}]),n}(r.a.Component);c.a.render(Object(k.jsx)(M,{}),document.getElementById("root"))},82:function(e,t){}},[[620,1,2]]]);
//# sourceMappingURL=main.8920f4a2.chunk.js.map