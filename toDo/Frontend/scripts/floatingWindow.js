const floatingInput = document.getElementById("floatingInput");
const blurWindow = document.getElementById("blurWindow");


class FloatingWindow{
    appear() {
        console.log("Enter module");
        
        // Ensure floatingInput is visible
        if (getComputedStyle(floatingInput).display !== 'block') {
            floatingInput.style.display = 'block';
            blurWindow.style.backdropFilter = 'blur(15px)'; 
            blurWindow.style.display = 'block';  // Apply blur to the body
        }
    }

    disappear() {
        console.log("Enter module");
        
        // Ensure floatingInput is hidden
        if (getComputedStyle(floatingInput).display !== 'none') {
            floatingInput.style.display = 'none';
            blurWindow.style.backdropFilter = 'none';  // Remove blur effect from the body
            blurWindow.style.display = 'none';
        }
    }
}


export {FloatingWindow};  // Named export (instead of default export)
