
const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greetings = document.querySelector(".js-greetings")

const USER_LS = "currentUser";
const SHOWING_CN = "showing" 

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",submitHandler)
}

function saveName(name){
    localStorage.setItem(USER_LS,name);
}

function submitHandler(event){
    event.preventDefault();
    const currentValue = input.value;``
    paintGreeting(currentValue);
    saveName(currentValue);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greetings.classList.add(SHOWING_CN);
   greetings.innerText = `Hello ${text}!`
}

function loadName(){
 const currentUser = localStorage.getItem(USER_LS);
 if(currentUser === null){
    askForName()
 }else{
    paintGreeting(currentUser)
 }
}

function init(){
loadName();
}

init()


