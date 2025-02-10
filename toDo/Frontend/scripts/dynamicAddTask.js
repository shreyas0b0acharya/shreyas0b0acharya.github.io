import { DisplayTaskOptionWindow } from "./taskOptions.js";
const displayTaskOptionWindow = new DisplayTaskOptionWindow();

import { TaskEditFloatingWindow } from "./floatingWindow.js";
const taskEditFloatingWindow = new TaskEditFloatingWindow() ;

import { deleteTask } from "../controller/deleteTask.js";
import { editTask } from "../controller/editTask.js";
import { addTask } from "../controller/addTask.js";
import { completeTask } from "../controller/completeTask.js";



function create(data,completedTruth,decoration="none"){
  
    for (let t = 0; t < data.length; t++) {
      if(data[t].completed === completedTruth){

        

      
        // task div 
        let taskDiv = document.createElement('div');
        taskDiv.classList = "taskDivClass";

        // checkbox in task div
        let checkBox = document.createElement('input');
        checkBox.type = "checkbox";
        checkBox.checked = data[t].completed;

        // label for the checkbox in task Div
        let taskLabel = document.createElement('label');
        taskLabel.innerText = data[t].task;
        taskLabel.style.textDecoration = decoration;

        //Option icon to open the delete edit option div
        let optionIcon = document.createElement('span');
        optionIcon.classList = 'optionIconClass';
        optionIcon.innerText = "⋮";

        
        // When clicking the optionIcon, show the taskOptionsWindow.

        let taskOptionsWindow = document.createElement('div');
        taskOptionsWindow.classList = 'taskOptionsWindow';
        taskDiv.appendChild(taskOptionsWindow);


        let deleteBtn = document.createElement('button');
        deleteBtn.classList = 'deleteBtnClass';
        deleteBtn.innerText = "Delete";
        taskOptionsWindow.appendChild(deleteBtn);

        let editBtn = document.createElement('button');
        editBtn.classList = 'editBtnClass';
        editBtn.innerText = "Edit";
        taskOptionsWindow.appendChild(editBtn);

        optionIcon.addEventListener('click', () => {
          // Prevent the click from propagating to the document
          // Show the popup by setting display to flex (or you can use block)
            displayTaskOptionWindow.appear(taskOptionsWindow,taskDiv);
          // taskOptionsWindow.style.display ='flex'

        
        });

        let optionIconId = data[t].id;

        deleteBtn.addEventListener('click', () => {
            deleteTask(taskDiv,data[t].id);
            
        });

        
        
        editBtn.addEventListener('click', () => {
            taskEditFloatingWindow.appear(taskLabel);

            const okBtn = document.getElementById("okBtn");
            okBtn.addEventListener('click', () => {
                if(okBtn.dataset.action === "edit"){
                      editTask(data[t].id);
                  }
            });

          //   document.getElementById('taskInput').addEventListener("keydown", function(event) {
          //     if (event.key === "Enter" && okBtn.dataset.action === "edit") {
          //         editTask(data[t].id); // Triggers the button click
          //         event.preventDefault(); 
          //         okBtn.click();
          //     }
          // });

            
          
        });


        checkBox.addEventListener('click',() => {
            completeTask(checkBox,data[t].id);
        });

        document.addEventListener('click', (event) => {
            // Use computed style to check the actual display property
            const computedDisplay = window.getComputedStyle(taskOptionsWindow).display;
            if (computedDisplay === "flex") {
              // If the click is outside the popup and outside the optionIcon, hide the popup
              if (!taskOptionsWindow.contains(event.target) && !optionIcon.contains(event.target)) {
                taskOptionsWindow.style.display = "none";
                console.log("Popup hidden.");
              }
            }
          });

        taskDiv.appendChild(checkBox);
        taskDiv.appendChild(taskLabel);
        taskDiv.appendChild(optionIcon);
        

        let mainTasksDiv = document.getElementById("mainTasksDiv");
        mainTasksDiv.appendChild(taskDiv);
      }
    }
}

export function addTaskDiv(data,minimize="none"){
    const mainTasksDiv = document.getElementById('mainTasksDiv');

    // const completedDiv = document.createElement('div');
    // completedDiv.classList = "completedDivClass";
    // completedDiv.innerText = "Not Completed";
    // mainTasksDiv.appendChild(completedDiv);
    create(data,false);
    const notCompletedDiv = document.createElement('div');
    notCompletedDiv.id = "completedDivClass";
    notCompletedDiv.innerText = "Completed";
    mainTasksDiv.appendChild(notCompletedDiv);

  if(minimize === "none"){
      
      create(data,true,"line-through");
  }
   
}

// #mainTasksDiv{
//   min-height: 300px;
//   padding: 2px;
//   margin-bottom: 50px;
// }

export function removeTaskDiv(){
  let mainTasksDiv = document.getElementById("mainTasksDiv");
  mainTasksDiv.innerHTML = "";
}