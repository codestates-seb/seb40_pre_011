import styled from 'styled-components';

const Skel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  padding: 24px;
  @keyframes loading {
    0% {
      transform: translateX(-50px);
    }
    50%,
    100% {
      transform: translateX(400px);
    }
  }
  .skel-vav {
    .skel-votes,
    .skel-views,
    .skel-answer {
      display: flex;
      justify-content: end;
      width: 70px;
      height: 20px;
      background-color: #e1e1e1;
      margin-right: 16px;
      margin-bottom: 7px;
    }
  }
  .skel-tcu {
    .skel-title {
      background-color: #e1e1e1;
      width: 600px;
      height: 20px;
      margin-bottom: 10px;
    }
    .skel-contentview {
      background-color: #e1e1e1;
      width: 600px;
      height: 20px;
      margin-bottom: 10px;
    }
    .skel-tagusername {
      display: flex;
      justify-content: space-between;
      width: 600px;
      height: 20px;
    }
    .skel-tag {
      width: 40px;
      height: 15px;
      background-color: #e1e1e1;
      border-radius: 3px;
    }
    .skel-username {
      width: 80px;
      height: 20px;
      background-color: #e1e1e1;
    }
  }
`;

function Skeletion() {
  return (
    <Skel>
      <section className="skel-vav">
        <div className="skel-votes" />
        <div className="skel-answer" />
        <div className="skel-views" />
      </section>
      <section className="skel-tcu">
        <div className="skel-title" />
        <div className="skel-contentview" />
        <footer className="skel-tagusername">
          <div className="skel-tag" />
          <div className="skel-username" />
        </footer>
      </section>
    </Skel>
  );
}

export default Skeletion;
