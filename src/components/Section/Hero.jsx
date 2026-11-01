import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">

        <div className="text-6xl mb-6">
          ❤️
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          Your Feelings
          <span className="text-pink-500"> Matter.</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          A safe and anonymous space where you can share what's
          in your heart, connect with others and find emotional support.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          <Link
  to="/confession"
  className="px-8 py-4 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-semibold transition duration-300 shadow-lg shadow-pink-600/20"
>
  Share Your Confession
</Link>

<Link
  to="/support"
  className="px-8 py-4 rounded-xl border border-pink-500 text-white hover:bg-pink-500/10 font-semibold transition duration-300"
>
  Find Support
</Link>

        </div>

        <p className="mt-8 text-sm text-gray-500">
          🔒 Anonymous • 🤝 Supportive • ❤️ Judgment-free
        </p>

      </div>
    </section>
  );
}

export default Hero;