import React from 'react';
import useProduct from '../../../hooks/useProduct';

const AllProduct = () => {
    const [products, setProducts] = useProduct();
    return (
      <div style={{ height: "100vh" }}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Brand</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Discount</th>
              <th scope="col">Photo</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.discount}</td>
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "50px" }}
                  />
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default AllProduct;