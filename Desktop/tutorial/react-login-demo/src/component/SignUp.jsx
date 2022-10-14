import styled from "styled-components";
import Header from "./Header";
import white from "../images/white.png";
import blackk from "../images/black.png";
import { useState } from "react";
import useLogin from "../hooks/useLogin";

const SignMain = styled.main`
  margin: 0;
  padding: 0;
  background-color: ${(props)=>{
    if(props.toggle) return "#565656";
    else return "#f4f4f4";
  }};
`
const SignSec = styled.section`
  width: 100%;
  height: 2000px;
  display: flex;
  justify-content: center;
  background-color: ${(props)=>{
    if(props.toggle) return "#565656";
    else return "#f4f4f4";
  }};
`
const SignSection = styled.section`
  margin-top: 50px;
  width: 600px;
  height: 600px;
  border: solid 1px ${(props)=>{
    if(props.toggle) return "#f4f4f4";
    else return "#565656";
  }};
  border-radius: 20px;
  .firstInput {
    margin-top: 40px;
    margin-left: 17px;
  }
  .pwd {
    margin-left: -17px;
  }
  .re-pwd {
    margin-left: -55px;
  }
  .birth {
    margin-left: -16px;
  }
`
const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`
const SignImg = styled.img`
  margin-top: 50px;
`
const Label = styled.label`
  color : ${(props)=>{
    if(props.toggle) return "#f4f4f4";
    else return "#565656";
  }};
  font-size: 20px;
  font-weight: 700;
  margin-right: 10px;
`
const Input = styled.input`
  width: 300px;
  padding : 10px;
  border-radius: 10px;
  outline: none;
`
const SignButton = styled.button`
  margin-top: 20px;
  width : 170px;
  height: 40px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 700;
  color: #565656;
  :hover {
    background-color: #565656;
    color: #f4f4f4;
  }
`
const SignUp = ({toggle, togglehandler}) => {
  const [name, email, userId, 
        pw, repw, birth, 
        handleName, handleEmail, handleId, 
        handlePw, handleRepw, handlebirth, handleLogin] = useLogin(`http://localhost:3000/data`); 
        
  return (
    <SignMain toggle={toggle}>
      <Header toggle={toggle} togglehandler={togglehandler}></Header>
      <SignSec toggle={toggle}>
        <SignSection toggle={toggle}>
          <Section>
            <SignImg src={toggle ? white : blackk}/>
          </Section>
          <Section className="firstInput">
            <Label toggle={toggle}>이름 : </Label>
            <Input placeholder="이름을 적어주세요." value={name || ""} onChange={(e)=>handleName(e)}></Input>
          </Section>
          <Section className="email">
            <Label toggle={toggle}>이메일 : </Label>
            <Input placeholder="이메일을 적어주세요." value={email || ""} onChange={(e)=>handleEmail(e)}></Input>
          </Section>
          <Section className="email">
            <Label toggle={toggle}>아이디 : </Label>
            <Input placeholder="아이디를 적어주세요." value={userId || ""} onChange={(e)=>handleId(e)}></Input>
          </Section>
          <Section className="pwd">
            <Label toggle={toggle}>비밀번호 : </Label>
            <Input placeholder="8 ~ 10자 영문, 숫자 조합" type="password" value={pw || ""} onChange={(e)=>handlePw(e)}></Input>
          </Section>
          <Section className="re-pwd">
            <Label toggle={toggle}>비밀번호 확인 : </Label>
            <Input placeholder="8 ~ 10자 영문, 숫자 조합" type="password" value={repw || ""} onChange={(e)=>handleRepw(e)}></Input>
          </Section>
          <Section className="birth">
            <Label toggle={toggle}>생년월일 : </Label>
            <Input placeholder="생년월일 6글자로 적어주세요." value={birth || ""} onChange={(e)=>handlebirth(e)}></Input>
          </Section>
          <Section><SignButton toggle={toggle} onClick={()=>handleLogin()}>회 원 가 입</SignButton></Section>
        </SignSection>
      </SignSec>
    </SignMain>
  )
}

export default SignUp;