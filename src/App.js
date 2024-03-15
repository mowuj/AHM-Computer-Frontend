
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
import AllProduct from './components/Admin/AllProduct/AllProduct';
import AllOrder from './components/Admin/AllOrder/AllOrder';
import AllShipment from "./components/Admin/AllShipment/AllShipment";
import CustomerDashboard from './components/CustomerDashBoard/CustomerDashboard';
import RequireAuth from './components/RequireAuth/RequireAuth';
import RequireAdmin from './components/RequireAdmin/RequireAdmin';

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="products" element={<Products></Products>}></Route>

        <Route path="about" element={<About></About>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route
          path="profile"
          element={
            <RequireAuth>
              <UserProfile></UserProfile>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="cart"
          element={
            <RequireAuth>
              <Cart></Cart>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="customer-dashboard"
          element={
            <RequireAuth>
              <CustomerDashboard></CustomerDashboard>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/product/:productId"
          element={
            <RequireAuth>
              <ProductDetails></ProductDetails>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/shipment"
          element={
            <RequireAuth>
              <Shipment></Shipment>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/admin-dashboard"
          element={
            <RequireAdmin>
              <AdminDashboard></AdminDashboard>
            </RequireAdmin>
          }
        >
          <Route
            index
            element={
              <RequireAdmin>
                <AllOrder></AllOrder>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="add-brand"
            element={
              <RequireAdmin>
                <AddBrand></AddBrand>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="add-category"
            element={
              <RequireAdmin>
                <AddCategory></AddCategory>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="add-product"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="all-product"
            element={
              <RequireAdmin>
                <AllProduct></AllProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="all-shipment"
            element={
              <RequireAdmin>
                <AllShipment></AllShipment>
              </RequireAdmin>
            }
          ></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
