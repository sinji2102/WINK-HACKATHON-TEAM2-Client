import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: auto;
  padding: 2.4rem 2.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
