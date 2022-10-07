import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  height: 80px;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
`;
