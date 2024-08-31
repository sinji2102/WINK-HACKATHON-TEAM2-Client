import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  background-color: white;
  display: flex;
  padding: 1.3rem 1.2rem;
  align-items: flex-start;
  gap: 1rem;
  border-radius: 1rem;
  border: 0.1rem solid var(--line-gray);
`;

export const SearchBarInput = styled.input`
  ${({ theme }) => theme.fonts.body1_long};
  color: black;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.coolNeutral90};
  }
`;
