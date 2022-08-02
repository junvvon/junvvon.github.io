import styled from 'styled-components';

import { media } from 'styles/theme';

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  html,
  body {
    font-size: 16px;
  }

  h2 {
    font-size: 3rem;
    margin: 4rem 0 2rem;
  }

  h3 {
    font-size: 2rem;
    margin: 0 0 1rem;
  }

  h4 {
    font-size: 2rem;
    margin: 0 0 1rem;

    ${media.tablet} {
      font-size: 1.5rem;
    }
  }

  h5 {
    font-size: 1.3rem;
    margin: 0 0 0.5rem;
  }

  p {
    margin: 0 0 1rem;
    font-size: 1.1rem;
    line-height: 1.4;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.selection};
    }
  }

  ul {
    font-size: 1.1rem;
    list-style: none;
    margin: 0 0 1rem 0;
    padding: 0;

    li {
      padding: 0.2rem 0 0.2rem 1rem;
      position: relative;

      &:before {
        color: ${({ theme }) => theme.colors.primary};
        content: '•';
        display: inline-block;
        left: 0;
        position: absolute;
      }
    }
  }
`;
