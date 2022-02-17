(this["webpackJsonphoneyed-words-generator"]=this["webpackJsonphoneyed-words-generator"]||[]).push([[10],{106:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return j}));var n=i(2),s=i(7),o=i(83),a=i.n(o),r=i(89),c=i.n(r),d=i(39),l=i.p+"static/media/share.57eda76d.svg",m=i(80),g=i(40),b=i(25),h=i(4);Object(s.c)(d.a)`
  background-image: url(${l});
  &.close {
    background-image: url(${g.a});
  }
`;const u=s.c.div`
  z-index: 998;
  position: fixed;
  right: 1rem;
  top: 1rem;
  margin-right: 0.5rem;
  .tip {
    position: absolute;
    left: -4.8rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.6rem;
    background: rgba(2, 2, 2, 0.6);
    padding: 0.3rem;
    animation: ${b.e} 1s ease alternate;
    animation-iteration-count: 8;
  }
`,p=s.c.section`
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
  padding: 1rem;
  &.visible {
    animation: ${b.i} 1s;
  }
  .title {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
  .qr {
    width: 14rem;
    background: #fff;
    position: relative;
    .img {
      padding-bottom: 10px;
      svg {
        width: 100% !important;
        height: 100% !important;
      }
      .tip {
        color: #000;
        font-weight: 800;
        font-size: 0.8rem;
        text-align: center;
      }
    }
    .download {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`,f=({visible:e=!1})=>{const[t,i]=Object(n.useState)("");return Object(n.useEffect)((()=>{const t=document.querySelector("#QR_DOWNLOAD");e?c()(t,{debug:!1,onclone:e=>{e.querySelector("#QR_DOWNLOAD").classList.remove("hidden")},scale:2*window.devicePixelRatio}).then((e=>{const n=e.toDataURL();i(n),t.classList.remove("hidden")})):(i(""),t.classList.add("hidden"))}),[e]),Object(h.jsxs)(p,{className:e?"visible":"hidden",children:[Object(h.jsx)("div",{className:"title",children:"\ud83d\udc47\u957f\u6309\u6216\u53f3\u952e\u4fdd\u5b58\uff0c\u53d1\u670b\u53cb\u5708\u6216\u53d1\u7ed9TA\u8868\u767d\ud83d\udc47"}),Object(h.jsxs)("div",{className:"qr hidden",id:"QR_DOWNLOAD",children:[Object(h.jsxs)("div",{className:"img",children:[Object(h.jsx)(a.a,{renderAs:"canvas",imageSettings:{width:30,height:30,src:m.a,excavate:!0},size:256,bgColor:"#fff",level:"M",fgColor:"#000",includeMargin:!0,value:`${window.location.href.split("?")[0]}?idx=${window.CUR_WORDS_IDX}`}),Object(h.jsx)("div",{className:"tip",children:"\ud83d\udc93\u60f3\u5bf9\u4f60\u8bf4\u7684\u8bdd\uff0c\u5c31\u5728\u8fd9\u91cc\uff01\ud83d\udc93"})]}),t?Object(h.jsx)("img",{className:"download",src:t}):null]})]})};function j(){const[e,t]=Object(n.useState)(!1);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{visible:e}),Object(h.jsx)(u,{})]})}},80:function(e,t,i){"use strict";t.a=i.p+"static/media/logo.727d3660.png"}}]);
//# sourceMappingURL=10.4561b00f.chunk.js.map