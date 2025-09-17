// import React, { useState } from "react";
// import { Routes, Route, Link, Navigate } from "react-router-dom";

// import Home from "./pages/Home";
// import Summariser from "./pages/Summariser";
// import BookDetail from "./pages/BookDetail";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import UploadBook from "./pages/UploadBook";
// import Books from "./pages/Books";

// import DarkModeToggle from "./components/DarkModeToggle";
// import SpotlightReads from "./components/SpotlightReads";
// import TrendingBooks from "./components/TrendingBooks";
// import OurImpact from "./components/OurImpact";
// import Testimonials from "./components/Testimonials";

// export default function App() {
//   const [token, setToken] = useState(localStorage.getItem("token"));

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setToken(null);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
//       {/* Header */}
//       <header className="bg-white dark:bg-gray-800 shadow">
//         <div className="container mx-auto p-4 flex justify-between items-center">
//           <Link to="/" className="font-bold text-xl">
//             📚 BooksApp
//           </Link>
//           <nav className="space-x-4 flex items-center">
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
//             {token ? (
//               <button
//                 onClick={handleLogout}
//                 className="hover:underline text-red-400"
//               >
//                 Logout
//               </button>
//             ) : (
//               <>
//                 <Link to="/login" className="hover:underline">
//                   Sign In
//                 </Link>
//                 <Link to="/register" className="hover:underline">
//                   Join the Library
//                 </Link>
//               </>
//             )}
//             <DarkModeToggle />
//           </nav>
//         </div>
//       </header>

//       {/* Main */}
//       <main className="container mx-auto p-4">
//         {/* Landing Page Sections */}
//         <SpotlightReads />
//         <TrendingBooks />
//         <OurImpact />
//         <Testimonials />

//         {/* Routes */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/books" element={<Books />} />
//           <Route path="/book/:id" element={<BookDetail />} />
//           <Route path="/summariser" element={<Summariser />} />
//           <Route
//             path="/upload"
//             element={token ? <UploadBook /> : <Navigate to="/login" />}
//           />
//           <Route path="/login" element={<Login setToken={setToken} />} />
//           <Route path="/register" element={<Register />} />
//         </Routes>
//       </main>

//       {/* Footer */}
//       <footer className="bg-white dark:bg-gray-800 mt-8">
//         <div className="container mx-auto p-4 text-center text-sm">
//           Built with ❤️ by Sanya
//         </div>
//       </footer>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import Summariser from "./pages/Summariser";
import UploadBook from "./pages/UploadBook";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Search from "./pages/Search";
import Favorites from "./pages/favorites";
import Categories from "./pages/Categories";
import Reviews from "./pages/Reviews";
import Profile from "./pages/Profile";
import PDFReader from "./pages/PDFReader";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navbar */}
      <Navbar token={token} onLogout={handleLogout} />

      {/* Main content */}
      <main className="flex-1 container mx-auto p-4">
        <Routes>
          {/* Core Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/summariser" element={<Summariser />} />

          {/* Extended Features */}
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route
            path="/profile"
            element={token ? <Profile /> : <Navigate to="/login" />}
          />
          <Route path="/pdf-reader" element={<PDFReader />} />

          {/* Upload (protected) */}
          <Route
            path="/upload"
            element={token ? <UploadBook /> : <Navigate to="/login" />}
          />

          {/* Auth */}
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
