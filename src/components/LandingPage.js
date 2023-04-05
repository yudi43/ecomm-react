import { useState } from "react";
import CategoryNavbar from './CategoryNavbar';
import ProductList from './ProductList';
import { useTheme } from '@material-ui/core/styles';
import Navbar from "./utils/Navbar";

function LandingPage() {
    const theme = useTheme();

    const [loading, setLoading] = useState(true);
    const [allCategories, setAllCategories] = useState([]);
    return ( 
    <div>
        <Navbar />
        <CategoryNavbar categories={allCategories} />
        <ProductList />
    </div> );
}

export default LandingPage;