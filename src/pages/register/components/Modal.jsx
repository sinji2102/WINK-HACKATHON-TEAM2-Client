import { useState, useEffect } from "react";
import * as S from "./Modal.styled";
import TextField from "../components/TextField";
import TextArea from "../../../components/commons/input/textArea/TextArea";

const Modal = ({ modalClose, addCircleHandler, editCircleHandler, initialData, circleIndex }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("");

  const isEditMode = initialData !== null;

  const COLOR_LIST = ["빨강", "주황", "연두", "파랑", "보라"];
  const colorTranslationMap = {
    red: "빨강",
    orange: "주황",
    lime: "연두",
    cyan: "파랑",
    purple: "보라",
  };
  const reverseColorTranslationMap = Object.fromEntries(Object.entries(colorTranslationMap).map(a => a.reverse()));


  useEffect(() => {
    if (isEditMode) {
      setTitle(initialData.title);
      setDate(initialData.date);
      setContent(initialData.content);
      setColor(reverseColorTranslationMap[initialData.colorType]);
    }
  }, [initialData, isEditMode]);


  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleColor = (value) => {
    setColor(value);
  };

  const handleSubmit = async () => {
    if (title && date && content && color) {
      let translatedColor;
      switch (color) {
        case "빨강":
          translatedColor = "red";
          break;
        case "주황":
          translatedColor = "orange";
          break;
        case "연두":
          translatedColor = "lime";
          break;
        case "파랑":
          translatedColor = "cyan";
          break;
        case "보라":
          translatedColor = "purple";
          break;
        default:
          translatedColor = "lime";
      }

      const formData = {
        title: title,
        date: date,
        content: content,
        colorType: translatedColor,
        level: initialData?.level // Preserve level on edit
      };

      if (isEditMode) {
        editCircleHandler(circleIndex, formData);
      } else {
        addCircleHandler(formData);
      }

      modalClose();
    } else {
      alert("제목, 날짜, 상세 내용, 서클 색을 모두 입력해 주세요.");
    }
  };

  return (
    <S.ModalWrapper>
      <S.ModalContainer>
        <S.CloseBtn
          onClick={() => {
            modalClose();
          }}
        >
          <img src="/assets/svgs/close.svg" />
        </S.CloseBtn>
        <S.InputContainer>
          <S.InputTitle>라이프 서클의 제목을 등록해 주세요.</S.InputTitle>
          <TextField
            placeholder="ex) 공군 어학병 지원"
            maxLength={20}
            cap={true}
            value={title}
            onChange={handleTitle}
          />
        </S.InputContainer>
        <S.InputContainer>
          <S.InputTitle>년/월/일을 원하는 형식으로 등록해 주세요.</S.InputTitle>
          <TextField
            placeholder="ex) 2024년 8월, 8월 31일 등"
            maxLength={20}
            cap={true}
            value={date}
            onChange={handleDate}
          />
        </S.InputContainer>
        <S.InputContainer>
          <S.InputTitle>상세 내용을 입력해 주세요</S.InputTitle>
          <TextArea maxLength={250} value={content} onChange={handleContent} />
        </S.InputContainer>
        <S.InputTitle>서클의 색을 선택해 주세요.</S.InputTitle>
        <S.LabelContainer>
          {COLOR_LIST.map((item) => (
            <>
              {item === color ? (
                <S.SelectedLabel $color={item} key={item}>
                  {item}
                </S.SelectedLabel>
              ) : (
                <S.Label key={item} onClick={() => handleColor(item)}>
                  {item}
                </S.Label>
              )}
            </>
          ))}
        </S.LabelContainer>
        <S.Button
          onClick={() => {
            handleSubmit();
          }}
        >
          {isEditMode ? "수정하기" : "추가하기"}
        </S.Button>
      </S.ModalContainer>
    </S.ModalWrapper>
  );
};

export default Modal;
