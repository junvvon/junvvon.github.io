import { ReactNode } from 'react';

export interface ScrollableTitleProps {
  back: string;
  children: ReactNode;
  front: string;
  scroll: number;
  titleId: string;
}
