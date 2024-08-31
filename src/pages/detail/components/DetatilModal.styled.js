import styled, { keyframes } from "styled-components";

const growCircle = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const DetailModalWrapper = styled.section`
  position: absolute;

  width: 20rem;
  height: 20rem;

  background-color: ${({ theme }) => theme.colors.lime60};

  animation: ${growCircle} 0.5s ease-out;
  transform: scale(1);
  opacity: 1;

  z-index: 5;
`;
