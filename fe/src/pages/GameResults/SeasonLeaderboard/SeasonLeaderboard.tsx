import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Theme,
  Typography,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from 'tss-react/mui';
import Loader from '../../../components/Loader';
import ResultsTableHead from '../../../components/ResultsTable/ResultsTableHead';
import { useAppSelector } from '../../../store/hooks';
import { NUMBER_OF_GAMES_PER_SEASON } from '../../../types/common';
import { SeasonLeaderboardType } from '../../../types/seasonLeaderboard';
import { selectLoading, selectSeasonLeaderboard } from '../selectors';
import RewardIcon from '../../../components/ResultsTable/RewardIcon';

const useStyles = makeStyles()((theme: Theme) => ({
  container: {
    margin: '160px 0',
    textAlign: 'center',
  },
  gameName: {
    marginBottom: '80px',
  },
  table: {
    [theme.breakpoints.down(1100)]: {
      margin: '0 30px',
      width: 'auto',
    },
  },
  teamNameContainer: {
    position: 'relative',
  },
  teamIndex: {
    position: 'absolute',
    top: 0,
    left: 0,
    [theme.breakpoints.down('xl')]: {
      display: 'none',
    },
  },
  totalPointsCell: {
    paddingRight: '32px',
    position: 'relative',
  },
}));

const SeasonLeaderboard = () => {
  const { season, results }: SeasonLeaderboardType = useAppSelector(selectSeasonLeaderboard);
  const loading = useAppSelector(selectLoading);
  const { t } = useTranslation('gameResults');
  const { classes } = useStyles();

  return (
    <Loader loading={!season || loading} loadingMessage={t('loadingMessage.seasonLeaderboard')}>
      <div className={classes.container}>
        <Typography variant="h4" className={classes.gameName}>
          {t('seasonLeaderboard', { season })}
        </Typography>
        <TableContainer component={Paper} className={classes.table}>
          <Table>
            <ResultsTableHead seasonLeaderboard />
            {results.map(({ teamName, gameResult, totalPoints }, teamIndex) => (
              <TableRow key={teamName}>
                <TableCell>
                  <div className={classes.teamNameContainer}>
                    <Typography className={classes.teamIndex}>{teamIndex + 1}</Typography>
                    <Typography textAlign="center">{teamName}</Typography>
                  </div>
                </TableCell>
                {[...Array(NUMBER_OF_GAMES_PER_SEASON)].map((_, index) => {
                  const res = gameResult.find((gameRes) => gameRes.game === index + 1);
                  return (
                    <TableCell key={res?.game}>
                      <Typography textAlign="center">{res?.points ?? '-'}</Typography>
                    </TableCell>
                  );
                })}
                <TableCell className={classes.totalPointsCell}>
                  <Typography textAlign="right">{totalPoints}</Typography>
                  <RewardIcon teamIndex={teamIndex} showLast={false} />
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </TableContainer>
      </div>
    </Loader>
  );
};

export default SeasonLeaderboard;
