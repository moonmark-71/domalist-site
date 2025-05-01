// src/components/Header.js
import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import LogoutButton from "./LogoutButton";

export default function Header() {
  const { user } = useAuth();

  const baseClass = "transition-colors duration-200 hover:text-indigo-500";
  const activeClass = "text-indigo-600 font-semibold";

  return (
    <header className="bg-white shadow px-4 sm:px-6 py-4 mb-6">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto">
        {/* 로고 */}
        <NavLink to="/" className="text-2xl font-bold text-indigo-600">
          JB도매리스트
        </NavLink>

        {/* 네비게이션 */}
        <nav className="flex gap-6 items-center text-[17px] font-medium">
          <NavLink
            to="/list"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : "text-gray-700"}`
            }
          >
            도매사이트
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : "text-gray-700"}`
            }
          >
            상품 검색
          </NavLink>
          <NavLink
            to="/seller-info"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : "text-gray-700"}`
            }
          >
            셀러정보센터
          </NavLink>
          <NavLink
            to="/article"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : "text-gray-700"}`
            }
          >
            콘텐츠
          </NavLink>

          {/* 정책지원 메뉴 삭제 완료 ✅ */}

          {!user && (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `${baseClass} ${isActive ? activeClass : "text-gray-700"}`
                }
              >
                로그인
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `${baseClass} ${isActive ? activeClass : "text-gray-700"}`
                }
              >
                회원가입
              </NavLink>
            </>
          )}
          {user && <LogoutButton />}
        </nav>
      </div>
    </header>
  );
}
