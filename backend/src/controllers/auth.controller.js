import bcrypt from "bcrypt";
import UserModel from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";

/**
 * @route   POST  /api/v1/users/register
 * @access  public
 * @desc    Register new user
 */
const postUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      !name ||
      !email ||
      !password
    ) {
      res.status(400);
      throw new Error("Please fill in all fields");
    }
    const user = await UserModel.findOne({ email });
    if (user) {
      res.status(400);
      throw new Error("Email already exists");
    }
    const hashPassword = bcrypt.hashSync(password, 10);
    const newUser = await UserModel.create({
      name,
      email,
      password: hashPassword,
    });
    await newUser.save();
    if (newUser) {
      generateToken(res, newUser._id);
    }
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};
/**
 * @route   GET  /api/v1/users/login
 * @access  public
 * @desc    login user
 */
const getLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email === "" || password === "" || !email || !password) {
      res.status(400);
      throw new Error("Please fill in all fields");
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      res.status(404);
      throw new Error("User not found, Invalid  email or password");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400);
      throw new Error("Invalid email or password");
    }
    generateToken(res, user._id);
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};
/**
 * @route   POST  /api/v1/users/logoutUser
 * @access  public
 * @desc    logout user
 */
const logoutUser = async (req, res) => {
  res.cookie("access_token", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
};

export { getLogin, logoutUser, postUser };
