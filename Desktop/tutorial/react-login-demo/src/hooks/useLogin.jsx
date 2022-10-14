import { useState } from "react";

const useLogin = (url) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [userId, setUserId] = useState();
  const [pw, setPw] = useState();
  const [repw, setRepw] = useState();
  const [birth, setBirth] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  }
  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  } 
  const handleId = (e) => {
    setUserId(e.target.value);
  }
  const handlePw = (e) => {
    setPw(e.target.value);
  }
  const handleRepw = (e) => {
    setRepw(e.target.value);
  } 
  const handlebirth = (e) => {
    setBirth(e.target.value);
  }
  const handleLogin = () => {
    const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    const regPw = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/
    const regBirth = /([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))/

    if(!regEmail.test(email)){
      alert("이메일을 제대로 입력해주세요!");
    }else if(pw !== repw){
      alert("비밀번호를 제대로 입력해주세요!");
    }else if(!regPw.test(pw)){
      alert("8 ~ 10자 영문, 숫자 조합입니다.");
    }else if(name.length < 2 || name.length > 5){
      alert("이름을 2글자 이상 5글자 미만으로 작성해주세요.");
    }else if(!regBirth.test(birth)){
      alert("생년월일 6글자로 적어주세요!");
    }else {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          userId,
          password : pw,
          email,
          birthday : birth,
        })
      })
        .then((response) => response.json())
        .then(() => {
          window.location.href = 'http://localhost:3001';
        })
        .catch((error) => {
          console.error('실패:', error);
        });
    }
  }
  
  return [name, email, userId, pw, repw, birth, handleName, handleEmail, handleId, handlePw, handleRepw, handlebirth, handleLogin];
}

export default useLogin;