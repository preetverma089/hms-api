import { config } from "dotenv";
config();

export const systemVariables = {
  mongoURI: process.env.MongoURI,
  PORT: process.env.PORT || 4000,
  SALT: process.env.SALT || 11,
  SECRET_KEY: process.env.SECRET_KEY || "HMS",
};
