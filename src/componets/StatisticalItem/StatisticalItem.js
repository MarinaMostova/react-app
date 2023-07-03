import { useState } from "react";
import {
  Item,
  Icon,
  Wrapper,
  Statistic,
  Title,
  Explosion,
} from "./StatisticalItem.styled";

import explosionSvg from "../../images/explosion.svg";

export const StatisticalItem = ({ title, icon, stats }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleIconClick = (event) => {
    if (isClicked) return;
    setIsClicked(true);

    // setIsClicked(true);
    // setTimeout(() => {
    //   setIsClicked(false);
    // }, 1000);
  };
  return (
    <Item>
      {isClicked && <Explosion src={explosionSvg} />}
      <Icon src={icon} onClick={handleIconClick} isClicked={isClicked} />
      <Wrapper>
        <Title>{title} </Title>
        <Statistic>{stats} </Statistic>
      </Wrapper>
    </Item>
  );
};
