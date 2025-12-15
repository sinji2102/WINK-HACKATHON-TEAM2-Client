import {
  CarouselWrapper,
  LifeGraphCardWrapper,
  LogoutText,
  MainWrapper,
  NameWrapper,
  P,
  RankingText,
  RankingTextWrapper,
  StickyWrapper,
  UserName,
  Welcome,
  WelcomeWrapper,
} from "./Main.styled.js";
import SearchBar from "../../components/commons/input/searchBar/SearchBar.jsx";
import { useState } from "react";
import LifeGraphCard from "../../components/commons/lifeGraphCard/LIfeGraphCard.jsx";
import { useNavigate } from "react-router-dom";
import FloatingButton from "./components/FloatingButton.jsx";
import { mockLifeGraphs } from "../../mock/lifeGraphs.js";

const Main = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("사용자");
  const [lifeGraphs, setLifeGraphs] = useState(mockLifeGraphs);

  const handleLogout = () => {
    if (localStorage.getItem("token")) {
      localStorage.clear();
      navigate("/login");
    }
  };

  return (
    <>
      <MainWrapper>
        <StickyWrapper>
          <CarouselWrapper>
            <WelcomeWrapper>
              <NameWrapper>
                <UserName>{username}</UserName>
                <P>님</P>
              </NameWrapper>
              <Welcome>환영합니다!</Welcome>
            </WelcomeWrapper>
          </CarouselWrapper>
          <SearchBar />
          <RankingTextWrapper>
            <RankingText>지금 가장 인기 있는 라이프 그래프!</RankingText>
          </RankingTextWrapper>
        </StickyWrapper>
        <LifeGraphCardWrapper>
          {lifeGraphs.map((data) => (
            <LifeGraphCard
              key={data.id}
              id={data.id}
              title={data.title}
              author={data.author}
              view={data.view}
              like={data.like}
              tags={data.tags}
              thumbnail={data.thumbnail}
              primaryColor={data.primaryColor}
            />
          ))}
        </LifeGraphCardWrapper>
        <LogoutText onClick={handleLogout}>로그아웃</LogoutText>
        <FloatingButton />
      </MainWrapper>
    </>
  );
};

export default Main;
