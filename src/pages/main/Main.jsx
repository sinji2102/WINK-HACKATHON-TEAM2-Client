import {CarouselWrapper, MainWrapper, RankingText} from "./Main.styled.js";
import SearchBar from "../../components/commons/input/searchBar/SearchBar.jsx";

const Main = () => {
  return (
    <MainWrapper>
      <CarouselWrapper>
      </CarouselWrapper>
      <SearchBar />
      <RankingText>지금 가장 인기 있는 라이프 그래프!</RankingText>
    </MainWrapper>
  );
}

export default Main;
