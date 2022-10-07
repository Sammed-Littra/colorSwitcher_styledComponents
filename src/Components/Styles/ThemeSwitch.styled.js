import styled from "styled-components";

export const ThemeContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const ThemeButton = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  padding: 10px;
  margin-left: 5px;
  cursor: pointer;
  border: none;
`;
