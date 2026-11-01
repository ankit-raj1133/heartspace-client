import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-[#111827] text-white">

      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-pink-500">
        ❤️ HeartSpace
      </Link>

      {/* Navigation */}
      <ul className="flex gap-8 items-center">

        <li>
          <Link
            to="/"
            className="hover:text-pink-400 transition"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/confession"
            className="hover:text-pink-400 transition"
          >
            Confessions
          </Link>
        </li>

        <li>
          <Link
            to="/support"
            className="hover:text-pink-400 transition"
          >
            Support
          </Link>
        </li>

        <li>
          <Link
            to="/login"
            className="hover:text-pink-400 transition"
          >
            Login
          </Link>
        </li>

        <li>
          <Link
            to="/signup"
            className="px-5 py-2 rounded-lg bg-pink-600 hover:bg-pink-700 transition"
          >
            Sign Up
          </Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;