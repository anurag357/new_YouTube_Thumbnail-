// lib/auth.js
import bcrypt from "bcryptjs";

export async function hashPassword(password) {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password, hashed) {
  if (!hashed) return false; // google users may not have a password
  return bcrypt.compare(password, hashed);
}
