const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");

// Route files.
const hospitals = require("./routes/hospitals");
const auth = require("./routes/auth");
const appointments = require("./routes/appointments");

// Load env vars.
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Mount routes
app.use("/api/v1/hospitals", hospitals);
app.use("/api/v1/auth", auth);
app.use("/api/v1/appointments", appointments);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    "Server is running in",
    process.env.NODE_ENV,
    "mode on port",
    PORT
  )
);

// Handle unhandled promise rejection.
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);

  // Close the server
  server.close(() => process.exit(1));
});
