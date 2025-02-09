import { FloatingWindow} from '../scripts/floatingWindow.js';
import { DisplayTaskOptionWindow } from '../scripts/taskOptions.js';
import { addTaskDiv } from '../scripts/dynamicAddTask.js';

import { addTask } from '../controller/addTask.js';
import { deleteTask } from '../controller/deleteTask.js';



const floatingWindow = new FloatingWindow();
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

const okBtn = document.getElementById("okBtn");
okBtn.addEventListener('click', addTask);

//to make the floating window disappear when click on outside input window
const blurWindow = document.getElementById("blurWindow");
blurWindow.addEventListener('click', floatingWindow.disappear);

const deleteBtn = document.getElementById("deleteBtn");
deleteBtn.addEventListener('click', deleteTask);

//change the TaskOptions Pop up window position when the window screen width changes
window.addEventListener('resize',displayTaskOptionWindow.position);





