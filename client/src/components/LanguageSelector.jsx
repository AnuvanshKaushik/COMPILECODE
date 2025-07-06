import { LANGUAGE_VERSIONS } from "../constants";
import { ChevronDown, Code2 } from "lucide-react";
import { useState } from "react";

const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({ language, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 relative">
      <div className="flex items-center gap-2 mb-3">
        <Code2 className="w-5 h-5 text-purple-400" />
        <p className="text-lg font-semibold text-white">Language</p>
      </div>
      
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative inline-flex justify-between items-center px-4 py-3 bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-xl border border-slate-600 hover:border-purple-400 w-64 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
        >
          <span className="font-medium capitalize">{language}</span>
          <ChevronDown className={`ml-2 w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        {isOpen && (
          <div className="absolute z-50 mt-2 w-64 rounded-xl shadow-2xl bg-slate-800 ring-1 ring-slate-700 border border-slate-600 backdrop-blur-sm animate-in fade-in-0 zoom-in-95 duration-200">
            <div className="py-2 max-h-80 overflow-y-auto">
              {languages.map(([lang, version]) => (
                <button
                  key={lang}
                  onClick={() => {
                    onSelect(lang);
                    setIsOpen(false);
                  }}
                  className={`group w-full text-left px-4 py-3 text-sm transition-all duration-200 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 ${
                    lang === language 
                      ? "bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-300 border-l-2 border-purple-400" 
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium capitalize">{lang}</span>
                    <span className="text-xs text-gray-500 group-hover:text-gray-400">
                      v{version}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;