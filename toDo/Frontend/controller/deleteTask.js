import { DisplayTaskOptionWindow } from "../scripts/taskOptions.js";

const displayTaskOptionWindow = new DisplayTaskOptionWindow;

// this is used to delete task from the to-do list
export function deleteTask(taskDiv,id) {
    taskDiv.remove();
    console.log(id);
    const taskJson ={ 
        id: id
    };
    
    
     




    fetch('http://localhost:3000/deleteTask',{
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskJson)
        })
        .then((response) => response.text())
        .then((data)=> console.log(data))
        .catch((e)=> console.log(e)
    );


    // // to get the task input text
    // const taskInput = document.getElementById("taskInput");
    // const taskInputData = taskInput.value;

    // if(taskInputData != ""){
    //         // to Dynamically add the Tasks
    //     const taskJson ={ 
    //         id: null,
    //         task: taskInputData,
    //         completed: false 
    //     };
    //     fetch('http://localhost:3000/addTask',{
    //             method:'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(taskJson)
    //         })
    //         .then((response) => response.text())
    //         .then((data)=> console.log(data))
    //         .catch((e)=> console.log(e)
    //     );

        
    // }
    // taskInput.value = "";
    // floatingWindow.disappear();
}