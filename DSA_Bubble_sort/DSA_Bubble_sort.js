function blocks(){
    const graph_div = document.getElementById("graph_id");

    const volumeInput = document.getElementById("list_size_volume");
    const volumeValue = volumeInput.value;

    for (let i = 0; i < volumeValue; i++) {
        let height = parseInt((Math.random())*400,10)

        const new_div = document.createElement("div");
        new_div.classList.add("new_div");
        new_div.style.height = height+"px";
        graph_div.appendChild(new_div);
    }
}
function start_sorting(){
    async function sortBoxes() {
        const graph_div=document.getElementById("graph_id");
        var boxes = graph_div.children;
        for (let i = 0; i < boxes.length; i++) {
          for (let j = 0; j < boxes.length - 1 - i; j++) {
            const speed_input = document.getElementById("speed_volume");
            const speed_value = speed_input.value;

            var present_div = parseInt(boxes[j].style.height, 10);
            var next_div = parseInt(boxes[j + 1].style.height, 10);
            if (present_div > next_div) {
                let height1 = parseInt(boxes[j].style.height, 10) + "px";
                let height2 = parseInt(boxes[j + 1].style.height, 10) + "px";
                boxes[j].style.backgroundColor = "black"; 
                boxes[j + 1].style.backgroundColor = "black"; 
                await new Promise(resolve => setTimeout(resolve, speed_value));
                boxes[j].style.height = height2;
                boxes[j + 1].style.height = height1;
                await new Promise(resolve => setTimeout(resolve, speed_value));
                boxes[j].style.backgroundColor = "purple"; 
                boxes[j + 1].style.backgroundColor = "purple"; 
                }else{
                boxes[j].style.backgroundColor = "black"
                boxes[j + 1].style.backgroundColor = "black"; 
                await new Promise(resolve => setTimeout(resolve, speed_value));
                boxes[j].style.backgroundColor = "purple"; 
                boxes[j + 1].style.backgroundColor = "purple"; 
            }
          }
        }
      }
      
      sortBoxes();
}