# 🎬 YouTube Thumbnail Generator (Next.js)

An AI-powered **YouTube Thumbnail Generator** built with **Next.js**, where users can upload an image, answer a short questionnaire, and generate engaging thumbnails tailored for their video goals.  

---  

## 🌐 Live Demo
- - 👉 [YouTube Thumbnail Generator](https://new-you-tube-thumbnail.vercel.app/)

## ✨ Features
- 📤 Upload your own image as the base thumbnail  
- 📝 Answer a few simple questions to personalize your thumbnail  
- 🖼️ AI-powered thumbnail generation  
- ⬇️ Download thumbnails with a single click (download icon overlay)  
- ❌ Closeable popup with a wait message during generation  
- 📱 Fully responsive UI  

---

## 🛠️ Tech Stack
- **Frontend**: [Next.js](https://nextjs.org/) (React + App Router)  
- **Styling**: Tailwind CSS  
- **AI Image Generation**: OpenAI / Google AI Studio APIs  
- **Hosting**: Vercel (recommended)  

---

## Getting Started


### 1️⃣ Clone the repo
```bash
git clone https://github.com/anurag357/new_YouTube_Thumbnail-.git
cd new_YouTube_Thumbnail

```
##  Install Dependencies
- npm install
# or
- yarn install
# or
- pnpm install
# or
- bun install


# Setup environment variables
 - Create a .env.local file and add your API key:
 - OPENAI_API_KEY=your_api_key_here 

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## 📖 Usage

- [x] Upload an image you want to use in your thumbnail

- [x] Fill out the short questionnaire

- [x] Click Generate Thumbnail

- [x] Wait for the AI to generate your thumbnail (popup will show "Please wait...")

- [x] Download your thumbnail using the download arrow icon

## 🧾 Example Questions (Questionnaire)

- When generating your thumbnail, you’ll be asked:

- Which segment are you in?
(e.g., Tech, Gaming, Education, Lifestyle, Fitness, Finance, Motivation)

- What’s your video goal?
- - (e.g., Get clicks with curiosity, Explain a concept clearly, Sell a product/course, Build authority, Go viral)

- Who’s your audience?
- - (e.g., Students, Working professionals, Gamers, Entrepreneurs, Beginners in tech, General YouTube viewers)


## ✅ To-Do / Future Improvements

- 🔥 Add multiple thumbnail style options (bold text, minimal, modern)

- 🌎 Support multilingual prompts

- 🎨 Allow text overlays with custom fonts/colors

- ☁️ Deploy with Vercel + Cloudflare CDN

## 📷 Screenshots
- [Generated Screenshot](public/screenshots/thumbnail1.png)
- [Generated Screenshot](public/screenshots/thumbnail2.png)
- [Generated Screenshot](public/screenshots/thumbnail3.png)
- [Generated Screenshot](public/screenshots/thumbnail4.png)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
