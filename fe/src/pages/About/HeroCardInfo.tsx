import { Theme, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from 'tss-react/mui';
import { heroCard } from '../../assets';
import { ScrollDown } from '../../components/ScrollDown';

const useStyles = makeStyles()((theme: Theme) => ({
  container: {
    height: '100vh',
    background: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${heroCard}) no-repeat center center fixed`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: theme.palette.primary.contrastText,
    position: 'relative',
  },
  info: {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

const HeroCardInfo = () => {
  const { classes } = useStyles();
  const { t } = useTranslation('about', { keyPrefix: 'heroCardInfo' });

  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <Typography variant="h1" className={classes.title}>
          {t('title')}
        </Typography>
        <Typography variant="subtitle1">{t('description')}</Typography>
      </div>
      <ScrollDown />
    </div>
  );
};

export default HeroCardInfo;
