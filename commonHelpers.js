import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as S,i as h}from"./assets/vendor-77e16229.js";const p={dateTimePicker:document.querySelector("#datetime-picker"),butnStart:document.querySelector("[data-start]"),daySpan:document.querySelector("[data-days]"),hoursSpan:document.querySelector("[data-hours]"),minutesSpan:document.querySelector("[data-minutes]"),secondsSpan:document.querySelector("[data-seconds]")},{dateTimePicker:d,butnStart:s,daySpan:y,minutesSpan:b,hoursSpan:k,secondsSpan:v}=p;let a=null,c=null;const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){c=e[0],c<=new Date?(h.show({message:"Please choose a date in the future"}),s.disabled=!0):s.disabled=!1}};S("#datetime-picker",C);s.addEventListener("click",D);function D(e){a&&clearInterval(a),s.disabled=!0,d.disabled=!0,a=setInterval(()=>{const o=Date.now(),n=c-o;if(n<=0){clearInterval(a),u(0,0,0,0),d.disabled=!1;return}const t=q(n);u(t.days,t.hours,t.minutes,t.seconds)},1e3)}function q(e){const i=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:l,minutes:m,seconds:f}}function u(e,o,n,t){y.textContent=r(e),k.textContent=r(o),b.textContent=r(n),v.textContent=r(t)}function r(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map