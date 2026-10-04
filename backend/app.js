const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const scanRouter = require("./routers/scanRouter");

app.use("/api/scan", scanRouter);

app.get("/", (req, res) => {
    res.json({
        message: "OWASP Automated Testing System Backend is running"
    });
});

module.exports = app;