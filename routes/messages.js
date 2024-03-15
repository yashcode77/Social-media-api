// routes/messageRoutes.js

import express from 'express';
import {
  createMessageController,
  getMessagesController,
  deleteMessageController
} from '../controllers/messageController.js';

const router = express.Router();

// CREATE MESSAGE
router.post("/create", createMessageController);

// GET MESSAGES
router.get("/:conversationId", getMessagesController);

// DELETE MESSAGE
router.delete("/:messageId", deleteMessageController);

export default router;
