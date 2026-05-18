import{j as o,y as n}from"./index-C_9J37cg.js";import{a as i,b as s}from"./animates-umuK-DLJ.js";import{I as m}from"./heart-CAqKcttF.js";const l=n.button`
  background-color: #60322b;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 8px black;
  padding: 0.5rem 1rem;
  margin-top: 1.5rem;
  font-size: 2rem;
  animation: ${i} 1s;
  animation-delay: 2.8s;
  animation-fill-mode: both;
  position: relative;
  font-weight: 800;
  .heart {
    animation-fill-mode: both;
    position: absolute;
    width: 0.8rem;
    animation: ${s} 3s ease infinite;
    top: 0.2rem;
    right: 0.2rem;
  }
`;function d({children:a,...e}){return o.jsxs(l,{...e,children:[a,[1,2,3,4,5,6].map((r,t)=>o.jsx("img",{style:{animationDelay:`${t*.3}s`},src:m,alt:"heart",className:"heart"},`${r}-${t}`))]})}export{d as default};
