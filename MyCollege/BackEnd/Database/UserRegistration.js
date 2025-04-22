import bcrypt from "bcrypt";
import { db } from "./server.js";

// function to hash a plain password
async function hashPassword(plainPassword) {
  const hashed = await bcrypt.hash(plainPassword, 10);
  return hashed;
}

// Handles user sign-up
export const signUp = async (req, res) => {
  const {
    first_name,
    last_name,
    usn,
    email,
    password,
    semester,
    section,
    lab_batch,
    branch
  } = req.body;

  try {
    // Hash the plain password 
    const hashedPassword = await hashPassword(password);

    // SQL query to insert user details
    const insertUserDetails = `
      INSERT INTO user_details 
      (first_name, last_name, usn, email, password, semester, section, lab_batch, branch) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    // Execute the query
    db.query(
      insertUserDetails,
      [first_name, last_name, usn, email, hashedPassword, semester, section, lab_batch, branch],
      (err, result) => {
        if (err) {
          console.error("Error inserting user:", err);
          return res.status(500).send("Error saving user data");
        } else {
          console.log("User registered:", result);
          return res.status(200).send("User registered successfully");
        }
      }
    );
  } catch (error) {
    console.error("Error hashing password:", error);
    return res.status(500).send("Internal server error");
  }
};

// Handles user login
export const login = (req, res) => {
  const { email, password } = req.body;

  const getUserQuery = `SELECT * FROM user_details WHERE email = ?`;

  db.query(getUserQuery, [email], async (err, results) => {
    if (err) {
      console.error("Error fetching user:", err);
      return res.status(500).send("Server error");
    }

    if (results.length === 0) {
      return res.status(401).send("User not found. Please sign up.");
    }

    const user = results[0];

    // Compare plain password with hashed password from database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).send("Incorrect password.");
    }

    console.log("User logged in:", user.email);
    return res.status(200).send("you are logged in");
  });
};

// Check if user already exists (by USN or email) before signing up
export const ExistCheckAndSignUp = async (req, res) => {
  const { usn, email } = req.body;

  const checkUserExist = `
    SELECT 
      CASE 
        WHEN usn = ? THEN 'usn'
        WHEN email = ? THEN 'email'
      END AS match_type
    FROM user_details
    WHERE usn = ? OR email = ?
  `;

  //Execute SQL query
  db.query(checkUserExist, [usn, email, usn, email], async (err, result) => {
    if (err) {
      console.error("Error checking existence:", err);
      return res.status(500).send("Error checking user existence");
    } else if (result.length > 0) {
      console.log("User already exists:", result[0]);
      return res.status(200).send("User already exists. Please log in.");
    } else {

      // Proceed to register new user
      return await signUp(req, res);
    }
  });
};

// Check if user exists (by USN or email) before login
export const ExistCheckAndLogIn = (req, res) => {
  const { usn, email } = req.body;

  const checkUserExist = `
    SELECT 
      CASE 
        WHEN usn = ? THEN 'usn'
        WHEN email = ? THEN 'email'
      END AS match_type
    FROM user_details
    WHERE usn = ? OR email = ?
  `;

  //Execute SQL query
  db.query(checkUserExist, [usn, email, usn, email], (err, result) => {
    if (err) {
      console.error("Error checking existence:", err);
      return res.status(500).send("Error checking user existence");
    } else if (result.length > 0) {
      console.log("User exists:", result[0]);
      // Proceed to login if user exist
      return login(req, res); 
    } else {
      return res.status(404).send("User not found. Please sign up.");
    }
  });
};
