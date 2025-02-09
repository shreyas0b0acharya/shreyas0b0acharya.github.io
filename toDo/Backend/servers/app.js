//cd toDo/Backend/servers

import express, { json } from 'express';
import cors from "cors";
import addTask from './controller/addTask.js';
import getTasks from './controller/getTasks.js';

const app = express();
const PORT = 3000;
    
app.use(cors()); 
app.use(json());  // Middleware to parse json in  body

// Handle POST request
app.post('/addTask', (req, res) => addTask(req,res)); 
app.get('/getTasks',(req,res) => getTasks(req,res));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));