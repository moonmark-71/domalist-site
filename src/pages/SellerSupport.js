// src/pages/SellerSupport.js
import React from "react";

const SellerSupport = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* 🔧 유용한 도구 */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-2">🔧 유용한 도구 - 택배비 비교</h2>
        <p className="text-sm text-gray-600 mb-4">주요 택배사의 기본 요금 및 서비스 정보를 비교해보세요.</p>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border">택배사</th>
                <th className="px-4 py-2 border">기본요금</th>
                <th className="px-4 py-2 border">무게 기준</th>
                <th className="px-4 py-2 border">지역 추가요금</th>
                <th className="px-4 py-2 border">방문수거</th>
                <th className="px-4 py-2 border">링크</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">CJ대한통운</td>
                <td className="px-4 py-2 border">3,300원</td>
                <td className="px-4 py-2 border">1kg 이하</td>
                <td className="px-4 py-2 border">없음</td>
                <td className="px-4 py-2 border">가능</td>
                <td className="px-4 py-2 border text-blue-500 underline cursor-pointer">바로가기</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">롯데택배</td>
                <td className="px-4 py-2 border">3,500원</td>
                <td className="px-4 py-2 border">1kg 이하</td>
                <td className="px-4 py-2 border">지역별</td>
                <td className="px-4 py-2 border">가능</td>
                <td className="px-4 py-2 border text-blue-500 underline cursor-pointer">바로가기</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">한진택배</td>
                <td className="px-4 py-2 border">3,700원</td>
                <td className="px-4 py-2 border">1kg 이하</td>
                <td className="px-4 py-2 border">지역별</td>
                <td className="px-4 py-2 border">가능</td>
                <td className="px-4 py-2 border text-blue-500 underline cursor-pointer">바로가기</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">우체국택배</td>
                <td className="px-4 py-2 border">4,000원</td>
                <td className="px-4 py-2 border">1kg 이하</td>
                <td className="px-4 py-2 border">없음</td>
                <td className="px-4 py-2 border">일부</td>
                <td className="px-4 py-2 border text-blue-500 underline cursor-pointer">바로가기</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 💼 셀러를 위한 정책지원 정보 */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-2">💼 셀러를 위한 정책지원 정보</h2>
        <p className="text-sm text-gray-600 mb-4">
          정부, 지자체, 민간기관이 제공하는 셀러 대상 지원 정책을 한눈에 확인해보세요.
        </p>
        <ul className="space-y-2 text-sm text-gray-800 list-disc list-inside">
          <li>🔹 <span className="font-medium">중소벤처기업부 스마트스토어 창업 지원</span></li>
          <li>🔹 <span className="font-medium">서울시 소상공인 온라인 판로지원</span></li>
          <li>🔹 <span className="font-medium">네이버 파트너스퀘어 교육 프로그램</span></li>
        </ul>
      </section>
    </div>
  );
};

export default SellerSupport;
