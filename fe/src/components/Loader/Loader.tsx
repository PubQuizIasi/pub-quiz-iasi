import { CircularProgress, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { LoaderProps } from '../../types/common';

const useStyles = makeStyles()(() => ({
  loaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

const Loader = ({ children, loading, loadingMessage }: LoaderProps) => {
  const { classes } = useStyles();

  if (loading) {
    return (
      <div className={classes.loaderContainer}>
        <CircularProgress size={60} />
        {loadingMessage && <Typography>{loadingMessage}</Typography>}
      </div>
    );
  }
  return <>{children}</>;
};

export default Loader;
