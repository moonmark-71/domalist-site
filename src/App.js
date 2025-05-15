// ================================
// 파일: src/App.js
// ================================

import "react-quill/dist/quill.snow.css";
import "react-toastify/dist/ReactToastify.css";
import "react-quill/dist/quill.snow.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// 토스트 알림 컨테이너
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// 레이아웃 및 보호 라우트
import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";

// 일반 사용자 페이지
import HomePage from "./pages/HomePage";
import WholesalerList from "./pages/WholesalerList";
import WholesalerDetail from "./pages/WholesalerDetail";
import SearchPage from "./pages/SearchPage";
import ProductsList from "./pages/ProductsList";
import ProductSearchPage from "./pages/ProductSearchPage";
import SellerInfoCenter from "./pages/SellerInfoCenter";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

// 셀링 인사이트
import AlgorithmStrategy from "./pages/SellerInsight/AlgorithmStrategy";
import KeywordStrategy from "./pages/SellerInsight/KeywordStrategy";
import DetailPageStrategy from "./pages/SellerInsight/DetailPageStrategy";
import ReviewStrategy from "./pages/SellerInsight/ReviewStrategy";
import ExternalTrafficStrategy from "./pages/SellerInsight/ExternalTrafficStrategy";
import PromotionStrategy from "./pages/SellerInsight/PromotionStrategy";
import AdStrategy from "./pages/SellerInsight/AdStrategy";
import TrendStrategy from "./pages/SellerInsight/TrendStrategy";

// 셀러노트
import SellernoteList from "./pages/SellernoteList";
import SellernoteDetail from "./pages/SellernoteDetail";
import AdminAddSellernote from "./pages/AdminAddSellernote";
import AdminEditSellernote from "./pages/AdminEditSellernote";

// 인증 관련
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminLogin from "./pages/AdminLogin";

// 관리자 전용 페이지
import AdminPanel from "./pages/AdminPanel";
import AdminAddWholesaler from "./pages/AdminAddWholesaler";
import AdminAddProduct from "./pages/AdminAddProduct";
import CategoryCleaner from "./pages/CategoryCleaner";

function App() {
  return (
    <Router>
      <MainLayout>
        {/* Toast 알림 컨테이너 */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
        />

        <Routes>
          {/* 메인 → 무조건 /list로 이동 */}
          <Route path="/" element={<Navigate to="/list" replace />} />

          {/* 일반 사용자 */}
          <Route path="/list" element={<WholesalerList />} />
          <Route path="/wholesaler/:id" element={<WholesalerDetail />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/external-products" element={<ProductSearchPage />} />
          <Route path="/seller-info" element={<SellerInfoCenter />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />

          {/* 셀링 인사이트 */}
          <Route path="/sellinginsight/algorithm-strategy" element={<AlgorithmStrategy />} />
          <Route path="/sellinginsight/keyword-strategy" element={<KeywordStrategy />} />
          <Route path="/sellinginsight/detailpage-strategy" element={<DetailPageStrategy />} />
          <Route path="/sellinginsight/review-strategy" element={<ReviewStrategy />} />
          <Route path="/sellinginsight/traffic-strategy" element={<ExternalTrafficStrategy />} />
          <Route path="/sellinginsight/promotion-strategy" element={<PromotionStrategy />} />
          <Route path="/sellinginsight/ad-strategy" element={<AdStrategy />} />
          <Route path="/sellinginsight/trend-strategy" element={<TrendStrategy />} />

          {/* 셀러노트 */}
          <Route path="/sellernote" element={<SellernoteList />} />
          <Route path="/sellernote/:id" element={<SellernoteDetail />} />
          <Route
            path="/admin/sellernote-add"
            element={
              <ProtectedRoute>
                <AdminAddSellernote />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/sellernote-edit/:id"
            element={
              <ProtectedRoute>
                <AdminEditSellernote />
              </ProtectedRoute>
            }
          />

          {/* 인증 */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin-login" element={<AdminLogin />} />

          {/* 관리자 패널 */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminPanel />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/add"
            element={
              <ProtectedRoute>
                <AdminAddWholesaler />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/add-product"
            element={
              <ProtectedRoute>
                <AdminAddProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/clean-categories"
            element={
              <ProtectedRoute>
                <CategoryCleaner />
              </ProtectedRoute>
            }
          />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
