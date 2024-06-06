import React from 'react';
import { makeStyles } from 'tss-react/mui';
import HeroCardInfo from './HeroCardInfo';
import QuizDescription from './QuizDescription';
import { Divider } from '@mui/material';
import RoundsFormat from './RoundsFormat';

const useStyles = makeStyles()(() => ({
  container: {
    position: 'relative',
  },
  separator: {
    display: 'block',
    height: '1px',
    border: '0',
    borderTop: '1px solid #ccc',
    margin: '50px 10%',
    padding: '0',
    width: '80%',
    justifyContent: 'center',
  },
  heroCard: {
    height: '100vh',
    filter: 'brightness(60%)',
  },
}));

export const About = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <HeroCardInfo />
      <QuizDescription />
      <div>
        <Divider aria-hidden="true" className={classes.separator} />
        <RoundsFormat />
      </div>
    </div>
  );
};

export default About;
