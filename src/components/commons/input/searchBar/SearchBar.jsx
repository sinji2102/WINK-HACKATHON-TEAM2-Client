import {SearchBarInput, SearchBarWrapper} from "./SearchBar.styled.js";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";

const SearchBar = () => {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const onSubmit = () => {
    //검색 결과 페이지로 이동
    const value = inputRef.current.value;

    console.log(value);
    navigate(`/search/${value}`);
  }

  const onEnterKeyDown = (event) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  }


  return (
    <SearchBarWrapper>
      <img src='assets/svgs/search.svg' alt={'search'} />
      <SearchBarInput
        type='text'
        ref={inputRef}
        placeholder='검색어를 입력해 주세요'
        onKeyDown={onEnterKeyDown}
      />
    </SearchBarWrapper>
  );
}

export default SearchBar;
