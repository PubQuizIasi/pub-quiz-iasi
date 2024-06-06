import React from 'react';
import { Button as MuiButton, Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import clsx from 'clsx';
import { LoadingButton } from '@mui/lab';
import { ButtonProps } from '../../types/common';

const useStyles = makeStyles()(({ palette }: Theme) => ({
  button: {
    borderRadius: '24px',
    padding: '8px 30px',
    borderWidth: '2px',
    borderColor: palette.primary.main,
    '&:hover': {
      borderWidth: '2px',
    },
  },
}));

const Button = ({ loading, children, variant, className, ...props }: ButtonProps) => {
  const { classes } = useStyles();

  if (loading === undefined) {
    return (
      <MuiButton
        {...props}
        variant={variant}
        className={clsx({ [classes.button]: variant && variant !== 'text' }, className)}
      >
        {children}
      </MuiButton>
    );
  }

  return (
    <LoadingButton
      {...props}
      variant={variant}
      className={clsx({ [classes.button]: variant !== 'text' }, className)}
      loading={loading}
    >
      {children}
    </LoadingButton>
  );
};

export default Button;
