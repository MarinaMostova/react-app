import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  gap: 30px;
  align-items: center;
  width: 430px;
  border-radius: 15px;
  padding: 15px;
  background-color: rgb(200, 214, 184, 0.8);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  // @media screen and (min-width: 480px) {
  //   width: calc((100% - 30px ) / 1);
  // }

  // @media screen and (min-width: 860px) {
  //   width: calc((100% - 40px * 2) / 3);
  // }
`;

export const Icon = styled.img`
  min-width: 140px;


  @media screen and (min-width: 480px) {
   min -width: 200px;
  }

`;

export const Wrapper = styled.div`
  // align-text: center;
`;

export const Statistic = styled.p`
  font-size: 36px;
  font-weight: 700;
`;

export const Title = styled.p`
  font-size: 22px;
`;
