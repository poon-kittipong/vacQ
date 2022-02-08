const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

// Route files.
const hospitals = require("./routes/hospitals");

// Load env vars.
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Mount hospitals
app.use("/api/v1/hospitals", hospitals);

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
