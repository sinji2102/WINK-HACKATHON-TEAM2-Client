import { useState } from "react";
import * as S from "./Modal.styled";
import TextField from "../components/TextField";
import TextArea from "../../../components/commons/input/textArea/TextArea";

const Modal = ({ modalClose }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
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
      </S.ModalContainer>
    </S.ModalWrapper>
  );
};

export default Modal;
