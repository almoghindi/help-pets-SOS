"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[102],{5310:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(885),i=a(1413),r=a(2791),s=a(8610),l=a(184),o=function(e,t){switch(t.type){case"CHANGE":return(0,i.Z)((0,i.Z)({},e),{},{value:t.val,isValid:(0,s.Gu)(t.val,t.validators)});case"TOUCH":return(0,i.Z)((0,i.Z)({},e),{},{isTouched:!0});default:return e}},c=function(e){var t=(0,r.useReducer)(o,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),a=(0,n.Z)(t,2),i=a[0],s=a[1],c=e.id,d=e.onInput,u=i.value,f=i.isValid;(0,r.useEffect)((function(){d(c,u,f)}),[c,u,f,d]);var v=function(t){s({type:"CHANGE",val:t.target.value,validators:e.validators})},p=function(){s({type:"TOUCH"})},m="input"===e.element?(0,l.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:v,onBlur:p,value:i.value}):(0,l.jsx)("textarea",{id:e.id,rows:e.rows||3,onChange:v,onBlur:p,value:i.value});return(0,l.jsxs)("div",{className:"form-control ".concat(!i.isValid&&i.isTouched&&"form-control--invalid"),children:[(0,l.jsx)("label",{htmlFor:e.id,children:e.label}),m,!i.isValid&&i.isTouched&&(0,l.jsx)("p",{children:e.errorText})]})}},9320:function(e,t,a){a.d(t,{Z:function(){return r}});a(2791);var n=a(1087),i=a(184),r=function(e){return e.href?(0,i.jsx)("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href,children:e.children}):e.to?(0,i.jsx)(n.rU,{to:e.to,exact:e.exact,className:"".concat(e.className||"button"," button--").concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),children:e.children}):(0,i.jsx)("button",{className:"".concat(e.className||"button"," button--").concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"," ").concat(e.className||"btn-primary"),type:e.type,onClick:e.onClick,disabled:e.disabled,value:e.value,children:e.children})}},2551:function(e,t,a){var n=a(885),i=a(2791),r=a(1087),s=a(5316),l=a(3360),o=a(184);t.Z=function(e){var t=(0,i.useState)(e.show),a=(0,n.Z)(t,2),c=a[0],d=a[1];return(0,o.jsxs)(s.Z,{show:c,onHide:function(){return d(!1)},variant:e.variant,children:[(0,o.jsx)(s.Z.Header,{closeButton:!0,children:(0,o.jsx)(s.Z.Title,{children:e.title})}),(0,o.jsx)(s.Z.Body,{children:e.body}),(0,o.jsxs)(s.Z.Footer,{children:[(0,o.jsx)(r.rU,{to:e.secondLink,children:(0,o.jsx)(l.Z,{variant:"secondary",onClick:function(){return d(!1)},children:e.btnSecondLink||"Close"})}),(0,o.jsx)(r.rU,{to:e.link,children:(0,o.jsx)(l.Z,{variant:"primary",onClick:function(){return d(!1)},children:e.btnLink})})]})]})}},9816:function(e,t,a){a.d(t,{c:function(){return o}});var n=a(885),i=a(4942),r=a(1413),s=a(2791),l=function(e,t){switch(t.type){case"INPUT_CHANGE":var a=!0;for(var n in e.inputs)e.inputs[n]&&(a=n===t.inputId?a&&t.isValid:a&&e.inputs[n].isValid);return(0,r.Z)((0,r.Z)({},e),{},{inputs:(0,r.Z)((0,r.Z)({},e.inputs),{},(0,i.Z)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:a});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},o=function(e,t){var a=(0,s.useReducer)(l,{inputs:e,isValid:t}),i=(0,n.Z)(a,2),r=i[0],o=i[1];return[r,(0,s.useCallback)((function(e,t,a){o({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),(0,s.useCallback)((function(e,t){o({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},9102:function(e,t,a){a.r(t),a.d(t,{default:function(){return be}});var n=a(2791),i=a(4165),r=a(5861),s=a(885),l=(a(7632),a(1665)),o=a(9816),c=a(8287),d=a(2551),u=a(184);function f(e){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(d.Z,{show:e.show,title:"Report update",body:"Woohoo, you're report sent and we take care of it !",link:"/store",btnLink:"Go to store"})})}var v=a(9743),p=a(2677),m=a(1413),h=a(5987),b=a(1694),x=a.n(b),y=a(2007),Z=a.n(y),N=["as","className","type","tooltip"],j={type:Z().string,tooltip:Z().bool,as:Z().elementType},g=n.forwardRef((function(e,t){var a=e.as,n=void 0===a?"div":a,i=e.className,r=e.type,s=void 0===r?"valid":r,l=e.tooltip,o=void 0!==l&&l,c=(0,h.Z)(e,N);return(0,u.jsx)(n,(0,m.Z)((0,m.Z)({},c),{},{ref:t,className:x()(i,"".concat(s,"-").concat(o?"tooltip":"feedback"))}))}));g.displayName="Feedback",g.propTypes=j;var I=g,k=n.createContext({}),w=a(162),V=["id","bsPrefix","className","type","isValid","isInvalid","as"],C=n.forwardRef((function(e,t){var a=e.id,i=e.bsPrefix,r=e.className,s=e.type,l=void 0===s?"checkbox":s,o=e.isValid,c=void 0!==o&&o,d=e.isInvalid,f=void 0!==d&&d,v=e.as,p=void 0===v?"input":v,b=(0,h.Z)(e,V),y=(0,n.useContext)(k).controlId;return i=(0,w.vE)(i,"form-check-input"),(0,u.jsx)(p,(0,m.Z)((0,m.Z)({},b),{},{ref:t,type:l,id:a||y,className:x()(r,i,c&&"is-valid",f&&"is-invalid")}))}));C.displayName="FormCheckInput";var T=C,E=["bsPrefix","className","htmlFor"],S=n.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,r=e.htmlFor,s=(0,h.Z)(e,E),l=(0,n.useContext)(k).controlId;return a=(0,w.vE)(a,"form-check-label"),(0,u.jsx)("label",(0,m.Z)((0,m.Z)({},s),{},{ref:t,htmlFor:r||l,className:x()(i,a)}))}));S.displayName="FormCheckLabel";var F=S,P=a(1701),R=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],L=n.forwardRef((function(e,t){var a=e.id,i=e.bsPrefix,r=e.bsSwitchPrefix,s=e.inline,l=void 0!==s&&s,o=e.reverse,c=void 0!==o&&o,d=e.disabled,f=void 0!==d&&d,v=e.isValid,p=void 0!==v&&v,b=e.isInvalid,y=void 0!==b&&b,Z=e.feedbackTooltip,N=void 0!==Z&&Z,j=e.feedback,g=e.feedbackType,V=e.className,C=e.style,E=e.title,S=void 0===E?"":E,L=e.type,H=void 0===L?"checkbox":L,A=e.label,G=e.children,z=e.as,O=void 0===z?"input":z,U=(0,h.Z)(e,R);i=(0,w.vE)(i,"form-check"),r=(0,w.vE)(r,"form-switch");var M=(0,n.useContext)(k).controlId,B=(0,n.useMemo)((function(){return{controlId:a||M}}),[M,a]),_=!G&&null!=A&&!1!==A||(0,P.XW)(G,F),W=(0,u.jsx)(T,(0,m.Z)((0,m.Z)({},U),{},{type:"switch"===H?"checkbox":H,ref:t,isValid:p,isInvalid:y,disabled:f,as:O}));return(0,u.jsx)(k.Provider,{value:B,children:(0,u.jsx)("div",{style:C,className:x()(V,_&&i,l&&"".concat(i,"-inline"),c&&"".concat(i,"-reverse"),"switch"===H&&r),children:G||(0,u.jsxs)(u.Fragment,{children:[W,_&&(0,u.jsx)(F,{title:S,children:A}),j&&(0,u.jsx)(I,{type:g,tooltip:N,children:j})]})})})}));L.displayName="FormCheck";var H=Object.assign(L,{Input:T,Label:F}),A=a(4942),G=(a(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),z=n.forwardRef((function(e,t){var a,i,r=e.bsPrefix,s=e.type,l=e.size,o=e.htmlSize,c=e.id,d=e.className,f=e.isValid,v=void 0!==f&&f,p=e.isInvalid,b=void 0!==p&&p,y=e.plaintext,Z=e.readOnly,N=e.as,j=void 0===N?"input":N,g=(0,h.Z)(e,G),I=(0,n.useContext)(k).controlId;(r=(0,w.vE)(r,"form-control"),y)?a=(0,A.Z)({},"".concat(r,"-plaintext"),!0):(i={},(0,A.Z)(i,r,!0),(0,A.Z)(i,"".concat(r,"-").concat(l),l),a=i);return(0,u.jsx)(j,(0,m.Z)((0,m.Z)({},g),{},{type:s,size:o,ref:t,readOnly:Z,id:c||I,className:x()(d,a,v&&"is-valid",b&&"is-invalid","color"===s&&"".concat(r,"-color"))}))}));z.displayName="FormControl";var O=Object.assign(z,{Feedback:I}),U=(0,a(6543).Z)("form-floating"),M=["controlId","as"],B=n.forwardRef((function(e,t){var a=e.controlId,i=e.as,r=void 0===i?"div":i,s=(0,h.Z)(e,M),l=(0,n.useMemo)((function(){return{controlId:a}}),[a]);return(0,u.jsx)(k.Provider,{value:l,children:(0,u.jsx)(r,(0,m.Z)((0,m.Z)({},s),{},{ref:t}))})}));B.displayName="FormGroup";var _=B,W=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],D=n.forwardRef((function(e,t){var a=e.as,i=void 0===a?"label":a,r=e.bsPrefix,s=e.column,l=e.visuallyHidden,o=e.className,c=e.htmlFor,d=(0,h.Z)(e,W),f=(0,n.useContext)(k).controlId;r=(0,w.vE)(r,"form-label");var v="col-form-label";"string"===typeof s&&(v="".concat(v," ").concat(v,"-").concat(s));var b=x()(o,r,l&&"visually-hidden",s&&v);return c=c||f,s?(0,u.jsx)(p.Z,(0,m.Z)({ref:t,as:"label",className:b,htmlFor:c},d)):(0,u.jsx)(i,(0,m.Z)({ref:t,className:b,htmlFor:c},d))}));D.displayName="FormLabel",D.defaultProps={column:!1,visuallyHidden:!1};var X=D,q=["bsPrefix","className","id"],J=n.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,r=e.id,s=(0,h.Z)(e,q),l=(0,n.useContext)(k).controlId;return a=(0,w.vE)(a,"form-range"),(0,u.jsx)("input",(0,m.Z)((0,m.Z)({},s),{},{type:"range",ref:t,className:x()(i,a),id:r||l}))}));J.displayName="FormRange";var Q=J,Y=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],$=n.forwardRef((function(e,t){var a=e.bsPrefix,i=e.size,r=e.htmlSize,s=e.className,l=e.isValid,o=void 0!==l&&l,c=e.isInvalid,d=void 0!==c&&c,f=e.id,v=(0,h.Z)(e,Y),p=(0,n.useContext)(k).controlId;return a=(0,w.vE)(a,"form-select"),(0,u.jsx)("select",(0,m.Z)((0,m.Z)({},v),{},{size:r,ref:t,className:x()(s,a,i&&"".concat(a,"-").concat(i),o&&"is-valid",d&&"is-invalid"),id:f||p}))}));$.displayName="FormSelect";var K=$,ee=["bsPrefix","className","as","muted"],te=n.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,i=e.as,r=void 0===i?"small":i,s=e.muted,l=(0,h.Z)(e,ee);return a=(0,w.vE)(a,"form-text"),(0,u.jsx)(r,(0,m.Z)((0,m.Z)({},l),{},{ref:t,className:x()(n,a,s&&"text-muted")}))}));te.displayName="FormText";var ae=te,ne=n.forwardRef((function(e,t){return(0,u.jsx)(H,(0,m.Z)((0,m.Z)({},e),{},{ref:t,type:"switch"}))}));ne.displayName="Switch";var ie=Object.assign(ne,{Input:H.Input,Label:H.Label}),re=["bsPrefix","className","children","controlId","label"],se=n.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,i=e.children,r=e.controlId,s=e.label,l=(0,h.Z)(e,re);return a=(0,w.vE)(a,"form-floating"),(0,u.jsxs)(_,(0,m.Z)((0,m.Z)({ref:t,className:x()(n,a),controlId:r},l),{},{children:[i,(0,u.jsx)("label",{htmlFor:r,children:s})]}))}));se.displayName="FloatingLabel";var le=se,oe=["className","validated","as"],ce={_ref:Z().any,validated:Z().bool,as:Z().elementType},de=n.forwardRef((function(e,t){var a=e.className,n=e.validated,i=e.as,r=void 0===i?"form":i,s=(0,h.Z)(e,oe);return(0,u.jsx)(r,(0,m.Z)((0,m.Z)({},s),{},{ref:t,className:x()(a,n&&"was-validated")}))}));de.displayName="Form",de.propTypes=ce;var ue=Object.assign(de,{Group:_,Control:O,Floating:U,Check:H,Switch:ie,Label:X,Text:ae,Range:Q,Select:K,FloatingLabel:le}),fe=a(8610),ve=a(9320),pe=a(5310);function me(e){return(0,u.jsxs)("form",{className:"container mt-3 mb-3",onSubmit:e.reportSubmitHandler,children:[(0,u.jsx)(v.Z,{className:"mb-3",children:e.inputs&&e.inputs.map((function(t){return(0,u.jsx)(p.Z,{sm:"12",md:"6",children:(0,u.jsxs)(ue.Group,{controlId:t,className:"col col-sm-6",children:[(0,u.jsxs)(ue.Label,{style:{fontWeight:"500"},children:["Enter ",t,":"]}),(0,u.jsx)(pe.Z,{id:t,type:t,className:"form-control",onInput:e.inputHandler,validators:[(0,fe.hg)()],element:"input"})]})})}))}),(0,u.jsxs)(v.Z,{className:"mb-3",children:[(0,u.jsx)(ue.Label,{style:{fontSize:"20px",fontWeight:"500"},children:"Enter Your Report:"}),(0,u.jsx)(pe.Z,{id:"report",type:"text",className:"form-control",onInput:e.inputHandler,validators:[(0,fe.hg)()]})]}),(0,u.jsx)(v.Z,{className:"mb-3",children:(0,u.jsxs)(ue.Group,{controlId:"formGridCheckbox",className:"col col-sm-6",children:[(0,u.jsx)(ve.Z,{type:"submit",disabled:!e.isValid,className:"me-4 btn btn-success btn-lg btn-block",children:"Submit"}),(0,u.jsx)(ve.Z,{type:"reset",className:"me-4 btn btn-danger btn-lg btn-block",to:"/",children:"Cancel"})]})})]})}var he=function(e){var t=(0,n.useContext)(l.V),a=(0,c.x)().sendRequest,d=(0,n.useState)(!1),v=(0,s.Z)(d,2),p=v[0],m=v[1],h=[],b={};t.isLoggedIn?(h=e.loginInputs,b={userId:{value:t.userId,isValid:!0},city:{value:"",isValid:!1},state:{value:"",isValid:!1},address:{value:"",isValid:!1},report:{value:"",isValid:!1}}):(h=e.noLoginInputs,b={fullname:{value:"",isValid:!1},phone:{value:"",isValid:!1},email:{value:"",isValid:!1},city:{value:"",isValid:!1},state:{value:"",isValid:!1},address:{value:"",isValid:!1},report:{value:"",isValid:!1}});var x=(0,o.c)(b,!1),y=(0,s.Z)(x,2),Z=y[0],N=y[1],j=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(t){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={},Object.keys(Z.inputs).forEach((function(e){void 0!==Z.inputs[e]&&(n[e]=Z.inputs[e].value)})),e.next=6,a("".concat("https://help-pets-sos-backend.herokuapp.com/api","/reports/createReport"),"POST",JSON.stringify(n),{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"});case 6:m(!0),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return(0,u.jsxs)(u.Fragment,{children:[p&&(0,u.jsx)(f,{show:!0}),(0,u.jsx)("h1",{style:{textAlign:"center",marginTop:"50px"},children:"LETS HELP THE PETS TOGETHER !"}),(0,u.jsx)("h4",{style:{textAlign:"center",marginBottom:"50px"},children:"Report the event and let's save the pets we all love"}),(0,u.jsx)(me,{inputs:h,reportSubmitHandler:j,inputHandler:N,isValid:Z.isValid})]})};function be(){return(0,u.jsx)(he,{loginInputs:["city","state","address"],noLoginInputs:["fullname","phone","email","city","state","address"]})}},8610:function(e,t,a){a.d(t,{Gu:function(){return c},hg:function(){return o}});var n=a(7762),i="REQUIRE",r="MINLENGTH",s="MAXLENGTH",l="EMAIL",o=function(){return{type:i}},c=function(e,t){var a,o=!0,c=(0,n.Z)(t);try{for(c.s();!(a=c.n()).done;){var d=a.value;d.type===i&&(o=o&&e.trim().length>0),d.type===r&&(o=o&&e.trim().length>=d.val),d.type===s&&(o=o&&e.trim().length<=d.val),"MIN"===d.type&&(o=o&&+e>=d.val),"MAX"===d.type&&(o=o&&+e<=d.val),d.type===l&&(o=o&&/^\S+@\S+\.\S+$/.test(e))}}catch(u){c.e(u)}finally{c.f()}return o}},2391:function(e){var t=function(){};e.exports=t},7632:function(){},7762:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(181);function i(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=(0,n.Z)(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,l=!0,o=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return l=e.done,e},e:function(e){o=!0,s=e},f:function(){try{l||null==a.return||a.return()}finally{if(o)throw s}}}}}}]);
//# sourceMappingURL=102.30da3f76.chunk.js.map