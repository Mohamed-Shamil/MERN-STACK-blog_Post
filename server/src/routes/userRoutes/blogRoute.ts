import express, { Request, Response } from "express";
import {multerSetup} from '../../multer/multer'
import {
  createBlog,
  getPost,
  getOneBlog,
  likeBlog,
  followUser,
  unFollowUser,
  getUserPosts,
  deletePost,
  commentBlog,
  postComment,
  followingUsers,
  myFollowers
} from "../../controllers/userControllers/blogController";
import { verifyJwtToken } from "../../Auth/jwtAuth";

//MULTER
const { upload } = multerSetup()


const router = express.Router();

// Middleware
// router.use(verifyJwtToken)

router.get("/home",getPost);
router.post("/createPost", upload.single('image'), createBlog);
router.get("/getBlog/:postId", getOneBlog);

router.put('/like/:postId/:userId',likeBlog)
router.post('/follow/:id/:myId', followUser);
router.post('/unfollow/:id/:myId',unFollowUser)
router.get('/getUserPosts/:userId',getUserPosts)
router.delete('/deletePost/:postId',deletePost)
router.get('/comments/:postId',commentBlog)
router.post('/comment/:postId',postComment)
router.get('/following/:id',followingUsers)
router.get('/followers/:id',myFollowers)

// router.post('/follow/:userId/:myId',followUser)





 export default router;