// src/pages/WholesalerList.js
import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import WholesalerCard from "../components/WholesalerCard";
import CategoryTabs from "../components/CategoryTabs";
import WholesalerCardSkeleton from "../components/WholesalerCardSkeleton";

function WholesalerList() {
  const [wholesalers, setWholesalers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchWholesalers = async () => {
      const q = query(collection(db, "wholesalers"), orderBy("views", "desc"));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setWholesalers(data);
      setLoading(false);
    };
    fetchWholesalers();
  }, []);

  const filteredWholesalers = wholesalers.filter(item => {
    const matchesCategory = selectedCategory === "전체" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <CategoryTabs selected={selectedCategory} onSelect={setSelectedCategory} />
        <input
          type="text"
          placeholder="도매업체 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-72"
        />
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
          {[...Array(10)].map((_, idx) => <WholesalerCardSkeleton key={idx} />)}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
          {filteredWholesalers.map((item) => (
            <WholesalerCard key={item.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default WholesalerList;