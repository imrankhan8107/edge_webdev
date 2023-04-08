let inpTask = document.getElementById("inpTasks");
let btnAdd = document.getElementById("btnAdd");
let ulTasks = document.getElementById("tasks");
let btnClear = document.getElementById("btnClear");
let btnSort = document.getElementById("btnSort");
let btnRemoveDone = document.getElementById("btnRemoveDone");

let tasks = ['task1', 'task2', 'task3'];
let tasksDone = ['checked', '', 'checked'];

let allTasks = {
    tasks: ['task1', 'task2', 'task3'],
    tasksDone: ['checked', '', 'checked']
}

function saveTaskList(){
    let tasksJSON = JSON.stringify(tasks);
    let tasksDoneJSON = JSON.stringify(tasksDone);
    localStorage.setItem("tasks", tasksJSON);
    localStorage.setItem("tasksDone", tasksDoneJSON);
}

function retrieveList(){
    let tasksJSON = localStorage.getItem("tasks");
    let tasksDoneJSON = localStorage.getItem("tasksDone");
    tasks = JSON.parse(tasksJSON);
    tasksDone = JSON.parse(tasksDoneJSON);
}

function renderTask(){
    ulTasks.innerHTML = "";
    for(let i = 0; i < tasks.length; i++){
        let div = document.createElement("div");
        let completedTask = `
        <input type="checkbox" ${tasksDone[i]}> <button>UP</button> <button>DOWN</button> <s>${tasks[i]}</s>
        `;
        let incompletetask = `
        <input type="checkbox" ${tasksDone[i]}> <button>UP</button> <button>DOWN</button> ${tasks[i]}
        `;
        // div.innerHTML = ele;
        console.log(tasksDone[i]);
        if(tasksDone[i] === 'checked' || tasksDone[tasks[i].trim()]==='checked'){
            div.innerHTML = completedTask;
        } else {
            div.innerHTML = incompletetask;
        }
        ulTasks.appendChild(div);
    }
}



// TODO: functions to complete and incomplete tasks

// function taskComplete(i){
//     tasksDone[i] = 'checked';
// }

// function taskIncomplete(i){
//     tasksDone[i] = '';
// }

// document.addEventListener("click", function(event){
//     if(event.target.type === "checkbox"){
//         let index = event.target.parentElement.innerText;
//         if(event.target.checked){   
//             taskComplete(index);
//         } else {
//             taskIncomplete(index);
//         }
//     }
// })

function addTask(){
    let task = inpTask.value;
    tasks.push(task);
    if(tasksDone.length > tasks.length){
        tasksDone.push('');
    }
    saveTaskList();
    renderTask();
}

btnAdd.onclick = function(){
    addTask();
}

function sortTasks(){
    sortedTasks = [];
    completion = [];
    for(let i = 0; i < tasks.length; i++){
        if(tasksDone[i] !== 'checked'){
            completion.push('');
            sortedTasks.push(tasks[i]);
        }
    }
    for(let i = 0; i < tasks.length; i++){
        if(tasksDone[i] === 'checked'){
            completion.push('checked');
            sortedTasks.push(tasks[i]);
        }
    }
    tasksDone = completion;
    tasks = sortedTasks;
    saveTaskList();
    renderTask();
}

btnSort.onclick = function(){
    sortTasks();
}

function removeDone(){
    let newTasks = [];
    let newTasksDone = [];
    for(let i = 0; i < tasks.length; i++){
        if(tasksDone[i] !== 'checked'){
            newTasks.push(tasks[i]);
            newTasksDone.push('');
        }
    }
    tasks = newTasks;
    tasksDone = newTasksDone;
    saveTaskList();
    renderTask();
}

btnRemoveDone.onclick = function(){
    removeDone();
}

inpTask.addEventListener("keydown", function(event){
    if(event.keyCode === 13){
        addTask();
        renderTask();
    }
})

function clearTaskList(){
    tasks = [];
    tasksDone = [];
    saveTaskList();
    renderTask();
}

btnClear.onclick = function(){
    clearTaskList();
}

retrieveList();
renderTask();