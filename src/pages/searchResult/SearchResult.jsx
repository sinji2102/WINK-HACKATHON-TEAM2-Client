import {LifeGraphCardWrapper, SearchResultWrapper, StickyWrapper} from "./SearchResult.styled.js";
import SearchBar from "../../components/commons/input/searchBar/SearchBar.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import LifeGraphCard from "../../components/commons/lifeGraphCard/LIfeGraphCard.jsx";
import Header from "../../components/header/Header.jsx";

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

const SearchResult = () => {
  const params = useParams();
  const [graphResults, setGraphResults] = useState([]);

  useEffect(() => {
    console.log(params.query);
    setGraphResults(lifeGraphCards);
  }, []);

  return (
    <>
      <StickyWrapper>
        <Header title={`'${params.query}' 검색 결과`} />
      </StickyWrapper>
      <SearchResultWrapper>
        <LifeGraphCardWrapper>
          {(graphResults.length === 0) ?
            <p>정보를 가져오는 중입니다...</p>
            :
            graphResults.map((data, index) => (
              <LifeGraphCard
                key={index}
                title={data.title}
                author={data.author}
                primaryColor={data.primaryColor}
              />
            ))
          }
        </LifeGraphCardWrapper>
      </SearchResultWrapper>
    </>
  );
}

export default SearchResult;
