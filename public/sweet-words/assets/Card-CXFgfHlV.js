import{r as c,s as h,j as t,g as b,y as f}from"./index-oAA_naB0.js";import{a as x}from"./index-DVwDXbL3.js";import{I as u}from"./logo-D2qi3rTW.js";import{g as w,d as y,f as v}from"./animates-MK-Ha-ee.js";import{S as j}from"./StyledWordBox-Mjdycq6D.js";import{I}from"./heart-CAqKcttF.js";const N="/assets/lover.bg-BAEuZj5V.png",S="/assets/birds.bg-DQ36vEkw.png",D="/assets/noise.bg-Dc_Xskz3.png",$=f.section`
  z-index: 997;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;

  &.visible .card {
    animation: ${w} 0.5s;
  }
  .card {
    position: relative;
    padding: 1.8rem 2rem;
    background-color: rgba(108, 53, 44, 0.8);
    margin-top: -2rem;
    max-width: 94vw;
    box-shadow: 0 0 1rem #6c352c;
    animation-fill-mode: both;

    .dbg {
      visibility: hidden;
      position: absolute;
      &.qr {
        bottom: 0;
        right: 0.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        .tip {
          font-size: 0.5rem;
          color: #222;
          padding: 0.2rem 0;
        }
      }
      &.lover {
        bottom: 0;
        left: 0;
        width: 4rem;
        opacity: 0.6;
      }
      &.birds {
        top: 0.4rem;
        right: 0;
        width: 5rem;
        opacity: 0.5;
      }
    }

    .heart {
      position: absolute;
      animation-fill-mode: both;
      animation: ${y} 3s ease infinite alternate;
      opacity: 0;
      &.heart1 {
        transform: rotate(20deg);
        bottom: 1rem;
        right: 1rem;
        width: 3rem;
      }
      &.heart2 {
        transform: rotate(-20deg);
        bottom: 1rem;
        left: -1rem;
        width: 1rem;
      }
      &.heart3 {
        transform: rotate(-30deg);
        top: 1rem;
        left: 1rem;
        width: 2rem;
      }
      &.heart4 {
        transform: rotate(40deg);
        top: 2rem;
        right: 1.2rem;
        width: 1.5rem;
      }
      &.heart5 {
        transform: rotate(-10deg);
        bottom: 2rem;
        left: 1.2rem;
        width: 1.8rem;
      }
    }
    &.starting {
      background-image: url(${D});
      background-repeat: repeat;
      box-shadow: none;
      animation: none;
      transform: none;
      .dbg {
        visibility: visible;
        &.qr {
          opacity: 0.8;
        }
      }
      .line .word {
        color: #222;
        text-shadow: none;
      }
      * {
        animation: none;
      }
    }
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 0.8rem;
      border-radius: 50%;
      left: 0;
      bottom: -1rem;
      box-shadow: 0 30px 20px rgba(0, 0, 0, 0.2);
    }
    .line {
      margin-bottom: 1.4rem;
      display: flex;
      flex-wrap: wrap;
      font-size: 2rem;
    }
  }
`,W=f(j)`
  text-shadow: 0 0 3px rgba(2, 2, 2, 0.5);
  color: #f4b0f3;
  padding: 0.4rem;
  font-weight: 800;
  animation: ${v} 1s ease forwards;
  animation-fill-mode: both;
`,g=b("idx");let m="",s=0;function q({wordArr:a=[],visible:n=!1}){const[l,p]=c.useState("");return c.useEffect(()=>{if(n&&a.length>0){g&&(m=a[g]);const e=[...a];h(e);let o=m===""?1:e.findIndex(r=>r===m)+1,i=e[(o-1)%e.length];return p(i),s=0,window.CUR_WORDS_IDX=a.findIndex(r=>r===i),()=>{o++}}},[n,a]),t.jsx($,{className:n?"visible":"hidden",children:t.jsxs("div",{id:"HONEYED_WORDS_CARD",className:"card",children:[l.replaceAll(" ","").split("|").map((e,o)=>{let i=e.split("");return o!==0&&(s=s+l.split("|")[o-1].length),t.jsx("p",{className:"line",children:i.map((r,d)=>r!==""?t.jsx(W,{style:{animationDelay:`${.2*(s+d)}s`},className:"word",children:r},`${r}-${d}`):null)},e)}),[1,2,3,4,5].map((e,o)=>t.jsx("img",{style:{animationDelay:`${o*.3}s`},className:`heart heart${e}`,src:I,alt:"heart"},e)),t.jsxs("div",{className:"dbg qr",children:[t.jsx(x,{imageSettings:{width:10,height:10,src:u,excavate:!0},size:50,bgColor:"#f2f2f2",level:"Q",fgColor:"#000",marginSize:0,value:`${window.location.href.split("?")[0]}`}),t.jsx("div",{className:"tip",children:"土味情话"})]}),t.jsx("img",{src:N,alt:"lover",className:"dbg lover"}),t.jsx("img",{src:S,alt:"birds",className:"dbg birds"})]})})}export{q as default};
