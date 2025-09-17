// src/pages/Favorites.jsx
import React from "react";

const Favorites = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Your Favorite Books</h1>
      <p className="text-lg text-gray-600">
        Here you can view and manage all your favorite books.
      </p>

      {/* Example placeholder list */}
      <ul className="mt-4 space-y-2">
        <li className="p-3 border rounded-md shadow">📘 Book 1</li>
        <li className="p-3 border rounded-md shadow">📕 Book 2</li>
        <li className="p-3 border rounded-md shadow">📙 Book 3</li>
      </ul>
    </div>
  );
};

export default Favorites;
