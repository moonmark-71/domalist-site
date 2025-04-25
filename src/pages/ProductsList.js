// src/pages/ProductsList.js
import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  orderBy,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../hooks/useAuth";
import useExternalProducts from "../hooks/useExternalProducts";
import ExternalProductCard from "../components/ExternalProductCard";
import { Link } from "react-router-dom";

function ProductCard({ product, onDelete }) {
  const { user } = useAuth();

  return (
    <div className="relative border rounded shadow hover:shadow-md p-3 bg-white transition duration-200">
      <a
        href={product.siteUrl || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <img
          src={product.imageUrl || "/no-image.jpg"}
          alt={product.name}
          className="h-40 w-full object-cover rounded mb-2"
          onError={(e) => {
            if (e.target.src !== window.location.origin + "/no-image.jpg") {
              e.target.src = "/no-image.jpg";
            }
          }}
        />
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{product.summary}</p>
        {product.price && (
          <p className="text-blue-500 font-bold mt-2">
            {product.price.toLocaleString()}원
          </p>
        )}
      </a>

      {user && user.uid === product.createdBy && (
        <>
          <button
            onClick={() => onDelete(product.id)}
            className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm"
          >
            ❌
          </button>
          <Link
            to={`/edit/${product.id}`}
            className="absolute top-2 right-10 text-blue-500 hover:text-blue-700 text-sm"
          >
            ✏️
          </Link>
        </>
      )}
    </div>
  );
}

function ProductsList() {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const externalProducts = useExternalProducts();

  useEffect(() => {
    const fetchProducts = async () => {
      const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    const product = products.find((p) => p.id === id);
    if (!product || product.createdBy !== user?.uid) {
      alert("삭제 권한이 없습니다.");
      return;
    }

    const confirmDelete = window.confirm("정말 삭제하시겠습니까?");
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "products", id));
      setProducts(products.filter((p) => p.id !== id));
      alert("삭제 완료!");
    } catch (err) {
      console.error("삭제 실패:", err);
      alert("삭제 중 오류 발생");
    }
  };

  const filteredInternal = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredExternal = externalProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">🔍 상품 검색</h2>
      <input
        type="text"
        placeholder="상품명을 입력하세요"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border px-4 py-2 rounded mb-6 w-full md:w-96"
      />

      {loading ? (
        <p>로딩 중...</p>
      ) : (
        <>
          {user && (
            <div className="flex justify-end mb-4">
              <Link
                to="/add"
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
              >
                + 상품 등록
              </Link>
            </div>
          )}

          {filteredInternal.length > 0 && (
            <>
              <h3 className="text-xl font-semibold mb-2">📦 입점 도매업체 상품
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
                {filteredInternal.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onDelete={user && product.createdBy === user.uid ? handleDelete : null}
                  />
                ))}
              </div>
            </>
          )}

          {filteredExternal.length > 0 && (
            <>
              <h3 className="text-xl font-semibold mb-2">🔥 도매꿙 인기상품</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredExternal.map((product) => (
                  <ExternalProductCard key={product.id} {...product} />
                ))}
              </div>
            </>
          )}

          {filteredInternal.length === 0 && filteredExternal.length === 0 && (
            <p className="text-center text-gray-500">검색 결과가 없습니다.</p>
          )}
        </>
      )}
    </div>
  );
}

export default ProductsList;
