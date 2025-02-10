

const floatingInput = document.getElementById("floatingInput");
const blurWindow = document.getElementById("blurWindow");
const OkBtn = document.getElementById("okBtn");
// const AddOkBtn = document.getElementById("AddOkBtn");
// const EditOkBtn = document.getElementById("EditOkBtn");

const taskInputLegend = document.getElementById("taskInputLegend");
const taskInput = document.getElementById("taskInput");




export class TaskAddFloatingWindow{
    appear() {
        if (getComputedStyle(floatingInput).display !== 'block') {
            floatingInput.style.display = 'block';
            blurWindow.style.display = 'block';  
            blurWindow.style.backdropFilter = 'blur(5px)'; 

            OkBtn.dataset.action ="add";
            console.log("appear");
            
        }
        
    }

    disappear() {
        if (getComputedStyle(floatingInput).display !== 'none') {
            floatingInput.style.display = 'none';
            blurWindow.style.display = 'none';
            blurWindow.style.backdropFilter = 'none'; 

            OkBtn.dataset.action ="";
            taskInput.value = "";
        }
    }

}



export class TaskEditFloatingWindow {

    appear(label) {
        console.log("agjhsf");
        
        if (getComputedStyle(floatingInput).display !== 'block') {
            floatingInput.style.display = 'block';
            blurWindow.style.display = 'block';  
            blurWindow.style.backdropFilter = 'blur(5px)'; 

            taskInput.value = label.textContent;
            taskInputLegend.innerText = "Edit Task ";
            
            OkBtn.dataset.action ="edit";
            
        }
        
    }

    disappear() {
        if (getComputedStyle(floatingInput).display !== 'none') {
            floatingInput.style.display = 'none';
            blurWindow.style.display = 'none';
            blurWindow.style.backdropFilter = 'none'; 
            OkBtn.dataset.action ="";
            taskInput.value = "";
        }
    }

}
    // appear(){
    //     console.log("hi");
    //     super.appear();
        
    // }

    // okBtn(){
    //     const okBtn = document.getElementById("okBtn");
    //     okBtn.addEventListener('click', console.log("ji")
    // );
    // }



