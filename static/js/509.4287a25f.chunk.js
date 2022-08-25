"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[509],{3509:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var r,o,a,i=t(9434),p=t(1212),x=t(168),c=t(9584),s=c.Z.div(r||(r=(0,x.Z)(["\n  margin-bottom: 20px;\n"]))),l=c.Z.input(o||(o=(0,x.Z)(["\n  padding: 5px 10px;\n\n  letter-spacing: 1px;\n\n  border-radius: 5px;\n  border: none;\n  box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,\n    5px 5px 15px 5px rgba(0, 0, 0, 0);\n"]))),d=c.Z.p(a||(a=(0,x.Z)(["\n  margin-top: 0px;\n  margin-bottom: 10px;\n\n  font-weight: 300;\n  letter-spacing: 1px;\n  text-align: center;\n\n  color: #000000;\n  text-shadow: 1px 1px 0 #7a7a7a;\n"]))),u=t(184);var h,f,m,g,b,w,Z=function(){var n=(0,i.v9)((function(n){return n.phonebookSlice.contacts.filter})),e=(0,i.I0)();return(0,u.jsxs)(s,{children:[(0,u.jsx)(d,{children:"Find contacts by name"}),(0,u.jsx)(l,{type:"text",onChange:function(n){return e((0,p.M)(n.currentTarget.value.toLowerCase()))},placeholder:"Search...",value:n})]})},j=t(885),v=t(2791),y=t(374),k=c.Z.form(h||(h=(0,x.Z)(["\n  width: 100%;\n  margin-bottom: 30px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  & h2 {\n    font-size: 20px;\n    margin-top: 0px;\n    letter-spacing: 2px;\n    font-weight: 300;\n    color: #000;\n\n    text-shadow: 1px 1px 0 #7a7a7a;\n  }\n\n  & button {\n    padding: 5px 20px;\n    border-radius: 5px;\n\n    background-color: #000;\n    color: white;\n    font-size: 16px;\n    line-height: 1.3;\n    letter-spacing: 1px;\n\n    border: none;\n    cursor: pointer;\n    box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,\n      5px 5px 15px 5px rgba(0, 0, 0, 0);\n    text-shadow: 0 0 10px #ffffff;\n  }\n"]))),C=c.Z.input(f||(f=(0,x.Z)(["\n  width: 100%;\n  margin-bottom: 20px;\n  padding: 5px 10px;\n  border: none;\n  border-radius: 5px;\n\n  letter-spacing: 1px;\n  color: #000;\n\n  box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,\n    5px 5px 15px 5px rgba(0, 0, 0, 0);\n"]))),z=function(){var n=(0,i.I0)(),e=(0,i.v9)((function(n){return n.phonebookSlice.contacts.items})),t=(0,v.useState)(""),r=(0,j.Z)(t,2),o=r[0],a=r[1],p=(0,v.useState)(""),x=(0,j.Z)(p,2),c=x[0],s=x[1],l=function(){return{name:o,number:c}},d=function(n){return e.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))};return(0,u.jsxs)(k,{onSubmit:function(e){e.preventDefault();var t=l();return d(t)?(alert("".concat(t.name," is already in contacts")),!1):(n(y.Z.addUserPhonebook(t)),t&&(a(""),s("")),!0)},children:[(0,u.jsx)("h2",{children:"Name"}),(0,u.jsx)(C,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Name surname",value:o,required:!0,onChange:function(n){return a(n.currentTarget.value)}}),(0,u.jsx)("h2",{children:"Phone"}),(0,u.jsx)(C,{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"+38 (099) 999-99-99",value:c,required:!0,onChange:function(n){return s(n.currentTarget.value)}}),(0,u.jsx)("button",{type:"submit",children:"Add contact"})]})},S=c.Z.div(m||(m=(0,x.Z)(["\n  width: inherit;\n\n  & p {\n    margin-top: 0px;\n    margin-bottom: 10px;\n\n    font-size: 30px;\n    font-weight: 300;\n    letter-spacing: 2px;\n    text-align: center;\n\n    color: #000000;\n    text-shadow: 1px 1px 0 #7a7a7a;\n  }\n"]))),A=c.Z.li(g||(g=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  background-color: #000000;\n  color: white;\n\n  width: inherit;\n  list-style: none;\n\n  border-radius: 5px;\n\n  box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,\n    5px 5px 15px 5px rgba(0, 0, 0, 0);\n\n  :not(:last-of-type) {\n    margin-bottom: 10px;\n  }\n\n  & p {\n    margin: 0px;\n    padding: 5px 10px;\n\n    font-size: 14px;\n    font-weight: 400;\n    letter-spacing: 1px;\n    color: white;\n\n    text-transform: capitalize;\n    text-shadow: 0 0 10px #ffffff;\n\n    & span {\n      margin-left: 20px;\n    }\n  }\n"]))),L=c.Z.ul(b||(b=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n\n  width: inherit;\n\n  margin: 0px;\n  padding: 0px;\n"]))),P=c.Z.button(w||(w=(0,x.Z)(["\n  padding: 5px 10px 5px 30px;\n\n  background-color: transparent;\n  color: white;\n  border: none;\n\n  text-shadow: 0 0 10px #ffffff;\n\n  text-transform: capitalize;\n  animation: change-color 3s linear 3 alternate;\n\n  cursor: pointer;\n\n  @keyframes change-color {\n    0% {\n      transform: scale(1);\n    }\n    50% {\n      transform: scale(1.3);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n"]))),I=t(2080);var N,T,_=function(){var n=(0,i.v9)((function(n){return n.phonebookSlice.contacts.items})),e=(0,i.v9)((function(n){return n.phonebookSlice.contacts.filter})),t=(0,i.I0)(),r=(0,i.v9)((function(n){return n.auth.isLoggedIn}));(0,v.useEffect)((function(){t(y.Z.fetchUserPhonebook())}),[t]);var o=function(){return n.filter((function(n){return n.name.toLowerCase().includes(e)}))};return(0,u.jsxs)(S,{children:[!r&&(0,u.jsx)(I.Ll,{color:"#acacac",wrapperStyle:{justifyContent:"center"}}),r&&0===o().length&&(0,u.jsx)("p",{children:" There is no user"}),r&&(0,u.jsx)(L,{children:o().map((function(n){return(0,u.jsxs)(A,{children:[(0,u.jsxs)("p",{children:[n.name,": ",n.number]}),(0,u.jsx)(P,{type:"button",onClick:function(){return e=n.id,void t(y.Z.deleteUserNotes(e));var e},children:"x"})]},n.id)}))})]})},U=c.Z.div(N||(N=(0,x.Z)(["\n  padding: 30px;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 500px;\n"]))),q=c.Z.h2(T||(T=(0,x.Z)(["\n  font-size: 30px;\n  font-weight: 300;\n  margin-top: 0px;\n  letter-spacing: 2px;\n  font-weight: 300;\n  color: #000;\n\n  text-shadow: 1px 1px 0 #7a7a7a;\n"])));var F=function(){return(0,u.jsxs)(U,{children:[(0,u.jsx)(q,{children:"Phonebook"}),(0,u.jsx)(z,{}),(0,u.jsx)(q,{children:"Contacts"}),(0,u.jsx)(Z,{}),(0,u.jsx)(_,{})]})}}}]);
//# sourceMappingURL=509.4287a25f.chunk.js.map