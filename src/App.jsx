// import React, { useState } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";

// // Pages
// import Home from "./pages/Home";
// import Books from "./pages/Books";
// import BookDetail from "./pages/BookDetail";
// import Summariser from "./pages/Summariser";
// import UploadBook from "./pages/UploadBook";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Search from "./pages/Search";

// import Categories from "./pages/Categories";
// import Reviews from "./pages/Reviews";
// import Profile from "./pages/Profile";
// import PDFReader from "./pages/PDFReader";
// i

// // Components
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// export default function App() {
//   const [token, setToken] = useState(localStorage.getItem("token"));

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setToken(null);
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
//       {/* Navbar */}
//       <Navbar token={token} onLogout={handleLogout} />

//       {/* Main content */}
//       <main className="flex-1 container mx-auto p-4">
//         <Routes>
//           {/* Core Pages */}
//           <Route path="/" element={<Home />} />
//           <Route path="/books" element={<Books />} />
//           <Route path="/book/:id" element={<BookDetail />} />
//           <Route path="/summariser" element={<Summariser />} />

//           {/* Extended Features */}
//           <Route path="/search" element={<Search />} />

//           <Route path="/categories" element={<Categories />} />
//           <Route path="/reviews" element={<Reviews />} />
//           <Route
//             path="/profile"
//             element={token ? <Profile /> : <Navigate to="/login" />}
//           />
//           <Route path="/pdf-reader" element={<PDFReader />} />

//           {/* Upload (protected) */}
//           <Route
//             path="/upload"
//             element={token ? <UploadBook /> : <Navigate to="/login" />}
//           />

//           {/* Auth */}
//           <Route path="/login" element={<Login setToken={setToken} />} />
//           <Route path="/register" element={<Register />} />
//         </Routes>
//       </main>

//       {/* Footer */}
//       <Footer />
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
import Library from "./pages/Library";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites"; // ✅ Added Favorites page

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
          <Route path="/favorites" element={<Favorites />} />{" "}
          {/* ✅ Added route */}
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
          <Route path="/library" element={<Library />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
