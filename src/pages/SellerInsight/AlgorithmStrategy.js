// src/pages/SellerInsight/AlgorithmStrategy.js
import React from "react";

export default function AlgorithmStrategy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-2xl font-bold mb-6">1. 노출 알고리즘 이해</h1>

      <p className="mb-4">
        스마트스토어에서 상품이 상위에 노출되기 위해서는 네이버의 검색 알고리즘을 이해해야 합니다.
        주로 다음 요소들이 영향을 줍니다:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <strong>CTR (클릭률):</strong> 사용자가 상품 썸네일을 얼마나 클릭했는지를 나타냅니다. 상품명이 눈에 띄고 썸네일이 매력적일수록 클릭률이 높아집니다.
        </li>
        <li>
          <strong>CVR (구매 전환율):</strong> 클릭 후 실제 구매로 이어진 비율입니다. 상세페이지 구성, 가격 경쟁력, 리뷰 등이 영향을 줍니다.
        </li>
        <li>
          <strong>리뷰 수 및 평점:</strong> 리뷰가 많고 평점이 높을수록 네이버는 해당 상품을 신뢰할 수 있는 것으로 판단합니다.
        </li>
        <li>
          <strong>반품률 및 고객응대 품질:</strong> 반품이 적고 Q&A 응답이 빠를수록 품질 높은 스토어로 간주됩니다.
        </li>
        <li>
          <strong>외부 유입 트래픽:</strong> 블로그, 인스타그램, 유튜브 등 외부 채널을 통한 유입은 인기도 지표로 간주되어 상위노출에 도움을 줍니다.
        </li>
      </ul>

      <p>
        이 알고리즘 요소들은 서로 복합적으로 작용하므로, 단순히 키워드만 맞추는 것이 아닌, 전체적인 구매 경험을 향상시키는 방향으로 최적화가 필요합니다.
      </p>
    </div>
  );
}
