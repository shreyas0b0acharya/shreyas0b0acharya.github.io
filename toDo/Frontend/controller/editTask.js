import { TaskEditFloatingWindow } from "../scripts/floatingWindow.js";
const floatingWindow = new TaskEditFloatingWindow;

export function editTask(optionIconId){
    console.log(optionIconId);
    const taskInput = document.getElementById("taskInput");
    const taskInputData = taskInput.value;
    

    if(taskInputData != ""){
            // to Dynamically add the Tasks
        const taskJson ={ 
            id: optionIconId,
            task: taskInputData,
            completed: false
        };
        fetch('https://todoapp-sba.onrender.com/editTask',{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskJson)
        })
        .then((response) => response.text())
        .then((data)=> {
            refreshPage();
        })
        .catch((e)=> console.log(e)
    );

        
    }


    floatingWindow.disappear();
    // floatingWindow.appear(label);
    // const taskInput = document.getElementById("taskInput");
    // taskInput.value= label.textContent;
    // floatingWindow.disappear();

}