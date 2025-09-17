// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// export default function BookDetail() {
//   const { id } = useParams();
//   const [vol, setVol] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Example: Google Books API or your own API
//     fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setVol(data);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, [id]);

//   if (loading) return <p>Loading...</p>;
//   if (!vol) return <p>Book not found.</p>;

//   return (
//     <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
//       <h1 className="text-2xl font-bold mb-4">
//         {vol.volumeInfo?.title || "Untitled"}
//       </h1>
//       <p className="text-gray-700 dark:text-gray-300 mb-2">
//         <strong>Authors:</strong>{" "}
//         {vol.volumeInfo?.authors?.join(", ") || "Unknown"}
//       </p>
//       <p className="text-gray-700 dark:text-gray-300 mb-2">
//         <strong>Published:</strong> {vol.volumeInfo?.publishedDate || "N/A"}
//       </p>
//       <p className="text-gray-700 dark:text-gray-300 mb-4">
//         {vol.volumeInfo?.description || "No description available."}
//       </p>
//       {vol.volumeInfo?.previewLink && (
//         <a
//           href={vol.volumeInfo.previewLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-500 hover:underline"
//         >
//           Preview Book
//         </a>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake fetch for demo purposes
    const fetchedBook = {
      id,
      title: "Sample Book Title",
      author: "Author Name",
      description: "This is a sample book description.",
    };
    setBook(fetchedBook);
    setLoading(false);
  }, [id]);

  const saveToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    // Avoid duplicates
    if (!favorites.find((b) => b.id === book.id)) {
      favorites.push(book);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert("Book saved to favorites!");
    } else {
      alert("Book already in favorites");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!book) return <p>Book not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow space-y-4">
      <h1 className="text-3xl font-bold">{book.title}</h1>
      <p className="text-gray-600 dark:text-gray-300">by {book.author}</p>
      <p className="mt-4">{book.description}</p>

      <button
        onClick={saveToFavorites}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        ❤️ Save to Favorites
      </button>
    </div>
  );
}
