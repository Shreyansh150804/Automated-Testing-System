(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/app/Login/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/services/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/circle-alert.mjs [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function LoginForm() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const redirectTo = searchParams?.get("redirect") || "/";
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoginForm.useEffect": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAuthenticated"])()) {
                router.replace(redirectTo);
            }
        }
    }["LoginForm.useEffect"], [
        router,
        redirectTo
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!email.trim() || !password) {
            setError("Please fill in both email and password.");
            return;
        }
        setLoading(true);
        setError(null);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loginUser"])(email, password);
            router.push(redirectTo);
            router.refresh();
        } catch (err) {
            setError(err.message || "Failed to log in. Please check your credentials.");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-hidden relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/[0.03] blur-[180px] rounded-full pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/Login/page.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "relative z-20 border-b border-white/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-4 h-4 bg-white rotate-45"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/Login/page.jsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium tracking-wide",
                                    children: "vulNexa"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/Login/page.jsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/Login/page.jsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/Signup",
                            className: "text-sm text-zinc-400 hover:text-white transition",
                            children: "Create Account"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/Login/page.jsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/Login/page.jsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/Login/page.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative z-10 min-h-[calc(100vh-64px)] flex items-center justify-center px-6 py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-6xl grid lg:grid-cols-2 gap-20 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: -30
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.7
                            },
                            className: "hidden lg:block",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-zinc-500 uppercase tracking-[0.25em] text-sm",
                                    children: "Welcome Back"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/Login/page.jsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "mt-6 text-7xl font-semibold leading-[0.95] tracking-tight",
                                    children: [
                                        "Security",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/frontend/src/app/Login/page.jsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this),
                                        "starts here."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/Login/page.jsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-8 text-zinc-400 text-lg max-w-lg leading-relaxed",
                                    children: "Access vulnerability scans, real-time security dashboards, automated audit reports, and unified posture analytics from one centralized platform."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/Login/page.jsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-4 mt-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border border-white/10 rounded-2xl p-5 bg-white/[0.02]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-semibold",
                                                    children: "10+"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/Login/page.jsx",
                                                    lineNumber: 98,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-zinc-500 text-sm mt-1",
                                                    children: "OWASP Checks"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/Login/page.jsx",
                                                    lineNumber: 99,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/Login/page.jsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border border-white/10 rounded-2xl p-5 bg-white/[0.02]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-semibold",
                                                    children: "Live"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/Login/page.jsx",
                                                    lineNumber: 103,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-zinc-500 text-sm mt-1",
                                                    children: "Audit Engine"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/Login/page.jsx",
                                                    lineNumber: 104,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/Login/page.jsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border border-white/10 rounded-2xl p-5 bg-white/[0.02]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-semibold",
                                                    children: "100%"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/Login/page.jsx",
                                                    lineNumber: 108,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-zinc-500 text-sm mt-1",
                                                    children: "Persistent"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/Login/page.jsx",
                                                    lineNumber: 109,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/Login/page.jsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/Login/page.jsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/Login/page.jsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 25
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.7
                            },
                            className: "flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full max-w-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-white/10 bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl font-semibold",
                                            children: "Log in"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/Login/page.jsx",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-zinc-500 text-sm",
                                            children: "Continue to your vulNexa workspace."
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/Login/page.jsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            children: error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    height: 0
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    height: "auto"
                                                },
                                                exit: {
                                                    opacity: 0,
                                                    height: 0
                                                },
                                                className: "mt-6 p-4 rounded-2xl bg-white/[0.02] border border-white/15 text-xs text-zinc-300 flex items-start gap-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                        size: 16,
                                                        className: "shrink-0 text-red-400 mt-0.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/Login/page.jsx",
                                                        lineNumber: 136,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "leading-relaxed",
                                                        children: error
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/Login/page.jsx",
                                                        lineNumber: 140,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/Login/page.jsx",
                                                lineNumber: 130,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/Login/page.jsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleSubmit,
                                            className: "mt-8 space-y-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs font-mono uppercase tracking-wider text-zinc-400",
                                                            children: "Email Address"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/Login/page.jsx",
                                                            lineNumber: 147,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "email",
                                                            required: true,
                                                            value: email,
                                                            onChange: (e)=>{
                                                                setEmail(e.target.value);
                                                                if (error) setError(null);
                                                            },
                                                            placeholder: "admin@vulnexa.io",
                                                            className: "w-full mt-2 bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-white/30 transition font-mono"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/Login/page.jsx",
                                                            lineNumber: 150,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/app/Login/page.jsx",
                                                    lineNumber: 146,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs font-mono uppercase tracking-wider text-zinc-400",
                                                                children: "Password"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/Login/page.jsx",
                                                                lineNumber: 165,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/Login/page.jsx",
                                                            lineNumber: 164,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "password",
                                                            required: true,
                                                            value: password,
                                                            onChange: (e)=>{
                                                                setPassword(e.target.value);
                                                                if (error) setError(null);
                                                            },
                                                            placeholder: "••••••••",
                                                            className: "w-full mt-2 bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-white/30 transition"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/Login/page.jsx",
                                                            lineNumber: 170,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/app/Login/page.jsx",
                                                    lineNumber: 163,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    disabled: loading,
                                                    className: "w-full py-3.5 rounded-xl bg-white text-black font-medium hover:bg-zinc-200 disabled:opacity-50 transition cursor-pointer flex items-center justify-center gap-2",
                                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                                className: "animate-spin",
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/Login/page.jsx",
                                                                lineNumber: 190,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Signing In..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/Login/page.jsx",
                                                                lineNumber: 191,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/Login/page.jsx",
                                                        lineNumber: 189,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Log In"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/Login/page.jsx",
                                                                lineNumber: 195,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/Login/page.jsx",
                                                                lineNumber: 196,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/Login/page.jsx",
                                                        lineNumber: 194,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/Login/page.jsx",
                                                    lineNumber: 183,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/Login/page.jsx",
                                            lineNumber: 145,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 text-center text-sm text-zinc-500",
                                            children: [
                                                "Don't have an account?",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/Signup",
                                                    className: "text-white hover:underline font-medium",
                                                    children: "Create one"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/Login/page.jsx",
                                                    lineNumber: 204,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/Login/page.jsx",
                                            lineNumber: 202,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/Login/page.jsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/Login/page.jsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/Login/page.jsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/Login/page.jsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/Login/page.jsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/Login/page.jsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(LoginForm, "fxQpRzDMj1DdCTHaZOO3HgFJLyY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = LoginForm;
function LoginPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-black"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/Login/page.jsx",
            lineNumber: 222,
            columnNumber: 25
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoginForm, {}, void 0, false, {
            fileName: "[project]/frontend/src/app/Login/page.jsx",
            lineNumber: 223,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/Login/page.jsx",
        lineNumber: 222,
        columnNumber: 5
    }, this);
}
_c1 = LoginPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "LoginForm");
__turbopack_context__.k.register(_c1, "LoginPage");
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

//# sourceMappingURL=frontend_src_13gz3sw._.js.map