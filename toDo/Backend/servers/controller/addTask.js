import fs from 'fs';

//this function is used to add task into the database
function addTask(req,res){
    const task = req.body;
    // Send a response to the client
    res.send('Task received successfully');  
    
    //here access the database
    fs.readFile("../models/tasks.json",(err,data) => {
        if(data){
            let fileContent ;
            //when not empty json file
            if(data != []){
                let id=0;
                fileContent = JSON.parse(data);

                //to find the non assigned id in the json file/ array
                let sortedFileContent = [...fileContent];//this can make the new obj
                sortedFileContent.sort((a,b) => a.id - b.id);
                for (let i = 0 ; i < sortedFileContent.length; i++) {
                    if(sortedFileContent[i].id != i){
                        id = i;
                        break;
                    }else{
                        id = sortedFileContent.length;
                    }
                }
                
                //update current task id and push into array
                task.id = id;
                fileContent.push(task);
            }

            // to write the task into database
            fs.writeFile("../models/tasks.json",JSON.stringify(fileContent,null,2),(err) => {
                if(err){
                    console.log("Write Error: " +err);
                }
            });

        }else{
            console.log("Read Error: " +  err); 
        }
    });
}

export default addTask;

