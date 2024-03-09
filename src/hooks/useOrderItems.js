import { useEffect, useState } from "react";

const useOrderItems = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchOrderItems = async () => {
      try {
        const orderProductsResponse = await fetch(
          "https://ahm-computer-backend.onrender.com/order/orderProduct/"
        );

        if (!orderProductsResponse.ok) {
          throw new Error(
            `Failed to fetch cart products: ${orderProductsResponse.status}`
          );
        }

        const orderProductsData = await orderProductsResponse.json();
        console.log("Order Products Data:", orderProductsData);

        const orderDetailsPromises = orderProductsData.map((orderProduct) =>
          fetch(
            `https://ahm-computer-backend.onrender.com/order/list/${orderProduct.order}/`
          ).then((res) => res.json())
        );

        const orderDetails = await Promise.all(orderDetailsPromises);

        const productDetailsPromises = orderProductsData.map((orderProduct) =>
          fetch(
            `https://ahm-computer-backend.onrender.com/product/list/${orderProduct.product}/`
          ).then((res) => res.json())
        );

        const productDetails = await Promise.all(productDetailsPromises);

        const orderItemsWithDetails = orderProductsData.map(
          (orderProduct, index) => ({
            ...orderProduct,
            orderDetails: orderDetails[index], // Add orderDetails to the item
            product: productDetails[index],
          })
        );

        console.log("Order Items With Details:", orderItemsWithDetails);

        const total = orderItemsWithDetails.reduce(
          (acc, item) => acc + item.subtotal,
          0
        );
        setTotalAmount(total);

        setOrderItems(orderItemsWithDetails);
      } catch (error) {
        console.error("Error fetching order items:", error);
      }
    };

    fetchOrderItems();
  }, []);

  return [orderItems, totalAmount];
};

export default useOrderItems;
