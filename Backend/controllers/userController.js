import validator from "validator";
import nodemailer from "nodemailer";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//using nodemailer to verify email
const transporter = nodemailer.createTransport({
  service: "gmail", // Or use an SMTP server
  auth: {
    user: "lightsamuel10@gmail.com",
    pass: process.env.MY_APP_PASSWORD,
  },
});

const sendVerificationEmail = async (email) => {
  const verificationCode = crypto.randomInt(100000, 999999); // Generate a 6-digit code

  const mailOptions = {
    from: '"Your App Name" lightsamuel10@gmail.com',
    to: email,
    subject: "Email Verification Code",
    text: `Your verification code is: ${verificationCode}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Verification email sent!");
    return verificationCode;
  } catch (error) {
    console.error("Error sending email:", error);
    return null;
  }
};

//verfiy and send code

const verificationCode = {};
const sendCode = async (req, res) => {
  const { email } = req.body;

  if (!validator.isEmail(email)) {
    res.json({ success: false, message: "Please enter a valid email" });
  }

  const code = sendVerificationEmail(email);
  if (!code) {
    return res.json({
      success: false,
      message: "Failed to send Verification Code",
    });
  }

  verificationCode[email] = code;
  res.json({ message: "Verification code sent" });
};

const verifyCode = async (req, res) => {
  const { email, code } = req.body;

  if (verificationCode[email] && verificationCode[email] == code) {
    delete verificationCode[email];
    res.json({ message: "Email verified successfully" });
  } else {
    res.status(400).json({ message: "Invalid verification code" });
  }
};

//User registration
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    sendVerificationEmail(email);

    //checking if a user already exist

    const exists = await userModel.findOne({ email });
    if (exists) {
      res.json({ success: false, message: "User Already Exist" });
    }

    //validate strong password
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    //hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPasword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPasword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);

    res.json({ success: true, token });
    return validator.isEmail(email);
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//Author user register

const authorRegister = async(req,res) => {

}

//userLoin
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "You don't have an account" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid Password" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//Author user login

const authorLogin = async(req,res) => {
  
}

export { sendCode, verifyCode, registerUser, userLogin, authorRegister, authorLogin};
