import { ReactNode } from 'react';

export interface ProjectProps {
  children?: ReactNode;
  description: ReactNode;
  githubLink?: string;
  other?: boolean;
  skill?: string;
  timeFrom: string;
  timeTo?: string;
  title: string;
}
