(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{19:function(e,c,t){},22:function(e,c,t){"use strict";t.r(c);var s=t(1),n=t(7),r=t.n(n),i=t(10),a=t(11),o=t(2),j=function(e){switch(e.choice){case"cross":return Object(o.jsx)(a.b,{className:"icon"});case"circle":return Object(o.jsx)(a.a,{className:"icon"});default:return""}},l=t(8),b=(t(17),t(24)),u=t(25),d=t(26),O=t(27),h=t(28),x=(t(18),t(19),new Array(9).fill("")),m=function(){var e=Object(s.useState)(!0),c=Object(i.a)(e,2),t=c[0],n=c[1],r=Object(s.useState)(""),a=Object(i.a)(r,2),m=a[0],f=a[1],p=function(e){return m?Object(l.b)("game over dude",{type:"success"}):""!=x[e]?Object(l.b)("game over dude",{type:"error"}):(x[e]=t?"cross":"circle",n(!t),void((x[0]==x[1]&&x[0]==x[2]&&""!=x[0]||x[3]==x[4]&&x[3]==x[5]&&""!=x[3]||x[6]==x[7]&&x[7]==x[8]&&""!=x[7]||x[0]==x[3]&&x[3]==x[6]&&""!=x[6]||x[1]==x[4]&&x[7]==x[4]&&""!=x[7]||x[2]==x[5]&&x[5]==x[8]&&""!=x[8]||x[0]==x[4]&&x[4]==x[8]&&""!=x[8]||x[2]==x[4]&&x[4]==x[6]&&""!=x[6])&&f(x[0]+"won")))};return Object(o.jsxs)(b.a,{className:"p-5",children:[Object(o.jsx)(l.a,{position:"button-center"}),Object(o.jsx)(u.a,{children:Object(o.jsxs)(d.a,{md:6,className:"offset-md-3",children:[m?Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"text-center",children:m}),Object(o.jsx)("button",{onClick:function(){n(!0),f(""),x.fill(""),console.log("hello")},children:"Play Again"})]}):Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:t?"cross's turn":"circle turn"})}),Object(o.jsx)("div",{className:"grid",children:x.map((function(e,c){return Object(o.jsx)(O.a,{onClick:function(){return p(c)},children:Object(o.jsx)(h.a,{className:"box",children:Object(o.jsx)(j,{choice:x[c]})})})}))})]})})]})};r.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.b8eb970a.chunk.js.map