import styled from 'styled-components';

export const StatisticsSection = styled.section`
margin: 0 auto 64px;
display: flex;
flex-direction: column;
align-items: center;

width: 350px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
border-radius: 8px;
background-color: #fff; 
color: #102445;
`;

export const Title = styled.h2`
padding-top: 32px;
padding-bottom: 32px;
font-weight: 700;
text-transform: uppercase;
`;

export const Stats = styled.ul`
width: 100%;
display: flex;
background-color: #6779d5;
border-radius: 0 0 8px 8px;
`;

export const Stat = styled.li`
padding: 16px 20px;
width: calc(100% / 5);
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid #566bd8;
font-size: 12px;
color: #fff;
`;

export const StatLabel = styled.span`
margin-bottom: 4px;

`;

export const StatPercentage = styled.span`
font-weight: 700;

`;