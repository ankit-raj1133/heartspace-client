import React from "react";
import { Link } from "react-router-dom";

function Support() {
  const supportOptions = [
    {
      icon: "💬",
      title: "Talk to the Community",
      description:
        "Share your experience and connect with people who may understand what you're going through.",
      link: "/confession",
      button: "Share Your Story",
    },
    {
      icon: "❤️",
      title: "Give Support",
      description:
        "Read someone's story and respond with kindness, understanding, and encouragement.",
      link: "/",
      button: "Explore Stories",
    },
    {
      icon: "🧠",
      title: "Take a Moment",
      description:
        "Sometimes taking a short break, breathing slowly, and giving yourself time can help.",
      link: "/",
      button: "Take a Breath",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] px-6 py-12">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">

          <div className="text-5xl mb-4">
            🤝
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white">
            You're Not Alone
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Everyone goes through difficult moments. HeartSpace is a place
            where people can share, listen, and support each other.
          </p>

        </div>

        {/* Support Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {supportOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-pink-500/40 hover:bg-white/10 transition duration-300"
            >

              <div className="text-4xl mb-5">
                {option.icon}
              </div>

              <h2 className="text-xl font-semibold text-white mb-3">
                {option.title}
              </h2>

              <p className="text-gray-400 leading-relaxed mb-6">
                {option.description}
              </p>

              <Link
                to={option.link}
                className="inline-block px-5 py-3 rounded-lg bg-pink-600 hover:bg-pink-700 text-white font-medium transition"
              >
                {option.button}
              </Link>

            </div>
          ))}

        </div>

        {/* Important Safety Section */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">

          <div className="flex gap-4 items-start">

            <div className="text-3xl">
              🛡️
            </div>

            <div>

              <h2 className="text-xl font-semibold text-white mb-2">
                A Safe Space Matters
              </h2>

              <p className="text-gray-400 leading-relaxed">
                Please treat other people's stories with respect.
                Don't share someone's private information, pressure them,
                or make them feel judged. If a situation feels unsafe or
                serious, reaching out to a trusted adult or qualified
                professional can be an important step.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Support;