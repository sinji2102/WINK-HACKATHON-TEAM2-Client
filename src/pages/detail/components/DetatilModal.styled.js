import styled, { keyframes } from "styled-components";

const colorLevel = (level) => 90 - 10 * (level - 1);

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

const borderGrowCircle = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 0.5;
  }
`;

export const DetailModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 7;
`;

export const BorderDetailModal = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40rem;
  height: 40rem;
  border-radius: 50%;
  background-color: ${({ $color, $level, theme }) =>
    theme.colors[`${$color}${colorLevel($level)}`]};
  opacity: 0.5;
  filter: blur(0.5rem);
  animation: ${borderGrowCircle} 0.5s ease-out;
  z-index: 8;
`;

export const DetailModal = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50rem;
  height: 50rem;
  border-radius: 50%;
  background-color: ${({ $color, $level, theme }) =>
    theme.colors[`${$color}${colorLevel($level)}`]};
  animation: ${growCircle} 0.5s ease-out;
  z-index: 9;
  opacity: 1;

  filter: blur(4rem);
`;

export const CloseBtn = styled.button`
  display: flex;
  position: absolute;

  right: 7rem;
  top: 7rem;

  z-index: 10;
  animation: ${growCircle} 0.5s ease-out;
`;

export const TitleText = styled.h1`
  display: flex;

  margin-bottom: 1rem;

  align-items: center;
  align-self: center;

  ${({ theme }) => theme.fonts.heading2};
  color: ${({ theme }) => theme.colors.black0};

  z-index: 10;
  animation: ${growCircle} 0.5s ease-out;
`;

export const DateText = styled.h1`
  display: flex;

  margin-bottom: 5rem;

  align-items: center;
  align-self: center;

  ${({ theme }) => theme.fonts.heading4};
  color: ${({ theme }) => theme.colors.black0};

  z-index: 10;
  animation: ${growCircle} 0.5s ease-out;
`;

export const ContentText = styled.h1`
  display: flex;
  width: 25rem;
  margin-top: 1rem;

  align-items: center;
  align-self: center;

  ${({ theme }) => theme.fonts.body1_long};
  color: ${({ theme }) => theme.colors.black0};

  z-index: 10;
  animation: ${growCircle} 0.5s ease-out;
`;
