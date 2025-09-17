// File: src/components/Footer.jsx
// ---------------------------
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600 dark:text-gray-300">
        © {new Date().getFullYear()} BooksApp — Built with ❤️ by Sanya
      </div>
    </footer>
  );
}
