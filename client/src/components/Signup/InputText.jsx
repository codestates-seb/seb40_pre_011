import styled from 'styled-components';

const InputText = styled.input`
  width: 100%;
  padding: 0.6em 0.7em;
  border: 1px solid
    ${props => (props.focus ? 'hsl(358,68%,59%)' : 'hsl(210, 8%, 75%)')};
  border-radius: 3px;
  font-size: var(--font-13);
  border-radius: 3px;
  color: var(--black-900);

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

function SignTextInput({ id, value, event, type, valid }) {
  return (
    <InputText
      id={id}
      value={value}
      onChange={event}
      type={type}
      focus={valid}
    />
  );
}

export default SignTextInput;
