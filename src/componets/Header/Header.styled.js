import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 10px 30px;
  background-color: rgb(200, 214, 184, 0.5);
  border-radius: 15px;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
  color: rgba(117, 117, 117, 1);

  @media (min-width: 1010px) {
    font-size: 24px;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 10px;
  text-align: center;

  @media (min-width: 1010px) {
    font-size: 38px;
  }
`;

export const WarStatistic = styled.p`
  font-size: 26px;
  font-weight: 600;
  font-style: italic;
  color: red;

  @media (min-width: 1010px) {
    font-size: 32px;
  }
`;

export const Text = styled.div`
  font-size: 20px;
  text-align: center;

  @media (min-width: 1010px) {
    font-size: 24px;
  }
`;

export const Date = styled.span`
  display: inline-block;
  font-size: 24px;
  text-align: center;
  border-radius: 10px;
  padding: 10px 15px;
  width: 150px;
  background-color: rgb(210, 212, 207);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media (min-width: 1010px) {
    font-size: 28px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
