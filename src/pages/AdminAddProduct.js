// src/pages/AdminAddProduct.js
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function AdminAddProduct() {
  const [form, setForm] = useState({
    name: "",
    imageUrl: "",
    summary: "",
    price: "",
    siteUrl: ""
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      await addDoc(collection(db, "products"), {
        ...form,
        price: Number(form.price),
        createdBy: user?.uid,
        createdByEmail: user?.email,
        createdAt: serverTimestamp()
      });
      setForm({ name: "", imageUrl: "", summary: "", price: "", siteUrl: "" });
      setMessage("✅ 상품이 등록되었습니다.");
    } catch (error) {
      setMessage("❌ 등록 실패: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">📦 상품 등록</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="상품명"
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          name="imageUrl"
          value={form.imageUrl}
          onChange={handleChange}
          placeholder="이미지 URL"
          className="w-full border px-4 py-2 rounded"
        />
        <textarea
          name="summary"
          value={form.summary}
          onChange={handleChange}
          placeholder="상품 요약 설명"
          className="w-full border px-4 py-2 rounded"
          rows={3}
        />
        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          placeholder="가격"
          className="w-full border px-4 py-2 rounded"
        />
        <input
          name="siteUrl"
          value={form.siteUrl}
          onChange={handleChange}
          placeholder="상품 상세 페이지 URL"
          className="w-full border px-4 py-2 rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
        >
          {loading ? "등록 중..." : "상품 등록"}
        </button>
      </form>
      {message && (
        <p className="mt-4 text-sm text-center">
          {form.siteUrl ? (
            <a href={form.siteUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              등록된 상품 페이지 바로가기
            </a>
          ) : message}
        </p>
      )}
    </div>
  );
}

export default AdminAddProduct;
