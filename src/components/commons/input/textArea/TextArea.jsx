import * as S from "./TextArea.styled";
import { splitGraphemes } from "../../../../hooks/useInputFilter";

const TextArea = ({ value, onChange, maxLength, placeholder, ...rest }) => {
  const handleOnInput = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    let newValue = inputValue;
    if (maxLength && splitGraphemes(newValue).length > maxLength) {
      newValue = splitGraphemes(newValue).slice(0, maxLength).join("");
    }

    const newEvent = {
      ...e,
      target: {
        ...e.target,
        name: inputName,
        value: newValue,
      },
    };

    onChange(newEvent);
  };
  return (
    <S.TextAreaWrapper>
      <S.TextAreaInput
        {...rest}
        value={value}
        onChange={handleOnInput}
        placeholder={placeholder}
      />
      {maxLength && (
        <S.TextCap>{`${splitGraphemes(value).length}/${maxLength}`}</S.TextCap>
      )}
    </S.TextAreaWrapper>
  );
};

export default TextArea;
