(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(1),j=c(6),r=c.n(j),s=c(7),i=c(4),a=(c(12),c(0)),b=function(){var t=Object(n.useState)("X"),e=Object(i.a)(t,2),c=e[0],j=e[1],r=Object(n.useState)(Array(9).fill("")),b=Object(i.a)(r,2),u=b[0],O=b[1],l=Object(n.useState)(),o=Object(i.a)(l,2),d=o[0],x=o[1],h=function(t){if(""===u[t]){var e=Object(s.a)(u);"X"===c?(e[t]="X",j("O")):(e[t]="O",j("X")),function(t){var e={rows:[[0,1,2],[3,4,5],[6,7,8]],cols:[[0,3,6],[1,4,7],[2,5,8]],diags:[[0,4,8],[2,4,6]]};for(var c in e)e[c].forEach((function(e){""===t[e[0]]||""===t[e[1]]||""===t[e[2]]||t[e[0]]===t[e[1]]&&t[e[1]]===t[e[2]]&&x(t[e[0]])}))}(e),O(e)}else alert("already clicked")},f=function(t){var e=t.num;return Object(a.jsx)("td",{onClick:function(){return h(e)},children:u[e]})};return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("table",{children:["Turn: ",c,Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)(f,{num:0}),Object(a.jsx)(f,{num:1}),Object(a.jsx)(f,{num:2})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)(f,{num:3}),Object(a.jsx)(f,{num:4}),Object(a.jsx)(f,{num:5})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)(f,{num:6}),Object(a.jsx)(f,{num:7}),Object(a.jsx)(f,{num:8})]})]})]}),d&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("h1",{children:[" ",Object(a.jsx)("span",{class:"winner",children:d})," is the Winner"]}),Object(a.jsx)("button",{onClick:function(){return x(null),void O(Array(9).fill(""))},children:"Play Again!"})]})]})};var u=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(b,{})})};r.a.render(Object(a.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.599b2df2.chunk.js.map