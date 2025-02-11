import { TaskAddFloatingWindow } from "../scripts/floatingWindow.js";
import { DisplayTaskOptionWindow } from "../scripts/taskOptions.js";
import { addTaskDiv } from "../scripts/dynamicAddTask.js";
import { addTask } from "../controller/addTask.js";

const floatingWindow = new TaskAddFloatingWindow();
const displayTaskOptionWindow = new DisplayTaskOptionWindow();

//Load DOM before javascript
document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.getElementById("addBtn");
    const okBtn = document.getElementById("okBtn");
    const blurWindow = document.getElementById("blurWindow");

    if (addBtn) addBtn.addEventListener("click", floatingWindow.appear);

    if (okBtn) {
        okBtn.addEventListener("click", () => {
            if (okBtn.dataset.action === "add") addTask();
        });
    }

    if (blurWindow) blurWindow.addEventListener("click", floatingWindow.disappear);

    // Fetch tasks from the server
    fetch("https://todoapp-sba.onrender.com/addTask/getTasks")
        .then(response => {
            if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
            return response.json();
        })
        .then(data => addTaskDiv(data))
        .catch(error => console.error("Error fetching tasks:", error));

    // Update task options popup position on window resize
    window.addEventListener("resize", displayTaskOptionWindow.position);
});
