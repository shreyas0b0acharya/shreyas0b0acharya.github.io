import express, { json } from 'express';
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(json());  // Middleware to parse text/plain body

// Handle POST request
app.post('/addTask', (req, res) => {
    console.log('Request Headers:', req.headers);  // Log the request headers
    console.log('Request Body:', req.body);          // Log the request body
    const wish = req.body;
    console.log('Received data:', wish);
    res.send('Task received successfully');  // Send a response to the client
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));