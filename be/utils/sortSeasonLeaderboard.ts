import { SeasonLeaderboardType } from '../types/seasonLeaderboard';

export const sortSeasonLeaderboard = (seasonLeaderboard: SeasonLeaderboardType) =>
  seasonLeaderboard.results.sort((a, b) => b.totalPoints - a.totalPoints);
