import { Link, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { makeStyles } from 'tss-react/mui';
import GroupsIcon from '@mui/icons-material/Groups';
import FacebookIcon from '@mui/icons-material/Facebook';
import { facebookGroupUrl, facebookUrl } from '../../common/paths';

const useStyles = makeStyles()(() => ({
  alignContact: {
    display: 'flex',
    gap: 16,
    marginTop: 8,
  },
  title: {
    marginBottom: 20,
  },
}));

const ContactData = () => {
  const { t } = useTranslation('contact', { keyPrefix: 'contacts' });
  const { classes } = useStyles();
  const contacts = [
    { Icon: EmailIcon, translationKey: 'email' },
    { Icon: CallIcon, translationKey: 'phone' },
    { Icon: FacebookIcon, translationKey: 'facebookPage', link: facebookUrl },
    { Icon: GroupsIcon, translationKey: 'facebookGroup', link: facebookGroupUrl },
  ];

  return (
    <div>
      <Typography variant="h4" textAlign="center" className={classes.title}>
        {t('title')}
      </Typography>
      {contacts.map(({ Icon, translationKey, link }) => (
        <div className={classes.alignContact} key={translationKey}>
          <Icon />
          {link ? (
            <Link href={link} target="_blank" underline="none" rel="noopener noreferrer">
              <Typography>{t(translationKey)}</Typography>
            </Link>
          ) : (
            <Typography>{t(translationKey)}</Typography>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactData;
