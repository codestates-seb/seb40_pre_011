import { ReactComponent as Trophy } from '../../images/trophy.svg';
import { ReactComponent as Voting } from '../../images/voting.svg';
import { ReactComponent as Comments } from '../../images/comments.svg';
import { ReactComponent as Bookmark } from '../../images/bookmark.svg';

export default function Signup() {
  return (
    <div className="SignLeft">
      <h1>Join the Stack Overflow community</h1>
      <Comments />
      <div>Get unstuck — ask a question</div>
      <Voting />
      <div>Unlock new privileges like voting and commenting</div>
      <Bookmark />
      <div>Save your favorite tags, filters, and jobs</div>
      <Trophy />
      <div>Earn reputation and badges</div>
      <div>Collaborate and share knowledge with a private group for FREE.</div>
      <button
        onClick={() =>
          window.open(
            'https://stackoverflow.co/teams/?utm_source=so-owned&utm_medium=product&utm_campaign=free-50&utm_content=public-sign-up',
            '_blank',
          )
        }
      >
        Get Stack Overflow for Teams free for up to 50 users.
      </button>
    </div>
  );
}
