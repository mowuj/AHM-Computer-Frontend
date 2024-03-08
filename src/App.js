
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
import UserProfile from './components/UserProfile/UserProfile';

import Shipment from './components/Shipment/Shipment'
import AdminDashboard from './components/Admin/AdminDashboard/AdminDashboard';
import AddBrand from './components/Admin/AddBrand/AddBrand';
import AddCategory from './components/Admin/AddCategory/AddCategory';
import AddProduct from './components/Admin/AddProduct/AddProduct';

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

        <Route
          path="/product/:productId"
          element={<ProductDetails></ProductDetails>}
        ></Route>
        <Route path="/shipment" element={<Shipment></Shipment>}></Route>

        <Route
          path="/admin-dashboard"
          element={<AdminDashboard></AdminDashboard>}
        >
          <Route path="add-brand" element={<AddBrand></AddBrand>}></Route>
          <Route
            path="add-category"
            element={<AddCategory></AddCategory>}
          ></Route>
          <Route path="add-product" element={<AddProduct></AddProduct>}></Route>

        </Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
