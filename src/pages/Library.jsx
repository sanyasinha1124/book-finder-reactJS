import React, { useState, useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function Library() {
  const [booksRead, setBooksRead] = useState(0);
  const [hoursRead, setHoursRead] = useState(0);
  const [favoriteGenre, setFavoriteGenre] = useState("None");
  const [notes, setNotes] = useState([]);
  const [history, setHistory] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const stats = JSON.parse(localStorage.getItem("readingStats") || "{}");
    setBooksRead(stats.booksRead || 0);
    setHoursRead(stats.hoursRead || 0);
    setFavoriteGenre(stats.favoriteGenre || "None");

    const storedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    setNotes(storedNotes);

    const storedHistory = JSON.parse(localStorage.getItem("history") || "[]");
    setHistory(storedHistory);
  }, []);

  // Add a new note
  const addNote = (bookTitle, text) => {
    const newNote = { id: Date.now(), bookTitle, text };
    const updated = [...notes, newNote];
    setNotes(updated);
    localStorage.setItem("notes", JSON.stringify(updated));
  };

  // Remove note
  const removeNote = (id) => {
    const updated = notes.filter((n) => n.id !== id);
    setNotes(updated);
    localStorage.setItem("notes", JSON.stringify(updated));
  };

  // Chart Data - Example Genres
  const genreData = {
    labels: ["Fiction", "Non-fiction", "Fantasy", "Science", "Other"],
    datasets: [
      {
        label: "Books Read by Genre",
        data: [5, 2, 7, 3, 1], // Example data
        backgroundColor: [
          "#6366f1",
          "#10b981",
          "#f59e0b",
          "#ef4444",
          "#8b5cf6",
        ],
      },
    ],
  };

  const monthlyData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Books Read per Month",
        data: [2, 1, 3, 4, 2],
        backgroundColor: "#3b82f6",
      },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">📚 My Library Dashboard</h1>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow text-center">
          <h2 className="text-lg font-semibold">Books Read</h2>
          <p className="text-2xl">{booksRead}</p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow text-center">
          <h2 className="text-lg font-semibold">Hours Spent</h2>
          <p className="text-2xl">{hoursRead}</p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow text-center">
          <h2 className="text-lg font-semibold">Favorite Genre</h2>
          <p className="text-xl">{favoriteGenre}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Books by Genre</h3>
          <Pie data={genreData} />
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Monthly Reading</h3>
          <Bar data={monthlyData} />
        </div>
      </div>

      {/* Notes Section */}
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow mb-6">
        <h3 className="text-lg font-semibold mb-4">📝 Notes & Highlights</h3>
        <button
          onClick={() =>
            addNote("Example Book", "This is an example highlight note.")
          }
          className="px-3 py-1 mb-4 bg-indigo-600 text-white rounded"
        >
          ➕ Add Example Note
        </button>
        {notes.length === 0 ? (
          <p className="text-gray-500">No notes added yet.</p>
        ) : (
          <ul className="space-y-3">
            {notes.map((note) => (
              <li
                key={note.id}
                className="p-3 border dark:border-gray-700 rounded-md flex justify-between items-center"
              >
                <div>
                  <h4 className="font-semibold">{note.bookTitle}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {note.text}
                  </p>
                </div>
                <button
                  onClick={() => removeNote(note.id)}
                  className="px-2 py-1 text-xs bg-red-500 text-white rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* History Section */}
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">
          📥 Download / Upload History
        </h3>
        {history.length === 0 ? (
          <p className="text-gray-500">No activity yet.</p>
        ) : (
          <ul className="space-y-3">
            {history.map((item) => (
              <li
                key={item.id}
                className="p-3 border dark:border-gray-700 rounded-md"
              >
                <p className="font-semibold">{item.bookTitle}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.action} on {new Date(item.date).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
