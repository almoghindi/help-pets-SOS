"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[216],{5310:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(885),i=t(1413),s=t(2791),r=t(8610),o=t(184),l=function(e,n){switch(n.type){case"CHANGE":return(0,i.Z)((0,i.Z)({},e),{},{value:n.val,isValid:(0,r.Gu)(n.val,n.validators)});case"TOUCH":return(0,i.Z)((0,i.Z)({},e),{},{isTouched:!0});default:return e}},c=function(e){var n=(0,s.useReducer)(l,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),t=(0,a.Z)(n,2),i=t[0],r=t[1],c=e.id,u=e.onInput,d=i.value,p=i.isValid;(0,s.useEffect)((function(){u(c,d,p)}),[c,d,p,u]);var h=function(n){r({type:"CHANGE",val:n.target.value,validators:e.validators})},v=function(){r({type:"TOUCH"})},f="input"===e.element?(0,o.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:h,onBlur:v,value:i.value}):(0,o.jsx)("textarea",{id:e.id,rows:e.rows||3,onChange:h,onBlur:v,value:i.value});return(0,o.jsxs)("div",{className:"form-control ".concat(!i.isValid&&i.isTouched&&"form-control--invalid"),children:[(0,o.jsx)("label",{htmlFor:e.id,children:e.label}),f,!i.isValid&&i.isTouched&&(0,o.jsx)("p",{children:e.errorText})]})}},9320:function(e,n,t){t.d(n,{Z:function(){return s}});t(2791);var a=t(1087),i=t(184),s=function(e){return e.href?(0,i.jsx)("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href,children:e.children}):e.to?(0,i.jsx)(a.rU,{to:e.to,exact:e.exact,className:"".concat(e.className||"button"," button--").concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),children:e.children}):(0,i.jsx)("button",{className:"".concat(e.className||"button"," button--").concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"," ").concat(e.className||"btn-primary"),type:e.type,onClick:e.onClick,disabled:e.disabled,value:e.value,children:e.children})}},9816:function(e,n,t){t.d(n,{c:function(){return l}});var a=t(885),i=t(4942),s=t(1413),r=t(2791),o=function(e,n){switch(n.type){case"INPUT_CHANGE":var t=!0;for(var a in e.inputs)e.inputs[a]&&(t=a===n.inputId?t&&n.isValid:t&&e.inputs[a].isValid);return(0,s.Z)((0,s.Z)({},e),{},{inputs:(0,s.Z)((0,s.Z)({},e.inputs),{},(0,i.Z)({},n.inputId,{value:n.value,isValid:n.isValid})),isValid:t});case"SET_DATA":return{inputs:n.inputs,isValid:n.formIsValid};default:return e}},l=function(e,n){var t=(0,r.useReducer)(o,{inputs:e,isValid:n}),i=(0,a.Z)(t,2),s=i[0],l=i[1];return[s,(0,r.useCallback)((function(e,n,t){l({type:"INPUT_CHANGE",value:n,isValid:t,inputId:e})}),[]),(0,r.useCallback)((function(e,n){l({type:"SET_DATA",inputs:e,formIsValid:n})}),[])]}},7216:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var a=t(2791),i=t(1413),s=t(4165),r=t(5861),o=t(885),l=(t(7632),t(2426)),c=t(3002);(0,l.ZF)({apiKey:"AIzaSyDZ_-gRX_iUbWTI9ScvofhHth9BXTUiCL4",authDomain:"help-pets-sos.firebaseapp.com",projectId:"help-pets-sos",storageBucket:"help-pets-sos.appspot.com",messagingSenderId:"499066324391",appId:"1:499066324391:web:390d3d851c609858352282",measurementId:"G-C52LKEQFJT"});var u=new c.hJ;u.setCustomParameters({prompt:"select_account"});var d=(0,c.v0)(),p=function(){return(0,c.rh)(d,u)},h=t(8287),v=t(9816),f=t(1665),m=t(7689),g=t(5152),x=t(1087),y=t(8610),b=t(9320),Z=t(3360),j=t(5310),N=t(184);function C(e){return(0,N.jsx)("form",{className:"AuthForm",onSubmit:e.authSubmitHandler,id:"form",children:(0,N.jsxs)("div",{className:"AuthFormContent",children:[(0,N.jsx)("h3",{className:"AuthFormTitle",children:e.loginMode?"Login":"Sign up"}),(0,N.jsxs)("div",{className:"text-center",style:{color:"cornsilk"},children:[e.loginMode?"Not registered yet?":"Already have an account ?"," ",(0,N.jsx)("span",{onClick:e.switchModeHandler,type:"reset",style:{color:"#FED550"},children:e.loginMode?"Sign up":"Login"}),e.loginMode?"":(0,N.jsx)("p",{style:{fontSize:"12px"},children:"Password must have 1 uppercase, lowercase and symbol"})]}),e.inputs&&e.inputs.map((function(n){return(0,N.jsx)("div",{className:"form-group mt-3",children:(0,N.jsx)(j.Z,{id:n,type:n,className:"form-control mt-1",placeholder:"Enter ".concat(n),onInput:e.inputHandler,element:"input",validators:[(0,y.hg)()],errorText:"Please enter a valid ".concat(n),label:"Enter ".concat(n)},n)},n)})),(0,N.jsx)("p",{style:{color:"red"},children:e.err}),(0,N.jsx)("div",{className:"d-grid gap-2 mt-3",children:(0,N.jsx)(b.Z,{type:"submit",disabled:!e.isValid,className:"btn btnPrimary",children:e.loginMode?"Login":"Sign up"})}),e.loginMode?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("div",{className:"d-grid gap-2",children:(0,N.jsxs)(Z.Z,{className:"align",variant:"light",onClick:e.handleGoogle,children:[(0,N.jsx)("i",{className:"fa-brands fa-google"})," Sign with Google"]})}),(0,N.jsxs)("p",{className:"text-center mt-2",style:{color:"cornsilk"},children:["Forgot"," ",(0,N.jsx)(x.rU,{to:"/forgetpassword",children:(0,N.jsx)("span",{className:"pass",style:{color:"#FED550"},children:"password?"})})]})]}):null]})})}var V=function(e){var n=(0,a.useContext)(f.V),t=(0,h.x)(),l=t.isLoading,c=t.sendRequest,u=(0,a.useState)(!0),d=(0,o.Z)(u,2),x=d[0],y=d[1],b=(0,a.useState)(""),Z=(0,o.Z)(b,2),j=Z[0],V=Z[1],w=(0,m.s0)(),k=(0,v.c)({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),T=(0,o.Z)(k,3),I=T[0],S=T[1],A=T[2],E=[];E=x?e.login:e.signup;var H=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(t,a,i){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c(t,"POST",JSON.stringify(a),{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"});case 3:r=e.sent,n.login(r.userId,r.token),w("/",{replace:!0}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),V(i);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n,t,a){return e.apply(this,arguments)}}(),M=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:n=e.sent,H("".concat("https://help-pets-sos-backend.herokuapp.com/api","/users/googleLogin"),{email:n.user.email,name:n.user.displayName},"Cant login, please try again");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(n){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault();try{t={},Object.keys(I.inputs).forEach((function(e){void 0!==I.inputs[e]&&(t[e]=I.inputs[e].value)})),H("".concat("https://help-pets-sos-backend.herokuapp.com/api","/users/").concat(x?"login":"signup"),t,"Cant ".concat(x?"login":"signup",", please try again"))}catch(j){V("Cant ".concat(x?"login":"signup",", please try again"))}case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)("div",{className:"AuthFormContainer",children:[l&&(0,N.jsx)(g.Z,{asOverlay:!0}),(0,N.jsx)(C,{loginMode:x,authSubmitHandler:F,switchModeHandler:function(){x?A((0,i.Z)((0,i.Z)({},I.inputs),{},{name:{value:"",isValid:!1},phone:{value:"",isValid:!1}}),!1):A((0,i.Z)((0,i.Z)({},I.inputs),{},{name:void 0,phone:void 0}),I.inputs.email.isValid&&I.inputs.password.isValid),y((function(e){return!e})),V("")},inputs:E,inputHandler:S,err:j,isValid:I.isValid,handleGoogle:M})]})})};function w(){return(0,N.jsx)(V,{login:["email","password"],signup:["email","password","name","phone"]})}},8610:function(e,n,t){t.d(n,{Gu:function(){return c},hg:function(){return l}});var a=t(7762),i="REQUIRE",s="MINLENGTH",r="MAXLENGTH",o="EMAIL",l=function(){return{type:i}},c=function(e,n){var t,l=!0,c=(0,a.Z)(n);try{for(c.s();!(t=c.n()).done;){var u=t.value;u.type===i&&(l=l&&e.trim().length>0),u.type===s&&(l=l&&e.trim().length>=u.val),u.type===r&&(l=l&&e.trim().length<=u.val),"MIN"===u.type&&(l=l&&+e>=u.val),"MAX"===u.type&&(l=l&&+e<=u.val),u.type===o&&(l=l&&/^\S+@\S+\.\S+$/.test(e))}}catch(d){c.e(d)}finally{c.f()}return l}}}]);
//# sourceMappingURL=216.038187dd.chunk.js.map