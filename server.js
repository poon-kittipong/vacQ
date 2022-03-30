const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const cors = require("cors");

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

// Sanitize data
app.use(mongoSanitize());

// Prevent XSS attacks
app.use(xss());

// Set security headers
app.use(helmet());

// Prevent http param pollutions
app.use(hpp());

// Enable CORS
app.use(cors());

// Rate Limiting
const limiter = rateLimit({
  windowsMs: 10 * 60 * 1000, // 10 mins
  max: 100,
});
app.use(limiter);

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
