import { ReactNode } from 'react';

export type QuizDescriptionCardProps = {
  img: string;
  title: string;
  description?: string | ReactNode;
  address?: string;
  isPrizeSection?: boolean;
  firstPlace?: string;
  secondPlace?: string;
  thirdPlace?: string;
  lastPlace?: string;
};

export type RoundFormatsCardProps = {
  img: string;
  title: string;
  description: string;
};
