import { NextFunction, Request, Response } from 'express';
import GameResult from '../models/gameResultModel';
import SeasonLeaderboard from '../models/seasonLeaderboardModel';
import { GameResultType, UpdateGameResultType } from '../types/gameResults';
import { getSumOfArray } from '../utils/getSumOfArray';
import { SeasonLeaderboardResult } from '../types/seasonLeaderboard';
import { sortSeasonLeaderboard } from '../utils/sortSeasonLeaderboard';

// controller
export const getSeasonLeaderboard = async (req: Request, res: Response, next: NextFunction) => {
  const { season } = req.query;

  try {
    const seasonLeaderboard = await SeasonLeaderboard.findOne({ season }, { _id: false });
    seasonLeaderboard.results = sortSeasonLeaderboard(seasonLeaderboard);
    res.status(200).send(seasonLeaderboard);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
};

// handlers for creating, updating season leaderboard
// used whenever game results are changed
export const handleSeasonLeaderboard = async (gameResults: GameResultType) => {
  const { season, game, results } = gameResults;
  const seasonLeaderboard = await SeasonLeaderboard.findOne({ season });

  // season leaderboard does not exist yet, therefore we generate it
  if (!seasonLeaderboard) {
    const seasonResults: SeasonLeaderboardResult[] = results.map(({ teamName, points }) => {
      const gameResult = [{ game, points: getSumOfArray(points) }];
      return {
        teamName,
        gameResult,
        totalPoints: getSumOfArray(gameResult.map((res) => res.points)),
      };
    });

    const newLeaderboard = new SeasonLeaderboard({ season, results: seasonResults });
    newLeaderboard.save();
  } else {
    results.forEach(({ teamName, points }) => {
      const teamResIndex = seasonLeaderboard.results.findIndex(
        (res: SeasonLeaderboardResult) => res.teamName.toLowerCase() === teamName.toLowerCase()
      );

      const pointsToAdd = getSumOfArray(points);
      if (teamResIndex !== -1) {
        seasonLeaderboard.results[teamResIndex].gameResult = [
          ...seasonLeaderboard.results[teamResIndex].gameResult,
          { game, points: pointsToAdd },
        ];
        seasonLeaderboard.results[teamResIndex].totalPoints += pointsToAdd;
      } else {
        const gameResult = [{ game, points: pointsToAdd }];
        seasonLeaderboard.results.push({
          teamName,
          gameResult,
          totalPoints: pointsToAdd,
        });
      }
    });
    seasonLeaderboard.save();
  }
};

export const handleSeasonLeaderboardOnDelete = async (
  gameResults: GameResultType | Pick<GameResultType, 'season' | 'game'>
) => {
  const { season, game } = gameResults;
  const seasonWithGames = await GameResult.findOne({ season });
  const seasonLeaderboard = await SeasonLeaderboard.findOne({ season });
  // this handler is called after deleting a game
  // if the deleted game was the only one in the season
  // the season is now empty
  // meaning we can delete the season leaderboard
  if (!seasonWithGames || seasonWithGames.length === 0) {
    await seasonLeaderboard.remove();
    return;
  }

  seasonLeaderboard.results.forEach((res: SeasonLeaderboardResult) => {
    const index = res.gameResult.findIndex((gameRes) => gameRes.game === game);
    if (index !== -1) {
      res.totalPoints -= res.gameResult[index].points;
      res.gameResult.splice(index, 1);
    }
  });

  seasonLeaderboard.results = seasonLeaderboard.results.filter(
    (res: SeasonLeaderboardResult) => res.gameResult.length !== 0
  );
  await seasonLeaderboard.save();
};

export const handleSeasonLeaderboardOnUpdate = async (gameResults: UpdateGameResultType) => {
  const { previousSeason, previousGame, ...updatedGame } = gameResults;
  await handleSeasonLeaderboardOnDelete({ season: previousSeason, game: previousGame });
  await handleSeasonLeaderboard(updatedGame);
};
