import React, { useState, useMemo } from "react";
import Layout from "./components/Layout/Layout.jsx"
import GlobalStyle from "./styles/index.jsx"
import { ThemeProvider } from "styled-components";
import themes from "./styles/themes/index.jsx"

function App() {
  
  const [theme, setTheme] = useState("dark")

  function handleChangeTheme() {
    setTheme((prevState) => prevState === "dark" ? "light" : "dark")
  }

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme])

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout handleChangeTheme={handleChangeTheme} theme={theme}/>
    </ThemeProvider>
  );
}

export default App;
