// src/components/ProtectedRoute.js
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(undefined); // null이 아닌 undefined로 초기화
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <div>로딩 중...</div>;

  return user ? children : <Navigate to="/admin-login" replace />;
};

export default ProtectedRoute;
