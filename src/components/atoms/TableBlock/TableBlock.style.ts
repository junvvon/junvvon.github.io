import styled from 'styled-components';

export const StyledTable = styled.table`
  display: block;
  max-width: 100%;
  overflow: auto;
  width: 100%;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  border-collapse: collapse;
  border-spacing: 0;
  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
    tr {
      display: table-row;
      vertical-align: inherit;
      border-color: inherit;
      th {
        display: table-cell;
        vertical-align: inherit;
        font-weight: bold;
        text-align: -internal-center;
        border: 1px solid ${({ theme }) => theme.colors.tableBorder};
        padding: 6px 13px;
        font-weight: 600;
        line-height: 1.5;
      }
    }
  }
  tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
    tr {
      display: table-row;
      vertical-align: inherit;
      border-color: inherit;
      background-color: white;
      border-top: 1px solid ${({ theme }) => theme.colors.tableBorder};
      &:nth-child(even) {
        background-color: ${({ theme }) => theme.colors.tableBg};
      }
      td {
        display: table-cell;
        vertical-align: inherit;
        border: 1px solid ${({ theme }) => theme.colors.tableBorder};
        padding: 6px 13px;
        line-height: 1.5;
      }
    }
  }
`;
