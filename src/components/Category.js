import { useParams } from "react-router-dom";
import Navbar from "./utils/Navbar";
import ProductList from "./ProductList";

function Category() {
  const { category } = useParams();
  return (
    <div>
      <Navbar selectedCategory={category} />
      <ProductList selectedCategory={category} />
    </div>
  );
}

export default Category;
