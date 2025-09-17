// import React from "react";

// export default function Favorites() {
//   // Later: fetch user's saved books
//   return (
//     <div className="max-w-4xl mx-auto">
//       <h2 className="text-2xl font-semibold mb-4">My Library ❤️</h2>
//       <p>No favorites yet. Save some books to see them here!</p>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";

export default function Favorites() {
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setSavedBooks(favorites);
  }, []);

  const removeFromFavorites = (id) => {
    const updated = savedBooks.filter((b) => b.id !== id);
    localStorage.setItem("favorites", JSON.stringify(updated));
    setSavedBooks(updated);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">❤️ My Library / Favorites</h2>

      {savedBooks.length === 0 ? (
        <p className="text-gray-500">No favorites yet. Save some books!</p>
      ) : (
        <ul className="space-y-3">
          {savedBooks.map((book) => (
            <li
              key={book.id}
              className="p-4 border rounded-md dark:border-gray-700 flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold">{book.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {book.author}
                </p>
              </div>
              <button
                onClick={() => removeFromFavorites(book.id)}
                className="px-3 py-1 text-sm bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
