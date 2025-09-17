// // File: src/components/Carousel.jsx
// // ---------------------------
// import React, { useRef } from "react";

// export default function Carousel({ items = [] }) {
//   const ref = useRef();

//   const scroll = (dir) => {
//     if (!ref.current) return;
//     ref.current.scrollBy({ left: dir * 320, behavior: "smooth" });
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={() => scroll(-1)}
//         className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow"
//       >
//         ‹
//       </button>
//       <div ref={ref} className="flex gap-4 overflow-x-auto no-scrollbar py-4">
//         {items.map((it, i) => (
//           <div
//             key={i}
//             className="min-w-[300px] bg-white dark:bg-gray-800 rounded-xl p-4 shadow"
//           >
//             <img
//               src={it.image}
//               alt={it.title}
//               className="h-40 w-full object-cover rounded-md mb-3"
//             />
//             <h3 className="font-semibold">{it.title}</h3>
//             <p className="text-sm text-gray-500">{it.subtitle}</p>
//           </div>
//         ))}
//       </div>
//       <button
//         onClick={() => scroll(1)}
//         className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow"
//       >
//         ›
//       </button>
//     </div>
//   );
// }

// File: src/components/Carousel.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function Carousel({ items = [] }) {
  const ref = useRef();

  const scroll = (dir) => {
    if (!ref.current) return;
    ref.current.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Left scroll button */}
      <button
        onClick={() => scroll(-1)}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow z-10"
      >
        ‹
      </button>

      {/* Scrollable container */}
      <div ref={ref} className="flex gap-4 overflow-x-auto no-scrollbar py-4">
        {items.map((it, i) => (
          <Link
            key={i}
            to={it.url || "#"} // Make each item clickable
            className="min-w-[300px] bg-white dark:bg-gray-800 rounded-xl p-4 shadow cursor-pointer hover:shadow-lg transition"
          >
            {it.image && (
              <img
                src={it.image}
                alt={it.title}
                className="h-40 w-full object-cover rounded-md mb-3"
              />
            )}
            <h3 className="font-semibold">{it.title}</h3>
            {it.subtitle && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {it.subtitle}
              </p>
            )}
          </Link>
        ))}
      </div>

      {/* Right scroll button */}
      <button
        onClick={() => scroll(1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow z-10"
      >
        ›
      </button>
    </div>
  );
}
