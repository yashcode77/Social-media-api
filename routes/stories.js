// routes/storyRoutes.js

import express from 'express';
import upload from '../middlewares/upload.js';
import {
  createStoryController,
  getStoriesController,
  getUserStoriesController,
  deleteStoryController,
  deleteStoriesController
} from '../controllers/storyController.js';

const router = express.Router();

// CREATE STORY
router.post("/create/:userId", upload.single("image"), createStoryController);

// GET ALL STORIES
router.get("/all/:userId", getStoriesController);

// GET USER STORIES
router.get("/user/:userId", getUserStoriesController);

// DELETE A STORY
router.delete("/delete/:storyId", deleteStoryController);

// DELETE ALL STORIES
router.delete("/delete/stories/:userId", deleteStoriesController);

export default router;
