import * as S from "./LevelCircle.styled";

const LevelCircle = ({ levelHandler, modalOpen }) => {
  const LEVEL_LIST = [1, 2, 3, 4, 5];

  return (
    <S.LevelCircleWrapper>
      {LEVEL_LIST.map((item) => (
        <S.AnimatedCircle
          key={item}
          $size={item}
          onClick={(() => levelHandler(item), () => modalOpen())}
        />
      ))}
    </S.LevelCircleWrapper>
  );
};

export default LevelCircle;
