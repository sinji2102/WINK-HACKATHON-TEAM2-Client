import {
  BorderCircle,
  Circle,
  CirclesContainer,
  CircleWrapper,
  DateText,
  TextWrapper,
  TitleText
} from "./GraphCircle.styled.js";

const GraphCircle = ({ level, color, date, title }) => {
  return (
    <CircleWrapper>
      <CirclesContainer>
        <BorderCircle $color={color} $level={level} />
        <Circle $color={color} $level={level} />
      </CirclesContainer>
      <TextWrapper>
        <DateText>{date}</DateText>
        <TitleText>{title}</TitleText>
      </TextWrapper>
    </CircleWrapper>
  );
};

export default GraphCircle;
