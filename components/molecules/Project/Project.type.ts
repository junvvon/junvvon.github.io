import { ReactNode } from 'react';

export interface ProjectProps {
  children?: ReactNode;
  dateFrom: string;
  dateTo?: string;
  description: ReactNode;
  detailLink?: string;
  githubLink?: string;
  other?: boolean;
  skill?: string;
  title: string;
}
