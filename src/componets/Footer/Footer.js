import { FooterContainer, Icon, Text, Link } from "./Footer.styled";
import logo from "../../images/modlogo.svg";

export const Footer = () => {
  return (
    <FooterContainer>
      <Link href="https://www.mil.gov.ua/" target="_blanc">
        <Icon src={logo} />
        <Text>Mіністерство оборони України</Text>
      </Link>
    </FooterContainer>
  );
};
