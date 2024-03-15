import express from 'express';
import connectDB from './database/db.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { errorHandler } from './middlewares/error.js';
import verifyToken from './middlewares/verifyToken.js';
import authRoute from './routes/auth.js';
import userRoute from './routes/users.js';
import postRoute from './routes/posts.js';
import commentRoute from './routes/comments.js';
import storyRoute from './routes/stories.js';
import conversationRoute from './routes/conversations.js';
import messageRoute from './routes/messages.js';
import path from 'path';
import { fileURLToPath } from 'url';

import rateLimit from 'express-rate-limit';
import { validationResult } from 'express-validator';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const validateInput = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  };
  
  // Rate limiting middleware
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later',
  });

dotenv.config()
app.use(express.json())
app.use(cookieParser())
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/auth",authRoute)
app.use("/api/user",verifyToken,userRoute)
app.use("/api/post",verifyToken,postRoute)
app.use("/api/comment",verifyToken,commentRoute)
app.use("/api/story",verifyToken,storyRoute)
app.use("/api/conversation",verifyToken,conversationRoute)
app.use("/api/message",verifyToken,messageRoute)



app.use(errorHandler)

app.listen(process.env.PORT,()=>{
    connectDB()
    console.log("app is running")
})

export default app;