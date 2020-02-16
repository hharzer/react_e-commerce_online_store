(this.webpackJsonponline_store=this.webpackJsonponline_store||[]).push([[11],{389:function(e,a,t){"use strict";t.r(a);var n=t(2),l=t(0),o=t.n(l),r=t(5),s=t(4);function c(e){var a=Object(s.b)(),t=Object(n.a)(a,1)[0];return o.a.createElement("div",{className:"border-left border-bottom border-right p-2"},o.a.createElement("form",{className:"d-flex flex-column",name:"LogIn",onSubmit:e.handleLogInSubmit},o.a.createElement("label",{className:"d-flex flex-column"},t("LogIn|1"),o.a.createElement("input",{className:"px-1",type:"email",name:"email",value:e.email,onChange:e.handleChange,required:!0})),o.a.createElement("label",{className:"d-flex flex-column"},t("LogIn|2"),o.a.createElement("input",{className:"px-1",type:"password",name:"password",value:e.password,onChange:e.handleChange,required:!0})),o.a.createElement("div",{className:"form-check mb-2"},o.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"autoSizingCheck",ref:e.checkbox}),o.a.createElement("label",{className:"form-check-label",for:"autoSizingCheck"},t("LogIn|3"))),o.a.createElement("button",{type:"submit",className:"mt-1"},t("AuthButtons|1"))),o.a.createElement("div",{className:"dropdown-divider"}),o.a.createElement("a",{className:"dropdown-item badge badge-light",href:"/#",onClick:e.showResetPassword},t("LogIn|4")))}function i(e){var a=Object(s.b)(),t=Object(n.a)(a,1)[0];return o.a.createElement("div",{className:"border-left border-bottom border-right p-2"},o.a.createElement("form",{className:"d-flex flex-column",name:"Registration",onSubmit:e.handleRegistrationSubmit},o.a.createElement("label",{className:"d-flex flex-column"},t("LogIn|1"),o.a.createElement("input",{className:"px-1",type:"email",name:"email",value:e.email,onChange:e.handleChange,required:!0})),o.a.createElement("label",{className:"d-flex flex-column"},t("Registration|1"),o.a.createElement("input",{className:"px-1",type:"text",name:"name",value:e.name,onChange:e.handleChange,required:!0})),o.a.createElement("label",{className:"d-flex flex-column"},t("LogIn|2"),o.a.createElement("input",{className:"px-1",type:"password",name:"password",value:e.password,onChange:e.handleChange,required:!0})),o.a.createElement("label",{className:"d-flex flex-column"},t("Registration|2"),o.a.createElement("input",{className:"px-1",type:"password",name:"passwordConfirm",passwordConfirm:e.passwordConfirm,onChange:e.handleChange,required:!0})),o.a.createElement("button",{type:"submit",className:"mt-1"},t("AuthButtons|2"))))}t.d(a,"default",(function(){return d}));var m=Object(l.lazy)((function(){return t.e(12).then(t.bind(null,387))}));function d(e){var a=Object(l.useState)(!1),t=Object(n.a)(a,2),d=t[0],u=t[1],b=Object(l.useState)(""),h=Object(n.a)(b,2),p=h[0],g=h[1],f=Object(l.useState)(""),E=Object(n.a)(f,2),w=E[0],x=E[1],N=Object(l.useState)(""),v=Object(n.a)(N,2),C=v[0],k=v[1],y=Object(l.useState)(""),j=Object(n.a)(y,2),O=j[0],S=j[1],I=Object(l.useRef)(null),L=Object(s.b)(),R=Object(n.a)(L,1)[0];function A(e){"email"===e.target.name?g(e.target.value):"name"===e.target.name?x(e.target.value):"password"===e.target.name?k(e.target.value):"passwordConfirm"===e.target.name&&S(e.target.value)}return o.a.createElement(r.d,{className:"position-absolute overflow-auto",id:"outsideAuthModal",onClick:e.closeAuthModal},o.a.createElement("div",{className:"position-absolute mt-5 bg-light animated zoomInRight",id:"authModal"},d?o.a.createElement("div",{className:"d-flex justify-content-center border-left border-top border-right pt-2"},R("Authentication|2")):o.a.createElement(r.c,null,o.a.createElement("button",{type:"button",name:"signIn",className:"btn ".concat(e.isLogInTabVisible?"btn-light":"btn-white"," d-inline-block border-left border-top border-right rounded-0 px-1 shadow-none"),onClick:e.handleVisibility},R("AuthButtons|1")),o.a.createElement("button",{type:"button",name:"registration",className:"btn ".concat(e.isLogInTabVisible?"btn-white":"btn-light"," d-inline-block border-left border-top border-right rounded-0 px-1 shadow-none"),onClick:e.handleVisibility},R("Authentication|1"))),d?o.a.createElement(l.Suspense,{fallback:o.a.createElement("i",{className:"fa fa-cog fa-spin",style:{fontSize:"24px"}})},o.a.createElement(m,{hideResetPassword:function(){u(!1)}})):e.isLogInTabVisible?o.a.createElement(c,{email:p,password:C,showResetPassword:function(e){e.preventDefault(),u(!0)},handleChange:A,handleLogInSubmit:function(e){e.preventDefault(),alert("Your email is: ".concat(p,", \nyour password is: ").concat(C,", \nyou ").concat(I.current.checked?"checked":"didn't check"," checkbox."))},checkbox:I}):o.a.createElement(i,{email:p,name:w,password:C,passwordConfirm:O,handleChange:A,handleRegistrationSubmit:function(e){e.preventDefault(),C===O&&C.length>=6?alert("Your email is: ".concat(p,", \nyour name is: ").concat(w,", \nyour password is: ").concat(C,".")):C!==O?alert("Passwords should coincide."):C.length<6&&alert("Password(s) should be 6 characters minimum.")}})))}}}]);
//# sourceMappingURL=11.d05b434c.chunk.js.map