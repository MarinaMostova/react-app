import { StatisticalItem } from "../StatisticalItem/StatisticalItem";
import { List } from "./StatisticalList.styled";

export const StatisticalList = ({ terms, statistic, increase }) => {
  console.log(increase);
  return (
    <List>
      {Object.keys(terms).map((key) => (
        <StatisticalItem
          key={key}
          title={terms[key].title}
          icon={terms[key].icon}
          stats={statistic[key]}
          increase={increase[key]}
        />
      ))}
    </List>
  );
};
