"use client";
import { useState } from "react";
import QuestionnaireForm from "./components/QuestionnaireForm";
import ThumbnailPreview from "./components/ThumbnailPreview";

export default function HomePage() {
  const [file, setFile] = useState(null);
  const [answers, setAnswers] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [prompt, setPrompt] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!file || !answers) return alert("Upload a photo & fill questionnaire!");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("answers", answers);

    setLoading(true);
    try {
      const res = await fetch("/api/generate-thumbnail", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setThumbnail(data.thumbnail);
      setPrompt(data.prompt);
    } catch (err) {
      console.error(err);
      alert("Failed to generate thumbnail");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">🎬 YouTube Thumbnail Generator</h1>

      <div className="mb-4">
        <label className="block font-medium">Upload your photo</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="mt-2"
        />
      </div>

      <QuestionnaireForm onSubmit={(a) => setAnswers(a)} />

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate Thumbnail"}
      </button>

      {thumbnail && prompt && (
        <ThumbnailPreview imageUrl={thumbnail} prompt={prompt} />
      )}
    </main>
  );
}
