import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../images/footer_logo.png';

const LogoContainer = styled.article`
  flex: 0 0 64px;
  margin: -12px 0px 32px 0px;
  .footer__logo {
    width: 32px;
    height: 37px;
    object-fit: cover;
  }
  @media only screen and (max-width: 640px) {
    display: none;
  }
`;
function FooterLogo() {
  return (
    <LogoContainer>
      <Link className="" to="/">
        <img className="footer__logo" src={logo} alt="stackOverFlowLogo" />
      </Link>
    </LogoContainer>
  );
}

export default FooterLogo;
