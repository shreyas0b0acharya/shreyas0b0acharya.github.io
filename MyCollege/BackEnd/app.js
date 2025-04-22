// ✅ Import required modules
import express from 'express';
import cors from 'cors';

import { ExistCheckAndSignUp, ExistCheckAndLogIn } from './Database/UserRegistration.js';
import { getUserData } from './Database/getUserData.js';
import { updateUserData } from './Database/updateUserData.js';
import {
  getNewsData,
  updateNewsData,
  editNewsById,
  deleteNewsById
} from "./Database/updateNewsData.js";

// Create Express app
const app = express();

//  Middleware setup
app.use(cors());          
// / Parse incoming JSON requests
app.use(express.json());     

// User authentication routes
app.post('/signUp', (req, res) => {
  ExistCheckAndSignUp(req, res);
});

app.post('/logIn', (req, res) => {
  ExistCheckAndLogIn(req, res);
});

// User data management routes
app.get('/getUserData', (req, res) => {
  getUserData(req, res);
});

app.post('/updateUserData', (req, res) => {
  updateUserData(req, res);
});

// College News management routes using a router
const router = express.Router();

router.get("/newsData", getNewsData);             // Fetch all news
router.post("/newsData", updateNewsData);         // Add new news
router.put("/newsData/:id", editNewsById);        // Edit news by ID
router.delete("/newsData/:id", deleteNewsById);   // Delete news by ID

app.use("/", router);


//PORT
const PORT = 5000;
// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
