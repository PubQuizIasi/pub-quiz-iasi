import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectIsAdmin } from '../Login/selectors';
import GameResultsFilters from './GameResultsFilters';
import UpdateGameResults from './UpdateGameResults/UpdateGameResults';
import ViewGameResults from './ViewGameResults';

export const GameResults = () => {
  const isAdmin = useAppSelector(selectIsAdmin);

  return (
    <>
      <GameResultsFilters />
      {isAdmin ? <UpdateGameResults isAdmin={isAdmin} /> : <ViewGameResults />}
    </>
  );
};
