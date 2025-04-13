import { DisplayTaskOptionWindow } from "taskOptions.js";
import { deleteTask } from "../controller/deleteTask";
const displayTaskOptionWindow = new DisplayTaskOptionWindow();

import { TaskEditFloatingWindow } from "./floatingWindow.js";
import { editTask } from "../controller/editTask.js";
import { completeTask } from "../controller/completeTask.js";
const taskEditFloatingWindow = new TaskEditFloatingWindow();

/**
 * Creates and appends task elements to the DOM.
 * @param {Array} data - The task data array.
 * @param {boolean} completedTruth - Whether to filter for completed tasks.
 * @param {string} decoration - Text decoration style for completed tasks.
 */

function create(data, completedTruth, decoration = "none") {
    if (!data || !Array.isArray(data)) {
        console.error("Invalid task data provided.");
        return;
    }

    const mainTasksDiv = document.getElementById("mainTasksDiv");
    if (!mainTasksDiv) {
        console.error("Error: mainTasksDiv not found.");
        return;
    }

    //used to temporarily holds elements before appending them to the DOM.
    const fragment = document.createDocumentFragment();

    data.forEach((task) => {
        if (task.completed !== completedTruth) return;

        // Task container
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("taskDivClass");

        // Checkbox
        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.checked = task.completed;

        // Task label
        let taskLabel = document.createElement("label");
        taskLabel.innerText = task.task;
        taskLabel.style.textDecoration = decoration;

        // Option icon
        let optionIcon = document.createElement("span");
        optionIcon.classList.add("optionIconClass");
        optionIcon.innerText = "⋮";

        // Task options window
        let taskOptionsWindow = document.createElement("div");
        taskOptionsWindow.classList.add("taskOptionsWindow");

        // Delete Button in Option window
        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("deleteBtnClass");
        deleteBtn.innerText = "Delete";

        // Edit Button in Option window
        let editBtn = document.createElement("button");
        editBtn.classList.add("editBtnClass");
        editBtn.innerText = "Edit";

        //appending children to parents
        taskOptionsWindow.append(deleteBtn, editBtn);
        taskDiv.append(checkBox, taskLabel, optionIcon, taskOptionsWindow);

         // option window appears when click on Option Icon
        optionIcon.addEventListener("click", () => {
            displayTaskOptionWindow.appear(taskOptionsWindow);
        });

        
        //disappear option window when clicked outside it
        document.addEventListener("click", (event) => {
            if (!taskOptionsWindow.contains(event.target) && !optionIcon.contains(event.target)) {
                displayTaskOptionWindow.disappear(taskOptionsWindow);
            }
        });

        deleteBtn.addEventListener("click", () => {
            deleteTask(taskDiv,task.id);
        });

          // used to edit the task. when it is clicked edit window is appears
        editBtn.addEventListener("click", () => {
            taskEditFloatingWindow.appear(taskLabel);

            // Ensure only one event listener is attached
            const okBtn = document.getElementById("okBtn");
            okBtn.onclick = () => {
                if (okBtn.dataset.action === "edit") {
                        editTask(task.id);
                }
            };
        });
        // used to checked the checkbox and rearrange tasks
        checkBox.addEventListener("click", () => {
            completeTask(checkBox,task.id);
        });

        //appending task into fragment
        fragment.appendChild(taskDiv);
    });

    // append fragment to mainTaskDiv.
    mainTasksDiv.appendChild(fragment);
}

//function to add task into the taskDiv. It sorts completed and uncompleted tasks
export function addTaskDiv(data) {
    const mainTasksDiv = document.getElementById("mainTasksDiv");
    if (!mainTasksDiv) {
        console.error("Error: mainTasksDiv not found.");
        return;
    }
    //1st calling for uncompleted tasks
    create(data, false);

    const completedDiv = document.createElement("div");
    completedDiv.id = "completedDivClass";
    completedDiv.innerText = "Completed";
    mainTasksDiv.appendChild(completedDiv);

    //now calling for completed task
    create(data, true, "line-through");
}

//  Clears all tasks from the main tasks div.
export function removeTaskDiv() {
    const mainTasksDiv = document.getElementById("mainTasksDiv");
    if (mainTasksDiv) {
        mainTasksDiv.innerHTML = "";
    }
}