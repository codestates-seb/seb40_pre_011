import styled from 'styled-components';
import AskImg from '../../images/AskImg.png';

const Section = styled.section``;

function QuestionHead() {
  return (
    <Section className="head">
      <span>Ask a public question</span>
      <img src={AskImg} alt="질문게시판 이미지" />
    </Section>
  );
}

export default QuestionHead;
