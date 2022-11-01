import styled from 'styled-components';

const QuestionsUl = styled.ul`
  > li {
    max-width: 905px;
    width: 100%;
    display: flex;
    text-decoration: none;
    border-top: 0.2px solid var(--black-100);
    padding: 24px;
  }
  .votes,
  .views,
  .answer {
    display: flex;
    justify-content: end;
    width: 108px;
    font-size: var(--font-13);
    margin-right: 16px;
    margin-bottom: 7px;
  }
  .answer,
  .views {
    color: var(--black-500);
  }
  .title {
    font-size: var(--font-17);
    color: var(--blue-600);
    text-decoration: none;
  }
  .username {
    display: flex;
    justify-content: end;
    font-size: var(--font-12);
    color: var(--blue-600);
  }
  .content {
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: var(--font-13);
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-top: 5px;
    margin-bottom: 8px;
  }
`;

export default QuestionsUl;
