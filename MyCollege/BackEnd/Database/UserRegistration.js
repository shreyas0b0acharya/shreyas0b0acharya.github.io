import bcrypt from "bcrypt";
import { db } from "./server.js";

async function hashPassword(plainPassword) {
  const hashed = await bcrypt.hash(plainPassword, 10);
  return hashed;
}

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
    const hashedPassword = await hashPassword(password);

    const insertUserDetails = `
      INSERT INTO user_details 
      (first_name, last_name, usn, email, password, semester, section, lab_batch, branch) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    db.query(
      insertUserDetails,
      [first_name, last_name, usn, email, hashedPassword, semester, section, lab_batch, branch],
      (err, result) => {
        if (err) {
          console.error("❌ Error inserting data:", err);
          return res.status(500).send("Error saving data");
        } else {
          console.log("✅ Data inserted:", result);
          return res.status(200).send("User registered successfully");
        }
      }
    );
  } catch (error) {
    console.error("❌ Error hashing password:", error);
    return res.status(500).send("Internal server error");
  }
};

export const login = (req, res) => {
  const { email, password } = req.body;

  const getUserQuery = `SELECT * FROM user_details WHERE email = ?`;

  db.query(getUserQuery, [email], async (err, results) => {
    if (err) {
      console.error("❌ Error fetching user:", err);
      return res.status(500).send("Server error");
    }

    if (results.length === 0) {
      return res.status(401).send("User not found. Please sign up.");
    }

    const user = results[0];
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).send("Incorrect password.");
    }

    console.log("✅ User logged in:", user);
    return res.status(200).send("You are logged in");
  });
};

export const ExistCheckAndSignUp = (req, res) => {
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

  db.query(checkUserExist, [usn, email, usn, email], (err, result) => {
    if (err) {
      console.error("❌ Error checking user existence:", err);
      return res.status(500).send("Error in checking user existence");
    } else if (result.length > 0) {
      console.log("User exists:", result[0]);
      return res.status(200).send("User exists: You can log in directly");
    } else {
      return signUp(req, res);
    }
  });
};

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

  db.query(checkUserExist, [usn, email, usn, email], (err, result) => {
    if (err) {
      console.error("❌ Error checking user existence:", err);
      return res.status(500).send("Error in checking user existence");
    } else if (result.length > 0) {
      console.log("User exists:", result[0]);
      return login(req, res);
    } else {
      return res.status(404).send("User does not exist: Please sign up.");
    }
  });
};
