(this["webpackJsonphoneyed-words-generator"]=this["webpackJsonphoneyed-words-generator"]||[]).push([[2],{25:function(e,t,n){"use strict";n.d(t,"i",(function(){return b})),n.d(t,"c",(function(){return s})),n.d(t,"f",(function(){return r})),n.d(t,"j",(function(){return f})),n.d(t,"g",(function(){return o})),n.d(t,"h",(function(){return m})),n.d(t,"k",(function(){return l})),n.d(t,"e",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return u}));var i=n(7);const a=i.d`
from{
  opacity:0;
}
to{
opacity:0.7;
}
`,o=i.d`
from{
  transform:rotate(-10deg) translateX(-110px);
  opacity:0;
}
to{
opacity:1;
  transform:rotate(0) translateX(0);
}
`,r=i.d`
0%{
  transform: translateY(10px);
  opacity:0.2;
}
80%,100%{
opacity:1;
  transform: translateY(0);
}
`,s=i.d`
0%{
  transform: translateY(20px);
  opacity:0.2;
}
40%,60%{
  opacity:1;
  transform: translate3d(0,0,0);
}
70%{
  opacity:.8;
  transform: translate3d(5px,-20px,0);
}
80%{
  opacity:0.6;
  transform: translate3d(0,-30px,0);
}
90%{
  opacity:0.4;
  transform: translate3d(-5px,-40px,0);
}
100%{
  opacity:0.2;
  transform: translate3d(0,-50px,0);
}
`,c=i.d`
 0% {
    opacity: 0;
    transform: scale(0);
  }

  50% {
    opacity: 0.8;
    transform: scale(1.4);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`,d=i.d`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }

`,l=i.d`
 from {
    opacity: .2;
    transform: scale3d(0.4, 0.4, 0.4);
  }
  50% {
    opacity: 1;
  }
`,u=i.d`
  0% { opacity:0;transform: scale(0.2) rotate(0); }
  50% { opacity:0.6;transform: scale(2) rotate(30deg); }
  100% { opacity:1;transform: scale(0.5) rotate(-30deg); }
`,m=i.d`
 from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }

`,f=i.d`
 from{
  transform:translateX(100%)
}
to{
  transform:translateX(0)
}
`,b=i.d`
 from{
   opacity:0;
  transform:translateY(20px)
}
to{
   opacity:1;
  transform:translateY(0)
}
`},27:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"LoveWords"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"love_words"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"draft"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"BooleanValue",value:!1}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"remark"},arguments:[],directives:[]}]}}]}},{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"AddWords"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"content"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"remark"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"insert_love_words"},arguments:[{kind:"Argument",name:{kind:"Name",value:"objects"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"content"},value:{kind:"Variable",name:{kind:"Name",value:"content"}}},{kind:"ObjectField",name:{kind:"Name",value:"remark"},value:{kind:"Variable",name:{kind:"Name",value:"remark"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"returning"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:267}};n.loc.source={body:"query LoveWords {\n  love_words(where: { draft: { _eq: false } }) {\n    id\n    content\n    remark\n  }\n}\nmutation AddWords($content: String!, $remark: String) {\n  insert_love_words(objects: { content: $content, remark: $remark }) {\n    returning {\n      id\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function i(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){i(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){i(e,t)})),e.definitions&&e.definitions.forEach((function(e){i(e,t)}))}var a={};function o(e,t){for(var n=0;n<e.definitions.length;n++){var i=e.definitions[n];if(i.name&&i.name.value==t)return i}}function r(e,t){var n={kind:e.kind,definitions:[o(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var i=a[t]||new Set,r=new Set,s=new Set;for(i.forEach((function(e){s.add(e)}));s.size>0;){var c=s;s=new Set,c.forEach((function(e){r.has(e)||(r.add(e),(a[e]||new Set).forEach((function(e){s.add(e)})))}))}return r.forEach((function(t){var i=o(e,t);i&&n.definitions.push(i)})),n}n.definitions.forEach((function(e){if(e.name){var t=new Set;i(e,t),a[e.name.value]=t}})),e.exports=n,e.exports.LoveWords=r(n,"LoveWords"),e.exports.AddWords=r(n,"AddWords")},39:function(e,t,n){"use strict";var i=n(7),a=n(25);const o=i.c.button`
  z-index: 998;
  background-size: 1rem 1rem;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(2, 2, 2, 0.6);
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 8px black;
  padding: 1rem;
  transition: background-image 0.5s;
  &.visible {
    animation: ${a.k} 0.5s ease-in-out;
  }
`;t.a=o},40:function(e,t,n){"use strict";t.a=n.p+"static/media/close.e7ce0e9e.svg"},46:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var i=n(50);function a(e){let t=e.length;for(;t>0;){let n=Math.floor(Math.random()*t);t--;let i=e[t];e[t]=e[n],e[n]=i}return e}function o(e=""){return new i.a(location.search).get(e)||""}},48:function(e){e.exports=JSON.parse('["\u6709\u8da3\u7684\u5730\u65b9\u90fd\u60f3\u53bb\u200b|\u6bd4\u5982\u4f60\u7684\u4e16\u754c","\u6211\u60f3\u5728\u4f60\u90a3\u91cc\u4e70\u4e00\u5757\u5730|\u4e70\u4ec0\u4e48\u5730\uff1f|\u4e70\u4f60\u7684\u6b7b\u5fc3\u584c\u5730","\u4f60\u77e5\u9053\u4f60\u548c\u661f\u661f\u6709\u4ec0\u4e48\u533a\u522b\u5417\uff1f|\u661f\u661f\u5728\u5929\u4e0a|\u800c\u4f60\u5728\u6211\u5fc3\u91cc","\u6211\u5341\u62ff\u4e5d\u7a33|\u5c31\u53ea\u5dee\u4f60\u4e00\u543b\u4e86","\u53ef\u7231\u4e0d\u662f\u957f\u4e45\u4e4b\u8ba1|\u53ef\u7231\u6211\u662f","\u5c0f\u732a\u4f69\u5947|\u4f60\u914d\u6211","\u6709\u8c23\u8a00\u8bf4\u6211\u559c\u6b22\u4f60|\u6211\u6f84\u6e05\u4e00\u4e0b|\u90a3\u4e0d\u662f\u8c23\u8a00","\u53ea\u8bb8\u5dde\u5b98\u653e\u706b|\u4e0d\u8bb8\u2026|\u4e0d\u8bb8\u4f60\u79bb\u5f00\u6211","\u4f60\u6628\u5929\u665a\u4e0a\u5e94\u8be5\u5f88\u7d2f\u5427|\u56e0\u4e3a\u4f60\u5728\u6211\u68a6\u91cc\u4e00\u76f4\u8dd1\u4e2a\u4e0d\u505c","\u6211\u89c9\u5f97\u4f60\u63a5\u8fd1\u6211\u5c31\u662f\u5728\u5bb3\u6211|\u5bb3\u5f97\u6211\u597d\u559c\u6b22\u4f60\u5440","\u4f60\u4eca\u5929\u597d\u5947\u602a|\u602a\uff01\u53ef\uff01\u7231\uff01\u7684\uff01","\u6211\u89c9\u5f97\u6211\u597d\u82b1\u5fc3|\u4f60\u6bcf\u5929\u7684\u6837\u5b50\u6211\u90fd\u597d\u559c\u6b22","\u4f60\u6709\u6253\u706b\u673a\u561b\uff1f|\u6ca1\u6709\uff1f|\u90a3\u4f60\u662f\u5982\u4f55\u70b9\u71c3\u6211\u7684\u5fc3\u7684","\u6211\u8bf4\u4e0d\u6e05\u6211\u4e3a\u4ec0\u4e48\u7231\u4f60|\u6211\u53ea\u77e5\u9053|\u53ea\u8981\u6709\u4f60|\u6211\u5c31\u4e0d\u53ef\u80fd\u7231\u4e0a\u522b\u4eba","\u6211\u559c\u6b22\u4f60|\u50cf\u4f60\u5988\u6253\u4f60|\u4e0d\u8bb2\u9053\u7406","\u77e5\u9053\u4f60\u4e3a\u4ec0\u4e48\u8fd9\u4e48\u51b7\u5417\uff1f|\u56e0\u4e3a\u4f60\u6ca1\u6709\u50cf\u6211\u8fd9\u4e48\u6696\u7684\u5bf9\u8c61\u5728\u8eab\u8fb9\u554a\u3002","\u65e0\u4e8b\u732e\u6bb7\u52e4|\u975e\u2026|\u975e\u5e38\u559c\u6b22\u4f60","\u5b50\u66f0\uff1a\u4e09\u601d\u800c\u540e\u884c|1\u30012\u30013\u3001|\u55ef\uff5e\u6211\u559c\u6b22\u4f60\u3002","\u5c0f\u5973\u5b50\u4e0d\u624d|\u6390\u6307\u4e00\u7b97|\u516c\u5b50\u4eca\u751f\u7f3a\u6211","\u4f60\u6709\u5730\u56fe\u5417\uff1f|\u6211\u5728\u4f60\u7684\u773c\u775b\u91cc\u8ff7\u8def\u4e86\u3002","\u996d\u5728\u9505\u91cc|\u6211\u5728\u5e8a\u4e0a","\u4f60\u77e5\u9053\u6211\u6700\u559c\u6b22\u4ec0\u4e48\u795e\u5417\uff1f|\u662f\u4f60\u7684\u773c\u795e","\u4f60\u8981\u662f\u4e11\u70b9|\u6211\u6216\u8bb8\u53ef\u4ee5\u5e26\u4f60\u901b\u8857\u770b\u7535\u5f71\u5403\u897f\u9910\u6563\u6b65\u770b\u661f\u661f\u770b\u6708\u4eae|\u4ece\u8bd7\u8bcd\u6b4c\u8d4b\u8c08\u5230\u4eba\u751f\u54f2\u5b66|\u53ef\u4f60\u957f\u7684\u90a3\u4e48\u597d\u770b\uff0c\u8ba9\u6211\u53ea\u60f3\u548c\u4f60\u604b\u7231","\u6211\u623f\u79df\u5230\u671f\u4e86|\u53ef\u4ee5\u53bb\u4f60\u5fc3\u91cc\u4f4f\u5417\uff1f","\u8981\u662f\u6211\u548c\u4f60\u751f\u4e00\u4e2a\u5b69\u5b50\u4f60\u89c9\u5f97\u4ed6\u4f1a\u662f\u4ec0\u4e48\u5ea7\uff1f|\u4ec0\u4e48\u5ea7\uff1f\u53cc\u5b50\u5ea7\uff1f|\u4e0d\uff0c\u6211\u4eec\u7684\u6770\u4f5c\u3002","\u4f60\u53ef\u4ee5\u7b11\u4e00\u4e2a\u5417\uff1f|\u4e3a\u4ec0\u4e48\u554a\uff1f|\u56e0\u4e3a\u6211\u7684\u5496\u5561\u5fd8\u52a0\u7cd6\u4e86","\u4f60\u60f3\u559d\u70b9\u4ec0\u4e48\uff1f|\u6211\u60f3\u5475\u62a4\u4f60\u3002","\u6211\u89c9\u5f97\u4f60\u957f\u5f97\u50cf\u6211\u4e00\u4e2a\u4eb2\u621a|\uff1f\uff1f\uff1f|\u6211\u5988\u7684\u513f\u5ab3\u5987","\u4f60\u77e5\u9053\u60c5\u4eba\u773c\u91cc\u51fa\u4ec0\u4e48\u5417\uff1f|\u897f\u65bd\uff1f\uff01|\u4e0d\uff0c\u51fa\u73b0\u4f60\u3002","\u4f60\u6700\u8fd1\u662f\u4e0d\u662f\u53c8\u80d6\u4e86\uff1f|\u6ca1\u6709\u554a\uff0c\u4e3a\u4ec0\u4e48\u8fd9\u4e48\u8bf4\uff1f|\u90a3\u4f60\u4e3a\u4ec0\u4e48\u5728\u6211\u5fc3\u91cc\u7684\u5206\u91cf\u8d8a\u6765\u8d8a\u91cd\u4e86\u5462\uff1f","\u843d\u53f6\u5f52\u6839|\u4f60\u5f52\u6211","\u82e6\u6d77\u65e0\u6daf|\u56de\u5934\u662f\u6211","\u4e0d\u60f3\u649e\u5357\u5899\u4e86|\u53ea\u60f3\u649e\u649e\u5148\u751f\u80f8\u819b","\u4f60\u4e0a\u8f88\u5b50\u4e00\u5b9a\u662f\u78b3\u9178\u996e\u6599\u5427|\u4e0d\u7136\u6211\u600e\u4e48\u4e00\u770b\u5230\u4f60\u5c31\u5f00\u5fc3\u5730\u5192\u6ce1\u5462","\u4f60\u4f1a\u5f39\u94a2\u7434\u5417\uff1f|\u4e0d\u4f1a|\u90a3\u4f60\u662f\u600e\u4e48\u64a9\u52a8\u6211\u7684\u5fc3\u5f26\u7684\u5462","\u7b2c\u4e00\u6b21\u89c1\u5230\u4f60\u65f6|\u4e0a\u5e1d\u5728\u6211\u8033\u65c1\u8bf4\u4e86\u51e0\u4e2a\u5b57|\u5728\u52ab\u96be\u9003","\u4f60\u77e5\u9053\u559d\u4ec0\u4e48\u9152\u6700\u5bb9\u6613\u9189\u5417\uff1f|\u662f\u4f60\u7684\u5929\u957f\u5730\u4e45","\u4f60\u5c5e\u4ec0\u4e48\uff1f|\u6211\u5c5e\u864e\u3002|\u4f60\u4e0d\u8981\u518d\u9a97\u4eba\u4e86\uff0c\u4f60\u5c5e\u4e8e\u6211\u3002","\u4f60\u662f\u4ec0\u4e48\u661f\u5ea7?\u53cc\u5b50\u5ea7\u5417?|\u4e0d\u662f\uff0c\u6211\u662f\u4e3a\u4f60\u91cf\u8eab\u5b9a\u505a\u3002","\u4f60\u77e5\u9053\u6211\u6700\u5927\u7684\u7f3a\u70b9\u662f\u4ec0\u4e48\u5417\uff1f|\u662f\u7f3a\u70b9\u4f60","\u5982\u679c\u6211\u628a\u4f60\u63a8\u5230\u82b1\u56ed\u91cc\u9762|\u6211\u5c31\u4f1a\u627e\u4e0d\u5230\u4f60|\u56e0\u4e3a\u4f60\u50cf\u82b1\u513f\u4e00\u6837\u7f8e\u4e3d|","\u6709\u65f6\u5019\u751f\u6d3b\u6709\u4e9b\u82e6\u96be|\u4f60\u4e0d\u8981\u53bb\u62b1\u6028|\u62b1\u6211\u5c31\u597d\u4e86","\u6211\u70b9\u7684\u4e1c\u897f\u600e\u4e48\u8fd8\u6ca1\u6765\uff1f|\u4ec0\u4e48\u4e1c\u897f\uff1f|\u6211\u4eec\u7684\u672a\u6765\u3002","\u4f60\u7684\u8138\u4e0a\u6709\u70b9\u4e1c\u897f|\u6709\u4ec0\u4e48\uff1f|\u6709\u70b9\u6f02\u4eae","\u6211\u4e00\u70b9\u4e5f\u4e0d\u60f3\u4f60|\u4e00\u70b9\u534a\u518d\u60f3\u4f60","\u4f60\u77e5\u9053\u6211\u7684\u5fc3\u5728\u54ea\u8fb9\u4e48\uff1f|\u5de6\u8fb9\u554a|\u4e0d\uff0c\u5728\u4f60\u90a3\u8fb9","\u6211\u4eec\u6765\u73a9\u6728\u5934\u4eba\u4e0d\u8bb8\u52a8\u5427|\u597d\uff01\u6211\u8f93\u4e86|\u4e3a\u4ec0\u4e48\uff1f|\u56e0\u4e3a\u6211\u5fc3\u52a8\u4e86","\u83ab\u6587\u851a\u7684\u9634\u5929|\u5b59\u71d5\u59ff\u7684\u96e8\u5929|\u5468\u6770\u4f26\u7684\u6674\u5929|\u90fd\u4e0d\u5982\u4f60\u548c\u6211\u804a\u5929","\u6211\u60f3\u4f60\u5e94\u8be5\u5f88\u5fd9|\u6240\u4ee5\u4f60\u770b\u5230\u524d\u4e09\u4e2a\u5b57\u5c31\u597d\u4e86","\u751c\u6709100\u79cd\u65b9\u5f0f|\u5403\u7cd6|\u86cb\u7cd5|\u8fd8\u670998\u6b21\u60f3\u4f60","\u4f60\u77e5\u9053\u6211\u559c\u6b22\u5403\u4ec0\u4e48\u5417\uff1f|\u4e0d\u77e5\u9053|\u6211\u559c\u6b22\u75f4\u75f4\u5730\u671b\u7740\u4f60","\u4f60\u731c\u4e00\u4e0b\u6211\u662f\u4ec0\u4e48\u661f\u5ea7\uff1f|\u4e0d\u77e5\u9053|\u6211\u662f\u4ec0\u4e48\u90fd\u60f3\u4e3a\u4f60\u505a\uff01","\u4f60\u662f\u4ec0\u4e48\u8840\u578b\uff1f|A\u578b\u554a|\u4e0d\uff0c\u4f60\u662f\u6211\u7684\u7406\u60f3\u578b","\u6211\u77e5\u9053\u6709\u4e09\u4e2a\u4eba\u559c\u6b22\u4f60|\u8c01\u5440|\u6211\u5440\uff01\u6211\u5440\uff01\u6211\u5440\uff01","\u6211\u521a\u53d1\u73b0\u6211\u4eec\u6709\u4e00\u4e2a\u5171\u540c\u597d\u53cb\uff01|\u662f\u8c01\uff1f|\u4e18\u6bd4\u7279\uff01","\u6211\u548c\u4f60\u6ca1\u4ec0\u4e48\u597d\u8c08\u7684|\u9664\u4e86\u8c08\u604b\u7231","\u4e0d\u601d\u8fdb\u53d6|\u601d\u4f60","\u4f17\u751f\u7686\u82e6|\u4f60\u662f\u8349\u8393\u5473\uff01","\u89c1\u4ec0\u4e48\u4e16\u9762|\u89c1\u89c1\u4f60\u5c31\u597d\u4e86\uff01","\u597d\u597d\u7167\u987e\u81ea\u5df1\u200b\u200b\u200b\u200b|\u4e0d\u884c\u5c31\u8ba9\u6211\u6765\u7167\u987e\u4f60","\u773c\u91cc\u90fd\u662f\u4f60|\u4ebf\u4e07\u661f\u8fb0\u72b9\u4e0d\u53ca","\u6700\u8fd1\u624b\u5934\u6709\u70b9\u7d27|\u60f3\u501f\u4f60\u7684\u624b\u7275\u4e00\u7275","\u4eba\u603b\u662f\u4f1a\u53d8\u7684|\u4ece\u4e00\u5f00\u59cb\u7684\u559c\u6b22\u4f60|\u5230\u540e\u6765\u7684\u66f4\u559c\u6b22\u4f60","\u4e00\u60f3\u5230\u6628\u5929\u7684\u6211\u4e5f\u559c\u6b22\u4f60|\u4eca\u5929\u7684\u6211\u5c31\u5403\u918b\u4e86","\u5e0c\u671b\u6709\u4e00\u5929|\u4f60\u6765\u5230\u8fd9\u4e2a\u57ce\u5e02|\u662f\u56e0\u4e3a\u60f3\u8d77\u4e86\u6211","\u4f60\u4e3a\u4ec0\u4e48\u8981\u5bb3\u6211\uff1f|\u6211\u5bb3\u4f60\uff1f|\u5bb3\u6211\u8fd9\u4e48\u559c\u6b22\u4f60","\u6e38\u4e50\u56ed\u91cc\u6709\u4e2a\u53ef\u4ee5\u9a91\u5728\u4e0a\u9762\u65cb\u8f6c\u7684\uff0c\u90a3\u4e2a\u53eb\u65cb\u8f6c\u4ec0\u4e48\uff1f|\u6728\u9a6c|Mua~","\u4f60\u77e5\u9053\u725b\u8089\u8981\u600e\u4e48\u5403\u624d\u597d\u5403\u5417\uff1f|\u6211\u5582\u4f60\u5403","\u6211\u89c9\u5f97\u4f60\u8fd9\u4e2a\u4eba\u4e0d\u9002\u5408\u8c08\u604b\u7231|\u4e3a\u4ec0\u4e48\uff1f|\u4f60\u9002\u5408\u7ed3\u5a5a","\u4e00\u751f\u65e0\u5b9a|\u9047\u4f60\u4e4b\u6240|\u662f\u4e3a\u4e61","\u8981\u4e0d\u6211\u4eec\u53bb\u559d\u9152\u5427|\u559d\u6211\u4eec\u7684\u559c\u9152","\u4f60\u4e00\u5b9a\u5f88\u5b64\u72ec\u5427|\u56e0\u4e3a\u4f60\u4e00\u76f4\u4f4f\u5728\u6211\u5fc3\u91cc","\u4f60\u773c\u778e\u5417|\u649e\u6211\u5fc3\u53e3\u4e0a\u4e86","\u904d\u5730\u90fd\u662f\u6708\u5149|\u53ef\u6708\u4eae\u5c31\u4f60\u4e00\u4e2a","\u4f60\u662f\u54ea\u91cc\u4eba|\u676d\u5dde\u4eba|\u4e0d\uff0c\u4f60\u662f\u6211\u7684\u5fc3\u4e0a\u4eba","\u6211\u8fd8\u662f\u559c\u6b22\u4f60|\u50cf\u5c0f\u65f6\u5019\u5403\u8fa3\u6761|\u4e0d\u770b\u65e5\u671f","\u201c\u4f60\u80fd\u4e0d\u80fd\u95ed\u5634\u201d|\u201c\u6211\u6ca1\u6709\u8bf4\u8bdd\u554a\u201d|\u201c\u90a3\u4e3a\u4ec0\u4e48\u6211\u6ee1\u8111\u5b50\u90fd\u662f\u4f60\u2026\u201d","\u4f60\u95fb\u5230\u4ec0\u4e48\u5473\u9053\u4e86\u5417\uff1f|\u6ca1\u6709\u554a|\u600e\u4e48\u4f60\u4e00\u51fa\u6765\u7a7a\u6c14\u90fd\u662f\u751c\u7684\u4e86","\u6211\u6709\u7f6a\uff01|\u4ec0\u4e48\uff1f|\u6211\u6b63\u5728\u4f60\u7684\u82b3\u5fc3\u7eb5\u706b","\u4f60\u662f\u4e66\u5427\uff1f|\u8d8a\u770b\u8d8a\u60f3\u7761","\u6d77\u4e0a\u6708\u662f\u5929\u4e0a\u6708|\u773c\u524d\u4eba\u662f\u5fc3\u4e0a\u4eba","\u6211\u89c9\u5f97\u4f60\u597d\u50cf\u4e00\u6b3e\u6e38\u620f|\u4ec0\u4e48\u6e38\u620f?|\u6211\u7684\u4e16\u754c","\u6211\u8eab\u4f53\u5f88\u597d|\u53ef\u4ee5\u625b\u7c73\u888b\u5b50\uff0c\u625b\u7164\u6c14\u7f50|\u53ef\u5c31\u662f\u625b\u4e0d\u4f4f\u60f3\u4f60","\u4f60\u77e5\u9053\u6211\u6700\u73cd\u8d35\u7684\u662f\u4ec0\u4e48\u5417\uff1f|\u662f\u4e0a\u4e00\u53e5\u8bdd\u7684\u7b2c\u4e00\u4e2a\u5b57","\u4eca\u5929\u4e0d\u662f\u4f60\u6b7b\u5c31\u662f\u6211\u6b7b|\u4f60\u53ef\u7231\u6b7b\u4e86|\u6211\u7231\u6b7b\u4f60\u4e86","\u201c\u6d01\u767d\u7684\u5a5a\u7eb1\uff0c\u624b\u6367\u7740\u9c9c\u82b1\u201d\u8fd9\u9996\u6b4c\u6b4c\u540d\u662f\u4ec0\u4e48?|\u54b1\u4eec\u7ed3\u5a5a\u5427|\u597d\u554a\uff01","\u4f60\u53ef\u4ee5\u5e2e\u6211\u6d17\u4e00\u4e2a\u4e1c\u897f\u5417|\u6d17\u4ec0\u4e48\uff1f|\u559c\u6b22\u6211\u554a","\u5929\u6c14\u8fd9\u4e48\u51b7\uff0c\u4f60\u77e5\u9053\u600e\u4e48\u53d6\u6696\u5417\uff1f|\u4e0d\u77e5\u9053|\u6211\u4e5f\u4e0d\u77e5\u9053\uff0c\u4f46\u6211\u77e5\u9053\u600e\u4e48\u5a36\u4f60","\u8ddf\u4f60\u8bf4\u4e00\u4e2a\u574f\u6d88\u606f|\u4ec0\u4e48\u574f\u6d88\u606f\uff1f|\u6211\u5bf9\u4f60\u7684\u601d\u60f3\u5df2\u7ecf\u4e0d\u5355\u7eaf\u4e86","\u4ee5\u540e\u4f60\u7684\u53e3\u7ea2\u6211\u5305\u4e86|\u4f46\u8bb0\u5f97\u6bcf\u5929\u8fd8\u6211\u4e00\u70b9\u70b9","\u8fd9\u662f\u6821\u670d|\u8fd9\u662f\u8ff7\u5f69\u670d|\u4f60\u662f\u6211\u7684\u5c0f\u5e78\u798f","\u6211\u8ba4\u4e3a\u6211\u662f\u4e00\u4e2a\u76f4\u7537|\u4e3a\u4ec0\u4e48\uff1f|\u56e0\u4e3a\u6211\u4e00\u76f4\u7231\u7740\u4f60","\u4eca\u5929\u548c\u559c\u6b22\u7684\u4eba\u8bf4\u4e86\u4e00\u53e5\u8bdd|\u8bf4\u4e86\u5565\uff1f|\u201c\u4eca\u5929\u548c\u559c\u6b22\u7684\u4eba\u8bf4\u4e86\u4e00\u53e5\u8bdd\u201d","\u4f60\u7684\u773c\u775b\u771f\u597d\u770b\uff0c\u91cc\u9762\u85cf\u7740\u5c71\u5ddd\u6e56\u6d77\uff0c\u65e5\u6708\u661f\u8fb0|\u6211\u7684\u773c\u775b\u66f4\u597d\u770b|\u91cc\u9762\u85cf\u7740\u4f60","\u65e2\u89c1\u541b\u5b50\uff0c\u4e91\u80e1\u4e0d\u559c|\u660e\u5929\u751f\u52a8\u800c\u5177\u4f53|\u6709\u4e14\u4ec5\u6709\u4e00\u4e2a\u4f60","\u6708\u4eae\u4e0d\u4f1a\u5954\u5411\u4f60|\u4f46\u6211\u4f1a|\u4e0d\u8d1f\u4e07\u91cc\u7684\u90a3\u79cd","\u4f60\u6478\u6478\u6211\u4ec0\u4e48\u9762\u6599\u5b50|\u9762\u6599\u600e\u4e48\u4e86\uff1f|\u662f\u4e0d\u662f\u505a\u4f60\u7537\u53cb\u7684\u6599\u5b50","\u4ee5\u540e\u6211\u53ea\u80fd\u79f0\u547c\u4f60\u4e3a\u60a8\u4e86|\u56e0\u4e3a\uff0c\u4f60\u5728\u6211\u5fc3\u4e0a","\u6211\u7684\u624b\u88ab\u5212\u4e86\u4e00\u53e3\u5b50|\u4f60\u4e5f\u5212\u4e00\u4e0b|\u8fd9\u6837\u6211\u4eec\u5c31\u662f\u4e24\u53e3\u5b50\u4e86","\u571f\u8c46\u4f1a\u53d8\u6210\u571f\u8c46\u6ce5\uff0c\u731c\u731c\u6211\u4f1a\u53d8\u6210\u4ec0\u4e48\u5462\uff1f|\u4e0d\u77e5\u9053\u8bf6|\u6211\u7231\u6ce5","\u6211\u60f3\u5403\u7897\u9762|\u4ec0\u4e48\u9762\uff1f|\u4f60\u7684\u5fc3\u91cc\u9762","\u6211\u5bf9\u4f60\u7684\u7231|\u5c31\u50cf\u62d6\u62c9\u673a\u4e0a\u5c71|\u8f70\u8f70\u70c8\u70c8","\u4f60\u731c\u6211\u5750\u98de\u673a\u559c\u6b22\u9760\u8d70\u9053\u8fd8\u662f\u9760\u7a97|\u9760\u7a97\uff1f|\u4e0d\u5bf9,\u6211\u559c\u6b22\u9760\u7740\u4f60","\u5730\u7403\u548c\u592a\u9633\u90fd\u4e0d\u662f\u5b87\u5b99\u7684\u4e2d\u5fc3|\u4f60\u624d\u662f","\u6211\u5c0f\u65f6\u5019\u60f3\u6210\u4e3a\u79d1\u5b66\u5bb6\uff0c\u53ef\u73b0\u5728\u4e0d\u4e00\u6837\u4e86|\u73b0\u5728\u600e\u4e48\u4e86?|\u73b0\u5728\u60f3\u548c\u4f60\u6210\u5bb6","\u6211\u89c9\u5f97\u6211\u662f\u4e00\u4e2a\u5355\u8c03\u7684\u4eba|\u4e3a\u4ec0\u4e48\uff1f|\u56e0\u4e3a\u6211\u53ea\u559c\u6b22\u4f60","\u4f60\u731c\u6211\u7231\u559d\u9152\u8fd8\u662f\u7231\u6253\u6e38\u620f|\u7231\u6253\u6e38\u620f\u5427?|\u4e0d\uff0c\u7231\u4f60","\u4f60\u597d\u5b85\u554a|\u6ca1\u6709\u554a|\u53ef\u4f60\u5446\u5728\u6211\u7684\u5fc3\u91cc\u5c31\u6ca1\u52a8\u8fc7","\u4f60\u77e5\u9053\u4ec0\u4e48\u662f\u91cd\u8981\u5417\uff1f|\u5c31\u662f\u4f60\u65e0\u8bba\u591a\u91cd|\u6211\u90fd\u8981\u4f60\uff01"]')},66:function(e,t,n){"use strict";n.r(t);var i=n(49),a=n.n(i),o=n(2),r=n(7),s=n(27),c=n(75),d=n(46),l=n(4);const u=r.d`
0% {
    transform: rotate(0deg);
}
100%{
    transform: rotate(-360deg);
}
`,m=({countBalls:e,radius:t,angle:n,color:i="#fff",size:a=40,ballSize:o,sizeUnit:r="px"})=>{const s=[],c=o/2;for(let d=0;d<e;d++){const u=Math.sin(n*d*(Math.PI/180))*t-c,m=Math.cos(n*d*(Math.PI/180))*t-c;s.push(Object(l.jsx)(b,{countBalls:e,color:i,ballSize:o,size:a,sizeUnit:r,x:u,y:m,index:d+1},d.toString()))}return s},f=r.c.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  animation: ${u} 3s infinite ease-in;
`,b=r.c.div`
  position: absolute;
  width: ${e=>`${e.size}${e.sizeUnit}`};
  height: ${e=>`${e.size}${e.sizeUnit}`};
  animation: ${e=>r.d`
${e.size/2/e.countBalls*(e.index-1)/e.size*100}% {
    opacity: 0;
}
${(e.size/2/e.countBalls+1e-4)*(e.index-1)/e.size*100}% {
    opacity: 1;
    transform: ${`rotateZ(${0-360/e.countBalls*(e.index-2)}deg)`};
}
${(e.size/2/e.countBalls*(e.index-0)+2)/e.size*100}% {
    transform: ${`rotateZ(${0-360/e.countBalls*(e.index-1)}deg)`};
}
${(e.size/2+e.size/2/e.countBalls*(e.index-0)+2)/e.size*100}% {
    transform: ${`rotateZ(${0-360/e.countBalls*(e.index-1)}deg)`};
}
100% {
    transform: ${`rotateZ(${0-360/e.countBalls*(e.countBalls-1)}deg)`};
    opacity: 1;
}
`} 2s infinite linear;
  transform: ${e=>`rotateZ(${360/e.countBalls*e.index}deg)`};
  opacity: 0;
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0%;
    width: ${e=>`${e.ballSize}${e.sizeUnit}`};
    height: ${e=>`${e.ballSize}${e.sizeUnit}`};
    background-color: ${e=>`${e.color}`};
    transform: translateX(-50%);
    border-radius: 50%;
  }
`;var p=({size:e=40,color:t="#fff",sizeUnit:n="px"})=>{const i=e/2,a=e/8;return Object(l.jsx)(f,{size:e,sizeUnit:n,children:m({countBalls:9,radius:i,angle:40,color:t,size:e,ballSize:a,sizeUnit:n})})},v=n(73),h=n(39),g=n.p+"static/media/add.words.1e6ed29b.svg",k=n(40),j=n(25);Object(r.c)(h.a)`
  background-image: url(${g});
  &.close {
    background-image: url(${k.a});
  }
`;const x=r.c.div`
  z-index: 998;
  position: fixed;
  left: 1rem;
  top: 1rem;
  margin-right: 0.5rem;
  .tip {
    position: absolute;
    right: -4.8rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.6rem;
    background: rgba(2, 2, 2, 0.6);
    padding: 0.3rem;
    &.hidden {
      visibility: hidden;
    }
  }
`,y=r.c.section`
  z-index: 998;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 8px black;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(2, 2, 2, 0.8);
  padding: 1rem;
  &.visible {
    animation: ${j.i} 1s;
  }
  .content {
    margin-top: 1rem;
    line-height: 1.5;
    padding: 0 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .input,
    .submit {
      color: #222;
      font-size: 1.2rem;
    }
    .input {
      width: 20rem;
      margin-bottom: 1rem;
      padding: 0.4rem 0.6rem;
    }
    .submit {
      background: #fff;
      padding: 0.4rem 0.8rem;
      cursor: pointer;
      &[disabled] {
        color: #666;
      }
    }
  }
`,O=({visible:e=!1})=>{const[t,n]=Object(o.useState)(""),[i,a]=Object(o.useState)(""),[r,{data:c,loading:d,error:u}]=Object(v.a)(s.AddWords);Object(o.useEffect)((()=>{if(u){const{graphQLErrors:e}=u,{extensions:{code:t}}=e[0];"constraint-violation"==t&&alert("\u8be5\u60c5\u8bdd\u5df2\u7ecf\u6709\u5566~")}}),[u]),Object(o.useEffect)((()=>{if(c){const{insert_love_words:{returning:e}}=c;e&&e.length>0&&(alert("\u63d0\u4ea4\u6210\u529f\uff0c\u6211\u4f1a\u5c3d\u5feb\u5ba1\u6838\u5e76\u53d1\u5e03\uff0c\u60a8\u53ef\u4ee5\u7ee7\u7eed\u63d0\u4ea4"),n(""))}}),[c]);return Object(l.jsx)(y,{className:e?"visible":"hidden",children:Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("textarea",{className:"input",value:t,onChange:e=>{n(e.target.value)},name:"content",id:"content",placeholder:"\u60c5\u8bdd(\u6ce8\u610f\u65ad\u53e5\u4e0e\u6362\u884c\uff09\uff0c\u4e3e\u4f8b:\n\u5c0f\u732a\u4f69\u5947\n\u4f60\u914d\u6211",rows:"8"}),Object(l.jsx)("textarea",{className:"input",value:i,onChange:e=>{a(e.target.value)},name:"remark",id:"remark",placeholder:"\u5907\u6ce8\uff0c\u53ef\u586b\uff1a\n\u60a8\u7684\u5927\u540d/\u60c5\u8bdd\u6765\u6e90/\u60f3\u7ed9\u4f5c\u8005\u7684\u7559\u8a00/\u8054\u7cfb\u65b9\u5f0f/\u7b49\u7b49",rows:"4"}),Object(l.jsx)("button",{disabled:d||!t,className:"submit",onClick:()=>{let e=t.split("\n").filter((e=>""!==e)).join("|");r({variables:{content:e,remark:i}})},children:"\u63d0\u4ea4"})]})})};function w(){const[e,t]=Object(o.useState)(!1);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(O,{visible:e}),Object(l.jsx)(x,{})]})}var z=n(48);const S=Object(o.lazy)((()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,102)))),$=Object(o.lazy)((()=>n.e(8).then(n.bind(null,100)))),N=Object(o.lazy)((()=>n.e(11).then(n.bind(null,88)))),E=Object(o.lazy)((()=>n.e(12).then(n.bind(null,104)))),_=Object(o.lazy)((()=>Promise.all([n.e(1),n.e(9)]).then(n.bind(null,105)))),W=Object(o.lazy)((()=>Promise.all([n.e(1),n.e(0),n.e(10)]).then(n.bind(null,106)))),B=Object(o.lazy)((()=>n.e(5).then(n.bind(null,101)))),F=Object(o.lazy)((()=>n.e(7).then(n.bind(null,103)))),D=Object(r.c)(N)`
  z-index: 998;
  position: fixed;
  bottom: 0.6rem;
  left: 50%;
  width: 14rem;
  margin-left: -7rem;
  animation-delay: ${({wordCount:e})=>.3*e+"s"};
`,A=Object(d.a)("idx"),T=""!==A;var U=()=>{const{data:e,error:t}=Object(c.a)(s.LoveWords),[n,i]=Object(o.useState)([]),[a,r]=Object(o.useState)(0),[d,u]=Object(o.useState)(T),[m,f]=Object(o.useState)(!T);Object(o.useEffect)((()=>{if(t){const{graphQLErrors:e}=t,{extensions:{code:n}}=e[0]}}),[t]),Object(o.useEffect)((()=>{if(e){let t=e.love_words.map((e=>e.content));i(t);let n=""!==A?t[A].length:0;r(n)}else{let e=z;i(e);let t=""!==A?e[A].length:0;r(t)}}),[e]);return Object(l.jsxs)(o.Suspense,{fallback:Object(l.jsx)(p,{}),children:[!T&&Object(l.jsx)(F,{}),d&&!m&&!T&&Object(l.jsx)(W,{}),!m&&!T&&Object(l.jsx)(w,{}),Object(l.jsx)(E,{visible:d&&!m&&!T,handleUpdate:()=>{f(!0)}}),Object(l.jsx)(_,{visible:d&&!m&&!T}),!d&&Object(l.jsx)(B,{handleStart:()=>{u(!0),f(!0)}}),Object(l.jsx)($,{visible:d&&m,handleDone:()=>{f(!1)}}),Object(l.jsx)(S,{wordArr:n,wordsIdx:A,visible:d&&!m}),d&&!m&&T&&Object(l.jsx)(D,{wordCount:a,onClick:()=>{location.href=location.href.split("?")[0]},children:"\u6211\u4e5f\u8981\u751f\u6210"})]})},C=n(55),L=n.p+"static/media/bg.love.6a10d0c7.jpg";var V=r.a`
  ${C.a}
  *{
    box-sizing:border-box;
    outline:none;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    color:#ffffeb;
  }
  html{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family:"Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei";
  }
  body{
    -webkit-overflow-scrolling: touch;
    overflow:scroll;
    margin:0 auto;
    min-height:100vh;
    position: relative;
  }
  #root{
    min-height:100vh;
    background-image:url(${L});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
.hidden{
  visibility:hidden;
}
.visibile{
  visibility:visible;
}
  @media screen and (min-width: 320px){
      html {
          font-size: 12px;
      }
  }
  @media screen and (min-width: 375px){
      html {
          font-size: 14px;
      }
  }
  @media screen and (min-width: 480px){
      html {
          font-size: 20px;
      }
  }
  @media screen and (min-width: 768px){
      html {
          font-size: 24px;
      }
  }
`,P=n(58),M=n(56),Y=n(78),H=n(77),q=n(76);const R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e){navigator.serviceWorker.register(e).then((e=>{e.onupdatefound=()=>{const t=e.installing;t.onstatechange=()=>{"installed"===t.state&&navigator.serviceWorker.controller}}})).catch((e=>{}))}const X=Object(M.a)(((e,{headers:t})=>({headers:{...t,"x-hasura-admin-secret":Object({NODE_ENV:"production",PUBLIC_URL:"sweet-words",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_TOKEN||"test"}}))),Z=new P.a({link:X.concat(new H.a({uri:"https://g.yangerxiao.com/v1/graphql"})),cache:new Y.a});a.a.render(Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(V,{}),Object(l.jsx)(q.a,{client:Z,children:Object(l.jsx)(U,{})})]}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("sweet-words",window.location).origin!==window.location.origin)return;window.addEventListener("load",(()=>{const e="service-worker.js";R?(!function(e){fetch(e).then((t=>{404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((e=>{e.unregister().then((()=>{window.location.reload()}))})):I(e)})).catch((()=>{}))}(e),navigator.serviceWorker.ready.then((()=>{}))):I(e)}))}}()}},[[66,3,4]]]);
//# sourceMappingURL=main.ec5863ba.chunk.js.map