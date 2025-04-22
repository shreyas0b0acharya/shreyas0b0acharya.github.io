// // Import the database connection
// import { db } from './server.js'; 

// // function to convert db.query into a Promise based function
// const queryAsync = (sql, values) => {
//     return new Promise((resolve, reject) => {
//         db.query(sql, values, (err, results) => {
//             if (err) return reject(err); // Reject promise on error
//             resolve(results); // Resolve with result set
//         });
//     });
// };

// // Check if a user with given USN or email already exists
// export const userExistCheck = async (req) => {
//     const { usn, email } = req.body;

//     const sql = `
//         SELECT * FROM user_details
//         WHERE usn = ? OR email = ?;
//     `;

//     const results = await queryAsync(sql, [usn, email]);
//     return results.length > 0; // Return true if user exists
// };

// // Register a new user
// export const signUp = async (req, res) => {
//     try {
//         const {
//             first_name,
//             last_name,
//             usn,
//             email,
//             password,
//             semester,
//             section,
//             lab_batch
//         } = req.body;

//         const sql = `
//             INSERT INTO user_details 
//             (first_name, last_name, usn, email, password, semester, section, lab_batch) 
//             VALUES (?, ?, ?, ?, ?, ?, ?, ?);
//         `;

//         const result = await queryAsync(sql, [
//             first_name,
//             last_name,
//             usn,
//             email,
//             password,
//             semester,
//             section,
//             lab_batch
//         ]);

//         console.log("Data inserted:", result);
//         res.status(200).send("User registered successfully");
//     } catch (err) {
//         console.error("Error inserting data:", err);
//         res.status(500).send("Error saving user data");
//     }
// };

// // Log in an existing user
// export const login = async (req, res) => {
//     const { usn, email, password } = req.body;

//     const sql = `
//         SELECT * FROM user_details 
//         WHERE (usn = ? OR email = ?) AND password = ?;
//     `;

//     try {
//         const results = await queryAsync(sql, [usn, email, password]);

//         if (results.length === 0) {
//             // No user found with matching credentials
//             return res.status(401).send("Invalid credentials");
//         }

//         console.log("User authenticated:", results[0]);
//         res.status(200).send("Correct password: You are logged in");
//     } catch (err) {
//         console.error("Error during login:", err);
//         res.status(500).send("Server error while checking credentials");
//     }
// };

// // Handle both sign-up and login in a single route
// export const handleUserAuth = async (req, res) => {
//     try {
//         const exists = await userExistCheck(req);

//         if (exists) {
//             // if User exists proceed with login
//             await login(req, res);
//         } else {
//             //if New user proceed with sign-up
//             await signUp(req, res);
//         }
//     } catch (err) {
//         console.error("Authentication process failed:", err);
//         res.status(500).send("An error occurred during authentication");
//     }
// };
