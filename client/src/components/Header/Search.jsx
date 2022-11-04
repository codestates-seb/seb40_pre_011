import { Link } from 'react-router-dom';
import Search from './SearchStyle';
import { TeamLink } from '../Signup/SignLeft';

function SearchContent() {
  return (
    <Search>
      <div className="topform">
        <div className="form">
          <p>
            <span>[Tag]</span> search within a tag
          </p>
          <p>
            <span>user:1234 </span> search by author
          </p>
          <p>
            <span>&quot;words here&quot; </span>exact phrase
          </p>
          <p>
            <span>collective:&quot;Name&quot; </span>collective content
          </p>
        </div>
        <div className="form">
          <p>
            <span>answers:0 </span>unanswered questions
          </p>
          <p>
            <span>score:3 </span>posts with a 3+ score
          </p>
          <p>
            <span>is:question </span>type of post
          </p>
          <p>
            <span>isaccepted:yes </span>search within status
          </p>
        </div>
      </div>
      <div className="bottomform">
        <Link to="/questionBoard">
          <button>Ask a question</button>
        </Link>
        <TeamLink href="https://stackoverflow.com/legal/terms-of-service/public">
          Search help
        </TeamLink>
      </div>
    </Search>
  );
}

export default SearchContent;
