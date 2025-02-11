const floatingInput = document.getElementById("floatingInput");
const blurWindow = document.getElementById("blurWindow");
const okBtn = document.getElementById("okBtn");
const taskInputLegend = document.getElementById("taskInputLegend");
const taskInput = document.getElementById("taskInput");

function showFloatingWindow(action, legendText = "Add Task", taskText = "") {
    floatingInput.style.display = 'block';
    blurWindow.style.display = 'block';
    blurWindow.style.backdropFilter = 'blur(5px)';
    
    taskInputLegend.innerText = legendText;
    taskInput.value = taskText;
    
    okBtn.dataset.action = action;
}

function hideFloatingWindow() {
    floatingInput.style.display = 'none';
    blurWindow.style.display = 'none';
    blurWindow.style.backdropFilter = 'none';

    taskInput.value = "";
    taskInputLegend.innerText = "Add Task";  // Reset legend text
    okBtn.dataset.action = "";
}

export class TaskAddFloatingWindow {
    appear() {
        showFloatingWindow("add");
    }

    disappear() {
        hideFloatingWindow();
    }
}

export class TaskEditFloatingWindow {
    appear(label) {
        showFloatingWindow("edit", "Edit Task", label.textContent);
    }

    disappear() {
        hideFloatingWindow();
    }
}
