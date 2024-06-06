import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { useTranslation } from 'react-i18next';
import { TextField, Theme, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectEmail, selectLoading, selectMessage, selectName } from './selectors';
import { contactTrigger, updateEmail, updateMessage, updateName } from './contactSlice';
import Button from '../../components/Button/Button';

const useStyles = makeStyles()((theme: Theme) => ({
  form: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '40%',
    gap: 20,
    [theme.breakpoints.down(1100)]: {
      width: '80%',
    },
  },
  submitButton: {
    width: 'min-content',
    alignSelf: 'center',
  },
}));

const ContactForm = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading);
  const name = useAppSelector(selectName);
  const email = useAppSelector(selectEmail);
  const message = useAppSelector(selectMessage);
  const { t } = useTranslation('contact', { keyPrefix: 'form' });
  const { classes } = useStyles();

  const handleSubmit = () => {
    dispatch(contactTrigger({ name, email, message }));
  };

  return (
    <div className={classes.form}>
      <Typography variant="h4" textAlign="center">
        {t('title')}
      </Typography>
      <Typography variant="body1" textAlign="center">
        {t('subtitle')}
      </Typography>
      <TextField
        required
        label={t('name')}
        type="text"
        value={name}
        onChange={(e) => dispatch(updateName(e.target.value))}
      />
      <TextField
        required
        label={t('email')}
        type="text"
        value={email}
        onChange={(e) => dispatch(updateEmail(e.target.value))}
      />
      <TextField
        placeholder={t('message')}
        multiline
        rows={5}
        onChange={(e) => dispatch(updateMessage(e.target.value))}
      />
      <Button
        className={classes.submitButton}
        variant="contained"
        loading={loading}
        onClick={handleSubmit}
      >
        {t('submit')}
      </Button>
    </div>
  );
};

export default ContactForm;
