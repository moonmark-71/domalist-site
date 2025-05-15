import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";

const AdminAddSellernote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error("제목과 내용을 모두 입력해주세요.");
      return;
    }

    try {
      await addDoc(collection(db, "sellernotes"), {
        title,
        content,
        createdAt: serverTimestamp(),
        author: "관리자"
      });
      toast.success("글이 성공적으로 등록되었습니다.");
      navigate("/sellernote");
    } catch (error) {
      console.error("글 등록 실패:", error);
      toast.error("글 등록 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">셀러노트 글 작성</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
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
          placeholder="내용을 입력하세요"
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
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          등록하기
        </button>
      </form>
    </div>
  );
};

export default AdminAddSellernote;