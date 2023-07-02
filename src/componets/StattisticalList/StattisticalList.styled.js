import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;

  @media screen and (min-width: 860px) {
    gap: 40px;
  }
`;
