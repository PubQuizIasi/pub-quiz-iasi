import { Router } from 'express';
import { getSeasonLeaderboard } from '../controllers/seasonLeaderboardController';

const router = Router();

router.get('/', getSeasonLeaderboard);

export default router;
