// app/api/auth/signup/route.js
import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/mongodb";
import User from "../../../models/User";
import { hashPassword } from "../../../../lib/auth";




export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
    }

    await connectDB();
    const existing = await User.findOne({ email });
    if (existing) {
      return NextResponse.json({ error: "User already exists." }, { status: 400 });
    }

    const hashed = await hashPassword(password);
    await User.create({ name, email, password: hashed, provider: "credentials" });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Signup error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
