import React, { useState, useEffect } from "react";
import useProduct from "../../hooks/useProduct";
import Product from "../Product/Product";
import { Dropdown } from "react-bootstrap";

const Products = () => {
  const [products, setProducts] = useProduct();
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
console.log(products.brand)
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

  const handleBrandClick = (brand) => {
    console.log("Brand clicked:", brand);
    setSelectedBrand(brand);
    setSelectedCategory(null);
  };

  const handleCategoryClick = (category) => {
    console.log("Category clicked:", category);
    setSelectedCategory(category);
    setSelectedBrand(null);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    setSelectedBrand(null);
    setSelectedCategory(null);
  };

  const filteredProducts = products.filter((product) => {
    console.log(product.brand)
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
      <h1
        className="text-center mt-5"
        style={{ color: "#F72798" }}
      >
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
                <Product product={product}></Product>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
