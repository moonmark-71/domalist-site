import React from "react";
import { Link } from "react-router-dom";

const SellerInfoCenter = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user?.role === "admin";

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-10">
        셀러정보센터
      </h1>

      {/* ✅ 1. 정책 지원 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">📌 정책 지원</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <PolicyCard
            title="중소기업유통센터 - 판로 지원사업"
            description="스마트스토어, 쿠팡 등 입점 + 광고비 일부 지원"
            link="https://www.sbiz.or.kr"
          />
          <PolicyCard
            title="소상공인시장진흥공단 - 창업 성장 패키지"
            description="초기 창업자 무료 교육, 마케팅 지원, 컨설팅 제공"
            link="https://www.semas.or.kr"
          />
          <PolicyCard
            title="소상공인 택배비 지원사업"
            description="소상공인에게 택배비 일부를 지원"
            link="https://delivery.sbiz24.kr/"
          />
        </div>
      </section>

      {/* ✅ 2. 셀링 인사이트 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">📈 셀링 인사이트</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <InsightCard
            title="스마트스토어 상위노출 전략"
            description="키워드 최적화, 썸네일 개선, 카테고리 일치로 노출 강화"
          >
            <ul className="text-sm list-disc list-inside mt-2 space-y-1">
              <li><Link to="/sellinginsight/algorithm-strategy" className="text-blue-600 underline">1. 노출 알고리즘 이해</Link></li>
              <li><Link to="/sellinginsight/keyword-strategy" className="text-blue-600 underline">2. 키워드 전략</Link></li>
              <li><Link to="/sellinginsight/detailpage-strategy" className="text-blue-600 underline">3. 상세페이지 전략</Link></li>
              <li><Link to="/sellinginsight/review-strategy" className="text-blue-600 underline">4. 리뷰 전략</Link></li>
              <li><Link to="/sellinginsight/traffic-strategy" className="text-blue-600 underline">5. 외부 유입 전략</Link></li>
              <li><Link to="/sellinginsight/promotion-strategy" className="text-blue-600 underline">6. 프로모션 전략</Link></li>
              <li><Link to="/sellinginsight/ad-strategy" className="text-blue-600 underline">7. 광고 전략</Link></li>
            </ul>
          </InsightCard>

          <InsightCard
            title="트렌드 상품 빠르게 찾는 법"
            description="네이버, 쿠팡, 유튜브 쇼츠 분석을 통한 인기상품 파악"
          >
            <Link to="/sellinginsight/trend-strategy" className="text-blue-600 underline text-sm mt-2 inline-block">
              → 전략 보러가기
            </Link>
          </InsightCard>
        </div>
      </section>

      {/* ✅ 3. 유용한 도구 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">🛠️ 유용한 도구</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-sm border border-gray-300">
            <thead className="bg-gray-100 text-gray-700 font-semibold">
              <tr>
                <th className="border px-4 py-2">카테고리</th>
                <th className="border px-4 py-2">툴/프로그램</th>
                <th className="border px-4 py-2">주요 기능 요약</th>
                <th className="border px-4 py-2">추천 셀러 유형</th>
                <th className="border px-4 py-2">무료/유료</th>
                <th className="border px-4 py-2">바로가기</th>
              </tr>
            </thead>
            <tbody className="text-center">
  {/* 상품 리서치 */}
  <tr>
    <td className="border px-4 py-2" rowSpan="2">상품 리서치</td>
    <td className="border px-4 py-2">판다랭크</td>
    <td className="border px-4 py-2">인기 키워드, 상품 트렌드 분석</td>
    <td className="border px-4 py-2">전 셀러</td>
    <td className="border px-4 py-2">무료</td>
    <td className="border px-4 py-2"><a href="https://pandarank.net" className="text-blue-600 underline" target="_blank" rel="noreferrer">바로가기</a></td>
  </tr>
  <tr>
    <td className="border px-4 py-2">아이템스카우트</td>
    <td className="border px-4 py-2">스마트스토어 트렌드, 키워드, 시장성 분석</td>
    <td className="border px-4 py-2">전 셀러</td>
    <td className="border px-4 py-2">무료/유료</td>
    <td className="border px-4 py-2"><a href="https://itemscout.io" className="text-blue-600 underline" target="_blank" rel="noreferrer">바로가기</a></td>
  </tr>

  {/* 키워드 분석 */}
  <tr>
    <td className="border px-4 py-2" rowSpan="2">키워드 분석</td>
    <td className="border px-4 py-2">네이버 데이터랩</td>
    <td className="border px-4 py-2">쇼핑 트렌드, 검색량 데이터 제공</td>
    <td className="border px-4 py-2">전 셀러</td>
    <td className="border px-4 py-2">무료</td>
    <td className="border px-4 py-2"><a href="https://datalab.naver.com" className="text-blue-600 underline" target="_blank" rel="noreferrer">바로가기</a></td>
  </tr>
  <tr>
    <td className="border px-4 py-2">셀러마스터</td>
    <td className="border px-4 py-2">상품키워드 검색량, 연관 키워드, 순위 분석</td>
    <td className="border px-4 py-2">전 셀러</td>
    <td className="border px-4 py-2">무료</td>
    <td className="border px-4 py-2"><a href="https://whereispost.com/seller" className="text-blue-600 underline" target="_blank" rel="noreferrer">바로가기</a></td>
  </tr>

  {/* 상품 등록/관리 */}
  <tr>
    <td className="border px-4 py-2" rowSpan="6">상품 등록/관리</td>
    <td className="border px-4 py-2">사방넷</td>
    <td className="border px-4 py-2">여러 마켓 상품/주문/재고 통합 관리</td>
    <td className="border px-4 py-2">중급~고수 셀러</td>
    <td className="border px-4 py-2">유료</td>
    <td className="border px-4 py-2"><a href="https://www.sabangnet.co.kr" className="text-blue-600 underline" target="_blank" rel="noreferrer">바로가기</a></td>
  </tr>
  <tr>
    <td className="border px-4 py-2">샵플링</td>
    <td className="border px-4 py-2">상품 대량 등록, 가격 자동화, 상세설명 생성</td>
    <td className="border px-4 py-2">초보~중급 셀러</td>
    <td className="border px-4 py-2">무료/유료</td>
    <td className="border px-4 py-2"><a href="https://www.shopling.co.kr/" className="text-blue-600 underline" target="_blank" rel="noreferrer">바로가기</a></td>
  </tr>
  <tr>
    <td className="border px-4 py-2">플레이오토</td>
    <td className="border px-4 py-2">마켓 통합관리, 대량등록, 주문/재고 관리</td>
    <td className="border px-4 py-2">전 셀러</td>
    <td className="border px-4 py-2">유료</td>
    <td className="border px-4 py-2"><a href="https://www.playauto.co.kr" className="text-blue-600 underline" target="_blank" rel="noreferrer">바로가기</a></td>
  </tr>
  <tr>
    <td className="border px-4 py-2">이셀러스</td>
    <td className="border px-4 py-2">상품 통합 판매/재고/대량등록, 자동화</td>
    <td className="border px-4 py-2">전 셀러</td>
    <td className="border px-4 py-2">유료</td>
    <td className="border px-4 py-2"><a href="https://www.esellers.co.kr" className="text-blue-600 underline" target="_blank" rel="noreferrer">바로가기</a></td>
  </tr>
  <tr>
    <td className="border px-4 py-2">셀픽(SELLPICK)</td>
    <td className="border px-4 py-2">오프라인 통합판매, 재고 관리, 대량등록</td>
    <td className="border px-4 py-2">전 셀러</td>
    <td className="border px-4 py-2">유료</td>
    <td className="border px-4 py-2"><a href="https://www.ssgsellpick.com/main/main.do" className="text-blue-600 underline" target="_blank" rel="noreferrer">바로가기</a></td>
  </tr>
    <tr>
    <td className="border px-4 py-2">카페24 마켓플러스</td>
    <td className="border px-4 py-2">카페24 쇼핑몰 통합관리, 대량등록</td>
    <td className="border px-4 py-2">전 셀러</td>
    <td className="border px-4 py-2">무료/유료</td>
    <td className="border px-4 py-2"><a href="https://marketplus.cafe24.com" className="text-blue-600 underline" target="_blank" rel="noreferrer">바로가기</a></td>
  </tr>

