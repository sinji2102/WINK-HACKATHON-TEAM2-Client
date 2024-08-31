import Header from "../../components/header/Header.jsx";
import {
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
  ViewUserContainer,
} from "./Detail.styled.js";
import GraphCircle from "./components/GraphCircle.jsx";
import { Divider } from "../register/Register.styled.js";
import DetailModal from "./components/DetailModal.jsx";
import { useEffect, useState } from "react";

const graphDemo = {
  title: "테스트",
  author: "이정욱",
  viewCount: 97,
  summary:
    "이 텍스트는 한 줄 요약을 위한 텍스트입니다. 아얾ㄷ;ㅓㄹ;ㅑㅐㅁㄹ먿ㄹㅁㄷ럄ㄷㄹ;먀ㅐㅓㄹㄷㅁㅁㄷ랴ㅐㅇㅇㅇㅇㅇ",
  circles: [
    {
      title: "test",
      date: "2024년 9월 1일",
      color: "lime",
      level: 5,
    },
    {
      title: "test",
      date: "2024년 9월 1일",
      color: "lime",
      level: 4,
    },
    {
      title: "test",
      date: "2024년 9월 1일",
      color: "lime",
      level: 2,
    },
    {
      title: "test",
      date: "2024년 9월 1일",
      color: "lime",
      level: 1,
    },
    {
      title: "test",
      date: "2024년 9월 1일",
      color: "lime",
      level: 4,
    },
    {
      title: "test",
      date: "2024년 9월 1일",
      color: "lime",
      level: 3,
    },
    {
      title: "test",
      date: "2024년 9월 1일",
      color: "lime",
      level: 2,
    },
  ],
};

export const Detail = () => {
  const [lifeGraph, setLifeGraph] = useState(graphDemo);
  const [selectedCircleIdx, setSelectedCircleIdx] = useState(null);

  useEffect(() => {
    setLifeGraph(graphDemo);
  }, []);

  const handleCircleClick = (index) => {
    setSelectedCircleIdx(index);

    console.log(selectedCircleIdx);
  };

  return (
    <DetailWrapper>
      {selectedCircleIdx !== null && <DetailModal />}
      <StickyWrapper>
        <Header title={lifeGraph.title} />
        <DescriptionWrapper>
          <InfoContainer>
            <ViewUserContainer>
              <img src={"assets/svgs/user.svg"} alt={"user"} />
              <NormalSemiText>{lifeGraph.author}</NormalSemiText>
            </ViewUserContainer>
            <ViewUserContainer>
              <img src={"assets/svgs/view.svg"} alt={"view"} />
              <NormalSemiText>{lifeGraph.viewCount.toString()}</NormalSemiText>
            </ViewUserContainer>
          </InfoContainer>
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
    </DetailWrapper>
  );
};

export default Detail;
