import{j as i,y as n}from"./index-oAA_naB0.js";import{S as a}from"./StyledWordBox-Mjdycq6D.js";import r from"./StartButton-CmvENDc0.js";import{e as s,f as l,c as m}from"./animates-MK-Ha-ee.js";import{I as d}from"./logo-D2qi3rTW.js";import"./heart-CAqKcttF.js";const p=n.header`
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

    animation: ${s} 2s ease-in infinite alternate;
  }
  .title {
    display: flex;
    font-size: 4rem;
    font-weight: 800;
    text-shadow: 0 0 4px black;
  }
`,f=n(a)`
  position: relative;
  margin: 0 0.4rem;
  padding: 0.3rem;
  border: 1px solid pink;
  color: #f4b0f3;
  animation: ${l} 1s ease forwards;
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
      animation: ${m} 1s;
      animation-fill-mode: both;
    }
  }
`,c=[{word:"甜",pinyin:"tǔ"},{word:"言",pinyin:"wèi"},{word:"蜜",pinyin:"qíng"},{word:"语",pinyin:"huà"}];function j({handleStart:e}){return i.jsxs(p,{children:[i.jsx("img",{className:"logo",src:d,alt:"logo"}),i.jsx("div",{className:"title",children:c.map((o,t)=>i.jsxs(f,{style:{animationDelay:`${.3*t}s`},children:[o.word,i.jsx("em",{className:"pinyin",children:i.jsx("i",{className:"w",style:{animationDelay:`${1.2+.3*t}s`},children:o.pinyin})})]},o.word))}),i.jsx(r,{onClick:e,children:"开始"})]})}export{j as default};
