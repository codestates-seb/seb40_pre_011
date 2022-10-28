import styled from 'styled-components';
import { ReactComponent as Earth } from '../images/ques_earth.svg';
import { ReactComponent as Ad } from '../images/ad.svg';

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  width: 164px;
  background: white;
  padding-top: 21px;
  border-right: 1px solid var(--black-150);
  height: 100vh;
  font-size: var(--font-13);
  color: var(--black-600);
`;

const Side = styled.div`
  ul > li {
    list-style: none;
    padding: 8px;
    margin-bottom: 3px;
  }

  .public {
    padding-left: 28px;
  }

  .question {
    background-color: var(--black-050);
    color: var(--black-900);
    border-right: 3px solid var(--orange-400);
  }

  .ad {
    border-left: 1px solid var(--black-100);
    border-top: 1px solid var(--black-100);
    border-bottom: 1px solid var(--black-100);
  }

  svg {
    margin-right: 3px;
  }
`;

export default function AsideLeft() {
  return (
    <Container>
      <Side>
        <ul>
          <li>Home</li>
        </ul>
        <ul>
          <li>PUBLIC</li>
          <ul>
            <li className="question">
              <strong>
                <Earth />
                Questions
              </strong>
            </li>
            <li className="public">Tags</li>
            <li className="public">Users</li>
            <li className="public">Companies</li>
          </ul>
        </ul>
        <ul>
          <li>TEAMS</li>
          <li className="ad">
            <strong>Stack Overflow for Teams</strong> – Start collaborating and
            sharing organizational knowledge. Create a free Team Why Teams?
            <Ad />
            <a href="https://try.stackoverflow.co/why-teams/?utm_source=so-owned&utm_medium=side-bar&utm_campaign=campaign-38&utm_content=cta">
              <button>Create a free Team</button>
            </a>
            <a href="https://stackoverflow.co/teams/">
              <button>Why Teams?</button>
            </a>
          </li>
        </ul>
      </Side>
    </Container>
  );
}
