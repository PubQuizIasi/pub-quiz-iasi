import { TableCell, TableHead, TableRow, Theme, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from 'tss-react/mui';
import { ResultsTableHeadProps } from '../../types/gameResults';
import { NUMBER_OF_GAMES_PER_SEASON } from '../../types/common';

const useStyles = makeStyles()((theme: Theme) => ({
  teamNameHeader: {
    width: '250px',
  },
  tableHead: {
    backgroundColor: theme.palette.primary.main,
    th: {
      color: theme.palette.primary.contrastText,
    },
  },
  headerTableCell: {
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: '15px',
  },
}));

const ResultsTableHead = ({
  isEditable = false,
  rounds,
  seasonLeaderboard,
}: ResultsTableHeadProps) => {
  const { classes } = useStyles();
  const { t } = useTranslation('gameResults');
  const games = [...Array(NUMBER_OF_GAMES_PER_SEASON)].map((_, index) => index + 1);

  return (
    <TableHead className={classes.tableHead}>
      <TableRow>
        <TableCell className={classes.teamNameHeader} align="center">
          <Typography className={classes.headerTableCell}>{t('table.teamName')}</Typography>
        </TableCell>
        {isEditable && (
          <TableCell align="center">
            <Typography className={classes.headerTableCell}>{t('table.joker')}</Typography>
          </TableCell>
        )}
        {rounds &&
          rounds.map((round: string, index: number) => (
            <TableCell align="center" key={`${round}${index}`}>
              <Typography className={classes.headerTableCell}>{round}</Typography>
            </TableCell>
          ))}
        {!rounds &&
          seasonLeaderboard &&
          games.map((game: number, index) => (
            <TableCell align="center" key={`${game}${index}`}>
              <Typography className={classes.headerTableCell}>
                {t('table.game', { game })}
              </Typography>
            </TableCell>
          ))}
        <TableCell align="right">
          <Typography className={classes.headerTableCell}>{t('table.totalPoints')}</Typography>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default ResultsTableHead;
