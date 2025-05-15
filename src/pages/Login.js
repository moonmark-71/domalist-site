import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("로그인 중입니다...");

    const auth = getAuth();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      const tokenResult = await user.getIdTokenResult();
      const role = tokenResult.claims.role;

      localStorage.setItem(
        "user",
        JSON.stringify({ uid: user.uid, email: user.email, role: role || "user" })
      );

      setMessage("✅ 로그인 성공!");
      setTimeout(() => {
        if (role === "admin") {
          navigate("/admin");
        } else {
          navigate("/add");
        }
      }, 1000);
    } catch (err) {
      setMessage("");
      setError("❌ 로그인 실패: 이메일 또는 비밀번호를 확인해주세요.");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">🔐 로그인</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일" className="w-full border px-4 py-2 rounded" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호" className="w-full border px-4 py-2 rounded" required />
        <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
          로그인
        </button>
      </form>
      {message && <p className="mt-4 text-sm text-green-700 text-center">{message}</p>}
      {error && <p className="mt-4 text-sm text-red-600 text-center">{error}</p>}
    </div>
  );
}

export default Login;
