import React from "react";
import { Navigate } from "react-router-dom";

const RequireAdmin = ({ children }) => {
  // You need to replace this with your isAdmin logic
  const isAdmin = localStorage.getItem("isAdmin");

  if (isAdmin === "true") {
    return children;
  }

  return <Navigate to="/login" replace />;
};

export default RequireAdmin;
