import styled from "styled-components";

export const HeaderWrapper = styled.section`
  color: black;
  display: flex;
  width: 37.5rem;
  height: 6rem;
  padding: 2rem 1rem;
  // TODO: 색 나중에 공통으로 변경
  background-color: #fffff7;
  flex-direction: row;
  align-items: center;

  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.25);
`;

export const Arrow = styled.button`
  display: flex;
`;

export const HeaderText = styled.div`
  color: black;
  ${({ theme }) => theme.fonts.heading3};
  padding-left: 1.5rem;
`;
