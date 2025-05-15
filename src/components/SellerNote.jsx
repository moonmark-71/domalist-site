// src/components/SellerNote.jsx
import React from "react";
import { useAuth } from "../hooks/useAuth"; // 로그인 체크 훅 경로 맞춰서
import DOMPurify from "dompurify";

/**
 * note 객체 형태 예시:
 * {
 *   title: string,
 *   content: string, // "<p>…</p>" 같은 HTML 문자열
 * }
 */
export default function SellerNote({ note }) {
  const { currentUser } = useAuth();

  // 로그인 유저만 HTML 렌더링
  const safeHtml = currentUser
    ? DOMPurify.sanitize(note.content)
    : "";

  return (
    <div className="seller-note p-6 border rounded-lg shadow-sm">
      {/* 제목은 언제나 보여줌 */}
      <h2 className="text-2xl font-semibold mb-4">{note.title}</h2>

      {/* 로그인 했을 때만 본문 렌더링 */}
      {currentUser && (
        <div
          className="note-content prose max-w-none"
          dangerouslySetInnerHTML={{ __html: safeHtml }}
        />
      )}
    </div>
  );
}
