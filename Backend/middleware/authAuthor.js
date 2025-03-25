import jwt from "jsonwebtoken";

const authUserAuthor = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    res.json({ success: false, message: "Not Found Try Again" });
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    req.body.userId = token_decode;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authUserAuthor;
