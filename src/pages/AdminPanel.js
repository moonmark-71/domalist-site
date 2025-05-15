import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  addDoc
} from "firebase/firestore";
import { db } from "../firebase";

const AdminPanel = () => {
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [wholesalers, setWholesalers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    website: "",
    contact: "",
    logoUrl: "",
    summary: "",
  });

  const navigate = useNavigate();

  // ✅ 관리자 권한 체크
  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }

    user.getIdTokenResult().then((token) => {
      if (token.claims.role === "admin") {
        setAuthorized(true);
        fetchWholesalers(); // 🔄 도매업체 불러오기
      } else {
        alert("관리자 권한이 없습니다.");
        navigate("/");
      }
      setLoading(false);
    });
  }, []);

  // 🔄 도매업체 불러오기
  const fetchWholesalers = async () => {
    const snapshot = await getDocs(collection(db, "wholesalers"));
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setWholesalers(data);
  };

  // 🗑️ 삭제
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "wholesalers", id));
    setWholesalers(prev => prev.filter(w => w.id !== id));
  };

  // ✏️ 등록
  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "wholesalers"), formData);
    fetchWholesalers(); // 다시 불러오기
    setFormData({ name: "", category: "", website: "", contact: "" });
  };

  if (loading) return <div className="text-center mt-10">🔒 관리자 확인 중...</div>;
  if (!authorized) return null;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">📋 도매업체 등록 관리</h1>

      {/* ✅ 등록 폼 */}
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mb-6">
      <input name="name" placeholder="업체명" value={formData.name} onChange={handleChange} />
<input name="category" placeholder="카테고리" value={formData.category} onChange={handleChange} />
<input name="website" placeholder="사이트 URL" value={formData.website} onChange={handleChange} />
<input name="contact" placeholder="연락처" value={formData.contact} onChange={handleChange} />
<input name="logoUrl" placeholder="로고 이미지 URL" value={formData.logoUrl} onChange={handleChange} />
<input name="summary" placeholder="요약 설명" value={formData.summary} onChange={handleChange} />
        <button type="submit" className="col-span-2 bg-blue-600 text-white py-2 rounded">등록</button>
      </form>

      {/* ✅ 업체 목록 */}
      <ul className="space-y-2">
        {wholesalers.map(w => (
          <li key={w.id} className="flex justify-between items-center border p-3 rounded">
            <span>{w.name} ({w.category})</span>
            <button onClick={() => handleDelete(w.id)} className="text-red-500 hover:underline">삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
