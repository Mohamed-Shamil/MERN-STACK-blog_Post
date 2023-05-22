import express from "express";
const app = express.Router();

//USER ROUTES
import authRoute from "./userRoutes/authRoute";
app.use("/", authRoute);

//ADMIN ROUTES
import adminAuthRoute from "./adminRoutes/adminAuthRoute";
app.use("/admin", adminAuthRoute);

export default app;
