import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  width: 500px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 4px;
  background-color: #fff;
  color: #8fa3ad;
  font-size: 12px;
`;

export const TableHead = styled.thead`
  background-color: #59d0fe;
  color: #fff;
  text-transform: uppercase;
`;

export const TableHeadCell = styled.th`
  padding: 12px;
`;

export const TableRow = styled.tr`
  text-align: center;
  background-color: #e7f4f9;
`;

export const TableCell = styled.td`
  padding: 12px;
  text-transform: capitalize;
`;
