import React, { useState } from "react";
import useExternalProducts from "../hooks/useExternalProducts";
import ExternalProductCard from "../components/ExternalProductCard";

function ProductSearchPage() {
  const [kw, setKw] = useState("");
  const allProducts = useExternalProducts();

  const filtered = kw
    ? allProducts.filter((p) =>
        p.title.toLowerCase().includes(kw.toLowerCase())
      )
    : allProducts;

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">🔥 도매꾹 인기상품 검색</h1>

      <input
        value={kw}
        onChange={(e) => setKw(e.target.value)}
        placeholder="상품명 입력"
        className="border px-4 py-2 rounded mb-6 w-full md:w-96"
      />

      {filtered.length === 0 ? (
        <p className="text-gray-500">검색 결과가 없습니다.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <ExternalProductCard key={p.id} {...p} />
          ))}
        </div>
      )}
    </main>
  );
}

export default ProductSearchPage;
