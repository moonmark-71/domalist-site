import React from "react";

export default function AdStrategy() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">📌 7. 광고(AI/쇼핑검색광고) 전략</h2>

      <p className="text-gray-800 mb-4">
        스마트스토어 상위노출 알고리즘은 유입량과 전환율을 학습해 "인기 상품"으로 인식합니다.
        <strong>초기 광고 유입</strong>은 상품 자체의 노출 가속화에 매우 효과적입니다.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">✅ 주요 광고 유형</h3>
      <table className="table-auto w-full text-sm border mb-6">
        <thead className="bg-gray-100">
          <tr><th className="p-2 border">유형</th><th className="p-2 border">설명</th><th className="p-2 border">추천 상황</th></tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">AI 자동 광고</td><td className="p-2 border">네이버가 자동으로 예산 및 노출 위치 조정</td><td className="p-2 border">광고 경험이 적은 셀러</td></tr>
          <tr><td className="p-2 border">쇼핑검색 광고</td><td className="p-2 border">키워드 기반 수동 등록 및 관리</td><td className="p-2 border">특정 키워드 집중 타겟</td></tr>
          <tr><td className="p-2 border">네이버 톡톡 광고</td><td className="p-2 border">톡톡 대화 기반 전환 유도</td><td className="p-2 border">고관여 제품</td></tr>
          <tr><td className="p-2 border">브랜드 검색 광고</td><td className="p-2 border">브랜드 키워드 검색 시 최상단 노출</td><td className="p-2 border">브랜드 인지도 확보용</td></tr>
        </tbody>
      </table>

      <h3 className="text-xl font-semibold mt-6 mb-2">🎯 광고 시작 전 준비사항</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>상품명 키워드 최적화 (앞에서 설정한 전략 반영)</li>
        <li>썸네일 이미지 교체 – 클릭률 높은 구조로</li>
        <li>상세페이지 구성 개선 – 전환률 확보용</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">💰 예산 설정 가이드 (AI 광고 기준)</h3>
      <table className="table-auto w-full text-sm border mb-6">
        <thead className="bg-gray-100">
          <tr><th className="p-2 border">일 예산</th><th className="p-2 border">예측 클릭수</th><th className="p-2 border">예상 구매</th></tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">₩5,000</td><td className="p-2 border">50~70</td><td className="p-2 border">1~2건</td></tr>
          <tr><td className="p-2 border">₩10,000</td><td className="p-2 border">100~140</td><td className="p-2 border">2~4건</td></tr>
        </tbody>
      </table>
      <p className="text-gray-600 text-sm mb-6">※ 예산 대비 전환율 분석 후 단계별 확장</p>

      <h3 className="text-xl font-semibold mt-6 mb-2">📊 성과 분석 & 최적화</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>광고센터에서 CTR, 전환율 분석</li>
        <li>클릭률 낮은 키워드는 제외, 전환율 높은 키워드 집중</li>
        <li>자연노출과 연계 전략 수립 (광고 → 리뷰 → 전환 → 노출)</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">🛠 광고에 활용할 수 있는 도구</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>
          <strong>네이버 광고센터:</strong> <a href="https://searchad.naver.com" className="text-blue-600 underline" target="_blank">광고 캠페인 및 키워드 관리</a>
        </li>
        <li>
          <strong>애드리포트:</strong> <a href="https://adreport.kr" className="text-blue-600 underline" target="_blank">AI 기반 광고 성과 분석</a>
        </li>
        <li>
          <strong>아이보스 커뮤니티:</strong> <a href="https://www.i-boss.co.kr" className="text-blue-600 underline" target="_blank">광고 사례 및 전략 공유</a>
        </li>
      </ul>
    </section>
  );
}
