// src/layouts/MainLayout.js
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* 상단 내비게이션 */}
      <Header />

      {/* 메인 콘텐츠 영역 (광고 포함 3단 그리드) */}
      <div
        className="
          grid gap-4 flex-grow
          lg:grid-cols-[300px_minmax(0,1fr)_300px]
          max-w-[1600px] mx-auto
          px-4 sm:px-6 lg:px-8 py-6
        "
      >
        {/* 왼쪽 광고 */}
        <aside className="hidden lg:block">
          <AdBox />
        </aside>

        {/* 본문 콘텐츠 */}
        <main className="max-w-[1040px] mx-auto">
          {children || (
            <div className="text-center text-gray-500 py-10">
              표시할 콘텐츠가 없습니다.
            </div>
          )}
        </main>

        {/* 오른쪽 광고 */}
        <aside className="hidden lg:block">
          <AdBox />
        </aside>
      </div>

      {/* 하단 Footer */}
      <Footer />
    </div>
  );
}

/**
 * AdBox 컴포넌트 (광고박스 디자인)
 */
function AdBox() {
  return (
    <div className="sticky top-24">
      <div className="bg-white border rounded-xl shadow p-4 text-center text-sm text-gray-500">
        <a href="https://partners.coupang.com" target="_blank" rel="noopener noreferrer">
          <img
            src="/ad-sample.jpg"
            alt="광고 배너"
            className="w-full h-40 object-contain mx-auto mb-2"
          />
        </a>
        광고 문의: <br />
        <a href="mailto:you@example.com" className="text-blue-500 hover:underline">
          you@example.com
        </a>
      </div>
    </div>
  );
}
