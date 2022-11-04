import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  margin: 0px;
  padding: 0.6em 0.7em;
  border: 1px solid
    ${props => (props.focus ? 'hsl(358,68%,59%)' : 'hsl(210, 8%, 75%)')};
  border-radius: 3px;
  background-color: var(--white);
  color: var(--black-900);
  font-size: var(--font-13);
  &:focus {
<<<<<<< HEAD
    border: 1px solid
      ${props => (props.focus ? '#hsl(358,68%,59%)' : '#38a9f0')};
    box-shadow: ${props =>
      props.focus
        ? '0px 0px 0px 4px hsla(358, 62%, 47%, 0.15)'
        : '0px 0px 0px 4px hsla(206, 100%, 40%, 0.15)'};
=======
    border: 1px solid ${props => (props.focus ? 'hsl(358,68%,59%)' : '#38a9f0')};
    box-shadow: 0px 0px 0px 4px
      ${props =>
        props.focus ? 'hsla(358,62%,47%,0.15)' : 'hsla(206, 100%, 40%, 0.15)'};
>>>>>>> 7c1ce51ec8288c6200b72c83cf183e8fc673123f
    color: var(--black-900);
    outline: 0;
  }
`;

function LoginInput({ id, value, event, type, valid }) {
  return (
    <Input id={id} value={value} onChange={event} type={type} focus={valid} />
  );
}

export default LoginInput;
