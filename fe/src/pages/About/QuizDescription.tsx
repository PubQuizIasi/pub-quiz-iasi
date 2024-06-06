import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { useTranslation } from 'react-i18next';
import { Theme } from '@mui/material';
import QuizDescriptionCard from './QuizDescriptionCard';
import { play, price, clock, prize, location } from '../../assets';

const useStyles = makeStyles()((theme: Theme) => ({
  cardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    padding: '0 20%',
    margin: '100px 0',
    [theme.breakpoints.down(1100)]: {
      gridTemplateRows: 'repeat(6, 1fr)',
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
}));

const QuizDescription = () => {
  const { classes } = useStyles();
  const { t } = useTranslation('about');

  const cardsInfo = [
    { img: play, title: t('play.title'), description: t('play.description') },
    { img: price, title: t('price.title'), description: t('price.description') },
    {
      img: location,
      title: t('location.title'),
      description: t('location.description'),
      address: t('location.address'),
    },
    {
      img: clock,
      title: t('clock.title'),
      description: t('clock.description'),
    },
    {
      img: prize,
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
        <QuizDescriptionCard {...cardInfo} key={cardInfo.title} />
      ))}
    </div>
  );
};

export default QuizDescription;
