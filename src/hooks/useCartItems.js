import { useEffect, useState } from "react";

const useCartItems = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const cartId = localStorage.getItem("cartId");

        if (cartId) {
          // Fetch the cart products based on the cartId
          const cartProductsResponse = await fetch(
            `https://ahm-computer-backend.onrender.com/cart/cartProduct/?cart=${cartId}`
          );

          if (!cartProductsResponse.ok) {
            throw new Error(
              `Failed to fetch cart products: ${cartProductsResponse.status}`
            );
          }

          const cartProductsData = await cartProductsResponse.json();
          console.log("Cart Products Data:", cartProductsData);

          // Fetch product details for each cart product
          const productDetailsPromises = cartProductsData.map((cartProduct) =>
            fetch(
              `https://ahm-computer-backend.onrender.com/product/list/${cartProduct.product}/`
            ).then((res) => res.json())
          );

          const productDetails = await Promise.all(productDetailsPromises);

          // Merge product details into cart product objects
          const cartItemsWithDetails = cartProductsData.map(
            (cartProduct, index) => ({
              ...cartProduct,
              product: productDetails[index],
            })
          );

          // Calculate total amount
          const total = cartItemsWithDetails.reduce(
            (acc, item) => acc + item.subtotal,
            0
          );
          setTotalAmount(total);

          setCartItems(cartItemsWithDetails);
        } else {
          setCartItems([]);
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  return  [cartItems, totalAmount] ;
};

export default useCartItems;
