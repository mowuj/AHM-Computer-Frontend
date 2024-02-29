import { Button } from "react-bootstrap";
import Product from "../Product/Product";
import useProduct from "../../hooks/useProduct";
import { useNavigate } from "react-router-dom";
import banner2 from "../../images/banner2.png";
import TypeWriter from "typewriter-effect";
import TopRated from "../TopRated/TopRated";
import Sound from "../Sound/Sound";
const Home = () => {
  const [products, setProducts] = useProduct();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/products");
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
          <h1 className="text-danger">Welcome !</h1>
          <h1>
            <TypeWriter
              options={{
                autoStart: true,
                loop: true,
                delay: 60,
                strings: [
                  "Pick Your Favourite <br /> Laptop From Us..",
                  "Complete Solution For Your Computer.",
                ],
              }}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, provident earum? Veniam aliquid itaque provident
            dolores est suscipit adipisci tenetur inventore necessitatibus velit
            quae ratione voluptas asperiores quaerat deleniti optio debitis cum,
            reprehenderit perspiciatis molestiae? Libero nobis tempora mollitia
            suscipit, reprehenderit numquam error optio illum voluptatibus sed
            eligendi ea cupiditate.
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
          <h1
            className="text-center mt-5"
            style={{ color: "#F72798" }}
          >
            Our Products
          </h1>
          <div className="product-container">
            <button
              type="button"
              class="btn btn-outline-danger"
              onClick={handleNavigate}
            >
              Go to All Product
            </button>
            <div className="product my-2">
              <div className="row row-cols-1 row-cols-md-4 g-4">
                {products?.slice(0, 6).map((product) => (
                  <div className="col-md-3" key={product.id}>
                    <Product product={product}></Product>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      {/* slider end */}
      <TopRated></TopRated>
      <Sound></Sound>
    </>
  );
};

export default Home;
