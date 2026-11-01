import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-6">

      <div className="text-center">

        <div className="text-7xl mb-6">
          😕
        </div>

        <h1 className="text-6xl font-bold text-white">
          404
        </h1>

        <h2 className="text-2xl font-semibold text-white mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 mt-3">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 px-7 py-3 rounded-lg bg-pink-600 hover:bg-pink-700 text-white font-semibold transition"
        >
          Back to Home
        </Link>

      </div>

    </div>
  );
}

export default NotFound;