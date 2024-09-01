import {FloatingWrapper, LikeNumber} from "./LikeButton.styled.js";
import {privateAxios} from "../../../apis/axiosInstance.js";
import {useEffect, useState} from "react";

const LikeButton = ({ graphId, likeCount, iLike }) => {
  const [isLike, setIsLike] = useState(iLike);
  const [like, setLike] = useState(likeCount);

  const handleFloatingClick = () => {
    //좋아요 POST 요청
    privateAxios.post(`/loadmap/${graphId}/like`)
      .then((response) => {
        if (response.status !== 200) {
          console.log('좋아요 실패');
          return;
        }

        setIsLike((isLike) => !isLike);

        if (isLike) {
          setLike((like) => like - 1);
        } else {
          setLike((like) => like + 1);
        }
      });
  }

  useEffect(() => {
    console.log(like);
  }, [like]);

  return (
    <FloatingWrapper onClick={handleFloatingClick}>
      <img src={'/assets/svgs/like.svg'} alt="like" />
      <LikeNumber>{like}</LikeNumber>
    </FloatingWrapper>
  );
};

export default LikeButton;
