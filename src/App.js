
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Nav from './components/Navbar/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetail/ProductDetail';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import OrderInput from './components/OrderInput/OrderInput';
import UserProfile from './components/UserProfile/UserProfile';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="products" element={<Products></Products>}></Route>
        <Route path="cart" element={<Cart></Cart>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="profile" element={<UserProfile></UserProfile>}></Route>
        <Route path="admin-dashboard" element={<AdminDashboard></AdminDashboard>}></Route>
        <Route
          path="/product/:productId"
          element={<ProductDetails></ProductDetails>}
        ></Route>
        <Route
          path="/order-confirmation"
          element={<OrderInput></OrderInput>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
