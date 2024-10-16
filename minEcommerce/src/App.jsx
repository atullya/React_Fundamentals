import axios from "axios";
import "./App.css";
import Category from "./Category";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Import Router components
import ProductDetails from "./ProductDetails"; // Import ProductDetails component

function App() {
  let [finalCategory, setfinalCategory] = useState([]); // Hold categories
  let [finalPro, setFinalPro] = useState([]); // Hold products
  let [catname, setcatname] = useState(""); // Selected category name

  // Fetch all categories
  let getCategory = () => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => response.data)
      .then((finalres) => {
        setfinalCategory(finalres); // Save categories
      });
  };

  // Fetch all products initially
  let getProducts = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((proResponse) => proResponse.data)
      .then((finalResponse) => {
        setFinalPro(finalResponse.products); // Save products
      });
  };

  // Fetch products based on selected category
  useEffect(() => {
    if (catname !== "") {
      axios
        .get(`https://dummyjson.com/products/category/${catname}`)
        .then((proResponse) => proResponse.data)
        .then((finalResponse) => {
          setFinalPro(finalResponse.products);
        })
        .catch((error) => {
          console.error("Error fetching products by category:", error);
        });
    }
  }, [catname]);

  useEffect(() => {
    getCategory();
    getProducts();
  }, []);

  let Pitems = finalPro.map((products, index) => {
    return (
      <div key={index}>
        {/* Link to the product details page */}
        <Link to={`/product/${products.id}`}>
          <ProductItems pdata={products} />
        </Link>
      </div>
    );
  });

  return (
    <Router>
      <Routes>
        {/* Home route showing the product list */}
        <Route
          path="/"
          element={
            <>
              <div className="py-[40px]">
                <div className="max-w-[1320px] mx-auto">
                  <div className="text-center text-[40px] font-bold mb-[30px]">
                    Our Products
                  </div>
                  <div className="grid grid-cols-[30%_auto] gap-[20px]">
                    <div>
                      {/* Pass `finalCategory` as a prop to the Category component */}
                      <Category
                        finalCategory={finalCategory}
                        setcatname={setcatname}
                      />
                    </div>
                    <div>
                      <div className="grid grid-cols-3 gap-4">
                        {finalPro.length >= 1 ? Pitems : "No Item Found"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          }
        />
        {/* Route for the product details page */}
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

// Component to render individual product items
function ProductItems({ pdata }) {
  return (
    <div className="shadow-lg text-center pb-[4]">
      <img
        src={pdata.thumbnail}
        alt="Product"
        className="w-[200px] h-[200px]"
      />
      <h4>{pdata.title}</h4>
      <b>{pdata.price}</b>
    </div>
  );
}

export default App;
