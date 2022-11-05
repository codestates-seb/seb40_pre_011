import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Head from './Head';

export default function Mainhead() {
  const [select, setSelect] = useState(true);

  const list = useSelector(state => state.content.pageInfo);
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
        <h4>
          {list.totalElements.length
            ? `${list.totalElements}Questions`
            : '0 result'}
        </h4>
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
