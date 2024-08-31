import * as S from "./Header.styled";
import { useNavigate } from "react-router-dom";

const Header = ({ title }) => {
  const navigate = useNavigate();

  const handleArrow = () => {
    navigate("../");
  };

  return (
    <S.HeaderWrapper>
      <S.Arrow onClick={handleArrow}>
        <img src="/assets/svgs/Vector.svg" />
      </S.Arrow>
      <S.HeaderText>{title}</S.HeaderText>
    </S.HeaderWrapper>
  );
};

export default Header;
