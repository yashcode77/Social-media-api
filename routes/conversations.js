// routes/conversationRoutes.js

import express from 'express';
import {
  createNewConversationController,
  getConversationOfUserController,
  getTwoUsersConversationController,
  deleteConversationController
} from '../controllers/conversationController.js';

const router = express.Router();

// NEW CONVERSATION
router.post("/create", createNewConversationController);

// GET CONVERSATIONS OF USER
router.get("/:userId", getConversationOfUserController);

// FIND TWO USERS CONVERSATION
router.get("/:firstUserId/:secondUserId", getTwoUsersConversationController);

// DELETE CONVERSATION
router.delete("/delete/:conversationId", deleteConversationController);

export default router;
