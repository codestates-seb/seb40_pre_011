import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  height: 80px;
`
const Logo = styled.div`
  width: 150px;
  height: 60px;
  color: ${(props)=>{
    if(props.toggle) return "#f4f4f4";
    else return "#565656";
  }};
  font-size: 30px;
`
const ToggleButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  width: 100px;
  height: 40px;
  border-radius: 40px;
  cursor: pointer;
  background-color: ${(props)=>{
    if(props.toggle) return "#f4f4f4";
    else return "#565656";
  }};
  > .left-circle{
    width: 30px;
    height: 30px;
    background-color: #565656;
    border-radius: 50%;
    transition: 1s ease;
  }
  > .right-circle{
    position: absolute;
    right: 5%;
    width: 30px;
    height: 30px;
    background-color: #f4f4f4;
    border-radius: 50%;
    transition: 1s ease;
  }
`

const Header = ({toggle, togglehandler, login}) =>{

  return (
    <HeaderContainer>
      <Link to="/" style={{textDecoration: 'none'}}>
        <Logo toggle={toggle}>Todo</Logo>
      </Link>
      {console.log(login)}
      <ToggleButton 
        onClick={togglehandler}
        toggle={toggle} 
        >
        <div className={toggle ? "left-circle": "right-circle"}>
        </div>
      </ToggleButton>
    </HeaderContainer>
  )
}

export default Header;