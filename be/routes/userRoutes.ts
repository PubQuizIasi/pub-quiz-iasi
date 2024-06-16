import { Router } from 'express';
import { login, refreshToken, register } from '../controllers/userController';

const router = Router();

router.post('/login', login);
router.post('/refresh-token', refreshToken);
router.post('/register', register);

export default router;
