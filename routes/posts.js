// routes/postRoutes.js

import express from 'express';
import upload from '../middlewares/upload.js';
import {
  createPostController,
  createPostWithImagesController,
  updatePostController,
  getPostsController,
  getUserPostsController,
  deletePostController,
  likePostController,
  dislikePostController,
  getPostsFromFollowing // Import the new controller function
} from '../controllers/postController.js';

const router = express.Router();

// CREATE POST
router.post("/create", createPostController);

// CREATE POST WITH IMAGES
router.post("/create/:userId", upload.array("images", 5), createPostWithImagesController);

// UPDATE POST
router.put("/update/:postId", updatePostController);

// GET ALL POSTS
router.get("/all/:userId", getPostsController);

// GET USER POSTS
router.get("/user/:userId", getUserPostsController);

// DELETE POST
router.delete("/delete/:postId", deletePostController);

// LIKE POST 
router.post("/like/:postId", likePostController);

// DISLIKE POST
router.post("/dislike/:postId", dislikePostController);

// GET POSTS FROM USERS THAT THE CURRENT USER FOLLOWS
router.get("/following/:userId", getPostsFromFollowing);

export default router;
