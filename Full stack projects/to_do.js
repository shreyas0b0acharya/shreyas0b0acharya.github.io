// add_btn button to open floating page
function visibility(para) {
    const elem1=document.getElementById("task_adder_block");
    elem1.style.visibility =para;
    const elem2=document.getElementById("blur_window");
    elem2.style.visibility =para;
    } 

function open_add_task_window() {
    visibility('visible')
    } 

function add_task_to_list(){
    visibility('hidden')
    
    
    //input task
    const h1=document.createElement('h1');
    h1.textContent=document.getElementById("task_input").value;

    const h3=document.createElement('h1');
    h3.textContent="calendar_today";
    h3.className="material-icons";

    const h2=document.createElement('h1');
    h2.textContent=document.getElementById("date_input").value;

    const date_div=document.createElement('div');
    date_div.id="date_div";
    date_div.appendChild(h3);
    date_div.appendChild(h2);
    
    //total div
    const li_item=document.createElement('div');
    li_item.id='li_id';
    li_item.appendChild(h1);
    li_item.appendChild(date_div)
   

    const list_id=document.getElementById("list_div");
    list_id.appendChild(li_item);

    function saveToFile(data, filename) {
        const blob = new Blob([data], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    }
    saveToFile(h2.textConten, 'example.txt');
}