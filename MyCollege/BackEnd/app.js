import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000; 

app.use(cors());
app.use(express.json()); 

app.post('/userRegistration', (req, res) => {
    console.log("get post");
    console.log(req.body);
    res.send("data recieved");
});
  
app.listen(PORT,()=>{
    console.log("Server is running on http://localhost:5000");
})