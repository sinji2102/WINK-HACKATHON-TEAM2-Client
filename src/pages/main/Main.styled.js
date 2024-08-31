import styled from "styled-components";

export const MainWrapper = styled.div`
  width: auto;
  display: flex;
  padding: 2.4rem 2.3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const CarouselWrapper = styled.div`
  height: 15rem;
  background-color: gray;
`;

export const RankingTextWrapper = styled.div`
  width: 32.9rem;
  display: flex;
  align-items: flex-start;
  padding: 1rem;
`;

export const RankingText = styled.p`
  ${({ theme }) => theme.fonts.body1_normal_medi};
  color: black;
`

export const StickyWrapper = styled.div`
  top: 0;
  display: flex;
  z-index: 5;
  background-color: #FFFFF7;
  gap: 1rem;
  position: sticky;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LifeGraphCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  overflow-y: auto;
`

export const LogoutText = styled.button`
  ${({ theme }) => theme.fonts.body2_long};
  color: gray;
  text-align: center;
  text-decoration: underline;
`;
