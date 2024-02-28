
import { Button } from "react-bootstrap";
import Product from "../Product/Product";
import useProduct from "../../hooks/useProduct";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [products, setProducts] = useProduct();
    const navigate = useNavigate();

    const handleNavigate = () => {
      navigate("/");
    };
    return (
      <>
        <div
          className="container d-md-flex justify-content-center align-items-center h-100 p-5 mt-5 gap-4 shadow-lg rounded-5"
          style={{ height: "100vh", backgroundColor: "rgb(195, 236, 236)" }}
        >
          <div className="banner-left col-md-6 p-3">
            <h1 className="text-danger">
              Pick Your Favourite <br /> Pets From Us..
            </h1>
            <p>
              Are you an animal lover? We are waiting for you. We have a big
              collection of pets for you. We provide services to sell and buy
              animals with health treatment. So don't worry, come and see our
              warehouse and sell/buy pets within your limits. Stay with us.
              Thank you.
            </p>
            <Button variant="danger">Contact Us</Button>
          </div>
          <div className="banner-right col-md-6">
            <img
              className="img-fluid w-100 rounded-5"
              src="/img/banner2.jpg"
              style={{ height: "60vh" }}
              alt=""
            />
          </div>
        </div>

        {/* slider start */}
        <div id="products" className="container">
          <div className="row">
            <h1 className="text-primary text-center mt-5">Products</h1>
            <div className="product-container">
              {products?.slice(0, 6).map((product) => (
                <Product key={product.id} product={product}></Product>
              ))}
              <button onClick={handleNavigate} className="btn-info ms-auto p-2">
                Go to All Product
              </button>
            </div>
          </div>
        </div>
        {/* slider end */}
      </>
    );
};

export default Home;