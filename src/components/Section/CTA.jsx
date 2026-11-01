import React from "react";

function CTA() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-5xl mx-auto text-center rounded-3xl border border-pink-500/20 bg-pink-500/5 p-10 md:p-16">

        <div className="text-5xl mb-5">
          💗
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Sometimes, sharing is the first step.
        </h2>

        <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
          Whatever you're feeling, you don't have to face it alone.
          Share anonymously and let your heart breathe.
        </p>

        <button className="mt-8 px-8 py-4 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-semibold transition duration-300">
          Share Your Story
        </button>

      </div>
    </section>
  );
}

export default CTA;