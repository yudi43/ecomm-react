import React, { useEffect, useState } from "react";
import ProductList from './components/ProductList';
import CategoryNavbar from './components/CategoryNavbar';

function App() {
  
  const [loading, setLoading] = useState(true);
  const [allCategories, setAllCategories] = useState([]);

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
  return (
    <div className="App" style={{ backgroundColor: 'lightgray', minHeight: '100vh', padding: '20px' }}>
      <nav style={{ backgroundColor: 'darkblue', color: 'white', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Top nav bar styles */}
        <h1 style={{ margin: '0', fontWeight: 'bold', fontSize: '24px' }}>My App</h1>
        <ul style={{ listStyleType: 'none', margin: '0', padding: '0', display: 'flex', gap: '10px' }}>
          {/* Add any additional nav bar elements or styles */}
          <li><a href="/" style={{ textDecoration: 'none', color: 'white', fontSize: '18px' }}>Home</a></li>
          <li><a href="/about" style={{ textDecoration: 'none', color: 'white', fontSize: '18px' }}>About</a></li>
          <li><a href="/contact" style={{ textDecoration: 'none', color: 'white', fontSize: '18px' }}>Contact</a></li>
        </ul>
      </nav>
      <CategoryNavbar categories={allCategories} />
      <ProductList />
    </div>
  );
}

export default App;

