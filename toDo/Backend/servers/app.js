//cd Backend/servers

import express, { json } from 'express';
import cors from "cors";
import addTask from './controller/addTask.js';
import getTasks from './controller/getTasks.js';
import {deleteTask} from './controller/deleteTask.js';
import { editTask } from './controller/editTask.js';
import { taskCompleted } from './controller/taskCompleted.js';

const app = express();
const PORT = 3000;
    
app.use(cors()); 
app.use(json());  // Middleware to parse json in  body

// Handle POST request
app.post('/addTask', (req, res) => addTask(req,res)); 
app.get('/getTasks',(req,res) => getTasks(req,res));

app.delete('/deleteTask',(req,res) => deleteTask(req,res));
app.put('/editTask',(req,res) => editTask(req,res));

app.put('/taskCompleted',(req,res) => taskCompleted(req,res));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));