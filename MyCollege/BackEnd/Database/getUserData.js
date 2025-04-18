import {db} from "./server.js";

export const getUserData = (req,res) =>{
  const email = req.query.email;
  const getUserByEmail = `SELECT * FROM user_details WHERE email = ?`;

  db.query(
    getUserByEmail,email,
    (err, result) => {
        if (err) {
          console.error("❌ Error getting data:", err);
          return res.status(500).send("Error getting data");
        } else {
          console.log("✅ Data fetched:", result);
          return res.json(result[0]);
        }
      }
  );

}