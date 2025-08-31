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
  const [showPopup, setShowPopup] = useState(false);

  const handleGenerate = async () => {
    if (!file || !answers) return alert("Upload a photo & fill questionnaire!");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("answers", answers);

    setLoading(true);
    setShowPopup(true);
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
      setShowPopup(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-800 text-gray-100 flex items-center justify-center p-8 lg:p-16">
      <div className="flex flex-col lg:flex-row gap-12 w-full max-w-7xl">
        {/* Left Section: Questionnaire & Submit */}
        <div className="flex-1 bg-gray-900/50 backdrop-blur-lg p-10 rounded-3xl border border-gray-700/50 shadow-2xl">
          <h1 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Anu.ai thumbnails
          </h1>
          <p className="text-lg text-gray-400 mb-10">
            Create stunning YouTube thumbnails in seconds. Just tell us about
            your video and upload an image.
          </p>
          <QuestionnaireForm onSubmit={(a) => setAnswers(a)} />
          <div className="mt-12">
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? "Generating..." : "Generate Thumbnail"}
            </button>
          </div>
        </div>

        {/* Right Section: Upload & Preview */}
        <div className="flex-1 bg-gray-900/50 backdrop-blur-lg p-10 rounded-3xl border border-gray-700/50 shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 text-gray-200">
            Upload your photo
          </h2>
          <div className="flex items-center space-x-6 mb-8">
            <label className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full cursor-pointer transition-colors duration-200">
              Choose file
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="hidden"
              />
            </label>
            <span className="text-gray-400 text-lg font-medium">
              {file ? file.name : "No file chosen"}
            </span>
          </div>
          <p className="text-gray-500 mb-12 flex items-center text-lg">
            <span role="img" aria-label="Upload icon" className="mr-2 text-2xl">
              👆
            </span>
            Upload a photo & fill out the questionnaire to see your thumbnail
            preview.
          </p>

          {thumbnail && prompt && (
            <div className="mt-8">
              <ThumbnailPreview imageUrl={thumbnail} prompt={prompt} loading={loading} />
            </div>
          )}
        </div>
      </div>
      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-gray-900 text-gray-100 p-6 rounded-2xl shadow-xl max-w-sm text-center">
            {/* Cross button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-200 text-xl font-bold"
            >
              ✕
            </button>

            <h3 className="text-xl font-bold mb-4">Please wait...</h3>
            <p>It may take 30 - 45 seconds to generate your thumbnail.</p>
          </div>
        </div>
      )}
    </main>
  );
}