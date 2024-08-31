import {FloatingWrapper} from "../Main.styled.js";
import {useNavigate} from "react-router-dom";

const FloatingButton = () => {
  const navigate = useNavigate();

  const handleFloatingClick = () => {
    navigate('/register');
  }

  return (
    <FloatingWrapper onClick={handleFloatingClick}>
      <img src={'assets/svgs/plus.svg'} alt="plus" width={30} height={30} />
    </FloatingWrapper>
  );
};

export default FloatingButton;
