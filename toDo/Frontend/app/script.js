import { TaskAddFloatingWindow } from "../scripts/floatingWindow.js";
import { addTaskDiv } from "../scripts/dynamicAddTask.js";
import { addTask } from "../controller/addTask.js";

const taskAddFloatingWindow = new TaskAddFloatingWindow();

//Load DOM before javascript
document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.getElementById("addBtn");
    const okBtn = document.getElementById("okBtn");
    const blurWindow = document.getElementById("blurWindow");

    if (addBtn) addBtn.addEventListener("click", taskAddFloatingWindow.appear);

    if (okBtn) {
        okBtn.addEventListener("click", () => {
            if (okBtn.dataset.action === "add") addTask();
        });
    }

    if (blurWindow) blurWindow.addEventListener("click", taskAddFloatingWindow.disappear);

    // Fetch tasks from the server when page load
    fetch("http://localhost:3000/getTasks")
        .then(response => {
            if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
            return response.json();
        })
        .then(data => addTaskDiv(data))
        .catch(error => console.error("Error fetching tasks:", error));
});
