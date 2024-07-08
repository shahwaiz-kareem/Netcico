import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, min: 2, max: 30 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, min: 6 },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
