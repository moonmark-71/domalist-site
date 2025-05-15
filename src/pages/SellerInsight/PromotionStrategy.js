import React from "react";

export default function PromotionStrategy() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">
        📌 6. 시기별/이슈 기반 프로모션 전략
      </h2>

      <p className="text-gray-800 mb-4">
        스마트스토어에서는 <strong>소비자 관심 이슈</strong>와 <strong>시기적 흐름</strong>에 맞는 마케팅이 상위노출과 매출에 직결됩니다.
        단순 할인보다는 적절한 타이밍과 스토리텔링이 중요합니다.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">✅ 시기별 주요 테마 캘린더</h3>
      <table className="table-auto w-full text-sm border mb-6">
        <thead className="bg-gray-100">
          <tr><th className="p-2 border">시기</th><th className="p-2 border">테마 예시</th><th className="p-2 border">관련 키워드</th></tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">1~2월</td><td className="p-2 border">신년맞이, 다이어트</td><td className="p-2 border">플래너, 운동용품</td></tr>
          <tr><td className="p-2 border">3~4월</td><td className="p-2 border">봄맞이, 새학기, 이사</td><td className="p-2 border">커튼, 주방용품</td></tr>
          <tr><td className="p-2 border">5~6월</td><td className="p-2 border">가정의 달, 여름 준비</td><td className="p-2 border">쿨링의류, 부모님 선물</td></tr>
          <tr><td className="p-2 border">7~8월</td><td className="p-2 border">휴가, 캠핑, 방학</td><td className="p-2 border">수영복, 텐트</td></tr>
          <tr><td className="p-2 border">9~10월</td><td className="p-2 border">추석, 개학, 환절기</td><td className="p-2 border">한과, 가습기</td></tr>
          <tr><td className="p-2 border">11~12월</td><td className="p-2 border">블랙프라이데이, 크리스마스</td><td className="p-2 border">선물세트, 방한용품</td></tr>
        </tbody>
      </table>

      <h3 className="text-xl font-semibold mt-6 mb-2">✅ 실전 프로모션 구성 예시</h3>
      <div className="bg-gray-50 p-4 rounded border mb-6">
        <p className="font-medium mb-2">[5월 가정의 달 기획전 예시]</p>
        <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1">
          <li>상품 타이틀에 [가정의달] 키워드 삽입</li>
          <li>상세페이지에 혜택 안내 배너 삽입</li>
          <li>카카오 채널 또는 스마트톡 연동으로 할인 쿠폰 제공</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-2">🎯 전략적으로 활용할 수 있는 마케팅 팁</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li><strong>사전 등록:</strong> 시즌 도래 전 최소 2~3주 전 노출 시작</li>
        <li><strong>한정 수량 강조:</strong> 긴박감 유도 (ex. 선착순 100개)</li>
        <li><strong>사은품 구성:</strong> 메인 상품 + 실용적인 부가상품 번들 구성</li>
        <li><strong>SNS 썸네일 배포:</strong> Canva 등으로 썸네일 제작 후 블로그/SNS 확산</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">🛠 활용 가능한 도구</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>
          <strong>네이버 쇼핑 트렌드 캘린더:</strong> <a href="https://shopping.naver.com/plan/rank" className="text-blue-600 underline" target="_blank">이벤트별 트렌드 확인</a>
        </li>
        <li>
          <strong>네이버 데이터랩:</strong> <a href="https://datalab.naver.com/shoppingInsight/sCategory.naver" className="text-blue-600 underline" target="_blank">검색량 및 카테고리 트렌드 분석</a>
        </li>
        <li>
          <strong>Canva:</strong> <a href="https://www.canva.com/" className="text-blue-600 underline" target="_blank">프로모션 배너 제작 도구</a>
        </li>
      </ul>
    </section>
  );
}

