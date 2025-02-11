import fs from 'fs';

// Function to mark a task as completed
export function taskCompleted(req, res) {
    const filePath = "../models/tasks.json";

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.error("Read Error:", err);
            return res.status(500).json({ error: "Error reading database." });
        }

        try {
            let fileContent = data ? JSON.parse(data) : [];

            // Find the task by ID
            let task = fileContent.find(task => task.id === req.body.id);

            if (!task) {
                return res.status(404).json({ error: "Task not found." });
            }

            // Update the task's completed status
            task.completed = req.body.completed;

            // Write updated tasks back to the database
            fs.writeFile(filePath, JSON.stringify(fileContent, null, 2), (writeErr) => {
                if (writeErr) {
                    console.error("Write Error:", writeErr);
                    return res.status(500).json({ error: "Error updating database." });
                }
                res.json({ message: "Task updated successfully." });
            });

        } catch (parseError) {
            console.error("Parse Error:", parseError);
            res.status(500).json({ error: "Error processing data." });
        }
    });
}
