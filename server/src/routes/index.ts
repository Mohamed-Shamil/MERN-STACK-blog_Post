import express from "express";
const app = express.Router();

//USER ROUTES
import authRoute from "./userRoutes/authRoute";

//BLOG ROUTES
import blogRoute from "./userRoutes/blogRoute";

app.use("/", authRoute);
app.use("/",blogRoute)

//ADMIN ROUTES
import adminAuthRoute from "./adminRoutes/adminAuthRoute";
app.use("/admin", adminAuthRoute);

export default app;
