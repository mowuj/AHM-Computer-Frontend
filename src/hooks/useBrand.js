import { useEffect, useState } from "react";

const useBrand = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("https://ahm-computer-backend.onrender.com/product/brand/")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return [brands, setBrands];
};

export default useBrand;
