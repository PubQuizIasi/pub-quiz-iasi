import { Router } from 'express';
import { login, refreshToken, register } from '../controllers/userController';

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.post('/refresh-token', refreshToken);

export default router;