{/* 상세페이지 제작 */}
<tr>
  <td className="border px-4 py-2" rowSpan="3">상세페이지 제작</td>
  <td className="border px-4 py-2">Canva</td>
  <td className="border px-4 py-2">상세페이지, 배너, SNS 이미지 손쉽게 제작</td>
  <td className="border px-4 py-2">전 셀러</td>
  <td className="border px-4 py-2">무료/유료</td>
  <td className="border px-4 py-2">
    <a href="https://www.canva.com" target="_blank" rel="noreferrer" className="text-blue-600 underline">바로가기</a>
  </td>
</tr>
<tr>
  <td className="border px-4 py-2">미리캔버스</td>
  <td className="border px-4 py-2">템플릿, 로고/상세페이지 제작</td>
  <td className="border px-4 py-2">전 셀러</td>
  <td className="border px-4 py-2">무료</td>
  <td className="border px-4 py-2">
    <a href="https://www.miricanvas.com" target="_blank" rel="noreferrer" className="text-blue-600 underline">바로가기</a>
  </td>
</tr>
<tr>
  <td className="border px-4 py-2">캡컷(CapCut)</td>
  <td className="border px-4 py-2">AI 이미지 합성, 배경 제거, 영상/이미지 편집</td>
  <td className="border px-4 py-2">전 셀러</td>
  <td className="border px-4 py-2">무료</td>
  <td className="border px-4 py-2">
    <a href="https://www.capcut.com" target="_blank" rel="noreferrer" className="text-blue-600 underline">바로가기</a>
  </td>
