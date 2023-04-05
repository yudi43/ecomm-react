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


      // let categoryGrouping = {};
      
      // useEffect(() => {
      //   console.log("fetching inital products data");
      //   fetch(`https://dummyjson.com/products/categories`)
      //   .then(response => response.json())
      //   .then(data => {
      //       console.log("got data", data);
      //       data.forEach((item) => {
      //         if(item.includes("womens-")) {
      //           if ("Women" in categoryGrouping) {
      //             categoryGrouping["Women"].push(item);
      //           } else {
      //             categoryGrouping["Women"] = [];
      //           }
      //         }
      //         else if(item.includes("mens-") && !item.includes("womens-")) {            
      //           if ("Men" in categoryGrouping) {
      //             categoryGrouping["Men"].push(item);
      //           } else {
      //             categoryGrouping["Men"] = [];
      //           }
      //         }
      //         else {
      //           if ("Others" in categoryGrouping) {
      //             categoryGrouping["Others"].push(item);
      //           } else {
      //             categoryGrouping["Others"] = [];
      //           }
      
      //         }
      //       })
      //       setLoading(false);
      //       console.log("this is category grouping:", categoryGrouping);
      //       setAllCategories(categoryGrouping);
      //   });
      // });