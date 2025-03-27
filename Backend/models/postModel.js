import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  author: { type: String, required: true },
  view: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  image: { type: String, require: true },
  date: { type: Number, require: true },
  comment: [
    {
      user: { type: String, require: true},
      text: { type: String, required: true },
      createdAt: { type: Date, require: true },
    },
  ],
});

const postModel = mongoose.models.post || mongoose.model("post", postSchema);

export default postModel;
