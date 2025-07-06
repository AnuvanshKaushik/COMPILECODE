import { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";
import LanguageSelector from "./LanguageSelector";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (lang) => {
    setLanguage(lang);
    setValue(CODE_SNIPPETS[lang]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            Code Playground
          </h1>
          <p className="text-gray-300 text-lg">Write, compile, and run code in your browser</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Panel - Editor */}
          <div className="space-y-4">
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 p-6 shadow-2xl">
              <LanguageSelector language={language} onSelect={onSelect} />
              <div className="rounded-xl overflow-hidden border border-white/20 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
                <Editor
                  height="70vh"
                  theme="vs-dark"
                  language={language}
                  defaultValue={CODE_SNIPPETS[language]}
                  value={value}
                  onMount={onMount}
                  onChange={(value) => setValue(value)}
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    fontFamily: "Fira Code, Monaco, 'Cascadia Code', 'Roboto Mono', monospace",
                    fontLigatures: true,
                    lineNumbers: "on",
                    roundedSelection: false,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    tabSize: 2,
                    wordWrap: "on",
                    theme: "vs-dark",
                    padding: { top: 16, bottom: 16 },
                    smoothScrolling: true,
                    cursorBlinking: "smooth",
                    renderLineHighlight: "all",
                    selectOnLineNumbers: true,
                    glyphMargin: false,
                    folding: true,
                    foldingHighlight: true,
                    showFoldingControls: "always",
                    renderWhitespace: "selection",
                    bracketPairColorization: { enabled: true },
                    guides: {
                      bracketPairs: true,
                      indentation: true,
                    },
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Panel - Output */}
          <div className="space-y-4">
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 p-6 shadow-2xl h-full">
              <Output editorRef={editorRef} language={language} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;