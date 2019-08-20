import express from 'express';
import Users from '../controllers/userController';
import userValidation from '../middlewares/userValidation';

const router = express.Router();

router.post('/signup', userValidation.validateUser, Users.createUser);

export default router;
