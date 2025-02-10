import { TaskAddFloatingWindow } from "../scripts/floatingWindow.js";
const floatingWindow = new TaskAddFloatingWindow();
// this is used to add task into the lis(Enter the  task in input then click ok to work)
export function addTask() {
    console.log("husfysgdf");
    // to get the task input text
    const taskInput = document.getElementById("taskInput");
    const taskInputData = taskInput.value;

    if(taskInputData != ""){
            // to Dynamically add the Tasks
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

        
    }
    taskInput.value = "";
    floatingWindow.disappear();
}