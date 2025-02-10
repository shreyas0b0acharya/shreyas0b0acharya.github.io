import fs from 'fs';

export function deleteTask(req,res) {

    fs.readFile("../models/tasks.json",(err,data) => {
            if(data){
                let newList;
                //when not empty json file
                if(data != []){
                    let fileContent = JSON.parse(data);
                    //this filters the objects in list and remove the object with id we send
                    newList = fileContent.filter(fileContent => fileContent.id !== req.body.id);
                }
    
                // to write the task into database
                fs.writeFile("../models/tasks.json",JSON.stringify(newList,null,2),(err) => {
                    if(err){
                        console.log("Write Error: " +err);
                    }else{
                        res.send("Task deleted Successfully");
                    }
                });
    
            }else{
                console.log("Read Error: " +  err); 
            }
        });
}
