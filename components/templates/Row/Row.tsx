import { ReactNode } from 'react';

import Period from 'components/atoms/Period';

import { RowRight, Wrapper, RowLeft } from './Row.style';

const Row = ({
  additional,
  children,
  companyName,
  role,
  dateFrom,
  dateTo,
}: {
  additional?: JSX.Element;
  children: ReactNode;
  companyName: string;
  role: string;
  dateFrom: string;
  dateTo?: string;
}) => (
  <Wrapper>
    <RowLeft>
      <h3>{companyName}</h3>
      <span>{role}</span>
      <Period dateFrom={dateFrom} dateTo={dateTo} />
      {additional}
    </RowLeft>
    <RowRight>{children}</RowRight>
  </Wrapper>
);

export default Row;
