const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const scanRouter = require("./routers/scanRouter");
const authRouter = require("./routers/authRouter");

app.use("/api/auth", authRouter);
app.use("/api/scan", scanRouter);

app.get("/", (req, res) => {
  res.json({
    message: "vulNexa OWASP Automated Security Platform Backend is running",
    version: "2.0.0",
  });
});

module.exports = app;