import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import clsx from 'clsx';
import { RoundFormatsCardProps } from '../../types/about';

const useStyles = makeStyles()(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  image: {
    width: '50px',
    alignSelf: 'start',
  },
  imageWhite: {
    filter: 'invert(1)',
  },
  title: {
    marginBottom: '10px',
  },
}));

const RoundsFormatCard = ({ img, title, description }: RoundFormatsCardProps) => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <img className={clsx(classes.image)} src={img} alt="card-image" />
      <div>
        <Typography className={classes.title} variant="h5">
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </div>
    </div>
  );
};

export default RoundsFormatCard;
