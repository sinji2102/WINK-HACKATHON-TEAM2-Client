import styled from "styled-components";

export const RegisterWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const FirstStepWrapper = styled.section`
  padding: 1rem 2.3rem;
  gap: 1rem;
`;

export const FirstStepText = styled.div`
  ${({ theme }) => theme.fonts.body1_long};
`;
