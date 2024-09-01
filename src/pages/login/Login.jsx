import KakaoLoginButton from "./components/KakaoLoginButton.jsx";
import {LoginWrapper, SloganText, Title} from "./Login.styled.js";

const Login = () => {
  return (
    <LoginWrapper>
      <img src={'/assets/svgs/logo.svg'} width={100} height={100} alt={'logo'} />
      <SloganText>둥글게 보는 인생 로드맵</SloganText>
      <Title>"LIFE-CIRCLE"</Title>
      <KakaoLoginButton />
    </LoginWrapper>
  )
};

export default Login;
