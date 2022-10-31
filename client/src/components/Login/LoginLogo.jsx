import styled from 'styled-components';

const Logo = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  margin-top: -0.3em;
  margin-bottom: -0.3em;
  vertical-align: baseline;
`;

function LoginLogo({ name, logo, width, height }) {
  return (
    <Logo className={name} src={logo} alt="" width={width} height={height} />
  );
}

export default LoginLogo;
