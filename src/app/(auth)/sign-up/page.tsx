"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignUpPage() {
  const [showPwd, setShowPwd] = useState(false);
  const [showPwd2, setShowPwd2] = useState(false);

  return (
    <>
      {/* Heading */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-extrabold text-[#1A1A2E]">
          Create account
        </h1>
        <p className="text-[#6B7280] mt-2 text-sm">
          Start planning. Start winning.
        </p>
      </div>

      {/* Card */}
      <div className="card p-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-[#1A1A2E] mb-1.5">
              Full Name
            </label>
            <input className="inp" type="text" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#1A1A2E] mb-1.5">
              Email
            </label>
            <input
              className="inp"
              type="email"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#1A1A2E] mb-1.5">
              Password
            </label>
            <div className="relative">
              <input
                className="inp pr-10"
                type={showPwd ? "text" : "password"}
                placeholder="Min. 8 characters"
              />
              <button
                type="button"
                onClick={() => setShowPwd(!showPwd)}
                className="absolute right-3 top-3 text-[#9CA3AF] hover:text-[#6C6FDF]"
              >
                <i
                  className={`fa-solid ${showPwd ? "fa-eye-slash" : "fa-eye"} text-sm`}
                ></i>
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#1A1A2E] mb-1.5">
              Confirm Password
            </label>
            <div className="relative">
              <input
                className="inp pr-10"
                type={showPwd2 ? "text" : "password"}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPwd2(!showPwd2)}
                className="absolute right-3 top-3 text-[#9CA3AF] hover:text-[#6C6FDF]"
              >
                <i
                  className={`fa-solid ${showPwd2 ? "fa-eye-slash" : "fa-eye"} text-sm`}
                ></i>
              </button>
            </div>
          </div>
          <Link
            href="/onboarding"
            className="btn btn-primary w-full justify-center py-3 rounded-xl text-sm"
          >
            Create Account
          </Link>
        </div>
        <p className="text-center text-sm text-[#6B7280] mt-6">
          Already have an account?
          <Link
            href="/sign-in"
            className="text-[#6C6FDF] font-semibold hover:underline ml-1"
          >
            Sign In
          </Link>
        </p>
      </div>
    </>
  );
}
