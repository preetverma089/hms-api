import mongoose from "mongoose";
import userModel from "../models/UserSchema.js";
import { generateJWt } from "../config/auth.js";
export const createUser = async (data) => {
  const newUser = await userModel.create(data);
  return newUser;
};

export const login = async (data) => {
  const token = await generateJWt(data);
  console.log(token);
  const loginDetails = {
    ...data,
    authToken: token,
  };
  return loginDetails;
};
