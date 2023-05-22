"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
function database() {
    const mongooseUrl = process.env.MONGOOSE_URL || 'mongodb://127.0.0.1:27017/blogPost';
    mongoose_1.default.connect(mongooseUrl, dbOptions)
        .then(() => {
        console.info('Connected to MongoDB database');
    })
        .catch((error) => {
        console.info('Error connecting to MongoDB database:', error);
    });
}
exports.default = database;
