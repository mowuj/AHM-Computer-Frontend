import React, { useState, useEffect } from "react";
import useProduct from "../../hooks/useProduct";
import Product from "../Product/Product";
import { Dropdown } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";

const Products = () => {
  const [products, setProducts] = useProduct();
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
const user_id=localStorage.getItem("user_id")
  useEffect(() => {
    // Fetch categories
    fetch("https://ahm-computer-backend.onrender.com/product/category/")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });

    // Fetch brands
    fetch("https://ahm-computer-backend.onrender.com/product/brand/")
      .then((response) => response.json())
      .then((data) => setBrands(data));
  }, []);


const handleaddtocart = (product) => {
  const cartItems = JSON.parse(localStorage.getItem("product")) || [];
  const isItemInCart = cartItems.some((item) => item.id === product.id);

  if (isItemInCart) {
    // If the item is already in the cart, increase the quantity
    const updatedCartItems = cartItems.map((item) =>
      item.id === product.id ? { ...item, Quantity: item.Quantity + 1 } : item
    );
    localStorage.setItem("product", JSON.stringify(updatedCartItems));

    // Update the quantity in the state or wherever it's used
    // (this depends on your application's structure)
    // Example: setCartItems(updatedCartItems);

    toast.success("Quantity increased in the cart!");
  } else {
    // If the item is not in the cart, add it with quantity 1
    const updatedCartItems = [...cartItems, { ...product, Quantity: 1 }];
    localStorage.setItem("product", JSON.stringify(updatedCartItems));

    // Update the cart items in the state or wherever it's used
    // (this depends on your application's structure)
    // Example: setCartItems(updatedCartItems);

    toast.success("Item added to the cart successfully!");
  }

  const orderId = new Date().getTime();
  fetch("https://ahm-computer-backend.onrender.com/product/cart/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customer: user_id,
      orderId: orderId,
      product: product,
      Quantity: 1,
      amount: product.price,
      total_amount: product.amount,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Product added to the cart API:", data);
    })
    .catch((error) => {
      console.error("Error adding product to the cart API:", error);
    });
};


  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
    setSelectedCategory(null);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedBrand(null);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    setSelectedBrand(null);
    setSelectedCategory(null);
  };

  const filteredProducts = products.filter((product) => {
    return (
      (!selectedBrand || product.brand[0] === selectedBrand.id) &&
      (!selectedCategory || product.category[0] === selectedCategory.id) &&
      (searchTerm
        ? product.name.toLowerCase().includes(searchTerm.toLowerCase())
        : true)
    );
  });

  return (
    <div id="allProducts" className="mx-3">
      <h1 className="text-center mt-5" style={{ color: "#F72798" }}>
        All Products
      </h1>
      <div className="col-md-6 mx-auto">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => handleSearch("")}
          >
            Clear
          </button>
        </div>
      </div>

      <section className="row d-flex justify-content-center">
        <div className="col-md-3 text-center d-flex gap-3 justify-content-center">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="brandDropdown">
              Brand
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
              <Dropdown.Item onClick={() => handleBrandClick(null)}>
                All Brands
              </Dropdown.Item>
              {brands.map((brand) => (
                <Dropdown.Item
                  key={brand.id}
                  onClick={() => handleBrandClick(brand)}
                >
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="categoryDropdown">
              Category
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
              <Dropdown.Item onClick={() => handleCategoryClick(null)}>
                All Categories
              </Dropdown.Item>
              {categories.map((category) => (
                <Dropdown.Item
                  key={category.id}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category.name || "Unknown category"}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="col-md-9">
          <div className="row row-cols-1 row-cols-md-3 g-2">
            {filteredProducts.map((product) => (
              <div className="col" key={product.id}>
                <Product
                  product={product}
                  addToCart={() => handleaddtocart(product.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
