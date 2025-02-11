import fs from 'fs';

// Function to add a task to the database
function addTask(req, res) {
    const filePath = "../models/tasks.json";
    const task = req.body;

    // Read the database file
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.error("Read Error:", err);
            return res.status(500).send("Error reading database.");
        }

        try {
            let fileContent = data ? JSON.parse(data) : [];

            // Assign a unique ID to the task
            const existingIds = new Set(fileContent.map(task => task.id));
            let newId = 0;
            while (existingIds.has(newId)) {
                newId++;
            }

            // Add the task with the new ID
            task.id = newId;
            fileContent.unshift(task);

            // Write the updated content back to the file
            fs.writeFile(filePath, JSON.stringify(fileContent, null, 2), (writeErr) => {
                if (writeErr) {
                    console.error("Write Error:", writeErr);
                    return res.status(500).send("Error saving task.");
                }
                res.send("Task added successfully.");
            });

        } catch (parseError) {
            console.error("Parse Error:", parseError);
            res.status(500).send("Error processing data.");
        }
    });
}

export default addTask;
