import {
  CarouselWrapper,
  LifeGraphCardWrapper, LogoutText,
  MainWrapper,
  RankingText,
  RankingTextWrapper,
  StickyWrapper
} from "./Main.styled.js";
import SearchBar from "../../components/commons/input/searchBar/SearchBar.jsx";
import {useEffect, useState} from "react";
import LifeGraphCard from "../../components/commons/lifeGraphCard/LIfeGraphCard.jsx";
import {useNavigate} from "react-router-dom";

const lifeGraphCards = [
  {
    title: '공군 어학병이 될 수 있었던 이유',
    author: '김진성',
    primaryColor: 'lime60',
  },
  {
    title: '공군 어학병이 될 수 있었던 이유',
    author: '김진성',
    primaryColor: 'orange60',
  },
  {
    title: '공군 어학병이 될 수 있었던 이유',
    author: '김진성',
    primaryColor: 'cyan60',
  },
  {
    title: '공군 어학병이 될 수 있었던 이유',
    author: '김진성',
    primaryColor: 'lime60',
  },
  {
    title: '공군 어학병이 될 수 있었던 이유',
    author: '김진성',
    primaryColor: 'orange60',
  },
  {
    title: '공군 어학병이 될 수 있었던 이유',
    author: '김진성',
    primaryColor: 'cyan60',
  },
  {
    title: '공군 어학병이 될 수 있었던 이유',
    author: '김진성',
    primaryColor: 'lime60',
  },
  {
    title: '공군 어학병이 될 수 있었던 이유',
    author: '김진성',
    primaryColor: 'orange60',
  },
  {
    title: '공군 어학병이 될 수 있었던 이유',
    author: '김진성',
    primaryColor: 'cyan60',
  },
  {
    title: '공군 어학병이 될 수 있었던 이유',
    author: '김진성',
    primaryColor: 'lime60',
  },
  {
    title: '공군 어학병이 될 수 있었던 이유',
    author: '김진성',
    primaryColor: 'orange60',
  },
  {
    title: '공군 어학병이 될 수 있었던 이유',
    author: '김진성',
    primaryColor: 'cyan60',
  },
  {
    title: '공군 어학병이 될 수 있었던 이유',
    author: '김진성',
    primaryColor: 'lime60',
  },
  {
    title: '공군 어학병이 될 수 있었던 이유',
    author: '김진성',
    primaryColor: 'orange60',
  },
  {
    title: '공군 어학병이 될 수 있었던 이유',
    author: '김진성',
    primaryColor: 'cyan60',
  },
];

const Main = () => {
  const navigate = useNavigate();
  const [lifeGraphs, setLifeGraphs] = useState(lifeGraphCards);

  const handleLogout = () => {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      navigate('/login');
    }
  }

  useEffect(() => {
    console.log('메인 페이지 시작함');

    //토큰 정보가 없다면 로그인 페이지로 이동
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, []);

  return (
    <MainWrapper>
      <StickyWrapper>
        <CarouselWrapper>
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
    </MainWrapper>
  );
}

export default Main;
