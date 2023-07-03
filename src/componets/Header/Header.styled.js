import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 20px 30px;
  background-color: rgb(200, 214, 184, 0.5);
  border-radius: 15px;
`;

export const Subtitle = styled.p`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  font-size: 46px;
  margin-bottom: 20px;
  text-align: center;
`;

export const WarStatistic = styled.p`
  font-size: 36px;
  font-weight: 600;
  font-style: italic;
  color: red;
`;

export const Text = styled.p`
  font-size: 36px;
`;

export const Date = styled.span`
  display: inline-block;
  font-size: 32px;
  text-align: center;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px 15px;
  width: 180px;
  background-color: rgb(200, 214, 184, 0.8);
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
