import userModel from "../models/UserSchema.js";
import { createUser, login } from "../services/UserService.js";
import { hash, genSalt, compare } from "bcryptjs";
import { systemVariables } from "../config/config.js";
export const signUpUser = async (req, res) => {
  try {
    const { userDetails } = req.body;
    const { fullName, password, email } = userDetails;
    const fName = fullName?.trim();
    const Password = password?.trim();
    const isExistsUser = await userModel.findOne({ email: email });
    if (isExistsUser)
      return res.status(200).json({
        message: "user already exists on this email, please try another",
      });
    const salt = await genSalt(parseInt(systemVariables.SALT));
    const hashedPassword = await hash(Password, salt);
    const newUser = await createUser({
      fullName: fName,
      password: hashedPassword,
      email: email,
    });
    return res
      .status(200)
      .json({ message: "user created succesfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isUserExists = await userModel.findOne({ email: email }).lean();
    if (!isUserExists)
      return res.status(200).json({ message: "User not exists" });
    const checkPassword = await compare(password, isUserExists?.password);
    if (!checkPassword)
      return res
        .status(200)
        .json({ message: "passoword not matched, please try again" });
    const userData = await login(isUserExists);
    return res.status(200).json({ message: "Login successfully", userData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
