!function(){var e=document.querySelector('input[name="delay"]'),n=document.querySelector('input[name="step"]'),t=document.querySelector('input[name="amount"]');function o(e,n){var t=Math.random()>.3;return new Promise(t?function(t){setTimeout((function(){return t({position:e,delay:n})}),n)}:function(t,o){setTimeout((function(){return o({position:e,delay:n})}),n)})}document.querySelector('button[type="submit"]').addEventListener("click",(function(u){u.preventDefault(),function(e,n,t){for(var u=0;u<t;u++)o(u+1,e+u*n).then((function(e){var n=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}(parseInt(e.value,10),parseInt(n.value,10),parseInt(t.value,10))}))}();
//# sourceMappingURL=03-promises.7d7b4c89.js.map
