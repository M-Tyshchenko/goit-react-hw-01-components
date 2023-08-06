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
    <StatisticsSection className="statistics">
      <Title className="title">{title}</Title>

      <Stats className="stat-list">
        {stats.map(stat => (
          <Stat key={stat.id} className="item">
            <StatLabel className="label">{stat.label}</StatLabel>
            <StatPercentage className="percentage">
              {stat.percentage}%
            </StatPercentage>
          </Stat>
        ))}
      </Stats>
    </StatisticsSection>
  );
};
