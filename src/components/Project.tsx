import React from "react";

import { Github } from "./Icons";
import Period from "./Period";

import { ReactNode } from "react";

import styled, { css } from "styled-components";

export const Block = styled.div<{ other: boolean }>`
  padding: 1.5rem 0;

  ${(props) =>
    props.other &&
    css`
      border-bottom: 1px solid ${({ theme }) => theme.colors.bgDivider};
      padding: 3rem 0;
    `}
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding-bottom: 10px;
`;

export const Title = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

interface ProjectProps {
  children?: ReactNode;
  description: ReactNode;
  githubLink?: string;
  other?: boolean;
  skill?: string;
  dateFrom: string;
  dateTo?: string;
  title: string;
}

const Project = ({
  children,
  description,
  githubLink,
  other = false,
  skill,
  dateFrom,
  dateTo,
  title,
}: ProjectProps) => (
  <Block other={other}>
    <Header>
      <Title>
        <h4>{title}</h4>
        {githubLink && (
          <a target="_blank" aria-label="Go to Github link" href={githubLink}>
            <Github />
          </a>
        )}
      </Title>
      <Period dateFrom={dateFrom} dateTo={dateTo} />
    </Header>

    <h5>Description</h5>
    {description}
    <h5>What did I Do</h5>
    <div>{children}</div>
    {skill && (
      <>
        <h5>Tech Stack</h5>
        {skill}
      </>
    )}
  </Block>
);

export default Project;
