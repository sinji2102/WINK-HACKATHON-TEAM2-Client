import {
  BorderCircle,
  Circle,
  CirclesContainer,
  CircleWrapper,
  DateText,
  TextWrapper,
  TitleText,
} from "./GraphCircle.styled.js";

const GraphCircle = ({ level, color, date, title, onClick }) => {
  return (
    <CircleWrapper>
      <CirclesContainer>
        <BorderCircle $color={color} $level={level} onClick={onClick} />
        <Circle $color={color} $level={level} onClick={onClick} />
      </CirclesContainer>
      <TextWrapper>
        <DateText>{date}</DateText>
        <TitleText>{title}</TitleText>
      </TextWrapper>
    </CircleWrapper>
  );
};

export default GraphCircle;
