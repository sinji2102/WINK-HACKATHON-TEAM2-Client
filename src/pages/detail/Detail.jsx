import Header from "../../components/header/Header.jsx";
import {
  AISummaryContainer,
  CircleContainer,
  DashedLine,
  DescriptionContainer,
  DescriptionWrapper,
  DetailWrapper,
  GraphContainer,
  InfoContainer,
  LineCircleContainer,
  NormalSemiText,
  StickyWrapper,
  SummaryTitle,
  ViewUserContainer,
  ActionButtonsContainer,
  ActionButton,
  Spacer,
} from "./Detail.styled.js";
import GraphCircle from "./components/GraphCircle.jsx";
import { Divider } from "../register/Register.styled.js";
import DetailModal from "./components/DetailModal.jsx";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { mockLifeGraphs } from "../../mock/lifeGraphs.js";
import LikeButton from "./components/LikeButton.jsx";

export const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [lifeGraph, setLifeGraph] = useState(null);
  const [selectedCircleIdx, setSelectedCircleIdx] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    const graphId = parseInt(params.id, 10);
    const graphData = mockLifeGraphs.find((g) => g.id === graphId);

    if (graphData) {
      const graph = {
        title: graphData.title,
        author: graphData.author,
        viewCount: graphData.view,
        summary: graphData.content,
        circles: graphData.nodes.map((node) => ({
          title: node.text,
          color: node.color,
          level: node.level,
          content: node.content,
          date: "2023-01-01", // Placeholder date
        })),
      };
      setLifeGraph(graph);
      setIsLiked(graphData.isLiked);
      setLikeCount(graphData.like);
    } else {
      navigate("/");
    }
  }, [params.id, navigate]);

  const handleCircleClick = (index) => {
    setSelectedCircleIdx(index);
  };

  const closeModal = () => {
    setSelectedCircleIdx(null);
  };

  const handleDelete = () => {
    if (window.confirm("정말로 이 그래프를 삭제하시겠습니까?")) {
      console.log(`Graph with id: ${params.id} would be deleted.`);
      navigate("/");
    }
  };

  const handleEdit = () => {
    navigate(`/edit/${params.id}`);
  };

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  if (!lifeGraph) {
    return <div>로딩 중...</div>;
  }

  return (
    <DetailWrapper>
      {selectedCircleIdx !== null && (
        <DetailModal
          data={lifeGraph.circles[selectedCircleIdx]}
          closeBtn={closeModal}
        />
      )}
      <StickyWrapper>
        <Header title={lifeGraph.title} />
        <DescriptionWrapper>
          <InfoContainer>
            <ViewUserContainer>
              <img src="/assets/svgs/user.svg" alt={"user"} />
              <NormalSemiText>{lifeGraph.author}</NormalSemiText>
            </ViewUserContainer>
            <ViewUserContainer>
              <img src="/assets/svgs/view.svg" alt={"view"} />
              <NormalSemiText>{lifeGraph.viewCount.toString()}</NormalSemiText>
            </ViewUserContainer>
            <ActionButtonsContainer>
              <ActionButton onClick={handleEdit}>수정</ActionButton>
              <ActionButton onClick={handleDelete}>삭제</ActionButton>
            </ActionButtonsContainer>
          </InfoContainer>
          <AISummaryContainer>
            <img src={"/assets/svgs/gemini.svg"} alt={"gemini"} />
            <SummaryTitle>의 한 문장 요약</SummaryTitle>
          </AISummaryContainer>
          <DescriptionContainer>
            <NormalSemiText>{lifeGraph.summary}</NormalSemiText>
          </DescriptionContainer>
        </DescriptionWrapper>
        <Divider />
      </StickyWrapper>
      <GraphContainer>
        {lifeGraph.circles.map((circle, index) => (
          <LineCircleContainer key={index}>
            <DashedLine />
            <CircleContainer $level={circle.level}>
              <GraphCircle
                title={circle.title}
                date={circle.date}
                color={circle.color}
                level={circle.level}
                onClick={() => handleCircleClick(index)}
              />
            </CircleContainer>
          </LineCircleContainer>
        ))}
        <Spacer />
      </GraphContainer>
      <LikeButton
        isLiked={isLiked}
        likeCount={likeCount}
        onLikeClick={handleLikeClick}
      />
    </DetailWrapper>
  );
};

export default Detail;