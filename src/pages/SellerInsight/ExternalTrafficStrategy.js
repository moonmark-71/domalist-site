import React from "react";

export default function ExternalTrafficStrategy() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">
        📌 5. 스마트스토어 외부 유입 트래픽 확보 전략
      </h2>

      <p className="text-gray-800 mb-4">
        스마트스토어 상위노출은 내부 검색뿐 아니라 <strong>외부 채널에서의 유입</strong>도 중요한 신호로 작용합니다. 블로그, 인스타그램, 유튜브, 커뮤니티 등에서 유입되는 방문자가 많을수록 알고리즘 상 유리해집니다.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">✅ 외부 유입의 효과</h3>
      <table className="table-auto w-full text-sm border mb-6">
        <thead className="bg-gray-100">
          <tr><th className="p-2 border">유입 채널</th><th className="p-2 border">효과</th></tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">블로그/유튜브</td><td className="p-2 border">신뢰도↑, 검색노출 시그널 생성</td></tr>
          <tr><td className="p-2 border">SNS (인스타그램, 틱톡 등)</td><td className="p-2 border">자연스러운 유입 + 공유 효과</td></tr>
          <tr><td className="p-2 border">커뮤니티 (맘카페 등)</td><td className="p-2 border">구매 전환율 높은 타겟 유입</td></tr>
        </tbody>
      </table>

      <h3 className="text-xl font-semibold mt-6 mb-2">✅ 채널별 전략 예시</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
        <li><strong>블로그:</strong> 키워드 중심 후기 포스팅 → 스마트스토어 링크 삽입</li>
        <li><strong>인스타그램:</strong> 쇼츠 영상 + 프로필 링크에 스마트스토어 연결 (Taplink/Linktree 사용)</li>
        <li><strong>유튜브 쇼츠:</strong> 언박싱/사용 리뷰 → 설명란에 링크 추가</li>
        <li><strong>커뮤니티:</strong> 관련 제품 사용 후기성 글 노출 (특정 맘카페, 직장인 커뮤니티 등)</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">📊 유입 효과 비교 도표</h3>
      <table className="table-auto w-full text-sm border mb-6">
        <thead className="bg-gray-100">
          <tr><th className="p-2 border">채널</th><th className="p-2 border">평균 클릭률</th><th className="p-2 border">전환율</th><th className="p-2 border">특징</th></tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">네이버 블로그</td><td className="p-2 border">4~8%</td><td className="p-2 border">2~4%</td><td className="p-2 border">리뷰 + 키워드 검색에 강함</td></tr>
          <tr><td className="p-2 border">인스타그램</td><td className="p-2 border">1~3%</td><td className="p-2 border">1~2%</td><td className="p-2 border">감성 제품에 적합</td></tr>
          <tr><td className="p-2 border">유튜브 쇼츠</td><td className="p-2 border">3~7%</td><td className="p-2 border">3~5%</td><td className="p-2 border">짧은 리뷰 영상 효과적</td></tr>
          <tr><td className="p-2 border">맘카페 등 커뮤니티</td><td className="p-2 border">5~10%</td><td className="p-2 border">4~8%</td><td className="p-2 border">타겟 유저 신뢰 높음</td></tr>
        </tbody>
      </table>

      <h3 className="text-xl font-semibold mt-6 mb-2">🛠 활용 가능한 도구</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li><strong>SimilarWeb:</strong> <a className="text-blue-600 underline" href="https://www.similarweb.com/" target="_blank">채널별 트래픽 분석</a></li>
        <li><strong>Taplink/Linktree:</strong> <a className="text-blue-600 underline" href="https://taplink.cc/" target="_blank">SNS 링크 통합 도구</a></li>
        <li><strong>네이버 스마트스토어 통계:</strong> 관리자 센터에서 유입경로 확인 가능</li>
      </ul>

      <p className="mt-6 text-sm text-gray-600">
        외부 유입은 검색 알고리즘에 긍정적 신호를 줄 뿐 아니라, 브랜드 인지도와 자연스러운 바이럴 효과까지 기대할 수 있습니다.
      </p>
    </section>
  );
}
