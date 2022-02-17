(this["webpackJsonphoneyed-words-generator"]=this["webpackJsonphoneyed-words-generator"]||[]).push([[5,11],{101:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return p}));n(2);var i=n(7),a=n(81),o=n(88),r=n(25),s=n(80),l=n(4);const d=i.c.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .logo {
    width: 6rem;
    margin-bottom: 3rem;
    animation-fill-mode: both;

    animation: ${r.f} 2s ease-in infinite alternate;
  }
  .title {
    display: flex;
    font-size: 4rem;
    font-weight: 800;
    text-shadow: 0 0 4px black;
  }
`,c=Object(i.c)(a.a)`
  position: relative;
  margin: 0 0.4rem;
  padding: 0.3rem;
  border: 1px solid pink;
  color: #f4b0f3;
  animation: ${r.g} 1s ease forwards;
  animation-fill-mode: both;
  .pinyin {
    color: #f1ad93;
    font-size: 1.5rem;
    position: absolute;
    left: 50%;
    top: -2rem;
    transform: translateX(-50%);
    .w {
      font-family: monospace;
      text-transform: capitalize;
      animation: ${r.d} 1s;
      animation-fill-mode: both;
    }
  }
`,m=[{word:"\u751c",pinyin:"t\u01d4"},{word:"\u8a00",pinyin:"w\xe8i"},{word:"\u871c",pinyin:"q\xedng"},{word:"\u8bed",pinyin:"hu\xe0"}];function p({handleStart:t}){return Object(l.jsxs)(d,{children:[Object(l.jsx)("img",{className:"logo",src:s.a,alt:"logo"}),Object(l.jsx)("div",{className:"title",children:m.map(((t,e)=>Object(l.jsxs)(c,{style:{animationDelay:.3*e+"s"},children:[t.word,Object(l.jsx)("em",{className:"pinyin",children:Object(l.jsx)("i",{className:"w",style:{animationDelay:1.2+.3*e+"s"},children:t.pinyin})})]},t.word)))}),Object(l.jsx)(o.default,{onClick:t,children:"\u5f00\u59cb"})]})}},80:function(t,e,n){"use strict";e.a=n.p+"static/media/logo.727d3660.png"},81:function(t,e,n){"use strict";const i=n(7).c.span`
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
`;e.a=i},82:function(t,e,n){"use strict";e.a=n.p+"static/media/heart.4a218782.svg"},88:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return l}));n(2);var i=n(7),a=n(25),o=n(82),r=n(4);const s=i.c.button`
  background-color: #60322b;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 8px black;
  padding: 0.5rem 1rem;
  margin-top: 1.5rem;
  font-size: 2rem;
  animation: ${a.b} 1s;
  animation-delay: 2.8s;
  animation-fill-mode: both;
  position: relative;
  font-weight: 800;
  .heart {
    animation-fill-mode: both;
    position: absolute;
    width: 0.8rem;
    animation: ${a.c} 3s ease infinite;
    top: 0.2rem;
    right: 0.2rem;
  }
`;function l({children:t,...e}){return Object(r.jsxs)(s,{...e,children:[t,[1,2,3,4,5,6].map(((t,e)=>Object(r.jsx)("img",{style:{animationDelay:.3*e+"s"},src:o.a,alt:"heart",className:"heart"},`${t}-${e}`)))]})}}}]);
//# sourceMappingURL=5.bdee5406.chunk.js.map