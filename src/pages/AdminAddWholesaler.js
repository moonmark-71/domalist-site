// src/pages/AdminAddWholesaler.js
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const AdminAddWholesaler = () => {
  const [form, setForm] = useState({
    name: "",
    category: "",
    delivery: "",
    purchase: "",
    international: "",
    contact: "",
    website: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "wholesalers"), {
        ...form,
        views: 0,
        createdAt: serverTimestamp(),
      });
      alert("업체가 성공적으로 등록되었습니다!");
      setForm({
        name: "",
        category: "",
        delivery: "",
        purchase: "",
        international: "",
        contact: "",
        website: "",
        image: "",
      });
    } catch (error) {
      console.error("등록 실패:", error);
      alert("등록 중 오류 발생");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white mt-6 shadow rounded">
      <h1 className="text-2xl font-bold mb-4">도매업체 등록</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { name: "name", label: "업체명" },
          { name: "category", label: "카테고리" },
          { name: "delivery", label: "배송 방식" },
          { name: "purchase", label: "사입 여부" },
          { name: "international", label: "해외배송" },
          { name: "contact", label: "연락처" },
          { name: "website", label: "웹사이트 주소" },
          { name: "image", label: "이미지 URL" },
        ].map(({ name, label }) => (
          <div key={name}>
            <label className="block font-medium text-sm mb-1">{label}</label>
            <input
              type="text"
              name={name}
              value={form[name]}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 font-semibold"
        >
          등록하기
        </button>
      </form>
    </div>
  );
};

export default AdminAddWholesaler;
