"use client";

export default function ThumbnailPreview({ imageUrl, prompt }) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "thumbnail.png";
    link.click();
  };

  return (
    <div className="mt-6 p-4 border rounded-lg w-full max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-2 text-center md:text-left">
        Generated Thumbnail
      </h2>
      <div className="relative w-full">
        <img
          src={imageUrl}
          alt="Generated Thumbnail"
          className="rounded-lg w-full h-auto object-cover"
        />
        {/* Download icon */}
        <button
          onClick={handleDownload}
          className="absolute top-2 right-2 bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 shadow-md"
          title="Download Image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </button>
      </div>
      {/* <p className="mt-2 text-gray-600 text-sm text-center md:text-left">
        Prompt used: {prompt}
      </p> */}
    </div>
  );
}
