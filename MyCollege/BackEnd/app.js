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
} from "./Database/updateNewsData.js"

const app = express();
const PORT = 5000; 

app.use(cors());
app.use(express.json()); 
app.post('/signUp',(req, res) => {
  ExistCheckAndSignUp(req,res);
});

app.post('/logIn',(req, res) => {
  ExistCheckAndLogIn(req,res);
});

// Express.js example
app.get('/getUserData', (req, res) => {
  getUserData(req,res);
});

app.post('/updateUserData',(req, res) => {
  updateUserData(req,res);
});


const router = express.Router();

router.get("/newsData", getNewsData);
router.post("/newsData", updateNewsData);
router.put("/newsData/:id", editNewsById);
router.delete("/newsData/:id", deleteNewsById);

app.use("/", router);

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:5000");
});