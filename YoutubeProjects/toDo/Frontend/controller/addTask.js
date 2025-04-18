import { TaskAddFloatingWindow } from "../scripts/floatingWindow.js";
import { refreshPage } from "./refresh.js";
const taskAddFloatingWindow = new TaskAddFloatingWindow();

export function addTask() {

    // Get task input element
    const taskInput = document.getElementById("taskInput");
    if (!taskInput) {
        console.error("Error: Task input field not found.");
        return;
    }

    const taskInputData = taskInput.value.trim(); // Trim to prevent empty input
    if (taskInputData === "") {
        console.warn("Warning: Empty task input.");
        return;
    }

    // Task object
    const taskJson = { 
        id: null, 
        task: taskInputData, 
        completed: false 
    };

    // Send task to server
    fetch("http://localhost:3000/addTask", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(taskJson)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
        }
        return response.text();
    })
    .then(data => {
        console.log("Server Response:", data);
        taskAddFloatingWindow.disappear(); // Only disappear if request is successful
        refreshPage();
    })
    .catch(error => console.error("Error adding task:", error));

    // Clear input field after adding task
    taskInput.value = "";
}
