import styled from "styled-components";

export const FloatingWrapper = styled.button`
  width: 7rem;
  height: 7rem;
  flex-direction: column;
  border-radius: 100%;
  background-color: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  position: sticky;
  bottom: 0;
  right: 0;
  transform: translate(370%, -50%);
`

export const LikeNumber = styled.p`
  ${({ theme }) => theme.fonts.body2_long};
  color: black;
`;
