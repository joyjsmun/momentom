const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1")


function getTime(){
    const date = new Date();
    const secs = date.getSeconds();
    const mins = date.getMinutes();
    const hours = date.getHours();

    clockTitle.innerHTML  = `${hours}:${mins}:${secs}`;
}


function init(){
   getTime()
}

init()