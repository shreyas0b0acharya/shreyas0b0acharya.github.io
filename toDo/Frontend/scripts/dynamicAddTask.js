import { DisplayTaskOptionWindow } from "./taskOptions.js";
const displayTaskOptionWindow = new DisplayTaskOptionWindow();

import { deleteTask } from "../controller/deleteTask.js";

export function addTaskDiv(data){
  
    for (let t = 0; t < data.length; t++) {
        // task div 
        let taskDiv = document.createElement('div');
        taskDiv.classList = "taskDivClass";

        // checkbox in task div
        let checkBox = document.createElement('input');
        checkBox.type = "checkbox";

        // label for the checkbox in task Div
        let label = document.createElement('label');
        label.innerText = data[t].task;

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
            deleteTask(taskDiv,optionIconId);
            
        });




//   <div id="mainTasksDiv">
        // <div id="taskOptionsWindow">
        //     <button id="editBtn">Edit</button>
        //     <button id="deleteBtn">Delete</button>
        // </div>

        // let deleteIcon = document.createElement('button');
        // deleteIcon.classList = 'deleteIconClass';
        // deleteIcon.innerText = "x";

        // let editIcon = document.createElement('button');
        // editIcon.classList = 'editIconClass';
        // editIcon.innerText = "edit";







        // const taskOptionsWindow = document.getElementById("taskOptionsWindow");

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
        taskDiv.appendChild(label);
        taskDiv.appendChild(optionIcon);
        

        let mainTasksDiv = document.getElementById("mainTasksDiv");
        mainTasksDiv.appendChild(taskDiv);

    }
}
