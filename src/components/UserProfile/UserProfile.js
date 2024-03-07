import React, { useState, useEffect } from "react";
import servecing from "../../images/servecing.jpg";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const token = localStorage.getItem("token");
  const user_id = localStorage.getItem("user_id");
  const customer_id = localStorage.getItem("customer_id");

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await fetch(
          `https://ahm-computer-backend.onrender.com/customer/data/${customer_id}/`
        );
        const data = await response.json();

        console.log("Received data:", data);

        setUserData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCustomerData();
  }, [customer_id]);

  return (
    <div className="container my-5">
      <div className="d-flex flex-row justify-content-center align-items-center gap-4">
        <div className="col-md-4">
          <img className="w-100 img-fluid" src={servecing} alt="" />
        </div>
        <div className="col-md-6">
          {userData ? (
            <>
              <h2>User Name: {userData.username} </h2>
              <h4>
                Full Name:{userData.first_name} {userData.last_name}{" "}
              </h4>
              <h4>Phone: {userData.mobile_no}</h4>
              <h4>Email: {userData.email}</h4>
              <h4>Address: {userData.address}</h4>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
