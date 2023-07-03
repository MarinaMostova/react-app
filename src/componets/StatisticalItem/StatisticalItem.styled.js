import { css, keyframes } from "styled-components";
import styled from "styled-components";

export const Item = styled.li`
  position: relative;
  display: flex;
  gap: 30px;
  align-items: center;
  width: 430px;
  border-radius: 15px;
  padding: 15px;
  background-color: rgb(200, 214, 184, 0.8);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Icon = styled.img`
  min-width: 140px;
   transform: scale(1);
     transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
     cursor:crosshair;

  @media screen and (min-width: 480px) {
   min -width: 200px;
  }

  &:hover{
   transform: scale(1.2);
  }

  ${({ isClicked }) =>
    isClicked &&
    `
    filter: drop-shadow(0px 0px 20px red);
     animation: shake 500ms ease-in-out;

    @keyframes shake {
      0% {
        transform: translateX(0);
      }
      25% {
        transform: translateX(-5px);
      }
      50% {
        transform: translateX(0);
      }
      75% {
        transform: translateX(5px);
      }
      100% {
        transform: translateX(0);
      }
    }

  `}
`;

export const Wrapper = styled.div`
  // position: relative;
`;

export const Statistic = styled.p`
  font-size: 36px;
  font-weight: 700;
`;

export const Title = styled.p`
  font-size: 22px;
`;

const explodeAnimation = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(2);
  }
`;

export const Explosion = styled.img`
  position: absolute;
  top: 20%;
  // left: 20px;
  left: 5%;

  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  animation: ${explodeAnimation} 1s ease-in-out forwards;
`;
