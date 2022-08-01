import { ReactNode } from 'react';

import Period from 'components/atoms/Period';

import { RowRight, Wrapper, RowLeft } from './Row.style';

const Row = ({
  additional,
  children,
  companyName,
  role,
  timeFrom,
  timeTo,
}: {
  additional?: JSX.Element;
  children: ReactNode;
  companyName: string;
  role: string;
  timeFrom: string;
  timeTo?: string;
}) => (
  <Wrapper>
    <RowLeft>
      <h3>{companyName}</h3>
      <span>{role}</span>
      <Period timeFrom={timeFrom} timeTo={timeTo} />
      {additional}
    </RowLeft>
    <RowRight>{children}</RowRight>
  </Wrapper>
);

export default Row;
