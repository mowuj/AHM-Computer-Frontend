import { useEffect, useState } from "react";

const useProduct = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://ahm-computer-backend.onrender.com/product/list/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [Products, setProducts];
};
export default useProduct;
