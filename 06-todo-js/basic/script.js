/*
document -> DOM = Document Object Model
window -> BOM = Browser Object Model
*/

let inpTask = document.getElementById("inpTask");
let listTasks = document.getElementById("listTasks");

function addItemtoList(taskname /* string */){
    let listTasks = document.getElementById("listTasks");
    let newTaskListItem = document.createElement("li"); // a new element gets created but its not on the page, as we haven't added it to the page.
    // it is still in the ram, and we can add/remove it to/from the page. 
    newTaskListItem.innerText = taskname;
    listTasks.appendChild(newTaskListItem);
}

function getNewTaskName(){
    let inputTask = document.getElementById("inpTask");
    return inputTask.value;
}/* return string */

// so whenever add button is clicked, we want to call addItemtoList() function, and pass getNewTaskName() as a parameter to get the taskName.

/*
when add button is clicked,
1. read input with getNewTaskName()
2. save that to newTaskName
3. call addItemtoList(newTaskName)
4. clear input
*/

let btnAdd = document.getElementById("btnAdd");
btnAdd.onclick = function(){
    let newTaskName = getNewTaskName();
    addItemtoList(newTaskName);
    inpTask.value = "";
}

document.addEventListener("keypress", function(event){
    if(event.key == "Enter"){
        if(inpTask == document.activeElement){
            let newTaskName = getNewTaskName();
            if(newTaskName == ""){
                alert("Input cannot be empty");
            }
            else{
                addItemtoList(newTaskName);
                inpTask.value = "";
            }
        }
    }
})
/*
Further requirements:
1. when enter button is clicked(cursor is on inpTask), also do the same steps as addBtn
2. When input is empty, show an alert message that input cannot be empty.
*/