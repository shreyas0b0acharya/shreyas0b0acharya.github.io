export class DisplayTaskOptionWindow {
    // Appears the window
    appear(taskOptionsWindow, taskDiv) {
        taskOptionsWindow.style.display = 'flex';
        taskOptionsWindow.style.right = `${(taskOptionsWindow.style.right) +2 + window.scrollX}px`;
    }

    // Disappears the window
    disappear(taskOptionsWindow) {
        taskOptionsWindow.style.display = 'none';
    }

    // Positioning the window correctly
    // position(taskOptionsWindow, taskDiv) {
    //     const rect = taskDiv.getBoundingClientRect();
        
    //     taskOptionsWindow.style.top = `${rect.top + window.scrollY}px`;
    //     taskOptionsWindow.style.left = `${rect.left + window.scrollX}px`;
    // }
}
