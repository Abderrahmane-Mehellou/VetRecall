import { useState } from "react";
import { Link } from "react-router-dom";
import {FiMail, FiLock, FiEye, FiEyeOff} from "react-icons/fi";
// this is for login page
function RightSideLogin() {
    return (
        <div className="flex justify-between flex-col items-center bg-gray-100 flex-6">
            <Header />
            <Form /> 
            <Footer /> 
        </div>
    )
}

export default RightSideLogin

function Header (){
    return (
        <div className="flex flex-col items-center justify-center-safe pt-10 h-1/4">
            <div className="flex justify-center items-center gap-2">
                <style>
                {`@keyframes float7 {
                0%, 100% { transform: translate(0, 0) rotate(0deg); }
                50%      { transform: translate(10px, -16px) rotate(8deg); }
                }
                .float-7 { animation: float7 2s ease-in-out infinite; }`}
                </style>
                <h1 className="text-4xl font-bold">Welcome back</h1>
                <span className="text-4xl float-7">👋</span>
            </div>
            <p className="text-gray-500 text-l mt-2">Sign in to continue managing your clinic.</p>
        </div>
    );
}

function Form() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col p-10 h-full w-150">
      <div className="w-full h-full bg-white rounded-4xl p-7 flex flex-col justify-center gap-6">
        {/* Title */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Welcome back</h1>
          <p className="text-sm text-gray-400 mt-1">
            Sign in to your clinic account
          </p>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700">Email</label>
          <div className="relative">
            <FiMail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type="email"
              placeholder="you@clinic.com"
              className="w-full h-12 rounded-full bg-gray-100 text-gray-700 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-blue-300 transition-all"
            />
          </div>
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700">Password</label>
          <div className="relative">
            <FiLock
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full h-12 rounded-full bg-gray-100 text-gray-700 pl-10 pr-12 text-sm outline-none focus:ring-2 focus:ring-blue-300 transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              {showPassword ? <FiEye size={16} /> : <FiEyeOff size={16} />}
            </button>
          </div>
        </div>

        {/* Remember me + Forgot password */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-600">
            <input
              type="checkbox"
              className="accent-blue-600 w-4 h-4 rounded-full"
            />
            Remember me
          </label>
          <button className="text-sm text-blue-600 hover:underline cursor-pointer">
            Forgot password?
          </button>
        </div>

        {/* Sign In button */}
        <button className="w-full h-12 rounded-full bg-blue-400 hover:bg-blue-500 text-white font-medium text-sm transition-colors cursor-pointer flex items-center justify-center gap-2">
          Sign In →
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400 font-medium">OR</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Social buttons */}
        <div className="flex flex-col gap-2">
          <button className="w-full h-11 rounded-full border border-gray-200 hover:bg-gray-50 text-sm text-slate-700 font-medium flex items-center justify-center gap-3 cursor-pointer transition-colors">
            <img
              src="https://www.google.com/favicon.ico"
              className="w-4 h-4"
              alt="Google"
            />
            Continue with Google
          </button>
          <button className="w-full h-11 rounded-full border border-gray-200 hover:bg-gray-50 text-sm text-slate-700 font-medium flex items-center justify-center gap-3 cursor-pointer transition-colors">
            <span className="text-base"></span>
            Continue with Apple
          </button>
          <button className="w-full h-11 rounded-full border border-gray-200 hover:bg-gray-50 text-sm text-slate-700 font-medium flex items-center justify-center gap-3 cursor-pointer transition-colors">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
              className="w-4 h-4"
              alt="Microsoft"
            />
            Continue with Microsoft
          </button>
        </div>
      </div>
    </div>
  );
}


function Footer(){
    return (
      <div className="flex justify-between items-center flex-col h-1/4">
        <p>Don't have an account? <Link to="/signup" className="text-blue-600 font-bold">Create one</Link></p>
        <p className="text-gray-600 text-sm mb-3">
          © 2026 VetRecall · Privacy · Terms
        </p>
      </div>
    );
}