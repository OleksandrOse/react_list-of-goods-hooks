(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(7),o=n.n(s),i=n(6),r=n(8),a=n(1),u=(n(13),n(14),n(3)),l=n.n(u),b=n(0),j=function(t){var e=t.goods;return Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})},h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var d=function(){var t=Object(a.useState)(!1),e=Object(i.a)(t,2),n=e[0],s=e[1],o=Object(a.useState)(c.NONE),u=Object(i.a)(o,2),d=u[0],N=u[1],O=n||d!==c.NONE,g=function(t,e,n){var s=Object(r.a)(t);return s.sort((function(t,n){switch(e){case c.ALPHABET:return t.localeCompare(n);case c.LENGTH:return t.length-n.length;default:return 0}})),n?s.reverse():s}(h,d,n);return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":d!==c.ALPHABET}),onClick:function(){N(c.ALPHABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:l()("button is-success",{"is-light":d!==c.LENGTH}),onClick:function(){N(c.LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!n}),onClick:function(){s(!n)},children:"Reverse"}),O&&Object(b.jsx)("button",{type:"button",className:l()("button is-danger",{"is-light":!O}),onClick:function(){s(!1),N(c.NONE)},children:"Reset"})]}),Object(b.jsx)(j,{goods:g})]})};o.a.render(Object(b.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7aa3de09.chunk.js.map