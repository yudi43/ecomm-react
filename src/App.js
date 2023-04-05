import React, { useEffect, useState } from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import "./App.css"; // Import your CSS file for styles
import theme from "./themes/theme";
import LandingPage from "./components/LandingPage";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <LandingPage />
      </div>
    </ThemeProvider>
  );
}

export default App;


