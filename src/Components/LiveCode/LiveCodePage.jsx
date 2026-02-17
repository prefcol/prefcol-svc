import React, { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { FiPlay, FiTrash2, FiDownload, FiCopy, FiMaximize2 } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";

const MonacoEditor = React.lazy(() => import("@monaco-editor/react"));

const LANGUAGES = [
  { id: "c", label: "C" },
  { id: "cpp", label: "C++" },
  { id: "java", label: "Java" },
  { id: "python", label: "Python" },
  { id: "javascript", label: "JavaScript" },
  { id: "html", label: "HTML / CSS / JS" },
  { id: "sql", label: "SQL" },
  { id: "php", label: "PHP" },
  { id: "csharp", label: "C#" },
  { id: "go", label: "Go" },
  { id: "rust", label: "Rust" },
];

const DEFAULT_TEMPLATES = {
  c: `#include <stdio.h>

int main() {
    printf("Hello from C!\\n");
    return 0;
}
`,
  cpp: `#include <iostream>

int main() {
    std::cout << "Hello from C++!\\n";
    return 0;
}
`,
  java: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello from Java!");
    }
}
`,
  python: `print("Hello from Python!")`,
  javascript: `console.log("Hello from JavaScript!");`,
  html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Live Preview</title>
  <style>
    body { font-family: system-ui; padding: 1rem; }
  </style>
</head>
<body>
  <h1>Hello from HTML!</h1>
  <p>Edit this template to see live changes.</p>
  <script>
    console.log("Hello from embedded JS");
  </script>
</body>
</html>
`,
  sql: `-- Example SQL
SELECT * FROM users LIMIT 10;
`,
  php: `<?php
  echo 'Hello from PHP!';
?>
`,
  csharp: `using System;

class Program {
  static void Main() {
    Console.WriteLine("Hello from C#!");
  }
}
`,
  go: `package main

import "fmt"

func main() {
  fmt.Println("Hello from Go!")
}
`,
  rust: `fn main() {
    println!("Hello from Rust!");
}
`,
};

const STORAGE_KEY = "prefcol_livecode_state_v1";

const getInitialState = () => {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

const saveState = (state) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
};

