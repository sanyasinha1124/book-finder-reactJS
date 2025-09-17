// File: src/components/BookCard.jsx
// ---------------------------
import React from "react";
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  const id =
    book.id || (book.selfLink ? book.selfLink.split("/").pop() : Math.random());
  const vol = book.volumeInfo || {};
  const thumbnail =
    vol.imageLinks?.thumbnail ||
    `https://via.placeholder.com/128x192?text=No+Cover`;

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow flex gap-4">
      <img
        src={thumbnail}
        alt={vol.title}
        className="w-28 h-40 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{vol.title}</h3>
        <p className="text-sm text-gray-500">
          {(vol.authors || []).join(", ")}
        </p>
        <p className="mt-2 text-sm line-clamp-3">{vol.description}</p>
        <div className="mt-4 flex gap-2 items-center">
          <Link
            to={`/book/${id}`}
            state={{ book }}
            className="px-3 py-1 bg-blue-600 text-white rounded"
          >
            View
          </Link>
          {vol.previewLink && (
            <a
              href={vol.previewLink}
              target="_blank"
              rel="noreferrer"
              className="text-sm underline"
            >
              Preview
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

