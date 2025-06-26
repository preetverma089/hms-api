import { config } from "dotenv";
config();

export const systemVariables = {
  mongoURI: process.env.MongoURI,
  PORT: process.env.PORT || 4000,
};
