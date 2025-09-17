import React, { useState } from "react";

export default function SearchBar({
  onSearch,
  placeholder = "Search books, authors, ISBN...",
}) {
  const [q, setQ] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onSearch(q.trim());
  };

  return (
    <form onSubmit={submit} className="flex gap-2">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="flex-1 p-3 rounded-lg border dark:bg-gray-800"
        placeholder={placeholder}
      />
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
        Search
      </button>
    </form>
  );
}

