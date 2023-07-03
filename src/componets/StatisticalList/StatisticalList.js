import { StatisticalItem } from "../StatisticalItem/StatisticalItem";
import { List } from "./StatisticalList.styled";

export const StatisticalList = ({ terms, statistic }) => {
  for (const key in terms) {
    if (statistic.hasOwnProperty(key)) {
      terms[key].stats = statistic[key];
    }
  }

  return (
    <List>
      {Object.keys(terms).map((key) => (
        <StatisticalItem
          key={key}
          title={terms[key].title}
          icon={terms[key].icon}
          stats={terms[key].stats}
        />
      ))}
    </List>
  );
};