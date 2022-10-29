import styled from 'styled-components';
import FooterCopyRight from './FooterCopyRight';
import FooterLogo from './FooterLogo';
import FooterNav from './FooterNav';

const FooterContainer = styled.footer`
  background-color: var(--black-800);
  color: var(--black-350);
  width: 100%;
  margin: 0 auto;
  padding: 32px 12px 12px 12px;
  display: flex;
  flex-flow: row wrap;
  @media screen and (max-width: 980px) {
    max-width: 1264px;
    padding: 24px;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterLogo />
      <FooterNav />
      <FooterCopyRight />
    </FooterContainer>
  );
}

export default Footer;
