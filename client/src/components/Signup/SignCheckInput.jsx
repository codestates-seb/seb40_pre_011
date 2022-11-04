import styled from 'styled-components';

const Input = styled.input`
  &:focus {
    border: 1px solid
      ${props => (props.focus ? '#hsl(358,68%,59%)' : '#38a9f0')};
    box-shadow: ${props =>
      props.focus
        ? '0px 0px 0px 4px hsla(358, 62%, 47%, 0.15)'
        : '0px 0px 0px 4px hsla(206, 100%, 40%, 0.15)'};
    outline: 0;
  }
`;

function SignCheckInput({ id, value, event, type, valid }) {
  return (
    <Input id={id} value={value} onClick={event} type={type} focus={valid} />
  );
}

export default SignCheckInput;
