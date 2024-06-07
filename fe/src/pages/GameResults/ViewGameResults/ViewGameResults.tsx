import React from 'react';
import ResultsTable from '../../../components/ResultsTable';
import { useAppSelector } from '../../../store/hooks';
import { selectCurrentGameData, selectLoading } from '../selectors';
import Loader from '../../../components/Loader';

const ViewGameResults = () => {
  const gameResults = useAppSelector(selectCurrentGameData);
  const gameResultsLoading = useAppSelector(selectLoading);

  return (
    <Loader loading={!gameResults.season || gameResultsLoading}>
      <ResultsTable
        gameInfo={{
          game: gameResults.game,
          season: gameResults.season,
          rounds: gameResults.rounds,
          numberOfTeams: gameResults.numberOfTeams,
        }}
        results={gameResults.results}
      />
    </Loader>
  );
};

export default ViewGameResults;
