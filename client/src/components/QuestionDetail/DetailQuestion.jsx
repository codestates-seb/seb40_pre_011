import styled from 'styled-components';
import { useState, useRef } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Viewer } from '@toast-ui/react-editor';
import Uparrow from '../../images/Uparrow.png';
import Downarrow from '../../images/Downarrow.png';
import { asyncdeleteFetch } from '../../action/asynclistFetch';

const QuestionDiv = styled.div``;

function DetailQuestion() {
  const [follow, setFollow] = useState(false);
  const [modal, setModal] = useState(false);
  const id = useParams();
  const listdata = useSelector(state => state.content.data);
  const nowURL = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const textInput = useRef();
  const data = [];

  for (let i = 0; i < listdata.length; i += 1) {
    if (listdata[i].contentId === Number(id.id)) {
      data.push(listdata[i]);
    }
  }
  const handleClick = () => {
    dispatch(asyncdeleteFetch(data[0].contentId));
    navigate('/');
  };
  const handleFollow = () => {
    setFollow(!follow);
  };

  const copy = () => {
    const el = textInput.current;
    el.select();
    document.execCommand('copy');
  };

  return (
    <QuestionDiv className="contentbody">
      <aside>
        <div className="upbutton">
          <img src={Uparrow} alt="업버튼" />
        </div>
        <span>{data[0].rec}</span>
        <div className="downbutton">
          <img src={Downarrow} alt="업버튼" />
        </div>
      </aside>
      <section className="BDC">
        <Viewer initialValue={data[0].body} className="contentdata" />
        <button className="tag">
          <p>{data[0].tags}</p>
        </button>
        <section className="BDC-bottom">
          <div>
            <button onClick={() => setModal(!modal)}>Share</button>
            <button onClick={() => handleFollow()}>
              {follow ? 'Following' : 'Follow'}
            </button>
            {data[0].id === 1 ? (
              <>
                <Link
                  to={`/questionBoard/${data[0].contentId}/update`}
                  className="update"
                >
                  Edit
                </Link>
                <button onClick={() => handleClick()}>Delete</button>
              </>
            ) : null}
          </div>
          {modal ? (
            <div className="modal">
              <p>Share a link to this question</p>
              <input
                value={`http://localhost:3000${nowURL.pathname}`}
                readOnly
                type="text"
                ref={textInput}
              />
              {/* {console.log(nowURL)} */}
              <button className="modalbutton" onClick={() => copy()}>
                Copy now
              </button>
            </div>
          ) : null}
          <aside className="userdata">
            <span className="day">2 days ago</span>
            <div>미구현된구간입니다.(유저이름)</div>
          </aside>
        </section>
      </section>
    </QuestionDiv>
  );
}
export default DetailQuestion;
