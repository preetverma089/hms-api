import userModel from "../models/UserSchema.js";
import { createUser } from "../services/UserService.js";
export const signUpUser = async (req, res) => {
  try {
    const { userDetails } = req.body;
    const isExistsUser = await userModel.findOne({ Email: userDetails.Email });
    if (isExistsUser)
      return res.status(401).json({ message: "user already exists" });
    const newUser = await createUser(userDetails);
    return res
      .status(200)
      .json({ message: "user created succesfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
