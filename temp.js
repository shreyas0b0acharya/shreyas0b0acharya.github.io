function changeDivColors() {
    const childDivs = main_box_div.children;
    let x=0;
    let lowest = 0;
    let display_lowest = document.getElementById("lowest_disp");
    let height_px =0;
    function change_color() {
        console.log(parseFloat(childDivs[x].style.height));
        if (x<childDivs.length) {
            if (x>=1){
                
                height_px=childDivs[x].style.height;
                if (  lowest <= (parseInt(height_px,10))){
                    lowest =(parseInt(height_px,10))
                    console.log(parseInt(height_px,10));
                    display_lowest.textContent = lowest;
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
                if (  lowest <= (parseInt(height_px,10))){
                    lowest =(parseInt(height_px,10))
                    console.log(parseInt(height_px,10));
                    display_lowest.textContent = lowest;
                }
            }
            x=x+1;
        }else{
            clearInterval(intervalId)
        }
        
    }
    const intervalId = setInterval(change_color, 500);  
}
