import styled from 'styled-components';
import Uparrow from '../../images/Uparrow.png';
import Downarrow from '../../images/Downarrow.png';
import Questions from '../Questions/MainDummy';

const QuestionDiv = styled.div``;

function DetailQuestion() {
  return (
    <QuestionDiv className="contentbody">
      <aside>
        <div className="upbutton">
          <img src={Uparrow} alt="업버튼" />
        </div>
        <span>0</span>
        <div className="downbutton">
          <img src={Downarrow} alt="업버튼" />
        </div>
      </aside>
      <section className="BDC">
        <p>{Questions[0].content}</p>
        <section className="BDC-bottom">
          <div>
            <button>Share</button>
            <button>Follow</button>
          </div>
          <aside className="userdata">
            <span className="day">2 days ago</span>
            <div>{Questions[0].username}</div>
          </aside>
        </section>
      </section>
    </QuestionDiv>
  );
}
export default DetailQuestion;
