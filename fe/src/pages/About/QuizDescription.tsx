import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { useTranslation } from 'react-i18next';
import { Theme } from '@mui/material';
import { clock, location, participationFee, play, prizes } from '../../assets';
import QuizDescriptionCard from './QuizDescriptionCard';

const useStyles = makeStyles()((theme: Theme) => ({
  cardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, max-content)',
    gridTemplateRows: 'repeat(2, 1fr)',
    justifyContent: 'center',
    padding: '0 20%',
    margin: '100px 0',
    rowGap: '100px',
    columnGap: '50px',
    justifyItems: 'center',
    [theme.breakpoints.down(1700)]: {
      gridTemplateColumns: 'repeat(2, auto)',
      gridTemplateRows: 'repeat(3, 1fr)',
    },
    [theme.breakpoints.down(1100)]: {
      gridTemplateRows: 'repeat(5, 1fr)',
      gridTemplateColumns: 'repeat(1, 1fr)',
      padding: '0 5%',
    },
  },
}));

const QuizDescription = () => {
  const { classes } = useStyles();
  const { t } = useTranslation('about');

  const cardsInfo = [
    { img: play, title: t('play.title'), description: t('play.description') },
    {
      img: location,
      title: t('location.title'),
      description: t('location.description'),
      address: t('location.address'),
    },
    { img: participationFee, title: t('price.title'), description: t('price.description') },
    {
      img: clock,
      title: t('clock.title'),
      description: t('clock.description'),
    },
    {
      img: prizes,
      title: t('prize.title'),
      isPrizeSection: true,
      firstPlace: t('prize.firstPlace'),
      secondPlace: t('prize.secondPlace'),
      thirdPlace: t('prize.thirdPlace'),
      lastPlace: t('prize.lastPlace'),
    },
  ];

  return (
    <div className={classes.cardsContainer}>
      {cardsInfo.map((cardInfo) => (
        <QuizDescriptionCard key={cardInfo.title} {...cardInfo} />
      ))}
    </div>
  );
};

export default QuizDescription;
