import fs from 'fs';

// Function to edit a task in the database
export function editTask(req, res) {
    const filePath = "../models/tasks.json"; 

    // Read the database file
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.error("Read Error:", err);
            return res.status(500).send("Error reading database.");
        }

        try {
            let fileContent = data ? JSON.parse(data) : [];

            // Find the task by ID
            let task = fileContent.find(task => task.id === req.body.id);

            if (!task) {
                return res.status(404).send("Task not found.");
            }

            // Update the task
            task.task = req.body.task;

            // Write the updated content back to the file
            fs.writeFile(filePath, JSON.stringify(fileContent, null, 2), (writeErr) => {
                if (writeErr) {
                    console.error("Write Error:", writeErr);
                    return res.status(500).send("Error updating task.");
                }
                res.send("Task edited successfully.");
            });

        } catch (parseError) {
            console.error("Parse Error:", parseError);
            res.status(500).send("Error processing data.");
        }
    });
}
