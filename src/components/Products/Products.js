import React, { useState, useEffect } from "react";
import useProduct from "../../hooks/useProduct";
import Product from "../Product/Product";
import { Dropdown } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import useCategory from "../../hooks/useCategory";
import useBrand from "../../hooks/useBrand";
import noProduct from "../../images/no-product.png";

const Products = () => {
  const [products, setProducts] = useProduct();
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useCategory();
  const [brands, setBrands] = useBrand();
  const [searchTerm, setSearchTerm] = useState("");
  const user_id = localStorage.getItem("user_id");
  const customer_id = localStorage.getItem("customer_id");

  const handleaddtocart = async (product) => {
    try {
      const cartItems = JSON.parse(localStorage.getItem("product")) || [];
      const isItemInCart = cartItems.some((item) => item.id === product.id);

      let cartId = localStorage.getItem("cartId");
      if (!cartId) {
        const cartResponse = await fetch(
          "https://ahm-computer-backend.onrender.com/cart/list/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              customer: customer_id,
              total: 0,
            }),
          }
        );

        const cartData = await cartResponse.json();
        console.log("Cart creation API response:", cartData);

        cartId = cartData.id;
        console.log(cartId);
        localStorage.setItem("cartId", cartId);
      }

      const cartProductResponse = await fetch(
        "https://ahm-computer-backend.onrender.com/cart/cartProduct/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            price: product.price,
            quantity: 1,
            subtotal: product.price,
            cart: parseInt(cartId),
            product: product.id,
          }),
        }
      );

      const productData = await cartProductResponse.json();
      console.log("Product added to the cartProduct API:", productData);

      let totalSubtotal = productData.subtotal;

      if (isItemInCart) {
        const updatedCartItems = cartItems.map((item) =>
          item.id === product.id
            ? { ...item, Quantity: item.Quantity + 1 }
            : item
        );
        localStorage.setItem("product", JSON.stringify(updatedCartItems));
        toast.success("Quantity increased in the cart!");
      } else {
        const updatedCartItems = [...cartItems, { ...product, Quantity: 1 }];
        localStorage.setItem("product", JSON.stringify(updatedCartItems));
        toast.success("Item added to the cart successfully!");
      }

      // Wait for both product addition and totalSubtotal calculation
      await Promise.all([updateCartTotal(cartId, totalSubtotal)]);
    } catch (error) {
      console.error("Error in handleaddtocart:", error);
      toast.error("Failed to add item to the cart");
    }
  };

  const updateCartTotal = async (cartId, totalSubtotal) => {
    // Update the cart total in the cart POST request
    const updatedCartResponse = await fetch(
      `https://ahm-computer-backend.onrender.com/cart/list/${cartId}/`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          total: totalSubtotal,
        }),
      }
    );

    const updatedCartData = await updatedCartResponse.json();
    console.log("Updated cart total:", updatedCartData);
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
          {filteredProducts.length > 0 ? (
            <div className="row row-cols-1 row-cols-md-3 g-2">
              {filteredProducts.map((product) => (
                <div className="col" key={product.id}>
                  <Product
                    product={product}
                    addToCart={() => handleaddtocart(product)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="d-flex justify-content-center align-items-center">
              <img src={noProduct} alt="" />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
