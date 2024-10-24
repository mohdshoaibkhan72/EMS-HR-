require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dbConnection = require("./configs/db-config");
const authRoute = require("./routes/auth-route");
const adminRoute = require("./routes/admin-route");
const employeeRoute = require("./routes/employee-route");
const leaderRoute = require("./routes/leader-route");
const errorMiddleware = require("./middlewares/error-middleware");
const ErrorHandler = require("./utils/error-handler");
const { auth, authRole } = require("./middlewares/auth-middleware");

const PORT = process.env.PORT || 5500;
const { CLIENT_URL } = process.env || "https://ems-hr.vercel.app";

// Fix Mongoose Deprecation Warning
mongoose.set("strictQuery", false);

// Initialize Express App
const app = express();

// Database Connection
dbConnection();

// CORS Configuration
const corsOption = {
  credentials: true,
  origin: [
    "http://localhost:3000",
    "http://1.1.1.111:3000",
    "https://ems-hr.vercel.app",
    CLIENT_URL,
  ],
};
app.use(cors(corsOption));

// Middleware Setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/admin", auth, authRole(["admin"]), adminRoute);
app.use("/api/employee", auth, authRole(["employee", "leader"]), employeeRoute);
app.use("/api/leader", auth, authRole(["leader"]), leaderRoute);

// Error Handling
app.use((req, res, next) => {
  return next(ErrorHandler.notFound("The Requested Resources Not Found"));
});

app.use(errorMiddleware);

// Root Route
app.get("/shoiab", (req, res) => {
  res.json("OK");
});

// Start the Server
app.listen(PORT, () => console.log(`Listening On Port : ${PORT}`));
