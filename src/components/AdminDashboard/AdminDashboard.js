
import React, { useState } from "react";
import './AdminDashboard.css'
const AdminDashboard = () => {
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);

    const handleSubMenuToggle = () => {
      setSubMenuOpen(!isSubMenuOpen);
    };
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            {/* Main Sidebar */}
            <nav
              id="sidebar"
              className="col-md-3 col-lg-2 d-md-block bg-light sidebar"
            >
              <div className="sidebar-sticky">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={handleSubMenuToggle}>
                      Nested Menu
                    </a>
                    <div className={`collapse ${isSubMenuOpen ? "show" : ""}`}>
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Submenu 1.1
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Submenu 1.2
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* Add more sidebar items as needed */}
                </ul>
              </div>
            </nav>

            {/* Main content area */}
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
              </div>

              {/* Your content goes here */}
            </main>
          </div>
        </div>
      </div>
    );
};

export default AdminDashboard;