import { ReactNode } from 'react';

export interface HistoryBlockProps {
  children?: ReactNode;
  companyName?: string;
  projectType?: 'company' | 'contest' | 'private' | 'school';
  skill?: string;
  subTitle: string;
  title: string;
}
