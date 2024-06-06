import { Theme, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import { paths } from '../../common';
import Button from '../Button/Button';
import LanguageSelector from '../LanguageSelector';
import ThemeSelector from '../ThemeSelector';
import MobileNavbar from './MobileNavbar';
import React, { useEffect, useRef, useState } from 'react';
import { logo } from '../../assets';
import { useIsLandingPage } from '../../hooks';
import clsx from 'clsx';

const useStyles = makeStyles()((theme: Theme) => ({
  header: {
    position: 'sticky',
    width: '100vw',
    top: 0,
    zIndex: 999,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbarAnimationIn: {
    '&::before': {
      content: "''",
      position: 'absolute',
      backgroundColor: theme.palette.primary.main,
      top: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      animation: 'backgroundIn 500ms linear',
    },
    '@keyframes backgroundIn': {
      '0%': {
        height: 0,
      },
      '100%': {
        height: '100%',
      },
    },
  },
  navbarAnimationOut: {
    '&::before': {
      content: "''",
      position: 'absolute',
      top: 0,
      height: 0,
      width: '100%',
      zIndex: -1,
      animation: 'backgroundOut 500ms linear',
      backgroundColor: theme.palette.primary.main,
    },
    '@keyframes backgroundOut': {
      '0%': {
        height: '100%',
      },
      '100%': {
        height: 0,
      },
    },
  },
  positionFixed: {
    position: 'fixed',
  },
  navbarContainer: {
    display: 'grid',
    gridTemplateColumns: 'min-content auto min-content',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
  },
  navbar: {
    display: 'flex',
  },
  logo: {
    height: '28px',
    alignSelf: 'center',
  },
  button: {
    color: theme.palette.primary.contrastText,
    boxShadow: 'none',
    position: 'relative',
    minWidth: 'unset',
    paddingBottom: 0,
    ':hover': {
      textDecoration: 'underline',
      textUnderlineOffset: '4px',
    },
  },
  userActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  showBackground: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const Navbar = () => {
  const { t } = useTranslation('home', { keyPrefix: 'navbar' });
  const isLandingPage = useIsLandingPage();
  const { classes } = useStyles();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down(1100));
  const ref = useRef<null | HTMLElement>(null);
  const [showBackground, setShowBackground] = useState<boolean>(!isLandingPage);

  const onScroll = () => {
    if (window.scrollY > 0) {
      ref.current?.classList.add(classes.navbarAnimationIn);
      ref.current?.classList.remove(classes.navbarAnimationOut);
    } else {
      ref.current?.classList.remove(classes.navbarAnimationIn);
      ref.current?.classList.add(classes.navbarAnimationOut);
    }
  };

  useEffect(() => {
    setShowBackground(!isLandingPage);
    window.addEventListener('scroll', onScroll);
  }, [isLandingPage]);

  if (isMobile) {
    return <MobileNavbar />;
  }

  return (
    <header
      className={clsx(
        {
          [classes.positionFixed]: isLandingPage,
          [classes.showBackground]: showBackground,
        },
        classes.header
      )}
      ref={ref}
    >
      <div className={classes.navbarContainer}>
        <Link to={paths.root} className={classes.logo}>
          <img className={classes.logo} src={logo} alt="logo" />
        </Link>
        <nav className={classes.navbar}>
          <Link to={paths.root}>
            <Button className={classes.button} variant="text">
              {t('about')}
            </Button>
          </Link>
          <Link to={paths.teamRegistration} target="_blank">
            <Button className={classes.button}>{t('teamRegistration')}</Button>
          </Link>
          <Link to={paths.gameResults}>
            <Button className={classes.button}>{t('gameResults')}</Button>
          </Link>
          <Link to={paths.corporateGames}>
            <Button className={classes.button}>{t('corporateGames')}</Button>
          </Link>
          <Link to={paths.faq}>
            <Button className={classes.button}>{t('faq')}</Button>
          </Link>
          <Link to={paths.contact}>
            <Button className={classes.button}>{t('contact')}</Button>
          </Link>
        </nav>
        <div className={classes.userActions}>
          <ThemeSelector />
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
