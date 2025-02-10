
import fs from 'fs';

//this function is used to add task into the database
export function taskCompleted(req,res){
    // Send a response to the client
     
    
    //here access the database
    fs.readFile("../models/tasks.json",(err,data) => {
        if(data){
            let fileContent ;
            //when not empty json file
            if(data != []){
                fileContent = JSON.parse(data);

                //to find the non assigned id in the json file/ array
                let sortedFileContent = [...fileContent];//this can make the new obj
                // sortedFileContent.sort((a,b) => a.id - b.id);
                for (let i = 0 ; i < sortedFileContent.length; i++) {
                    console.log(sortedFileContent[i].id , req.body.id)
                    if(sortedFileContent[i].id === req.body.id){
                        sortedFileContent[i].completed = req.body.completed;
                    }
                }
                
            }

            // to write the task into database
            fs.writeFile("../models/tasks.json",JSON.stringify(fileContent,null,2),(err) => {
                if(err){
                    console.log("Write Error: " +err);
                }else{
                    res.send('Task Edit successfully'); 
                }
            });

        }else{
            console.log("Read Error: " +  err); 
        }
    });
}


