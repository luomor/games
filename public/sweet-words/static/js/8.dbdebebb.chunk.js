(this["webpackJsonphoneyed-words-generator"]=this["webpackJsonphoneyed-words-generator"]||[]).push([[8],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var a=n(2),i=n(7),r=n(48),o=n(81),s=n(25),d=n(4);const c=i.c.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .words {
    background-color: rgba(108, 53, 44, 0.8);
    width: 20rem;
    min-height: 50vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    clip-path: polygon(0 0, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
  }
  &.visible .words {
    animation: ${s.k} 0.5s ease-in-out;
  }
`,l=Object(i.c)(o.a)`
  height: 100%;
  padding: 0.3rem;
  animation: ${s.a} 0.4s ease-in-out infinite;
  border-color: rgba(222, 222, 222, 0.2);
  &:before,
  &:after {
    opacity: 0.5;
  }
`,p=[...new Set(r.join("").match(/[\u4e00-\u9fa5]/g).join("").split(""))].join("").substring(0,100);let f=0;function g({visible:e=!1,handleDone:t}){const n=e=>{let t=Math.floor(Math.random()*p.length),n=p[t];e.target.innerHTML=n};return Object(a.useEffect)((()=>(f=setTimeout((()=>{t()}),1500),()=>{clearTimeout(f)})),[t]),Object(d.jsx)(c,{className:e?"visible":"hidden",children:Object(d.jsx)("div",{className:"words",children:p.split("").map(((t,a)=>Object(d.jsx)(l,{onAnimationIteration:e?n:null,style:{animationDuration:2*Math.random()+.2+"s"},children:t},`${t}-${a}`)))})})}},81:function(e,t,n){"use strict";const a=n(7).c.span`
  border: 2px solid #f1ad93;
  margin-left: -2px;
  margin-top: -2px;
  position: relative;
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
  }
  &:after {
    background-image: linear-gradient(
      90deg,
      #f1ad93,
      #f1ad93 75%,
      transparent 75%,
      transparent 100%
    );
    left: 0;
    top: 50%;
    transform: translateY(-1px);
    width: 100%;
    height: 1px;
    background-size: 4px 1px;
  }
  &:before {
    background-image: linear-gradient(
      180deg,
      #f1ad93,
      #f1ad93 75%,
      transparent 75%,
      transparent 100%
    );
    left: 50%;
    top: 0;
    transform: translateX(-1px);
    width: 1px;
    height: 100%;
    background-size: 1px 4px;
  }
`;t.a=a}}]);
//# sourceMappingURL=8.dbdebebb.chunk.js.map