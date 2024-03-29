import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const handleSubMenuToggle = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <nav
          id="sidebar"
          className="col-md-3 col-lg-2 d-md-block bg-light sidebar"
        >
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/admin-dashboard" className="nav-link active">
                  Dash Board
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/admin-dashboard/all-product"
                  className="nav-link active"
                >
                  All Product
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/admin-dashboard/all-shipment"
                  className="nav-link active"
                >
                  All Shipment
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" onClick={handleSubMenuToggle}>
                  Add Products
                </a>
                <div className={`collapse ${isSubMenuOpen ? "show" : ""}`}>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/admin-dashboard/add-brand"
                      >
                        Add Brand
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/admin-dashboard/add-category"
                      >
                        Add Category
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/admin-dashboard/add-product"
                      >
                        Add Product
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2"></div>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
