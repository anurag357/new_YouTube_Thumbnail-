// models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true, required: true, index: true },
    password: { type: String }, // hashed for credentials logins
    image: { type: String },
    provider: { type: String, default: "credentials" }, // "google" or "credentials"
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
