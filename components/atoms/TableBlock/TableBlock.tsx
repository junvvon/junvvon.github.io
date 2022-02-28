import React from 'react';
import { StyledTable } from './TableBlock.style';

const TableBlock = ({ ...rest }) => {
  return <StyledTable {...rest} />;
};

export default TableBlock;
