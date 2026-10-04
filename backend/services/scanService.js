const axios = require("axios");

const performScan = async (target) => {
    try {
        const url = new URL(target);

        const response = await axios.get(url.toString(), {
            timeout: 10000,
            validateStatus: () => true
        });

        const headers = response.headers;

        const findings = [];

        // HTTPS Check
        if (url.protocol !== "https:") {
            findings.push({
                name: "HTTPS Not Enabled",
                severity: "Medium",
                description: "The target is not using HTTPS."
            });
        }

        // Security Headers
        const securityHeaders = [
            {
                key: "x-content-type-options",
                name: "Missing X-Content-Type-Options",
                severity: "Low"
            },
            {
                key: "x-frame-options",
                name: "Missing X-Frame-Options",
                severity: "Medium"
            },
            {
                key: "content-security-policy",
                name: "Missing Content-Security-Policy",
                severity: "Medium"
            },
            {
                key: "strict-transport-security",
                name: "Missing HSTS",
                severity: "Medium"
            }
        ];

        securityHeaders.forEach((header) => {
            if (!headers[header.key]) {
                findings.push({
                    name: header.name,
                    severity: header.severity,
                    description: `${header.key} security header is missing.`
                });
            }
        });

        return {
            target,
            status: "Scan completed",
            statusCode: response.status,
            findings
        };

    } catch (error) {
        throw new Error("Unable to scan target: " + error.message);
    }
};

module.exports = {
    performScan
};