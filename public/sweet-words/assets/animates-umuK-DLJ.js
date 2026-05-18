import{O as t}from"./index-C_9J37cg.js";const o=t`
from{
  opacity:0;
}
to{
opacity:0.7;
}
`,r=t`
from{
  transform:rotate(-10deg) translateX(-110px);
  opacity:0;
}
to{
opacity:1;
  transform:rotate(0) translateX(0);
}
`,s=t`
0%{
  transform: translateY(10px);
  opacity:0.2;
}
80%,100%{
opacity:1;
  transform: translateY(0);
}
`,n=t`
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
`,i=t`
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
`,c=t`
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

`,e=t`
 from {
    opacity: .2;
    transform: scale3d(0.4, 0.4, 0.4);
  }
  50% {
    opacity: 1;
  }
`,m=t`
  0% { opacity:0;transform: scale(0.2) rotate(0); }
  50% { opacity:0.6;transform: scale(2) rotate(30deg); }
  100% { opacity:1;transform: scale(0.5) rotate(-30deg); }
`,f=t`
 from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }

`,p=t`
 from{
  transform:translateX(100%)
}
to{
  transform:translateX(0)
}
`,l=t`
 from{
   opacity:0;
  transform:translateY(20px)
}
to{
   opacity:1;
  transform:translateY(0)
}
`;export{m as A,c as a,n as b,i as c,o as d,s as e,r as f,f as g,l as h,p as i,e as j};
