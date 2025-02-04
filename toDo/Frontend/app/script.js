import { FloatingWindow} from '../scripts/floatingWindow.js';




const addBtn = document.getElementById("addBtn");
const floatingWindow = new FloatingWindow();
addBtn.addEventListener('click', floatingWindow.appear);



function addTask() {
    floatingWindow.disappear();
}

const okBtn = document.getElementById("okBtn");
okBtn.addEventListener('click', addTask);