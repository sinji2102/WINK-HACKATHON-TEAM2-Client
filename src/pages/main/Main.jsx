import {
  CarouselWrapper,
  LifeGraphCardWrapper, LogoutText,
  MainWrapper, NameWrapper, P,
  RankingText,
  RankingTextWrapper,
  StickyWrapper, UserName, Welcome, WelcomeWrapper
} from "./Main.styled.js";
import SearchBar from "../../components/commons/input/searchBar/SearchBar.jsx";
import {useEffect, useState} from "react";
import LifeGraphCard from "../../components/commons/lifeGraphCard/LIfeGraphCard.jsx";
import {useNavigate} from "react-router-dom";
import FloatingButton from "./components/FloatingButton.jsx";
import {privateAxios} from "../../apis/axiosInstance.js";

const Main = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('테스트');
  const [lifeGraphs, setLifeGraphs] = useState([]);

  const handleLogout = () => {
    if (localStorage.getItem('token')) {
      localStorage.clear();
      navigate('/login');
    }
  }

  useEffect(() => {
    //console.log('메인 페이지 시작함');

    //토큰 정보가 없다면 로그인 페이지로 이동
    if (!localStorage.getItem('token')) {
      navigate('/login');
      return;
    }

    privateAxios.get(`/loadmap/main`)
      .then((response) => {
        if (!response.data.list || !response.data.name) {
          localStorage.clear();
          navigate('/login');
          return;
        }

        //console.log("api 받음");

        const name = response.data.name;
        const receivedGraphs = response.data.list;
        const graphs = receivedGraphs.map((graphObject) => {
          const graph = graphObject.loadmapDto;
          return ({
            id: graph.id,
            title: graph.title,
            author: graph.user_name,
            primaryColor: graphObject.color,
          })
        });

        //console.log(graphs);

        setLifeGraphs(graphs);
        setUsername(name);
      })
  }, []);

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
          {
            lifeGraphs.map((data, index) => (
              <LifeGraphCard
                key={index}
                title={data.title}
                author={data.author}
                primaryColor={data.primaryColor}
              />
            ))
          }
        </LifeGraphCardWrapper>
        <LogoutText
          onClick={handleLogout}
        >
          로그아웃
        </LogoutText>
        <FloatingButton />
      </MainWrapper>
    </>
  );
}

export default Main;
