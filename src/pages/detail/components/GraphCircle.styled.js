import styled from "styled-components";

const colorLevel = (level) => 90 - 10 * (level - 1);

const size = [4, 5, 7, 10, 12];

const stroke = [0.7, 0.7, 0.9, 1.0, 1.3];

export const CircleWrapper = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.div`
  position: absolute;
  transform: translate(
    calc(
      ${({ $level }) => (size[$level - 1] + stroke[$level - 1]) / 2}rem - 50%
    ),
    calc(
      -${({ $level }) => (size[$level - 1] + stroke[$level - 1]) / 2}rem - 50%
    )
  );
  width: ${({ $level }) => size[$level - 1] * 0.85}rem;
  height: ${({ $level }) => size[$level - 1] * 0.85}rem;
  border-radius: 100%;
  background-color: ${({ $color, $level, theme }) =>
    theme.colors[`${$color}${colorLevel($level)}`]};
`;

export const CirclesContainer = styled.div``;

export const BorderCircle = styled.div`
  width: ${({ $level }) => size[$level - 1] + stroke[$level - 1]}rem;
  height: ${({ $level }) => size[$level - 1] + stroke[$level - 1]}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: ${({ $color, $level, theme }) =>
    theme.colors[`${$color}${colorLevel($level)}`]};
  opacity: 0.5;
  filter: blur(0.1rem);
`;

export const TextWrapper = styled.div`
  width: 16.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const DateText = styled.p`
  color: black;
  ${({ theme }) => theme.fonts.body2_long};
`;

export const TitleText = styled.p`
  color: black;
  ${({ theme }) => theme.fonts.body1_normal_semi};
`;
