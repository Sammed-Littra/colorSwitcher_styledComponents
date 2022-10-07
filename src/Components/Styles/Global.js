import { createGlobalStyle } from "styled-components";
import * as theme from "./ThemeColors.js";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: 0.3s ease-in-out;
}

body {
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  overflow-x: hidden;
}

.light{
    background-color: ${theme.light.colors.header};
}
.Dark{
    background-color: ${theme.dark.colors.header};
}
.Blue{
    background-color: ${theme.blue.colors.header};
}
.Green{
    background-color: ${theme.green.colors.header};
}
.Brown{
    background-color: ${theme.brown.colors.header};
}
.Pink{
    background-color: ${theme.pink.colors.header};
}

.active{
  border: 3px solid ${({ theme }) => theme.colors.border};
}
`;
