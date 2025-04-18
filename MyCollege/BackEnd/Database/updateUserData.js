import { db } from "./server.js";



export const updateUserData = (req,res) => {
    const {
        first_name,
        last_name,
        email,
        semester,
        section,
        lab_batch,
        branch
      } = req.body;
    
      const query = `
            UPDATE user_details
            SET first_name = ?, last_name = ?, semester = ?, section = ?, lab_batch = ?, branch = ?
            WHERE email = ?
        `;
    
      db.query(
        query,
        [first_name, last_name, semester, section, lab_batch, branch, email],
        (err, result) => {
          if (err) {
            console.error("❌ Error inserting data:", err);
            return res.status(500).send("Error saving data");
          } else {
            console.log("✅ Data inserted:", result);
            return res.status(200).send("User data update successfully");
          }
        }
      );
}