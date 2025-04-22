import { db } from "./server.js";

// Used in Profile to edit the profile

// Update user profile data based on email
export const updateUserData = (req, res) => {
  const {
    first_name,
    last_name,
    email,
    semester,
    section,
    lab_batch,
    branch
  } = req.body;

  // SQL query to update user details based on the email
  const query = `
    UPDATE user_details
    SET 
      first_name = ?, 
      last_name = ?, 
      semester = ?, 
      section = ?, 
      lab_batch = ?, 
      branch = ?
    WHERE email = ?
  `;

  db.query(
    query,
    [first_name, last_name, semester, section, lab_batch, branch, email],
    (err, result) => {
      if (err) {
        console.error("Error updating user data:", err);
        return res.status(500).send("Error saving data");
      } else {
        console.log("User data updated:", result);
        return res.status(200).send("User data updated successfully");
      }
    }
  );
};
