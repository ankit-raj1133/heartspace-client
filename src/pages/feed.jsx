import React, { useState } from "react";

function Feed() {
  const [likedStories, setLikedStories] = useState([]);
  const [comments, setComments] = useState({});
  const [commentText, setCommentText] = useState({});
  const [reportingStory, setReportingStory] = useState(null);
  const [reportReason, setReportReason] = useState("");

  const stories = [
    {
      id: 1,
      category: "Love",
      icon: "💗",
      categoryColor: "text-pink-400",
      text:
        "Sometimes I wish I could tell someone how I really feel, but I don't know where to start.",
      likes: 12,
    },

    {
      id: 2,
      category: "Career",
      icon: "🌱",
      categoryColor: "text-blue-400",
      text:
        "I feel confused about my future sometimes. Everyone seems to know what they want except me.",
      likes: 8,
    },

    {
      id: 3,
      category: "Friendship",
      icon: "🤝",
      categoryColor: "text-green-400",
      text:
        "I miss an old friend and sometimes wonder if I should reach out again.",
      likes: 15,
    },
  ];

  // Like
  const handleLike = (id) => {
    if (likedStories.includes(id)) {
      setLikedStories(
        likedStories.filter((storyId) => storyId !== id)
      );
    } else {
      setLikedStories([...likedStories, id]);
    }
  };

  // Add Comment
  const handleComment = (storyId) => {
  const text = commentText[storyId]?.trim();

  if (!text) {
    return;
  }

  setComments((previousComments) => ({
    ...previousComments,
    [storyId]: [
      ...(previousComments[storyId] || []),
      text,
    ],
  }));

  setCommentText((previousText) => ({
    ...previousText,
    [storyId]: "",
  }));
};

  // Report
  const handleReport = () => {
    if (!reportReason) {
      return;
    }

    alert(
      "Thank you. Your report has been submitted for review."
    );

    setReportingStory(null);
    setReportReason("");
  };

  return (
    <section className="mt-16">

      {/* Heading */}
      <div className="text-center mb-8">

        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Community Stories
        </h2>

        <p className="text-gray-400 mt-2">
          You are not alone in what you're feeling.
        </p>

      </div>


      {/* Stories */}
      <div className="space-y-6">

        {stories.map((story) => {

          const isLiked = likedStories.includes(story.id);

          const storyComments = comments[story.id] || [];

          return (
            <div
              key={story.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >

              {/* Category + Anonymous */}
              <div className="flex justify-between items-center mb-4">

                <span
                  className={`${story.categoryColor} text-sm font-medium`}
                >
                  {story.icon} {story.category}
                </span>

                <span className="text-gray-600 text-sm">
                  Anonymous
                </span>

              </div>


              {/* Story */}
              <p className="text-gray-300 leading-relaxed">
                {story.text}
              </p>


              {/* Actions */}
              <div className="flex items-center gap-6 mt-5">

                {/* Like */}
                <button
                  onClick={() => handleLike(story.id)}
                  className={`text-sm transition ${
                    isLiked
                      ? "text-pink-500"
                      : "text-gray-400 hover:text-pink-400"
                  }`}
                >
                  ❤️ {story.likes + (isLiked ? 1 : 0)}
                </button>


                {/* Comment Count */}
                <span className="text-gray-400 text-sm">
                  💬 {storyComments.length}
                </span>


                {/* Report */}
                <button
                  onClick={() => setReportingStory(story.id)}
                  className="text-gray-400 hover:text-red-400 text-sm transition"
                >
                  🚩 Report
                </button>

              </div>


              {/* Comments */}
              <div className="mt-6 pt-5 border-t border-white/10">

                <p className="text-gray-400 text-sm mb-3">
                  💬 Supportive Replies
                </p>


                {/* Existing Comments */}
                {storyComments.length > 0 && (
                  <div className="space-y-2 mb-4">

                    {storyComments.map((comment, index) => (
                      <div
                        key={index}
                        className="bg-[#111827] rounded-lg px-4 py-3"
                      >
                        <p className="text-gray-300 text-sm">
                          <span className="text-pink-400 font-medium">
                            Anonymous:
                          </span>{" "}
                          {comment}
                        </p>
                      </div>
                    ))}

                  </div>
                )}


                {/* Comment Input */}
                <div className="flex flex-col sm:flex-row gap-3">

                  <input
                    type="text"
                    value={commentText[story.id] || ""}
                    onChange={(e) =>
                      setCommentText({
                        ...commentText,
                        [story.id]: e.target.value,
                      })
                    }
                    placeholder="Write something supportive..."
                    className="flex-1 px-4 py-3 rounded-lg bg-[#111827] border border-white/10 text-white placeholder-gray-600 outline-none focus:border-pink-500 transition"
                  />

                  <button
                    onClick={() => handleComment(story.id)}
                    className="px-5 py-3 rounded-lg bg-pink-600 hover:bg-pink-700 text-white font-medium transition"
                  >
                    Send
                  </button>

                </div>

              </div>

            </div>
          );
        })}

      </div>


      {/* Safety Message */}
      <div className="mt-8 p-5 rounded-xl bg-white/5 border border-white/10">

        <p className="text-gray-400 text-sm leading-relaxed">
          🛡️ Please be respectful when responding to someone's story.
          Don't share private information or pressure anyone. If a story
          appears unsafe or inappropriate, use the Report option.
        </p>

      </div>


      {/* Report Modal */}
      {reportingStory && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center px-6 z-50">

          <div className="w-full max-w-md bg-[#111827] border border-white/10 rounded-2xl p-6">

            <h2 className="text-xl font-semibold text-white">
              Report this story
            </h2>

            <p className="text-gray-400 text-sm mt-2">
              Tell us why you think this story should be reviewed.
            </p>


            {/* Reasons */}
            <div className="mt-5 space-y-3">

              <label className="flex items-center gap-3 text-gray-300">

                <input
                  type="radio"
                  name="report"
                  value="Harassment"
                  checked={reportReason === "Harassment"}
                  onChange={(e) =>
                    setReportReason(e.target.value)
                  }
                />

                Harassment or bullying

              </label>


              <label className="flex items-center gap-3 text-gray-300">

                <input
                  type="radio"
                  name="report"
                  value="Spam"
                  checked={reportReason === "Spam"}
                  onChange={(e) =>
                    setReportReason(e.target.value)
                  }
                />

                Spam or misleading content

              </label>


              <label className="flex items-center gap-3 text-gray-300">

                <input
                  type="radio"
                  name="report"
                  value="Unsafe"
                  checked={reportReason === "Unsafe"}
                  onChange={(e) =>
                    setReportReason(e.target.value)
                  }
                />

                Unsafe or inappropriate content

              </label>

            </div>


            {/* Buttons */}
            <div className="flex gap-3 mt-7">

              <button
                onClick={() => {
                  setReportingStory(null);
                  setReportReason("");
                }}
                className="flex-1 py-3 rounded-lg border border-white/10 text-gray-300 hover:bg-white/5 transition"
              >
                Cancel
              </button>

              <button
                onClick={handleReport}
                className="flex-1 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium transition"
              >
                Submit Report
              </button>

            </div>

          </div>

        </div>
      )}

    </section>
  );
}

export default Feed;