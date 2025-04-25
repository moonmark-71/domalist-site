// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 일반 사용자 페이지
import HomePage from "./pages/HomePage";
import WholesalerList from "./pages/WholesalerList";
import WholesalerDetail from "./pages/WholesalerDetail";
import ArticlePage from "./pages/ArticlePage";
import SearchPage from "./pages/SearchPage";
import ProductsList from "./pages/ProductsList";
import ProductSearchPage from "./pages/ProductSearchPage";
import SellerInfoCenter from "./pages/SellerInfoCenter";
import SellerSupport from "./pages/SellerSupport";

// 인증 관련
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// 도매업체용 상품 등록/수정
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

// 관리자 전용 페이지
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";
import AdminAddWholesaler from "./pages/AdminAddWholesaler";
import AdminAddProduct from "./pages/AdminAddProduct";
import CategoryCleaner from "./pages/CategoryCleaner";

// 레이아웃 및 보호 라우트
import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          {/* 메인 */}
          <Route path="/" element={<HomePage />} />

          {/* 도매업체 정보 */}
          <Route path="/list" element={<WholesalerList />} />
          <Route path="/wholesaler/:id" element={<WholesalerDetail />} />

          {/* 콘텐츠 및 정보 */}
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/external-products" element={<ProductSearchPage />} />
          <Route path="/seller-info" element={<SellerInfoCenter />} />
          <Route path="/seller-support" element={<SellerSupport />} />

          {/* 로그인/회원가입 */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* 도매업체 전용 기능 */}
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />

          {/* 관리자 기능 */}
          <Route path="/admin-login" element={<AdminLogin />} />
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
