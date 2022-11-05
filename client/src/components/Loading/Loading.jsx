import styled, { keyframes } from 'styled-components';

const BounceAnimation = keyframes`
  0% {
    margin-bottom: 0;;
  }
  50% {
    margin-bottom: 1rem;
  }
  100% {
    margin-bottom: 0;
  }
`;

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 45%;
`;
const Dot = styled.div`
  background-color: black;
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0 0.25rem;
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;

function LoadingComponent() {
  return (
    <Loading>
      <h2>Loading</h2>
      <Dot delay="0s" />
      <Dot delay="0.1s" />
      <Dot delay="0.2s" />
    </Loading>
  );
}

export default LoadingComponent;
