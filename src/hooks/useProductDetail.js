import { useEffect, useState } from "react";

const useProductDetail = productId => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://ahm-computer-backend.onrender.com/product/list/${productId}/`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId]);
    return [product]
}
export default useProductDetail;