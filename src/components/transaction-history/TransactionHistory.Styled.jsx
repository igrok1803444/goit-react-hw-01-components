import styled from 'styled-components';

export const Table = styled.table`
  width: 400px;

  margin: 0 auto;

  border-spacing: unset;
`;
export const TableHeader = styled.thead`
  background-color: blue;
  color: white;
`;
export const TableRow = styled.tr`
  background-color: white;

  &:hover {
    background-color: #eee;
  }
`;
export const TableData = styled.td`
  padding: 8px;

  border-bottom: 1px solid black;

  text-aling: center;
`;
