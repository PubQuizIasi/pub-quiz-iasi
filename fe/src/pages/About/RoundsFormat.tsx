import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { useTranslation } from 'react-i18next';
import RoundsFormatCard from './RoundsFormatCard';
import { number1, number2, number3, number4, number5 } from '../../assets';

const useStyles = makeStyles()(() => ({
  gameRoundsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    padding: '0 20%',
    margin: '100px 0',
  },
  gameRoundsHeader: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    gap: '15px',
    marginBottom: '30px',
  },
}));

const RoundsFormat = () => {
  const { classes } = useStyles();
  const { t } = useTranslation('about');

  return (
    <div className={classes.gameRoundsContainer}>
      <div className={classes.gameRoundsHeader}>
        <Typography variant="h4">{t('gameRounds.title')}</Typography>
        <Typography variant="body1">{t('gameRounds.description')}</Typography>
      </div>
      <RoundsFormatCard
        img={number1}
        title={t('gameRounds.matrix.title')}
        description={t('gameRounds.matrix.description')}
      />
      <RoundsFormatCard
        img={number2}
        title={t('gameRounds.musicFilm.title')}
        description={t('gameRounds.musicFilm.description')}
      />
      <RoundsFormatCard
        img={number3}
        title={t('gameRounds.connection.title')}
        description={t('gameRounds.connection.description')}
      />
      <RoundsFormatCard
        img={number4}
        title={t('gameRounds.themed.title')}
        description={t('gameRounds.themed.description')}
      />
      <RoundsFormatCard
        img={number5}
        title={t('gameRounds.mixed.title')}
        description={t('gameRounds.mixed.description')}
      />
    </div>
  );
};

export default RoundsFormat;
