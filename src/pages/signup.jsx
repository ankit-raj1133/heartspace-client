import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <Link
            to="/"
            className="text-3xl font-bold text-pink-500"
          >
            ❤️ HeartSpace
          </Link>

          <h1 className="text-3xl font-bold text-white mt-6">
            Create Your Account
          </h1>

          <p className="text-gray-400 mt-2">
            Create a safe space for your thoughts.
          </p>
        </div>

        {/* Signup Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">

          {/* Username */}
          <div className="mb-5">
            <label className="block text-gray-300 mb-2">
              Username
            </label>

            <input
              type="text"
              placeholder="Choose a username"
              className="w-full px-4 py-3 rounded-lg bg-[#111827] border border-white/10 text-white placeholder-gray-500 outline-none focus:border-pink-500 transition"
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-gray-300 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-[#111827] border border-white/10 text-white placeholder-gray-500 outline-none focus:border-pink-500 transition"
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="block text-gray-300 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 rounded-lg bg-[#111827] border border-white/10 text-white placeholder-gray-500 outline-none focus:border-pink-500 transition"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-3 rounded-lg bg-[#111827] border border-white/10 text-white placeholder-gray-500 outline-none focus:border-pink-500 transition"
            />
          </div>

          {/* Signup Button */}
          <button
            type="button"
            className="w-full py-3 rounded-lg bg-pink-600 hover:bg-pink-700 text-white font-semibold transition"
          >
            Create Account
          </button>

          {/* Login */}
          <p className="text-center text-gray-400 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-pink-500 hover:text-pink-400 font-medium"
            >
              Login
            </Link>
          </p>

        </div>

        {/* Privacy */}
        <p className="text-center text-gray-500 text-sm mt-6">
          🔒 Your personal information will be kept private.
        </p>

      </div>

    </div>
  );
}

export default Signup;