export default function LiveCodePage() {
  const initial = getInitialState();
  const [language, setLanguage] = useState(initial?.language || "javascript");
  const [code, setCode] = useState(
    initial?.code || DEFAULT_TEMPLATES[initial?.language || "javascript"]
  );
  const [input, setInput] = useState(initial?.input || "");
  const [output, setOutput] = useState(initial?.output || "");
  const [error, setError] = useState(initial?.error || "");
  const [executionTime, setExecutionTime] = useState(initial?.executionTime || "");
  const [theme, setTheme] = useState(initial?.theme || "vs-dark");
  const [running, setRunning] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const compileApi =
    (typeof import.meta !== "undefined" && import.meta.env?.VITE_COMPILE_API_URL) ||
    "/api/compile";

  useEffect(() => {
    saveState({ language, code, input, output, error, executionTime, theme });
  }, [language, code, input, output, error, executionTime, theme]);

  const handleLanguageChange = (langId) => {
    setLanguage(langId);
    setCode((prev) => {
      if (prev && prev.trim() && langId === language) return prev;
      return DEFAULT_TEMPLATES[langId] || "";
    });
    setOutput("");
    setError("");
    setExecutionTime("");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code || "");
    } catch {
      // ignore
    }
  };

  const handleDownload = () => {
    const blob = new Blob([code || ""], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `code-${language}.txt`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const runHtmlPreview = () => {
    const iframe = document.getElementById("live-html-preview");
    if (!iframe) return;
    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc) return;
    doc.open();
    doc.write(code || "");
    doc.close();
    setOutput("Rendered HTML preview.");
    setError("");
    setExecutionTime("");
  };

  const handleRun = async () => {
    if (!code || !code.trim()) {
      setError("Nothing to run. Please write some code first.");
      setOutput("");
      setExecutionTime("");
      return;
    }

    setRunning(true);
    setError("");
    setOutput("");
    setExecutionTime("");
    const start = performance.now();

    try {
      if (language === "html") {
        runHtmlPreview();
        const timeMs = performance.now() - start;
        setExecutionTime(`${(timeMs / 1000).toFixed(2)}s`);
        return;
      }

      const res = await fetch(compileApi, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language, code, input }),
      });

      const data = await res.json().catch(() => ({}));
      const timeMs = performance.now() - start;
      setExecutionTime(data.executionTime || `${(timeMs / 1000).toFixed(2)}s`);

      const needsBackend = !["javascript", "html"].includes(language);
      const noBackend =
        !res.ok &&
        (res.status === 404 || res.status === 405 || res.status === 0);
      const genericFailure =
        (data.error === "Compilation failed" || !data.error) && !data.output;

      if (noBackend && needsBackend) {
        const hint405 =
          res.status === 405
            ? "\n(405 = POST not allowed on this URL. Set VITE_COMPILE_API_URL to your deployed compile API and rebuild.)"
            : "";
        setError(
          `${language.toUpperCase()} needs a compile server. No backend is configured.\n\n` +
            "• Set VITE_COMPILE_API_URL in .env to your backend (e.g. http://localhost:8080/api/compile)\n" +
            "• Start the prefcol-compiler-svc backend and ensure Docker is running for Java/C/Python.\n" +
            "• Or use JavaScript / HTML in this editor to run code in the browser." +
            hint405
        );
        setOutput("");
      } else if (!res.ok || data.error) {
        // Show full compiler/runner output (error + stdout so user sees real messages)
        let errMsg = [data.error, data.output].filter(Boolean).join("\n\n") || "Compilation failed";
        if (genericFailure && needsBackend) {
          errMsg +=
            "\n\nTip: Start the compile backend (prefcol-compiler-svc) and set VITE_COMPILE_API_URL, or use JavaScript / HTML to run in the browser.";
        }
        setError(errMsg);
        setOutput("");
      } else {
        setOutput(data.output || "");
        setError("");
      }
    } catch (e) {
      const timeMs = performance.now() - start;
      setExecutionTime(`${(timeMs / 1000).toFixed(2)}s`);

      if (language === "javascript") {
        // Fallback: run JS locally in a sandboxed Function and capture console.log
        try {
          let outputBuffer = "";
          const originalLog = console.log;
          console.log = (...args) => {
            outputBuffer += args.join(" ") + "\n";
            originalLog.apply(console, args);
          };
          // Provide a simple input function
          const INPUT = input;
          const readInput = () => INPUT;
          // eslint-disable-next-line no-new-func
          const fn = new Function("readInput", code);
          fn(readInput);
          console.log = originalLog;
          setOutput(outputBuffer || "Program finished with no output.");
          setError("");
        } catch (err) {
          setError(String(err));
        }
      } else {
        setError(
          `${language.toUpperCase()} needs a compile server. No backend is configured.\n\n` +
          "• Set VITE_COMPILE_API_URL in .env to your backend (e.g. http://localhost:8080/api/compile)\n" +
          "• Or use JavaScript / HTML in this editor to run code in the browser."
        );
      }
    } finally {
      setRunning(false);
    }
  };

  const clearConsole = () => {
    setOutput("");
    setError("");
    setExecutionTime("");
  };

  const editorHeight = fullscreen ? "calc(100vh - 12rem)" : "420px";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-900 pt-24 pb-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-6xl"
      >
        <div className="mb-6 text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Live Code Playground
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
            Write, run, and experiment with code across multiple languages in a modern,
            responsive online compiler.
          </p>
          <p className="text-xs text-emerald-200/80">
            JavaScript & HTML run in the browser. Other languages call your{" "}
            <code className="px-1 rounded bg-emerald-950/60 border border-emerald-500/40">
              /api/compile
            </code>{" "}
            backend. Configure <code>VITE_COMPILE_API_URL</code> for production.
          </p>
        </div>

        <div
          className={`backdrop-blur-xl bg-white/5 border border-emerald-500/20 rounded-3xl shadow-2xl shadow-emerald-500/10 overflow-hidden transition-all duration-300 ${
            fullscreen ? "fixed inset-4 z-40" : ""
          }`}
        >
          {/* Top bar: language + theme + actions */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 px-4 py-3 bg-emerald-900/60 border-b border-emerald-500/30">
            <div className="flex items-center gap-3">
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-emerald-400/40 text-emerald-100 text-sm shadow-md">
                  <FaChevronDown className="w-3 h-3 opacity-60" />
                  <select
                    value={language}
                    onChange={(e) => handleLanguageChange(e.target.value)}
                    className="bg-transparent border-none outline-none text-emerald-50 text-sm cursor-pointer"
                  >
                    {LANGUAGES.map((lang) => (
                      <option key={lang.id} value={lang.id} className="bg-slate-900">
                        {lang.label}
                      </option>
                    ))}
                  </select>
                </div>
              </motion.div>
              <button
                onClick={() =>
                  setTheme((prev) => (prev === "vs-dark" ? "vs-light" : "vs-dark"))
                }
                className="text-xs px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-100 border border-emerald-400/50 hover:bg-emerald-500/40 transition-colors"
              >
                {theme === "vs-dark" ? "Dark" : "Light"} mode
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-800/70 text-slate-100 hover:bg-slate-700/90 border border-slate-500/40 transition-colors"
              >
                <FiCopy className="w-4 h-4" />
                Copy
              </button>
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-800/70 text-slate-100 hover:bg-slate-700/90 border border-slate-500/40 transition-colors"
              >
                <FiDownload className="w-4 h-4" />
                Download
              </button>
              <button
                onClick={() => setFullscreen((f) => !f)}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-800/70 text-slate-100 hover:bg-slate-700/90 border border-slate-500/40 transition-colors"
              >
                <FiMaximize2 className="w-4 h-4" />
                {fullscreen ? "Windowed" : "Fullscreen"}
              </button>
              <motion.button
                onClick={handleRun}
                whileTap={{ scale: 0.96 }}
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg ${
                  running
                    ? "bg-amber-500 text-black"
                    : "bg-emerald-400 text-emerald-950 hover:bg-emerald-300"
                } transition-colors`}
                disabled={running}
              >
                {running ? (
                  <>
                    <span className="h-3 w-3 rounded-full border-2 border-amber-900 border-t-transparent animate-spin" />
                    Running...
                  </>
                ) : (
                  <>
                    <FiPlay className="w-4 h-4" />
                    Run (Ctrl+Enter)
                  </>
                )}
              </motion.button>
            </div>
          </div>

          {/* Editor + IO */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-4 px-4 py-3">
            <div className="flex flex-col gap-3">
              <div className="rounded-2xl bg-black/70 border border-emerald-500/30 overflow-hidden shadow-inner">
                <Suspense
                  fallback={
                    <div
                      style={{ height: editorHeight }}
                      className="flex items-center justify-center text-slate-300 text-sm"
                    >
                      Loading editor...
                    </div>
                  }
                >
                  <MonacoEditor
                    height={editorHeight}
                    theme={theme}
                    language={language === "html" ? "html" : language}
                    value={code}
                    onChange={(value) => setCode(value || "")}
                    options={{
                      fontSize: 14,
                      minimap: { enabled: false },
                      automaticLayout: true,
                      wordWrap: "on",
                    }}
                  />
                </Suspense>
              </div>

              <div className="rounded-2xl bg-slate-900/80 border border-slate-600/40 p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-200 uppercase tracking-wide">
                    Custom Input (stdin)
                  </span>
                  <span className="text-[10px] text-slate-500">
                    Paste input for your program if needed
                  </span>
                </div>
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  rows={4}
                  className="w-full bg-black/40 border border-slate-600/60 rounded-xl px-3 py-2 text-xs text-slate-100 font-mono outline-none focus:ring-1 focus:ring-emerald-400"
                  placeholder="Example: input values for your program..."
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-4 lg:mt-0">
              {/* Output / Console */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl bg-slate-950/80 border border-slate-600/50 p-3 shadow-inner"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-200 uppercase tracking-wide">
                    Console Output
                  </span>
                  <div className="flex items-center gap-2">
                    {executionTime && (
                      <span className="text-[10px] text-emerald-300">
                        {executionTime}
                      </span>
                    )}
                    <button
                      onClick={clearConsole}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-500/50 transition-colors"
                    >
                      <FiTrash2 className="w-3 h-3" />
                      Clear
                    </button>
                  </div>
                </div>

                <div
                  className={`mt-1 h-48 md:h-56 lg:h-64 rounded-xl border px-3 py-2 text-xs font-mono overflow-auto whitespace-pre-wrap ${
                    error
                      ? "border-red-500/70 bg-red-950/50 text-red-200 animate-pulse"
                      : output
                      ? "border-emerald-500/60 bg-emerald-950/40 text-emerald-100"
                      : "border-slate-600/60 bg-black/40 text-slate-400"
                  }`}
                >
                  {error ? error : output || "Hit Run to see output here."}
                </div>
              </motion.div>

              {/* HTML Live Preview */}
              {language === "html" && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.12 }}
                  className="rounded-2xl bg-slate-900/80 border border-emerald-500/40 p-3"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-emerald-200 uppercase tracking-wide">
                      Live Preview
                    </span>
                    <span className="text-[10px] text-emerald-300">
                      HTML / CSS / JS rendered sandbox
                    </span>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-emerald-500/40 bg-white h-56">
                    <iframe
                      id="live-html-preview"
                      title="Live HTML Preview"
                      className="w-full h-full bg-white"
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

