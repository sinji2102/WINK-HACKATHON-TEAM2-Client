import * as S from "./LevelCircle.styled";

const LevelCircle = () => {
  const LEVEL_LIST = [1, 2, 3, 4, 5];

  return (
    <S.LevelCircleWrapper>
      {LEVEL_LIST.map((item) => (
        <S.AnimatedCircle key={item} $size={item} />
      ))}
    </S.LevelCircleWrapper>
  );
};

export default LevelCircle;
