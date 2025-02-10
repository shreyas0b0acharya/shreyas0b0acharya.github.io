import { TaskAddFloatingWindow } from '../scripts/floatingWindow.js';
import { DisplayTaskOptionWindow } from '../scripts/taskOptions.js';
import { addTaskDiv } from '../scripts/dynamicAddTask.js';

import { addTask } from '../controller/addTask.js';
// import { deleteTask } from '../controller/deleteTask.js';
// import { editTask } from '../controller/editTask.js';



const floatingWindow = new TaskAddFloatingWindow();
const displayTaskOptionWindow = new DisplayTaskOptionWindow();

//Add button too open Input floating window
const addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', floatingWindow.appear);



window.onload = () => {
    fetch('http://localhost:3000/getTasks')
    .then((response) => response.json())
    .then((data)=> addTaskDiv(data))
    .catch((e)=> console.log(e));
}



// const AddOkBtn = document.getElementById("AddOkBtn");
// AddOkBtn.addEventListener('click', addTask);


const okBtn = document.getElementById("okBtn");
okBtn.addEventListener('click', () => {
    if(okBtn.dataset.action === "add"){
        addTask();
    }
});

//to make the floating window disappear when click on outside input window
const blurWindow = document.getElementById("blurWindow");
blurWindow.addEventListener('click', floatingWindow.disappear);

// const deleteBtn = document.getElementById("deleteBtn");
// deleteBtn.addEventListener('click', deleteTask);

//change the TaskOptions Pop up window position when the window screen width changes
window.addEventListener('resize',displayTaskOptionWindow.position);









