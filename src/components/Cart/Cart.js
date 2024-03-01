import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    fetch("https://ahm-computer-backend.onrender.com/product/cart/")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          // Assuming total_amount is present in the first item
          setTotalAmount(data[0].total_amount);
        }

        const promises = data.map((cartItem) =>
          fetch(
            `https://ahm-computer-backend.onrender.com/product/list/${cartItem.product}/`
          ).then((res) => res.json())
        );

        Promise.all(promises)
          .then((productDetails) => {
            const itemsWithProductDetails = data.map((cartItem, index) => ({
              ...cartItem,
              product: productDetails[index],
            }));

            setCartItems(itemsWithProductDetails);
          })
          .catch((error) =>
            console.error("Error fetching product details:", error)
          );
      })
      .catch((error) => console.error("Error fetching cart items:", error));
  }, []);
const handleDelete = (productId) => {
  fetch(
    `https://ahm-computer-backend.onrender.com/product/cart/${productId}/`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Network response was not ok: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== productId)
      );
    })
    .catch((error) => {
      console.error("Error deleting item from the cart:", error);
    });
};


  return (
    <>
      <h1 className="text-center">My Cart</h1>
      <div className="w-75 mx-auto my-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Order ID</th>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length > 0 ? (
              cartItems?.map((cartItem) => {
                return (
                  <tr key={cartItem.id}>
                    <th scope="row">{cartItem.orderId}</th>
                    <td>{cartItem.product.name}</td>
                    <td>{cartItem.Quantity}</td>
                    <td>{cartItem.product.price}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(cartItem.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5">
                  <h2 className="text-center">Not Found !!!</h2>
                </td>
              </tr>
            )}
            {/* Total Price Row */}
            <tr>
              <td colSpan="2"></td>
              <td className="fs-5">Total Price:</td>
              <td className="fs-5">{totalAmount}</td>
            </tr>
          </tbody>
        </table>
        <hr />
        <div className="my-2 text-right">
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
