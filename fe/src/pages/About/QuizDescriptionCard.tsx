import React from 'react';
import { QuizDescriptionCardProps } from '../../types/about';
import { Link, Theme, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import clsx from 'clsx';
import { grey, orange, yellow } from '@mui/material/colors';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const useStyles = makeStyles()((theme: Theme) => ({
  container: {
    position: 'relative',
    color: theme.palette.primary.contrastText,
    maxHeight: '500px',
    maxWidth: '500px',
  },
  img: {
    maxWidth: '100%',
    borderRadius: '10%',
    filter: 'brightness(30%)',
    boxShadow: `0 4px 17px 5px rgba(0, 0, 0, 0.6)`,
    border: `2px solid ${theme.palette.common.black}`,
  },
  content: {
    position: 'absolute',
    top: '0%',
    left: '50%',
    height: '100%',
    width: '100%',
    padding: '0 40px',
    transform: 'translateX(-50%)',
    textAlign: 'center',
  },
  description: {
    color: theme.palette.primary.contrastText,
    textDecoration: 'underline',
  },
  title: {
    margin: '30px 0 70px 0',
    [theme.breakpoints.down(1300)]: {
      marginBottom: '40px',
    },
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  prizes: {
    display: 'grid',
    gridTemplateRows: 'repeat(4, 1fr)',
    gridTemplateColumns: 'repeat(2, max-content)',
    alignItems: 'center',
    justifyContent: 'center',
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
    filter: 'invert(1)',
  },
  iconSize: {
    width: '50px',
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
      <img className={classes.img} src={img} />
      <div className={classes.content}>
        <Typography className={classes.title} variant="h4">
          {title}
        </Typography>
        <div>
          <Typography variant="h6">{description}</Typography>
          {address && (
            <Link
              href="https://maps.app.goo.gl/T3syHBkiqhwK3GB16"
              target="_blank"
              underline="none"
              rel="noopener noreferrer"
            >
              <Typography variant="h6" className={classes.description}>
                {address}
              </Typography>
            </Link>
          )}
          {isPrizeSection && (
            <div className={classes.prizes}>
              <EmojiEventsIcon className={clsx(classes.iconSize, classes.firstPlace)} />
              <Typography variant="h6" className={classes.iconContainer}>
                {firstPlace}
              </Typography>
              <EmojiEventsIcon className={clsx(classes.iconSize, classes.secondPlace)} />
              <Typography variant="h6" className={classes.iconContainer}>
                {secondPlace}
              </Typography>
              <EmojiEventsIcon className={clsx(classes.iconSize, classes.thirdPlace)} />
              <Typography variant="h6" className={classes.iconContainer}>
                {thirdPlace}
              </Typography>
              <LocalBarIcon className={clsx(classes.iconSize, classes.lastPlace)} />
              <Typography variant="h6" className={classes.iconContainer}>
                {lastPlace}
              </Typography>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizDescriptionCard;
