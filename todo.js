const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList")


let toDos = [];
const TODO_LS = "todo_list";


function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanTodos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanTodos;
    saveTodos();
}

function loadTodos(){
    const loadedTodos = localStorage.getItem(TODO_LS);
    if(loadedTodos !== null){
        const parsedTodos = JSON.parse(loadedTodos);
        parsedTodos.forEach(function(toDo){
            paintTodo(toDo.text)
        })
    }
}

function saveTodos(){
    localStorage.setItem(TODO_LS,JSON.stringify(toDos))
}

let idNumbers = 1;

function paintTodo(text){
const li = document.createElement("li");
const delBtn = document.createElement("button");
const span = document.createElement("span");
const newId = idNumbers;
idNumbers +=1;
delBtn.innerText = '❌';
span.innerText = text;
delBtn.addEventListener("click",deleteToDo);
li.appendChild(delBtn);
li.appendChild(span);
li.id = newId;
toDoList.appendChild(li);
const toDoObj = {
    text:text,
    id:newId
};
toDos.push(toDoObj);
saveTodos()
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value = '';
}



function init(){
    loadTodos();
    toDoForm.addEventListener("submit",handleSubmit)
    
}

init()