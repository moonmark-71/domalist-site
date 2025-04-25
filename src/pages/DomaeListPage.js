/* -------------------------------------------------------------
   src/pages/DomaeListPage.js
   ------------------------------------------------------------- */
   import React, { useState } from "react";

   import useWholesalers           from "../hooks/useWholesalers";
   import ViewToggle               from "../components/ViewToggle";
   import CategoryTabs             from "../components/CategoryTabs";
   import LogoBox                  from "../components/LogoBox";
   import WholesalerCard           from "../components/WholesalerCard";
   import LogoBoxSkeleton          from "../components/LogoBoxSkeleton";
   import WholesalerCardSkeleton   from "../components/WholesalerCardSkeleton";
   
   function DomaeListPage() {
     /* --------------- 상태 ---------------- */
     const [view, setView] = useState("grid");  // 'grid' | 'list'
     const [cat,  setCat]  = useState(null);    // null ⇒ 전체
     const [kw,   setKw]   = useState("");      // 검색 키워드
   
     /* --------------- 데이터 -------------- */
     const raw  = useWholesalers(cat);          // 카테고리 필터
     const data = kw
       ? raw.filter(
           (w) =>
             w.name.includes(kw) ||
             (w.summary && w.summary.includes(kw))
         )
       : raw;                                   // 검색 필터
   
     /* --------------- 렌더링 -------------- */
     return (
       <main className="max-w-6xl mx-auto px-4 py-8">
         {/* 페이지 제목 */}
         <h1 className="text-xl font-bold mb-4">도매 사이트 모음</h1>
   
         {/* ▼ 툴바 : 검색창 + 토글버튼 */}
         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
           <input
             value={kw}
             onChange={(e) => setKw(e.target.value)}
             placeholder="업체명 검색"
             className="border px-3 py-1 rounded-md w-full sm:w-60"
           />
           <ViewToggle view={view} setView={setView} />
         </div>
   
         {/* ▼ 카테고리 탭 */}
         <CategoryTabs selectedCat={cat} setSelectedCat={setCat} />
   
         {/* ▼ 카드 / 로고 영역 */}
         <section
           className={
             view === "grid"
               ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-4"
               : "flex flex-col gap-4 mt-4"
           }
         >
           {/* 데이터 없으면 Skeleton, 있으면 실제 카드 */}
           {data.length === 0
             ? Array.from({ length: 10 }).map((_, i) =>
                 view === "grid" ? (
                   <LogoBoxSkeleton key={i} />
                 ) : (
                   <WholesalerCardSkeleton key={i} />
                 )
               )
             : data.map((w) =>
                 view === "grid" ? (
                   <LogoBox key={w.id} w={w} />
                 ) : (
                   <WholesalerCard key={w.id} w={w} />
                 )
               )}
         </section>
       </main>
     );
   }
   
   export default DomaeListPage;
   