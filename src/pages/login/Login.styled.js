import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: auto;
  height: 100vh;     
  padding: 2.3rem 6.8rem;
  display: flex;
    flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

export const SloganText = styled.p`
  ${({ theme }) => theme.fonts.heading4};
  color: black;
`

export const Title = styled.p`
    ${({ theme }) => theme.fonts.heading2};
    color: black;
`

export const EmptyIconContainer = styled.div`
    width: 2.1018rem;
    height: 1.9464rem;
`;

export const KakaoButtonWrapper = styled.button`
  width: 32.8rem;
  padding: 1.2rem 2.8rem;
  background-color: ${({ theme }) => theme.colors.kakao};
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -6.8rem);
  display: flex;
  justify-content: space-between;
  align-items: center;  
    
  > p {
    color: black;
    ${({ theme }) => theme.fonts.body1_normal_semi};
  }
`;

export const AdminLinkContainer = styled.div`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.8rem;
  align-items: center;

  a, span {
    ${({ theme }) => theme.fonts.caption1_medi};
    color: ${({ theme }) => theme.colors.neutral70};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
