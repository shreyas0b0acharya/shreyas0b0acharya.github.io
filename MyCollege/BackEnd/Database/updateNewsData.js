import { db } from "./server.js";

// GET all news
export const getNewsData = (req, res) => {
  db.query("SELECT * FROM posts ORDER BY id DESC", (err, results) => {
    if (err) {
      console.error("Error fetching news:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(200).json(results);
  });
};

// POST: bulk insert or update
export const updateNewsData = (req, res) => {
  const newsData = req.body;
  console.log(newsData);

  if (!Array.isArray(newsData)) {
    return res.status(400).json({ error: "Invalid data format. Expected an array." });
  }
  const sql = `INSERT INTO posts(id, title, content, likes)
  VALUES (?, ?, ?, ?)
  ON DUPLICATE KEY UPDATE
    title = VALUES(title),
    content = VALUES(content),
    likes = VALUES(likes);
  `;
    newsData.forEach(news => {

      const values = [news.id, news.title, news.content, news.likes];
    
      db.query(sql, values, (err, result) => {
        if (err) {
          console.error("Error inserting data:", err);
          return res.status(500).json({ error: "Database error" });
        }
      });
    })
      
    res.status(200).json({ message: "News data saved successfully" });

  //   const values = newsData.map((news) => [news.id, news.title, news.content, news.likes]);
  //   console.log(values);
    

  //   
};

export const editNewsById = (req, res) => {
    const { id } = req.params;
    console.log(id);
    
    const { title, content, likes } = req.body;
    console.log(title, content, likes );

    // Validate inputs
    if (!id || title === undefined || content === undefined || likes === undefined) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const sql = `
      UPDATE posts SET title = ?, content = ?, likes = ?
      WHERE id = ?
    `;

    db.query(sql, [title, content, likes, id], (err, result) => {
      if (err) {
        console.error("Error updating news:", err);
        return res.status(500).json({ error: "Database error" });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "News item not found" });
      }

      res.status(200).json({ message: "News updated successfully" });
    });
};


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