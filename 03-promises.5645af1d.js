const e=document.querySelector('input[name="delay"]'),t=document.querySelector('input[name="step"]'),n=document.querySelector('input[name="amount"]');function o(e,t){const n=Math.random()>.3;return new Promise(n?n=>{setTimeout((()=>n({position:e,delay:t})),t)}:(n,o)=>{setTimeout((()=>o({position:e,delay:t})),t)})}document.querySelector('button[type="submit"]').addEventListener("click",(function(i){i.preventDefault();!function(e,t,n){for(let i=0;i<n;i++)o(i+1,e+i*t).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}(parseInt(e.value,10),parseInt(t.value,10),parseInt(n.value,10))}));
//# sourceMappingURL=03-promises.5645af1d.js.map
