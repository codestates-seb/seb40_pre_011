import { useState } from 'react';
import { Link } from 'react-router-dom';
import QuestionsUl from './QuestionsUl';
import Pagination from './Pagination';
import Questions from './MainDummy';

function MainQuestions() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexofFirstPost = indexOfLastPost - postsPerPage;
  const currentQuestions = Questions.slice(indexofFirstPost, indexOfLastPost);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };
  return (
    <QuestionsUl>
      {currentQuestions &&
        currentQuestions.map(data => {
          return (
            <li>
              <section className="vav">
                <div className="votes">{data.votes} votes</div>
                <div className="answer">{data.answers} answers</div>
                <div className="views">{data.views} views</div>
              </section>
              <section className="tcu">
                <Link to="/questionBoard/Detail" className="title">
                  {data.title}
                </Link>
                <p className="content">{data.content}</p>
                <footer>
                  <div className="username">{data.username}</div>
                </footer>
              </section>
            </li>
          );
        })}
      <Pagination
        postPerPage={postsPerPage}
        totalPosts={Questions.length}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </QuestionsUl>
  );
}

export default MainQuestions;
