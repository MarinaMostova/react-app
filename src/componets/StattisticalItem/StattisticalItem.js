import { Item, Icon, Statistic, Title } from "./StattisticalItem.styled";

export const StatisticalItem = ({ title, icon }) => {
  return (
    <Item>
      <Icon src={icon} />
      <Title>{title} </Title>
      <Statistic>1000000 </Statistic>
    </Item>
  );
};
