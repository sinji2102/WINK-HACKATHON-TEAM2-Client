import {EmptyText, LifeGraphCardWrapper, SearchResultWrapper, StickyWrapper} from "./SearchResult.styled.js";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import LifeGraphCard from "../../components/commons/lifeGraphCard/LIfeGraphCard.jsx";
import Header from "../../components/header/Header.jsx";
import { mockLifeGraphs } from "../../mock/lifeGraphs.js";

const SearchResult = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [graphResults, setGraphResults] = useState([]);

  useEffect(() => {
    const query = params.query.toLowerCase();
    const results = mockLifeGraphs.filter(graph =>
      graph.title.toLowerCase().includes(query) ||
      graph.tags.some(tag => tag.toLowerCase().includes(query))
    );
    setGraphResults(results);
  }, [params.query]);

  return (
    <>
      <StickyWrapper>
        <Header title={`'${params.query}' 검색 결과`} />
      </StickyWrapper>
      <SearchResultWrapper>
        <LifeGraphCardWrapper>
          {(graphResults.length === 0) ?
            <EmptyText>검색 결과가 존재하지 않습니다.</EmptyText>
            :
            graphResults.map((data) => (
              <LifeGraphCard
                key={data.id}
                id={data.id}
                title={data.title}
                author={data.author}
                view={data.view}
                like={data.like}
                tags={data.tags}
                thumbnail={data.thumbnail}
              />
            ))
          }
        </LifeGraphCardWrapper>
      </SearchResultWrapper>
    </>
  );
}

export default SearchResult;
