import styled from 'styled-components';

export const List = styled.ul`
  margin: 0 auto 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 12px;
  align-items: center;
  width: 200px;
  margin-bottom: 16px;
  padding: 16px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 4px;
  background-color: #fff;
  color: #102445;
`;
