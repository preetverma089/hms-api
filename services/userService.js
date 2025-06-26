import mongoose from "mongoose";
import userModel from "../models/UserSchema.js";
export const createUser = async (data) => {
  const newUser = await userModel.create(data);
  return newUser;
};
