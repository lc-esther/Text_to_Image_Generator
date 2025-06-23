import {registerUser, loginUser, userCredits} from '../controllers/userController.js';
import express from 'express';
import userAuth from '../middlewares/auth.js';

const UserRouter = express.Router();
UserRouter.post('/register', registerUser);
UserRouter.post('/login', loginUser);
UserRouter.get('/credits', userAuth, userCredits)


export default UserRouter;