import styled from 'styled-components';
import FooterCopyRight from './FooterCopyRight';
import FooterLogo from './FooterLogo';
import FooterNav from './FooterNav';

const FooterContainer = styled.footer`
  background-color: var(--black-800);
  color: var(--black-350);
  width: 100%;

  @media screen and (max-width: 980px) {
    padding: 24px;
  }
`;
const FooterBox = styled.section`
  max-width: 1264px;
  margin: 0 auto;
  padding: 32px 12px 12px 12px;
  display: flex;
  flex-flow: row wrap;
`;
function Footer() {
  return (
    <FooterContainer>
      <FooterBox>
        <FooterLogo />
        <FooterNav />
        <FooterCopyRight />
      </FooterBox>
    </FooterContainer>
  );
}

export default Footer;
