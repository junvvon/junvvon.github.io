import { ReactNode } from 'react';

export interface ProjectProps {
  children?: ReactNode;
  dateFrom: string;
  dateTo?: string;
  description: ReactNode;
  detailLink?: string;
  githubLink?: string;
  other?: boolean;
  productLink?: string;
  skill?: string;
  title: string;
}
