import { useEffect, useState } from "react";
import * as S from "./Register.styled";
import Header from "../../components/header/Header";
import TextField from "../../components/commons/input/textField/TextField";
import LevelCircle from "./components/LevelCircle";
import Modal from "./components/Modal";

const Register = () => {
  const [title, setTitle] = useState("");
  const [cnt, setCnt] = useState([0, 1, 2]);
  const [currIdx, setCurrIdx] = useState(null);
  const [currLevel, setCurrLevel] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };

  const handleOpenAddBtn = (idx) => {
    setCurrIdx(idx);
  };

  const levelHandler = (value) => {
    setCurrLevel(value);
  };

  const modalHandler = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {}, [modalOpen]);

  return (
    <S.RegisterWrapper>
      {modalOpen && <Modal modalClose={modalHandler} />}
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
      <S.Divider />
      {cnt.map((item) => (
        <S.GraphWrapper key={item}>
          <S.CircleContainer>
            <S.DashedLine>
              <S.AddCircle onClick={() => handleOpenAddBtn(item)} />
              {currIdx === item && (
                <LevelCircle
                  levelHandler={levelHandler}
                  modalOpen={modalHandler}
                />
              )}
            </S.DashedLine>
          </S.CircleContainer>
        </S.GraphWrapper>
      ))}
    </S.RegisterWrapper>
  );
};

export default Register;
