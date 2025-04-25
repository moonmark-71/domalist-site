import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  deleteDoc,
  getDocs,
  doc,
} from "firebase/firestore";
import * as XLSX from "xlsx";

const AdminPanel = () => {
  const [wholesalers, setWholesalers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    delivery: "",
    purchase: "",
    international: "",
    contact: "",
    website: "",
  });

  // 🔄 도매업체 불러오기
  useEffect(() => {
    const fetchWholesalers = async () => {
      const querySnapshot = await getDocs(collection(db, "wholesalers"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setWholesalers(data);
    };

    fetchWholesalers();
  }, []);

  // 🔧 입력 변경 핸들러
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // ✅ 단일 등록
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "wholesalers"), {
        ...formData,
        views: 0,
      });
      alert("도매업체 등록 완료");
      setFormData({
        name: "",
        category: "",
        delivery: "",
        purchase: "",
        international: "",
        contact: "",
        website: "",
      });
    } catch (err) {
      console.error(err);
      alert("등록 실패");
    }
  };

  // ❌ 삭제
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "wholesalers", id));
    alert("삭제 완료");
    setWholesalers((prev) => prev.filter((item) => item.id !== id));
  };

  // 📎 엑셀 등록
  const handleExcelUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (evt) => {
      const data = evt.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(sheet);

      try {
        for (const item of jsonData) {
          await addDoc(collection(db, "wholesalers"), {
            ...item,
            views: 0,
          });
        }
        alert("엑셀 업로드 완료");
      } catch (err) {
        console.error(err);
        alert("엑셀 업로드 실패");
      }
    };
    reader.readAsBinaryString(file);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📋 도매업체 등록 관리</h1>

      {/* ✅ 신규 등록 */}
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mb-6">
        {Object.keys(formData).map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={field}
            className="border p-2 rounded"
          />
        ))}
        <button
          type="submit"
          className="col-span-2 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          등록
        </button>
      </form>

      {/* 📎 엑셀 등록 */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">📎 엑셀 일괄 등록</h2>
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleExcelUpload}
          className="mb-2"
        />
        <p className="text-sm text-gray-600">
          * 열 제목: name, category, delivery, purchase, international, contact, website
        </p>
      </div>

      {/* 📃 도매업체 목록 */}
      <h2 className="text-lg font-semibold mb-2">📃 등록된 도매업체</h2>
      <ul className="space-y-2">
        {wholesalers.map((w) => (
          <li
            key={w.id}
            className="flex justify-between items-center border p-3 rounded"
          >
            <span className="text-sm font-medium">{w.name} ({w.category})</span>
            <button
              onClick={() => handleDelete(w.id)}
              className="text-red-500 hover:underline text-sm"
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
