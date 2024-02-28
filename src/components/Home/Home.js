
import { Button } from "react-bootstrap";
import Product from "../Product/Product";
import useProduct from "../../hooks/useProduct";
import { useNavigate } from "react-router-dom";
import banner2 from '../../images/banner2.png'
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
          style={{
            height: "100vh",
            backgroundColor: "rgb(247, 250, 250)",
          }}
        >
          <div className="banner-left col-md-6 p-3">
            <h1 className="text-danger">
              Pick Your Favourite <br /> Laptop From Us..
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, provident earum? Veniam aliquid itaque provident
              dolores est suscipit adipisci tenetur inventore necessitatibus
              velit quae ratione voluptas asperiores quaerat deleniti optio
              debitis cum, reprehenderit perspiciatis molestiae? Libero nobis
              tempora mollitia suscipit, reprehenderit numquam error optio illum
              voluptatibus sed eligendi ea cupiditate.
            </p>
            <Button variant="danger">Contact Us</Button>
          </div>
          <div className="banner-right col-md-6">
            <img
              className="img-fluid w-100 rounded-5"
              src={banner2}
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
              <div className="product">
                <div class="row row-cols-1 row-cols-md-4 g-4">
                  <div class="col">
                    {products?.slice(0, 6).map((product) => (
                      <Product key={product.id} product={product}></Product>
                    ))}
                    <button
                      onClick={handleNavigate}
                      className="btn-info ms-auto p-2"
                    >
                      Go to All Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* slider end */}
      </>
    );
};

export default Home;