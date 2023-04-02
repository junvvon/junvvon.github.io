import React from "react";
import styled from "styled-components";

import { format, parseISO } from "date-fns";
import { ko } from "date-fns/locale";

import { Github, Linkedin, Mail } from "./Icons";

import { media } from "../styles/theme";

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.tablet} {
    flex-direction: column;
  }
`;

const StyledTitle = styled.h1`
  font-size: 5rem;
  line-height: 1.1;
  margin: 0.67em 0;
  word-break: keep-all;

  ${media.tablet} {
    font-size: 3rem;
  }
`;

const Icons = styled.div`
  display: flex;
`;

const Icon = styled.div`
  padding: 10px;
`;

const Title = ({
  date,
  githubLink,
  linkedinLink,
  mailLink,
  title,
}: {
  date?: string;
  githubLink?: string;
  linkedinLink?: string;
  mailLink?: string;
  title: string;
}) => (
  <>
    <Header>
      <StyledTitle>{title}</StyledTitle>
      <Icons>
        {githubLink && (
          <Icon>
            <a target="_blank" aria-label="Go to Github link" href={githubLink}>
              <Github />
            </a>
          </Icon>
        )}
        {linkedinLink && (
          <Icon>
            <a
              target="_blank"
              aria-label="Go to Linkedin link"
              href={linkedinLink}
            >
              <Linkedin />
            </a>
          </Icon>
        )}
        {mailLink && (
          <Icon>
            <a aria-label={mailLink} href={mailLink}>
              <Mail />
            </a>
          </Icon>
        )}
      </Icons>
    </Header>
    {date && (
      <p>{format(parseISO(String(date)), "MMMM do, yyyy", { locale: ko })}</p>
    )}
  </>
);

export default Title;
