// src/components/WholesalerCard.js
import React from "react";

function WholesalerCard({ data = {} }) {
  const {
    name = "이름 없음",
    summary = "설명 없음",
    logoUrl,
    siteUrl,
    category = "카테고리 없음"
  } = data;

  return (
    <a
      href={siteUrl || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="border p-4 rounded shadow hover:shadow-md transition bg-white flex flex-col items-center text-center hover:bg-gray-50"
    >
      <img
        src={logoUrl || "/no-image.jpg"}
        alt={`${name} 로고`}
        className="h-20 object-contain mb-3"
        onError={(e) => {
          const fallback = window.location.origin + "/no-image.jpg";
          if (e.target.src !== fallback) {
            e.target.src = "/no-image.jpg";
          }
        }}
      />

      <h2 className="text-lg font-semibold text-gray-800 mb-1">{name}</h2>

      <span className="text-xs text-white bg-blue-400 px-2 py-1 rounded-full mb-1">
        {category}
      </span>

      <p className="text-sm text-gray-500">
        {summary || '설명이 없습니다.'}
      </p>
    </a>
  );
}

export default WholesalerCard;
