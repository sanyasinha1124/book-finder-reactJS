// src/pages/Categories.jsx
import React from "react";

export default function Categories() {
  const categories = [
    "Fiction",
    "Science",
    "History",
    "Business",
    "Technology",
    "Self-Help",
    "Philosophy",
    "Biographies",
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">📚 Categories</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        Browse books by category or genre.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat}
            className="p-4 rounded-xl shadow-md bg-white dark:bg-gray-800 hover:shadow-lg cursor-pointer transition"
          >
            <h2 className="text-lg font-semibold">{cat}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
