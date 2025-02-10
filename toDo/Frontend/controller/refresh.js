import { addTaskDiv, removeTaskDiv } from "../scripts/dynamicAddTask.js";

export function refreshPage(){
    fetch('https://todoapp-sba.onrender.com/getTasks')
        .then((response) => response.json())
        .then((data)=> {
            removeTaskDiv();
            addTaskDiv(data);
        })
        // .then((data)=> console.log(data));
        .catch((e)=> console.log(e));
}

