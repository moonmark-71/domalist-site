// src/pages/SellerInfoCenter.js
import React from "react";

const SellerInfoCenter = () => {
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
          />
          <InsightCard 
            title="트렌드 상품 빠르게 찾는 법"
            description="네이버, 쿠팡, 유튜브 쇼츠 분석을 통한 인기상품 파악"
          />
        </div>
      </section>

      {/* ✅ 3. 셀러 혜택 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">🎁 셀러 혜택</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-800 text-sm">
          <BenefitItem text="📦 택배비 할인 – CJ 1,800원~, 롯데 2,000원~" />
          <BenefitItem text="💳 셀러 전용 결제 수수료 할인 – 네이버페이, 카카오페이" />
          <BenefitItem text="🎨 무료 썸네일 제작 툴 – Canva 사용" />
          <BenefitItem text="📹 셀러 강의 – 유튜브로 배우는 스마트스토어 운영" />
        </ul>
      </section>

      {/* ✅ 4. 유용한 도구 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">🛠️ 유용한 도구</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-sm border border-gray-300">
            <thead className="bg-gray-100 text-gray-700 font-semibold">
              <tr>
                <th className="border px-4 py-2">택배사</th>
                <th className="border px-4 py-2">기본요금</th>
                <th className="border px-4 py-2">무게 기준</th>
                <th className="border px-4 py-2">지역 추가요금</th>
                <th className="border px-4 py-2">방문수거</th>
                <th className="border px-4 py-2">링크</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <CourierRow courier="CJ대한통운" price="3,300원" weight="1kg 이하" area="없음" pickup="가능" link="https://www.cjlogistics.com" />
              <CourierRow courier="롯데택배" price="3,500원" weight="1kg 이하" area="지역별" pickup="가능" link="https://www.lotteglogis.com" />
              <CourierRow courier="한진택배" price="3,700원" weight="1kg 이하" area="지역별" pickup="가능" link="https://www.hanjin.co.kr" />
              <CourierRow courier="우체국택배" price="4,000원" weight="1kg 이하" area="없음" pickup="일부" link="https://parcel.epost.go.kr" />
            </tbody>
          </table>
        </div>
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

function InsightCard({ title, description }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow border">
      <h3 className="text-lg font-semibold text-indigo-700">{title}</h3>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  );
}

function BenefitItem({ text }) {
  return (
    <li className="bg-white p-4 border rounded shadow hover:shadow-md">
      {text}
    </li>
  );
}

function CourierRow({ courier, price, weight, area, pickup, link }) {
  return (
    <tr>
      <td className="border px-4 py-2">{courier}</td>
      <td className="border px-4 py-2">{price}</td>
      <td className="border px-4 py-2">{weight}</td>
      <td className="border px-4 py-2">{area}</td>
      <td className="border px-4 py-2">{pickup}</td>
      <td className="border px-4 py-2">
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          바로가기
        </a>
      </td>
    </tr>
  );
}
