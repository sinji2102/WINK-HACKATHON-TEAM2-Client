import KakaoLoginButton from "./components/KakaoLoginButton.jsx";
import {
  LoginWrapper,
  SloganText,
  Title,
  AdminLinkContainer,
} from "./Login.styled.js";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <LoginWrapper>
      <img
        src={"/assets/svgs/logo.svg"}
        width={100}
        height={100}
        alt={"logo"}
      />
      <SloganText>둥글게 보는 인생 로드맵</SloganText>
      <Title>LIFE-CIRCLE</Title>
      <KakaoLoginButton />
      <AdminLinkContainer>
        <Link to="/login/admin">관리자 로그인</Link>
        <span>|</span>
        <Link to="/signup/admin">관리자 회원가입</Link>
      </AdminLinkContainer>
    </LoginWrapper>
  );
};

export default Login;
