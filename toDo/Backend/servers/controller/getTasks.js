import fs from 'fs';
import express, { json } from 'express';
const app = express();
function getTasks(req,res){


    try {
            //here access the database
        fs.readFile("../models/tasks.json",'utf8',(err,data) => {
            if(data){
                const dataContent=JSON.parse(data,null,2);
                //when not empty json file
                if(dataContent.length > 0){
                    res.json(dataContent);
                // when json file is empty
                }else{
                    console.log("hi");
                    res.json({"id": null});
                }
            }else{
                console.log("Read Error: " +  err); 
            }
        });
    } catch (error) {
        res.send(JSON.parse(error,null,2));
    }
      
}

export default getTasks;

