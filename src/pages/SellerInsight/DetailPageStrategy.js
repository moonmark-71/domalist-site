import React from "react";

export default function DetailPageStrategy() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">
        📌 3. 상세페이지 구성 전략
      </h2>

      <p className="text-gray-800 mb-4">
        스마트스토어에서 상세페이지는 상위노출 지표에는 직접 영향을 주지 않지만, 
        <strong>구매전환율(CTR)</strong>과 <strong>리뷰 수 증가</strong>에 영향을 주며, 결국 상위노출을 도와주는 역할을 합니다.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">✅ 상세페이지 5단 구성 공식</h3>
      <table className="table-auto w-full text-sm text-left border mb-6">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">구간</th>
            <th className="p-2 border">구성 예시</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">① 타겟 어필</td>
            <td className="p-2 border">"30~40대 여성 직장인을 위한 여름 데일리룩"</td>
          </tr>
          <tr>
            <td className="p-2 border">② 문제 공감</td>
            <td className="p-2 border">"에어컨 아래선 춥고, 밖에선 더운 옷 찾기 힘드시죠?"</td>
          </tr>
          <tr>
            <td className="p-2 border">③ 해결 제안</td>
            <td className="p-2 border">"시원한 쿨링 소재 + 세련된 디자인으로 둘 다 해결"</td>
          </tr>
          <tr>
            <td className="p-2 border">④ 신뢰요소</td>
            <td className="p-2 border">"누적 리뷰 1,200개, 재구매율 41%"</td>
          </tr>
          <tr>
            <td className="p-2 border">⑤ CTA 유도</td>
            <td className="p-2 border">"지금 구매 시 무료배송 + 반팔 추가 증정"</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-xl font-semibold mt-6 mb-2">🧑‍💻 실전 적용 예시</h3>
      <div className="bg-gray-50 p-4 border rounded text-gray-800">
        <p className="mb-2 font-semibold">👩‍💼 이런 분께 추천드립니다</p>
        <ul className="list-disc pl-5 mb-4">
          <li>냉방에 민감한 직장인</li>
          <li>땀이 많고 여름철 면티가 불편한 분</li>
        </ul>

        <p className="mb-2 font-semibold">🔥 이런 문제 겪어보셨나요?</p>
        <ul className="list-disc pl-5 mb-4">
          <li>땀에 젖어 무거워진 면티</li>
          <li>에어컨 아래선 오히려 춥고 감기 걸림</li>
        </ul>

        <p className="mb-2 font-semibold">☘️ 이 티셔츠 하나면 끝!</p>
        <ul className="list-disc pl-5 mb-4">
          <li>초경량 쿨링 기능성 원단</li>
          <li>여유로운 핏으로 통기성 강화</li>
        </ul>

        <p className="mb-2 font-semibold">👍 고객 후기</p>
        <p className="mb-4 italic">"작년 여름에도 입었는데 진짜 시원해서 또 샀어요!"</p>

        <p className="mb-2 font-semibold">🎁 구매 혜택</p>
        <p>무료배송 + 추가 할인 쿠폰 제공</p>
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-2">🎨 시각 자료 구성 팁</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-1">
        <li>첫 이미지: 착용 컷 또는 사용 장면 GIF</li>
        <li>중간 설명: 소재 확대 + 특징 아이콘 삽입</li>
        <li>비교표: 타사 상품 대비 강점 이미지 표</li>
        <li>리뷰 강조: 캡처된 후기 또는 별점 시각화</li>
        <li>혜택: 쿠폰 이미지, 증정품 안내 등 강조</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">🛠 추천 툴</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>
          <strong>Canva:</strong> <a className="text-blue-600 underline" href="https://www.canva.com/" target="_blank">상세페이지용 이미지 디자인 도구</a>
        </li>
        <li>
          <strong>미리캔버스:</strong> <a className="text-blue-600 underline" href="https://www.miricanvas.com/" target="_blank">한국형 쇼핑몰 템플릿 제공</a>
        </li>
        <li>
          <strong>Google 스프레드시트:</strong> 비교표 제작 후 이미지로 저장 가능
        </li>
      </ul>
    </section>
  );
}
