import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b1120] px-6 py-10">

      <div className="max-w-6xl mx-auto">

        {/* Brand */}
        <div className="mb-8">
          <Link
            to="/"
            className="text-2xl font-bold text-pink-500"
          >
            ❤️ HeartSpace
          </Link>

          <p className="text-gray-500 mt-3 max-w-sm">
            A safe and anonymous space where people can
            share, listen and support each other.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-10 mb-8">

          <div>
            <h3 className="text-white font-semibold mb-3">
              Explore
            </h3>

            <div className="flex flex-col gap-2">

              <Link
                to="/"
                className="text-gray-500 hover:text-pink-400 transition"
              >
                Home
              </Link>

              <Link
                to="/confession"
                className="text-gray-500 hover:text-pink-400 transition"
              >
                Confessions
              </Link>

              <Link
                to="/support"
                className="text-gray-500 hover:text-pink-400 transition"
              >
                Support
              </Link>

            </div>
          </div>


          <div>
            <h3 className="text-white font-semibold mb-3">
              Account
            </h3>

            <div className="flex flex-col gap-2">

              <Link
                to="/login"
                className="text-gray-500 hover:text-pink-400 transition"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="text-gray-500 hover:text-pink-400 transition"
              >
                Sign Up
              </Link>

            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6">

          <p className="text-gray-600 text-sm text-center">
            © 2026 HeartSpace. Built with care. ❤️
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;