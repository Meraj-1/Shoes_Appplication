import React, { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add register API call logic here
    console.log("Register submitted:", form);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">Create Account</h2>
        <form onSubmit={handleSubmit} className="mt-6">
          <div>
            <label htmlFor="username" className="block text-sm text-gray-800">Username</label>
            <input
              type="text"
              id="username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="block text-sm text-gray-800">Email</label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="block text-sm text-gray-800">Password</label>
            <input
              type="password"
              id="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              required
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
            >
              Register
            </button>
          </div>
        </form>
        <p className="mt-8 text-xs text-center text-gray-600">
          Already have an account?{" "}
          <a href="/sign-in" className="text-blue-500 hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
