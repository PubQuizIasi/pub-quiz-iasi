import { Theme, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from 'tss-react/mui';
import FAQSection from './FAQSection';

const useStyles = makeStyles()((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '100px 0',
    gap: '20px',
    [theme.breakpoints.down(1100)]: {
      margin: '100px 50px',
    },
  },
  description: {
    width: '60%',
    marginBottom: '30px',
    [theme.breakpoints.down(1100)]: {
      width: '80%',
    },
  },
}));

export const FAQ = () => {
  const { classes } = useStyles();
  const { t } = useTranslation('faq');

  return (
    <div className={classes.container}>
      <Typography variant="h4" textAlign="center">
        {t('title')}
      </Typography>
      <Typography variant="body1" textAlign="center" className={classes.description}>
        {t('description')}
      </Typography>
      <FAQSection />
    </div>
  );
};
