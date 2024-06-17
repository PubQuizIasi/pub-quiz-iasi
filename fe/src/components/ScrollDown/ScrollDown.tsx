import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from 'tss-react/mui';
import Button from '../Button/Button';

const useStyles = makeStyles()((theme) => ({
  button: {
    color: theme.palette.primary.contrastText,
    height: 100,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 200,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  scrollIcon: {
    borderLeft: '2px solid #fff',
    borderBottom: '2px solid #fff',
    width: 24,
    height: 24,
    transform: 'rotateZ(-45deg)',
    position: 'absolute',
    top: 0,
    animation: 'bird 1.5s infinite',

    '@keyframes bird': {
      '0%': {
        transform: 'rotateY(0) rotateZ(-45deg) translate(0, 0)',
        opacity: 0,
      },
      '50%': {
        opacity: 1,
      },
      '100%': {
        transform: 'rotateY(720deg) rotateZ(-45deg) translate(-20px, 20px)',
        opacity: 0,
      },
    },
  },
}));

const ScrollDown = () => {
  const { t } = useTranslation('about');
  const { classes } = useStyles();

  const scrollDown = () => {
    const pageHeight = window.innerHeight;
    const headerHeight = document.getElementsByTagName('header')[0].offsetHeight;
    window.scrollTo({ top: pageHeight - headerHeight });
  };

  return (
    <Button variant="text" className={classes.button} onClick={scrollDown}>
      <div className={classes.scrollIcon} />
      {t('heroCardInfo.findMore')}
    </Button>
  );
};

export default ScrollDown;
