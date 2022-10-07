import { Router } from 'express';
import UserController from '../controllers/user.controllers';

const router = Router();

const userController = new UserController();

router.get('/user', userController.getAll);

export default router;
