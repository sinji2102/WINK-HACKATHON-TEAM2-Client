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
import { privateAxios } from "../../apis/axiosInstance.js";
import { useNavigate, useParams } from "react-router-dom";

const graphDemo = {
  title: "테스트",
  author: "이정욱",
  viewCount: 99,
  summary: "AI가 내용을 요약 중입니다...",
  like: 10,
  circles: [],
};

export const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [lifeGraph, setLifeGraph] = useState(graphDemo);
  const [selectedCircleIdx, setSelectedCircleIdx] = useState(null);

  useEffect(() => {
    privateAxios.get(`/loadmap/${params.id}`).then((response) => {
      if (!response.data.loadmapAndColor || !response.data.loadmapCircleList) {
        navigate("/");
        return;
      }

      const graphData = response.data.loadmapAndColor.loadmapDto;
      const circleData = response.data.loadmapCircleList;
      const circles = circleData.map((circle) => {
        return {
          title: circle.title,
          date: circle.date,
          color: circle.colorType,
          level: circle.level,
        };
      });
      const graph = {
        title: graphData.title,
        author: graphData.user_name,
        viewCount: graphData.view,
        summary: graphData.summary,
        circles: circles,
      };

      setLifeGraph(graph);
    });
  }, []);

  const handleCircleClick = (index) => {
    setSelectedCircleIdx(index);
  };

  const closeModal = () => {
    setSelectedCircleIdx(null);
  };

  useEffect(() => {
    console.log("selectedCircleIdx updated:", selectedCircleIdx);
  }, [selectedCircleIdx]);

  return (
    <DetailWrapper>
      {selectedCircleIdx !== null && (
        <DetailModal
          data={lifeGraph.circles[selectedCircleIdx]}
          closeBtn={() => {
            closeModal();
          }}
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
      <LikeButton graphId={params.id} likeCount={lifeGraph.like} />
    </DetailWrapper>
  );
};

export default Detail;
