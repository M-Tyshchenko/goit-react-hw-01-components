import {
  StatisticsSection,
  Title,
  Stats,
  Stat,
  StatLabel,
  StatPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
    {title && (
      <Title>{title}</Title>)}

      <Stats>
        {stats.map(stat => (
          <Stat key={stat.id}>
            <StatLabel>{stat.label}</StatLabel>
            <StatPercentage>
              {stat.percentage}%
            </StatPercentage>
          </Stat>
        ))}
      </Stats>
    </StatisticsSection>
  );
};
