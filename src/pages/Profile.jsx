import React from "react";

export default function Profile() {
  const user = {
    name: "Sanya",
    email: "sanya@example.com",
    uploads: 5,
    favorites: 10,
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Books Uploaded:</strong> {user.uploads}
      </p>
      <p>
        <strong>Favorites:</strong> {user.favorites}
      </p>
    </div>
  );
}
