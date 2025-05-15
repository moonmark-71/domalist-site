import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const SellernoteDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    (async () => {
      const docRef = doc(db, "sellernotes", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) setNote(docSnap.data());
      else navigate("/sellernote");
    })();
  }, [id, navigate]);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdTokenResult();
        setIsAdmin(token.claims.role === "admin");
      } else {
        setIsAdmin(false);
      }
    });
  }, []);

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "정말 이 글을 삭제하시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "삭제",
      cancelButtonText: "취소"
    });
    if (result.isConfirmed) {
      await deleteDoc(doc(db, "sellernotes", id));
      toast.success("글이 삭제되었습니다.");
      navigate("/sellernote");
    }
  };

  if (!note) return <p className="p-6">로딩 중...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{note.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        작성일: {new Date(note.createdAt.seconds * 1000).toLocaleDateString()}
      </p>
      <div
        className="prose max-w-none mb-6"
        dangerouslySetInnerHTML={{ __html: note.content }}
      />
      {isAdmin && (
        <div className="flex gap-3">
          <button
            onClick={() => navigate(`/admin/sellernote-edit/${id}`)}
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            ✏️ 수정
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            🗑 삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default SellernoteDetail;