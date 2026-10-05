const { performScan } = require("../services/scanService");

const runScan = async (req, res) => {
    try {
        const { target } = req.body;

        if (!target) {
            return res.status(400).json({
                message: "Target URL is required"
            });
        }

        const result = await performScan(target);

        res.json(result);

    } catch (error) {
        res.status(500).json({
            message: "Scan failed",
            error: error.message
        });
    }
};

module.exports = {
    runScan
};