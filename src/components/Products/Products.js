import React from 'react';
import useProduct from '../../hooks/useProduct';
import Product from '../Product/Product';

const Products = () => {
  console.log("products page")
    const [products, setProducts] = useProduct();
    return (
      <div id="allProducts" className="container">
        <div className="row">
          <h1 className="text-primary text-center mt-5">All Products</h1>
          <div className="product">
            <div class="row row-cols-1 row-cols-md-4 g-4">
              <div class="col">
                {products?.map((product) => (
                  <Product key={product.id} product={product}></Product>
                ))}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Products;