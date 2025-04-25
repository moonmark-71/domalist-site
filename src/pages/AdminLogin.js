import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("로그인 성공!");
      navigate("/admin");
    } catch (error) {
      alert("로그인 실패: " + error.message);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">관리자 로그인</h2>
      <input
        type="email"
        placeholder="이메일"
        className="w-full mb-2 px-3 py-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        className="w-full mb-4 px-3 py-2 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        onClick={handleLogin}
      >
        로그인
      </button>
    </div>
  );
};

export default AdminLogin;
