import { useState } from "react";
import { TestWrapper } from "./Test.styled";
import TextArea from "../../components/commons/input/textArea/TextArea";

const Test = () => {
  const [inputAreaValue, setInputAreaValue] = useState("");

  const handleChangeInputArea = (e) => {
    setInputAreaValue(e.target.value);
  };

  return (
    <TestWrapper>
      test
      <TextArea
        value={inputAreaValue}
        onChange={handleChangeInputArea}
        maxLength={300}
      ></TextArea>
    </TestWrapper>
  );
};

export default Test;
