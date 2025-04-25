// src/components/CategoryTabs.js
import React from "react";

function CategoryTabs({ selected, onSelect }) {
  const categories = [
    "전체", "생활", "식품", "자동차", "디지털/가전",
    "가구/인테리어", "의류", "신발/잡화", "아동/완구",
    "반려/애완", "헬스케어/뷰티", "스포츠/레저"
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-3 py-1 rounded-full text-sm font-medium transition ${
            selected === cat ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-100"
          }`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;
