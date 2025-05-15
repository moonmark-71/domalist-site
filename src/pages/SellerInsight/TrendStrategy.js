import React from "react";

export default function TrendStrategy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8 text-gray-800">
      <h1 className="text-3xl font-bold border-b pb-4">🧽 트렌드 상품 빠른 찾는 방법</h1>

      {/* 1. 위 트렌드 상품을 빠른 찾는 것이 중요한가? */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">1. 위 트렌드 상품을 빠른 찾는 것이 중요한가?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>상위노출이 쉬운:</strong> 경쟁자가 적을 때 진입하면 광고비 없이도 자연노출 가능</li>
          <li><strong>마진율이 높음:</strong> 희소성과 관심도 때문에 가격 저항이 낮음</li>
          <li><strong>회전율이 빠른:</strong> 소비자 관심도가 높아 빠른 재고 소진 가능</li>
        </ul>
      </section>

      {/* 2~6의 요약법, URL 포함 */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">2. 데이터 기반 트렌드 배경 도구</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>고급 트렌드:</strong> <a href="https://trends.google.co.kr" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://trends.google.co.kr</a></li>
          <li><strong>네이버 데이터렌:</strong> <a href="https://datalab.naver.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://datalab.naver.com</a></li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">3. SNS 모니터링</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>인스타그램 해시태그:</strong> <a href="https://www.instagram.com/explore/tags" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.instagram.com/explore/tags</a></li>
          <li><strong>틱톡 트렌드:</strong> <a href="https://www.tiktok.com/discover" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.tiktok.com/discover</a></li>
          <li><strong>유튜브 쇼츠:</strong> <a href="https://www.youtube.com/shorts" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.youtube.com/shorts</a></li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">4. 키워드 및 검색량 배경</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>네이버 키워드 도구:</strong> <a href="https://manage.searchad.naver.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://manage.searchad.naver.com</a></li>
          <li><strong>고급 키워드 플래너:</strong> <a href="https://ads.google.com/intl/ko_kr/home/tools/keyword-planner" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://ads.google.com/intl/ko_kr/home/tools/keyword-planner</a></li>
          <li><strong>Buzzsumo:</strong> <a href="https://buzzsumo.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://buzzsumo.com</a></li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">5. 빠른 소식과 테스트</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>타오바오 이미지 검색:</strong> <a href="https://world.taobao.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://world.taobao.com</a></li>
          <li><strong>소군모 테스트 판매:</strong> 초기 반응 검증 후 확장 가능</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">6. 자동화 및 모니터링 핀</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Google Alerts:</strong> <a href="https://www.google.com/alerts" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.google.com/alerts</a></li>
          <li><strong>ChatGPT:</strong> <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://chat.openai.com</a></li>
          <li><strong>Notion:</strong> <a href="https://www.notion.so" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.notion.so</a></li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">✅ 정리 및 실전 핀</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>매일 아침 10분 투자로 '오늘 뜨을 상품' 체크</li>
          <li>SNS와 블록에서 직접 후기 컨테츠 제작 통해 외부 유입 확대</li>
          <li>상위노출 알고리즘과 결합해 자연노출 시나지 그룹화</li>
        </ul>
        <p className="mt-4">트렌드 상품은 데이터와 현재 감각을 합칠해 빠른 포착과 소군모 테스트를 통해 빠른 시행이 해결입니다.
        </p>
      </section>
    </div>
  );
}
