import { ReactComponent as Earth } from '../../images/ques_earth.svg';
import { ReactComponent as Ad } from '../../images/ad.svg';
import Container from './Container';
import Side from './Side';

export default function AsideLeft() {
  return (
    <Container>
      <Side>
        <ul className="categ">
          <li>Home</li>
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
        <ul className="teams">
          <li className="team">TEAMS</li>
          <li className="ad">
            <strong>Stack Overflow for Teams</strong> – Start collaborating and
            sharing organizational knowledge. Create a free Team Why Teams?
            <Ad />
            <a href="https://try.stackoverflow.co/why-teams/?utm_source=so-owned&utm_medium=side-bar&utm_campaign=campaign-38&utm_content=cta">
              <button className="creatbut">Create a free Team</button>
            </a>
            <a href="https://stackoverflow.co/teams/">
              <button className="whybut">Why Teams?</button>
            </a>
          </li>
        </ul>
      </Side>
    </Container>
  );
}
