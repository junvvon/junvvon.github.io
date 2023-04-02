import React, { ReactNode } from "react";
import styled from "styled-components";

const Paragraph = styled.div`
  p {
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.4;
  }
`;

const BigParagraph = ({ children }: { children: ReactNode }) => (
  <Paragraph>{children}</Paragraph>
);

export default BigParagraph;
