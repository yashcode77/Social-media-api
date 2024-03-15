// authValidator.js

import { body } from 'express-validator';

// Validation rules for user registration
export const registerValidationRules = () => [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 }),
  // Add more validation rules as needed
];

// Validation rules for user login
export const loginValidationRules = () => [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 }),
];

