require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const path = require("path");

const projectRoutes = require("./routes/projects");
const contactRoutes = require("./routes/contact");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 3001;

// Security headers
app.use(helmet());

// CORS — only needed in development (Vite dev server on a different port)
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: process.env.CLIENT_URL || "http://localhost:5173",
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
    }),
  );
}

// Serve built React app in production
const clientDist = path.join(__dirname, "../client/dist");
if (process.env.NODE_ENV === "production") {
  app.use(express.static(clientDist));
}

// Body parsing
app.use(express.json());

// Rate limiter for contact form (avoid spam)
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: { message: "Too many messages sent. Please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactLimiter, contactRoutes);
app.use("/api/auth", authRoutes);

// Health check
app.get("/api/health", (req, res) => res.json({ status: "ok" }));

// SPA catch-all — must come AFTER all API routes
if (process.env.NODE_ENV === "production") {
  app.get("/{*path}", (req, res) => {
    res.sendFile(path.join(clientDist, "index.html"));
  });
}

// Central error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(err.status || 500)
    .json({ message: err.message || "Internal server error" });
});

// Connect to MongoDB then start the server
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`),
    );
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });

module.exports = app;
