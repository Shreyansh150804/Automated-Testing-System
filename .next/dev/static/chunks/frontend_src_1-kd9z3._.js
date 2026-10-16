(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/app/dashboard/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/services/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/activity.mjs [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/bug.mjs [app-client] (ecmascript) <export default as Bug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/clock-3.mjs [app-client] (ecmascript) <export default as Clock3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as LoaderCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2d$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScanSearch$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/scan-search.mjs [app-client] (ecmascript) <export default as ScanSearch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/shield.mjs [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/shield-alert.mjs [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/terminal.mjs [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlert$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as TriangleAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/circle-x.mjs [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// Change this if your backend uses another port or API prefix.
const API_BASE = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
const SCAN_API = `${API_BASE.replace(/\/$/, "")}/api/scan`;
const severityLevels = [
    {
        name: "Critical",
        color: "bg-white",
        text: "text-white"
    },
    {
        name: "High",
        color: "bg-zinc-300",
        text: "text-zinc-200"
    },
    {
        name: "Medium",
        color: "bg-zinc-500",
        text: "text-zinc-400"
    },
    {
        name: "Low",
        color: "bg-zinc-700",
        text: "text-zinc-400"
    }
];
async function apiRequest(path) {
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getToken"])();
    if (!token) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAuth"])();
        throw new Error("No login token found. Please log in again.");
    }
    const response = await fetch(`${SCAN_API}${path}`, {
        method: "GET",
        headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthHeaders"])(),
        cache: "no-store"
    });
    const data = await response.json().catch(()=>({}));
    if (!response.ok) {
        if (response.status === 401) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAuth"])();
        }
        throw new Error(data.message || `Request failed (${response.status})`);
    }
    return data;
}
function getNumber(object, keys) {
    for (const key of keys){
        const value = object?.[key];
        if (value !== null && value !== undefined && value !== "" && Number.isFinite(Number(value))) {
            return Number(value);
        }
    }
    return null;
}
function getFindings(scan) {
    if (Array.isArray(scan?.findings)) return scan.findings;
    if (Array.isArray(scan?.vulnerabilities)) return scan.vulnerabilities;
    if (Array.isArray(scan?.results)) return scan.results;
    return [];
}
function getSeverity(finding) {
    return String(finding?.severity || "Info").toLowerCase();
}
function countSeverity(scans, level) {
    return scans.reduce((total, scan)=>{
        const findings = getFindings(scan);
        return total + findings.filter((finding)=>{
            const severity = getSeverity(finding);
            if (level === "critical") return severity === "critical";
            if (level === "high") return severity === "high";
            if (level === "medium") return severity === "medium";
            if (level === "low") return severity === "low";
            return false;
        }).length;
    }, 0);
}
function formatDate(value) {
    if (!value) return "Date unavailable";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "Date unavailable";
    return date.toLocaleString(undefined, {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
}
function getScanDate(scan) {
    return scan.scannedAt || scan.createdAt || scan.created_at || scan.timestamp || scan.date || null;
}
function getScanId(scan) {
    return scan.scanId || scan.id || scan._id || null;
}
function getScanStatus(scan) {
    return String(scan.status || "Unknown");
}
function getTarget(scan) {
    return scan.target || scan.targetUrl || scan.url || "Target unavailable";
}
function getScanTotal(stats) {
    return getNumber(stats, [
        "totalScans",
        "total_scans",
        "total",
        "scanCount",
        "scansCount"
    ]);
}
function getFindingTotal(stats) {
    return getNumber(stats, [
        "totalFindings",
        "totalVulnerabilities",
        "total_vulnerabilities",
        "findingsCount",
        "vulnerabilityCount"
    ]);
}
function getRiskScore(stats, scans) {
    const direct = getNumber(stats, [
        "riskScore",
        "risk_score"
    ]);
    if (direct !== null) return direct;
    const latest = scans[0];
    const latestScore = getNumber(latest, [
        "riskScore",
        "risk_score"
    ]);
    // Do not invent a score if the scanner has not calculated one.
    return latestScore;
}
function MetricCard({ label, value, description, icon: Icon, loading }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 12
        },
        animate: {
            opacity: 1,
            y: 0
        },
        className: "group rounded-2xl border border-white/10 bg-[#0a0a0a] p-5 transition-colors hover:border-white/25 hover:bg-[#101010]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-white/10 bg-white/[0.04] p-2.5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            size: 19,
                            className: "text-zinc-300"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                        size: 15,
                        className: "text-zinc-600"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                lineNumber: 199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-6 text-sm text-zinc-400",
                children: label
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 min-h-10",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__["LoaderCircle"], {
                    className: "mt-2 animate-spin text-zinc-500",
                    size: 22
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                    lineNumber: 210,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-3xl font-semibold tracking-tight text-white",
                    children: value === null || value === undefined ? "—" : value
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                    lineNumber: 212,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-xs text-zinc-600",
                children: description
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                lineNumber: 218,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
        lineNumber: 194,
        columnNumber: 5
    }, this);
}
_c = MetricCard;
function SeverityBar({ name, count, total }) {
    const percentage = total > 0 ? Math.min(100, count / total * 100) : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-zinc-400",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium text-white",
                        children: count
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-1.5 overflow-hidden rounded-full bg-white/[0.06]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        width: 0
                    },
                    animate: {
                        width: `${percentage}%`
                    },
                    transition: {
                        duration: 0.7
                    },
                    className: "h-full rounded-full bg-zinc-200"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                    lineNumber: 235,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                lineNumber: 234,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
        lineNumber: 228,
        columnNumber: 5
    }, this);
}
_c1 = SeverityBar;
function StatusBadge({ status }) {
    const normalized = status.toLowerCase();
    const isSuccess = normalized.includes("complete") || normalized === "completed" || normalized === "success";
    const isFailure = normalized.includes("fail") || normalized.includes("error");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-zinc-300",
        children: [
            isSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                size: 12
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                lineNumber: 260,
                columnNumber: 9
            }, this) : isFailure ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                size: 12
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                lineNumber: 262,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"], {
                size: 12
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                lineNumber: 264,
                columnNumber: 9
            }, this),
            status
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
        lineNumber: 258,
        columnNumber: 5
    }, this);
}
_c2 = StatusBadge;
function DashboardPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [scans, setScans] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [refreshing, setRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [historyError, setHistoryError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [lastUpdated, setLastUpdated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const loadDashboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DashboardPage.useCallback[loadDashboard]": async (manual = false)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAuthenticated"])()) {
                router.push("/Login?redirect=/dashboard");
                return;
            }
            if (manual) setRefreshing(true);
            else setLoading(true);
            setError("");
            setHistoryError("");
            try {
                const statsRequest = apiRequest("/stats");
                const historyRequest = apiRequest("/history");
                // Statistics and history are independent requests.
                const [statsResult, historyResult] = await Promise.allSettled([
                    statsRequest,
                    historyRequest
                ]);
                if (statsResult.status === "fulfilled") {
                    setStats(statsResult.value);
                } else {
                    const errMsg = statsResult.reason?.message || "Unable to load statistics.";
                    setError(errMsg);
                    if (errMsg.includes("401") || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAuthenticated"])()) {
                        router.push("/Login?redirect=/dashboard");
                        return;
                    }
                }
                if (historyResult.status === "fulfilled") {
                    const payload = historyResult.value;
                    const records = Array.isArray(payload) ? payload : payload.scans || payload.history || payload.results || [];
                    setScans(Array.isArray(records) ? records : []);
                } else {
                    setHistoryError(historyResult.reason?.message || "Unable to load scan history.");
                }
                setLastUpdated(new Date());
            } catch (err) {
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAuthenticated"])()) {
                    router.push("/Login?redirect=/dashboard");
                    return;
                }
                setError(err.message || "Unable to connect to the backend.");
            } finally{
                setLoading(false);
                setRefreshing(false);
            }
        }
    }["DashboardPage.useCallback[loadDashboard]"], [
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAuthenticated"])()) {
                router.push("/Login?redirect=/dashboard");
                return;
            }
            loadDashboard();
            // Refresh displayed data periodically while this page is open.
            const timer = setInterval({
                "DashboardPage.useEffect.timer": ()=>loadDashboard(true)
            }["DashboardPage.useEffect.timer"], 30000);
            return ({
                "DashboardPage.useEffect": ()=>clearInterval(timer)
            })["DashboardPage.useEffect"];
        }
    }["DashboardPage.useEffect"], [
        loadDashboard,
        router
    ]);
    const totalScans = getScanTotal(stats) ?? (scans.length > 0 ? scans.length : null);
    const totalFindings = getFindingTotal(stats);
    const critical = countSeverity(scans, "critical");
    const high = countSeverity(scans, "high");
    const medium = countSeverity(scans, "medium");
    const low = countSeverity(scans, "low");
    const findingsFromHistory = critical + high + medium + low;
    const findingCount = totalFindings !== null ? totalFindings : findingsFromHistory;
    const riskScore = getRiskScore(stats, scans);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-black text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed inset-0 -z-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-1/2 top-0 h-[360px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[130px]"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                    lineNumber: 373,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                lineNumber: 372,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mx-auto max-w-[1500px] px-5 pb-16 pt-8 sm:px-8 lg:px-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "flex flex-col justify-between gap-5 border-b border-white/10 pb-7 sm:flex-row sm:items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white text-black",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                            size: 23
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                            lineNumber: 381,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                        lineNumber: 380,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "text-xl font-semibold tracking-tight",
                                                children: [
                                                    "vulNexa",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-zinc-500",
                                                        children: "."
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                        lineNumber: 386,
                                                        columnNumber: 24
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                lineNumber: 385,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-0.5 text-[10px] tracking-[0.22em] text-zinc-500",
                                                children: "SECURITY OPERATIONS CENTER"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                lineNumber: 388,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                        lineNumber: 384,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                lineNumber: 379,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs text-zinc-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-1.5 w-1.5 rounded-full bg-white"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                lineNumber: 396,
                                                columnNumber: 15
                                            }, this),
                                            "Connected to scan API"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                        lineNumber: 395,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>loadDashboard(true),
                                        disabled: refreshing,
                                        className: "inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-4 py-2.5 text-sm transition hover:bg-white hover:text-black disabled:opacity-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                size: 15,
                                                className: refreshing ? "animate-spin" : ""
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                lineNumber: 406,
                                                columnNumber: 15
                                            }, this),
                                            "Refresh"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                        lineNumber: 400,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/scan",
                                        className: "inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2d$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScanSearch$3e$__["ScanSearch"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                lineNumber: 417,
                                                columnNumber: 15
                                            }, this),
                                            "New scan"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                        lineNumber: 413,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                lineNumber: 394,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                        lineNumber: 378,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "flex flex-col justify-between gap-5 py-10 sm:flex-row sm:items-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-3 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500",
                                        children: "Overview / Dashboard"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                        lineNumber: 426,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl font-semibold tracking-tight sm:text-5xl",
                                        children: [
                                            "Security overview",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-zinc-500",
                                                children: "."
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                lineNumber: 431,
                                                columnNumber: 32
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                        lineNumber: 430,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base",
                                        children: "Your scan activity, detected findings, and security posture — presented from your available scan records."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                        lineNumber: 434,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                lineNumber: 425,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-zinc-500",
                                children: [
                                    "Last updated:",
                                    " ",
                                    lastUpdated ? lastUpdated.toLocaleTimeString() : "Not yet updated"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                lineNumber: 440,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                        lineNumber: 424,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-5 flex gap-3 rounded-2xl border border-white/15 bg-white/[0.04] p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlert$3e$__["TriangleAlert"], {
                                className: "mt-0.5 shrink-0 text-zinc-300",
                                size: 19
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                lineNumber: 449,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-white",
                                        children: "Statistics could not be loaded"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                        lineNumber: 451,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm text-zinc-400",
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                        lineNumber: 454,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-xs text-zinc-500",
                                        children: "Check that the backend is running, the API URL is correct, and your login token is being sent."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                        lineNumber: 455,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                lineNumber: 450,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                        lineNumber: 448,
                        columnNumber: 11
                    }, this),
                    historyError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-5 rounded-xl border border-white/10 p-4 text-sm text-zinc-400",
                        children: [
                            "Scan history: ",
                            historyError
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                        lineNumber: 464,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                                label: "Total scans",
                                value: totalScans,
                                description: "Saved scan records returned by the API",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2d$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScanSearch$3e$__["ScanSearch"],
                                loading: loading
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                lineNumber: 471,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                                label: "Total findings",
                                value: findingCount,
                                description: "Finding total from stats or available history",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"],
                                loading: loading
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                lineNumber: 478,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                                label: "Critical findings",
                                value: scans.length > 0 ? critical : null,
                                description: "Critical findings in the returned history",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"],
                                loading: loading
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                lineNumber: 485,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                                label: "Latest risk score",
                                value: riskScore === null ? "N/A" : `${riskScore}/100`,
                                description: "Shown only when your API provides a score",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
                                loading: loading
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                lineNumber: 492,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                        lineNumber: 470,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-6 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-white/10 bg-[#080808] p-5 sm:p-7",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs uppercase tracking-[0.2em] text-zinc-500",
                                                        children: "Finding distribution"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                        lineNumber: 506,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "mt-2 text-xl font-semibold",
                                                        children: "Severity breakdown"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                        lineNumber: 509,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                lineNumber: 505,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                className: "text-zinc-400",
                                                size: 21
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                lineNumber: 513,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                        lineNumber: 504,
                                        columnNumber: 13
                                    }, this),
                                    scans.length === 0 && !loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 rounded-xl border border-dashed border-white/10 p-6 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"], {
                                                className: "mx-auto text-zinc-600",
                                                size: 25
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                lineNumber: 518,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-sm text-zinc-300",
                                                children: "No scan findings available"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                lineNumber: 519,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-xs text-zinc-500",
                                                children: "Run and save a scan to populate this section."
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                lineNumber: 522,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                        lineNumber: 517,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-8 space-y-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SeverityBar, {
                                                        name: "Critical",
                                                        count: critical,
                                                        total: findingsFromHistory
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                        lineNumber: 529,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SeverityBar, {
                                                        name: "High",
                                                        count: high,
                                                        total: findingsFromHistory
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                        lineNumber: 534,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SeverityBar, {
                                                        name: "Medium",
                                                        count: medium,
                                                        total: findingsFromHistory
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                        lineNumber: 539,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SeverityBar, {
                                                        name: "Low",
                                                        count: low,
                                                        total: findingsFromHistory
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                        lineNumber: 544,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                lineNumber: 528,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-6 border-t border-white/10 pt-4 text-xs leading-5 text-zinc-500",
                                                children: "Breakdown is calculated from the finding severity values in the scan history returned by your API. Info and Manual Review findings are not counted as confirmed severity issues."
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                lineNumber: 551,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                        lineNumber: 527,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                lineNumber: 503,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-white/10 bg-[#080808] p-5 sm:p-7",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs uppercase tracking-[0.2em] text-zinc-500",
                                                        children: "Latest activity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                        lineNumber: 563,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "mt-2 text-xl font-semibold",
                                                        children: "Scan intelligence"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                        lineNumber: 566,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                lineNumber: 562,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                                className: "text-zinc-400",
                                                size: 21
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                lineNumber: 568,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                        lineNumber: 561,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-7 space-y-0",
                                        children: [
                                            scans.slice(0, 4).map((scan, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3 border-b border-white/[0.07] py-4 last:border-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                                size: 16,
                                                                className: "text-zinc-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                                lineNumber: 578,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                            lineNumber: 577,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "min-w-0 flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "truncate text-sm font-medium text-zinc-200",
                                                                    children: getTarget(scan)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                                    lineNumber: 582,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-1 text-xs text-zinc-500",
                                                                    children: formatDate(getScanDate(scan))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                                    lineNumber: 585,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                            lineNumber: 581,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                                                                status: getScanStatus(scan)
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                                lineNumber: 591,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                            lineNumber: 590,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, getScanId(scan) || `${getTarget(scan)}-${index}`, true, {
                                                    fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                    lineNumber: 573,
                                                    columnNumber: 17
                                                }, this)),
                                            scans.length === 0 && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "py-10 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"], {
                                                        className: "mx-auto text-zinc-600",
                                                        size: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                        lineNumber: 598,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-3 text-sm text-zinc-400",
                                                        children: "No saved scans yet"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                        lineNumber: 599,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                lineNumber: 597,
                                                columnNumber: 17
                                            }, this),
                                            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center gap-2 py-10 text-sm text-zinc-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__["LoaderCircle"], {
                                                        size: 17,
                                                        className: "animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                        lineNumber: 607,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Loading scan history..."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                lineNumber: 606,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                        lineNumber: 571,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/report",
                                        className: "mt-3 inline-flex items-center gap-2 text-sm text-zinc-300 transition hover:text-white",
                                        children: [
                                            "View reports ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                lineNumber: 617,
                                                columnNumber: 28
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                        lineNumber: 613,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                lineNumber: 560,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                        lineNumber: 502,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-6 overflow-hidden rounded-2xl border border-white/10 bg-[#080808]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col justify-between gap-3 border-b border-white/10 p-5 sm:flex-row sm:items-center sm:px-7",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs uppercase tracking-[0.2em] text-zinc-500",
                                                children: "Activity log"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                lineNumber: 626,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "mt-2 text-xl font-semibold",
                                                children: "Recent scans"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                lineNumber: 629,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                        lineNumber: 625,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-zinc-500",
                                        children: [
                                            scans.length,
                                            " records returned"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                        lineNumber: 632,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                lineNumber: 624,
                                columnNumber: 11
                            }, this),
                            scans.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full min-w-[700px] text-left text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "border-b border-white/[0.07] text-xs text-zinc-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-6 py-4 font-medium",
                                                        children: "Target"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                        lineNumber: 642,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-6 py-4 font-medium",
                                                        children: "Scan date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                        lineNumber: 643,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-6 py-4 font-medium",
                                                        children: "Findings"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                        lineNumber: 644,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-6 py-4 font-medium",
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                        lineNumber: 645,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-6 py-4 font-medium",
                                                        children: "Report"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                        lineNumber: 646,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                lineNumber: 641,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                            lineNumber: 640,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: scans.slice(0, 10).map((scan, index)=>{
                                                const findings = getFindings(scan);
                                                const id = getScanId(scan);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "border-b border-white/[0.05] transition hover:bg-white/[0.025] last:border-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "max-w-[320px] truncate px-6 py-5 font-medium text-zinc-200",
                                                            children: getTarget(scan)
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                            lineNumber: 660,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "whitespace-nowrap px-6 py-5 text-zinc-400",
                                                            children: formatDate(getScanDate(scan))
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                            lineNumber: 663,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-5 text-zinc-300",
                                                            children: getNumber(scan, [
                                                                "totalFindings",
                                                                "totalVulnerabilities"
                                                            ]) ?? (findings.length || "—")
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                            lineNumber: 666,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-5",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                                                                status: getScanStatus(scan)
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                                lineNumber: 671,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                            lineNumber: 670,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-5",
                                                            children: id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/report/${encodeURIComponent(id)}`,
                                                                className: "inline-flex items-center gap-1.5 text-zinc-400 transition hover:text-white",
                                                                children: [
                                                                    "Open ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                        size: 13
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                                        lineNumber: 679,
                                                                        columnNumber: 36
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                                lineNumber: 675,
                                                                columnNumber: 29
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-zinc-600",
                                                                children: "Unavailable"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                                lineNumber: 682,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                            lineNumber: 673,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, id || `${getTarget(scan)}-${index}`, true, {
                                                    fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                    lineNumber: 656,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                            lineNumber: 650,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                    lineNumber: 639,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                lineNumber: 638,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-6 py-12 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2d$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScanSearch$3e$__["ScanSearch"], {
                                        className: "mx-auto text-zinc-600",
                                        size: 30
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                        lineNumber: 693,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mt-4 font-medium text-zinc-200",
                                        children: "Your scan history will appear here"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                        lineNumber: 694,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-500",
                                        children: "Start a scan and save its results. The dashboard will display records returned by your backend."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                        lineNumber: 697,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/scan",
                                        className: "mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200",
                                        children: [
                                            "Start your first scan ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                                lineNumber: 705,
                                                columnNumber: 39
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                        lineNumber: 701,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                lineNumber: 692,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                        lineNumber: 623,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "mt-8 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "vulNexa Security Operations Center"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                lineNumber: 713,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                        lineNumber: 715,
                                        columnNumber: 13
                                    }, this),
                                    "Only assess systems you own or are authorized to test."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                                lineNumber: 714,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                        lineNumber: 712,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/dashboard/page.jsx",
                lineNumber: 376,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/dashboard/page.jsx",
        lineNumber: 371,
        columnNumber: 5
    }, this);
}
_s(DashboardPage, "ljC4rLo7QSOJ5SfTxAogrxSuLD4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c3 = DashboardPage;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "MetricCard");
__turbopack_context__.k.register(_c1, "SeverityBar");
__turbopack_context__.k.register(_c2, "StatusBadge");
__turbopack_context__.k.register(_c3, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/services/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "changeUserPassword",
    ()=>changeUserPassword,
    "checkBackendHealth",
    ()=>checkBackendHealth,
    "clearAuth",
    ()=>clearAuth,
    "computeSecurityScore",
    ()=>computeSecurityScore,
    "deleteScan",
    ()=>deleteScan,
    "deleteUserAvatar",
    ()=>deleteUserAvatar,
    "getAuthHeaders",
    ()=>getAuthHeaders,
    "getCurrentUser",
    ()=>getCurrentUser,
    "getScanById",
    ()=>getScanById,
    "getToken",
    ()=>getToken,
    "getUserProfile",
    ()=>getUserProfile,
    "getUserScanStats",
    ()=>getUserScanStats,
    "getUserScans",
    ()=>getUserScans,
    "isAuthenticated",
    ()=>isAuthenticated,
    "loginUser",
    ()=>loginUser,
    "normalizeTargetUrl",
    ()=>normalizeTargetUrl,
    "saveScanResult",
    ()=>saveScanResult,
    "scanTarget",
    ()=>scanTarget,
    "setAuth",
    ()=>setAuth,
    "signupUser",
    ()=>signupUser,
    "updateUserProfile",
    ()=>updateUserProfile,
    "uploadUserAvatar",
    ()=>uploadUserAvatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
function getToken() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        return localStorage.getItem("vulnexa_token");
    } catch  {
        return null;
    }
}
function getCurrentUser() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem("vulnexa_user");
        return raw ? JSON.parse(raw) : null;
    } catch  {
        return null;
    }
}
function setAuth(token, user) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        if (token) localStorage.setItem("vulnexa_token", token);
        if (user) localStorage.setItem("vulnexa_user", JSON.stringify(user));
        window.dispatchEvent(new CustomEvent("vulnexa_auth_change", {
            detail: {
                token,
                user: user || getCurrentUser()
            }
        }));
    } catch (err) {
        console.error("Failed to store auth:", err);
    }
}
function clearAuth() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        localStorage.removeItem("vulnexa_token");
        localStorage.removeItem("vulnexa_user");
        window.dispatchEvent(new CustomEvent("vulnexa_auth_change", {
            detail: {
                token: null,
                user: null
            }
        }));
    } catch (err) {
        console.error("Failed to clear auth:", err);
    }
}
function isAuthenticated() {
    return Boolean(getToken());
}
function getAuthHeaders() {
    const token = getToken();
    const headers = {
        "Content-Type": "application/json"
    };
    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }
    return headers;
}
async function loginUser(email, password) {
    const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Failed to log in");
    }
    setAuth(data.token, data.user);
    return data;
}
async function signupUser(name, email, password) {
    const res = await fetch(`${API_BASE_URL}/api/auth/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    });
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Failed to create account");
    }
    setAuth(data.token, data.user);
    return data;
}
async function getUserProfile() {
    const token = getToken();
    if (!token) {
        throw new Error("No authentication token found");
    }
    const res = await fetch(`${API_BASE_URL}/api/auth/me`, {
        method: "GET",
        headers: getAuthHeaders()
    });
    const data = await res.json();
    if (!res.ok) {
        if (res.status === 401) {
            clearAuth();
        }
        throw new Error(data.message || "Failed to load profile");
    }
    if (data.user) {
        setAuth(token, data.user);
    }
    return data.user;
}
async function updateUserProfile({ name, email }) {
    const res = await fetch(`${API_BASE_URL}/api/auth/profile`, {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify({
            name,
            email
        })
    });
    const data = await res.json();
    if (!res.ok) {
        if (res.status === 401) {
            clearAuth();
        }
        throw new Error(data.message || "Failed to update profile");
    }
    if (data.user) {
        setAuth(getToken(), data.user);
    }
    return data.user;
}
async function uploadUserAvatar(file) {
    const token = getToken();
    if (!token) {
        throw new Error("You must be logged in to upload an avatar");
    }
    const formData = new FormData();
    formData.append("avatar", file);
    const res = await fetch(`${API_BASE_URL}/api/auth/profile/avatar`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: formData
    });
    const data = await res.json();
    if (!res.ok) {
        if (res.status === 401) {
            clearAuth();
        }
        throw new Error(data.message || "Failed to upload avatar");
    }
    if (data.user) {
        setAuth(token, data.user);
    }
    return data.user;
}
async function deleteUserAvatar() {
    const token = getToken();
    if (!token) {
        throw new Error("You must be logged in to delete your avatar");
    }
    const res = await fetch(`${API_BASE_URL}/api/auth/profile/avatar`, {
        method: "DELETE",
        headers: getAuthHeaders()
    });
    const data = await res.json();
    if (!res.ok) {
        if (res.status === 401) {
            clearAuth();
        }
        throw new Error(data.message || "Failed to remove avatar");
    }
    if (data.user) {
        setAuth(token, data.user);
    }
    return data.user;
}
async function changeUserPassword({ currentPassword, newPassword }) {
    const res = await fetch(`${API_BASE_URL}/api/auth/password`, {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify({
            currentPassword,
            newPassword
        })
    });
    const data = await res.json();
    if (!res.ok) {
        if (res.status === 401) {
            clearAuth();
        }
        throw new Error(data.message || "Failed to change password");
    }
    return data;
}
function normalizeTargetUrl(input) {
    let trimmed = (input || "").trim();
    if (!trimmed) return "";
    if (!/^https?:\/\//i.test(trimmed)) {
        trimmed = `https://${trimmed}`;
    }
    return trimmed;
}
async function checkBackendHealth() {
    try {
        const res = await fetch(`${API_BASE_URL}/api/scan/test`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        const data = await res.json();
        return {
            ok: true,
            data
        };
    } catch (err) {
        return {
            ok: false,
            error: err.message
        };
    }
}
function computeSecurityScore(findings = []) {
    if (!findings || findings.length === 0) return 100;
    let score = 100;
    for (const f of findings){
        if (f.status === "Fail") {
            switch((f.severity || "").toLowerCase()){
                case "critical":
                    score -= 25;
                    break;
                case "high":
                    score -= 15;
                    break;
                case "medium":
                    score -= 10;
                    break;
                case "low":
                    score -= 5;
                    break;
                default:
                    score -= 5;
            }
        }
    }
    score = Math.max(0, Math.min(100, score));
    let label = "Excellent";
    let color = "text-emerald-400";
    let ringColor = "#10b981";
    let badgeBg = "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    if (score < 50) {
        label = "Critical Risk";
        color = "text-red-400";
        ringColor = "#ef4444";
        badgeBg = "bg-red-500/10 text-red-400 border-red-500/20";
    } else if (score < 70) {
        label = "Moderate Risk";
        color = "text-orange-400";
        ringColor = "#f97316";
        badgeBg = "bg-orange-500/10 text-orange-400 border-orange-500/20";
    } else if (score < 85) {
        label = "Fair Protection";
        color = "text-yellow-400";
        ringColor = "#eab308";
        badgeBg = "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
    }
    return {
        score,
        label,
        color,
        ringColor,
        badgeBg
    };
}
async function scanTarget(targetUrl) {
    const normalized = normalizeTargetUrl(targetUrl);
    if (!normalized) {
        throw new Error("Please enter a valid target URL");
    }
    let response;
    try {
        const url = `${API_BASE_URL}/api/scan`;
        response = await fetch(url, {
            method: "POST",
            headers: getAuthHeaders(),
            body: JSON.stringify({
                target: normalized
            })
        });
    } catch (netErr) {
        throw new Error(`Cannot connect to backend server at ${API_BASE_URL}. Ensure Express is running.`);
    }
    if (!response.ok) {
        let errMessage = `Scan failed (Status ${response.status})`;
        try {
            const errData = await response.json();
            if (errData && errData.message) {
                errMessage = errData.message + (errData.error ? `: ${errData.error}` : "");
            }
        } catch  {
        // ignore
        }
        throw new Error(errMessage);
    }
    const data = await response.json();
    const findings = data.findings || [];
    const passed = findings.filter((f)=>f.status === "Pass");
    const failed = findings.filter((f)=>f.status === "Fail");
    const manual = findings.filter((f)=>f.status === "Manual Review");
    const scoreDetails = computeSecurityScore(findings);
    return {
        ...data,
        target: normalized,
        scannedAt: data.scannedAt || new Date().toISOString(),
        scoreDetails,
        summary: {
            total: findings.length,
            passed: passed.length,
            failed: failed.length,
            manual: manual.length
        }
    };
}
async function saveScanResult(scanData) {
    if (!scanData || !scanData.target) {
        throw new Error("Invalid scan data to save");
    }
    const res = await fetch(`${API_BASE_URL}/api/scan/save`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(scanData)
    });
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Failed to persist scan record");
    }
    return data.scan;
}
async function getUserScans(params = {}) {
    const query = new URLSearchParams();
    if (params.search) query.set("search", params.search);
    if (params.status) query.set("status", params.status);
    if (params.severity) query.set("severity", params.severity);
    if (params.sort) query.set("sort", params.sort);
    const url = `${API_BASE_URL}/api/scan/history?${query.toString()}`;
    const res = await fetch(url, {
        method: "GET",
        headers: getAuthHeaders()
    });
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Failed to retrieve scan history");
    }
    return data.scans || [];
}
async function getUserScanStats() {
    const res = await fetch(`${API_BASE_URL}/api/scan/stats`, {
        method: "GET",
        headers: getAuthHeaders()
    });
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Failed to load dashboard statistics");
    }
    return data;
}
async function getScanById(scanId) {
    const res = await fetch(`${API_BASE_URL}/api/scan/${scanId}`, {
        method: "GET",
        headers: getAuthHeaders()
    });
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Failed to load scan report");
    }
    return data;
}
async function deleteScan(scanId) {
    const res = await fetch(`${API_BASE_URL}/api/scan/${scanId}`, {
        method: "DELETE",
        headers: getAuthHeaders()
    });
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Failed to delete scan report");
    }
    return data;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_1-kd9z3._.js.map