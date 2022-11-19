"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[998],{998:function(e,s,t){t.r(s),t.d(s,{default:function(){return p}});var a=t(2791),c=t(4165),n=t(5861),r=t(885),l=t(8804),i=t(1087),d=t(1665),u=t(8287),o=t(3360),x=t(184),h=function(e){var s=(0,a.useContext)(d.V).userId,t=(0,u.x)().sendRequest,r=function(){var a=(0,n.Z)((0,c.Z)().mark((function a(){return(0,c.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t("".concat("https://help-pets-sos-backend.herokuapp.com/api","/shop"),"DELETE",JSON.stringify({userId:s,cartProductId:e.id}),{"Content-Type":"application/json"});case 3:a.next=7;break;case 5:a.prev=5,a.t0=a.catch(0);case 7:case"end":return a.stop()}}),a,null,[[0,5]])})));return function(){return a.apply(this,arguments)}}();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(l.uZ,{className:"mb-4 d-flex justify-content-between align-items-center",children:[(0,x.jsxs)(l.TK,{md:"2",lg:"2",xl:"2",children:[" ",(0,x.jsxs)(i.rU,{to:"/product/".concat(e.productId),children:[(0,x.jsx)(l.PH,{src:e.img,fluid:!0,className:"rounded-3",alt:"Product"})," "]})]}),(0,x.jsxs)(l.TK,{md:"3",lg:"3",xl:"3",children:[(0,x.jsx)(l.s4,{tag:"h4",className:"text-black",children:e.title}),(0,x.jsx)(l.s4,{tag:"h6",className:"text-muted mb-0",children:e.secondTitle})]}),(0,x.jsx)(l.TK,{md:"3",lg:"3",xl:"3",className:"d-flex align-items-center",children:(0,x.jsxs)(l.s4,{tag:"h6",className:"text-black mb-0",children:["Quantity: ",e.quantity]})}),(0,x.jsx)(l.TK,{md:"3",lg:"2",xl:"2",className:"text-end",children:(0,x.jsxs)(l.s4,{tag:"h6",className:"mb-0",children:["Price: \u20ac",e.price]})}),(0,x.jsx)(l.TK,{md:"1",lg:"1",xl:"1",className:"text-end",children:(0,x.jsx)(l.vm,{fas:!0,icon:"times",className:"text-muted",style:{cursor:"pointer"},onClick:r})})]}),(0,x.jsx)("hr",{className:"my-4"})]})};function m(){var e=(0,a.useContext)(d.V).userId,s=(0,a.useState)([]),t=(0,r.Z)(s,2),m=t[0],p=t[1],j=(0,a.useState)(0),g=(0,r.Z)(j,2),N=g[0],f=g[1],b=(0,a.useState)(0),v=(0,r.Z)(b,2),y=v[0],k=v[1],T=(0,a.useState)(0),w=(0,r.Z)(T,2),Z=w[0],C=w[1],S=(0,u.x)().sendRequest;(0,a.useEffect)((function(){var s=function(){var s=(0,n.Z)((0,c.Z)().mark((function s(){var t;return(0,c.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,S("".concat("https://help-pets-sos-backend.herokuapp.com/api","/shop/cart"),"POST",JSON.stringify({userId:e}),{"Content-Type":"application/json"});case 3:t=s.sent,p(t.products),f(t.quantity),k(parseFloat(t.totalPrice)),s.next=11;break;case 9:s.prev=9,s.t0=s.catch(0);case 11:case"end":return s.stop()}}),s,null,[[0,9]])})));return function(){return s.apply(this,arguments)}}();s()}),[S,e,m]);return(0,x.jsx)("section",{className:"h-100",children:(0,x.jsx)(l.L5,{className:"py-5 h-100",children:(0,x.jsx)(l.uZ,{className:"justify-content-center align-items-center h-100",children:(0,x.jsx)(l.TK,{size:"12",children:(0,x.jsx)(l.Yl,{className:"card-registration card-registration-2",style:{borderRadius:"15px"},children:(0,x.jsx)(l.H7,{className:"p-0",children:(0,x.jsxs)(l.uZ,{className:"g-0",children:[(0,x.jsx)(l.TK,{lg:"8",children:(0,x.jsxs)("div",{className:"p-5",children:[(0,x.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-5",children:[(0,x.jsx)(l.s4,{tag:"h1",className:"fw-bold mb-0 text-black",children:"Shopping Cart"}),(0,x.jsxs)(l.s4,{className:"mb-0 text-muted",children:[N," items"]})]}),(0,x.jsx)("hr",{className:"my-4"}),m&&m.map((function(e){return(0,x.jsx)(h,{id:e.id,productId:e.productId,img:e.imageUrl,title:e.title,secondTitle:e.secondTitle,price:e.price,quantity:e.quantity},e.id)})),(0,x.jsx)("div",{className:"pt-5",children:(0,x.jsx)(l.s4,{tag:"h6",className:"mb-0",children:(0,x.jsx)(i.rU,{to:"/",children:(0,x.jsxs)(l.Pp,{tag:"a",className:"text-body",children:[(0,x.jsx)(l.vm,{fas:!0,icon:"long-arrow-alt-left me-2"}),"Back to shop"]})})})})]})}),(0,x.jsx)(l.TK,{lg:"4",className:"bg-grey",children:(0,x.jsxs)("div",{className:"p-5",children:[(0,x.jsx)(l.s4,{tag:"h3",className:"fw-bold mb-5 mt-2 pt-1",children:"Summary"}),(0,x.jsx)("hr",{className:"my-4"}),(0,x.jsxs)("div",{className:"d-flex justify-content-between mb-4",children:[(0,x.jsxs)(l.s4,{tag:"h5",className:"text-uppercase",children:["items ",N]}),(0,x.jsxs)(l.s4,{tag:"h5",children:["\u20ac ",y]})]}),(0,x.jsx)(l.s4,{tag:"h5",className:"text-uppercase mb-3",children:"Shipping"}),(0,x.jsx)("div",{className:"mb-4 pb-2",children:(0,x.jsxs)("select",{className:"select p-2 rounded",style:{width:"100%"},onChange:function(e){C(Number(e.target.value))},children:[(0,x.jsx)("option",{value:0,children:"Free-Delivery- \u20ac0"}),"9",(0,x.jsx)("option",{value:5,children:"Standard-Delivery- \u20ac5.00"}),(0,x.jsx)("option",{value:12,children:"Fast-Delivery- \u20ac12.00"})]})}),(0,x.jsx)(l.s4,{tag:"h5",className:"text-uppercase mb-3",children:"Give code"}),(0,x.jsx)("div",{className:"mb-5",children:(0,x.jsx)(l.u2,{size:"lg",label:"Enter your code"})}),(0,x.jsx)("hr",{className:"my-4"}),(0,x.jsxs)("div",{className:"d-flex justify-content-between mb-5",children:[(0,x.jsx)(l.s4,{tag:"h5",className:"text-uppercase",children:"Total price"}),(0,x.jsxs)(l.s4,{tag:"h5",children:["\u20ac ",y+Z]})]}),(0,x.jsx)(i.rU,{to:"/checkout",children:(0,x.jsx)(o.Z,{type:"button",variant:"dark",size:"lg",children:"CHECKOUT"})})]})})]})})})})})})})}var p=function(){return(0,x.jsx)(m,{})}}}]);
//# sourceMappingURL=998.5d4182bd.chunk.js.map