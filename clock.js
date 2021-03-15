const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1")


function getTime(){
    const date = new Date();
    const secs = date.getSeconds();
    const mins = date.getMinutes();
    const hours = date.getHours();

    clockTitle.innerHTML  = `${hours < 10 ? `0${hours}`:hours}:${mins < 10 ? `0${hours}`:hours}:${secs < 10 ? `0${secs}` : secs}`;
}


function init(){
   getTime();
   setInterval(getTime,1000);
}

init()