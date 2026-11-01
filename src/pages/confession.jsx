import React, { useState } from "react";

function Confession() {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Love");
  const [liked, setLiked] = useState(false);

  const maxLength = 1000;

  return (
    <div className="min-h-screen bg-[#0f172a] px-6 py-12">

      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">

          <div className="text-5xl mb-4">
            💭
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Share Your Story
          </h1>

          <p className="text-gray-400 mt-3">
            Sometimes, expressing your feelings is the first step.
          </p>

        </div>

        {/* Form Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">

        {/* Community Stories */}

<div className="mt-16">

  <div className="text-center mb-8">

    <h2 className="text-3xl font-bold text-white">
      Community Stories
    </h2>

    <p className="text-gray-400 mt-2">
      You are not the only one going through difficult moments.
    </p>

  </div>

  <div className="space-y-5">

    {/* Story 1 */}
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">

      <div className="flex justify-between items-center mb-4">

        <span className="text-pink-400 text-sm font-medium">
          💗 Love
        </span>

        <span className="text-gray-600 text-sm">
          Anonymous
        </span>

      </div>

      <p className="text-gray-300 leading-relaxed">
        "Sometimes I wish I could tell someone how I really feel,
        but I don't know where to start."
      </p>

      <div className="flex gap-5 mt-5 text-sm">

      <button
  onClick={() => setLiked(!liked)}
  className={`transition ${
    liked
      ? "text-pink-500"
      : "text-gray-400 hover:text-pink-400"
  }`}
>
  ❤️ {liked ? 13 : 12}
</button>

        <button className="text-gray-400 hover:text-pink-400 transition">
          💬 4
        </button>

        <button className="text-gray-400 hover:text-red-400 transition">
          🚩 Report
        </button>

        <div className="mt-5 pt-5 border-t border-white/10">

  <p className="text-gray-500 text-sm mb-3">
    💬 Comments
  </p>

  <div className="flex gap-3">

    <input
      type="text"
      placeholder="Write something supportive..."
      className="flex-1 px-4 py-2 rounded-lg bg-[#111827] border border-white/10 text-white placeholder-gray-600 outline-none focus:border-pink-500"
    />

    <button className="px-4 py-2 rounded-lg bg-pink-600 hover:bg-pink-700 text-white transition">
      Send
    </button>

  </div>

</div>

      </div>

    </div>


    {/* Story 2 */}
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">

      <div className="flex justify-between items-center mb-4">

        <span className="text-blue-400 text-sm font-medium">
          🌱 Career
        </span>

        <span className="text-gray-600 text-sm">
          Anonymous
        </span>

      </div>

      <p className="text-gray-300 leading-relaxed">
        "I feel lost about my future sometimes. Everyone seems
        to know what they want except me."
      </p>

      <div className="flex gap-5 mt-5 text-sm">

        <button className="text-gray-400 hover:text-pink-400 transition">
          ❤️ 8
        </button>

        <button className="text-gray-400 hover:text-pink-400 transition">
          💬 2
        </button>

        <button className="text-gray-400 hover:text-red-400 transition">
          🚩 Report
        </button>

      </div>

    </div>

  </div>

</div>

          {/* Category */}
          <div className="mb-6">

            <label className="block text-gray-300 mb-2">
              What would you like to talk about?
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[#111827] border border-white/10 text-white outline-none focus:border-pink-500 transition"
            >
              <option>Love</option>
              <option>Breakup</option>
              <option>Loneliness</option>
              <option>Family</option>
              <option>Friendship</option>
              <option>Career</option>
              <option>Confession</option>
              <option>Success Story</option>
              <option>Other</option>
            </select>

          </div>

          {/* Confession */}
          <div className="mb-3">

            <label className="block text-gray-300 mb-2">
              Your story
            </label>

            <textarea
              value={text}
              onChange={(e) => {
                if (e.target.value.length <= maxLength) {
                  setText(e.target.value);
                }
              }}
              placeholder="Write whatever is on your mind..."
              rows="9"
              className="w-full px-4 py-3 rounded-lg bg-[#111827] border border-white/10 text-white placeholder-gray-500 outline-none focus:border-pink-500 transition resize-none"
            />

          </div>

          {/* Character Count */}
          <div className="text-right text-sm text-gray-500 mb-6">
            {text.length}/{maxLength}
          </div>

          {/* Anonymous Info */}
          <div className="flex gap-3 items-start p-4 rounded-xl bg-pink-500/5 border border-pink-500/10 mb-6">

            <span className="text-xl">
              🔒
            </span>

            <div>
              <p className="text-gray-200 font-medium">
                Your story can be shared anonymously.
              </p>

              <p className="text-gray-500 text-sm mt-1">
                Don't share passwords, phone numbers, addresses,
                or other private information.
              </p>
            </div>

          </div>

          {/* Post Button */}
          <button
            type="button"
            className="w-full py-3 rounded-lg bg-pink-600 hover:bg-pink-700 text-white font-semibold transition"
          >
            Share Anonymously
          </button>

        </div>

        {/* Safety Message */}
        <p className="text-center text-gray-500 text-sm mt-6">
          ❤️ Be respectful. This is a judgment-free space.
        </p>

      </div>

    </div>
  );
}

export default Confession;