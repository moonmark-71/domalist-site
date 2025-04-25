import React from "react";

function ProductCard({ product, onDelete }) {
  return (
    <div className="bg-white border rounded p-4 shadow-md mb-4">
      <div className="text-xl font-semibold mb-1">{product.name}</div>
      <div className="text-sm text-gray-500 mb-2">가격: {product.price}원</div>
      <div className="text-xs text-blue-600 mb-2 break-all">
        <a href={product.siteUrl} target="_blank" rel="noopener noreferrer">
          {product.siteUrl}
        </a>
      </div>

      {/* ✅ 삭제 버튼: onDelete가 있을 때만 표시 */}
      {onDelete && (
        <button
          onClick={() => onDelete(product.id)}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          삭제
        </button>
      )}
    </div>
  );
}

export default ProductCard;
