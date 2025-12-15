import {FloatingWrapper, LikeNumber, LikeIcon} from "./LikeButton.styled.js";

const LikeButton = ({ isLiked, likeCount, onLikeClick }) => {
  return (
    <FloatingWrapper onClick={onLikeClick} $isLiked={isLiked}>
      <LikeIcon src={'/assets/svgs/like.svg'} alt="like" $isLiked={isLiked} />
      <LikeNumber>{likeCount}</LikeNumber>
    </FloatingWrapper>
  );
};

export default LikeButton;

