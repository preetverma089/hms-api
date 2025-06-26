import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  Email: {
    type: String,
  },
});

const userModel = mongoose.model("users", userSchema);

export default userModel;
