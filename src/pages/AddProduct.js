// src/pages/AddProduct.js
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

function AddProduct() {
  const { user, loading } = useAuth();
  const [form, setForm] = useState({
    name: "",
    imageUrl: "",
    summary: "",
    price: "",
    siteUrl: ""
  });
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (!loading && !user) return <Navigate to="/login" />;

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
        console.warn("썸네일 자동 추출 실패", err);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");
    try {
      await addDoc(collection(db, "products"), {
        ...form,
        price: Number(form.price),
        createdBy: user.uid,
        createdByEmail: user.email,
        createdAt: serverTimestamp()
      });
      setForm({ name: "", imageUrl: "", summary: "", price: "", siteUrl: "" });
      setMessage("✅ 상품이 등록되었습니다.");
    } catch (err) {
      setMessage("❌ 등록 실패: " + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">📦 상품 등록 (도매업체용)</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="상품명" className="w-full border px-4 py-2 rounded" required />
        <input name="imageUrl" value={form.imageUrl} onChange={handleChange} placeholder="이미지 URL (자동 입력됨)" className="w-full border px-4 py-2 rounded" />
        <textarea name="summary" value={form.summary} onChange={handleChange} placeholder="상품 요약 설명" className="w-full border px-4 py-2 rounded" rows={3} />
        <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="가격" className="w-full border px-4 py-2 rounded" />
        <input name="siteUrl" value={form.siteUrl} onChange={handleChange} placeholder="상품 상세 페이지 URL" className="w-full border px-4 py-2 rounded" />
        <button type="submit" disabled={submitting} className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
          {submitting ? "등록 중..." : "상품 등록"}
        </button>
      </form>
      {message && <p className="mt-4 text-sm text-center">{message}</p>}
    </div>
  );
}

export default AddProduct;
