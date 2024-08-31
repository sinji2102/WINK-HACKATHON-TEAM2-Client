import styled, { keyframes, css } from "styled-components";

const getMoveRightAnimation = (size) => keyframes`
  from {
    transform: translateX(0);
    opacity: 0;
  }
  to {
    transform: translateX(${size}rem);
    opacity: 1;
  }
`;

const size = {
  1: "1.7rem",
  2: "2.2rem",
  3: "3.2rem",
  4: "4.4rem",
  5: "5.2rem",
};

const translateX = {
  1: 4.3,
  2: 7.7,
  3: 11.6,
  4: 16.4,
  5: 22.4,
};

const top = {
  1: "4.15rem",
  2: "3.9rem",
  3: "3.4rem",
  4: "2.8rem",
  5: "2.4rem",
};

const color = {
  1: "lime90",
  2: "lime80",
  3: "lime70",
  4: "lime60",
  5: "lime50",
};

export const LevelCircleWrapper = styled.section`
  display: flex;
`;

export const AnimatedCircle = styled.div`
  position: absolute;

  filter: blur(2px);

  border-radius: 50%;

  ${({ $size, theme }) => {
    const circleSize = size[$size];
    const animation = getMoveRightAnimation(translateX[$size]);
    const topSize = top[$size];
    const colorName = color[$size];

    const backgroundColor = theme.colors[colorName];

    return css`
      background-color: ${backgroundColor};
      top: ${topSize};
      width: ${circleSize};
      height: ${circleSize};
      animation: ${animation} 0.5s ease forwards;
    `;
  }}
`;
