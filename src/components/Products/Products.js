import React from 'react';
import useProduct from '../../hooks/useProduct';

const Products = () => {
    const [products, setProducts] = useProduct();
    return (
      <div id="inventory" className="container">
        <div className="row">
          <h1 className="text-primary text-center mt-5">Inventories</h1>
          
        </div>
      </div>
    );
};

export default Products;