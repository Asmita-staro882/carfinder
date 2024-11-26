import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Hardcoded OTP for demonstration
const OTP_CODE = "1234";

// Signup Controller
export const signup = async (req, res) => {
  try {
    const { phone, otp } = req.body;

    if (!otp || !phone) {
      return res.status(400).json({ message: "Phone and OTP are required" });
    }

    if (otp !== OTP_CODE) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    const existingUser = await User.findOne({ phone });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({ phone });
    await user.save();

    const token = user.generateAuthToken();
    res.status(201).json({ message: "User created successfully", token });
  } catch (error) {
    console.error("Error in signup controller:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Login Controller (for completeness)
export const login = async (req, res) => {
  try {
    const { phone, otp } = req.body;

    // Verify OTP
    if (otp !== OTP_CODE) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    // Find user by email and phone
    const user = await User.findOne({ phone });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate a token
    const token = user.generateAuthToken();

    // Set the token in a cookie
    res.cookie("authToken", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 3600000,
    });

    res.status(200).json({
      message: `User login successful`,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Logout Controller
export const logout = (req, res) => {
  res.clearCookie("authToken", {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });

  res.status(200).json({ message: "Logout successful. Cookie cleared." });
};
