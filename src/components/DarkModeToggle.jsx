
// import React, { useEffect, useState } from "react";

// export default function DarkModeToggle() {
//   const [dark, setDark] = useState(() => {
//     const saved = localStorage.getItem("theme");
//     if (saved) return saved === "dark";
//     return (
//       window.matchMedia &&
//       window.matchMedia("(prefers-color-scheme: dark)").matches
//     );
//   });

//   useEffect(() => {
//     if (dark) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//     localStorage.setItem("theme", dark ? "dark" : "light");
//   }, [dark]);

//   return (
//     <button
//       onClick={() => setDark(!dark)}
//       aria-label="Toggle Dark Mode"
//       className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-xl transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 shadow"
//     >
//       {dark ? "🌙" : "☀️"}
//     </button>
//   );
// }
import React, { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    // default follow system
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded-md bg-gray-100 dark:bg-gray-700"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}