import styled from "styled-components";

export const SearchResultWrapper = styled.div`
  width: auto;
  display: flex;
  padding: 2.4rem 2.3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const EmptyText= styled.p`
  width: 32rem;
  padding: 1.2rem 1.3rem;
  ${({ theme }) => theme.fonts.body1_normal_medi};
  text-align: center;
  color: gray;
`

export const QueryTextWrapper = styled.div`
  width: 32.9rem;
  display: flex;
  align-items: flex-start;
  padding: 1rem;
`;

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

export const LoadingText = styled.div`
  ${({ theme }) => theme.font.body1_normal_medi}
`
