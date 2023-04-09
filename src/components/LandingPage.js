import { useState, useEffect } from "react";
import CategoryNavbar from "./CategoryNavbar";
import ProductList from "./ProductList";
import { useTheme } from "@material-ui/core/styles";
import Navbar from "./utils/Navbar";

function LandingPage() {
  const theme = useTheme();

  let categoryGrouping = {};

  const [loading, setLoading] = useState(true);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    console.log("UseEffect of LandingPage");
    try {
      fetch(`https://dummyjson.com/products/categories`)
        .then((response) => response.json())
        .then((data) => {
          setAllCategories(data);
          setLoading(false);
        });
    } catch (error) {
      console.log("Error fetching categories:", error);
    }
  }, [allCategories]);

  return (
    <div>
      <Navbar categories={allCategories} />
      <ProductList />
    </div>
  );
}

export default LandingPage;
