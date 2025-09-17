// import React from "react";
// import { Link } from "react-router-dom";
// import DarkModeToggle from "./DarkModeToggle";

// export default function Navbar({ token, onLogout }) {
//   return (
//     <header className="bg-white dark:bg-gray-800 shadow">
//       <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//         <div className="flex items-center gap-4">
//           <Link to="/" className="text-2xl font-bold">
//             📚 BooksApp
//           </Link>
//           <nav className="hidden md:flex gap-4 text-sm text-gray-700 dark:text-gray-300">
//             <Link to="/" className="hover:underline">
//               Discover
//             </Link>
//             <Link to="/books" className="hover:underline">
//               Library
//             </Link>
//             <Link to="/summariser" className="hover:underline">
//               Smart Summariser
//             </Link>
//             <Link to="/upload" className="hover:underline">
//               Upload & Share
//             </Link>
//             <Link to="/">Home</Link>
//   <Link to="/books">Books</Link>
//   <Link to="/favorites">Favorites</Link> {/* ✅ New link */}
//           </nav>
//         </div>

//         <div className="flex items-center gap-3">
//           {token ? (
//             <button
//               onClick={onLogout}
//               className="text-sm text-red-500 hover:underline"
//             >
//               Logout
//             </button>
//           ) : (
//             <>
//               <Link to="/login" className="text-sm hover:underline">
//                 Sign In
//               </Link>
//               <Link
//                 to="/register"
//                 className="text-sm px-3 py-1 bg-blue-600 text-white rounded-md"
//               >
//                 Join the Library
//               </Link>
//             </>
//           )}

//           <DarkModeToggle />
//         </div>
//       </div>
//     </header>
//   );
// }
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ token, onLogout }) {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-indigo-600 dark:text-indigo-400"
        >
          📚 BookHub
        </Link>

        {/* Menu Links */}
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-indigo-500">
            Home
          </Link>
          <Link to="/books" className="hover:text-indigo-500">
            Books
          </Link>
          <Link to="/search" className="hover:text-indigo-500">
            Search
          </Link>
          <Link to="/favorites" className="hover:text-indigo-500">
            Favorites
          </Link>
          <Link to="/categories" className="hover:text-indigo-500">
            Categories
          </Link>
          <Link to="/reviews" className="hover:text-indigo-500">
            Reviews
          </Link>
          <Link to="/library" className="hover:text-indigo-500">
            Library
          </Link>{" "}
          {/* ✅ New Library link */}
        </div>

        {/* Auth Section */}
        <div className="flex items-center space-x-4">
          {token ? (
            <>
              <Link to="/profile" className="hover:text-indigo-500">
                Profile
              </Link>
              <button
                onClick={onLogout}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-indigo-500">
                Login
              </Link>
              <Link to="/register" className="hover:text-indigo-500">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
