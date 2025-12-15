import {
  Author,
  CardWrapper,
  ContentsWrapper,
  Icon,
  InfoWrapper,
  StatsWrapper,
  Tag,
  TagWrapper,
  TextWrapper,
  Title,
  View,
} from "./LifeGraphCard.styled.js";
import { useNavigate } from "react-router-dom";
import viewIcon from "/assets/svgs/view.svg";
import likeIcon from "/assets/svgs/like.svg";

const LifeGraphCard = ({
  id,
  title,
  author,
  view,
  like,
  tags,
  thumbnail,
  primaryColor,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <CardWrapper
      onClick={handleCardClick}
      $thumbnail={thumbnail}
      $primaryColor={primaryColor}
    >
      <ContentsWrapper>
        <InfoWrapper>
          <TextWrapper>
            <Title>{title}</Title>
            <Author>{author}</Author>
          </TextWrapper>
          <TagWrapper>
            {tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagWrapper>
        </InfoWrapper>
        <StatsWrapper>
          <View>
            <Icon src={viewIcon} />
            {view}
          </View>
          <View>
            <Icon src={likeIcon} />
            {like}
          </View>
        </StatsWrapper>
      </ContentsWrapper>
    </CardWrapper>
  );
};

export default LifeGraphCard;
