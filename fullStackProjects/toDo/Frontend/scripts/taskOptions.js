
//Task options window operation
export class DisplayTaskOptionWindow {
    // Appears the window
    appear(taskOptionsWindow) {
        taskOptionsWindow.style.display = 'flex';
        taskOptionsWindow.style.right = `${(taskOptionsWindow.style.right) + 2 + window.scrollX}px`;
    }

    // Disappears the window
    disappear(taskOptionsWindow) {
        taskOptionsWindow.style.display = 'none';
    }

}
