import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="min-h-screen bg-[#0f172a] px-6 py-12">

      <div className="max-w-4xl mx-auto">

        {/* Profile Header */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">

          <div className="flex flex-col md:flex-row items-center gap-6">

            {/* Avatar */}
            <div className="w-24 h-24 rounded-full bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-4xl">
              👤
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-white">
                Anonymous User
              </h1>

              <p className="text-gray-400 mt-2">
                Your safe space on HeartSpace
              </p>
            </div>

          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6">

          <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
            <h2 className="text-2xl font-bold text-white">
              0
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Stories
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
            <h2 className="text-2xl font-bold text-white">
              0
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Supports
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
            <h2 className="text-2xl font-bold text-white">
              0
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Replies
            </p>
          </div>

        </div>

        {/* Actions */}
        <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6">

          <h2 className="text-xl font-semibold text-white mb-5">
            Quick Actions
          </h2>

          <div className="flex flex-col sm:flex-row gap-4">

            <Link
              to="/confession"
              className="flex-1 text-center px-5 py-3 rounded-lg bg-pink-600 hover:bg-pink-700 text-white font-semibold transition"
            >
              Share a Story
            </Link>

            <Link
              to="/support"
              className="flex-1 text-center px-5 py-3 rounded-lg border border-pink-500 text-white hover:bg-pink-500/10 transition"
            >
              Find Support
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;