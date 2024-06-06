import { Theme, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from 'tss-react/mui';
import FacebookIcon from '@mui/icons-material/Facebook';
import { facebookUrl } from '../../common/paths';

const useStyles = makeStyles()((theme: Theme) => ({
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '60px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  facebookIcon: {
    marginLeft: '24px',
    fontSize: 0,
    '&:visited': {
      color: 'inherit',
    },
  },
}));

const Footer = () => {
  const { classes } = useStyles();
  const { t } = useTranslation('home');
  return (
    <footer className={classes.footer}>
      <Typography>{`${t('footer')} ${new Date().getFullYear()}`}</Typography>
      <a href={facebookUrl} target="_blank" rel="noreferrer" className={classes.facebookIcon}>
        <FacebookIcon />
      </a>
    </footer>
  );
};

export default Footer;
