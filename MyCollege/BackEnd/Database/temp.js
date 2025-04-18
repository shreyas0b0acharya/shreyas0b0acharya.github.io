import { db } from './server.js';

// Convert db.query to return a Promise
const queryAsync = (sql, values) => {
    return new Promise((resolve, reject) => {
        db.query(sql, values, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

export const userExistCheck = async (req) => {
    const { usn, email } = req.body;
    const sql = `
        SELECT * FROM user_details
        WHERE usn = ? OR email = ?;
    `;
    const results = await queryAsync(sql, [usn, email]);
    return results.length > 0;
};

export const signUp = async (req, res) => {
    try {
        const {
            first_name,
            last_name,
            usn,
            email,
            password,
            semester,
            section,
            lab_batch
        } = req.body;

        const sql = `
            INSERT INTO user_details 
            (first_name, last_name, usn, email, password, semester, section, lab_batch) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?);
        `;
        const result = await queryAsync(sql, [first_name, last_name, usn, email, password, semester, section, lab_batch]);
        console.log("✅ Data inserted:", result);
        res.status(200).send("User registered successfully");
    } catch (err) {
        console.error("❌ Error inserting data:", err);
        res.status(500).send("Error saving data");
    }
};

export const login = async (req, res) => {
    const { usn, email, password } = req.body;
    const sql = `
        SELECT * FROM user_details 
        WHERE (usn = ? OR email = ?) AND password = ?;
    `;
    try {
        const results = await queryAsync(sql, [usn, email, password]);
        if (results.length === 0) {
            return res.status(401).send("Invalid credentials");
        }
        console.log("User exists:", results[0]);
        res.status(200).send("Correct password: you are logged in");
    } catch (err) {
        console.error("Error in checking user:", err);
        res.status(500).send("Server error while checking user");
    }
};

export const handleUserAuth = async (req, res) => {
    try {
        const exists = await userExistCheck(req);
        if (exists) {
            await login(req, res);
        } else {
            await signUp(req, res);
        }
    } catch (err) {
        console.error("Authentication error:", err);
        res.status(500).send("An error occurred during authentication");
    }
};
