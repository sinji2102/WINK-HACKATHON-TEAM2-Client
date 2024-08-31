import styled, { css } from "styled-components";

export const RegisterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: (var(--vh, 1vh) * 100);
`;

export const FirstStepWrapper = styled.section`
  padding: 1rem 2.3rem;
  gap: 1rem;
`;

export const FirstStepText = styled.div`
  ${({ theme }) => theme.fonts.body1_long};
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  width: 37rem;
  height: 0.2rem;
  color: ${({ theme }) => theme.colors.neutral70};
  border-top: 0.1rem solid;
  background: rgba(0, 0, 0, 0.25);
`;

export const GraphWrapper = styled.section``;

export const CircleContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  justify-items: center;
`;

export const DashedLine = styled.div`
  position: relative;
  border-left: 0.4rem dashed #d4d4d4;
  height: 6rem;
  margin-left: 1.25rem;
`;

export const AddCircle = styled.button`
  position: absolute;
  top: 3.2rem;
  left: -1.75rem;
  width: 3rem;
  height: 3rem;

  background-color: ${({ theme }) => theme.colors.lime90};
  border-radius: 50%;

  fill: var(#ccfca9);
  filter: blur(2px);
`;

const color = {
  red: "red60",
  orange: "orange60",
  lime: "lime60",
  cyan: "cyan60",
  purple: "purple60",
};

export const Circle = styled.div`
  position: absolute;
  top: 3.2rem;
  left: -1.75rem;
  width: 3rem;
  height: 3rem;

  /* background-color: ${({ theme }) => theme.colors.lime90}; */
  border-radius: 50%;

  fill: var(--lime-90, #ccfca9);
  filter: blur(2px);

  ${({ $color, theme }) => {
    const colorName = color[$color];

    const backgroundColor = theme.colors[colorName];

    return css`
      background-color: ${backgroundColor};
    `;
  }}
`;

export const Button = styled.button`
  display: fixed;
  width: 100%;
  bottom: 0;
  margin-top: 2rem;
  padding: 1.2rem 2.8rem;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.lime60};
  color: ${({ theme }) => theme.colors.white100};

  ${({ theme }) => theme.fonts.heading4};
`;
