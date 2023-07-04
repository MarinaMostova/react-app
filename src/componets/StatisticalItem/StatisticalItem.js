import { useState } from "react";
import {
  Item,
  Icon,
  Wrapper,
  Statistic,
  Title,
  Explosion,
  Wrap,
} from "./StatisticalItem.styled";
import explosionSvg from "../../images/explosion.svg";

export const StatisticalItem = ({ title, icon, stats, increase }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleIconClick = (event) => {
    if (isClicked) return;
    setIsClicked(true);
  };
  return (
    <Item>
      {isClicked && <Explosion src={explosionSvg} />}
      <Icon src={icon} onClick={handleIconClick} isClicked={isClicked} />
      <Wrapper>
        <Title>{title} </Title>
        <Wrap>
          <Statistic> {stats} </Statistic>
          {increase > 0 && <Statistic>(+{increase})</Statistic>}
        </Wrap>
      </Wrapper>
    </Item>
  );
};
