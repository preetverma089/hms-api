import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
  },
});

const userModel = mongoose.model("users", userSchema);

export default userModel;
