import {
  Item,
  Icon,
  Wrapper,
  Statistic,
  Title,
} from "./StattisticalItem.styled";

export const StatisticalItem = ({ title, icon, stats }) => {
  return (
    <Item>
      <Icon src={icon} />
      <Wrapper>
        <Title>{title} </Title>
        <Statistic>{stats} </Statistic>
      </Wrapper>
    </Item>
  );
};
