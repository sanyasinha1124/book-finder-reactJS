import React from "react";

const genres = ["Fiction", "Science", "Business", "History", "Technology"];

export default function Genres() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Browse by Genre</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {genres.map((g) => (
          <div
            key={g}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg cursor-pointer"
          >
            {g}
          </div>
        ))}
      </div>
    </div>
  );
}
