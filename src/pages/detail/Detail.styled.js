import styled from "styled-components";

const circleSize = [4, 5, 7, 10, 12];

export const DetailWrapper = styled.div`
  position: relative;
`;

export const SummaryTitle = styled.p`
  ${({ theme }) => theme.fonts.body2_normal_medi};
  color: #8F8F8F;
`

export const AISummaryContainer = styled.div`
  display: flex;
  width: 32rem;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`

export const StickyWrapper = styled.div`
  top: 0;
  display: flex;
  z-index: 5;
  background-color: #fffff7;
  gap: 1rem;
  position: sticky;
  flex-direction: column;
`;

export const GraphContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto;

  padding-bottom: 2.4rem;
`;

export const CircleContainer = styled.div`
  margin-left: ${({ $level }) => 8 - circleSize[$level - 1] / 2}rem;
`;

export const LineCircleContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;

  justify-items: center;
`;

export const DashedLine = styled.div`
  position: relative;
  border-left: 0.4rem dashed #d4d4d4;
  height: 6rem;
  margin-left: 8rem;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
`;

export const DescriptionContainer = styled.div`
  width: 32rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.3rem;
`;

export const NormalSemiText = styled.p`
  ${({ theme }) => theme.fonts.body2_normal_semi};
  color: black;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.4rem;
`;

export const ViewUserContainer = styled.div`
  width: 32rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.7rem;
`;
