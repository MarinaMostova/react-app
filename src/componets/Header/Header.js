import {
  HeaderContainer,
  Title,
  WarStatistic,
  Text,
  Date,
} from "./Header.styled";

export const Header = ({ children }) => {
  return (
    <HeaderContainer>
      <Title>Загальні бойові втрати російського окупанта</Title>
      <Text>
        за період з <Date>2022-02-24</Date> по {children}{" "}
      </Text>
      <WarStatistic>{}-й день війни</WarStatistic>
    </HeaderContainer>
  );
};
