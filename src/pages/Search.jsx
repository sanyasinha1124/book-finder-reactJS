import React, { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    author: "",
    genre: "",
    year: "",
    language: "",
    pdfOnly: false,
  });

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-4">Advanced Search</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search books..."
        className="w-full border rounded p-2 mb-4"
      />

      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Author"
          className="border rounded p-2"
          onChange={(e) => setFilters({ ...filters, author: e.target.value })}
        />
        <input
          type="text"
          placeholder="Genre"
          className="border rounded p-2"
          onChange={(e) => setFilters({ ...filters, genre: e.target.value })}
        />
        <input
          type="number"
          placeholder="Year"
          className="border rounded p-2"
          onChange={(e) => setFilters({ ...filters, year: e.target.value })}
        />
        <input
          type="text"
          placeholder="Language"
          className="border rounded p-2"
          onChange={(e) => setFilters({ ...filters, language: e.target.value })}
        />
      </div>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          onChange={(e) =>
            setFilters({ ...filters, pdfOnly: e.target.checked })
          }
        />
        PDF only
      </label>

      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
        Search
      </button>
    </div>
  );
}
