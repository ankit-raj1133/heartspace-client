import React from "react";

function Features() {
  const features = [
    {
      icon: "🔒",
      title: "Stay Anonymous",
      description:
        "Share your thoughts without revealing your identity."
    },
    {
      icon: "💬",
      title: "Share Your Story",
      description:
        "Express the feelings and thoughts you've been keeping inside."
    },
    {
      icon: "❤️",
      title: "Find Support",
      description:
        "Connect with people who understand what you're going through."
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            A Space Made For You
          </h2>

          <p className="mt-4 text-gray-400">
            You don't have to keep everything inside.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/40 hover:bg-white/10 transition duration-300"
            >
              <div className="text-4xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;