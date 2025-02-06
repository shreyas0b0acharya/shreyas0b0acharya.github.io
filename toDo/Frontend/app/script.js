import { FloatingWindow} from '../scripts/floatingWindow.js';

//Add button too open Input floating window
const addBtn = document.getElementById("addBtn");
const floatingWindow = new FloatingWindow();
addBtn.addEventListener('click', floatingWindow.appear);


let id=0;

// this is used to add task into the lis(Enter the  task in input then click ok to work)
function addTask() {
    // to get the task input text
    const taskInput = document.getElementById("taskInput");
    const taskInputData = taskInput.value;

    // to Dynamically add the Tasks
    // const mainTasksDiv = document.getElementById("mainTasksDiv");
    // const taskDiv = document.createElement("div");
    // const 
    const taskJson ={ 
        id: null,
        task: taskInputData,
        completed: false 
    };
    fetch('http://localhost:3000/addTask',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskJson)
        })
        .then((response) => response.text())
        .then((data)=> console.log(data))
        .catch((e)=> console.log(e)
    );

    taskInput.value = "";
    floatingWindow.disappear();

}

function addTaskDiv(data){
    console.log('dsfdsf');
    for (let t = 0; t < data.length; t++) {
        console.log(data[t].task);
        let taskDiv = document.createElement('div');
        taskDiv.classList = "taskDivClass";

        let checkBox = document.createElement('input');
        checkBox.type = "checkbox";

        let label = document.createElement('label');
        label.innerText = data[t].task;

        let optionIcon = document.createElement('span');
        optionIcon.classList = 'optionIconClass';
        optionIcon.innerText = "⋮";

        let deleteIcon = document.createElement('button');
        deleteIcon.classList = 'deleteIconClass';
        deleteIcon.innerText = "x";

        let editIcon = document.createElement('button');
        editIcon.classList = 'editIconClass';
        editIcon.innerText = "edit";


        taskDiv.appendChild(checkBox);
        taskDiv.appendChild(label);
        taskDiv.appendChild(optionIcon);
        // taskDiv.appendChild(deleteIcon);
        // taskDiv.appendChild(editIcon);
        

        let mainTasksDiv = document.getElementById("mainTasksDiv");
        mainTasksDiv.appendChild(taskDiv);

    }
}

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




