"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default.Router();
//USER ROUTES
const authRoute_1 = __importDefault(require("./userRoutes/authRoute"));
app.use("/", authRoute_1.default);
//ADMIN ROUTES
const adminAuthRoute_1 = __importDefault(require("./adminRoutes/adminAuthRoute"));
app.use('/admin', adminAuthRoute_1.default);
exports.default = app;
