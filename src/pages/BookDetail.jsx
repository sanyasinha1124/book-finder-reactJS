// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// export default function BookDetail() {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fake fetch for demo purposes
//     const fetchedBook = {
//       id,
//       title: "Sample Book Title",
//       author: "Author Name",
//       description: "This is a sample book description.",
//     };
//     setBook(fetchedBook);
//     setLoading(false);
//   }, [id]);

//   const saveToFavorites = () => {
//     const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

//     // Avoid duplicates
//     if (!favorites.find((b) => b.id === book.id)) {
//       favorites.push(book);
//       localStorage.setItem("favorites", JSON.stringify(favorites));
//       alert("Book saved to favorites!");
//     } else {
//       alert("Book already in favorites");
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (!book) return <p>Book not found.</p>;

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow space-y-4">
//       <h1 className="text-3xl font-bold">{book.title}</h1>
//       <p className="text-gray-600 dark:text-gray-300">by {book.author}</p>
//       <p className="mt-4">{book.description}</p>

//       <button
//         onClick={saveToFavorites}
//         className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
//       >
//         ❤️ Save to Favorites
//       </button>
//     </div>
//   );
// }

// File: src/pages/BookDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Fetch book details (Google Books API for example)
    const fetchBook = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${id}`
        );
        const data = await res.json();
        setBook(data);
        setLoading(false);

        // Check if already in favorites
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        const exists = favorites.some((b) => b.id === data.id);
        setIsFavorite(exists);
      } catch (err) {
        console.error("Error fetching book:", err);
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  // Save to favorites
  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (isFavorite) {
      // remove
      const updated = favorites.filter((b) => b.id !== book.id);
      localStorage.setItem("favorites", JSON.stringify(updated));
      setIsFavorite(false);
    } else {
      // add
      const newBook = {
        id: book.id,
        title: book.volumeInfo?.title || "Untitled",
        author: book.volumeInfo?.authors?.[0] || "Unknown",
        cover: book.volumeInfo?.imageLinks?.thumbnail || "",
        pdf: book.accessInfo?.pdf?.isAvailable
          ? book.accessInfo?.webReaderLink
          : null,
      };
      favorites.push(newBook);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!book) return <p>Book not found.</p>;

  const info = book.volumeInfo;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Book Cover */}
        <img
          src={
            info.imageLinks?.thumbnail ||
            "https://via.placeholder.com/150x220?text=No+Cover"
          }
          alt={info.title}
          className="w-48 h-72 object-cover rounded"
        />

        {/* Book Info */}
        <div>
          <h2 className="text-3xl font-bold mb-2">{info.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            {info.authors?.join(", ") || "Unknown Author"}
          </p>
          <p className="mb-4">
            {info.description || "No description available."}
          </p>

          <div className="flex gap-3">
            <a
              href={info.previewLink}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Preview
            </a>
            <button
              onClick={toggleFavorite}
              className={`px-4 py-2 rounded ${
                isFavorite
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-green-600 hover:bg-green-700"
              } text-white`}
            >
              {isFavorite ? "❤️ Remove from Favorites" : "➕ Save to Favorites"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
