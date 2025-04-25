// src/components/BulkUploader.js
import React from "react";
import * as XLSX from "xlsx";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const BulkUploader = () => {
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(sheet);

    for (const row of rows) {
      try {
        await addDoc(collection(db, "wholesalers"), row);
      } catch (err) {
        console.error("업로드 실패:", err);
      }
    }
    alert("엑셀 등록 완료!");
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-2">📤 도매업체 일괄 등록</h2>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
    </div>
  );
};

export default BulkUploader;
