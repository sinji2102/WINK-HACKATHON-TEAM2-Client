import {EmptyText, LifeGraphCardWrapper, SearchResultWrapper, StickyWrapper} from "./SearchResult.styled.js";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import LifeGraphCard from "../../components/commons/lifeGraphCard/LIfeGraphCard.jsx";
import Header from "../../components/header/Header.jsx";
import {privateAxios} from "../../apis/axiosInstance.js";

const SearchResult = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [graphResults, setGraphResults] = useState([]);

  useEffect(() => {
    privateAxios.get(`/loadmap?keyword=${params.query}`)
      .then((response) => {
        if (!response.data.list) {
          localStorage.clear();
          navigate('/login');
          return;
        }

        //console.log("api 받음");

        const receivedGraphs = response.data.list;
        const graphs = receivedGraphs.map((graphObject) => {
          const graph = graphObject.loadmapDto;
          return ({
            id: graph.id,
            title: graph.title,
            author: graph.user_name,
            primaryColor: graphObject.color + '60',
          })
        });

        //console.log(graphs);

        setGraphResults(graphs);
      })
  }, []);

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
