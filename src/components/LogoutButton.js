// src/components/LogoutButton.js
import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      alert("로그아웃 실패: " + error.message);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="text-sm text-gray-600 hover:text-red-600 border border-gray-300 px-3 py-1 rounded"
    >
      로그아웃
    </button>
  );
}

export default LogoutButton;
