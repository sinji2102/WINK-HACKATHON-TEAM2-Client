import {EmptyIconContainer, KakaoButtonWrapper} from "../Login.styled.js";

const KakaoLoginButton = () => {
  const handleLogin = () => {
    window.location.href = import.meta.env.VITE_KAKAO_LOGIN_URL;
  }

  return (
    <KakaoButtonWrapper
      onClick={handleLogin}
    >
      <img src='assets/svgs/kakao.svg' alt='kakao' />
      <p>카카오로 시작하기</p>
      <EmptyIconContainer />
    </KakaoButtonWrapper>
  );
};

export default KakaoLoginButton;
