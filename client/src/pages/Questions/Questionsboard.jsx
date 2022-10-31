import styled from 'styled-components';
import AskImg from '../../images/AskImg.png';

const QuestMain = styled.main`
  display: flex;
  margin-top: 50px;
  border: solid 4px red;
  max-width: 1264px;
  width: 100%;
  margin: 50px auto 0px;
  height: 1000px;
  flex-direction: column;
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (min-width: 1050px) {
      height: 130px;
    }
    > span {
      font-size: 27px;
      font-weight: 700;
    }
  }
  .content {
    border: solid 1px var(--blue-200);
    padding: 24px;
  }
  .boxhead {
    font-size: 21px;
    font-weight: 400;
  }
`;

function Questionsboard() {
  return (
    <QuestMain>
      <section className="head">
        <span>Ask a public question</span>
        <img src={AskImg} alt="질문게시판 이미지" />
      </section>
      <section className="content">
        <p className="boxhead">Writing a good question</p>
      </section>
    </QuestMain>
  );
}

export default Questionsboard;
