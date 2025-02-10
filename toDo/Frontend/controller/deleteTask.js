import { DisplayTaskOptionWindow } from "../scripts/taskOptions.js";

const displayTaskOptionWindow = new DisplayTaskOptionWindow;

// this is used to delete task from the to-do list
export function deleteTask(taskDiv,id) {
    console.log(id);
    
    taskDiv.remove();
    const taskJson = { id: id };

    fetch('http://localhost:3000/deleteTask', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskJson)
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}