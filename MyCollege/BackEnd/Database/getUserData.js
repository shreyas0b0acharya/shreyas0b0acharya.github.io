// Import the database connection from server.js
import { db } from "./server.js";

// Controller function to fetch user data by email. (used in Profile page to mget data)
export const getUserData = (req, res) => {
  const email = req.query.email;

  // select user by email
  const getUserByEmail = `SELECT * FROM user_details WHERE email = ?`;

  db.query(getUserByEmail, [email], (err, result) => {
    if (err) {
      console.error("Error getting data:", err);
      return res.status(500).send("Internal Server Error: Could not fetch data");
    }

    if (result.length === 0) {
      return res.status(404).send("User not found");
    }

    console.log("Data fetched successfully:", result);
    return res.json(result[0]); // Return the details if found
  });
};
