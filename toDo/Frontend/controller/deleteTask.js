import { DisplayTaskOptionWindow } from "../scripts/taskOptions.js";
import { refreshPage } from "./refresh.js";

const displayTaskOptionWindow = new DisplayTaskOptionWindow();

// This function deletes a task from the to-do list
export function deleteTask(taskDiv, id) {
    console.log("Deleting task with ID:", id);
    // Send DELETE request to the server
    fetch("http://localhost:3000/deleteTask", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to delete task: ${response.statusText}`);
        }
        return response.text();
    })
    .then(() => {
        console.log("Task deleted successfully.");
        refreshPage(); 
        taskDiv.remove();// Remove the task from the UI
    })
    .catch(error => console.error("Error deleting task:", error));
}
