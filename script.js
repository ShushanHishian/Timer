let deadline = '2023-09-11';
function getTimeRemaining(endtime){
    let t = Date.parse(endtime) - Date.parse(new Date()),
    seconds = Math.floor((t/1000) % 60),
    minutes = Math.floor((t/1000/60) % 60),
    hours = Math.floor((t/1000/60/60) % 24),
    days = Math.floor((t/(1000*60*60*24)));
    return {
'total' : t ,
'days': days,
'hours' :hours,
'minutes': minutes,
'seconds' : seconds
    };
}
function setClock(id, endtime){
let timer = document.getElementById(id),
days = document.querySelector('.days'),
hours = document.querySelector('.hours'),
minutes = timer.querySelector('.minutes'),
seconds = timer.querySelector('.seconds');
getTimeRemainingnterval = setInterval(updateClock,1000);

function updateClock(){
    let t = getTimeRemaining(endtime);
    days.textContent = t.days;
    hours.textContent = t.hours;
    minutes.textContent = t.minutes;
    seconds.textContent = t.seconds;

    if(t.total <= 0){
        clearInterval(timeInterval);
    }
    }
}

setClock('timer', deadline);