import { addTaskDiv, removeTaskDiv } from "../scripts/dynamicAddTask.js";
import { refreshPage } from "./refresh.js";


export function completeTask(checkBox,id){
    // console.log("completed")
    let taskJson;

    if(checkBox.checked === true){
        taskJson ={ 
            id: id,
            completed: true
        };
    }else{
        console.log("not completed");
        taskJson ={ 
            id: id,
            completed: false
        };
    }

    console.log("completed");
        
        fetch('https://todoapp-sba.onrender.com/taskCompleted',{
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


// let visibility = true;

// document.getElementById("completedDivClass").addEventListener("click", () => {
//     fetch("http://localhost:3000/getTasks")
//         .then((response) => response.json())
//         .then((data) => {
//             if (visibility) {
//                 removeTaskDiv();
//                 console.log("hi");
//                 addTaskDiv(data, "maximize");
//             } else {
//                 removeTaskDiv();
//                 console.log("hi");
//                 addTaskDiv(data);
//             }
//             visibility = !visibility; // Toggle visibility
//         })
//         .catch((e) => console.log(e)); // Corrected catch block
// });


