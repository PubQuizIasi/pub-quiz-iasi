import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import ProtectedPath from './ProtectedPath';
import Footer from '../Footer';
import { makeStyles } from 'tss-react/mui';
import { Theme } from '@mui/material';
import { useIsLandingPage } from '../../hooks';
import clsx from 'clsx';

const useStyles = makeStyles()((theme: Theme) => ({
  content: {
    position: 'relative',
    flex: 1,
    padding: '0 20%',
    [theme.breakpoints.down('md')]: {
      padding: '0',
    },
  },
  removePadding: {
    padding: 0,
  },
  body: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const Layout = () => {
  const { classes } = useStyles();
  const isLandingPage = useIsLandingPage();

  return (
    <div className={classes.body}>
      <Navbar />
      <main className={clsx({ [classes.removePadding]: isLandingPage }, classes.content)}>
        <ProtectedPath>
          <Outlet />
        </ProtectedPath>
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
