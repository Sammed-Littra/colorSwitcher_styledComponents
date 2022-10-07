import { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Cards from "./Components/Cards";
import { Footer } from "./Components/Styles/Footer.styled";
import { GlobalStyles } from "./Components/Styles/Global";
import { Header } from "./Components/Styles/Header.styled";
import {
  blue,
  brown,
  dark,
  green,
  light,
  pink,
} from "./Components/Styles/ThemeColors";
import {
  ThemeButton,
  ThemeContainer,
} from "./Components/Styles/ThemeSwitch.styled";

function App() {
  const [selectedTheme, setSelectedTheme] = useState(light);
  function HandleThemeChange(theme) {
    setSelectedTheme(theme);
    console.log(theme);
  }

  return (
    <ThemeProvider theme={selectedTheme}>
      <div className="App">
        <Header> HEADER </Header>
        <GlobalStyles />
        <ThemeContainer>
          <span> Themes: </span>
          <ThemeButton
            className={`light ${selectedTheme === light ? "active" : ""} `}
            onClick={() => HandleThemeChange(light)}
          ></ThemeButton>
          <ThemeButton
            className={`Dark ${selectedTheme === dark ? "active" : ""}`}
            onClick={() => HandleThemeChange(dark)}
          ></ThemeButton>
          <ThemeButton
            className={`Blue ${selectedTheme === blue ? "active" : ""} `}
            onClick={() => HandleThemeChange(blue)}
          ></ThemeButton>
          <ThemeButton
            className={`Green ${selectedTheme === green ? "active" : ""} `}
            onClick={() => HandleThemeChange(green)}
          ></ThemeButton>
          <ThemeButton
            className={`Brown ${selectedTheme === brown ? "active" : ""} `}
            onClick={() => HandleThemeChange(brown)}
          ></ThemeButton>
          <ThemeButton
            className={`Pink ${selectedTheme === pink ? "active" : ""} `}
            onClick={() => HandleThemeChange(pink)}
          ></ThemeButton>
        </ThemeContainer>
        <Cards />
        <Footer> FOOTER </Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
