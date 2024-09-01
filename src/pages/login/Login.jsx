import KakaoLoginButton from "./components/KakaoLoginButton.jsx";
import {LoginWrapper, SloganText, Title} from "./Login.styled.js";

const Login = () => {
  return (
    <LoginWrapper>
      <img src={'/assets/svgs/logo.svg'} width={100} height={100} alt={'logo'} />
      <SloganText>인생을 원으로 바라보다</SloganText>
      <Title>"라이프 써클"</Title>
      <KakaoLoginButton />
    </LoginWrapper>
  )
};

export default Login;
