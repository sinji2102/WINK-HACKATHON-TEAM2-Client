import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "../register/Register.styled";
import Header from "../../components/header/Header";
import TextField from "../../components/commons/input/textField/TextField";
import LevelCircle from "../register/components/LevelCircle";
import Modal from "../register/components/Modal";
import { mockLifeGraphs } from "../../mock/lifeGraphs";

const Edit = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [title, setTitle] = useState("");
  const [currLevel, setCurrLevel] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [allCircle, setAllCircle] = useState([]);
  const [selectedCircleIndex, setSelectedCircleIndex] = useState(null);

  useEffect(() => {
    const graphId = parseInt(params.id, 10);
    const graphData = mockLifeGraphs.find((g) => g.id === graphId);

    if (graphData) {
      setTitle(graphData.title);
      const circles = graphData.nodes.map(node => ({
        title: node.text,
        content: node.content,
        colorType: node.color,
        level: node.level,
        date: "2023-01-01" // placeholder
      }));
      setAllCircle(circles);
    } else {
      alert("존재하지 않는 그래프입니다.");
      navigate("/");
    }
  }, [params.id, navigate]);

  const openModalForEdit = (index) => {
    setSelectedCircleIndex(index);
    modalHandler();
  };

  const editCircleHandler = (index, updatedCircle) => {
    setAllCircle(prevCircles =>
      prevCircles.map((circle, i) => (i === index ? updatedCircle : circle))
    );
    setSelectedCircleIndex(null); // Reset after editing
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

  const checkSubmit = async () => {
    if (title && allCircle.length !== 0) {
      console.log("Mock update:", { title, allCircle });
      navigate(`/detail/${params.id}`);
    } else {
      alert("라이프 그래프는 한 개 이상이어야 합니다!");
    }
  };

  return (
    <S.RegisterWrapper>
      {modalOpen && (
        <Modal
          modalClose={() => {
            modalHandler();
            setSelectedCircleIndex(null); // Reset on close
          }}
          addCircleHandler={addCircleHandler}
          editCircleHandler={editCircleHandler}
          initialData={selectedCircleIndex !== null ? allCircle[selectedCircleIndex] : null}
          circleIndex={selectedCircleIndex}
        />
      )}
      <Header title="라이프 그래프 수정하기" />
      <S.FirstStepWrapper>
        <S.FirstStepText>라이프 그래프의 제목</S.FirstStepText>
        <TextField
          name="life-graph-title"
          value={title}
          maxLength={30}
          cap={true}
          disabled={true} // Title is not editable
        />
      </S.FirstStepWrapper>
      <S.Divider />
      {allCircle.map((item, idx) => (
        <S.GraphWrapper key={idx} onClick={() => openModalForEdit(idx)}>
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
      <S.ButtonWrapper>
        <S.Button onClick={() => checkSubmit()}>
          수정 완료
        </S.Button>
      </S.ButtonWrapper>
    </S.RegisterWrapper>
  );
};

export default Edit;