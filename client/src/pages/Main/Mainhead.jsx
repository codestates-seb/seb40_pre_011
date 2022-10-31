import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Head = styled.section`
  padding: 16px 0px 16px 24px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  .askbutton {
    border: none;
    border-radius: 5px;
    color: white;
    background-color: var(--blue-400);
    padding: 10.4px;
    font-size: var(--font-13);
    text-decoration: none;
    :hover {
      cursor: pointer;
      background-color: var(--blue-600);
    }
  }
  .title {
    font-size: 27px;
  }
`;

export default function Mainhead() {
  return (
    <>
      <Head>
        <span className="title">All Questions</span>
        <Link to="/questionBoard" className="askbutton">
          Ask Questions
        </Link>
      </Head>
      <div>
        <h4>Questions</h4>
      </div>
    </>
  );
}
