import jwt from "jsonwebtoken";
import { systemVariables } from "./config.js";
export const generateJWt = async (signData) => {
  const payload = {
    userId: signData?._id,
    username: signData?.fullName,
    userEmail: signData?.email,
  };
  const options = {
    expiresIn: "1w",
  };
  const token = jwt.sign(payload, systemVariables.SECRET_KEY, options);
  return token;
};
