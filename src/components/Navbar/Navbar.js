import React, { useState, useEffect } from "react";
import { Navbar, Nav as CustomNav, NavDropdown } from "react-bootstrap"; 
import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { CiUser } from "react-icons/ci";
const Nav = () => {
    const [profile, setProfile] = useState([]);
    const userId = localStorage.getItem("user_id");

    useEffect(() => {
      fetch(`https://fruitables-api.onrender.com/user/data/${userId}`)
        .then((res) => res.json())
        .then((data) => setProfile(data));
    }, []);

    const [user, setUser] = useState("");

    useEffect(() => {
      const token = localStorage.getItem("token");
      const user_id = localStorage.getItem("user_id");
      setUser(user_id);
    });

    const handleLogout = () => {
      fetch("https://fruitables-api.onrender.com/user/logout", {
        method: "GET",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });

      localStorage.removeItem("token");
      localStorage.removeItem("user_id");
      window.location.reload();
    };

    const [navClicked, setNavClicked] = useState(true);
    const handleNavToggle = () => {
      setNavClicked(!navClicked);
    };
    return (
      <Navbar className="navbar navbar-expand-lg bg-body-tertiary">
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
            onClick={handleNavToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${navClicked ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <CustomNav className="mr-auto">
              <CustomNav.Link as={Link} to={"/products"}>
                Shop
              </CustomNav.Link>
              <CustomNav.Link as={Link} to={"/about"}>
                About
              </CustomNav.Link>
              <CustomNav.Link as={Link} to={"/contact"}>
                Contact
              </CustomNav.Link>
            </CustomNav>

            <CustomNav className="ml-auto">
              <CustomNav.Link as={Link} to={"/addtocart"}>
                <IoMdCart className="text-3xl mr-3" />
              </CustomNav.Link>

              {!user && (
                <CustomNav.Link
                  as={Link}
                  to={"/login"}
                  className="font-semibold bg-primary text-white p-2 rounded"
                >
                  <CiUser className="text-2xl" /> Sign In
                </CustomNav.Link>
              )}

              {user && (
                <NavDropdown
                  title={<CiUser className="text-2xl" />}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Header>
                    <span className="block text-sm">
                      {profile?.first_name} {profile?.last_name}
                    </span>
                    <span className="block truncate text-sm font-medium">
                      {profile?.email}
                    </span>
                  </NavDropdown.Header>
                  <NavDropdown.Item>
                    {" "}
                    <CiUser className="mr-2" />{" "}
                    <Link to={"/dashboard"}>Dashboard</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>
                    Sign out
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </CustomNav>
          </div>
        </div>
      </Navbar>
    );
};

export default Nav;
