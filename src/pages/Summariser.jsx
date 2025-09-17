// File: src/pages/Summariser.jsx
// ---------------------------
import React, { useState } from "react";

export default function Summariser() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarise = async () => {
    if (!text) return;
    setLoading(true);
    // Placeholder: Replace with real API call to your summarisation model
    setTimeout(() => {
      setSummary(text.split("\n").slice(0, 3).join(" "));
      setLoading(false);
    }, 800);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <h2 className="text-2xl font-semibold">Smart Summariser</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={8}
        className="w-full p-3 rounded-lg dark:bg-gray-800"
        placeholder="Paste article or notes here..."
      />
      <div className="flex gap-2">
        <button
          onClick={handleSummarise}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Summarise
        </button>
        <button
          onClick={() => {
            setText("");
            setSummary("");
          }}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Clear
        </button>
      </div>

      {loading && <p>Summarising...</p>}
      {summary && (
        <div className="p-4 bg-green-50 dark:bg-green-900 rounded">
          <h3 className="font-semibold">Summary</h3>
          <p className="mt-2">{summary}</p>
        </div>
      )}
    </div>
  );
}
