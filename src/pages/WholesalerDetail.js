import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const WholesalerDetail = () => {
  const { id } = useParams();
  const [wholesaler, setWholesaler] = useState(null);

  useEffect(() => {
    const fetchWholesaler = async () => {
      try {
        const docRef = doc(db, "wholesalers", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setWholesaler({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("해당 문서 없음");
        }
      } catch (error) {
        console.error("도매업체 불러오기 실패:", error);
      }
    };

    fetchWholesaler();
  }, [id]);

  if (!wholesaler) {
    return <div className="p-6">불러오는 중...</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Link to="/list" className="text-blue-500 hover:underline">← 도매업체 리스트로</Link>
      <h1 className="text-3xl font-bold mt-4 mb-2">{wholesaler.name}</h1>
      <img
        src={wholesaler.image || "https://via.placeholder.com/600x300"}
        alt={wholesaler.name}
        className="w-full rounded-xl mb-4"
      />
      <div className="text-sm text-gray-600 mb-1">카테고리: {wholesaler.category}</div>
      <div className="text-sm text-gray-600 mb-1">배송 방식: {wholesaler.delivery}</div>
      <div className="text-sm text-gray-600 mb-1">사입 여부: {wholesaler.purchase}</div>
      <div className="text-sm text-gray-600 mb-1">해외배송: {wholesaler.international}</div>
      <div className="text-sm text-gray-600 mb-1">연락처: {wholesaler.contact}</div>
      <div className="text-sm text-gray-600 mb-1">조회수: {wholesaler.views || 0}</div>
      <a
        href={wholesaler.website?.startsWith("http") ? wholesaler.website : `https://${wholesaler.website}`}
        className="inline-block mt-4 text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded"
        target="_blank"
        rel="noopener noreferrer"
      >
        🌐 공식 웹사이트 방문
      </a>
    </div>
  );
};

export default WholesalerDetail;
