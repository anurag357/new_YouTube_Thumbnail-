"use client";
import { useState } from "react";

export default function QuestionnaireForm({ onSubmit }) {
  const [segment, setSegment] = useState("");
  const [goal, setGoal] = useState("");
  const [audience, setAudience] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const answers = `Segment: ${segment}, Goal: ${goal}, Audience: ${audience}`;
    onSubmit(answers);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg">
      <div>
        <label className="block font-medium">Which segment are you in?</label>
        <input
          className="border p-2 w-full"
          value={segment}
          onChange={(e) => setSegment(e.target.value)}
          placeholder="e.g. Tech, Lifestyle, Gaming"
        />
      </div>

      <div>
        <label className="block font-medium">What’s your video goal?</label>
        <input
          className="border p-2 w-full"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="e.g. Gain subscribers, Educate, Entertain"
        />
      </div>

      <div>
        <label className="block font-medium">Who’s your audience?</label>
        <input
          className="border p-2 w-full"
          value={audience}
          onChange={(e) => setAudience(e.target.value)}
          placeholder="e.g. Students, Professionals, Gamers"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
