// // import { v2 as cloudinary } from "cloudinary";
// // import postModel from "../models/postModel.js";
// // import userModel from "../models/userModel.js";

// // const addPost = async (req, res) => {
// //   try {
// //     const { title, content, description, author, veiw, likes, date, comment } =
// //       req.body;

// //     const { username } = req.body;

// //     const userName = await userModel.findOne({username});
// //     const image1 = req.files.image1 && req.files.image1[0];
// //     const image2 = req.files.image1 && req.files.image2[0];
// //     const images = [image1, image2].filter((item) => item !== undefined);

// //     let imagesUrl = await Promise.all(
// //       images.map(async (item) => {
// //         let result = await cloudinary.uploader.upload(item.path, {
// //             resource_type: "image",
// //           });
// //         return result.secure_url;
// //       })
// //     );

// //     const postData = {
// //       title,
// //       content,
// //       description,
// //       image: imagesUrl,
// //       author: userName,
// //       veiw,
// //       likes,
// //       date: Date.now(),
// //       comment: {
// //         user,
// //         text,
// //         createdAt,
// //       },
// //     };
// //     const post = new postModel(postData);
// //     await post.save();
// //     res.json({ success: true, message: "post Added" });
// //   } catch (error) {
// //     console.log(error);
// //     res.json({ success: false, message: error.message });
// //   }
// // };

// // export { addPost };


import { v2 as cloudinary } from "cloudinary";
import postModel from "../models/postModel.js";
import userModel from "../models/userModel.js";

const addPost = async (req, res) => {
  try {
    const { title, content, description, author, view, likes, comment } = req.body;

    // Find user by username
    const user = await userModel.findOne({ username: author });
    if (!user) { 
      return res.json({ success: false, message: "User not found" });
    }

    // Handle image uploads
    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const images = [image1, image2].filter((item) => item !== undefined);

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    // Construct post data
    const postData = {
      title,
      content,
      description,
      image: imagesUrl,
      author: user._id, // Store user ID instead of entire user object
      view: view || 0, // Default value if not provided
      likes: likes || 0,
      date: Date.now(),
      comment: comment
        ? [
            {
              user: user._id, // Store user ID for comments
              text: comment.text,
              createdAt: new Date(),
            },
          ]
        : [],
    };

    // Save post
    const post = new postModel(postData);
    await post.save();

    res.json({ success: true, message: "Post added", post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { addPost };
