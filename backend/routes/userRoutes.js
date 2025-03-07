const express = require("express");
const router = express.Router();
const db = require("./db"); // Import the DB connection from another file
const { authenticateToken } = require("./authMiddleware"); // Import middleware for authentication

// Protected Route (Get User Info)
router.get("/user", authenticateToken, (req, res) => {
  const userId = req.user.userId;

  db.query("SELECT * FROM users WHERE user_id = ?", [userId], (err, results) => {
    if (err) {
      console.error("Database query error:", err);
      return res.status(500).json({ error: err.message });
    }
    res.json(results[0]);
  });
});

module.exports = router;
