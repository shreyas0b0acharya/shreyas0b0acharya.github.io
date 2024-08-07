function graph_div(){
    for (let i = 0; i < 20; i++) {

        const height = Math.floor( Math.random()*200);
    
        const main_box_div = document.getElementById("main_box_div");
        const main_nums_div = document.getElementById("main_nums_div");

        const each_box = document.createElement("div") ;
        each_box.classList.add("each_box");
        each_box.style.height = height+"px";
    
        const each_nums = document.createElement("div") ;
        each_nums.className="each_nums";
        each_nums.textContent=height;
        
        main_box_div.appendChild(each_box);
        main_nums_div.appendChild(each_nums);
    }
}
graph_div();
var intervalId = ""
function reload() {
    const eachBoxElements = document.querySelectorAll(".each_box");
    const eachNumsElements = document.querySelectorAll(".each_nums");

    eachBoxElements.forEach(element => {
        element.classList.remove("each_box");
    });

    eachNumsElements.forEach(element => {
        element.classList.remove("each_nums");
    });

    // Clear the contents of the main_box_div and main_nums_div
    document.getElementById("main_box_div").innerHTML = "";
    document.getElementById("main_nums_div").innerHTML = "";

    // Call the graph_div function to regenerate the elements
    graph_div();
    clearInterval(intervalId);
    document.getElementById("disp").textContent = 0;
}


function change_high() {
    const main_box_div = document.getElementById("main_box_div");
    const childDivs = main_box_div.children;
    let x=0;
    let highest = 0;
    let display_highest = document.getElementById("disp");
    let height_px =0;
    function change_color() {
        console.log(parseFloat(childDivs[x].style.height));
        if (x<childDivs.length) {
            if (x>=1){
                
                height_px=childDivs[x].style.height;
                if (  highest <= (parseInt(height_px,10))){
                    highest =(parseInt(height_px,10))
                    console.log(parseInt(height_px,10));
                    display_highest.textContent ="Maximum Value: "+ highest;
                    childDivs[x].style.background = "linear-gradient(to bottom,green,black)";
                    childDivs[x-1].style.background = "linear-gradient(to bottom,black,dodgerblue)";
                }else{
                    childDivs[x].style.background = "linear-gradient(to bottom,red,black)";
                    if (childDivs[x-1].style.background != "linear-gradient(to bottom,green,black)") {
                        childDivs[x-1].style.background = "linear-gradient(to bottom,black,dodgerblue)";
                    }
                    
                }
                if(x==19){
                    setTimeout(() => {
                        childDivs[x - 1].style.background = "linear-gradient(to bottom, black, dodgerblue)";
                    }, 500);
                    clearInterval(intervalId)
                }
            }
            else{
            childDivs[x].style.background = "linear-gradient(to bottom,red,black)";
            height_px=childDivs[x].style.height;
                if (  highest <= (parseInt(height_px,10))){
                    highest =(parseInt(height_px,10))
                    console.log(parseInt(height_px,10));
                    display_highest.textContent = "Maximum Value: "+ highest;
                }
            }
            x=x+1;
        }else{
            clearInterval(intervalId)
        }
        
    }
    intervalId = setInterval(change_color, 500); 
}

function change_low() {
    const main_box_div = document.getElementById("main_box_div");
    const childDivs = main_box_div.children;
    let x = 0;
    let lowest = 200;
    let display_lowest = document.getElementById("disp");
    let height_px = 0;

    function change_color() {
        console.log(parseFloat(childDivs[x].style.height));
        if (x < childDivs.length) {
            if (x >= 1) {
                height_px = childDivs[x].style.height;
                if (lowest >= (parseInt(height_px, 10))) {
                    lowest = parseInt(height_px, 10);
                    console.log(lowest);
                    display_lowest.textContent = "Manimum Value: "+ lowest;
                    childDivs[x].style.background = "linear-gradient(to bottom, green, black)";
                    childDivs[x - 1].style.background = "linear-gradient(to bottom, black, dodgerblue)";
                } else {
                    childDivs[x].style.background = "linear-gradient(to bottom, red, black)";
                    if (childDivs[x - 1].style.background !== "linear-gradient(to bottom, green, black)") {
                        childDivs[x - 1].style.background = "linear-gradient(to bottom, black, dodgerblue)";
                    }
                }
                if (x == 19) {
                    setTimeout(() => {
                        childDivs[x - 1].style.background = "linear-gradient(to bottom, black, dodgerblue)";
                    }, 500);
                    clearInterval(intervalId);
                }
            } else {
                childDivs[x].style.background = "linear-gradient(to bottom, red, black)";
                height_px = childDivs[x].style.height;
                if (lowest >= (parseInt(height_px, 10))) {
                    lowest = parseInt(height_px, 10);
                    console.log(lowest);
                    display_lowest.textContent ="Manimum Value: "+  lowest;
                }
            }
            x = x + 1;
        } else {
            clearInterval(intervalId);
        }
    }

    intervalId = setInterval(change_color, 500);
}








