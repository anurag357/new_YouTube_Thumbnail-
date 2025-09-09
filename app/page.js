"use client";
import { useRouter } from "next/navigation";
import FAQSection from "./components/FAQSection"

export default function LandingPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-gray-950 to-gray-900 text-gray-100">
      {/* Header */}
      <header className="w-full py-4 px-6 md:px-8 flex flex-col md:flex-row justify-between items-center border-b border-gray-800 bg-gray-950/80 backdrop-blur-md sticky top-0 z-50">
        <h1
          onClick={() => router.push("/")}
          className="text-2xl md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 cursor-pointer mb-2 md:mb-0"
        >
          🎬 AI Thumbnail Generator
        </h1>
        <nav className="hidden md:flex space-x-6 lg:space-x-8 text-gray-300 font-medium flex-wrap">
          <a href="#design" className="hover:text-white transition">Design</a>
          <a href="#product" className="hover:text-white transition">Product</a>
          <a href="#plans" className="hover:text-white transition">Plans</a>
          <a href="#business" className="hover:text-white transition">Business</a>
          <a href="#education" className="hover:text-white transition">Education</a>
          <a href="#help" className="hover:text-white transition">Help</a>
        </nav>
        <div className="flex items-center space-x-3 md:space-x-4 mt-2 md:mt-0">
          <button
            className="hidden md:inline text-gray-300 hover:text-white transition"
            onClick={() => router.push("/login")}
          >
            Log in
          </button>
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 md:py-2 md:px-5 rounded-full shadow-md"
            onClick={() => router.push("/signup")}
          >
            Sign up
          </button>
        </div>
      </header>

      {/* Banner Section */}
      <section
        className="relative flex flex-col items-center justify-center text-center py-20 md:py-24 px-4 md:px-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg-thumbnail.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Where Heart Meets Art
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 md:mb-10">
            AI makes it easy to create and share professional YouTube thumbnails.
          </p>
          <button
            onClick={() => router.push("/generator")}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white font-bold py-3 px-6 sm:py-4 sm:px-10 rounded-full shadow-xl transition-transform transform hover:scale-105"
          >
            Sign up and start designing
          </button>
        </div>
      </section>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-4 md:px-6 mt-12 md:mt-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          🎬 AI YouTube Thumbnail Generator
        </h1>
        <p className="text-base sm:text-lg md:text-lg text-gray-400 max-w-2xl mb-6 md:mb-10">
          Create stunning, AI-powered YouTube thumbnails in seconds.
          Upload your image, answer a few quick questions, and get a ready-to-use thumbnail 🚀
        </p>
        <button
          onClick={() => router.push("/generator")}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Start Generating
        </button>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl w-full mx-auto px-4 md:px-6"
      >
        <div className="bg-gray-900/50 p-5 sm:p-6 rounded-2xl shadow-xl border border-gray-700/50">
          <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">🔍 Intuitive Text Editing</h3>
          <p className="text-gray-400 text-sm sm:text-base">
            Enhance images by simply describing changes in plain language. The AI interprets your requests with precision.
          </p>
        </div>

        <div className="bg-gray-900/50 p-5 sm:p-6 rounded-2xl shadow-xl border border-gray-700/50">
          <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">👤 Identity & Detail Retention</h3>
          <p className="text-gray-400 text-sm sm:text-base">
            Ensure consistent features and facial details across edits, perfect for preserving unique looks.
          </p>
        </div>

        <div className="bg-gray-900/50 p-5 sm:p-6 rounded-2xl shadow-xl border border-gray-700/50">
          <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">🌄 Natural Scene Blending</h3>
          <p className="text-gray-400 text-sm sm:text-base">
            Merge edits seamlessly with original surroundings, maintaining realism and context.
          </p>
        </div>

        <div className="bg-gray-900/50 p-5 sm:p-6 rounded-2xl shadow-xl border border-gray-700/50">
          <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">⚡ Fast & Accurate Editing</h3>
          <p className="text-gray-400 text-sm sm:text-base">
            Achieve professional results in one go, solving common editing challenges with ease.
          </p>
        </div>

        <div className="bg-gray-900/50 p-5 sm:p-6 rounded-2xl shadow-xl border border-gray-700/50">
          <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">📂 Multi-Image Support</h3>
          <p className="text-gray-400 text-sm sm:text-base">
            Edit several images together, perfect for complex workflows and batch enhancements.
          </p>
        </div>

        <div className="bg-gray-900/50 p-5 sm:p-6 rounded-2xl shadow-xl border border-gray-700/50">
          <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">📣 AI-Driven Content Creation</h3>
          <p className="text-gray-400 text-sm sm:text-base">
            Generate eye-catching visuals for social media, campaigns, and influencer projects in seconds.
          </p>
        </div>
      </section>


      {/* Demo Preview Section */}
      <section className="mt-16 md:mt-24 max-w-7xl w-full mx-auto px-4 md:px-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-center">
          See AI in Action – Explore Stunning Previews ✨
        </h2>

        {/* First row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8">
          <div className="bg-gray-900/40 border border-gray-700/50 rounded-2xl p-4 sm:p-6 shadow-xl">
            <div className="bg-gray-800 rounded-xl overflow-hidden flex items-center justify-center h-72 group">
              <img src="/images/MountainLandscape.webp" alt="Mountain Preview" className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110" />
            </div>
            <p className="mt-4 text-gray-400 text-center text-sm sm:text-base">
              Watch how AI enhances natural landscapes into eye-catching thumbnails.
            </p>
          </div>

          <div className="bg-gray-900/40 border border-gray-700/50 rounded-2xl p-4 sm:p-6 shadow-xl">
            <div className="bg-gray-800 rounded-xl overflow-hidden flex items-center justify-center h-72 group">
              <img src="/images/GardenLandscape.webp" alt="Garden Preview" className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110" />
            </div>
            <p className="mt-4 text-gray-400 text-center text-sm sm:text-base">
              See serene garden scenes transformed with vibrant details and depth.
            </p>
          </div>
        </div>

        {/* Second row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-gray-900/40 border border-gray-700/50 rounded-2xl p-4 sm:p-6 shadow-xl">
            <div className="bg-gray-800 rounded-xl overflow-hidden flex items-center justify-center h-72 group">
              <img src="/images/Cityscape.jpg" alt="City Preview" className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110" />
            </div>
            <p className="mt-4 text-gray-400 text-center text-sm sm:text-base">
              Explore dynamic cityscapes rendered with sharpness and striking colors.
            </p>
          </div>

          <div className="bg-gray-900/40 border border-gray-700/50 rounded-2xl p-4 sm:p-6 shadow-xl">
            <div className="bg-gray-800 rounded-xl overflow-hidden flex items-center justify-center h-72 group">
              <img src="/images/SpaceNebula.jpg" alt="Space Preview" className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110" />
            </div>
            <p className="mt-4 text-gray-400 text-center text-sm sm:text-base">
              Experience otherworldly visuals crafted with attention to lighting and texture.
            </p>
          </div>
        </div>
      </section>




      {/* Call to Action */}
      <section className="mt-10 md:mt-16 text-center px-4 md:px-6">
        <button
          onClick={() => router.push("/generator")}
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white font-bold py-3 px-6 sm:py-4 sm:px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          🚀 Try Generate Thumbnail
        </button>
      </section>

      {/* User Reviews */}
      <section className="mt-16 md:mt-24 max-w-6xl w-full mx-auto px-4 md:px-6 text-center">
        <div className="mb-8">
          <p className="text-yellow-500 font-semibold uppercase mb-2">User Reviews</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            What creators are saying
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {/* Review 1 */}
          <div className="bg-gray-900/40 border border-gray-700/50 rounded-2xl p-6 shadow-lg text-left">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">
                A
              </div>
              <div className="ml-4">
                <p className="font-semibold text-white">AIArtistPro</p>
                <p className="text-gray-400 text-sm">Digital Creator</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              "This editor completely changed my workflow. The character consistency is incredible!"
            </p>
          </div>

          {/* Review 2 */}
          <div className="bg-gray-900/40 border border-yellow-600/50 rounded-2xl p-6 shadow-lg text-left">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-yellow-600 flex items-center justify-center text-white font-bold">
                C
              </div>
              <div className="ml-4">
                <p className="font-semibold text-white">ContentCreator</p>
                <p className="text-gray-400 text-sm">UGC Specialist</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              "Creating consistent AI influencers has never been easier. Perfect face details!"
            </p>
          </div>

          {/* Review 3 */}
          <div className="bg-gray-900/40 border border-red-500/50 rounded-2xl p-6 shadow-lg text-left">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">
                P
              </div>
              <div className="ml-4">
                <p className="font-semibold text-white">PhotoEditor</p>
                <p className="text-gray-400 text-sm">Professional Editor</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              "One-shot editing is solved with this tool. Scene blending is natural and realistic!"
            </p>
          </div>
        </div>
      </section>
      {/* FAQSection components */}

      <div>
        <FAQSection />
      </div>


      {/* Footer */}
      <footer className="mt-12 md:mt-24 text-gray-500 text-sm text-center py-6 md:py-8 border-t border-gray-800 px-4 md:px-6">
        <p>
          © {new Date().getFullYear()} AI Thumbnail Generator. Built with ❤️ using Next.js
        </p>
      </footer>
    </main>
  );
}
