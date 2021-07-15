let timerInput = document.getElementById("time");
let buttonRun = document.getElementById("button");
let timerShow = document.getElementById("timer");
//let timeMinut;


buttonRun.addEventListener('click', function(){
    timeMinut = parseInt(timerInput.value)*60
});

  timer = setInterval(function(){
    seconds = timeMinut%60;
    minuts = timeMinut/60%60;
    hours = timeMinut/60/60%60;

    if(timeMinut<=0){
        clearInterval(timer);
        alert("Время закончилось")
    }else{
         let strTimer = `${Math.trunc(hours)}:${Math.trunc(minuts)}:${seconds}`;
         timerShow.innerHTML = strTimer;
    }
    timeMinut--;

},1000);


function stop() {
	window.clearInterval(window.timer);
}
function timers() {
	let elem = document.getElementById('timer');
	elem.value = parseInt(elem.value)+1;
}