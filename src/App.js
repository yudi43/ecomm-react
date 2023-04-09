import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"; // Import your CSS file for styles
import theme from "./themes/theme";
import LandingPage from "./components/LandingPage";
import Category from "./components/Category";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/products/:id" element={<div />} />
            <Route exact path="/categories/:category" element={<Category />} />
            <Route exact path="/cart" element={<div />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
