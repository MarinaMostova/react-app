import {
  FooterContainer,
  Icon,
  Text,
  Link,
  Marquee,
  MarqueeBox,
  Info,
} from "./Footer.styled";
import logo from "../../images/modlogo.svg";

export const Footer = () => {
  return (
    <FooterContainer>
      <Link href="https://www.mil.gov.ua/" target="_blanc">
        <Icon src={logo} />
        <Text>Mіністерство оборони України</Text>
      </Link>
      <MarqueeBox>
        <Marquee>
          <Info>Слава Україні! Героям Слава!</Info>
          <Info>Росія - терорист!</Info>
        </Marquee>
      </MarqueeBox>
    </FooterContainer>
  );
};
