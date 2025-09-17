import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const submit = (e) => {
    e.preventDefault();
    // Fake auth: accept any non-empty
    if (!email || !password) return alert("Provide email & password");
    const fakeToken = btoa(email + ":" + password);
    localStorage.setItem("token", fakeToken);
    setToken(fakeToken);
    navigate(from, { replace: true });
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
      <form onSubmit={submit} className="space-y-3">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-3 rounded dark:bg-gray-700"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-3 rounded dark:bg-gray-700"
        />
        <button className="w-full px-4 py-2 bg-blue-600 text-white rounded">
          Sign In
        </button>
      </form>
    </div>
  );
}
