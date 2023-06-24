import express, { Request, Response } from "express";
import {multerSetup} from '../../multer/multer'
import {
  userSignup,
  userLogin,
  emailLogin,
  getUserProfile,
  editProfile
} from "../../controllers/userControllers/authController";

//MULTER
const { upload } = multerSetup()

const router = express.Router();

//USERSIDE ROUTING
router.post("/signup", userSignup);
router.post("/login", userLogin);
router.post('/emailLogin',emailLogin)
router.get('/profile/:userId',getUserProfile)
router.post('/editProfile',upload.single('image'),editProfile)





export default router;
