import { useEffect, useState } from "react";

const useCategory = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://ahm-computer-backend.onrender.com/product/category/")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
    return [categories, setCategories];
};

export default useCategory;
