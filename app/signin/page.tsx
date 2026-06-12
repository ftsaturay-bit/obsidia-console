"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export default function SignIn() {
  return (
    <div className="flex min-h-screen bg-[#0d0c0b] text-zinc-100 font-sans">
      
      {/* LEFT PANEL - Auth Form */}
      <div className="w-full lg:w-[500px] xl:w-[540px] flex flex-col justify-between px-8 py-10 z-10 shrink-0 bg-[#0d0c0b]">
        
        {/* Header Logo */}
        <div>
          <Link href="/" className="flex items-center gap-2 group w-fit">
            <Image 
              src="/logo2.png" 
              alt="Obsidia Logo" 
              width={24} 
              height={32} 
              className="w-auto h-7 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105" 
            />
            <span className="font-semibold text-white tracking-tight text-lg">obsidia</span>
          </Link>
        </div>

        {/* Main Form Content */}
        <div className="flex flex-col flex-1 justify-center max-w-[380px] w-full mx-auto mt-12 mb-8">
          <div className="mb-8">
            <h1 className="text-2xl font-medium tracking-tight text-zinc-100 mb-1">
              Welcome back
            </h1>
            <p className="text-sm text-zinc-400">
              Sign in to your account
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {/* OAuth Buttons */}
            <button className="flex items-center justify-center gap-3 w-full py-2.5 px-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-md transition-all duration-200 text-sm font-medium text-zinc-300">
              <GoogleIcon />
              Continue with Google
            </button>
            
            {/* Divider */}
            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-px bg-zinc-800"></div>
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">or</span>
              <div className="flex-1 h-px bg-zinc-800"></div>
            </div>

            {/* Email / Password Form */}
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-zinc-300" htmlFor="email">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="you@example.com"
                  className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 rounded-md px-3 py-2 text-sm text-white placeholder:text-zinc-600 outline-none transition-all"
                />
              </div>
              
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-medium text-zinc-300" htmlFor="password">
                    Password
                  </label>
                  <Link href="#" className="text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <input 
                    type="password" 
                    id="password"
                    placeholder="••••••••"
                    className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 rounded-md px-3 py-2 text-sm text-white placeholder:text-zinc-600 outline-none transition-all pr-10 tracking-widest"
                  />
                  <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors">
                    <EyeIcon />
                  </button>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full mt-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-md py-2.5 text-sm font-medium transition-colors shadow-sm"
              >
                Sign in
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-zinc-400">
              Don't have an account? <Link href="#" className="text-white hover:underline underline-offset-4">Sign up</Link>
            </div>
          </div>
        </div>

        {/* Footer legal text */}
        <div className="text-[11px] text-zinc-600 text-center px-4">
          By continuing, you agree to Obsidia's <Link href="#" className="hover:text-zinc-400 underline underline-offset-2">Terms of Service</Link> and <Link href="#" className="hover:text-zinc-400 underline underline-offset-2">Privacy Policy</Link>.
        </div>
      </div>

      {/* RIGHT PANEL - Empty Dark Void */}
      <div className="hidden lg:flex flex-1 relative bg-[#050505] border-l border-white/5 items-center justify-center overflow-hidden">
        {/* Subtle ambient lighting just to make it premium, but functionally empty */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-900/20 via-[#050505] to-[#050505]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#b78a62]/5 blur-[100px] rounded-full pointer-events-none"></div>
      </div>

    </div>
  );
}
