import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Trans, useTranslation } from 'react-i18next';
import { Link, Theme } from '@mui/material';
import { teamRegistration, clock, location, participationFee, play, prizes } from '../../assets';
import QuizDescriptionCard from './QuizDescriptionCard';
import { facebookUrl } from '../../common/paths';

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
      gridTemplateRows: 'repeat(6, 1fr)',
      gridTemplateColumns: 'repeat(1, 1fr)',
      padding: '0 5%',
    },
  },
  linkDescription: {
    color: theme.palette.primary.contrastText,
    textDecoration: 'underline',
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
      img: teamRegistration,
      title: t('teamRegistration.title'),
      description: (
        <Trans
          t={t}
          i18nKey={'teamRegistration.description'}
          components={{
            PhoneLink: (
              <Link
                underline="none"
                // color={'primary.contrastText'}
                href={'tel:0770 208 804'}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.linkDescription}
              ></Link>
            ),
            FacebookLink: (
              <Link
                underline="none"
                color={'primary.contrastText'}
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.linkDescription}
              ></Link>
            ),
          }}
        />
      ),
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
