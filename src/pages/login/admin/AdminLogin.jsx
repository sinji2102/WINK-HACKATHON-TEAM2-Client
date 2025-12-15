import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/header/Header";
import TextField from "../../../components/commons/input/textField/TextField";
import styled from "styled-components";

const AdminLoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2.4rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
  max-width: 32rem;
`;

const Button = styled.button`
  ${({ theme }) => theme.fonts.body1_normal_semi};
  background-color: ${({ theme }) => theme.colors.blue50};
  color: white;
  padding: 1.2rem;
  border-radius: 0.8rem;
  width: 100%;
`;

const AdminLogin = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login logic
    console.log("Admin Login:", { id, password });
    alert("관리자 로그인 성공!");
    navigate("/");
  };

  return (
    <>
      <Header title="관리자 로그인" />
      <AdminLoginWrapper>
        <Form onSubmit={handleSubmit}>
          <TextField
            name="admin-id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="아이디"
          />
          <TextField
            name="admin-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
          />
          <Button type="submit">로그인</Button>
        </Form>
      </AdminLoginWrapper>
    </>
  );
};

export default AdminLogin;
