import { StatisticalItem } from "../StattisticalItem/StattisticalItem";
import { List } from "./StattisticalList.styled";

export const StatisticalList = ({ data }) => {
  return (
    <List>
      {/* {data.map((item) => ( */}
        <StatisticalItem />
      {/* ))} */}
    </List>
  );
};
