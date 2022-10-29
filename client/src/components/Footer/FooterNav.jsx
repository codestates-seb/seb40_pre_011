import styled from 'styled-components';
import FooterNavContent from './FooterNavContent';
import FooterDummy from './FooterDummy';

const NavContainer = styled.nav`
  display: flex;
  flex: 2 1 auto;
  flex-wrap: wrap;
  @media screen and (max-width: 980px) {
    flex-direction: column;
    display: flex;
    flex: 2 1 auto;
  }
`;

function FooterNav() {
  return (
    <NavContainer>
      {FooterDummy.map(content => {
        return (
          <FooterNavContent title={content.title} linkList={content.list} />
        );
      })}
    </NavContainer>
  );
}

export default FooterNav;
