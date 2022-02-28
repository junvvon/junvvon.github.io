import React from 'react';
import { MetaProps } from 'types/layout';

export interface LayoutProps {
  children: React.ReactNode;
  customMeta?: MetaProps;
}
