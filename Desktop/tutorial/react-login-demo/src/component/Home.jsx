import styled from 'styled-components';
import Header from './Header';
import Main from './Main';

const Body = styled.div`
  width: 100%;
  height: 2000px;
  background-color: ${(props)=>{
    if(props.toggle) return "#565656";
    else return "#f4f4f4";
  }};
`
const Home = ({toggle, togglehandler, data, login, setLogin}) => {

  return (
    <Body toggle={toggle}>
      <Header toggle={toggle} togglehandler={togglehandler} login={login}></Header>
      <Main toggle={toggle} data={data} setLogin={setLogin}></Main>
    </Body>
  )
}

export default Home;