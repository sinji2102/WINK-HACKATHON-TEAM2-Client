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
} from "./Detail.styled.js";
import GraphCircle from "./components/GraphCircle.jsx";
import { Divider } from "../register/Register.styled.js";
import DetailModal from "./components/DetailModal.jsx";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { mockLifeGraphs } from "../../mock/lifeGraphs.js";

export const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [lifeGraph, setLifeGraph] = useState(null);
  const [selectedCircleIdx, setSelectedCircleIdx] = useState(null);

  useEffect(() => {
    const graphId = parseInt(params.id, 10);
    const graphData = mockLifeGraphs.find((g) => g.id === graphId);

    if (graphData) {
      const graph = {
        title: graphData.title,
        author: graphData.author,
        viewCount: graphData.view,
        summary: graphData.content,
        like: graphData.like,
        circles: graphData.nodes.map((node) => ({
          title: node.text,
          color: node.color,
          level: node.level,
          content: "임시 콘텐츠",
        })),
      };
      setLifeGraph(graph);
    } else {
      // 해당 id의 그래프가 없을 경우 예외 처리
      navigate("/");
    }
  }, [params.id, navigate]);

  const handleCircleClick = (index) => {
    setSelectedCircleIdx(index);
  };

  const closeModal = () => {
    setSelectedCircleIdx(null);
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
      </GraphContainer>
      {/* <LikeButton graphId={params.id} likeCount={lifeGraph.like} iLike={lifeGraph.iLike} /> */}
    </DetailWrapper>
  );
};

export default Detail;
