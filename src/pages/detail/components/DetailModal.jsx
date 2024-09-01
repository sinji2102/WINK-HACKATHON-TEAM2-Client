import * as S from "./DetatilModal.styled";

const DetailModal = ({ data, closeBtn }) => {
  return (
    <S.DetailModalWrapper>
      <S.DetailModal $color={data.color} $level={data.level}></S.DetailModal>
      <S.CloseBtn
        onClick={() => {
          closeBtn();
        }}
      >
        <img src="/assets/svgs/close.svg" />
      </S.CloseBtn>
      <S.TitleText>{data.title}</S.TitleText>
      <S.DateText>{data.date}</S.DateText>
      <S.ContentText>{data.content}</S.ContentText>
    </S.DetailModalWrapper>
  );
};

export default DetailModal;
