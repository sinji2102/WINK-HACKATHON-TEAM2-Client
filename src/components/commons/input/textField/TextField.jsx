import { useCallback, useEffect, useRef, useState } from "react";
// import { IconEyeOff, IconEyeOn } from "@assets/svgs";
import * as S from "./TextField.styled";
import { splitGraphemes } from "../../../../hooks/useInputFilter";

const TextField = ({
  type = "input",
  name,
  value,
  onChange,
  maxLength,
  placeholder,
  narrow,
  unit,
  filter,
  cap,
  isDisabled,
  ...rest
}) => {
  const label = unit === "time" ? "분" : unit === "ticket" ? "매" : "원";

  const inputRef = useRef(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(
    type !== "password"
  ); // 비밀번호 입력값 보이기/숨기기
  const [inputValue, setInputValue] = useState(value); // 현재 입력값
  const prevValueRef = useRef(value); // 이전 입력값
  const rafRef = useRef(null); // requestAnimationFrame ID

  useEffect(() => {
    setInputValue(value);
    prevValueRef.current = value;
  }, [value]);

  const handleOnInput = useCallback(
    (e) => {
      const newValue = e.target.value;
      setInputValue(newValue);

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current); // 이전 requestAnimationFrame이 있으면 취소
      }

      rafRef.current = requestAnimationFrame(() => {
        // 새로운 requestAnimationFrame 요청
        let filteredValue = newValue;
        if (filter) {
          filteredValue = filter(newValue); // 전체 값을 필터링
        }

        if (maxLength && splitGraphemes(filteredValue).length > maxLength) {
          filteredValue = splitGraphemes(filteredValue)
            .slice(0, maxLength)
            .join("");
        }

        const newEvent = {
          ...e,
          target: {
            ...e.target,
            name: name,
            value: filteredValue,
          },
        };

        onChange(newEvent);
        prevValueRef.current = filteredValue; // 이전 입력 값을 현재 값으로 업데이트
        setInputValue(filteredValue); // 현재 입력값을 필터링된 값으로 업데이트
      });
    },
    [onChange, filter, maxLength, name]
  );

  // 값 지울 때
  const handleClearInput = () => {
    if (inputRef.current) {
      const inputName = inputRef.current.name;

      // 값 지우기
      inputRef.current.value = "";

      const newEvent = {
        target: {
          name: inputName,
          value: "",
        },
      };

      inputRef.current.focus();
      onChange(newEvent);
    }
  };

  // 비밀번호 입력값 보이기 여부 관리
  const handlePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <S.TextFieldLayout $narrow={narrow}>
      <S.TextFieldWrapper>
        <S.TextFieldInput
          $isDisabled={isDisabled}
          ref={inputRef}
          value={inputValue}
          name={name}
          onChange={handleOnInput}
          placeholder={placeholder}
          $narrow={narrow}
          type={isPasswordVisible ? "text" : "password"} // 비밀번호 보이기 여부를 위해 타입에 조건을 걸음
          {...rest}
        />
        {!narrow && !unit && value && type !== "password" && !isDisabled && (
          <S.TextClear onClick={handleClearInput} />
        )}
        {unit && <S.TextUnit>{label}</S.TextUnit>}
        {type === "password" && (
          <S.ToggleVisibilityIcon
            onClick={handlePasswordVisibility}
            // as={isPasswordVisible ? IconEyeOn : IconEyeOff}
          />
        )}
      </S.TextFieldWrapper>
      {maxLength && cap && (
        <S.TextCap>{`${splitGraphemes(value).length}/${maxLength}`}</S.TextCap>
      )}
    </S.TextFieldLayout>
  );
};

export default TextField;