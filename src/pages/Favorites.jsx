// // src/pages/Favorites.jsx
// import React from "react";

// const Favorites = () => {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-4">Your Favorite Books</h1>
//       <p className="text-lg text-gray-600">
//         Here you can view and manage all your favorite books.
//       </p>

//       {/* Example placeholder list */}
//       <ul className="mt-4 space-y-2">
//         <li className="p-3 border rounded-md shadow">📘 Book 1</li>
//         <li className="p-3 border rounded-md shadow">📕 Book 2</li>
//         <li className="p-3 border rounded-md shadow">📙 Book 3</li>
//       </ul>
//     </div>
//   );
// };

// export default Favorites;

// File: src/pages/Favorites.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Favorites() {
  const [savedBooks, setSavedBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("title");

  // Load favorites from localStorage
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setSavedBooks(favorites);
  }, []);

  // Remove a book
  const removeFromFavorites = (id) => {
    const updated = savedBooks.filter((b) => b.id !== id);
    localStorage.setItem("favorites", JSON.stringify(updated));
    setSavedBooks(updated);
  };

  // Search filter
  const filtered = savedBooks
    .filter(
      (book) =>
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        (book.author &&
          book.author.toLowerCase().includes(search.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === "title") return a.title.localeCompare(b.title);
      if (sortBy === "author")
        return (a.author || "").localeCompare(b.author || "");
      return 0;
    });

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
      <h2 className="text-3xl font-bold mb-6">❤️ My Library / Favorites</h2>

      {/* Search + Sort */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 Search favorites..."
          className="flex-1 p-3 border rounded dark:bg-gray-800 dark:border-gray-700"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-3 border rounded dark:bg-gray-800 dark:border-gray-700"
        >
          <option value="title">Sort by Title</option>
          <option value="author">Sort by Author</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          No favorites yet. Save some books to see them here!
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((book) => (
            <div
              key={book.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
            >
              {/* Cover Image */}
              <img
                src={
                  book.cover ||
                  "https://via.placeholder.com/150x220?text=No+Cover"
                }
                alt={book.title}
                className="h-56 w-full object-cover rounded-md mb-3"
              />

              {/* Book Info */}
              <h3 className="font-semibold text-lg">{book.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {book.author || "Unknown Author"}
              </p>

              {/* Actions */}
              <div className="mt-auto flex gap-2">
                <Link
                  to={`/book/${book.id}`}
                  className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 text-center"
                >
                  View Details
                </Link>

                {book.pdf && (
                  <a
                    href={book.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700"
                  >
                    📖 Read
                  </a>
                )}

                <button
                  onClick={() => removeFromFavorites(book.id)}
                  className="px-3 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                >
                  ❌
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
