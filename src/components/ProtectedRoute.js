// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user?.role === "admin";

  if (!isAdmin) {
    alert("관리자만 접근 가능한 페이지입니다.");
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
