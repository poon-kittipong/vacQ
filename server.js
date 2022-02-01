const express = require("express");
const dotenv = require("dotenv");

// Route files.
const hospitals = require("./routes/hospitals");

// Load env vars.
dotenv.config({ path: "./config/config.env" });

const app = express();

// Mount hospitals
app.use("/api/v1/hospitals", hospitals);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    "Server is running in",
    process.env.NODE_ENV,
    "mode on port",
    PORT
  )
);
