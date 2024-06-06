import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Theme,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from 'tss-react/mui';
import { FAQProps } from '../../types/faq';

const useStyles = makeStyles()((theme: Theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'repeat(5, auto)',
    width: '60%',
    [theme.breakpoints.down(1100)]: {
      width: '80%',
    },
  },
  answer: {
    '&::before': {
      content: '"\\00a0\\00a0\\00a0\\00a0"',
    },
  },
  question: {
    padding: '12px',
  },
}));

const FAQItem = ({ question, answer, expanded, onChange }: FAQProps) => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Accordion component={Paper} expanded={expanded} onChange={onChange}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1" className={classes.question}>
            {question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.answer}>{answer}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FAQItem;
