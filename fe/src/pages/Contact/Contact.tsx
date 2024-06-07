import { Theme } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import ContactData from './ContactData';
import ContactForm from './ContactForm';

const useStyles = makeStyles()((theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '130px 0',
    gap: '20px',
    [theme.breakpoints.down(1100)]: {
      margin: '100px 30px',
      flexDirection: 'column',
      gap: '100px',
      alignItems: 'center',
    },
  },
}));

export const Contact = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <ContactData />
      <ContactForm />
    </div>
  );
};
