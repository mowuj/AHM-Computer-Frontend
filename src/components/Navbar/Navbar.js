import React, { useState, useEffect } from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { CiUser } from "react-icons/ci";

const Nav = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    setUser(user_id);
  }, []);

  const handleLogout = () => {
    fetch("https://ahm-computer-backend.onrender.com/customer/logout", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("customer_id");
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to={"/home"} className="navbar-brand">
          AHM Computer
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/products"} className="nav-link">
                Shop
              </Link>
            </li>
            {user && (
              <>
                <li className="nav-item">
                  <Link to={"/about"} className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/contact"} className="nav-link">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/cart"} className="nav-link">
                    <IoMdCart className="text-3xl mr-3" />
                  </Link>
                </li>
              </>
            )}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div className="ms-auto">
            {!user ? (
              <Link
                to={"/login"}
                className="text-dark p-2 rounded"
              >
                <CiUser className="" /> Sign In
              </Link>
            ) : (
              <NavDropdown
                title={<CiUser className="" />}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link to={"/customer-dashboard"}>Dashboard</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={"/profile"}>Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                  Sign out
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
