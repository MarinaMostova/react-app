import styled, { keyframes } from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
  background-color: rgb(200, 214, 184, 0.5);
  border-radius: 15px;
`;

export const Icon = styled.img`
  width: 50px;
`;

export const Text = styled.p`
  font-size: 28px;
  text-align: center;
`;

export const Link = styled.a`
  display: none;
  align-items: center;
  color: blue;
  gap: 10px;
  text-decoration: none;
  cursor: pointer;

  @media (min-width: 1010px) {
    display: flex;
    font-size: 28px;
  }
`;

const marqueeAnimation = keyframes`
0%{
  transform: translateX(100%);
}
100%{
  transform: translateX(-100%);
}`;

export const Marquee = styled.div`
  animation: ${marqueeAnimation} 30s linear infinite;
  white-space: nowrap;
  display: flex;
`;

export const MarqueeBox = styled.div`
  overflow: hidden;
  border: 2px solid #000;
  border-radius: 15px;
  background-color: #000;
  color: #fff;
`;

export const Info = styled.p`
  font-size: 28px;
  padding-left: 50px;
`;
