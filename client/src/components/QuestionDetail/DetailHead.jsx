import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Questions from '../Questions/MainDummy';

const Head = styled.header`
  .Detailhead {
    display: flex;
    justify-content: space-between;
  }
  > .Detailhead p {
    font-size: var(--font-27);
    font-weight: 700;
  }
  > .Detailhead .askbutton {
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
  .Detailheadamv {
    display: flex;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--black-100);
  }
  .Detailheadamv > span {
    font-size: var(--font-13);
    color: var(--black-500);
    margin-right: 2px;
    margin-bottom: 8px;
  }
  .Detailheadamv > strong {
    font-size: var(--font-13);
    font-weight: 500;
    color: var(--black-800);
    margin-right: 16px;
  }
`;

function DetailHead() {
  const id = useParams(); // contentId
  const listdata = useSelector(state => state.content.data);
  const data = [];

  for (let i = 0; i < listdata.length; i += 1) {
    if (listdata[i].contentId === Number(id.id)) {
      data.push(listdata[i]);
    }
  }
  return (
    <Head>
      <section className="Detailhead">
        <p>{data[0].title}</p>
        <Link to="/questionBoard" className="askbutton">
          Ask Questions
        </Link>
      </section>
      <section className="Detailheadamv">
        <span>Asked </span>
        <strong>2 days ago</strong>
        <span>Modified </span>
        <strong>2 days ago</strong>
        <span>Viewed </span>
        <strong>{Questions[0].views}</strong>
      </section>
    </Head>
  );
}

export default DetailHead;
