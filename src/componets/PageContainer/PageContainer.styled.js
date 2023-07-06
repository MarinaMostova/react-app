import styled from "styled-components";

export const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 480px;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 1010px) {
    max-width: 1010px;
  }

  @media screen and (min-width: 1610px) {
    max-width: 1600px;
  }
`;
