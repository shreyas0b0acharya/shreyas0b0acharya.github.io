const floatingInput = document.getElementById("floatingInput");
const blurWindow = document.getElementById("blurWindow");


class FloatingWindow{
    appear() {
        if (getComputedStyle(floatingInput).display !== 'block') {
            floatingInput.style.display = 'block';
            blurWindow.style.display = 'block';  
            blurWindow.style.backdropFilter = 'blur(5px)'; 
        }
    }

    disappear() {
        if (getComputedStyle(floatingInput).display !== 'none') {
            floatingInput.style.display = 'none';
            blurWindow.style.display = 'none';
            blurWindow.style.backdropFilter = 'none'; 
        }
    }
}

export {FloatingWindow};  
