// src/hooks/useWholesalers.js
import { useEffect, useState } from "react";
import { db } from "../firebase";                          // 경로 맞게 확인
import { collection, getDocs, query, where } from "firebase/firestore";

export default function useWholesalers(category) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function load() {
      let q = collection(db, "wholesalers");
      if (category) q = query(q, where("category", "==", category));
      const snap = await getDocs(q);
      setData(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    }
    load();
  }, [category]);

  return data;
}
