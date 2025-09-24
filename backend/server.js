import nodemailer from "nodemailer";
import dotenv from "dotenv";
const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Database setup
const db = new sqlite3.Database("./reviews.db", (err) => {
  if (err) console.error("DB Error: ", err.message);
  else console.log("Connected to SQLite database.");
});

db.run(`
  CREATE TABLE IF NOT EXISTS reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    rating INTEGER,
    description TEXT
  )
`);

// Routes
app.get("/reviews", (req, res) => {
  db.all("SELECT * FROM reviews ORDER BY id DESC", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post("/reviews", (req, res) => {
  const { name, rating, description } = req.body;
  if (!name || !rating || !description) {
    return res.status(400).json({ error: "All fields are required" });
  }
  const stmt = db.prepare("INSERT INTO reviews (name, rating, description) VALUES (?, ?, ?)");
  stmt.run([name, rating, description], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, name, rating, description });
  });
  stmt.finalize();
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

dotenv.config();
