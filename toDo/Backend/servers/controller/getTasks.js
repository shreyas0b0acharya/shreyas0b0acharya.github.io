import fs from 'fs';

// Function to get tasks from the database
export function getTasks(req, res) {
    const filePath = "../models/tasks.json";

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.error("Read Error:", err);
            return res.status(500).json({ error: "Error reading database." });
        }

        try {
            const dataContent = data ? JSON.parse(data) : [];

            // If the JSON file is empty or contains no tasks
            if (dataContent.length === 0) {
                return res.json({ id: null });
            }

            // Return tasks as JSON response
            res.json(dataContent);

        } catch (parseError) {
            console.error("Parse Error:", parseError);
            res.status(500).json({ error: "Error processing data." });
        }
    });
}

export default getTasks;
