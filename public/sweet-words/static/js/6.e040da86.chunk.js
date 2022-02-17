(this["webpackJsonphoneyed-words-generator"]=this["webpackJsonphoneyed-words-generator"]||[]).push([[6],{102:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return v}));var a=i(2),r=i(7),n=i(83),o=i.n(n),s=i(46),d=i(80),l=i.p+"static/media/lover.bg.963db993.png",c=i.p+"static/media/birds.bg.639577a2.png",m=i(25),b=i(81),p=i(82),g=i.p+"static/media/noise.bg.fcbd49a5.png",f=i(4);const h=r.c.section`
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
    animation: ${m.h} 0.5s;
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
      animation: ${m.e} 3s ease infinite alternate;
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
      background-image: url(${g});
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
`,x=Object(r.c)(b.a)`
  text-shadow: 0 0 3px rgba(2, 2, 2, 0.5);
  color: #f4b0f3;
  padding: 0.4rem;
  font-weight: 800;
  animation: ${m.g} 1s ease forwards;
  animation-fill-mode: both;
`,u=Object(s.a)("idx");let w="",j=0;function v({wordArr:e=[],visible:t=!1}){const[i,r]=Object(a.useState)("");return Object(a.useEffect)((()=>{if(t&&e.length>0){u&&(w=e[u]);const t=[...e];Object(s.b)(t);let i=""===w?1:t.findIndex((e=>e===w))+1,a=t[(i-1)%t.length];return r(a),j=0,window.CUR_WORDS_IDX=e.findIndex((e=>e===a)),()=>{i++}}}),[t,e]),Object(f.jsx)(h,{className:t?"visible":"hidden",children:Object(f.jsxs)("div",{id:"HONEYED_WORDS_CARD",className:"card",children:[i.split("|").map(((e,t)=>{let a=e.split("");return 0!==t&&(j+=i.split("|")[t-1].length),Object(f.jsx)("p",{className:"line",children:a.map(((e,t)=>""!==e?Object(f.jsx)(x,{style:{animationDelay:.2*(j+t)+"s"},className:"word",children:e},`${e}-${t}`):null))},e)})),[1,2,3,4,5].map(((e,t)=>Object(f.jsx)("img",{style:{animationDelay:.3*t+"s"},className:`heart heart${e}`,src:p.a,alt:"heart"},e))),Object(f.jsxs)("div",{className:"dbg qr",children:[Object(f.jsx)(o.a,{renderAs:"svg",imageSettings:{width:10,height:10,src:d.a,excavate:!0},size:50,bgColor:"#f2f2f2",level:"Q",fgColor:"#000",includeMargin:!1,value:`${window.location.href.split("?")[0]}`}),Object(f.jsx)("div",{className:"tip",children:"\u571f\u5473\u60c5\u8bdd"})]}),Object(f.jsx)("img",{src:l,alt:"lover",className:"dbg lover"}),Object(f.jsx)("img",{src:c,alt:"birds",className:"dbg birds"})]})})}},80:function(e,t,i){"use strict";t.a=i.p+"static/media/logo.727d3660.png"},81:function(e,t,i){"use strict";const a=i(7).c.span`
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
`;t.a=a},82:function(e,t,i){"use strict";t.a=i.p+"static/media/heart.4a218782.svg"}}]);
//# sourceMappingURL=6.e040da86.chunk.js.map