import React from 'react';
import { Link, Theme, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import clsx from 'clsx';
import { useAppSelector } from '../../store/hooks';
import { grey, orange, yellow } from '@mui/material/colors';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { QuizDescriptionCardProps } from '../../types/about';

const useStyles = makeStyles()((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 20,
    boxShadow: `0 4px 17px 5px rgba(0, 0, 0, 0.6)`,
    border: `3px solid ${theme.palette.common.black}`,
    margin: 30,
    width: 400,
    height: 600,
  },
  image: {
    width: '100px',
    margin: '70px 0 20px 0',
  },
  imageWhite: {
    filter: 'invert(1)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
    padding: '0 40px',
  },
  description: {
    textAlign: 'center',
    padding: '0 40px',
  },
  iconSize: {
    width: '50px',
  },
  joker: {
    color: yellow[700],
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
  lastPlace: {
    color: theme.palette.text.primary,
  },
  prizes: {
    display: 'flex',
    flexDirection: 'column',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const QuizDescriptionCard = ({
  img,
  title,
  description,
  address,
  isPrizeSection,
  firstPlace,
  secondPlace,
  thirdPlace,
  lastPlace,
}: QuizDescriptionCardProps) => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <img className={classes.image} src={img} alt="card-image" />
      <Typography variant="h4" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="body1" className={classes.description}>
        {description}
      </Typography>
      <Link
        href="https://maps.app.goo.gl/T3syHBkiqhwK3GB16"
        target="_blank"
        underline="none"
        rel="noopener noreferrer"
      >
        <Typography variant="body1" className={classes.description}>
          {address}
        </Typography>
      </Link>
      {isPrizeSection && (
        <div className={classes.prizes}>
          <Typography variant="body1" className={classes.iconContainer}>
            <EmojiEventsIcon className={clsx(classes.iconSize, classes.firstPlace)} />
            {firstPlace}
          </Typography>
          <Typography variant="body1" className={classes.iconContainer}>
            <EmojiEventsIcon className={clsx(classes.iconSize, classes.secondPlace)} />
            {secondPlace}
          </Typography>
          <Typography variant="body1" className={classes.iconContainer}>
            <EmojiEventsIcon className={clsx(classes.iconSize, classes.thirdPlace)} />
            {thirdPlace}
          </Typography>
          <Typography variant="body1" className={classes.iconContainer}>
            <LocalBarIcon className={clsx(classes.iconSize, classes.lastPlace)} />
            {lastPlace}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default QuizDescriptionCard;
