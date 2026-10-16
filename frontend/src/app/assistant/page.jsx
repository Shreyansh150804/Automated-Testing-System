
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUp,
  Bot,
  Plus,
  ShieldCheck,
  Sparkles,
  UserRound,
  Copy,
  Check,
  Menu,
  X,
  FileSearch,
} from "lucide-react";

export default function AssistantPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("chat");
  const [report, setReport] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(text = input) {
    const question = text.trim();

    if (!question || loading) return;

    const previousMessages = messages;
    const updatedMessages = [
      ...previousMessages,
      { role: "user", content: question },
    ];

    setMessages(updatedMessages);
    setInput("");
    setError("");
    setLoading(true);
    setSidebarOpen(false);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: question,
          history: previousMessages.slice(-10),
          mode,
          report,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to get a response from Gemini."
        );
      }

      setMessages([
        ...updatedMessages,
        { role: "assistant", content: data.reply },
      ]);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  function newChat() {
    setMessages([]);
    setInput("");
    setReport("");
    setError("");
    setMode("chat");
    setSidebarOpen(false);
  }

  async function copyMessage(content, index) {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1500);
    } catch {
      setError("Unable to copy this response.");
    }
  }

  const suggestions = [
    {
      title: "Explain SQL injection",
      description: "Understand the risk and how to prevent it.",
      prompt: "Explain SQL injection in simple language and show how to prevent it.",
    },
    {
      title: "Explore OWASP Top 10",
      description: "Learn about the most important web risks.",
      prompt: "Explain the OWASP Top 10 web application security risks in simple language.",
    },
    {
      title: "Secure my login system",
      description: "Learn authentication best practices.",
      prompt: "How can I secure a website login system against common attacks?",
    },
    {
      title: "Understand security headers",
      description: "Learn which HTTP headers protect websites.",
      prompt: "Explain important HTTP security headers and how to configure them.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-40 flex h-[72px] items-center justify-between border-b border-white/[0.09] bg-black/85 px-5 backdrop-blur-2xl md:px-9">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="rounded-lg border border-white/10 p-2 text-white/70 hover:bg-white/10 md:hidden"
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? <X size={19} /> : <Menu size={19} />}
          </button>

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06]">
              <ShieldCheck size={21} />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">
                vulNexa<span className="text-white/35">.</span>
              </p>
              <p className="hidden text-[10px] uppercase tracking-[0.22em] text-white/40 sm:block">
                Security intelligence
              </p>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-white/10 px-3 py-2 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
            <span className="text-xs text-white/55">
              Gemini AI Assistant
            </span>
          </div>

          <Link
            href="/"
            className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm text-white/75 transition hover:bg-white hover:text-black"
          >
            <ArrowLeft size={15} />
            <span className="hidden sm:inline">Back to home</span>
            <span className="sm:hidden">Home</span>
          </Link>
        </div>
      </header>

      {/* Sidebar mobile backdrop */}
      {sidebarOpen && (
        <button
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-20 bg-black/70 md:hidden"
        />
      )}

      <div className="flex min-h-screen pt-[72px]">
        {/* Sidebar */}
        <aside
          className={`fixed bottom-0 left-0 top-[72px] z-30 w-[280px] border-r border-white/[0.09] bg-[#080808] p-5 transition-transform duration-300 md:sticky md:top-[72px] md:block md:h-[calc(100vh-72px)] md:w-[260px] md:shrink-0 md:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            onClick={newChat}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-4 py-3.5 text-sm font-medium transition hover:bg-white hover:text-black"
          >
            <Plus size={17} />
            New conversation
          </button>

          <p className="mb-3 mt-9 text-[10px] font-medium uppercase tracking-[0.22em] text-white/35">
            Workspace
          </p>

          <div className="space-y-1">
            <button className="flex w-full items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.07] px-3 py-3 text-left text-sm text-white">
              <Bot size={18} />
              AI Assistant
            </button>

            <button
              onClick={() => {
                setMode("report");
                setSidebarOpen(false);
              }}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm text-white/55 transition hover:bg-white/[0.05] hover:text-white"
            >
              <FileSearch size={18} />
              Report analysis
            </button>

            <Link
              href="/"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-white/55 transition hover:bg-white/[0.05] hover:text-white"
            >
              <ShieldCheck size={18} />
              Home
            </Link>
          </div>

          <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/[0.09] bg-white/[0.025] p-4">
            <div className="flex items-center gap-2">
              <Sparkles size={17} />
              <span className="text-sm font-medium">Security intelligence</span>
            </div>
            <p className="mt-3 text-xs leading-5 text-white/40">
              Understand vulnerabilities, strengthen your applications, and
              learn practical security fixes.
            </p>
            <div className="mt-4 border-t border-white/[0.08] pt-3 text-[10px] uppercase tracking-[0.16em] text-white/30">
              Powered by Gemini API
            </div>
          </div>
        </aside>

        {/* Main chat */}
        <section className="flex min-h-[calc(100vh-72px)] min-w-0 flex-1 flex-col">
          {/* Chat toolbar */}
          <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4 md:px-9">
            <div>
              <h1 className="text-sm font-medium">AI Assistant</h1>
              <p className="mt-1 text-xs text-white/40">
                Cybersecurity knowledge, made clearer.
              </p>
            </div>

            <button
              onClick={newChat}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-white/50 transition hover:bg-white/[0.06] hover:text-white"
            >
              <Plus size={15} />
              <span className="hidden sm:inline">New chat</span>
            </button>
          </div>

          {/* Mode selection */}
          <div className="flex flex-wrap items-center gap-2 px-5 pt-5 md:px-9">
            <button
              onClick={() => setMode("chat")}
              className={`rounded-full border px-4 py-2 text-xs transition ${
                mode === "chat"
                  ? "border-white bg-white text-black"
                  : "border-white/10 text-white/55 hover:border-white/25 hover:text-white"
              }`}
            >
              General assistant
            </button>

            <button
              onClick={() => setMode("report")}
              className={`rounded-full border px-4 py-2 text-xs transition ${
                mode === "report"
                  ? "border-white bg-white text-black"
                  : "border-white/10 text-white/55 hover:border-white/25 hover:text-white"
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <FileSearch size={14} />
                Report analysis
              </span>
            </button>
          </div>

          {mode === "report" && (
            <div className="px-5 pt-4 md:px-9">
              <label
                htmlFor="scan-report"
                className="mb-2 block text-xs text-white/55"
              >
                Paste your scan report or findings
              </label>
              <textarea
                id="scan-report"
                value={report}
                onChange={(e) => setReport(e.target.value)}
                maxLength={15000}
                placeholder="Paste vulnerability names, severity, evidence, and remediation details..."
                className="min-h-24 w-full resize-y rounded-xl border border-white/10 bg-white/[0.025] p-4 text-sm leading-6 outline-none placeholder:text-white/25 focus:border-white/30"
              />
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 px-5 py-8 md:px-9 md:py-10">
            {messages.length === 0 ? (
              <div className="mx-auto max-w-3xl pt-8 md:pt-14">
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04]">
                  <Sparkles size={23} />
                </div>

                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/40">
                  Your security copilot
                </p>

                <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
                  What would you like to{" "}
                  <span className="text-white/40">understand?</span>
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-7 text-white/45">
                  Explore web vulnerabilities, learn secure coding practices,
                  or get help understanding your scan results.
                </p>

                <div className="mt-10 grid gap-3 sm:grid-cols-2">
                  {suggestions.map((item) => (
                    <button
                      key={item.title}
                      onClick={() => sendMessage(item.prompt)}
                      disabled={loading}
                      className="group rounded-2xl border border-white/[0.09] bg-white/[0.02] p-5 text-left transition duration-200 hover:border-white/25 hover:bg-white/[0.045] disabled:opacity-50"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm font-medium">
                          {item.title}
                        </span>
                        <ArrowUp
                          size={15}
                          className="rotate-45 text-white/30 transition group-hover:text-white"
                        />
                      </div>
                      <p className="mt-2 text-xs leading-5 text-white/40">
                        {item.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mx-auto max-w-3xl space-y-8">
                {messages.map((message, index) => (
                  <div key={index} className="flex gap-3 sm:gap-4">
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${
                        message.role === "assistant"
                          ? "border-white/15 bg-white/[0.05]"
                          : "border-white/10 bg-transparent"
                      }`}
                    >
                      {message.role === "assistant" ? (
                        <Bot size={18} />
                      ) : (
                        <UserRound size={17} />
                      )}
                    </div>

                    <div className="min-w-0 flex-1 pt-1">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <span className="text-xs font-medium text-white/65">
                          {message.role === "assistant" ? "vulNexa AI" : "You"}
                        </span>

                        {message.role === "assistant" && (
                          <button
                            onClick={() => copyMessage(message.content, index)}
                            aria-label="Copy response"
                            className="rounded-md p-1.5 text-white/35 transition hover:bg-white/10 hover:text-white"
                          >
                            {copiedIndex === index ? (
                              <Check size={15} />
                            ) : (
                              <Copy size={15} />
                            )}
                          </button>
                        )}
                      </div>

                      <p className="whitespace-pre-wrap break-words text-sm leading-7 text-white/80">
                        {message.content}
                      </p>
                    </div>
                  </div>
                ))}

                {loading && (
                  <div className="flex items-center gap-3 text-sm text-white/45">
                    <Bot size={19} className="animate-pulse" />
                    Gemini is thinking...
                  </div>
                )}

                <div ref={bottomRef} />
              </div>
            )}

            {error && (
              <div className="mx-auto mt-5 max-w-3xl rounded-xl border border-white/15 bg-white/[0.04] p-4">
                <p className="text-sm text-white/75">{error}</p>
                <button
                  onClick={() =>
                    sendMessage(messages[messages.length - 1]?.content || "")
                  }
                  className="mt-3 text-xs text-white underline underline-offset-4"
                >
                  Retry last message
                </button>
              </div>
            )}
          </div>

          {/* Composer */}
          <div className="sticky bottom-0 border-t border-white/[0.08] bg-[#050505]/95 px-4 py-4 backdrop-blur-xl md:px-9 md:py-5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="mx-auto flex max-w-3xl items-end gap-3 rounded-2xl border border-white/[0.14] bg-white/[0.035] p-3 transition focus-within:border-white/30"
            >
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
                rows={1}
                maxLength={4000}
                placeholder={
                  mode === "report"
                    ? "Ask about your report..."
                    : "Ask vulNexa AI anything about cybersecurity..."
                }
                className="max-h-36 min-h-10 flex-1 resize-y bg-transparent px-2 py-2 text-sm leading-6 outline-none placeholder:text-white/30"
              />

              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-black transition hover:bg-white/80 disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ArrowUp size={19} />
              </button>
            </form>

            <p className="mx-auto mt-3 max-w-3xl text-center text-[10px] leading-5 text-white/30">
              AI can make mistakes. Verify security findings before making
              important decisions. Avoid submitting confidential data.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
