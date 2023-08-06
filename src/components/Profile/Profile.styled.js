import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto 64px;
  width: 250px;
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 8px;
`;

export const UserDescr = styled.div`
  padding: 32px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 100px;
  border-radius: 50%;
  margin-bottom: 16px;
`;

export const UserName = styled.p`
  margin-bottom: 8px;
  font-size: 24px;
  font-weight: 500;
  color: #102445;
`;

export const Description = styled.p`
  margin-bottom: 8px;
  font-size: 16px;
  color: #d4d5d8;
`;

export const Stats = styled.ul`
  display: flex;
  background-color: #ebf2fc;
  border-radius: 0 0 8px 8px;
`;

export const Stat = styled.li`
  padding: 16px 20px;
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #daeaf0;
  font-size: 12px;
`;

export const StatLabel = styled.span`
  margin-bottom: 4px;
  color: #a3acc5;
`;

export const StatQuantity = styled.span`
  font-weight: 700;
  color: #102445;
`;
