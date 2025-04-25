import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/add-product"); // ✅ 로그인 성공 시 이동
    } catch (err) {
      setError("로그인 실패: " + err.message);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">🔐 도매업체 로그인</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일"
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
          className="w-full border px-4 py-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
        >
          로그인
        </button>
      </form>
      {error && <p className="mt-4 text-sm text-red-600 text-center">{error}</p>}
    </div>
  );
}

export default Login;
