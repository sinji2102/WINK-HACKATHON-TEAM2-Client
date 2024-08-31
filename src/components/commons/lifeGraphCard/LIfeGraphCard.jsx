import {
  Author,
  CardWrapper,
  Circle,
  CircleWrapper,
  ContentsWrapper,
  TextWrapper,
  Title
} from "./LifeGraphCard.styled.js";

const LifeGraphCard = ({ title, author, primaryColor }) => {
  return (
    <CardWrapper>
      <ContentsWrapper>
        <CircleWrapper>
          <Circle color={primaryColor}></Circle>
        </CircleWrapper>
        <TextWrapper>
          <Title>{title}</Title>
          <Author>{author}</Author>
        </TextWrapper>
      </ContentsWrapper>
    </CardWrapper>
  );
}

export default LifeGraphCard;
