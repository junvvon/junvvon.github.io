import { ReactNode } from 'react';

export interface SVGProps {
  children: ReactNode;
  fill?: string;
  height: number;
  viewBox?: string;
  width: number;
}
