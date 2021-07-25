import { sound } from '../util/sound.js';



let timerInput = document.getElementById("time");
let buttonRun = document.getElementById("button");
let timerShow = document.getElementById("timer");

buttonRun.addEventListener('click', function(){
  let timeMinut = parseInt(timerInput.value)*60;


let  timer = setInterval(function(){
  let  seconds = timeMinut%60;
   let minuts = (timeMinut/60)%60;
   let hours = (timeMinut/60/60)%60;
 if(timeMinut<=0 ){
        clearInterval(timer);
        alert("время закончилось");
      sound();
    }else{
         let strTimer = `Отсчет: ${Math.trunc(hours)}:${Math.trunc(minuts)}:${seconds}`;
         timerShow.innerHTML = strTimer;
    }
    timeMinut--;
  
},1000)
});  
function stop() {
	window.clearInterval(window.timer);
}
function timers() {
	let elem = document.getElementById('timer');
	elem.value = parseInt(elem.value)+1;
}
