import React from 'react';
import ResultsTable from '../../../components/ResultsTable';
import { useAppSelector } from '../../../store/hooks';
import { selectCurrentGameData, selectLoading } from '../selectors';
import Loader from '../../../components/Loader';
import { useTranslation } from 'react-i18next';

const ViewGameResults = () => {
  const gameResults = useAppSelector(selectCurrentGameData);
  const gameResultsLoading = useAppSelector(selectLoading);
  const { t } = useTranslation('gameResults');

  return (
    <Loader
      loading={!gameResults.season || gameResultsLoading}
      loadingMessage={t('loadingMessage.filters')}
    >
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
