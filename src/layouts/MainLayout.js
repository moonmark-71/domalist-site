// src/layouts/MainLayout.js
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AdBox from "../components/AdBox";

// 광고 상품 리스트
const ads = [
  {
    image: "/coupang-aircon.jpg",
    name: "신일 창문형 에어컨 정속형 창틀형 창문식 소형 원룸 SMA-C7000DM",
    description: "AS가 완벽하고 설치 편리한 신일 창문형 에어컨",
    price: "₩398,000",
    link: "https://link.coupang.com/a/cqFPKk"
  },
  {
    image: "/coupang-massagechair.jpg",
    name: "릴렉스파 안마소파",
    description: "편안한 휴식을 위한 고급 안마소파",
    price: "₩304,800",
    link: "https://link.coupang.com/a/cqFCvp"
  },
  {
    image: "/coupang-water.jpg",
    name: "프루얼생수 12병",
    description: "신선하고 깨끗한 생수",
    price: "₩7,600",
    link: "https://link.coupang.com/a/cqFCQZ"
  },
  {
    image: "/coupang-backpack.jpg",
    name: "니즈슬링 유럽 백팩",
    description: "스타일과 실용성을 동시에",
    price: "₩19,800",
    link: "https://link.coupang.com/a/cqFIYI"
  },
  {
    image: "/coupang-suitcase.jpg",
    name: "3A 독일산 캐리어",
    description: "견고하고 가벼운 여행 필수품",
    price: "₩138,900",
    link: "https://link.coupang.com/a/cqFJQk"
  },
  {
    image: "/coupang-bacchus.jpg",
    name: "박카스 에프엑스",
    description: "피로회복에 좋은 국민 드링크",
    price: "₩7,450",
    link: "https://link.coupang.com/a/cqFKxD"
  }
];

// 랜덤으로 서로 다른 광고 2개 선택하는 함수
function getTwoRandomAds() {
  const shuffled = [...ads].sort(() => 0.5 - Math.random());
  return [shuffled[0], shuffled[1]];
}

export default function MainLayout({ children }) {
  const [leftAd, setLeftAd] = useState(null);
  const [rightAd, setRightAd] = useState(null);

  useEffect(() => {
    const [left, right] = getTwoRandomAds();
    setLeftAd(left);
    setRightAd(right);
  }, []);

  // 광고가 아직 준비 안 됐으면 로딩 대기
  if (!leftAd || !rightAd) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* 상단 Header */}
      <Header />

      {/* 메인 레이아웃 (광고 + 본문 + 광고) */}
      <div className="grid gap-4 flex-grow
          lg:grid-cols-[300px_minmax(0,1fr)_300px]
          max-w-[1600px] mx-auto
          px-4 sm:px-6 lg:px-8 py-6
      ">
        {/* 왼쪽 광고 */}
        <aside className="hidden lg:block">
          <AdBox ad={leftAd} />
        </aside>

        {/* 본문 */}
        <main className="max-w-4xl mx-auto">
          {children || (
            <div className="text-center text-gray-500 py-10">
              표시할 콘텐츠가 없습니다.
            </div>
          )}
        </main>

        {/* 오른쪽 광고 */}
        <aside className="hidden lg:block">
          <AdBox ad={rightAd} />
        </aside>
      </div>

      {/* 하단 Footer */}
      <Footer />
    </div>
  );
}
