import { useState } from "react";
import { TestWrapper } from "./Test.styled";
import TextArea from "../../components/commons/input/textArea/TextArea";
import TextField from "../../components/commons/input/textField/TextField";

const Test = () => {
  const [inputAreaValue, setInputAreaValue] = useState("");
  const [inputFieldValue, setInputFieldValue] = useState("");

  const handleChangeInputArea = (e) => {
    setInputAreaValue(e.target.value);
  };

  const handleChangeInputField = (e) => {
    setInputFieldValue(e.target.value);
  };

  return (
    <TestWrapper>
      test
      <TextArea
        value={inputAreaValue}
        onChange={handleChangeInputArea}
        maxLength={300}
      />
      <TextField
        value={inputFieldValue}
        onChange={handleChangeInputField}
        placeholder="테스트입니당"
        name="test"
        type="input"
      />
    </TestWrapper>
  );
};

export default Test;
