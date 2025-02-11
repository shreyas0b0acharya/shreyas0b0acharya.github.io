import express from 'express';
import cors from "cors";
import fetch from 'node-fetch'; // Install if using Node.js < 18
import addTask from './controller/addTask.js';
import getTasks from './controller/getTasks.js';
import { deleteTask } from './controller/deleteTask.js';
import { editTask } from './controller/editTask.js';
import { taskCompleted } from './controller/taskCompleted.js';

const app = express();
const PORT = 3000; 

app.use(cors());
app.use(express.json()); 

// Define Routes
app.post('/addTask', async (req, res) => await addTask(req, res));
app.get('/getTasks', async (req, res) => await getTasks(req, res));
app.delete('/deleteTask', async (req, res) => await deleteTask(req, res));
app.put('/editTask', async (req, res) => await editTask(req, res));
app.put('/taskCompleted', async (req, res) => await taskCompleted(req, res));

// Health check route (to keep server awake)
app.get("/ping", (req, res) => {
    res.send("Server is alive!");
});

// Prevent Render Free Plan from sleeping
setInterval(async () => {
    try {
        await fetch("https://your-app.onrender.com/ping");
        console.log("Pinged server to keep alive.");
    } catch (err) {
        console.error("Ping failed:", err);
    }
}, 600000); // Every 10 minutes

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));