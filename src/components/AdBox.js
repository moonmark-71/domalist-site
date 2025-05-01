// src/components/AdBox.js
import React from "react";

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

export default function AdBox({ ad }) {
  return (
    <div className="sticky top-24">
      <div className="bg-white border rounded-xl shadow p-4 text-center text-sm text-gray-500">
        <a
          href={ad.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src={ad.image}
            alt={ad.name}
            className="w-full h-40 object-contain mx-auto mb-2"
          />
          <div className="mt-2 text-gray-800">
            <div className="text-base font-semibold leading-tight">{ad.name}</div>
            <div className="text-xs text-gray-500 mt-1">{ad.description}</div>
            <div className="text-lg text-red-500 font-bold mt-2">{ad.price}</div>
          </div>
        </a>

        <p className="text-xs text-gray-400 mt-4">
          본 페이지는 쿠팡파트너스 활동을 통해 일정 수수료를 제공받을 수 있습니다.
        </p>

        <div className="mt-2">
          광고 문의: <br />
          <a href="mailto:moonmark71@gmail.com" className="text-blue-500 hover:underline">
            moonmark71@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
