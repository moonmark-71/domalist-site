// src/pages/HomePage.js
import React, { useState } from "react";
import useWholesalers from "../hooks/useWholesalers";
import ViewToggle from "../components/ViewToggle";
import CategoryTabs from "../components/CategoryTabs";
import WholesalerCard from "../components/WholesalerCard";

function HomePage() {
  const [view, setView] = useState("grid");
  const [cat, setCat] = useState(null);
  const [kw, setKw] = useState("");

  const raw = useWholesalers(cat);
  const data = kw
    ? raw.filter(
        (w) =>
          w.name.toLowerCase().includes(kw.toLowerCase()) ||
          (w.summary && w.summary.toLowerCase().includes(kw.toLowerCase()))
      )
    : raw;

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-8">
      <section className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
          국내 도매 · 위탁 판매처를 <br className="sm:hidden" />한눈에!
        </h1>
        <p className="mt-3 text-gray-600">
          카테고리·혜택·정책 비교하고, 바로 방문해 보세요.
        </p>
      </section>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <input
          value={kw}
          onChange={(e) => setKw(e.target.value)}
          placeholder="업체명 검색"
          className="border px-3 py-1 rounded-md w-full sm:w-60"
        />
        <ViewToggle view={view} setView={setView} />
      </div>

      <CategoryTabs selected={cat} onSelect={setCat} />

      <section
        className={
          view === "grid"
            ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-4"
            : "flex flex-col gap-4 mt-4"
        }
      >
        {data.map((w) => (
          <WholesalerCard key={w.id} data={w} />
        ))}
      </section>
    </div>
  );
}

export default HomePage;
