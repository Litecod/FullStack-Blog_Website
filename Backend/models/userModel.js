import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true,  lowercase: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, minlength: 6 },
    profilePicture: { type: String, default: "https://images.unsplash.com/photo-1742105682489-94149abb1009?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    bio: { type: String, default: "" },
    role: { type: String, enum: ["user", "author"], default: "user" },
    posts: [{ type: Object, default: {} }]
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);

export default userModel;
