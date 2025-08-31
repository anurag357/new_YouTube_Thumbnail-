import { NextResponse } from "next/server";
import { openai } from "../../../lib/openai";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    const answers = formData.get("answers");

    if (!answers) {
      return NextResponse.json({ error: "Missing answers" }, { status: 400 });
    }

    let buffer = null;
    let filename = null;

    if (file) {
      const arrayBuffer = await file.arrayBuffer();
      buffer = Buffer.from(arrayBuffer);
      filename = file.name || "upload.png";
    }

    const reasoning = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a creative thumbnail designer..." },
        { role: "user", content: `User answered: ${answers}. Generate a short thumbnail idea.` },
      ],
    });

    const rewrittenPrompt = reasoning.choices[0].message.content;

    let imageGen;

    if (buffer) {
      // OpenAI Images Edit expects a proper File object
      const tempFilePath = path.join("/tmp", filename);
      fs.writeFileSync(tempFilePath, buffer);

      imageGen = await openai.images.edit({
        model: "gpt-image-1",
        prompt: `Add a creative thumbnail background based on: ${rewrittenPrompt}`,
        size: "1024x1024",
        image: fs.createReadStream(tempFilePath), // ✅ single file stream
      });
    } else {
      imageGen = await openai.images.generate({
        model: "gpt-image-1",
        prompt: rewrittenPrompt,
        size: "1024x1024",
        response_format: "b64_json",
      });
    }

    const base64Image = imageGen.data[0].b64_json;

    const imageUrl = `data:image/png;base64,${base64Image}`;
    

    return NextResponse.json({
      success: true,
      prompt: rewrittenPrompt,
      thumbnail: imageUrl,
    });
  } catch (err) {
    console.error("Thumbnail generation error:", err.response?.data || err.message || err);
    return NextResponse.json(
      { success: false, error: "Failed to generate thumbnail", details: err.response?.data || err.message },
      { status: 500 }
    );
  }
}
