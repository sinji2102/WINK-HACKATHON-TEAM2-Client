import styled from "styled-components";

export const FloatingWrapper = styled.button`
  width: 7rem;
  height: 7rem;
  flex-direction: column;
  border-radius: 100%;
  background-color: white;
  border: 1px solid ${({ theme, $isLiked }) => $isLiked ? theme.colors.red50 : theme.colors.neutral90};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  position: sticky;
  bottom: 0;
  right: 0;
  transform: translate(370%, -50%);
  transition: all 0.2s ease-in-out;
`

export const LikeIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  transition: all 0.2s ease-in-out;
  ${({ $isLiked }) => $isLiked && `
    filter: invert(30%) sepia(100%) saturate(5000%) hue-rotate(330deg) brightness(100%) contrast(100%);
  `}
`;


export const LikeNumber = styled.p`
  ${({ theme }) => theme.fonts.body2_long};
  color: black;
`;
