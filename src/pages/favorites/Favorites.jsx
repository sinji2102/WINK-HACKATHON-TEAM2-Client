import {EmptyText, LifeGraphCardWrapper, FavoritesWrapper, StickyWrapper} from "./Favorites.styled.js";
import {useEffect, useState} from "react";
import LifeGraphCard from "../../components/commons/lifeGraphCard/LIfeGraphCard.jsx";
import Header from "../../components/header/Header.jsx";
import { mockLifeGraphs } from "../../mock/lifeGraphs.js";

const Favorites = () => {
  const [favoriteGraphs, setFavoriteGraphs] = useState([]);

  useEffect(() => {
    const results = mockLifeGraphs.filter(graph => graph.isLiked);
    setFavoriteGraphs(results);
    // Note: This only shows the default liked graphs from mock data.
    // Likes/unlikes during the session won't be reflected here without global state.
  }, []);

  return (
    <>
      <StickyWrapper>
        <Header title={`찜한 목록`} />
      </StickyWrapper>
      <FavoritesWrapper>
        <LifeGraphCardWrapper>
          {(favoriteGraphs.length === 0) ?
            <EmptyText>찜한 그래프가 없습니다.</EmptyText>
            :
            favoriteGraphs.map((data) => (
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
            ))
          }
        </LifeGraphCardWrapper>
      </FavoritesWrapper>
    </>
  );
}

export default Favorites;