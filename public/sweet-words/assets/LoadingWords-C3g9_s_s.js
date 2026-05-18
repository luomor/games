import{r as c,j as o,y as s,W as m}from"./index-C_9J37cg.js";import{S as p}from"./StyledWordBox-B2DfXvaa.js";import{j as f,A as u}from"./animates-umuK-DLJ.js";const h=s.section`
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
    animation: ${f} 0.5s ease-in-out;
  }
`,g=s(p)`
  height: 100%;
  padding: 0.3rem;
  animation: ${u} 0.4s ease-in-out infinite;
  border-color: rgba(222, 222, 222, 0.2);
  &:before,
  &:after {
    opacity: 0.5;
  }
`,x=/[\u4e00-\u9fa5]/g,n=[...new Set(m.join("").match(x).join("").split(""))].join("").substring(0,100);let a=0;function w({visible:i=!1,handleDone:r}){const l=t=>{let e=Math.floor(Math.random()*n.length),d=n[e];t.target.innerHTML=d};return c.useEffect(()=>(a=setTimeout(()=>{r()},1500),()=>{clearTimeout(a)}),[r]),o.jsx(h,{className:i?"visible":"hidden",children:o.jsx("div",{className:"words",children:n.split("").map((t,e)=>o.jsx(g,{onAnimationIteration:i?l:null,style:{animationDuration:`${2*Math.random()+.2}s`},children:t},`${t}-${e}`))})})}export{w as default};
