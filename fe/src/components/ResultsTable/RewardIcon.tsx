import React from 'react';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import clsx from 'clsx';
import { makeStyles } from 'tss-react/mui';
import { yellow, grey, orange } from '@mui/material/colors';
import { RewardIconProps } from '../../types/gameResults';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles()(() => ({
  rewardIcon: {
    position: 'absolute',
    top: '27%',
    right: '3%',
    width: '22px',
  },
  firstPlace: {
    color: yellow[700],
  },
  secondPlace: {
    color: grey[700],
  },
  thirdPlace: {
    color: orange[700],
  },
}));

const RewardIcon = ({ teamIndex, results, showLast = true }: RewardIconProps) => {
  const { classes } = useStyles();
  const { t } = useTranslation('gameResults', { keyPrefix: 'tooltip' });

  return (
    <>
      {teamIndex === 0 && (
        <EmojiEventsIcon
          titleAccess={t('first')}
          className={clsx(classes.rewardIcon, classes.firstPlace)}
        />
      )}
      {teamIndex === 1 && (
        <EmojiEventsIcon
          titleAccess={t('second')}
          className={clsx(classes.rewardIcon, classes.secondPlace)}
        />
      )}
      {teamIndex === 2 && (
        <EmojiEventsIcon
          titleAccess={t('third')}
          className={clsx(classes.rewardIcon, classes.thirdPlace)}
        />
      )}
      {showLast && results && teamIndex === results.length - 1 && (
        <LocalBarIcon titleAccess={t('last')} className={classes.rewardIcon} />
      )}
    </>
  );
};

export default RewardIcon;
