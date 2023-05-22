"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const validator_1 = __importDefault(require("validator"));
const userSchema = new mongoose_1.default.Schema({
    firstName: {
        type: String,
        require: true,
        min: 2,
        max: 25,
    },
    lastName: {
        type: String,
        require: true,
        min: 2,
        max: 25
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validator: [validator_1.default.isEmail, "Invalid Email"],
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        validator: [
            {
                validator: function (value) {
                    return /^\d{10}$/.test(value);
                },
                message: "Invalid Number"
            }
        ]
    },
    password: {
        type: String,
    },
    confirmpassword: {
        type: String
    },
    following: {
        type: Array
    },
    followers: {
        type: Array
    },
});
const userModel = mongoose_1.default.model("user", userSchema);
exports.default = userModel;
