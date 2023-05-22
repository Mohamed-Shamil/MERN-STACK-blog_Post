import express, { Request, Response } from "express";
import {
  userSignup,
  userLogin,
  createBlog,
  getPost
} from "../../controllers/userControllers/authController";
import checkUser from '../../Auth/jwtAuth'

const router = express.Router();

//USERSIDE ROUTING
router.post('/getUser',checkUser)
router.post("/signup", userSignup);
router.post("/login", userLogin);
router.post('/createPost',createBlog)
router.get('/getPost',getPost)

//ADMIN SIDE ROUTING

export default router;
