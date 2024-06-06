import { Drawer, List, ListItemButton, ListItemText, Theme } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { paths } from '../../common';
import { makeStyles } from 'tss-react/mui';
import LanguageSelector from '../LanguageSelector';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeSelector from '../ThemeSelector';
import { logo } from '../../assets';

const useStyles = makeStyles()((theme: Theme) => ({
  header: {
    backgroundColor: theme.palette.primary.main,
    alignItems: 'center',
    height: 100,
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: '10px',
  },
  navbar: {
    justifySelf: 'center',
  },
  logo: {
    height: '33px',
    marginLeft: '3px',
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
    flexDirection: 'column',
  },
  selectorsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '25px',
  },
  drawerContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));

const Navbar = () => {
  const { t } = useTranslation('home', { keyPrefix: 'navbar' });
  const { classes } = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <header className={classes.header}>
      <Link to={paths.root} className={classes.logo}>
        <img className={classes.logo} src={logo} alt="logo" />
      </Link>
      <MenuIcon onClick={handleDrawerToggle} className={classes.button}></MenuIcon>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <List className={classes.drawerContainer}>
          <div>
            <ListItemButton component={Link} to={paths.root} onClick={handleDrawerToggle}>
              <ListItemText primary={t('about')} />
            </ListItemButton>
            <ListItemButton
              component={Link}
              to={paths.teamRegistration}
              onClick={handleDrawerToggle}
            >
              <ListItemText primary={t('teamRegistration')} />
            </ListItemButton>
            <ListItemButton component={Link} to={paths.gameResults} onClick={handleDrawerToggle}>
              <ListItemText primary={t('gameResults')} />
            </ListItemButton>
            <ListItemButton component={Link} to={paths.corporateGames} onClick={handleDrawerToggle}>
              <ListItemText primary={t('corporateGames')} />
            </ListItemButton>
            <ListItemButton component={Link} to={paths.faq} onClick={handleDrawerToggle}>
              <ListItemText primary={t('faq')} />
            </ListItemButton>
            <ListItemButton component={Link} to={paths.contact} onClick={handleDrawerToggle}>
              <ListItemText primary={t('contact')} />
            </ListItemButton>
          </div>
          <div className={classes.selectorsContainer}>
            <ThemeSelector />
            <LanguageSelector />
          </div>
        </List>
      </Drawer>
    </header>
  );
};

export default Navbar;
