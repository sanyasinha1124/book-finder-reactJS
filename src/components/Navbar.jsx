import React from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar({ token, onLogout }) {
  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-2xl font-bold">
            📚 BooksApp
          </Link>
          <nav className="hidden md:flex gap-4 text-sm text-gray-700 dark:text-gray-300">
            <Link to="/" className="hover:underline">
              Discover
            </Link>
            <Link to="/books" className="hover:underline">
              Library
            </Link>
            <Link to="/summariser" className="hover:underline">
              Smart Summariser
            </Link>
            <Link to="/upload" className="hover:underline">
              Upload & Share
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {token ? (
            <button
              onClick={onLogout}
              className="text-sm text-red-500 hover:underline"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="text-sm hover:underline">
                Sign In
              </Link>
              <Link
                to="/register"
                className="text-sm px-3 py-1 bg-blue-600 text-white rounded-md"
              >
                Join the Library
              </Link>
            </>
          )}

          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}
