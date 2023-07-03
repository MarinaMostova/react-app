import {
  HeaderContainer,
  Title,
  WarStatistic,
  Text,
  Date,
  Wrap,
  Subtitle,
} from "./Header.styled";

export const Header = ({ children, day }) => {
  return (
    <HeaderContainer>
      <Subtitle>Генеральний штаб ЗСУ інформує</Subtitle>
      <Title>Загальні бойові втрати російського окупанта</Title>
      <Wrap>
        <Text>
          за період з <Date>2022-02-24</Date> по {children}{" "}
        </Text>
        <WarStatistic>{day}-й день війни</WarStatistic>
      </Wrap>
    </HeaderContainer>
  );
};
