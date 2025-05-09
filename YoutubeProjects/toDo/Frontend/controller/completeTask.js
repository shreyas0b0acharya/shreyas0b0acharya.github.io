import { refreshPage } from "./refresh.js";

export function completeTask(checkBox, id) {
    const taskJson = { 
        id: id,
        completed: checkBox.checked
    };

    fetch('http://localhost:3000/taskCompleted', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskJson)
    })
    .then((response) => response.json())  // Assuming JSON response from server
    .then(() => {
        refreshPage();
        console.log(`Task ${id} marked as ${checkBox.checked ? "completed" : "not completed"}`);

    })
    .catch((e) => console.error("Error updating task completion:", e));
}
