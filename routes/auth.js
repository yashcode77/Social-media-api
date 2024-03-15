// routes/auth.js

import express from 'express';
import {
    registerController,
    loginController,
    logoutController,
    refetchUserController
} from '../controllers/authController.js';
import { registerValidationRules, loginValidationRules } from '../validators/authValidator.js';
import { validateInput } from '../middlewares/validation.js'; // Assuming you have a generic input validation middleware

const router = express.Router();

// REGISTER
router.post("/register", registerValidationRules(), validateInput, registerController);

// LOGIN
router.post("/login", loginValidationRules(), validateInput, loginController);

// LOGOUT
router.get("/logout", logoutController);

// FETCH CURRENT USER
router.get("/refetch", refetchUserController);

export default router;
