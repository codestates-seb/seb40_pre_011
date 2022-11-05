import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Viewer } from '@toast-ui/react-editor';
import uuid from 'react-uuid';
import QuestionsUl from './QuestionsUl';
import Pagination from './Pagination';
import asynclistFetch from '../../action/asynclistFetch';
import Skeletion from './Skeleton';

function MainQuestions() {
  const listdata = useSelector(state => state.content.data);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(asynclistFetch(1));
  }, []);

  return (
    <QuestionsUl>
      {listdata.length
        ? listdata?.map(data => {
            // console.log(data.contentId);
            return (
              <li key={data.contentId}>
                <section className="vav">
                  <div className="votes">{data.rec} votes</div>
                  <div className="answer">0 answers</div>
                  <div className="views">0 views</div>
                </section>
                <section className="tcu">
                  <Link
                    to={`/questionBoard/${data.contentId}`}
                    className="title"
                  >
                    {data.title}
                  </Link>
                  <Viewer className="contentview" initialValue={data.body} />
                  <footer className="tagusername">
                    <button className="tag">{data.tags}</button>
                    <div className="username">아직구현이 안됨</div>
                  </footer>
                </section>
              </li>
            );
          })
        : Array(10)
            .fill(0)
            .map(() => <Skeletion key={uuid()} />)}
      <Pagination />
    </QuestionsUl>
  );
}

export default MainQuestions;
