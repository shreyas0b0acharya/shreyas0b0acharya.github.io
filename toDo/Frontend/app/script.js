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
    .catch((e)=> console.log(e));
 





    taskInput.value = "";
    floatingWindow.disappear();
   

    

}

function displayTasks(){
    console.log("hii");
    fetch('http://localhost:3000/getTasks')
    .then((response) => response.json())
    .then((data)=> console.log(data))
    .catch((e)=> console.log(e));
 
}


const okBtn = document.getElementById("okBtn");
okBtn.addEventListener('click', addTask);

//to make the floating window disappear when click on outside input window
const blurWindow = document.getElementById("blurWindow");
blurWindow.addEventListener('click', floatingWindow.disappear);


document.body.addEventListener('load', displayTasks);



