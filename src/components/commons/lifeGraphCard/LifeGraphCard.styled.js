import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 32rem;
  gap: 1rem;
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 1.6rem;
  border: 0.1rem solid var(--line-gray);
`;

export const ContentsWrapper = styled.div`
  width: 28rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h3`
  ${({ theme }) => theme.fonts.body1_normal_medi};
  color: black;
  width: 17.9rem;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: start;
`

export const Author = styled.p`
  ${({ theme }) => theme.fonts.body2_long};
  color: black;
`;

export const CircleWrapper = styled.div`
  width: 9rem;
  height: 9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 0.1rem solid var(--line-gray);
  border-radius: 100%;
`;

export const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  background-color: ${({ color, theme }) => theme.colors[color]};
  stroke-width: 2rem;
  stroke: rgba(174, 247, 121, 0.50);
  filter: blur(0.2rem);
`;