</tr>


  {/* 마케팅/SNS 관리 */}
  <tr>
    <td className="border px-4 py-2" rowSpan="2">마케팅/SNS 관리</td>
    <td className="border px-4 py-2">Buffer</td>
    <td className="border px-4 py-2">SNS 자동 게시, 예약, 통계 분석</td>
    <td className="border px-4 py-2">전 셀러</td>
    <td className="border px-4 py-2">무료/유료</td>
    <td className="border px-4 py-2"><a href="https://buffer.com" className="text-blue-600 underline" target="_blank" rel="noreferrer">바로가기</a></td>
  </tr>
  <tr>
    <td className="border px-4 py-2">Hootsuite</td>
    <td className="border px-4 py-2">여러 SNS 채널 통합 관리, 예약/통계</td>
    <td className="border px-4 py-2">전 셀러</td>
    <td className="border px-4 py-2">무료/유료</td>
    <td className="border px-4 py-2"><a href="https://www.hootsuite.com" className="text-blue-600 underline" target="_blank" rel="noreferrer">바로가기</a></td>
  </tr>

 
</tbody>

          </table>
        </div>
      </section>

       {/* ✅ 4. 셀러노트 – 도구 섹션 하단 */}
       <section className="mb-16">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-bold text-gray-800">📒 셀러노트</h2>
          {isAdmin && (
            <Link
              to="/admin/sellernote-add"
              className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
            >
              글쓰기
            </Link>
          )}
        </div>
        <p className="text-gray-600 mb-2">
          셀러들이 직접 작성한 판매 전략, 트렌드 분석, 마케팅 팁 등을 모은 정보 공간입니다.
        </p>
        <Link
          to="/sellernote"
          className="text-blue-500 hover:underline text-sm"
        >
          👉 셀러노트 전체 글 보기
        </Link>
      </section>

    </div>
  );
};

export default SellerInfoCenter;

/* --- 카드 및 표용 컴포넌트 모음 --- */

function PolicyCard({ title, description, link }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow border">
      <h3 className="text-lg font-semibold text-blue-700">{title}</h3>
      <p className="text-gray-700 mt-2">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-blue-600 hover:underline text-sm">
        🔗 자세히 보기
      </a>
    </div>
  );
}

function InsightCard({ title, description, children }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow border hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-indigo-700">{title}</h3>
      <p className="text-gray-700 mt-2 mb-2">{description}</p>
      {children}
    </div>
  );
}
