import styled from 'styled-components';
import { ReactComponent as Trophy } from '../../images/trophy.svg';
import { ReactComponent as Voting } from '../../images/voting.svg';
import { ReactComponent as Comments } from '../../images/comments.svg';
import { ReactComponent as Bookmark } from '../../images/bookmark.svg';

const SignLeftform = styled.article`
  font-size: var(--font-15);
  width: 419px;
  height: 285px;
  margin: 0 48px 128px 0;

  ul > li {
    list-style: none;
    margin-bottom: 24px;
  }

  h1 {
    font-size: var(--font-27);
    margin-bottom: 32px;
    font-weight: normal;
  }

  svg {
    margin-right: 7px;
  }

  .team {
    font-size: var(--font-13);
    padding-top: 10px;
  }

  @media screen and (max-width: 816px) {
    display: none;
  }
`;

export const TeamLink = styled.a`
  cursor: pointer;
  color: var(--blue-600);

  &:hover {
    color: var(--blue-500);
  }
`;

export default function SignLeft() {
  return (
    <SignLeftform>
      <ul>
        <h1>Join the Stack Overflow community</h1>
        <li>
          <Comments />
          Get unstuck — ask a question
        </li>
        <li>
          <Voting />
          Unlock new privileges like voting and commenting
        </li>
        <li>
          <Bookmark />
          Save your favorite tags, filters, and jobs
        </li>
        <li>
          <Trophy />
          Earn reputation and badges
        </li>
      </ul>
      <div className="team">
        <p>Collaborate and share knowledge with a private group for FREE.</p>
        <TeamLink
          onClick={() =>
            window.open(
              'https://stackoverflow.co/teams/?utm_source=so-owned&utm_medium=product&utm_campaign=free-50&utm_content=public-sign-up',
              '_blank',
            )
          }
        >
          Get Stack Overflow for Teams free for up to 50 users.
        </TeamLink>
      </div>
    </SignLeftform>
  );
}
