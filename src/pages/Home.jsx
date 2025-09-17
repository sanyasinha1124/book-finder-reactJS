// // File: src/pages/Home.jsx
// // ---------------------------
// import React, { useEffect, useState } from "react";
// import Carousel from "../components/Carousel";

// export default function Home() {
//   const [featured, setFeatured] = useState([]);

//   useEffect(() => {
//     // Small set of featured books (Google Books search)
//     fetch(
//       "https://www.googleapis.com/books/v1/volumes?q=subject:technology&maxResults=8"
//     )
//       .then((r) => r.json())
//       .then((data) => {
//         if (data.items) {
//           const items = data.items.map((it) => ({
//             title: it.volumeInfo.title,
//             subtitle: (it.volumeInfo.authors || []).join(", "),
//             image:
//               it.volumeInfo.imageLinks?.thumbnail ||
//               `https://via.placeholder.com/300x400?text=No+Cover`,
//           }));
//           setFeatured(items);
//         }
//       })
//       .catch(() => {});
//   }, []);

//   return (
//     <div className="space-y-8">
//       <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-xl p-8">
//         <h1 className="text-4xl font-bold">Discover great books</h1>
//         <p className="mt-2 text-lg opacity-90">
//           Search, preview and read. Built for learners and readers.
//         </p>
//       </section>

//       {/* <section>
// <h2 className="text-2xl font-semibold mb-4">Spotlight reads</h2>
// <Carousel items={featured} />
// </section> */}

//       <section>
//         <h2 className="text-2xl font-semibold mb-4">Spotlight reads</h2>
//         <Carousel
//           items={[
//             {
//               title: "Atomic Habits",
//               subtitle: "James Clear",
//               image:
//                 "https://images-na.ssl-images-amazon.com/images/I/51-uspgqWIL._SX329_BO1,204,203,200_.jpg",
//               url: "/book/1",
//             },
//             {
//               title: "The Lean Startup",
//               subtitle: "Eric Ries",
//               image:
//                 "https://images-na.ssl-images-amazon.com/images/I/41-5nhmLw5L._SX331_BO1,204,203,200_.jpg",
//               url: "/book/2",
//             },
//           ]}
//         />
//       </section>

//       <section>
//         <h2 className="text-2xl font-semibold mb-4">Why BooksApp?</h2>
//         <div className="grid md:grid-cols-3 gap-4">
//           <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
//             Fast search & preview
//           </div>
//           <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
//             Upload PDFs & share
//           </div>
//           <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
//             Smart summariser
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";

export default function Home() {
  const [spotlightBooks, setSpotlightBooks] = useState([]);
  const [trendingBooks, setTrendingBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loadingSpotlight, setLoadingSpotlight] = useState(true);
  const [loadingTrending, setLoadingTrending] = useState(true);
  const [loadingCategories, setLoadingCategories] = useState(true);

  // Fetch Spotlight Reads
  useEffect(() => {
    const fetchSpotlight = async () => {
      try {
        const res = await fetch(
          `https://openlibrary.org/search.json?q=bestseller&limit=10`
        );
        const data = await res.json();
        const items = data.docs.map((book) => ({
          title: book.title,
          subtitle: book.author_name?.join(", ") || "Unknown",
          image: book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
            : null,
          url: `/book/${book.key.replace("/works/", "")}`,
        }));
        setSpotlightBooks(items);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingSpotlight(false);
      }
    };
    fetchSpotlight();
  }, []);

  // Fetch Trending Books
  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const res = await fetch(
          `https://openlibrary.org/search.json?q=trending&limit=10`
        );
        const data = await res.json();
        const items = data.docs.map((book) => ({
          title: book.title,
          subtitle: book.author_name?.join(", ") || "Unknown",
          image: book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
            : null,
          url: `/book/${book.key.replace("/works/", "")}`,
        }));
        setTrendingBooks(items);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingTrending(false);
      }
    };
    fetchTrending();
  }, []);

  // Fetch Categories (using subjects)
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const subjects = ["Science", "Business", "Fiction", "History"];
        const items = await Promise.all(
          subjects.map(async (subject) => {
            const res = await fetch(
              `https://openlibrary.org/subjects/${subject.toLowerCase()}.json?limit=1`
            );
            const data = await res.json();
            return {
              title: subject,
              subtitle: `${data.work_count} books`,
              image: data.works[0]?.cover_id
                ? `https://covers.openlibrary.org/b/id/${data.works[0].cover_id}-L.jpg`
                : null,
              url: `/search?subject=${subject.toLowerCase()}`,
            };
          })
        );
        setCategories(items);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingCategories(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold mb-4">Welcome to BooksApp</h1>

      {/* Spotlight Reads */}
      <section>
        <h2 className="text-2xl font-bold mb-4">✨ Spotlight Reads</h2>
        {loadingSpotlight ? (
          <p>Loading spotlight books...</p>
        ) : (
          <Carousel items={spotlightBooks} />
        )}
      </section>

      {/* Trending Books */}
      <section>
        <h2 className="text-2xl font-bold mb-4">🔥 Trending Books</h2>
        {loadingTrending ? (
          <p>Loading trending books...</p>
        ) : (
          <Carousel items={trendingBooks} />
        )}
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-2xl font-bold mb-4">🏷️ Categories</h2>
        {loadingCategories ? (
          <p>Loading categories...</p>
        ) : (
          <Carousel items={categories} />
        )}
      </section>
    </div>
  );
}
