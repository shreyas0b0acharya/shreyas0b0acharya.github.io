import fs from 'fs';

// Function to delete a task from the database
export function deleteTask(req, res) {
    const filePath = "../models/tasks.json";

    // Read the database file
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.error("Read Error:", err);
            return res.status(500).send("Error reading database.");
        }

        try {
            let fileContent = data ? JSON.parse(data) : [];

            // Filter out the task with the given ID
            const newList = fileContent.filter(task => task.id !== req.body.id);

            // If no change, it means the task was not found
            if (newList.length === fileContent.length) {
                return res.status(404).send("Task not found.");
            }

            // Write the updated content back to the file
            fs.writeFile(filePath, JSON.stringify(newList, null, 2), (writeErr) => {
                if (writeErr) {
                    console.error("Write Error:", writeErr);
                    return res.status(500).send("Error deleting task.");
                }
                res.send("Task deleted successfully.");
            });

        } catch (parseError) {
            console.error("Parse Error:", parseError);
            res.status(500).send("Error processing data.");
        }
    });
}
