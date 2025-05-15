
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";

const AdminEditSellernote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const docRef = doc(db, "sellernotes", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setTitle(data.title);
          setContent(data.content);
        } else {
          setError("존재하지 않는 게시글입니다.");
        }
      } catch {
        setError("게시글을 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error("제목과 내용을 모두 입력해주세요.");
      return;
    }

    try {
      const docRef = doc(db, "sellernotes", id);
      await updateDoc(docRef, { title, content });
      toast.success("글이 성공적으로 수정되었습니다.");
      navigate(`/sellernote/${id}`);
    } catch {
      toast.error("수정 중 오류가 발생했습니다.");
    }
  };

  if (loading) return <p className="p-6">로딩 중...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">셀러노트 글 수정</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          placeholder="제목을 입력하세요"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <ReactQuill
          value={content}
          onChange={setContent}
          modules={{
            toolbar: [
              [{ header: [1, 2, false] }],
              ["bold", "italic", "underline"],
              [{ list: "ordered" }, { list: "bullet" }],
              ["link", "image"]
            ]
          }}
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          disabled={!title.trim() || !content.trim()}
        >
          저장하기
        </button>
      </form>
    </div>
  );
};

export default AdminEditSellernote;
