import { addTaskDiv, removeTaskDiv } from "../scripts/dynamicAddTask.js";

//used to refresh the page.
export function refreshPage() {
    fetch("http://localhost:3000/getTasks")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch tasks: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            removeTaskDiv();
            addTaskDiv(data);
            console.log("Tasks refreshed successfully.", data);
        })
        .catch(error => console.error("Error refreshing tasks:", error));
}
