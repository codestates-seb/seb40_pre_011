import { Link } from 'react-router-dom';
import { useState } from 'react';
import Questions from './MainDummy';
import Head from './Head';

export default function Mainhead() {
  const [select, setSelect] = useState(true);

  const handleselect = () => {
    setSelect(!select);
  };

  return (
    <Head>
      <div className="head">
        <span className="title">All Questions</span>
        <Link to="/questionBoard" className="askbutton">
          Ask Questions
        </Link>
      </div>
      <div className="buttons">
        <h4>{Questions.length} Questions</h4>
        <div>
          <button
            className="Newest"
            id={select ? 'clicked' : null}
            onClick={() => handleselect()}
            disabled={select}
          >
            Newest
          </button>
          <button
            className="Votes"
            id={select ? null : 'clicked'}
            onClick={() => handleselect()}
            disabled={!select}
          >
            Votes
          </button>
        </div>
      </div>
    </Head>
  );
}
