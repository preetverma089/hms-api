import userModel from "../models/UserSchema.js";
import { createUser } from "../services/UserService.js";
export const signUpUser = async (req, res) => {
  try {
    const { userDetails } = req.body;
    const { firstName, lastName, email } = userDetails;
    const fName = firstName?.trim();
    const lName = lastName?.trim();
    const isExistsUser = await userModel.findOne({ email: email });
    if (isExistsUser)
      return res.status(401).json({
        message: "user already exists on this email, please try another",
      });
    const newUser = await createUser({
      firstName: fName,
      lastName: lName,
      email: email,
    });
    return res
      .status(200)
      .json({ message: "user created succesfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
