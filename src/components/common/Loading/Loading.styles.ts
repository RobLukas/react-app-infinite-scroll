import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  padding: 20px 0;
`;

const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const dotsPulsBeforeAnimation = keyframes`
  0% {
    box-shadow: 9984px 0 0 -5px #9880ff;
  }
  30% {
    box-shadow: 9984px 0 0 2px #9880ff;
  }
  60%,
  100% {
    box-shadow: 9984px 0 0 -5px #9880ff;
  }
`;

const dotsPulsAnimation = keyframes`
   0% {
    box-shadow: 9999px 0 0 -5px #9880ff;
  }
  30% {
    box-shadow: 9999px 0 0 2px #9880ff;
  }
  60%,
  100% {
    box-shadow: 9999px 0 0 -5px #9880ff;
  }
`;

const dotPulseAfterAnimation = keyframes`
   0% {
    box-shadow: 10014px 0 0 -5px #9880ff;
  }
  30% {
    box-shadow: 10014px 0 0 2px #9880ff;
  }
  60%,
  100% {
    box-shadow: 10014px 0 0 -5px #9880ff;
  }
`;

const DotsPulseAnimation = styled.div`
  position: relative;
  left: -9999px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: #9880ff;
  color: #9880ff;
  box-shadow: 9999px 0 0 -5px #9880ff;
  animation: ${dotsPulsAnimation} 1.5s infinite linear;
  animation-delay: 0.25s;
  &:before,
  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: #9880ff;
    color: #9880ff;
  }
  &:before {
    box-shadow: 9984px 0 0 -5px #9880ff;
    animation: ${dotsPulsBeforeAnimation} 1.5s infinite linear;
    animation-delay: 0s;
  }
  &:after {
    box-shadow: 10014px 0 0 -5px #9880ff;
    animation: ${dotPulseAfterAnimation} 1.5s infinite linear;
    animation-delay: 0.5s;
  }
`;

const LoadingStyles = { Wrapper, Center, DotsPulseAnimation };

export default LoadingStyles;
