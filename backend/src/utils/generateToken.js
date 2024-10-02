import jwt from "jsonwebtoken";
import config from "../../config/config.js";

const generateToken = (res, userId) => {
  const payload = {
    userId,
  };
  const token = jwt.sign(payload, config.jwtSecret, { expiresIn: "1h" });
  res.cookie("access_token", token, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 1000,
  });
};
export default generateToken;
