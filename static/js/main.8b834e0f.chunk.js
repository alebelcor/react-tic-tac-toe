(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(n,t,e){n.exports=e(29)},29:function(n,t,e){"use strict";e.r(t);var r=e(1),c=e(7),i=e(4),o=e(8),u=e(15),a=e(3),b=Object(a.a)(function(n){return n.turns},function(n){var t=n.length;return 0===t?1:1===n[t-1].player?2:1}),f=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{turns:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MARK_SPACE":return function(n,t){return{turns:[].concat(Object(u.a)(n.turns),[{player:b(n),position:t}])}}(n,t.payload.position);case"RESET":return{turns:[]};default:return n}},s=e(2),l=e(0),p=function(n,t,e,r){var c=r.includes(t),i=r.includes(e);return c&&i?[n,t,e]:null},j=function(n){for(var t=0;t<n.length;t+=1){var e=n[t];if(1===e||4===e||7===e){var r=p(e,e+1,e+2,n);if(r)return r}if(1===e||2===e||3===e){var c=p(e,e+3,e+6,n);if(c)return c}if(1===e){var i=p(e,5,9,n);if(i)return i}if(3===e){var o=p(e,5,7,n);if(o)return o}}return null},O=Object(a.a)(function(n){return n.turns.filter(function(n){return 1===n.player}).map(function(n){return n.position}).sort()},function(n){return n.turns.filter(function(n){return 2===n.player}).map(function(n){return n.position}).sort()},function(n,t){var e=j(n);if(e)return e;var r=j(t);return r||null}),h=Object(a.a)(O,function(n){return 9===n.turns.length},function(n,t){return null!==n||t}),d=Object(a.a)(O,function(n){return n.turns},function(n,t){return null===n?null:t.find(function(t){return t.position===n[0]}).player}),v=function(n){return n.turns},g=function(n,t){return t},w=function(){return Object(a.a)(v,g,function(n,t){var e=n.find(function(n){return n.position===t});return e&&e.player||null})};function m(){var n=Object(s.a)(["\n  cursor: not-allowed;\n"]);return m=function(){return n},n}function y(){var n=Object(s.a)(["\n  border: 0;\n  width: 100%;\n  height: 100%;\n  border-style: solid;\n  border-color: #211a1e;\n  background-color: #fff;\n"]);return y=function(){return n},n}function x(){var n=Object(s.a)(["\n  position: relative;\n  flex: 0 0 120px;\n  height: 120px;\n  vertical-align: middle;\n"]);return x=function(){return n},n}var k=Object(r.b)(x()),E=Object(r.b)(y()),C=Object(r.b)(m());function S(){var n=Object(s.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n"]);return S=function(){return n},n}var A=Object(r.b)(S());function M(){var n=Object(s.a)(["\n          ",";\n          ",";\n          ",";\n          ",";\n          ",";\n        "]);return M=function(){return n},n}var P=function(n){var t=n.position,e=Object(i.c)(h),c=Object(l.useMemo)(w,[]),o=Object(i.c)(function(n){return c(n,t)}),u=Object(i.b)();return Object(r.c)("li",{css:k},Object(r.c)("button",{css:Object(r.b)(M(),E,o>0?C:"",1!==t&&2!==t&&3!==t?"border-top-width: 3px;":"",3!==t&&6!==t&&9!==t?"border-right-width: 3px;":"",e?"cursor: initial;":""),type:"button","aria-describedby":"position-".concat(t),onClick:function(n){n.preventDefault(),e?u({type:"RESET"}):o>0||u(function(n){return{type:"MARK_SPACE",payload:{position:n}}}(t))}},o>0&&Object(r.c)("svg",{"aria-hidden":"true",fill:1===o?"#5bc0eb":"#c3423f",xmlns:"http://www.w3.org/2000/svg",width:"80",height:"80",viewBox:"0 0 24 24"},1===o&&Object(r.c)("path",{d:"M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"}),2===o&&Object(r.c)("path",{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"})),Object(r.c)("span",{id:"position-".concat(t),css:A},"Position ",t," of 9",o>0&&Object(r.c)("span",null,", Selected by Player ",o))))};function T(){var n=Object(s.a)(["\n  display: flex;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]);return T=function(){return n},n}var z=Object(r.b)(T()),R=function(n){var t=n.positions;return Object(r.c)("ol",{css:z},t.map(function(n){return Object(r.c)(P,{key:n,position:n})}))};function B(){var n=Object(s.a)(["\n    ",";\n    ",";\n  "]);return B=function(){return n},n}function H(){var n=Object(s.a)(["\n        ",";\n        &::before {\n          top: 82%;\n          left: 0;\n          width: 100%;\n          height: 10px;\n        }\n      "]);return H=function(){return n},n}function I(){var n=Object(s.a)(["\n        ",";\n        &::before {\n          top: 50%;\n          left: 0;\n          width: 100%;\n          height: 10px;\n        }\n      "]);return I=function(){return n},n}function D(){var n=Object(s.a)(["\n        ",";\n        &::before {\n          top: 0;\n          right: 15.3%;\n          width: 10px;\n          height: 100%;\n        }\n      "]);return D=function(){return n},n}function J(){var n=Object(s.a)(["\n        ",";\n        &::before {\n          top: -19%;\n          left: 48%;\n          width: 10px;\n          height: 138%;\n          transform: rotate(45deg);\n        }\n      "]);return J=function(){return n},n}function K(){var n=Object(s.a)(["\n        ",";\n        &::before {\n          top: 0;\n          left: 48%;\n          width: 10px;\n          height: 100%;\n        }\n      "]);return K=function(){return n},n}function _(){var n=Object(s.a)(["\n        ",";\n        &::before {\n          top: -19%;\n          right: 49%;\n          width: 10px;\n          height: 500px;\n          transform: rotate(-45deg);\n        }\n      "]);return _=function(){return n},n}function F(){var n=Object(s.a)(["\n        ",";\n        &::before {\n          top: 0;\n          left: 14%;\n          width: 10px;\n          height: 100%;\n        }\n      "]);return F=function(){return n},n}function G(){var n=Object(s.a)(["\n        ",";\n        &::before {\n          top: 15%;\n          left: 0;\n          width: 100%;\n          height: 10px;\n        }\n      "]);return G=function(){return n},n}function N(){var n=Object(s.a)(["\n  @keyframes fadeIn {\n    from {\n      opacity: 0;\n    }\n\n    to {\n      opacity: 1;\n    }\n  }\n\n  &::before {\n    position: absolute;\n    background-color: #211a1e;\n    content: '';\n    z-index: 1;\n    animation-name: fadeIn;\n    animation-duration: 400ms;\n    border-radius: 40%;\n  }\n"]);return N=function(){return n},n}function q(){var n=Object(s.a)(["\n  position: relative;\n  margin: 0 auto;\n  width: 360px;\n  text-align: center;\n"]);return q=function(){return n},n}function L(){var n=Object(s.a)(["\n  position: relative;\n  margin: 0 auto 40px;\n  width: 360px;\n"]);return L=function(){return n},n}function Q(){var n=Object(s.a)(["\n  color: #5bc0eb;\n"]);return Q=function(){return n},n}function U(){var n=Object(s.a)(["\n  margin-bottom: 40px;\n  text-align: center;\n"]);return U=function(){return n},n}var V=Object(r.b)(U()),W=Object(r.b)(Q()),X=Object(r.b)(L()),Y=Object(r.b)(q()),Z=Object(r.b)(N()),$=function(n){var t="";switch(n){case"123":t=Object(r.b)(G(),Z);break;case"147":t=Object(r.b)(F(),Z);break;case"159":t=Object(r.b)(_(),Z);break;case"258":t=Object(r.b)(K(),Z);break;case"357":t=Object(r.b)(J(),Z);break;case"369":t=Object(r.b)(D(),Z);break;case"456":t=Object(r.b)(I(),Z);break;case"789":t=Object(r.b)(H(),Z)}return Object(r.b)(B(),Z,t)};function nn(){var n=Object(s.a)(["\n        ",";\n        ",";\n      "]);return nn=function(){return n},n}function tn(){var n=Object(s.a)(["\n          ",";\n          ","\n        "]);return tn=function(){return n},n}var en=function(){var n=Object(i.c)(h),t=Object(i.c)(d),e=Object(i.c)(O),c="Click to play.";return n&&(c=null===t?"Draw. Click to play again.":"Player ".concat(t," wins. Click to play again.")),Object(r.c)(l.Fragment,null,Object(r.c)("header",{css:V},Object(r.c)("h1",null,"Tic Tac Toe"),Object(r.c)("h2",{css:Object(r.b)(tn(),W,2===t?"color: #c3423f;":"")},c)),Object(r.c)("main",{css:Object(r.b)(nn(),X,null!==e?$(e.join("")):"")},Object(r.c)(R,{positions:[1,2,3]}),Object(r.c)(R,{positions:[4,5,6]}),Object(r.c)(R,{positions:[7,8,9]})),Object(r.c)("footer",{css:Y},Object(r.c)("iframe",{src:"https://ghbtns.com/github-btn.html?user=alebelcor&repo=react-tic-tac-toe&type=star&count=false",title:"Star this repository on GitHub",frameBorder:"0",scrolling:"0",width:"55",height:"20"})))};e(28);function rn(){var n=Object(s.a)(["\n  html {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    color: #211a1e;\n  }\n"]);return rn=function(){return n},n}var cn,on=Object(r.b)(rn()),un=(cn={turns:[]},Object(o.b)(f,cn));Object(c.render)(Object(r.c)(i.a,{store:un},Object(r.c)(r.a,{styles:on}),Object(r.c)(en,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8b834e0f.chunk.js.map