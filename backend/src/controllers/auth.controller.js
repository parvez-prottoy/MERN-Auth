import bcrypt from "bcrypt";
import UserModel from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";

/**
 * @route   POST  /api/v1/users
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

export { postUser };
