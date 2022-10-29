import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CopyRight = styled.article`
  flex: 1 1 150px;
  display: flex;
  flex-direction: column;
  font-size: var(--font-11);

  .copyright__list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .copyright__list > li {
    margin-left: 12px;
  }
  .copyright__list > li:nth-child(1) {
    margin-left: 0px;
  }
  .copyright__link {
    color: var(--black-350);
    padding: 4px 0px;
    display: inline-block;
    text-decoration: none;
  }
  .copyright__track {
    color: var(--black-350);
    padding: 4px 0px;
    display: inline-block;
    text-decoration: none;
  }
  .copyright__link,
  .copyright__track {
    &:hover {
      color: var(--black-300);
    }
  }
  .copyright__ment {
    margin-top: auto;
    margin-bottom: 24px;
  }
  .copyright__ment > span > a {
    text-decoration: underline;
  }
  @media screen and (max-width: 980px) {
    margin-top: 24px;
    flex: 1 1 150px;
    display: flex;
    flex-direction: column;
  }
`;

function FooterCopyRight() {
  return (
    <CopyRight>
      <ul className="copyright__list">
        <li>
          <Link className="copyright__link" to="/">
            Blog
          </Link>
        </li>
        <li>
          <Link className="copyright__track" to="/">
            Facebook
          </Link>
        </li>
        <li>
          <Link className="copyright__track" to="/">
            Twitter
          </Link>
        </li>
        <li>
          <Link className="copyright__track" to="/">
            LinkedIn
          </Link>
        </li>
        <li>
          <Link className="copyright__track" to="/">
            Instagram
          </Link>
        </li>
      </ul>
      <p className="copyright__ment">
        Site design / logo © 2022 Stack Exchange Inc; user contributions
        licensed under
        <span>
          <Link className="copyright__link" to="/">
            CC BY-SA
          </Link>
        </span>
        . rev 2022.10.27.42995
      </p>
    </CopyRight>
  );
}

export default FooterCopyRight;
