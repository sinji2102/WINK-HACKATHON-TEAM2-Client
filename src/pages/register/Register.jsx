import { useState } from "react";
import * as S from "./Register.styled";
import Header from "../../components/header/Header";
import TextField from "../../components/commons/input/textField/TextField";

const Register = () => {
  const [title, setTitle] = useState("");

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };

  return (
    <S.RegisterWrapper>
      <Header title="라이프 그래프 등록하기" />
      <S.FirstStepWrapper>
        <S.FirstStepText>라이프 그래프의 제목을 등록해 주세요.</S.FirstStepText>
        <TextField
          name="life-graph-title"
          value={title}
          onChange={handleTitleInput}
          maxLength={30}
          cap={true}
          placeholder="ex) 내가 공군 어학병이 될 수 있었던 이유"
        />
      </S.FirstStepWrapper>
    </S.RegisterWrapper>
  );
};

export default Register;
