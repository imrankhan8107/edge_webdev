// we want the list data to stay, even if we close and reopen the page

let tasks = [];   // render all tasks in this array
let inpTasks = document.getElementById("inpTask")
let btnAdd = document.getElementById("btnAdd")
let listTasks = document.getElementById("listTasks")
let btnClear = document.getElementById("btnClear")

function saveTaskList(){
    let tasksJSON = JSON.stringify(tasks);  // if we have an object, we can convert it to JSON string
    localStorage.setItem("tasks", tasksJSON);   // the tasks JSON string will be stored in the local storage
}

function retrieveList(){
    let tasksJSON = localStorage.getItem("tasks");  // get the JSON string from local storage
    if(tasksJSON){  // if tasks were saved, we replace tasks array from array we are getting from local storage
        tasks = JSON.parse(tasksJSON);  // convert JSON string to JS object
    }
}
// when the page loads,we want to retrieve and render the list

function clearTaskList(){
    tasks = [];
    renderTaskList();
    saveTaskList();
}

btnClear.onclick = function(){
    clearTaskList();
}


function renderTaskList(){
    listTasks.innerHTML = "";  // clear before rendering, otherwise we will have duplicates as entire list is getting added everytime
    for(let i=0;i<tasks.length;i++){
        let li = document.createElement("li");
        li.innerHTML = tasks[i];
        listTasks.appendChild(li);
    }
}

function addTask(){
    let task = inpTasks.value;
    tasks.push(task);
    renderTaskList();
    saveTaskList();  // save the list after adding a task
}

//we can save the list in local storage when the page is closed, but it may also happen that the page is closed by mistake or abruptly; hence why to wait for that event to happen. When data changes, we can save it then to local storage

btnAdd.onclick = function(){
    addTask();
}

inpTasks.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        addTask();
    }
});

// to retrieve the list(whatever was saved) when the page loads for 1st time
retrieveList();
renderTaskList();
