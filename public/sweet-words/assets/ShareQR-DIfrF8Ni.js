import{r as a,j as e,y as r}from"./index-oAA_naB0.js";import{Q as d}from"./index-DVwDXbL3.js";import{h as c}from"./html2canvas.esm-BEj3FHp4.js";import{M as m,d as p,S as h}from"./index-zkdRzpPX.js";import{I as x}from"./logo-D2qi3rTW.js";import{h as g}from"./animates-MK-Ha-ee.js";const f=r(h)`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    width: 28px;
    height: 28px;
  }
`,u=r.div`
  z-index: 998;
  position: fixed;
  right: 1rem;
  top: 1rem;
  margin-right: 0.5rem;
`,v=r.section`
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
    animation: ${g} 1s;
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
      display: flex;
      flex-direction: column;
      align-items: center;
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
`,j=({visible:t=!1})=>{const[s,o]=a.useState("");return a.useEffect(()=>{const i=document.querySelector("#QR_DOWNLOAD");t?c(i,{onclone:n=>{n.querySelector("#QR_DOWNLOAD").classList.remove("hidden")},scale:window.devicePixelRatio*2}).then(n=>{const l=n.toDataURL();o(l),i.classList.remove("hidden")}):(o(""),i.classList.add("hidden"))},[t]),e.jsxs(v,{className:t?"visible":"hidden",children:[e.jsx("div",{className:"title",children:"👇长按或右键保存，发朋友圈或发给 TA 表白👇"}),e.jsxs("div",{className:"qr hidden",id:"QR_DOWNLOAD",children:[e.jsxs("div",{className:"img",children:[e.jsx(d,{imageSettings:{width:30,height:30,src:x,excavate:!0},size:256,bgColor:"#fff",level:"M",fgColor:"#000",includeMargin:!0,value:`${window.location.href.split("?")[0]}?idx=${window.CUR_WORDS_IDX}`}),e.jsx("div",{className:"tip",children:"💓想对你说的话，就在这里！💓"})]}),s?e.jsx("img",{className:"download",src:s}):null]})]})};function D(){const[t,s]=a.useState(!1),o=()=>{s(i=>!i)};return e.jsxs(e.Fragment,{children:[e.jsx(j,{visible:t}),e.jsx(u,{children:e.jsx(f,{className:`${t?"close":""} visible`,onClick:o,children:t?e.jsx(m,{}):e.jsx(p,{})})})]})}export{D as default};
