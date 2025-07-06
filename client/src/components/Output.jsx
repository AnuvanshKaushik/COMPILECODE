import { useState } from "react";
import { executeCode } from "../api";
import { Play, Terminal, Loader2, CheckCircle, AlertCircle } from "lucide-react";

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;

    try {
      setIsLoading(true);
      const result = await executeCode(language, sourceCode);
      setOutput(result.output?.split("\n") || ["No output"]);
      setIsError(!!result.error);
    } catch (error) {
      console.error("Error running code:", error);
      setOutput(["Error: " + (error.message || "Unable to run code")]);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-green-400" />
          <p className="text-lg font-semibold text-white">Output</p>
        </div>
        
        <button
          onClick={runCode}
          disabled={isLoading}
          className="group relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl border border-green-500 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="font-medium">Running...</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">Run Code</span>
            </>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>

      <div className="flex-1 relative">
        <div
          className={`h-full p-4 overflow-y-auto rounded-xl border transition-all duration-300 ${
            isError
              ? "border-red-500/50 bg-red-950/20 backdrop-blur-sm"
              : "border-slate-600 bg-slate-950/50 backdrop-blur-sm"
          }`}
        >
          {/* Status indicator */}
          {output && (
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-700">
              {isError ? (
                <AlertCircle className="w-4 h-4 text-red-400" />
              ) : (
                <CheckCircle className="w-4 h-4 text-green-400" />
              )}
              <span className={`text-sm font-medium ${isError ? "text-red-400" : "text-green-400"}`}>
                {isError ? "Execution Error" : "Execution Successful"}
              </span>
            </div>
          )}

          {/* Output content */}
          <div className="font-mono text-sm">
            {output ? (
              <div className="space-y-1">
                {output.map((line, i) => (
                  <div
                    key={i}
                    className={`transition-all duration-300 ${
                      isError ? "text-red-300" : "text-gray-300"
                    }`}
                  >
                    {line || "\u00A0"}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <Terminal className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg mb-2">Ready to run your code</p>
                <p className="text-sm">Click "Run Code" to see the output here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Output;