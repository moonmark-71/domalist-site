import React from "react";

export default function ReviewStrategy() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">
        📌 4. 리뷰/구매평을 활용한 신뢰도 강화 전략
      </h2>

      <p className="text-gray-800 mb-4">
        리뷰는 스마트스토어 알고리즘에서 <strong>신뢰도</strong>의 핵심 지표로 작용합니다. 리뷰 수, 별점, 포토리뷰 유무 등이 전환율과 상위노출 모두에 영향을 미칩니다.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">✅ 어떤 리뷰가 효과적인가?</h3>
      <table className="table-auto w-full text-sm border mb-6">
        <thead className="bg-gray-100">
          <tr><th className="p-2 border">항목</th><th className="p-2 border">효과</th><th className="p-2 border">예시</th></tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">리뷰 수</td><td className="p-2 border">수치 자체가 신뢰도 지표</td><td className="p-2 border">1,200개 이상 리뷰</td></tr>
          <tr><td className="p-2 border">별점</td><td className="p-2 border">4.5 이상이면 긍정 시그널</td><td className="p-2 border">평점 4.8</td></tr>
          <tr><td className="p-2 border">리뷰 키워드</td><td className="p-2 border">검색 노출에 도움</td><td className="p-2 border">"여름 쿨링티 정말 시원해요"</td></tr>
          <tr><td className="p-2 border">포토/영상</td><td className="p-2 border">스마트스토어에서 가중치 있음</td><td className="p-2 border">착용샷, 비교컷 등</td></tr>
        </tbody>
      </table>

      <h3 className="text-xl font-semibold mt-6 mb-2">✅ 리뷰 유도 전략</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
        <li>리뷰 작성 시 소액 적립금 제공 (100~300원)</li>
        <li>포토리뷰 시 쿠폰 추가 지급</li>
        <li>배송 메시지에 리뷰 유도 문구 삽입</li>
        <li>QR 코드로 리뷰 작성 페이지 바로 연결</li>
      </ul>

      <div className="bg-gray-50 border p-4 rounded mb-6">
        <p className="font-semibold text-sm text-gray-700">🧑‍💻 실전 예시 문구</p>
        <ul className="list-disc pl-6 text-gray-700 mt-2">
          <li>“포토 리뷰 남기시면 500원 적립!”</li>
          <li>“소중한 리뷰는 다른 고객에게 큰 도움이 됩니다 😊”</li>
          <li>“리뷰 100건 달성 시 사은품 증정!”</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-2">📊 리뷰 키워드 감성분석 예시</h3>
      <table className="table-auto w-full text-sm border mb-6">
        <thead className="bg-gray-100">
          <tr><th className="p-2 border">키워드</th><th className="p-2 border">빈도</th><th className="p-2 border">감성</th></tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">시원해요</td><td className="p-2 border">137회</td><td className="p-2 border">긍정적</td></tr>
          <tr><td className="p-2 border">얇아요</td><td className="p-2 border">98회</td><td className="p-2 border">긍정적</td></tr>
          <tr><td className="p-2 border">배송 느려요</td><td className="p-2 border">17회</td><td className="p-2 border">부정적</td></tr>
          <tr><td className="p-2 border">사이즈 작음</td><td className="p-2 border">25회</td><td className="p-2 border">주의 필요</td></tr>
        </tbody>
      </table>

      <h3 className="text-xl font-semibold mt-6 mb-2">🛠 추천 도구</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li><strong>아이보스:</strong> <a className="text-blue-600 underline" href="https://www.i-boss.co.kr/" target="_blank">국내 마케팅 정보 커뮤니티</a></li>
        <li><strong>ChatGPT + 구글시트:</strong> 리뷰 데이터를 감정 분석에 활용</li>
        <li><strong>포토리뷰 알림봇 (마이소호 등):</strong> 자동화된 리뷰 요청 메시지</li>
      </ul>

      <p className="mt-6 text-sm text-gray-600">
        리뷰는 단순한 후기 그 이상으로, <strong>검색 알고리즘에 영향을 주는 핵심 지표</strong>입니다. 체계적으로 수집하고, 분석하고, 활용해야 합니다.
      </p>
    </section>
  );
}
