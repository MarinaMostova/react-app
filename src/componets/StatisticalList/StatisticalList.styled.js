import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 20px 0;

  @media (min-width: 1010px) {
    gap: 20px;
  }
`;
