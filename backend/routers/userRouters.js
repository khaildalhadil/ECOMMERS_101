import {
  register,
  logIn
} from '../controllers/AuthControllers.js';

import exporess from 'express';

const router = exporess.Router();

router
  .route('/register')
  .post(register)

router
  .route('/login')
  .post(logIn)

export default router;