import styled from "styled-components";

export const TestWrapper = styled.section`
  width: auto;
  ${({ theme }) => theme.fonts.heading2};
  background-color: ${({ theme }) => theme.colors.b01};
`;
