import React from 'react';
import { StyledTable } from './TableBlock.style';

const TableBlock: React.FC = ({ ...rest }) => {
  return <StyledTable {...rest} />;
};

export default TableBlock;
