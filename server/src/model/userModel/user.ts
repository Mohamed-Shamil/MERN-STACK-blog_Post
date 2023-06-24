import mongoose, { Types } from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    min: 2,
    max: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validator: [validator.isEmail, "Invalid Email"],
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    validator: [
      {
        validator: function (value: string) {
          return /^\d{10}$/.test(value);
        },
        message: "Invalid Number",
      },
    ],
  },
  password: {
    type: String,
  },
  bio:{
    type:String
  },
  image:{
    type:String
  },
  following: {
    type: Array,
  },
  followers: {
    type: Array,
  },
});

export type typeOfUserSchema = typeof userModel;

export const userModel = mongoose.model("user", userSchema);
