import React from "react";

export default function KeywordStrategy() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">2. 상품 제목 키워드 전략</h2>
      <p className="mb-4 text-gray-700">
        네이버 스마트스토어는 <strong>단어 기반 검색엔진</strong>을 사용하기 때문에, 구매자가 검색할 만한 단어 조합을 상품명 앞부분에 배치하는 것이 중요합니다.
      </p>

      <div className="bg-gray-50 border p-4 rounded mb-6">
        <p className="mb-2 font-semibold text-sm text-gray-600">📌 단일 키워드 vs 복합 키워드</p>
        <ul className="list-disc ml-6 text-sm text-gray-700">
          <li>단일 키워드: 예) 양말, 담요 (검색량은 높지만 경쟁 심함)</li>
          <li>복합 키워드: 예) 여성양말, 겨울 담요 (구체적이고 구매전환율 ↑)</li>
        </ul>
      </div>

      <h3 className="text-lg font-semibold mb-2">✅ 제목 구성 방식 예시</h3>
      <ul className="list-disc ml-6 mb-6 text-gray-700">
        <li><strong>좋은 예:</strong> 여성 반팔티 여름쿨링 면티 라운드 반소매</li>
        <li><strong>나쁜 예:</strong> 여름에 입기 좋은 여성 옷</li>
      </ul>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">🔍 키워드 분석에 유용한 도구</h3>
        <ul className="list-disc ml-6 text-blue-600">
          <li>
            <a href="https://datalab.naver.com" target="_blank" rel="noopener noreferrer">
              네이버 데이터랩 – 쇼핑인사이트 및 검색 트렌드 확인
            </a>
          </li>
          <li>
            <a href="https://searchad.naver.com" target="_blank" rel="noopener noreferrer">
              네이버 키워드 광고 시스템 – 검색량, 경쟁도 분석
            </a>
          </li>
          <li>
            <a href="https://itemscout.io" target="_blank" rel="noopener noreferrer">
              아이템스카우트 – 키워드 추천, 카테고리 분석 등 제공
            </a>
          </li>
          <li>
            <a href="https://pandarank.co.kr" target="_blank" rel="noopener noreferrer">
              판다랭크 – 경쟁도 낮은 키워드 탐색, 광고 순위 분석
            </a>
          </li>
        </ul>
      </div>

      <div className="bg-white border-l-4 border-green-400 p-4 text-gray-700 text-sm">
        <p className="mb-1 font-semibold">💡 실무 팁</p>
        <ul className="list-disc ml-6">
          <li>상품명에 4~8개 키워드 조합, 중요 키워드는 앞쪽 배치</li>
          <li>키워드 별 띄어쓰기 여부에 따라 노출 결과 달라짐 (예: 생 삼겹살 vs 생삼겹살)</li>
          <li>스마트스토어 관리자센터의 <strong>“상품명 검색품질 체크”</strong> 기능 활용</li>
        </ul>
      </div>
    </section>
  );
}
