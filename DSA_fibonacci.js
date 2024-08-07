function start_series() {
    
    function create_div(height) {
        const graph_div = document.getElementById("graph_div");
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.height = height + "px";
        //console.log(height + "px");
        graph_div.appendChild(box);
        
    }
    var number_in_series=document.getElementById("number_in_series").value;
    var d1=0;
    var d2=1;
    if (number_in_series == 1) {
            console.log(number_in_series)
            
            console.log(d1,d2);
            setTimeout(create_div,1000,0.1)
    }else if(number_in_series == 2){
            console.log(number_in_series)
            setTimeout(create_div,1000,0.1)
            setTimeout(create_div,1000,0.5)
    }else{
        if (number_in_series>13) {
            number_in_series=13
        }
        var i =0;
        function create_div() {
                var d3=d2+d1; 
                console.log(d3*0.5);
                d2=d1;
                d1=d3;

                const graph_div = document.getElementById("graph_div");
                const box = document.createElement("div");
                box.classList.add("box");
                box.style.height = d3*0.5 + "px";
                //console.log(height + "px");
                graph_div.appendChild(box);
                i++;  
                if (i>=number_in_series) {
                    clearInterval(interval_id);
                
                }
                if (x >2) {
                    const graph_div = document.getElementById("graph_div")
                    const child_div = graph_div.getElementsByClassName("box")

                    setTimeout(() => {
                        child_div[x-1].style.backgroundColor = "yellow";
                        child_div[x-2].style.backgroundColor = "yellow";
                    }, 1000);

                    child_div[x-1].style.backgroundColor ="red";
                    child_div[x-2].style.backgroundColor = "red";
                }
        }

        interval_id=setInterval(create_div,1000);
        
        

    }    
        
        
}    
