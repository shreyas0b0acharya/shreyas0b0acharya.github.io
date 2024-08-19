let my_list = [];
let x=10;
function blocks(){
    const graph_div = document.getElementById("graph_id");
    graph_div.textContent='';
    my_list = [];

    const volumeInput = document.getElementById("list_size_volume");
    const volumeValue = volumeInput.value;

    for (let i = 0; i < volumeValue; i++) {
        let height = parseInt((Math.random())*400,10);
        
        my_list.push(height);
        const new_div = document.createElement("div");
        new_div.classList.add("new_div");

        new_div.style.height = height+"px";
        graph_div.appendChild(new_div);
    }
    console.log(my_list);
}
blocks();
sorted_list = []
function start_sorting(){
    async function sortBoxes() {
        const speed_input = document.getElementById("speed_volume");
        const speed_value = speed_input.value;

        const graph_div=document.getElementById("graph_id");
        var boxes = graph_div.children;
        for (let i = 0; i < my_list.length; i++) {
            min_index=i; 
            await new Promise(resolve => setTimeout(resolve, speed_value));
            boxes[min_index].style.backgroundColor = "gray";
            await new Promise(resolve => setTimeout(resolve, speed_value));
            boxes[min_index].style.backgroundColor = "green";

            for (let j = i+1; j < my_list.length; j++) {
                
                    boxes[j].style.backgroundColor = "gray";
                if (my_list[j]<my_list[min_index]){
                    await new Promise(resolve => setTimeout(resolve, speed_value));
                    boxes[min_index].style.backgroundColor = "gray";
                    await new Promise(resolve => setTimeout(resolve, speed_value));
                    boxes[min_index].style.backgroundColor = "lightcoral";
                    min_index = j;
                    await new Promise(resolve => setTimeout(resolve, speed_value));
                    boxes[min_index].style.backgroundColor = "green";

                }else{
                    await new Promise(resolve => setTimeout(resolve, speed_value));
                    boxes[j].style.backgroundColor = "lightcoral";
                }
                
            }
            sorted_list.push([i,min_index]);
            [my_list[i],my_list[min_index]]=[my_list[min_index],my_list[i]];  
            var position_div_height = parseInt(boxes[i].style.height, 10) + "px";
            var min_div_height = parseInt(boxes[min_index].style.height, 10) + "px";
            await new Promise(resolve => setTimeout(resolve, speed_value));
            boxes[i].style.height = min_div_height;
            boxes[min_index].style.height = position_div_height;
            await new Promise(resolve => setTimeout(resolve, speed_value));
            boxes[min_index].style.backgroundColor = "lightcoral";
            boxes[i].style.backgroundColor = "green";

            
        }
        console.log(my_list);
        console.log(sorted_list);


    }
    sortBoxes();
}


  
  

