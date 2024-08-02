import mongoose from "mongoose";
import validator from "validator";

const accountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    maxLength: [20, "Name must be under 20 characters"],
    minLength: [5, "Name should be above 5 characters"],
  },
  email: {
    type: String,
    required: [true, "Password is required"],
    unique: true,
    validate: [validator.isEmail, "Email address is invalid"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    maxLength: [20, "Password must be under 20 characters"],
    minLength: [5, "Password should be above 5 characters"],
  },
  resetPasswordToken: String,
  resetPasswordExpire: String,
});

export const accountModel = mongoose.model("Users", accountSchema);
