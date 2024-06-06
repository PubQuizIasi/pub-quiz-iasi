export interface FAQItem {
  question: string;
  answer: string;
}

export type FAQProps = {
  question: string;
  answer: string;
  expanded: boolean;
  onChange: (event: React.SyntheticEvent, isExpanded: boolean) => void;
};
