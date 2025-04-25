// src/pages/FlexTestPage.js
import React from "react";

const FlexTestPage = () => {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">Flex 가로 정렬 테스트 ✅</h2>

      {/* 핵심 테스트 */}
      <div className="flex gap-6 text-lg font-semibold bg-blue-100 p-4 rounded">
        <div className="bg-white px-4 py-2 rounded shadow">메뉴 1</div>
        <div className="bg-white px-4 py-2 rounded shadow">메뉴 2</div>
        <div className="bg-white px-4 py-2 rounded shadow">메뉴 3</div>
        <div className="bg-white px-4 py-2 rounded shadow">메뉴 4</div>
      </div>
    </div>
  );
};

export default FlexTestPage;

