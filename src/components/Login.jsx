// Login.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import loginBg from "../assets/bg-login.jpg"; 

const Login = ({ theme }) => {
  const isDark = theme === "dark";
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <form
        className={`w-full max-w-md p-12 rounded shadow-lg ${
          isDark ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <h2 className="mb-6 text-3xl font-bold text-center">Đăng Nhập</h2>

        <div className="mb-4">
          <label className="block mb-1">Tên đăng nhập / Email</label>
          <input
            type="text"
            placeholder="Nhập tên đăng nhập hoặc email"
            className={`w-full p-3 rounded border ${
              isDark
                ? "bg-gray-700 border-gray-600 text-white"
                : "bg-white border-gray-400 text-black"
            }`}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Mật khẩu</label>
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            className={`w-full p-3 rounded border ${
              isDark
                ? "bg-gray-700 border-gray-600 text-white"
                : "bg-white border-gray-400 text-black"
            }`}
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="rememberMe" className="text-sm">
              Remember me
            </label>
          </div>
          <Link to="/forgot-password" className="underline text-sm">
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className={`w-full py-3 rounded ${
            isDark ? "bg-blue-500" : "bg-blue-600"
          } text-white font-bold mb-4`}
        >
          Đăng Nhập
        </button>

        <div className="flex items-center justify-center mb-4">
          <span className="border-b w-1/5 lg:w-1/4"></span>
          <span className="text-xs text-center text-gray-500 uppercase mx-2">
            or
          </span>
          <span className="border-b w-1/5 lg:w-1/4"></span>
        </div>

        <button
          type="button"
          className="w-full py-3 border rounded flex items-center justify-center hover:bg-gray-100 mb-4"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
            <path
              fill="#EA4335"
              d="M24 9.5c3.8 0 6.5 1.6 8 2.9l5.9-5.9C34.8 4.1 29.6 2 24 2 14.3 2 6.6 7.6 3 15l7 5.4C11.9 15.2 17.6 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.2 24.7c0-1.6-.1-3.1-.4-4.7H24v9h12.6a10.8 10.8 0 0 1-4.7 7.1l7.5 5.8c4.3-4 6.8-9.9 6.8-17.2z"
            />
            <path
              fill="#FBBC05"
              d="M10.1 28.2a14.29 14.29 0 0 1 0-8.4l-7-5.4a23.9 23.9 0 0 0 0 19.2l7-5.4z"
            />
            <path
              fill="#34A853"
              d="M24 46c6.5 0 11.9-2.1 15.9-5.7l-7.5-5.8a14.53 14.53 0 0 1-8.4 2.3c-6.4 0-11.9-4.3-13.9-10.1l-7 5.4C6.6 40.4 14.3 46 24 46z"
            />
            <path fill="none" d="M2 2h44v44H2z" />
          </svg>
          Đăng nhập bằng Google
        </button>

        <p className="text-center text-sm">
          Chưa có tài khoản?{" "}
          <Link to="/register" className="underline font-bold">
            Đăng Ký
          </Link>
        </p>
      </form>
    </div>
  );
};

Login.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Login;
