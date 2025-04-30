// authController.js

const User = require("../Models/User.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

// Signup controller
exports.signup = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      dob,
      mobileNumber,
      accountType,
      specialty,
      licenseNumber,
      acceptTerms,
    } = req.body;

    // Check if a user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already in use." });
    }

    // Check if the user has accepted the terms and conditions
    if (!acceptTerms) {
      return res
        .status(400)
        .json({ message: "Please accept the terms and conditions." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // You can adjust the saltRounds (second argument) as needed.

    const user = new User({
      name,
      email,
      password: hashedPassword,
      dob,
      mobileNumber,
      accountType,
      specialty,
      licenseNumber,
      acceptTerms,
    });

    await user.save();

    res.status(201).json({ message: "Signup successful" });
  } catch (error) {
    res.status(500).json({ message: "Signup failed", error: error.message });
  }
};

// Login controller

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Email or password is incorrect." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Email or password is incorrect." });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({
      message: "Login successful",
      token, // include token here
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error: error.message });
  }
};

