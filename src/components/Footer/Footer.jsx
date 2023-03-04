import {
  FooterContainer,
  Links,
  Twitter,
  Facebook,
  Instagram,
  SocMedContainer,
} from "./Footer.styled";
export default function Footer() {
  return (
    <FooterContainer>
      <Links>Contacts</Links>
      <Links>About us</Links>
      <Links>Customer service</Links>
      <SocMedContainer>
        <Twitter />
        <Facebook />
        <Instagram />
      </SocMedContainer>
    </FooterContainer>
  );
}
