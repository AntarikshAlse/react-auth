import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
const PrivateRoutes = () => {
  const user = localStorage.getItem("user");
  const isAuthenticated = user ? JSON.parse(user) : null;
  return isAuthenticated ? (
    <>
      <div className="container">
        <Outlet />
      </div>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
