const express = require("express");
const { runScan } = require("../controllers/scanController");

const router = express.Router();

router.get("/test", (req, res) => {
    res.json({
        message: "Scan API is working"
    });
});

router.post("/", runScan);

module.exports = router;