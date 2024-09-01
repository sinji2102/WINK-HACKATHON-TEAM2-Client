import {
  Author,
  CardWrapper,
  Circle,
  CircleWrapper,
  ContentsWrapper,
  TextWrapper,
  Title
} from "./LifeGraphCard.styled.js";
import {useNavigate} from "react-router-dom";

const LifeGraphCard = ({ id, title, author, primaryColor }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/detail/${id}`);
  }

  return (
    <CardWrapper onClick={handleCardClick}>
      <ContentsWrapper>
        <CircleWrapper>
          <Circle $color={primaryColor}></Circle>
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
