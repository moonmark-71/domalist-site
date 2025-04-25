import React from "react";
import useExternalProducts from "../hooks/useExternalProducts";
import ExternalProductCard from "../components/ExternalProductCard";

function ExternalProductSection() {
  const products = useExternalProducts();

  return (
    <div className="px-4 py-8">
      <h2 className="text-xl font-bold mb-4">🔥 도매꾹 인기상품 추천</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ExternalProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default ExternalProductSection;
