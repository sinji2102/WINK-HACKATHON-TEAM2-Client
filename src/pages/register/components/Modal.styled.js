import styled, { css } from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 2;
`;

export const ModalContainer = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 32rem;
  height: 65rem;
  padding: 4rem 2.3rem;

  top: "50%";
  left: "50%";

  background-color: ${({ theme }) => theme.colors.white100};

  z-index: 5;

  border-radius: 0.6rem;
`;

export const CloseBtn = styled.button`
  position: absolute;

  right: 2rem;
  top: 2rem;
`;

export const InputContainer = styled.section`
  gap: 0.8rem;
  margin-bottom: 0.6rem;
`;

export const InputTitle = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.body1_long};
  margin-bottom: 0.6rem;
  color: black;
`;

export const LabelContainer = styled.button`
  display: flex;
  flex-direction: row;
  gap: 0.6rem;
`;

export const Label = styled.button`
  display: flex;
  width: 4.8rem;
  height: 3rem;

  align-items: center;
  justify-content: center;

  border-radius: 9999px;
  ${({ theme }) => theme.fonts.caption1_medi};
  background-color: ${({ theme }) => theme.colors.coolNeutral98};
`;

const color = {
  빨강: "red60",
  주황: "orange60",
  연두: "lime60",
  파랑: "cyan60",
  보라: "purple60",
};

export const SelectedLabel = styled.button`
  display: flex;
  width: 4.8rem;
  height: 3rem;

  align-items: center;
  justify-content: center;

  border-radius: 9999px;
  ${({ theme }) => theme.fonts.caption1_medi};
  background-color: ${({ theme }) => theme.colors.coolNeutral90};

  ${({ $color, theme }) => {
    const colorName = color[$color];

    const backgroundColor = theme.colors[colorName];

    return css`
      background-color: ${backgroundColor};
    `;
  }}
`;

export const Button = styled.button`
  display: flex;
  width: 28rem;
  margin-top: 1.5rem;
  padding: 1.2rem 2.8rem;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.lime60};
  color: ${({ theme }) => theme.colors.white100};

  ${({ theme }) => theme.fonts.heading4};
`;
