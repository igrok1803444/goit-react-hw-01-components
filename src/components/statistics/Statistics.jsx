import { StatisticsSection, TypesList } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <h2 className="title">{title}</h2>}

      <TypesList>
        {stats.map(({ percentage, label, id }) => {
          return (
            <li className="item" key={id}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          );
        })}
      </TypesList>
    </StatisticsSection>
  );
};
