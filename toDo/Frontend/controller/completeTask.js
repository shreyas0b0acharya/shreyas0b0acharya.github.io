import { refreshPage } from "./refresh.js";

export function completeTask(checkBox, id) {
    const taskJson = { 
        id: id,
        completed: checkBox.checked
    };

    fetch('https://todoapp-sba.onrender.com/addTask/taskCompleted', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskJson)
    })
    .then((response) => response.json())  // Assuming JSON response from server
    .then(() => {
        console.log(`Task ${id} marked as ${checkBox.checked ? "completed" : "not completed"}`);
        refreshPage();
    })
    .catch((e) => console.error("Error updating task completion:", e));
}
