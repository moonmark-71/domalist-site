import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-8 px-4 mt-10">
      <div className="max-w-6xl mx-auto text-sm space-y-3">
        <div className="font-extrabold text-lg">JB도매리스트</div>
        <p>
          사업자명: 키위프 | 대표: 윤종범 | 사업자 등록번호: 413-17-02046<br />
          통신판매업신고: 제2023-강원양양-0012호 | 대표이메일: kiwif1009@gmail.com | 대표번호: 0507-1373-4041<br />
          주소: 강원도 양양군 양양읍 72-1, 3층
        </p>
        <p className="text-gray-400">
          ⓒ {new Date().getFullYear()} JB도매리스트. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
