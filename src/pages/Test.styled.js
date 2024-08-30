import styled from "styled-components";

export const TestWrapper = styled.section`
  width: auto;
  ${({ theme }) => theme.fonts.heading1};
  background-color: ${({ theme }) => theme.colors.black0};
`;
