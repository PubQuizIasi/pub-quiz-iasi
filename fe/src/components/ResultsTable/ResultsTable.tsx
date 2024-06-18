import { Paper, Table, TableBody, TableContainer, Theme, Typography } from '@mui/material';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from 'tss-react/mui';
import { MAX_SCORE_JOKER, MIN_SCORE, NUMBER_OF_ROUNDS } from '../../types/common';
import { NewGameStep, ResultsTableProps } from '../../types/gameResults';
import ActionModal from '../ActionModal';
import Button from '../Button/Button';
import ResultsRow from './ResultsRow';
import ResultsTableHead from './ResultsTableHead';

const useStyles = makeStyles()((theme: Theme) => ({
  container: {
    margin: '160px 0',
    textAlign: 'center',
  },
  gameName: {
    marginBottom: '80px',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '100px 0 160px 0',
    gap: '40px',
  },
  table: {
    [theme.breakpoints.down(1100)]: {
      margin: '0 30px',
      width: 'auto',
    },
  },
}));

const ResultsTable: FC<ResultsTableProps> = ({
  gameInfo,
  changeStep,
  results,
  updateResults,
  submit,
  deleteGame,
  isAdmin,
  loading,
  submitTranslationPath,
  children,
}) => {
  const { t } = useTranslation('gameResults');
  const { classes } = useStyles();
  const { game, season, numberOfTeams, rounds } = gameInfo;
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isPreview, setIsPreview] = useState<boolean>(false);
  const isEditable = isAdmin && !isPreview;

  const isSubmitButtonEnabled =
    season &&
    game &&
    numberOfTeams &&
    Number(numberOfTeams) > 0 &&
    rounds.length === NUMBER_OF_ROUNDS &&
    rounds.every((round) => round !== undefined && round !== '') &&
    results.every(({ teamName, joker, points }) =>
      Boolean(
        teamName !== '' &&
          joker !== null &&
          points.length === NUMBER_OF_ROUNDS &&
          Object.values(points).length === points.length &&
          points.every((point) => point <= MAX_SCORE_JOKER && point >= MIN_SCORE)
      )
    );

  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.gameName}>
        {t('gameName', {
          season,
          game,
        })}
      </Typography>
      {isEditable && <>{children}</>}
      <TableContainer component={Paper} className={classes.table}>
        <Table>
          <ResultsTableHead rounds={rounds} isEditable={isEditable} />
          {numberOfTeams && (
            <TableBody>
              {[...Array(Number(numberOfTeams))].map((_, index) => (
                <ResultsRow
                  isEditable={isEditable}
                  key={index}
                  teamIndex={index}
                  results={results}
                  updateResults={updateResults}
                  rounds={rounds}
                />
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      {isAdmin && (
        <div className={classes.buttonsContainer}>
          {isEditable && (
            <>
              {changeStep && (
                <Button variant="outlined" onClick={() => changeStep(NewGameStep.gameInfo)}>
                  {t('backButton')}
                </Button>
              )}
              {deleteGame && (
                <>
                  <Button variant="outlined" onClick={() => setModalOpen(true)}>
                    {t(`buttons.deleteGame`)}
                  </Button>
                  <ActionModal
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                    action={() => deleteGame(Number(season), Number(game))}
                    title={t('deleteModal.title')}
                    content={t('deleteModal.content', { season, game })}
                    actionName={t('deleteModal.delete')}
                  />
                </>
              )}
              {submit && submitTranslationPath && (
                <Button
                  variant="contained"
                  disabled={!isSubmitButtonEnabled}
                  loading={loading}
                  onClick={submit}
                >
                  {t(`buttons.${submitTranslationPath}`)}
                </Button>
              )}
            </>
          )}
          {isEditable && (
            <Button
              variant="contained"
              onClick={() => {
                setIsPreview(true);
              }}
            >
              {t('buttons.preview')}
            </Button>
          )}
          {isPreview && (
            <Button
              variant="contained"
              onClick={() => {
                setIsPreview(false);
              }}
            >
              {t('buttons.exitPreview')}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default ResultsTable;
