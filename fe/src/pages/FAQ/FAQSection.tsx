import React from 'react';
import { useTranslation } from 'react-i18next';
import FAQItem from './FAQItem';

const FAQSection = () => {
  const { t } = useTranslation('faq');
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <FAQItem
        question={t('first.question')}
        answer={t('first.answer')}
        expanded={expanded === 'first'}
        onChange={handleChange('first')}
      />
      <FAQItem
        question={t('second.question')}
        answer={t('second.answer')}
        expanded={expanded === 'second'}
        onChange={handleChange('second')}
      />
      <FAQItem
        question={t('third.question')}
        answer={t('third.answer')}
        expanded={expanded === 'third'}
        onChange={handleChange('third')}
      />
      <FAQItem
        question={t('fourth.question')}
        answer={t('fourth.answer')}
        expanded={expanded === 'fourth'}
        onChange={handleChange('fourth')}
      />
      <FAQItem
        question={t('fifth.question')}
        answer={t('fifth.answer')}
        expanded={expanded === 'fifth'}
        onChange={handleChange('fifth')}
      />
    </>
  );
};

export default FAQSection;
