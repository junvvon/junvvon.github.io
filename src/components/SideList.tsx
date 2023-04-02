import React from "react";

import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 10px;
`;

export const Title = styled.h3`
  margin-bottom: 1px;
`;

export const List = styled.ul`
  margin: 2px 0px;
  padding-left: 5px;
  white-space: nowrap;
`;

interface SideListProps {
  title: string;
  list: string[];
}

const SideList = ({ title, list }: SideListProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <List>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </List>
    </Wrapper>
  );
};

export default SideList;
