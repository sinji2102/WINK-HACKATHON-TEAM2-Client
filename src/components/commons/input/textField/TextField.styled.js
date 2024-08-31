import { Generators } from "../../../../styles/generator";
import styled from "styled-components";

export const TextFieldLayout = styled.section`
  position: relative;
  width: ${({ $narrow }) => ($narrow ? "13.6rem" : "32.7rem")};
`;

export const TextFieldWrapper = styled.article`
  ${Generators.flexGenerator("row", "center", "center")}
`;

export const TextFieldInput = styled.input`
  width: 33rem;
  height: 5rem;
  height: ${({ $narrow }) => ($narrow ? "4.2rem" : "4.8rem")};
  padding: 0 1.6rem;

  color: ${({ theme, $isDisabled }) =>
    $isDisabled ? theme.colors.neutral60 : theme.colors.black0};

  background: ${({ theme }) => theme.colors.white100};
  border: 1px solid var(--line-gray);
  border-radius: 0.6rem;
  border-color: ${({ theme }) => theme.colors.line};

  // TODO : border 색 추가해 주신 거로 변경하기

  ${({ theme }) => theme.fonts.body2_normal_medi};

  &::placeholder {
    color: ${({ theme }) => theme.colors.coolNeutral90};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.black0};
  }
`;

export const TextClear = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  width: 2.4rem;

  cursor: pointer;
`;

export const TextUnit = styled.p`
  position: absolute;
  right: 1.6rem;

  color: ${({ theme }) => theme.colors.black0};
  ${({ theme }) => theme.fonts.body2_normal_medi};
`;

export const ToggleVisibilityIcon = styled.section`
  position: absolute;
  right: 1.6rem;

  width: 2.4rem;
`;

export const TextCap = styled.p`
  ${Generators.flexGenerator("row", "center", "end")}

  width: 100%;
  margin: 0;
  margin-top: 0.6rem;

  color: ${({ theme }) => theme.colors.coolNeutral90};
  text-align: right;
  ${({ theme }) => theme.fonts.body2_normal_medi};
`;
