import React from "react";

const SellerInfoCenter = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">
        셀러정보센터
      </h1>

      {/* ✅ 섹션: 유용한 도구 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">유용한 도구 - 택배비 비교</h2>
        <p className="text-gray-600 mb-6">
          주요 택배사의 기본 요금 및 서비스 정보를 비교해보세요.
        </p>

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
              <tr>
                <td className="border px-4 py-2">CJ대한통운</td>
                <td className="border px-4 py-2">3,300원</td>
                <td className="border px-4 py-2">1kg 이하</td>
                <td className="border px-4 py-2">없음</td>
                <td className="border px-4 py-2">가능</td>
                <td className="border px-4 py-2">
                  <a href="https://www.cjlogistics.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    바로가기
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">롯데택배</td>
                <td className="border px-4 py-2">3,500원</td>
                <td className="border px-4 py-2">1kg 이하</td>
                <td className="border px-4 py-2">지역별</td>
                <td className="border px-4 py-2">가능</td>
                <td className="border px-4 py-2">
                  <a href="https://www.lotteglogis.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    바로가기
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">한진택배</td>
                <td className="border px-4 py-2">3,700원</td>
                <td className="border px-4 py-2">1kg 이하</td>
                <td className="border px-4 py-2">지역별</td>
                <td className="border px-4 py-2">가능</td>
                <td className="border px-4 py-2">
                  <a href="https://www.hanjin.co.kr" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    바로가기
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">우체국택배</td>
                <td className="border px-4 py-2">4,000원</td>
                <td className="border px-4 py-2">1kg 이하</td>
                <td className="border px-4 py-2">없음</td>
                <td className="border px-4 py-2">일부</td>
                <td className="border px-4 py-2">
                  <a href="https://parcel.epost.go.kr" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    바로가기
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="mt-12">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">📌 정책 지원 정보</h2>
  <div className="space-y-6">
    <div className="bg-white p-5 rounded-lg shadow border">
      <h3 className="text-lg font-semibold text-blue-700">중소기업유통센터 - 판로 지원사업</h3>
      <p className="text-gray-700 mt-2">
        국내 중소상공인의 유통 판로 개척을 위한 마케팅·온라인 입점 지원 사업입니다. 
        스마트스토어, 쿠팡 등 입점 시 광고비 일부를 지원받을 수 있어요.
      </p>
      <a
        href="https://www.sbiz.or.kr/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 text-blue-600 hover:underline text-sm"
      >
        🔗 자세히 보기
      </a>
    </div>

    <div className="bg-white p-5 rounded-lg shadow border">
      <h3 className="text-lg font-semibold text-blue-700">소상공인시장진흥공단 - 창업 성장 패키지</h3>
      <p className="text-gray-700 mt-2">
        초기 창업자 대상 무료 교육, 마케팅 지원, 전문가 컨설팅 등을 제공합니다.
      </p>
      <a
        href="https://www.semas.or.kr/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 text-blue-600 hover:underline text-sm"
      >
        🔗 자세히 보기
      </a>
    </div>
  </div>
</section>
<section className="mt-12">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">📈 셀링 인사이트</h2>
  <div className="grid gap-6 md:grid-cols-2">
    <div className="bg-white p-5 rounded-lg shadow border">
      <h3 className="text-lg font-semibold text-indigo-700">스마트스토어 상위노출 전략</h3>
      <p className="text-gray-700 mt-2">
        제목 키워드 배치, 이미지 최적화, 카테고리 일치, 태그 세팅 등 알고리즘에 맞춘 상위노출 팁을 소개합니다.
      </p>
      <a
        href="#"
        className="inline-block mt-3 text-indigo-600 hover:underline text-sm"
      >
        🔗 자세히 보기
      </a>
    </div>

    <div className="bg-white p-5 rounded-lg shadow border">
      <h3 className="text-lg font-semibold text-indigo-700">트렌드 상품 빠르게 찾는 법</h3>
      <p className="text-gray-700 mt-2">
        네이버 검색어, 쿠팡 랭킹, 스마트스토어 인기상품, 유튜브 쇼츠 등에서 유행 조짐을 읽는 법!
      </p>
      <a
        href="#"
        className="inline-block mt-3 text-indigo-600 hover:underline text-sm"
      >
        🔗 자세히 보기
      </a>
    </div>
  </div>
</section>
<section className="mt-12 mb-16">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">🎁 셀러 혜택</h2>
  <ul className="grid md:grid-cols-2 gap-4 text-gray-800 text-sm">
    <li className="bg-white p-4 border rounded shadow hover:shadow-md">
      📦 <strong>택배비 할인</strong> – CJ 1,800원~ / 롯데 2,000원~
    </li>
    <li className="bg-white p-4 border rounded shadow hover:shadow-md">
      🏛️ <strong>정부지원</strong> – 초기창업패키지 / 스마트상점 지원사업
    </li>
    <li className="bg-white p-4 border rounded shadow hover:shadow-md">
      🎨 <strong>썸네일 제작 툴</strong> – 무료 디자인툴: <a href="https://www.canva.com/ko_kr/" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">Canva</a>
    </li>
    <li className="bg-white p-4 border rounded shadow hover:shadow-md">
      📹 <strong>셀러 강의</strong> – 유튜브로 배우는 스마트스토어 운영
    </li>
  </ul>
</section>

    </div>
  );
};

export default SellerInfoCenter;
