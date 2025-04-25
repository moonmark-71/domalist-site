// src/pages/CategoryCleaner.js
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

const categoryMapping = {
  "패 션": "패션",
  "패션잡화": "패션",
  "생활잡화": "생활",
  "잡화": "생활",
  "리 빙": "리빙",
  "식 품": "식품",
  "기타": "기타",
};

const CategoryCleaner = () => {
  const [logs, setLogs] = useState([]);
  const [done, setDone] = useState(false);

  const normalizeCategory = (original) => {
    const trimmed = original.trim();
    return categoryMapping[trimmed] || trimmed;
  };

  const runCleaner = async () => {
    const snapshot = await getDocs(collection(db, "wholesalers"));
    const updates = [];

    for (const docSnap of snapshot.docs) {
      const data = docSnap.data();
      const original = data.category;
      const cleaned = normalizeCategory(original);
      if (original !== cleaned) {
        updates.push({
          id: docSnap.id,
          from: original,
          to: cleaned,
        });
        await updateDoc(doc(db, "wholesalers", docSnap.id), {
          category: cleaned,
        });
      }
    }

    setLogs(updates);
    setDone(true);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">카테고리 정제 도구</h1>
      <button
        onClick={runCleaner}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        정제 실행
      </button>

      {done && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">변경 내역:</h2>
          {logs.length === 0 ? (
            <p>변경된 항목 없음</p>
          ) : (
            <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
              {logs.map((log, i) => (
                <li key={i}>
                  <b>{log.id}</b>: "{log.from}" → "{log.to}"
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryCleaner;
