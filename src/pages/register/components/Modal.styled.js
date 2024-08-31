import styled from "styled-components";

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
  height: 53rem;
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
  margin-bottom: 1.2rem;
`;

export const InputTitle = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.body1_long};
  margin-bottom: 0.8rem;
`;
