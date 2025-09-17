import React, { useState } from "react";

export default function Reviews() {
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, review]);
    setReview("");
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Community Reviews</h2>

      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          className="w-full border p-2 rounded mb-2"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review..."
        />
        <button className="px-4 py-2 bg-green-600 text-white rounded">
          Submit
        </button>
      </form>

      <div>
        {reviews.map((r, i) => (
          <div key={i} className="border-b py-2">
            ⭐ {r}
          </div>
        ))}
      </div>
    </div>
  );
}
