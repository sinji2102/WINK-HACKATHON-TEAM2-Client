import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  padding: 2.4rem 2.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const CarouselWrapper = styled.div`
  height: 15rem;
  background-color: gray;
`;

export const RankingText = styled.h3`
  ${({ theme }) => theme.fonts.body1_normal_medi};
  padding: 1rem;
`
