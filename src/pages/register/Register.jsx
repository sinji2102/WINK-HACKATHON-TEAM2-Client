import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Register.styled";
import Header from "../../components/header/Header";
import TextField from "../../components/commons/input/textField/TextField";
import LevelCircle from "./components/LevelCircle";
import Modal from "./components/Modal";

const Register = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [currLevel, setCurrLevel] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [allCircle, setAllCircle] = useState([]);

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };

  const levelHandler = (value) => {
    setCurrLevel(value);
  };

  const modalHandler = () => {
    setModalOpen(!modalOpen);
  };

  const closeAnimation = () => {
    setAnimation((prev) => !prev);
  };

  const addCircleHandler = (value) => {
    const updatedCircleInfo = { ...value, level: currLevel };

    setAllCircle((prevCircles) => {
      const newCircles = [...prevCircles, updatedCircleInfo];
      return newCircles;
    });
  };

  const checkSubmit = () => {
    if (title && allCircle.length !== 0) {
      navigate("/main");
    }
    alert("제목 혹은 라이프 그래프를 한 개 이상 입력하세요!");
  };

  return (
    <S.RegisterWrapper>
      {modalOpen && (
        <Modal modalClose={modalHandler} addCircleHandler={addCircleHandler} />
      )}
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
      {allCircle.map((item, idx) => (
        <S.GraphWrapper key={idx}>
          <S.CircleContainer>
            <S.DashedLine>
              <S.Circle $color={item.colorType} />
            </S.DashedLine>
          </S.CircleContainer>
        </S.GraphWrapper>
      ))}
      <S.GraphWrapper>
        <S.CircleContainer>
          <S.DashedLine>
            <S.AddCircle
              onClick={() => {
                levelHandler();
                setAnimation((prev) => !prev);
              }}
            ></S.AddCircle>
            <S.AddIcon
              onClick={() => {
                levelHandler();
                setAnimation((prev) => !prev);
              }}
            >
              <img src="/assets/svgs/plus.svg" />
            </S.AddIcon>
            {animation && (
              <LevelCircle
                levelHandler={levelHandler}
                modalOpen={modalHandler}
                closeAnimation={closeAnimation}
              />
            )}
          </S.DashedLine>
        </S.CircleContainer>
      </S.GraphWrapper>
      {/* TODO : 버튼에 API 연결하기 */}
      <S.ButtonWrapper>
        <S.Button onClick={() => checkSubmit()}>
          라이프 그래프 완성하기
        </S.Button>
      </S.ButtonWrapper>
    </S.RegisterWrapper>
  );
};

export default Register;
