import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, lowercase: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, minlength: 6 },
    profilePicture: { type: String, default: "file:///C:/Users/USER/Downloads/blue-circle-with-white-user/default%20image.jpg"},
    bio: { type: String, default: "" },
    role: { type: String, enum: ["user", "author"], default: "user" },
    posts: [{ type: Object, default: {} }],
  },
  { minimize: false }
);

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
