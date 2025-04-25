// src/pages/EditProduct.js
import React, { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import {
  doc,
  getDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useAuth } from "../hooks/useAuth";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  const [form, setForm] = useState({
    name: "",
    imageUrl: "",
    summary: "",
    price: "",
    siteUrl: "",
  });
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, "products", id);
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        const data = snapshot.data();
        if (data.createdBy !== user?.uid) {
          alert("수정 권한이 없습니다.");
          navigate("/products");
        } else {
          setForm({ ...data, price: String(data.price) });
        }
      } else {
        setNotFound(true);
      }
    };
    if (!loading && user) fetchProduct();
  }, [id, user, loading, navigate]);

  if (!loading && !user) return <Navigate to="/login" />;
  if (notFound) return <div className="text-center py-10">존재하지 않는 상품입니다.</div>;

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === "siteUrl" && value.startsWith("http")) {
      try {
        const res = await fetch(`https://api.microlink.io/?url=${encodeURIComponent(value)}`);
        const data = await res.json();
        if (data.status === "success" && data.data.image?.url) {
          setForm((prev) => ({ ...prev, imageUrl: data.data.image.url }));
        }
      } catch (err) {
        console.warn("썸네일 추출 실패", err);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");
    try {
      await updateDoc(doc(db, "products", id), {
        ...form,
        price: Number(form.price),
        updatedAt: serverTimestamp(),
      });
      setMessage("✅ 수정 완료!");
      setTimeout(() => navigate("/products"), 1000);
    } catch (err) {
      setMessage("❌ 수정 실패: " + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">✏️ 상품 수정</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="상품명" className="w-full border px-4 py-2 rounded" required />
        <input name="imageUrl" value={form.imageUrl} onChange={handleChange} placeholder="이미지 URL" className="w-full border px-4 py-2 rounded" />
        <textarea name="summary" value={form.summary} onChange={handleChange} placeholder="상품 요약 설명" className="w-full border px-4 py-2 rounded" rows={3} />
        <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="가격" className="w-full border px-4 py-2 rounded" />
        <input name="siteUrl" value={form.siteUrl} onChange={handleChange} placeholder="상품 상세 페이지 URL" className="w-full border px-4 py-2 rounded" />
        <button type="submit" disabled={submitting} className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
          {submitting ? "수정 중..." : "상품 수정"}
        </button>
      </form>
      {message && <p className="mt-4 text-sm text-center">{message}</p>}
    </div>
  );
}

export default EditProduct;
