// src/components/SupportCard.js
import React from "react";

export default function SupportCard({ title, description, link }) {
  return (
    <div className="bg-white border rounded-xl shadow p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-blue-600"
      >
        자세히 보기
      </a>
    </div>
  );
}
