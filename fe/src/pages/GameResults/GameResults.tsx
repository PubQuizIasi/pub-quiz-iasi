import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectIsAdmin } from '../Login/selectors';
import GameResultsFilters from './GameResultsFilters';
import UpdateGameResults from './UpdateGameResults/UpdateGameResults';
import ViewGameResults from './ViewGameResults';
import { selectIsSeasonLeaderboard, selectSeasonLeaderboard } from './selectors';
import SeasonLeaderboard from './SeasonLeaderboard/SeasonLeaderboard';

export const GameResults = () => {
  const isAdmin = useAppSelector(selectIsAdmin);
  const isSeasonLeaderboard = useAppSelector(selectIsSeasonLeaderboard);
  const seasonLeaderboard = useAppSelector(selectSeasonLeaderboard);
  return (
    <>
      <GameResultsFilters />
      {isSeasonLeaderboard && seasonLeaderboard && <SeasonLeaderboard />}
      {!isSeasonLeaderboard &&
        (isAdmin ? <UpdateGameResults isAdmin={isAdmin} /> : <ViewGameResults />)}
    </>
  );
};
