import styled, { css } from 'styled-components';
import { media } from 'styles/theme';

export const Block = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.bgDivider};
  border-radius: 15px;
`;

export const Header = styled.div<{ hasChildren: boolean }>`
  display: flex;
  justify-content: space-between;

  ${(props) =>
    props.hasChildren &&
    css`
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.bgSubDivider};
    `}

  ${media.mobile} {
    flex-direction: column;
  }
`;

export const Title = styled.h3`
  margin: 0px;
`;

export const Extratitle = styled.div`
  display: flex;

  ${media.mobile} {
    flex-direction: column;
  }
`;

export const ExtratitleContent = styled.p`
  margin: 0px;
  border-left: 1px solid ${({ theme }) => theme.colors.bgSubDivider};
  margin-left: 10px;
  padding-left: 10px;

  ${media.mobile} {
    border-left: none;
    border-top: 1px solid ${({ theme }) => theme.colors.bgSubDivider};
    margin-top: 10px;
    margin-left: 0px;
    padding-top: 10px;
    padding-left: 0px;
  }
`;

export const SubTitle = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.bgSubDivider};
  margin-bottom: 10px;
  padding-bottom: 10px;
`;

export const SubTitleContent = styled.p`
  margin: 0px;
  strong {
    border-right: 1px solid ${({ theme }) => theme.colors.bgSubDivider};
    margin-right: 10px;
    padding-right: 10px;
  }
`;

export const ChildrenContent = styled.div``;
