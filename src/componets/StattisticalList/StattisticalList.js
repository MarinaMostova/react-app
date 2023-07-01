import { StatisticalItem } from "../StattisticalItem/StattisticalItem";
import { List } from "./StattisticalList.styled";

export const StatisticalList = ({ terms, statistic }) => {
  console.log(terms);

  return (
    <List>
      {Object.keys(terms).map((key) => (
        <StatisticalItem
          key={key}
          title={terms[key].title}
          icon={terms[key].icon}
        />
      ))}
    </List>
  );
};
