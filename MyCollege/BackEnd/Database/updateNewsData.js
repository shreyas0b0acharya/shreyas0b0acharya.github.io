import { db } from "./server.js"; 

// this is for College news and updates in the home screen 
//Accessible only for Admin

// GET all news
export const getNewsData = (req, res) => {
  db.query("SELECT * FROM posts ORDER BY id DESC", (err, results) => {
    if (err) {
      console.error("Error fetching news:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(200).json(results); // Send fetched news data as response
  });
};

// insert if not exist or update news if exist 
export const updateNewsData = (req, res) => {
  const newsData = req.body;
  console.log(newsData);

  // check whether given data is array or not
  if (!Array.isArray(newsData)) {
    return res.status(400).json({ error: "Invalid data format. Expected an array." });
  }

  // SQL query for insert or update
  const sql = `
    INSERT INTO posts (id, title, content, likes)
    VALUES (?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
      title = VALUES(title),
      content = VALUES(content),
      likes = VALUES(likes)
  `;

  // Loop through each news items in array
  newsData.forEach(news => {
    const values = [news.id, news.title, news.content, news.likes];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Error inserting or updating data:", err);
        return res.status(500).json({ error: "Database error" });
      }
    });
  });
  res.status(200).json({ message: "News data saved successfully" });
};

// update a news item by ID
export const editNewsById = (req, res) => {
  const { id } = req.params;
  const { title, content, likes } = req.body;

  console.log("Editing ID:", id);
  console.log("New values:", title, content, likes);

  // Check for undefined data
  if (!id || title === undefined || content === undefined || likes === undefined) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const sql = `
    UPDATE posts 
    SET title = ?, content = ?, likes = ?
    WHERE id = ?
  `;

  db.query(sql, [title, content, likes, id], (err, result) => {
    if (err) {
      console.error("Error updating news:", err);
      return res.status(500).json({ error: "Database error" });
    }

    // if news item not found for given id
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "News item not found" });
    }

    res.status(200).json({ message: "News updated successfully" });
  });
};

// remove a news item by ID
export const deleteNewsById = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM posts WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error("Error deleting news:", err);
      return res.status(500).json({ error: "Database error" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "News item not found" });
    }

    res.status(200).json({ message: "News item deleted successfully" });
  });
};
