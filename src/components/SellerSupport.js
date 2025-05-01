// src/pages/SellerSupport.js
import React from "react";
import SupportCard from "../components/SupportCard";
import MainLayout from "../layouts/MainLayout";

export default function SellerSupport() {
  const supportPrograms = [
    {
      title: "소상공인시장진흥공단 지원사업",
      description: "스마트상점 구축, 온라인 판로개척 지원",
      link: "https://www.sbiz.or.kr/supprt/index.do"
    },
    {
      title: "청년창업 지원사업",
      description: "만 39세 이하 창업자에게 자금 및 컨설팅 지원",
      link: "https://www.k-startup.go.kr/"
    },
    {
      title: "스마트스토어 신규 입점 지원금",
      description: "네이버 신규 셀러 대상 최대 100만원 지원",
      link: "https://sell.smartstore.naver.com/"
    },
    {
      title: "정부 택배비 지원사업",
      description: "중소상공인 대상 택배비 일부 지원",
      link: "https://www.mss.go.kr/"
    }
  ];

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          셀러를 위한 정부 및 민간 지원사업
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {supportPrograms.map((program, idx) => (
            <SupportCard
              key={idx}
              title={program.title}
              description={program.description}
              link={program.link}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
