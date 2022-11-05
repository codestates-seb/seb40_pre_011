import styled from 'styled-components';
import warningIcon from '../../images/warning_icon.svg';

export const Warning = styled.img`
  width: 18px;
  height: 18px;
  vertical-align: baseline;
  display: ${props => (props.focus ? 'block' : 'none')};
  position: absolute;
  top: 50%;
  margin-top: -9px;
  right: 0.7em;
`;

export const WarningMent = styled.p`
  margin: 2px 0px;
  padding: 2px;
  font-size: var(--font-12);
  color: var(--red-500);
  display: ${props => (props.focus ? 'block' : 'none')};
`;

function LoginWarning({ focus }) {
  return <Warning src={warningIcon} focus={focus} />;
}

export default LoginWarning;
