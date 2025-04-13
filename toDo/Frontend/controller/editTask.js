import { TaskEditFloatingWindow } from "../scripts/floatingWindow.js";
import { refreshPage } from "./refresh.js";

const floatingWindow = new TaskEditFloatingWindow();

export function editTask(id) {
    console.log("Editing task with ID:", id);

    const taskInput = document.getElementById("taskInput");
    const taskInputData = taskInput.value.trim(); // Trim to remove leading/trailing spaces

    if (taskInputData === "") {
        console.warn("Task input is empty. Edit canceled.");
        return; // Prevent sending empty updates
    }

    // Prepare task data
    const taskJson = {
        id: id,
        task: taskInputData,
        completed: false,
    };

    // Send PUT request to update the task
    fetch("http://localhost:3000/editTask", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(taskJson),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to update task: ${response.statusText}`);
        }
        return response.text();
    })
    .then(() => {
        console.log("Task updated successfully.");
        refreshPage(); // Refresh UI after successful update
    })
    .catch(error => console.error("Error updating task:", error));

    // Close the floating window
    floatingWindow.disappear();
}
