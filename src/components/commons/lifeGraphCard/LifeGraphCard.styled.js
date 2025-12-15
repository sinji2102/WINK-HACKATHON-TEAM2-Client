import styled, { css } from "styled-components";

export const CardWrapper = styled.div`
  width: 32rem;
  height: 18rem;
  border-radius: 1.6rem;
  border: 0.1rem solid var(--line-gray);
  ${({ $thumbnail, $primaryColor, theme }) => css`
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        ${theme.colors[$primaryColor + "50"]} 100%
      ),
      url(${$thumbnail});
  `}
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  padding: 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
`;

export const Title = styled.h3`
  ${({ theme }) => theme.fonts.body1_normal_medi};
  color: ${({ theme }) => theme.colors.white};
  width: 17.9rem;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: start;
`;

export const Author = styled.p`
  ${({ theme }) => theme.fonts.body2_long};
  color: ${({ theme }) => theme.colors.white};
`;

export const TagWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const Tag = styled.span`
  ${({ theme }) => theme.fonts.body2_normal_bold};
  color: ${({ theme }) => theme.colors.white};
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.4rem 0.8rem;
  border-radius: 0.4rem;
`;

export const StatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const View = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  ${({ theme }) => theme.fonts.body2_long};
  color: ${({ theme }) => theme.colors.white};
`;

export const Icon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;
