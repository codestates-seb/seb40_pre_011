import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ContentContainer = styled.section`
  padding: 0px 12px 24px 0px;
  flex: 1 0 auto;
  .footer__title {
    margin-bottom: 8px;
  }
  .footer__title > a {
    color: var(--black-200);
    text-decoration: none;
    font-size: var(--font-13);
  }
  .footer__list > li {
    list-style: none;
  }
  .footer__link {
    display: inline-block;
    text-decoration: none;
    color: var(--black-350);
    font-size: var(--font-13);
    padding: 4px 0px;

    &:hover {
      color: var(--black-300);
    }
  }

  @media screen and (max-width: 980px) {
    .footer__list {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      column-gap: 12px;
      row-gap: 8px;
    }
  }
`;

function FooterNavContent({ title, linkList }) {
  return (
    <ContentContainer>
      <h5 className="footer__title">
        <Link to="/">{title}</Link>
      </h5>
      <ul className="footer__list">
        {linkList.map((el, idx) => {
          return (
            <li key={idx}>
              <Link className="footer__link" to="/">
                {el}
              </Link>
            </li>
          );
        })}
      </ul>
    </ContentContainer>
  );
}

export default FooterNavContent;
