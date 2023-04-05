import { useState, useEffect } from "react";
import CategoryNavbar from './CategoryNavbar';
import ProductList from './ProductList';
import { useTheme } from '@material-ui/core/styles';
import Navbar from "./utils/Navbar";

function LandingPage() {
    const theme = useTheme();

      let categoryGrouping = {};
      
      const [loading, setLoading] = useState(true);
      const [allCategories, setAllCategories] = useState([]);
      useEffect(() => {
        console.log("fetching inital products data");
        try {
          fetch(`https://dummyjson.com/products/categories`)
          .then(response => response.json())
          .then(data => {
              setAllCategories(data);
              console.log("got data", data);
              setLoading(false);
              console.log("this is category grouping:", categoryGrouping);
              // setAllCategories(categoryGrouping);
            });
        } catch (error) {
          console.log("Error fetching categories:", error);
        }
        
      }, []);

    return ( 
    <div>
        <Navbar categories={allCategories}/>
        <ProductList />
    </div> );
}

export default LandingPage;



              // data.forEach((item) => {
              //   if(item.includes("womens-")) {
              //     if ("Women" in categoryGrouping) {
              //       categoryGrouping["Women"].push(item);
              //     } else {
              //       categoryGrouping["Women"] = [];
              //     }
              //   }
              //   else if(item.includes("mens-") && !item.includes("womens-")) {            
              //     if ("Men" in categoryGrouping) {
              //       categoryGrouping["Men"].push(item);
              //     } else {
              //       categoryGrouping["Men"] = [];
              //     }
              //   }
              //   else {
              //     if ("Others" in categoryGrouping) {
              //       categoryGrouping["Others"].push(item);
              //     } else {
              //       categoryGrouping["Others"] = [];
              //     }
        
              //   }
              // })
              