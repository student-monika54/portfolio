const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

app.all("/", (req, res) => {
  res.send("Backend is running hello world ");
});

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working 🚀" });
});

// Contact form route
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("New message:");
  console.log(name, email, message);

  res.json({ success: true });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});