const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

const app = express();

// Use CORS
app.use(cors({
  origin: "http://localhost:5173", // Your frontend URL
  credentials: true, // Allow cookies
}));

// Use JSON body parser middleware
app.use(express.json());

// Use routes
app.use(authRoutes);  // Auth routes (signup, login)
app.use(userRoutes);  // User-related routes (profile, etc.)

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
