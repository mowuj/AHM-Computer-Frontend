
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Nav from './components/Navbar/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
