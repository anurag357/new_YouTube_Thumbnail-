"use client";
import { useState, useEffect } from "react";

export default function QuestionnaireForm({ onSubmit }) {
  const [segment, setSegment] = useState("");
  const [goal, setGoal] = useState("");
  const [audience, setAudience] = useState("");
  const [showPopup, setShowPopup] = useState(false);


  // Optional: live updates
  useEffect(() => {
    const answers = `Segment: ${segment}, Goal: ${goal}, Audience: ${audience}`;
    onSubmit(answers);
  }, [segment, goal, audience, onSubmit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const answers = `Segment: ${segment}, Goal: ${goal}, Audience: ${audience}`;
    onSubmit(answers);

    // Clear all fields
    setSegment("");
    setGoal("");
    setAudience("");

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 10000);
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label className="block text-gray-300 font-semibold mb-2 text-lg">
          Which segment are you in?
        </label>
        <input
          className="bg-gray-800/80 text-gray-200 placeholder-gray-600 p-4 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-200"
          value={segment}
          onChange={(e) => setSegment(e.target.value)}
          placeholder="e.g. Tech, Lifestyle, Gaming"
        />
      </div>

      <div>
        <label className="block text-gray-300 font-semibold mb-2 text-lg">
          What’s your video goal?
        </label>
        <input
          className="bg-gray-800/80 text-gray-200 placeholder-gray-600 p-4 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-200"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="e.g. Gain subscribers, Educate, Entertain"
        />
      </div>

      <div>
        <label className="block text-gray-300 font-semibold mb-2 text-lg">
          Who’s your audience?
        </label>
        <input
          className="bg-gray-800/80 text-gray-200 placeholder-gray-600 p-4 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-200"
          value={audience}
          onChange={(e) => setAudience(e.target.value)}
          placeholder="e.g. Students, Professionals, Gamers"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        Submit
      </button>
    </form>
      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-900 text-gray-100 p-6 rounded-2xl shadow-xl max-w-sm text-center relative">
            {/* Cross Icon */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl"
            >
              &times;
            </button>

            <h3 className="text-xl font-bold mb-4">Form Submitted!</h3>
              <p>Please click on the <span className="font-bold">Generate Thumbnail</span> button to continue.</p>
          </div>
        </div>
      )}
    </>
  );
}